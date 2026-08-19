"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const CONSENT_STORAGE_KEY = "wlp-cookie-consent";

const DARK = "#2d1a1a";
const RED = "#cc2222";
const BORDER = "#e8e0e0";

type Consent = "accepted" | "rejected";

export default function Analytics() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  function choose(value: Consent) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          {GA_ID && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
              <Script id="ga4-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `}
              </Script>
            </>
          )}
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "y4rnibl6ul");
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Cookie-samtykke"
          className="fixed bottom-0 left-0 right-0 z-[100] border-t shadow-lg"
          style={{ background: "#fff", borderColor: BORDER }}
        >
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-sm flex-1" style={{ color: DARK }}>
              Vi bruger cookies til at måle trafik og forbedre hjemmesiden. Du kan læse mere og skifte mening i vores{" "}
              <Link href="/privatlivspolitik" className="underline" style={{ color: RED }}>
                privatlivspolitik
              </Link>.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => choose("rejected")}
                className="border font-semibold px-5 py-2 rounded-full text-sm hover:opacity-70 transition-opacity"
                style={{ color: DARK, borderColor: DARK }}
              >
                Afvis
              </button>
              <button
                onClick={() => choose("accepted")}
                className="text-white font-semibold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
                style={{ background: RED }}
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
