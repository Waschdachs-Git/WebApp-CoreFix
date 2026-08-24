import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { services } from '@/data/content'

export function Services() {
  return (
    <Section
      id="leistungen"
      step="03"
      eyebrow="Lösung"
      title="Unser Leistungsangebot"
      lead="Von der Störung um 8 Uhr morgens bis zur Sicherheitsstrategie fürs Jahr — alles aus einer Hand, mit einem Ansprechpartner."
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon, title, text }) => (
          <Card as="li" key={title} interactive className="p-8">
            <IconWell icon={icon} />
            <h3 className="mt-6 font-display text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{text}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
