"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919872800882";
const MESSAGE = "Hi Akash, I'd love to plan a visit to Fit Foundation!";

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp to plan a visit"
      className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center"
    >
      {/* pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-volt/70 animate-pulse-ring" />

      <div className="relative flex items-center bg-volt text-ink-950 rounded-full shadow-2xl overflow-hidden transition-all duration-300 ease-out h-14 w-14 group-hover:w-52">
        <span className="flex items-center justify-center h-14 w-14 shrink-0">
          <MessageCircle size={26} strokeWidth={2} />
        </span>
        <motion.span
          className="font-display font-bold uppercase text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pr-5"
        >
          Plan a Visit!
        </motion.span>
      </div>
    </a>
  );
}
