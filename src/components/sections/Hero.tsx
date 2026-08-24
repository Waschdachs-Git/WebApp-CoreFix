import { ArrowRight, Handshake, Receipt, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/Button'
import { Surface } from '@/components/ui/Surface'
import { NestedDepth } from '@/components/decor/NestedDepth'
import { company } from '@/data/content'

const marks = [
  { icon: ShieldCheck, label: 'Zuverlässig' },
  { icon: Handshake, label: 'Persönlich' },
  { icon: Receipt, label: 'Transparent' },
]

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-12 md:pb-24 md:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="animate-fade-up">
            <Surface
              depth="insetSm"
              radius="full"
              className="inline-flex items-center gap-2 px-5 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
                {company.kicker}
              </span>
            </Surface>

            <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
              IT, die
              <br />
              einfach{' '}
              {/* The one word the whole positioning hangs on gets the accent. */}
              <span className="text-accent">läuft.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{company.subline}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#kontakt" variant="primary" size="lg" className="group">
                Beratung anfragen
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </ButtonLink>
              <ButtonLink href="#leistungen" variant="secondary" size="lg">
                Leistungen ansehen
              </ButtonLink>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {marks.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Surface
                    depth="raisedSm"
                    radius="full"
                    className="flex items-center gap-2.5 py-2.5 pl-3 pr-5"
                  >
                    <Surface depth="insetSm" radius="full" className="grid h-7 w-7 place-items-center">
                      <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
                    </Surface>
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </Surface>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-float">
            <NestedDepth />
          </div>
        </div>
      </Container>
    </section>
  )
}
