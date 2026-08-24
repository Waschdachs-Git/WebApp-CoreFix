# CoreFix — Website

One-page-Website für die **CoreFix GmbH**, inhaltlich auf Basis des Businessplan-Pitchdecks
(12 Slides) und umgesetzt im **Neumorphism / Soft-UI**-Designsystem.

```bash
npm install
npm run dev      # Dev-Server
npm run build    # Typecheck + Produktions-Build nach dist/
npm run preview  # Produktions-Build lokal ansehen
```

## Stack

| | |
|---|---|
| Build | Vite 6 |
| UI | React 18 + TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| Varianten | `class-variance-authority`, `tailwind-merge` |
| Icons | `lucide-react` |
| Schriften | Plus Jakarta Sans (Display), DM Sans (Fließtext) — via Google Fonts, `display=swap` |

## Architektur

```
src/
├─ index.css               Base-Layer: Fokus-Ringe, Scroll-Offset, Silbentrennung
├─ data/content.ts         Sämtliche Inhalte des Pitchdecks, typisiert
├─ lib/utils.ts            cn() — clsx + tailwind-merge
├─ components/
│  ├─ ui/                  Primitives: Surface, Button, Card, IconWell,
│  │                       Field/Input/Textarea, Eyebrow, RatingDot
│  ├─ layout/              Container, Section, Header, Footer
│  ├─ decor/               Logo, NestedDepth (Hero-Grafik)
│  └─ sections/            Die zwölf Seitenabschnitte
└─ assets/                 CoreFix-Logo (freigestellt aus dem Pitchdeck)
```

Drei Prinzipien tragen die Struktur:

**1. Tokens leben ausschließlich in `tailwind.config.ts`.**
Farben, Radien, Schriften, Keyframes und – am wichtigsten – die sechs Schatten-Rezepte
des Systems sind dort einmal definiert. Komponenten schreiben `shadow-raised` oder
`shadow-inset-deep` statt der langen `box-shadow`-Strings. Die Physik der Oberfläche
lässt sich damit an einer Stelle nachjustieren.

**2. `Surface` ist das einzige Primitive mit Tiefe.**
In Neumorphism liegt nichts *auf* der Seite, alles ist *aus ihr herausgeformt*. Statt
eines Zoos aus Card/Panel/Well/Tile, die jeweils eigene Schatten mitbringen, gibt es
eine polymorphe `Surface`, deren einzige Aufgabe es ist zu sagen, wie weit ein Element
aus der Fläche heraus- oder in sie hineinragt (`raised`, `raisedSm`, `inset`,
`insetDeep`, `insetSm`). Card, IconWell, Eyebrow und RatingDot komponieren sie.

**3. Inhalt ist von Darstellung getrennt.**
`data/content.ts` hält jeden Satz aus dem Pitchdeck. Die Section-Komponenten sind rein
präsentational — Textänderungen fassen kein Layout an.

## Gestalterische Entscheidungen

- **Akzentfarbe ist das CoreFix-Blau `#004592`** (aus dem Logo entnommen) statt des im
  Designsystem vorgeschlagenen Violetts. Alle übrigen Regeln bleiben unverändert:
  monochrome Fläche `#E0E5EC`, doppelte RGBA-Schatten, keine Rahmen, Radien 32/16/12 px.
- **Genestete Tiefe als Hero-Motiv.** Konzentrische Ringe wechseln zwischen extrudiert
  und eingelassen (`raised → insetDeep → raised → inset → raised`) und zeigen die Physik
  des Systems, statt nur ein Logo zu platzieren.
- **Die USP-Tabelle nutzt Material statt Farbfläche.** Die CoreFix-Spalte ist als
  eingelassene Rinne in die Karte gefräst; die Bewertungsstufen sind Vertiefungen mit
  unterschiedlichem Inhalt (erhabener Puck / Ring / versenkter Balken), sodass die Skala
  auch ohne Farbe lesbar bleibt.
- **Trennlinien sind gravierte Rillen** (`shadow-groove`), keine Borders — Neumorphism
  definiert Kanten über Licht und Schatten.
- **Das Empfehlungs-Paket steht physisch näher** an der Betrachterin (`-translate-y-4`
  plus tieferer Schatten) statt einen farbigen Rahmen zu tragen.

## Barrierefreiheit

Geprüft im Browser über alle Breakpoints (320 – 1920 px):

- Kontrast: keine Verstöße. Fließtext ≥ 4.5:1, bedeutungstragende Glyphen ≥ 3:1.
- Touch-Targets: alle interaktiven Elemente ≥ 44 px.
- Sichtbare Fokus-Ringe (2 px Akzent, 2 px Offset in Flächenfarbe) auf allen Bedienelementen.
- Skip-Link als erster Tab-Stop, Escape schließt das Mobile-Menü.
- Semantik: ein `h1`, lückenlose Überschriftenhierarchie, `lang="de"`, Landmarks,
  beschriftete Formularfelder, echte Tabelle mit `scope` und `caption`.
- `prefers-reduced-motion` schaltet Animationen und Smooth-Scrolling ab.

Zwei Werte des Designsystems wurden dabei korrigiert, weil sie ihre eigene
Kontrast-Zusage nicht einhalten:

| Token | Systemvorgabe | Kontrast | Verwendet | Kontrast |
|---|---|---|---|---|
| `muted` | `#6B7280` (als „4.6:1" angegeben) | **3.82:1** ✗ | `#5B6472` | 4.73:1 ✓ |
| `positive` | `#38B2AC` | **2.04:1** ✗ | `#257F7A` | 3.77:1 ✓ |

Das System schreibt selbst „`#6B7280` **oder dunkler**" vor — die Korrektur folgt also
seiner Absicht.

## Offene Punkte

- **Kontaktformular ohne Backend.** Das Formular stellt die Anfrage aktuell im
  E-Mail-Programm der Besucherin zusammen (`mailto:`), statt einen Versand vorzutäuschen.
  Sobald ein Endpunkt existiert, muss nur `handleSubmit` in
  `src/components/sections/Contact.tsx` auf einen `POST` umgestellt werden — das Markup
  bleibt unverändert.
- **Platzhalter aus dem Pitchdeck** sind bewusst übernommen: Teamnamen (`[Name]`),
  Musteradresse und Telefonnummer.
