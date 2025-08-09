"use client"

import { motion } from "motion/react"

type EventItem = {
  date: string
  title: string
  desc: string
}

const EVENTS: EventItem[] = [
  { date: "Aug 30", title: "Welcome Meetup", desc: "Kickoff and intro to the ABC Blockchain Club." },
  { date: "Sep 12", title: "Blockchain 101", desc: "Consensus, wallets, and cryptography basics." },
  { date: "Sep 26", title: "Smart Contracts Night", desc: "Solidity crash course and dApp demo." },
  { date: "Oct 10", title: "ZK Workshop", desc: "Zero-knowledge proofs, hands-on exercises." },
  { date: "Oct 24", title: "DAO Governance", desc: "Mechanisms and tools for decentralized orgs." },
  { date: "Nov 7", title: "DeFi Deep Dive", desc: "AMMs, liquidity, and on-chain risks." },
  { date: "Nov 21", title: "Hack Evening", desc: "Open build time. Ship something together." },
]

export default function EventsTimeline() {
  return (
    <div
      className="relative rounded-2xl border border-[#00FF9C33] bg-white/5 backdrop-blur p-4 shadow-[0_0_60px_-20px_rgba(0,255,156,0.35)]"
      role="region"
      aria-label="Events timeline"
    >
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#00FF9C44]">
        <div className="flex gap-5 sm:gap-7 snap-x snap-mandatory min-w-full">
          {EVENTS.map((ev, i) => (
            <motion.article
              key={`${ev.title}-${i}`}
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="snap-start min-w-[260px] sm:min-w-[300px] rounded-xl border border-[#00FF9C33]
              bg-black/50 px-5 py-4 backdrop-blur
              hover:border-[#00FF9C] hover:shadow-[0_0_30px_-8px_rgba(0,255,156,0.5)] transition"
            >
              <div className="flex items-center gap-2 text-xs text-white/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF9C]" />
                {ev.date}
              </div>
              <h3 className="mt-2 font-[var(--font-jbm)] text-lg">{ev.title}</h3>
              <p className="mt-1 text-sm text-white/75">{ev.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
