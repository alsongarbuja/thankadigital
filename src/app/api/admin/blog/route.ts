import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const blogs = {}; // TODO: fetch from dev.to 

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