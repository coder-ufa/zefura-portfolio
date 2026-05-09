"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  const spotlight = useMotionTemplate`radial-gradient(1200px circle at ${smoothX}px ${smoothY}px, rgba(139, 92, 246, 0.35), rgba(59, 130, 246, 0.15), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-violet-500/30">
      
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 mix-blend-screen"
        style={{ background: spotlight }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] animate-float rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-[5%] top-[40%] h-[400px] w-[400px] animate-float rounded-full bg-blue-600/20 blur-[100px]" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] animate-float rounded-full bg-violet-900/20 blur-[150px]" style={{ animationDelay: "4s" }} />
      </div>

      <Navbar />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center sm:px-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-violet-200">
            Zefura.dev is online
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl"
        >
          Crafting Digital <br />
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          We are a focused collective of designers and developers building high-performance platforms, striking brand identities, and intuitive interfaces for ambitious startups and global brands.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
        >
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]"
          >
            <span className="relative z-10">Start a Project</span>
          </motion.a>
        </motion.div>
      </main>

      <div className="relative z-10">
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </div>
    </div>
  );
}