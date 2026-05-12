"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most custom web platforms take between 4 to 8 weeks from strategy to launch. However, this depends heavily on the complexity of the project and the speed of feedback.",
  },
  {
    question: "Do you work with startups or established brands?",
    answer: "Both. We engineer scalable MVPs for ambitious startups and build enterprise-grade digital experiences for established global brands.",
  },
  {
    question: "How does your pricing work?",
    answer: "We offer value-based pricing. After our initial strategy call, we provide a custom proposal tailored to the exact ROI and deliverables your specific project requires.",
  },
  {
    question: "Do you offer post-launch support and marketing?",
    answer: "Absolutely. We offer ongoing retention retainers that cover server maintenance, continuous SEO optimization, and data-driven Meta Ad campaigns to guarantee growth.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Frequently asked questions.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`overflow-hidden rounded-2xl border transition-colors duration-500 ${
                isOpen ? "border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[#111]" : "border-white/10 bg-[#0A0A0A] hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left sm:p-8"
              >
                <h3 className="text-lg font-bold text-white sm:text-xl">{faq.question}</h3>
                <div className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-[hsla(var(--theme-hue),80%,60%,0.2)] text-[hsl(var(--theme-hue),80%,60%)]" : "bg-white/5 text-zinc-400"
                }`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-400 sm:px-8 sm:pb-8 sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}