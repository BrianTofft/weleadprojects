import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Governance Program",
  description:
    "Tre produkter til tre faser af AI governance: kortlægning, governance-model og implementering. Vælg det der passer jeres situation.",
  alternates: {
    canonical: "https://www.weleadprojects.com/ydelser/ai-governance-program",
  },
  openGraph: {
    title: "AI Governance Program | We Lead Projects",
    description: "Kortlægning, governance-model og implementering. Tre produkter, vælg det der passer jeres situation.",
    images: [{ url: "/Graphics/AdobeStock_828719609.webp", width: 1200, height: 630, alt: "AI Governance Program hos We Lead Projects" }],
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
  name: "AI Governance Program",
  provider: { "@type": "Organization", name: "We Lead Projects", url: "https://www.weleadprojects.com" },
  areaServed: "DK",
  description:
    "Tre produkter til AI governance: AI Systems Audit, AI Governance Accelerator og Implementation Partner. Vælg det forløb der passer jeres situation og modenhedsniveau.",
  url: "https://www.weleadprojects.com/ydelser/ai-governance-program",
};

const tiers = [
  {
    num: "01",
    name: "AI Systems Audit",
    tagline: "Få det faktiske billede",
    price: "49.000 kr.",
    duration: "1–2 uger",
    situation: "I ved ikke præcist hvilke AI-systemer I har i produktion, og I har brug for at vide det inden I kan tage stilling til governance eller compliance.",
    deliverables: [
      "AI-aktiv kortlægning",
      "EU AI Act risikoklassificering og gap-analyse",
      "Governance-anbefaling (overordnet)",
      "90-dages handlingsplan",
    ],
    href: "/ydelser/ai-systems-audit",
    featured: false,
  },
  {
    num: "02",
    name: "AI Governance Accelerator",
    tagline: "Byg governance-strukturen",
    price: "275.000 kr.",
    duration: "4–6 uger",
    situation: "I har overblikket. Nu mangler I en governance-struktur der faktisk virker, med klart ejerskab, beslutningsveje og risikomodel, forankret i jeres organisation.",
    deliverables: [
      "Governance-model med klart ejerskab",
      "RACI og roller på tværs af IT, forretning og compliance",
      "Beslutningsfora og eskaleringsmodel",
      "Risikomodel og arkitektur-guardrails",
      "Prioriteret implementerings-roadmap",
    ],
    href: "/ydelser/ai-governance-accelerator",
    featured: true,
  },
  {
    num: "03",
    name: "Implementation Partner",
    tagline: "Driv implementeringen",
    price: "125.000 kr./md.",
    duration: "3–6 måneder",
    situation: "Governance-strukturen er på plads. Nu skal den føres ud i livet, og det kræver nogen der driver det, holder momentum og rapporterer til ledelsen.",
    deliverables: [
      "Midlertidigt AI Governance Office",
      "Implementeringsledelse og facilitering",
      "Løbende tilsyn og risikovurdering",
      "Leverandørstyring ift. AI-compliance",
      "Overdragelsesplan og intern kapacitetsopbygning",
    ],
    href: "/ydelser/ai-implementation-partner",
    featured: false,
  },
];

const matrixRows = [
  {
    category: "AI Systems Audit",
    items: [
      { label: "AI-aktiv kortlægning", t1: true, t2: false, t3: false },
      { label: "EU AI Act klassificering og gap-analyse", t1: true, t2: false, t3: false },
      { label: "Governance-anbefaling (overordnet)", t1: true, t2: false, t3: false },
      { label: "Prioriteret handlingsplan", t1: true, t2: false, t3: false },
    ],
  },
  {
    category: "AI Governance Accelerator",
    items: [
      { label: "Governance-model med ejerskab", t1: false, t2: true, t3: false },
      { label: "RACI og roller", t1: false, t2: true, t3: false },
      { label: "Beslutningsfora og eskaleringsmodel", t1: false, t2: true, t3: false },
      { label: "Risikomodel og arkitektur-guardrails", t1: false, t2: true, t3: false },
      { label: "Implementerings-roadmap", t1: false, t2: true, t3: false },
    ],
  },
  {
    category: "Implementation Partner",
    items: [
      { label: "Midlertidigt AI Governance Office", t1: false, t2: false, t3: true },
      { label: "Implementeringsledelse", t1: false, t2: false, t3: true },
      { label: "Løbende tilsyn og risikovurdering", t1: false, t2: false, t3: true },
      { label: "Leverandørstyring ift. compliance", t1: false, t2: false, t3: true },
      { label: "Overdragelsesplan", t1: false, t2: false, t3: true },
    ],
  },
];

const Check = () => (
  <span style={{ color: RED }} className="font-bold text-base">✓</span>
);

const Dash = () => (
  <span style={{ color: BORDER }} className="text-base">—</span>
);

export default function AiGovernanceProgramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      <PageHeader
        label="AI Governance"
        title="AI Governance Program"
        subtitle="Tre produkter til tre faser. Vælg det der passer jeres situation. De kan bruges uafhængigt eller i rækkefølge."
        image="/Graphics/AdobeStock_828719609.webp"
      />

      {/* INDLEDNING */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            AI governance er ikke ét problem. Det er tre forskellige problemer der opstår på tre forskellige tidspunkter. Nogle virksomheder mangler overblikket. Andre har overblikket men mangler strukturen. Andre igen har strukturen men ingen til at drive implementeringen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Hvert produkt er designet til én specifik fase. De er ikke varianter af det samme, men selvstændige forløb med egne leverancer. De kan købes enkeltvis eller i forlængelse af hinanden.
          </p>
        </div>
      </section>

      {/* PRODUKT-CARDS */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.num}
                className="rounded-2xl flex flex-col"
                style={{
                  background: t.featured ? NAVY : "#fff",
                  border: t.featured ? "none" : `1px solid ${BORDER}`,
                  color: t.featured ? "#fff" : DARK,
                }}
              >
                <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: t.featured ? "rgba(255,255,255,0.45)" : "#9e8888" }}
                    >
                      {t.num}
                    </span>
                    {t.featured && (
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: RED, color: "#fff" }}
                      >
                        Mest valgte
                      </span>
                    )}
                  </div>

                  <h2
                    className="text-xl font-bold mb-1"
                    style={{ color: t.featured ? "#fff" : DARK }}
                  >
                    {t.name}
                  </h2>
                  <p
                    className="text-sm mb-5"
                    style={{ color: t.featured ? "rgba(255,255,255,0.55)" : "#9e8888" }}
                  >
                    {t.tagline}
                  </p>

                  <div className="mb-6">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: t.featured ? "#fff" : RED }}
                    >
                      {t.price}
                    </span>
                    <span
                      className="text-sm ml-2"
                      style={{ color: t.featured ? "rgba(255,255,255,0.45)" : "#9e8888" }}
                    >
                      ekskl. moms · {t.duration}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-6 pb-6"
                    style={{
                      color: t.featured ? "rgba(255,255,255,0.7)" : "#6b5555",
                      borderBottom: `1px solid ${t.featured ? "rgba(255,255,255,0.1)" : BORDER}`,
                    }}
                  >
                    {t.situation}
                  </p>

                  <ul className="space-y-2">
                    {t.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm">
                        <span style={{ color: RED }} className="shrink-0 mt-0.5 font-bold">✓</span>
                        <span style={{ color: t.featured ? "rgba(255,255,255,0.8)" : "#4a3a3a" }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  {t.href ? (
                    <Link
                      href={t.href}
                      className="block text-center font-semibold py-3 rounded-full transition-opacity hover:opacity-90"
                      style={{ background: RED, color: "#fff" }}
                    >
                      Se detaljer
                    </Link>
                  ) : (
                    <a
                      href="https://calendly.com/bt-weleadprojects/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center font-semibold py-3 rounded-full transition-opacity hover:opacity-90"
                      style={{
                        background: t.featured ? RED : "transparent",
                        color: t.featured ? "#fff" : RED,
                        border: t.featured ? "none" : `2px solid ${RED}`,
                      }}
                    >
                      Book intromøde
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVORNÅR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvornår bruger du hvad</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-8">Tre situationer, tre svar</h2>
          <div className="space-y-5">
            {[
              {
                cue: "\"Vi er ikke sikre på hvilke AI-systemer vi faktisk har i brug.\"",
                answer: "Start med AI Systems Audit. To dage, fast pris. I ved præcis hvad I har, inden I beslutter næste skridt.",
                product: "AI Systems Audit",
              },
              {
                cue: "\"Vi kender vores systemer, men ingen ved hvem der ejer risikoen eller godkender nye AI-projekter.\"",
                answer: "AI Governance Accelerator. 4-6 uger, konkret governance-model med RACI, beslutningsfora og risikomodel. Ingen rapport til skuffen.",
                product: "AI Governance Accelerator",
              },
              {
                cue: "\"Vi har en governance-struktur, men det kræver nogen til at drive implementeringen.\"",
                answer: "Implementation Partner. Vi agerer midlertidigt AI Governance Office og sikrer at strukturen rent faktisk bruges.",
                product: "Implementation Partner",
              },
            ].map((s) => (
              <div
                key={s.product}
                className="rounded-xl border p-6"
                style={{ borderColor: BORDER, background: OFFWHITE }}
              >
                <p className="font-medium mb-3 text-sm italic" style={{ color: "#6b5555" }}>{s.cue}</p>
                <p className="text-sm leading-relaxed" style={{ color: DARK }}>
                  <strong style={{ color: RED }}>{s.product}.</strong>{" "}{s.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATRIX */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad er inkluderet</p>
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-2">Sammenligningsmatrix</h2>
          <p className="text-gray-500 text-sm mb-10">
            Hvert produkt leverer egne specifikke ydelser. Produkterne er ikke kumulative.
          </p>

          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: BORDER, background: "#fff" }}>
            {/* Header */}
            <div
              className="grid text-sm font-semibold"
              style={{ gridTemplateColumns: "1fr 120px 120px 120px", borderBottom: `2px solid ${BORDER}` }}
            >
              <div className="p-4 text-xs uppercase tracking-wider" style={{ color: "#9e8888" }}>Leverance</div>
              <div className="p-4 text-center text-xs" style={{ color: DARK }}>Audit</div>
              <div className="p-4 text-center text-xs" style={{ color: "#fff", background: NAVY }}>Accelerator</div>
              <div className="p-4 text-center text-xs" style={{ color: DARK }}>Partner</div>
            </div>

            {matrixRows.map((group, gi) => (
              <div key={group.category}>
                <div
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider"
                  style={{ background: OFFWHITE, color: "#9e8888", borderBottom: `1px solid ${BORDER}` }}
                >
                  {group.category}
                </div>
                {group.items.map((row, ri) => (
                  <div
                    key={row.label}
                    className="grid items-center"
                    style={{
                      gridTemplateColumns: "1fr 120px 120px 120px",
                      borderBottom: ri < group.items.length - 1 || gi < matrixRows.length - 1
                        ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <div className="p-4 text-sm" style={{ color: DARK }}>{row.label}</div>
                    <div className="p-4 text-center">{row.t1 ? <Check /> : <Dash />}</div>
                    <div className="p-4 text-center" style={{ background: "rgba(28,37,68,0.04)" }}>
                      {row.t2 ? <Check /> : <Dash />}
                    </div>
                    <div className="p-4 text-center">{row.t3 ? <Check /> : <Dash />}</div>
                  </div>
                ))}
              </div>
            ))}

            {/* Footer row — price */}
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: "1fr 120px 120px 120px", borderTop: `2px solid ${BORDER}` }}
            >
              <div className="p-4 text-sm font-semibold" style={{ color: DARK }}>Pris ekskl. moms</div>
              <div className="p-4 text-center text-sm font-bold" style={{ color: RED }}>49.000 kr.</div>
              <div className="p-4 text-center text-sm font-bold" style={{ color: RED, background: "rgba(28,37,68,0.04)" }}>275.000 kr.</div>
              <div className="p-4 text-center text-sm font-bold" style={{ color: RED }}>125.000 kr./md.</div>
            </div>
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: "1fr 120px 120px 120px", borderTop: `1px solid ${BORDER}` }}
            >
              <div className="p-4 text-sm" style={{ color: "#9e8888" }}>Varighed</div>
              <div className="p-4 text-center text-xs" style={{ color: "#9e8888" }}>1–2 uger</div>
              <div className="p-4 text-center text-xs" style={{ color: "#9e8888", background: "rgba(28,37,68,0.04)" }}>4–6 uger</div>
              <div className="p-4 text-center text-xs" style={{ color: "#9e8888" }}>3–6 måneder</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY }} className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-4">Usikker på hvilket produkt der passer?</h2>
          <p className="text-white opacity-70 mb-8 leading-relaxed">
            Book et 20 minutters møde. Vi stiller tre spørgsmål og kan normalt anbefale det rigtige forløb inden mødet er slut.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://calendly.com/bt-weleadprojects/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: RED }}
              className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity inline-block"
            >
              Book gratis afklaringsmøde
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
