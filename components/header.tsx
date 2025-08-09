"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Github, MessageSquare, Linkedin, X } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    handleLinkClick()
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/60" : "backdrop-blur-md bg-black/40"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5">
        <div
          className={`flex items-center justify-between rounded-xl border border-[#00FF9C33] bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-[#00FF9C]/10" : ""
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group" onClick={() => scrollToSection("home")}>
            <div className="relative h-5 w-5 sm:h-6 sm:w-6 overflow-hidden rounded-full ring-1 ring-[#00FF9C66] group-hover:ring-[#00FF9C] transition-all">
              <Image src="/images/logo.jpg" alt="ABC logo" fill className="object-cover" sizes="24px" priority />
            </div>
            <span className="text-xs sm:text-sm lg:text-base tracking-tight font-medium truncate max-w-[120px] sm:max-w-none">
              ABC Blockchain Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-[#00FF9C] transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("focus")}
              className="text-white/80 hover:text-[#00FF9C] transition-colors duration-200 font-medium"
            >
              Focus
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-white/80 hover:text-[#00FF9C] transition-colors duration-200 font-medium"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-white/80 hover:text-[#00FF9C] transition-colors duration-200 font-medium"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-white/80 hover:text-[#00FF9C] transition-colors duration-200 font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-white/80 hover:text-[#00FF9C] transition-colors duration-200 font-medium"
            >
              Join
            </button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Join Button - Hidden on small screens */}
            <button
              onClick={() => scrollToSection("join")}
              className="hidden sm:inline-flex min-w-[100px] lg:min-w-[120px] px-3 py-1.5 text-xs lg:text-sm border border-[#00FF9C66] bg-white/10 text-white hover:bg-white/15 rounded-md transition-all duration-200 font-medium"
            >
              Join the Club
            </button>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="https://discord.com/"
                target="_blank"
                aria-label="Discord"
                className="group p-2 rounded-md border border-[#00FF9C33] bg-white/5 hover:bg-white/10 transition-all duration-200 hover:border-[#00FF9C66]"
              >
                <MessageSquare className="size-4 text-[#00FF9C] group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
                className="group p-2 rounded-md border border-[#00FF9C33] bg-white/5 hover:bg-white/10 transition-all duration-200 hover:border-[#00FF9C66]"
              >
                <Github className="size-4 text-[#00FF9C] group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="LinkedIn"
                className="group p-2 rounded-md border border-[#00FF9C33] bg-white/5 hover:bg-white/10 transition-all duration-200 hover:border-[#00FF9C66]"
              >
                <Linkedin className="size-4 text-[#00FF9C] group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="hover:bg-white/10 border border-[#00FF9C33] w-9 h-9 sm:w-10 sm:h-10"
                  >
                    <Menu className="size-4 sm:size-5 text-[#00FF9C]" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] bg-[#0A0A0A]/98 backdrop-blur-xl border-[#00FF9C33] border-l-2"
                  aria-describedby="mobile-menu-description"
                >
                  <SheetHeader className="text-left">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-[#00FF9C] text-lg font-semibold">Menu</SheetTitle>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-white/10">
                          <X className="size-4 text-white/70" />
                        </Button>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  <p id="mobile-menu-description" className="sr-only">
                    Navigation menu for ABC Blockchain Club website. Use this menu to navigate to different sections of the site.
                  </p>

                  <div className="mt-8 space-y-1">
                    {/* Navigation Links */}
                    <button
                      onClick={() => scrollToSection("about")}
                      className="w-full text-left px-4 py-3 text-white/90 hover:text-[#00FF9C] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollToSection("focus")}
                      className="w-full text-left px-4 py-3 text-white/90 hover:text-[#00FF9C] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      Focus Areas
                    </button>
                    <button
                      onClick={() => scrollToSection("events")}
                      className="w-full text-left px-4 py-3 text-white/90 hover:text-[#00FF9C] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      Events
                    </button>
                    <button
                      onClick={() => scrollToSection("highlights")}
                      className="w-full text-left px-4 py-3 text-white/90 hover:text-[#00FF9C] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      Event Highlights
                    </button>
                    <button
                      onClick={() => scrollToSection("community")}
                      className="w-full text-left px-4 py-3 text-white/90 hover:text-[#00FF9C] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      Community
                    </button>
                    <button
                      onClick={() => scrollToSection("team")}
                      className="w-full text-left px-4 py-3 text-white/90 hover:text-[#00FF9C] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      Team
                    </button>

                    {/* Join Button */}
                    <button
                      onClick={() => scrollToSection("join")}
                      className="w-full mt-4 px-4 py-3 bg-[#00FF9C1a] border border-[#00FF9C] text-[#00FF9C] hover:bg-[#00FF9C26] rounded-lg transition-all duration-200 font-semibold"
                    >
                      Join the Club
                    </button>

                    {/* Social Links */}
                    <div className="pt-6 border-t border-[#00FF9C22] mt-6">
                      <p className="text-white/60 text-sm mb-3 px-4">Connect with us</p>
                      <div className="grid grid-cols-3 gap-3 px-4">
                        <Link
                          href="https://discord.com/"
                          target="_blank"
                          className="flex flex-col items-center gap-2 p-3 rounded-lg border border-[#00FF9C33] bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                          onClick={handleLinkClick}
                        >
                          <MessageSquare className="size-5 text-[#00FF9C] group-hover:scale-110 transition-transform" />
                          <span className="text-xs text-white/80">Discord</span>
                        </Link>
                        <Link
                          href="https://github.com/"
                          target="_blank"
                          className="flex flex-col items-center gap-2 p-3 rounded-lg border border-[#00FF9C33] bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                          onClick={handleLinkClick}
                        >
                          <Github className="size-5 text-[#00FF9C] group-hover:scale-110 transition-transform" />
                          <span className="text-xs text-white/80">GitHub</span>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          className="flex flex-col items-center gap-2 p-3 rounded-lg border border-[#00FF9C33] bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                          onClick={handleLinkClick}
                        >
                          <Linkedin className="size-5 text-[#00FF9C] group-hover:scale-110 transition-transform" />
                          <span className="text-xs text-white/80">LinkedIn</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
