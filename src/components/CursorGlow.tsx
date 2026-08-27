"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const query = "(hover: hover) and (pointer: fine)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(query).matches;
}

function getServerSnapshot() {
  return false;
}

export default function CursorGlow() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] rounded-full mix-blend-screen"
      style={{
        translateX: springX,
        translateY: springY,
        x: "-50%",
        y: "-50%",
        background:
          "radial-gradient(circle, rgba(34,211,238,0.14) 0%, rgba(28,111,239,0.08) 40%, transparent 70%)",
      }}
    />
  );
}
