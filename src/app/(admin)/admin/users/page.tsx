import { getUsers } from "@/server/controllers/user.controller";
import { ListDataWrapper } from "../_components/ListDataWrapper";
import { deleteUserAction } from "@/server/actions/user.action";

export default async function AdminUsers() {
  const users = await getUsers();

  return (
    <ListDataWrapper
      hasActions
      title="Users"
      cols={[
        { label: "NAME", key: "name" },
        { label: "EMAIL", key: "email" },
        { label: "ROLE", key: "role" },
      ]}
      createText="Add User"
      createUrl="/admin/users/create"
      data={JSON.parse(JSON.stringify(users.users))}
      deleteAction={deleteUserAction}
      editUrl="/admin/users/edit"
    />
  );
}
