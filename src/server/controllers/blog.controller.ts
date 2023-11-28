import dbConnect from "..";
import { ApiError } from "@/server/helpers/ApiError";
import blogModel from "@/server/models/blog.model";

export async function createBlog(body: dynamicObject) {
  await dbConnect();
  const blog = await blogModel.create(body);

  if (!blog) {
    throw new ApiError("Blog could not be created", 500);
  }

  return blog;
}

export async function getBlog(id: string) {
  await dbConnect();
  const blog = await blogModel.findById(id);

  if (!blog) {
    throw new ApiError("Blog not found", 404);
  }

  return blog;
}

export async function getBlogs() {
  await dbConnect();
  const blogs = await blogModel.find();

  if (!blogs) {
    throw new ApiError("Blogs not found", 404);
  }

  return blogs;
}

export async function updateBlog(id: string, body: dynamicObject) {
  await dbConnect();
  const blog = await getBlog(id);
  Object.assign(blog, body);
  await blog.save();
  return blog;
}

export async function deleteBlog(id: string) {
  await dbConnect();
  const blog = await getBlog(id);
  await blog.deleteOne();
  return "DELETED";
}