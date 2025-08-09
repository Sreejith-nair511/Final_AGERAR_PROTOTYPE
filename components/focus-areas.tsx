"use client"

import { motion } from "motion/react"
import { Shield, Landmark, Code2, CircleDot } from 'lucide-react'

const items = [
  {
    icon: Code2,
    title: "Smart Contracts",
    desc: "Design, audit, and deploy secure on-chain logic.",
  },
  {
    icon: Landmark,
    title: "DAOs",
    desc: "On-chain governance, coordination, and tokenomics.",
  },
  {
    icon: CircleDot,
    title: "DeFi",
    desc: "Protocols, AMMs, liquidity, and on-chain finance.",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    desc: "Threat modeling, audits, and best practices.",
  },
]

export default function FocusAreas() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative rounded-xl border border-[#00FF9C33] bg-white/5 px-5 py-5 backdrop-blur
              hover:border-[#00FF9C] transition
              shadow-[0_0_36px_-12px_rgba(0,255,156,0.35)]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-[#00FF9C33] bg-black/40 p-2">
                <Icon className="size-5 text-[#00FF9C]" />
              </div>
              <h3 className="font-[var(--font-jbm)] text-lg">{item.title}</h3>
            </div>
            <p className="mt-2 text-sm text-white/80">{item.desc}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
