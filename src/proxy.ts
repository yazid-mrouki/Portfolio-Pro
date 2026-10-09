import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/content/profile";

// Redirect "/" to the visitor's preferred language (French by default).
export function proxy(request: NextRequest) {
  const accepted = request.headers.get("accept-language") ?? "";
  const preferred = accepted
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((code) => (locales as readonly string[]).includes(code));

  return NextResponse.redirect(new URL(`/${preferred ?? defaultLocale}`, request.url));
}

export const config = { matcher: "/" };
