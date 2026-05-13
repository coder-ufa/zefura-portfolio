"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Palette, Megaphone } from "lucide-react";
import Image from "next/image";

const projects = [
  { 
    title: "Travel Partner LK", 
    category: "Social Media Marketing", 
    desc: "Catapulted the brand to viral status across TikTok, engineering a high-impact content strategy that drove massive audience engagement and organic growth.", 
    icon: <Megaphone size={24} />,
    image: "/travel.jpeg", 
    link: "https://www.tiktok.com/@travelpartner.lk?_r=1&_t=ZS-96FSyAIXa6u"
  },
  { 
    title: "Barberyn Reef Ayurveda Resort", 
    category: "Branding", 
    desc: "Delivered a premium corporate newsletter and the prestigious Annual Presidential Award Book under a strict 48-hour deadline, seamlessly blending luxury wellness with corporate storytelling.", 
    icon: <Palette size={24} />,
    image: "/barberyn.jpg", 
    link: "https://www.barberynresorts.com/living-our-philosophy/barberyn-reef-sustainability-newsletter_2025/"
  },
  { 
    title: "Coming Soon", 
    category: "Web Development", 
    desc: "A high-performance enterprise web platform currently in active development. Check back soon for the full technical case study.", 
    icon: <Code size={24} />,
    link: "#"
  },
  { 
    title: "Coming Soon", 
    category: "Web Development", 
    desc: "An upcoming scalable digital ecosystem engineered for maximum speed, security, and global market reach.", 
    icon: <Code size={24} />,
    link: "#"
  },
];

export default function PortfolioPage() {
  useEffect(() => {
    let animationFrameId: number;
    let start = performance.now();
    const updateHue = (time: number) => {
      if (!document.hidden) {
        const progress = (time - start) / 20000;
        const hue = (260 + progress * 360) % 360;
        document.documentElement.style.setProperty('--theme-hue', hue.toFixed(1));
      }
      animationFrameId = requestAnimationFrame(updateHue);
    };
    animationFrameId = requestAnimationFrame(updateHue);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full blur-[120px] transform-gpu" style={{ backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.1)", willChange: "transform" }} />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center pt-32 pb-24 px-6 sm:px-10">
        
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-5xl text-center mt-10 md:mt-16 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Selected <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)", textShadow: "0 0 40px hsla(var(--theme-hue), 80%, 60%, 0.4)" }}>Works.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            A curated showcase of our finest engineering, design, and growth campaigns. We build platforms that dominate markets.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title + i}
              href={project.link}
              target={project.link !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: i * 0.1 }}
              className={`group relative z-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-2 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform ${project.link === "#" ? "cursor-default" : "cursor-pointer"}`}
            >
              {/* Image / Icon Placeholder area */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#111] sm:h-80">
                <div className="absolute inset-0 z-10 opacity-20 bg-gradient-to-br from-[hsla(var(--theme-hue),80%,60%,0.5)] to-transparent mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40" />
                
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-800 transition-transform duration-500 group-hover:scale-110">
                     {project.icon}
                  </div>
                )}
              </div>

              {/* Text Area */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)]">
                    {project.category}
                  </p>
                  {project.link !== "#" && (
                    <ArrowUpRight className="text-zinc-500 transition-colors duration-300 group-hover:text-white" size={20} />
                  )}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

    </div>
  );
}