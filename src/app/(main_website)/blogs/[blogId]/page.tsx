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
// import { editorRenderConfig } from "@/utils/editorRenderConfig";
// // import { Metadata } from "next";
// import { getBlog } from "@/server/controllers/blog.controller";

// export async function generateMetadata({ params }: { params: { blogId: string } }): Promise<Metadata> {
//   const blog = await getBlog(params.blogId);
//   return {
//     title: blog.title,
//     description: blog.summary,
//     authors: [blog.author.name],
//     metadataBase: new URL(`https://thankadigital.com/blogs/${blog._id}`),
//     openGraph: {
//       type: 'website',
//       title: blog.title,
//       description: blog.summary,
//       images: blog.body.blocks
//         .filter((block: { type: string; }) => block.type === 'simpleImage')
//         .map((block: { data: { url: string; caption: string; }; }) => ({
//           url: block.data.url,
//           width: 800,
//           height: 600,
//           alt: block.data.caption,
//         })),
//       site_name: 'Thanka Digital',
//     },
//   } as Metadata
// }

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