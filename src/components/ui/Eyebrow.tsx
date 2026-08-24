import { Surface } from './Surface'
import { cn } from '@/lib/utils'

/**
 * Kleines eingelassenes Label über jeder Section-Überschrift. Bewusst ohne
 * Nummer: eine Durchnummerierung der Abschnitte stammte aus der
 * Foliennummerierung des Pitchdecks und sagt Besucherinnen der Website
 * nichts. Wo eine Reihenfolge tatsächlich Information trägt — im Ablauf —
 * stehen die Ziffern an den Schritten selbst.
 */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Surface
      depth="insetSm"
      radius="full"
      className={cn('inline-flex items-center gap-2.5 py-2 pl-4 pr-5', className)}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
        {children}
      </span>
    </Surface>
  )
}
