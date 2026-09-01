import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ om AI Governance",
  description:
    "Svar på de mest stillede spørgsmål om AI governance, EU AI Act, AI Systems Audit og AI governance-forløb. Vi hjælper jer i gang.",
  alternates: {
    canonical: "https://www.weleadprojects.com/faq",
  },
  openGraph: {
    title: "FAQ om AI Governance | We Lead Projects",
    description: "Svar på de mest stillede spørgsmål om AI governance, EU AI Act compliance og AI Systems Audit.",
    images: [{ url: "/Hero2.webp", width: 1200, height: 630, alt: "We Lead Projects FAQ AI Governance" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";

const faqs = [
  {
    q: "Hvad er et AI Systems Audit, og hvad får vi ud af det?",
    a: "Et AI Systems Audit er en struktureret kortlægning af alle AI-systemer i jeres organisation, herunder hvilke data de behandler, hvilke beslutninger de understøtter, og hvilken risikoklasse de falder i under EU AI Act. Resultatet er et konkret overblik I kan handle på: hvilke systemer kræver øjeblikkelig opmærksomhed, hvilke er uproblematiske, og hvor skal I investere i governance-struktur. Audittet tager typisk 1-2 uger og koster 49.000 kr.",
  },
  {
    q: "Hvad kræver EU AI Act konkret af vores virksomhed?",
    a: "EU AI Act indfaser krav gradvist frem mod 2026-2027. For de fleste virksomheder betyder det primært tre ting: I skal vide hvilke AI-systemer I anvender, I skal klassificere dem efter risikoniveau, og højrisikosystemer kræver dokumentation, menneskeligt tilsyn og risikovurderinger. Forbudte systemer, typisk AI der manipulerer eller diskriminerer, skal afvikles allerede nu. Start med kortlægningen, så I ved hvad I faktisk har.",
  },
  {
    q: "Hvad er forskellen på AI-strategi og AI governance?",
    a: "AI-strategi handler om hvilke AI-muligheder I vil forfølge og hvordan AI understøtter forretningens mål. AI governance handler om at sikre, at AI bruges ansvarligt, kontrolleret og i overensstemmelse med lovgivning og egne politikker. De to hænger tæt sammen, men governance er det kontrollag der sikrer, at strategien ikke løber af sporet. Mange virksomheder har AI-ambitioner, men mangler styringen.",
  },
  {
    q: "Hvornår skal vi starte med AI governance?",
    a: "Nu. EU AI Act er ikke en fremtidig trussel, det er gældende ret. Og uanset compliance er god AI governance en forudsætning for at bruge AI med kontrol frem for med krydsede fingre. Jo mere AI I allerede anvender, jo mere presserende er det at kortlægge og strukturere. Start med et AI Systems Audit, det giver jer overblikket og handleplanen.",
  },
  {
    q: "Hvad adskiller jer fra rene AI-konsulenter?",
    a: "De fleste AI-konsulenter kender AI godt. Vi kender AI og organisationer. Vores baggrund er enterprise architecture og digital transformation, og det er den kombination der gør AI governance mulig i praksis. At forstå EU AI Act er en ting. At kortlægge AI-systemer i en organisation med 40 datasystemer og tre forretningsenheder og bygge en governance-struktur der faktisk holder, kræver Enterprise Architecture-forståelse. Det er vores kernekompetence.",
  },
  {
    q: "Hvad koster et AI governance-forløb?",
    a: "Vores AI Systems Audit koster 49.000 kr. og tager 1-2 uger. Et AI Governance Accelerator-forløb, der bygger den fulde governance-struktur, løber typisk over 8-12 uger. Implementation Partner er et løbende retainer-engagement. Vi tilbyder altid en uforpligtende indledende snak, så I kan vurdere, hvad der giver mening for jeres situation.",
  },
  {
    q: "Kan I hjælpe os med AI-systemer vi har købt udefra, ikke kun dem vi har bygget selv?",
    a: "Ja, og det er ofte her de største overraskelser gemmer sig. Mange virksomheder har mange AI-systemer de ikke selv har sat op, men som leverandører har aktiveret. CRM-systemer med AI-funktioner, HR-platforme med automatiserede beslutninger, rekrutteringsværktøjer. Alle disse falder under EU AI Act, og det er jeres ansvar som dataansvarlig at sikre compliance, ikke leverandørens.",
  },
  {
    q: "Hvad er risikoklassificering, og hvem er ansvarlig for den?",
    a: "EU AI Act deler AI-systemer op i fire risikoklasser: uacceptabel risiko (forbudt), høj risiko (krav om dokumentation og tilsyn), begrænset risiko (krav om gennemsigtighed) og minimal risiko (ingen særlige krav). Klassificeringen baseres på systemets formål og anvendelse, og det er jeres ansvar som organisation at have styr på hvilken klasse jeres systemer falder i. Det er netop det et AI Systems Audit kortlægger.",
  },
  {
    q: "Hvad er Enterprise Architecture, og hvorfor er det vigtigt for AI governance?",
    a: "Enterprise Architecture er en disciplin der kortlægger og strukturerer sammenhængen mellem forretningsprocesser, organisation, data og teknologi. I en AI governance-kontekst er det afgørende, fordi AI-systemer ikke eksisterer isoleret. De trækker på data fra andre systemer, understøtter forretningsprocesser og påvirker beslutninger. Uden et EA-perspektiv ender I med governance-dokumenter der ikke afspejler virkeligheden.",
  },
  {
    q: "Hvad sker der, hvis vi ikke overholder EU AI Act?",
    a: "Bøderne for overtrædelse af EU AI Act er betydelige. Overtrædelse af forbudsbestemmelserne kan medføre bøder på op til 35 millioner euro eller 7 procent af global omsætning. For andre overtrædelser er maksimum 15 millioner euro eller 3 procent af omsætning. Ud over de finansielle konsekvenser er der risiko for omdømmeskade og tab af kundernes tillid. Start forberedelserne nu, så I ikke havner i en krisetilstand.",
  },
  {
    q: "Kan vi starte småt og skalere governance-indsatsen over tid?",
    a: "Ja, og det anbefaler vi faktisk. Start med AI Systems Audit og få overblikket. Derefter ved I, hvilke systemer der kræver øjeblikkelig handling, og kan prioritere ressourcerne rigtigt. Et AI Governance Accelerator-forløb bygger den fulde struktur, men det er mere effektivt, når I ved hvad I har at gøre med. Governance behøver ikke koste en formue, det behøver at starte det rigtige sted.",
  },
  {
    q: "Hvad sker der, når governance-strukturen er på plads?",
    a: "AI governance er ikke et engangsprojekt. EU AI Act kræver løbende overvågning, og AI-brugen i jeres organisation vil ændre sig over tid. Nye systemer købes ind, eksisterende systemer opdateres, og lovgivningen præciseres. Vores Implementation Partner-model er designet til virksomheder der ønsker en løbende sparringspartner frem for en konsulent der afleverer et dokument og forsvinder.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <PageHeader
        label="FAQ"
        title="Spørgsmål om AI governance"
        subtitle="Find svar på de mest stillede spørgsmål om AI governance, EU AI Act compliance og hvad det kræver at komme i gang."
        image="/Graphics/Roadmap-1.webp"
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-4">
              AI governance er et relativt nyt felt, og vi møder mange af de samme spørgsmål fra virksomheder der overvejer at komme i gang. Hvad kræver EU AI Act egentlig? Hvad er et AI Systems Audit? Og hvad adskiller os fra de mange AI-konsulenter der er dukket op de seneste år?
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Her har vi samlet de spørgsmål vi oftest får. Svarene bygger ikke på generiske skabeloner, men på reel erfaring med at kortlægge AI-systemer, bygge governance-strukturer og implementere dem i organisationer med komplekse systemlandskaber.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vil du have et samlet overblik over EU AI Act, risikoklasser og tidslinje? Se vores{" "}
              <Link href="/eu-ai-act" className="underline hover:opacity-70" style={{ color: "#cc2222" }}>
                dedikerede EU AI Act-guide
              </Link>. Finder du ikke svar på det du leder efter, er du velkommen til at kontakte os direkte.
            </p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-16 px-6 bg-white border-t" style={{ borderColor: "#e8e0e0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ color: "#2d1a1a" }} className="text-2xl font-bold mb-4">AI governance-specialister med enterprise-baggrund</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We Lead Projects er baseret i Roskilde og hjælper virksomheder over hele Danmark med AI governance. Vi er ikke AI-teoretikere. Vi er enterprise arkitekter og transformationsledere der har specialiseret os i AI governance, fordi det er her enterprise architecture-kompetencen gør den afgørende forskel.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Siden 2018 har vi leveret over 50 enterprise-leverancer på tværs af brancher. Siden 2023 er AI governance vores primære fokus, drevet af EU AI Act og det voksende behov for struktureret AI-styring i danske virksomheder.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Du kan læse mere om de regulatoriske rammer på{" "}
            <a
              href="https://artificialintelligenceact.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
              style={{ color: RED }}
            >
              EU AI Acts officielle side
            </a>
            . Har du spørgsmål der ikke er besvaret ovenfor, kontakter du os direkte. Vi besvarer alle henvendelser senest næste hverdag.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-16 px-6 text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">
          Fandt du ikke svar på dit spørgsmål?
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Ring eller skriv til os. Vi besvarer alle henvendelser senest næste hverdag.
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
