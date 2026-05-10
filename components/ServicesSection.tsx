"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BookOpen,
  Wrench,
  Cpu,
  Disc,
  Search,
  ClipboardCheck,
  LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Zap,
    title: "Rust Removal",
    description: "Stop rust before it eats your car alive.",
  },
  {
    icon: BookOpen,
    title: "Log Book Servicing",
    description: "Keep your warranty. Skip the dealership prices.",
  },
  {
    icon: Wrench,
    title: "General Mechanical",
    description: "Whatever's wrong, we'll find it and fix it.",
  },
  {
    icon: Cpu,
    title: "Diagnostics & Key Coding",
    description: "Dashboard light on? We'll tell you exactly what's going on.",
  },
  {
    icon: Disc,
    title: "Brakes & Suspension",
    description: "Don't guess with brakes. Get them checked properly.",
  },
  {
    icon: Search,
    title: "Pre-Purchase Inspections",
    description: "Don't buy someone else's problem.",
  },
  {
    icon: ClipboardCheck,
    title: "Roadworthy Certificates",
    description: "Licensed RWC inspections done at your place.",
  },
];

const card = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesSection() {
  return (
    <section className="bg-brand-light py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <p className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-3">
            What we do
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-text tracking-tight">
            Everything your car needs. We bring it to you.
          </h2>
          <p className="mt-4 text-brand-muted text-lg">
            One operator. Full range. No need to drop your car anywhere.
          </p>
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === services.length - 1;
            return (
              <motion.div
                key={s.title}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`bg-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  isLast ? "lg:col-start-2" : ""
                }`}
              >
                <Icon className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  {s.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
