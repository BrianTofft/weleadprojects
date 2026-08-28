import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import ExpandableCards from "@/components/ExpandableCards";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-governance-rådgivning",
  description:
    "Få professionel AI-governance-rådgivning og EU AI Act-compliance. Vi integrerer AI-governance direkte i jeres eksisterende Enterprise Architecture.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/ai-governance",
  },
  openGraph: {
    title: "AI-governance | We Lead Projects",
    description: "Governance-rammer og EU AI Act-compliance til struktureret AI-adoption.",
    images: [{ url: "/Graphics/GettyImages-517041045_optimized.webp", width: 1200, height: 630, alt: "AI-governance hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI-governance",
  name: "AI-governance",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "Governance-rammer og EU AI Act-compliance til AI-adoption. Vi bygger AI-governance ind i jeres eksisterende Enterprise Architecture, ikke ved siden af.",
  url: "https://www.weleadprojects.com/ydelser/ai-governance",
};

const leverancer = [
  {
    title: "Kortlægning af AI-aktiver",
    body: "Overblik over hvilke modeller og AI-funktioner der allerede er i brug, ofte skjult i SaaS-produkter, uden at nogen har set det samlet.",
    more: "Vi kortlægger både de AI-funktioner der er bevidst indkøbt, og dem, der er sluppet ind som en del af opdateringer til eksisterende SaaS-værktøjer, ofte uden at nogen aktivt tog stilling til det.",
  },
  {
    title: "Risikoklassificering",
    body: "Vurdering af jeres AI-initiativer efter samme model som øvrige IT-systemer, herunder klassificering iht. EU AI Act.",
    more: "Klassificeringen afgør, hvilke krav til dokumentation og menneskeligt tilsyn der gælder, så I ikke bruger unødige ressourcer på lavrisiko-systemer eller overser kravene til de kritiske.",
  },
  {
    title: "Governance-struktur",
    body: "Klart ejerskab for AI-beslutninger, dataejerskab og modelgodkendelse, forankret i jeres eksisterende arkitekturfunktion.",
    more: "Vi bygger governance-strukturen ind i den arkitekturfunktion I allerede har, i stedet for at oprette et parallelt AI-udvalg med sine egne processer og sit eget sprog.",
    linkHref: "/indsigt/ai-governance-guide",
    linkLabel: "Læs den komplette guide til AI governance",
  },
  {
    title: "AI-roadmap",
    body: "En prioriteret plan for hvornår I køber, tilpasser eller selv bygger AI-løsninger, baseret på jeres datamodenhed og strategiske mål.",
    more: "Roadmappet tager udgangspunkt i, hvor jeres data og arkitektur faktisk står i dag, ikke i hvor hurtigt konkurrenterne angiveligt bevæger sig.",
  },
];

const faqs = [
  {
    q: "Hvornår gælder EU AI Act for vores virksomhed?",
    a: "Det afhænger af hvilken rolle I har i forhold til AI-systemet og dets risikoklasse. Vi hjælper med at afklare det som en del af kortlægningen.",
  },
  {
    q: "Skal vi stoppe eksisterende AI-initiativer, mens vi får styr på governance?",
    a: "Nej, målet er sjældent at bremse initiativer, men at sikre at de kan dokumentere deres dataforudsætninger og stå distancen ved en gennemgang.",
  },
  {
    q: "Er AI-governance det samme som GDPR-compliance?",
    a: "Nej. GDPR er en del af billedet, men AI-governance omfatter også risikoklassificering, modelgodkendelse og løbende tilsyn med systemer der ændrer sig over tid.",
  },
  {
    q: "Hvor starter vi, hvis vi slet ikke har styr på det i dag?",
    a: "Vi starter altid med en kortlægning af, hvilke AI-funktioner der allerede er i brug, før vi bygger en governance-struktur ovenpå.",
  },
];

const naarDetGiverMening = [
  "Der findes allerede AI-eksperimenter spredt ud i organisationen uden koordinering",
  "Ingen kan i dag svare klart på, hvem der ejer risikovurderingen af et AI-projekt",
  "I skal forholde jer til EU AI Act, men ved ikke hvor I starter",
  "Ledelsen har besluttet en AI-strategi, men den har ikke rod i det faktiske systemlandskab",
  "I overvejer jeres første AI-implementering og vil undgå de klassiske faldgruber",
];

export default function AiGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="Ydelser"
        title="AI-governance"
        subtitle="Governance-rammer, EU AI Act-compliance og en struktureret tilgang til AI-adoption, så AI-initiativer skaber forretningsværdi frem for compliance-risiko."
        image="/Graphics/GettyImages-517041045_optimized.webp"
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            De fleste virksomheder behandler AI-governance, som noget der skal opfindes fra bunden af jura og compliance. Men risikoklassificering, dataejerskab og afhængighedskortlægning er præcis det, Enterprise Architecture allerede burde have styr på. Problemet er sjældent, at AI kræver en helt ny form for governance. Det er, at eksisterende arkitekturgovernance aldrig blev udvidet til at dække det.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi placerer AI-governance som en udvidelse af jeres eksisterende EA-funktion, ikke som et parallelt spor med sit eget sprog og sine egne processer. Det betyder samme risikoklassificeringsmodel for AI-systemer som for øvrige IT-systemer, samme dataejerskabsstruktur, og en arkitekt med reelt mandat til at sige nej til initiativer der ikke kan dokumentere deres dataforudsætninger.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vil du forstå tankegangen bedre, kan du læse vores artikel{" "}
            <Link href="/indsigt/ai-governance-vs-ea-governance" style={{ color: RED }} className="underline hover:opacity-75">
              AI-governance vs. EA-governance
            </Link>, eller sætte dig ind i rammerne direkte via{" "}
            <a href="https://artificialintelligenceact.eu" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
              EU AI Act
            </a>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mange af de AI-eksperimenter, vi støder på hos kunder, er allerede i produktion, uden at nogen formelt godkendte dem. Det er sjældent et bevidst brud på reglerne. Det sker, fordi et team fandt en hurtig løsning på et konkret problem, og ingen stoppede op og spurgte, hvem der ejer risikoen. Vores rolle er ikke at bremse den slags initiativer, men at sikre at de kan stå distancen, når krav om dokumentation og tilsyn for alvor rammer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
              EU AI Act
            </a>{" "}
            (Regulation (EU) 2024/1689) trådte i kraft 1. august 2024 og opererer med fire risikokategorier: uacceptabel risiko (forbudt), højrisiko (strenge krav til dokumentation og tilsyn), begrænset risiko (transparenskrav) og minimal risiko. Reglerne er indfaset trinvist: forbudte AI-praksisser og AI-literacy-krav fra februar 2025, governance-regler og forpligtelser for generelle AI-modeller fra august 2025, og fra 2. august 2026 gælder loven bredt, herunder kravene til højrisikosystemer og transparens. Sidste fase følger i august 2027 for højrisikosystemer der indgår i allerede regulerede produkter. Se de fulde detaljer og tidsplan hos{" "}
            <a href="https://ai-act-service-desk.ec.europa.eu/en/faq" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
              EU's AI Act Service Desk
            </a>.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi leverer</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire kerneopgaver inden for AI-governance</h2>
          </div>
          <ExpandableCards items={leverancer} />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvornår giver det mening</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Fem tegn på at I har brug for AI-governance-rådgivning</h2>
          <ul className="space-y-3">
            {naarDetGiverMening.map((n) => (
              <li key={n} className="flex items-start gap-3 text-gray-600">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Sådan arbejder vi</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">AI-governance der følger med, ikke bagefter</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi starter med at kortlægge, ikke med at skrive politikker. Før nogen kan tage stilling til risiko, skal I vide, hvilke AI-funktioner der rent faktisk er i brug, hvem der har adgang til dem, og hvilke data de trækker på. Den kortlægning alene overrasker ofte ledelsen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Derefter bygger vi en governance-model, der kan følge med udviklingen, i stedet for at blive forældet efter seks måneder. Det kræver klart ejerskab og en proces for løbende revurdering, ikke et engangsdokument der arkiveres og glemmes.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Ofte stillede spørgsmål om AI-governance</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til at få styr på jeres AI-governance?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Book et gratis intromøde, eller kontakt os for en uforpligtende samtale om, hvor jeres organisation står i dag.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/find-ai-konsulent"
            style={{ background: RED }}
            className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
          >
            Book intromøde
          </Link>
          <Link
            href="/#kontakt"
            style={{ color: DARK, borderColor: DARK }}
            className="border font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity inline-block"
          >
            Kontakt os
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
