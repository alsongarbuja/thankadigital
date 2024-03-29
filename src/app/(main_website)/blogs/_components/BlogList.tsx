import moment from "moment";
import Link from "next/link";

import { getBlogs } from "@/server/controllers/blog.controller";

const BlogList = async () => {
  const blogList: BlogModel[] = await getBlogs();

  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        blogList.length > 0 ? (
          <>
            {
              blogList.map(blog => (
                <Link href={`/blogs/${blog._id}`} key={blog._id}>
                  <div className="p-4 mt-8 border-b-2 border-gray-300" key={blog._id}>
                    <h6 className="font-semibold">{blog.title}</h6>
                    <span className="font-medium text-primary_blue">{blog.author.name}</span> 
                    <p className="text-sm font-medium">
                      {moment(blog.createdAt).fromNow()}
                    </p>
                    <p className="mt-4 text-justify">{blog.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {
                        blog.tags.map((tag: string, index: number) => (
                          <span className="inline-block text-base font-semibold text-primary_blue" key={index}>#{tag}</span>
                        ))
                      }
                    </div>
                  </div>
                </Link>
              ))
            }
          </>
        ) : (
          <p className="col-span-4 mt-12 font-medium text-center text-gray-600">No blogs to read at this moment</p>
        )
      }
    </section>
  )
}

export default BlogList