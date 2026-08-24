import { Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Surface } from '@/components/ui/Surface'
import { ButtonLink } from '@/components/ui/Button'
import { plans, pricingNote } from '@/data/content'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <Section
      id="preise"
      eyebrow="Preise"
      title="Pakete & Preise"
      lead="Feste monatliche Pakete statt Stundenzettel. Sie wissen vorher, was IT kostet."
      align="center"
    >
      <ul className="grid gap-10 lg:grid-cols-3">
        {plans.map((plan) => (
          <Surface
            as="li"
            key={plan.name}
            depth="raised"
            radius="card"
            interactive
            className={cn(
              'relative flex flex-col p-8 md:p-10',
              // The recommended plan is physically closer to the viewer:
              // it sits higher on the surface rather than wearing a border.
              plan.featured && 'shadow-raised-hover lg:-translate-y-4 lg:p-12',
            )}
          >
            {plan.badge && (
              <Surface
                depth="raisedSm"
                radius="full"
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent px-5 py-1.5"
              >
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
                  {plan.badge}
                </span>
              </Surface>
            )}

            <h3 className="font-display text-2xl font-bold text-foreground">{plan.name}</h3>
            {/* Sagt vor dem Preis, für wen das Paket gedacht ist — sonst muss
                die Leserin das aus der Feature-Liste rückwärts erschließen. */}
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{plan.summary}</p>

            <Surface depth="inset" radius="md" className="mt-6 px-6 py-6 text-center">
              <p className="font-display text-4xl font-extrabold leading-none text-accent">
                {plan.price}
              </p>
              <p className="mt-2 text-sm text-muted">{plan.period}</p>
            </Surface>

            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3.5">
                  <Surface
                    depth="insetSm"
                    radius="full"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center"
                  >
                    <Check className="h-3.5 w-3.5 text-positive" strokeWidth={3} aria-hidden="true" />
                  </Surface>
                  <span className="min-w-0 text-[15px] leading-snug text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <ButtonLink
              href="#kontakt"
              variant={plan.featured ? 'primary' : 'secondary'}
              size="md"
              className="mt-10 w-full"
            >
              {plan.name} anfragen
              <span className="sr-only"> — Paket {plan.name}</span>
            </ButtonLink>
          </Surface>
        ))}
      </ul>

      <Surface depth="inset" radius="card" className="mx-auto mt-14 max-w-4xl px-8 py-6">
        <p className="text-center text-sm leading-relaxed text-muted">{pricingNote}</p>
      </Surface>
    </Section>
  )
}
