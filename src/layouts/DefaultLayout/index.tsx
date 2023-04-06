import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Hearder'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="container-fluid pt-4">
        <Outlet />
      </div>
    </div>
  )
}
