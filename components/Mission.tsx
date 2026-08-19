"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative bg-ink-900 border-y border-ink-800 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-volt mb-4">
            Our Mission
          </p>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-[0.95] mb-6">
            One Coach.
            <br />
            Two Courts.
            <br />
            <span className="text-stroke">Every Child.</span>
          </h2>

          <p className="font-body text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
            &ldquo;These wonderful children come from the slum area of
            Balongi and currently live below the poverty line. While the
            Swami Ram Tirath Ashram graciously arranges their academic
            studies in the area, we focus on their physical and personal
            development. I oversee their sports and fitness classes at the
            Tynor Badminton Club, ensuring they build discipline, confidence,
            and teamwork alongside their education.&rdquo;
          </p>
          <p className="font-body text-zinc-500 text-sm mb-10">
            &mdash; Rot. Akash, Founder, Fit Foundation
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border border-ink-700 bg-ink-950/50 p-5 hover:border-volt transition-colors duration-300">
              <GraduationCap className="text-volt mb-3" size={26} strokeWidth={1.8} />
              <h3 className="font-display font-bold uppercase text-sm tracking-wide mb-1">
                The Classroom
              </h3>
              <p className="font-body text-zinc-500 text-sm leading-relaxed">
                Academics arranged by the Swami Ram Tirath Ashram for
                children of the Balongi slum community.
              </p>
            </div>
            <div className="border border-ink-700 bg-ink-950/50 p-5 hover:border-volt transition-colors duration-300">
              <Trophy className="text-volt mb-3" size={26} strokeWidth={1.8} />
              <h3 className="font-display font-bold uppercase text-sm tracking-wide mb-1">
                The Court
              </h3>
              <p className="font-body text-zinc-500 text-sm leading-relaxed">
                Structured badminton and fitness training at Tynor Badminton
                Club, Phase VI.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: overlapping image grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[420px] md:h-[520px]"
        >
          <div className="absolute top-0 left-0 w-[62%] h-[70%] border-4 border-ink-950 shadow-2xl overflow-hidden">
            <img
              src="pic_5.png"
              alt="Young athlete training badminton footwork on court"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[58%] h-[62%] border-4 border-ink-950 shadow-2xl overflow-hidden">
            <img
              src="pic_6.png"
              alt="Children studying together in a classroom"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="absolute top-6 right-0 bg-volt text-ink-950 font-display font-bold uppercase text-xs tracking-wide px-4 py-3 shadow-xl -rotate-3">
            Est. Balongi
          </div>
        </motion.div>
      </div>
    </section>
  );
}