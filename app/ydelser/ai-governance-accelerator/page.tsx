import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import ExpandableCards from "@/components/ExpandableCards";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Governance Accelerator",
  description:
    "Byg en fungerende AI governance-struktur på 4-6 uger. Governance-model, RACI, beslutningsfora og risikomodel. Forankret i jeres organisation, ikke i en rapport.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/ai-governance-accelerator",
  },
  openGraph: {
    title: "AI Governance Accelerator | We Lead Projects",
    description: "Governance-model, RACI og risikomodel på 4-6 uger. Konkret struktur der faktisk bruges — ikke endnu en rapport.",
    images: [{ url: "/Graphics/AdobeStock_828719609.webp", width: 1200, height: 630, alt: "AI Governance Accelerator hos We Lead Projects" }],
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
  serviceType: "AI Governance",
  name: "AI Governance Accelerator",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "Et 4-6 ugers forløb der bygger en fungerende AI governance-struktur: governance-model med klart ejerskab, RACI, beslutningsfora, risikomodel og implementerings-roadmap.",
  url: "https://www.weleadprojects.com/ydelser/ai-governance-accelerator",
};

const leverancer = [
  {
    title: "Governance-model med klart ejerskab",
    body: "En konkret governance-model der definerer, hvem der ejer AI-risiko, hvem der godkender nye AI-projekter og hvem der fører tilsyn med eksisterende systemer.",
    more: "De fleste AI governance-initiativer strander, fordi ejerskabet er uklart. En bestyrelse eller et udvalg uden mandat til at stoppe et projekt, er ikke governance — det er rådgivning. Vi designer modellen til at give reelt mandat til de mennesker der allerede har autoritet i organisationen, og kobler AI-governance til eksisterende risikostyring frem for at bygge et parallelt system.",
  },
  {
    title: "RACI og roller på tværs af IT, forretning og compliance",
    body: "Præcis afklaring af, hvem der er Responsible, Accountable, Consulted og Informed for beslutninger om AI-systemer — på tværs af de funktioner der i praksis er involveret.",
    more: "AI-projekter involverer typisk mindst tre funktioner der ikke normalt taler sammen: IT/arkitektur, forretningsejerne og compliance/legal. RACI-modellen oversættes til et sprog og en struktur, der giver mening for alle tre grupper, og vi faciliterer den nødvendige afklaring af overlap og gråzoner direkte med de involverede parter.",
  },
  {
    title: "Beslutningsfora og eskaleringsmodel",
    body: "En operationel model for, hvornår og hvordan beslutninger om AI træffes, hvem der mødes, hvad der besluttes på hvilket niveau, og hvad der eskaleres.",
    more: "Uden en klar eskaleringsmodel ender AI-beslutninger enten hos IT-chefen (for smal) eller direktionen (for tung). Vi designer et beslutningshierarki der matcher jeres eksisterende governance-strukturer og calibrerer, hvilke beslutninger der kan træffes decentralt og hvilke der kræver central godkendelse.",
  },
  {
    title: "Risikomodel og arkitektur-guardrails",
    body: "Et sæt principper og guardrails der definerer, hvilke AI-teknologier og -mønstre I accepterer, hvilke kræver særlig godkendelse og hvilke I undgår.",
    more: "Guardrails er ikke det samme som forbud. De er præcise afgrænsninger der giver udviklere og leverandører klare svar på spørgsmålet: 'Må vi bruge dette?' uden at eskalere til ledelsen for hvert lille valg. Vi baserer dem på jeres faktiske systemlandskab, EU AI Act-krav og industristandarder for jeres sektor.",
  },
  {
    title: "Prioriteret implementerings-roadmap",
    body: "En konkret plan for de vigtigste implementeringstiltag: hvad der skal på plads inden for 90 dage, hvad der hører til i næste budgetrunde og hvad der kan håndteres løbende.",
    more: "Roadmappen er ikke en ønskeliste. Den er en prioriteret handlingsplan baseret på risiko, ressourcebehov og organisatorisk modenhed. Vi estimerer hvad der faktisk kræves af indsats, og giver ledelsen et grundlag for at allokere ressourcer frem for at starte en ny analyse.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kortlægning og assessment",
    body: "Uge 1-2: Vi gennemgår jeres eksisterende governance-strukturer, AI-systemer og de beslutningsveje der allerede er i brug. Interviews med IT, forretning og compliance.",
  },
  {
    step: "02",
    title: "Design og validering",
    body: "Uge 2-4: Udkast til governance-model, RACI og beslutningsfora valideres i workshops med centrale interessenter. Vi justerer løbende baseret på feedback.",
  },
  {
    step: "03",
    title: "Risikomodel og guardrails",
    body: "Uge 3-5: Risikomodel og arkitektur-guardrails udarbejdes i samarbejde med IT-arkitektur og compliance. Forankres i eksisterende risikostyring.",
  },
  {
    step: "04",
    title: "Leverance og overdragelse",
    body: "Uge 5-6: Færdig governance-pakke præsenteres for ledelsen. Roadmap godkendes. Vi overdrage med mundtlig briefing og skriftlig dokumentation.",
  },
];

const faqs = [
  {
    q: "Hvad koster AI Governance Accelerator?",
    a: "275.000 kr. ekskl. moms for et fuldt 4-6 ugers forløb. Prisen inkluderer alle workshops, interviews, dokumentation og ledelsespræsentation.",
  },
  {
    q: "Kræver det et forudgående AI Systems Audit?",
    a: "Nej, ikke nødvendigvis. Hvis I allerede har et rimeligt overblik over jeres AI-systemer, kan vi starte direkte med Acceleratoren. Har I ingen kortlægning, anbefaler vi Auditen som første skridt, da governance-modellen skal bygge på et faktisk billede af systemlandskabet.",
  },
  {
    q: "Hvad kræver det af os tidsmæssigt?",
    a: "Typisk 2-3 timers engagement om ugen fra nøglepersoner i IT, forretning og compliance. Vi tilrettelægger workshops, så de forstyrrer daglig drift mindst muligt. Den største enkeltindsats er en halv dag til godkendelsespræsentation i uge 5-6.",
  },
  {
    q: "Ender det med endnu en rapport der ikke bruges?",
    a: "Det er præcis hvad vi forsøger at undgå. Governance-modellen designes til at virke inden for jeres eksisterende beslutningsstrukturer, ikke som et parallelt system. Vi validerer løbende med de mennesker der skal bruge den — ikke kun med dem der bestiller den.",
  },
  {
    q: "Hvad sker der efter leverancen?",
    a: "I bestemmer selv. Acceleratoren er komplet som selvstændig leverance. Har I brug for hjælp til at drive implementeringen, kan vi fortsætte som Implementation Partner, men det er ingen forudsætning.",
  },
  {
    q: "Gælder det kun EU AI Act, eller dækker det bredere?",
    a: "Governance-modellen adresserer EU AI Act-krav, men er designet til at dække AI-governance bredt: ejerskab, risikostyring, beslutningsveje og guardrails. Compliance er et delmål, ikke det eneste mål.",
  },
];

const hvemErDetFor = [
  "I har et rimeligt overblik over jeres AI-systemer, men ingen klar governance-struktur",
  "Ingen ved præcis, hvem der ejer AI-risiko eller godkender nye AI-projekter",
  "EU AI Act-fristen nærmer sig og I mangler dokumentation for tilsyn og ejerskab",
  "AI-beslutninger eskaleres tilfældigt og inkonsistent, enten for langt op eller for langt ned",
  "I har forsøgt at etablere AI governance internt, men det er kørt fast i organisation eller prioriteter",
  "Revisorer, bestyrelse eller partnere har spurgt til jeres AI governance og I har ikke et godt svar",
];

export default function AiGovernanceAcceleratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="AI Governance"
        title="AI Governance Accelerator"
        subtitle="En fungerende governance-struktur på 4-6 uger. Klart ejerskab, beslutningsveje og risikomodel — forankret i jeres organisation, ikke i en rapport der samler støv."
        image="/Graphics/AdobeStock_828719609.webp"
      />

      {/* PRODUKT-BOX */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 p-10" style={{ borderColor: RED }}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>4–6 uger</div>
                <div className="text-sm text-gray-500">Intensivt forløb med workshops og interviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>5 leverancer</div>
                <div className="text-sm text-gray-500">Governance, RACI, beslutningsfora, risikomodel, roadmap</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>275.000 kr.</div>
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
            De fleste virksomheder ved godt, at de mangler en AI governance-struktur. Problemet er ikke viden — det er, at initiativer til at bygge den typisk enten strander i organisation, drukner i konsulentrapporter eller lander som principper ingen ved, hvem der skal håndhæve.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            AI Governance Accelerator er designet til at undgå netop det. Vi bygger governance-strukturen direkte i samspil med IT, forretning og compliance, validerer undervejs med de mennesker der skal bruge den, og leverer en model der virker inden for jeres eksisterende beslutningsstrukturer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Forløbet afsluttes med en komplet governance-pakke og en roadmap ledelsen kan godkende og allokere ressourcer til. Ikke et udgangspunkt for endnu en analyse.
          </p>
        </div>
      </section>

      {/* LEVERANCER */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad I får</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fem konkrete leverancer</h2>
          </div>
          <ExpandableCards items={leverancer} />
        </div>
      </section>

      {/* PROCES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Forløbet</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire faser over 4–6 uger</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: RED }}
                >
                  {s.step}
                </div>
                <h3 style={{ color: DARK }} className="font-bold text-base mb-3">{s.title}</h3>
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
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Seks situationer, hvor Acceleratoren giver mening</h2>
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

      {/* SAMMENHÆNG MED ØVRIGE PRODUKTER */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Sammenhæng</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Del af et større program</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Acceleratoren kan bruges som selvstændigt forløb, men indgår også som andet trin i AI Governance Program. Har I ikke kortlagt jeres AI-systemer endnu, anbefaler vi at starte med AI Systems Audit. Har I brug for hjælp til at drive implementeringen efter Acceleratoren, fortsætter vi som Implementation Partner.
          </p>
          <Link
            href="/ydelser/ai-governance-program"
            className="inline-flex items-center gap-2 font-semibold text-sm"
            style={{ color: RED }}
          >
            Se alle tre produkter og sammenligningsmatrix →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Ofte stillede spørgsmål</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY }} className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-4">Klar til at bygge en governance-struktur der virker?</h2>
          <p className="text-white opacity-70 mb-8 leading-relaxed">
            275.000 kr. ekskl. moms. Book et møde, og vi afklarer om Acceleratoren er det rigtige næste skridt for jer.
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
