import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  // Local learning defaults; override using .env.local or deployment environment variables.
  const username = process.env.DEMO_ADMIN_USER || "admin";
  const password = process.env.DEMO_ADMIN_PASSWORD || "AddisEats@2026";
  if (body.username !== username || body.password !== password) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set("addis_session", "demo-admin-session", {
    httpOnly: true, secure: process.env.NODE_ENV === "production",
    sameSite: "lax", path: "/", maxAge: 60 * 60 * 8
  });
  return response;
}
