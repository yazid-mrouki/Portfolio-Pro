import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getContent, hasLocale, locales, profile, siteUrl } from "@/content";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Only /fr and /en exist; everything is prerendered at build time.
export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export const viewport: Viewport = { themeColor: "#06060b" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getContent(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: profile.name, url: profile.linkedin }],
    keywords: ["Yazid Mrouki", "Cloud", "DevOps", "OpenStack", "Kubernetes", "Docker", "Next.js", "Full-Stack", "ESPRIT", "Tunisie"],
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "profile",
      locale: lang === "fr" ? "fr_TN" : "en_US",
      url: `/${lang}`,
      title: t.meta.title,
      description: t.meta.description,
      siteName: profile.name,
      images: [{ url: profile.photo, width: 800, height: 894, alt: profile.name }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: [profile.photo] },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = getContent(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: t.hero.role,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    image: `${siteUrl}${profile.photo}`,
    url: `${siteUrl}/${lang}`,
    address: { "@type": "PostalAddress", addressLocality: "Bardo", addressCountry: "TN" },
    alumniOf: ["ESPRIT", "ISET de Radès"],
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
