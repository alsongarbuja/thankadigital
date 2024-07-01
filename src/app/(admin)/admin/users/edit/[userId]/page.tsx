import AdminInput from "@/app/(admin)/_components/AdminInput";
import AdminSelect from "@/app/(admin)/_components/AdminSelect";
import FormLayout from "@/app/(admin)/_components/FormLayout";

export default function EditUser() {
  return (
    <div className="p-4 m-4">
      <FormLayout
        url="/api/admin/user"
        method="PATCH"
        modelName="user"
        param="userId"
      >
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
          required={false}
        />
        <AdminSelect
          label="Role"
          name="role"
          options={["admin", "content-writer", "superadmin"]}
        />
      </FormLayout>
    </div>
  );
}
