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

const services = [
  {
    icon: "/Graphics/Services-3.png",
    title: "Planlægning og Styring",
    intro: "Vi leverer detaljeret planlægning skræddersyet til dit projekts specifikke behov, også inden opstart.",
    bullets: [
      "Projektplan og milepælsstruktur",
      "Ressource- og kapacitetsplanlægning",
      "Budgetopfølgning og scope management",
      "Rapportering og statusopdateringer til ledelsen",
    ],
  },
  {
    icon: "/Graphics/Services-8.png",
    title: "Koordinering og Risikoreduktion",
    intro: "Vi identificerer og afbøder potentielle risici tidligt for at sikre, at dit projekt forbliver på sporet og inden for budgettet.",
    bullets: [
      "Risikoidentifikation og risikoregister",
      "Proaktiv eskalering og handlingsplaner",
      "Afhængighedsstyring på tværs af teams",
      "Løbende kvalitetskontrol og review-gates",
    ],
  },
  {
    icon: "/Graphics/Services-7.png",
    title: "Kommunikationshjælp",
    intro: "Vi holder ALTID relevante deltagere og interessenter informeret med effektiv kommunikationsstøtte.",
    bullets: [
      "Interessentanalyse og kommunikationsplan",
      "Facilitering af møder og workshops",
      "Udarbejdelse af beslutningsoplæg og præsentationer",
      "Dokumentation og videndeling",
    ],
  },
  {
    icon: "/Graphics/Services-4.png",
    title: "Effektivt Workflow",
    intro: "Vi optimerer arbejdsgange og holder projekter på sporet med strukturerede workflow-strategier.",
    bullets: [
      "Agile og hybrid projektmetoder",
      "Procesoptimering og automatisering",
      "Tooling-setup (Jira, DevOps, Planner m.fl.)",
      "Sprint-planlægning og backlog management",
    ],
  },
  {
    icon: "/Graphics/Services-6.png",
    title: "Det Effektive Team",
    intro: "Udnyt styrken i teamwork ved at forbedre kommunikationen og samarbejdet mod et fælles projektmål.",
    bullets: [
      "Onboarding og teamopsætning",
      "Rolleafklaring og RACI-modeller",
      "Konflikthåndtering og facilitering",
      "Sidemandsoplæring og mentoring",
    ],
  },
  {
    icon: "/Graphics/Services-5.png",
    title: "Innovative Løsninger",
    intro: "Vi implementerer kreative løsninger for at overvinde projektudfordringer og levere resultater ud over forventningerne.",
    bullets: [
      "Enterprise Architecture og solution design",
      "Cloud-transformationer og migrationer",
      "AI-implementering og AI-governance",
      "IT-strategi og digitaliseringsrådgivning",
      "Proof of Concept og pilotprojekter",
    ],
  },
];

const competencies = [
  {
    icon: "/Graphics/planning_1980602.webp",
    title: "Projekt Planlægning",
    body: "Projektplanlægningsopgaver er afgørende for at skitsere omfanget, målene og tidsplanen for et projekt, og sikre at alle aktiviteter er velorganiserede og kan eksekveres effektivt.",
  },
  {
    icon: "/Graphics/process_7879828.webp",
    title: "Projekt Styring",
    body: "Projektudførelsesopgaver fokuserer på gennemførelsesfasen, hvor de planlagte aktiviteter sættes i værk for at nå projektets mål, typisk med agilmetodiske erfaringsprocesser.",
  },
  {
    icon: "/Graphics/evaluation.webp",
    title: "Risiko Styring",
    body: "Risikostyring er planlægningen og styringen til at hjælpe kunden med at forstå og anvende principperne for at identificere, vurdere og afbøde risici i forskellige projektkontekster.",
  },
  {
    icon: "/Graphics/application.webp",
    title: "IT Arkitektur",
    body: "IT-arkitektur involverer typisk udarbejdelse af omfattende dokumentation, der skitserer design og struktur af IT-systemer, og dækker alle relevante arkitekturaspekter.",
  },
  {
    icon: "/Graphics/management.webp",
    title: "Enterprise Arkitektur",
    body: "Enterprise Architecture opgaver involverer udvikling af en omfattende ramme der tilpasser IT-infrastruktur med forretningsprocesser og strategiske mål, herunder AI-governance og kortlægning af AI-aktiver som en integreret del af EA-rammeværket.",
  },
  {
    icon: "/Graphics/collaboration_11244653.webp",
    title: "Ledelsesrådgivning",
    body: "Ledelsesrådgivningsopgaver involverer typisk analyse af forretningsproblemer og levering af strategiske løsninger for at forbedre organisationens præstation.",
  },
  {
    icon: "/Graphics/application.webp",
    title: "AI Implementering",
    body: "Vi bistår med projektledelse af AI-implementeringer i alle faser, fra businesscase og datavurdering til PoC, pilot og fuld skalering. Vi kombinerer teknisk forståelse med stærk projektstyring og erfaring med de særlige risici der er forbundet med AI-projekter.",
  },
];

const deliveryMethods = [
  {
    label: "Traditionel",
    tag: "Vandfaldsmetoden",
    body: "Den traditionelle projektledelsesmodel er en lineær og sekventiel tilgang til styring af projekter. Den er bedst egnet til projekter med veldefinerede krav og stabile miljøer.",
    color: "#1C2544",
  },
  {
    label: "Agil",
    tag: "Iterativ tilgang",
    body: "Den agile projektledelsesmodel er en fleksibel og iterativ tilgang med fokus på løbende forbedringer og kundesamarbejde. Den leverer værdi trinvist gennem hele projektets livscyklus.",
    color: RED,
  },
  {
    label: "Hybrid",
    tag: "Kombineret tilgang",
    body: "Den hybride projektledelsesmodel kombinerer elementer fra både traditionelle og agile metoder og udnytter styrkerne fra begge tilgange til projektspecifikke behov.",
    color: "#4a6741",
  },
];

const process = [
  { step: "01", title: "Indledende konsultation", body: "Vi lytter til jeres udfordringer og mål, helt uforpligtende." },
  { step: "02", title: "Behovsanalyse og tilbud", body: "Vi afdækker scope, ressourcer og tidsplan og sender et konkret tilbud." },
  { step: "03", title: "Aftale og onboarding", body: "Formaliseret samarbejdsaftale og kickoff med alle centrale interessenter." },
  { step: "04", title: "Eksekvering og opfølgning", body: "Løbende fremdriftsrapportering, risikoopfølgning og statusmøder." },
  { step: "05", title: "Evaluering og afslutning", body: "Formel projektafslutning med erfaringsopsamling og efterfølgende support." },
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
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Projektmetoder</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">Tre tilgange til projektlevering</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Vi er ikke bundet af én model. Vi vælger den tilgang der passer bedst til netop jeres projekt og tilpasser os løbende undervejs.
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
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Vores proces i 5 trin</h2>
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
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Vores tilgang</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-5">1+1=3 Metoden</h2>
            <p className="text-gray-600 mb-4">
              Vores konsulenter arbejder ikke i siloer. Vi deler erfaringer og indsigter på tværs af projekter, så den viden der opbygges i ét projekt, direkte gavner det næste.
            </p>
            <p className="text-gray-600 mb-4">
              Det betyder, at du som kunde altid får en konsulent der er understøttet af et helt team, med adgang til specialistviden inden for Enterprise Architecture, infrastruktur og løsningsdesign.
            </p>
            <p className="text-gray-600">
              Vi kalder det 1+1=3, fordi to konsulenter i samspil leverer mere end dobbelt så meget værdi.
            </p>
            <p className="text-gray-600 mt-4">
              Vores Enterprise Architecture arbejde tager udgangspunkt i anerkendte industristandarder som{" "}
              <a
                href="https://www.opengroup.org/togaf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75"
                style={{ color: RED }}
              >
                TOGAF
              </a>{" "}
              , tilpasset den konkrete organisations modenhed og behov.
            </p>
          </div>
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: BORDER, background: OFFWHITE }}
          >
            <div className="text-6xl font-bold mb-4" style={{ color: RED }}>1+1=3</div>
            <p style={{ color: DARK }} className="font-semibold text-lg mb-3">Intern vidensdeling</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Alle konsulenter lærer og vokser på tværs af projekterne, backup fra kolleger og løbende erfaringsudveksling er en integreret del af måden, vi arbejder på.
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
