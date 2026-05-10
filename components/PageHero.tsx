import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({ title, subtitle, image, imageAlt }: Props) {
  return (
    <section
      className={`relative ${
        image ? "" : "bg-brand-navy"
      } pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/60" />
        </>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
