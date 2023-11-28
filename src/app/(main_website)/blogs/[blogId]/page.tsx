"use client"

import moment from "moment";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Blocks from 'editorjs-blocks-react-renderer';
import { ChevronLeft } from "react-feather";

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
      <Blocks data={blog.body as any} />
    </section>
  )
}

export default BlogSinglePage