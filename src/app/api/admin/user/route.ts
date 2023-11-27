import { getUsers } from "@/server/controllers/user.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await getUsers();
    return NextResponse.json({
      users: res.users,
    });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: error.status || 500,
    });
  }
}