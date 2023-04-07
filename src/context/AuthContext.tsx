import {
  createContext,
  useState,
  FormEvent,
  useEffect,
  useContext,
  ReactNode,
} from 'react'
import {
  User,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import { auth } from '../firebase/auth'
import { FirebaseError } from 'firebase/app'

interface ICreateNewUserArgs {
  password: string
  passwordConfirmation: string
  email: string
  userName: string
}

interface IAuthenticateUserArgs {
  event: FormEvent<HTMLFormElement>
  email: string
  password: string
  passwordConfirmation?: string
  userName?: string
}

interface IAuthContextType {
  user: User | null
  isLoading: boolean
  isSignIn: boolean
  fulfilled: boolean
  authenticateUser?: (data: IAuthenticateUserArgs) => Promise<void>
  logOut?: () => Promise<void>
}

const UserContext = createContext<IAuthContextType>({
  user: null,
  isLoading: false,
  isSignIn: true,
  fulfilled: false,
})

interface IProps {
  // eslint-disable-next-line no-undef
  children: ReactNode
}

const AuthContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isSignIn, setSignIn] = useState(true)
  const [isLoading, setLoading] = useState(false)
  const [fulfilled, setFulfilled] = useState(false)

  const createNewUser = async ({
    password,
    passwordConfirmation,
    email,
    userName,
  }: ICreateNewUserArgs) => {
    if (password !== passwordConfirmation) {
      alert('A senha não bate com a confirmação.')
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

  const authenticateUser = async ({
    email,
    event,
    password,
    passwordConfirmation,
    userName,
  }: IAuthenticateUserArgs) => {
    event.preventDefault()
    setLoading(true)

    if (isSignIn) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)

        if (!user.emailVerified) {
          alert('Verifique seu email!')
          return
        }
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

    await createNewUser({
      email,
      password,
      passwordConfirmation: passwordConfirmation!,
      userName: userName!,
    })
  }

  const logOut = async () => {
    try {
      setLoading(true)
      await signOut(auth)
    } catch (err) {
      console.error(err)
      alert('Não foi possível desconectar')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('On Auth State Change', currentUser)
      setUser(currentUser)
      setFulfilled(true)
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UserContext.Provider
      value={{ user, isLoading, authenticateUser, isSignIn, fulfilled, logOut }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { AuthContextProvider, useAuth }
