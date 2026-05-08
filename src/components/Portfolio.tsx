"use client";

import { motion } from "framer-motion";

const projects = [
  "Full-Stack MERN E-Commerce",
  "SaaS Analytics Dashboard",
  "Web3 Platform",
  "Brand Identity for FinTech",
];

export default function Portfolio() {
  return (
    <section id="work" className="relative z-10 mt-12 w-full max-w-5xl scroll-mt-24">
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
        Recent Work
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project}
            whileHover={{ scale: 1.02, borderColor: "rgba(167,139,250,0.75)" }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-7"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(140deg, rgba(24,24,31,0.98) 0%, rgba(32,24,46,0.9) 100%)"
                    : "linear-gradient(140deg, rgba(18,18,24,0.98) 0%, rgba(24,28,44,0.9) 100%)",
              }}
            />
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full min-h-44 flex-col justify-between">
              <h3 className="max-w-[18ch] text-2xl font-semibold leading-snug text-white">
                {project}
              </h3>

              <motion.a
                href="#"
                initial={{ opacity: 0, y: 8 }}
                whileHover={{ scale: 1.03 }}
                className="mt-8 inline-flex w-fit items-center rounded-full border border-violet-300/20 bg-violet-500/15 px-5 py-2 text-sm font-semibold text-violet-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                View Project
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
