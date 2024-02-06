import Link from 'next/link'
import React from 'react'
import CustomTable from '../../_components/CustomTable'
import { getBlogs } from '@/server/controllers/blog.controller';
import ActionTd from '../../_components/ActionTd';
import moment from 'moment';
import CustomSelectTd from '../../_components/CustomSelectTd';

const BlogPage = async () => {
  const blogs = await getBlogs("all");

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3>Blogs</h3>
        <Link href="/admin/blogs/create" className="px-4 py-2 text-white rounded-md bg-primary_red">Add Blog</Link>
      </div>
      <CustomTable 
        cols={["TITLE", "AUTHOR", "STATUS", "CREATED AT"]}
      >
        {blogs.map((blog, index) => (
          <tr key={index} className="border-b-2 border-gray-700">
            <td className="h-12 text-left">{blog.title}</td>
            <td className="h-12 text-left">{blog.author.name}</td>
            <td className="h-12 text-left">{moment(blog.createdAt).fromNow()}</td>
            <CustomSelectTd 
              options={["draft", "published", "archieved"]}
              value={blog.status}
              url={`/api/admin/blog/${blog.id}`}
              method="PATCH"
              keyName="status"
            />
            <ActionTd 
              editUrl={`/admin/blogs/edit/${blog.id}`}
              deleteUrl={`/api/admin/blog/${blog.id}`}
            />
          </tr>
        ))}
      </CustomTable>
    </>
  )
}

export default BlogPage