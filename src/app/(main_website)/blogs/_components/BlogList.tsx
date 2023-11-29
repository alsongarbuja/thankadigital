"use client"

import moment from "moment";
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
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        blogList.length > 0 ? (
          <>
            {
              blogList.map(blog => (
                <Link href={`/blogs/${blog._id}`} key={blog._id}>
                  <div className="p-4 mt-8 border-2 border-gray-300 rounded-md" key={blog._id}>
                    <h4 className="font-semibold">{blog.title}</h4>
                    <span className="font-medium text-primary_blue">{blog.author.name}</span> 
                    <p className="text-sm font-medium">
                      {moment(blog.createdAt).fromNow()}
                    </p>
                    <p className="mt-4 text-justify">{blog.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {
                        blog.tags.map((tag: string, index: number) => (
                          <span className="px-4 py-1 text-white rounded-full bg-primary_blue" key={index}>{tag}</span>
                        ))
                      }
                    </div>
                  </div>
                </Link>
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