import { blogList } from "../../utils/blogs"

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
                <div className="mt-8 p-4 border-b-2 border-gray-300" key={blog.id}>
                  <h4 className="font-semibold text-center">{blog.title}</h4>
                  <p className="font-medium mt-4 text-right">
                    Author: <span className="text-primary_blue">{blog.author}</span> ({blog.date})
                  </p>
                  <p className="text-justify mt-4">{blog.summary}</p>
                  <div className="mt-2 mb-4 flex flex-wrap gap-2">
                    {
                      blog.tags.map((tag, index) => (
                        <span className="text-white bg-primary_blue px-4 py-1 rounded-full" key={index}>{tag}</span>
                      ))
                    }
                  </div>
                  <a href={"#"} className="text-primary_blue underline">Read In Detail</a>
                </div>
              ))
            }
          </>
        ) : (
          <p className="text-gray-500 text-center mt-12">No blogs to read at this moment</p>
        )
      }
    </main>
  )
}

export default BlogPage