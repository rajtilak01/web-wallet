'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

function eth() {
  const router = useRouter();
  return (
    <div className='flex items-center justify-between'>
      <div className='text-3xl text-center mt-4 flex-grow'>Your Etherium Wallet</div>
      <div className='mt-4 flex justify-end items-end mx-2'>
        <Button onClick={() => router.push("/")}>Home</Button>
      </div>
    </div>
  )
}

export default eth

