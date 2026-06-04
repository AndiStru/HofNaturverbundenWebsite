import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog";

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8l-4 3-4-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Nachhaltigkeit",
    text: "Wir wirtschaften im Einklang mit der Natur und denken in langen Zeiträumen.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Regionalität",
    text: "Unsere Produkte kommen direkt vom Hof zu Ihnen – kurze Wege, maximale Frische.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Mit Herzblut",
    text: "Hinter jedem Produkt steckt echte Leidenschaft für die Natur und das bäuerliche Leben.",
  },
];

const quickLinks = [
  {
    title: "Unsere Produkte",
    description: "Frisches Gemüse, Kräuter und mehr – direkt vom Hof.",
    href: "/produkte",
    tag: "Produkte",
  },
  {
    title: "Hofblog",
    description: "Einblicke in unseren Hofaltag, Tipps und saisonale Berichte.",
    href: "/blog",
    tag: "Blog",
  },
  {
    title: "Besucht uns",
    description: "So finden Sie uns und nehmen Sie Kontakt mit uns auf.",
    href: "/kontakt",
    tag: "Kontakt",
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSection
        title="Naturverbunden. Regional. Mit Herz."
        subtitle="Willkommen auf unserem kleinen Hof, wo wir im Einklang mit der Natur wirtschaften und frische, regionale Produkte mit Leidenschaft für Sie anbauen."
        ctaLabel="Unsere Produkte"
        ctaHref="/produkte"
        secondaryLabel="Mehr erfahren"
        secondaryHref="#ueber-uns"
      />

      <section id="ueber-uns" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Über uns"
              subtitle="Wir sind ein kleines Nebengewerbe mit großer Leidenschaft für naturnahes Wirtschaften."
            />
            <p className="mt-6 text-earth-700 leading-relaxed">
              Auf unserem Hof arbeiten wir mit den Rhythmen der Natur statt gegen sie. Gesunde Böden, respektvoller Umgang mit Tieren und kurze Wege von der Ernte bis zu Ihrem Tisch – das sind unsere Grundsätze.
            </p>
            <p className="mt-4 text-earth-700 leading-relaxed">
              Als Nebengewerbe betreiben wir den Hof mit viel Herzblut und persönlichem Engagement. Jedes Produkt, das unseren Hof verlässt, hat unser volles Vertrauen.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden bg-forest-100 aspect-square flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="mx-auto text-forest-500 mb-4" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.5-5 8l-4 3-4-3c-3-1.5-5-4.5-5-8a9 9 0 0 1 9-9z" />
                <path d="M12 6v8" />
                <path d="M8 10l4-4 4 4" />
              </svg>
              <p className="text-forest-700 font-serif text-xl">Hof Naturverbunden</p>
              <p className="text-forest-500 text-sm mt-2">Bild folgt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Was wir anbieten"
            subtitle="Entdecken Sie unsere Produkte, lesen Sie unseren Blog oder kommen Sie uns besuchen."
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
