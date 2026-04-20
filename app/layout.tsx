import type { Metadata } from "next";
import "./globals.css";

const BASE = "https://www.weleadprojects.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "We Lead Projects | Professionel Projektledelse",
    template: "%s | We Lead Projects",
  },
  description:
    "We Lead Projects leverer erfarne projektledere og specialister til IT-projekter, Enterprise Architecture og digitale transformationer. Grundlagt 2018 — Roskilde.",
  keywords: [
    "projektledelse", "IT-projekter", "Enterprise Architecture",
    "digital transformation", "konsulent", "projektleder", "Roskilde",
  ],
  authors: [{ name: "We Lead Projects ApS" }],
  creator: "We Lead Projects ApS",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: BASE,
    siteName: "We Lead Projects",
    title: "We Lead Projects | Professionel Projektledelse",
    description:
      "Erfarne projektledere og specialister til IT-projekter, Enterprise Architecture og digitale transformationer.",
    images: [
      {
        url: "/hero.JPEG",
        width: 1200,
        height: 630,
        alt: "We Lead Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Lead Projects | Professionel Projektledelse",
    description:
      "Erfarne projektledere og specialister til IT-projekter, Enterprise Architecture og digitale transformationer.",
    images: ["/hero.JPEG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
