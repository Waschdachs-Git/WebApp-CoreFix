import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { Surface } from '@/components/ui/Surface'
import { legal } from '@/data/content'

export function Legal() {
  return (
    <Section
      id="rechtsform"
      step="09"
      eyebrow="Rechtsform"
      title="Rechtsform: GmbH"
      lead="Die GmbH schützt die Gesellschafter und signalisiert Geschäftskunden Verbindlichkeit — beides zählt im B2B-Geschäft."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <ul className="grid gap-6 sm:grid-cols-1">
          {legal.points.map(({ icon, title, text }) => (
            <Surface as="li" key={title} depth="raised" radius="card" className="flex gap-6 p-7">
              <IconWell icon={icon} />
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
              </div>
            </Surface>
          ))}
        </ul>

        <Card className="flex flex-col justify-center text-center">
          <Surface depth="insetDeep" radius="card" className="px-6 py-12">
            <p className="font-display text-5xl font-extrabold leading-none text-accent">
              {legal.capital.value}
            </p>
          </Surface>
          <p className="mt-8 text-[15px] font-medium leading-relaxed text-foreground">
            {legal.capital.label}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{legal.capital.note}</p>
        </Card>
      </div>
    </Section>
  )
}
