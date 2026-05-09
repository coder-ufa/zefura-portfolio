"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Sovereign Commerce", tag: "E-Commerce", color: "from-violet-500/20" },
  { title: "SignalOS Analytics", tag: "SaaS", color: "from-blue-500/20" },
  { title: "Astra Chain", tag: "Web3", color: "from-violet-500/20" },
  { title: "Helix Identity", tag: "Branding", color: "from-blue-500/20" },
];

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-6 py-32 sm:px-10">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Recent Work</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-colors hover:border-blue-500/50"
          >
            <div className={`mb-6 aspect-video w-full rounded-xl bg-gradient-to-br ${project.color} to-transparent`} />
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{project.tag}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}