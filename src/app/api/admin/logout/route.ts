import { logout } from "@/server/controllers/auth.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token } = body;

    const isLoggedOut = await logout(token);
    if (isLoggedOut) {
      return NextResponse.json({ message: "Logged out successfully" });
    } else {
      return NextResponse.json({ message: "Error logging out" }, {
        status: 500,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, {
      status: error.status || 500,
    });
  }
}