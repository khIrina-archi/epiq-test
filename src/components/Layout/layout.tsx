import { Outlet } from '@tanstack/react-router'
import Sidebar from './sidebar'

export const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
