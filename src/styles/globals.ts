import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: '$background',
    '-webkit-font-smoothing': 'antialiased',
  },
})
