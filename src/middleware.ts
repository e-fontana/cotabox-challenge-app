// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { validateToken } from "./lib/auth/validate-token";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const publicPaths = ["/", "/login", "/about"];

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const isSessionValid = await validateToken();

  if (pathname.startsWith("/dashboard") && !isSessionValid) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
