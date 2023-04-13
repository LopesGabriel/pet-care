import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme['black-400']};
  padding: 0;

  button {
    margin-left: auto;
  }
`

export const NavbarHeading = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Roboto Mono' monospace;
  color: ${(props) => props.theme['black-600']};
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: flex-start;

  margin-left: 1rem;

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }

  a {
    align-items: center;
    /* border-left: 1px solid ${(props) => props.theme['black-400']}; */
    border-bottom: 2px solid transparent;
    color: ${(props) => props.theme['black-400']};
    display: flex;
    font-size: 1.2rem;
    height: 100%;
    justify-content: center;
    margin: 0;
    padding: 1rem;
    transition: all 0.4s ease;
    text-decoration: none;
    opacity: 0.8;

    &.active {
      font-weight: 500;
      border-bottom: 2px solid ${(props) => props.theme['black-400']};
      opacity: 1;
    }

    &:hover {
      color: ${(props) => props.theme['black-500']};
      border-bottom: 2px solid ${(props) => props.theme['black-500']};
      opacity: 1;
    }
  }
`
