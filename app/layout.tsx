import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import "./globals.css";

const BASE = "https://www.weleadprojects.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "We Lead Projects | AI Governance Specialister",
    template: "%s | We Lead Projects",
  },
  description:
    "AI governance-specialister med enterprise architecture og 30 års transformationspraksis. AI Systems Audit, EU AI Act compliance og implementeringsledelse.",
  keywords: [
    "ai governance", "eu ai act", "ai compliance", "enterprise architecture",
    "ai systems audit", "ai governance konsulent", "digital transformation", "Roskilde",
  ],
  authors: [{ name: "We Lead Projects ApS" }],
  creator: "We Lead Projects ApS",
  alternates: {
    canonical: BASE,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "We Lead Projects",
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: BASE,
    siteName: "We Lead Projects",
    title: "We Lead Projects | AI Governance Specialister",
    description:
      "AI governance-specialister med enterprise architecture-baggrund. AI Systems Audit, EU AI Act compliance og implementeringsledelse fra Roskilde.",
    images: [
      {
        url: "/Graphics/GettyImages-517041045_optimized.webp",
        width: 1200,
        height: 630,
        alt: "We Lead Projects AI Governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Lead Projects | AI Governance Specialister",
    description:
      "AI governance-specialister med enterprise architecture-baggrund. AI Systems Audit, EU AI Act compliance og implementeringsledelse.",
    images: ["/Graphics/GettyImages-517041045_optimized.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "We Lead Projects",
  legalName: "We Lead Projects ApS",
  url: BASE,
  logo: `${BASE}/logo.png`,
  telephone: "+45 52400088",
  email: "hello@weleadprojects.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrivej 21",
    postalCode: "4000",
    addressLocality: "Roskilde",
    addressCountry: "DK",
  },
  vatID: "DK44934655",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Brian P.N. Tofft",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
