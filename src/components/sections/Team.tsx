import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { team } from '@/data/content'

export function Team() {
  return (
    <Section
      id="team"
      step="08"
      eyebrow="Team"
      title="Unser Team"
      lead="Vier Rollen, klar verteilt — damit jeder Kunde weiß, wer für was zuständig ist."
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map(({ icon, role, name, focus }) => (
          <Card as="li" key={role} interactive className="flex flex-col items-center p-8 text-center">
            <IconWell icon={icon} size="lg" className="rounded-full" />
            <p className="mt-7 font-display text-lg font-bold text-foreground">{name}</p>
            <p className="mt-1.5 text-sm font-semibold text-accent">{role}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{focus}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
