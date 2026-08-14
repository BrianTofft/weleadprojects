"use client";

import Link from "next/link";
import { useState } from "react";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const BORDER = "#e8e0e0";

export type ExpandableCardItem = {
  title: string;
  body: string;
  more?: string;
  linkHref?: string;
  linkLabel?: string;
};

export default function ExpandableCards({ items }: { items: ExpandableCardItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item, i) => {
        const isOpen = open === i;
        const expandable = Boolean(item.more || item.linkHref);
        return (
          <div key={item.title} className="bg-white rounded-2xl border p-7" style={{ borderColor: BORDER }}>
            <h3 style={{ color: DARK }} className="font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
            {expandable && (
              <>
                {isOpen && (
                  <div className="mt-3 pt-3 border-t" style={{ borderColor: BORDER }}>
                    {item.more && (
                      <p className="text-gray-500 text-sm leading-relaxed mb-2">{item.more}</p>
                    )}
                    {item.linkHref && item.linkLabel && (
                      <Link href={item.linkHref} style={{ color: RED }} className="text-sm font-semibold underline hover:opacity-75">
                        {item.linkLabel} →
                      </Link>
                    )}
                  </div>
                )}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ color: RED }}
                  className="text-sm font-semibold mt-3 hover:opacity-75 transition-opacity"
                >
                  {isOpen ? "Vis mindre −" : "Læs mere +"}
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
