import { AnchorProvider, BN, Program } from "@project-serum/anchor";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

import IDL from "./idl";
import {
  LOTTERY_SEED,
  MASTER_SEED,
  PROGRAM_ID,
  TICKET_SEED,
} from "./constants";

export const getProgram = (connection, wallet) => 
{
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });
  const program = new Program(IDL, PROGRAM_ID, provider);
  return program;
};

export const getMasterAddress = () => 
{
  return (
    PublicKey.findProgramAddressSync([Buffer.from(MASTER_SEED)], PROGRAM_ID)
  )[0];
};

export const getLotteryAddress = (id) => 
{
  return (
    PublicKey.findProgramAddressSync(
      [Buffer.from(LOTTERY_SEED), Buffer.from(`${id}`)], PROGRAM_ID)
  )[0];
};

export const getTicketAddress = async (lotteryPk, id) => 
{
  return (
    PublicKey.findProgramAddressSync([Buffer.from(TICKET_SEED), lotteryPk.toBuffer(), Buffer.from(`${id}`)], PROGRAM_ID)
  )[0];
};

export const getTotalPrize = (lottery) => {
  return ((lottery.lastTicketId * lottery.ticketPrice) / LAMPORTS_PER_SOL).toString();
};
