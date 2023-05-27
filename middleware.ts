import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    (pathname.startsWith("/api/textcv") ||
      pathname.startsWith("/api/generate")) &&
    !request.cookies.has("access_token")
  ) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}

export const config = {
  matcher: ["/", "/api/textcv", "/api/generate"],
};
