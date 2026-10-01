/**
 * Eröffnungswerbung der CoreFix GmbH — Instagram-Post und A4-Plakat.
 *
 * Preise, Pakete und Kontakt kommen aus content.ts, die Vorteile aus
 * profile.ts. Hier steht nur, was die Eröffnung selbst ausmacht. Der Rabatt
 * ist eine Zahl, kein Text: Satz ändern, und alle rabattierten Preise auf
 * beiden Motiven rechnen sich neu.
 */

/** Eröffnungsrabatt auf das erste Vertragsjahr, als Anteil (0,2 = 20 %). */
const DISCOUNT = 0.2

export const discountLabel = `${Math.round(DISCOUNT * 100)} %`

/** Rabattierter Monatspreis, auf ganze Euro gerundet wie die Richtpreise. */
export const discounted = (amount: number) => Math.round(amount * (1 - DISCOUNT))

export const opening = {
  /** Kein Datum: die Eröffnung wird als Zustand angekündigt, nicht als Termin. */
  kicker: 'Neu in Berlin',
  headline: { lead: 'Wir sind', accent: 'online.' },
  subline: 'CoreFix ist gestartet — Ihr IT-Partner für kleine und mittelständische Unternehmen.',
  offerKicker: 'Nur zur Eröffnung',
  offerTitle: `${discountLabel} auf das erste Jahr`,
  offerText: 'Für jedes Paket — Remote- und Vor-Ort-Support zum Einstiegspreis.',
  finePrint:
    'Für Neukunden, auf die monatlichen Paketpreise der ersten zwölf Monate. Ihr festes Angebot erhalten Sie im unverbindlichen Erstgespräch.',
  /** Auf Instagram sind Links im Beitrag nicht klickbar. */
  socialCta: 'Link in der Bio',
} as const
