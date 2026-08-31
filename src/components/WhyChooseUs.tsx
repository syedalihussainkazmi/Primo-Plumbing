"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { whyChooseUs, brand } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad relative overflow-hidden bg-white">
      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="Why Doomsday"
            title={`The gym ${brand.city} fighters actually train at.`}
            align="left"
            description="Built by competitors, for anyone willing to work — our coaches treat every athlete's progress like it's their own reputation on the line."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-void-900 to-void-950 p-8 text-white shadow-2xl"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ember/20 blur-3xl" />
            <p className="relative font-display text-lg leading-snug">
              &ldquo;We built Doomsday the way we&rsquo;d want a gym to train
              us — real coaching, real accountability, and a team that pushes
              you past where you&rsquo;d stop alone.&rdquo;
            </p>
            <p className="relative mt-4 text-sm text-white/50">
              &mdash; The Doomsday Coaching Team
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.06 }}
                className="card-hover group rounded-2xl border border-line bg-mist p-6 hover:border-primary/30 hover:bg-white hover:shadow-[0_16px_40px_-16px_rgba(227,56,42,0.25)]"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-line transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
