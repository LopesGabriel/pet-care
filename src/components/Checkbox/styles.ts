import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 0 0.5rem 0.5rem 0;
  flex-shrink: 1;

  input {
    cursor: pointer;
  }

  label {
    color: ${(props) => props.theme.white};
    cursor: pointer;
    padding-left: 0.5rem;
  }
`
