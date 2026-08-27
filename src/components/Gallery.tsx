"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Flame,
  Home,
  MapPin,
  ShowerHead,
  Wrench,
  Building2,
  Camera,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface Project {
  icon: LucideIcon;
  title: string;
  location: string;
  gradient: string;
  photoKeywords: string;
}

const projects: Project[] = [
  {
    icon: Flame,
    title: "Tankless Water Heater Install",
    location: "North Spokane, WA",
    gradient: "from-[#1c6fef] to-[#0a1c30]",
    photoKeywords: "water-heater,plumbing",
  },
  {
    icon: Wrench,
    title: "Whole-Home Repipe",
    location: "Liberty Lake, WA",
    gradient: "from-[#22d3ee] to-[#0d3d85]",
    photoKeywords: "copper-pipes,plumbing",
  },
  {
    icon: ShowerHead,
    title: "Master Bath Remodel",
    location: "Spokane Valley, WA",
    gradient: "from-[#f0904a] to-[#7a3d10]",
    photoKeywords: "bathroom,remodel",
  },
  {
    icon: Droplets,
    title: "Hydro-Jet Drain Service",
    location: "Downtown Spokane, WA",
    gradient: "from-[#0d3d85] to-[#22d3ee]",
    photoKeywords: "kitchen-sink,plumbing",
  },
  {
    icon: Building2,
    title: "Restaurant Backflow Compliance",
    location: "Spokane, WA",
    gradient: "from-[#0a1c30] to-[#1c6fef]",
    photoKeywords: "restaurant,kitchen",
  },
  {
    icon: Home,
    title: "New Construction Rough-In",
    location: "Airway Heights, WA",
    gradient: "from-[#f0904a] to-[#1c6fef]",
    photoKeywords: "construction,house",
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const Icon = project.icon;
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="card-hover group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
    >
      {/* Gradient base — always present; the real photo layers on top and this
          shows straight through if the photo fails to load. */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

      {!photoFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://loremflickr.com/800/600/${project.photoKeywords}`}
          alt={project.title}
          loading="lazy"
          onError={() => setPhotoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />

      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <Camera className="h-4 w-4" />
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-white/60">
            <MapPin className="h-3 w-3" />
            {project.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-navy-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="See the difference, in real time."
          description="A look at recent jobs across Spokane — drag the slider below to see the kind of transformation our crews deliver on every repipe and repair."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <BeforeAfterSlider />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
