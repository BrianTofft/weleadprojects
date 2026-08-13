import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articles, getArticle } from "@/lib/articles";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";
const NAVY = "#1C2544";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://www.weleadprojects.com/indsigt/${slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const langLabel: Record<string, string> = { da: "Dansk", en: "English" };
  const langFlag:  Record<string, string> = { da: "🇩🇰", en: "🇬🇧" };

  // Find sibling articles (other language version of same topic, or related)
  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <>
      <Nav />

      {/* ARTICLE HEADER */}
      <section
        className="relative overflow-hidden"
        style={{ background: NAVY, minHeight: 340 }}
      >
        {/* Subtle background image */}
        <img
          src="/Graphics/Blog-4.webp"
          alt={article.title}
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.18)", opacity: 0.6 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(28,37,68,0.3) 0%, rgba(28,37,68,0.95) 100%)" }}
        />

        <div className="relative max-w-3xl mx-auto px-6 pt-36 pb-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <Link href="/indsigt" className="hover:text-white/70 transition-colors">Indsigt</Link>
            <span>/</span>
            <span className="text-white/60 truncate">{article.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: RED, color: "#fff" }}
            >
              {article.category}
            </span>
            <span className="text-white/40 text-sm">
              {langFlag[article.lang]} {langLabel[article.lang]}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-white/40 text-sm">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readingMinutes} min {article.lang === "da" ? "læsning" : "read"}</span>
            <span>·</span>
            <span>Brian P.N. Tofft</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <p
            className="text-lg leading-relaxed mb-10 font-medium"
            style={{ color: DARK, borderLeft: `4px solid ${RED}`, paddingLeft: "1.25rem" }}
          >
            {article.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {article.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold mb-3" style={{ color: DARK }}>
                  {s.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Sources */}
          {article.sources && article.sources.length > 0 && (
            <div className="mt-10 pt-8 border-t" style={{ borderColor: BORDER }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: DARK }}>
                {article.lang === "da" ? "Kilder" : "Sources"}
              </h3>
              <ul className="space-y-2">
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                      style={{ color: RED }}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Author card */}
          <div
            className="mt-14 pt-10 border-t flex items-start gap-5"
            style={{ borderColor: BORDER }}
          >
            <div
              className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2"
              style={{ borderColor: BORDER }}
            >
              <Image
                src="/profile.png"
                alt="Brian P.N. Tofft"
                width={56}
                height={56}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: DARK }}>Brian P.N. Tofft</p>
              <p className="text-xs mb-2" style={{ color: RED }}>Managing Partner, We Lead Projects</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {article.lang === "da"
                  ? "Brian har mere end 30 års erfaring med projektledelse og IT-transformationer på tværs af brancher."
                  : "Brian has more than 30 years of experience in project management and IT transformations across industries."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="py-16 px-6" style={{ background: OFFWHITE }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold mb-6" style={{ color: DARK }}>
              {article.lang === "da" ? "Relaterede artikler" : "Related articles"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/indsigt/${a.slug}`}
                  className="bg-white rounded-xl border p-5 hover:shadow-md transition-all group"
                  style={{ borderColor: BORDER }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: RED }}
                  >
                    {a.category}
                  </span>
                  <h3
                    className="font-bold text-sm mt-2 leading-snug group-hover:opacity-70 transition-opacity"
                    style={{ color: DARK }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-3">{a.date} · {a.readingMinutes} min</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-3" style={{ color: DARK }}>
          {article.lang === "da" ? "Klar til at komme i gang?" : "Ready to get started?"}
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">
          {article.lang === "da"
            ? "Kontakt os og hør hvordan vi kan hjælpe med dit næste projekt."
            : "Get in touch and find out how we can help with your next project."}
        </p>
        <Link
          href="/#kontakt"
          style={{ background: RED }}
          className="inline-block hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity"
        >
          {article.lang === "da" ? "Kontakt os" : "Contact us"}
        </Link>
      </section>

      <Footer />
    </>
  );
}
