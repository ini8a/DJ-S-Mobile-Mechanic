import Link from "next/link";
import { Facebook, Phone, MapPin } from "lucide-react";

const services = [
  "Rust Removal",
  "Log Book Servicing",
  "General Mechanical",
  "Diagnostics & Key Coding",
  "Brakes & Suspension",
  "Pre-Purchase Inspections",
  "Roadworthy Certificates",
];

const areas = [
  "Springwood",
  "Beenleigh",
  "Browns Plains",
  "Loganholme",
  "Slacks Creek",
  "Shailer Park",
];

export default function Footer() {
  return (
    <footer className="bg-[#070B14] text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link href="/" className="flex items-baseline gap-2">
              <span className="text-brand-orange font-black text-2xl">
                DJ&apos;s
              </span>
              <span className="text-white font-semibold text-sm">
                Mobile Rust &amp; Mechanical
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Logan&apos;s mobile rust &amp; mechanical specialists.
            </p>
            <p className="mt-3 text-xs text-gray-500">
              Licensed A.I.S 10865
            </p>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="mt-4 inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Facebook</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="hover:text-brand-orange transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <a
              href="tel:0402381023"
              className="flex items-center gap-2 text-brand-orange font-semibold text-lg hover:text-brand-orange-h transition-colors"
            >
              <Phone className="w-5 h-5" />
              0402 381 023
            </a>
            <p className="mt-4 text-sm flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                Logan, QLD
                <br />
                <span className="text-gray-500">We come to you</span>
              </span>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Areas Served
            </h4>
            <ul className="space-y-2 text-sm">
              {areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; 2026 DJ&apos;s Mobile Rust &amp; Mechanical. All rights reserved.
          </p>
          <p>Licence A.I.S 10865</p>
        </div>
      </div>
    </footer>
  );
}
