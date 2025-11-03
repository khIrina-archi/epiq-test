import { Link } from '@tanstack/react-router'

export const Sidebar = () => {
  return (
    <aside className="w-48 bg-gray-800 text-white flex flex-col p-4 space-y-4">
      {' '}
      <Link to="/" className="[&.active]:font-bold hover:text-gray-300">
        Config
      </Link>{' '}
      <Link to="/table" className="[&.active]:font-bold hover:text-gray-300">
        Table
      </Link>{' '}
      <Link to="/admin" className="[&.active]:font-bold hover:text-gray-300">
        Admin
      </Link>{' '}
    </aside>
  )
}

export default Sidebar
