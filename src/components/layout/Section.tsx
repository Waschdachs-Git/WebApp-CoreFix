import type { ReactNode } from 'react'
import { Container } from './Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  children: ReactNode
  /** Centres the header block — used for the wider, statement-y sections. */
  align?: 'left' | 'center'
  className?: string
}

/**
 * Every content section shares one rhythm: generous vertical air (the shadows
 * need room to breathe), an optional numbered eyebrow, a display heading, and
 * a muted lead. Centralising it here is what keeps twelve sections from
 * drifting into twelve slightly different layouts.
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  align = 'left',
  className,
}: SectionProps) {
  const centered = align === 'center'
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <Container>
        <header className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {lead && <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{lead}</p>}
        </header>
        <div className="mt-12 md:mt-16">{children}</div>
      </Container>
    </section>
  )
}
