import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavContainer, NavbarHeading } from './styles'
import { useAuth } from '../../context/AuthContext'

export function Header() {
  const { logOut } = useAuth()

  return (
    <HeaderContainer className="navbar">
      <div className="container-fluid">
        <NavbarHeading>Pet Care</NavbarHeading>

        <NavContainer>
          <NavLink to="/" title="Serviços">
            Serviços
          </NavLink>
        </NavContainer>

        <button className="btn btn-danger" onClick={() => logOut!()}>
          Sair
        </button>
      </div>
    </HeaderContainer>
  )
}
