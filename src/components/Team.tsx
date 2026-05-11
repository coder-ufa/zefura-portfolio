"use client";

import { motion, useAnimationFrame, useMotionValue, useMotionValueEvent } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const team = [
  { name: "Zeeshaan Shafraz", role: "Founder", desc: "Directs agency operations, oversees project architecture, and ensures elite delivery standards.", image: "/ze.jpeg", linkedin: "https://linkedin.com" },
  { name: "Umar Farooq", role: "Co-Founder", desc: "Architects the technical foundation and drives high-performance full-stack software development.", image: "/fa.png", linkedin: "https://linkedin.com" },
  { name: "Mohammed Razaullah", role: "Co-Founder", desc: "Assists in core engineering, manages technical infrastructure, and handles financial operations.", image: "/ra.jpeg", linkedin: "https://linkedin.com" },
  { name: "Saleem Akthar", role: "Co-Founder", desc: "Directs client relations, manages project onboarding, and ensures flawless customer experiences.", image: "/ak.jpeg", linkedin: "https://linkedin.com" },
  { name: "Umar Azath", role: "Co-Founder", desc: "Strategizes brand presence, drives audience engagement, and leads social media growth.", image: "/um.jpeg", linkedin: "https://linkedin.com" },
  { name: "Abdulla Ibrahim", role: "Co-Founder", desc: "Crafts premium visual identities, UI/UX systems, and high-conversion digital designs.", image: "/ab.jpeg", linkedin: "https://linkedin.com" },
];

// 4x duplication guarantees the user can NEVER swipe past the edge, no matter how fast they flick
const marqueeItems = [...team, ...team, ...team, ...team];

export default function Team() {
  // OPTIMIZATION: Using useRef instead of useState kills all re-render lag!
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  
  // The Magic Math: 6 items * (300px width + 24px gap) = 1944px per block.
  const blockWidth = 1944;
  
  // Start right in the middle of our duplicated arrays
  const x = useMotionValue(-blockWidth); 

  // OPTIMIZATION: This perfectly wraps the loop instantly during both auto-scroll AND fast swipes
  useMotionValueEvent(x, "change", (latest) => {
    if (latest <= -(blockWidth * 2)) {
      x.set(latest + blockWidth);
    } else if (latest >= 0) {
      x.set(latest - blockWidth);
    }
  });

  // The Auto-Scroll Engine (60fps GPU powered)
  useAnimationFrame((t, delta) => {
    // Only scroll if the user isn't holding or hovering it
    if (!isHovered.current && !isDragging.current) {
      x.set(x.get() - (45 * (delta / 1000))); // 45px per second (Medium, smooth pace)
    }
  });

  return (
    <section id="team" className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10 overflow-hidden">
      <div className="mx-auto mb-8 w-full max-w-7xl text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Meet the team.
        </h2>
      </div>

      <div 
        className="relative flex w-full overflow-hidden py-24" 
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        <motion.div 
          className="flex w-max flex-nowrap items-center gap-6 pr-6 cursor-grab active:cursor-grabbing"
          style={{ x, touchAction: "pan-y" }} 
          
          // --- THE ULTIMATE SWIPE UPGRADE ---
          drag="x"
          dragMomentum={true} // Gives it that premium "glide" when you flick and let go
          onDragStart={() => { isDragging.current = true; }}
          onDragEnd={() => { isDragging.current = false; }}
        >
          {marqueeItems.map((member, i) => (
            <motion.a
              key={`${member.name}-${i}`}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => { isHovered.current = true; }}
              onMouseLeave={() => { isHovered.current = false; }}
              
              // THE GRAVITY & GLOW UPGRADE:
              // animate-breathe creates the gravity floating. hover states create the pop and glow.
              // Added transform-gpu to ensure the massive glow doesn't lag the scroll.
              className="animate-breathe transform-gpu group relative flex h-[340px] w-[300px] shrink-0 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-4 hover:scale-[1.08] hover:border-[hsla(var(--theme-hue,260),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_80px_hsla(var(--theme-hue,260),100%,60%,0.5)] active:scale-100"
              style={{ animationDelay: `${(i % 6) * 0.5}s` }} 
            >
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[hsla(var(--theme-hue,260),80%,60%,0.3)] bg-[hsla(var(--theme-hue,260),80%,60%,0.15)] text-[hsl(var(--theme-hue,260),80%,60%)] transition-all duration-500 group-hover:scale-110 group-hover:border-[hsla(var(--theme-hue,260),80%,60%,0.8)] group-hover:bg-[hsla(var(--theme-hue,260),80%,60%,0.4)]">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={`${member.name} profile`}
                    width={256} 
                    height={256}
                    quality={100} 
                    style={{ backfaceVisibility: "hidden" }} 
                    className="pointer-events-none h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    draggable={false} // Crucial: Stops the browser from trying to drag the image file itself
                  />
                ) : (
                  <User size={32} />
                )}
              </div>
              
              <h3 className="text-center text-xl font-bold tracking-wide text-white transition-colors group-hover:text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-center text-sm font-semibold tracking-widest uppercase text-[hsl(var(--theme-hue,260),80%,60%)] transition-colors duration-1000">
                {member.role}
              </p>
              
              <div className="mt-4 overflow-hidden">
                <p className="text-center text-sm leading-relaxed text-zinc-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                  {member.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}