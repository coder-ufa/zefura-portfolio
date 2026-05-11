"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // FIX: Lowered mass and damping so the spotlight tracks the cursor instantly
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 500);
      mouseY.set(e.clientY - 500);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // FIX: The Color Engine is now throttled. It only touches the DOM twice a second.
  // The CSS 'transition-colors duration-1000' will make it look perfectly smooth!
  useEffect(() => {
    let hue = 260; 
    const interval = setInterval(() => {
      if (!document.hidden) {
        hue = (hue + 5) % 360; 
        document.documentElement.style.setProperty('--theme-hue', `${hue}`);
      }
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-white/20">
      
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 h-[1000px] w-[1000px] mix-blend-screen hidden lg:block"
        style={{ 
          x: smoothX, 
          y: smoothY,
          background: "radial-gradient(circle, hsla(var(--theme-hue, 260), 80%, 60%, 0.2), transparent 70%)",
          willChange: "transform" 
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] animate-float rounded-full blur-[120px] transition-colors duration-1000 transform-gpu" 
          style={{ backgroundColor: "hsla(var(--theme-hue, 260), 80%, 60%, 0.15)", willChange: "background-color, transform" }} 
        />
        <div 
          className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] animate-float rounded-full blur-[150px] transition-colors duration-1000 transform-gpu" 
          style={{ animationDelay: "4s", backgroundColor: "hsla(var(--theme-hue, 260), 80%, 60%, 0.1)", willChange: "background-color, transform" }} 
        />
      </div>

      <Navbar />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center sm:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-[hsl(var(--theme-hue,260),80%,60%)] transition-colors duration-1000" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--theme-hue,260),80%,60%)] transition-colors duration-1000" />
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-300">
            Zefura.dev is online
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl"
        >
          Crafting digital <br />
          <span 
            className="transition-colors duration-1000"
            style={{ 
              color: "hsl(var(--theme-hue, 260), 80%, 60%)",
              textShadow: "0 0 40px hsla(var(--theme-hue, 260), 80%, 60%, 0.4)" 
            }}
          >
            excellence.
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
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
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