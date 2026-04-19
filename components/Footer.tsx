import Image from "next/image";

const BG = "#1C2544";
const BORDER = "rgba(255,255,255,0.15)";

const hours = [
  { day: "Mandag",  time: "9.00-16.00" },
  { day: "Tirsdag", time: "9.00-16.00" },
  { day: "Onsdag",  time: "9.00-16.00" },
  { day: "Torsdag", time: "9.00-16.00" },
  { day: "Fredag",  time: "9.00-15.00" },
];

const logos = [
  { src: "/footer/MSP1.webp",                          alt: "Microsoft Partner" },
  { src: "/footer/ITB_logo_01_hvid_RGB.webp",          alt: "IT-Branchen" },
  { src: "/footer/dit_Logo_G.webp",                    alt: "dansk·it" },
  { src: "/footer/DANSKERHVERV_20202.webp",            alt: "Dansk Erhverv" },
  { src: "/footer/Erhvervsforum-roskilde-retina-01.webp", alt: "Erhvervsforum Roskilde" },
  { src: "/footer/leverandoer_logo_RGB.webp",          alt: "Leverandør" },
];

export default function Footer() {
  return (
    <footer style={{ background: BG }} className="text-white">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_200px_260px_1fr] gap-10 items-start">

          {/* Kolonne 1: Logo */}
          <div className="flex flex-col gap-2">
            <Image src="/logo3.png" alt="We Lead Projects" width={160} height={80} className="object-contain object-left" />
            <p className="text-white/50 text-xs mt-1">Plan Well, Lead Better</p>
          </div>

          {/* Kolonne 2: Åbningstider */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Åbningstider</h4>
            <ul className="space-y-1.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6 text-sm text-white/70">
                  <span>{h.day}</span>
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolonne 3: Kontakt info */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Kontakt info</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <span className="text-base">📞</span>
                <a href="tel:+4552400088" className="hover:text-white transition-colors">+45 5240 0088</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">✉️</span>
                <a href="mailto:hello@weleadprojects.com" className="hover:text-white transition-colors">hello@weleadprojects.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">📍</span>
                <span>Industrivej 21, 4000 Roskilde</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base">🏢</span>
                <span>CVR-nr.: 44934655</span>
              </li>
            </ul>
          </div>

          {/* Kolonne 4: Partner logoer i hvide bokse */}
          <div className="flex flex-wrap gap-3 items-center">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-lg flex items-center justify-center p-2"
                style={{ width: "110px", height: "72px" }}
              >
                <Image src={logo.src} alt={logo.alt} width={100} height={60} className="object-contain max-h-full" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Divider + copyright */}
      <div style={{ borderColor: BORDER }} className="border-t px-8 py-5 text-center text-sm text-white/50">
        © 2026 We Lead Projects ApS
      </div>
    </footer>
  );
}
