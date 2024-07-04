import { createTeam, getTeams } from "@/server/controllers/team.controller";
import { authorizeEmail } from "@/server/helpers/authorization";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await authorizeEmail(req, ["superadmin", "admin"])
    const body = await req.json();
    const team = await createTeam(body);

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

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const teamType = req.nextUrl.searchParams.get("type");
    const teams = await getTeams(teamType!);

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