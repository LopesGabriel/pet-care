import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { auth } from '../../firebase/auth'

function SelectedItemPage(props: any) {
  const { itemId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    console.info('Checking current user')

    if (!auth.currentUser) {
      console.info('User is not authenticated!')
      return navigate('/auth')
    }

    console.info('Current user is', auth.currentUser)
  }, [])

  return (
    <>
      <h1>You&apos;re in Item page for item {itemId}</h1>
    </>
  )
}

export { SelectedItemPage }
