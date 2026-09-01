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
  { label: "Cases",   href: "/cases" },
  { label: "Indsigt", href: "/indsigt" },
  { label: "FAQ",     href: "/faq" },
  { label: "Kontakt", href: "/#kontakt" },
];

const ydelserSubmenu = [
  { label: "Projektledelse",           href: "/ydelser/projektledelse",           group: null },
  { label: "Enterprise Architecture",  href: "/ydelser/enterprise-architecture",  group: null },
  { label: "AI-strategi",              href: "/ydelser/ai-strategi",              group: null },
  { label: "AI-governance",            href: "/ydelser/ai-governance",            group: null },
];

const aiProgramSubmenu = [
  { label: "AI Systems Audit",          href: "/ydelser/ai-systems-audit" },
  { label: "AI Governance Accelerator", href: "/ydelser/ai-governance-accelerator" },
  { label: "Implementation Partner",    href: "/ydelser/ai-implementation-partner" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [ydelserOpen, setYdelserOpen] = useState(false);
  const [mobileYdelserOpen, setMobileYdelserOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  }

  const ydelserActive = pathname === "/ydelser" || pathname.startsWith("/ydelser/");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b" style={{ borderColor: BORDER }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            setOpen(false);
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image src="/logo.png" alt="We Lead Projects" width={300} height={76} className="object-contain" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-base font-medium" style={{ color: DARK }}>
          {links.map((l) =>
            l.href === "/ydelser" ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setYdelserOpen(true)}
                onMouseLeave={() => setYdelserOpen(false)}
              >
                <Link
                  href={l.href}
                  style={ydelserActive ? { color: RED } : undefined}
                  className="hover:opacity-60 transition-opacity flex items-center gap-1"
                >
                  {l.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {ydelserOpen && (
                  <div
                    className="absolute top-full left-0 pt-3 -ml-2"
                  >
                    <div
                      className="bg-white rounded-xl border shadow-lg py-2 min-w-[240px]"
                      style={{ borderColor: BORDER }}
                    >
                      {ydelserSubmenu.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          style={pathname === s.href ? { color: RED } : { color: DARK }}
                          className="block px-5 py-2.5 text-sm hover:opacity-60 transition-opacity whitespace-nowrap"
                        >
                          {s.label}
                        </Link>
                      ))}
                      <div className="mx-4 my-1.5 border-t" style={{ borderColor: BORDER }} />
                      <Link
                        href="/ydelser/ai-governance-program"
                        style={pathname === "/ydelser/ai-governance-program" ? { color: RED } : { color: DARK }}
                        className="block px-5 py-2 text-sm font-semibold hover:opacity-60 transition-opacity whitespace-nowrap"
                      >
                        AI Governance Program
                      </Link>
                      {aiProgramSubmenu.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          style={pathname === s.href ? { color: RED } : { color: "#9e8888" }}
                          className="block px-7 py-2 text-sm hover:opacity-60 transition-opacity whitespace-nowrap"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                style={isActive(l.href) ? { color: RED } : undefined}
                className="hover:opacity-60 transition-opacity"
              >
                {l.label}
              </Link>
            )
          )}
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
          {links.map((l) =>
            l.href === "/ydelser" ? (
              <div key={l.href} className="border-b last:border-0" style={{ borderColor: BORDER }}>
                <div className="flex items-center justify-between">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-base font-medium flex-1"
                    style={{ color: ydelserActive ? RED : DARK }}
                  >
                    {l.label}
                  </Link>
                  <button
                    onClick={() => setMobileYdelserOpen(!mobileYdelserOpen)}
                    aria-label="Vis ydelser"
                    className="p-3"
                  >
                    <svg
                      width="12" height="8" viewBox="0 0 10 6" fill="none"
                      style={{ transform: mobileYdelserOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                    >
                      <path d="M1 1L5 5L9 1" stroke={DARK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                {mobileYdelserOpen && (
                  <div className="pb-3 flex flex-col gap-1 pl-4">
                    {ydelserSubmenu.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm"
                        style={{ color: pathname === s.href ? RED : "#6b7280" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                    <div className="my-1 border-t" style={{ borderColor: BORDER }} />
                    <Link
                      href="/ydelser/ai-governance-program"
                      onClick={() => setOpen(false)}
                      className="py-2 text-sm font-semibold"
                      style={{ color: pathname === "/ydelser/ai-governance-program" ? RED : DARK }}
                    >
                      AI Governance Program
                    </Link>
                    {aiProgramSubmenu.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm pl-3"
                        style={{ color: pathname === s.href ? RED : "#9e8888" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
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
