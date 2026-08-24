import { Surface } from '@/components/ui/Surface'
import { cn } from '@/lib/utils'
import markUrl from '@/assets/corefix-mark.png'

type LogoProps = {
  /** Hides the wordmark — used where space is tight. */
  markOnly?: boolean
  className?: string
}

/**
 * The real CoreFix monogram, seated in a raised tile so the brand mark reads
 * as part of the same molded surface as everything else. The wordmark is set
 * in the display face rather than baked into the image, so it stays crisp and
 * inherits the palette.
 */
export function Logo({ markOnly = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <Surface depth="raisedSm" radius="sm" className="grid h-11 w-11 place-items-center p-2">
        <img src={markUrl} alt="" className="h-full w-full object-contain" aria-hidden="true" />
      </Surface>
      {!markOnly && (
        <span className="font-display text-xl font-extrabold text-foreground">
          Core<span className="text-accent">Fix</span>
        </span>
      )}
    </span>
  )
}
