"use client"

import Link from "next/link"
import { Github, Linkedin, X } from 'lucide-react'
import { useEffect, useState } from "react"

function TypeTicker({ text, speed = 35 }: { text: string; speed?: number }) {
  const [out, setOut] = useState("")
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setOut(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return (
    <span className="after:inline-block after:w-2 after:h-5 after:ml-1 after:align-[-2px] after:bg-[#00FF9C] after:animate-pulse" aria-live="polite">
      {out}
    </span>
  )
}

export default function FooterBar() {
  return (
    <footer className="relative border-t border-[#00FF9C22] bg-[#0A0A0A]">
      <div className="container mx-auto px-6 sm:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-[var(--font-jbm)] text-sm text-[#00FF9C]">
            <span className="text-white/70">{">"}</span>{" "}
            <TypeTicker text="Built with 💚 by ABC Blockchain Club | Citech" />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="https://github.com/" target="_blank" className="group flex items-center gap-2 opacity-90 hover:opacity-100">
              <div className="rounded-md border border-[#00FF9C33] bg-white/5 p-2 transition
                group-hover:bg-white/10 group-hover:shadow-[0_0_24px_rgba(0,255,156,0.5)]">
                <Github className="size-4 text-[#00FF9C]" />
              </div>
              <span>GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" className="group flex items-center gap-2 opacity-90 hover:opacity-100">
              <div className="rounded-md border border-[#00FF9C33] bg-white/5 p-2 transition
                group-hover:bg-white/10 group-hover:shadow-[0_0_24px_rgba(0,255,156,0.5)]">
                <Linkedin className="size-4 text-[#00FF9C]" />
              </div>
              <span>LinkedIn</span>
            </Link>
            <Link href="https://x.com/" target="_blank" className="group flex items-center gap-2 opacity-90 hover:opacity-100">
              <div className="rounded-md border border-[#00FF9C33] bg-white/5 p-2 transition
                group-hover:bg-white/10 group-hover:shadow-[0_0_24px_rgba(0,255,156,0.5)]">
                <X className="size-4 text-[#00FF9C]" />
              </div>
              <span>X</span>
            </Link>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} ABC Blockchain Club · Citech
        </div>
      </div>
    </footer>
  )
}
