import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // For demo purposes, allow all access
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip authentication checks for these paths
    "/((?!api/auth|_next/static|_next/image|favicon.ico|login).*)",
  ],
}
