import { createBlog, getBlogs } from "@/server/controllers/blog.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const blog = await createBlog(body);

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

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const blogs = await getBlogs();

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