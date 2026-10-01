import { Surface } from '@/components/ui/Surface'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ContactBand } from '@/components/print/ContactBand'
import { formatPrice, plans } from '@/data/content'
import { differentiators } from '@/data/profile'
import { discounted, opening } from '@/data/opening'
import { Brand, DiscountPuck, PowerOrb } from './parts'

/**
 * A4-Plakat. Wird aus Abstand gelesen: wenige Wörter, große Schrift, und die
 * rabattierten Preise ausgerechnet statt nur behauptet.
 */
export function Plakat() {
  return (
    <Surface
      as="section"
      depth="raised"
      radius="card"
      aria-label="Plakat zur Eröffnung"
      className="artboard poster flex h-[297mm] w-[210mm] shrink-0 flex-col justify-between overflow-hidden p-11"
    >
      <header className="flex items-center justify-between">
        <Brand />
        <Eyebrow>Neueröffnung</Eyebrow>
      </header>

      <div className="grid grid-cols-[1fr_248px] items-center gap-8">
        <div>
          <p className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-accent">
            {opening.kicker}
          </p>
          <h2 className="mt-3 font-display text-[86px] font-extrabold leading-[0.92] tracking-tight text-foreground">
            {opening.headline.lead}
            <br />
            <span className="text-accent">{opening.headline.accent}</span>
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-muted">{opening.subline}</p>
        </div>
        <PowerOrb className="w-[248px]" />
      </div>

      <ul className="flex flex-wrap gap-3">
        {differentiators.map(({ icon: Icon, label }) => (
          <Surface
            as="li"
            key={label}
            depth="raisedSm"
            radius="full"
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap py-1.5 pl-1.5 pr-4"
          >
            <Surface depth="insetSm" radius="full" className="grid h-8 w-8 place-items-center">
              <Icon className="h-4 w-4 text-accent" strokeWidth={2.25} aria-hidden="true" />
            </Surface>
            <span className="text-[14px] font-medium text-foreground">{label}</span>
          </Surface>
        ))}
      </ul>

      <Surface depth="raised" radius="card" className="p-6">
        <div className="flex items-center gap-7">
          <DiscountPuck className="w-[160px]" textClassName="text-[35px]" />
          <div className="min-w-0">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
              {opening.offerKicker}
            </p>
            <p className="mt-2 font-display text-[34px] font-extrabold leading-tight text-foreground">
              {opening.offerTitle}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{opening.offerText}</p>
          </div>
        </div>

        <ul className="mt-5 grid grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Surface as="li" key={plan.name} depth="inset" radius="md" className="px-4 py-3 text-center">
              <p className="font-display text-[15px] font-bold text-foreground">{plan.name}</p>
              {/* "statt" trägt die Bedeutung — Durchstreichen allein liest
                  kein Screenreader vor und übersteht keine Textextraktion. */}
              <p className="mt-1 text-[12.5px] text-muted">
                statt <span className="line-through">{formatPrice(plan.amount)}</span>
              </p>
              <p className="mt-1 font-display text-[26px] font-extrabold leading-tight text-accent">
                {formatPrice(discounted(plan.amount))}
              </p>
              <p className="text-[12px] text-muted">{plan.period}</p>
            </Surface>
          ))}
        </ul>

        <p className="mt-3 text-[11.5px] leading-snug text-muted">{opening.finePrint}</p>
      </Surface>

      <ContactBand size="lg" />
    </Surface>
  )
}
