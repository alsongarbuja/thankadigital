import { deleteUserById } from "@/server/controllers/user.controller";
import { ApiError } from "@/server/helpers/ApiError";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, params: { params: { userId: string } }) {
  try {
    const { userId } = params.params;
    const res = await deleteUserById(userId);
    if (res !== "DELETED") {
      throw new ApiError("Failed to delete user", 500);
    }
    return NextResponse.json({
      message: "Deleted user"
    });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: error.status || 500,
    });
  }
}