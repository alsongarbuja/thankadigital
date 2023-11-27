import Link from "next/link"
import CustomTable from "@/app/(admin_side)/_components/CustomTable"

const AdminUsers = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3>Users</h3>
        <Link href="/admin/users/create" className="px-4 py-2 text-white rounded-md bg-primary_red">Add User</Link>
      </div>
      <CustomTable url="/api/admin/user" keys={["name", "email", "role"]} pathUrl="users" />
    </>
  )
}

export default AdminUsers