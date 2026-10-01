import { Globe, type LucideIcon } from 'lucide-react'
import { Surface } from '@/components/ui/Surface'
import { contact } from '@/data/content'
import { websiteUrl } from '@/data/profile'
import qrUrl from '@/assets/qr-website.svg'
import { cn } from '@/lib/utils'

/**
 * sm: eine Zeile, für das dicht gesetzte Portfolio.
 * lg: 2 × 2-Raster mit großem QR-Code, fürs Plakat — in Plakatschrift passen
 *     vier Angaben nicht mehr nebeneinander, ohne zu brechen.
 */
const sizes = {
  sm: {
    band: 'gap-5 py-2.5 pl-5 pr-2.5',
    list: 'flex flex-1 items-center justify-between gap-4',
    item: 'gap-2.5',
    puck: 'h-8 w-8',
    icon: 'h-3.5 w-3.5',
    label: 'text-[9px]',
    value: 'text-[11.5px]',
    url: 'text-[10px]',
    qrPad: 'p-1',
    qr: 'h-[58px] w-[58px]',
  },
  lg: {
    band: 'gap-6 py-4 pl-7 pr-4',
    list: 'grid flex-1 grid-cols-2 gap-x-6 gap-y-3',
    item: 'gap-3',
    puck: 'h-11 w-11',
    icon: 'h-5 w-5',
    label: 'text-[10.5px]',
    value: 'text-[15px]',
    url: 'text-[15px]',
    qrPad: 'p-1.5',
    qr: 'h-[92px] w-[92px]',
  },
} as const

type Size = keyof typeof sizes

function Item({ icon: Icon, label, value, size }: { icon: LucideIcon; label: string; value: React.ReactNode; size: Size }) {
  const s = sizes[size]
  return (
    <li className={cn('flex min-w-0 items-center', s.item)}>
      <Surface depth="raisedSm" radius="sm" className={cn('grid shrink-0 place-items-center', s.puck)}>
        <Icon className={cn('text-accent', s.icon)} strokeWidth={2} aria-hidden="true" />
      </Surface>
      <div className="min-w-0">
        <p className={cn('font-display font-bold uppercase tracking-[0.16em] text-muted', s.label)}>
          {label}
        </p>
        {/* Adresse darf am Komma umbrechen, Nummer und Mailadresse nie. */}
        <p
          className={cn(
            'font-medium leading-snug text-foreground',
            s.value,
            label !== 'Adresse' && label !== 'Website' && 'whitespace-nowrap',
            label === 'Adresse' && '[text-wrap:balance]',
          )}
        >
          {value}
        </p>
      </div>
    </li>
  )
}

/**
 * Kontaktband für Druckvorlagen: eingelassenes Band, darin erhabene Symbole —
 * die Schichtung raised → inset → raised des Systems. "Web" entfällt, weil
 * auf Papier der QR-Code die Website übernimmt, und der führt auf die
 * tatsächlich erreichbare Seite.
 */
export function ContactBand({ size = 'sm' }: { size?: Size }) {
  const s = sizes[size]
  const items = contact.filter(({ label }) => label !== 'Web')
  const shortUrl = websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const [host, ...path] = shortUrl.split('/')
  const urlText = (
    <>
      {host}
      <br />/{path.join('/')}
    </>
  )

  return (
    <Surface
      as="footer"
      depth="inset"
      radius="card"
      // Keine Ligaturen bei Kontaktdaten: DM Sans setzt "fi" sonst als ein
      // Zeichen (U+FB01), und wer die Mailadresse aus dem PDF kopiert, bekommt
      // "coreﬁx.de" — eine Adresse, die kein Mailprogramm annimmt.
      className={cn('flex items-center [font-variant-ligatures:none]', s.band)}
    >
      <ul className={s.list}>
        {items.map(({ icon, label, value }) => (
          <Item key={label} icon={icon} label={label} value={value} size={size} />
        ))}
        {size === 'lg' && <Item icon={Globe} label="Website" value={urlText} size={size} />}
      </ul>

      <div className="flex items-center gap-3">
        {size === 'sm' && (
          <div className="text-right">
            <p className={cn('font-display font-bold uppercase tracking-[0.16em] text-muted', s.label)}>
              Website
            </p>
            <p className={cn('leading-snug text-foreground', s.url)}>{urlText}</p>
          </div>
        )}
        <Surface depth="raisedSm" radius="sm" className={s.qrPad}>
          <img src={qrUrl} alt={`QR-Code: ${shortUrl}`} className={cn('block', s.qr)} />
        </Surface>
      </div>
    </Surface>
  )
}
