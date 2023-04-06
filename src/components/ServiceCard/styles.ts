import styled from 'styled-components'

export const ServiceCardContainer = styled.div`
  background-color: ${(props) => props.theme['black-400']};
  border-radius: 4px;
  display: block;
  padding: 0.5rem 1rem;
  position: relative;
  height: 100%;

  time {
    font-size: 0.8rem;
  }

  h4 {
    max-width: 180px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  hr {
    width: 75%;
    margin: 1rem auto;
    border: 1px solid ${(props) => props.theme['black-600']};
    opacity: 90%;
  }

  div.card-header {
    align-items: center;
    display: flex;
    justify-content: space-between;

    h5 {
      max-width: 180px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  div.body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ul {
      flex: 1;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 0 0 0 0.5rem;
      margin: 0;
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

  i {
    padding: 5px;
    border-radius: 50%;
    color: ${(props) => props.theme['red-800']};
    line-height: 0.4;
    border: 1px solid ${(props) => props.theme['red-800']};
    font-style: unset;
    font-weight: bold;
    background-color: ${(props) => props.theme['red-400']};
    position: absolute;
    top: -6px;
    right: -8px;
  }

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
