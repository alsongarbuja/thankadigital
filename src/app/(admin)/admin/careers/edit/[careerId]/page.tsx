import FormLayout from "@/app/(admin)/_components/FormLayout";
import AdminInput from "@/app/(admin)/_components/AdminInput";
import AdminSelect from "@/app/(admin)/_components/AdminSelect";

export default function EditCareer() {
  return (
    <div className="p-4 m-4">
      <FormLayout
        url="/api/admin/career"
        modelName="careers"
        method="PATCH"
        param="careerId"
      >
        <AdminInput label="Title" name="title" placeholder="Enter title" />
        <AdminInput label="Salary" name="salary" placeholder="Enter Salary" />
        <AdminInput
          label="Description"
          name="description"
          placeholder="Enter Description"
        />
        <AdminInput
          label="Time"
          name="time"
          placeholder="Enter Time"
          required={false}
        />
        <AdminInput
          label="Experience"
          name="experience"
          placeholder="Enter Experience"
          required={false}
        />
        <AdminSelect
          label="Location"
          name="location"
          options={["Remote", "On-site", "Hybrid"]}
        />
        <AdminSelect
          label="Type"
          name="type"
          options={["Full Time", "Part Time"]}
        />
        {/* skills: string[]; */}
      </FormLayout>
    </div>
  );
}
