import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  html: {
    colorScheme: 'light dark',
    scrollBehavior: 'smooth',
  },

  body: {
    backgroundColor: '$background',
    color: '$foreground',
    fontFamily: '$sans',
    fontSize: '$4',
    lineHeight: '$5',
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    
    // Yukitabi principle: generous whitespace for ma (間)
    overflow: 'hidden auto',
  },

  ul: {
    paddingLeft: '$5',
    margin: 0,
  },

  figure: { 
    margin: 0,
    display: 'block',
  },

  'pre, code': { 
    margin: 0, 
    fontFamily: '$mono',
    fontSize: '0.9em',
    backgroundColor: '$backgroundSubtle',
    padding: '2px 4px',
    borderRadius: '$2',
  },

  pre: {
    padding: '$4',
    borderRadius: '$3',
    overflow: 'auto',
    border: '1px solid $border',
  },

  'pre code': {
    backgroundColor: 'transparent',
    padding: 0,
  },

  svg: { 
    display: 'inline-block', 
    verticalAlign: 'middle',
  },

  a: {
    color: '$accent',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '$accentHover',
    },
    '&:focus': {
      outline: '2px solid $accent',
      outlineOffset: '2px',
    },
  },

  // Yukitabi typography: clean, readable hierarchy
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$display',
    fontWeight: '$semibold',
    letterSpacing: '$tight',
    color: '$foreground',
    margin: 0,
    lineHeight: 1.2,
  },

  // More generous line spacing for readability (Yukitabi philosophy)
  p: {
    margin: 0,
    lineHeight: 1.7,
    '& + p': {
      marginTop: '$4',
    },
  },

  // Clean list styling
  'ul, ol': {
    '& li': {
      marginBottom: '$2',
      lineHeight: 1.7,
    },
  },

  blockquote: {
    margin: '$6 0',
    paddingLeft: '$4',
    borderLeft: '3px solid $accent',
    fontStyle: 'italic',
    color: '$foregroundMuted',
  },

  hr: {
    border: 'none',
    height: '1px',
    backgroundColor: '$border',
    margin: '$6 0',
  },

  '::selection': {
    backgroundColor: '$accent',
    color: '$white',
  },

  // Improve focus indicators for accessibility
  '*:focus': {
    outline: 'none',
  },
  
  '*:focus-visible': {
    outline: '2px solid $accent',
    outlineOffset: '2px',
  },
});
