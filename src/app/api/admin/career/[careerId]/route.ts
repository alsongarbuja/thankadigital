import { deleteCareer, getCareer, updateCareer } from "@/server/controllers/career.controller";
import { ApiError } from "@/server/helpers/ApiError";
import { authorizeEmail } from "@/server/helpers/authorization";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest,  params: { params: { careerId: string } }) {
  try {
    // await authorizeEmail(req, ["superadmin", "admin"])
    const { careerId } = params.params;
    const body = await req.json();
    const career = await updateCareer(careerId, body);

    return NextResponse.json({
      career,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    }, {
      status: error.status || 500,
    })
  }
}

export async function GET(req: NextRequest,  params: { params: { careerId: string } }) {
  try {
    const { careerId } = params.params;
    const careers = await getCareer(careerId);

    return NextResponse.json({
      careers,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    }, {
      status: error.status || 500,
    })
  }
}

export async function DELETE(req: NextRequest, params: { params: { careerId: string } }) {
  try {
    await authorizeEmail(req, ["superadmin", "admin"])
    const { careerId } = params.params;
    const res = await deleteCareer(careerId);
    if (res !== "DELETED") {
      throw new ApiError("Failed to delete career", 500);
    }
    return NextResponse.json({
      message: "Deleted career"
    });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: error.status || 500,
    });
  }
}