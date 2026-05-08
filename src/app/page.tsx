"use client";

import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="top"
        className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#121217] px-6 py-20 text-zinc-100 sm:px-10"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-6 right-8 h-44 w-44 rounded-full bg-violet-400/15 blur-2xl" />
        </div>

        <section className="relative z-10 w-full max-w-5xl rounded-3xl border border-violet-300/10 bg-white/[0.03] p-8 shadow-[0_0_80px_-30px_rgba(139,92,246,0.45)] backdrop-blur-sm sm:p-14">
          <motion.p
            custom={0.05}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-violet-300"
          >
            Zefura.dev
          </motion.p>

          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl"
          >
            Crafting Digital Excellence
          </motion.h1>

          <motion.p
            custom={0.28}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300"
          >
            Our 5-person expert team creates standout digital experiences through
            Web Design, UI/UX, and Branding that turn bold ideas into measurable
            growth.
          </motion.p>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10"
          >
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-violet-500 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121217]"
            >
              View Our Work
            </a>
          </motion.div>
        </section>
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
    </>
);
}
