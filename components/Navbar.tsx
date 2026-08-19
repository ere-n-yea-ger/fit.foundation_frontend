"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Mission", href: "#mission" },
  { label: "Sponsor a Need", href: "#sponsor" },
  { label: "Champions", href: "#champions" },
  { label: "Donate", href: "#donate" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-950/90 backdrop-blur border-b border-ink-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <a
          href="#top"
          className="font-display font-bold text-lg md:text-xl tracking-tight uppercase"
        >
          Fit<span className="text-volt">.</span>Foundation
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-zinc-300">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-volt transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#donate"
          className="hidden md:inline-flex items-center bg-volt text-ink-950 font-display font-semibold uppercase text-sm tracking-wide px-5 py-2.5 rounded-none hover:bg-white transition-colors duration-200"
        >
          Donate
        </a>

        <a
          href="#donate"
          className="md:hidden bg-volt text-ink-950 font-display font-semibold uppercase text-xs tracking-wide px-4 py-2"
        >
          Donate
        </a>
      </nav>
    </motion.header>
  );
}
