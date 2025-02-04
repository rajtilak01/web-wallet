"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { motion } from "motion/react";

export function DrawerComponent() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
      <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,    
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1 }}
              >
                Want to know more?
              </motion.div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">What's a Mnemonic?</DrawerTitle>
            <DrawerDescription className="text-lg">
              A mnemonic is a series of words that are used to generate a private key
              for a digital wallet. It is a type of seed phrase that is used to
              generate a unique identifier for a digital wallet.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
