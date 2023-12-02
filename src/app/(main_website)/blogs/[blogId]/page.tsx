import moment from "moment";
import Link from "next/link";

import Blocks from 'editorjs-blocks-react-renderer';
import { ChevronLeft } from "react-feather";
import { editorRenderConfig } from "@/utils/editorRenderConfig";
import { Metadata } from "next";
import { getBlog } from "@/server/controllers/blog.controller";

export async function generateMetadata({ params }: { params: { blogId: string } }): Promise<Metadata> {
  const blog = await getBlog(params.blogId);
  return {
    title: blog.title,
    description: blog.summary,
    authors: [blog.author.name],
    metadataBase: new URL(`https://thankadigital.com/blogs/${blog._id}`),
    openGraph: {
      type: 'website',
      title: blog.title,
      description: blog.summary,
      images: blog.body.blocks
        .filter((block: { type: string; }) => block.type === 'simpleImage')
        .map((block: { data: { url: string; caption: string; }; }) => ({
          url: block.data.url,
          width: 800,
          height: 600,
          alt: block.data.caption,
        })),
      site_name: 'Thanka Digital',
    },
  } as Metadata
}

const BlogSinglePage = async ({ params }: { params: { blogId: string } }) => {
  const blog = await getBlog(params.blogId);

  return (
    <section className="grid w-11/12 grid-cols-1 mx-auto my-5 md:grid-cols-6">
      <div className="p-4 bg-white">
        <Link href="/blogs" className="inline-block p-2 border rounded-md"><ChevronLeft /></Link>
      </div>
      <article className="col-span-4">
        <h3>{blog.title}</h3>
        <div className="flex flex-col items-end justify-end gap-1">
          <p className="font-bold">
            By <Link href={blog.author.link} className="text-primary_blue">{blog.author.name}</Link>
          </p>
          <p className="text-gray-500">{moment(blog.createdAt).fromNow()}</p>
        </div>
        <hr className="my-2" />
        <Blocks 
          data={blog.body as any}
          config={editorRenderConfig}
          renderers={{
            simpleImage: ({data}) => {
              
              if(data.withBackground) {
                return (
                  <figure className="p-4 mb-4 bg-gray-100 rounded-lg">
                    <img alt={data.caption} src={data.url} className="w-full h-auto mx-auto mb-4 md:w-1/2" />
                  </figure>
                )
              }
              return (
                <img alt={data.caption} src={data.url} className="w-full h-auto mb-4" />
              )
            },
            warning: ({data}) => {
              return (
                <div className="p-4 mb-4 text-yellow-800 bg-yellow-100">
                  <p className="font-bold">{data.title}</p>
                  <p>{data.message}</p>
                </div>
              )
            },
            code: ({data}) => {
              return (
                <pre className="p-4 mb-4 overflow-x-scroll text-white bg-gray-900 rounded-lg">
                  <code>{data.code}</code>
                </pre>
              )
            },
          }}
        />
      </article>
    </section>
  )
}

export default BlogSinglePage