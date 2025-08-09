"use client"

import { motion } from "motion/react"

type EventMedia = {
  src: string
  alt: string
}

function EventCard({
  logo,
  title,
  date,
  body,
  media = [],
}: {
  logo?: string
  title: string
  date: string
  body: React.ReactNode
  media?: EventMedia[]
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-[#00FF9C33] bg-white/5 backdrop-blur p-5 shadow-[0_0_60px_-20px_rgba(0,255,156,0.35)]"
    >
      <div className="flex items-start gap-3">
        {logo ? (
          <div className="size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-[#00FF9C66]">
            {/* External URL per user request; using <img> to avoid Next/Image domain config */}
            <img src={logo || "/placeholder.svg"} alt="ABC logo" className="h-full w-full object-cover" />
          </div>
        ) : null}
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="mt-0.5 text-xs sm:text-sm text-white/70">{date}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-white/90">
        {body}
      </div>

      {media.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {media.map((m, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border border-[#00FF9C22] bg-black/30"
            >
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={m.src || "/placeholder.svg"}
                  alt={m.alt}
                  className="h-full w-full object-cover"
                  loading={i > 1 ? "lazy" : "eager"}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </motion.article>
  )
}

export default function EventsFeed() {
  return (
    <div className="space-y-6">
      <EventCard
        logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-QZWv2rHUjK18fqfybyKG6UMUv2Xm4e.jpeg"
        title="Road to Impact: Draper House Visit"
        date="3rd August — Launch of our HackSeries"
        body={
          <>
            <p>
              Members of ABC Blockchain CIT visited Draper House for “Road to Impact,” marking the
              launch of our HackSeries. The session focused on how students can begin their journey
              in development and contribute to innovation and problem‑solving.
            </p>
            <p>
              We engaged with an experienced senior developer who shared what it truly means to be a
              developer—offering clarity, inspiration, and direction. Special thanks to Ms.
              Aakanksha Bedi for seamless coordination and event management that made the day
              impactful.
            </p>
            <p>
              We were honored to hear inspiring words about innovating fearlessly, building scalable
              solutions, and prioritizing reusability—leaving everyone motivated to build with
              purpose.
            </p>
            <p>
              Appreciation to our volunteers—your behind‑the‑scenes efforts made all the difference.
              The event saw 30 participants alongside club leadership representing Cambridge
              Institute of Technology. Special thanks to AlgoBharat for supporting student‑led
              innovation and meaningful opportunities to build with blockchain.
            </p>
          </>
        }
        media={[
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iSJo51RffqjqcItds7qxeVo4Cj7by3.png",
            alt: "Draper House neon sign at night",
          },
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9HtbkXppeyuvBrrrykTmcDYyBO56AN.png",
            alt: "ABC members at AlgoBharat HackSeries banner",
          },
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SYz9NnhSygyIhmCdmuyrVyxcckGuJ8.png",
            alt: "Large group photo from HackSeries event",
          },
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRx95aTOf9CRotKYFGHLeo4annTN3z.png",
            alt: "Group in front of Cambridge Institute bus",
          },
        ]}
      />

      <EventCard
        logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-QZWv2rHUjK18fqfybyKG6UMUv2Xm4e.jpeg"
        title="Partnership for Blockchain Education — MoU"
        date="4th August 2025 — Cambridge Institute of Technology × Algorand Foundation"
        body={
          <>
            <p>
              A landmark Memorandum of Understanding (MoU) was signed to strengthen blockchain
              education at CIT. Under this collaboration, students will access hands‑on workshops,
              internships, hackathons, and industry‑powered learning through the Algorand ecosystem.
            </p>
            <p>
              The initiative is driven by ABC Blockchain Club at CIT, supported by department
              leadership and club advisors, with the core student team consistently advancing the
              club’s mission. Representatives from the Algorand Foundation joined to share their
              vision for impactful education and innovation.
            </p>
            <p>
              This MoU is a commitment to empower the next generation of blockchain innovators with
              structured, real‑world learning experiences—where technology meets purpose and
              education meets opportunity.
            </p>
          </>
        }
        media={[
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event2%20second.jpg-Er78dV1usBwMkeeW1ifrdASlvMTB6b.jpeg",
            alt: "Group photo after MoU announcement at CIT",
          },
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/event%202.jpg-Bxfs1b7wXjVYQsCP4BPdm77d7UJNFL.jpeg",
            alt: "Officials and faculty signing the MoU documents",
          },
        ]}
      />
    </div>
  )
}
