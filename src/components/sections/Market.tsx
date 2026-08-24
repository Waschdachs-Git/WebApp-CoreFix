import { Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Surface } from '@/components/ui/Surface'
import { market } from '@/data/content'

export function Market() {
  return (
    <Section
      id="markt"
      step="05"
      eyebrow="Markt"
      title="Zielgruppe & Markt"
      lead="Der Bedarf ist strukturell — nicht konjunkturell. Drei Zahlen beschreiben den Markt, in den CoreFix startet."
    >
      <ul className="grid gap-5 md:grid-cols-2 md:gap-8">
        {market.points.map((point) => (
          <Surface as="li" key={point} depth="raised" radius="card" className="flex gap-4 p-7">
            <Surface depth="insetDeep" radius="full" className="grid h-9 w-9 shrink-0 place-items-center">
              <Check className="h-4 w-4 text-positive" strokeWidth={3} aria-hidden="true" />
            </Surface>
            <p className="min-w-0 text-[15px] leading-relaxed text-foreground">{point}</p>
          </Surface>
        ))}
      </ul>

      <ul className="mt-8 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-10">
        {market.stats.map(({ value, unit, label }) => (
          <Card as="li" key={label} interactive className="text-center">
            {/* The figure sits in a deep well so it reads as stamped into the
                card — the number is the point, not the copy under it. */}
            <Surface depth="insetDeep" radius="card" className="px-6 py-10">
              <p className="font-display text-6xl font-extrabold leading-none text-accent">
                {value}
                <span className="text-3xl align-super">{unit}</span>
              </p>
            </Surface>
            <p className="mt-7 text-[15px] leading-relaxed text-muted">{label}</p>
          </Card>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-muted">{market.sources}</p>
    </Section>
  )
}
