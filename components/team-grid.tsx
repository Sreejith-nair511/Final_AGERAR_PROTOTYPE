"use client"

import { motion } from "motion/react"
import Image from "next/image"

const members = [
  { id: 3, src: "/images/members/1000273831.jpg" },
  { id: 5, src: "/images/members/1000273829.jpg" },
  { id: 8, src: "/images/members/1000273845.jpg" },
  { id: 10, src: "/images/members/1000273837.jpg" },
  { id: 1, src: "/images/members/1000273841.jpg" },
  { id: 2, src: "/images/members/1000273843.jpg" },
  { id: 4, src: "/images/members/1000273847.jpg" },
  { id: 6, src: "/images/members/1000273839.jpg" },
  { id: 7, src: "/images/members/1000273833.jpg" },
  { id: 9, src: "/images/members/1000273835.jpg" },
  { id: 10, src: "/images/members/IMG_7620.JPG" },
  { id: 11, src: "/images/members/IMG_7622.JPG" },
  
]

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {members.map((m, i) => (
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
          whileHover={{ y: -3, scale: 1.01 }}
          className="relative rounded-2xl overflow-hidden border border-[#00FF9C33] bg-white/5 backdrop-blur
            hover:border-[#00FF9C] transition shadow-[0_0_36px_-12px_rgba(0,255,156,0.35)]"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={m.src || "/placeholder.svg"}
              alt="Club member portrait"
              fill
              sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="object-cover"
              priority={i < 3}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      ))}
    </div>
  )
}
