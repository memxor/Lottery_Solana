use anchor_lang::prelude::*;
use anchor_lang::system_program::*;
use anchor_lang::solana_program::hash::hash;

declare_id!("2dpGGjjwZVpVbscr5EN3tpgjbzbmyHApm4L2LGXNRGDF");

#[program]
pub mod backed 
{
    use super::*;

    pub fn init_master(ctx: Context<InitMaster>) -> Result<()> 
    {
        ctx.accounts.master_account.last_lottery_id = 0;
        Ok(())
    }

    pub fn create_lottery(ctx: Context<CreateLottery>, ticket_price: u64) -> Result<()> 
    {
        let master_account = &mut ctx.accounts.master_account;
        let lottery_account = &mut ctx.accounts.lottery_account;

        master_account.last_lottery_id = master_account.last_lottery_id.checked_add(1).unwrap();
        
        lottery_account.id = master_account.last_lottery_id;
        lottery_account.authority = ctx.accounts.user.key();
        lottery_account.ticket_price = ticket_price;
        lottery_account.claimed = false;

        Ok(())
    }

    pub fn buy_ticket(ctx: Context<BuyTicket>) -> Result<()> 
    {
        let lottery_account = &mut ctx.accounts.lottery_account;
        let ticket_account = &mut ctx.accounts.ticket_account;
        let buyer = &mut ctx.accounts.buyer;

        require!(lottery_account.winner_id.is_none(), LotteryError::WinnerAlreadyExists);

        lottery_account.last_ticket_id = lottery_account.last_ticket_id.checked_add(1).unwrap();

        let cpi_program = ctx.accounts.system_program.to_account_info();
        let cpi_account = Transfer 
        { 
            from: buyer.to_account_info(), 
            to: lottery_account.to_account_info()
        };

        let sol_transfer_context = CpiContext::new(cpi_program, cpi_account);
        transfer(sol_transfer_context, lottery_account.ticket_price)?;

        ticket_account.id = lottery_account.last_ticket_id;
        ticket_account.lottery_id = lottery_account.id;
        ticket_account.buyer = buyer.key();

        Ok(())
    }

    pub fn pick_winner(ctx: Context<PickWinner>) -> Result<()> 
    {
        let lottery_account = &mut ctx.accounts.lottery_account;

        require!(lottery_account.winner_id.is_none(), LotteryError::WinnerAlreadyExists);
        require!(lottery_account.last_ticket_id != 0, LotteryError::NoTickets);

        let clock = Clock::get()?;
        let pseudo_random_number = ((u64::from_le_bytes(
            <[u8;8]>::try_from(&hash(&clock.unix_timestamp.to_be_bytes()).to_bytes()[..8]).unwrap()
        ) / clock.slot) % u32::MAX as u64) as u32;

        let winner_id = (pseudo_random_number % lottery_account.last_ticket_id) + 1;
        lottery_account.winner_id = Some(winner_id); 

        Ok(())
    }

    pub fn claim_prize(ctx: Context<ClaimPrize>) -> Result<()> 
    {
        let lottery_account = &mut ctx.accounts.lottery_account;
        let ticket_account = &ctx.accounts.ticket_account;
        let winner = &ctx.accounts.authority;

        require!(!lottery_account.claimed, LotteryError::AlreadyClaimed);

        match lottery_account.winner_id {
            Some(winner_id) =>
            {
                require!(winner_id == ticket_account.id, LotteryError::InvalidWinner)
            }
            None => return err!(LotteryError::WinnerNotChoosen)
        }

        let prize = lottery_account.ticket_price.checked_mul(lottery_account.last_ticket_id.into()).unwrap();

        **lottery_account.to_account_info().try_borrow_mut_lamports()? -= prize;
        **winner.to_account_info().try_borrow_mut_lamports()? += prize;

        lottery_account.claimed = true;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitMaster<'info>
{
    #[account(init, payer = user, seeds = [b"master"], bump, space = 8 + 4)]
    pub master_account: Account<'info, Master>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
pub struct CreateLottery<'info>
{
    #[account(mut, seeds = [b"master"], bump)]
    pub master_account: Account<'info, Master>,

    #[account(init, payer = user, seeds = ["lottery".as_ref(), (master_account.last_lottery_id + 1).to_string().as_ref()], bump, 
    space = 8 + 4 + 32 + 8 + 4 + 8 + 1)]
    pub lottery_account: Account<'info, Lottery>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
pub struct BuyTicket<'info>
{
    #[account(mut, seeds = ["lottery".as_ref(), (lottery_account.id).to_string().as_ref()], bump)]
    pub lottery_account: Account<'info, Lottery>,

    #[account(init, payer = buyer, seeds = ["ticket".as_ref(), lottery_account.key().as_ref(), (lottery_account.last_ticket_id + 1).to_string().as_ref()], 
    bump, space = 8 + 4 + 32 + 8 + 4 + 8 + 1)]
    pub ticket_account: Account<'info, Ticket>,

    #[account(mut)]
    pub buyer: Signer<'info>,

    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
pub struct PickWinner<'info>
{
    #[account(mut, seeds = ["lottery".as_ref(), (lottery_account.id).to_string().as_ref()], bump, has_one = authority)]
    pub lottery_account: Account<'info, Lottery>,

    #[account(mut)]
    pub authority: Signer<'info>
}

#[derive(Accounts)]
pub struct ClaimPrize<'info>
{
    #[account(mut, seeds = ["lottery".as_ref(), (lottery_account.id).to_string().as_ref()], bump)]
    pub lottery_account: Account<'info, Lottery>,

    #[account(mut, seeds = ["ticket".as_ref(), lottery_account.key().as_ref(), (lottery_account.winner_id.unwrap()).to_string().as_ref()], bump,
    constraint = ticket_account.buyer == authority.key())]
    pub ticket_account: Account<'info, Ticket>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>
}

#[account]
pub struct Master
{
    pub last_lottery_id: u32
}

#[account]
pub struct Lottery
{
    pub id: u32,
    pub authority: Pubkey,
    pub ticket_price: u64,
    pub last_ticket_id: u32,
    pub winner_id: Option<u32>,
    pub claimed: bool
}

#[account]
pub struct Ticket
{
    pub id: u32,
    pub buyer: Pubkey,
    pub lottery_id: u32
}

#[error_code]
pub enum LotteryError
{
    #[msg("Winner Already exist!")]
    WinnerAlreadyExists,
    #[msg("Can't get winner, when no tickets are bought!")]
    NoTickets,
    #[msg("Winner has not been chosen.")]
    WinnerNotChoosen,
    #[msg("Invalid Winner!")]
    InvalidWinner,
    #[msg("The price has already been claimed!")]
    AlreadyClaimed
}