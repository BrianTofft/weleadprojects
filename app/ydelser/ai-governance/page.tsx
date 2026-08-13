import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-governance-rådgivning",
  description:
    "Governance-rammer og EU AI Act-compliance til AI-adoption. Vi bygger AI-governance ind i jeres eksisterende Enterprise Architecture, ikke ved siden af.",
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
const BORDER = "#e8e0e0";

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
  { title: "Kortlægning af AI-aktiver", body: "Overblik over hvilke modeller og AI-funktioner der allerede er i brug, ofte skjult i SaaS-produkter, uden at nogen har set det samlet." },
  { title: "Risikoklassificering", body: "Vurdering af jeres AI-initiativer efter samme model som øvrige IT-systemer, herunder klassificering iht. EU AI Act." },
  { title: "Governance-struktur", body: "Klart ejerskab for AI-beslutninger, dataejerskab og modelgodkendelse, forankret i jeres eksisterende arkitekturfunktion." },
  { title: "AI-roadmap", body: "En prioriteret plan for hvornår I køber, tilpasser eller selv bygger AI-løsninger, baseret på jeres datamodenhed og strategiske mål." },
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
            De fleste virksomheder behandler AI-governance som noget der skal opfindes fra bunden af jura og compliance. Men risikoklassificering, dataejerskab og afhængighedskortlægning er præcis det, Enterprise Architecture allerede burde have styr på. Problemet er sjældent, at AI kræver en helt ny form for governance. Det er, at eksisterende arkitekturgovernance aldrig blev udvidet til at dække det.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi placerer AI-governance som en udvidelse af jeres eksisterende EA-funktion, ikke som et parallelt spor med sit eget sprog og sine egne processer. Det betyder samme risikoklassificeringsmodel for AI-systemer som for øvrige IT-systemer, samme dataejerskabsstruktur, og en arkitekt med reelt mandat til at sige nej til initiativer der ikke kan dokumentere deres dataforudsætninger.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Vil du forstå tankegangen bedre, kan du læse vores artikel{" "}
            <Link href="/indsigt/ai-governance-vs-ea-governance" style={{ color: RED }} className="underline hover:opacity-75">
              AI-governance vs. EA-governance
            </Link>, eller sætte dig ind i rammerne direkte via{" "}
            <a href="https://artificialintelligenceact.eu" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
              EU AI Act
            </a>.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi leverer</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire kerneopgaver</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {leverancer.map((l) => (
              <div key={l.title} className="bg-white rounded-2xl border p-7" style={{ borderColor: BORDER }}>
                <h3 style={{ color: DARK }} className="font-bold mb-2">{l.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
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

      <section style={{ background: OFFWHITE }} className="py-16 px-6 text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til at få styr på jeres AI-governance?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Kontakt os for en uforpligtende samtale om, hvor jeres organisation står i dag.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/#kontakt"
            style={{ background: RED }}
            className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
          >
            Kontakt os
          </Link>
          <Link
            href="/ydelser"
            style={{ color: DARK, borderColor: DARK }}
            className="border font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity inline-block"
          >
            Se alle ydelser
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
