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
`

export const NavContainer = styled.nav`
  ul {
    align-items: center;
    display: flex;
    height: 100%;
    list-style: none;
    justify-content: flex-start;

    li {
      align-items: center;
      border-left: 1px solid ${(props) => props.theme['black-400']};
      display: flex;
      font-size: 1.2rem;
      justify-content: center;
      height: 100%;
      margin: 0;
      padding: 0 1rem;

      a {
        height: 100%;
      }
    }
  }
`
