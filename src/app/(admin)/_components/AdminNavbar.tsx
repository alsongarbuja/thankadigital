import AdminNavUserName from "./AdminNavUserName"

const AdminNavbar = () => {
  return (
    <header className="py-4 mb-4 shadow-md">
      <nav className="flex items-center justify-between px-4 py-2">
        <p>Welcome</p>
        <AdminNavUserName />
      </nav>
    </header>
  )
}

export default AdminNavbar