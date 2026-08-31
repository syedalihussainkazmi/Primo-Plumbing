"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

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
        {/* AFTER layer (base) — fight-ready */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1f1710_0%,#3a1f14_35%,#e3382a_75%,#ff8a2b_100%)]">
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_2px,transparent_2px,transparent_18px)]" />
        </div>

        {/* BEFORE layer (clipped) — day one */}
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,#2b2823_0%,#4a453d_35%,#615a4f_75%,#7a7266_100%)]"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.4)_0%,transparent_25%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.35)_0%,transparent_20%),radial-gradient(circle_at_45%_80%,rgba(0,0,0,0.3)_0%,transparent_22%)]" />
        </div>

        {/* Labels — anchored to opposite corners so they never overlap
            regardless of drag position. */}
        <div className="absolute bottom-6 left-6 z-10 rounded-xl bg-black/40 px-4 py-2 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Day One</p>
          <p className="font-display text-sm font-semibold text-white">Where It Starts</p>
        </div>
        <div className="absolute bottom-6 right-6 z-10 rounded-xl bg-void-950/60 px-4 py-2 text-right backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-ember">12 Weeks Later</p>
          <p className="font-display text-sm font-semibold text-white">Fight-Ready</p>
        </div>

        {/* Handle */}
        <motion.div
          className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 items-center justify-center bg-white/80"
          style={{ left: `${percent}%`, x: dragX }}
        >
          <div
            onMouseDown={(e) => e.preventDefault()}
            className="flex h-11 w-11 cursor-ew-resize items-center justify-center rounded-full border border-white/40 bg-white text-void-900 shadow-[0_0_0_6px_rgba(255,255,255,0.15)]"
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
