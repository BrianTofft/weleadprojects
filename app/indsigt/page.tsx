import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Indsigt",
  description: "Artikler og indsigter om projektledelse, Enterprise Architecture og IT-transformationer fra We Lead Projects.",
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const langLabel: Record<string, string> = { da: "Dansk", en: "English" };
const langFlag:  Record<string, string> = { da: "🇩🇰", en: "🇬🇧" };

export default function IndsightPage() {
  const danish  = articles.filter((a) => a.lang === "da");
  const english = articles.filter((a) => a.lang === "en");

  return (
    <>
      <Nav />

      <PageHeader
        label="Indsigt"
        title="Viden der skaber fremdrift"
        subtitle="Artikler om projektledelse, Enterprise Architecture og IT-transformationer — på dansk og engelsk."
        image="/hero.JPEG"
        flip
      />

      {/* DANISH ARTICLES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-2xl">🇩🇰</span>
            <h2 className="text-2xl font-bold" style={{ color: DARK }}>Danske artikler</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {danish.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ENGLISH ARTICLES */}
      <section className="py-16 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-2xl">🇬🇧</span>
            <h2 className="text-2xl font-bold" style={{ color: DARK }}>English articles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {english.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ArticleCard({ article: a }: { article: (typeof articles)[0] }) {
  return (
    <Link
      href={`/indsigt/${a.slug}`}
      className="group flex flex-col bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-all"
      style={{ borderColor: BORDER }}
    >
      {/* Category bar */}
      <div className="px-6 pt-6 pb-0 flex items-center justify-between">
        <span
          className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: "#fff0f0", color: RED }}
        >
          {a.category}
        </span>
        <span className="text-xs text-gray-400">{langFlag[a.lang]} {langLabel[a.lang]}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-bold text-base mb-3 leading-snug group-hover:opacity-75 transition-opacity"
          style={{ color: DARK }}
        >
          {a.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {a.description}
        </p>
        <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
          <span>{a.date}</span>
          <span>{a.readingMinutes} min læsning</span>
        </div>
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: RED }}>
          Læs artikel <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      </div>
    </Link>
  );
}
