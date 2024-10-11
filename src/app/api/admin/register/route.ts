import { register } from "@/server/controllers/auth.controller";
import { authorizeEmail } from "@/server/helpers/authorization";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await authorizeEmail(req);

    const res = await register(data);
    return NextResponse.json({
      user: res.user,
      token: res.token,
    });
  } catch (error: unknown) {
    return NextResponse.json((error as Error).message, {
      status: (error as dynamicObject).status as number || 500,
    });
  }
}
