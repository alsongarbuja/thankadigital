import Link from "next/link";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { getUsers } from "@/server/controllers/user.controller";
import ActionTd from "../../_components/ActionTd";

export default async function AdminUsers() {
  const users = await getUsers();

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3>Users</h3>
        <Link
          href="/admin/users/create"
          className="px-4 py-2 text-white rounded-md bg-primary_red"
        >
          Add User
        </Link>
      </div>
      <CustomTable cols={["NAME", "EMAIL", "ROLE"]}>
        {users.users.map((user, index) => (
          <tr key={index} className="border-b-2 border-gray-700">
            <td className="h-12 text-left">{user.name}</td>
            <td className="h-12 text-left">{user.email}</td>
            <td className="h-12 text-left">{user.role}</td>
            <ActionTd
              editUrl={`/admin/users/edit/${user.id}`}
              deleteUrl={`/api/admin/user/${user.id}`}
            />
          </tr>
        ))}
      </CustomTable>
    </>
  );
}
