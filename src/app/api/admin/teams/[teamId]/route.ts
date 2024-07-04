import { deleteTeam, getTeam, updateTeam } from "@/server/controllers/team.controller";
import { ApiError } from "@/server/helpers/ApiError";
import { authorizeEmail } from "@/server/helpers/authorization";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, params: { params: { teamId: string } }) {
  try {
    await authorizeEmail(req, ["superadmin", "admin"])
    const { teamId } = params.params;
    const body = await req.json();
    const team = await updateTeam(teamId, body);

    return NextResponse.json({
      team,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    }, {
      status: error.status || 500,
    })
  }
}

export async function GET(req: NextRequest, params: { params: { teamId: string } }) {
  try {
    const { teamId } = params.params;
    const teams = await getTeam(teamId);

    return NextResponse.json({
      teams,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    }, {
      status: error.status || 500,
    })
  }
}

export async function DELETE(req: NextRequest, params: { params: { teamId: string } }) {
  try {
    await authorizeEmail(req, ["superadmin", "admin"])
    const { teamId } = params.params;
    const res = await deleteTeam(teamId);
    if (res !== "DELETED") {
      throw new ApiError("Failed to delete team", 500);
    }
    return NextResponse.json({
      message: "Deleted team"
    });
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: error.status || 500,
    });
  }
}