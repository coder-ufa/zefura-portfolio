"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Sparkles, LayoutTemplate } from "lucide-react";

const services = [
  { 
    title: "Web Design", 
    desc: "We build fast, responsive, and visually stunning websites engineered for performance and high conversion rates.", 
    icon: <MonitorSmartphone size={32} className="mb-6 text-violet-400" />
  },
  { 
    title: "UI/UX Design", 
    desc: "Intuitive and aesthetic digital interfaces crafted to provide seamless user experiences and drive engagement.", 
    icon: <LayoutTemplate size={32} className="mb-6 text-blue-400" />
  },
  { 
    title: "Branding", 
    desc: "Iconic visual identities, typography, and brand strategies designed to make your business stand out globally.", 
    icon: <Sparkles size={32} className="mb-6 text-violet-400" />
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-32 sm:px-10">
      <div className="mb-16 text-center sm:text-left">
        <h2 className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          What we do
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl transition-colors hover:border-violet-500/50"
          >
            {service.icon}
            <h3 className="mb-4 text-2xl font-semibold text-white">{service.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}