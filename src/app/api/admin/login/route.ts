import { login } from "@/server/controllers/auth.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

  try {
    const res = await login(email, password);
    return NextResponse.json({
      user: res.user,
      token: res.token,
    });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: error.status || 500,
    });
  }
}