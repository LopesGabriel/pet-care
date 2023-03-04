import { HeaderContainer, NavContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <h2>Indy Pet Care</h2>
      <NavContainer>
        <ul>
          <li>Serviços</li>
          <li>Clientes</li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  )
}
