import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "We Lead Projects | Professionel Projektledelse",
    template: "%s | We Lead Projects",
  },
  description:
    "We Lead Projects leverer erfarne projektledere og specialister til IT-projekter, anlægsprojekter og transformationer. Kontakt os i dag.",
  metadataBase: new URL("https://www.weleadprojects.com"),
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
