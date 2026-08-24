import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Surface } from '@/components/ui/Surface'
import { faq } from '@/data/content'

export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="Häufige Fragen"
      title="Was Kunden uns vorher fragen"
      lead="Die Punkte, an denen ein Wechsel meist hängt — hier vorab beantwortet."
      align="center"
    >
      <div className="mx-auto max-w-3xl space-y-5">
        {faq.map(({ q, a }) => (
          // Natives <details>: Tastaturbedienung, Screenreader-Semantik und
          // die Suche im Browser funktionieren damit ohne eigenes JavaScript.
          <Surface
            as="details"
            key={q}
            depth="raised"
            radius="card"
            className="group overflow-hidden"
          >
            <summary
              className={
                'flex cursor-pointer list-none items-center gap-5 p-7 ' +
                'font-display text-base font-bold text-foreground transition-colors duration-300 ' +
                'hover:text-accent [&::-webkit-details-marker]:hidden'
              }
            >
              <span className="min-w-0 flex-1">{q}</span>
              <Surface
                depth="raisedSm"
                radius="full"
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center transition-all duration-300 ease-out group-open:shadow-inset-sm"
              >
                <ChevronDown className="h-4 w-4 text-accent transition-transform duration-300 ease-out group-open:rotate-180" />
              </Surface>
            </summary>

            <div className="px-7 pb-7">
              <Surface depth="inset" radius="md" className="px-6 py-5">
                <p className="text-[15px] leading-relaxed text-muted">{a}</p>
              </Surface>
            </div>
          </Surface>
        ))}
      </div>
    </Section>
  )
}
