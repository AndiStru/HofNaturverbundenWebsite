"use client";

import { useEffect } from "react";

// Nach der Registrierung auf behold.so die Feed-ID hier eintragen:
const FEED_ID = "DEIN_BEHOLD_FEED_ID";

export default function InstagramFeed() {
  useEffect(() => {
    if (FEED_ID === "DEIN_BEHOLD_FEED_ID") return;
    const script = document.createElement("script");
    script.src = "https://static.behold.so/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (FEED_ID === "DEIN_BEHOLD_FEED_ID") {
    return (
      <div className="rounded-2xl border border-dashed border-earth-200 bg-earth-50 py-16 text-center text-earth-500">
        <svg className="mx-auto mb-4 text-earth-300" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <p className="font-medium text-earth-700 mb-1">Instagram-Feed</p>
        <p className="text-sm">
          Kostenlos einrichten auf{" "}
          <a href="https://behold.so" target="_blank" rel="noopener noreferrer" className="text-forest-600 underline">
            behold.so
          </a>
          {" "}→ Feed-ID in <code className="bg-earth-100 px-1 rounded">InstagramFeed.tsx</code> eintragen
        </p>
      </div>
    );
  }

  return <div id={`behold-widget-${FEED_ID}`} />;
}
