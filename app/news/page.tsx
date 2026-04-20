import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
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
      <Nav />

      <PageHeader
        label="News"
        title="Seneste nyheder"
        subtitle="Opdateringer og indsigter fra We Lead Projects."
        image="/hero.JPEG"
        flip
      />

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
