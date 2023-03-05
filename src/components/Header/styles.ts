import { styled } from '../../styles'

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '7.75rem',
  marginTop: '1.875rem',
  position: 'sticky',
  top: '0',
  backgroundColor: '$white',
})

export const TitleContainer = styled('span', {
  fontFamily: 'Poppins',
  fontSize: '2.5rem',
  color: '$blue300',
  fontWeight: 'bold',
  cursor: 'pointer',
})

export const RegisterAndSellContainer = styled('span', {
  display: 'flex',
  gap: '5.25rem',

  button: {
    gap: '0.5rem',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontSize: '1.125rem',
    color: '$blue900',
  },
})
