"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Layers, ShieldCheck, LucideIcon } from "lucide-react";

type Point = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const points: Point[] = [
  {
    icon: MapPin,
    title: "We come to you",
    description:
      "No tow truck. No Uber. We show up at your home or work.",
  },
  {
    icon: Award,
    title: "20+ years, still getting it right",
    description:
      "Not a franchise. Not a chain. Just a bloke who's been doing this a long time.",
  },
  {
    icon: Layers,
    title: "Rust AND mechanical",
    description: "Most tradies do one or the other. We do both.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed. Insured. Local.",
    description: "A.I.S 10865. You know who's working on your car.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-brand-navy py-20 lg:py-32 text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -left-10 top-10 text-[20rem] font-black text-brand-orange/5 leading-none select-none pointer-events-none hidden lg:block"
      >
        20+
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <p className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-3">
            Why us
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Why Logan chooses DJ&apos;s
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
