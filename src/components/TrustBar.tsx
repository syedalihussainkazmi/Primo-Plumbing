import { BadgeCheck } from "lucide-react";
import { trustBadges } from "@/lib/data";

export default function TrustBar() {
  const loop = [...trustBadges, ...trustBadges];

  return (
    <div className="relative overflow-hidden border-y border-line bg-white py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-12">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-12">
            {loop.map((badge, i) => (
              <div
                key={`${dup}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide text-slate"
              >
                <BadgeCheck className="h-4 w-4 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
