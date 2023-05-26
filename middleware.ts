import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  /* let basicCookie = request.cookies.get("basic_token")?.value;
  let accessCookie = request.cookies.get("access_token")?.value; */

  if (
    !request.cookies.has("basic_token") &&
    !request.cookies.has("access_token")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/text-cv",
};
