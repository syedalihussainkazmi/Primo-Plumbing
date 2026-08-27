"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Droplet } from "lucide-react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let raf: number;
    const start = performance.now();
    const duration = 1700;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(28,111,239,0.25), transparent 70%)",
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-primary via-cyan/80 to-transparent transition-all duration-150 ease-linear"
                style={{ height: `${progress}%` }}
              />
              <Droplet
                className="relative z-10 h-9 w-9 text-white drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                strokeWidth={1.75}
              />
            </motion.div>

            <motion.div
              className="font-display text-lg font-semibold tracking-[0.2em] text-white/90"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              PRIMO<span className="text-cyan">.</span>
            </motion.div>

            <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-white/40">
              <span className="font-mono">{String(progress).padStart(3, "0")}%</span>
              <span className="h-px w-10 bg-white/20" />
              <span>SPOKANE, WA</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
