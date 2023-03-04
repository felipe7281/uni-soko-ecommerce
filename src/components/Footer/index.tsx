import { Chat, MapPin, Phone } from 'phosphor-react'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <span>
        <p>Online-Shop</p>
        <article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          asperiores ullam excepturi soluta nobis? Saepe necessitatibus ab
          placeat veritatis fugit iure porro quaerat quae sapiente aspernatur
          ipsum nisi, molestiae hic!
        </article>
      </span>
      <div>
        <p>Contact us</p>
        <span>
          <Phone size={22} />
          +255 752 186 174
        </span>
        <span>
          <Chat size={22} />
          lisajocktan@gmail.com
        </span>
        <span>
          <MapPin size={22} />
          Kijitonyama
        </span>
      </div>
      <div>
        <p>About us</p>
        <span>Support</span>
        <span>Privacy & Policy</span>
      </div>
    </FooterContainer>
  )
}
