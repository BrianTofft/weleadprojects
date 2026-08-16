"use client";

import { CONSENT_STORAGE_KEY } from "./Analytics";

export default function CookieSettingsLink({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem(CONSENT_STORAGE_KEY);
        window.location.reload();
      }}
      className={className}
      style={style}
    >
      Cookie-indstillinger
    </button>
  );
}
