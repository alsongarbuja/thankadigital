"use client"

import AdminInput from "@/app/(admin_side)/_components/AdminInput"
import AdminSelect from "@/app/(admin_side)/_components/AdminSelect"
import WysiwygEditor from "@/components/WysiwygEditor"
import { schemaParser } from "@/helpers/schemaParser"
import { useParams, useRouter  } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft } from "react-feather"

const EditBlogPage = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const params = useParams();
  const [blocksData, setBlocksData] = useState({ blocks: [], time: 0, version: "" });

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/admin/blog/${params.blogId}`)
      const json = await res.json();
      
      if(res.status === 200) {
        setBlocksData(json["blogs"]["body"]);
        Object.keys(json["blogs"]).forEach(key => {
          const input = formRef.current?.querySelector(`[name="${key}"]`) as HTMLInputElement;
          if(input) {
            input.value = json["blogs"][key];
          }
        })
      } else {
        console.log(json)
      }
    })()
  }, [])
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let data = Object.fromEntries(formData.entries())
    console.log(data);
    
    data = schemaParser(["title", "summary", "body|", "author:name:link", "tags"], data);

    const res = await fetch(`/api/admin/blog/${params.blogId}`, {
      method: "PATCH",
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
        <h3>Edit Blog</h3>
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

export default EditBlogPage