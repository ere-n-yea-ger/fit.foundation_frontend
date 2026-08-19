"use client";

import { motion } from "framer-motion";
import { Heart, ShirtIcon, Footprints, BookOpen, MessageCircle } from "lucide-react";

const IN_KIND = [
  {
    icon: ShirtIcon,
    title: "Old Clothes",
    desc: "Clean, wearable clothing for kids aged 6\u201316. Drop off or arrange a pickup.",
  },
  {
    icon: Footprints,
    title: "Shoes",
    desc: "Sports or school shoes in good condition, any size.",
  },
  {
    icon: BookOpen,
    title: "School Supplies",
    desc: "Notebooks, pens, bags, and used textbooks still get a second life.",
  },
];

export default function DonateSection() {
  return (
    <section id="donate" className="relative bg-ink-950 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-volt mb-4">
            Support &amp; Donate
          </p>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-[0.95]">
            Give What You Can.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* In-kind donations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 border border-ink-700 bg-ink-900 p-8 md:p-10"
          >
            <h3 className="font-display font-bold uppercase text-2xl mb-2">
              Donate In-Kind
            </h3>
            <p className="font-body text-zinc-500 text-sm mb-8">
              Have old clothes, shoes, or school supplies lying around? They
              go a long way.
            </p>

            <div className="space-y-6">
              {IN_KIND.map((k) => {
                const Icon = k.icon;
                return (
                  <div key={k.title} className="flex gap-4">
                    <div className="w-11 h-11 shrink-0 flex items-center justify-center border border-ink-700 bg-ink-950">
                      <Icon className="text-volt" size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold uppercase text-sm tracking-wide mb-1">
                        {k.title}
                      </h4>
                      <p className="font-body text-zinc-500 text-sm leading-relaxed">
                        {k.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/919872800882?text=Hi%20Akash%2C%20I%27d%20like%20to%20drop%20off%20or%20arrange%20pickup%20for%20a%20donation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 items-center gap-2 border border-zinc-600 hover:border-volt hover:text-volt font-display font-bold uppercase text-sm tracking-wide px-6 py-3 transition-colors"
            >
              Arrange a Pickup
            </a>
          </motion.div>

          {/* Financial donation via WhatsApp / UPI / GPay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 relative border border-volt/30 bg-gradient-to-b from-ink-900 to-ink-950 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-volt mb-6">
                <Heart size={20} strokeWidth={1.8} />
                <span className="font-body text-xs uppercase tracking-widest">
                  Direct &amp; Transparent
                </span>
              </div>
              <h3 className="font-display font-bold uppercase text-2xl mb-3">
                Give Directly.
              </h3>
              <p className="font-body text-zinc-400 text-sm leading-relaxed mb-8">
                One-time or monthly, every rupee funds coaching hours,
                classroom supplies, and tournament fees for Fit Foundation
                athletes.
              </p>
            </div>

            <div>
              <a
                href="https://wa.me/919872800882?text=Hi%20Akash,%20I%20would%20like%20to%20make%20a%20financial%20donation%20to%20Fit%20Foundation.%20Could%20you%20please%20share%20your%20UPI%20or%20GPay%20number?"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 bg-volt text-ink-950 font-display font-bold uppercase tracking-wide text-sm md:text-base px-6 py-4 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Donate via UPI / GPay
              </a>
              <p className="flex items-center justify-center gap-1.5 font-body text-[11px] text-zinc-600 mt-4">
                <MessageCircle size={12} />
                Contact Rot. Akash directly via WhatsApp for GPay/UPI details.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}