"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  // Captures the text the user types
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // ⚠️ Replace '/api/contact' with your actual endpoint (e.g., Formspree URL or Next.js route)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // If you are just testing the UI without a real backend yet, you can comment out the 
      // fetch above and uncomment the line below to simulate a successful send:
      // await new Promise((resolve) => setTimeout(resolve, 1500)); 

      if (response.ok === false) throw new Error("Failed to send");
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Clears the form on success
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            required 
            className="w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white transition-all focus:border-[hsl(var(--theme-hue),80%,60%)] focus:bg-[#151515] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--theme-hue),80%,60%)]" 
            placeholder="John Doe" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            className="w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white transition-all focus:border-[hsl(var(--theme-hue),80%,60%)] focus:bg-[#151515] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--theme-hue),80%,60%)]" 
            placeholder="john@example.com" 
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
        <textarea 
          id="message" 
          value={formData.message}
          onChange={handleChange}
          required 
          rows={5} 
          className="w-full resize-none rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white transition-all focus:border-[hsl(var(--theme-hue),80%,60%)] focus:bg-[#151515] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--theme-hue),80%,60%)]" 
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-black transition-all hover:bg-[hsl(var(--theme-hue),80%,60%)] hover:text-white hover:shadow-[0_0_30px_hsla(var(--theme-hue),80%,60%,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 size={18} className="animate-spin text-zinc-500" />
        ) : (
          <>
            Send Message
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <p className="mt-2 text-center text-sm font-medium text-emerald-400">
          Message sent successfully! We'll be in touch soon.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mt-2 text-center text-sm font-medium text-red-400">
          Something went wrong. Please check your connection or email us directly.
        </p>
      )}
    </form>
  );
}