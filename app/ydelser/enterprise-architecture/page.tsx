import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise Architecture-rådgivning",
  description:
    "Enterprise Architecture der kobler systemlandskabet til forretningsstrategien. Kortlægning, prioritering og en arkitektur der understøtter vækst.",
  openGraph: {
    title: "Enterprise Architecture | We Lead Projects",
    description: "Enterprise Architecture der kobler systemlandskabet til forretningsstrategien.",
    images: [{ url: "/Graphics/Roadmap-2.webp", width: 1200, height: 630, alt: "Enterprise Architecture hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const leverancer = [
  { title: "Kortlægning af systemlandskabet", body: "Overblik over hvilke systemer I har, hvad de bruges til, hvem der ejer dem, og hvordan de hænger sammen. Grundlaget for enhver arkitekturbeslutning." },
  { title: "Strategisk kobling", body: "Sikring af at teknologiinvesteringer understøtter forretningsstrategien, i stedet for at drive den i en tilfældig retning bestemt af den seneste leverandørsamtale." },
  { title: "Risiko- og gældsreduktion", body: "Identifikation af teknisk gæld og skjulte afhængigheder, før de bliver til dyre overraskelser i næste projekt." },
  { title: "Roadmap og prioritering", body: "En realistisk, prioriteret teknisk roadmap der tager udgangspunkt i jeres faktiske modenhed, ikke en generisk skabelon." },
];

const naarDetGiverMening = [
  "I gennemgår en digital transformation eller cloud-migrering",
  "IT-porteføljen er vokset organisk og er svær at overskue",
  "I integrerer systemer efter en fusion eller et opkøb",
  "Nye IT-projekter støder regelmæssigt på uventede afhængigheder",
  "Ingen kan i dag svare klart på, hvilke systemer der understøtter hvilke forretningsprocesser",
];

export default function EnterpriseArchitecturePage() {
  return (
    <>
      <Nav />

      <PageHeader
        label="Ydelser"
        title="Enterprise Architecture"
        subtitle="Vi kobler systemlandskabet til forretningsstrategien, så teknologiinvesteringer understøtter vækst frem for at hæmme den."
        image="/Graphics/Roadmap-2.webp"
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Systemlandskabet i de fleste mellemstore virksomheder er ikke bygget. Det er vokset. Et CRM her, et ERP der, et par integrationer ingen rigtig ved hvordan virker, men ingen tør røre. Det sker ikke fordi folk er uansvarlige, det sker fordi hver beslutning gav mening der og da. Det er først når man ser det samlet, at man forstår problemet.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Enterprise Architecture handler grundlæggende om at undgå den situation, eller komme ud af den. Det er ikke et IT-projekt. Det er en ledelsesdisciplin, der skaber et fælles sprog mellem forretning og teknologi, og gør det muligt at træffe bedre beslutninger om investeringer og forandringer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Vores tilgang tager udgangspunkt i anerkendte industristandarder som{" "}
            <a href="https://www.opengroup.org/togaf" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
              TOGAF
            </a>, tilpasset den konkrete organisations modenhed og behov. Vil du forstå disciplinen bedre, kan du læse mere i vores artikel{" "}
            <Link href="/indsigt/enterprise-arkitektur-guide" style={{ color: RED }} className="underline hover:opacity-75">
              Hvad er Enterprise Architecture?
            </Link>
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
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Fem tegn på at I har brug for EA-rådgivning</h2>
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
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til at skabe overblik?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Kontakt os for en uforpligtende samtale om jeres systemlandskab, uanset hvor I står i dag.
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
