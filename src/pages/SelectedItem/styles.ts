import styled from 'styled-components'

const Title = styled.h1`
  small {
    font-size: 1rem;
  }
`

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  h4 {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`

const ServicesList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding-left: 0;
`

export { DataWrapper, Title, ServicesList }
