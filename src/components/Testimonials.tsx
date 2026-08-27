"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const avatarGradients = [
  "from-primary to-cyan",
  "from-copper to-copper-light",
  "from-navy-800 to-primary",
  "from-cyan to-primary-dark",
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const active = testimonials[index];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-mist">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="container-px relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by homeowners across Spokane."
          description="Real feedback from real customers — because our reputation is built one job at a time."
        />

        <div className="relative mt-16">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-[0_20px_60px_-20px_rgba(10,28,48,0.15)] sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-line" strokeWidth={1} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-6"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                  ))}
                </div>
                <p className="max-w-2xl text-balance font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                  &ldquo;{active.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${
                      avatarGradients[index % avatarGradients.length]
                    }`}
                  >
                    {initialsOf(active.name)}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{active.name}</p>
                    <p className="text-sm text-slate">
                      {active.location} &middot; {active.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-primary" : "w-2 bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
