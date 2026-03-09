import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import type { ProofOfStudy } from "../target/types/proof_of_study";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.ProofOfStudy as anchor.Program<ProofOfStudy>;


const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.ProofOfStudy;

async function addStudyHours(account, hours) {

 await program.methods
   .addHours(hours)
   .accounts({
     studyAccount: account,
   })
   .rpc();

 console.log("Horas agregadas");
}