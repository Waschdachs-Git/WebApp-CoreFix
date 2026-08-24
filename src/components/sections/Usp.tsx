import { Section } from '@/components/layout/Section'
import { Surface } from '@/components/ui/Surface'
import { RatingDot, RatingLegend } from '@/components/ui/RatingDot'
import { comparison, comparisonColumns } from '@/data/content'
import { cn } from '@/lib/utils'

export function Usp() {
  const lastIndex = comparisonColumns.length - 1

  return (
    <Section
      id="warum"
      step="04"
      eyebrow="USP"
      title="Warum CoreFix?"
      lead="Systemhaus oder Freelancer — beide Modelle haben blinde Flecken. CoreFix ist genau dort stark, wo beide schwächeln."
    >
      <Surface depth="raised" radius="card" className="p-4 sm:p-8 md:p-10">
        <div className="overflow-x-auto">
          <div className="relative w-full">
            {/* The CoreFix column is carved into the card as a channel running
                its full height — the highlight is material, not fill. */}
            <Surface
              depth="inset"
              radius="md"
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 top-0 w-[20%]"
            />

            <table className="relative w-full table-fixed border-separate border-spacing-0 text-left">
              <caption className="sr-only">
                Vergleich von Systemhaus, Freelancer und CoreFix in fünf Kriterien
              </caption>
              {/* The rating pucks are only 36px wide, so the criterion column
                  gets the surplus — that is what keeps long German labels off
                  a hard break on narrow phones. */}
              <colgroup>
                <col className="w-[40%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
              </colgroup>

              <thead>
                <tr>
                  <th scope="col" className="sr-only">
                    Kriterium
                  </th>
                  {comparisonColumns.map((label, i) => (
                    <th
                      key={label}
                      scope="col"
                      className={cn(
                        'px-0 pb-6 pt-4 text-center font-display text-[10px] font-bold leading-tight',
                        // Single-word labels cannot wrap, so they set the
                        // floor for how narrow a rating column may get.
                        'tracking-tight sm:px-1 sm:text-base sm:tracking-normal',
                        i === lastIndex ? 'text-accent' : 'text-muted',
                      )}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparison.map(({ criterion, values }, row) => (
                  <tr key={criterion}>
                    <th
                      scope="row"
                      className={cn(
                        'py-4 pr-2 text-[13px] font-medium leading-snug text-foreground sm:py-5 sm:pr-3 sm:text-base',
                        row > 0 && 'shadow-groove',
                      )}
                    >
                      {criterion}
                    </th>
                    {values.map((rating, i) => (
                      <td
                        key={comparisonColumns[i]}
                        className={cn(
                          'py-5 text-center',
                          // The carved channel already reads as separated, so
                          // the groove stops short of the CoreFix column.
                          row > 0 && i !== lastIndex && 'shadow-groove',
                        )}
                      >
                        <RatingDot rating={rating} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <RatingLegend className="mt-8 px-1" />
      </Surface>
    </Section>
  )
}
