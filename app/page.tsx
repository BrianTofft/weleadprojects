"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";

const services = [
  {
    icon: "📋",
    title: "Planlægning og Styring",
    body: "Vi leverer detaljeret planlægning, der er skræddersyet til dit projekts specifikke behov for en problemfri eksekveringsproces — også inden opstart.",
  },
  {
    icon: "🛡️",
    title: "Koordinering og risiko reduktion",
    body: "Vi udmærker os ved at identificere og afbøde potentielle risici tidligt i processen for at sikre, at dit projekt forbliver på sporet og inden for budgettet.",
  },
  {
    icon: "💬",
    title: "Kommunikationshjælp",
    body: "Vi holder ALTID relevante deltagere og interessenter informeret med vores effektive kommunikationsstøtte, der forbedrer samarbejdet mellem alle projektinteressenter.",
  },
  {
    icon: "⚡",
    title: "Effektivt Workflow",
    body: "Vi leverer projektledelsesopgaver for at opnå bedre produktivitet og holder dig på sporet med projekttidslinjer ved hjælp af vores effektive workflow-strategier.",
  },
  {
    icon: "🤝",
    title: "Det effektive Team",
    body: "Udnyt styrken i teamwork ved at forbedre kommunikationen mellem teammedlemmerne for et mere inkluderende og effektiviseret projektmål.",
  },
  {
    icon: "💡",
    title: "Innovative Løsninger",
    body: "Vi implementerer kreative og innovative løsninger i processen for at overvinde projektudfordringer og levere exceptionelle resultater ud over kundens forventninger.",
  },
];

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

// Brand colors
const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const heroSlides = [
  {
    label: "Plan Well, Lead Better",
    heading: "Lad os sikre dit projekt",
    headingRed: "bliver en succes",
    body: "Uanset om det er et mindre IT-projekt eller en stor IT-transformation, kan vi bistå med erfarne projektledere, Enterprise arkitekter eller specialiserede eksperter inden for netop jeres branche eller domæne.",
  },
  {
    label: "Projekter er vores DNA",
    heading: "Intet projekt er",
    headingRed: "for stort eller for småt",
    body: "Vi påtager os ansvaret for alt fra mindre IT-projekter til større IT-transformationer og Cloud-implementeringer — altid med fokus på fremdrift og succesfuld leverance.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto-advance slides
  React.useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#top">
            <Image src="/logo.png" alt="We Lead Projects" width={360} height={92} className="object-contain" />
          </a>
          <div className="hidden md:flex gap-8 text-base font-medium" style={{ color: DARK }}>
            <a href="#om-os" className="hover:opacity-60 transition-opacity">Om os</a>
            <a href="#ydelser" className="hover:opacity-60 transition-opacity">Ydelser</a>
            <a href="/news" className="hover:opacity-60 transition-opacity">News</a>
            <a href="#faq" className="hover:opacity-60 transition-opacity">FAQ</a>
            <a href="#kontakt" className="hover:opacity-60 transition-opacity">Kontakt</a>
          </div>
          <a
            href="#kontakt"
            style={{ background: RED }}
            className="hover:opacity-90 text-white text-sm font-semibold px-5 py-2 rounded-full transition-opacity"
          >
            Kontakt os
          </a>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section id="top" className="relative overflow-hidden min-h-[580px] flex items-center">
        {/* Background image with zoom — resets on each slide */}
        <img
          key={animKey}
          src="/hero.JPEG"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ transform: "scaleX(-1)", animation: "heroZoom 6s ease-out forwards" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,0.82) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0.0) 100%)" }}
        />

        {/* Slide content */}
        <div className="relative max-w-6xl mx-auto w-full px-6 pt-36 pb-28">
          <div className="max-w-lg">
            <p key={`label-${slide}`} style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-4 animate-fade">
              {heroSlides[slide].label}
            </p>
            <h1 key={`h-${slide}`} style={{ color: DARK }} className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade">
              {heroSlides[slide].heading}
              <br />
              <span style={{ color: RED }}>{heroSlides[slide].headingRed}</span>
            </h1>
            <p key={`b-${slide}`} className="text-gray-600 text-lg mb-10 animate-fade">
              {heroSlides[slide].body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" style={{ background: RED }} className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity">
                Kom i gang
              </a>
              <a href="#ydelser" style={{ color: DARK, borderColor: DARK }} className="border font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity">
                Se vores ydelser
              </a>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setSlide(i); setAnimKey((k) => k + 1); }}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === slide ? RED : BORDER }}
            />
          ))}
        </div>
      </section>

      {/* OM OS */}
      <section id="om-os" style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Om os</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-5">Din betroede projektpartner</h2>
            <p className="text-gray-600 mb-5">
              Vi startede vores projektledelsesrejse i 2018, med en vision om at gøre tingene på den rigtige måde. Fra begyndelsen har vi prioriteret koordinering og kommunikation højt for at sikre en vellykket projektleverance.
            </p>
            <p className="text-gray-600">
              Gennem ansvar og erfaringsmodeller, backup fra kollegaer og nyeste viden om projektstyring, navigerer vi projektlandskabet. Vores fokus på interessentstyring har givet os mulighed for at vokse til et betroet navn i branchen.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 text-center border" style={{ borderColor: BORDER }}>
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: DARK }}>1+1=3 Metoden</h3>
            <p className="text-gray-500 text-sm">
              Vores interne vidensdeling sikrer, at alle konsulenter lærer og vokser på tværs af projekterne — til gavn for dig som kunde.
            </p>
          </div>
        </div>
      </section>

      {/* YDELSER */}
      <section id="ydelser" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Ydelser</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">
              Professionelle leverancer som sikrer succes i projekter
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-sm">
              Vores erfarne projektledere er dagligt i gang på mange forskelligartede kundeprojekter, hvilket løbende hæver erfaringsniveauet hos den enkelte — det kalder vi 1+1=3 metoden.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                style={{ borderColor: BORDER }}
                className="border rounded-xl p-7 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 style={{ color: DARK }} className="font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Vi hjælper med at sikre fremdrift og succes</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Uanset om det er kompetent projektledelse, innovativ tilgang til fornyet fremdrift eller blot bidrag i form af rådgivning og ekspertbistand, er We Lead Projects altid klar til at se på udfordringen og bringe nye perspektiver og metoder i spil.
          </p>
          <a
            href="#kontakt"
            style={{ background: RED }}
            className="inline-block mt-8 hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity"
          >
            Tag kontakt
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Ofte stillede spørgsmål</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderColor: BORDER }}
                className="bg-white border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ color: DARK }}
                  className="w-full text-left px-6 py-5 font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <span style={{ color: RED }} className="text-xl ml-4 flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ borderColor: BORDER }} className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Kontakt</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">Kontakt os døgnet rundt</h2>
            <p className="text-gray-500 mb-8">
              Du kan altid kontakte os — og hvis telefonerne ikke er åbne, sender du en besked, så ringer vi tilbage senest den næste hverdag.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span style={{ color: RED }} className="text-lg">📞</span>
                <div>
                  <p style={{ color: DARK }} className="font-semibold">Telefon</p>
                  <a href="tel:+4552400088" className="text-gray-600 hover:underline">+45 5240 0088</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: RED }} className="text-lg">✉️</span>
                <div>
                  <p style={{ color: DARK }} className="font-semibold">Email</p>
                  <a href="mailto:hello@weleadprojects.com" className="text-gray-600 hover:underline">
                    hello@weleadprojects.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: RED }} className="text-lg">📍</span>
                <div>
                  <p style={{ color: DARK }} className="font-semibold">Adresse</p>
                  <p className="text-gray-600">Industrivej 21, 4000 Roskilde</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: RED }} className="text-lg">🕐</span>
                <div>
                  <p style={{ color: DARK }} className="font-semibold">Åbningstider</p>
                  <p className="text-gray-600">Man–tor: 9.00–16.00</p>
                  <p className="text-gray-600">Fre: 9.00–15.00</p>
                </div>
              </div>
            </div>
            <div style={{ borderColor: BORDER }} className="mt-6 pt-6 border-t text-sm text-gray-400">
              <p style={{ color: DARK }} className="font-semibold">Brian P.N. Tofft</p>
              <p>Managing Partner</p>
              <p className="text-xs mt-1">CVR-nr.: 44934655</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: OFFWHITE }} className="rounded-2xl p-8">
            <h3 style={{ color: DARK }} className="font-bold text-lg mb-6">Send os en besked</h3>
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <p style={{ color: DARK }} className="font-semibold">Tak for din besked!</p>
                <p className="text-gray-500 text-sm mt-2">Vi vender tilbage hurtigst muligt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Navn *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ borderColor: BORDER }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white"
                    placeholder="Dit fulde navn"
                  />
                </div>
                <div>
                  <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ borderColor: BORDER }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{ borderColor: BORDER }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white"
                    placeholder="+45 __ __ __ __"
                  />
                </div>
                <div>
                  <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Besked *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ borderColor: BORDER }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white resize-none"
                    placeholder="Beskriv dit projekt eller din forespørgsel..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-600 text-sm">Noget gik galt. Prøv igen eller ring til os.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ background: status === "sending" ? "#999" : RED }}
                  className="w-full text-white font-semibold py-3 rounded-full transition-opacity hover:opacity-90 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sender..." : "Send besked"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-8 px-6 text-center text-sm" style={{ borderColor: BORDER, color: DARK }}>
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="We Lead Projects" width={40} height={40} className="object-contain opacity-80" />
        </div>
        <p className="text-gray-400">© 2025 We Lead Projects ApS · CVR-nr.: 44934655 · Industrivej 21, 4000 Roskilde</p>
        <p className="mt-1 text-gray-400">
          <a href="mailto:hello@weleadprojects.com" className="hover:underline">
            hello@weleadprojects.com
          </a>
          {" · "}
          <a href="tel:+4552400088" className="hover:underline">
            +45 5240 0088
          </a>
        </p>
      </footer>
    </>
  );
}
