import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt | Hof Naturverbunden",
  description: "Nehmen Sie Kontakt mit uns auf oder besuchen Sie uns auf dem Hof.",
};

export default function KontaktPage() {
  return (
    <>
      <HeroSection
        title="Kontakt & Anfahrt"
        subtitle="Wir freuen uns auf Ihre Nachricht und auf Ihren Besuch."
        size="medium"
      />

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="So erreichen Sie uns" />

            <div className="mt-8 space-y-6">
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
                    Musterstraße 1<br />
                    12345 Musterort<br />
                    Deutschland
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
                  <p className="font-medium text-earth-900">Telefon</p>
                  <p className="text-earth-500 text-sm mt-1">
                    <a href="tel:+491234567890" className="hover:text-forest-600 transition-colors">
                      +49 123 456 7890
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-earth-900">Öffnungszeiten</p>
                  <div className="text-earth-500 text-sm mt-1 space-y-0.5">
                    <p>Samstag: 9:00 – 13:00 Uhr</p>
                    <p>Oder nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading title="Schreiben Sie uns" />
            <form
              action="https://formspree.io/f/BITTE_ERSETZEN"
              method="POST"
              className="mt-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-earth-200 bg-white text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-transparent text-sm"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-1.5">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-earth-200 bg-white text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-transparent text-sm"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1.5">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-earth-200 bg-white text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-transparent text-sm resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-forest-500 text-white font-medium text-sm hover:bg-forest-700 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-300 focus:ring-offset-1"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden border border-earth-100">
          <iframe
            title="Karte Hof Naturverbunden"
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.0%2C51.0%2C11.0%2C52.0&layer=mapnik"
            className="w-full h-64 sm:h-80"
            loading="lazy"
          />
          <div className="p-3 bg-earth-50 text-xs text-earth-400 text-center">
            Bitte aktualisieren Sie die Kartenpinposition mit Ihrer tatsächlichen Adresse.{" "}
            <a
              href="https://www.openstreetmap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-earth-600"
            >
              © OpenStreetMap-Mitwirkende
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
