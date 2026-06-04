import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt | Hof Naturverbunden",
  description: "Nehmen Sie Kontakt mit uns auf oder besuchen Sie uns auf dem Hof in Finnentrop-Deutmecke im Sauerland.",
};

export default function KontaktPage() {
  return (
    <>
      <HeroSection
        title="Kontakt & Anfahrt"
        subtitle="Wir freuen uns auf Ihre Nachricht – am liebsten per WhatsApp oder E-Mail."
        size="medium"
      />

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="So erreichen Sie uns" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-forest-600" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-earth-900">Adresse</p>
              <p className="text-earth-500 text-sm mt-1">
                Riedmeckerstraße 1<br />
                57413 Finnentrop-Deutmecke
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-forest-600" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-earth-900">WhatsApp</p>
              <p className="text-earth-500 text-sm mt-1">
                <a
                  href="https://wa.me/491759970051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-forest-600 transition-colors"
                >
                  +49 175 9970051
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-forest-600" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-earth-900">E-Mail</p>
              <p className="text-earth-500 text-sm mt-1">
                <a href="mailto:info@hof-naturverbunden.de" className="hover:text-forest-600 transition-colors">
                  info@hof-naturverbunden.de
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-forest-600" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-earth-900">Instagram</p>
              <p className="text-earth-500 text-sm mt-1">
                <a
                  href="https://www.instagram.com/hofnaturverbunden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-forest-600 transition-colors"
                >
                  @hofnaturverbunden
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden border border-earth-100">
          <iframe
            title="Karte Hof Naturverbunden"
            src="https://www.openstreetmap.org/export/embed.html?bbox=7.990%2C51.157%2C8.070%2C51.207&layer=mapnik&marker=51.182%2C8.030"
            className="w-full h-72 sm:h-96"
            loading="lazy"
          />
          <div className="p-3 bg-earth-50 text-xs text-earth-400 text-center">
            Riedmeckerstraße 1, 57413 Finnentrop-Deutmecke ·{" "}
            <a
              href="https://www.openstreetmap.org/?mlat=51.182&mlon=8.030#map=16/51.182/8.030"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-earth-600"
            >
              Größere Karte anzeigen
            </a>{" "}
            · © OpenStreetMap-Mitwirkende
          </div>
        </div>
      </section>
    </>
  );
}
