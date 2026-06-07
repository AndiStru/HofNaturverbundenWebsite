import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-semibold text-warm-white text-lg mb-3">
              Hof-Naturverbunden
            </h3>
            <p className="text-sm leading-relaxed text-earth-200">
              Therapie- und Begegnungshof im Sauerland. Schafwanderungen, Wollkurse und tiergestützte Begegnungen mit Walliser Schwarznasen.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-warm-white mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Startseite" },
                { href: "/angebote", label: "Angebote" },
                { href: "/kontakt", label: "Kontakt" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-earth-200 hover:text-warm-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-warm-white mb-3 text-sm uppercase tracking-wider">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-earth-200 hover:text-warm-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-earth-200 hover:text-warm-white transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-700 pt-6 text-center text-xs text-earth-500">
          © {new Date().getFullYear()} Hof-Naturverbunden. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
