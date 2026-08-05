"use client";

import { useState } from "react";
import Script from "next/script";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const NAVY = "#1C2544";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const projekttyper = [
  "IT-transformation",
  "Cloud-migration",
  "Enterprise Architecture",
  "AI-implementering",
  "ERP-implementering",
  "Organisationsforandring",
  "Infrastrukturprojekt",
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
    title: "Beskriv dit projekt",
    body: "Book et møde eller send en kort forespørgsel — vi behøver kun det vigtigste for at komme i gang.",
  },
  {
    step: "02",
    title: "Vi finder matchet",
    body: "Vi gennemgår vores konsulentnetværk og finder profiler der passer til dit projekts krav og kultur.",
  },
  {
    step: "03",
    title: "Projekt i gang",
    body: "Inden for få dage har du en erfaren projektleder ombord og projektet kan komme i gang.",
  },
];

export default function FindProjectForm() {
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
          src="/Graphics/Project-Management-Consultancy.webp"
          alt="Find projektleder"
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
            Find Projektleder
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-5 leading-tight">
            Find den rette projektleder
            <br />
            til dit projekt
          </h1>
          <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Vi matcher dig med en erfaren konsulent der passer præcist til dit
            projekt — uanset branche, størrelse eller tidspres.
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

      {/* HVORFOR EKSTERN PROJEKTLEDER */}
      <section className="py-16 px-6" style={{ background: OFFWHITE }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: RED }}
          >
            Hvorfor os
          </p>
          <h2 className="text-2xl font-bold mb-5" style={{ color: DARK }}>
            Hvorfor vælge en ekstern projektleder?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mange virksomheder oplever, at interne ressourcer allerede er fuldt booket når et nyt
            projekt skal i gang — eller at den nødvendige specialviden simpelthen ikke findes i
            organisationen. En erfaren, ekstern projektleder kan træde ind hurtigt, uden den
            oplæringstid en fastansættelse kræver, og bringe et objektivt blik med sig, som ofte
            er svært at opnå internt.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vores konsulenter har i gennemsnit mere end 15 års erfaring og er vant til at navigere
            komplekse organisationer, modstridende interessenter og stramme deadlines. Flere er
            certificerede efter internationale standarder som{" "}
            <a
              href="https://www.pmi.org/certifications"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
              style={{ color: RED }}
            >
              PMI
            </a>
            , og alle arbejder metodeneutralt — de vælger den tilgang, der passer bedst til jeres
            konkrete situation, uanset om det er klassisk Waterfall, Agile eller en hybrid model.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Vi matcher ikke bare på CV. Vi lægger vægt på, at profilen passer til jeres
            virksomhedskultur, projektets kompleksitet og de udfordringer I står overfor lige nu —
            så I får en projektleder, der kan skabe fremdrift fra dag ét.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Modsat en fast rekrutteringsproces, der ofte tager flere måneder, kan vi typisk have en
            kvalificeret konsulent klar til opstart inden for få dage. Det gør en ekstern
            projektleder til en oplagt løsning, når et projekt skal skydes i gang hurtigt, eller
            når en nøgleperson pludselig forlader organisationen midt i en kritisk fase.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Samarbejdet stopper ikke ved opstart. Vores konsulenter trækker løbende på hinandens
            erfaring gennem vores interne vidensdeling — så du ikke kun får én persons kompetencer,
            men adgang til hele teamets samlede erfaring, når projektet støder på uforudsete
            udfordringer undervejs.
          </p>
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
              15–20 minutter hvor vi lytter til dit projekt og vurderer hvad der
              skal til — ingen forpligtelse, ingen salgspres.
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
              Beskriv dit projekt
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
                Tak for din forespørgsel!
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
                  placeholder="Fortæl kort om projektet, teamet og de vigtigste udfordringer..."
                  className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white resize-none"
                  style={{ borderColor: BORDER }}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Noget gik galt — prøv igen eller ring til os på +45 5240 0088.
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
