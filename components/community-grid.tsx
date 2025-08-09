"use client";

import { motion } from "motion/react";
import Image from "next/image";

const logos = [
  { id: 1, src: "/logos/partner1.png", alt: "Partner 1" },
  { id: 2, src: "/logos/partner2.png", alt: "Partner 2" },
  { id: 3, src: "/logos/partner3.png", alt: "Partner 3" },
  { id: 4, src: "/logos/partner4.png", alt: "Partner 4" },
  { id: 5, src: "/logos/partner5.png", alt: "Partner 5" },
];

export default function CommunityGrid() {
  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      aria-label="Community logos"
    >
      {logos.map((logo) => (
        <li key={logo.id} className="list-none">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-xl border border-[#00FF9C33] bg-white/5 p-4 backdrop-blur
            hover:border-[#00FF9C] hover:shadow-[0_0_30px_-8px_rgba(0,255,156,0.5)] transition"
          >
            <div className="relative aspect-[2.8/1]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition 
              bg-[radial-gradient(70%_70%_at_50%_50%,rgba(0,255,156,0.18),transparent)]"
            />
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
