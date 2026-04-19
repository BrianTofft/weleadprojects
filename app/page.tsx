"use client";

import { useState } from "react";

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
    a: "Ja. Vi har bl.a. cases inden for implementering af ejendomsadministrationssoftware, forretningsudviklingsplanlægning i telecom-sektoren samt oprettelse af HR-systemer til nonprofitorganisationer.",
  },
  {
    q: "Hvad gør jeres virksomhed speciel?",
    a: "Vi skræddersyr løsninger til hvert projekt, har dokumenteret erfaring på tværs af brancher, anvender innovative metoder med de nyeste trends, prioriterer transparent kommunikation og tilbyder omfattende support efter projektafslutning.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f2a4a] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#top" className="text-white font-bold text-lg tracking-wide">
            We Lead Projects
          </a>
          <div className="hidden md:flex gap-8 text-sm text-white/80">
            <a href="#om-os" className="hover:text-white transition-colors">Om os</a>
            <a href="#ydelser" className="hover:text-white transition-colors">Ydelser</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </div>
          <a
            href="#kontakt"
            className="bg-[#1a56a0] hover:bg-[#2e7dd1] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
          >
            Kontakt os
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="bg-[#0f2a4a] text-white pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#2e7dd1] font-semibold uppercase tracking-widest text-sm mb-4">
            Vi elsker projekter
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Lad os sikre dit projekt
            <br />
            <span className="text-[#2e7dd1]">bliver en succes</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Uanset om det er et mindre IT-projekt, et større anlægsprojekt eller en stor IT-transformation, kan vi bistå med erfarne projektledere, Enterprise arkitekter eller specialiserede eksperter inden for netop jeres branche eller domæne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="bg-[#1a56a0] hover:bg-[#2e7dd1] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Kom i gang
            </a>
            <a
              href="#ydelser"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Se vores ydelser
            </a>
          </div>
        </div>
      </section>

      {/* SECONDARY HERO BANNER */}
      <section className="bg-[#1a56a0] py-14 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Intet projekt er for stort eller for småt
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Vi tager gerne ledelsen af et mindre byggeri (privat eller offentligt), ligesom vi gerne påtager os ansvaret for større IT-transformationer og f.eks. Cloud-implementeringer.
          </p>
        </div>
      </section>

      {/* OM OS */}
      <section id="om-os" className="py-20 px-6 bg-[#f5f7fa]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1a56a0] font-semibold uppercase tracking-widest text-sm mb-3">Om os</p>
            <h2 className="text-3xl font-bold text-[#0f2a4a] mb-5">Din betroede projektpartner</h2>
            <p className="text-gray-600 mb-5">
              Vi startede vores projektledelsesrejse i 2018, med en vision om at gøre tingene på den rigtige måde. Fra begyndelsen har vi prioriteret koordinering og kommunikation højt for at sikre en vellykket projektleverance.
            </p>
            <p className="text-gray-600">
              Gennem ansvar og erfaringsmodeller, backup fra kollegaer og nyeste viden om projektstyring, navigerer vi projektlandskabet. Vores fokus på interessentstyring har givet os mulighed for at vokse til et betroet navn i branchen.
            </p>
          </div>
          <div className="bg-[#0f2a4a] rounded-2xl p-10 text-white text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">1+1=3 Metoden</h3>
            <p className="text-white/70 text-sm">
              Vores interne vidensdeling sikrer, at alle konsulenter lærer og vokser på tværs af projekterne — til gavn for dig som kunde.
            </p>
          </div>
        </div>
      </section>

      {/* YDELSER */}
      <section id="ydelser" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1a56a0] font-semibold uppercase tracking-widest text-sm mb-3">Ydelser</p>
            <h2 className="text-3xl font-bold text-[#0f2a4a] mb-4">
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
                className="border border-[#dde3ed] rounded-xl p-7 hover:shadow-md hover:border-[#1a56a0] transition-all"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[#0f2a4a] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / PROMISE */}
      <section className="bg-[#0f2a4a] py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Vi hjælper med at sikre fremdrift og succes</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Uanset om det er kompetent projektledelse, innovativ tilgang til fornyet fremdrift eller blot bidrag i form af rådgivning og ekspertbistand, er We Lead Projects altid klar til at se på udfordringen og bringe nye perspektiver og metoder i spil.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-[#f5f7fa]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#1a56a0] font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-[#0f2a4a]">Ofte stillede spørgsmål</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-[#dde3ed] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 font-semibold text-[#0f2a4a] flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <span className="text-[#1a56a0] text-xl ml-4 flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-[#dde3ed] pt-4">
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
          {/* Info */}
          <div>
            <p className="text-[#1a56a0] font-semibold uppercase tracking-widest text-sm mb-3">Kontakt</p>
            <h2 className="text-3xl font-bold text-[#0f2a4a] mb-4">Kontakt os døgnet rundt</h2>
            <p className="text-gray-500 mb-8">
              Du kan altid kontakte os — og hvis telefonerne ikke er åbne, sender du en besked, så ringer vi tilbage senest den næste hverdag.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#1a56a0] text-lg">📞</span>
                <div>
                  <p className="font-semibold text-[#0f2a4a]">Telefon</p>
                  <a href="tel:+4552400088" className="text-gray-600 hover:text-[#1a56a0]">+45 5240 0088</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1a56a0] text-lg">✉️</span>
                <div>
                  <p className="font-semibold text-[#0f2a4a]">Email</p>
                  <a href="mailto:hello@weleadprojects.com" className="text-gray-600 hover:text-[#1a56a0]">
                    hello@weleadprojects.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1a56a0] text-lg">📍</span>
                <div>
                  <p className="font-semibold text-[#0f2a4a]">Adresse</p>
                  <p className="text-gray-600">Industrivej 21, 4000 Roskilde</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1a56a0] text-lg">🕐</span>
                <div>
                  <p className="font-semibold text-[#0f2a4a]">Åbningstider</p>
                  <p className="text-gray-600">Man–tor: 9.00–16.00</p>
                  <p className="text-gray-600">Fre: 9.00–15.00</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#dde3ed] text-sm text-gray-400">
              <p className="font-semibold text-[#0f2a4a]">Brian P.N. Tofft</p>
              <p>Managing Partner</p>
              <p className="text-xs mt-1">CVR-nr.: 44934655</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f5f7fa] rounded-2xl p-8">
            <h3 className="font-bold text-[#0f2a4a] text-lg mb-6">Send os en besked</h3>
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-semibold text-[#0f2a4a]">Tak for din besked!</p>
                <p className="text-gray-500 text-sm mt-2">Vi vender tilbage hurtigst muligt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f2a4a] mb-1">Navn *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#dde3ed] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a56a0] bg-white"
                    placeholder="Dit fulde navn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f2a4a] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#dde3ed] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a56a0] bg-white"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f2a4a] mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-[#dde3ed] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a56a0] bg-white"
                    placeholder="+45 __ __ __ __"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f2a4a] mb-1">Besked *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#dde3ed] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a56a0] bg-white resize-none"
                    placeholder="Beskriv dit projekt eller din forespørgsel..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">Noget gik galt. Prøv igen eller ring til os.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#1a56a0] hover:bg-[#0f2a4a] text-white font-semibold py-3 rounded-full transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sender..." : "Send besked"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2a4a] text-white/60 py-8 px-6 text-center text-sm">
        <p>© 2025 We Lead Projects ApS · CVR-nr.: 44934655 · Industrivej 21, 4000 Roskilde</p>
        <p className="mt-1">
          <a href="mailto:hello@weleadprojects.com" className="hover:text-white transition-colors">
            hello@weleadprojects.com
          </a>
          {" · "}
          <a href="tel:+4552400088" className="hover:text-white transition-colors">
            +45 5240 0088
          </a>
        </p>
      </footer>
    </>
  );
}
