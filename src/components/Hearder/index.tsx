import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavContainer } from './styles'
import { useAuth } from '../../context/AuthContext'

export function Header() {
  const { logOut } = useAuth()

  return (
    <HeaderContainer>
      <h2 className="d-none d-md-block">Indy Pet Care</h2>
      <NavContainer>
        <NavLink to="/" title="Serviços">
          Serviços
        </NavLink>
      </NavContainer>
      <button className="btn btn-danger" onClick={() => logOut!()}>
        Desconectar
      </button>
    </HeaderContainer>
  )
}
