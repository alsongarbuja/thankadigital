import { deleteBlog, getBlog, updateBlog } from "@/server/controllers/blog.controller";
import { ApiError } from "@/server/helpers/ApiError";
import { authorizeEmail } from "@/server/helpers/authorization";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest,  params: { params: { blogId: string } }) {
  try {
    await authorizeEmail(req, ["superadmin", "admin", "content-writer"])
    const { blogId } = params.params;
    const body = await req.json();
    const blog = await updateBlog(blogId, body);

    return NextResponse.json({
      blog,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    }, {
      status: error.status || 500,
    })
  }
}

export async function GET(req: NextRequest,  params: { params: { blogId: string } }) {
  try {
    const { blogId } = params.params;
    const blogs = await getBlog(blogId);

    return NextResponse.json({
      blogs,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    }, {
      status: error.status || 500,
    })
  }
}

export async function DELETE(req: NextRequest, params: { params: { blogId: string } }) {
  try {
    await authorizeEmail(req, ["superadmin", "admin", "content-writer"])
    const { blogId } = params.params;
    const res = await deleteBlog(blogId);
    if (res !== "DELETED") {
      throw new ApiError("Failed to delete blog", 500);
    }
    return NextResponse.json({
      message: "Deleted blog"
    });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: error.status || 500,
    });
  }
}