"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, Megaphone, Palette, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const detailedServices = [
  { 
    title: "Web Development", 
    tagline: "High-performance architecture.",
    desc: "We engineer scalable, lightning-fast web applications. We don't use dated page builders. We write custom React, Next.js, and Node.js code to ensure your platform loads instantly, ranks highly on Google, and converts traffic effortlessly.", 
    icon: <MonitorSmartphone size={48} />,
    features: ["Custom React & Next.js Platforms", "E-Commerce & Headless Shopify", "Secure API Integrations", "Database Architecture"]
  },
  { 
    title: "Digital Marketing", 
    tagline: "Aggressive revenue scaling.",
    desc: "Stop wasting budget on campaigns that don't convert. Our growth team specializes in data-driven Meta Ads and Google PPC campaigns. We engineer sales funnels that aggressively target your ideal demographic and lower your customer acquisition costs.", 
    icon: <Megaphone size={48} />,
    features: ["Meta & Google PPC Ads", "Conversion Rate Optimization", "Technical SEO Audits", "Data & Funnel Analytics"]
  },
  { 
    title: "Creative Media", 
    tagline: "Premium visual ecosystems.",
    desc: "Your code can be flawless, but if your brand looks cheap, high-ticket clients will walk away. We design striking UI/UX interfaces and complete visual identities that immediately establish absolute authority in your specific market.", 
    icon: <Palette size={48} />,
    features: ["UI/UX Interface Design", "Brand Identity Systems", "Premium Typography", "Interactive Animations"]
  },
];

export default function ServicesPage() {
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
        <div className="absolute top-[10%] right-[20%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full blur-[150px] transform-gpu" style={{ backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.1)", willChange: "transform" }} />
      </div>

      <Navbar />

      <main className="relative z-10 flex min-h-screen flex-col items-center pt-32 pb-24 px-6 sm:px-10">
        
        {/* Hero */}
        <div className="mx-auto w-full max-w-5xl text-center mt-10 md:mt-16 mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Engineering <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)", textShadow: "0 0 40px hsla(var(--theme-hue), 80%, 60%, 0.4)" }}>dominance.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            We provide end-to-end digital solutions. From the first line of code to your billionth ad impression, we handle everything under one roof.
          </motion.p>
        </div>

        {/* Detailed Service Rows */}
        <div className="mx-auto w-full max-w-6xl flex flex-col gap-12">
          {detailedServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative z-0 flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.01] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_80px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              {/* Graphic Side */}
              <div className="relative flex w-full lg:w-2/5 items-center justify-center bg-[#111] p-16 lg:border-r lg:border-white/5 transition-colors duration-500 group-hover:bg-[#151515]">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,hsla(var(--theme-hue),80%,60%,0.8),transparent_70%)]" />
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }} className="text-[hsl(var(--theme-hue),80%,60%)] drop-shadow-[0_0_20px_hsla(var(--theme-hue),80%,60%,0.5)]">
                  {service.icon}
                </motion.div>
              </div>

              {/* Text Side */}
              <div className="flex w-full lg:w-3/5 flex-col justify-center p-10 sm:p-14">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)] mb-2">{service.tagline}</h2>
                <h3 className="text-4xl font-bold text-white mb-6">{service.title}</h3>
                <p className="text-lg leading-relaxed text-zinc-400 mb-8">{service.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-8 transition-colors duration-500 group-hover:border-[hsla(var(--theme-hue),80%,60%,0.3)]">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: "hsl(var(--theme-hue), 80%, 60%)" }} />
                      <span className="text-sm font-medium text-zinc-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}