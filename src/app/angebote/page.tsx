import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { angebote } from "@/lib/angebote";

export const metadata: Metadata = {
  title: "Angebote | Hof-Naturverbunden",
  description: "Schafwanderungen, Woll- und Filzkurse, Teamzeit, achtsame Auszeiten und mehr – alle Angebote auf dem Therapie- und Begegnungshof im Sauerland.",
};

export default function AngebotePage() {
  return (
    <>
      <HeroSection
        title="Unsere Angebote"
        subtitle="Vielfältige Erlebnisse mit Schafen, Wolle und Natur – für Einzelpersonen, Familien und Gruppen im Sauerland."
        size="medium"
      />

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Was wir anbieten"
          subtitle="Von der Schafwanderung bis zur tiergestützten Intervention – auf dem Hof-Naturverbunden ist für jeden etwas dabei."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {angebote.map((angebot) => (
            <Card
              key={angebot.slug}
              title={angebot.title}
              description={angebot.description}
              tag={angebot.tag}
              imageSrc={angebot.imageSrc}
              imageAlt={angebot.imageAlt}
              href={`/angebote/${angebot.slug}`}
            />
          ))}
        </div>

        <div className="mt-16 bg-forest-100 rounded-3xl p-8 text-center">
          <h3 className="font-serif text-2xl font-semibold text-forest-900 mb-3">
            Interesse? Wir freuen uns auf Ihre Anfrage.
          </h3>
          <p className="text-forest-700 mb-6 max-w-md mx-auto">
            Für Preise, Termine und individuelle Buchungen nehmen Sie gerne über WhatsApp oder E-Mail Kontakt auf.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-forest-500 text-white hover:bg-forest-700 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>
    </>
  );
}
