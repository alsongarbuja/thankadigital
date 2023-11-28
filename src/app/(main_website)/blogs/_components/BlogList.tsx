"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogModel[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/admin/blog");
      const json = await res.json();

      setBlogList(json.blogs);
    })()
  }, [])

  return (
    <section>
      {
        blogList.length > 0 ? (
          <>
            {
              blogList.map(blog => (
                <div className="p-4 mt-8 border-b-2 border-gray-300" key={blog._id}>
                  <h4 className="font-semibold text-center">{blog.title}</h4>
                  <p className="mt-4 font-medium text-right">
                    Author: <span className="text-primary_blue">{blog.author.name}</span> ({blog.createdAt.toString()})
                  </p>
                  <p className="mt-4 text-justify">{blog.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {
                      blog.tags.map((tag: string, index: number) => (
                        <span className="px-4 py-1 text-white rounded-full bg-primary_blue" key={index}>{tag}</span>
                      ))
                    }
                  </div>
                  <Link href={`/blogs/${blog._id}`} className="underline text-primary_blue">Read In Detail</Link>
                </div>
              ))
            }
          </>
        ) : (
          <p className="mt-12 text-center text-gray-500">No blogs to read at this moment</p>
        )
      }
    </section>
  )
}

export default BlogList