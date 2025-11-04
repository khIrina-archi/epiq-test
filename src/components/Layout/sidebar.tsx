import { Link } from '@tanstack/react-router'

import { SidebarFooter } from './SidebarFooter'

const nav = [
  { to: '/', label: 'Config' },
  { to: '/table', label: 'Table' },
  { to: '/admin', label: 'Admin' }
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Epiq AI</h1>
        <p>AI Labs — Frontend Demo</p>
      </div>

      <nav className="sidebar-nav">
        {nav.map((item) => (
          <Link key={item.to} to={item.to} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>

      <SidebarFooter />
    </aside>
  )
}

export default Sidebar
