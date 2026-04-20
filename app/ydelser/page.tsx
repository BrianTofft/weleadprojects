import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ydelser",
  description: "Vi tilbyder professionel projektledelse, Enterprise Architecture, risikostyring og IT-transformationer. Se alle vores ydelser hos We Lead Projects.",
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const services = [
  {
    icon: "📋",
    title: "Planlægning og Styring",
    intro: "Vi leverer detaljeret planlægning skræddersyet til dit projekts specifikke behov — også inden opstart.",
    bullets: [
      "Projektplan og milepælsstruktur",
      "Ressource- og kapacitetsplanlægning",
      "Budgetopfølgning og scope management",
      "Rapportering og statusopdateringer til ledelsen",
    ],
  },
  {
    icon: "🛡️",
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
    icon: "💬",
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
    icon: "⚡",
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
    icon: "🤝",
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
    icon: "💡",
    title: "Innovative Løsninger",
    intro: "Vi implementerer kreative løsninger for at overvinde projektudfordringer og levere resultater ud over forventningerne.",
    bullets: [
      "Enterprise Architecture og solution design",
      "Cloud-transformationer og migrationer",
      "IT-strategi og digitaliseringsrådgivning",
      "Proof of Concept og pilotprojekter",
    ],
  },
];

const process = [
  { step: "01", title: "Indledende konsultation", body: "Vi lytter til jeres udfordringer og mål — helt uforpligtende." },
  { step: "02", title: "Behovsanalyse og tilbud", body: "Vi afdækker scope, ressourcer og tidsplan og sender et konkret tilbud." },
  { step: "03", title: "Aftale og onboarding", body: "Formaliseret samarbejdsaftale og kickoff med alle centrale interessenter." },
  { step: "04", title: "Eksekvering og opfølgning", body: "Løbende fremdriftsrapportering, risikoopfølgning og statusmøder." },
  { step: "05", title: "Evaluering og afslutning", body: "Formel projektafslutning med erfaringsopsamling og efterfølgende support." },
];

export default function YdelserPage() {
  return (
    <>
      <Nav />

      {/* HEADER */}
      <section style={{ background: OFFWHITE }} className="pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Ydelser</p>
          <h1 style={{ color: DARK }} className="text-4xl md:text-5xl font-bold mb-4">
            Professionelle leverancer som sikrer succes
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Vi trækker på mangeårig erfaring og vores 1+1=3 metode til at levere projekter af enhver størrelse — fra målrettede rådgivningsforløb til store digitale transformationer.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border p-8"
                style={{ borderColor: BORDER, background: OFFWHITE }}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
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
              Det betyder, at du som kunde altid får en konsulent der er understøttet af et helt team — med adgang til specialistviden inden for Enterprise Architecture, infrastruktur og løsningsdesign.
            </p>
            <p className="text-gray-600">
              Vi kalder det 1+1=3 — fordi to konsulenter i samspil leverer mere end dobbelt så meget værdi.
            </p>
          </div>
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: BORDER, background: OFFWHITE }}
          >
            <div className="text-6xl font-bold mb-4" style={{ color: RED }}>1+1=3</div>
            <p style={{ color: DARK }} className="font-semibold text-lg mb-3">Intern vidensdeling</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Alle konsulenter lærer og vokser på tværs af projekterne — backup fra kolleger og løbende erfaringsudveksling er en integreret del af måden, vi arbejder på.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: OFFWHITE }} className="py-16 px-6 text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til at komme i gang?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Kontakt os og fortæl om dit projekt — vi finder den rigtige løsning til jer.
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
