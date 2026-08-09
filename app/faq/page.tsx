import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Svar på de mest stillede spørgsmål om We Lead Projects. Vores arbejdsproces, samarbejde, priser og hvad der gør os specielle.",
  openGraph: {
    title: "FAQ | We Lead Projects",
    description: "Svar på de mest stillede spørgsmål om projektledelse og samarbejde med We Lead Projects.",
    images: [{ url: "/Hero2.webp", width: 1200, height: 630, alt: "We Lead Projects FAQ" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";

const faqs = [
  {
    q: "Hvordan kan I hjælpe min forretning?",
    a: "Vi tilbyder ekspertise og strategisk vejledning tilpasset dine forretningsmål, effektiv projektplanlægning og udførelse samt tidlig risikostyring og reduktion, så dit projekt lykkes.",
  },
  {
    q: "Hvordan ser processen ud for jeres ydelser?",
    a: "Vores samarbejde forløber i syv faser: indledende konsultation, behovsanalyse med tilbud, formaliseret aftale og onboarding, projektplanlægning med interessenter, eksekvering med løbende opfølgning, evaluering og feedback samt formel projektafslutning med efterfølgende support.",
  },
  {
    q: "Hvor lang tid varer et projekt typisk?",
    a: "Projektvarighed afhænger af kompleksitet. Vi tilbyder kortvarige engagementer (1–3 måneder) for afgrænsede problemstillinger, mellemfristede (3–6 måneder) for større forandringer, og langsigtede engagementer (6–12 måneder eller mere) for store transformationer.",
  },
  {
    q: "Kan I levere kunde cases eller kundeudtalelser?",
    a: "Ja. Vi har bl.a. cases inden for forretningsudviklingsplanlægning i telecom-sektoren, implementering af IT-systemer samt digitale transformationer på tværs af brancher.",
  },
  {
    q: "Hvad gør jeres virksomhed speciel?",
    a: "Vi skræddersyr løsninger til hvert projekt, har dokumenteret erfaring på tværs af brancher, anvender innovative metoder med de nyeste trends, prioriterer transparent kommunikation og tilbyder omfattende support efter projektafslutning.",
  },
  {
    q: "Arbejder I kun med IT-projekter?",
    a: "Nej. Vi arbejder på tværs af brancher, fra telecom og finans til det offentlige og industrien. Vores konsulenter har erfaring med alt fra infrastrukturprojekter og cloud-transformationer til organisationsændringer og strategiske digitaliseringsforløb.",
  },
  {
    q: "Kan vi hyre én konsulent frem for et helt team?",
    a: "Ja. Vi kan levere en enkelt senior konsulent til at supplere dit eksisterende team, eller stille et helt projektteam til rådighed, alt efter behov og projektets kompleksitet. Vi tilpasser altid løsningen til jeres situation og budget.",
  },
  {
    q: "Hvad sker der, hvis projektet løber ind i problemer undervejs?",
    a: "Vi identificerer udfordringer tidligt via løbende risikostyring og eskalerer proaktivt. Opstår der alligevel større problemer, stiller vi ekstra ressourcer og støtte til rådighed, og finder altid en fremadrettet løsning frem for at placere ansvar.",
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
        title="Ofte stillede spørgsmål"
        subtitle="Find svar på de mest stillede spørgsmål om vores arbejdsproces, samarbejde og priser."
        image="/Graphics/Roadmap-1.webp"
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-4">
              Hos We Lead Projects møder vi mange af de samme spørgsmål fra kunder, der overvejer at arbejde med os, eller som er midt i et projekt og søger sparring. Her har vi samlet de mest hyppige spørgsmål om vores arbejdsmetoder, samarbejdsmodel, priser og hvad der konkret sker fra den første henvendelse til projektets afslutning.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi tror på gennemsigtighed. Du bør altid vide, hvad du kan forvente, hvornår du kan forvente det, og hvem du kan kontakte, hvis du har spørgsmål undervejs. Finder du ikke svar på det du leder efter, er du altid velkommen til at ringe eller skrive til os direkte.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi arbejder med kunder i mange brancher, fra telecom og finans til det offentlige og industri. Det betyder, at vores svar ikke er generiske skabeloner, men bygger på reel erfaring med de udfordringer du sandsynligvis står over for. Uanset om dit projekt er i opstartsfasen, midt i eksekvering eller har løbet ind i problemer, kan vi hjælpe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vi har mere end 125 års samlet erfaring i teamet og har leveret over 50 projekter på tværs af domæner. Det giver os et solidt grundlag for at rådgive, og en bred erfaringsbase at trække på, når vi vurderer din specifikke situation. Nedenfor finder du svar på de spørgsmål vi oftest møder.
            </p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-16 px-6 bg-white border-t" style={{ borderColor: "#e8e0e0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ color: "#2d1a1a" }} className="text-2xl font-bold mb-4">Projektledelse med erfaring fra hele Danmark</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We Lead Projects er baseret i Roskilde og betjener kunder over hele Danmark. Vi specialiserer os i projektledelse, Enterprise Architecture og IT-transformationer, og har siden 2018 leveret over 50 projekter på tværs af brancher og domæner. Vores team besidder mere end 125 års samlet erfaring og arbejder metodeneutralt, så vi altid kan vælge den tilgang der passer bedst til netop jeres projekt.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Har du et spørgsmål der ikke er besvaret ovenfor, er du altid velkommen til at kontakte os direkte. Vi besvarer alle henvendelser senest næste hverdag, og den første konsultation er altid uforpligtende.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Arbejder du med AI-governance, kan du læse mere om de regulatoriske rammer i{" "}
            <a
              href="https://artificialintelligenceact.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
              style={{ color: RED }}
            >
              EU AI Act
            </a>{" "}
            , noget vi løbende rådgiver kunder om.
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
