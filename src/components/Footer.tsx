"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Flame,
  Globe,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { brand, services } from "@/lib/data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-void-950 pt-20 text-white">
      {/* Softens the hard seam where the light section above meets this
          dark footer, instead of cutting straight from mist-2 to void-950. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-mist-2 to-void-950" />
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(227,56,42,0.15),transparent)]" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div className="flex flex-col gap-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center bg-gradient-to-br from-primary to-ember"
                style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
              >
                <Flame className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="font-display text-lg font-bold">
                DOOMSDAY<span className="text-ember">.</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              {brand.city}&rsquo;s home for MMA, Muay Thai, BJJ, boxing &amp;
              kickboxing — elite coaching for every skill level, under one
              roof.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Leave a Google review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-ember/40 hover:text-ember"
              >
                <Star className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Visit our website"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-ember/40 hover:text-ember"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Programs
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Gym
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              {[
                ["Why Us", "#why-us"],
                ["How It Works", "#process"],
                ["Results", "#gallery"],
                ["Reviews", "#testimonials"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Get In Touch
            </p>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={brand.phoneHref} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
          <motion.a
            href="#top"
            whileHover={{ y: -2 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-ember/40 hover:text-ember"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
