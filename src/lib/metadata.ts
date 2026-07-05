import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/i18n";
import { SITE_URL } from "./site";

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
          url: "/images/kure/yamato.png",
          width: 1280,
          height: 660,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/images/kure/yamato.png"],
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
