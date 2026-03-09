import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import type { ProofOfStudy } from "../target/types/proof_of_study";

describe("proof-of-study", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ProofOfStudy as anchor.Program<ProofOfStudy>;
  

 const provider = anchor.AnchorProvider.env();
 anchor.setProvider(provider);

 const program = anchor.workspace.ProofOfStudy as any;

 const studyAccount = anchor.web3.Keypair.generate();

 it("Initialize account", async () => {

   await program.methods.initialize()
   .accounts({
     studyAccount: studyAccount.publicKey,
     user: provider.wallet.publicKey,
     systemProgram: anchor.web3.SystemProgram.programId,
   })
   .signers([studyAccount])
   .rpc();

 });

});