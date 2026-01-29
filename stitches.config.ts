import { createStitches, keyframes } from '@stitches/react';
import type * as Stitches from '@stitches/react';

// Animation keyframes
export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeUp = keyframes({
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

export const scaleIn = keyframes({
  from: { opacity: 0, transform: 'scale(0.95)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

const stitchesConfig = createStitches({
  theme: {
    colors: {
      // Yukitabi Light Mode Palette
      // Backgrounds
      background: '#FAFAFA', // Snow (雪)
      backgroundSubtle: '#F5F3F0', // Mist (霞)
      backgroundElevated: '#FFFFFF', // Paper (和紙)
      
      // Text
      foreground: '#1A1A1A', // Ink (墨)
      foregroundMuted: '#6B6B6B', // Charcoal (炭)
      foregroundSubtle: '#9B9B9B', // Ash (灰)
      
      // Borders
      border: '#E5E2DE', // Silk (絹)
      borderSubtle: '#E5E2DE',
      
      // Accents
      accent: '#B22222', // Crimson (紅)
      accentHover: '#9A1D1D',
      accentSecondary: '#264653', // Indigo (藍)

      // Utility colors (keeping some for compatibility)
      black: '#1A1A1A',
      white: '#FFFFFF',
      gray: '#6B6B6B',
      blue: '#3A86A8', // Sky
      red: '#CC3333', // Vermilion
      yellow: '#D4740A', // Persimmon
      pink: '#B22222', // Using crimson
      turq: '#4A8FA8', // Indigo Light for contrast
      orange: '#D4740A', // Persimmon
      copy: '#6B6B6B', // Charcoal
      green: '#606C38', // Matcha
      purple: '#264653', // Indigo

      // Semantic colors (Yukitabi system)
      success: '#606C38', // Matcha
      warning: '#D4740A', // Persimmon
      error: '#CC3333', // Vermilion
      info: '#3A86A8', // Sky
    },
    fonts: {
      sans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, "Segoe UI", Roboto, sans-serif',
      display:
        '-apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", "Fira Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '17px', // Apple's default body size
      5: '21px',
      6: '24px',
      7: '28px',
      8: '34px',
      9: '40px',
      10: '48px',
      11: '56px',
      12: '80px',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    letterSpacings: {
      tight: '-0.022em',
      normal: '0',
      wide: '0.012em',
    },
    space: {
      // Yukitabi spacing system (8pt base)
      1: '2px',  // xxs
      2: '4px',  // xs
      3: '8px',  // sm (base unit)
      4: '16px', // md
      5: '24px', // lg
      6: '32px', // xl
      7: '48px', // xxl
      8: '64px', // Extended
      9: '96px', // Section gap
      10: '120px',
      11: '160px',
      12: '200px',
      13: '240px',
      14: '320px',
      15: '400px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
      container: '1120px',
      containerNarrow: '720px',
    },
    lineHeights: {
      1: '1',
      2: '1.1',
      3: '1.25',
      4: '1.4',
      5: '1.47', // Apple's default body line height
      6: '1.6',
    },
    radii: {
      1: '4px',
      2: '8px',  // Small buttons, inputs, chips
      3: '12px', // Cards, standard containers
      4: '16px',
      5: '20px', // Large cards, modal sheets
      6: '28px', // Full-screen sheets (top only)
      round: '9999px', // Circular (avatars, dots)
    },
    shadows: {
      // Minimal shadow usage — prefer border definition over shadows (Yukitabi principle)
      sm: 'none', // No shadow for small elements
      md: '0 1px 3px rgba(0, 0, 0, 0.08)', // Subtle for floating elements
      lg: '0 4px 12px rgba(0, 0, 0, 0.12)', // Medium for modals
      card: 'none', // Cards use borders instead
      cardHover: '0 1px 3px rgba(0, 0, 0, 0.08)', // Very subtle hover
      navbar: '0 1px 0 rgba(0, 0, 0, 0.1)',
    },
    transitions: {
      fast: 'all 0.15s ease',
      normal: 'all 0.3s ease',
      slow: 'all 0.5s ease',
    },
  },
  media: {
    bp1: '(min-width: 575px)',
    bp2: '(min-width: 750px)',
    bp3: '(min-width: 1000px)',
    bp4: '(min-width: 1200px)',
  },
  utils: {
    p:
      () =>
      (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
    pt:
      () =>
      (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
    pr:
      () =>
      (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
    pb:
      () =>
      (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
    pl:
      () =>
      (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
    px:
      () =>
      (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
    py:
      () =>
      (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    m:
      () =>
      (value: Stitches.PropertyValue<'margin'>) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
    mt:
      () =>
      (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
    mr:
      () =>
      (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
    mb:
      () =>
      (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
    ml:
      () =>
      (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
    mx:
      () =>
      (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
    my:
      () =>
      (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
    size:
      () =>
      (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
    bc:
      () =>
      (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
  },
});

export type CSS = Stitches.CSS<typeof stitchesConfig>;

export const {
  css,
  styled,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
  keyframes: stitchesKeyframes,
} = stitchesConfig;

// Re-export keyframes for components that import it
export { keyframes } from '@stitches/react';

// Yukitabi Dark Mode
export const darkTheme = createTheme('dark', {
  colors: {
    // Yukitabi Dark Mode Palette
    // Backgrounds
    background: '#121212', // Night (夜)
    backgroundSubtle: '#2A2A2A', // Deep (深)
    backgroundElevated: '#1E1E1E', // Dark Wood (黒檀)
    
    // Text
    foreground: '#ECECEC', // Moon (月)
    foregroundMuted: '#A0A0A0', // Silver (銀)
    foregroundSubtle: '#6B6B6B', // Charcoal for subtle text
    
    // Borders
    border: '#3A3A3A', // Charcoal borders
    borderSubtle: '#3A3A3A',
    
    // Accents
    accent: '#D4443C', // Crimson Light
    accentHover: '#E04545',
    accentSecondary: '#4A8FA8', // Indigo Light
    
    // Semantic colors (dark versions)
    success: '#7A8C4A', // Matcha dark
    warning: '#E68A1A', // Persimmon dark
    error: '#E04545', // Vermilion dark
    info: '#5AA8CA', // Sky dark
  },
  shadows: {
    // Minimal shadow usage in dark mode too
    sm: 'none',
    md: '0 1px 3px rgba(0, 0, 0, 0.3)', // Slightly stronger for dark mode
    lg: '0 4px 12px rgba(0, 0, 0, 0.4)', // Medium for modals
    card: 'none', // Cards use borders instead
    cardHover: '0 1px 3px rgba(0, 0, 0, 0.3)',
    navbar: '0 1px 0 rgba(255, 255, 255, 0.1)',
  },
});
