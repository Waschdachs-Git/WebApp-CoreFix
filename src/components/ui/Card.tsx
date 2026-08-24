import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { Surface } from './Surface'
import { cn } from '@/lib/utils'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
  interactive?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

/**
 * A Card is just an extruded Surface at container radius with generous
 * padding — kept as its own component so the padding rhythm stays consistent
 * across every section instead of being re-guessed each time.
 */
export function Card<T extends ElementType = 'div'>({
  as,
  interactive = false,
  className,
  ...props
}: CardProps<T>) {
  // Widen `as` before handing it to Surface: Card only needs to forward the
  // element choice, not re-derive Surface's generic prop map from it.
  const Component = (as ?? 'div') as ElementType

  return (
    <Surface
      as={Component}
      depth="raised"
      radius="card"
      interactive={interactive}
      className={cn('p-8 md:p-10', className)}
      {...props}
    />
  )
}
