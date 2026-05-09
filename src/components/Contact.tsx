"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react"; // Only keeping Mail from lucide

// Custom Instagram Icon SVG
const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Custom Facebook Icon SVG
const FacebookIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-4xl px-6 py-32 sm:px-10">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Ready to Build?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
        Bring us your vision, and we’ll turn it into a flawless digital reality. Reach out today to get started.
        </p>
      </div>

      {/* Massive Glowing Email Box */}
      <motion.a
        href="mailto:zefura.dev@gmail.com"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-violet-500/30 bg-violet-500/10 py-16 backdrop-blur-md transition-all hover:border-violet-500/60 hover:bg-violet-500/20"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <Mail size={48} className="relative z-10 mb-6 text-violet-300 transition-transform duration-300 group-hover:-translate-y-2 group-hover:text-white" />
        <h3 className="relative z-10 text-2xl font-bold text-white sm:text-4xl">
          zefura.dev@gmail.com
        </h3>
      </motion.a>

      {/* Social Media Links */}
      <div className="mt-16 flex items-center justify-center gap-8">
        <motion.a
          href="https://www.instagram.com/zefura.dev/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, color: "#fff" }}
          className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-violet-400"
        >
          <InstagramIcon size={24} />
          <span className="text-lg font-medium">zefura.dev</span>
        </motion.a>
        
        <motion.a
          href="https://web.facebook.com/profile.php?id=61589595954690"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, color: "#fff" }}
          className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-blue-400"
        >
          <FacebookIcon size={24} />
          <span className="text-lg font-medium">Zefura.Dev</span>
        </motion.a>
      </div>

      <footer className="mt-32 border-t border-white/10 pt-8 text-center text-sm tracking-widest text-zinc-600">
        © 2026 ZEFURA.DEV
      </footer>
    </section>
  );
}