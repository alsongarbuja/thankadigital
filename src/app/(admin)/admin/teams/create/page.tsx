import AdminInput from "@/app/(admin)/_components/AdminInput";
import AdminSelect from "@/app/(admin)/_components/AdminSelect";
import FormLayout from "@/app/(admin)/_components/FormLayout";

export default function TeamCreatePage() {
  return (
    <div className="p-4 m-4">
      <FormLayout url="/api/admin/teams" modelName="Team" method="POST">
        <AdminInput label="Name" name="name" placeholder="Enter name" />
        <AdminInput
          label="Position"
          name="position"
          placeholder="Enter Position"
        />
        <AdminInput
          label="Image Url"
          name="imageUrl"
          placeholder="Enter Image Url"
        />
        <AdminSelect label="Team" name="team" options={["Core", "Members"]} />
      </FormLayout>
    </div>
  );
}
