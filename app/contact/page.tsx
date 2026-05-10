import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact DJ's Mobile Rust & Mechanical",
  description:
    "Get a free quote from Logan's mobile mechanic. Call 0402381023 or fill in the form. We service Logan, Springwood, Beenleigh, Browns Plains & surrounding suburbs.",
  alternates: { canonical: "https://djsmobilemech.com.au/contact" },
};

const suburbs = [
  "Springwood",
  "Beenleigh",
  "Browns Plains",
  "Loganholme",
  "Slacks Creek",
  "Shailer Park",
  "Daisy Hill",
  "Cornubia",
  "Marsden",
  "Waterford",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote — Logan & Surrounds"
        subtitle="Call us or send a message. We'll get back to you fast."
        image="/images/contact_hero.png"
        imageAlt="Workshop tools and repair estimate — DJ's Mobile Rust & Mechanical"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="uppercase tracking-widest text-brand-orange text-sm font-semibold mb-3">
                Get in touch
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mb-6 tracking-tight">
                The fastest way? Just call.
              </h2>

              <a
                href="tel:0402381023"
                className="flex items-center gap-3 text-brand-orange font-black text-3xl lg:text-4xl hover:text-brand-orange-h transition-colors"
              >
                <Phone className="w-8 h-8" />
                0402 381 023
              </a>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-brand-text">
                      Logan, QLD
                    </div>
                    <div className="text-brand-muted">We come to you</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-brand-text mb-1">
                      Service area
                    </div>
                    <p className="text-brand-muted leading-relaxed">
                      We service Logan and surrounding areas — {suburbs.join(", ")}.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-brand-navy rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,93,4,0.15)_0%,_transparent_60%)]" />
                <div className="relative">
                  <p className="uppercase tracking-widest text-brand-orange text-xs font-semibold mb-2">
                    Service area
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Logan &amp; surrounds
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mobile across all of Logan City. Not sure if you&apos;re in
                    range? Give us a call — chances are we cover it.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
