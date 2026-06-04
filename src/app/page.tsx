import SiteImage from "@/components/ui/SiteImage";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog";

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2C8 2 4 6 4 10c0 2.5 1 5 3 7l5 5 5-5c2-2 3-4.5 3-7 0-4-4-8-8-8z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
    title: "Tiergestützte Begegnung",
    text: "Jana Struwe ist zertifizierte Ergotherapeutin und ISAAT-anerkannte Fachkraft für tiergestützte Intervention – fundiert und mit Herzblut.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
        <path d="M12 8v4l3 2" />
        <path d="M7 3.3A9 9 0 0 1 17 3" />
      </svg>
    ),
    title: "Natur & Ruhe",
    text: "Unser denkmalgeschützter Hof aus dem Jahr 1838 im Sauerland ist ein Ort der Stille, Begegnung und Kreativität – fernab des Alltags.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Achtsame Momente",
    text: "Ob Schafwanderung, Wollkurs oder Auszeit – bei uns steht die achtsame Begegnung von Mensch und Tier im Mittelpunkt.",
  },
];

const quickLinks = [
  {
    title: "Unsere Angebote",
    description: "Schafwanderungen, Wollkurse, Teamzeit und mehr – entdecken Sie alle Erlebnisse auf dem Hof.",
    href: "/angebote",
    tag: "Angebote",
  },
  {
    title: "Hofblog",
    description: "Einblicke in unser Hofleben, die Schafe und das Sauerland – mit Herz geschrieben.",
    href: "/blog",
    tag: "Blog",
  },
  {
    title: "Kontakt & Anfahrt",
    description: "Schreiben Sie uns per WhatsApp oder E-Mail – wir freuen uns auf Ihre Anfrage.",
    href: "/kontakt",
    tag: "Kontakt",
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSection
        title="Schafen begegnen auf dem Hof Naturverbunden"
        subtitle="Erleben Sie besondere Momente mit unseren Walliser Schwarznasen – bei Schafwanderungen, kreativen Wollkursen oder achtsamen Auszeiten im Sauerland."
        ctaLabel="Unsere Angebote"
        ctaHref="/angebote"
        secondaryLabel="Mehr erfahren"
        secondaryHref="#ueber-uns"
        imageSrc="/images/herdengefuehl.jpg"
        imageAlt="Schafe auf dem Hof Naturverbunden"
      />

      <section id="ueber-uns" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Über uns"
              subtitle="Ein Therapie- und Begegnungshof im Herzen des Sauerlandes."
            />
            <p className="mt-6 text-earth-700 leading-relaxed">
              Jana Struwe ist Ergotherapeutin und ISAAT-zertifizierte Fachkraft für tiergestützte Intervention. Gemeinsam mit ihrer Hundedame Wilma, der quirligen Jette und einer Herde Walliser Schwarznasen lädt sie Menschen ein, Natur und Tierbegegnung neu zu erleben.
            </p>
            <p className="mt-4 text-earth-700 leading-relaxed">
              Unser denkmalgeschützter Hof aus dem Jahr 1838 liegt in Finnentrop-Deutmecke im Sauerland – ein Ort, an dem Begegnung, Ruhe und Kreativität ihren Raum haben. Hier ist jedes Erlebnis ein bisschen besonders.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square relative">
            <SiteImage
              src="/images/jana-struwe.jpg"
              alt="Jana Struwe, Inhaberin Hof Naturverbunden"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Was erwartet Sie?"
            subtitle="Von der Schafwanderung bis zum Filzkurs – entdecken Sie alle Erlebnisse auf dem Hof."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {quickLinks.map((item) => (
              <Card key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest-700 text-forest-300 mb-4">
                  {icon}
                </div>
                <h3 className="font-serif font-semibold text-lg text-warm-white mb-2">
                  {title}
                </h3>
                <p className="text-forest-100 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading title="Aus dem Hofblog" />
            <a
              href="/blog"
              className="text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors hidden md:block"
            >
              Alle Beiträge →
            </a>
          </div>
          <BlogList posts={latestPosts} />
        </section>
      )}
    </>
  );
}
