"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Megaphone, Palette } from "lucide-react";

const services = [
  { 
    title: "Digital Marketing", 
    desc: "Data-driven campaigns and aggressive growth strategies designed to scale your revenue and lower customer acquisition costs.", 
    icon: <Megaphone size={32} />
  },
  { 
    title: "Web Development", 
    desc: "High-performance, custom-coded web applications and scalable platforms built with modern React and Next.js architecture.", 
    icon: <MonitorSmartphone size={32} />
  },
  { 
    title: "Creative Media", 
    desc: "Premium visual ecosystems, striking UI/UX design, and brand identities that establish immediate market authority and trust.", 
    icon: <Palette size={32} />
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
      <div className="mb-16 text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Our expertise.
        </h2>
      </div>

      {/* 3-Column Grid for perfect balance */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: i * 0.1 }}
            className="group relative z-0 flex h-full flex-col justify-start overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
          >
            {/* Gravity Icon */}
            <div className="mb-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)]">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}>
                {service.icon}
              </motion.div>
            </div>
            
            {/* Title & Description */}
            <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-white">
              {service.title}
            </h3>
            <p className="text-base leading-relaxed text-zinc-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}