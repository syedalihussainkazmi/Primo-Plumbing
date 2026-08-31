"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Menu, Phone, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { brand } from "@/lib/data";

const links = [
  { label: "Programs", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.7 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "glass shadow-[0_8px_40px_-12px_rgba(24,19,15,0.25)]"
              : "glass-dark shadow-[0_8px_32px_-16px_rgba(0,0,0,0.4)]"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-primary to-primary-dark shadow-[0_0_20px_rgba(227,56,42,0.5)]"
              style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
            >
              <Flame className="h-4.5 w-4.5 text-white" strokeWidth={2} />
            </span>
            <span
              className={`font-display text-lg font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              DOOMSDAY<span className="text-ember">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-slate hover:text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-primary to-ember transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={brand.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-500 ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              {brand.phone}
            </a>
            <MagneticButton
              href="#contact"
              className="bg-gradient-to-r from-primary to-ember px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(227,56,42,0.55)] transition-shadow duration-300 hover:shadow-[0_10px_32px_-6px_rgba(227,56,42,0.7)]"
            >
              Claim Free Class
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
              scrolled
                ? "border-line bg-white/70 text-ink"
                : "border-white/15 bg-white/10 text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-void-950/80 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col gap-8 bg-void-950 p-8 text-white"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">
                  DOOMSDAY<span className="text-ember">.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-white/5 py-4 font-display text-2xl font-semibold"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-2 text-lg font-semibold text-ember"
                >
                  <Phone className="h-4 w-4" />
                  {brand.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gradient-to-r from-primary to-ember px-6 py-3.5 text-center text-sm font-semibold text-white"
                >
                  Claim Free Class
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
