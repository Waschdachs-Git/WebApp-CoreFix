import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { Surface } from '@/components/ui/Surface'
import { pitch } from '@/data/content'

export function Pitch() {
  return (
    <Section
      id="ueber-uns"
      eyebrow="Über CoreFix"
      title="Ihre IT in festen Händen"
      lead={pitch.lead}
      align="center"
    >
      <Surface depth="inset" radius="card" className="mx-auto max-w-3xl px-8 py-7 text-center">
        <p className="text-base leading-relaxed text-muted md:text-lg">{pitch.body}</p>
      </Surface>

      <ul className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
        {pitch.pillars.map(({ icon, title, text }) => (
          <Card as="li" key={title} interactive className="flex flex-col items-center text-center">
            <IconWell icon={icon} size="lg" className="rounded-full" />
            <h3 className="mt-7 font-display text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{text}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
