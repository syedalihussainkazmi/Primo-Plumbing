"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const ringOuter =
  "316.5,55.2 424.8,163.5 424.8,316.5 316.5,424.8 163.5,424.8 55.2,316.5 55.2,163.5 163.5,55.2";
const ringMid =
  "297.4,101.4 378.6,182.6 378.6,297.4 297.4,378.6 182.6,378.6 101.4,297.4 101.4,182.6 182.6,101.4";
const ringInner =
  "278.3,147.6 332.4,201.8 332.4,278.3 278.3,332.4 201.8,332.4 147.6,278.3 147.6,201.8 201.8,147.6";

const nodes = [
  [316.5, 55.2],
  [424.8, 163.5],
  [424.8, 316.5],
  [316.5, 424.8],
  [163.5, 424.8],
  [55.2, 316.5],
  [55.2, 163.5],
  [163.5, 55.2],
];

export default function ImpactCore() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Rotating radar sweep, masked to a circle so it stays inside the rings */}
      <motion.div
        aria-hidden
        className="absolute h-[88%] w-[88%] rounded-full opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 260deg, rgba(255,138,43,0.55) 320deg, rgba(227,56,42,0.85) 360deg)",
          maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <svg viewBox="0 0 480 480" fill="none" className="relative h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8A2B" stopOpacity="1" />
            <stop offset="60%" stopColor="#E3382A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E3382A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8A2B" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF8A2B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Pulsing octagon rings — a quiet nod to the fight cage */}
        {[ringOuter, ringMid, ringInner].map((points, i) => (
          <motion.polygon
            key={points}
            points={points}
            stroke={i === 2 ? "#FF8A2B" : "white"}
            strokeOpacity={i === 2 ? 0.6 : 0.12}
            strokeWidth={1.5}
            fill="none"
            animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.015, 1] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{ transformOrigin: "240px 240px" }}
          />
        ))}

        {/* Impact nodes at each octagon vertex */}
        {nodes.map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={16} fill="url(#nodeGlow)" opacity={0.45} />
            <motion.circle
              cx={cx}
              cy={cy}
              r={3.5}
              fill="#FFF3E8"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* Core glow */}
        <circle cx={240} cy={240} r={90} fill="url(#coreGlow)" />
      </svg>

      {/* Center reactor / flame core */}
      <motion.div
        className="absolute flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-primary to-primary-dark shadow-[0_0_60px_rgba(227,56,42,0.65)]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Flame className="h-9 w-9 text-white animate-flicker" strokeWidth={1.75} fill="currentColor" fillOpacity={0.15} />
      </motion.div>
    </div>
  );
}
