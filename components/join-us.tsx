"use client"

import DecryptedText from "@/components/decrypted-text"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JoinUs() {
  return (
    <div className="relative mx-auto max-w-3xl rounded-2xl border border-[#00FF9C33] bg-white/5 p-8 text-center backdrop-blur
    shadow-[0_0_60px_-12px_rgba(0,255,156,0.35)]">
      <h3 className="font-[var(--font-sg)] text-2xl sm:text-3xl">
        <DecryptedText
          text="Be Part of the Decentralized Revolution"
          animateOn="view"
          sequential
          className="text-white"
          encryptedClassName="text-[#00FF9C]"
        />
      </h3>
      <p className="mt-3 text-white/80 font-[var(--font-plex)]">
        Join our Discord or apply as a core contributor to help lead initiatives.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="https://discord.com/" target="_blank">
          <Button className="min-w-[180px] border border-[#00FF9C] bg-[#00FF9C1a] text-[#00FF9C] hover:bg-[#00FF9C26] hover:text-white">
            Join Discord
          </Button>
        </Link>
        <Link href="#" target="_blank">
          <Button className="min-w-[220px] border border-[#00FF9C33] bg-white/10 text-white hover:bg-white/15">
            Apply as a volunter
          </Button>
        </Link>
      </div>
    </div>
  )
}
