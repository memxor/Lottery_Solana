import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Backed } from "../target/types/backed";
import { expect } from "chai";

describe("backed", () => {
  let provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  let lastLotteryId = 0;
  let lastTicketId = 0;
  let lotteryId = 0;

  const program = anchor.workspace.Backed as Program<Backed>;
  const [masterPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("master")], program.programId);

  it("Initialize Master!", async () => 
  {
    await program.methods.initMaster().rpc();
    
    const master = await program.account.master.fetch(masterPDA);

    expect(master.lastLotteryId).eq(0);
    lastLotteryId = master.lastLotteryId;
  });

  it("Create Lottery!", async () => 
  {
    const [lotteryPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("lottery"), Buffer.from(`${lastLotteryId + 1}`)], program.programId);

    await program.methods.createLottery(new anchor.BN(1)).accounts({lotteryAccount: lotteryPDA}).rpc();
    console.log(lastLotteryId + 1);
    console.log(program.programId);
    const lottery = await program.account.lottery.fetch(lotteryPDA);

    expect(lottery.claimed).eq(false);
    expect(lottery.id).eq(lastLotteryId + 1);
    expect(lottery.lastTicketId).eq(0);
    expect(lottery.ticketPrice.toNumber()).eq(1);
    expect(lottery.winnerId).eq(null);
    lastTicketId = lottery.lastTicketId;
    lotteryId = lottery.id;
  });

  it("Buy Ticket!", async () => 
  {
    const [lotteryPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("lottery"), Buffer.from(`${lastLotteryId + 1}`)], program.programId);
    const [ticketPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ticket"), lotteryPDA.toBuffer(), Buffer.from(`${lastTicketId + 1}`)], 
    program.programId);

    await program.methods.buyTicket().accounts({
      lotteryAccount: lotteryPDA,
      ticketAccount: ticketPDA
    }).rpc();
    
    const ticket = await program.account.ticket.fetch(ticketPDA);

    expect(ticket.id).eq(lastTicketId + 1);
    expect(ticket.lotteryId).eq(lotteryId);
  });

  it("Pick Winner!", async () => 
  {
    const [lotteryPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("lottery"), Buffer.from(`${lastLotteryId + 1}`)], program.programId);

    await program.methods.pickWinner().accounts({
      lotteryAccount: lotteryPDA
    }).rpc();
    
    const lottery = await program.account.lottery.fetch(lotteryPDA);

    console.log(lottery.winnerId);
  });

  it("Claim Prize!", async () => 
  {
    const [lotteryPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("lottery"), Buffer.from(`${lastLotteryId + 1}`)], program.programId);
    const [ticketPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("ticket"), lotteryPDA.toBuffer(), Buffer.from(`${lastTicketId + 1}`)], 
    program.programId);


    await program.methods.claimPrize().accounts({
      lotteryAccount: lotteryPDA,
      ticketAccount: ticketPDA
    }).rpc();
    
    const lottery = await program.account.lottery.fetch(lotteryPDA);
    expect(lottery.claimed).eq(true);
  });
});
