import { getUserById } from "@/server/controllers/user.controller";
import UserForm from "../../_components/UserForm";

export default async function EditUser({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUserById(params.userId);

  return <UserForm data={user} isEdit={true} />;
}
