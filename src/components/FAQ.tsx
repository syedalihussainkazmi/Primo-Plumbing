"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { faqs, brand } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Good to Know"
            title="Questions? We've got straight answers."
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white"
          >
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <p className="relative font-display text-lg font-medium">
              Still have a question?
            </p>
            <p className="relative mt-2 text-sm text-white/60">
              Talk to a real technician — no call trees, no waiting.
            </p>
            <MagneticButton
              href={brand.phoneHref}
              className="relative mt-6 w-full bg-white px-5 py-3.5 text-sm font-semibold text-navy-900"
            >
              <Phone className="h-4 w-4 text-copper" />
              {brand.phone}
            </MagneticButton>
          </motion.div>
        </div>

        <div className="flex flex-col divide-y divide-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-ink"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-slate">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
