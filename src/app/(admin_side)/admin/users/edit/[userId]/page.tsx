import AdminInput from '@/app/(admin_side)/_components/AdminInput'
import AdminSelect from '@/app/(admin_side)/_components/AdminSelect'
import FormLayout from '@/app/(admin_side)/_components/FormLayout'
import React from 'react'

const EditUser = () => {
  return (
    <div className="p-4 m-4">
      <FormLayout url="/api/admin/user" method="PATCH" modelName="user" param="userId">
        <AdminInput label="Name" name="name" placeholder="Enter name" />
        <AdminInput label="Email" name="email" type="email" placeholder="Enter Email" />
        <AdminInput label="Password" name="password" type="password" placeholder="Enter Password" required={false} />
        <AdminSelect label="Role" name="role" options={["admin", "content-writer", "superadmin"]} />
      </FormLayout>
    </div>
  )
}

export default EditUser