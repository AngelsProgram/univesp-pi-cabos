// app/login/route.ts (or .js if using JavaScript)
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Get the base URL from the incoming request
  const baseUrl = new URL(request.url).origin;

  // Construct the full URL for the redirect
  const redirectUrl = new URL("/api/auth/signin", baseUrl);

  // Redirect to the constructed URL
  return NextResponse.redirect(redirectUrl);
}
