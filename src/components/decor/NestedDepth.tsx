import { Surface } from '@/components/ui/Surface'
import { cn } from '@/lib/utils'
import markUrl from '@/assets/corefix-mark.png'

/**
 * The hero's showpiece: concentric rings alternating extruded and inset, so
 * the eye reads the material being pushed out, carved in, then pushed out
 * again. This is the clearest statement of the system's physics on the page —
 * a flat logo panel would waste the opportunity.
 *
 * The rings scale and the innermost tile lifts on hover; the whole group
 * drifts on the ambient float loop.
 */
export function NestedDepth({ className }: { className?: string }) {
  return (
    <div className={cn('group relative mx-auto w-full max-w-md lg:max-w-none', className)}>
      <Surface
        depth="raised"
        radius="full"
        className="relative aspect-square w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      >
        <Surface
          depth="insetDeep"
          radius="full"
          className="absolute inset-[8%] transition-transform duration-500 ease-out group-hover:scale-105"
        >
          <Surface
            depth="raised"
            radius="full"
            className="absolute inset-[9%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          >
            <Surface
              depth="inset"
              radius="full"
              className="absolute inset-[10%] grid place-items-center"
            >
              <Surface
                depth="raised"
                radius="card"
                className="grid h-[58%] w-[58%] place-items-center p-[8%] transition-transform duration-500 ease-out group-hover:-translate-y-1"
              >
                <img
                  src={markUrl}
                  alt="CoreFix Logo"
                  className="h-full w-full object-contain"
                />
              </Surface>
            </Surface>
          </Surface>
        </Surface>
      </Surface>
    </div>
  )
}
