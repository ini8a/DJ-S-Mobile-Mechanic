"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/img_4522_digital_logo.png"
              alt="DJ's Mobile Rust & Mechanical logo"
              width={56}
              height={56}
              className="invert"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-brand-orange transition-colors text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:0402381023"
              className="bg-brand-orange text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-brand-orange-h transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 min-h-11 min-w-11"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-brand-orange py-3 text-base font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:0402381023"
              onClick={() => setOpen(false)}
              className="mt-3 bg-brand-orange text-white px-5 py-3 rounded-lg font-semibold hover:bg-brand-orange-h transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call 0402 381 023
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
