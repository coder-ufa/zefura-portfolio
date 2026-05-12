"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

const team = [
  { 
    name: "Zeeshaan Shafraz", 
    role: "Founder", 
    desc: "Directs agency operations, oversees project architecture, and ensures elite delivery standards.",
    image: "/ze.jpeg", 
    linkedin: "https://www.linkedin.com/in/zeeshaan-shafraz-zefura/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bb8I9%2BC8FQXaem9nyYp2FJg%3D%3D" 
  },
  { 
    name: "Umar Farooq", 
    role: "Co-Founder", 
    desc: "Architects the technical foundation and drives high-performance full-stack software development.",
    image: "/fa.png", 
    linkedin: "https://www.linkedin.com/in/umar-farooq-ahamed-751439268/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bi8LTd9CDTYiE3s%2BNN%2BD7Dg%3D%3D" 
  },
  { 
    name: "Mohammed Razaullah", 
    role: "Co-Founder", 
    desc: "Assists in core engineering, manages technical infrastructure, and handles financial operations.",
    image: "/ra.jpeg", 
    linkedin: "https://www.linkedin.com/in/mohammedrazaullah/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bt%2BFloB0lRFyVpa7%2B5iTawQ%3D%3D" 
  },
  { 
    name: "Saleem Akthar", 
    role: "Co-Founder", 
    desc: "Directs client relations, manages project onboarding, and ensures flawless customer experiences.",
    image: "/ak.jpeg", 
    linkedin: "https://www.linkedin.com/in/saleem-akthar-ahmed-116878359/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2MWmJpP2R2KjkWGGMXGmSg%3D%3D" 
  },
  { 
    name: "Umar Azath", 
    role: "Co-Founder", 
    desc: "Strategizes brand presence, drives audience engagement, and leads social media growth.",
    image: "/um.jpeg", 
    linkedin: "https://www.linkedin.com/in/umar-azath/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKLvWZkksQ46gNyGErHUEkg%3D%3D" 
  },
  { 
    name: "Abdulla Ibrahim", 
    role: "Co-Founder", 
    desc: "Crafts premium visual identities, UI/UX systems, and high-conversion digital designs.",
    image: "/ab.jpeg", 
    linkedin: "https://www.linkedin.com/in/abdulla-ibrahim-5451a72b8/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BazEDKnZWQcagl%2Fft%2FQPM2w%3D%3D" 
  },
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
              <p className="mt-4 text-center text-sm leading-relaxed text-zinc-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                {member.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}