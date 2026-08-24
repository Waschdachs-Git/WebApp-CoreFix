import {
  BadgeCheck,
  Calculator,
  ClipboardCheck,
  Cloud,
  DatabaseBackup,
  Globe,
  Handshake,
  Headset,
  Mail,
  MapPin,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Phone,
  Receipt,
  ServerCrash,
  ShieldAlert,
  ShieldCheck,
  UserCog,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

/**
 * Alle Texte der Seite an einem Ort. Die Section-Komponenten bleiben rein
 * präsentational, damit Textänderungen kein Layout anfassen.
 *
 * Zielgruppe ist der KMU-Entscheider, der einen IT-Partner sucht — nicht der
 * Leser des Businessplans. Inhalte, die nur Investoren oder Prüfer
 * interessieren (Marktzahlen, SWOT, Rechtsformbegründung, Wachstumsziele),
 * gehören deshalb bewusst nicht auf diese Seite.
 */

export const company = {
  name: 'CoreFix',
  legalName: 'CoreFix GmbH',
  tagline: 'IT, die einfach läuft.',
  subline: 'Ihr IT-Partner für kleine und mittelständische Unternehmen',
  kicker: 'Remote & vor Ort · Feste Monatspreise',
} as const

export const nav = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#warum', label: 'Warum CoreFix' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#preise', label: 'Preise' },
  { href: '#faq', label: 'Fragen' },
  { href: '#kontakt', label: 'Kontakt' },
] as const

export type Feature = { icon: LucideIcon; title: string; text: string }

/* Was CoreFix macht ------------------------------------------------------ */

export const pitch = {
  lead: 'CoreFix übernimmt die IT-Betreuung für kleine und mittelständische Unternehmen — zuverlässig, persönlich und ohne Fachchinesisch.',
  body: 'So können Sie sich auf Ihr Kerngeschäft konzentrieren, während wir für laufende und sichere Systeme sorgen.',
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

/* Problem ---------------------------------------------------------------- */

export const problems: readonly Feature[] = [
  {
    icon: Users,
    title: 'Niemand ist wirklich zuständig',
    text: 'Eine eigene IT-Abteilung lohnt sich nicht — also macht es nebenbei, wer sich am ehesten auskennt.',
  },
  {
    icon: ServerCrash,
    title: 'Ein Ausfall legt den Betrieb lahm',
    text: 'Steht die IT, steht die Arbeit. Und jede Stunde kostet Sie bares Geld.',
  },
  {
    icon: UserRound,
    title: 'Der Freelancer ist gerade im Urlaub',
    text: 'Einzelkämpfer sind günstig — bis sie ausfallen und niemand einspringt.',
  },
  {
    icon: Wallet,
    title: 'Die Rechnung überrascht jedes Mal',
    text: 'Stundenweise Abrechnung ohne Vertrag macht IT-Kosten unplanbar.',
  },
]

/* Leistungen ------------------------------------------------------------- */

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
    text: 'Schutz vor aktuellen Bedrohungen, verständlich erklärt — inklusive Themen wie NIS-2.',
  },
]

/* Warum CoreFix ---------------------------------------------------------- */

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

/* Ihre Ansprechpartner --------------------------------------------------- */

export const team: readonly { icon: LucideIcon; role: string; focus: string }[] = [
  {
    icon: UserCog,
    role: 'Technik & Support',
    focus: 'Nimmt Ihre Störung an, per Fernwartung oder vor Ort — und kümmert sich um die laufende Wartung.',
  },
  {
    icon: Handshake,
    role: 'Beratung & Betreuung',
    focus: 'Ihr fester Ansprechpartner für Angebote, Paketwechsel und alles, was darüber hinausgeht.',
  },
  {
    icon: ShieldCheck,
    role: 'IT-Sicherheit',
    focus: 'Prüft Backups und Schutzmaßnahmen und meldet sich, bevor daraus ein Problem wird.',
  },
  {
    icon: Calculator,
    role: 'Verwaltung',
    focus: 'Rechnungen, Termine und Organisation — damit Sie dafür niemanden suchen müssen.',
  },
]

/* Ablauf ----------------------------------------------------------------- */

export const process: readonly { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessagesSquare,
    title: 'Erstgespräch',
    text: 'Wir hören zu: Wie ist Ihre IT heute aufgestellt, wo klemmt es, was steht an. Unverbindlich.',
  },
  {
    icon: ClipboardCheck,
    title: 'Bestandsaufnahme',
    text: 'Wir sehen uns Arbeitsplätze, Netzwerk, Backup und Sicherheit an und halten den Ist-Zustand fest.',
  },
  {
    icon: Receipt,
    title: 'Festes Angebot',
    text: 'Sie bekommen das passende Paket mit klarem Monatspreis — keine Schätzung, die später wächst.',
  },
  {
    icon: BadgeCheck,
    title: 'Übernahme',
    text: 'Wir übernehmen die Betreuung Schritt für Schritt, während Ihr Tagesgeschäft weiterläuft.',
  },
]

/* Preise ----------------------------------------------------------------- */

export const plans: readonly {
  name: string
  price: string
  period: string
  summary: string
  features: readonly string[]
  featured?: boolean
  badge?: string
}[] = [
  {
    name: 'Basic',
    price: 'ca. 149 €',
    period: '/ Monat',
    summary: 'Für Betriebe, bei denen selten etwas anfällt.',
    features: ['Remote-Support (Geschäftszeiten)', 'Monatlicher Systemcheck', 'E-Mail-Support'],
  },
  {
    name: 'Plus',
    price: 'ca. 299 €',
    period: '/ Monat',
    summary: 'Für Betriebe, die auf ihre IT angewiesen sind.',
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
    summary: 'Für Betriebe, bei denen Stillstand keine Option ist.',
    features: [
      'Alles aus Plus',
      '24/7-Notfallsupport',
      'IT-Sicherheitsberatung',
      'Feste Wartungstermine',
    ],
  },
]

export const pricingNote =
  'Einzelaufträge und Projekte rechnen wir mit ca. 79 €/Stunde ab. Der genaue Paketpreis hängt von der Anzahl Ihrer Arbeitsplätze ab — im Erstgespräch bekommen Sie ein festes Angebot.'

/* Häufige Fragen --------------------------------------------------------- */

export const faq: readonly { q: string; a: string }[] = [
  {
    q: 'Wir haben schon einen IT-Dienstleister. Ist ein Wechsel aufwendig?',
    a: 'Nein. Wir übernehmen die Betreuung im laufenden Betrieb und stimmen die Übergabe so ab, dass bei Ihnen nichts stillsteht. Was dafür konkret nötig ist, klären wir im Erstgespräch.',
  },
  {
    q: 'Was passiert, wenn unser Ansprechpartner im Urlaub ist?',
    a: 'Dann übernimmt jemand aus dem Team, der Ihren Betrieb kennt. Genau dafür sind wir ein Team und keine Einzelperson — Ihre Anfrage bleibt nicht liegen.',
  },
  {
    q: 'Müssen wir ein Paket buchen?',
    a: 'Nein. Einzelaufträge und Projekte rechnen wir mit ca. 79 €/Stunde ab. Ein Paket lohnt sich, sobald regelmäßig etwas anfällt — dann sind Ihre IT-Kosten planbar.',
  },
  {
    q: 'Wie schnell sind Sie erreichbar?',
    a: 'Im Basic-Paket per E-Mail und Fernwartung zu Geschäftszeiten. Plus stellt Ihre Anfragen vorrangig ein, Premium enthält zusätzlich einen Notfallkontakt rund um die Uhr.',
  },
  {
    q: 'Kommen Sie auch in den Betrieb?',
    a: 'Ja. Vieles lässt sich per Fernwartung lösen — wenn nicht, kommen wir vorbei. Vor-Ort-Support ist ab dem Plus-Paket enthalten.',
  },
  {
    q: 'Wie groß muss unser Betrieb sein?',
    a: 'Wir arbeiten mit kleinen und mittelständischen Unternehmen ohne eigene IT-Abteilung. Ob fünf oder fünfzig Arbeitsplätze — entscheidend ist, dass sich sonst niemand zuständig fühlt.',
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

export const footerNote = `© ${new Date().getFullYear()} ${company.legalName}`
