"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, ShieldCheck, Star, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";
import PipeNetworkArt from "./PipeNetworkArt";
import { brand } from "@/lib/data";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 120, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 120, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(px * 14);
    tiltY.set(py * -14);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-32 pb-20"
      onMouseMove={handleMove}
    >
      {/* Background layers */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050e1a_0%,#0a1c30_55%,#050e1a_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/30 blur-[140px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-cyan/20 blur-[160px]"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-copper/20 blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="bg-noise absolute inset-0" />
      </motion.div>

      <div className="container-px relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left column */}
        <motion.div style={{ opacity: fade }} className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Licensed · Bonded · Insured &nbsp;·&nbsp; {brand.city}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.0 }}
            className="text-balance font-display text-[13vw] font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[5.2rem]"
          >
            Plumbing,
            <br />
            <span className="text-gradient bg-gradient-to-r from-white via-cyan to-primary-light bg-clip-text text-transparent">
              Perfected.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.15 }}
            className="max-w-lg text-balance text-lg leading-relaxed text-white/60"
          >
            Spokane&rsquo;s family-owned plumbing team, trusted for over{" "}
            <span className="text-white">30 years</span>. Upfront pricing, master
            craftsmanship, and a same-day response when it matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.3 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="#contact"
              className="group bg-gradient-to-r from-primary to-cyan px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(34,211,238,0.5)]"
            >
              Get Your Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={brand.phoneHref}
              className="glass-dark border-white/15 px-7 py-4 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-copper" />
              {brand.phone}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            className="flex flex-wrap items-center gap-6 pt-4 text-white/50"
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-copper text-copper" />
              ))}
              <span className="ml-1.5 text-sm font-medium text-white/80">4.9/5</span>
              <span className="text-sm">from 800+ reviews</span>
            </div>
            <div className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-1.5 text-sm">
              <Zap className="h-3.5 w-3.5 text-cyan" />
              Emergency crews on standby 24/7
            </div>
          </motion.div>
        </motion.div>

        {/* Right column - visual */}
        <motion.div
          style={{ y: artY }}
          onMouseLeave={() => {
            tiltX.set(0);
            tiltY.set(0);
          }}
          className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[500px] lg:h-[560px]"
        >
          <motion.div
            style={{ rotateX: springTiltY, rotateY: springTiltX, transformPerspective: 1000 }}
            className="relative h-full w-full"
          >
            <div className="absolute inset-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
              <PipeNetworkArt />
            </div>

            {/* Floating glass cards */}
            <motion.div
              className="glass-dark absolute -left-4 top-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl sm:left-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -14, 0] }}
              transition={{
                opacity: { delay: 2.6, duration: 0.6 },
                x: { delay: 2.6, duration: 0.6 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.6 },
              }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-copper/20 text-copper">
                <Zap className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-medium text-white/50">Emergency Response</p>
                <p className="font-display text-sm font-semibold text-white">Under 60 min</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-dark absolute -right-2 top-1/3 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl sm:right-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, 16, 0] }}
              transition={{
                opacity: { delay: 2.75, duration: 0.6 },
                x: { delay: 2.75, duration: 0.6 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.75 },
              }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/20 text-cyan">
                <Star className="h-4.5 w-4.5 fill-cyan" />
              </span>
              <div>
                <p className="text-xs font-medium text-white/50">Google Rating</p>
                <p className="font-display text-sm font-semibold text-white">4.9 / 5.0</p>
              </div>
            </motion.div>

            <motion.div
              className="glass-dark absolute -bottom-4 left-1/4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { delay: 2.9, duration: 0.6 },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.9 },
              }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                <ShieldCheck className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-medium text-white/50">In Business</p>
                <p className="font-display text-sm font-semibold text-white">30+ Years</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 0.6 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
