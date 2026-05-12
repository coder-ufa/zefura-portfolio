"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative z-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform sm:p-16 lg:flex lg:items-center lg:justify-between lg:gap-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-[80px]" style={{ background: "hsl(var(--theme-hue), 80%, 60%)" }} />

        <div className="relative z-10 lg:w-3/5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)]">
            Welcome to Zefura
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:leading-tight">
            We architect digital experiences that command attention.
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Zefura is an elite collective of developers, designers, and growth strategists. We don't just build websites, we engineer custom digital platforms and branding ecosystems designed to scale ambitious businesses and disrupt industries.
          </p>
        </div>

        {/* LOGO SECTION - Box removed, floating naturally */}
        <div className="relative z-10 mt-10 hidden lg:flex lg:w-2/5 items-center justify-center">
             <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <svg 
                  viewBox="0 0 901.8 901.14" 
                  className="h-56 w-56 text-[hsl(var(--theme-hue),80%,60%)] drop-shadow-[0_0_40px_hsla(var(--theme-hue),80%,60%,0.4)] transition-transform duration-500 group-hover:scale-110" 
                  fill="currentColor"
                >
                  <circle cx="801.25" cy="801.14" r="100" />
                  <path d="M950.87,149.26a99.58,99.58,0,0,1-26.39,67.68l-709.9,709.9A100.5,100.5,0,0,1,72.38,786.2L609.32,249.26H149.07a100,100,0,0,1,0-200h701.8A100,100,0,0,1,950.87,149.26Z" transform="translate(-49.07 -49.26)" />
                </svg>
             </motion.div>
        </div>
      </motion.div>
    </section>
  );
}