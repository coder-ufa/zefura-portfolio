"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

const team = [
  { name: "Zeeshaan Shafraz", role: "Founder", image: "/ze.jpeg", linkedin: "https://linkedin.com" },
  { name: "Umar Farooq", role: "Co-Founder", image: "/fa.png", linkedin: "https://linkedin.com" },
  { name: "Mohammed Razaullah", role: "Co-Founder", image: "/ra.jpeg", linkedin: "https://linkedin.com" },
  { name: "Saleem Akthar", role: "Co-Founder", image: "/ak.jpeg", linkedin: "https://linkedin.com" },
  { name: "Umar Azath", role: "Co-Founder", image: "/um.jpeg", linkedin: "https://linkedin.com" },
  { name: "Abdulla Ibrahim", role: "Co-Founder", image: "/ab.jpeg", linkedin: "https://linkedin.com" },
];

export default function Team() {
  return (
    <section id="team" className="w-full py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 text-center sm:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Meet the core team.</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // FIXED COLLISION BUG: Added `z-0 hover:z-50` logic here!
              className="group relative z-0 flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-4 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div className="relative mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)] transition-transform duration-500 group-hover:scale-110">
                {member.image ? (
                  <Image src={member.image} alt={member.name} width={256} height={256} className="h-full w-full object-cover" draggable={false} />
                ) : (
                  <User size={40} />
                )}
              </div>
              <h3 className="text-center text-xl font-bold text-white transition-colors group-hover:text-white">{member.name}</h3>
              <p className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)]">
                {member.role}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}