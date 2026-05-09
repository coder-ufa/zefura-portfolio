"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Sparkles, LayoutTemplate, Presentation, Target, Share2 } from "lucide-react";

// All icons now use the dynamic text-[hsl(...)] color
const services = [
  { 
    title: "Web Design", 
    desc: "We build fast, responsive, and visually stunning websites engineered for performance and high conversion rates.", 
    icon: <MonitorSmartphone size={32} className="mb-6 text-[hsl(var(--theme-hue,260),80%,60%)]" />
  },
  { 
    title: "UI/UX Design", 
    desc: "Intuitive and aesthetic digital interfaces crafted to provide seamless user experiences and drive engagement.", 
    icon: <LayoutTemplate size={32} className="mb-6 text-[hsl(var(--theme-hue,260),80%,60%)]" />
  },
  { 
    title: "Branding", 
    desc: "Iconic visual identities, typography, and brand strategies designed to make your business stand out globally.", 
    icon: <Sparkles size={32} className="mb-6 text-[hsl(var(--theme-hue,260),80%,60%)]" />
  },
  { 
    title: "Billboard Design", 
    desc: "High-impact physical and digital billboard designs crafted to capture attention and dominate the urban landscape.", 
    icon: <Presentation size={32} className="mb-6 text-[hsl(var(--theme-hue,260),80%,60%)]" />
  },
  { 
    title: "Meta Ads", 
    desc: "Data-driven advertising campaigns engineered for precision targeting, maximum ROI, and exponential brand growth.", 
    icon: <Target size={32} className="mb-6 text-[hsl(var(--theme-hue,260),80%,60%)]" />
  },
  { 
    title: "Social Media Marketing", 
    desc: "Strategic content creation and audience engagement that builds brand loyalty and drives viral reach across platforms.", 
    icon: <Share2 size={32} className="mb-6 text-[hsl(var(--theme-hue,260),80%,60%)]" />
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <div className="mb-16 text-center sm:text-left">
        <h2 className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Our expertise.
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
            // Hover border now glows dynamically!
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl transition-colors duration-300 hover:border-[hsla(var(--theme-hue,260),80%,60%,0.5)]"
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