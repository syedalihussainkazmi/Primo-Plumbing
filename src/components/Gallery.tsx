"use client";

import { motion } from "framer-motion";
import {
  Swords,
  Flame,
  Shield,
  Target,
  HeartPulse,
  Users,
  PlayCircle,
  Layers,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import BeforeAfterSlider from "./BeforeAfterSlider";

const classes = [
  {
    icon: Swords,
    title: "MMA Sparring Session",
    level: "All Levels",
    gradient: "from-[#e3382a] to-[#1f1710]",
  },
  {
    icon: Flame,
    title: "Muay Thai Pad Work",
    level: "Beginner Friendly",
    gradient: "from-[#ff8a2b] to-[#9c1c11]",
  },
  {
    icon: Shield,
    title: "BJJ Mat Session",
    level: "Gi & No-Gi",
    gradient: "from-[#e7a93c] to-[#3a1f14]",
  },
  {
    icon: Target,
    title: "Boxing Fundamentals",
    level: "All Levels",
    gradient: "from-[#9c1c11] to-[#ff8a2b]",
  },
  {
    icon: HeartPulse,
    title: "Kickboxing Fitness",
    level: "Cardio Burn",
    gradient: "from-[#1f1710] to-[#e3382a]",
  },
  {
    icon: Users,
    title: "Youth Combat Program",
    level: "Ages 6–14",
    gradient: "from-[#e7a93c] to-[#e3382a]",
  },
] as const;

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-void-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Real Results"
          title="See the difference, in real time."
          description="Real transformations from real members — drag the slider below to see the kind of change our coaching delivers, in and out of the gym."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <BeforeAfterSlider />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="card-hover group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-950/90 via-void-950/10 to-transparent" />

                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 opacity-0 backdrop-blur-sm transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
                  <PlayCircle className="h-4 w-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-white/60">
                      <Layers className="h-3 w-3" />
                      {item.level}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
