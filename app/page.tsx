"use client";

import { useState } from "react";
import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const services = [
  { icon: "/Graphics/Services-3.png",  title: "Planlægning og Styring",         body: "Vi leverer detaljeret planlægning, der er skræddersyet til dit projekts specifikke behov for en problemfri eksekveringsproces — også inden opstart." },
  { icon: "/Graphics/Services-8.png",  title: "Koordinering og risiko reduktion", body: "Vi udmærker os ved at identificere og afbøde potentielle risici tidligt i processen for at sikre, at dit projekt forbliver på sporet og inden for budgettet." },
  { icon: "/Graphics/Services-7.png",  title: "Kommunikationshjælp",             body: "Vi holder ALTID relevante deltagere og interessenter informeret med vores effektive kommunikationsstøtte, der forbedrer samarbejdet mellem alle projektinteressenter." },
  { icon: "/Graphics/Services-4.png",  title: "Effektivt Workflow",              body: "Vi leverer projektledelsesopgaver for at opnå bedre produktivitet og holder dig på sporet med projekttidslinjer ved hjælp af vores effektive workflow-strategier." },
  { icon: "/Graphics/Services-6.png",  title: "Det effektive Team",              body: "Udnyt styrken i teamwork ved at forbedre kommunikationen mellem teammedlemmerne for et mere inkluderende og effektiviseret projektmål." },
  { icon: "/Graphics/Services-5.png",  title: "Innovative Løsninger",            body: "Vi implementerer kreative og innovative løsninger i processen for at overvinde projektudfordringer og levere exceptionelle resultater ud over kundens forventninger." },
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

const kundeLogos = [
  { src: "/kunde1.webp",  alt: "Kunde" },
  { src: "/kunde2.webp",  alt: "Kunde" },
  { src: "/kunde3.png",   alt: "Kunde" },
  { src: "/kunde4.webp",  alt: "Kunde" },
  { src: "/kunde5.webp",  alt: "Kunde" },
  { src: "/kunde6.svg",   alt: "Kunde" },
  { src: "/kunde7.svg",   alt: "Kunde" },
  { src: "/kunde8.webp",  alt: "Kunde" },
  { src: "/kunde9.webp",  alt: "Kunde" },
  { src: "/kunde10.webp", alt: "Kunde" },
  { src: "/kunde11.webp", alt: "Kunde" },
  { src: "/kunde12.webp", alt: "Kunde" },
  { src: "/kunde13.webp", alt: "Kunde" },
  { src: "/kunde14.png",  alt: "Kunde" },
];

// Brand colors
const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const heroSlides = [
  {
    image: "/hero.JPEG",
    flip: true,
    label: "Plan Well, Lead Better",
    heading: "Lad os sikre at dit projekt",
    headingRed: "bliver en succes",
    body: "Uanset om det er et mindre IT-projekt eller en stor IT-transformation, kan vi bistå med erfarne projektledere, Enterprise arkitekter eller specialiserede eksperter inden for netop jeres branche eller domæne.",
  },
  {
    image: "/Hero2.webp",
    flip: false,
    brightness: 0.5,
    label: "Projekter er vores DNA",
    heading: "Intet projekt er",
    headingRed: "for stort eller for småt",
    body: "Vi påtager os ansvaret for alt fra mindre IT-projekter til større IT-transformationer og Cloud-implementeringer — altid med fokus på fremdrift og succesfuld leverance.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  // Auto-advance slides
  React.useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => {
        setPrevSlide(s);
        return (s + 1) % heroSlides.length;
      });
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  // Clear prevSlide after fade-out completes
  React.useEffect(() => {
    if (prevSlide === null) return;
    const t = setTimeout(() => setPrevSlide(null), 1400);
    return () => clearTimeout(t);
  }, [prevSlide]);
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
      <Nav />

      {/* HERO SLIDER */}
      <section id="top" className="relative overflow-hidden h-[580px] flex items-center mt-20 md:mt-0">
        {/* All slide images stacked — active one fades in */}
        {heroSlides.map((s, i) => (
          <div
            key={s.image}
            className="absolute inset-0"
            style={{
              transform: s.flip ? "scaleX(-1)" : "none",
              opacity: slide === i ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
          >
            <img
              src={s.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{
                filter: s.brightness ? `brightness(${s.brightness})` : undefined,
                animation: (slide === i || prevSlide === i) ? "heroZoom 6s ease-out forwards" : "none",
              }}
            />
          </div>
        ))}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,0.82) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0.0) 100%)" }}
        />

        {/* Slide content */}
        <div className="relative max-w-6xl mx-auto w-full px-6 pt-8 md:pt-36 pb-28">
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
      <section id="om-os" className="relative overflow-hidden" style={{ background: "#1C2544" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2" style={{ minHeight: 460 }}>
          {/* Left: photo */}
          <div className="relative hidden md:block">
            <img
              src="/Graphics/Project-manager.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.5)" }}
            />
            {/* Fade to dark on right edge */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,37,68,0) 55%, rgba(28,37,68,1) 100%)" }} />
          </div>

          {/* Right: content */}
          <div className="px-10 py-20 flex flex-col justify-center">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: RED }}>Om os</p>
            <h2 className="text-3xl font-bold text-white mb-5 leading-snug">
              Din betroede<br />projektpartner siden 2018
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Vi kombinerer mangeårig erfaring med intern vidensdeling for at levere projekter af enhver kompleksitet — altid med fremdrift og succes i fokus.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-white/10 pt-8">
              {[["30+", "Års erfaring"], ["50+", "Projekter leveret"], ["2018", "Grundlagt"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-3xl font-bold" style={{ color: RED }}>{val}</p>
                  <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">{lbl}</p>
                </div>
              ))}
            </div>

            <a
              href="/om-os"
              className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-70 text-white"
            >
              Læs mere om os <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* KUNDER */}
      <section className="py-12 border-y" style={{ background: OFFWHITE, borderColor: BORDER }}>
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8 opacity-40" style={{ color: DARK }}>
          Kunder vi har arbejdet med
        </p>
        <div className="overflow-hidden">
          <div className="flex logo-scroll" style={{ gap: "1.5rem", width: "max-content" }}>
            {[...kundeLogos, ...kundeLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 rounded-xl"
                style={{ width: 140, height: 72, background: "#fff", border: `1px solid ${BORDER}` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 max-w-[110px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YDELSER */}
      <section id="ydelser" className="py-20 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Ydelser</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-3">Hvad vi hjælper med</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Fra planlægning til afslutning — vi dækker alle aspekter af professionel projektledelse.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {services.map((s) => (
              <a
                key={s.title}
                href="/ydelser"
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border hover:shadow-lg hover:border-red-200 transition-all"
                style={{ borderColor: BORDER }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "#eef3f9" }}
                >
                  <img src={s.icon} alt="" className="w-8 h-8 object-contain" style={{ mixBlendMode: "multiply" }} />
                </div>
                <h3 className="font-bold text-sm leading-snug" style={{ color: DARK }}>{s.title}</h3>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/ydelser"
              style={{ background: RED }}
              className="inline-block hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity"
            >
              Se alle ydelser →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-5">Har du spørgsmål?</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Vi har samlet svar på de mest stillede spørgsmål om vores arbejdsproces, priser og samarbejde.
            </p>
            <a
              href="/faq"
              style={{ background: RED }}
              className="inline-block hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity"
            >
              Se alle spørgsmål
            </a>
          </div>
          <div className="space-y-3">
            {faqs.slice(0, 3).map((faq, i) => (
              <a
                key={i}
                href="/faq"
                className="flex items-center gap-4 p-5 rounded-xl border bg-white hover:shadow-md transition-all group"
                style={{ borderColor: BORDER }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ background: RED }}
                >?</span>
                <p className="font-medium text-sm flex-1" style={{ color: DARK }}>{faq.q}</p>
                <span className="text-gray-300 group-hover:text-gray-500 transition-colors shrink-0">→</span>
              </a>
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

      <Footer />
    </>
  );
}
