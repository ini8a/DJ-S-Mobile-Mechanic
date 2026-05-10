"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Damian sorted out the rust on my old Hilux in one arvo. Saved me a fortune at the panel beater. Highly recommend.",
    author: "Brad T.",
    location: "Springwood",
  },
  {
    quote:
      "Called at 8am, he was at my place by 10. Log book service done in the driveway. Couldn't be easier.",
    author: "Sarah M.",
    location: "Beenleigh",
  },
  {
    quote:
      "Did the pre-purchase inspection on a Commodore I was looking at. Found issues the seller didn't mention. Saved me from a lemon.",
    author: "James K.",
    location: "Browns Plains",
  },
  {
    quote:
      "RWC done at my workplace carpark. The bloke knows his stuff and doesn't try to upsell you.",
    author: "Kylie R.",
    location: "Loganholme",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-light py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <p className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-3">
            Reviews
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-text tracking-tight">
            What Logan locals say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm relative"
            >
              <span
                aria-hidden
                className="absolute top-4 left-6 text-6xl font-black text-brand-orange opacity-30 leading-none select-none"
              >
                &ldquo;
              </span>
              <div className="text-yellow-400 text-sm mb-3 relative">
                {"★★★★★"}
              </div>
              <p className="italic text-brand-text text-base leading-relaxed mb-5 relative">
                {t.quote}
              </p>
              <div>
                <div className="font-semibold text-brand-text text-sm">
                  {t.author}
                </div>
                <div className="text-brand-muted text-xs">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
