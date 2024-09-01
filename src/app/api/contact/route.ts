import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { error } = await resend.emails.send({
    from: "contact.website@thankadigital.com",
    to: "thankadigital@gmail.com",
    subject: "Contact from website",
    html: `
      <p>Name: ${data.fullname}</p>
      <p>Phone / email: ${data.email}</p>
      <p>Message: ${data.message}</p>
    `,
  });

  if (error) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      body: "Failed to send email",
    });
  }
  // const res = await fetch("https://api.sheety.co/2c6a673dad5828c32980a768a9560ca3/contactForm/contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${process.env.SHEETY_API_CONTACT_AUTHORIZATION}`
  //   },
  //   body: JSON.stringify({
  //     "contact": data
  //   }),
  // });

  // if (!res.ok) {
  //   return NextResponse.json({
  //     status: res.status,
  //     body: await res.text(),
  //   });
  // }

  return NextResponse.json({
    status: 200,
    body: "Submitted!",
  })
}
