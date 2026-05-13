"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Rocket, Users, BookOpen } from "lucide-react";
import Team from "@/components/Team";

export default function AboutPage() {
  
  useEffect(() => {
    let animationFrameId: number;
    let start = performance.now();
    
    const updateHue = (time: number) => {
      if (!document.hidden) {
        const progress = (time - start) / 20000;
        const hue = (260 + progress * 360) % 360;
        document.documentElement.style.setProperty('--theme-hue', hue.toFixed(1));
      }
      animationFrameId = requestAnimationFrame(updateHue);
    };

    animationFrameId = requestAnimationFrame(updateHue);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[80%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full blur-[100px] transform-gpu md:h-[500px] md:w-[500px]" style={{ backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.1)", animationDelay: "2s", willChange: "transform" }} />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center pt-32 pb-16">
        
        {/* 1. Hero Section */}
        <div className="mx-auto w-full max-w-5xl px-6 text-center sm:px-10 mt-10 md:mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Built by engineers. <br className="hidden sm:block" />
            <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)", textShadow: "0 0 40px hsla(var(--theme-hue), 80%, 60%, 0.4)" }}>
              Driven by design.
            </span>
          </motion.h1>
        </div>

        {/* 2. Who We Are & Our Story */}
        <section className="mx-auto mt-24 w-full max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            
            {/* Who We Are Box */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative z-0 flex flex-col justify-start overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[hsla(var(--theme-hue),80%,60%,0.1)] text-[hsl(var(--theme-hue),80%,60%)]">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <Users size={32} />
                </motion.div>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)]">Who We Are</h2>
              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">We are digital architects.</h3>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Zefura is an elite collective of software engineers, UI/UX designers, and growth strategists. We operate at the intersection of high-performance technology and premium brand aesthetics. We don't just build websites; we engineer custom digital platforms designed to scale ambitious businesses and disrupt industries.
              </p>
            </motion.div>

            {/* Our Story Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative z-0 flex flex-col justify-start overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[hsla(var(--theme-hue),80%,60%,0.1)] text-[hsl(var(--theme-hue),80%,60%)]">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
                  <BookOpen size={32} />
                </motion.div>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)]">Our Story</h2>
              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">From code to collective.</h3>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                What started as a group of independent developers solving complex technical challenges quickly evolved into a full-scale agency. We noticed a massive gap in the market: agencies either offered beautiful designs with terrible, slow code, or highly functional software that looked incredibly dated. Zefura was born to master both.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. Vision & Mission Cards */}
        <section className="mx-auto mt-8 w-full max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative z-0 flex flex-col justify-start overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[hsla(var(--theme-hue),80%,60%,0.1)] text-[hsl(var(--theme-hue),80%,60%)]">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <Target size={32} />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                To be the premier digital engineering partner for global brands and ambitious startups, setting the absolute gold standard for web performance, technical architecture, and aesthetic dominance in the industry.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative z-0 flex flex-col justify-start overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[hsla(var(--theme-hue),80%,60%,0.1)] text-[hsl(var(--theme-hue),80%,60%)]">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
                  <Rocket size={32} />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                To empower businesses with custom-engineered, high-conversion platforms. We exist to eliminate digital friction, automate growth, drive massive revenue, and help our clients leave a lasting digital legacy.
              </p>
            </motion.div>
            
          </div>
        </section>

        {/* 4. The Core Team Grid */}
        <div className="mt-12 w-full">
            <Team />
        </div>
        
      </main>
    </div>
  );
}