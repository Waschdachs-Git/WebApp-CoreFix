import { Container } from './Container'
import { Logo } from '@/components/decor/Logo'
import { Surface } from '@/components/ui/Surface'
import { company, footerNote, nav } from '@/data/content'

export function Footer() {
  return (
    <footer className="pb-14 pt-8">
      <Container>
        <Surface depth="raised" radius="card" className="p-8 md:p-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                {company.tagline} {company.subline}.
              </p>
            </div>

            <nav aria-label="Footer-Navigation">
              <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-[44px] items-center rounded-xl text-[15px] text-muted transition-colors duration-300 ease-out hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* An engraved rule, not a border — edges here are made of light. */}
          <div className="mt-10 pt-8 shadow-groove">
            <p className="text-sm text-muted">{footerNote}</p>
          </div>
        </Surface>
      </Container>
    </footer>
  )
}
