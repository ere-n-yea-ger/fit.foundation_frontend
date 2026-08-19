"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, BookOpen, Footprints, ArrowUpRight } from "lucide-react";

// Replace with the foundation's real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "919872800882";

const NEEDS = [
  {
    item: "Rackets & Shuttlecocks",
    icon: Zap,
    blurb:
      "Equip a young player with the gear they need to train and compete.",
    image:
      "pic_8.png",
  },
  {
    item: "Books & Stationery",
    icon: BookOpen,
    blurb:
      "Fund notebooks, textbooks, and school supplies .",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    item: "Sports Shoes",
    icon: Footprints,
    blurb:
      "Give a child proper footwear for training safely on court and off.",
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop",
  },
];

function TiltCard({ need }: { need: (typeof NEEDS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const message = `Hi Akash, I'm on the website and I'd like to donate ${need.item} for the kids.`;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  const Icon = need.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative"
    >
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative border border-ink-700 bg-ink-900 overflow-hidden h-[420px]"
      >
        <div className="absolute inset-0">
          <img
            src={need.image}
            alt={need.item}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
        </div>

        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative h-full flex flex-col justify-between p-7"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 flex items-center justify-center border border-volt/40 bg-ink-950/60">
              <Icon className="text-volt" size={22} strokeWidth={1.8} />
            </div>
            <ArrowUpRight
              className="text-zinc-500 group-hover:text-volt group-hover:rotate-45 transition-all duration-300"
              size={22}
            />
          </div>

          <div>
            <h3 className="font-display font-bold uppercase text-2xl leading-tight mb-2">
              {need.item}
            </h3>
            <p className="font-body text-zinc-400 text-sm leading-relaxed mb-4">
              {need.blurb}
            </p>
            <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-volt">
              Sponsor via WhatsApp
              <span className="w-6 h-[1px] bg-volt inline-block group-hover:w-10 transition-all duration-300" />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function SponsorCards() {
  return (
    <section id="sponsor" className="bg-ink-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-volt mb-4">
            Sponsor A Need
          </p>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-[0.95]">
            Pick What You Fund.
          </h2>
          <p className="font-body text-zinc-500 mt-4">
            Every card connects you straight to Akash on WhatsApp &mdash; no
            forms, no friction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {NEEDS.map((need, i) => (
            <motion.div
              key={need.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <TiltCard need={need} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}