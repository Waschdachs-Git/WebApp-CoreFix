import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '@/components/decor/Logo'
import { Surface } from '@/components/ui/Surface'
import { Button, ButtonLink } from '@/components/ui/Button'
import { nav } from '@/data/content'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile sheet on Escape — the menu is a focus trap for keyboard
  // users otherwise.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Blurred clay, not a translucent white bar — the header has to look
          molded from the same material as the page beneath it. */}
      <div className="bg-surface/85 backdrop-blur-md">
        <Container>
          <div className="flex h-20 items-center justify-between gap-4">
            <a href="#top" className="rounded-xl" aria-label="CoreFix — zur Startseite">
              <Logo />
            </a>

            <nav aria-label="Hauptnavigation" className="hidden lg:block">
              <Surface depth="insetSm" radius="full" className="flex items-center gap-1 p-1.5">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex min-h-[44px] items-center rounded-full px-4 text-sm font-medium text-muted',
                      'transition-all duration-300 ease-out',
                      'hover:bg-surface hover:text-foreground hover:shadow-raised-sm',
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </Surface>
            </nav>

            <div className="flex items-center gap-3">
              <ButtonLink href="#kontakt" variant="primary" size="sm" className="hidden sm:inline-flex">
                Beratung anfragen
              </ButtonLink>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {open && (
        <Container>
          <Surface
            as="nav"
            id="mobile-nav"
            aria-label="Mobile Navigation"
            depth="raised"
            radius="card"
            className="mb-4 animate-fade-up p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center rounded-2xl px-4 text-base font-medium text-foreground transition-all duration-300 ease-out active:shadow-inset-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <ButtonLink
                  href="#kontakt"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Beratung anfragen
                </ButtonLink>
              </li>
            </ul>
          </Surface>
        </Container>
      )}
    </header>
  )
}
