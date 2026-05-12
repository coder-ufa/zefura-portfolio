"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Welcome from "@/components/Welcome";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import TeamSlider from "@/components/TeamSlider";
import Footer from "@/components/Footer";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 500);
      mouseY.set(e.clientY - 500);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
      
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 h-[1000px] w-[1000px] hidden lg:block opacity-40"
        style={{ x: smoothX, y: smoothY, background: "radial-gradient(circle, hsla(var(--theme-hue), 80%, 60%, 0.15), transparent 70%)", willChange: "transform" }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] animate-float rounded-full blur-[60px] md:blur-[120px] transform-gpu" style={{ backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.15)", willChange: "transform" }} />
        <div className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] animate-float rounded-full blur-[80px] md:blur-[150px] transform-gpu" style={{ animationDelay: "4s", backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.1)", willChange: "transform" }} />
      </div>

      <Navbar />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center sm:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="transform-gpu mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111]/80 px-5 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-[hsl(var(--theme-hue),80%,60%)]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--theme-hue),80%,60%)]" />
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-300">Zefura.dev is online</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="transform-gpu max-w-4xl text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl"
        >
          Crafting digital <br />
          <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)", textShadow: "0 0 40px hsla(var(--theme-hue), 80%, 60%, 0.4)" }}>
            excellence.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="transform-gpu mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          We are a focused collective of designers and developers building high-performance platforms, striking brand identities, and intuitive interfaces for ambitious startups and global brands.
        </motion.p>
      </main>

      <div className="relative z-10">
        <Stats />
        <Welcome />
        <WhyChooseUs />
        <Services />
        <TeamSlider />
        <Footer />
      </div>
    </div>
  );
}