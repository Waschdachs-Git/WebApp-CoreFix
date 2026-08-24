import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Buttons obey the physics of the surface: they rest extruded, lift on hover,
 * and press *into* the clay on :active. The press is the whole point — never
 * ship a flat button in this system.
 */
const button = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-display font-bold transition-all duration-300 ease-out',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        /** Accent fill. The pressed shadow is tuned for colour, not grey. */
        primary: [
          'bg-accent text-accent-foreground',
          'shadow-raised hover:-translate-y-1 hover:shadow-raised-hover',
          'active:translate-y-0.5 active:shadow-inset-accent',
        ],
        /** Molded from the page itself — the default neumorphic button. */
        secondary: [
          'bg-surface text-foreground',
          'shadow-raised hover:-translate-y-1 hover:shadow-raised-hover',
          'active:translate-y-0.5 active:shadow-inset-sm',
        ],
        /** Sits flush until touched, then wells in. For nav and toolbars. */
        ghost: [
          'bg-surface text-muted hover:text-foreground',
          'shadow-raised-sm hover:-translate-y-1 hover:shadow-raised',
          'active:translate-y-0.5 active:shadow-inset-sm',
        ],
      },
      size: {
        // 44px+ everywhere: touch targets are a hard requirement, not a nicety.
        sm: 'h-11 rounded-2xl px-5 text-sm',
        md: 'h-12 rounded-2xl px-6 text-[15px]',
        lg: 'h-14 rounded-2xl px-8 text-base',
        icon: 'h-12 w-12 rounded-2xl',
      },
    },
    defaultVariants: { variant: 'secondary', size: 'md' },
  },
)

export type ButtonProps = ComponentPropsWithoutRef<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, ...props },
  ref,
) {
  return <button ref={ref} className={cn(button({ variant, size }), className)} {...props} />
})

export type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & VariantProps<typeof button>

/** Same physics, anchor semantics — for in-page and external navigation. */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { className, variant, size, ...props },
  ref,
) {
  return <a ref={ref} className={cn(button({ variant, size }), className)} {...props} />
})

export { button as buttonVariants }
