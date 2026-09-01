import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Implementation Partner",
  description:
    "Vi driver jeres AI governance-implementering som midlertidigt AI Governance Office. Løbende tilsyn, implementeringsledelse og struktureret overdragelse til intern kapacitet.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/ai-implementation-partner",
  },
  openGraph: {
    title: "AI Implementation Partner | We Lead Projects",
    description: "Midlertidigt AI Governance Office der driver implementeringen og overlader til jeres egne folk. 125.000 kr./md., 3-6 måneder.",
    images: [{ url: "/Graphics/AdobeStock_828719609.webp", width: 1200, height: 630, alt: "AI Implementation Partner hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const NAVY = "#1C2544";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Governance",
  name: "AI Implementation Partner",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "Et 3-6 måneders engagement hvor We Lead Projects agerer midlertidigt AI Governance Office: implementeringsledelse, løbende tilsyn og struktureret overdragelse til intern kapacitet.",
  url: "https://www.weleadprojects.com/ydelser/ai-implementation-partner",
};

const hvadViBringer = [
  {
    title: "Implementeringsledelse",
    body: "Vi driver implementeringen af governance-strukturen og sikrer, at beslutningsfora faktisk mødes, at guardrails følges og at roadmappen rykker fremad. Ikke rådgivning om hvad der burde ske — men ansvar for at det sker.",
  },
  {
    title: "Midlertidigt AI Governance Office",
    body: "Vi fungerer som det AI Governance Office I endnu ikke har internt. Det betyder et fast kontaktpunkt for AI-spørgsmål, løbende vurdering af nye projekter og systematisk opfølgning på åbne compliance-punkter.",
  },
  {
    title: "Løbende tilsyn og risikovurdering",
    body: "Kvartalsvise reviews af AI-systemlandskabet. Nye systemer vurderes inden idriftsættelse. Ændringer i EU AI Act-krav håndteres løbende frem for at hobe sig op til en stor exercise.",
  },
  {
    title: "Leverandørstyring ift. AI-compliance",
    body: "Vi håndterer dialogen med leverandører om AI-funktioner, databehandling og compliance-dokumentation, så jeres interne teams ikke behøver at bruge tid på spørgsmål, de ikke er rustet til at stille.",
  },
  {
    title: "Overdragelsesplan og kapacitetsopbygning",
    body: "Fra dag et arbejder vi mod en struktureret overdragelse. Vi identificerer tidligt, hvem internt der skal overtage funktionerne, og bygger kapaciteten op løbende frem for at dumpe det hele i den sidste uge.",
  },
];

const faqs = [
  {
    q: "Hvad koster Implementation Partner?",
    a: "125.000 kr. ekskl. moms pr. måned. Engagementet løber typisk 3-6 måneder afhængigt af governance-strukturens kompleksitet og organisationens modenhed.",
  },
  {
    q: "Hvad er et 'midlertidigt AI Governance Office' i praksis?",
    a: "Det betyder, at vi påtager os de funktioner et AI Governance Office normalt ville have: fast dagsorden til relevante fora, vurdering af nye AI-projekter, opfølgning på compliance-punkter og løbende rapportering til ledelsen. Vi agerer ikke som ekstern rådgiver der svarer på spørgsmål — vi tager ansvar for at tingene sker.",
  },
  {
    q: "Kræver det et forudgående Accelerator-forløb?",
    a: "Som udgangspunkt ja, fordi Implementation Partner forudsætter en governance-struktur at implementere. Har I allerede en velfunderet governance-model fra et andet initiativ, kan vi vurdere om vi kan starte direkte. Kontakt os, så afklarer vi det.",
  },
  {
    q: "Hvem fra vores side skal være involveret?",
    a: "Minimum én intern sponsor med mandat — typisk IT-direktøren eller CDO — og adgang til de relevante beslutningsfora. Derudover tilpasser vi engagementet til jeres organisation. Vi er ikke afhængige af en stor intern projektgruppe for at levere.",
  },
  {
    q: "Hvad sker der, når engagementet slutter?",
    a: "Vi afslutter med en struktureret overdragelse: dokumentation, briefing af den interne funktion der overtager, og en handlingsplan for de første 90 dage uden os. Målet er, at I ikke er afhængige af os for at fastholde strukturen.",
  },
  {
    q: "Er det muligt at forlænge?",
    a: "Ja. Nogle organisationer vælger at forlænge med et kvartal ekstra, typisk hvis der er en større EU AI Act-deadline undervejs eller en kompleks leverandørdialog der ikke er afsluttet. Vi planlægger det løbende og ikke som en overraskelse i måned fem.",
  },
];

const hvemErDetFor = [
  "I har en governance-model og roadmap, men ingen til at drive implementeringen",
  "Ledelsen vil have implementeringen ledet af nogen med ansvar, ikke rådgivere der anbefaler",
  "I har ikke intern kapacitet til at bemande et AI Governance Office det næste halve år",
  "EU AI Act-frister kræver handling nu, og I kan ikke vente på en intern ansættelsesproces",
  "I vil bygge intern kapacitet parallelt med implementeringen, ikke erstatte den permanent",
];

export default function AiImplementationPartnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="AI Governance"
        title="AI Implementation Partner"
        subtitle="Vi driver implementeringen af jeres AI governance-struktur som midlertidigt AI Governance Office — og overdrager til jeres egne folk, når kapaciteten er bygget op."
        image="/Graphics/AdobeStock_828719609.webp"
      />

      {/* PRODUKT-BOX */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 p-10" style={{ borderColor: RED }}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>3–6 mdr.</div>
                <div className="text-sm text-gray-500">Løbende engagement med fast månedspris</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>5 funktioner</div>
                <div className="text-sm text-gray-500">Ledelse, tilsyn, leverandørstyring, overdragelse</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: RED }}>125.000 kr./md.</div>
                <div className="text-sm text-gray-500">Fast månedspris ekskl. moms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            En governance-model er ikke noget værd, hvis ingen driver implementeringen. Det er en banal observation, men det er præcis hvad der sker i de fleste organisationer: modellen er godkendt, roadmappen er præsenteret for ledelsen, og derefter sker der ingenting — fordi det forudsætter kapacitet og mandat ingen faktisk har.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Implementation Partner er designet til at lukke det gap. Vi påtager os rollen som midlertidigt AI Governance Office: vi driver implementeringen, holder momentum og rapporterer til ledelsen, mens I parallelt bygger den interne kapacitet der skal overtage.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Engagementet er tidsbegrænset per design. Vi er ikke ude efter et permanent konsulentforhold — vi er ude efter en velfungerende overdragelse.
          </p>
        </div>
      </section>

      {/* HVAD VI BRINGER */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi påtager os</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fem funktioner vi driver for jer</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {hvadViBringer.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-8 bg-white"
                style={{ borderColor: BORDER }}
              >
                <h3 style={{ color: DARK }} className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT-MODEL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Sådan ser det ud</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Engagement-modellen i praksis</h2>
          <div className="space-y-6">
            {[
              {
                fase: "Måned 1",
                titel: "Opstart og forankring",
                body: "Vi sætter os ind i governance-strukturen og roadmappen, kortlægger de vigtigste interessenter og etablerer de første beslutningsfora. Første statusrapport til ledelsen sendes inden udgangen af måneden.",
              },
              {
                fase: "Måned 2–4",
                titel: "Implementering og tilsyn",
                body: "Roadmappen drives fremad punkt for punkt. Nye AI-projekter vurderes løbende. Leverandørdialog håndteres. Månedlig statusrapportering til ledelsen. Intern kapacitetsopbygning begynder parallelt.",
              },
              {
                fase: "Måned 4–6",
                titel: "Overdragelse",
                body: "Den interne funktion briefes og overtager gradvist. Vi dokumenterer processer, beslutningsmodeller og åbne punkter. Engagementet afsluttes med en formel overdragelsessession og en 90-dages handlingsplan.",
              },
            ].map((f) => (
              <div
                key={f.fase}
                className="flex gap-6 rounded-2xl border p-7"
                style={{ borderColor: BORDER, background: OFFWHITE }}
              >
                <div className="shrink-0">
                  <span
                    className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: RED, color: "#fff" }}
                  >
                    {f.fase}
                  </span>
                </div>
                <div>
                  <h3 style={{ color: DARK }} className="font-bold text-base mb-2">{f.titel}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVEM ER DET FOR */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvem er det for</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Fem situationer, hvor Implementation Partner giver mening</h2>
          <ul className="space-y-3">
            {hvemErDetFor.map((n) => (
              <li key={n} className="flex items-start gap-3 text-gray-600">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SAMMENHÆNG */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Sammenhæng</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Tredje trin i AI Governance Program</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Implementation Partner forudsætter normalt en velfunderet governance-struktur. Har I ikke kortlagt jeres AI-systemer, starter vi med AI Systems Audit. Mangler I governance-modellen, bygger vi den med AI Governance Accelerator. Har I begge dele, er Implementation Partner det naturlige næste skridt.
          </p>
          <Link
            href="/ydelser/ai-governance-program"
            className="inline-flex items-center gap-2 font-semibold text-sm"
            style={{ color: RED }}
          >
            Se alle tre produkter og sammenligningsmatrix →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Ofte stillede spørgsmål</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY }} className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-4">Klar til at få implementeringen drevet i mål?</h2>
          <p className="text-white opacity-70 mb-8 leading-relaxed">
            125.000 kr. ekskl. moms pr. måned. Book et møde, og vi afklarer om Implementation Partner er det rigtige næste skridt.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://calendly.com/bt-weleadprojects/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: RED }}
              className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
            >
              Book intromøde
            </a>
            <Link
              href="/#kontakt"
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity inline-block"
            >
              Send en besked
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
