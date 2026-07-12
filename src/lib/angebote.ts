export type BuchungsStatus = "verfügbar" | "ausgebucht" | "auf Anfrage";

export interface Termin {
  datum: string;
  uhrzeit: string;
  status: BuchungsStatus;
}

export interface Angebot {
  slug: string;
  title: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
  /** Kurzbeschreibung für die Übersichtsseite */
  description: string;
  /** Ausführliche Beschreibung für die Detailseite */
  longDescription: string;
  /** Stichpunkte: Was erwartet die Teilnehmer? */
  highlights: string[];
  /** Preis-Info (z. B. "ab 15 € pro Person") */
  preis: string;
  /** Dauer (z. B. "ca. 2 Stunden") */
  dauer: string;
  /** Zielgruppe (z. B. "Familien, Erwachsene, Kinder ab 5 Jahren") */
  zielgruppe: string;
  /** Besondere Hinweise / Voraussetzungen */
  hinweise: string;
  /** Optionales Video für die Detailseite (Pfad relativ zu /public) */
  videoSrc?: string;
  /** Optionale Termintabelle */
  termine?: Termin[];
}

export const angebote: Angebot[] = [
  {
    slug: "schafwanderungen",
    title: "Schafwanderungen",
    tag: "Erlebnis",
    imageSrc: "/images/schafwanderung.jpg",
    imageAlt: "Schafwanderung mit Walliser Schwarznasen auf Hof-Naturverbunden",
    description:
      "Wandern Sie mit unseren Walliser Schwarznasen durch das Sauerland. Ein besonderes Erlebnis für Groß und Klein – naturverbunden, ruhig und voller lebendiger Begegnungen.",
    longDescription:
      "Erlebe die Natur auf eine ganz besondere Weise, begleitet von unseren liebenswerten Schafen! Ob allein oder gemeinsam mit Freunden – wir heißen dich herzlich willkommen. Nebenbei erfährst du viele interessante Informationen über unsere Tiere und ihre artgerechte Haltung.\n\nUnsere Schafwanderungen finden als offene Wanderungen sowie nach individueller Anfrage statt. In den Sommermonaten finden die Wanderungen überwiegend am Vormittag oder frühen Abend statt. Die genaue Uhrzeit sowie den Treffpunkt erhaltet ihr nach eurer Buchung.\n\nWenn ihr als Gruppe, Familie oder Einrichtung einen eigenen Termin buchen möchtet, ruft uns am besten kurz an, damit wir gemeinsam besprechen können, ob das Angebot passend für euch ist und welche Wünsche ihr mitbringt.",
    highlights: [
      "Wandern durch das Sauerland begleitet von unseren Walliser Schwarznasenschafen",
      "Spannende Informationen über die Tiere und ihre artgerechte Haltung",
      "Offene Wanderungen mit festen Terminen – Anmeldung erforderlich",
      "Individuelle Gruppentermine für Familien, Gruppen und Einrichtungen buchbar",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Erwachsene und Kinder ab ca. 10 Jahren, Gruppen, Familien, Einrichtungen",
    hinweise: "Bitte wetterfeste Kleidung und festes, stabiles Schuhwerk tragen. Bei Starkregen, Gewitter oder extremer Hitze behalten wir uns vor, die Wanderung zu verschieben. Fremde Hunde und andere Tiere können leider nicht teilnehmen.",
    videoSrc: "/videos/Schafwanderung-auf-Hof-Naturverbunden-2.jpg.mp4",
    termine: [
      { datum: "02.08.2026", uhrzeit: "18:00 Uhr", status: "ausgebucht" },
      { datum: "16.08.2026", uhrzeit: "09:00 Uhr", status: "verfügbar" },
      { datum: "23.08.2026", uhrzeit: "19:00 Uhr", status: "verfügbar" },
      { datum: "06.09.2026", uhrzeit: "18:00 Uhr", status: "verfügbar" },
      { datum: "20.09.2026", uhrzeit: "17:00 Uhr", status: "verfügbar" },
      { datum: "14.10.2026", uhrzeit: "16:00 Uhr", status: "verfügbar" },
    ],
  },
  {
    slug: "teamzeit",
    title: "Teamzeit mit Schafen",
    tag: "Gruppen",
    imageSrc: "/images/teamevent.jpg",
    imageAlt: "Teamevent mit Schafen auf Hof-Naturverbunden",
    description:
      "Gemeinsame Zeit in der Natur fördert Vertrauen und Zusammenhalt. Erleben Sie ein unvergessliches Teamevent mit unseren flauschigen Begleitern.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung der Teamzeit eintragen. Wie läuft ein Teamevent ab? Was lernt das Team? Welche Übungen gibt es mit den Schafen?",
    highlights: [
      "Platzhalter: Programmpunkt 1",
      "Platzhalter: Programmpunkt 2",
      "Platzhalter: Programmpunkt 3",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Teams, Unternehmen, Gruppen",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
  {
    slug: "woll-und-filzkurse",
    title: "Woll- und Filzkurse",
    tag: "Kreativ",
    imageSrc: "/images/wollkorb.jpg",
    imageAlt: "Wollkorb und Wolle für Filzkurse auf Hof-Naturverbunden",
    description:
      "Von der Rohwolle zum fertigen Filzprodukt – in unseren Kursen verbinden Sie handwerkliche Kreativität mit der Natur des Sauerlandes.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung der Woll- und Filzkurse eintragen. Was stellen die Teilnehmer her? Welche Techniken werden gelehrt? Wird Material gestellt?",
    highlights: [
      "Platzhalter: Kursinhalt 1",
      "Platzhalter: Kursinhalt 2",
      "Platzhalter: Kursinhalt 3",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Erwachsene, Kinder, Familien",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
  {
    slug: "achtsame-schafzeit",
    title: "Achtsame Schafzeit",
    tag: "Achtsamkeit",
    imageSrc: "/images/herdengefuehl.jpg",
    imageAlt: "Herdengefühl – Schafe auf Hof-Naturverbunden",
    description:
      "Einfach dabei sein, beobachten, durchatmen. Unsere Schafe laden zur stillen Begegnung und echten Auszeit vom Alltag ein.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung der achtsamen Schafzeit eintragen. Wie verläuft eine solche Auszeit? Was darf man erwarten? Welche Wirkung hat die Begegnung mit den Tieren?",
    highlights: [
      "Platzhalter: Aspekt 1",
      "Platzhalter: Aspekt 2",
      "Platzhalter: Aspekt 3",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Erwachsene, Menschen, die Ruhe suchen",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
  {
    slug: "schaefergeburtstag",
    title: "Schäfergeburtstag",
    tag: "Feier",
    imageSrc: "/images/schafkuchen.jpg",
    imageAlt: "Schafkuchen zum Schäfergeburtstag auf Hof-Naturverbunden",
    description:
      "Ein unvergesslicher Geburtstag mit Schafen – für Kinder und Erwachsene. Mit Schafwanderung, Wollerlebnis und jeder Menge Freude.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung des Schäfergeburtstags eintragen. Wie ist der Ablauf? Was ist im Paket enthalten? Für welche Altersgruppen eignet sich das Angebot?",
    highlights: [
      "Platzhalter: Programmpunkt 1",
      "Platzhalter: Programmpunkt 2",
      "Platzhalter: Programmpunkt 3",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Kinder, Familien, Erwachsene",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
  {
    slug: "hundeangst",
    title: "Hundeangst-Unterstützung",
    tag: "Therapie",
    imageSrc: "/images/therapiehund.png",
    imageAlt: "Therapiebegleithund Wilma auf Hof-Naturverbunden",
    description:
      "Mit professioneller Begleitung durch Jana Struwe und unserer Hündin Wilma lernen Menschen schrittweise, Vertrauen zu Hunden aufzubauen.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung der Hundeangst-Unterstützung eintragen. Wie läuft eine Sitzung ab? Was ist der therapeutische Ansatz? Wie viele Termine werden empfohlen?",
    highlights: [
      "Platzhalter: Aspekt 1",
      "Platzhalter: Aspekt 2",
      "Platzhalter: Aspekt 3",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Erwachsene, Jugendliche, Kinder",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
  {
    slug: "schulen-kitas",
    title: "Schulen & Kitas",
    tag: "Bildung",
    imageSrc: "/images/schafe-kinder.jpg",
    imageAlt: "Kinder auf Entdeckungstour mit den Schafen auf Hof-Naturverbunden",
    description:
      "Naturerlebnisse für Kinder mit Schafen, Wolle und dem geduldigen Bruno. Buchbar für Schulklassen und Kindergartengruppen.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung des Angebots für Schulen und Kitas eintragen. Welche Lernziele werden verfolgt? Wie ist der Ablauf eines Besuchs? Wie viele Kinder können teilnehmen?",
    highlights: [
      "Platzhalter: Programmpunkt 1",
      "Platzhalter: Programmpunkt 2",
      "Platzhalter: Programmpunkt 3",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Schulklassen, Kita-Gruppen",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
  {
    slug: "vorlesehund",
    title: "Vorlesehund",
    tag: "Förderung",
    imageSrc: "/images/wilma.jpg",
    imageAlt: "Wilma, Therapiehund auf Hof-Naturverbunden",
    description:
      "Unser Lesehund schafft einen sicheren, entspannten Raum für Kinder beim Vorlesen – ideal für Schulen und Bibliotheken.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung des Vorlesehund-Angebots eintragen. Wie funktioniert das Vorlesen mit dem Hund? Welche Wirkung hat es auf die Kinder? Für welche Altersstufen ist es geeignet?",
    highlights: [
      "Platzhalter: Aspekt 1",
      "Platzhalter: Aspekt 2",
      "Platzhalter: Aspekt 3",
    ],
    preis: "Auf Anfrage",
    dauer: "Auf Anfrage",
    zielgruppe: "Grundschulkinder, Bibliotheken, Schulen",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
  {
    slug: "tierpatenschaft",
    title: "Tierpatenschaft",
    tag: "Patenschaft",
    imageSrc: "/images/wollebert.jpg",
    imageAlt: "Walliser Schwarznasenschaf Wollebert auf Hof-Naturverbunden",
    description:
      "Werden Sie Pate für eines unserer Walliser Schwarznasen-Schafe und bleiben Sie nah an unserem Hofleben – auch aus der Ferne.",
    longDescription:
      "Hier können Sie eine ausführliche Beschreibung der Tierpatenschaft eintragen. Wie funktioniert die Patenschaft? Was bekommt der Pate? Wie bleibt er mit dem Schaf in Verbindung?",
    highlights: [
      "Platzhalter: Leistung 1",
      "Platzhalter: Leistung 2",
      "Platzhalter: Leistung 3",
    ],
    preis: "Auf Anfrage",
    dauer: "z. B. 1 Jahr",
    zielgruppe: "Einzelpersonen, Familien, Unternehmen",
    hinweise: "Platzhalter: Besondere Hinweise oder Voraussetzungen hier eintragen.",
  },
];

export function getAngebotBySlug(slug: string): Angebot | undefined {
  return angebote.find((a) => a.slug === slug);
}
