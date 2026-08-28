import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import ExpandableCards from "@/components/ExpandableCards";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-strategi der skaber reel værdi",
  description:
    "Få en AI-strategi forankret i jeres systemlandskab og datamodenhed. Vi hjælper med at prioritere use cases og skabe et roadmap med reel forretningsværdi.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/ai-strategi",
  },
  openGraph: {
    title: "AI-strategi der skaber reel værdi | We Lead Projects",
    description: "Få en AI-strategi forankret i jeres systemlandskab og datamodenhed. Vi hjælper med at prioritere use cases og skabe et roadmap med reel forretningsværdi.",
    images: [{ url: "/Graphics/project-manager-with-team.webp", width: 1200, height: 630, alt: "AI-strategi hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI-strategi",
  name: "AI-strategi",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "En AI-strategi der er forankret i jeres faktiske systemlandskab og datamodenhed. Vi hjælper med at prioritere, hvad der giver reel forretningsværdi, og hvornår.",
  url: "https://www.weleadprojects.com/ydelser/ai-strategi",
};

const leverancer = [
  {
    title: "AI-modenhedsvurdering i jeres AI-strategi",
    body: "Et realistisk billede af, hvor I faktisk er i dag, på data, arkitektur, kompetencer og organisatorisk parathed.",
    more: "Mange AI-strategier bygger på en ønsket fremtidsstat frem for den faktiske udgangssituation. Vores modenhedsvurdering kortlægger det faktiske grundlag og identificerer, hvad der skal styrkes, før de ambitiøse use cases er realistiske.",
  },
  {
    title: "Use case-prioritering",
    body: "En prioriteret liste over AI-muligheder baseret på forretningsmæssig effekt, teknisk kompleksitet og jeres nuværende datagrundlag.",
    more: "Vi vurderer use cases langs to akser: hvor stor forretningseffekt det giver, og hvor klar I er til at realisere det i dag. Resultatet er en handlingsorienteret prioritering, ikke en liste over alt der ville være fedt at prøve.",
  },
  {
    title: "Buy, build eller konfigurér",
    body: "En systematisk tilgang til, hvornår I køber en hyldevare, tilpasser et eksisterende system, eller selv bygger.",
    more: "De fleste virksomheder træffer den beslutning ad hoc, baseret på, hvad leverandøren anbefaler. Vi sætter kriterier op på forhånd, så I ved, hvornår hyldevaren er god nok, hvornår en model skal fintunes, og hvornår der er behov for at bygge selv.",
    linkHref: "/indsigt/ai-governance-guide",
    linkLabel: "Læs vores guide til AI governance",
  },
  {
    title: "AI-roadmap til eksekvering",
    body: "En konkret tidsplan for hvornår I implementerer hvad, med klare afhængigheder til data, arkitektur og organisatorisk kapacitet.",
    more: "Et AI-roadmap er kun brugbart, hvis det tager udgangspunkt i, hvad der faktisk kan lade sig gøre. Vi bygger roadmappet op omkring jeres reelle kapacitet og sikrer, at det er koordineret med øvrige it-initiativer og ikke kolliderer med dem.",
  },
];

const faqs = [
  {
    q: "Hvad er forskellen på en AI-strategi og en AI-governance-model?",
    a: "AI-strategien besvarer hvad I vil opnå med AI, og i hvilken rækkefølge I prioriterer det. AI-governance besvarer, hvordan I kontrollerer og regulerer AI-systemer, når de er i drift. Begge er nødvendige, men de løser forskellige problemer.",
  },
  {
    q: "Skal vi have styr på data, før vi laver en AI-strategi?",
    a: "Ikke nødvendigvis. En AI-strategi hjælper med at identificere præcis, hvilken data I har brug for, og hvilke datahuller der skal lukkes. At vente på, at data er perfekte, er i praksis at vente for evigt.",
  },
  {
    q: "Kan vi lave en AI-strategi, selvom vi endnu ikke har sat AI i produktion?",
    a: "Ja. En strategi er mest værdifuld, før I er begyndt, fordi den sætter kursen og hjælper med at undgå dyre omveje. Men den er også nyttig, hvis I allerede har eksperimenter i gang og skal prioritere, hvad der skal skaleres.",
  },
  {
    q: "Hvad koster et AI-strategiprojekt typisk?",
    a: "Det afhænger af organisationens størrelse og kompleksitet. Vi tilbyder alt fra en fokuseret modenhedsvurdering til et fuldt strategiforløb. Book et intromøde, så giver vi et konkret bud baseret på jeres situation.",
  },
];

const naarDetGiverMening = [
  "Ledelsen har besluttet at satse på AI, men ingen kan svare konkret på, hvad det betyder i praksis",
  "I har AI-eksperimenter i gang, men mangler en ramme for, hvad der skal skaleres",
  "Jeres AI-initiativer er drevet af leverandørernes agenda frem for jeres egne forretningsmål",
  "I er usikre på, om jeres data og arkitektur overhovedet kan bære de AI-ambitioner, I har",
  "I skal præsentere en AI-plan for bestyrelsen eller direktion og har brug for et solidt grundlag",
];

export default function AiStrategiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="Ydelser"
        title="AI-strategi"
        subtitle="En AI-strategi der er forankret i jeres faktiske systemlandskab og datamodenhed, ikke i hvad konkurrenterne angiveligt gør, eller hvad en leverandør har solgt jer."
        image="/Graphics/project-manager-with-team.webp"
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            De fleste AI-strategier begynder med ambitioner og ender med en liste over use cases, ingen rigtig ejer. Det sker, fordi strategien er skrevet med udgangspunkt i, hvad der er muligt med AI i teorien, ikke hvad der er muligt for den konkrete organisation, med de data, den arkitektur og den organisatoriske kapacitet, der faktisk eksisterer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi starter anderledes. Før vi taler om, hvad I skal bygge, kortlægger vi, hvad I faktisk har. Hvilke data er tilgængelige og i hvilken kvalitet. Hvilke systemer AI-løsningerne skal integrere med. Hvilke kompetencer der findes i organisationen, og hvilke der skal tiltrækkes eller købes udefra. Først når det billede er klart, giver det mening at tale om prioritering og rækkefølge.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            En AI-strategi er ikke det samme som en AI-governance-model.{" "}
            <Link href="/ydelser/ai-governance" style={{ color: RED }} className="underline hover:opacity-75">
              AI-governance
            </Link>{" "}
            handler om, hvordan I kontrollerer og regulerer AI-systemer, når de er i drift, herunder EU AI Act-compliance og risikoklassificering. Strategien besvarer et andet spørgsmål: hvad vil I opnå med AI, og i hvilken rækkefølge giver det bedst mening at forfølge det. Begge er nødvendige, og de understøtter hinanden, men de løser ikke det samme problem.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Resultatet af et AI-strategiforløb hos os er ikke et præsentationsdæk til én lejlighed. Det er en handlingsorienteret plan, som linjer direkte ind i jeres eksisterende projektportefølje, budgetproces og it-arkitektur, og som I faktisk kan bruge til at træffe beslutninger med.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi leverer</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire elementer i en solid AI-strategi</h2>
          </div>
          <ExpandableCards items={leverancer} />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvornår giver det mening</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Fem tegn på, at I har brug for en AI-strategi</h2>
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
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Fra ambition til handlingsplan</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Et AI-strategiforløb starter med en modenhedsvurdering. Ikke som et akademisk øvelse, men som et konkret fundament for de beslutninger, der følger. Vi taler med de mennesker, der kender systemerne og dataene indefra, ikke kun med direktionen.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Derefter prioriterer vi use cases langs to akser: forretningsmæssig effekt og realistisk gennemførlighed med jeres nuværende grundlag. Det giver en prioriteret liste, som alle kan stå inde for, også dem der skal gennemføre det.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Slutproduktet er et AI-roadmap koordineret med jeres øvrige it-initiativer, med klare ejere, klare afhængigheder og et realistisk tidsperspektiv. Ikke en liste over alt, der ville være interessant at prøve, men en plan for, hvad I faktisk skal gøre i hvilken rækkefølge.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Ofte stillede spørgsmål om AI-strategi</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til en AI-strategi der holder?</h2>
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
