import { Section } from '@/components/layout/Section'
import { Surface } from '@/components/ui/Surface'
import { IconWell } from '@/components/ui/IconWell'
import { process } from '@/data/content'

export function Process() {
  return (
    <Section
      id="ablauf"
      eyebrow="Ablauf"
      title="So starten wir"
      lead="Der häufigste Grund, den IT-Partner nicht zu wechseln, ist die Sorge vor dem Aufwand. Deshalb hier vorab, was auf Sie zukommt."
      align="center"
    >
      {/* Nummern sind hier keine Dekoration: die vier Schritte sind eine echte
          Reihenfolge, und die Ziffer sagt der Leserin, wo sie gerade steht. */}
      <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {process.map(({ icon, title, text }, i) => (
          <Surface
            as="li"
            key={title}
            depth="raised"
            radius="card"
            interactive
            className="flex flex-col p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <IconWell icon={icon} className="rounded-full" />
              <Surface
                depth="insetSm"
                radius="full"
                className="grid h-10 w-10 shrink-0 place-items-center font-display text-sm font-bold text-muted"
              >
                {String(i + 1).padStart(2, '0')}
              </Surface>
            </div>
            <h3 className="mt-7 font-display text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{text}</p>
          </Surface>
        ))}
      </ol>
    </Section>
  )
}
