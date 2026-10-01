# CoreFix — Website

One-page-Website für die **CoreFix GmbH** https://waschdachs-git.github.io/WebApp-CoreFix/, inhaltlich auf Basis des Businessplan-Pitchdecks
und umgesetzt im **Neumorphism / Soft-UI**-Designsystem.

Die Seite richtet sich an KMU-Entscheider, die einen IT-Partner suchen — nicht an Leser des
Businessplans. Abschnitte des Decks, die nur Investoren oder Prüfer interessieren, stehen
deshalb bewusst nicht auf der Website (siehe *Inhaltliche Auswahl*).

Dazu gehört ein **einseitiges Unternehmensportfolio (A4)**, das Profil und Angebot auf einem
Blatt verbindet — im selben Design, aus denselben Bausteinen und Inhalten:

- Browser: https://waschdachs-git.github.io/WebApp-CoreFix/portfolio.html
- PDF: https://waschdachs-git.github.io/WebApp-CoreFix/CoreFix-Portfolio.pdf

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
index.html                 Website
portfolio.html             A4-Portfolio (zweiter Vite-Einstiegspunkt)
public/CoreFix-Portfolio.pdf   Exportiertes Portfolio
src/
├─ index.css               Base-Layer: Fokus-Ringe, Scroll-Offset, Silbentrennung
├─ data/content.ts         Inhalte, die Website und Portfolio teilen
├─ data/profile.ts         Nur fürs Portfolio: Steckbrief, Gründer, Vision, Marktzahl
├─ portfolio/              Das A4-Blatt und seine Druckregeln
├─ lib/utils.ts            cn() — clsx + tailwind-merge
├─ components/
│  ├─ ui/                  Primitives: Surface, Button, Card, IconWell,
│  │                       Field/Input/Textarea, Eyebrow, RatingDot
│  ├─ layout/              Container, Section, Header, Footer
│  ├─ decor/               Logo, NestedDepth (Hero-Grafik)
│  └─ sections/            Die zehn Seitenabschnitte
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

## Unternehmensportfolio

Ein A4-Blatt (hoch) für Businessplan, Präsentation und zum Mitgeben. Es zeigt bewusst
*beides*: die Unternehmensangaben, die auf der Website fehlen (Gründung, Rechtsform,
Stammkapital, Geschäftsführung, Vision, eine Marktzahl), und das Kundenangebot
(Vorteile, Leistungen, Pakete, Kontakt).

- **Eine Quelle für alles Geteilte.** Leistungen, Pakete und Kontakt kommen aus
  `content.ts` — ändert sich ein Preis, ändern sich Website und Portfolio gemeinsam.
  Reine Profilangaben liegen in `profile.ts`, damit sie nicht versehentlich auf der
  Website landen.
- **Dieselben Bausteine.** `Surface`, `IconWell`, `Logo` und die Ringe aus dem Hero der
  Website — keine zweite Stilwelt. Das Blatt nutzt eine dichtere Stufe des Systems
  (`raisedSm`, kleinere Innenabstände), weil auf A4 weniger Platz für Schatten ist.
- **QR-Code statt URL zum Abtippen.** Führt auf die Live-Website; Modulfarbe ist die
  Vordergrundfarbe (7,4:1 zur Fläche). Geprüft: dekodiert bei 150 und 300 dpi.
- **Auf dem Bildschirm** wird das Blatt als Ganzes skaliert statt umgebrochen — es
  bleibt dasselbe Dokument, auch auf dem Handy.

### PDF neu erzeugen

Nach jeder Änderung an Inhalten oder Layout muss das PDF neu exportiert werden:

1. `npm run build && npm run preview`, dann `/portfolio.html` in Chrome öffnen
2. Drucken → Ziel *Als PDF speichern*, Papierformat *A4*, Ränder *Keine*,
   *Hintergrundgrafiken* **an**
3. Datei als `public/CoreFix-Portfolio.pdf` speichern

Das PDF im Repo wurde mit den **statischen** Schnitten der beiden Schriften erzeugt, damit
sie als echte TrueType-Schriften eingebettet sind. Aus dem Browser-Druckdialog kommen die
variablen Google-Fonts als Type3-Schriften heraus — optisch identisch, aber manche
Druckereien bemängeln Type3 in der Vorprüfung.

## Inhaltliche Auswahl

Das Pitchdeck und die Website haben verschiedene Leser. Aus dem Deck **nicht übernommen**:

| Deck-Folie | Grund |
|---|---|
| SWOT-Analyse | „Noch keine Referenzen", „begrenzte Kapazität", „Abhängigkeit von wenigen Kunden" — auf einer Verkaufsseite schadet das aktiv. |
| Zielgruppe & Markt | Marktgrößen (99 % / 21 % / 52 %) belegen Investoren die Chance. Der Kunde erfährt daraus nichts über sich. |
| Rechtsform: GmbH | Stammkapital und §§ GmbHG begründen die Wahl der Rechtsform gegenüber Prüfern, nicht gegenüber Kunden. |
| Vision & Ausblick | Wachstums- und Teamziele sind Investorenthemen. NIS-2 war der einzige kundennahe Punkt und steckt jetzt in der IT-Sicherheitsberatung. |
| Foliennummern (01–10) | Kodierten die Deck-Reihenfolge. Auf der Website tragen sie keine Information mehr. |

**Ergänzt**, weil es für die Kaufentscheidung fehlte:

- **So starten wir** — vier Schritte vom Erstgespräch bis zur Übernahme. Die Sorge vor dem
  Umstellungsaufwand ist der häufigste Grund, den IT-Partner nicht zu wechseln.
- **Häufige Fragen** — sechs Einwände vorab beantwortet, u. a. Wechselaufwand, Vertretung im
  Urlaub und ob ein Paket Pflicht ist.
- **Paket-Kurzbeschreibungen** — sagen vor dem Preis, für wen ein Paket gedacht ist.

Das Team steht jetzt als **Rollen ohne Namen** auf der Seite. Die `[Name]`-Platzhalter des Decks
wirkten auf einer Live-Seite unfertig; die Aussage „Sie wissen, wen Sie anrufen" trägt auch ohne
sie. Sobald echte Namen und Fotos vorliegen, gehören sie hierhin.

Nichts davon ist verloren — der vollständige Deck-Inhalt steht in der Git-Historie.

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
- **Fiktive Kontaktdaten.** Adresse (Platinenweg 42, 10245 Berlin) und Telefon sind
  ausgedacht. Die Nummer stammt aus dem Block 030 23125 000–999, den die
  Bundesnetzagentur dauerhaft für fiktive Zwecke reserviert — dort klingelt garantiert bei
  niemandem das Telefon. Vor einem echten Livegang ersetzen, in `src/data/content.ts`.
- **Geschäftsführung** ist im Portfolio mit Natanael und Emil angegeben. Das ist eine
  Annahme für eine GmbH mit zwei Gründern — bei anderer Aufteilung `src/data/profile.ts`
  anpassen.
- **Zahlen in den FAQ-Antworten** stammen aus dem Deck (79 €/Stunde, Leistungsumfang der
  Pakete). Formulierungen zu Erreichbarkeit und Wechselablauf sind bewusst unverbindlich
  gehalten und im Erstgespräch zu konkretisieren — hier steht bewusst keine Zusage, die
  das Unternehmen noch nicht gegeben hat.
