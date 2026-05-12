"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030303] pt-20">
      
      {/* 1. The Pre-Footer CTA Box */}
      <div className="mx-auto mb-20 max-w-7xl px-6 sm:px-10">
        <div className="group relative z-0 flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] px-10 py-16 shadow-2xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] md:flex-row md:px-16 will-change-transform">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-20" style={{ background: "radial-gradient(circle at right, hsla(var(--theme-hue), 80%, 60%, 0.5), transparent 60%)" }} />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Your growth starts here.</h2>
            <p className="mt-4 text-lg text-zinc-400">Let's build something extraordinary together.</p>
          </div>
          <Link href="/contact" className="relative z-10 mt-8 flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] md:mt-0">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* 2. The Mega Footer Links */}
      <div className="mx-auto max-w-7xl px-6 pb-12 sm:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <svg viewBox="0 0 901.8 901.14" className="h-6 w-6 text-[hsl(var(--theme-hue),80%,60%)]" fill="currentColor">
                <circle cx="801.25" cy="801.14" r="100" />
                <path d="M950.87,149.26a99.58,99.58,0,0,1-26.39,67.68l-709.9,709.9A100.5,100.5,0,0,1,72.38,786.2L609.32,249.26H149.07a100,100,0,0,1,0-200h701.8A100,100,0,0,1,950.87,149.26Z" transform="translate(-49.07 -49.26)" />
              </svg>
              zefura<span className="text-[hsl(var(--theme-hue),80%,60%)]">.dev</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Architecting high-performance digital ecosystems for global brands.
            </p>
            <div className="mt-6 flex items-center gap-4 text-zinc-400">
              <a href="mailto:zefura.dev@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="hover:text-white transition-colors" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.21.046-.39-.03-.54-.075-.15-.671-1.62-.92-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.246-.705.246-1.296.173-1.426-.075-.13-.274-.21-.575-.345z"/><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.46 0 .104 5.334.101 11.895c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.657c1.773.976 3.786 1.487 5.814 1.488h.005c6.585 0 11.944-5.334 11.947-11.893 0-3.175-1.24-6.16-3.581-8.489zM12.045 21.84c-1.774 0-3.51-.466-5.034-1.355l-.36-.205-3.742.97.995-3.626-.23-.36A9.907 9.907 0 0 1 2.051 11.9C2.054 6.399 6.556 1.9 12.056 1.9c2.68 0 5.19 1.036 7.07 2.915C21.01 6.696 22.04 9.198 22.04 11.9c-.003 5.503-4.505 9.94-10.005 9.94z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (UPDATED) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Portfolio</Link></li>
              <li><Link href="/industries" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Industries</Link></li>
              <li><Link href="/blog" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services (UPDATED) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li><Link href="/services" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-[hsl(var(--theme-hue),80%,60%)] transition-colors">Creative Media</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>Colombo, Sri Lanka</li>
              <li>+94 (XXX) XXX XXX</li>
              <li>zefura.dev@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION WITH NEW FAQ LINK */}
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Zefura.dev. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}