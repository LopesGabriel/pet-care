import styled from 'styled-components'

export const ServiceCardContainer = styled.div`
  background-color: ${(props) => props.theme['black-400']};
  border-radius: 4px;
  display: inline-block;
  padding: 0.5rem 1rem;
  position: relative;

  time {
    font-size: 0.8rem;
  }

  hr {
    width: 75%;
    margin: 1rem auto;
    border: 1px solid ${(props) => props.theme['black-600']};
  }

  div.card-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  div.body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div.section {
      margin-top: 1rem;

      > h4 {
        margin-bottom: 4px;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    ul {
      flex: 1;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
`

export const Badge = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;
  position: absolute;
  top: -15px;
  right: 10px;

  &.novo {
    background-color: ${(props) => props.theme['green-500']};
    border-color: ${(props) => props.theme['green-700']};
    color: ${(props) => props.theme['green-700']};
  }

  &.andamento {
    background-color: ${(props) => props.theme['blue-400']};
    border-color: ${(props) => props.theme['blue-800']};
    color: ${(props) => props.theme['blue-800']};
  }

  &.atrasado {
    background-color: ${(props) => props.theme['red-400']};
    border-color: ${(props) => props.theme['red-800']};
    color: ${(props) => props.theme['red-800']};
  }
`
