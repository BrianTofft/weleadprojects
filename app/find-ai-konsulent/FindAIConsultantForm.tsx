"use client";

import { useState } from "react";
import Script from "next/script";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const NAVY = "#1C2544";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const projekttyper = [
  "AI Systems Audit (49.000 kr. fast pris)",
  "AI-strategi og governance",
  "AI-implementering (GenAI / ML)",
  "AI-readiness vurdering",
  "Responsible AI / EU AI Act",
  "Data platform og infrastruktur",
  "Enterprise Architecture + AI",
  "Andet",
];

const opstartsOptions = [
  "Hurtigst muligt",
  "Inden for 1 måned",
  "1–3 måneder",
  "3–6 måneder",
];

const steps = [
  {
    step: "01",
    title: "Beskriv jeres behov",
    body: "Book et møde eller send en kort beskrivelse. Vi skal blot vide, hvor I står, og hvad I gerne vil opnå med AI.",
  },
  {
    step: "02",
    title: "Vi matcher konsulenten",
    body: "Vi finder den profil i vores netværk, der matcher jeres branche, modenhedsniveau og de konkrete AI-udfordringer.",
  },
  {
    step: "03",
    title: "AI-projektet i gang",
    body: "Inden for få dage har I en erfaren AI-konsulent ombord, der kan skabe fremdrift fra dag ét.",
  },
];

export default function FindAIConsultantForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projekttype: "",
    opstart: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const lines: string[] = [];
    lines.push("[Kilde: findaikonsulenter.dk]");
    if (form.projekttype) lines.push(`Projekttype: ${form.projekttype}`);
    if (form.opstart) lines.push(`Ønsket opstart: ${form.opstart}`);
    if (form.message) lines.push("", form.message);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: lines.join("\n") || "Ingen besked angivet",
      }),
    });

    setStatus(res.ok ? "ok" : "error");
  }

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: NAVY, minHeight: 400 }}
      >
        <img
          src="/Graphics/AdobeStock_828719609.webp"
          alt="Find AI-konsulent"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.15)", opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(28,37,68,0.2) 0%, rgba(28,37,68,0.95) 100%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 pt-40 pb-20 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-4 inline-block"
            style={{ color: RED }}
          >
            Find AI-konsulent
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-5 leading-tight">
            Find den rette AI-konsulent
            <br />
            til jeres organisation
          </h1>
          <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Vi matcher jer med en erfaren konsulent inden for AI-strategi,
            governance, implementering og EU AI Act, uanset hvor langt I er
            på jeres AI-rejse.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#book-mode"
              style={{ background: RED }}
              className="text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Book intromøde
            </a>
            <a
              href="#send-forsporgsel"
              className="text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
            >
              Send forespørgsel
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
            style={{ color: RED }}
          >
            Sådan fungerer det
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4"
                  style={{ background: RED }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: DARK }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVORFOR AI-KONSULENT */}
      <section className="py-16 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: RED }}
          >
            Hvorfor os
          </p>
          <h2 className="text-2xl font-bold mb-5" style={{ color: DARK }}>
            Hvorfor hyre en ekstern AI-konsulent?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AI udvikler sig hurtigere, end de fleste organisationer kan følge med. Nye modeller,
            nye risikovurderinger og EU AI Act skaber et regulatorisk landskab, der kræver
            specialiseret viden. En erfaren AI-konsulent kan hjælpe jer med at navigere det
            hele, uden at I skal opbygge kompetencen internt fra bunden.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vores konsulenter kombinerer dyb teknisk forståelse med strategisk og organisatorisk
            erfaring. De kan hjælpe med alt fra at vurdere jeres AI-modenhed og bygge en
            governance-ramme, til at implementere konkrete AI-løsninger og sikre compliance
            med EU AI Act.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi lægger vægt på, at konsulenten passer til jeres organisation. AI-projekter
            rækker typisk på tværs af IT, forretning og ledelse, og det kræver en profil, der
            kan navigere alle tre verdener. Derfor matcher vi ikke bare på teknisk profil, men
            også på kommunikationsstil og branchekendskab.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Uanset om I står overfor jeres første AI use case eller skal skalere en eksisterende
            AI-praksis, kan vi typisk have en kvalificeret konsulent klar inden for få dage.
          </p>
        </div>
      </section>

      {/* AI SYSTEMS AUDIT CALLOUT */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <a
            href="/ydelser/ai-systems-audit"
            className="group flex flex-col md:flex-row items-center gap-6 rounded-2xl border-2 p-7 hover:shadow-lg transition-all"
            style={{ borderColor: RED }}
          >
            <div className="shrink-0 text-4xl">🔍</div>
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
                style={{ background: "#fef2f2", color: RED }}
              >
                Prisfastsat produkt
              </span>
              <h3 className="font-bold text-lg mb-1" style={{ color: DARK }}>
                AI Systems Audit — 49.000 kr.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Vil du starte konkret og afgrænset? På 2 dage kortlægger vi jeres AI-aktiver, klassificerer dem efter EU AI Act og leverer en governance-anbefaling. Fast pris, ingen åbne regninger.
              </p>
            </div>
            <span
              style={{ color: RED }}
              className="shrink-0 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Læs mere <span>→</span>
            </span>
          </a>
        </div>
      </section>

      {/* CALENDLY */}
      <section id="book-mode" className="py-20 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: RED }}
            >
              Gratis og uforpligtende
            </p>
            <h2 className="text-3xl font-bold mb-3" style={{ color: DARK }}>
              Book et intromøde
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              15–20 minutter hvor vi lytter til jeres AI-ambitioner og vurderer,
              hvad der skal til. Ingen forpligtelse.
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: BORDER }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/bt-weleadprojects/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="send-forsporgsel" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: RED }}
            >
              Alternativt
            </p>
            <h2 className="text-3xl font-bold mb-3" style={{ color: DARK }}>
              Beskriv jeres AI-projekt
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Udfyld formularen, så vender vi tilbage inden for én hverdag.
            </p>
          </div>

          {status === "ok" ? (
            <div
              className="rounded-2xl border p-10 text-center"
              style={{ borderColor: BORDER, background: OFFWHITE }}
            >
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: DARK }}>
                Tak for jeres forespørgsel!
              </h3>
              <p className="text-gray-500 text-sm">
                Vi vender tilbage inden for én hverdag.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border p-8 md:p-10 space-y-5"
              style={{ borderColor: BORDER, background: OFFWHITE }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: DARK }}
                  >
                    Navn *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dit navn"
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BORDER }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: DARK }}
                  >
                    Virksomhed
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Virksomhedens navn"
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BORDER }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: DARK }}
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="din@email.dk"
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BORDER }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: DARK }}
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+45 00 00 00 00"
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BORDER }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: DARK }}
                  >
                    Projekttype
                  </label>
                  <select
                    name="projekttype"
                    value={form.projekttype}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BORDER, color: form.projekttype ? DARK : "#9ca3af" }}
                  >
                    <option value="">Vælg type...</option>
                    {projekttyper.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: DARK }}
                  >
                    Ønsket opstart
                  </label>
                  <select
                    name="opstart"
                    value={form.opstart}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BORDER, color: form.opstart ? DARK : "#9ca3af" }}
                  >
                    <option value="">Vælg opstart...</option>
                    {opstartsOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: DARK }}
                >
                  Beskriv projektet (valgfrit)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Fortæl kort om jeres AI-ambitioner, nuværende modenhed og de vigtigste udfordringer..."
                  className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white resize-none"
                  style={{ borderColor: BORDER }}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Noget gik galt. Prøv igen eller ring til os på +45 5240 0088.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{ background: RED }}
                className="w-full text-white font-semibold py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "loading" ? "Sender..." : "Send forespørgsel"}
              </button>

              <p className="text-center text-xs text-gray-400">
                Vi svarer inden for én hverdag. Ingen forpligtelse.
              </p>
            </form>
          )}
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
