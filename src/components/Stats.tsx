"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 6, suffix: "", label: "Core Experts" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); 
        setCount(Math.floor(easeProgress * (to - from) + from));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative z-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-xl transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.02] hover:border-[hsla(var(--theme-hue),80%,60%,0.8)] hover:bg-[#111] hover:shadow-[0_0_60px_hsla(var(--theme-hue),100%,60%,0.2)] will-change-transform"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-colors duration-500" style={{ color: "hsl(var(--theme-hue), 80%, 60%)" }}>
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}