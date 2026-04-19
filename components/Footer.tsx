import Image from "next/image";

const RED = "#cc2222";
const BG = "#2d1a1a";
const BORDER = "rgba(255,255,255,0.1)";

export default function Footer() {
  return (
    <footer style={{ background: BG }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Kolonne 1: Logo */}
        <div className="flex flex-col items-center text-center">
          <div style={{ marginTop: "-52px", marginBottom: "-24px" }}>
            <Image src="/logo3.png" alt="We Lead Projects" width={240} height={70} className="object-contain" />
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Professionel projektledelse og konsulentassistance siden 2018.
          </p>
        </div>

        {/* Kolonne 2: Åbningstider */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">Åbningstider</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex justify-between gap-4">
              <span>Mandag – torsdag</span>
              <span className="font-medium text-white">9.00–16.00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Fredag</span>
              <span className="font-medium text-white">9.00–15.00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Weekend</span>
              <span className="font-medium text-white/40">Lukket</span>
            </li>
          </ul>
        </div>

        {/* Kolonne 3: Kontakt info */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">Kontakt info</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="tel:+4552400088" className="hover:text-white transition-colors">+45 5240 0088</a>
            </li>
            <li>
              <a href="mailto:hello@weleadprojects.com" className="hover:text-white transition-colors">hello@weleadprojects.com</a>
            </li>
            <li>Industrivej 21, 4000 Roskilde</li>
            <li>CVR-nr.: 44934655</li>
          </ul>
        </div>

        {/* Kolonne 4: Ring nu */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">Ring nu</h4>
          <p className="text-sm text-white/60 mb-4">Du er altid velkommen til at ringe direkte til os.</p>
          <a
            href="tel:+4552400088"
            style={{ background: RED }}
            className="inline-block hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-opacity"
          >
            📞 Ring nu
          </a>
        </div>
      </div>

      {/* Partner logo karussel — fuld bredde */}
      <div style={{ borderColor: BORDER }} className="border-t py-8 overflow-hidden">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Partnere &amp; medlemskaber</p>
        <div className="logo-scroll flex gap-12 w-max">
          {[...Array(2)].flatMap((_, set) =>
            [
              { src: "/footer/MSP1.webp", alt: "Microsoft Partner" },
              { src: "/footer/DANSKERHVERV_20202.webp", alt: "Dansk Erhverv" },
              { src: "/footer/dit_Logo_G.webp", alt: "dansk·it" },
              { src: "/footer/Erhvervsforum-roskilde-retina-01.webp", alt: "Erhvervsforum Roskilde" },
              { src: "/footer/ITB_logo_01_hvid_RGB.webp", alt: "ITB" },
              { src: "/footer/leverandoer_logo_RGB.webp", alt: "Leverandør" },
            ].map((logo) => (
              <div key={`${set}-${logo.alt}`} className="flex items-center justify-center flex-shrink-0" style={{ height: "72px", width: "160px" }}>
                <Image src={logo.src} alt={logo.alt} width={150} height={68} className="object-contain max-h-full" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderColor: BORDER }} className="border-t px-6 py-4 text-center text-xs text-white/40">
        © 2026 We Lead Projects ApS — Alle rettigheder forbeholdes
      </div>
    </footer>
  );
}
