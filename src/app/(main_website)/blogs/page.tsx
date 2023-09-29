import { blogList } from "../../../utils/blogs"

const BlogPage = () => {
  return (
    <main className="max-w-[90%] min-h-[50vh] mx-auto">
      <h3>Blogs</h3>
      <p className="font-medium text-gray-500">Read interesting blogs about tech industry</p>
      {
        blogList.length > 0 ? (
          <>
            {
              blogList.map(blog => (
                <div className="p-4 mt-8 border-b-2 border-gray-300" key={blog.id}>
                  <h4 className="font-semibold text-center">{blog.title}</h4>
                  <p className="mt-4 font-medium text-right">
                    Author: <span className="text-primary_blue">{blog.author}</span> ({blog.date})
                  </p>
                  <p className="mt-4 text-justify">{blog.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {
                      blog.tags.map((tag, index) => (
                        <span className="px-4 py-1 text-white rounded-full bg-primary_blue" key={index}>{tag}</span>
                      ))
                    }
                  </div>
                  <a href={"#"} className="underline text-primary_blue">Read In Detail</a>
                </div>
              ))
            }
          </>
        ) : (
          <p className="mt-12 text-center text-gray-500">No blogs to read at this moment</p>
        )
      }
    </main>
  )
}

export default BlogPage