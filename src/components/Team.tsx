"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

const team = [
  { name: "Zeeshaan Shafraz", role: "Founder", desc: "Directs agency operations, oversees project architecture, and ensures elite delivery standards.", image: "/ze.jpeg", linkedin: "https://linkedin.com" },
  { name: "Umar Farooq", role: "Co-Founder", desc: "Architects the technical foundation and drives high-performance full-stack software development.", image: "/fa.png", linkedin: "https://linkedin.com" },
  { name: "Mohammed Razaullah", role: "Co-Founder", desc: "Assists in core engineering, manages technical infrastructure, and handles financial operations.", image: "/ra.jpeg", linkedin: "https://linkedin.com" },
  { name: "Saleem Akthar", role: "Co-Founder", desc: "Directs client relations, manages project onboarding, and ensures flawless customer experiences.", image: "/ak.jpeg", linkedin: "https://linkedin.com" },
  { name: "Umar Azath", role: "Co-Founder", desc: "Strategizes brand presence, drives audience engagement, and leads social media growth.", image: "/um.jpeg", linkedin: "https://linkedin.com" },
  { name: "Abdulla Ibrahim", role: "Co-Founder", desc: "Crafts premium visual identities, UI/UX systems, and high-conversion digital designs.", image: "/ab.jpeg", linkedin: "https://linkedin.com" },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <div className="mx-auto mb-16 w-full text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Meet the team.</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <motion.a
            key={`${member.name}-${i}`}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: i * 0.1 }}
            // FIX: Removed comma fallbacks from border and shadow hover states
            className="animate-breathe transform-gpu group relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl [transition-property:transform,box-shadow] duration-500 ease-out hover:z-50 hover:-translate-y-4 hover:scale-[1.05] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_80px_hsla(var(--theme-hue),100%,60%,0.3)]"
            style={{ animationDelay: `${i * 0.15}s` }} 
          >
            {/* FIX: Removed comma fallbacks from the profile ring's default border and background */}
            <div className="relative mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)] transition-transform duration-500 group-hover:scale-110 group-hover:border-[hsla(var(--theme-hue),80%,60%,0.9)] group-hover:bg-[hsla(var(--theme-hue),80%,60%,0.4)]">
              {member.image ? (
                <Image src={member.image} alt={`${member.name} profile`} width={256} height={256} quality={100} style={{ backfaceVisibility: "hidden" }} className="pointer-events-none h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" draggable={false} />
              ) : (
                <User size={32} />
              )}
            </div>
            
            <h3 className="text-center text-2xl font-bold tracking-wide text-white transition-colors group-hover:text-white">
              {member.name}
            </h3>
            
            {/* FIX: Removed comma fallback from the role text */}
            <p className="mt-2 text-center text-sm font-bold tracking-widest uppercase text-[hsl(var(--theme-hue),80%,60%)]">
              {member.role}
            </p>
            
            <div className="mt-4">
              <p className="text-center text-sm leading-relaxed text-zinc-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                {member.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}