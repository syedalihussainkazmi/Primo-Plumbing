"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Droplet,
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
    <footer className="relative overflow-hidden bg-navy-950 pt-20 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(28,111,239,0.15),transparent)]" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div className="flex flex-col gap-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan">
                <Droplet className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="font-display text-lg font-semibold">
                Primo<span className="text-cyan">.</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Family-owned, licensed &amp; insured plumbing serving Spokane and
              the surrounding area for over 30 years.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Leave a Google review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                <Star className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Visit our website"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Services
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
              Company
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              {[
                ["Why Us", "#why-us"],
                ["Our Process", "#process"],
                ["Our Work", "#gallery"],
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
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <a href={brand.phoneHref} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-cyan/40 hover:text-cyan"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
