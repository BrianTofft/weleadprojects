import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News",
  description: "Seneste nyheder og opdateringer fra We Lead Projects.",
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

// Tilføj fremtidige artikler her
const articles: {
  slug: string;
  title: string;
  date: string;
  intro: string;
}[] = [];

export default function NewsPage() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/">
            <Image src="/logo.png" alt="We Lead Projects" width={360} height={92} className="object-contain" />
          </Link>
          <div className="hidden md:flex gap-8 text-base font-medium" style={{ color: DARK }}>
            <Link href="/om-os" className="hover:opacity-60 transition-opacity">Om os</Link>
            <Link href="/ydelser" className="hover:opacity-60 transition-opacity">Ydelser</Link>
            <Link href="/news" style={{ color: RED }}>News</Link>
            <Link href="/#faq" className="hover:opacity-60 transition-opacity">FAQ</Link>
            <Link href="/#kontakt" className="hover:opacity-60 transition-opacity">Kontakt</Link>
          </div>
          <Link
            href="/#kontakt"
            style={{ background: RED }}
            className="hover:opacity-90 text-white text-sm font-semibold px-5 py-2 rounded-full transition-opacity"
          >
            Kontakt os
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ background: OFFWHITE }} className="pt-36 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">News</p>
          <h1 style={{ color: DARK }} className="text-4xl font-bold">Seneste nyheder</h1>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-16 px-6 bg-white min-h-[40vh]">
        <div className="max-w-4xl mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-5xl mb-4">📰</p>
              <p className="text-lg">Ingen artikler endnu — kom tilbage snart.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/news/${a.slug}`}
                  className="block border rounded-xl p-6 hover:shadow-md transition-all"
                  style={{ borderColor: BORDER }}
                >
                  <p className="text-xs text-gray-400 mb-2">{a.date}</p>
                  <h2 className="text-xl font-bold mb-2" style={{ color: DARK }}>{a.title}</h2>
                  <p className="text-gray-500 text-sm">{a.intro}</p>
                  <p className="mt-3 text-sm font-semibold" style={{ color: RED }}>Læs mere →</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
