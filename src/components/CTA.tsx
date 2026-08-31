"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { brand } from "@/lib/data";

export default function CTA() {
  return (
    <section className="container-px mx-auto max-w-7xl py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-void-950 via-void-900 to-primary-dark px-8 py-16 text-center sm:px-16 sm:py-20"
      >
        <motion.div
          className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-ember/30 blur-[110px]"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold/30 blur-[110px]"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Free Trial Class Available
          </span>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Your first class is on us.
          </h2>
          <p className="max-w-lg text-balance text-white/60">
            No contract, no pressure — just one real class with our coaches.
            See why {brand.city} trains at Doomsday.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <MagneticButton
              href="#contact"
              className="group bg-gradient-to-r from-primary to-ember px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_-10px_rgba(255,138,43,0.5)]"
            >
              Claim Your Free Class
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={brand.phoneHref}
              className="border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {brand.phone}
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
