import {
  Swords,
  Flame,
  Shield,
  Target,
  HeartPulse,
  Dumbbell,
  Users,
  Crosshair,
  Trophy,
  Medal,
  TrendingUp,
  Award,
  HeartHandshake,
  PhoneCall,
  ClipboardCheck,
  Building2,
} from "lucide-react";

// NOTE: doomsdaycombatfitness.com was unreachable from this build environment
// (network egress to the domain was blocked), so brand contact details and
// figures below are placeholders for this design mock-up. Swap in the real
// phone, email, address, hours, and stats before this goes live.
export const brand = {
  name: "Doomsday Combat Fitness",
  shortName: "Doomsday",
  city: "Your City",
  phone: "(555) 010-0199",
  phoneHref: "tel:+15550100199",
  email: "train@doomsdaycombatfitness.com",
  address: "4200 Battlefield Ave, Your City, ST",
  tagline: "Forged, Not Born",
  yearsExperience: 10,
};

export const services = [
  {
    icon: Swords,
    title: "Mixed Martial Arts",
    description:
      "Strike, grapple, and finish — full-spectrum MMA coaching that blends every discipline into one complete fighting system.",
    tag: "Most Popular",
  },
  {
    icon: Flame,
    title: "Muay Thai",
    description:
      "The art of eight limbs. Build fight-ready power and conditioning through pad work, clinch drills, and live rounds.",
    tag: "High Intensity",
  },
  {
    icon: Shield,
    title: "Brazilian Jiu-Jitsu",
    description:
      "Master the ground game with technical, position-first BJJ coaching — gi and no-gi, from white belt to black.",
    tag: "Gi & No-Gi",
  },
  {
    icon: Target,
    title: "Boxing",
    description:
      "Sharpen your hands. Footwork, defense, and power mechanics coached round after round by fighters who've been in the ring.",
    tag: "Foundational",
  },
  {
    icon: HeartPulse,
    title: "Kickboxing Fitness",
    description:
      "All the intensity of combat training, zero the ego. A calorie-torching, stress-crushing workout for every fitness level.",
    tag: "Cardio Burn",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description:
      "Athlete-built programming — power, mobility, and engine work designed to make every discipline you train hit harder.",
    tag: "Performance",
  },
  {
    icon: Users,
    title: "Youth Combat Program",
    description:
      "Discipline, confidence, and real self-defense for ages 6–14, taught in a structured, safety-first environment.",
    tag: "Ages 6–14",
  },
  {
    icon: Crosshair,
    title: "Private Coaching",
    description:
      "One-on-one sessions built around your goals — competition prep, technique correction, or a faster path to your first stripe.",
    tag: "1-on-1",
  },
] as const;

export const whyChooseUs = [
  {
    icon: Award,
    title: "Coached By Competitors",
    description:
      "Every coach on our mats has competed at a high level — you're learning what actually works, not theory.",
  },
  {
    icon: Users,
    title: "Every Level, Zero Ego",
    description:
      "First class or fifteenth year, our floor is built for real progress without the intimidation factor.",
  },
  {
    icon: TrendingUp,
    title: "Structured Progression",
    description:
      "A clear curriculum and rank system means you always know exactly what to work on next.",
  },
  {
    icon: Building2,
    title: "Built-For-Combat Facility",
    description:
      "Full-size mat space, a real ring, heavy bags, and a recovery zone — a facility that matches the coaching.",
  },
  {
    icon: HeartHandshake,
    title: "A Team, Not A Membership",
    description:
      "Doomsday is a community that shows up for each other, in the gym and outside of it.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "From first-class nerves to competition podiums — our members' results speak louder than our marketing.",
  },
] as const;

export const process = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Claim Your Free Class",
    description:
      "Grab a spot online or call the gym — no contracts, no pressure, just a real class on us.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Meet Your Coach",
    description:
      "A quick goals conversation so we point you at the right program and the right starting pace.",
  },
  {
    icon: Flame,
    step: "03",
    title: "Train & Transform",
    description:
      "Structured classes, real coaching cues, and a team pushing you past where you'd stop alone.",
  },
  {
    icon: Medal,
    step: "04",
    title: "Join The Team",
    description:
      "Lock in your program, start climbing the rank system, and become part of the Doomsday roster.",
  },
] as const;

export const stats = [
  { value: 500, suffix: "+", label: "Athletes Trained" },
  { value: 7, suffix: "", label: "Combat Disciplines" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
  { value: 15, suffix: "+", label: "Expert Coaches" },
] as const;

export const testimonials = [
  {
    name: "Jordan Michaels",
    location: "Adult MMA",
    rating: 5,
    text: "I walked in nervous and out of shape. Eight months later I've competed in my first amateur fight and I'm in the best condition of my life. The coaches never once made me feel behind.",
    service: "MMA Program",
    avatarId: 51,
  },
  {
    name: "Renee Castillo",
    location: "Muay Thai & Conditioning",
    rating: 5,
    text: "Doomsday doesn't feel like a gym membership, it feels like a team. The Muay Thai coaching is technical and brutal in the best way — I've never been pushed like this and never enjoyed it more.",
    service: "Muay Thai Program",
    avatarId: 25,
  },
  {
    name: "Marcus Webb",
    location: "Brazilian Jiu-Jitsu",
    rating: 5,
    text: "Started BJJ at 38 with zero athletic background. The rank system and the way coaches break down technique made it click fast. Two stripes in and I actually understand the game now.",
    service: "BJJ Program",
    avatarId: 14,
  },
  {
    name: "Priya Anand",
    location: "Kickboxing Fitness",
    rating: 5,
    text: "I signed up to get in shape, not to fall in love with combat sports — but here we are. Down 30 pounds, stronger than I've ever been, and I look forward to every single class.",
    service: "Kickboxing Fitness",
    avatarId: 43,
  },
] as const;

export const faqs = [
  {
    question: "Do I need any experience to start?",
    answer:
      "None at all. Most of our members walk in with zero combat sports background. Every program has a true beginner track, and your first class is built to teach fundamentals, not test them.",
  },
  {
    question: "What should I bring to my first class?",
    answer:
      "Just yourself, comfortable athletic clothing, and water. We provide loaner gloves and gear for your first few classes so you can try it out before investing in your own equipment.",
  },
  {
    question: "Is training safe? I'm worried about injuries.",
    answer:
      "Safety is built into every class — controlled intensity, coach supervision, and a culture that shuts down ego before it becomes a problem. Sparring and live rounds are earned, never forced.",
  },
  {
    question: "Do you offer classes for kids?",
    answer:
      "Yes — our Youth Combat Program (ages 6–14) focuses on discipline, confidence, and age-appropriate technique in a structured, safety-first environment separate from adult classes.",
  },
  {
    question: "How is the free class trial structured?",
    answer:
      "Book online or call the gym, pick a class that fits your schedule, and show up. No contract, no credit card required — just an honest look at how we coach before you commit to anything.",
  },
  {
    question: "Can I train more than one discipline?",
    answer:
      "Absolutely — most members cross-train across two or three disciplines. Our membership tiers are built around unlimited access, so you can mix MMA, Muay Thai, BJJ, and boxing freely.",
  },
] as const;

export const trustBadges = [
  "7 Disciplines Under One Roof",
  "All Skill Levels Welcome",
  "Certified, Competing Coaches",
  "Kids & Adult Programs",
  "Free Trial Class",
  "5-Star Rated",
];
