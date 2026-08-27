# Primo Plumbing & Drain — Premium Redesign

A ground-up, conversion-focused redesign of the Primo Plumbing & Drain marketing site (Spokane, WA), built as a modern, animated, Awwwards-style homepage while preserving the client's existing brand identity.

## Stack

- **Next.js 16** (App Router, Turbopack, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, magnetic buttons, page/preloader transitions, interactive carousel
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `src/app` — root layout, global styles, page composition
- `src/components` — one component per homepage section (Hero, Services, Gallery, Testimonials, FAQ, Contact, etc.) plus shared UI primitives (`MagneticButton`, `SectionHeading`, `AnimatedCounter`)
- `src/lib/data.ts` — all site copy/content (services, testimonials, FAQ, stats) in one place for easy editing
- `src/lib/utils.ts` — small shared helpers

## Notes

- The "Our Work" gallery uses a fully custom, interactive before/after slider and designed project tiles instead of hotlinked stock photography — the sandboxed build environment this was authored in blocks all external image CDNs, so no photo URL could be verified as live before shipping. Swap in the client's real job-site photography (ideal for authenticity) or a licensed stock set whenever convenient — the `Gallery.tsx` and `BeforeAfterSlider.tsx` components are structured to make that a drop-in change.
- The contact form simulates submission client-side (no backend wired up yet) — connect it to your form handler / CRM of choice before launch.
