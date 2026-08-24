import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { Surface } from '@/components/ui/Surface'
import { swot } from '@/data/content'

export function Swot() {
  return (
    <Section
      id="swot"
      step="06"
      eyebrow="SWOT-Analyse"
      title="Ehrliche Standortbestimmung"
      lead="Was heute für CoreFix spricht, wo das Unternehmen als Newcomer noch dünn aufgestellt ist — und was daraus folgt."
    >
      <ul className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {swot.map(({ icon, title, tone, items }) => (
          <Card as="li" key={title} interactive>
            <div className="flex items-center gap-5">
              <IconWell icon={icon} tone={tone === 'positive' ? 'positive' : 'muted'} />
              <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">{title}</h3>
            </div>

            <ul className="mt-8 space-y-3">
              {items.map((item) => (
                <Surface
                  as="li"
                  key={item}
                  depth="insetSm"
                  radius="md"
                  className="flex items-center gap-3.5 px-5 py-4"
                >
                  {/* A raised puck in a pressed row: the smallest possible
                      restatement of the system's raised/inset dialogue. */}
                  <span
                    className={
                      'h-2 w-2 shrink-0 rounded-full shadow-raised-sm ' +
                      (tone === 'positive' ? 'bg-positive' : 'bg-muted/60')
                    }
                    aria-hidden="true"
                  />
                  <span className="min-w-0 text-[15px] leading-snug text-foreground">{item}</span>
                </Surface>
              ))}
            </ul>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
