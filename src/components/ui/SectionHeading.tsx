interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div className="flex items-center gap-3 mb-3">
        {!centered && <div className="h-0.5 w-8 bg-forest-500" />}
        {centered && <div className="mx-auto h-0.5 w-8 bg-forest-500" />}
        <h2 className="font-serif text-3xl font-semibold text-earth-900">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-earth-500 text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
