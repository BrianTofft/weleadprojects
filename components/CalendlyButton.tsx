"use client";

import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/bt-weleadprojects/30min";

interface CalendlyButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function CalendlyButton({ className, style, children = "Book intromøde" }: CalendlyButtonProps) {
  function openCalendly() {
    const w = window as unknown as { Calendly?: { initPopupWidget: (opts: { url: string }) => void } };
    if (w.Calendly) {
      w.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <button type="button" onClick={openCalendly} className={className} style={style}>
        {children}
      </button>
    </>
  );
}
