import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projektledelse til IT-projekter",
  description:
    "Erfarne projektledere til komplekse IT-projekter og transformationer. Vi tager ansvar for leverance, uanset om I kører Waterfall, Agile eller hybrid.",
  openGraph: {
    title: "Projektledelse | We Lead Projects",
    description: "Erfarne projektledere til komplekse IT-projekter og transformationer.",
    images: [{ url: "/Graphics/Project-manager.webp", width: 1200, height: 630, alt: "Projektledelse hos We Lead Projects" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

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
  { title: "Planlægning og milepælsstruktur", body: "Detaljeret projektplan tilpasset jeres kompleksitet, med realistiske milepæle og ressourceallokering fastlagt inden opstart." },
  { title: "Risikostyring", body: "Løbende identifikation og afbødning af risici, så projektet forbliver på sporet og inden for budget, i stedet for at reagere når skaden er sket." },
  { title: "Interessentstyring", body: "Struktureret kommunikation til alle niveauer, fra styregruppe til slutbrugere, så opbakningen holder gennem hele forløbet." },
  { title: "Fremdrift og eksekvering", body: "Tæt opfølgning på leverancer, beslutninger og afhængigheder, med klar eskalering når noget kræver ledelsens involvering." },
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
          <p className="text-gray-600 leading-relaxed">
            Vi er metodeneutrale. Vi vælger den tilgang, klassisk Waterfall, Agile eller en hybrid model, der passer til jeres organisation og projektets natur, ikke omvendt. Læs mere om, hvordan vi vælger model, i vores artikel om{" "}
            <Link href="/indsigt/agile-waterfall-eller-hybrid" style={{ color: RED }} className="underline hover:opacity-75">
              Agile, Waterfall eller Hybrid
            </Link>.
          </p>
        </div>
      </section>

      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi leverer</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Fire kerneopgaver</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {leverancer.map((l) => (
              <div key={l.title} className="bg-white rounded-2xl border p-7" style={{ borderColor: BORDER }}>
                <h3 style={{ color: DARK }} className="font-bold mb-2">{l.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
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

      <section style={{ background: OFFWHITE }} className="py-16 px-6 text-center">
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
