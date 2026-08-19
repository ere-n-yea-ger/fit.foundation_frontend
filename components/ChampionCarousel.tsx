"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CHAMPIONS = [
  {
    name: "TEAM REWARDS",
    tag: "PIZZA PARTY • CELEBRATING WINS TOGETHER",
    image: "/pic_1.png",
  },
  {
    name: "MATCH PREP",
    tag: "DISCIPLINE • LINING UP FOR BADMINTON DRILLS",
    image: "/pic_2.png",
  },
  {
    name: "MIND TRAINING",
    tag: "ACADEMICS FIRST • FOCUSING ON THE BOOKS",
    image: "/pic_3.png",
  },
  {
    name: "COURT CONDITIONING",
    tag: "WARM UP ROUTINE • BUILDING FLEXIBILITY",
    image: "/pic_4.png",
  },
  {
    name: "GROUP STUDY",
    tag: "TEAMWORK OFF THE COURT • LEARNING TOGETHER",
    image: "/pic_7.png",
  },
];

export default function ChampionCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  return (
    <section id="champions" className="bg-ink-900 border-y border-ink-800 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-volt mb-4">
              A Peek Into the Daily Lives of Champions
            </p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-[0.95]">
              Faces of the Future.
            </h2>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous champion"
              className="w-11 h-11 flex items-center justify-center border border-zinc-700 hover:border-volt hover:text-volt transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next champion"
              className="w-11 h-11 flex items-center justify-center border border-zinc-700 hover:border-volt hover:text-volt transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-4 max-w-[100vw] snap-x snap-mandatory scroll-pl-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {CHAMPIONS.map((c, i) => (
          <motion.div
            key={c.name}
            data-card
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="snap-start shrink-0 w-[260px] md:w-[300px] bg-ink-950 border border-ink-700 hover:border-volt transition-colors duration-300 group"
          >
            <div className="relative h-[320px] overflow-hidden">
              <img
                src={c.image}
                alt={`${c.name}, Fit Foundation athlete`}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-ink-950/80 border border-volt/40 text-volt font-display text-xs uppercase tracking-widest px-2.5 py-1">
                #{String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold uppercase text-2xl mb-2">
                {c.name}
              </h3>
              <p className="font-body text-volt text-xs uppercase tracking-wide leading-relaxed">
                {c.tag}
              </p>
            </div>
          </motion.div>
        ))}

        {/* trailing spacer so last card isn't flush with edge */}
        <div className="shrink-0 w-1" />
      </div>
    </section>
  );
}