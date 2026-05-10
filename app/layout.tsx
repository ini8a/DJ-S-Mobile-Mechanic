import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://djsmobilemech.com.au"),
  title: {
    default: "DJ's Mobile Rust & Mechanical | Mobile Mechanic Logan QLD",
    template: "%s | DJ's Mobile Rust & Mechanical",
  },
  description:
    "Logan's mobile mechanic — rust removal, log book servicing, RWC, diagnostics, brakes & more. We come to you. 20+ years experience. A.I.S 10865. Call 0402381023.",
  keywords: [
    "mobile mechanic Logan",
    "rust removal Logan",
    "roadworthy certificate Logan QLD",
    "log book service Logan",
    "mobile mechanic Queensland",
    "RWC Logan",
    "pre purchase inspection Logan",
    "brakes suspension Logan",
    "DJ mobile rust mechanical",
  ],
  authors: [{ name: "DJ's Mobile Rust & Mechanical" }],
  creator: "DJ's Mobile Rust & Mechanical",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://djsmobilemech.com.au",
    siteName: "DJ's Mobile Rust & Mechanical",
    title: "DJ's Mobile Rust & Mechanical | Mobile Mechanic Logan QLD",
    description:
      "Logan's mobile mechanic — rust removal, log book servicing, RWC & more. We come to you. 20+ years experience. Call 0402381023.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "DJ's Mobile Rust & Mechanical — Logan's mobile mechanic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ's Mobile Rust & Mechanical | Mobile Mechanic Logan QLD",
    description:
      "Logan's mobile mechanic. Rust removal, RWC, log book service & more. We come to you.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://djsmobilemech.com.au" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://djsmobilemech.com.au",
  name: "DJ's Mobile Rust & Mechanical",
  description:
    "Logan-based mobile mechanic. Rust removal, log book servicing, roadworthy certificates, diagnostics, brakes & suspension, pre-purchase inspections. We come to you.",
  url: "https://djsmobilemech.com.au",
  telephone: "+61402381023",
  priceRange: "$$",
  image: "https://djsmobilemech.com.au/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Logan",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.6389,
    longitude: 153.1097,
  },
  areaServed: [
    "Logan",
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
  ].map((name) => ({ "@type": "City", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Automotive Services",
    itemListElement: [
      "Rust Removal",
      "Log Book Servicing",
      "General Mechanical Servicing",
      "Diagnostics & Key Coding",
      "Brakes & Suspension",
      "Pre-Purchase Inspections",
      "Roadworthy Certificates",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  identifier: "A.I.S 10865",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-brand-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
