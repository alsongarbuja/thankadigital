import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const res = await fetch("https://api.sheety.co/2c6a673dad5828c32980a768a9560ca3/contactForm/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.SHEETY_API_CONTACT_AUTHORIZATION}`
    },
    body: JSON.stringify({
      "contact": data
    }),
  });

  if (!res.ok) {
    return NextResponse.json({
      status: res.status,
      body: await res.text(),
    });
  }

  return NextResponse.json({
    status: 200,
    body: "Submitted!",
  })
}