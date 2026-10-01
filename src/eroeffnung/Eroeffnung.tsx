import { useSheetZoom } from '@/components/print/useSheetZoom'
import { InstagramPost } from './InstagramPost'
import { Plakat } from './Plakat'

/**
 * Vorschau beider Motive nebeneinander. Die Beschriftungen erscheinen nur auf
 * dem Bildschirm; beim Export zählt allein das jeweilige Motiv.
 */
export function Eroeffnung() {
  useSheetZoom()

  return (
    <main className="campaign-stage flex min-h-screen flex-wrap items-start justify-center gap-12 px-4 py-10 md:py-14">
      <h1 className="sr-only">Eröffnungswerbung der CoreFix GmbH</h1>

      <figure className="board-post flex flex-col items-center gap-4">
        <InstagramPost />
        <figcaption className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
          Instagram-Post · 1080 × 1350 px
        </figcaption>
      </figure>

      <figure className="board-poster flex flex-col items-center gap-4">
        <Plakat />
        <figcaption className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
          Plakat · A4
        </figcaption>
      </figure>
    </main>
  )
}
