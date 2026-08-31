"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative bg-void-950 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-ember/10 blur-[120px]" />
      </div>
      <div className="container-px relative mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center gap-2 border-white/5 text-center lg:border-l lg:first:border-l-0"
          >
            <div className="font-display text-4xl font-bold text-white sm:text-5xl">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={"decimals" in stat ? stat.decimals : 0}
              />
            </div>
            <p className="text-sm font-medium text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
