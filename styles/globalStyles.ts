import {globalCss} from '@StitchesConfig';
import {normalize} from 'stitches-normalize-css';

export const globalStyles = globalCss(...normalize, {
  '@font-face': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400 900',
    fontDisplay: 'optional',
    src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD',
  },
  html: {
    font: '100%/1.25 $fonts$Inter',
    '@bp2': {
      font: '120%/1.45 $fonts$Inter',
    },
    boxSizing: 'border-box',
  },
  body: {
    color: '$typefacePrimary',
    fontFamily: '$Inter',
    backgroundColor: '$bg',
    margin: 0,
    textRendering: 'optimizeLegibility',
  },
  '*': {
    boxSizing: 'inherit',
  },
  '*::after': {
    boxSizing: 'inherit',
  },
  '*::before': {
    boxSizing: 'inherit',
  },
});
