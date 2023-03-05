import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  width: '81.0625rem',
  height: '27.471875rem',
  backgroundColor: '$white',
})

export const BackgroundBlue = styled('div', {
  justifyContent: 'space-evenly',
  backgroundColor: '$blue100',
  display: 'flex',
  width: '100%',
  height: '22.79875rem',
  alignItems: 'center',

  img: {
    marginBottom: 'calc(0px - 100px)',
  },
})

export const SearchBar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '35.9375rem',
  height: '11.625rem',
  alignItems: 'center',
  gap: '2rem',

  h1: {
    width: '31.4375rem',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2rem',
    fontWeight: 400,
  },

  div: {
    border: '2px solid $red',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '4.3125rem',
    width: '35.9375rem',
    color: '$blue800',

    span: {
      display: 'flex',
      gap: '0.5rem',

      input: {
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'start',
        fontFamily: 'Inter',
        fontSize: '1rem',
        color: '$blue800',
      },
    },
  },
})
