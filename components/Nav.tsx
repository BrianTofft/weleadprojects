"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const BORDER = "#e8e0e0";

const links = [
  { label: "Om os",   href: "/om-os" },
  { label: "Ydelser", href: "/ydelser" },
  { label: "News",    href: "/news" },
  { label: "FAQ",     href: "/faq" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b" style={{ borderColor: BORDER }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="We Lead Projects" width={300} height={76} className="object-contain" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-base font-medium" style={{ color: DARK }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={isActive(l.href) ? { color: RED } : undefined}
              className="hover:opacity-60 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/#kontakt"
            style={{ background: RED }}
            className="hidden md:inline-block whitespace-nowrap hover:opacity-90 text-white text-sm font-semibold px-5 py-2 rounded-full transition-opacity"
          >
            Kontakt os
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: DARK,
                transform: open ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: DARK,
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: DARK,
                transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-1" style={{ borderColor: BORDER }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b last:border-0"
              style={{
                color: isActive(l.href) ? RED : DARK,
                borderColor: BORDER,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            style={{ background: RED }}
            className="mt-3 text-center whitespace-nowrap hover:opacity-90 text-white text-sm font-semibold px-5 py-3 rounded-full transition-opacity"
          >
            Kontakt os
          </Link>
        </div>
      )}
    </nav>
  );
}
