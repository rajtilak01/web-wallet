'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { generateMnemonic } from "bip39";
import { motion } from "motion/react";
import Wallets from "@/components/Wallets";

export default function Home() {
  const [mnemonic, setMnemonic] = useState("");
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [currentIndexSolana, setCurrentIndexSolana] = useState(0);
  const [publicKeysSolana, setPublicKeysSolana] = useState<string[]>([]);
  const [currentIndexEth, setCurrentIndexEth] = useState(0);
  const [publicKeysEth, setPublicKeysEth] = useState<string[]>([]);

  async function generateMnemonicFunction() {
    const mn = await generateMnemonic();
    setMnemonic(mn);
    setShowMnemonic(true);
  }

  function clearWallets() {
    setShowMnemonic(false);
    setMnemonic("");
    setCurrentIndexSolana(0);
    setPublicKeysSolana([]);
    setCurrentIndexEth(0);
    setPublicKeysEth([]);
  }
  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="z-10 flex flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex gap-4 flex-col">
          <div className="justify-center items-center bg-red-500 flex mt-24">

            {!showMnemonic && <Button variant={"default"} onClick={generateMnemonicFunction}>Generate Seed Phrase</Button>}
          </div>
          {showMnemonic && <motion.div  initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }} className='text-3xl text-center mt-4 flex-grow'>Here is your mnemonic phrase:</motion.div>}
          <div className="flex gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.15 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center w-full items-center mx-auto my-8"
            >
              {showMnemonic && mnemonic.split(" ").map((word, index) => (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  key={index}
                  className="md:text-lg bg-red-500/5 hover:bg-red-500/10 transition-all duration-300 rounded-lg p-4"
                >
                  {word}
                </motion.p>
              ))}
            </motion.div>
          </div>

        </div>
        <div className="flex gap-4 mb-4">
          <Wallets mnemonic={mnemonic} showMnemonic={showMnemonic} currentIndexSolana={currentIndexSolana} setCurrentIndexSolana={setCurrentIndexSolana} publicKeysSolana={publicKeysSolana} setPublicKeysSolana={setPublicKeysSolana} currentIndexEth={currentIndexEth} setCurrentIndexEth={setCurrentIndexEth} publicKeysEth={publicKeysEth} setPublicKeysEth={setPublicKeysEth} />

        </div>
        {showMnemonic && <Button variant="destructive" onClick={clearWallets}>Clear Wallet</Button>}
      </div>
    </main>
  );
}