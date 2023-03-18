import React, { useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'
import { Button } from '../../components/Button'
import { TextInput } from '../Services/styles'
import { auth } from '../../firebase/auth'
import { AuthWrapper, AuthForm } from './styles'
import { FirebaseError } from 'firebase/app'
import { useNavigate } from 'react-router-dom'

export function Auth() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [userName, setUserName] = useState('')
  const [isSignIn, setSignIn] = useState(true)
  const [isLoading, setLoading] = useState(false)

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (isSignIn) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)

        if (!user.emailVerified) {
          alert('Verifique seu email!')
          return
        }

        navigate('/')
      } catch (err: any) {
        if (err instanceof FirebaseError) {
          if (err.code === 'auth/user-not-found') {
            setSignIn(false)
          }
        }
      } finally {
        setLoading(false)
      }
      return
    }

    await createNewUser()
  }

  const createNewUser = async () => {
    if (password !== passwordConfirm) {
      alert('A senhã não bate com a confirmação.')
      return
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      await updateProfile(user, { displayName: userName })
      await sendEmailVerification(user)
      alert('Verifique seu email')
    } catch (err) {
      console.error(err)
      if (err instanceof FirebaseError) {
        console.error('error code:', err.code)
        if (err.code === 'auth/email-already-in-use') {
          alert('O email informado está em uso')
        }
      }
    } finally {
      setLoading(false)
    }
  }

  function generateCreateAccountInputs() {
    return (
      <>
        <TextInput
          placeholder="Confirme sua senha"
          value={passwordConfirm}
          type="password"
          required={true}
          minLength={6}
          onChange={(e) => setPasswordConfirm(e.target.value)}
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
                text="Entrar"
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
