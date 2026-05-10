import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { Heart, Wrench, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Logan Family Business | 20+ Years Experience",
  description:
    "DJ's Mobile Rust & Mechanical is a Logan-based family business with 20+ years experience. Licensed A.I.S 10865. We bring the workshop to you.",
  alternates: { canonical: "https://djsmobilemech.com.au/about" },
};

const values = [
  {
    icon: Heart,
    title: "Honest",
    description: "We tell you what's wrong and what it'll cost. No surprises.",
  },
  {
    icon: Wrench,
    title: "Experienced",
    description: "20+ years working on all makes and models.",
  },
  {
    icon: MapPin,
    title: "Local",
    description:
      "Logan based. We know the area and we're invested in the community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DJ's Mobile Rust & Mechanical — Logan"
        subtitle="Logan-based. Family run. 20+ years in the trade."
        image="/images/hero_3.jpg"
        imageAlt="DJ's Mobile Rust & Mechanical ute at a customer's home in Logan"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-3">
                Our story
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mb-6 tracking-tight">
                A bloke who knows his trade
              </h2>
              <div className="space-y-4 text-brand-muted text-lg leading-relaxed">
                <p>
                  I&apos;ve been working on cars my whole life. Started out in
                  workshops, learned the trade properly, and after 20+ years I
                  decided to take it mobile.
                </p>
                <p>
                  The idea was simple — most people don&apos;t want the hassle of
                  dropping their car off somewhere, waiting around, and
                  organising a lift home. So I bring the workshop to them.
                </p>
                <p>
                  We&apos;re a family business based in Logan. Not a franchise,
                  not a chain — just us. I do the work myself, so you always
                  know who you&apos;re dealing with.
                </p>
                <p>
                  We do everything from log book services to rust removal to
                  roadworthies. Most places do one or the other. We handle it
                  all — which means less messing around for you.
                </p>
                <p>
                  Licensed under A.I.S 10865. Fully insured. And we service all
                  of Logan and the surrounding suburbs.
                </p>
                <p>
                  If you&apos;ve got a question about your car, give us a call.
                  Happy to chat.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 lg:p-12">
              <Image
                src="/images/img_4522_digital_logo.png"
                alt="DJ's Mobile Rust & Mechanical logo"
                width={480}
                height={480}
                className="w-full max-w-sm lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-3">
              How we work
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-text tracking-tight">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-8 border border-brand-border shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-text mb-2">
                    {v.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
