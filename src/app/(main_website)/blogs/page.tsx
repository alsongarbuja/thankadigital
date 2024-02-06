import BlogList from "./_components/BlogList"

const BlogPage = () => {
  return (
    <>
      <h3>Blogs</h3>
      <p className="font-medium text-gray-600">Read interesting blogs about tech industry</p>
      <BlogList />
    </>
  )
}

export default BlogPage