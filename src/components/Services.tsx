"use client";

import { motion } from "framer-motion";
import { MonitorCog, Palette, Sparkles } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description:
      "Fast, modern, and conversion-focused websites engineered for performance and clarity.",
    icon: MonitorCog,
    cardClassName: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive product flows and polished interfaces that feel effortless across devices.",
    icon: Palette,
    cardClassName: "md:row-span-2",
  },
  {
    title: "Branding",
    description:
      "Distinct visual systems and brand language that make your business memorable.",
    icon: Sparkles,
    cardClassName: "",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 mt-10 w-full max-w-5xl scroll-mt-24"
    >
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
        Our Expertise
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(167,139,250,0.8)",
                boxShadow: "0 0 40px -16px rgba(139,92,246,0.9)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm ${service.cardClassName}`}
              style={{
                boxShadow: "0 0 0 rgba(139,92,246,0)",
              }}
            >
              <div className="mb-4 inline-flex rounded-xl border border-violet-300/20 bg-violet-500/10 p-3 text-violet-200">
                <Icon size={20} strokeWidth={2.2} />
              </div>

              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
