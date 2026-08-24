import { Surface } from './Surface'
import { cn } from '@/lib/utils'

type EyebrowProps = {
  /** The deck's slide number, kept as a wayfinding cue. */
  step?: string
  children: React.ReactNode
  className?: string
}

/**
 * The deck labels every slide with a numbered chip. Here that chip becomes a
 * pressed pill with the number sitting in its own extruded counter-well —
 * raised → inset → raised, the nested-depth idea at the smallest scale.
 */
export function Eyebrow({ step, children, className }: EyebrowProps) {
  return (
    <Surface
      depth="insetSm"
      radius="full"
      className={cn('inline-flex items-center gap-3 py-1.5 pl-1.5 pr-5', className)}
    >
      {step && (
        <Surface
          depth="raisedSm"
          radius="full"
          className="grid h-7 w-7 place-items-center font-display text-[11px] font-bold text-accent"
        >
          {step}
        </Surface>
      )}
      <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
        {children}
      </span>
    </Surface>
  )
}
