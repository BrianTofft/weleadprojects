import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CookieSettingsLink from "@/components/CookieSettingsLink";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description:
    "Sådan behandler We Lead Projects personoplysninger, hvilke cookies vi bruger, og hvilke rettigheder du har efter GDPR.",
  alternates: {
    canonical: "https://www.weleadprojects.com/privatlivspolitik",
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Nav />

      <PageHeader
        label="Juridisk"
        title="Privatlivspolitik"
        subtitle="Hvordan vi behandler personoplysninger, og hvilke cookies vi bruger på weleadprojects.com."
        image="/Graphics/Roadmap-1.webp"
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-gray-500 text-sm">Senest opdateret: 14. august 2026</p>

          <div>
            <h2 style={{ color: DARK }} className="text-2xl font-bold mb-3">Dataansvarlig</h2>
            <p className="text-gray-600 leading-relaxed">
              We Lead Projects ApS, CVR-nr. 44934655, Industrivej 21, 4000 Roskilde, er dataansvarlig for behandlingen af de personoplysninger, der beskrives i denne politik. Har du spørgsmål, kan du altid kontakte os på{" "}
              <a href="mailto:hello@weleadprojects.com" style={{ color: RED }} className="underline hover:opacity-75">
                hello@weleadprojects.com
              </a>.
            </p>
          </div>

          <div>
            <h2 style={{ color: DARK }} className="text-2xl font-bold mb-3">Når du bruger kontaktformularen</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Når du skriver til os via kontaktformularen, behandler vi de oplysninger du selv angiver: navn, virksomhed, email, telefon og din besked. Oplysningerne bruges udelukkende til at besvare din henvendelse og sendes via vores e-mailleverandør Resend.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Retsgrundlaget er vores berettigede interesse i at kunne besvare henvendelser fra potentielle kunder, jf. GDPR artikel 6, stk. 1, litra f. Oplysningerne slettes, når henvendelsen er afsluttet og eventuel opfølgning ikke længere er relevant, medmindre en aftale indgås, hvorefter almindelige bogføringsregler kan forlænge opbevaringen.
            </p>
          </div>

          <div>
            <h2 style={{ color: DARK }} className="text-2xl font-bold mb-3">Cookies og måling af trafik</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Vi bruger Google Analytics 4 (GA4) til at måle, hvordan besøgende bruger hjemmesiden, blandt andet hvilke sider der besøges, og hvor trafikken kommer fra. Det hjælper os med at forbedre indhold og brugeroplevelse.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              GA4 sættes først, når du aktivt har accepteret cookies i samtykkebanneret. Afviser du, indlæses Google Analytics ikke, og der sættes ingen målings-cookies. Retsgrundlaget er dit samtykke, jf. GDPR artikel 6, stk. 1, litra a. Du kan til enhver tid trække dit samtykke tilbage nedenfor.
            </p>
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: BORDER }}>
              <table className="w-full text-sm text-left">
                <thead style={{ background: OFFWHITE }}>
                  <tr>
                    <th className="px-4 py-3 font-semibold" style={{ color: DARK }}>Cookie</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: DARK }}>Formål</th>
                    <th className="px-4 py-3 font-semibold" style={{ color: DARK }}>Udløber</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-t" style={{ borderColor: BORDER }}>
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">Skelner mellem unikke besøgende</td>
                    <td className="px-4 py-3">2 år</td>
                  </tr>
                  <tr className="border-t" style={{ borderColor: BORDER }}>
                    <td className="px-4 py-3 font-mono text-xs">_ga_&lt;container-id&gt;</td>
                    <td className="px-4 py-3">Gemmer session- og besøgsdata til GA4</td>
                    <td className="px-4 py-3">2 år</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              Data behandles af Google LLC (USA) som databehandler under Googles standardvilkår og EU-US Data Privacy Framework. Læs mere i{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
                Googles egen privatlivspolitik
              </a>.
            </p>
          </div>

          <div className="rounded-2xl border p-6" style={{ borderColor: BORDER, background: OFFWHITE }}>
            <h2 style={{ color: DARK }} className="text-lg font-bold mb-2">Skift dit cookie-valg</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Du kan til enhver tid ændre eller trække dit samtykke til Google Analytics tilbage. Klik herunder for at nulstille dit valg, samtykkebanneret vises igen ved næste sideindlæsning.
            </p>
            <CookieSettingsLink
              className="text-white font-semibold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity inline-block"
              style={{ background: RED }}
            />
          </div>

          <div>
            <h2 style={{ color: DARK }} className="text-2xl font-bold mb-3">Andre tjenester vi bruger</h2>
            <p className="text-gray-600 leading-relaxed">
              Hjemmesiden hostes hos Vercel Inc. Vores interne lead-tracker anvender Supabase som databasetjeneste, denne indeholder ikke oplysninger om almindelige besøgende, kun data fra virksomhedens eget salgsarbejde. Trustpilot-widgetten i footeren indlæses fra Trustpilot A/S og kan sætte egne cookies i overensstemmelse med Trustpilots egen privatlivspolitik.
            </p>
          </div>

          <div>
            <h2 style={{ color: DARK }} className="text-2xl font-bold mb-3">Dine rettigheder</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Efter databeskyttelsesforordningen (GDPR) har du ret til at:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                Få indsigt i, hvilke oplysninger vi har registreret om dig
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                Få urigtige oplysninger rettet
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                Få oplysninger slettet, hvor det er muligt
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                Gøre indsigelse mod behandlingen
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                Modtage dine oplysninger i et struktureret format (dataportabilitet)
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: RED }} className="mt-0.5 shrink-0 font-bold">✓</span>
                Klage til Datatilsynet, hvis du mener vi behandler dine oplysninger forkert
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Du kan udøve dine rettigheder ved at kontakte os på{" "}
              <a href="mailto:hello@weleadprojects.com" style={{ color: RED }} className="underline hover:opacity-75">
                hello@weleadprojects.com
              </a>, eller klage direkte til{" "}
              <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" style={{ color: RED }} className="underline hover:opacity-75">
                Datatilsynet
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
