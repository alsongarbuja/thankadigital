import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export function withAuthMiddleware(middleware: NextMiddleware) {
  return (req: NextRequest, event: NextFetchEvent) => {
    if (!req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.next();
    }
    // check if logged in bearer token is present
    if (!req.headers.get("authorization")) {
      return NextResponse.rewrite(new URL('/login', req.url));
    }
    return middleware(req, event);
  };
}