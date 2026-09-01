import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import ExpandableCards from "@/components/ExpandableCards";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Systems Audit",
  description:
    "Kortlæg jeres AI-systemer, lav gap-analyse mod EU AI Act og få en 90-dages handlingsplan. Fast pris, konkret leverance på 1-2 uger.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/ai-systems-audit",
  },
  openGraph: {
    title: "AI Systems Audit | We Lead Projects",
    description: "Kortlæg jeres AI-systemer, lav gap-analyse mod EU AI Act og få en 90-dages handlingsplan. Fast pris, konkret leverance.",
    images: [{ url: "/Graphics/AdobeStock_828719609.webp", width: 1200, height: 630, alt: "AI Systems Audit hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const NAVY = "#1C2544";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Systems Audit",
  name: "AI Systems Audit",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "Kortlægning af AI-systemer, gap-analyse mod EU AI Act, governance-anbefaling og 90-dages handlingsplan. Fast pris, konkret leverance på 1-2 uger.",
  url: "https://www.weleadprojects.com/ydelser/ai-systems-audit",
};

const leverancer = [
  {
    title: "AI-aktiv kortlægning",
    body: "En samlet liste over alle AI-systemer og AI-funktioner i jeres systemlandskab — inkl. dem der er sluppet ind via SaaS-opdateringer uden at nogen aktivt godkendte dem.",
    more: "De fleste virksomheder undervurderer, hvor mange AI-funktioner de allerede har i produktion. Microsoft 365 Copilot, Salesforce Einstein, ServiceNow og andre store SaaS-platforme aktiverer løbende AI-funktioner som en del af normale opdateringer. Kortlægningen giver ledelsen det faktiske billede, ikke det antagne.",
  },
  {
    title: "EU AI Act risikoklassificering",
    body: "Hvert identificeret AI-system klassificeret efter EU AI Acts fire risikokategorier med begrundelse og de compliance-krav, der følger af klassificeringen.",
    more: "Klassificeringen afgør, hvilke krav til dokumentation, menneskeligt tilsyn og transparens der gælder. Den er ikke en juridisk vurdering, men en arkitekturvurdering — og det er en afgørende forskel, fordi den trækker på den viden der allerede findes om systemet, ikke på en juridisk fortolkning udefra.",
  },
  {
    title: "Governance-anbefaling",
    body: "En konkret anbefaling for ejerskab, beslutningsprocesser og løbende tilsyn, formuleret til jeres organisation og forankret i den governance-struktur I allerede har.",
    more: "Vi anbefaler aldrig et parallelt AI-udvalg med sit eget sprog. Anbefalingen tager udgangspunkt i, hvem der allerede har mandat til at træffe beslutninger om IT-risiko, og udvider det mandat til at dække AI. Det er hurtigere at implementere og lettere at fastholde.",
  },
  {
    title: "90-dages handlingsplan",
    body: "De vigtigste tiltag for de næste 90 dage, rangeret efter risiko og ressourcebehov, så I ved præcis hvor I starter, og hvad der kan vente.",
    more: "Handlingsplanen skelner mellem det der kræver handling inden for de første 30 dage, det der skal adresseres i løbet af 90 dage, og det der kan dokumenteres som lavprioriteret og håndteres løbende. Det giver ledelsen et konkret grundlag for beslutning, ikke en åben liste over muligheder.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Forberedelse",
    body: "I fremsender systemdokumentation, arkitekturdiagrammer og en liste over SaaS-produkter. Vi gennemgår materialet, inden vi mødes — typisk ½ dag fra jeres side.",
  },
  {
    step: "02",
    title: "Gennemgang",
    body: "Struktureret on-site gennemgang med IT-chefen og relevante systemejere. Vi kortlægger AI-funktioner, klassificerer risiko og identificerer gap mod EU AI Act-krav.",
  },
  {
    step: "03",
    title: "Leverance",
    body: "Inden for fem arbejdsdage modtager I rapporten med kortlægning, klassificering, gap-analyse og 90-dages handlingsplan. Fast format, ingen åbne spørgsmål.",
  },
];

const faqs = [
  {
    q: "Hvad koster et AI Systems Audit?",
    a: "49.000 kr. ekskl. moms. Fast pris uanset organisationens størrelse, ingen variabel fakturering.",
  },
  {
    q: "Hvad kræver det af os?",
    a: "Typisk ½ dag til forberedelse og to dage med IT-chefen og udvalgte systemejere til stede. Vi tilrettelægger gennemgangen, så den forstyrrer daglig drift mindst muligt.",
  },
  {
    q: "Vi tror, vi kender vores AI-systemer i forvejen. Er auditen relevant?",
    a: "Det er præcis hvad de fleste siger inden kortlægningen. AI glider ind via SaaS-opdateringer, copilot-funktioner og automationsmoduler uden at nogen formelt godkender dem. Kortlægningen overrasker næsten altid.",
  },
  {
    q: "Gælder EU AI Act overhovedet for os?",
    a: "Det afhænger af hvilken rolle I spiller i forhold til systemet — udbyder, deployer eller bruger — og systemets risikoklasse. Klassificeringen er en central del af auditen.",
  },
  {
    q: "Hvad sker der efter rapporten?",
    a: "Rapporten er selvstændig. I bestemmer selv, hvad I gør med den. Har I brug for hjælp til implementering, kan vi fortsætte samarbejdet, men det er ingen forudsætning.",
  },
];

const hvemErDetFor = [
  "I ved ikke præcist, hvilke AI-funktioner der allerede er i brug i jeres systemer",
  "Ledelsen har fået spørgsmål om EU AI Act-compliance uden at have et klart svar",
  "I overvejer en AI-strategi, men mangler det faktiske billede af jeres udgangspunkt",
  "En revisor, bestyrelse eller partner har bedt om dokumentation for AI-governance",
  "I vil have et afgrænset, prisfastsat engagement fremfor et åbent rådgivningsforløb",
];

export default function AiSystemsAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="Produkt"
        title="AI Systems Audit"
        subtitle="Kortlægning af jeres AI-systemer, gap-analyse mod EU AI Act og en 90-dages handlingsplan — afsluttet på 1-2 uger, til en fast pris."
        image="/Graphics/AdobeStock_828719609.webp"
      />

      {/* PRODUKT-BOX */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl border-2 p-10"
            style={{ borderColor: RED }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>1–2 uger</div>
                <div className="text-sm text-gray-500">Forberedelse, on-site gennemgang og rapport</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>4 leverancer</div>
                <div className="text-sm text-gray-500">Kortlægning, klassificering, gap-analyse, 90-dages plan</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>49.000 kr.</div>
                <div className="text-sm text-gray-500">Fast pris ekskl. moms, ingen åbne regninger</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            De fleste virksomheder undervurderer, hvor mange AI-systemer de allerede har i produktion. AI glider ind som en del af SaaS-opdateringer, copilot-funktioner og automationsmoduler, uden at nogen formelt har taget stilling til risiko eller ejerskab. Det er ikke uagtsomt. Det er en naturlig konsekvens af, at AI-funktioner leveres som en del af produkter I allerede bruger.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Problemet er, at EU AI Act nu stiller krav til dokumentation og tilsyn for en lang række AI-systemer. Og det kræver, at I ved, hvad I har, inden I kan vurdere, hvad I skylder.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI Systems Audit er et afgrænset forløb, der giver jer det faktiske billede. Ikke en åben rådgivningsproces, men et konkret produkt med en fast pris, en defineret leverance og en klar tidsramme. I ved, hvad I køber, inden I siger ja.
          </p>
        </div>
      </section>

      {/* LEVERANCER */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad I får</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire konkrete leverancer</h2>
          </div>
          <ExpandableCards items={leverancer} />
        </div>
      </section>

      {/* PROCES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Forløbet</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Tre trin, ingen overraskelser</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: RED }}
                >
                  {s.step}
                </div>
                <h3 style={{ color: DARK }} className="font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVEM ER DET FOR */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvem er det for</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Fem situationer, hvor et AI Systems Audit giver mening</h2>
          <ul className="space-y-3">
            {hvemErDetFor.map((n) => (
              <li key={n} className="flex items-start gap-3 text-gray-600">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Ofte stillede spørgsmål</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY }} className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-4">Klar til at få det faktiske billede?</h2>
          <p className="text-white opacity-70 mb-8 leading-relaxed">
            49.000 kr. ekskl. moms. Book et møde, og vi aftaler datoer og forberedelse.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://calendly.com/bt-weleadprojects/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: RED }}
              className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
            >
              Book intromøde
            </a>
            <Link
              href="/#kontakt"
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity inline-block"
            >
              Send en besked
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
