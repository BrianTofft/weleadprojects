import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Indsigt",
  description: "Artikler og indsigter om projektledelse, Enterprise Architecture og IT-transformationer fra We Lead Projects.",
  openGraph: {
    title: "Indsigt | We Lead Projects",
    description: "Læs vores artikler om projektledelse, Enterprise Architecture og IT-transformationer — på dansk og engelsk.",
    images: [{ url: "/hero.JPEG", width: 1200, height: 630, alt: "We Lead Projects — Indsigt" }],
  },
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
        image="/Graphics/Blog-3.webp"
      />

      {/* INTRO */}
      <section className="py-12 px-6 bg-white border-b" style={{ borderColor: "#e8e0e0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Hos We Lead Projects deler vi løbende viden og perspektiver fra vores arbejde med projektledelse, Enterprise Architecture og IT-transformationer. Vores artikler er skrevet af konsulenter med mere end 30 års praktisk erfaring — og sigter mod at give konkret, anvendelig indsigt frem for generelle råd.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi udgiver artikler på både dansk og engelsk, da mange af vores kunder og samarbejdspartnere opererer på tværs af landegrænser. Det faglige indhold er det samme — perspektivet er tilpasset de respektive markeder og projektkulturforskelle.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Find artikler om de fem advarselstegn på et IT-projekt der er ved at løbe af sporet, hvad Enterprise Architecture egentlig betyder i praksis, og hvordan du vælger den rette projektmodel — Agile, Waterfall eller Hybrid — til netop dit projekt og din organisation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vores artikler henvender sig til projektledere, IT-chefer og beslutningstagere der ønsker at styrke deres projektleverancer, forstå arkitekturmæssige begreber i en forretningsmæssig kontekst, eller få inspiration til at optimere måden deres organisation gennemfører projekter på.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Vi opdaterer løbende med ny viden. Alle artikler er skrevet uden brug af fagligt jargon der kræver specialuddannelse — målet er at give praktisk, handlingsorienteret indsigt som du kan bruge direkte i dit arbejde.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Vores tilgang til projektledelse trækker bl.a. på principperne fra{" "}
            <a
              href="https://www.pmi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
              style={{ color: RED }}
            >
              PMI
            </a>{" "}
            (Project Management Institute) — kombineret med vores egen praktiske erfaring fra danske og internationale projekter.
          </p>
        </div>
      </section>

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
