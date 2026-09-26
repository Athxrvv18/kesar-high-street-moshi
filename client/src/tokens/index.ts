/**
 * Kesar High Street - Design Tokens
 * 
 * Global visual foundation for all components.
 * Direction: Premium Indian Real Estate (Architectural, Restrained, Trustworthy).
 */

export const tokens = {
  // 1. Colors
  colors: {
    forest: {
      50: '#F2F7F5',
      100: '#E2ECE8',
      200: '#C5D9D2',
      300: '#9DBFB4',
      400: '#6E9F91',
      500: '#4D8274',
      600: '#3C6B5E',
      700: '#30554B',
      800: '#223E37',
      900: '#0E241E', // Flagship deep forest
      950: '#091814', // Ultra deep architectural anchor
      DEFAULT: '#0E241E',
    },
    champagne: {
      50: '#FAF7F3',
      100: '#F5EFE7',
      200: '#ECDFCE',
      300: '#DFCBB0',
      400: '#D1B892',
      500: '#C2A374', // Flagship muted gold/champagne
      600: '#A88959',
      700: '#876D44',
      800: '#6E5837',
      900: '#58462D',
      950: '#2D2315',
      DEFAULT: '#C2A374',
    },
    ivory: {
      DEFAULT: '#FBF9F5', // Editorial canvas
      warm: '#F5F1E8',
      surface: '#FFFFFF',
      border: '#E8E1D5',
      borderSubtle: '#F0ECE4',
    },
    charcoal: {
      DEFAULT: '#181C1B', // High-contrast text
      muted: '#525B58',   // Secondary labels
      light: '#828B88',   // Captions & hints
      dark: '#0D0F0E',    // Darkest ink
    },
    accent: {
      success: '#2E7D32',
      info: '#1565C0',
      warning: '#ED6C02',
    },
  },

  // 2. Typography
  typography: {
    fontDisplay: '"Cinzel", "Cormorant Garamond", Georgia, serif',
    fontSerif: '"Cormorant Garamond", Georgia, serif',
    fontSans: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },

  // 3. Font Sizes (with recommended line-heights)
  fontSizes: {
    xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],       // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],   // 14px
    base: ['1rem', { lineHeight: '1.625rem', letterSpacing: '0' }],         // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],  // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],   // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],    // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.625rem', letterSpacing: '-0.025em' }], // 36px
    '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],      // 48px
    '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],   // 60px
    '7xl': ['4.5rem', { lineHeight: '1.08', letterSpacing: '-0.04em' }],    // 72px
  },

  // 4. Font Weights
  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // 5. Line Heights
  lineHeights: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '1.8',
  },

  // 6. Letter Spacing
  letterSpacing: {
    tighter: '-0.03em',
    tight: '-0.015em',
    normal: '0',
    wide: '0.04em',
    wider: '0.1em',
    widest: '0.18em',
    grand: '0.25em',
  },

  // 7. Spacing Scale (in rem)
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    'section-sm': '3.5rem',
    'section-md': '5rem',
    'section-lg': '7rem',
    'section-xl': '9rem',
  },

  // 8. Border Radius (Architectural & Restrained)
  borderRadius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '10px',
    xl: '14px',
    full: '9999px',
  },

  // 9. Shadows (Subtle, warm champagne & forest tones)
  shadows: {
    'luxury-sm': '0 1px 3px rgba(14, 36, 30, 0.05), 0 0 0 1px rgba(194, 163, 116, 0.15)',
    'luxury': '0 8px 24px -6px rgba(14, 36, 30, 0.08), 0 0 0 1px rgba(194, 163, 116, 0.2)',
    'luxury-hover': '0 16px 36px -8px rgba(14, 36, 30, 0.14), 0 0 0 1px rgba(194, 163, 116, 0.35)',
    'luxury-elevated': '0 24px 50px -12px rgba(14, 36, 30, 0.22), 0 0 0 1px rgba(194, 163, 116, 0.4)',
    'luxury-inner': 'inset 0 1px 2px rgba(14, 36, 30, 0.08)',
  },

  // 10. Container Widths
  containerWidths: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },

  // 11. Responsive Breakpoints
  breakpoints: {
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },

  // 12. Z-Index Layers
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    header: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
  },

  // 13. Transitions
  transitions: {
    fast: '150ms cubic-bezier(0.22, 1, 0.36, 1)',
    normal: '250ms cubic-bezier(0.22, 1, 0.36, 1)',
    slow: '400ms cubic-bezier(0.22, 1, 0.36, 1)',
  },

  // 14. Animation Timing & Easing
  easings: {
    luxury: [0.22, 1, 0.36, 1],
    smooth: [0.4, 0, 0.2, 1],
  },
} as const;

export type DesignTokens = typeof tokens;
