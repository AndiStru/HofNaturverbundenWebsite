import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Angebote | Hof Naturverbunden",
  description: "Schafwanderungen, Woll- und Filzkurse, Teamzeit, achtsame Auszeiten und mehr – alle Angebote auf dem Therapie- und Begegnungshof im Sauerland.",
};

const angebote = [
  {
    title: "Schafwanderungen",
    description:
      "Wandern Sie mit unseren Walliser Schwarznasen durch das Sauerland. Ein besonderes Erlebnis für Groß und Klein – naturverbunden, ruhig und voller lebendiger Begegnungen.",
    tag: "Erlebnis",
    imageSrc: "/images/schafwanderung.jpg",
    imageAlt: "Schafwanderung mit Walliser Schwarznasen auf Hof Naturverbunden",
  },
  {
    title: "Teamzeit mit Schafen",
    description:
      "Gemeinsame Zeit in der Natur fördert Vertrauen und Zusammenhalt. Erleben Sie ein unvergessliches Teamevent mit unseren flauschigen Begleitern.",
    tag: "Gruppen",
    imageSrc: "/images/teamevent.jpg",
    imageAlt: "Teamevent mit Schafen auf Hof Naturverbunden",
  },
  {
    title: "Woll- und Filzkurse",
    description:
      "Von der Rohwolle zum fertigen Filzprodukt – in unseren Kursen verbinden Sie handwerkliche Kreativität mit der Natur des Sauerlandes.",
    tag: "Kreativ",
    imageSrc: "/images/wollkorb.jpg",
    imageAlt: "Wollkorb und Wolle für Filzkurse auf Hof Naturverbunden",
  },
  {
    title: "Achtsame Schafzeit",
    description:
      "Einfach dabei sein, beobachten, durchatmen. Unsere Schafe laden zur stillen Begegnung und echten Auszeit vom Alltag ein.",
    tag: "Achtsamkeit",
    imageSrc: "/images/herdengefuehl.jpg",
    imageAlt: "Herdengefühl – Schafe auf Hof Naturverbunden",
  },
  {
    title: "Schäfergeburtstag",
    description:
      "Ein unvergesslicher Geburtstag mit Schafen – für Kinder und Erwachsene. Mit Schafwanderung, Wollerlebnis und jeder Menge Freude.",
    tag: "Feier",
    imageSrc: "/images/schafkuchen.jpg",
    imageAlt: "Schafkuchen zum Schäfergeburtstag auf Hof Naturverbunden",
  },
  {
    title: "Hundeangst-Unterstützung",
    description:
      "Mit professioneller Begleitung durch Jana Struwe und unserer Hündin Wilma lernen Menschen schrittweise, Vertrauen zu Hunden aufzubauen.",
    tag: "Therapie",
    imageSrc: "/images/therapiehund.png",
    imageAlt: "Therapiebegleithund Wilma auf Hof Naturverbunden",
  },
  {
    title: "Schulen & Kitas",
    description:
      "Naturerlebnisse für Kinder mit Schafen, Wolle und dem geduldigen Bruno. Buchbar für Schulklassen und Kindergartengruppen.",
    tag: "Bildung",
    imageSrc: "/images/schafe-kinder.jpg",
    imageAlt: "Kinder auf Entdeckungstour mit den Schafen auf Hof Naturverbunden",
  },
  {
    title: "Vorlesehund",
    description:
      "Unser Lesehund schafft einen sicheren, entspannten Raum für Kinder beim Vorlesen – ideal für Schulen und Bibliotheken.",
    tag: "Förderung",
    imageSrc: "/images/wilma.jpg",
    imageAlt: "Wilma, Therapiehund auf Hof Naturverbunden",
  },
  {
    title: "Tierpatenschaft",
    description:
      "Werden Sie Pate für eines unserer Walliser Schwarznasen-Schafe und bleiben Sie nah an unserem Hofleben – auch aus der Ferne.",
    tag: "Patenschaft",
    imageSrc: "/images/wollebert.jpg",
    imageAlt: "Walliser Schwarznasenschaf Wollebert auf Hof Naturverbunden",
  },
];

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
          subtitle="Von der Schafwanderung bis zur tiergestützten Intervention – auf dem Hof Naturverbunden ist für jeden etwas dabei."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {angebote.map((angebot) => (
            <Card key={angebot.title} {...angebot} />
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
