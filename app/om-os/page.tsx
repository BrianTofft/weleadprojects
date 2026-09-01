import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Om os",
  description: "Vi er AI governance-specialister med enterprise architecture og transformationsledelse som fundament. Ikke AI-teoretikere, implementeringsfolk.",
  alternates: {
    canonical: "https://www.weleadprojects.com/om-os",
  },
  openGraph: {
    title: "Om os | We Lead Projects",
    description: "AI governance-specialister med 30 års erfaring i enterprise architecture og digital transformation.",
    images: [{ url: "/hero.JPEG", width: 1200, height: 630, alt: "We Lead Projects Om os" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const values = [
  { title: "Substans over jargon", body: "Vi leverer governance-rammer der er forankret i jeres faktiske systemlandskab og organisation. Ikke generiske skabeloner tilpasset ingenting." },
  { title: "Implementeringsansvar", body: "Vi tager ansvar for at politikker bliver til praksis. En governance-struktur der ikke implementeres er blot et dokument." },
  { title: "Enterprise Architecture som udgangspunkt", body: "Forståelse for systemlandskabet er forudsætningen for governance der holder. Vi starter altid med at forstå det tekniske og organisatoriske fundament." },
  { title: "Langsigtet relation", body: "AI governance er ikke et engangsprojekt. Vi opbygger relationer baseret på tillid og gensidig forståelse af det forretningsmæssige formål." },
  { title: "Metodeneutralitet", body: "Vi er ikke bundet af et bestemt framework. Vi vælger den tilgang der passer til jeres organisation og modenhedsniveau." },
];

export default function OmOs() {
  return (
    <>
      <Nav />

      <PageHeader
        label="Om os"
        title="AI governance-specialister med enterprise-baggrund"
        subtitle="Vi er enterprise arkitekter og transformationsledere der har specialiseret os i AI governance. Det er den kombination der giver vores rådgivning substans."
        image="/Graphics/project-manager-with-team.webp"
      />

      {/* COMPANY + BRIAN */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvem vi er</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Ikke AI-teoretikere. Implementeringsfolk.</h2>
            <p className="text-gray-600 mb-4">
              We Lead Projects er et AI governance-konsulenthus baseret i Roskilde. Vi hjælper virksomheder med at kortlægge AI-aktiver, etablere governance-strukturer og sikre EU AI Act-compliance, fra strategisk overblik til kontrolleret implementering.
            </p>
            <p className="text-gray-600 mb-4">
              Vores baggrund er enterprise architecture og digital transformation, ikke AI-forskning eller compliance-jura. Det er den kombination der gør os anderledes: vi forstår systemlandskabet, vi kender organisationsstrukturerne, og vi har drevet implementeringer i mål i 30 år. Governance der ikke implementeres er bare et dokument.
            </p>
            <p className="text-gray-600 mb-4">
              Projektledelse og enterprise architecture er ikke konkurrerende ydelser vi tilbyder på siden. Det er den erfaring og tyngde der gør vores AI governance-rådgivning troværdig og praktisk anvendelig. En ren AI-konsulent ved hvad EU AI Act kræver. Vi ved også hvad det kræver at implementere det i en organisation med 50 systemer og tre forretningsenheder.
            </p>
            <p className="text-gray-600">
              We Lead Projects ApS er registreret under CVR-nr. 44934655. Du kan se virksomhedens fulde selskabsoplysninger på{" "}
              <a
                href="https://datacvr.virk.dk/enhed/virksomhed/44934655"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75"
                style={{ color: RED }}
              >
                CVR-registret
              </a>.
            </p>
          </div>

          {/* Brian */}
          <div className="rounded-2xl border p-8 text-center" style={{ borderColor: BORDER, background: OFFWHITE }}>
            <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden border-2" style={{ borderColor: BORDER }}>
              <Image
                src="/profile.png"
                alt="Brian P.N. Tofft"
                width={112}
                height={112}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 style={{ color: DARK }} className="text-xl font-bold mb-1">Brian P.N. Tofft</h3>
            <p style={{ color: RED }} className="font-semibold text-sm mb-4">Founder og Managing Partner</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tidligere Enterprise Architect hos Microsoft og Technical Authority hos DSB. Mere end 30 års erfaring med enterprise architecture, digital transformation og projektledelse. Grundlagde We Lead Projects i 2018 og specialiserede virksomheden i AI governance.
            </p>
            <div className="mt-6 pt-6 border-t text-sm space-y-1" style={{ borderColor: BORDER }}>
              <p className="text-gray-500"><a href="tel:+4552400088" className="hover:underline">+45 5240 0088</a></p>
              <p className="text-gray-500"><a href="mailto:hello@weleadprojects.com" className="hover:underline">hello@weleadprojects.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="py-16 px-6" style={{ background: "#1C2544" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            {[
              { label: "Enterprise Architecture", value: "30+", sub: "Aars erfaring med systemlandskaber og EA-rammevaerker" },
              { label: "Digitale transformationer", value: "50+", sub: "Projekter leveret paa tvaers af brancher og organisationsstoerrelser" },
              { label: "AI governance", value: "2023", sub: "Specialiserede virksomheden i AI governance og EU AI Act" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold mb-1" style={{ color: "#cc2222" }}>{s.value}</p>
                <p className="font-semibold mb-2">{s.label}</p>
                <p className="text-sm opacity-70">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi står for</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Kerneværdier og principper</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border p-7" style={{ borderColor: BORDER }}>
                <h3 style={{ color: DARK }} className="font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Vil I vide mere om vores tilgang?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">Tag en uforpligtende snak med os om jeres AI governance-situation. Vi stiller de rigtige sporgsmal.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#kontakt"
            style={{ background: RED }}
            className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
          >
            Kontakt os
          </Link>
          <Link
            href="/ydelser/ai-systems-audit"
            className="border font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity inline-block"
            style={{ borderColor: DARK, color: DARK }}
          >
            Se AI Systems Audit
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
