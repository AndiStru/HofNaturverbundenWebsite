import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  tag?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  tag,
  children,
}: CardProps) {
  const content = (
    <div className="bg-white rounded-2xl overflow-hidden border border-earth-100 hover:border-forest-200 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      {imageSrc && (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        {tag && (
          <span className="text-xs font-medium text-forest-700 bg-forest-100 px-2.5 py-1 rounded-full w-fit mb-3">
            {tag}
          </span>
        )}
        <h3 className="font-serif font-semibold text-lg text-earth-900 mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-earth-500 text-sm leading-relaxed flex-1">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="h-full block">
        {content}
      </Link>
    );
  }

  return content;
}
