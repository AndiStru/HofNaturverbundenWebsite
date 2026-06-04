import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Produkte | Hof Naturverbunden",
  description: "Frische, regionale Produkte direkt vom Hof – Gemüse, Kräuter und mehr.",
};

const products = [
  {
    title: "Saisonales Gemüse",
    description:
      "Frisch geerntetes Gemüse der Saison: Tomaten, Zucchini, Kartoffeln, Kürbis und vieles mehr. Ohne Pestizide, mit viel Sorgfalt angebaut.",
    tag: "Garten",
  },
  {
    title: "Frische Kräuter",
    description:
      "Basilikum, Petersilie, Schnittlauch, Rosmarin, Thymian – aromatische Kräuter für Ihre Küche, frisch und voller Duft.",
    tag: "Kräuter",
  },
  {
    title: "Salate & Blattgemüse",
    description:
      "Verschiedene Salatsorten, Spinat, Mangold und Rucola – zartes Blattgemüse für gesunde Mahlzeiten.",
    tag: "Garten",
  },
  {
    title: "Eier vom Freilandhuhn",
    description:
      "Eier von glücklichen Hühnern, die draußen in der Sonne scharren und natürliches Futter picken. Frischer geht es nicht.",
    tag: "Tierhaltung",
  },
  {
    title: "Eingemachtes & Marmeladen",
    description:
      "Hausgemachte Konfitüren, eingelegtes Gemüse und Pestos – Haltbares aus der Hofküche nach traditionellen Rezepten.",
    tag: "Hofküche",
  },
  {
    title: "Saisonkisten",
    description:
      "Unsere Saisonkiste ist eine Überraschungsbox mit dem Besten, was der Hof gerade hergibt. Jede Woche neu zusammengestellt.",
    tag: "Angebot",
  },
];

export default function ProduktePage() {
  return (
    <>
      <HeroSection
        title="Unsere Produkte"
        subtitle="Frisch, regional, naturverbunden – direkt vom Hof zu Ihnen."
        size="medium"
      />

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Was wir anbieten"
          subtitle="Je nach Jahreszeit wechselt unser Angebot. Besuchen Sie uns oder kontaktieren Sie uns für aktuelle Verfügbarkeiten."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <Card key={product.title} {...product} />
          ))}
        </div>

        <div className="mt-16 bg-forest-100 rounded-3xl p-8 text-center">
          <h3 className="font-serif text-2xl font-semibold text-forest-900 mb-3">
            Interesse? Wir freuen uns auf Ihre Anfrage.
          </h3>
          <p className="text-forest-700 mb-6 max-w-md mx-auto">
            Für aktuelle Verfügbarkeiten, Preise und um eine Abholzeit zu vereinbaren, nehmen Sie gerne Kontakt mit uns auf.
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
