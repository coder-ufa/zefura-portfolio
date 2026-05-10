"use client";

import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let's build something <br className="hidden sm:block" />
            <span style={{ color: "hsl(var(--theme-hue, 260), 80%, 60%)" }} className="transition-colors duration-500">
              extraordinary.
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Tell us about your project, and we'll get back to you within 24 hours.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit} 
          className="w-full rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl sm:p-12"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold tracking-wide text-zinc-400">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl border border-white/5 bg-[#111] p-4 text-white outline-none transition-all focus:border-[hsl(var(--theme-hue,260),80%,60%)] focus:bg-[#161616]"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold tracking-wide text-zinc-400">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl border border-white/5 bg-[#111] p-4 text-white outline-none transition-all focus:border-[hsl(var(--theme-hue,260),80%,60%)] focus:bg-[#161616]"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold tracking-wide text-zinc-400">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="resize-none rounded-xl border border-white/5 bg-[#111] p-4 text-white outline-none transition-all focus:border-[hsl(var(--theme-hue,260),80%,60%)] focus:bg-[#161616]"
              placeholder="Tell us about your vision..."
            ></textarea>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
            {status === "error" && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}
            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle size={18} />
                Message sent successfully!
              </p>
            )}
            {status !== "error" && status !== "success" && <div className="hidden sm:block"></div>}

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:scale-[1.02] active:scale-95 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  SENDING...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle size={18} />
                  SENT
                </>
              ) : (
                <>
                  SEND INQUIRY
                  <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>

      {/* --- ELITE AGENCY FOOTER --- */}
      <footer className="mt-32 flex flex-col items-center justify-center border-t border-white/5 pb-8 pt-16">
        {/* Muted Logo that glows with the website theme on hover */}
        <div className="mb-8 h-12 w-12 text-zinc-800 transition-colors duration-500 hover:text-[hsl(var(--theme-hue,260),80%,60%)]">
          <svg viewBox="0 0 901.8 901.14" className="h-full w-full" fill="currentColor">
            <circle cx="801.25" cy="801.14" r="100" />
            <path d="M950.87,149.26a99.58,99.58,0,0,1-26.39,67.68l-709.9,709.9A100.5,100.5,0,0,1,72.38,786.2L609.32,249.26H149.07a100,100,0,0,1,0-200h701.8A100,100,0,0,1,950.87,149.26Z" transform="translate(-49.07 -49.26)" />
          </svg>
        </div>
        
        <div className="flex gap-6 mb-8">
          <a href="#" className="text-sm font-semibold tracking-widest text-zinc-500 transition-colors hover:text-white uppercase">Twitter</a>
          <a href="#" className="text-sm font-semibold tracking-widest text-zinc-500 transition-colors hover:text-white uppercase">LinkedIn</a>
          <a href="#" className="text-sm font-semibold tracking-widest text-zinc-500 transition-colors hover:text-white uppercase">Instagram</a>
        </div>

        <p className="text-center text-xs font-medium tracking-widest text-zinc-700">
          © {new Date().getFullYear()} ZEFURA.DEV. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </section>
  );
}