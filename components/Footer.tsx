import Image from "next/image";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const OFFWHITE = "#f7f5f5";
const BORDER = "#e8e0e0";

export default function Footer() {
  return (
    <footer style={{ background: OFFWHITE, borderColor: BORDER }} className="border-t">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Kolonne 1: Logo */}
        <div className="flex flex-col items-start gap-4">
          <Image src="/logo.png" alt="We Lead Projects" width={180} height={50} className="object-contain" />
          <p className="text-sm text-gray-500 leading-relaxed">
            Professionel projektledelse og konsulentassistance siden 2018.
          </p>
        </div>

        {/* Kolonne 2: Åbningstider */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: DARK }}>Åbningstider</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex justify-between gap-4">
              <span>Mandag – torsdag</span>
              <span className="font-medium" style={{ color: DARK }}>9.00–16.00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Fredag</span>
              <span className="font-medium" style={{ color: DARK }}>9.00–15.00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Weekend</span>
              <span className="font-medium text-gray-400">Lukket</span>
            </li>
          </ul>
        </div>

        {/* Kolonne 3: Kontakt info */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: DARK }}>Kontakt info</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="tel:+4552400088" className="hover:underline">+45 5240 0088</a>
            </li>
            <li>
              <a href="mailto:hello@weleadprojects.com" className="hover:underline">hello@weleadprojects.com</a>
            </li>
            <li>Industrivej 21, 4000 Roskilde</li>
            <li>CVR-nr.: 44934655</li>
          </ul>
        </div>

        {/* Kolonne 4: Copyright + Ring nu */}
        <div className="flex flex-col justify-between gap-6">
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: DARK }}>Ring nu</h4>
            <p className="text-sm text-gray-500 mb-4">Du er altid velkommen til at ringe direkte til os.</p>
            <a
              href="tel:+4552400088"
              style={{ background: RED }}
              className="inline-block hover:opacity-90 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-opacity"
            >
              📞 Ring nu
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderColor: BORDER }} className="border-t px-6 py-4 text-center text-xs text-gray-400">
        © 2025 We Lead Projects ApS — Alle rettigheder forbeholdes
      </div>
    </footer>
  );
}
