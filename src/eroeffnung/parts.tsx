import { Power } from 'lucide-react'
import { Surface } from '@/components/ui/Surface'
import { Logo } from '@/components/decor/Logo'
import { discountLabel } from '@/data/opening'
import { cn } from '@/lib/utils'

/** Wortmarke mit Rechtsform, wie im Kopf des Portfolios. */
export function Brand() {
  return (
    <span className="inline-flex items-center gap-3">
      <Logo />
      <span className="font-display text-xl font-extrabold text-muted">GmbH</span>
    </span>
  )
}

/**
 * Der Einschaltknopf — das allgemeinste Zeichen der IT für "an", und damit das
 * Bild für eine Eröffnung. Gebaut aus der Schichtung des Systems: erhabene
 * Scheibe, eingelassene Fassung, erhabener Knopf. Das Akzentblau des Symbols
 * und die kleine Betriebs-LED sagen: Der Strom fließt.
 */
export function PowerOrb({ className }: { className?: string }) {
  return (
    <Surface
      depth="raised"
      radius="full"
      aria-hidden="true"
      className={cn('relative aspect-square shrink-0', className)}
    >
      <Surface depth="insetDeep" radius="full" className="absolute inset-[11%]">
        <Surface
          depth="raised"
          radius="full"
          className="absolute inset-[14%] grid place-items-center"
        >
          <Power className="h-[44%] w-[44%] text-accent" strokeWidth={2.25} />
        </Surface>
      </Surface>
      <span className="absolute left-1/2 top-[4.5%] h-[3.2%] w-[3.2%] -translate-x-1/2 rounded-full bg-accent-light" />
    </Surface>
  )
}

/**
 * Das einzige farbig gefüllte Element jedes Motivs. Akzentblau ist im System
 * dem Call to Action vorbehalten — hier ist das Angebot der Call to Action.
 * Der innere Ring ist eingedrückt, damit die Schichtung auch auf Farbe hält.
 */
export function DiscountPuck({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <div
      className={cn(
        'grid aspect-square shrink-0 place-items-center rounded-full bg-accent shadow-raised',
        className,
      )}
    >
      <div className="grid h-[82%] w-[82%] place-items-center rounded-full shadow-inset-accent">
        <span
          className={cn(
            'whitespace-nowrap font-display font-extrabold leading-none tracking-tight text-accent-foreground',
            textClassName,
          )}
        >
          {/* Echtes Minuszeichen (U+2212), kein Bindestrich. */}
          −{discountLabel}
        </span>
      </div>
    </div>
  )
}
