import FormLayout from "@/app/(admin)/_components/FormLayout";
import AdminInput from "@/app/(admin)/_components/AdminInput";
import AdminSelect from "@/app/(admin)/_components/AdminSelect";

export default function CreateUser() {
  return (
    <div className="p-4 m-4">
      <FormLayout url="/api/admin/register" method="POST" modelName="User">
        <AdminInput label="Name" name="name" placeholder="Enter name" />
        <AdminInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <AdminInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
        />
        <AdminSelect
          label="Role"
          name="role"
          options={["admin", "content-writer"]}
        />
      </FormLayout>
    </div>
  );
}
