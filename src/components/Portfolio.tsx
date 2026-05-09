"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Swap these out with your actual agency projects whenever you are ready!
const projects = [
  { title: "E-Commerce Platform", category: "Web Development", desc: "A high-conversion headless storefront built with Next.js and integrated with Stripe." },
  { title: "Fintech Dashboard", category: "UI/UX Design", desc: "Complex financial data visualized into an intuitive, responsive user interface." },
  { title: "Global Agency", category: "Branding", desc: "A striking visual identity and design system for a top-tier creative collective." },
  { title: "Crypto Exchange", category: "Web3 Application", desc: "A secure, lightning-fast cryptocurrency trading platform with real-time data." },
];

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Selected works.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            // Borders, background, and drop shadow are now fully synced to the loop
            className="group relative flex min-h-[300px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-300 hover:border-[hsla(var(--theme-hue,260),80%,60%,0.5)] hover:bg-[hsla(var(--theme-hue,260),80%,60%,0.02)] hover:shadow-[0_0_60px_hsla(var(--theme-hue,260),80%,60%,0.15)]"
          >
            <div>
              {/* Category text synced */}
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[hsl(var(--theme-hue,260),80%,60%)] transition-colors">
                {project.category}
              </p>
              <h3 className="mb-4 text-3xl font-bold text-white transition-colors group-hover:text-white">
                {project.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                {project.desc}
              </p>
            </div>

            {/* Circular Arrow Icon - Border, background, and text synced on hover */}
            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[hsla(var(--theme-hue,260),80%,60%,0.5)] group-hover:bg-[hsla(var(--theme-hue,260),80%,60%,0.1)] group-hover:text-[hsl(var(--theme-hue,260),80%,60%)]">
              <ArrowUpRight size={24} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}