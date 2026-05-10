import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,93,4,0.1)_0%,_transparent_70%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
          Ready to book?
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
          Give us a call or send through a message. Free quotes, no obligation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0402381023"
            className="bg-brand-orange text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-brand-orange-h transition-all flex items-center gap-2 min-h-12"
          >
            <Phone className="w-5 h-5" />
            Call 0402 381 023
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-brand-dark transition-all min-h-12 flex items-center"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
