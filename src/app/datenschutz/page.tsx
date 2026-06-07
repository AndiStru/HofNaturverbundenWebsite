import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Hof-Naturverbunden",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl font-semibold text-earth-900 mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-earth-700 text-sm leading-relaxed">
        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-medium text-earth-900 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">2. Hosting</h2>
          <p>
            Diese Website wird auf Servern von GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA) gehostet. Weitere Informationen finden Sie in der{" "}
            <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline">
              Datenschutzerklärung von GitHub
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">3. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Das Formular wird über Formspree (Formspree Inc.) verarbeitet. Weitere Informationen erhalten Sie in der{" "}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline">
              Datenschutzerklärung von Formspree
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-earth-600">
            <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
            <li>die Einschränkung der Verarbeitung zu verlangen</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen</li>
            <li>Datenübertragbarkeit zu verlangen</li>
          </ul>
          <p className="mt-4">
            Außerdem haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-earth-900 mb-3">5. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website:<br /><br />
            Vorname Nachname<br />
            Musterstraße 1<br />
            12345 Musterort<br />
            E-Mail: info@hof-naturverbunden.de
          </p>
        </section>

        <p className="text-xs text-earth-400 pt-4 border-t border-earth-100">
          Diese Datenschutzerklärung sollte durch einen Rechtsanwalt oder Datenschutzbeauftragten geprüft und an Ihre konkreten Gegebenheiten angepasst werden.
        </p>
      </div>
    </div>
  );
}
