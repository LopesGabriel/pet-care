import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <h2>Header</h2>
      <Outlet />
    </div>
  )
}
