"use client";

import { motion } from "framer-motion";

export default function PipeNetworkArt() {
  const paths = [
    "M20,260 C90,260 90,80 180,80 L320,80",
    "M20,180 C130,180 130,200 260,200 L380,200",
    "M40,340 C150,340 150,300 260,300 L400,300 C420,300 420,150 460,150",
    "M60,60 C60,140 140,140 140,220 L140,380",
  ];

  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="pipeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#1C6FEF" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
      </defs>

      {paths.map((d, i) => (
        <g key={i}>
          <path
            d={d}
            stroke="white"
            strokeOpacity={0.08}
            strokeWidth={2}
            fill="none"
          />
          <motion.path
            d={d}
            stroke="url(#pipeGrad)"
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
            strokeDasharray="10 220"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -460 }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6,
            }}
          />
        </g>
      ))}

      {[
        [20, 260],
        [180, 80],
        [320, 80],
        [260, 200],
        [40, 340],
        [400, 300],
        [460, 150],
        [140, 380],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={18} fill="url(#nodeGlow)" opacity={0.5} />
          <motion.circle
            cx={cx}
            cy={cy}
            r={4}
            fill="#F5F9FF"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}
    </svg>
  );
}
