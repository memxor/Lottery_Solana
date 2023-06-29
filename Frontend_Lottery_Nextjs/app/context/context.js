import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { BN } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { getLotteryAddress, getMasterAddress, getProgram, getTicketAddress, getTotalPrize } from "../utils/program";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { confirmTx, mockWallet } from "../utils/helper";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => 
{
  const [masterAddress, setMasterAddress] = useState();
  const [lotteryAddress, setLotteryAddress] = useState();
  const [initialized, setInitialized] = useState(false);
  const [lotteryId, setLotteryId] = useState();
  const [lotteryPot, setLotteryPot] = useState(0);
  const [lottery, setLottery] = useState();
  const [winningID, setWinningID] = useState(null);
  const [lotteryHistory, setLotteryHistory] = useState([]);

  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const program = useMemo(() => {
    if(connection) return getProgram(connection, wallet ?? mockWallet());
  }, [connection, wallet]);

  useEffect(() => {
    updateState();
  }, [program]);

  useEffect(() => {
    if(!lottery) return;
    getPot();
    getHistory();
  }, [lottery]);

  const updateState = async () => 
  {
    if(!program) return;

    try
    {
      if(!masterAddress)
      {
        setMasterAddress(getMasterAddress());
      }
      const master = await program.account.master.fetch(masterAddress);
      setLotteryId(master.lastLotteryId);
      setLotteryAddress(getLotteryAddress(lotteryId));
      const lottery = await program.account.lottery.fetch(lotteryAddress);
      setLottery(lottery);
      setInitialized(true);
      if(!wallet?.publicKey) return;
      const userTicket = await program.account.ticket.all();

      const winner = userTicket.some((ticket) => ticket.account.id === lottery.winnerId);
      if(winner)
      {
        setWinningID(lottery.winnerId);
      }
      else
      {
        setWinningID(null);
      }
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const getPot = async() => 
  {
    setLotteryPot(getTotalPrize(lottery));
  }

  const getHistory = async () => 
  {
    if(!lotteryId) return;

    const history = [];

    for(const i in new Array(lotteryId).fill(null))
    {
      const id = lotteryId - parseInt(i);
      if(!id) break;

      const lotteryAddress = getLotteryAddress(id);
      const lottery = await program.account.lottery.fetch(lotteryAddress);
      const winnerId = lottery.winnerId;
      if(!winnerId) continue;

      const ticketAddress = await getTicketAddress(lotteryAddress, winnerId);
      const ticket = await program.account.ticket.fetch(ticketAddress);

      history.push({ lotteryId: id, winnerId: winnerId, winnerAddress: ticket.buyer, prize: getTotalPrize(lottery) });
    }

    setLotteryHistory(history);
  }

  const initMaster = async () => 
  {
    try
    {
      const txHash = await program.methods.initMaster().rpc();
      await confirmTx(txHash, connection);
      updateState();
      toast.success("Initialized Master!");
    }
    catch(err)
    {
      console.log(err.message);
      toast.error(err.message);
    }
  }

  const createLottery = async () => 
  {
    try
    {
      setLotteryAddress(getLotteryAddress(lotteryId + 1));
      const txHash = await program.methods.createLottery(new BN(1).mul(new BN(LAMPORTS_PER_SOL))).accounts({
        lotteryAccount: getLotteryAddress(lotteryId + 1)
      }).rpc();
      await confirmTx(txHash, connection);
      updateState();
      toast.success("Lottery Created!");
    }
    catch(err)
    {
      console.log(err.message);
      toast.error(err.message);
    }
  }

  const buyTicket = async () => 
  {
    try
    {
      setLotteryAddress(getLotteryAddress(lotteryId));
      const txHash = await program.methods.buyTicket().accounts({
        lotteryAccount: getLotteryAddress(lotteryId),
        ticketAccount: await getTicketAddress(lotteryAddress, lottery.lastTicketId + 1)
      }).rpc();
      await confirmTx(txHash, connection);
      updateState();
      toast.success("You are in!");
    }
    catch(err)
    {
      console.log(err.message);
      toast.error(err.message);
    }
  }

  const pickWinner = async () => 
  {
    try
    {
      const txHash = await program.methods.pickWinner().accounts({
        lotteryAccount: lotteryAddress
      }).rpc();
      await confirmTx(txHash, connection);
      updateState();
      toast.success("Winner as been choosen!");
    }
    catch(err)
    {
      console.log(err.message);
      toast.error(err.message);
    }
  }

  const claimPrize = async () => 
  {
    try
    {
      const txHash = await program.methods.claimPrize().accounts({
        lotteryAccount: lotteryAddress,
        ticketAccount: await getTicketAddress(lotteryAddress, winningID)
      }).rpc();
      await confirmTx(txHash, connection);
      updateState();
      toast.success("Prize claimed!");
    }
    catch(err)
    {
      console.log(err.message);
      toast.error(err.message);
    }
  }

  return (
    <AppContext.Provider
      value={{
        connected: wallet?.publicKey ? true : false,
        isMasterInitialized: initialized,
        lotteryId,
        lotteryPot,
        isLotteryAuthority: wallet && lottery && wallet.publicKey.equals(lottery.authority),
        isFinished: lottery && lottery.winnerId,
        canClaim: lottery && !lottery.claimed && winningID,
        lotteryHistory,
        initMaster,
        createLottery,
        buyTicket,
        pickWinner,
        claimPrize
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};