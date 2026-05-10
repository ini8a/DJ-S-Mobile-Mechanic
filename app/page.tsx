import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FacebookSection from "@/components/FacebookSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mobile Mechanic Logan | Rust Removal & RWC | DJ's",
  description:
    "Logan's mobile mechanic specialising in rust removal, log book servicing, roadworthy certificates & more. We come to you. 20+ years. A.I.S 10865. Free quotes.",
  alternates: { canonical: "https://djsmobilemech.com.au" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
      <FacebookSection />
      <CTASection />
    </>
  );
}
