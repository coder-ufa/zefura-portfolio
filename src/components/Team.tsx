"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const team = [
  { 
    name: "Zeeshaan Shafraz", 
    role: "Founder", 
    desc: "Directs agency operations, oversees project architecture, and ensures elite delivery standards.",
    image: "/zee.jpeg" 
  },
  { 
    name: "Umar Farooq", 
    role: "Co-Founder", 
    desc: "Architects the technical foundation and drives high-performance full-stack software development.",
    image: "/farooq.png" 
  },
  { 
    name: "Mohammed Razaullah", 
    role: "Co-Founder", 
    desc: "Assists in core engineering, manages technical infrastructure, and handles financial operations.",
    image: "/razaullah.jpeg" 
  },
  { 
    name: "Saleem Akthar", 
    role: "Co-Founder", 
    desc: "Directs client relations, manages project onboarding, and ensures flawless customer experiences.",
    image: "/akthar.jpeg" 
  },
  { 
    name: "Umar Azath", 
    role: "Co-Founder", 
    desc: "Strategizes brand presence, drives audience engagement, and leads social media growth.",
    image: "/umar.jpeg" 
  },
  { 
    name: "Abdulla Ibrahim", 
    role: "Co-Founder", 
    desc: "Crafts premium visual identities, UI/UX systems, and high-conversion digital designs.",
    image: "/abdulla.jpeg" 
  },
];

// Reduced DOM load: Only 4 sets (24 items) needed for a perfect seamless loop
const marqueeItems = [...team, ...team, ...team, ...team];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Start offset so user can immediately swipe left OR right
  const x = useMotionValue(-1944); 

  useAnimationFrame((t, delta) => {
    if (isHovered || isDragging) return;
    
    let currentX = x.get();
    // Auto-scroll speed
    currentX -= 60 * (delta / 1000); 
    
    // Seamless Loop Logic: 1 set of 6 cards = 1944px (300px width + 24px gap each)
    if (currentX <= -3888) {
      currentX += 1944; 
    } else if (currentX >= 0) {
      currentX -= 1944;
    }
    
    x.set(currentX);
  });

  // Native Trackpad Swipe Support
  const handleWheel = (e: React.WheelEvent) => {
    // Only intercept horizontal swipes so vertical page scrolling still works
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      let currentX = x.get() - e.deltaX;
      
      // Maintain the infinite loop while swiping
      if (currentX <= -3888) currentX += 1944;
      else if (currentX >= 0) currentX -= 1944;
      
      x.set(currentX);
    }
  };

  return (
    <section id="team" className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10">
      <div className="mx-auto mb-8 w-full max-w-7xl text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Meet the team.
        </h2>
      </div>

      <div 
        ref={containerRef}
        onWheel={handleWheel}
        className="relative flex w-full overflow-hidden py-20" 
        style={{ 
          // Re-enabled touch-pan-y so mobile devices scroll up/down smoothly while swiping horizontally
          touchAction: "pan-y",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        <motion.div 
          className="flex w-max flex-nowrap items-center gap-6 pr-6 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -5000, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {marqueeItems.map((member, i) => (
            <motion.div
              key={`${member.name}-${i}`}
              // Removed CPU-heavy margin animation. Replaced with pure GPU scale and zIndex pop.
              whileHover={{ scale: 1.15, zIndex: 50 }}
              whileTap={{ scale: 1.1, zIndex: 50 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{ willChange: "transform" }}
              // Intensified the glowing drop shadow on hover to make it "pop"
              className="group relative flex h-[340px] w-[300px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-colors duration-300 hover:border-[hsla(var(--theme-hue,260),80%,60%,0.6)] hover:bg-[hsla(var(--theme-hue,260),80%,60%,0.08)] hover:shadow-[0_0_100px_hsla(var(--theme-hue,260),100%,60%,0.4)]"
            >
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[hsla(var(--theme-hue,260),80%,60%,0.3)] bg-[hsla(var(--theme-hue,260),80%,60%,0.15)] text-[hsl(var(--theme-hue,260),80%,60%)] transition-all duration-300 group-hover:scale-110 group-hover:border-[hsla(var(--theme-hue,260),80%,60%,0.6)] group-hover:bg-[hsla(var(--theme-hue,260),80%,60%,0.3)]">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={`${member.name} profile`}
                    width={256} 
                    height={256}
                    quality={100} 
                    style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  />
                ) : (
                  <User size={32} />
                )}
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
        </motion.div>
      </div>
    </section>
  );
}