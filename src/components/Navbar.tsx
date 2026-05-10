"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030303]/50 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        
        {/* NEW LOGO + TEXT CONTAINER */}
        <a href="#top" className="group flex items-center gap-3 text-xl font-bold tracking-tight text-white">
          
          {/* LOGO ICON - Synced to the color loop */}
          <div className="flex h-8 w-8 items-center justify-center text-[hsl(var(--theme-hue,260),80%,60%)] transition-colors duration-100">
            {/* Your Custom Zefura SVG */}
            <svg viewBox="0 0 901.8 901.14" className="h-full w-full" fill="currentColor">
              <circle cx="801.25" cy="801.14" r="100" />
              <path d="M950.87,149.26a99.58,99.58,0,0,1-26.39,67.68l-709.9,709.9A100.5,100.5,0,0,1,72.38,786.2L609.32,249.26H149.07a100,100,0,0,1,0-200h701.8A100,100,0,0,1,950.87,149.26Z" transform="translate(-49.07 -49.26)" />
            </svg>
          </div>

          {/* ZEFURA.DEV TEXT */}
          <span>
            Zefura
            <span style={{ color: "hsl(var(--theme-hue, 260), 80%, 60%)" }} className="transition-colors duration-100">
              .dev
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2, color: "#fff" }}
              className="text-xs uppercase tracking-widest text-zinc-400 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="ml-4 text-xs uppercase tracking-widest text-[hsl(var(--theme-hue,260),80%,60%)] transition-colors hover:text-white"
          >
            Contact
          </motion.a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full flex w-full flex-col bg-[#030303]/95 px-6 pb-8 pt-4 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-4 text-lg font-semibold tracking-wide text-white transition-colors hover:text-[hsl(var(--theme-hue,260),80%,60%)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-4 text-lg font-semibold tracking-wide text-[hsl(var(--theme-hue,260),80%,60%)] transition-colors hover:text-white"
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
}