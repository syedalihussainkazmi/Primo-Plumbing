"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section-pad bg-mist">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Full-service plumbing, handled with precision."
          description="From a stubborn clog to a full repipe, our licensed technicians bring the same premium standard to every job — residential or commercial."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                className="card-hover group relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-[0_2px_20px_-8px_rgba(10,28,48,0.08)] hover:border-primary/30 hover:shadow-[0_24px_60px_-20px_rgba(28,111,239,0.25)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-cyan/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-primary text-white shadow-[0_8px_20px_-6px_rgba(28,111,239,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-line bg-mist px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
