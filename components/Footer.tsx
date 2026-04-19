"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BG = "#1C2544";
const BORDER = "rgba(255,255,255,0.15)";
const ICON_COLOR = "#F5A623";

const hours = [
  { day: "Mandag",  time: "9.00-16.00" },
  { day: "Tirsdag", time: "9.00-16.00" },
  { day: "Onsdag",  time: "9.00-16.00" },
  { day: "Torsdag", time: "9.00-16.00" },
  { day: "Fredag",  time: "9.00-15.00" },
];

const logos = [
  { src: "/footer/MSP1.webp",                             alt: "Microsoft Partner" },
  { src: "/footer/ITB_logo_01_hvid_RGB.webp",             alt: "IT-Branchen" },
  { src: "/footer/dit_Logo_G.webp",                       alt: "dansk·it" },
  { src: "/footer/DANSKERHVERV_20202.webp",               alt: "Dansk Erhverv" },
  { src: "/footer/Erhvervsforum-roskilde-retina-01.webp", alt: "Erhvervsforum Roskilde" },
  { src: "/footer/leverandoer_logo_RGB.webp",             alt: "Leverandør" },
];

const LOGO_W = 180;
const LOGO_GAP = 4;
const STEP = LOGO_W + LOGO_GAP;

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={ICON_COLOR}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={ICON_COLOR}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={ICON_COLOR}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={ICON_COLOR}>
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
    </svg>
  );
}

export default function Footer() {
  const [step, setStep] = useState(0);
  const [transition, setTransition] = useState(true);
  const total = logos.length;

  useEffect(() => {
    const t = setInterval(() => {
      setTransition(true);
      setStep((s) => s + 1);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Seamless reset: when we've moved past all originals, jump back without transition
  useEffect(() => {
    if (step >= total) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setStep(0);
      }, 500); // wait for transition to finish
      return () => clearTimeout(timeout);
    }
  }, [step, total]);

  return (
    <footer style={{ background: BG }} className="text-white">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[160px_180px_240px_548px] gap-x-6 gap-y-10 items-center">

          {/* Kolonne 1: Logo */}
          <div>
            <Image src="/logo3.png" alt="We Lead Projects" width={200} height={100} className="object-contain object-left" />
          </div>

          {/* Kolonne 2: Åbningstider */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Åbningstider</h4>
            <ul className="space-y-1.5">
              {hours.map((h) => (
                <li key={h.day} className="flex gap-4 text-sm text-white/70">
                  <span className="w-16">{h.day}</span>
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
                <PhoneIcon />
                <a href="tel:+4552400088" className="hover:text-white transition-colors">+45 5240 0088</a>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon />
                <a href="mailto:hello@weleadprojects.com" className="hover:text-white transition-colors">hello@weleadprojects.com</a>
              </li>
              <li className="flex items-center gap-3">
                <PinIcon />
                <span>Industrivej 21, 4000 Roskilde</span>
              </li>
              <li className="flex items-center gap-3">
                <BuildingIcon />
                <span>CVR-nr.: 44934655</span>
              </li>
            </ul>
          </div>

          {/* Kolonne 4: Logo karussel — 3 synlige, skifter 1 ad gangen hvert 3. sek */}
          <div className="overflow-hidden" style={{ width: `${3 * LOGO_W + 2 * LOGO_GAP}px`, height: "90px" }}>
            <div
              className="flex items-center h-full"
              style={{
                gap: `${LOGO_GAP}px`,
                transform: `translateX(-${step * STEP}px)`,
                transition: transition ? "transform 0.5s ease-in-out" : "none",
                width: `${(total * 2) * STEP}px`,
              }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ width: `${LOGO_W}px`, height: "80px" }}>
                  <Image src={logo.src} alt={logo.alt} width={LOGO_W} height={76} className="object-contain max-h-full" />
                </div>
              ))}
            </div>
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
