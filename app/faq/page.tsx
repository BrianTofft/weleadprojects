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
          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed mb-4">
              Hos We Lead Projects møder vi mange af de samme spørgsmål fra kunder, der overvejer at arbejde med os — eller som er midt i et projekt og søger sparring. Her har vi samlet de mest hyppige spørgsmål om vores arbejdsmetoder, samarbejdsmodel, priser og hvad der konkret sker fra den første henvendelse til projektets afslutning.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi tror på gennemsigtighed. Du bør altid vide, hvad du kan forvente, hvornår du kan forvente det — og hvem du kan kontakte, hvis du har spørgsmål undervejs. Finder du ikke svar på det du leder efter, er du altid velkommen til at ringe eller skrive til os direkte.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi arbejder med kunder i mange brancher — fra telecom og finans til det offentlige og industri. Det betyder, at vores svar ikke er generiske skabeloner, men bygger på reel erfaring med de udfordringer du sandsynligvis står over for. Uanset om dit projekt er i opstartsfasen, midt i eksekvering eller har løbet ind i problemer, kan vi hjælpe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vi har mere end 125 års samlet erfaring i teamet og har leveret over 50 projekter på tværs af domæner. Det giver os et solidt grundlag for at rådgive — og en bred erfaringsbase at trække på, når vi vurderer din specifikke situation. Nedenfor finder du svar på de spørgsmål vi oftest møder.
            </p>
          </div>
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
