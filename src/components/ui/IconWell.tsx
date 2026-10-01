import type { LucideIcon } from 'lucide-react'
import { Surface } from './Surface'
import { cn } from '@/lib/utils'

type IconWellProps = {
  icon: LucideIcon
  /** Accent-tinted icons mark the primary idea of a card. */
  tone?: 'accent' | 'muted' | 'positive'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

const box = {
  xs: 'h-9 w-9',
  sm: 'h-12 w-12',
  md: 'h-16 w-16',
  lg: 'h-20 w-20',
} as const

const glyph = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-7 w-7',
  lg: 'h-9 w-9',
} as const

const tones = {
  accent: 'text-accent',
  muted: 'text-muted',
  positive: 'text-positive',
} as const

/**
 * An icon drilled into its card: the well is inset-deep so it reads as carved
 * material, and the glyph sits at the bottom of it. This nesting
 * (raised card → inset well → icon) is the system's signature depth move.
 */
export function IconWell({ icon: Icon, tone = 'accent', size = 'md', className }: IconWellProps) {
  return (
    <Surface
      // A 36px well cannot hold a 20px-blur inset: it reads as a smudge rather
      // than a carved hole. Small wells use the standard inset instead.
      depth={size === 'xs' ? 'inset' : 'insetDeep'}
      radius={size === 'xs' ? 'sm' : 'md'}
      className={cn('grid shrink-0 place-items-center', box[size], className)}
    >
      <Icon className={cn(glyph[size], tones[tone])} strokeWidth={1.75} aria-hidden="true" />
    </Surface>
  )
}
