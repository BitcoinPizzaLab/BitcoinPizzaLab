import { Global } from '@emotion/react'
import { extendTheme } from '@chakra-ui/react'
import font3d from './assets/fonts/ARCADECLASSIC.ttf';
import ka1 from './assets/fonts/ka1.ttf';


export const theme = extendTheme({
  fonts: {
    body: `'ka1', sans-serif`,
    heading: `'pixel3d', sans-serif`
  },
})

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'pixel3d';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${font3d}) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'ka1';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${ka1}) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
)