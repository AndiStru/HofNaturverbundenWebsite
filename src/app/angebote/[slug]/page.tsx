import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SiteImage from "@/components/ui/SiteImage";
import TermineTabelle from "@/components/ui/TermineTabelle";
import { angebote, getAngebotBySlug } from "@/lib/angebote";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return angebote.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const angebot = getAngebotBySlug(slug);
  if (!angebot) return {};
  return {
    title: `${angebot.title} | Hof-Naturverbunden`,
    description: angebot.description,
  };
}

export default async function AngebotDetailPage({ params }: Props) {
  const { slug } = await params;
  const angebot = getAngebotBySlug(slug);
  if (!angebot) notFound();

  return (
    <>
      <HeroSection
        title={angebot.title}
        subtitle={angebot.description}
        size="medium"
      />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bild */}
        <div className="rounded-3xl overflow-hidden mb-12">
          <SiteImage
            src={angebot.imageSrc}
            alt={angebot.imageAlt}
            width={0}
            height={0}
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-auto"
          />
        </div>

        {/* Beschreibung */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-earth-900 mb-4">
            Über dieses Angebot
          </h2>
          <p className="text-earth-700 leading-relaxed text-lg">
            {angebot.longDescription}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-12 bg-earth-50 rounded-3xl p-8">
          <h2 className="font-serif text-2xl font-semibold text-forest-900 mb-6">
            Das erwartet Sie
          </h2>
          <ul className="space-y-3">
            {angebot.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-forest-800">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-forest-400 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Termine */}
        {angebot.termine && angebot.termine.length > 0 && (
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-earth-900 mb-6">
              Termine
            </h2>
            <TermineTabelle termine={angebot.termine} />
          </div>
        )}

        {/* Video */}
        {angebot.videoSrc && (
          <div className="rounded-3xl overflow-hidden mb-12">
            <video
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${angebot.videoSrc}`}
              controls
              playsInline
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Details-Tabelle */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-earth-900 mb-6">
            Details
          </h2>
          <div className="divide-y divide-earth-100 border border-earth-100 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 px-6 py-4">
              <span className="text-earth-500 text-sm font-medium">Preis</span>
              <span className="text-earth-800 text-sm">{angebot.preis}</span>
            </div>
            <div className="grid grid-cols-2 px-6 py-4">
              <span className="text-earth-500 text-sm font-medium">Dauer</span>
              <span className="text-earth-800 text-sm">{angebot.dauer}</span>
            </div>
            <div className="grid grid-cols-2 px-6 py-4">
              <span className="text-earth-500 text-sm font-medium">Zielgruppe</span>
              <span className="text-earth-800 text-sm">{angebot.zielgruppe}</span>
            </div>
            <div className="grid grid-cols-2 px-6 py-4">
              <span className="text-earth-500 text-sm font-medium">Hinweise</span>
              <span className="text-earth-800 text-sm">{angebot.hinweise}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-forest-100 rounded-3xl p-8 text-center">
          <h3 className="font-serif text-2xl font-semibold text-forest-900 mb-3">
            Interesse? Wir freuen uns auf Ihre Anfrage.
          </h3>
          <p className="text-forest-700 mb-6 max-w-md mx-auto">
            Für Preise, Termine und individuelle Buchungen nehmen Sie gerne über WhatsApp oder E-Mail Kontakt auf.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-forest-500 text-white hover:bg-forest-700 transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              href="/angebote"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-forest-400 text-forest-700 hover:bg-forest-50 transition-colors"
            >
              ← Alle Angebote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
