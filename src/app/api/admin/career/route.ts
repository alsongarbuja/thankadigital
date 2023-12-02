import { createCareer, getCareers } from "@/server/controllers/career.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const career = await createCareer(body);

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

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const careers = await getCareers();

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