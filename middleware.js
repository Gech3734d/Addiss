import {NextResponse} from "next/server";
export function middleware(request){const session=request.cookies.get("addis_session")?.value;const path=request.nextUrl.pathname;if(path.startsWith("/admin")&&!session){const url=new URL("/login",request.url);url.searchParams.set("next",path);return NextResponse.redirect(url)}return NextResponse.next()}
export const config={matcher:["/admin/:path*"]};
