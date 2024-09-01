import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const data = await req.formData();

  const file = data.get("attachment") as File;
  const attachmentBuffer = Buffer.from(await file.arrayBuffer());

  const { error } = await resend.emails.send({
    from: "career.website@thankadigital.com",
    attachments: [
      { filename: file.name, content: attachmentBuffer.toString("base64") },
    ],
    to: "thankadigital@gmail.com",
    subject: `Career mail for ${data.get("position")}`,
    html: `
      <p>Name: ${data.get("fullname")}</p>
      <p>Email: ${data.get("email")}</p>
      <p>Phone: ${data.get("phone")}</p>
      <p>Portfolio: ${data.get("portfolio")}</p>
      <p>Query: ${data.get("query") ?? ""}</p>
    `,
  });

  if (error) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      body: "Failed to send email, Please Try again later",
    });
  }

  return NextResponse.json({
    status: 200,
    body: "Submitted!",
  })
}
