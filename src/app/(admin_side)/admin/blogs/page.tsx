import Link from 'next/link'
import React from 'react'
import CustomTable from '../../_components/CustomTable'

const BlogPage = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3>Blogs</h3>
        <Link href="/admin/blogs/create" className="px-4 py-2 text-white rounded-md bg-primary_red">Add Blog</Link>
      </div>
      <CustomTable url="/api/admin/blog" keys={["title", "createdAt"]} pathUrl="blogs" />
    </>
  )
}

export default BlogPage