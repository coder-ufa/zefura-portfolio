"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Building, Activity, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  { 
    title: "E-Commerce & Retail", 
    desc: "We build high-conversion headless Shopify and custom web stores that handle massive traffic spikes and aggressively lower cart abandonment.", 
    icon: <ShoppingCart size={32} /> 
  },
  { 
    title: "Real Estate & PropTech", 
    desc: "Premium digital portfolios, virtual tour integrations, and lead-generation funnels designed for luxury real estate agencies and developers.", 
    icon: <Building size={32} /> 
  },
  { 
    title: "Healthcare & MedTech", 
    desc: "HIPAA-compliant platforms, intuitive patient portals, and booking systems that streamline operations for modern medical practices.", 
    icon: <Activity size={32} /> 
  },
  { 
    title: "FinTech & Web3", 
    desc: "Highly secure, low-latency financial dashboards, crypto platforms, and decentralized applications engineered with elite data architecture.", 
    icon: <Landmark size={32} /> 
  },
];

export default function IndustriesPage() {
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
        <div className="absolute top-[20%] right-[20%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full blur-[120px] transform-gpu" style={{ backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.1)", willChange: "transform" }} />
      </div>

      <Navbar />

      <main className="relative z-10 flex min-h-screen flex-col items-center pt-32 pb-24 px-6 sm:px-10">
        
        {/* Hero */}
        <div className="mx-auto w-full max-w-5xl text-center mt-10 md:mt-16 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Industries we <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)", textShadow: "0 0 40px hsla(var(--theme-hue), 80%, 60%, 0.4)" }}>dominate.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            We don't believe in one-size-fits-all. We engineer bespoke digital solutions uniquely tailored to the specific demands, compliance rules, and consumer behaviors of your market.
          </motion.p>
        </div>

        {/* Industry Grid */}
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative z-0 flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)]">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}>
                  {industry.icon}
                </motion.div>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white transition-colors group-hover:text-white">
                {industry.title}
              </h3>
              <p className="text-lg leading-relaxed text-zinc-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}