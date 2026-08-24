import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { team } from '@/data/content'

export function Team() {
  return (
    <Section
      id="team"
      eyebrow="Ihr Team"
      title="Sie wissen, wen Sie anrufen"
      lead="Bei uns landen Sie nicht in einer Warteschlange. Vier Rollen, klar verteilt — und ein fester Ansprechpartner, der Ihren Betrieb kennt."
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map(({ icon, role, focus }) => (
          <Card as="li" key={role} interactive className="flex flex-col p-8">
            <IconWell icon={icon} size="lg" className="rounded-full" />
            <h3 className="mt-7 font-display text-lg font-bold text-foreground">{role}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{focus}</p>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
