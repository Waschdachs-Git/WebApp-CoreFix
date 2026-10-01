import { Headset, MapPin, Receipt, UserCheck, Users, type LucideIcon } from 'lucide-react'

/**
 * Unternehmensprofil der CoreFix GmbH — Angaben, die nur das Portfolio zeigt.
 *
 * Die Website richtet sich ausschließlich an Kunden und verzichtet deshalb
 * bewusst auf Rechtsform, Stammkapital, Marktzahlen und Vision. Das Portfolio
 * verbindet Profil und Angebot auf einem Blatt; diese Angaben liegen darum
 * getrennt hier. Alles, was beide zeigen — Leistungen, Pakete, Kontakt —
 * kommt aus content.ts, damit Website und Portfolio nie auseinanderlaufen.
 */

export const facts: readonly { label: string; value: string }[] = [
  { label: 'Gegründet', value: '2026' },
  { label: 'Rechtsform', value: 'GmbH' },
  { label: 'Stammkapital', value: '25.000 €' },
  { label: 'Sitz', value: 'Berlin' },
  { label: 'Zielgruppe', value: 'KMU ohne eigene IT-Abteilung' },
]

export const founders = {
  role: 'Geschäftsführung',
  names: ['Natanael', 'Emil'],
} as const

export const vision =
  'Unser Ziel: die feste Größe für IT-Support im regionalen Mittelstand — mit wachsendem Team und Schwerpunkt IT-Sicherheit (NIS-2).'

/** Die eine Marktzahl, die das Angebot begründet. */
export const market = {
  value: '21 %',
  text: 'der KMU beschäftigen eigene IT-Fachkräfte — für alle anderen sind wir da.',
  source: 'Quellen: Bundesnetzagentur / Destatis; IfM Bonn (2024)',
} as const

/**
 * Konkrete Unterschiede zu Systemhaus und Freelancer, als kurze Chips. Sie
 * entsprechen den Kriterien der Vergleichstabelle auf der Website.
 */
export const differentiators: readonly { icon: LucideIcon; label: string }[] = [
  { icon: UserCheck, label: 'Fester Ansprechpartner' },
  { icon: Users, label: 'Vertretung bei Urlaub & Krankheit' },
  { icon: Receipt, label: 'Feste Monatspreise' },
  { icon: Headset, label: 'Remote & vor Ort' },
  { icon: MapPin, label: 'Regional in Berlin' },
]

/** Ziel des QR-Codes auf dem gedruckten Blatt. */
export const websiteUrl = 'https://waschdachs-git.github.io/WebApp-CoreFix/'
