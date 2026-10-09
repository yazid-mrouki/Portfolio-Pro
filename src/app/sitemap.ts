import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    changeFrequency: "monthly",
    priority: lang === "fr" ? 1 : 0.9,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])) },
  }));
}
