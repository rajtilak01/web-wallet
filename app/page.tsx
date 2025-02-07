'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generateMnemonic } from "bip39";
import { motion } from "motion/react";
import Wallets from "@/components/Wallets";
import { DrawerComponent } from "@/components/Drawer";
import BlurryBlob from "@/components/animata/background/blurry-blob";

export default function Home() {
  const [mnemonic, setMnemonic] = useState("");
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [currentIndexSolana, setCurrentIndexSolana] = useState(0);
  const [publicKeysSolana, setPublicKeysSolana] = useState<string[]>([]);
  const [currentIndexEth, setCurrentIndexEth] = useState(0);
  const [publicKeysEth, setPublicKeysEth] = useState<string[]>([]);
  const [showDrawer, setShowDrawer] = useState(false);

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
    <>
    <BlurryBlob firstBlobColor="bg-red-400" secondBlobColor="bg-green-400" thirdBlobColor="bg-blue-400" fourthBlobColor="bg-yellow-400" />
    
    <main className="flex flex-col items-center justify-between ">
      <div className="z-10 flex flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex gap-4 flex-col">
          <div className="justify-center items-center flex mt-24">
          {!showMnemonic && 
  <div className='flex flex-col items-center'>
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,    
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
      className=""
    >
      <div className='text-4xl text-center mt-4 transition-all duration-500 hover:text-red-500'>
        Welcome to your Blockchain wallet!
      </div>
      <div className='text-center text-2xl my-4 transition-all duration-500 hover:text-red-500'>
        Here you can generate a mnemonic phrase and get addresses of Solana and Ethereum wallets!
      </div>
    </motion.div>
    
          <motion.div 
            className="flex flex-col justify-center items-center text-center px-4 py-2 mt-4"
            // whileHover={{ scale: 1.05 }} 
            // transition={{ duration: 0.3 }}
          >
            <Button 
              className='inline-flex text-4xl justify-center items-center text-center my-4 w-auto px-6 py-3 transition-all duration-500 bg-blue-500 text-white rounded-lg'
              variant={"default"} 
              onClick={generateMnemonicFunction}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,    
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
              >
                Generate Mnemonic
              </motion.div>
            </Button>
            <Button 
              className='inline-flex text-3xl justify-center items-center text-center my-4 w-auto px-6 py-3 transition-all duration-500 bg-blue-500 text-white rounded-lg'
              variant={"default"} 
              onClick={() => setShowDrawer(true)}
            >
              <DrawerComponent />
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,    
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
              >
                Want to learn more?
              </motion.div> */}
            </Button>
          </motion.div>
        </div>
      }

{/* <BlurryBlob firstBlobColor="bg-red-400" secondBlobColor="bg-green-400" /> */}
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
    </>
  );
}