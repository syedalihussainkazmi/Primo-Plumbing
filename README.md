# Doomsday Combat Fitness — Premium Redesign

A ground-up, conversion-focused redesign of the Doomsday Combat Fitness marketing site, built as a modern, animated, Awwwards-style homepage while preserving the client's existing brand identity (name, combat-sports focus).

## Stack

- **Next.js 16** (App Router, Turbopack, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, magnetic buttons, page/preloader transitions, interactive testimonial carousel
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
- `src/components` — one component per homepage section (Hero, Services, Gallery, Testimonials, FAQ, Contact, etc.) plus shared UI primitives (`MagneticButton`, `SectionHeading`, `AnimatedCounter`, `ImpactCore`)
- `src/lib/data.ts` — all site copy/content (brand info, programs, testimonials, FAQ, stats) in one place for easy editing
- `src/lib/utils.ts` — small shared helpers

## Notes

- **The live doomsdaycombatfitness.com site was unreachable from this build environment** (network egress to the domain was blocked), so this mock-up could not be built from the real site's exact copy, photography, or figures. Brand name and combat-sports category were preserved; contact details, stats, testimonials, and program descriptions in `src/lib/data.ts` are illustrative placeholders clearly flagged with a comment at the top of that file — swap in the real phone, email, address, hours, member counts, and testimonials before launch.
- The "Real Results" gallery uses a fully custom, interactive before/after slider and designed class tiles instead of hotlinked photography — the sandboxed build environment this was authored in blocks external image CDNs, and per the design brief, AI-generated imagery was avoided. Swap in the gym's real photography/video (ideal for authenticity) or licensed stock whenever convenient — the `Gallery.tsx` and `BeforeAfterSlider.tsx` components are structured to make that a drop-in change.
- The contact form simulates submission client-side (no backend wired up yet) — connect it to your form handler / CRM of choice before launch.
