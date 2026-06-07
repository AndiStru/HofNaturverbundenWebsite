"use client";

import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-earth-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <SiteImage
            src="/images/Logo-ohne-Schrift.png"
            alt="Hof-Naturverbunden Logo"
            width={44}
            height={44}
            className="object-contain"
          />
          <span className="font-serif font-semibold text-xl text-earth-900 group-hover:text-forest-700 transition-colors">
            Hof-Naturverbunden
          </span>
        </Link>

        <Navigation />

        <button
          className="md:hidden p-2 rounded-md text-earth-700 hover:bg-earth-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-earth-100 bg-warm-white px-4 pb-4">
          <Navigation mobile />
        </div>
      )}
    </header>
  );
}
