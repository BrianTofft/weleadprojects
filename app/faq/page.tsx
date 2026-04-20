"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata = undefined; // client component — set via generateMetadata if needed

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const faqs = [
  {
    category: "Samarbejde",
    q: "Hvordan kan I hjælpe min forretning?",
    a: "Vi tilbyder ekspertise og strategisk vejledning tilpasset dine forretningsmål, effektiv projektplanlægning og udførelse samt tidlig risikostyring og reduktion — så dit projekt lykkes.",
  },
  {
    category: "Samarbejde",
    q: "Hvordan ser processen ud for jeres ydelser?",
    a: "Vores samarbejde forløber i syv faser: indledende konsultation, behovsanalyse med tilbud, formaliseret aftale og onboarding, projektplanlægning med interessenter, eksekvering med løbende opfølgning, evaluering og feedback samt formel projektafslutning med efterfølgende support.",
  },
  {
    category: "Projekt",
    q: "Hvor lang tid varer et projekt typisk?",
    a: "Projektvarighed afhænger af kompleksitet. Vi tilbyder kortvarige engagementer (1–3 måneder) for afgrænsede problemstillinger, mellemfristede (3–6 måneder) for større forandringer, og langsigtede engagementer (6–12 måneder eller mere) for store transformationer.",
  },
  {
    category: "Økonomi",
    q: "Hvad er jeres betalingsbetingelser?",
    a: "Betalingsstrukturen inkluderer et indledende depositum inden opstart, milepælsbaserede betalinger for længerevarende engagementer, månedlig fakturering for løbende ydelser og slutbetaling ved projektafslutning. Vi accepterer bankoverførsler, kreditkort og elektroniske betalingssystemer.",
  },
  {
    category: "Referencer",
    q: "Kan I levere kunde cases eller kundeudtalelser?",
    a: "Ja. Vi har bl.a. cases inden for forretningsudviklingsplanlægning i telecom-sektoren, implementering af IT-systemer samt digitale transformationer på tværs af brancher.",
  },
  {
    category: "Om os",
    q: "Hvad gør jeres virksomhed speciel?",
    a: "Vi skræddersyr løsninger til hvert projekt, har dokumenteret erfaring på tværs af brancher, anvender innovative metoder med de nyeste trends, prioriterer transparent kommunikation og tilbyder omfattende support efter projektafslutning.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Nav />

      <PageHeader
        label="FAQ"
        title="Ofte stillede spørgsmål"
        subtitle="Find svar på de mest stillede spørgsmål om vores arbejdsproces, samarbejde og priser."
        image="/Hero2.webp"
      />

      {/* ACCORDION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden"
              style={{ borderColor: BORDER }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
                style={{ color: DARK }}
              >
                <span className="pr-4">{faq.q}</span>
                <span className="text-xl shrink-0 font-light" style={{ color: RED }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div
                  className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t pt-4"
                  style={{ borderColor: BORDER }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: OFFWHITE }} className="py-16 px-6 text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Fandt du ikke svar på dit spørgsmål?</h2>
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
