import { PlusCircle, User } from 'phosphor-react'
import {
  HeaderContainer,
  RegisterAndSellContainer,
  TitleContainer,
} from './styles'

export function Header() {
  const textTitle = 'Uni-soko'

  return (
    <HeaderContainer>
      <TitleContainer>{textTitle}</TitleContainer>
      <RegisterAndSellContainer>
        <button>
          <User size={44} weight="fill" />
          Register/Login
        </button>
        <button>
          <PlusCircle size={44} weight="fill" color="red" />
          Sell
        </button>
      </RegisterAndSellContainer>
    </HeaderContainer>
  )
}
