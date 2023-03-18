import styled from 'styled-components'

const AuthWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
`

const AuthForm = styled.form`
  align-items: center;
  background-color: ${(props) => props.theme['black-500']};
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 2rem;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme.yellow};
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`

export { AuthWrapper, AuthForm }
