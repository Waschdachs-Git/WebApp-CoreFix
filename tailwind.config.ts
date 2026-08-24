import type { Config } from 'tailwindcss'

/**
 * Neumorphism (Soft UI) design tokens.
 *
 * Every value the design system defines lives here exactly once. Components
 * consume semantic utilities (`shadow-raised`, `bg-surface`, `rounded-card`)
 * and never hand-write the shadow strings — that keeps the "physics" of the
 * system consistent and tweakable from a single file.
 */

/** Bottom-right shadow: a cool blue-grey that matches the surface tone. */
const dark = (a: number) => `rgba(163, 177, 198, ${a})`
/** Top-left light source: pure white with alpha for smooth blending. */
const light = (a: number) => `rgba(255, 255, 255, ${a})`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* The single base "cool clay" surface everything is molded from. */
        surface: '#E0E5EC',
        foreground: '#3D4852', // 7.4:1 on surface — WCAG AAA
        // The design system specifies #6B7280 here and calls it 4.6:1, but it
        // actually measures 3.82:1 on #E0E5EC and fails AA for body text. Its
        // own rule says "#6B7280 or darker", so this is the nearest darker
        // cool grey that clears 4.5:1 while still reading as secondary.
        muted: '#5B6472', //      4.7:1 on surface — WCAG AA
        placeholder: '#A0AEC0', // decorative only; every field has a real label
        accent: {
          DEFAULT: '#004592', // CoreFix corporate blue
          light: '#0065D6', //   gradients + hover
          foreground: '#F2F6FB', // text on accent fills
        },
        // Darkened from the system's #38B2AC (2.0:1) to clear the 3:1
        // non-text contrast floor, since these glyphs carry meaning.
        positive: '#257F7A', // 3.8:1 on surface — checkmarks, success states
      },

      borderRadius: {
        card: '32px', // containers
        // rounded-2xl (16px) = buttons, rounded-xl (12px) = inner elements
      },

      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        /* Extruded — element pushed out of the surface. */
        raised: `9px 9px 16px ${dark(0.6)}, -9px -9px 16px ${light(0.5)}`,
        'raised-hover': `12px 12px 20px ${dark(0.7)}, -12px -12px 20px ${light(0.6)}`,
        'raised-sm': `5px 5px 10px ${dark(0.6)}, -5px -5px 10px ${light(0.5)}`,

        /* Inset — element pressed into the surface. */
        inset: `inset 6px 6px 10px ${dark(0.6)}, inset -6px -6px 10px ${light(0.5)}`,
        'inset-deep': `inset 10px 10px 20px ${dark(0.7)}, inset -10px -10px 20px ${light(0.6)}`,
        'inset-sm': `inset 3px 3px 6px ${dark(0.6)}, inset -3px -3px 6px ${light(0.5)}`,

        /* An engraved hairline: the only legal way to separate rows, since
           neumorphism defines every edge with light and shadow, never a
           border. Drawn on the top edge of an element. */
        groove: `inset 0 1px 0 ${dark(0.5)}, inset 0 2px 0 ${light(0.55)}`,

        /* Pressed state for accent-filled surfaces, where the grey shadow
           colours would read as dirt. Tuned to work on top of colour. */
        'inset-accent':
          'inset 4px 4px 8px rgba(0, 22, 46, 0.55), inset -4px -4px 8px rgba(255, 255, 255, 0.22)',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-up': 'fade-up 500ms ease-out both',
      },

      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
} satisfies Config
