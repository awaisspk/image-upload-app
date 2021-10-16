import {createStitches} from '@stitches/react';

const StitchesConfig = createStitches({
  theme: {
    colors: {
      bg: '#fafafb',
      fg: '#ffffff',
      accent: '#f4f9fe',
      typefacePrimary: '#4f4f4f',
      main: '#2f80ed',
    },
    fonts: {
      Inter:
        "Inter, -apple-system, 'BlinkMacSystemFont', 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
    },
  },
  media: {
    bp1: '(min-width : 480px)', // tablets, ipad
    bp2: '(min-width : 768px)', // small screens and laptps
    bp3: '(min-width : 1024px)', // Desktops and Large screens
    bp4: '(min-width : 1200)', // Extra large Screens, TV
  },
});

export const {css, styled, getCssText, globalCss} = StitchesConfig;

export const DarkTheme = StitchesConfig.createTheme({
  colors: {
    bg: '#fafafb',
    fg: '#ffffff',
    accent: '#f4f9fe',
    typefacePrimary: '#000000',
    main: '#2f80ed',
  },
});
