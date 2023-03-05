import Image from 'next/image'
import { BackgroundBlue, Container, SearchBar } from './styles'
import searchImage from '../../assets/person-and-bags.png'
import { Faders, MagnifyingGlass } from 'phosphor-react'

export function SearchContainer() {
  return (
    <Container>
      <BackgroundBlue>
        <SearchBar>
          <h1>Buy & Sell anything in your University Campus</h1>
          <div>
            <span>
              <MagnifyingGlass size={32} />
              <input type="search" placeholder="Search for any product" />
            </span>
            <Faders size={32} weight="fill" />
          </div>
        </SearchBar>

        <Image src={searchImage} alt="" />
      </BackgroundBlue>
    </Container>
  )
}
