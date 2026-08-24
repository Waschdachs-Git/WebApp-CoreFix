import { forwardRef, useId, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Inputs are the clearest case for depth-as-affordance: a field is a well you
 * drop text into, so it rests inset and deepens on focus. The accent ring is
 * offset in the surface colour so it floats above the clay rather than
 * cutting into it.
 */
const fieldClasses = cn(
  'w-full bg-surface rounded-2xl px-5 text-[15px] text-foreground',
  'placeholder:text-placeholder shadow-inset',
  'transition-all duration-300 ease-out',
  'focus:shadow-inset-deep focus:outline-none',
  'focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface',
)

type FieldWrapperProps = {
  label: string
  hint?: string
  children: (id: string) => ReactNode
}

/** Keeps label/field wiring in one place so no field ships without a label. */
export function Field({ label, hint, children }: FieldWrapperProps) {
  const id = useId()
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="px-1 text-sm font-semibold text-foreground">
        {label}
      </label>
      {children(id)}
      {hint && <p className="px-1 text-xs text-muted">{hint}</p>}
    </div>
  )
}

export const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(fieldClasses, 'h-14', className)} {...props} />
  },
)

export const Textarea = forwardRef<HTMLTextAreaElement, ComponentPropsWithoutRef<'textarea'>>(
  function Textarea({ className, ...props }, ref) {
    return <textarea ref={ref} className={cn(fieldClasses, 'resize-y py-4', className)} {...props} />
  },
)
