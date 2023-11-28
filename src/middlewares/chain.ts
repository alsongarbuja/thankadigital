import { NextMiddleware, NextResponse } from "next/server";

type MiddlewareFactory = (func: NextMiddleware) => NextMiddleware;

export const chainMiddleware = (
  middlewares: MiddlewareFactory[],
  index = 0
): NextMiddleware => {
  const current = middlewares[index];

  if (current) {
    const next = chainMiddleware(middlewares, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
};