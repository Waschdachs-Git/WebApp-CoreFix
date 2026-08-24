import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Pitch } from '@/components/sections/Pitch'
import { Problem } from '@/components/sections/Problem'
import { Services } from '@/components/sections/Services'
import { Usp } from '@/components/sections/Usp'
import { Team } from '@/components/sections/Team'
import { Process } from '@/components/sections/Process'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { Surface } from '@/components/ui/Surface'

export default function App() {
  return (
    <>
      {/* Keyboard users land here first: a raised chip that stays hidden until
          focused, then sits above the sticky header. */}
      <Surface
        as="a"
        href="#hauptinhalt"
        depth="raised"
        radius="md"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:text-foreground"
      >
        Zum Inhalt springen
      </Surface>

      <Header />

      {/* Reihenfolge folgt der Kaufentscheidung: Aufhänger, Einordnung, das
          eigene Problem wiedererkennen, Angebot, Abgrenzung, Vertrauen,
          Ablauf, Preis, letzte Einwände, Kontakt. */}
      <main id="hauptinhalt">
        <Hero />
        <Pitch />
        <Problem />
        <Services />
        <Usp />
        <Team />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
