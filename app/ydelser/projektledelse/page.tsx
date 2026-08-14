import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import ExpandableCards from "@/components/ExpandableCards";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projektledelse til IT-projekter",
  description:
    "Erfarne projektledere til komplekse IT-projekter og transformationer. Vi tager ansvar for leverance, uanset om I kører Waterfall, Agile eller hybrid.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/projektledelse",
  },
  openGraph: {
    title: "Projektledelse | We Lead Projects",
    description: "Erfarne projektledere til komplekse IT-projekter og transformationer.",
    images: [{ url: "/Graphics/Project-manager.webp", width: 1200, height: 630, alt: "Projektledelse hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Projektledelse",
  name: "Projektledelse",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "Erfarne projektledere til komplekse IT-projekter og transformationer. Vi tager ansvar for leverance, uanset om I kører Waterfall, Agile eller hybrid.",
  url: "https://www.weleadprojects.com/ydelser/projektledelse",
};

const leverancer = [
  {
    title: "Planlægning og milepælsstruktur",
    body: "Detaljeret projektplan tilpasset jeres kompleksitet, med realistiske milepæle og ressourceallokering fastlagt inden opstart.",
    more: "Vi lægger vægt på, at planen er noget teamet reelt navigerer efter i hverdagen, ikke et dokument der lægges i skuffen efter kickoff-mødet. Milepælene sættes ud fra reelle afhængigheder, ikke ønsketænkning om hvor hurtigt tingene kan gå.",
  },
  {
    title: "Risikostyring",
    body: "Løbende identifikation og afbødning af risici, så projektet forbliver på sporet og inden for budget, i stedet for at reagere når skaden er sket.",
    more: "Vi arbejder med en levende risikolog gennem hele forløbet, ikke en engangsøvelse ved opstart. Hver risiko har en ejer og en konkret handlingsplan, ikke bare en rød markering i et regneark.",
    linkHref: "/indsigt/5-advarselstegn-it-projekt-korer-af-sporet",
    linkLabel: "Se 5 advarselstegn på at et projekt kører af sporet",
  },
  {
    title: "Interessentstyring",
    body: "Struktureret kommunikation til alle niveauer, fra styregruppe til slutbrugere, så opbakningen holder gennem hele forløbet.",
    more: "Vi kortlægger tidligt, hvem der reelt træffer beslutningerne, og hvem der blot skal informeres, så vigtig kommunikation ikke drukner i cc-lister eller går tabt mellem lag i organisationen.",
  },
  {
    title: "Fremdrift og eksekvering",
    body: "Tæt opfølgning på leverancer, beslutninger og afhængigheder, med klar eskalering når noget kræver ledelsens involvering.",
    more: "Vi måler fremdrift på reelle leverancer, ikke på hvor mange møder der er afholdt. Når noget afviger fra planen, eskalerer vi tidligt og med et konkret løsningsforslag, ikke bare en statusopdatering.",
  },
];

const faqs = [
  {
    q: "Hvor lang tid tager det at komme i gang?",
    a: "Typisk kan vi træde ind i et projekt inden for få uger fra første samtale, afhængig af kompleksitet og jeres interne beslutningsproces.",
  },
  {
    q: "Arbejder I kun med store transformationsprojekter?",
    a: "Nej. Vi leverer projektledelse til alt fra afgrænsede IT-implementeringer til store tværorganisatoriske transformationer.",
  },
  {
    q: "Hvad hvis projektet allerede er i gang og har problemer?",
    a: "Vi træder ofte ind midt i et projekt for at genskabe fremdrift, afklare ejerskab og få styr på risikobilledet, ikke kun ved opstart.",
  },
  {
    q: "Følger I en bestemt metode?",
    a: "Vi er metodeneutrale og vælger Waterfall, Agile eller en hybrid tilgang ud fra projektets natur og jeres organisation, ikke omvendt.",
  },
];

const naarDetGiverMening = [
  "Projektet er gået i stå, eller I kan mærke at fremdriften mangler",
  "I mangler den rette erfaring internt til at lede en kompleks leverance",
  "En nøgleperson har forladt projektet midt i en kritisk fase",
  "I skal i gang med en IT-transformation, cloud-migration eller systemudskiftning",
  "Interessenterne er ikke længere enige om, hvad succes betyder",
];

export default function ProjektledelsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="Ydelser"
        title="Projektledelse"
        subtitle="Erfarne projektledere der tager reelt ansvar for leverance, fra behovsafklaring til afslutning."
        image="/Graphics/Project-manager.webp"
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            De fleste IT-projekter fejler ikke på teknologi. De fejler på beslutningsvakuum, uklart ejerskab og interessenter der siger ja i mødelokalet og nej bagefter. En erfaren projektleder er den, der stiller de ubehagelige spørgsmål tidligt, i stedet for at opdage problemerne når de er blevet dyre at rette.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi leverer projektledelse til IT-projekter og digitale transformationer af enhver kompleksitet. Vores konsulenter har i gennemsnit mere end 15 års erfaring, og vi træder ind uanset om projektet skal startes fra bunden, eller allerede er i gang og har brug for at komme tilbage på sporet.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi er metodeneutrale. Vi vælger den tilgang, klassisk Waterfall, Agile eller en hybrid model, der passer til jeres organisation og projektets natur, ikke omvendt. Læs mere om, hvordan vi vælger model, i vores artikel om{" "}
            <Link href="/indsigt/agile-waterfall-eller-hybrid" style={{ color: RED }} className="underline hover:opacity-75">
              Agile, Waterfall eller Hybrid
            </Link>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            En ekstern projektleder kommer uden intern politik og uden fortid i organisationen. Det giver frihed til at pege på det, som interne medarbejdere ofte ikke tør sige højt, uanset om det handler om urealistiske deadlines, manglende ressourcer eller en beslutning der aldrig blev truffet. Vores konsulenter går ind med samme ansvarsfølelse som en fastansat projektleder, men uden bindingerne til de interne relationer der ellers kan gøre det svært at eskalere ubehagelige sandheder i tide.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi leverer</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire kerneopgaver i professionel projektledelse</h2>
          </div>
          <ExpandableCards items={leverancer} />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvornår giver det mening</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Fem tegn på at I har brug for ekstern projektledelse</h2>
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
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Vores tilgang til projektledelse: fra behovsafklaring til leverance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi starter altid med at forstå projektets reelle risikobillede, ikke bare tidsplanen på papiret. Det betyder samtaler med både styregruppe og de medarbejdere, der faktisk skal levere. Ofte ligger den største risiko et andet sted end der, hvor den formelle statusrapport peger hen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Undervejs holder vi fast i klar og direkte kommunikation, også når status ikke er positiv. Et projekt der er ti procent forsinket i uge to, retter sig sjældent af sig selv. Vores erfaring er, at tidlig og ærlig eskalering næsten altid er billigere end at vente på, at problemet løser sig selv.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Ofte stillede spørgsmål om projektledelse</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til at få styr på jeres projekt?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Kontakt os for en uforpligtende samtale om jeres udfordring, uanset om projektet er ved at starte, eller allerede er i gang.
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
