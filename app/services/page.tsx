import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Phone } from "lucide-react";

type Service = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    title: "Rust Removal",
    body:
      "Rust doesn't stop on its own. Catch it early and it's manageable. Leave it and you're looking at serious panel damage or a failed RWC. We treat rust at the source — grinding, treating, and sealing. All done at your place.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Rusted vehicle panel being treated",
  },
  {
    title: "Log Book Servicing",
    body:
      "Your log book service needs to be done on schedule to keep your warranty valid. We handle it all — oil, filters, fluids, belts, checks — and stamp your log book. No dealership required.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    alt: "Mechanic performing a log book service",
  },
  {
    title: "General Servicing & Mechanical",
    body:
      "Anything mechanical, we handle it. From routine services to more complex repairs. We'll tell you straight what's wrong and what it'll cost before we do anything.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    alt: "General mechanical work being performed",
  },
  {
    title: "Diagnostics & Key Coding",
    body:
      "Warning lights, no-start issues, key fobs — we plug in, diagnose, and fix. We also code new keys and remotes on site.",
    image:
      "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&q=80",
    alt: "Vehicle diagnostic computer plugged in",
  },
  {
    title: "Brakes & Suspension",
    body:
      "Squealing brakes or a car that pulls to one side? Don't put it off. We check pads, rotors, calipers, and suspension components and replace what needs replacing.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    alt: "Brake disc and caliper",
  },
  {
    title: "Pre-Purchase Inspections",
    body:
      "Thinking about buying a used car? Get us to check it first. We'll go over it top to bottom and tell you exactly what you're getting into. Worth every cent.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Mechanic inspecting a used vehicle",
  },
  {
    title: "Roadworthy Certificates",
    body:
      "We're licensed to issue RWCs in Queensland (A.I.S 10865). We come to you, do the inspection, and issue the certificate on the spot if the car passes.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    alt: "Roadworthy certificate inspection",
  },
];

export const metadata: Metadata = {
  title: "Our Services | Mobile Mechanical Services Logan QLD",
  description:
    "Full range of mobile automotive services in Logan — rust removal, log book servicing, diagnostics, brakes & suspension, pre-purchase inspections, RWC. We come to you.",
  alternates: { canonical: "https://djsmobilemech.com.au/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Mobile Automotive Services — Logan & Surrounds"
        subtitle="Full range of mobile mechanical services across Logan. We come to you — no drop-off needed."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-3">
                    Service {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mb-4 tracking-tight">
                    {s.title}
                  </h2>
                  <p className="text-brand-muted text-lg leading-relaxed mb-6">
                    {s.body}
                  </p>
                  <a
                    href="tel:0402381023"
                    className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange-h transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call to book — 0402 381 023
                  </a>
                </div>
              </div>
            );
          })}

          <div className="text-center pt-6">
            <p className="text-brand-muted text-lg">
              Call{" "}
              <a
                href="tel:0402381023"
                className="text-brand-orange font-semibold"
              >
                0402 381 023
              </a>{" "}
              to book any service.{" "}
              <Link
                href="/contact"
                className="text-brand-orange font-semibold underline-offset-4 hover:underline"
              >
                Free quotes
              </Link>{" "}
              always.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
