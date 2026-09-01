import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Governance og Ydelser",
  description: "AI Systems Audit, AI Governance Accelerator og Implementation Partner. Funderet i enterprise architecture og 30 års transformationspraksis. Vi Lead Projects.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser",
  },
  openGraph: {
    title: "AI Governance og Ydelser | We Lead Projects",
    description: "Tre AI governance-produkter til tre faser: kortlægning, compliance-struktur og implementering.",
    images: [{ url: "/Graphics/GettyImages-517041045_optimized.webp", width: 1200, height: 630, alt: "We Lead Projects AI Governance" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";


const deliveryMethods = [
  {
    label: "Kortlægning",
    tag: "AI Systems Audit",
    body: "En afgrænset, fast-pris leverance der giver jer det fulde overblik over AI-aktiver, EU AI Act-klassificering og en prioriteret governance-anbefaling. Leveret på 1-2 uger.",
    color: "#1C2544",
  },
  {
    label: "Struktur",
    tag: "AI Governance Accelerator",
    body: "Et 8-12 ugers forløb hvor vi etablerer governance-rammen: politikker, roller, compliance-dokumentation og kontrolmekanismer tilpasset jeres organisation og risikoniveau.",
    color: RED,
  },
  {
    label: "Implementering",
    tag: "Implementation Partner",
    body: "Løbende samarbejde hvor vi driver implementeringen af governance-strukturen og sikrer at politikker forankres i praksis. Retainer eller projektbaseret engagement.",
    color: "#4a6741",
  },
];

const process = [
  { step: "01", title: "AI-kortlægning", body: "Vi identificerer alle AI-systemer i jeres organisation, inkl. systemer I måske ikke vidste I havde." },
  { step: "02", title: "Risikoklassificering", body: "Hvert system klassificeres efter EU AI Act-kategorierne og vurderes mod jeres forretningsmæssige risikoprofil." },
  { step: "03", title: "Governance-ramme", body: "Vi etablerer politikker, roller og compliance-dokumentation tilpasset jeres organisation og modenhedsniveau." },
  { step: "04", title: "Implementering", body: "Governance-strukturen forankres i organisationen med ansvarlige, processer og kontrolmekanismer." },
  { step: "05", title: "Løbende governance", body: "AI-landskabet ændrer sig. Vi sikrer at jeres governance-praksis holder trit med nye systemer og nye krav." },
];

export default function YdelserPage() {
  return (
    <>
      <Nav />

      <PageHeader
        label="Ydelser"
        title="AI governance med det rette fundament"
        subtitle="Tre produkter til tre faser. Funderet i enterprise architecture og 30 års transformationspraksis, det der adskiller os fra rene AI-konsulenter."
        image="/Graphics/GettyImages-517041045_optimized.webp"
      />

      {/* AI GOVERNANCE PROGRAM */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">AI Governance Program</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">Tre produkter til tre faser</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Fra den indledende kortlægning over compliance-strukturen til den løbende governance-praksis. Hvert produkt kan stå alene eller bruges som skridt i et samlet forløb.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/ydelser/ai-systems-audit"
              className="group bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all flex flex-col"
              style={{ borderColor: RED }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#fde8e8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start" style={{ background: "#fef2f2", color: RED }}>
                Fast pris og defineret output
              </span>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-1">AI Systems Audit</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: RED }}>49.000 DKK (ex. moms)</p>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">Kortlægning af jeres AI-aktiver med EU AI Act-klassificering og governance-anbefaling. Leveret på 1-2 uger. Fast pris, ingen åbne regninger.</p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
            <Link
              href="/ydelser/ai-governance-accelerator"
              className="group bg-white rounded-2xl border p-8 hover:shadow-lg hover:border-red-200 transition-all flex flex-col"
              style={{ borderColor: BORDER }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#fde8e8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start" style={{ background: "#fef2f2", color: RED }}>
                8-12 uger
              </span>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-1">AI Governance Accelerator</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: RED }}>Tilbud efter scope</p>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">Etablering af governance-struktur, politikker og compliance-dokumentation tilpasset jeres organisation og risikoniveau.</p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
            <Link
              href="/ydelser/ai-implementation-partner"
              className="group bg-white rounded-2xl border p-8 hover:shadow-lg hover:border-red-200 transition-all flex flex-col"
              style={{ borderColor: BORDER }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#fde8e8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start" style={{ background: "#fef2f2", color: RED }}>
                Loebende samarbejde
              </span>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-1">Implementation Partner</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: RED }}>Retainer eller projekt</p>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">Vi driver implementeringen af jeres AI governance-struktur fra politikker til praksis med fuld ansvarlig projektledelse.</p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* METODISK FUNDAMENT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Vores fundament</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">Hvorfor vi er anderledes end rene AI-konsulenter</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              AI governance uden forståelse for systemlandskab og implementeringsevne er regelkendskab uden realitet. Vores EA- og transformationsbaggrund er det der giver vores governance-rådgivning substans.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/ydelser/enterprise-architecture"
              className="group rounded-2xl border p-8 hover:shadow-lg hover:border-red-200 transition-all"
              style={{ borderColor: BORDER, background: OFFWHITE }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#fde8e8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M3 17.5h4M5 14v7M6.5 14V10h5"/>
                </svg>
              </div>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-3">Enterprise Architecture</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Vi kortlægger systemlandskabet og kobler det til forretningsstrategien. Det er den indsigt der gør AI governance-rammer til noget der faktisk passer til organisationen, frem for generiske skabeloner.
              </p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere om EA <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
            <Link
              href="/ydelser/projektledelse"
              className="group rounded-2xl border p-8 hover:shadow-lg hover:border-red-200 transition-all"
              style={{ borderColor: BORDER, background: OFFWHITE }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#fde8e8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-3">Transformationsledelse</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                30 års erfaring med at drive organisationsforandringer i mål. Governance-strukturer implementeres ikke af sig selv. Vi tager ansvar for leverancen og sikrer at politikker bliver til praksis.
              </p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere om projektledelse <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* LEVERINGSMETODER */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Samarbejdsmodel</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">Tre måder at arbejde med os</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Fra den afgrænsede audit til det løbende partnerskab. Hvert trin kan stå alene eller bruges som del af et samlet AI governance-forløb.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {deliveryMethods.map((m) => (
              <div key={m.label} className="rounded-2xl p-8 text-white flex flex-col" style={{ background: m.color }}>
                <span className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-70">{m.tag}</span>
                <h3 className="text-xl font-bold mb-4">{m.label}</h3>
                <p className="text-sm leading-relaxed opacity-80">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Sådan arbejder vi</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">AI governance i 5 faser</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4"
                  style={{ background: RED }}
                >
                  {p.step}
                </div>
                {i < process.length - 1 && (
                  <div
                    className="hidden md:block absolute mt-6 ml-12 h-0.5 w-full"
                    style={{ background: BORDER }}
                  />
                )}
                <h3 style={{ color: DARK }} className="font-bold text-sm mb-2">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1+1=3 HIGHLIGHT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Vores styrke</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-5">EA + implementeringsledelse = governance der virker</h2>
            <p className="text-gray-600 mb-4">
              AI governance er ikke et compliance-dokument. Det er en levende struktur der skal passe til jeres systemlandskab, jeres organisation og jeres risikoniveau. Det kræver forståelse for arkitektur, ikke bare kendskab til regler.
            </p>
            <p className="text-gray-600 mb-4">
              Vores enterprise architecture-baggrund giver os den indsigt i systemlandskabet der er forudsætningen for governance-rammer der rent faktisk beskriver det I har. Vores transformationserfaring giver os evnen til at forankre dem i organisationen, ikke bare dokumentere dem.
            </p>
            <p className="text-gray-600 mb-4">
              Det er kombinationen der skaber reel compliance frem for papiroverholdelse. Og det er den kombination rene AI-konsulenter ikke har.
            </p>
            <p className="text-gray-600">
              Vores EA-arbejde tager udgangspunkt i anerkendte frameworks som{" "}
              <a
                href="https://www.opengroup.org/togaf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75"
                style={{ color: RED }}
              >
                TOGAF
              </a>{" "}
              tilpasset den konkrete organisations modenhed og AI-ambitioner.
            </p>
          </div>
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: BORDER, background: OFFWHITE }}
          >
            <div className="text-5xl font-bold mb-4" style={{ color: RED }}>EA + PL</div>
            <p style={{ color: DARK }} className="font-semibold text-lg mb-3">= AI governance med substans</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enterprise architecture giver kortlægningen det tekniske fundament. Transformationsledelse giver implementeringen den organisatoriske tyngde. Tilsammen giver det AI governance der holder.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: OFFWHITE }} className="py-16 px-6 text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Start med et AI Systems Audit</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Fast pris, defineret output og leveret på 1-2 uger. Et konkret sted at begynde, uanset hvor i AI governance-rejsen I er.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ydelser/ai-systems-audit"
            style={{ background: RED }}
            className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
          >
            Se AI Systems Audit
          </Link>
          <Link
            href="/#kontakt"
            className="border font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity inline-block"
            style={{ borderColor: DARK, color: DARK }}
          >
            Kontakt os
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
