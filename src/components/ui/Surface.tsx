import { forwardRef, type ElementType, type ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * The one primitive every visible element in this design system is built from.
 *
 * In neumorphism nothing is "placed on" the page — it is molded out of it.
 * So instead of a Card/Panel/Well/Tile zoo that each re-declare shadows, there
 * is a single Surface whose only job is to say how far in or out of the clay
 * an element sits. Everything else (Card, IconWell, Button, Input) composes it.
 */
const surface = cva('bg-surface transition-all duration-300 ease-out', {
  variants: {
    depth: {
      /** Default resting state — extruded out of the surface. */
      raised: 'shadow-raised',
      /** Smaller extrusion for compact elements. */
      raisedSm: 'shadow-raised-sm',
      /** Pressed in — shallow well. */
      inset: 'shadow-inset',
      /** Carved deep — icon wells, inputs, active states. */
      insetDeep: 'shadow-inset-deep',
      /** Subtle track — pills, progress rails. */
      insetSm: 'shadow-inset-sm',
      /** No depth. For wrappers that only need the surface colour. */
      flat: '',
    },
    radius: {
      card: 'rounded-card', // 32px — containers
      md: 'rounded-2xl', //    16px — buttons, inputs
      sm: 'rounded-xl', //     12px — inner elements
      full: 'rounded-full',
      none: '',
    },
    /** Adds the hover lift. Use on anything the pointer can act on. */
    interactive: {
      true: 'hover:-translate-y-1 hover:shadow-raised-hover',
      false: '',
    },
  },
  defaultVariants: { depth: 'raised', radius: 'card', interactive: false },
})

type SurfaceVariants = VariantProps<typeof surface>

type SurfaceProps<T extends ElementType> = {
  as?: T
} & SurfaceVariants &
  Omit<ComponentPropsWithoutRef<T>, keyof SurfaceVariants | 'as'>

/**
 * Polymorphic so semantics stay correct — a Surface can be a <section>, an
 * <li>, a <figure> — without forking the styling.
 */
export const Surface = forwardRef(function Surface<T extends ElementType = 'div'>(
  { as, depth, radius, interactive, className, ...props }: SurfaceProps<T>,
  ref: React.Ref<Element>,
) {
  const Component = (as ?? 'div') as ElementType
  return (
    <Component
      ref={ref}
      className={cn(surface({ depth, radius, interactive }), className)}
      {...props}
    />
  )
}) as <T extends ElementType = 'div'>(
  props: SurfaceProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null

export { surface as surfaceVariants }
