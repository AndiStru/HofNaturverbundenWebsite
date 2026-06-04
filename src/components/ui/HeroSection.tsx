import Button from "./Button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  size?: "large" | "medium";
}

export default function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  imageSrc,
  imageAlt,
  size = "large",
}: HeroSectionProps) {
  const heightCls = size === "large" ? "min-h-[85vh]" : "min-h-[40vh]";

  return (
    <section className={`relative flex items-center ${heightCls} overflow-hidden`}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt ?? ""}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-forest-700 via-forest-500 to-earth-700" />
      )}
      <div className="absolute inset-0 bg-earth-900/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>
          )}
          {(ctaLabel || secondaryLabel) && (
            <div className="flex flex-wrap gap-3">
              {ctaLabel && ctaHref && (
                <Button href={ctaHref} variant="primary" className="bg-warm-white text-earth-900 hover:bg-earth-100 focus:ring-white">
                  {ctaLabel}
                </Button>
              )}
              {secondaryLabel && secondaryHref && (
                <Button href={secondaryHref} variant="ghost" className="text-white border border-white/50 hover:bg-white/10">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
