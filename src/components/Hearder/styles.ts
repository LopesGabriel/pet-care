import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme['black-400']};
  display: flex;
  padding: 0.4rem 2rem;

  h2 {
    color: ${(props) => props.theme['black-400']};
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 0;
    margin: 0 1rem 0 0;
  }

  button {
    margin-left: auto;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: flex-start;

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
    padding: 0 1rem;
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
