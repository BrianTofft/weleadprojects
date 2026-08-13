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
    "Erfarne projektledere, Enterprise Arkitekter og AI Governance-rådgivere til komplekse IT-transformationer. We Lead Projects, grundlagt 2018, Roskilde.",
  keywords: [
    "projektledelse", "IT-projekter", "Enterprise Architecture",
    "digital transformation", "konsulent", "projektleder", "Roskilde",
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
      </body>
    </html>
  );
}
