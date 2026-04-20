import Image from "next/image";

const BG     = "#1C2544";
const BORDER = "rgba(255,255,255,0.12)";
const ICON   = "#F5A623";

const hours = [
  { day: "Mandag",  time: "9.00–16.00" },
  { day: "Tirsdag", time: "9.00–16.00" },
  { day: "Onsdag",  time: "9.00–16.00" },
  { day: "Torsdag", time: "9.00–16.00" },
  { day: "Fredag",  time: "9.00–15.00" },
];

const logos = [
  { src: "/footer/MSP1.webp",                             alt: "Microsoft Partner" },
  { src: "/footer/ITB_logo_01_hvid_RGB.webp",             alt: "IT-Branchen" },
  { src: "/footer/dit_Logo_G.webp",                       alt: "dansk·it" },
  { src: "/footer/DANSKERHVERV_20202.webp",               alt: "Dansk Erhverv" },
  { src: "/footer/Erhvervsforum-roskilde-retina-01.webp", alt: "Erhvervsforum Roskilde" },
  { src: "/footer/leverandoer_logo_RGB.webp",             alt: "Leverandør" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ICON }}>
      {children}
    </p>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: BG }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">

          {/* Kolonne 1: Logo */}
          <div>
            <Image
              src="/logo3.png"
              alt="We Lead Projects"
              width={260}
              height={130}
              className="object-contain object-left"
            />
          </div>

          {/* Kolonne 2: Åbningstider */}
          <div>
            <Label>Åbningstider</Label>
            <ul className="space-y-1">
              {hours.map((h) => (
                <li key={h.day} className="flex gap-3 text-sm">
                  <span className="text-white/55 w-16 shrink-0">{h.day}</span>
                  <span className="text-white tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolonne 3: Kontakt */}
          <div className="lg:pl-6">
            <Label>Kontakt</Label>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+4552400088" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                  +45 5240 0088
                </a>
              </li>
              <li>
                <a href="mailto:hello@weleadprojects.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  hello@weleadprojects.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON} className="mt-0.5 shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                <span>Industrivej 21, 4000 Roskilde</span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON}><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                CVR-nr.: 44934655
              </li>
            </ul>
          </div>

          {/* Kolonne 4: Partnere — statisk 3×2 grid */}
          <div>
            <Label>Partnere</Label>
            <div className="grid grid-cols-3 gap-2">
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="rounded flex items-center justify-center"
                  style={{ height: "72px", background: "rgba(255,255,255,0.06)" }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={90}
                    height={60}
                    className="object-contain max-h-full max-w-full p-1"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="max-w-7xl mx-auto border-t pt-5 text-center text-sm text-white/40" style={{ borderColor: BORDER }}>
          © 2026 We Lead Projects ApS
        </div>
      </div>
    </footer>
  );
}
