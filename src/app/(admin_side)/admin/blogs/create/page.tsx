"use client"

import AdminInput from "@/app/(admin_side)/_components/AdminInput"
import AdminSelect from "@/app/(admin_side)/_components/AdminSelect"
import WysiwygEditor from "@/components/WysiwygEditor"
import { dataToSchemaParser } from "@/helpers/schemaParser"
import { useRouter  } from "next/navigation"
import { useRef, useState } from "react"
import { ChevronLeft } from "react-feather"

const CreateBlogPage = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [blocksData] = useState<EditorBlockValue>({ blocks: [], time: 0, version: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    let data = Object.fromEntries(formData.entries())

    data = dataToSchemaParser(["title", "summary", "body|", "author:name:link", "tags"], data);

    const res = await fetch(`/api/admin/blog`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    const json = await res.json();

    if(res.status === 200 || res.status === 201) {
      console.log(json);
    } else {
      console.log(json)
    }
  }

  return (
    <div className="p-4 m-4">
      <div className="flex gap-4">
        <button className='p-2 border-2 rounded-md w-fit' type="button" onClick={()=>router.back()}><ChevronLeft /></button>
        <h3>Create Blog</h3>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
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
          <WysiwygEditor value={blocksData} />
          <button type="submit" className="w-full px-4 py-2 mt-4 text-white rounded-md bg-primary_red">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlogPage