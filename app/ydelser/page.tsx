import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ydelser",
  description: "Vi tilbyder professionel projektledelse, Enterprise Architecture, risikostyring og IT-transformationer. Se alle vores ydelser hos We Lead Projects.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser",
  },
  openGraph: {
    title: "Ydelser | We Lead Projects",
    description: "Planlægning, risikostyring, kommunikation og innovative løsninger. Se alle vores ydelser.",
    images: [{ url: "/Hero2.webp", width: 1200, height: 630, alt: "We Lead Projects Ydelser" }],
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
        title="Professionelle leverancer som sikrer succes"
        subtitle="Vi trækker på mangeårig erfaring og vores 1+1=3 metode til at levere projekter af enhver størrelse, fra målrettede rådgivningsforløb til store digitale transformationer."
        image="/Graphics/Project-Management-Consultancy.webp"
      />

      {/* KERNEYDELSER — links til dedikerede undersider */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Vores kerneydelser</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Tre discipliner, ét samlet tilbud</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/ydelser/projektledelse"
              className="group bg-white rounded-2xl border p-8 hover:shadow-lg transition-all"
              style={{ borderColor: BORDER }}
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-2">Projektledelse</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">Erfarne projektledere der tager ansvar for leverance, fra behovsafklaring til afslutning.</p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
            <Link
              href="/ydelser/enterprise-architecture"
              className="group bg-white rounded-2xl border p-8 hover:shadow-lg transition-all"
              style={{ borderColor: BORDER }}
            >
              <div className="text-3xl mb-4">🏗️</div>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-2">Enterprise Architecture</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">Vi kobler systemlandskabet til forretningsstrategien, så teknologi understøtter vækst.</p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
            <Link
              href="/ydelser/ai-strategi"
              className="group bg-white rounded-2xl border p-8 hover:shadow-lg transition-all"
              style={{ borderColor: BORDER }}
            >
              <div className="text-3xl mb-4">🤖</div>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-2">AI-strategi</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">En prioriteret AI-plan forankret i jeres faktiske data, arkitektur og organisatoriske kapacitet.</p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
            <Link
              href="/ydelser/ai-governance"
              className="group bg-white rounded-2xl border p-8 hover:shadow-lg transition-all"
              style={{ borderColor: BORDER }}
            >
              <div className="text-3xl mb-4">⚖️</div>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-2">AI-governance</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">Governance-rammer og EU AI Act-compliance til struktureret AI-adoption.</p>
              <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
            <Link
              href="/ydelser/ai-systems-audit"
              className="group bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all"
              style={{ borderColor: RED }}
            >
              <div className="text-3xl mb-4">🔍</div>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-2">AI Systems Audit</h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">Kortlæg jeres AI-systemer og få risikoklassificering efter EU AI Act. 2 dage, fast pris, konkret leverance.</p>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{ background: "#fef2f2", color: RED }}
              >
                Fast pris & defineret output
              </span>
              <div>
                <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1">
                  Læs mere <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Alle ydelser</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Detaljeret overblik</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border p-8"
                style={{ borderColor: BORDER, background: OFFWHITE }}
              >
                <div className="w-16 h-16 mb-5 rounded-xl flex items-center justify-center" style={{ background: "#eef3f9" }}>
                  <img src={s.icon} alt={s.title} width={40} height={40} className="w-10 h-10 object-contain" style={{ mixBlendMode: "multiply" }} />
                </div>
                <h2 style={{ color: DARK }} className="text-xl font-bold mb-2">{s.title}</h2>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{s.intro}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <span style={{ color: RED }} className="mt-0.5 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMPETENCER */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Faglige kompetencer</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">Omfattende rådgivende løsninger</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Vi besidder bred erfaring inden for projektledelse, Enterprise Architecture og løsningsarkitektur, og kan bistå inden for alle følgende fagområder.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {competencies.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border p-7 flex flex-col" style={{ borderColor: BORDER }}>
                <div className="w-14 h-14 mb-5 rounded-xl flex items-center justify-center" style={{ background: "#eef3f9" }}>
                  <img src={c.icon} alt={c.title} width={36} height={36} className="w-9 h-9 object-contain" style={{ mixBlendMode: "multiply" }} />
                </div>
                <h3 style={{ color: DARK }} className="font-bold text-base mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
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
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til at komme i gang?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Kontakt os og fortæl om dit projekt. Vi finder den rigtige løsning til jer.
        </p>
        <Link
          href="/#kontakt"
          style={{ background: RED }}
          className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
        >
          Kontakt os
        </Link>
      </section>

      <Footer />
    </>
  );
}
