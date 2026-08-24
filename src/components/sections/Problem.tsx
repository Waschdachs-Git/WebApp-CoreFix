import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { problems } from '@/data/content'

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Bekannt?"
      title="Woran es meistens hakt"
      lead="Vier Situationen, die wir in fast jedem Betrieb ohne eigene IT-Abteilung antreffen."
    >
      <ul className="grid gap-8 md:grid-cols-2 md:gap-10">
        {problems.map(({ icon, title, text }) => (
          <Card as="li" key={title} interactive className="flex gap-6">
            <IconWell icon={icon} tone="muted" />
            <div className="min-w-0">
              <h3 className="font-display text-lg font-bold text-foreground md:text-xl">{title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{text}</p>
            </div>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
