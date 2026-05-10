"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background image: right half on desktop */}
      <div className="absolute inset-0 lg:left-1/3">
        <Image
          src="/images/hero_2.jpg"
          alt="DJ's Mobile Rust & Mechanical working on a customer's car in Logan"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover object-right scale-x-[-1]"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/40 lg:hidden" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl py-32 lg:py-0"
        >
          <motion.p
            variants={item}
            className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-5"
          >
            Logan&apos;s Mobile Mechanic
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
          >
            Logan&apos;s mechanic.
            <br />
            Your driveway.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed"
          >
            We come to you — home, work, wherever. Rust removal, log book
            service, RWC, and full mechanical. All mobile. All Logan.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:0402381023"
              className="bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-orange-h transition-all flex items-center justify-center gap-2 min-h-12"
            >
              <Phone className="w-5 h-5" />
              Call for a Free Quote
            </a>
            <Link
              href="/services"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center min-h-12"
            >
              See Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </section>
  );
}
