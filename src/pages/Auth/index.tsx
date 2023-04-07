import { FormEventHandler, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { TextInput } from '../Services/styles'
import { AuthWrapper, AuthForm } from './styles'
import { useAuth } from '../../context/AuthContext'

export function Auth() {
  const navigate = useNavigate()
  const { isSignIn, isLoading, authenticateUser, user } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    if (authenticateUser === undefined) return

    await authenticateUser({
      email,
      event: e,
      password,
      passwordConfirmation,
      userName,
    })
  }

  function generateCreateAccountInputs() {
    return (
      <>
        <TextInput
          placeholder="Confirme sua senha"
          value={passwordConfirmation}
          type="password"
          required={true}
          minLength={6}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <TextInput
          placeholder="Qual o seu nome?"
          value={userName}
          type="text"
          required={true}
          minLength={2}
          onChange={(e) => setUserName(e.target.value)}
        />
      </>
    )
  }

  return (
    <AuthWrapper>
      <div className="container">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 m-auto">
          <AuthForm onSubmit={handleLogin}>
            <h1>Autenticação</h1>
            <div className="form-inputs">
              <TextInput
                placeholder="E-mail"
                type="email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextInput
                placeholder="Senha"
                value={password}
                type="password"
                required={true}
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isSignIn ? generateCreateAccountInputs() : null}
            </div>
            <div className="w-100 d-flex justify-content-end">
              <Button
                text={isSignIn ? 'Entrar' : 'Criar conta'}
                disabled={!email || !password || isLoading}
                disabledText="Preencha as informações"
                isLoading={isLoading}
              />
            </div>
          </AuthForm>
        </div>
      </div>
    </AuthWrapper>
  )
}
