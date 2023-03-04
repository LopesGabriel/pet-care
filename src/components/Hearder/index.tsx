import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <h2>Indy Pet Care</h2>
      <NavContainer>
        <NavLink to="/" title="Serviços">
          Serviços
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
