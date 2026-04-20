"use client";

import { useState } from "react";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const BORDER = "#e8e0e0";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border rounded-xl overflow-hidden" style={{ borderColor: BORDER }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
            style={{ color: DARK }}
          >
            <span className="pr-4">{faq.q}</span>
            <span className="text-xl shrink-0 font-light" style={{ color: RED }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div
              className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t pt-4"
              style={{ borderColor: BORDER }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
