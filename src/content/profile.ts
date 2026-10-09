// Locale-independent facts about Yazid (sourced from the CV).

export const profile = {
  name: "Yazid Mrouki",
  email: "mroukiyazid2002@gmail.com",
  phone: "+216 27 099 512",
  phoneHref: "tel:+21627099512",
  linkedin: "https://www.linkedin.com/in/yazid-mrouki-051866295/",
  github: "https://github.com/yazid-mrouki",
  cv: "/CV-Yazid-Mrouki.pdf",
  photo: "/yazid.webp",
} as const;

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  // Set by Vercel at build time, without the protocol.
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
