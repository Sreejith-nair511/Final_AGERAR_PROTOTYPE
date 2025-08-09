"use client"

import { useEffect, useRef } from "react"

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        if (barRef.current) {
          barRef.current.style.transform = `translateX(${progress - 100}%)`
        }
        raf = 0
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] overflow-hidden bg-transparent">
      <div
        ref={barRef}
        className="h-full w-full translate-x-[-100%] bg-[#00FF9C] shadow-[0_0_12px_2px_rgba(0,255,156,0.65)]"
      />
    </div>
  )
}
