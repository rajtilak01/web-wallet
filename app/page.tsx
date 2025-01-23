'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "@/components/SolanaWallet";
import { EthWallet } from "@/components/EthWallet";

export default function Home() {
  const [mnemonic, setMnemonic] = useState("");
  const router = useRouter();

  function ethFunction() {
    router.push("/wallets/eth")
  }

  function solanaFunction() {
    router.push("/wallets/solana")
  }
  
  async function generateMnemonicFunction() {
    const mn = await generateMnemonic();
    setMnemonic(mn)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-3xl my-6">Choose a wallet to connect?</p>
        <input type="text" value={mnemonic}></input>
        <div className="flex gap-4">
          <Button onClick={ethFunction}>Etherium</Button>
          <Button onClick={solanaFunction}>Solana</Button>
          <Button onClick={generateMnemonicFunction}>Generate Seed Phrase</Button>
        </div>
        <div>
          <SolanaWallet mnemonic={mnemonic}/>
          <EthWallet mnemonic={mnemonic}/>
        </div>
      </div>
    </main>
  );
}