"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { brand } from "@/lib/data";

const serviceOptions = [
  "Mixed Martial Arts",
  "Muay Thai",
  "Brazilian Jiu-Jitsu",
  "Boxing",
  "Kickboxing Fitness",
  "Strength & Conditioning",
  "Youth Combat Program",
  "Just Looking Around",
];

type Status = "idle" | "submitting" | "success";

const inputClass =
  "w-full rounded-2xl border border-line bg-mist px-4.5 py-3.5 text-sm text-ink placeholder:text-slate-400 transition-all duration-200 focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(227,56,42,0.12)] focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <section id="contact" className="section-pad bg-mist-2">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-void-900 to-void-950 p-9 text-white"
          >
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                Let&rsquo;s Talk
              </span>
              <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
                Book your free class today.
              </h2>
              <p className="mt-4 max-w-sm text-white/60">
                Fill out the form or give us a call — either way, you&rsquo;ll
                talk to a real Doomsday coach, not a call center.
              </p>
            </div>

            <div className="relative mt-10 flex flex-col gap-5">
              <a
                href={brand.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-ember/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember/15 text-ember">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/50">Call or text</p>
                  <p className="font-semibold">{brand.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-ember/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/50">Email us</p>
                  <p className="font-semibold">{brand.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/50">Train with us</p>
                  <p className="font-semibold">{brand.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/50">Open</p>
                  <p className="font-semibold">7 Days a Week · See Schedule</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-[0_20px_60px_-24px_rgba(24,19,15,0.18)] sm:p-10"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Request received!
                </h3>
                <p className="max-w-sm text-slate">
                  A Doomsday coach will reach out within the day to confirm
                  your free class. For anything urgent, call us directly at{" "}
                  {brand.phone}.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input required type="text" placeholder="Jane Doe" className={inputClass} />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </Field>
                </div>
                <Field label="Email Address">
                  <input
                    required
                    type="email"
                    placeholder="jane@email.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Which program interests you?">
                  <select required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select a program
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Tell us more">
                  <textarea
                    rows={4}
                    placeholder="Your goals, experience level, or anything else we should know..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-void-800 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Claim My Free Class
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate/70">
                  By submitting, you agree to be contacted about your free
                  class. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate">
        {label}
      </span>
      {children}
    </label>
  );
}
