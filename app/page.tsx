'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "@/components/SolanaWallet";
import { EthWallet } from "@/components/EthWallet";

export default function Home() {
  const [mnemonic, setMnemonic] = useState("");
  const [showMnemonic, setShowMnemonic] = useState(false);
  const router = useRouter();

  // function ethFunction() {
  //   router.push("/wallets/eth")
  // }

  // function solanaFunction() {
  //   router.push("/wallets/solana")
  // }
  
  async function generateMnemonicFunction() {
    const mn = await generateMnemonic();
    setMnemonic(mn)
    setShowMnemonic(true)
  }

  function clearWallets() {
    setShowMnemonic(false)
    setMnemonic("")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="text-3xl my-6">Choose a wallet to connect?</p> */}
        <div className="flex gap-4 flex-col">
          {/* <Button onClick={ethFunction}>Etherium</Button>
          <Button onClick={solanaFunction}>Solana</Button> */}
          <div className="justify-center items-center bg-red-500 flex">

         {!showMnemonic && <Button onClick={generateMnemonicFunction}>Generate Seed Phrase</Button>}
          </div>

          <div className="flex gap-4">
          {showMnemonic && mnemonic.split(" ").map((word, index) => (
              <p
                key={index}
                className="md:text-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-lg p-4"
              >
                {word}
              </p>
            ))}
          </div>
         
        </div>
        <div>
          {showMnemonic && <SolanaWallet mnemonic={mnemonic}/>}
          {showMnemonic && <EthWallet mnemonic={mnemonic}/>}

          {showMnemonic && <Button variant="destructive" onClick={clearWallets}>Clear Wallet</Button>} 
        </div>
      </div>
    </main>
  );
}