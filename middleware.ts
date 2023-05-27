import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasCode = request.nextUrl.searchParams.has("code");
  const hasCookie = request.cookies.has("access_token");
  const isLoginURL = request.nextUrl.pathname.startsWith("/login");

  if (!hasCode && !hasCookie && !isLoginURL) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoginURL && hasCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/login"],
};
