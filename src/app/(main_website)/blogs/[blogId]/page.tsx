"use client"

import moment from "moment";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Blocks from 'editorjs-blocks-react-renderer';
import { ChevronLeft } from "react-feather";
import { editorRenderConfig } from "@/utils/editorRenderConfig";

const BlogSinglePage = () => {
  const [blog, setBlog] = useState<BlogModel>({
    _id: "",
    title: "",
    summary: "",
    body: {
      time: 0,
      blocks: [],
      version: ""
    },
    author: {
      name: "",
      link: ""
    },
    tags: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const param = useParams();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/admin/blog/${param.blogId}`);
      const json = await res.json();

      setBlog(json.blogs);
    })()
  }, [])

  return (
    <section className="w-11/12 mx-auto my-5">
      <button className="p-2 border rounded-md" onClick={()=>router.back()}><ChevronLeft /></button>
      <h2>{blog.title}</h2>
      <div className="flex flex-col items-end justify-end gap-1">
        <p className="font-bold">
          By <Link href={blog.author.link} className="text-primary_blue">{blog.author.name}</Link>
        </p>
        <p className="text-gray-500">{moment(blog.createdAt).fromNow()}</p>
      </div>
      <hr className="my-2" />
      <Blocks 
        data={blog.body as any}
        config={editorRenderConfig}
        renderers={{
          simpleImage: ({data}) => {
            return (
              <img alt={data.caption} src={data.url} className="w-full h-auto mb-4" />
            )
          },
          warning: ({data}) => {
            return (
              <div className="p-4 mb-4 text-yellow-800 bg-yellow-100">
                <p className="font-bold">{data.title}</p>
                <p>{data.message}</p>
              </div>
            )
          },
          code: ({data}) => {
            return (
              <pre className="p-4 mb-4 text-white bg-gray-900 rounded-lg">
                <code>{data.code}</code>
              </pre>
            )
          },
        }}
      />
    </section>
  )
}

export default BlogSinglePage