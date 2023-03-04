import { styled } from '@/styles'

export const FooterContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  paddingLeft: '4.375rem',
  paddingRight: '6.875rem',
  paddingTop: '3.75rem',
  backgroundColor: '$blue100',
  width: '90rem',
  height: '25.25rem',
  gap: '11.1875rem',

  span: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.875rem',

    p: {
      color: '$blue900',
      fontSize: '3rem',
      fontFamily: 'Inter',
      fontWeight: 400,
    },

    article: {
      width: '38.125rem',
      height: '6.875rem',
      color: '#504A41',
      fontSize: '1.125rem',
      fontFamily: 'Montserrat',
    },
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    span: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: '1.125rem',
      fontFamily: 'Montserrat',
      fontWeight: 400,
      gap: '1rem',
    },

    p: {
      color: '$blue900',
      fontSize: '1.5rem',
      fontFamily: 'Montserrat',
      fontWeight: 500,
    },
  },
})
