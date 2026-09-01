"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const services = [
  { icon: "/Graphics/Services-3.png",  title: "Planlægning og Styring",         body: "Vi leverer detaljeret planlægning, der er skræddersyet til dit projekts specifikke behov for en problemfri eksekveringsproces, også inden opstart." },
  { icon: "/Graphics/Services-8.png",  title: "Koordinering og risiko reduktion", body: "Vi udmærker os ved at identificere og afbøde potentielle risici tidligt i processen for at sikre, at dit projekt forbliver på sporet og inden for budgettet." },
  { icon: "/Graphics/Services-7.png",  title: "Kommunikationshjælp",             body: "Vi holder ALTID relevante deltagere og interessenter informeret med vores effektive kommunikationsstøtte, der forbedrer samarbejdet mellem alle projektinteressenter." },
  { icon: "/Graphics/Services-4.png",  title: "Effektivt Workflow",              body: "Vi leverer projektledelsesopgaver for at opnå bedre produktivitet og holder dig på sporet med projekttidslinjer ved hjælp af vores effektive workflow-strategier." },
  { icon: "/Graphics/Services-6.png",  title: "Det effektive Team",              body: "Udnyt styrken i teamwork ved at forbedre kommunikationen mellem teammedlemmerne for et mere inkluderende og effektiviseret projektmål." },
  { icon: "/Graphics/Services-5.png",  title: "AI & Enterprise Architecture",    body: "Vi rådgiver om AI governance, EU AI Act compliance og Enterprise Architecture, og sikrer at teknologiinvesteringer understøtter din forretningsstrategi frem for at drive den." },
];

const faqs = [
  {
    q: "Hvordan kan I hjælpe min forretning?",
    a: "Vi tilbyder ekspertise og strategisk vejledning tilpasset dine forretningsmål, effektiv projektplanlægning og udførelse samt tidlig risikostyring og reduktion, så dit projekt lykkes.",
  },
  {
    q: "Hvordan ser processen ud for jeres ydelser?",
    a: "Vores samarbejde forløber i syv faser: indledende konsultation, behovsanalyse med tilbud, formaliseret aftale og onboarding, projektplanlægning med interessenter, eksekvering med løbende opfølgning, evaluering og feedback samt formel projektafslutning med efterfølgende support.",
  },
  {
    q: "Hvor lang tid varer et projekt typisk?",
    a: "Projektvarighed afhænger af kompleksitet. Vi tilbyder kortvarige engagementer (1–3 måneder) for afgrænsede problemstillinger, mellemfristede (3–6 måneder) for større forandringer og langsigtede engagementer (6–12 måneder eller mere) for store transformationer.",
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
  { src: "/kunde1.webp",  alt: "Kunde 1" },
  { src: "/kunde2.webp",  alt: "Kunde 2" },
  { src: "/kunde3.png",   alt: "Kunde 3" },
  { src: "/kunde4.webp",  alt: "Kunde 4" },
  { src: "/kunde5.webp",  alt: "Kunde 5" },
  { src: "/kunde6.svg",   alt: "Kunde 6" },
  { src: "/kunde7.svg",   alt: "Kunde 7" },
  { src: "/kunde8.webp",  alt: "Kunde 8" },
  { src: "/kunde9.webp",  alt: "Kunde 9" },
  { src: "/kunde10.webp", alt: "Kunde 10" },
  { src: "/kunde11.webp", alt: "Kunde 11" },
  { src: "/kunde12.webp", alt: "Kunde 12" },
  { src: "/kunde13.webp", alt: "Kunde 13" },
  { src: "/kunde14.png",  alt: "Kunde 14" },
];

// Brand colors
const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const heroSlides = [
  {
    image: "/Graphics/GettyImages-517041045_optimized.webp",
    flip: true,
    brightness: 0.65,
    label: "AI Governance Specialister",
    heading: "Tag kontrol over",
    headingRed: "AI i jeres organisation",
    body: "Vi kortlægger AI-aktiver, etablerer governance-strukturer og sikrer EU AI Act-compliance. Funderet i enterprise architecture og 30 års transformationspraksis.",
  },
  {
    image: "/hero.JPEG",
    flip: true,
    label: "Enterprise Architecture",
    heading: "Systemlandskabet",
    headingRed: "som fundament for governance",
    body: "AI governance uden forståelse for systemlandskabet er regelkendskab uden realitet. Vi bringer enterprise architecture-perspektivet ind, hvor det skaber forskel.",
  },
  {
    image: "/Hero2.webp",
    flip: false,
    brightness: 0.5,
    label: "Implementeringsledelse",
    heading: "Governance der",
    headingRed: "virker i praksis",
    body: "Vi driver AI governance-implementeringer i mål, fra kortlægning og compliance til etablering af strukturer der holder, fordi vi har gjort det med digitale transformationer i 30 år.",
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
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
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
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />

      {/* HERO SLIDER */}
      <section id="top" className="relative overflow-hidden h-[580px] md:h-screen flex items-center mt-20 md:mt-0">
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
            <Image
              src={s.image}
              alt={s.heading + " " + s.headingRed}
              width={1920}
              height={1080}
              className="object-cover object-top w-full h-full"
              priority={i === 0}
              style={{
                filter: s.brightness ? `brightness(${s.brightness})` : undefined,
                animation: (slide === i || prevSlide === i) ? "heroZoom 6s ease-out forwards" : "none",
              }}
            />
          </div>
        ))}
        {/* Gradient overlay — dark scrim on mobile so white text stays legible, light gradient on desktop for dark text */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))" }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,0.82) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0.0) 100%)" }}
        />

        {/* Slide content */}
        <div className="relative max-w-6xl mx-auto w-full px-6 pt-8 md:pt-36 pb-28">
          <div className="max-w-lg">
            <p key={`label-${slide}`} className="font-semibold uppercase tracking-widest text-sm mb-4 animate-fade text-white/80 md:text-[#cc2222]">
              {heroSlides[slide].label}
            </p>
            <h1 key={`h-${slide}`} className="text-3xl md:text-5xl font-bold leading-tight mb-6 animate-fade text-white md:text-[#2d1a1a]">
              {heroSlides[slide].heading}
              <br />
              <span style={{ color: RED }}>{heroSlides[slide].headingRed}</span>
            </h1>
            <p key={`b-${slide}`} className="text-white md:text-gray-600 text-lg mb-10 animate-fade">
              {heroSlides[slide].body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" style={{ background: RED }} className="hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity">
                Kom i gang
              </a>
              <a href="#ydelser" className="border font-semibold px-8 py-3 rounded-full hover:opacity-60 transition-opacity text-white border-white md:text-[#2d1a1a] md:border-[#2d1a1a]">
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

      {/* KORT FORTALT */}
      <section className="py-16 px-6 bg-white border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-8 text-center">Kort fortalt</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                ),
                body: <>Tre AI governance-produkter, tilpasset tre faser: kortlægning, compliance-struktur og kontrolleret implementering.</>,
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M3 17.5h4M5 14v7M6.5 14V10h5"/>
                  </svg>
                ),
                body: <>Enterprise Architecture og transformationsledelse som fundament, det der adskiller os fra rene AI-konsulenter.</>,
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                body: <>30 års erfaring med enterprise-organisationer. Ikke AI-teoretikere, implementeringsfolk der har leveret siden 2018.</>,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 rounded-2xl border p-6"
                style={{ borderColor: BORDER, background: OFFWHITE }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#fde8e8" }}
                >
                  {item.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OM OS */}
      <section id="om-os" className="relative overflow-hidden" style={{ background: OFFWHITE }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2" style={{ minHeight: 460 }}>
          {/* Left: photo */}
          <div className="relative hidden md:block">
            <img
              src="/Graphics/Project-manager.webp"
              alt="Professionel projektleder"
              width={800}
              height={600}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Fade to offwhite on right edge */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(247,245,245,0) 55%, rgba(247,245,245,1) 100%)" }} />
          </div>

          {/* Right: content */}
          <div className="px-10 py-20 flex flex-col justify-center">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: RED }}>Om os</p>
            <h2 className="text-3xl font-bold mb-5 leading-snug" style={{ color: DARK }}>
              Din betroede<br />projektpartner siden 2018
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Vi kombinerer mangeårig erfaring med intern vidensdeling for at levere projekter af enhver kompleksitet, altid med fremdrift og succes i fokus.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t pt-8" style={{ borderColor: BORDER }}>
              {[["125+", "Års samlet erfaring"], ["50+", "Projekter leveret"], ["2018", "Grundlagt"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-3xl font-bold" style={{ color: RED }}>{val}</p>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{lbl}</p>
                </div>
              ))}
            </div>

            <a
              href="/om-os"
              className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-70"
              style={{ color: DARK }}
            >
              Læs mere om os <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* KUNDER */}
      <section className="py-12 border-y" style={{ background: "#fff", borderColor: BORDER }}>
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: RED }}>
          Kundeudvalg som vi har arbejdet for
        </p>
        <div className="max-w-5xl mx-auto px-6 overflow-hidden">
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
                  width={110}
                  height={48}
                  className="max-h-12 max-w-[110px] object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRE KERNEKOMPETENCER */}
      <section className="py-20 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi bringer til bordet</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-4">AI governance med det rette fundament</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              AI governance kræver mere end regelkendskab. Det kræver forståelse for systemlandskabet, transformationserfaring og evnen til at drive implementeringen i mål.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                  </svg>
                ),
                title: "AI Governance",
                body: "Governance-rammer, EU AI Act compliance og kortlægning af AI-aktiver. Vi strukturerer jeres tilgang, så AI-initiativer skaber forretningsværdi og ikke compliance-risiko.",
                href: "/ydelser/ai-governance",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M3 17.5h4M5 14v7M6.5 14V10h5"/>
                  </svg>
                ),
                title: "Enterprise Architecture",
                body: "Vi kobler systemlandskabet til forretningsstrategien. Kortlægning, prioritering og arkitektur der giver governance et reelt grundlag at stå på.",
                href: "/ydelser/enterprise-architecture",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: "Implementeringsledelse",
                body: "Erfarne projektledere der tager ansvar for leverance, fra behovsafklaring til afslutning. Vi bringer den transformationserfaring der gør governance til virkelighed.",
                href: "/ydelser/projektledelse",
              },
            ].map((k) => (
              <Link
                key={k.title}
                href={k.href}
                className="group bg-white rounded-2xl p-8 border hover:shadow-lg hover:border-red-200 transition-all block"
                style={{ borderColor: BORDER }}
              >
                <div className="mb-4">{k.icon}</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: DARK }}>{k.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{k.body}</p>
                <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Læs mere <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI SYSTEMS AUDIT CALLOUT */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/ydelser/ai-systems-audit"
            className="group flex flex-col md:flex-row items-center gap-8 rounded-2xl border-2 p-8 md:p-10 hover:shadow-lg transition-all"
            style={{ borderColor: RED }}
          >
            <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#fde8e8" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{ background: "#fef2f2", color: RED }}
              >
                Fast pris og defineret output
              </span>
              <h3 style={{ color: DARK }} className="text-xl font-bold mb-2">AI Systems Audit, 49.000 DKK (ex. moms)</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ved I præcis hvilke AI-systemer I har i produktion? De fleste virksomheder gør det ikke. På 1-2 uger kortlægger vi jeres AI-aktiver, klassificerer dem efter EU AI Act og leverer en governance-anbefaling. Fast pris, ingen åbne regninger.
              </p>
            </div>
            <span style={{ color: RED }} className="shrink-0 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Læs mere <span>→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* EKSPERTISE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvem vi er</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">AI governance-specialister med enterprise-baggrund</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We Lead Projects er et dansk AI governance-konsulenthus baseret i Roskilde. Vi hjælper virksomheder med at kortlægge AI-aktiver, etablere governance-strukturer og navigere EU AI Act, fra strategisk overblik til kontrolleret implementering.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Vi er ikke AI-konsulenter der har lært projektledelse. Vi er enterprise arkitekter og transformationsledere der har specialiseret os i AI governance. Det er en afgørende forskel: governance der holder kræver forståelse for systemlandskab, organisationsstrukturer og reelle implementeringsevner, ikke kun kendskab til EU AI Act.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We Lead Projects ledes af Brian P.N. Tofft, tidligere Enterprise Architect hos Microsoft og Technical Authority hos DSB, med mere end 30 års erfaring med enterprise architecture og digital transformation. Den baggrund er det fundament der gør vores AI governance-rådgivning troværdig og praktisk anvendelig.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vi arbejder på tværs af brancher og organisationsstørrelser. Uanset om I er i gang med jeres første AI-kortlægning eller har brug for at konsolidere en governance-struktur på tværs af forretningsenheder, tager vi ansvar for leverancen.
            </p>
          </div>
        </div>
      </section>

      {/* YDELSER */}
      <section id="ydelser" className="py-20 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">AI Governance Program</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-3">Tre produkter til tre faser</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Fra den indledende kortlægning over compliance-strukturen til den løbende governance-praksis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                ),
                badge: "Fast pris, defineret output",
                title: "AI Systems Audit",
                price: "49.000 DKK",
                body: "Kortlægning af jeres AI-aktiver med EU AI Act-klassificering og governance-anbefaling. Leveret på 1-2 uger.",
                href: "/ydelser/ai-systems-audit",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                badge: "8-12 uger",
                title: "AI Governance Accelerator",
                price: "Tilbud efter scope",
                body: "Etablering af governance-struktur, politikker og compliance-dokumentation tilpasset jeres organisation og risikoniveau.",
                href: "/ydelser/ai-governance-accelerator",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                badge: "Løbende samarbejde",
                title: "Implementation Partner",
                price: "Retainer eller projekt",
                body: "Vi driver implementeringen af jeres AI governance-struktur, fra politikker til praksis, med fuld ansvarlig projektledelse.",
                href: "/ydelser/ai-implementation-partner",
              },
            ].map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group bg-white rounded-2xl p-8 border hover:shadow-lg hover:border-red-200 transition-all block"
                style={{ borderColor: BORDER }}
              >
                <div className="mb-4">{p.icon}</div>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3" style={{ background: "#fef2f2", color: RED }}>
                  {p.badge}
                </span>
                <h3 className="font-bold text-lg mb-1" style={{ color: DARK }}>{p.title}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: RED }}>{p.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.body}</p>
                <span style={{ color: RED }} className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Læs mere <span>→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/ydelser"
              style={{ background: RED }}
              className="inline-block hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-opacity"
            >
              Se alle ydelser
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
      <section id="kontakt" className="py-20 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Kontakt</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: DARK }}>Lad os tage en snak</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Du kan altid kontakte os, og hvis telefonerne ikke er åbne, sender du en besked, så ringer vi tilbage senest den næste hverdag.
            </p>

            <a
              href="https://calendly.com/bt-weleadprojects/30min"
              onClick={(e) => {
                e.preventDefault();
                const w = window as unknown as { Calendly?: { initPopupWidget: (opts: { url: string }) => void } };
                w.Calendly?.initPopupWidget({ url: "https://calendly.com/bt-weleadprojects/30min" });
              }}
              style={{ background: RED }}
              className="inline-flex items-center gap-2 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-opacity mb-10"
            >
              Book et intromøde direkte <span>→</span>
            </a>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: RED }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                </div>
                <div>
                  <p className="font-semibold mb-0.5" style={{ color: DARK }}>Telefon</p>
                  <a href="tel:+4552400088" className="text-gray-500 hover:text-gray-800 transition-colors">+45 5240 0088</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: RED }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="font-semibold mb-0.5" style={{ color: DARK }}>Email</p>
                  <a href="mailto:hello@weleadprojects.com" className="text-gray-500 hover:text-gray-800 transition-colors">
                    hello@weleadprojects.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: RED }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                </div>
                <div>
                  <p className="font-semibold mb-0.5" style={{ color: DARK }}>Adresse</p>
                  <a
                    href="https://maps.google.com/?q=Industrivej+21,+4000+Roskilde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    Industrivej 21, 4000 Roskilde
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: RED }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                </div>
                <div>
                  <p className="font-semibold mb-0.5" style={{ color: DARK }}>Åbningstider</p>
                  <p className="text-gray-500">Man–tor: 9.00–16.00</p>
                  <p className="text-gray-500">Fre: 9.00–15.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border" style={{ borderColor: BORDER }}>
            <h3 style={{ color: DARK }} className="font-bold text-lg mb-6">Send os en besked</h3>
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <p style={{ color: DARK }} className="font-semibold text-lg">Tak for din besked!</p>
                <p className="text-gray-500 text-sm mt-2">Vi vender tilbage hurtigst muligt. Du har fået en bekræftelse på email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Navn *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{ borderColor: BORDER }}
                      className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                      placeholder="Dit fulde navn"
                    />
                  </div>
                  <div>
                    <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Virksomhed</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      style={{ borderColor: BORDER }}
                      className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                      placeholder="Firmanavn"
                    />
                  </div>
                </div>
                <div>
                  <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ borderColor: BORDER }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    placeholder="din@firma.dk"
                  />
                </div>
                <div>
                  <label style={{ color: DARK }} className="block text-sm font-medium mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{ borderColor: BORDER }}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
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
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white resize-none"
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
                  {status === "sending" ? "Sender..." : "Send besked →"}
                </button>
                <p className="text-gray-400 text-xs text-center">Du modtager en bekræftelse på din email</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

      <Footer />
    </>
  );
}
