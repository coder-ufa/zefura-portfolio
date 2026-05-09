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
        <a href="#top" className="text-xl font-bold tracking-tight text-white">
          Zefura<span className="text-violet-500">.dev</span>
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
          {/* Minimal Contact Link without the heavy box */}
          <motion.a
            href="#contact"
            whileHover={{ y: -2, color: "#fff" }}
            className="ml-4 text-xs uppercase tracking-widest text-violet-400 transition-colors"
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
              className="py-4 text-lg font-semibold tracking-wide text-white transition-colors hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-4 text-lg font-semibold tracking-wide text-violet-400 transition-colors hover:text-white"
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
}