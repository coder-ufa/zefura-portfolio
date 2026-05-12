"use client";

import { motion } from "framer-motion";
import { Layers, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";

const reasons = [
  { title: "End-to-End Solutions", desc: "All your digital needs under one roof. From architecture to execution, we handle everything hassle free.", icon: <Layers size={32} /> },
  { title: "Tailored Strategies", desc: "Custom-engineered solutions built specifically for your unique business goals and market positioning.", icon: <Lightbulb size={32} /> },
  { title: "Elite Engineering", desc: "A core team of experienced professionals with high-tier creative and technical expertise.", icon: <ShieldCheck size={32} /> },
  { title: "Proven ROI", desc: "Measurable, data-driven results that increase sales, improve visibility, and deliver real business growth.", icon: <TrendingUp size={32} /> },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
      <div className="mb-16 text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Why choose Zefura.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: i * 0.1 }}
            className="group relative z-0 flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)]">
              {/* THE GRAVITY EFFECT */}
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                {reason.icon}
              </motion.div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-white">
              {reason.title}
            </h3>
            <p className="text-base leading-relaxed text-zinc-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}