import Header from "@/components/header"
import Hyperspeed from "@/components/hyperspeed"
import DecryptedText from "@/components/decrypted-text"
import EventsTimeline from "@/components/events-timeline"
import CommunityGrid from "@/components/community-grid"
import FocusAreas from "@/components/focus-areas"
import JoinUs from "@/components/join-us"
import TeamGrid from "@/components/team-grid"
import FooterBar from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JetBrains_Mono, Space_Grotesk, IBM_Plex_Mono } from "next/font/google"
import EventsFeed from "@/components/events-feed"
import IntroLoader from "@/components/intro-loader"
import FuturisticCards from "@/components/futuristic-cards"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbm", weight: ["400", "600", "700"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sg", weight: ["400", "600", "700"] })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "600"] })

export default function Page() {
  return (
    <main className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} ${plexMono.variable} bg-[#0A0A0A] text-white`}>
      <IntroLoader />
      <ScrollProgress />
      <Header />

      {/* HERO */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0x00ff9c, 0x38ffcf, 0x00e08a],
                rightCars: [0x00e5ff, 0x00ffcc, 0x29ffa5],
                sticks: 0x00ff9c,
              },
            }}
          />
        </div>

        {/* subtle vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] z-10" />

        <div className="relative z-20 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
          <div className="max-w-4xl text-center space-y-6 sm:space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00FF9C33] bg-white/5 px-3 sm:px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#00FF9C] shadow-[0_0_18px_6px_rgba(0,255,156,0.55)]" />
              <span className="font-[var(--font-plex)] text-xs tracking-wider text-white/80">
                Citech · ABC Blockchain Club
              </span>
            </div>

            <h1 className="font-[var(--font-sg)] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <DecryptedText
                text="Welcome to the Chain"
                animateOn="view"
                sequential
                revealDirection="center"
                parentClassName="drop-shadow-[0_0_22px_rgba(0,255,156,0.25)]"
                className="text-white"
                encryptedClassName="text-[#00FF9C] opacity-90"
              />
            </h1>

            <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/80 font-[var(--font-plex)] px-4">
              Empowering decentralized innovation and blockchain literacy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="#join">
                <Button
                  className="w-full sm:w-auto min-w-[200px] border border-[#00FF9C] text-white bg-[#00FF9C1a]
hover:bg-[#00FF9C26]
      ring-1 ring-[#00FF9C33]
      shadow-[0_0_30px_-6px_rgba(0,255,156,0.7)]
hover:shadow-[0_0_50px_-8px_rgba(0,255,156,0.9)]
      animate-pulse"
                >
                  Join the Chain
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-CARD SECTION */}
      <section id="features" className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_20%_0%,rgba(0,255,156,0.08),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-[var(--font-sg)] text-xl sm:text-2xl lg:text-3xl font-semibold">What We Do</h2>
            <p className="text-white/70 font-[var(--font-plex)] mt-2 text-sm sm:text-base">
              Explore, build, and educate with a cyberpunk, space‑age spirit.
            </p>
          </div>
          <FuturisticCards />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-16 sm:py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_80%_20%,rgba(0,255,156,0.08),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-10 md:grid-cols-2 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#00FF9C33] bg-white/5 backdrop-blur">
                <Image
                  src="/about-club.jpg?height=720&width=960"
                  alt="Futuristic blockchain illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#00FF9C1a] via-transparent to-[#00FF9C1a]" />
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 blur-3xl opacity-30 bg-[conic-gradient(at_20%_20%,#00FF9C33,#00FF9C00,#00FF9C33,#00FF9C00)]" />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-[var(--font-sg)] text-xl sm:text-2xl lg:text-3xl font-semibold">
                <DecryptedText
                  text="About the Club"
                  animateOn="view"
                  sequential
                  className="text-white"
                  encryptedClassName="text-[#00FF9C]"
                />
              </h2>
              <p className="text-white/85 font-[var(--font-plex)] leading-relaxed text-sm sm:text-base">
                <DecryptedText
                  text="Pioneering Web3 education, research, and innovation from the heart of Citech."
                  animateOn="view"
                  sequential
                  className="text-white"
                  encryptedClassName="text-[#00FF9C]"
                />
              </p>
              <p className="text-white/75 font-[var(--font-plex)] text-sm sm:text-base">
                <DecryptedText
                  text="We host workshops, build open-source tools, and collaborate with DAOs and researchers to advance decentralized technology."
                  animateOn="view"
                  sequential
                  className="text-white"
                  encryptedClassName="text-[#00FF9C]"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="#events">
                  <Button className="w-full sm:w-auto border border-[#00FF9C33] bg-white/10 text-white hover:bg-white/15 backdrop-blur">
                    Upcoming Events
                  </Button>
                </Link>
                <Link href="#community">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border border-[#00FF9C] text-[#00FF9C] bg-[#00FF9C1a] hover:bg-[#00FF9C26]"
                  >
                    Meet the Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-[var(--font-sg)] text-xl sm:text-2xl lg:text-3xl font-semibold">
              <DecryptedText
                text="Our Focus Areas"
                animateOn="view"
                sequential
                className="text-white"
                encryptedClassName="text-[#00FF9C]"
              />
            </h2>
            <p className="text-white/70 font-[var(--font-plex)] mt-2 text-sm sm:text-base">
              Smart contracts, governance, finance, and security in decentralized systems.
            </p>
          </div>

          <FocusAreas />
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-[var(--font-sg)] text-xl sm:text-2xl lg:text-3xl font-semibold">
              <DecryptedText
                text="Events Timeline"
                animateOn="view"
                sequential
                className="text-white"
                encryptedClassName="text-[#00FF9C]"
              />
            </h2>
            <p className="text-white/70 font-[var(--font-plex)] mt-2 text-sm sm:text-base">
              Past and upcoming workshops, talks, and hack sessions.
            </p>
          </div>
          <EventsTimeline />
        </div>
      </section>

      {/* EVENT HIGHLIGHTS */}
      <section id="highlights" className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-[var(--font-sg)] text-xl sm:text-2xl lg:text-3xl font-semibold">Event Highlights</h2>
            <p className="text-white/70 font-[var(--font-plex)] mt-2 text-sm sm:text-base">
              Recent moments from our community and collaborations.
            </p>
          </div>
          <EventsFeed />
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(0,255,156,0.08),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-[var(--font-sg)] text-xl sm:text-2xl lg:text-3xl font-semibold">
              <DecryptedText
                text="Community Partners"
                animateOn="view"
                sequential
                className="text-white"
                encryptedClassName="text-[#00FF9C]"
              />
            </h2>
            <p className="text-white/70 font-[var(--font-plex)] mt-2 text-sm sm:text-base">
              Growing with the ecosystem.
            </p>
          </div>
          <CommunityGrid />
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="https://www.instagram.com/abc.cit?igsh=Ync2ZTA4N2d3bW5t"
              target="_blank"
              className="underline underline-offset-4 text-[#00FF9C] hover:text-[#00FF9C]/80 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/in/algorand-blockchain-club-cit-88051935a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="underline underline-offset-4 text-[#00FF9C] hover:text-[#00FF9C]/80 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-[var(--font-sg)] text-xl sm:text-2xl lg:text-3xl font-semibold">
              <DecryptedText
                text="Core Members"
                animateOn="view"
                sequential
                className="text-white"
                encryptedClassName="text-[#00FF9C]"
              />
            </h2>
            <p className="text-white/70 font-[var(--font-plex)] mt-2 text-sm sm:text-base">
              The builders and organizers behind ABC.
            </p>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* JOIN US */}
      <section id="join" className="relative py-16 sm:py-20 lg:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <JoinUs />
        </div>
      </section>

      <FooterBar />
    </main>
  )
}
