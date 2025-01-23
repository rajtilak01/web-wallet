'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {

  function ethFunction() {
    router.push("/wallets/eth")
  }

  function solanaFunction() {
    router.push("/wallets/solana")
  }
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-3xl my-6">Choose a wallet to connect?</p>
        <div className="flex gap-4">
          <Button onClick={ethFunction}>Etherium</Button>
          <Button onClick={solanaFunction}>Solana</Button>
        </div>
      </div>
    </main>
  );
}