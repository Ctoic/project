"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"

export default function Projects() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center text-center">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="text-4xl font-bold text-primary"
      >
        🚧 Coming Soon...
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", repeatType: "reverse" }}
        className="mt-4 text-muted-foreground"
      >
        Stay tuned for upcoming projects
      </motion.p>
    </main>
  )
}
