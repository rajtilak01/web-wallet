import { SolanaWallet } from './SolanaWallet';
import { EthWallet } from './EthWallet';
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"
import { useState } from "react";
import { Wallet, HDNodeWallet } from "ethers";
import { Button } from './ui/button';


function Wallets({ mnemonic, showMnemonic }: { mnemonic: string, showMnemonic: boolean }) {

    const [currentIndexSolana, setCurrentIndexSolana] = useState(0);
    const [publicKeysSolana, setPublicKeysSolana] = useState<string[]>([]);
    const [currentIndexEth, setCurrentIndexEth] = useState(0);
    const [publicKeysEth, setPublicKeysEth] = useState<string[]>([]);

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
        <div className="flex gap-4 mb-4 bg-red-900">
            {showMnemonic && (
                <div className='flex justify-center gap-4 w-screen'>
                    <div className='flex flex-col bg-blue-900'>
                        <div className="flex justify-center items-center bg-violet-900"><Button onClick={solanaWallet}>Solana</Button></div>
                        <div className=''>{publicKeysSolana.map(p => <div>
                            &bull; {p}
                        </div>)}</div>
                    </div>
                    <div className='flex flex-col  bg-green-900'>
                        <div className="justify-center items-center flex bg-cyan-900"><Button onClick={ethWallet}>Eth</Button></div>
                        <div>{publicKeysEth.map(p => <div>
                            &bull; {p}
                        </div>)}</div>
                    </div>
                </div>)}
        </div>
    )
}

export default Wallets