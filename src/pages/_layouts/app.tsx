import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased m-auto">
      <Header />

      <div className="flex flex-1 flex-col pt-6">
        <Outlet />
      </div>
    </div>
  )
}
