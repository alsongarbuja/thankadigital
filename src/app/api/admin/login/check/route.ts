import { checkToken } from "@/server/controllers/auth.controller";
import { ApiError } from "@/server/helpers/ApiError";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { token } = data;

    const isLoggedIn = await checkToken(token);
    if(!isLoggedIn) {
      throw new ApiError("Invalid token", 401);
    }
    return NextResponse.json({
      success: true,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, {
      status: error.status || 500,
    })
  }
}