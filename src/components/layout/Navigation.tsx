"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/produkte", label: "Produkte" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <nav className="flex flex-col gap-4 py-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-lg font-medium transition-colors hover:text-forest-500 ${
              pathname === href ? "text-forest-500" : "text-earth-700"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium transition-colors hover:text-forest-500 ${
            pathname === href
              ? "text-forest-500 border-b-2 border-forest-500 pb-0.5"
              : "text-earth-700"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
