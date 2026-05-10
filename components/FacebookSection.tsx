import { Facebook } from "lucide-react";

export default function FacebookSection() {
  return (
    <section className="bg-brand-light py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1877F2]/10 flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-[#1877F2]" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
                  Facebook
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-text tracking-tight mb-4">
                See our latest work
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                Follow us on Facebook to see before-and-afters, customer jobs,
                and real reviews from Logan locals. No fluff — just the work.
              </p>
              <a
                href="https://www.facebook.com/people/DJs-Mobile-Rust-Mechanical/61556690033135/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1565D8] transition-colors w-fit"
              >
                <Facebook className="w-5 h-5" />
                Follow on Facebook
              </a>
            </div>

            {/* Right — Facebook embed */}
            <div className="bg-[#F0F2F5] flex items-center justify-center p-6 min-h-[320px]">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FDJs-Mobile-Rust-Mechanical%2F61556690033135%2F&tabs=timeline&width=380&height=280&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="380"
                height="280"
                style={{ border: "none", overflow: "hidden", borderRadius: "8px" }}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="DJ's Mobile Rust & Mechanical on Facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
