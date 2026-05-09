"use client";

import { motion } from "framer-motion";

const team = ["Zeeshan", "Farooq", "Razaullah", "Umar", "Akthar", "Abdullah"];

export default function Team() {
  return (
    <section id="team" className="mx-auto w-full max-w-7xl px-6 py-32 sm:px-10">
      <div className="mb-16 text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          The Team
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {team.map((member, i) => (
          <motion.div
            key={member}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-colors hover:border-violet-500/50 hover:bg-white/[0.02]"
          >
            <h3 className="text-center text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-violet-300">
              {member}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}