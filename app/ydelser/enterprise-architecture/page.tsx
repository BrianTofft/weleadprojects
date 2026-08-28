import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import ExpandableCards from "@/components/ExpandableCards";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise Architecture rådgivning",
  description:
    "Få professionel Enterprise Architecture rådgivning. Vi kobler systemlandskabet til jeres forretningsstrategi og sikrer et klart roadmap for vækst.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/enterprise-architecture",
  },
  openGraph: {
    title: "Enterprise Architecture | We Lead Projects",
    description: "Enterprise Architecture der kobler systemlandskabet til forretningsstrategien.",
    images: [{ url: "/Graphics/Roadmap-2.webp", width: 1200, height: 630, alt: "Enterprise Architecture hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Enterprise Architecture",
  name: "Enterprise Architecture",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "Enterprise Architecture der kobler systemlandskabet til forretningsstrategien. Kortlægning, prioritering og en arkitektur der understøtter vækst.",
  url: "https://www.weleadprojects.com/ydelser/enterprise-architecture",
};

const leverancer = [
  {
    title: "Kortlægning af systemlandskabet",
    body: "Overblik over hvilke systemer I har, hvad de bruges til, hvem der ejer dem, og hvordan de hænger sammen. Grundlaget for enhver arkitekturbeslutning.",
    more: "Vi kortlægger ikke kun systemerne, men også dataflowene mellem dem, så I kan se konsekvenserne af at ændre eller udskifte et enkelt system, før I står midt i det.",
  },
  {
    title: "Strategisk kobling",
    body: "Sikring af at teknologiinvesteringer understøtter forretningsstrategien, i stedet for at drive den i en tilfældig retning bestemt af den seneste leverandørsamtale.",
    more: "Vi oversætter forretningsmål til konkrete arkitekturprincipper, så investeringsbeslutninger kan begrundes i strategi frem for i, hvem der sidst holdt et overbevisende oplæg.",
  },
  {
    title: "Risiko- og gældsreduktion",
    body: "Identifikation af teknisk gæld og skjulte afhængigheder, før de bliver til dyre overraskelser i næste projekt.",
    more: "Vi prioriterer den tekniske gæld efter reel forretningsrisiko, ikke efter hvor gammel eller grim koden ser ud, så indsatsen går der hvor den faktisk betaler sig.",
    linkHref: "/indsigt/5-advarselstegn-it-projekt-korer-af-sporet",
    linkLabel: "Se 5 advarselstegn på at et projekt kører af sporet",
  },
  {
    title: "Roadmap og prioritering",
    body: "En realistisk, prioriteret teknisk roadmap, der tager udgangspunkt i jeres faktiske modenhed, ikke en generisk skabelon.",
    more: "Roadmappet bygges i etaper, der hver leverer selvstændig værdi, så I ikke skal vente to år på at se resultatet af arbejdet.",
  },
];

const faqs = [
  {
    q: "Skal vi implementere TOGAF fuldt ud for at få værdi?",
    a: "Nej. Vi tilpasser altid dybden af arbejdet til jeres modenhed og konkrete behov, i stedet for at følge et framework slavisk.",
  },
  {
    q: "Hvor lang tid tager en kortlægning af systemlandskabet?",
    a: "En indledende kortlægning kan typisk gennemføres på få uger, mens en fuldt etableret arkitekturfunktion er et længere forløb.",
  },
  {
    q: "Er Enterprise Architecture kun relevant for store virksomheder?",
    a: "Nej. Mellemstore virksomheder med et organisk vokset systemlandskab har ofte mindst lige så meget gavn af det.",
  },
  {
    q: "Hvad er forskellen på Enterprise Architecture og Solution Architecture?",
    a: "Enterprise Architecture arbejder på tværs af hele organisationen med strategi og sammenhæng, mens Solution Architecture fokuserer på arkitekturen i en enkelt løsning.",
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
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
          <p className="text-gray-600 leading-relaxed mb-4">
            Vores tilgang tager udgangspunkt i anerkendte industristandarder som{" "}
            <a href="https://www.opengroup.org/togaf" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
              TOGAF
            </a>, tilpasset den konkrete organisations modenhed og behov. Vil du forstå disciplinen bedre, kan du læse mere i vores artikel{" "}
            <Link href="/indsigt/enterprise-arkitektur-guide" style={{ color: RED }} className="underline hover:opacity-75">
              Hvad er Enterprise Architecture?
            </Link>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Vi begynder aldrig med et framework for frameworkets skyld. Vi begynder med at kortlægge, hvad der faktisk kører i produktion, hvem der ejer det, og hvilke forretningsprocesser der ville stoppe hvis det gik ned. Den øvelse alene afslører ofte flere risici og flere muligheder for konsolidering, end noget strategidokument har fanget.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi leverer</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire kerneopgaver inden for Enterprise Architecture</h2>
          </div>
          <ExpandableCards items={leverancer} />
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

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Sådan arbejder vi</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Enterprise Architecture: modenhed frem for et generisk framework</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi tilpasser dybden af arbejdet til organisationens faktiske modenhed. Et nystartet arkitekturteam har brug for noget andet end en virksomhed, der allerede har processer og governance på plads, men mangler eksekvering. Derfor starter vi ofte med en kort modenhedsvurdering, før vi anbefaler næste skridt.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Målet er aldrig et arkitekturdokument der ligger og samler støv. Det er en roadmap, ledelsen kan bruge til at prioritere investeringer, og som IT kan bruge til at sige nej til de projekter, der øger den tekniske gæld i stedet for at reducere den.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Ofte stillede spørgsmål om Enterprise Architecture</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
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
