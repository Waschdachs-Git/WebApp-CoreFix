import { Surface } from './Surface'
import { ratingLabel, type Rating } from '@/data/content'
import { cn } from '@/lib/utils'

/**
 * The deck's three-step rating, rebuilt as material rather than iconography:
 * each rating is a well with something different sitting at the bottom of it.
 * "stark" gets a solid accent puck that rises out of the well, "teilweise" a
 * hollow ring, "eingeschränkt" a flat sunken bar. Depth carries the meaning,
 * so the scale still reads without relying on colour alone.
 */
export function RatingDot({ rating, className }: { rating: Rating; className?: string }) {
  return (
    <span className={cn('inline-flex', className)} title={ratingLabel[rating]}>
      <Surface depth="insetSm" radius="full" className="grid h-9 w-9 place-items-center">
        {rating === 'stark' && (
          <span className="h-4 w-4 rounded-full bg-accent shadow-raised-sm" aria-hidden="true" />
        )}
        {rating === 'teilweise' && (
          <span
            className="h-4 w-4 rounded-full ring-[3px] ring-inset ring-accent/55"
            aria-hidden="true"
          />
        )}
        {rating === 'eingeschraenkt' && (
          <span className="h-[3px] w-4 rounded-full bg-muted/70" aria-hidden="true" />
        )}
      </Surface>
      <span className="sr-only">{ratingLabel[rating]}</span>
    </span>
  )
}

const legend: Rating[] = ['stark', 'teilweise', 'eingeschraenkt']

export function RatingLegend({ className }: { className?: string }) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-x-7 gap-y-3', className)}>
      {legend.map((rating) => (
        <li key={rating} className="flex items-center gap-2.5">
          <RatingDot rating={rating} />
          <span className="text-sm text-muted">{ratingLabel[rating]}</span>
        </li>
      ))}
    </ul>
  )
}
