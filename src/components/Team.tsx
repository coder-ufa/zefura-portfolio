"use client";

import { motion } from "framer-motion";

const teamMembers = [
  { name: "Zeeshan" },
  { name: "Umar" },
  { name: "Farooq" },
  { name: "Razaullah" },
  { name: "Akthar" },
  { name: "Abdullah" },
];

export default function Team() {
  return (
    <section id="team" className="relative z-10 mt-12 w-full max-w-5xl scroll-mt-24">
      <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
        Meet the Squad
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <motion.article
            key={member.name}
            whileHover={{
              y: -4,
              borderColor: "rgba(167,139,250,0.8)",
              boxShadow: "0 0 35px -18px rgba(139,92,246,0.95)",
            }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6"
            style={{ boxShadow: "0 0 0 rgba(139,92,246,0)" }}
          >
            <div
              className="mb-4 h-16 w-16 rounded-full border border-violet-300/30 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
                  member.name
                )}&backgroundType=gradientLinear&backgroundColor=1e293b,4c1d95&textColor=ffffff)`,
              }}
            />
            <h3 className="text-base font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-zinc-300">Designers &amp; Developers</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
