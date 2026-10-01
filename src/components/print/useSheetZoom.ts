import { useEffect } from 'react'

/** A4-Breite in CSS-Pixeln (210 mm bei 96 dpi). */
export const A4_WIDTH_PX = (210 / 25.4) * 96

/**
 * Druckvorlagen behalten auf jedem Bildschirm ihre Geometrie. Ist das Fenster
 * schmaler als die breiteste Vorlage, wird sie als Ganzes verkleinert — ein
 * Umbruch in Spalten würde aus dem Dokument eine andere Seite machen.
 * Gesetzt wird --sheet-zoom; die Vorlagen lesen den Wert per CSS `zoom`.
 */
export function useSheetZoom(widestPx = A4_WIDTH_PX) {
  useEffect(() => {
    const fit = () => {
      const zoom = Math.min(1, (window.innerWidth - 32) / widestPx)
      document.documentElement.style.setProperty('--sheet-zoom', zoom.toFixed(4))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [widestPx])
}
