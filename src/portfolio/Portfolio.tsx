import { useEffect, type ReactNode } from 'react'
import { Check } from 'lucide-react'
import { Surface } from '@/components/ui/Surface'
import { IconWell } from '@/components/ui/IconWell'
import { Logo } from '@/components/decor/Logo'
import { NestedDepth } from '@/components/decor/NestedDepth'
import { company, contact, pitch, plans, pricingNote, services } from '@/data/content'
import { differentiators, facts, founders, market, vision, websiteUrl } from '@/data/profile'
import qrUrl from '@/assets/qr-website.svg'
import { cn } from '@/lib/utils'

/** A4-Breite in CSS-Pixeln (210 mm bei 96 dpi). */
const SHEET_WIDTH_PX = (210 / 25.4) * 96

/**
 * Das Blatt behält auf jedem Bildschirm seine Druckgeometrie. Ist das Fenster
 * schmaler als A4, wird es als Ganzes verkleinert — ein Umbruch in Spalten
 * würde aus dem Dokument eine andere Seite machen.
 */
function useFitSheetToViewport() {
  useEffect(() => {
    const fit = () => {
      const zoom = Math.min(1, (window.innerWidth - 32) / SHEET_WIDTH_PX)
      document.documentElement.style.setProperty('--sheet-zoom', zoom.toFixed(4))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])
}

/**
 * Leichtgewichtiger Verwandter des Website-Eyebrows. Eingelassene Pillen über
 * jedem Block würden auf A4 zu viel Fläche kosten, also bleibt hier nur der
 * Akzentpunkt als Wiedererkennungszeichen.
 */
function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        'flex items-center gap-2 font-display text-[10.5px] font-bold uppercase tracking-[0.18em] text-muted',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </h2>
  )
}

function Hero() {
  return (
    <header>
      <div className="flex items-center gap-3">
        <Logo />
        <span className="font-display text-xl font-extrabold text-muted">GmbH</span>
        <Surface depth="insetSm" radius="full" className="ml-auto px-4 py-1.5">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            Unternehmensportfolio 2026
          </span>
        </Surface>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_156px] items-center gap-8">
        <div>
          <h1 className="font-display text-[42px] font-extrabold leading-none tracking-tight text-foreground">
            IT, die einfach <span className="text-accent">läuft.</span>
          </h1>
          <p className="mt-3 text-[14px] text-muted">{company.subline}</p>

          {/* Die konkreten Unterschiede stehen dort, wo das Auge zuerst
              hinsieht — die abstrakten Werte trägt der Über-uns-Text. */}
          <ul className="mt-4 flex flex-wrap gap-2">
            {differentiators.map(({ icon: Icon, label }) => (
              <Surface
                as="li"
                key={label}
                depth="raisedSm"
                radius="full"
                className="flex items-center gap-2 py-1 pl-1 pr-3"
              >
                <Surface depth="insetSm" radius="full" className="grid h-6 w-6 place-items-center">
                  <Icon className="h-3 w-3 text-accent" strokeWidth={2.25} aria-hidden="true" />
                </Surface>
                <span className="text-[11.5px] font-medium text-foreground">{label}</span>
              </Surface>
            ))}
          </ul>
        </div>

        {/* Das Markenzeichen der Website im Kleinformat: ohne die Ringe wäre
            das Blatt nicht als Teil desselben Auftritts erkennbar. */}
        <NestedDepth />
      </div>
    </header>
  )
}

function About() {
  return (
    <Surface as="section" depth="raised" radius="card" className="flex flex-col p-5">
      <Label>Über uns</Label>
      <p className="mt-3 text-[12.5px] leading-[1.55] text-foreground">{pitch.lead}</p>
      <p className="mt-2.5 text-[12.5px] leading-[1.55] text-foreground">
        Nur <strong className="font-display font-extrabold text-accent">{market.value}</strong>{' '}
        {market.text}
        <sup className="text-[8px] text-muted">1</sup>
      </p>
      <p className="mt-2.5 text-[11.5px] leading-[1.5] text-muted">{vision}</p>

      {/* Die Menschen hinter dem Unternehmen, als erhabene Pucks: auf einem
          Blatt, das "persönlich" verspricht, gehören sie in den Text über uns,
          nicht in die Faktentabelle. Eingravierte Linie statt Rahmen. */}
      <div className="mt-auto flex items-center gap-2.5 pt-3 shadow-groove">
        <span className="text-[10.5px] text-muted">{founders.role}</span>
        <ul className="flex gap-2">
          {founders.names.map((name) => (
            <Surface
              as="li"
              key={name}
              depth="raisedSm"
              radius="full"
              // Namen sind nie trennbar — auch nicht unter der globalen
              // Umbruchregel für Listen, die sonst lange Komposita rettet.
              className="flex shrink-0 items-center gap-2 whitespace-nowrap py-1 pl-1 pr-3"
            >
              <Surface
                depth="insetSm"
                radius="full"
                className="grid h-6 w-6 place-items-center font-display text-[10.5px] font-bold text-accent"
                aria-hidden="true"
              >
                {name[0]}
              </Surface>
              <span className="text-[12px] font-bold text-foreground">{name}</span>
            </Surface>
          ))}
        </ul>
      </div>
      <p className="mt-2 text-[9px] leading-snug text-muted">
        <sup>1</sup> {market.source}
      </p>
    </Surface>
  )
}

function Facts() {
  return (
    <Surface as="section" depth="inset" radius="card" className="flex flex-col p-5">
      <Label>Steckbrief</Label>
      {/* Die Mulde ist so hoch wie die Karte daneben; die Zeilen verteilen
          sich über die ganze Höhe, statt oben zu kleben. */}
      <dl className="mt-3 flex flex-1 flex-col justify-between gap-1.5">
        {facts.map(({ label, value }) => (
          <div key={label} className="flex items-baseline justify-between gap-3">
            <dt className="shrink-0 text-[10.5px] text-muted">{label}</dt>
            <dd className="text-right text-[12px] font-bold leading-snug text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </Surface>
  )
}

function Services() {
  return (
    <section>
      <Label>Leistungen</Label>
      {/* 4 + 3 auf einem 12er-Raster: beide Reihen laufen bündig aus, ohne
          leere Zelle am Ende. */}
      <ul className="mt-3 grid grid-cols-12 gap-2.5">
        {services.map(({ icon, title }, i) => (
          <Surface
            as="li"
            key={title}
            depth="raisedSm"
            radius="md"
            className={cn('flex items-center gap-2.5 px-2 py-1.5', i < 4 ? 'col-span-3' : 'col-span-4')}
          >
            <IconWell icon={icon} size="xs" />
            <span className="min-w-0 text-[11.5px] font-bold leading-snug text-foreground">{title}</span>
          </Surface>
        ))}
      </ul>
    </section>
  )
}

function Packages() {
  return (
    <section>
      <Label>Pakete & Preise</Label>
      <ul className="mt-3 grid grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Surface
            as="li"
            key={plan.name}
            depth="raised"
            radius="card"
            // Das empfohlene Paket steht näher am Betrachter — tieferer
            // Schatten statt farbigem Rahmen, wie auf der Website.
            className={cn('flex flex-col p-4', plan.featured && 'shadow-raised-hover')}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-[15px] font-bold text-foreground">{plan.name}</h3>
              {plan.badge && (
                <span className="rounded-full bg-accent px-2.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-accent-foreground shadow-raised-sm">
                  {plan.badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-[10.5px] leading-snug text-muted">{plan.summary}</p>

            <Surface
              depth="inset"
              radius="md"
              className="mt-2 flex items-baseline justify-center gap-1.5 py-1.5"
            >
              <span className="font-display text-[19px] font-extrabold text-accent">{plan.price}</span>
              <span className="text-[10.5px] text-muted">{plan.period}</span>
            </Surface>

            <ul className="mt-2 space-y-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Surface
                    depth="insetSm"
                    radius="full"
                    className="mt-px grid h-4 w-4 shrink-0 place-items-center"
                  >
                    <Check className="h-2.5 w-2.5 text-positive" strokeWidth={3.5} aria-hidden="true" />
                  </Surface>
                  <span className="min-w-0 text-[10.5px] leading-snug text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Surface>
        ))}
      </ul>
      <p className="mt-3 text-center text-[10px] leading-snug text-muted">{pricingNote}</p>
    </section>
  )
}

function ContactBand() {
  // "Web" entfällt: auf Papier übernimmt das der QR-Code, und der führt auf
  // die tatsächlich erreichbare Website.
  const items = contact.filter(({ label }) => label !== 'Web')
  const shortUrl = websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const [host, ...path] = shortUrl.split('/')

  return (
    <Surface
      as="footer"
      depth="inset"
      radius="card"
      // Keine Ligaturen bei Kontaktdaten: DM Sans setzt "fi" sonst als ein
      // Zeichen (U+FB01), und wer die Mailadresse aus dem PDF kopiert, bekommt
      // "coreﬁx.de" — eine Adresse, die kein Mailprogramm annimmt.
      className="flex items-center gap-5 py-2.5 pl-5 pr-2.5 [font-variant-ligatures:none]"
    >
      <ul className="flex flex-1 items-center justify-between gap-4">
        {items.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex min-w-0 items-center gap-2.5">
            {/* Im eingelassenen Band stehen die Symbole erhaben — die
                Schichtung raised → inset → raised des Systems. */}
            <Surface depth="raisedSm" radius="sm" className="grid h-8 w-8 shrink-0 place-items-center">
              <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
            </Surface>
            <div className="min-w-0">
              <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-muted">
                {label}
              </p>
              {/* Adresse darf am Komma umbrechen, Nummer und Mailadresse nie. */}
              <p
                className={cn(
                  'text-[11.5px] font-medium leading-snug text-foreground',
                  label !== 'Adresse' && 'whitespace-nowrap',
                )}
              >
                {value}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-muted">
            Website
          </p>
          <p className="text-[10px] leading-snug text-foreground">
            {host}
            <br />/{path.join('/')}
          </p>
        </div>
        <Surface depth="raisedSm" radius="sm" className="p-1">
          <img src={qrUrl} alt={`QR-Code: ${shortUrl}`} className="block h-[58px] w-[58px]" />
        </Surface>
      </div>
    </Surface>
  )
}

export function Portfolio() {
  useFitSheetToViewport()

  return (
    <div className="sheet-stage flex min-h-screen justify-center px-4 py-8 md:py-14">
      <Surface
        as="article"
        depth="raised"
        radius="card"
        // justify-between verteilt den verbleibenden Platz gleichmäßig auf
        // die Abstände, statt ihn als Loch am Blattende zu lassen.
        className="sheet flex flex-col justify-between overflow-hidden p-8"
        aria-label="Unternehmensportfolio der CoreFix GmbH"
      >
        <Hero />

        <div className="grid grid-cols-[1fr_236px] gap-5">
          <About />
          <Facts />
        </div>

        <Services />
        <Packages />
        <ContactBand />
      </Surface>
    </div>
  )
}
