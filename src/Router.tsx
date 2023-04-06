import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Auth } from './pages/Auth'
import { SelectedItemPage } from './pages/SelectedItem'
import { Services } from './pages/Services'
import { useAuth } from './context/AuthContext'
import { Loading } from './pages/Loading'

export function Router() {
  const { fulfilled } = useAuth()

  if (!fulfilled) {
    return <Loading />
  }

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Services />} />
        <Route path="/:itemId" element={<SelectedItemPage />} />
      </Route>

      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}
