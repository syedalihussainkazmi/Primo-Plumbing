import {
  Droplets,
  Flame,
  Wrench,
  ShowerHead,
  GaugeCircle,
  Gauge,
  Building2,
  ShieldCheck,
  Clock,
  BadgeCheck,
  HeartHandshake,
  Award,
  PhoneCall,
  ClipboardCheck,
  Hammer,
  Sparkles,
} from "lucide-react";

export const brand = {
  name: "Primo Plumbing & Drain",
  shortName: "Primo",
  city: "Spokane, WA",
  phone: "(509) 822-8299",
  phoneHref: "tel:+15098228299",
  email: "hello@primoplumbinganddrain.com",
  address: "3904 W Dawn Ave, Spokane, WA 99208",
  owners: "Steve & Renae Handley",
  yearsExperience: 30,
};

export const services = [
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description:
      "High-pressure hydro-jetting and camera-guided clearing for slow, clogged, or backed-up drains — gone for good, not just today.",
    tag: "Most Requested",
  },
  {
    icon: Flame,
    title: "Water Heaters",
    description:
      "Tank and tankless installs, repairs, and replacements from every major brand — sized right and installed to code.",
    tag: "Same-Day Install",
  },
  {
    icon: Wrench,
    title: "Repiping & Leak Detection",
    description:
      "Whole-home repipe and pinpoint leak detection using acoustic and thermal tools, so we fix the source, not the symptom.",
    tag: "No Guesswork",
  },
  {
    icon: ShowerHead,
    title: "Fixture & Remodel Plumbing",
    description:
      "Kitchen and bathroom remodels, fixture upgrades, and re-routes handled with the precision your renovation deserves.",
    tag: "Design-Friendly",
  },
  {
    icon: GaugeCircle,
    title: "Backflow Prevention",
    description:
      "Certified backflow testing, repair, and annual compliance reporting to keep your water supply safe and code-compliant.",
    tag: "Certified",
  },
  {
    icon: Gauge,
    title: "Gas Line Installation",
    description:
      "Gas piping and appliance hookups for ranges, dryers, and outdoor kitchens — pressure-tested and permit-ready.",
    tag: "Licensed",
  },
  {
    icon: Building2,
    title: "Commercial & Restaurant",
    description:
      "Grease trap service, backflow compliance, and rapid-response repairs for restaurants, rentals, and commercial properties.",
    tag: "24/7 Priority",
  },
  {
    icon: ShieldCheck,
    title: "Flood Prevention",
    description:
      "Sump pumps, check valves, and proactive inspections that stop a small leak from becoming a five-figure disaster.",
    tag: "Prevention First",
  },
] as const;

export const whyChooseUs = [
  {
    icon: Award,
    title: "30+ Years in the Trade",
    description:
      "Three decades of hands-on experience across Spokane homes and businesses — we've seen it, and we've fixed it.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed, Bonded & Insured",
    description:
      "Full Washington State licensing and insurance on every job, every technician, every time. No exceptions.",
  },
  {
    icon: HeartHandshake,
    title: "Family-Owned & Operated",
    description:
      "Run by Steve & Renae Handley — a local team that treats your home like it's their own neighborhood.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "Real-time arrival windows and a technician who respects your schedule as much as your plumbing.",
  },
  {
    icon: Sparkles,
    title: "Upfront, Honest Pricing",
    description:
      "You approve the price before we start. No surprise line items, no pressure — just a clear number.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description:
      "Every repair and install is backed by our workmanship guarantee. If it's not right, we make it right.",
  },
] as const;

export const process = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Reach Out",
    description:
      "Call, text, or book online in under a minute. We answer fast — real people, real answers.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Free Diagnosis",
    description:
      "A certified tech inspects the issue on-site and walks you through exactly what's wrong.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Upfront Quote & Fix",
    description:
      "You approve a flat, honest price first. Then we get to work with premium parts and clean technique.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Guaranteed Results",
    description:
      "We test everything before we leave and back the work with our satisfaction guarantee.",
  },
] as const;

export const stats = [
  { value: 30, suffix: "+", label: "Years Serving Spokane" },
  { value: 12500, suffix: "+", label: "Jobs Completed" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
  { value: 24, suffix: "/7", label: "Emergency Response" },
] as const;

export const testimonials = [
  {
    name: "Marissa Coleman",
    location: "Spokane Valley, WA",
    rating: 5,
    text: "They answered on the first ring during a burst pipe emergency and had a technician at our door within the hour. Professional, fast, and the pricing was exactly what they quoted — no surprises.",
    service: "Emergency Leak Repair",
    avatarId: 47,
  },
  {
    name: "David Ostrander",
    location: "North Spokane, WA",
    rating: 5,
    text: "Steve's crew repiped our entire house in two days with zero drama. They protected our floors, cleaned up every night, and walked us through everything before touching a single pipe.",
    service: "Whole-Home Repipe",
    avatarId: 12,
  },
  {
    name: "Priya Nair",
    location: "Liberty Lake, WA",
    rating: 5,
    text: "Our tankless water heater install was flawless. The technician was knowledgeable, respectful of our home, and even followed up a week later to make sure everything was running perfectly.",
    service: "Tankless Water Heater",
    avatarId: 29,
  },
  {
    name: "Alan Whitfield",
    location: "Spokane, WA",
    rating: 5,
    text: "Best drain cleaning experience we've had. They used a camera to show us exactly what was going on before recommending anything. Honest, transparent, and genuinely good people.",
    service: "Hydro-Jet Drain Cleaning",
    avatarId: 33,
  },
] as const;

export const faqs = [
  {
    question: "Do you offer emergency plumbing service?",
    answer:
      "Yes — we run a 24/7 emergency line for burst pipes, major leaks, and no-water situations. Most emergency calls in the Spokane area are met with a technician on-site within the hour.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "Every job starts with a free, no-obligation diagnosis and a flat, upfront quote. You approve the exact price before any work begins — never a surprise invoice at the end.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Every technician on our team is fully licensed through Washington State, background-checked, and covered by our bonding and insurance on every single job we take on.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We proudly serve Spokane, Spokane Valley, Liberty Lake, North Idaho, and surrounding communities for both residential and commercial plumbing.",
  },
  {
    question: "Do you work on both residential and commercial properties?",
    answer:
      "Absolutely. From single-family homes and rental properties to restaurants and commercial buildings, our team is equipped for jobs of every scale.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer:
      "Every repair and installation is backed by our workmanship guarantee. If something isn't right, we return and make it right at no additional cost.",
  },
] as const;

export const trustBadges = [
  "Licensed & Bonded",
  "Fully Insured",
  "Family-Owned",
  "30+ Years Experience",
  "5-Star Rated",
  "24/7 Emergency Service",
];
