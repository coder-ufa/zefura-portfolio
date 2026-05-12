"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, HelpCircle, MessageSquare, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  
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
        <div className="absolute top-[20%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full blur-[150px] transform-gpu md:h-[600px] md:w-[600px]" style={{ backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.1)", willChange: "transform" }} />
      </div>

      <Navbar />

      <main className="relative z-10 flex min-h-screen flex-col items-center pt-32 pb-24 px-6 sm:px-10">
        
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-5xl text-center mt-10 md:mt-16 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Let's <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)", textShadow: "0 0 40px hsla(var(--theme-hue), 80%, 60%, 0.4)" }}>talk.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Ready to scale? Drop us a message, connect on our socials, or check our FAQs. Our core team is ready to execute your vision.
          </motion.p>
        </div>
        
        {/* Bento-Box Layout */}
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* LEFT COLUMN: Stacked Info Boxes */}
            <div className="flex flex-col gap-8 lg:col-span-1">
                
                {/* 1. Contact Information Box */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="group relative z-0 flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)]">
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}><Mail size={20} /></motion.div>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Us</p>
                            <a href="mailto:zefura.dev@gmail.com" className="mt-1 block text-sm font-medium text-white transition-colors hover:text-[hsl(var(--theme-hue),80%,60%)]">zefura.dev@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)]">
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}><Phone size={20} /></motion.div>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Call Us</p>
                            <p className="mt-1 block text-sm font-medium text-white">+94 70 246 9678</p>
                            <p className="mt-1 block text-sm font-medium text-white">+94 77 887 2800</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.15)] text-[hsl(var(--theme-hue),80%,60%)]">
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}><MapPin size={20} /></motion.div>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Location</p>
                            <p className="mt-1 block text-sm font-medium text-white">Colombo, Sri Lanka</p>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Connect on Social Media Box */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="group relative z-0 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
                >
                    <h3 className="text-xl font-bold text-white mb-6">Connect with us</h3>
                    <div className="flex flex-wrap gap-4">
                        {/* Gmail Added Here */}
                        <a href="mailto:zefura.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:bg-[hsla(var(--theme-hue),80%,60%,0.2)] hover:text-[hsl(var(--theme-hue),80%,60%)] hover:scale-110" aria-label="Gmail">
                            <Mail size={20} />
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=61589595954690" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:bg-[hsla(var(--theme-hue),80%,60%,0.2)] hover:text-[hsl(var(--theme-hue),80%,60%)] hover:scale-110" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/zefura.dev?igsh=MTF0bWNvZXFiZTdzdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:bg-[hsla(var(--theme-hue),80%,60%,0.2)] hover:text-[hsl(var(--theme-hue),80%,60%)] hover:scale-110" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/117224533/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:bg-[hsla(var(--theme-hue),80%,60%,0.2)] hover:text-[hsl(var(--theme-hue),80%,60%)] hover:scale-110" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                        <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all hover:bg-[hsla(var(--theme-hue),80%,60%,0.2)] hover:text-[hsl(var(--theme-hue),80%,60%)] hover:scale-110" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.21.046-.39-.03-.54-.075-.15-.671-1.62-.92-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.246-.705.246-1.296.173-1.426-.075-.13-.274-.21-.575-.345z"/><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.46 0 .104 5.334.101 11.895c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.657c1.773.976 3.786 1.487 5.814 1.488h.005c6.585 0 11.944-5.334 11.947-11.893 0-3.175-1.24-6.16-3.581-8.489zM12.045 21.84c-1.774 0-3.51-.466-5.034-1.355l-.36-.205-3.742.97.995-3.626-.23-.36A9.907 9.907 0 0 1 2.051 11.9C2.054 6.399 6.556 1.9 12.056 1.9c2.68 0 5.19 1.036 7.07 2.915C21.01 6.696 22.04 9.198 22.04 11.9c-.003 5.503-4.505 9.94-10.005 9.94z"/></svg>
                        </a>
                    </div>
                </motion.div>

                {/* 3. Have Questions? Box */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="group relative z-0 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="text-[hsl(var(--theme-hue),80%,60%)]" size={24} />
                        <h3 className="text-xl font-bold text-white">Have questions?</h3>
                    </div>
                    
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                        Can't find what you're looking for? Check out our frequently asked questions for more details on our process, pricing, and timelines.
                    </p>

                    <Link href="/faq" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[hsla(var(--theme-hue),80%,60%,0.2)] hover:text-[hsl(var(--theme-hue),80%,60%)] w-max">
                        View FAQ <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>

            {/* RIGHT COLUMN: Separated Form Area */}
            <div className="flex flex-col gap-8 lg:col-span-2 h-full">
                
                {/* 1. Send us a message (Title/Intro Box) */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="group relative z-0 flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.01] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_80px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="text-[hsl(var(--theme-hue),80%,60%)]" size={28} />
                        <h3 className="text-3xl font-bold text-white">Send us a message</h3>
                    </div>
                    <p className="text-zinc-400">Fill out the form below and our team will get back to you within 24 hours to discuss your project.</p>
                </motion.div>

                {/* 2. Contact Form Box (Functionality) */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="group relative z-0 flex-grow flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 lg:p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.01] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_80px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
                >
                    <div className="w-full">
                       <Contact /> 
                    </div>
                </motion.div>
                
            </div>

        </div>
      </main>

      <div className="relative z-10 border-t border-white/5 mt-12 w-full">
        <Footer />
      </div>

    </div>
  );
}