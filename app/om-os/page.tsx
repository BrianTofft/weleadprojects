import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Om os",
  description: "Vi leverer professionel konsulentassistance inden for projektledelse, Enterprise Architecture og IT-transformationer. Læs mere om We Lead Projects.",
  openGraph: {
    title: "Om os | We Lead Projects",
    description: "Grundlagt i 2018 med en vision om at gøre projekter rigtigt. Mød teamet bag We Lead Projects.",
    images: [{ url: "/hero.JPEG", width: 1200, height: 630, alt: "We Lead Projects — Om os" }],
  },
};

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

const values = [
  { icon: "🤝", title: "Samarbejde og kommunikation", body: "Vi prioriterer tæt dialog med alle interessenter og sikrer, at alle parter er informeret og engageret gennem hele projektet." },
  { icon: "📚", title: "Kontinuerlig læring og tilpasning", body: "Vi holder os konstant opdateret med de nyeste metoder og trends inden for projektledelse og IT, og deler viden på tværs af vores team." },
  { icon: "🌟", title: "Begunstigelse og tillid", body: "Vi opbygger langvarige relationer baseret på gensidig tillid, ærlighed og en fælles forståelse af de forretningsmæssige mål." },
  { icon: "💡", title: "Innovation og fleksibilitet", body: "Vi er ikke bundet af én model — vi finder den tilgang der passer bedst til det konkrete projekt og tilpasser os løbende undervejs." },
  { icon: "🎓", title: "Mentor programmer og sidemandsoplæring", body: "Vores konsulenter vokser ved at lære af hinanden. Intern vidensdeling og mentoring er en integreret del af måden vi arbejder på." },
];

export default function OmOs() {
  return (
    <>
      <Nav />

      <PageHeader
        label="Om os"
        title="Professionel konsulent assistance"
        subtitle="Vi trækker på mangeårig erfaring for at håndtere projekter af enhver kompleksitet — fra mindre IT-projekter til store digitale transformationer."
        image="/Graphics/project-manager-with-team.webp"
      />

      {/* COMPANY + BRIAN */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Vores tilgang</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold mb-6">Vi startede i 2018 med en vision</h2>
            <p className="text-gray-600 mb-4">
              Fra begyndelsen har vi prioriteret koordinering og kommunikation højt for at sikre en vellykket projektleverance. Vores konsulenter besidder ekspertise inden for projektledelse kombineret med specialiseret viden inden for bl.a. Enterprise Architecture, infrastrukturprojekter og Solution Architecture.
            </p>
            <p className="text-gray-600 mb-4">
              Gennem ansvar og erfaringsmodeller, backup fra kollegaer og nyeste viden om projektstyring, navigerer vi projektlandskabet. Vi kalder det 1+1=3 metoden — vores interne vidensdeling sikrer at alle konsulenter løbende lærer og vokser på tværs af projekterne.
            </p>
            <p className="text-gray-600 mb-4">
              Vores fokus på interessentstyring har givet os mulighed for at vokse til et betroet navn i branchen — og sikret succesfulde leverancer for kunder i mange forskellige brancher og domæner.
            </p>
            <p className="text-gray-600 mb-4">
              Vi arbejder metodeneutralt og tilpasser vores tilgang til det enkelte projekt. Uanset om det kræver klassisk Waterfall-styring, agile sprints eller en hybrid model, vælger vi altid den fremgangsmåde der skaber størst fremdrift for netop jeres organisation og projekttype.
            </p>
            <p className="text-gray-600">
              Vores konsulenter har individuel specialviden inden for Enterprise Architecture, cloud-transformationer, infrastrukturprojekter og Solution Architecture. Kombineret med stærk projektledelsesbaggrund giver det os mulighed for at gå ind i projekter på alle niveauer — fra strategisk rådgivning til operationel eksekvering.
            </p>
          </div>

          {/* Brian */}
          <div className="rounded-2xl border p-8 text-center" style={{ borderColor: BORDER, background: OFFWHITE }}>
            <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden border-2" style={{ borderColor: BORDER }}>
              <Image
                src="/profile.png"
                alt="Brian P.N. Tofft"
                width={112}
                height={112}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 style={{ color: DARK }} className="text-xl font-bold mb-1">Brian P.N. Tofft</h3>
            <p style={{ color: RED }} className="font-semibold text-sm mb-4">Founder & Managing Partner</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Brian har mere end 30 års erfaring med at levere projekter af høj kvalitet — med fokus på etisk praksis og kontinuerlig vidensopbygning. Han er daglig leder og tovholder for We Lead Projects.
            </p>
            <div className="mt-6 pt-6 border-t text-sm space-y-1" style={{ borderColor: BORDER }}>
              <p className="text-gray-500"><a href="tel:+4552400088" className="hover:underline">+45 5240 0088</a></p>
              <p className="text-gray-500"><a href="mailto:hello@weleadprojects.com" className="hover:underline">hello@weleadprojects.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ background: OFFWHITE }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ color: RED }} className="font-semibold uppercase tracking-widest text-sm mb-3">Hvad vi står for</p>
            <h2 style={{ color: DARK }} className="text-3xl font-bold">Kerneværdier og principper</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border p-7" style={{ borderColor: BORDER }}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 style={{ color: DARK }} className="font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 style={{ color: DARK }} className="text-2xl font-bold mb-4">Klar til at samarbejde?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">Kontakt os og hør hvordan vi kan hjælpe med at sikre fremdrift og succes i dit næste projekt.</p>
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
