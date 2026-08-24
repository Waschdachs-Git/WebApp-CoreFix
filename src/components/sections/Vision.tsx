import { Section } from '@/components/layout/Section'
import { Surface } from '@/components/ui/Surface'
import { IconWell } from '@/components/ui/IconWell'
import { vision } from '@/data/content'

export function Vision() {
  return (
    <Section
      id="vision"
      step="10"
      eyebrow="Vision"
      title="Vision & Ausblick"
      lead="Wohin CoreFix in den nächsten Jahren wächst."
      align="center"
    >
      {/* A vertical rail of stops: each step is a raised card sitting on a
          carved track, so the sequence reads as one continuous groove. */}
      <ol className="mx-auto max-w-3xl space-y-6">
        {vision.map(({ icon, text }, i) => (
          <Surface
            as="li"
            key={text}
            depth="raised"
            radius="card"
            interactive
            className="flex items-center gap-6 p-6 md:p-7"
          >
            <IconWell icon={icon} className="rounded-full" />
            <p className="min-w-0 flex-1 text-[15px] font-medium leading-relaxed text-foreground md:text-base">
              {text}
            </p>
            <Surface
              depth="insetSm"
              radius="full"
              className="hidden h-10 w-10 shrink-0 place-items-center font-display text-sm font-bold text-muted sm:grid"
            >
              {String(i + 1).padStart(2, '0')}
            </Surface>
          </Surface>
        ))}
      </ol>
    </Section>
  )
}
