import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Surface } from '@/components/ui/Surface'
import { Card } from '@/components/ui/Card'
import { IconWell } from '@/components/ui/IconWell'
import { Button } from '@/components/ui/Button'
import { Field, Input, Textarea } from '@/components/ui/Field'
import { contact } from '@/data/content'

export function Contact() {
  const [sent, setSent] = useState(false)

  /**
   * No backend is wired up yet, so the form hands the composed enquiry to the
   * visitor's mail client instead of pretending to have delivered it. Swap
   * this for a POST once an endpoint exists — the markup stays as is.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const company = String(data.get('company') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    const body = [
      `Name: ${name}`,
      company && `Unternehmen: ${company}`,
      `E-Mail: ${email}`,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:info@corefix.de?subject=${encodeURIComponent(
      `Anfrage von ${name}`,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <Section
      id="kontakt"
      eyebrow="Kontakt"
      title="Sprechen wir über Ihre IT."
      lead="Erzählen Sie uns kurz, wie Ihre IT heute betreut wird — wir melden uns mit einer ehrlichen Einschätzung."
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {contact.map(({ icon, label, value, href }) => {
            const content = (
              <>
                <IconWell icon={icon} size="sm" />
                <div className="min-w-0">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {label}
                  </p>
                  <p className="mt-1.5 break-words text-[15px] font-medium text-foreground">
                    {value}
                  </p>
                </div>
                {href && (
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                )}
              </>
            )

            return (
              <li key={label}>
                {href ? (
                  <Surface
                    as="a"
                    href={href}
                    depth="raised"
                    radius="card"
                    interactive
                    className="group flex h-full items-center gap-4 p-6"
                  >
                    {content}
                  </Surface>
                ) : (
                  <Surface
                    depth="raised"
                    radius="card"
                    className="flex h-full items-center gap-4 p-6"
                  >
                    {content}
                  </Surface>
                )}
              </li>
            )
          })}
        </ul>

        <Card as="form" onSubmit={handleSubmit} className="p-8 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name">
              {(id) => (
                <Input id={id} name="name" required autoComplete="name" placeholder="Max Mustermann" />
              )}
            </Field>
            <Field label="Unternehmen">
              {(id) => (
                <Input
                  id={id}
                  name="company"
                  autoComplete="organization"
                  placeholder="Musterbetrieb GmbH"
                />
              )}
            </Field>
          </div>

          <div className="mt-6">
            <Field label="E-Mail">
              {(id) => (
                <Input
                  id={id}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="max@musterbetrieb.de"
                />
              )}
            </Field>
          </div>

          <div className="mt-6">
            <Field
              label="Ihre Nachricht"
              hint="Wie viele Arbeitsplätze betreuen Sie? Wer kümmert sich heute um die IT?"
            >
              {(id) => (
                <Textarea
                  id={id}
                  name="message"
                  rows={5}
                  required
                  placeholder="Wir haben 18 Arbeitsplätze und aktuell keinen festen IT-Partner …"
                />
              )}
            </Field>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button type="submit" variant="primary" size="lg">
              <Send className="h-4 w-4" aria-hidden="true" />
              Anfrage senden
            </Button>
            <p aria-live="polite" className="text-sm leading-relaxed text-muted">
              {sent
                ? 'Ihr E-Mail-Programm wurde mit der fertigen Anfrage geöffnet.'
                : 'Wir melden uns innerhalb eines Werktags.'}
            </p>
          </div>
        </Card>
      </div>
    </Section>
  )
}
