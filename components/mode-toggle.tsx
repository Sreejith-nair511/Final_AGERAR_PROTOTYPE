"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="hover:bg-white/10"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
