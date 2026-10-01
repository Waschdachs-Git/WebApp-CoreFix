import { Surface } from '@/components/ui/Surface'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { opening } from '@/data/opening'
import { Brand, DiscountPuck, PowerOrb } from './parts'

/**
 * Instagram-Post im Format 4:5. Gestaltet auf 540 × 675 und mit doppelter
 * Pixeldichte exportiert (1080 × 1350): So haben Schatten und Schrift die
 * Proportionen, in denen das Bild auf dem Handy tatsächlich erscheint.
 */
export function InstagramPost() {
  return (
    <Surface
      as="section"
      depth="raised"
      radius="card"
      aria-label="Instagram-Post zur Eröffnung"
      className="artboard post flex h-[675px] w-[540px] shrink-0 flex-col justify-between overflow-hidden p-9"
    >
      <header className="flex items-center justify-between">
        <Brand />
        <Eyebrow>{opening.kicker}</Eyebrow>
      </header>

      <div>
        <div className="grid grid-cols-[1fr_212px] items-center gap-4">
          <h2 className="font-display text-[70px] font-extrabold leading-[0.95] tracking-tight text-foreground">
            {opening.headline.lead}
            <br />
            <span className="text-accent">{opening.headline.accent}</span>
          </h2>
          <PowerOrb className="w-[212px]" />
        </div>
        <p className="mt-6 max-w-[410px] text-[16px] leading-relaxed text-muted">{opening.subline}</p>
      </div>

      <Surface depth="raised" radius="card" className="flex items-center gap-5 p-5">
        <DiscountPuck className="w-[124px]" textClassName="text-[27px]" />
        <div className="min-w-0">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
            {opening.offerKicker}
          </p>
          <p className="mt-1.5 font-display text-[23px] font-extrabold leading-tight text-foreground">
            {opening.offerTitle}
          </p>
          <p className="mt-1.5 text-[13px] text-muted">Für jedes Paket · {opening.socialCta}</p>
        </div>
      </Surface>
    </Surface>
  )
}
