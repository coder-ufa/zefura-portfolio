"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Zefura completely transformed our digital presence. Our conversion rate doubled within the first month of launching the new platform.",
    name: "Sarah Jenkins",
    role: "CEO",
    company: "Lumina Tech",
  },
  {
    quote: "The attention to detail and engineering quality is unmatched. They didn't just build a website; they built an entire growth engine for us.",
    name: "David Chen",
    role: "Founder",
    company: "Vertex Solutions",
  },
  {
    quote: "Working with this team was seamless. From the initial strategy call to the final deployment, their communication and execution were flawless.",
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Pulse Global",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
      <div className="mb-16 text-center sm:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Client success stories.
        </h2>
        <p className="mt-4 text-lg text-zinc-400">Don't just take our word for it.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: i * 0.1 }}
            className="animate-breathe transform-gpu group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl [transition-property:transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.15)]"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div>
              <div className="mb-6 flex gap-1 text-[hsl(var(--theme-hue),80%,60%)]">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                "{review.quote}"
              </p>
            </div>
            
            <div className="mt-8 border-t border-white/10 pt-6 transition-colors duration-500 group-hover:border-[hsla(var(--theme-hue),80%,60%,0.3)]">
              <h4 className="font-bold text-white">{review.name}</h4>
              <p className="text-xs font-medium uppercase tracking-widest text-[hsl(var(--theme-hue),80%,60%)]">
                {review.role}, {review.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}