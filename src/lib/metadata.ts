import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/i18n";
import { OG_IMAGE, SITE_URL } from "./site";

const ogImageUrl = `${SITE_URL}${OG_IMAGE.path}?v=2`;

export function createPageMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = locale === "en" ? "/en" : "/";
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        ja: SITE_URL,
        en: `${SITE_URL}/en`,
        "x-default": SITE_URL,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      locale: dict.meta.ogLocale,
      alternateLocale: locale === "ja" ? ["en_US"] : ["ja_JP"],
      type: "website",
      siteName: dict.siteName,
      images: [
        {
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: dict.meta.ogImageAlt,
          type: OG_IMAGE.type,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImageUrl],
    },
    other: {
      "twitter:image": ogImageUrl,
      "twitter:image:src": ogImageUrl,
      "twitter:image:alt": dict.meta.ogImageAlt,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
