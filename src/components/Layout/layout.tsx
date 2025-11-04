import { Outlet } from '@tanstack/react-router'
import Sidebar from './Sidebar'

export function Layout() {
  return (
    <div className="layout-root">
      <Sidebar />
      <div className="layout-main">
        <header className="topbar">Epiq AI Dashboard</header>
        <main className="layout-content container">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
