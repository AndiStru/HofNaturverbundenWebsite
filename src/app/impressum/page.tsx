import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Hof Naturverbunden",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl font-semibold text-earth-900 mb-8">Impressum</h1>

      <div className="prose prose-sm text-earth-700 space-y-6">
        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            Jana Struwe<br />
            Riedmeckerstraße 1<br />
            57413 Finnentrop-Deutmecke<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">Kontakt</h2>
          <p>
            WhatsApp: +49 175 9970051<br />
            E-Mail: info@hof-naturverbunden.de
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}
