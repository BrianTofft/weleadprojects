import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EU AI Act compliance",
  description:
    "EU AI Act stiller krav til alle virksomheder der bruger eller udvikler AI. Forstå risikoklasser, tidslinje og hvad I konkret skal gøre. Vi hjælper jer i gang.",
  alternates: {
    canonical: "https://www.weleadprojects.com/eu-ai-act",
  },
  openGraph: {
    title: "EU AI Act compliance | We Lead Projects",
    description:
      "EU AI Act stiller krav til alle virksomheder der bruger eller udvikler AI. Forstå risikoklasser, tidslinje og hvad I konkret skal gøre.",
    images: [{ url: "/Graphics/GettyImages-517041045_optimized.webp", width: 1200, height: 630, alt: "EU AI Act compliance" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const NAVY = "#1C2544";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvornår gælder EU AI Act for min virksomhed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EU AI Act er i kraft fra august 2024. Kravene indfases gradvist: forbudte AI-systemer skulle afvikles senest februar 2025, regler for højrisikosystemer trådte i kraft august 2026, og de resterende krav følger i august 2027. Alle virksomheder der bruger eller leverer AI-systemer i EU er omfattet.",
      },
    },
    {
      "@type": "Question",
      name: "Gælder EU AI Act kun for virksomheder der selv udvikler AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. EU AI Act skelner mellem providere (dem der udvikler og sælger AI-systemer) og deployere (dem der anvender AI-systemer i professionelt regi). Begge har forpligtelser. Hvis I bruger et AI-system fra en leverandør, er I deployer og har selvstændigt ansvar for at sikre lovlig brug, herunder menneskelig tilsyn og dokumentation for højrisikosystemer.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad sker der hvis vi ikke overholder EU AI Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Overtrædelse af forbudsbestemmelserne kan medføre bøder på op til 35 millioner euro eller 7 procent af global omsætning. Øvrige overtrædelser giver bøder på op til 15 millioner euro eller 3 procent af omsætning. Ud over de finansielle konsekvenser risikerer I omdømmeskade og tab af kundernes tillid.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor starter vi med EU AI Act-compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start med at kortlægge hvilke AI-systemer I bruger og leverer. De fleste virksomheder opdager systemer de ikke vidste de havde, CRM med AI-funktioner, HR-platforme med automatiserede beslutninger, rekrutteringsværktøjer. Når I kender jeres systemlandskab, kan I klassificere dem og prioritere indsatsen. Et AI Systems Audit giver jer det overblikket på 1-2 uger.",
      },
    },
  ],
};

const risks = [
  {
    level: "Forbudt",
    color: "#7f1d1d",
    bg: "#fef2f2",
    border: "#fca5a5",
    description: "Disse AI-systemer er ulovlige og skal afvikles. Gjaldt fra februar 2025.",
    examples: [
      "Social scoring af borgere baseret på adfærd",
      "AI der manipulerer mennesker via psykologiske svagheder",
      "Real-time biometrisk masseovervågning på offentlige steder",
      "AI der udnytter sårbare gruppers adfærd",
      "Subliminal manipulation uden bevidst samtykke",
    ],
  },
  {
    level: "Høj risiko",
    color: "#92400e",
    bg: "#fffbeb",
    border: "#fcd34d",
    description: "Disse systemer kræver dokumentation, risikovurdering og menneskeligt tilsyn. Gælder fra august 2026.",
    examples: [
      "AI i rekruttering og HR-beslutninger",
      "Kreditvurdering og forsikringsbeslutninger",
      "AI i uddannelse og eksamener",
      "Medicinsk diagnostik og behandlingsanbefaling",
      "AI i kritisk infrastruktur (energi, vand, transport)",
      "AI i retshåndhævelse og migration",
    ],
  },
  {
    level: "Begrænset risiko",
    color: "#1e3a5f",
    bg: "#eff6ff",
    border: "#93c5fd",
    description: "Disse systemer kræver gennemsigtighed over for brugerne.",
    examples: [
      "Chatbots og virtuelle assistenter (skal oplyse om AI-natur)",
      "Deepfakes og AI-genereret indhold (skal mærkes)",
      "Emotion recognition-systemer (skal notificere brugere)",
    ],
  },
  {
    level: "Minimal risiko",
    color: "#166534",
    bg: "#f0fdf4",
    border: "#86efac",
    description: "Ingen særlige krav. Frivillig adfærdskodeks anbefales.",
    examples: [
      "Spam-filtre og anbefalingssystemer",
      "AI i videospil",
      "De fleste produktivitetsværktøjer med AI",
    ],
  },
];

const timeline = [
  { date: "Aug 2024", label: "I kraft", body: "EU AI Act (Forordning 2024/1689) trådte i kraft. Alle virksomheder der bruger eller leverer AI-systemer i EU er fra dette tidspunkt omfattet.", done: true },
  { date: "Feb 2025", label: "Forbudte systemer", body: "Kapitel II trådte i kraft. Forbudte AI-systemer skulle identificeres og afvikles. Overtrædelse kan medføre bøder på op til 35 mio. euro.", done: true },
  { date: "Aug 2025", label: "GPAI-modeller", body: "Regler for General Purpose AI-modeller (fx store sprogmodeller) trådte i kraft, herunder krav til transparens og systemic risk-vurdering.", done: true },
  { date: "Aug 2026", label: "Højrisikosystemer", body: "Krav til højrisikosystemer (Annex III) trådte i kraft. Dokumentation, risikovurdering, menneskeligt tilsyn og registrering i EU-database kræves.", done: true },
  { date: "Aug 2027", label: "Sektorsystemer", body: "Krav til AI-systemer reguleret under eksisterende sektorlovgivning (Annex I, fx medicinsk udstyr og luftfart) træder i kraft.", done: false },
];

const faqs = [
  {
    q: "Hvornår gælder EU AI Act for min virksomhed?",
    a: "EU AI Act er i kraft fra august 2024. Kravene indfases gradvist: forbudte AI-systemer skulle afvikles senest februar 2025, regler for højrisikosystemer trådte i kraft august 2026, og de resterende krav følger i august 2027. Alle virksomheder der bruger eller leverer AI-systemer i EU er omfattet, uanset om de er europæiske eller ej.",
  },
  {
    q: "Gælder EU AI Act kun for virksomheder der selv udvikler AI?",
    a: "Nej. EU AI Act skelner mellem providere (dem der udvikler og sælger AI-systemer) og deployere (dem der anvender AI-systemer i professionelt regi). Begge har forpligtelser. Hvis I bruger et AI-system fra en leverandør, er I deployer og har selvstændigt ansvar for at sikre lovlig brug, herunder menneskelig tilsyn og dokumentation for højrisikosystemer.",
  },
  {
    q: "Hvad sker der hvis vi ikke overholder EU AI Act?",
    a: "Overtrædelse af forbudsbestemmelserne kan medføre bøder på op til 35 millioner euro eller 7 procent af global omsætning. Øvrige overtrædelser giver bøder på op til 15 millioner euro eller 3 procent af omsætning. Ud over de finansielle konsekvenser risikerer I omdømmeskade og tab af kundernes tillid.",
  },
  {
    q: "Hvor starter vi med EU AI Act-compliance?",
    a: "Start med at kortlægge hvilke AI-systemer I bruger og leverer. De fleste virksomheder opdager systemer de ikke vidste de havde: CRM med AI-funktioner, HR-platforme med automatiserede beslutninger, rekrutteringsværktøjer. Når I kender jeres systemlandskab, kan I klassificere dem og prioritere indsatsen. Et AI Systems Audit giver jer det overblikket på 1-2 uger.",
  },
];

export default function EuAiActPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="EU AI Act"
        title="Hvad kræver EU AI Act af din virksomhed?"
        subtitle="EU AI Act er gældende ret. Forordningen stiller konkrete krav til alle virksomheder der bruger eller leverer AI-systemer i EU, uanset størrelse og branche."
        image="/Graphics/GettyImages-517041045_optimized.webp"
      />

      {/* INTRO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad er EU AI Act?</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Verdens første bindende AI-regulering</h2>
            <p className="text-gray-600 mb-4">
              EU AI Act (Forordning 2024/1689) trådte i kraft august 2024 og er verdens første bindende, horisontale AI-regulering. Den gælder for alle virksomheder der udvikler, sælger eller anvender AI-systemer med output rettet mod EU, uanset om de er europæiske.
            </p>
            <p className="text-gray-600 mb-4">
              Forordningen indfører et risikobaseret system: jo større risiko et AI-system udgør, jo strengere krav. Det betyder at de fleste virksomheder ikke er ramt af de hårdeste krav, men alle er ramt af noget. Og alle starter med det samme: de skal vide hvilke AI-systemer de har.
            </p>
            <p className="text-gray-600">
              Mange virksomheder undervurderer deres AI-eksponering. CRM-systemer med AI-anbefalinger, HR-platforme med automatiseret screening, rekrutteringsværktøjer med score-modeller. Alle disse falder under EU AI Act, og det er jer som deployer, der har ansvaret, ikke leverandøren.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: "🏛️", title: "Forordning 2024/1689", body: "Officielt vedtaget 13. juni 2024. Gælder i alle EU-lande uden national implementering." },
              { icon: "🌍", title: "Ekstraterritorial rækkevidde", body: "Som GDPR: gælder alle der leverer AI-output til EU, uanset virksomhedens placering." },
              { icon: "⚖️", title: "Risikobaseret tilgang", body: "Fire risikoklasser. Kravene skalerer med systemets potentiale for skade." },
              { icon: "📋", title: "Provider og deployer", body: "Både udviklere og brugere af AI-systemer har selvstændige forpligtelser." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border" style={{ borderColor: BORDER, background: OFFWHITE }}>
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p style={{ color: DARK }} className="font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIDSLINJE */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Indfasning</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">EU AI Act tidslinje</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: BORDER }} />
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.date} className="relative flex gap-6 items-start pl-20">
                  <div
                    className="absolute left-6 w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center"
                    style={{
                      background: t.done ? RED : "white",
                      borderColor: t.done ? RED : BORDER,
                      top: "2px",
                    }}
                  >
                    {t.done && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div className="bg-white rounded-xl border p-5 flex-1" style={{ borderColor: t.done ? BORDER : BORDER }}>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="text-sm font-bold px-3 py-0.5 rounded-full"
                        style={{ background: t.done ? RED : OFFWHITE, color: t.done ? "white" : DARK }}
                      >
                        {t.date}
                      </span>
                      <span style={{ color: DARK }} className="font-semibold">{t.label}</span>
                      {!t.done && (
                        <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: BORDER, color: "#9e8888" }}>
                          Kommende
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RISIKOKLASSER */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Klassificering</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">De fire risikoklasser</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              EU AI Act inddeler alle AI-systemer i fire risikoklasser. Det første skridt mod compliance er at vide hvilken klasse jeres systemer falder i.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((r) => (
              <div
                key={r.level}
                className="rounded-xl border p-7"
                style={{ background: r.bg, borderColor: r.border }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: r.color, color: "white" }}
                  >
                    {r.level}
                  </span>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: r.color }}>{r.description}</p>
                <ul className="space-y-1.5">
                  {r.examples.map((ex) => (
                    <li key={ex} className="flex gap-2 text-sm" style={{ color: r.color }}>
                      <span className="shrink-0 mt-0.5">—</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDER VS DEPLOYER */}
      <section style={{ background: NAVY }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: "#cc4444" }}>Ansvar</p>
            <h2 className="text-3xl font-bold text-white mb-4">Provider eller deployer: hvem er I?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              EU AI Act skelner skarpt mellem dem der laver AI-systemer og dem der bruger dem. Begge har forpligtelser.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#fff" }}>Provider</h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Virksomheden der udvikler og bringer et AI-system på markedet eller i drift.</p>
              <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                {[
                  "Risikovurdering og klassificering af systemet",
                  "Teknisk dokumentation og testresultater",
                  "Registrering i EU-database for højrisikosystemer",
                  "Overensstemmelseserklæring og CE-mærkning",
                  "Post-market monitoring og hændelsesrapportering",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 mt-0.5" style={{ color: RED }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-8" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#fff" }}>Deployer</h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>Virksomheden der anvender et AI-system i professionelt regi. Det er jer, også når I bruger andres systemer.</p>
              <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                {[
                  "Sikre at systemet bruges som foreskrevet",
                  "Menneskelig overvågning for højrisikosystemer",
                  "Logning og dokumentation af brug",
                  "Grundlæggende rettigheds-konsekvensanalyse",
                  "Information til brugere om AI-systemets natur",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 mt-0.5" style={{ color: RED }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-sm mt-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            De fleste virksomheder er deployere, men hvis I tilpasser et AI-system til jeres egne formål, kan I også blive betragtet som provider.
          </p>
        </div>
      </section>

      {/* HVAD SKAL I GØRE */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Handling</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Hvad skal I konkret gøre?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Kortlæg jeres AI-systemer",
                body: "Identificer alle AI-systemer I bruger eller leverer. Inkluder tredjepartssystemer og SaaS-løsninger med AI-funktioner. De fleste virksomheder finder systemer de ikke vidste de havde.",
              },
              {
                step: "02",
                title: "Klassificer efter risikoniveau",
                body: "Placer hvert system i den rette risikoklasse. Forbudte systemer skal afvikles. Højrisikosystemer kræver dokumentation og tilsyn. Begrænset risiko kræver gennemsigtighed.",
              },
              {
                step: "03",
                title: "Byg governance-strukturen",
                body: "Etabler politikker, roller og processer der sikrer løbende compliance. Definer ansvar, godkendelsesflows og overvågning af AI-systemer i drift.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl border p-7" style={{ borderColor: BORDER }}>
                <p className="text-4xl font-bold mb-4" style={{ color: RED }}>{s.step}</p>
                <h3 style={{ color: DARK }} className="font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SYSTEMS AUDIT CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 p-10" style={{ borderColor: RED }}>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: RED }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <div className="flex-1">
                <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-xs mb-2">Start her</p>
                <h3 style={{ color: DARK }} className="text-xl font-bold mb-3">AI Systems Audit: 79.000 kr., 1-2 uger</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  En struktureret kortlægning af jeres AI-systemer med EU AI Act-klassificering og en konkret governance-anbefaling. Det er det første og mest kritiske skridt mod compliance, og det giver jer et overblik I kan handle på.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/ydelser/ai-systems-audit"
                    style={{ background: RED }}
                    className="hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-opacity inline-block text-center text-sm"
                  >
                    Se AI Systems Audit
                  </Link>
                  <Link
                    href="/#kontakt"
                    className="border font-semibold px-6 py-3 rounded-full hover:opacity-60 transition-opacity inline-block text-center text-sm"
                    style={{ borderColor: DARK, color: DARK }}
                  >
                    Kontakt os
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Spørgsmål</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Ofte stillede spørgsmål om EU AI Act</h2>
          </div>
          <FaqAccordion faqs={faqs} />
          <p className="text-center mt-8 text-sm text-gray-500">
            Har du et spørgsmål der ikke er besvaret her?{" "}
            <Link href="/faq" className="underline hover:opacity-70" style={{ color: RED }}>Se vores fulde FAQ</Link>
            {" "}eller{" "}
            <Link href="/#kontakt" className="underline hover:opacity-70" style={{ color: RED }}>kontakt os direkte</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
