"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Why Next.js is the Ultimate Framework for Agency Websites",
    category: "Engineering",
    date: "May 12, 2026",
    desc: "A deep dive into how server-side rendering and edge computing are making traditional WordPress sites obsolete for high-ticket agencies.",
  },
  {
    title: "The Psychology of Dark Mode in Luxury UI/UX Design",
    category: "Design",
    date: "April 28, 2026",
    desc: "Why premium brands are shifting to deep contrast interfaces and how to use ambient glow effects to drive conversion.",
  },
  {
    title: "Scaling Revenue: Meta Ads vs. Organic SEO in 2026",
    category: "Growth",
    date: "April 15, 2026",
    desc: "An analytical breakdown of customer acquisition costs and where ambitious startups should be allocating their marketing budgets.",
  },
  {
    title: "Building Flawless Animations without Sacrificing Performance",
    category: "Engineering",
    date: "April 02, 2026",
    desc: "How we use hardware-accelerated CSS and Framer Motion to maintain 60fps across our entire digital ecosystem.",
  }
];

export default function BlogPage() {
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
        <div className="absolute top-[30%] left-[50%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full blur-[150px] transform-gpu" style={{ backgroundColor: "hsla(var(--theme-hue), 80%, 60%, 0.1)", willChange: "transform" }} />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center pt-32 pb-24 px-6 sm:px-10">
        
        {/* Hero */}
        <div className="mx-auto w-full max-w-5xl text-center mt-10 md:mt-16 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Insights & <span style={{ color: "hsl(var(--theme-hue), 80%, 60%)", textShadow: "0 0 40px hsla(var(--theme-hue), 80%, 60%, 0.4)" }}>Engineering.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Thoughts, strategies, and technical deep-dives from the Zefura core team.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative z-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-10 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[hsla(var(--theme-hue),80%,60%,0.5)] bg-[hsla(var(--theme-hue),80%,60%,0.1)] text-[hsl(var(--theme-hue),80%,60%)]">
                    {article.category}
                  </span>
                  <span className="text-sm text-zinc-500">{article.date}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-white">
                  {article.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                  {article.desc}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-zinc-300 transition-colors duration-300 group-hover:text-[hsl(var(--theme-hue),80%,60%)]">
                Read Article <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </main>

    </div>
  );
}