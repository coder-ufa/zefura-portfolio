"use client";

import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

// Social SVG Icons
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    
    // Your live Web3Forms Access Key
    formData.append("access_key", "94effdf8-77ed-4513-a4d8-4d5653394187"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Let's work together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Bring us your vision, and we’ll turn it into a flawless digital reality. Fill out the form below to get started.
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* The Centered, Larger Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl sm:p-12"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex h-full min-h-[400px] flex-col items-center justify-center text-center"
            >
              <CheckCircle size={80} className="mb-6 text-[hsl(var(--theme-hue,260),80%,60%)]" />
              <h3 className="text-3xl font-bold text-white">Message Sent.</h3>
              <p className="mt-4 text-lg text-zinc-400">We will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="mb-3 block text-sm font-semibold tracking-wide text-zinc-400">NAME</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all focus:border-[hsla(var(--theme-hue,260),80%,60%,0.8)] focus:bg-white/10 focus:ring-1 focus:ring-[hsla(var(--theme-hue,260),80%,60%,0.8)]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-3 block text-sm font-semibold tracking-wide text-zinc-400">EMAIL</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all focus:border-[hsla(var(--theme-hue,260),80%,60%,0.8)] focus:bg-white/10 focus:ring-1 focus:ring-[hsla(var(--theme-hue,260),80%,60%,0.8)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-3 block text-sm font-semibold tracking-wide text-zinc-400">PROJECT DETAILS</label>
                <textarea 
                  name="message" 
                  id="message" 
                  required 
                  rows={5}
                  placeholder="Tell us about your vision..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-zinc-600 outline-none transition-all focus:border-[hsla(var(--theme-hue,260),80%,60%,0.8)] focus:bg-white/10 focus:ring-1 focus:ring-[hsla(var(--theme-hue,260),80%,60%,0.8)]"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-5 text-lg font-bold text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_40px_hsla(var(--theme-hue,260),80%,60%,0.4)] disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
              </button>
            </form>
          )}
        </motion.div>

        {/* Minimalist Social Icons Row */}
        <div className="mt-16 flex items-center justify-center gap-10">
          <motion.a
            href="https://www.instagram.com/zefura.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="text-zinc-500 transition-colors hover:text-[hsl(var(--theme-hue,260),80%,60%)]"
          >
            <InstagramIcon size={32} />
          </motion.a>
          
          <motion.a
            href="mailto:zefura.dev@gmail.com"
            whileHover={{ y: -5, scale: 1.1 }}
            className="text-zinc-500 transition-colors hover:text-[hsl(var(--theme-hue,260),80%,60%)]"
          >
            <Mail size={32} />
          </motion.a>

          <motion.a
            href="https://web.facebook.com/profile.php?id=61589595954690"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="text-zinc-500 transition-colors hover:text-[hsl(var(--theme-hue,260),80%,60%)]"
          >
            <FacebookIcon size={32} />
          </motion.a>
        </div>
      </div>

      <footer className="mt-24 border-t border-white/10 pt-8 text-center text-sm tracking-widest text-zinc-600">
        © 2026 ZEFURA.DEV
      </footer>
    </section>
  );
}