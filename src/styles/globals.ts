import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: '$background',
    color: '$blue900',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '-webkit-font-smoothing': 'antialiased',
  },
})
