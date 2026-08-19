"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const headlineWords = ["EMPOWERING", "THE", "CHILDREN", "OF", "BALONGI."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-950 pt-24 pb-16"
    >
      {/* Ambient background texture */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] bg-volt/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Court line motif */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-ink-800 hidden md:block" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-volt mb-6 flex items-center gap-2"
        >
          <span className="w-8 h-[1px] bg-volt inline-block" />
          Fit Foundation &middot; Balongi, India
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display font-bold uppercase text-[15vw] md:text-[7.2vw] leading-[0.92] tracking-tight overflow-hidden"
        >
          {headlineWords.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-3 md:mr-5">
              <motion.span
                variants={word}
                className={`inline-block ${
                  w === "BALONGI." ? "text-stroke" : "text-white"
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="font-body text-zinc-400 text-base md:text-xl max-w-xl mt-8 leading-relaxed"
        >
          Building discipline, confidence, and teamwork through education and
          sport &mdash; on the court and in the classroom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#donate"
            className="group inline-flex items-center justify-center gap-2 bg-volt text-ink-950 font-display font-bold uppercase tracking-wide text-sm md:text-base px-8 py-4 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Support the Champions
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#champions"
            className="group inline-flex items-center justify-center gap-2 border border-zinc-600 text-white font-display font-bold uppercase tracking-wide text-sm md:text-base px-8 py-4 transition-colors duration-200 hover:border-volt hover:text-volt"
          >
            <Users size={18} strokeWidth={2.5} />
            Meet the Kids
          </a>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="relative max-w-7xl mx-auto w-full px-6 md:px-10 mt-16 md:mt-20"
      >
        <div className="grid grid-cols-3 border-t border-ink-800 pt-6 gap-4">
          {[
            { n: "50", l: "Students Educated" },
            { n: "30+", l: "Young Athletes" },
            { n: "1", l: "Founder-Coach, Rot. Akash" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display font-bold text-2xl md:text-4xl text-white">
                {s.n}
              </p>
              <p className="font-body text-[10px] md:text-xs uppercase tracking-wider text-zinc-500 mt-1">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
