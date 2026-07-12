"use client";

import Link from "next/link";
import type { BuchungsStatus, Termin } from "@/lib/angebote";

const WOCHENTAGE = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

function wochentag(datum: string): string {
  const [day, month, year] = datum.split(".");
  return WOCHENTAGE[new Date(+year, +month - 1, +day).getDay()];
}

function istAbgelaufen(datum: string, uhrzeit: string): boolean {
  const [day, month, year] = datum.split(".");
  const [hours, minutes] = uhrzeit.replace(" Uhr", "").split(":");
  const termin = new Date(+year, +month - 1, +day, +hours, +minutes);
  return termin < new Date();
}

const statusStyles: Record<BuchungsStatus, string> = {
  verfügbar: "bg-forest-100 text-forest-700",
  ausgebucht: "bg-earth-100 text-earth-500 line-through",
  "auf Anfrage": "bg-cream text-earth-700",
};

export interface TerminMitAngebot extends Termin {
  angebot?: string;
  href?: string;
}

interface Props {
  termine: TerminMitAngebot[];
}

export default function TermineTabelle({ termine }: Props) {
  const mitAngebot = termine.some((t) => t.angebot);

  return (
    <div className="overflow-hidden rounded-2xl border border-earth-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-earth-50 text-earth-500 font-medium text-left">
            <th className="px-4 py-3">Datum</th>
            <th className="px-4 py-3">Uhrzeit</th>
            {mitAngebot && <th className="px-4 py-3">Angebot</th>}
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-earth-100">
          {termine.map((t, i) => {
            const abgelaufen = istAbgelaufen(t.datum, t.uhrzeit);
            const abgelaufenCls = abgelaufen ? "line-through text-earth-400" : "";
            return (
              <tr key={i} className="bg-white">
                <td className={`px-4 py-3 font-medium ${abgelaufen ? "text-earth-400 line-through" : "text-earth-800"}`}>
                  {wochentag(t.datum)}, {t.datum}
                </td>
                <td className={`px-4 py-3 ${abgelaufenCls || "text-earth-700"}`}>{t.uhrzeit}</td>
                {mitAngebot && (
                  <td className={`px-4 py-3 ${abgelaufenCls}`}>
                    {t.href ? (
                      <Link href={t.href} className={abgelaufen ? "text-earth-400" : "text-forest-600 hover:underline"}>
                        {t.angebot}
                      </Link>
                    ) : (
                      <span>{t.angebot}</span>
                    )}
                  </td>
                )}
                <td className="px-4 py-3">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[t.status]}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
