import FormLayout from '@/app/(admin_side)/_components/FormLayout'
import AdminInput from '@/app/(admin_side)/_components/AdminInput'
import AdminSelect from '@/app/(admin_side)/_components/AdminSelect'
import WysiwygEditor from '@/components/WysiwygEditor'

const CreateBlog = () => {
  return (
    <div className="p-4 m-4">
      <FormLayout url="/api/admin/blog" method="POST" schema={["title", "summary", "body|", "author:name:link", "tags"]}>
        <div className="w-full h-full">
          <AdminInput name="title" placeholder="Enter title" />
          <AdminInput name="summary" placeholder="Enter Summary" />
          <AdminSelect name="tags" options={["software", "security"]} />
          <div className="flex gap-2 mb-4 w-fit">
            <AdminInput name="name" placeholder="Enter Author name" />
            <AdminInput name="link" placeholder="Enter Author link" />
          </div>
          <hr className="mb-2" />
          <h3 className="mb-2">Body</h3>
          <WysiwygEditor value={{ blocks: [] }} />
        </div>
      </FormLayout>
    </div>
  )
}

export default CreateBlog