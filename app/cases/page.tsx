import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Læs hvordan We Lead Projects har hjulpet virksomheder med projektledelse, Enterprise Architecture og dataplatforme.",
  alternates: {
    canonical: "https://www.weleadprojects.com/cases",
  },
  openGraph: {
    title: "Cases | We Lead Projects",
    description:
      "Konkrete eksempler på projekter inden for PMO, EA, AI governance og dataplatforme.",
    images: [
      {
        url: "/Graphics/Project-Management-03.webp",
        width: 1200,
        height: 630,
        alt: "We Lead Projects Cases",
      },
    ],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const cases = [
  {
    tag: "PMO · EA · AI Governance",
    industry: "Retail",
    title: "Fra nul til styringsramme",
    subtitle:
      "En retailvirksomhed der voksede hurtigere end sin organisation",
    paragraphs: [
      "En større retailvirksomhed stod i en situation, mange vækstvirksomheder genkender. IT-projekter blev startet på mavefornemmelse, kørt af dem der råbte højest, og afsluttet når budgettet var brugt. Der var ingen projektmodel, ingen arkitekturfunktion og ingen stillingtagen til AI, trods stigende brug af AI-værktøjer i organisationen.",
      "Kort sagt: teknologien var løbet fra styringen.",
      "Vi startede med det mest akutte. En Stage Gate-model med klare faser for et standard IT-projekt, fra idé til afslutning. Hver fase med konkrete krav til, hvad der skal beskrives og godkendes, før projektet rykker videre. Ikke et teoretisk dokument, men en operationel ramme, som projektledere faktisk kan bruge.",
      "Dernæst etablerede vi en Enterprise Architecture-funktion med et Architecture Board, guidelines og guardrails. EA blev koblet direkte ind i projektmodellens faser, så arkitekturvurderinger sker løbende i projektet, ikke som et stempel til sidst.",
      "Til sidst udarbejdede vi et udkast til en AI-strategi, der binder ind i EA-modellen. Ikke en isoleret AI-politik, men en integreret del af den arkitektur og governance, virksomheden nu havde fået på plads.",
    ],
    result:
      "Resultatet er en organisation, der kan tage stilling til nye initiativer på et oplyst grundlag, i stedet for at opdage problemerne halvvejs inde i projektet.",
  },
  {
    tag: "Cloud · M365 · Organisationsparathed",
    industry: "Offentlig virksomhed",
    title: "Skyen kom før organisationen",
    subtitle:
      "En offentlig virksomhed der købte M365 uden at vide, hvad de fik",
    paragraphs: [
      "En offentlig virksomhed havde købt Microsoft 365-licenser og erklæret sig klar til skyen. Problemet var, at ingen reelt vidste, hvad de havde købt. Licenserne var aktiveret, produkterne var tilgængelige, men hverken brugere, driftsorganisation eller sikkerhedsfunktion var forberedt på omfanget af det, der var blevet rullet ud.",
      "M365 er ikke ét produkt. Det er et økosystem af værktøjer, der griber ind i alt fra filhåndtering og kommunikation til identitetsstyring og sikkerhedspolitikker. Uden en plan bliver det hurtigt et uoverskueligt landskab, hvor folk bruger det, de kan finde, og ignorerer resten.",
      "Vi gennemgik samtlige implementerede produkter sammen med Microsoft og identificerede de vigtigste elementer fra hver teknologi og deres betydning for organisationen. Hvert element blev vurderet sammen med de ansvarlige fra drift, sikkerhed og forretningen, så prioriteringen afspejlede den faktiske virkelighed, ikke leverandørens standardanbefaling.",
    ],
    result:
      "Resultatet var en konkret plan for, hvad der skulle etableres, hvad der krævede træning, og hvad der skulle ændres i den eksisterende opsætning. Med en tidsplan og et klart billede af, hvilke ressourcer det krævede. Organisationen gik fra at have et produkt, de ikke forstod, til at have en plan, de kunne handle på.",
  },
  {
    tag: "Data Platform · Governance · Master Data",
    industry: "Reguleret virksomhed",
    title: "Data uden retning",
    subtitle:
      "En reguleret virksomhed der ikke kunne stole på sine egne tal",
    paragraphs: [
      "En reguleret virksomhed havde det problem, mange dataintensive organisationer genkender, men sjældent taler højt om. Data fandtes i overflod, spredt over en myriade af kilder, systemer og formater. Men ingen kunne med sikkerhed sige, hvor et givent tal kom fra, hvordan det var blevet transformeret undervejs, eller om det matchede tallet i rapporten ved siden af.",
      "Der var ingen data governance, ingen lineage og ingen konsolideret master data-struktur. For en reguleret virksomhed er det ikke bare et praktisk problem. Det er en risiko.",
      "Vi styrede et dataplatformsprojekt, der etablerede en struktureret arkitektur fra bunden. En tiered datastruktur med data storage, data lakes og data factory, designet til at håndtere data fra indsamling til forbrug i et kontrolleret flow. Parallelt blev der implementeret data governance, så ejerskab, kvalitet og lineage blev en del af strukturen, ikke noget man håbede på.",
    ],
    result:
      "Resultatet var entydige datakilder med klar master data og fuld lineage. Organisationen kunne for første gang dokumentere præcis, hvor et tal kom fra, og hvilken vej det havde taget. Det åbnede samtidig for retvisende Power BI-udtræk og en rapportering, ledelsen faktisk kunne træffe beslutninger på baggrund af.",
  },
];

export default function Cases() {
  return (
    <>
      <Nav />

      <PageHeader
        label="Cases"
        title="Projekter der gjorde en forskel"
        subtitle="Konkrete eksempler fra vores arbejde med projektledelse, Enterprise Architecture, AI governance og dataplatforme."
        image="/Graphics/Project-Management-03.webp"
      />

      {/* Intro */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Hvert projekt er unikt, men mønstrene går igen. Manglende styring,
            teknologi der overhaler organisationen, eller data ingen kan stole
            på. Herunder er tre eksempler på, hvordan vi har hjulpet
            virksomheder med at gå fra kaos til kontrol.
          </p>
        </div>
      </section>

      {/* Cases */}
      {cases.map((c, i) => (
        <section
          key={c.title}
          className="py-20 px-6"
          style={{ background: i % 2 === 0 ? OFFWHITE : "white" }}
        >
          <div className="max-w-3xl mx-auto">
            <p
              className="font-semibold uppercase tracking-widest text-xs mb-2"
              style={{ color: RED }}
            >
              {c.tag}
            </p>
            <p className="text-sm text-gray-400 mb-4">{c.industry}</p>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: DARK }}
            >
              {c.title}
            </h2>
            <p className="text-lg text-gray-500 mb-8 italic">{c.subtitle}</p>

            <div className="space-y-4">
              {c.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div
              className="mt-8 p-6 rounded-xl border-l-4"
              style={{ borderColor: RED, background: "white" }}
            >
              <p
                className="font-semibold text-sm uppercase tracking-widest mb-2"
                style={{ color: RED }}
              >
                Resultat
              </p>
              <p className="text-gray-700 leading-relaxed">{c.result}</p>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">
          Genkender du situationen?
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          De fleste projekter fejler ikke på teknologien. De fejler på
          styringen, timingen eller organisationens parathed. Lad os tale om,
          hvor I står.
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
