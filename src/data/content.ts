import {
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  Cloud,
  DatabaseBackup,
  Globe,
  Handshake,
  Headset,
  Landmark,
  Lightbulb,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  Phone,
  Receipt,
  Rocket,
  Scale,
  ServerCrash,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCog,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

/**
 * Every word on the site comes from the CoreFix pitch deck and lives here.
 * Sections stay purely presentational, so copy edits never touch layout code.
 */

export const company = {
  name: 'CoreFix',
  legalName: 'CoreFix GmbH',
  tagline: 'IT, die einfach läuft.',
  subline: 'Ihr IT-Partner für kleine und mittelständische Unternehmen',
  kicker: 'Businessplan · Pitch Deck',
} as const

export const nav = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#warum', label: 'Warum CoreFix' },
  { href: '#markt', label: 'Markt' },
  { href: '#preise', label: 'Preise' },
  { href: '#team', label: 'Team' },
  { href: '#kontakt', label: 'Kontakt' },
] as const

/* 01 — Elevator Pitch ---------------------------------------------------- */

export const pitch = {
  lead: 'CoreFix übernimmt die IT-Betreuung für kleine und mittelständische Unternehmen — zuverlässig, persönlich und ohne Fachchinesisch.',
  body: 'So können sich unsere Kunden auf ihr Kerngeschäft konzentrieren, während wir für laufende und sichere Systeme sorgen.',
  pillars: [
    {
      icon: ShieldCheck,
      title: 'Zuverlässig',
      text: 'Systeme, die laufen — und ein Partner, der im Ernstfall erreichbar ist.',
    },
    {
      icon: Handshake,
      title: 'Persönlich',
      text: 'Ein fester Ansprechpartner, der Ihren Betrieb kennt. Kein Ticket-Karussell.',
    },
    {
      icon: Receipt,
      title: 'Transparent',
      text: 'Feste Paketpreise statt Überraschungsrechnungen am Monatsende.',
    },
  ],
} satisfies { lead: string; body: string; pillars: readonly Feature[] }

/* 02 — Problem ----------------------------------------------------------- */

export type Feature = { icon: LucideIcon; title: string; text: string }

export const problems: readonly Feature[] = [
  {
    icon: Users,
    title: 'Keine eigene IT-Abteilung',
    text: 'Fachkräftemangel und Kosten machen eine eigene IT-Abteilung für die meisten KMU unrealistisch.',
  },
  {
    icon: ServerCrash,
    title: 'IT-Ausfälle kosten Zeit & Geld',
    text: 'Ein Systemausfall legt oft den ganzen Betrieb lahm – jede Stunde zählt.',
  },
  {
    icon: Building2,
    title: 'Große Systemhäuser',
    text: 'Oft teuer, langsam und ohne festen persönlichen Ansprechpartner.',
  },
  {
    icon: UserRound,
    title: 'Einzelne Freelancer',
    text: 'Im Urlaub oder Krankheitsfall oft nicht erreichbar, keine Vertretung.',
  },
]

/* 03 — Lösung ------------------------------------------------------------ */

export const services: readonly Feature[] = [
  {
    icon: Headset,
    title: 'Remote- & Vor-Ort-Support',
    text: 'Schnelle Hilfe – per Fernwartung oder direkt bei Ihnen im Betrieb.',
  },
  {
    icon: Wallet,
    title: 'Wartungsverträge & IT-Flatrates',
    text: 'Planbare Kosten statt Überraschungsrechnungen.',
  },
  {
    icon: Network,
    title: 'Netzwerkbetreuung',
    text: 'Stabile, sichere Verbindungen im gesamten Betrieb.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Einrichtung neuer Arbeitsplätze',
    text: 'Neue Mitarbeitende ab dem ersten Tag startklar.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Lösungen',
    text: 'Zusammenarbeit und Daten sicher in der Cloud – z. B. mit Microsoft 365.',
  },
  {
    icon: DatabaseBackup,
    title: 'Backup & Datensicherheit',
    text: 'Ihre Daten geschützt vor Verlust und Angriffen.',
  },
  {
    icon: ShieldAlert,
    title: 'IT-Sicherheitsberatung',
    text: 'Schutz vor aktuellen Bedrohungen, verständlich erklärt.',
  },
]

/* 04 — USP --------------------------------------------------------------- */

/** Three-step rating taken from the deck's legend. */
export type Rating = 'stark' | 'teilweise' | 'eingeschraenkt'

export const ratingLabel: Record<Rating, string> = {
  stark: 'stark',
  teilweise: 'teilweise',
  eingeschraenkt: 'eingeschränkt',
}

export const comparisonColumns = ['Systemhaus', 'Freelancer', 'CoreFix'] as const

export const comparison: readonly { criterion: string; values: readonly Rating[] }[] = [
  { criterion: 'Fester Ansprechpartner', values: ['teilweise', 'stark', 'stark'] },
  { criterion: 'Reaktionszeit', values: ['teilweise', 'teilweise', 'stark'] },
  { criterion: 'Preistransparenz', values: ['eingeschraenkt', 'teilweise', 'stark'] },
  { criterion: 'Vertretung / Verfügbarkeit', values: ['stark', 'eingeschraenkt', 'stark'] },
  { criterion: 'Regionale Nähe', values: ['teilweise', 'stark', 'stark'] },
]

/* 05 — Markt ------------------------------------------------------------- */

export const market = {
  points: [
    'Zielgruppe: kleine und mittelständische Unternehmen ohne eigene IT-Abteilung, regional.',
    'Digitalisierung und Fachkräftemangel verstärken den Bedarf an externem IT-Support.',
  ],
  stats: [
    { value: '99', unit: '%', label: 'aller Unternehmen in Deutschland sind KMU' },
    { value: '21', unit: '%', label: 'der KMU beschäftigen eigene IT-Fachkräfte' },
    { value: '52', unit: '%', label: 'der KMU nutzen bereits kostenpflichtige Cloud-Dienste' },
  ],
  sources: 'Quellen: Bundesnetzagentur / Destatis; IfM Bonn (2024)',
} as const

/* 06 — SWOT -------------------------------------------------------------- */

export type SwotTone = 'positive' | 'caution'

export const swot: readonly {
  icon: LucideIcon
  title: string
  tone: SwotTone
  items: readonly string[]
}[] = [
  {
    icon: BadgeCheck,
    title: 'Stärken',
    tone: 'positive',
    items: [
      'Persönlicher, fester Ansprechpartner',
      'Transparente Festpreis-Pakete',
      'Schnelle Reaktionszeiten',
      'Modernes, digitales Auftreten',
    ],
  },
  {
    icon: Target,
    title: 'Schwächen',
    tone: 'caution',
    items: [
      'Neu am Markt, noch keine Referenzen',
      'Kleines Team zu Beginn → begrenzte Kapazität',
      'Zunächst regional begrenzter Radius',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Chancen',
    tone: 'positive',
    items: [
      'Wachsender IT-Bedarf durch Digitalisierung',
      'Viele KMU ohne eigene IT-Abteilung',
      'Fachkräftemangel bei Kunden verstärkt Nachfrage',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Risiken',
    tone: 'caution',
    items: [
      'Preisdruck durch größere Wettbewerber',
      'Zu Beginn Abhängigkeit von wenigen Kunden',
      'Schnelle technologische Veränderungen',
    ],
  },
]

/* 07 — Geschäftsmodell --------------------------------------------------- */

export const plans: readonly {
  name: string
  price: string
  period: string
  features: readonly string[]
  featured?: boolean
  badge?: string
}[] = [
  {
    name: 'Basic',
    price: 'ca. 149 €',
    period: '/ Monat',
    features: ['Remote-Support (Geschäftszeiten)', 'Monatlicher Systemcheck', 'E-Mail-Support'],
  },
  {
    name: 'Plus',
    price: 'ca. 299 €',
    period: '/ Monat',
    badge: 'Beliebt',
    featured: true,
    features: [
      'Alles aus Basic',
      'Vor-Ort-Support',
      'Backup-Überwachung',
      'Priorisierte Reaktionszeit',
    ],
  },
  {
    name: 'Premium',
    price: 'ca. 549 €',
    period: '/ Monat',
    features: ['Alles aus Plus', '24/7-Notfallsupport', 'IT-Sicherheitsberatung', 'Feste Wartungstermine'],
  },
]

export const pricingNote =
  'Einzelaufträge & Projekte: ca. 79 €/Stunde · Alle Preise als Richtwert, finale Kalkulation folgt im Finanzplan.'

/* 08 — Team -------------------------------------------------------------- */

export const team: readonly { icon: LucideIcon; role: string; name: string; focus: string }[] = [
  {
    icon: Briefcase,
    role: 'Geschäftsführung',
    name: '[Name]',
    focus: 'Strategie, Finanzen, Kundenbeziehungen',
  },
  {
    icon: UserCog,
    role: 'Technik & Support',
    name: '[Name]',
    focus: 'Vor-Ort- & Remote-Support, Wartung',
  },
  {
    icon: Handshake,
    role: 'Vertrieb & Kundenbetreuung',
    name: '[Name]',
    focus: 'Neukundengewinnung, Beratung',
  },
  {
    icon: Calculator,
    role: 'Verwaltung',
    name: '[Name]',
    focus: 'Buchhaltung, Organisation, Termine',
  },
]

/* 09 — Rechtsform -------------------------------------------------------- */

export const legal = {
  points: [
    {
      icon: Scale,
      title: 'Haftungsbeschränkung',
      text: 'Gesellschafter haften nicht mit ihrem Privatvermögen.',
    },
    {
      icon: BadgeCheck,
      title: 'Seriöses Auftreten',
      text: 'Professionelle Außenwirkung gegenüber B2B-Kunden.',
    },
    {
      icon: Landmark,
      title: 'Handelsregister',
      text: 'Eintragung ins Handelsregister erforderlich.',
    },
  ],
  capital: {
    value: '25.000 €',
    label: 'gesetzliches Mindest-Stammkapital (§ 5 GmbHG)',
    note: '— davon mind. 12.500 € bei Gründung als Bareinlage (§ 7 GmbHG)',
  },
} satisfies {
  points: readonly Feature[]
  capital: { value: string; label: string; note: string }
}

/* 10 — Vision ------------------------------------------------------------ */

export const vision: readonly { icon: LucideIcon; text: string }[] = [
  { icon: MapPin, text: 'Regionales Wachstum und Ausbau des Kundenstamms' },
  { icon: Users, text: 'Vergrößerung des Teams' },
  { icon: Lightbulb, text: 'Spezialisierung, z. B. Cybersecurity für KMU (Stichwort NIS-2)' },
  {
    icon: Rocket,
    text: 'Langfristig soll CoreFix zur festen Größe für IT-Support im regionalen Mittelstand werden',
  },
]

/* Kontakt ---------------------------------------------------------------- */

export const contact: readonly {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}[] = [
  { icon: MapPin, label: 'Adresse', value: 'Musterstraße 1, 12345 Musterstadt' },
  { icon: Mail, label: 'E-Mail', value: 'info@corefix.de', href: 'mailto:info@corefix.de' },
  { icon: Phone, label: 'Telefon', value: '0123 456789', href: 'tel:+49123456789' },
  { icon: Globe, label: 'Web', value: 'www.corefix.de', href: 'https://www.corefix.de' },
]

export const footerNote = `© ${new Date().getFullYear()} ${company.legalName} — Businessplan`
