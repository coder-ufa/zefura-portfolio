"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  { name: "Zeeshaan Shafraz", role: "Founder", desc: "Directs agency operations, oversees project architecture, and ensures elite delivery standards." },
  { name: "Umar Farooq", role: "Co-Founder", desc: "Architects the technical foundation and drives high-performance full-stack software development." },
  { name: "Mohammed Razaullah", role: "Co-Founder", desc: "Assists in core engineering, manages technical infrastructure, and handles financial operations." },
  { name: "Saleem Akthar", role: "Co-Founder", desc: "Directs client relations, manages project onboarding, and ensures flawless customer experiences." },
  { name: "Umar Azath", role: "Co-Founder", desc: "Strategizes brand presence, drives audience engagement, and leads social media growth." },
  { name: "Abdulla Ibrahim", role: "Co-Founder", desc: "Crafts premium visual identities, UI/UX systems, and high-conversion digital designs." },
];

// This is the line that went missing! It duplicates the team so the loop never ends.
const marqueeItems = [...team, ...team, ...team, ...team];

export default function Team() {
  return (
    <section id="team" className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10">
      <div className="mx-auto mb-8 w-full max-w-7xl text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Meet the team.
        </h2>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform; 
        }
        .animate-marquee:has(.group:hover) {
          animation-play-state: paused;
        }
      `}} />

      <div 
        className="relative flex w-full overflow-hidden py-20" 
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        <div className="animate-marquee flex w-max flex-nowrap items-center gap-6 pr-6">
          {marqueeItems.map((member, i) => (
            <motion.div
              key={`${member.name}-${i}`}
              whileHover={{ scale: 1.4, margin: "0 80px", zIndex: 50 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              // GPU Optimization injected right here to prevent lag
              style={{ willChange: "transform, margin" }}
              className="group relative flex h-[340px] w-[300px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-colors duration-300 hover:border-[hsla(var(--theme-hue,260),80%,60%,0.5)] hover:bg-[hsla(var(--theme-hue,260),80%,60%,0.05)] hover:shadow-[0_0_80px_hsla(var(--theme-hue,260),80%,60%,0.3)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[hsla(var(--theme-hue,260),80%,60%,0.2)] bg-[hsla(var(--theme-hue,260),80%,60%,0.1)] text-[hsl(var(--theme-hue,260),80%,60%)] transition-all duration-300 group-hover:scale-110 group-hover:border-[hsla(var(--theme-hue,260),80%,60%,0.4)] group-hover:bg-[hsla(var(--theme-hue,260),80%,60%,0.2)]">
                <User size={32} />
              </div>
              
              <h3 className="text-center text-xl font-bold tracking-wide text-white transition-colors group-hover:text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-center text-sm font-semibold tracking-widest uppercase text-[hsl(var(--theme-hue,260),80%,60%)]">
                {member.role}
              </p>
              
              <div className="mt-4 overflow-hidden">
                <p className="text-center text-sm leading-relaxed text-zinc-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}