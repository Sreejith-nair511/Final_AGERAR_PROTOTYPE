"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

// Simple neon pulse ring
function NeonRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="size-48 rounded-full border border-[#00FF9C55]" />
      <div className="absolute size-48 rounded-full shadow-[0_0_120px_20px_rgba(0,255,156,0.35)]" />
    </div>
  )
}

export default function IntroLoader({
  duration = 1600,
}: {
  duration?: number
}) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const t = setTimeout(() => setVisible(false), media.matches ? 400 : duration)
    return () => clearTimeout(t)
  }, [duration])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0A0A0A]"
          aria-label="Loading ABC Blockchain Club"
        >
          {/* subtle radial */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(0,255,156,0.10),transparent_70%)]" />
          <motion.div
            initial={{ scale: 0.9, filter: "blur(6px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              <NeonRing />
              {/* Using your Source URL as requested */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-QZWv2rHUjK18fqfybyKG6UMUv2Xm4e.jpeg"
                alt="ABC Blockchain Club logo"
                className="relative z-10 h-32 w-32 rounded-full object-cover ring-1 ring-[#00FF9C66]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-white/80 text-sm tracking-wider">ABC Blockchain Club</p>
              <div className="mt-1 h-1 w-24 mx-auto rounded bg-[#00FF9C66] overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="h-full w-full bg-[#00FF9C] shadow-[0_0_16px_4px_rgba(0,255,156,0.55)]"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
