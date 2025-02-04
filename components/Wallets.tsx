'use client'
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"
import { useState } from "react";
import { Wallet, HDNodeWallet } from "ethers";
import { Button } from './ui/button';
import { motion } from "motion/react";

export default function Wallets({ mnemonic,
    showMnemonic,
    currentIndexSolana,
    setCurrentIndexSolana,
    publicKeysSolana,
    setPublicKeysSolana,
    currentIndexEth,
    setCurrentIndexEth,
    publicKeysEth,
    setPublicKeysEth }: {
        mnemonic: string,
        showMnemonic: boolean,
        publicKeysSolana: string[],
        setPublicKeysSolana: (keys: string[]) => void,
        publicKeysEth: string[],
        setPublicKeysEth: (keys: string[]) => void,
        currentIndexSolana: number,
        setCurrentIndexSolana: (index: number) => void,
        currentIndexEth: number,
        setCurrentIndexEth: (index: number) => void
    }) {

    function solanaWallet() {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndexSolana}'/0'`;
        // @ts-ignore
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        setCurrentIndexSolana(currentIndexSolana + 1);
        setPublicKeysSolana([...publicKeysSolana, keypair.publicKey.toBase58()]);
    }

    async function ethWallet() {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndexEth}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);
        setCurrentIndexEth(currentIndexEth + 1);
        setPublicKeysEth([...publicKeysEth, wallet.address]);
    }
    return (
        <div className="flex gap-4 mb-4 relative">
          {showMnemonic && (
            <div className="flex justify-center gap-4 w-screen">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, zIndex: 20 }}
                className="flex z-10 flex-col w-2/5 rounded-lg bg-[#2a2a2a] hover:z-20 transition-all shadow-lg"
              >
                <div className="flex justify-center items-center my-2">
                  <Button onClick={solanaWallet}>Add Solana Address</Button>
                </div>
                <div >
                  {publicKeysSolana.map((p, index) => (
                    <div className="py-2 px-3 text-lg" key={index}>&bull; Index {index + 1}: {p}</div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, zIndex: 22 }}
                className="flex z-0 flex-col w-2/5 rounded-lg bg-[#2a2a2a] hover:z-20 transition-all shadow-lg"
              >
                <div className="justify-center items-center flex my-2">
                  <Button onClick={ethWallet}>Add Eth Address</Button>
                </div>
                <div className="">
                  {publicKeysEth.map((p, index) => (
                    <div className="py-2 px-3 text-lg" key={index}>&bull; Index {index + 1}: {p}</div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      );
      
}   