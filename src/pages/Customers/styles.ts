import styled from 'styled-components'

export const Pagination = styled.nav`
  ul {
    li {
      a {
        background-color: ${(props) => props.theme.yellow};
        border-color: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme['black-400']};

        &:hover {
          background-color: ${(props) => props.theme.yellow};
          border-color: ${(props) => props.theme.yellow};
          color: ${(props) => props.theme['black-600']};
        }
      }

      &.disabled {
        cursor: not-allowed;

        a {
          background-color: ${(props) => props.theme.yellow};
          border-color: ${(props) => props.theme.yellow};
          color: ${(props) => props.theme['black-400']};
          opacity: 0.5;
        }
      }
    }
  }
`
