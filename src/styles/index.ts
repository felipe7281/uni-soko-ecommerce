import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',

      blue900: '#0F001A',
      blue800: '#004B84',
      blue500: '#004B84',
      blue300: '#4A99D3',

      background: '#E5E5E5',

      red: '#FC0B0D',
    },
  },
})
