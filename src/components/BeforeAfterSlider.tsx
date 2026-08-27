"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

function PhotoLayer({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={(e) => {
        const img = e.currentTarget;
        if (img.naturalWidth < 150 || img.naturalHeight < 150) {
          setFailed(true);
        } else {
          setLoaded(true);
        }
      }}
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const dragX = useMotionValue(0);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(96, Math.max(4, pct)));
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative aspect-[16/9] w-full touch-none select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
        onMouseMove={(e) => {
          if (e.buttons === 1) updateFromClientX(e.clientX);
        }}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        {/* AFTER layer (base) — gradient always shows; the real photo fades
            in on top of it once confirmed to have actually loaded. */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a1c30_0%,#123a63_35%,#1c6fef_75%,#22d3ee_100%)]">
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_2px,transparent_2px,transparent_18px)]" />
          <PhotoLayer
            src="https://loremflickr.com/1200/675/copper-pipes,plumbing"
            alt="New copper repipe installation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        </div>

        {/* BEFORE layer (clipped) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,#3a2a1a_0%,#5c4128_35%,#8a5a2e_75%,#b97a3a_100%)]"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.4)_0%,transparent_25%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.35)_0%,transparent_20%),radial-gradient(circle_at_45%_80%,rgba(0,0,0,0.3)_0%,transparent_22%)]" />
          <PhotoLayer
            src="https://loremflickr.com/1200/675/rusty-pipes,corrosion"
            alt="Old corroded galvanized pipe"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Labels — anchored to opposite corners of the outer (unclipped)
            container so they never overlap regardless of drag position. */}
        <div className="absolute bottom-6 left-6 z-10 rounded-xl bg-black/40 px-4 py-2 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-copper-light">Before</p>
          <p className="font-display text-sm font-medium text-white">Corroded Galvanized Pipe</p>
        </div>
        <div className="absolute bottom-6 right-6 z-10 rounded-xl bg-navy-950/60 px-4 py-2 text-right backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">After</p>
          <p className="font-display text-sm font-medium text-white">New Copper Repipe</p>
        </div>

        {/* Handle */}
        <motion.div
          className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 items-center justify-center bg-white/80"
          style={{ left: `${percent}%`, x: dragX }}
        >
          <div
            onMouseDown={(e) => e.preventDefault()}
            className="flex h-11 w-11 cursor-ew-resize items-center justify-center rounded-full border border-white/40 bg-white text-navy-900 shadow-[0_0_0_6px_rgba(255,255,255,0.15)]"
          >
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </motion.div>
      </div>

      <input
        type="range"
        min={4}
        max={96}
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-x-0 -bottom-2 h-8 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
