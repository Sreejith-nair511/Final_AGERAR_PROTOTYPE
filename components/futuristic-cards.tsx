"use client"

import { motion } from "motion/react"
import { Code2, CalendarDays, GraduationCap } from 'lucide-react'

const items = [
  {
    icon: Code2,
    title: "Research & Projects",
    desc: "Ship open-source tools, audits, and on-chain experiments.",
  },
  {
    icon: CalendarDays,
    title: "Hackathons & Events",
    desc: "Hands-on builds, workshops, and community collaborations.",
  },
  {
    icon: GraduationCap,
    title: "Blockchain Education",
    desc: "Curriculum, study jams, and mentorship for Web3 literacy.",
  },
]

export default function FuturisticCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item, i) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative overflow-hidden rounded-2xl border border-[#00FF9C33] bg-white/5 p-6 backdrop-blur
              hover:border-[#00FF9C] transition 
              shadow-[0_0_36px_-12px_rgba(0,255,156,0.35)]
              before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(80%_60%_at_50%_-20%,rgba(0,255,156,0.18),transparent_60%)]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-[#00FF9C33] bg-black/40 p-3">
                <Icon className="size-5 text-[#00FF9C]" />
              </div>
              <h3 className="text-lg font-[var(--font-jbm)]">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/80">{item.desc}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
