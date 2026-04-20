import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Svar på de mest stillede spørgsmål om We Lead Projects — vores arbejdsproces, samarbejde, priser og hvad der gør os specielle.",
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
    a: "Vi tilbyder ekspertise og strategisk vejledning tilpasset dine forretningsmål, effektiv projektplanlægning og udførelse samt tidlig risikostyring og reduktion — så dit projekt lykkes.",
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
    q: "Hvad er jeres betalingsbetingelser?",
    a: "Betalingsstrukturen inkluderer et indledende depositum inden opstart, milepælsbaserede betalinger for længerevarende engagementer, månedlig fakturering for løbende ydelser og slutbetaling ved projektafslutning. Vi accepterer bankoverførsler, kreditkort og elektroniske betalingssystemer.",
  },
  {
    q: "Kan I levere kunde cases eller kundeudtalelser?",
    a: "Ja. Vi har bl.a. cases inden for forretningsudviklingsplanlægning i telecom-sektoren, implementering af IT-systemer samt digitale transformationer på tværs af brancher.",
  },
  {
    q: "Hvad gør jeres virksomhed speciel?",
    a: "Vi skræddersyr løsninger til hvert projekt, har dokumenteret erfaring på tværs af brancher, anvender innovative metoder med de nyeste trends, prioriterer transparent kommunikation og tilbyder omfattende support efter projektafslutning.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Nav />
      <PageHeader
        label="FAQ"
        title="Ofte stillede spørgsmål"
        subtitle="Find svar på de mest stillede spørgsmål om vores arbejdsproces, samarbejde og priser."
        image="/Graphics/Roadmap-1.webp"
      />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <section style={{ background: OFFWHITE }} className="py-16 px-6 text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">
          Fandt du ikke svar på dit spørgsmål?
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Ring eller skriv til os — vi besvarer alle henvendelser senest næste hverdag.
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
