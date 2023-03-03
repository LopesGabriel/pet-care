import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Auth } from './pages/Auth'
import { Services } from './pages/Services'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Services />} />
      </Route>

      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}
