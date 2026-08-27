"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section-pad bg-mist-2">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="From first call to final test, in four simple steps."
          description="No jargon, no runaround — just a clear path from problem to permanent fix."
        />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-primary via-cyan to-copper lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="relative flex flex-col items-start gap-4"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-primary shadow-[0_10px_30px_-12px_rgba(10,28,48,0.2)]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-copper font-display text-[11px] font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
