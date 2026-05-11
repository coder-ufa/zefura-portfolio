"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#030303]/95 lg:bg-[#030303]/80 lg:backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        
        <a href="#top" onClick={() => setIsOpen(false)} className="relative z-50 flex shrink-0 items-center gap-3 text-xl font-bold tracking-tight text-white">
          {/* FIX: Removed comma fallback so React compiles the inline style properly */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center" style={{ color: "hsl(var(--theme-hue), 80%, 60%)" }}>
            <svg viewBox="0 0 901.8 901.14" className="h-full w-full" fill="currentColor">
              <circle cx="801.25" cy="801.14" r="100" />
              <path d="M950.87,149.26a99.58,99.58,0,0,1-26.39,67.68l-709.9,709.9A100.5,100.5,0,0,1,72.38,786.2L609.32,249.26H149.07a100,100,0,0,1,0-200h701.8A100,100,0,0,1,950.87,149.26Z" transform="translate(-49.07 -49.26)" />
            </svg>
          </div>
          <span className="shrink-0">
            zefura
            {/* FIX: Removed comma fallback */}
            <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)" }}>
              .dev
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <motion.a key={link.label} href={link.href} whileHover={{ y: -2, color: "#fff" }} className="text-xs uppercase tracking-widest text-zinc-400 transition-colors">
              {link.label}
            </motion.a>
          ))}
          {/* FIX: Removed comma fallback */}
          <motion.a href="#contact" whileHover={{ y: -2 }} style={{ color: "hsl(var(--theme-hue), 80%, 60%)" }} className="ml-4 text-xs uppercase tracking-widest hover:text-white">
            Contact
          </motion.a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="relative z-50 -mr-2 block shrink-0 p-2 text-white lg:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-100%" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ willChange: "transform, opacity" }} className="fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-[#030303] px-6 lg:hidden">
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a key={link.label} href={link.href} onClick={() => setIsOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.2 }} className="text-4xl font-bold tracking-tight text-white active:text-[hsl(var(--theme-hue),80%,60%)]">
                  {link.label}
                </motion.a>
              ))}
              {/* FIX: Removed comma fallbacks here too */}
              <motion.a href="#contact" onClick={() => setIsOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] px-10 py-4 text-xl font-bold tracking-wide text-[hsl(var(--theme-hue),80%,60%)] active:bg-[hsla(var(--theme-hue),80%,60%,0.1)] active:text-white">
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}