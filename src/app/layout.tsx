import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: `${SITE_NAME} - メタバースで花火大会を開催`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} - メタバースで花火大会を開催`,
    description: SITE_DESCRIPTION,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
