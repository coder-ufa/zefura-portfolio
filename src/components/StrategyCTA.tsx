"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StrategyCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] px-6 py-20 text-center shadow-2xl sm:px-16 sm:py-24">
        
        {/* Dynamic GPU glow perfectly synced to the global rainbow engine */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-20" 
          style={{ background: "radial-gradient(circle at center, hsla(var(--theme-hue), 80%, 60%, 0.4), transparent 70%)" }} 
        />
        
        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ready to scale your digital presence?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-zinc-400"
          >
            Stop leaving money on the table. Book a free 30-minute strategy call with our core team and let's map out your exact growth blueprint.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#contact"
              className="group mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] active:scale-95"
            >
              Claim Your Free Strategy Call
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}