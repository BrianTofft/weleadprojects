# weleadprojects.com — Siteoversigt

Next.js 16 · Tailwind v4 · Vercel · Sidst opdateret august 2026

---

## Sider

| Sti | Beskrivelse |
|-----|-------------|
| `/` | Forside (hero-slider, ydelser, kunder, FAQ preview, kontakt) |
| `/om-os` | Om os |
| `/ydelser` | Ydelser-oversigt (linker til 3 undersider) |
| `/ydelser/projektledelse` | Ydelses-underside + Service JSON-LD |
| `/ydelser/enterprise-architecture` | Ydelses-underside + Service JSON-LD |
| `/ydelser/ai-governance` | Ydelses-underside + Service JSON-LD |
| `/cases` | 3 anonymiserede case-narrativer (retail, offentlig, reguleret) |
| `/indsigt` | Artikel-oversigt |
| `/indsigt/[slug]` | Dynamisk artikel-side (12 artikler, 6 DA + 6 EN) |
| `/faq` | FAQ + FAQPage JSON-LD |
| `/find-projektleder` | Projektleder-landing med booking og formular (findprojektleder.dk) |
| `/find-ai-konsulent` | AI-konsulent-landing med booking og formular (findaikonsulenter.dk) |
| `/privatlivspolitik` | GDPR, cookies, GA4 + Clarity |
| `/news` | Redirect til `/indsigt` |
| `/pipeline` | Intern lead-tracker (password-beskyttet) |
| `/pipeline/login` | Pipeline login-side |

---

## API-ruter

| Metode | Sti | Beskrivelse |
|--------|-----|-------------|
| POST | `/api/contact` | Kontaktformular, sender intern notifikation + auto-reply via Resend |
| POST | `/api/pipeline/auth` | Pipeline login/session |
| GET | `/api/pipeline/leads` | List leads fra Supabase |
| CRUD | `/api/pipeline/leads/[id]` | Opdater/slet enkelt lead |
| POST | `/api/pipeline/logout` | Pipeline logout |

---

## Komponenter

| Fil | Beskrivelse |
|-----|-------------|
| `Nav.tsx` | Navigation (dropdown ydelser, mobilmenu, logo-scroll-to-top) |
| `Footer.tsx` | Footer med Trustpilot-widget og divider |
| `PageHeader.tsx` | Hero-billede header til undersider (responsiv overlay/brightness) |
| `Analytics.tsx` | GA4 + Microsoft Clarity (begge gated bag cookie-consent) |
| `FaqAccordion.tsx` | Accordion til FAQ |
| `ExpandableCards.tsx` | Udvidbare kort (bruges på ydelser) |
| `CookieSettingsLink.tsx` | Knap til at nulstille cookie-samtykke |

---

## Eksterne integrationer

| Tjeneste | Brug |
|----------|------|
| **Vercel** | Hosting, DNS (nameservers), auto-deploy fra GitHub |
| **Resend** | Kontaktformular, LinkedIn-posts, Klarsynet nyhedsbrev |
| **Supabase** | Pipeline lead-database (PostgreSQL, free tier) |
| **Google Analytics 4** | Trafik-analyse (consent-gated) |
| **Microsoft Clarity** | Heatmaps + session replay (consent-gated, projekt y4rnibl6ul) |
| **Calendly** | Booking på `/find-projektleder` og `/find-ai-konsulent` |
| **Trustpilot** | Review-widget i footer |
| **Microsoft 365** | Email (`bt@weleadprojects.com`, MX via Vercel DNS) |

---

## Automatiserede scripts (Windows Task Scheduler)

| Script | Frekvens | Formål |
|--------|----------|--------|
| `send-linkedin-post.js` | Man/ons/fre kl. 08:00 | Sender planlagt LinkedIn-post via Resend |
| `send-klarsynet.js` | 1. i hver måned | Sender Klarsynet nyhedsbrev via Resend |
| `send-klarsynet-reminder.js` | 24. i hver måned | Påmindelse om næste Klarsynet-udgave |
| `supabase-keepalive.js` | Hver 3. dag | HEAD-ping til Supabase REST API for at undgå pause |

Alle `.cmd`-wrappere loader env-vars fra `.env.local` med `findstr`, da Task Scheduler ikke har adgang til brugerens miljøvariabler.

---

## Content-filer

| Fil | Beskrivelse |
|-----|-------------|
| `lib/articles.ts` | 12 artikler (6 DA + 6 EN) defineret som TypeScript-objekter |
| `content/linkedin-posts.json` | Planlagte LinkedIn-posts |
| `content/klarsynet-issues.json` | Månedligt nyhedsbrev-indhold |
| `content/klarsynet-idea-pool.json` | Emneforslag til kommende Klarsynet-udgaver |

---

## Structured data (JSON-LD)

| Type | Placering |
|------|-----------|
| Organization | `layout.tsx` (site-wide) |
| Service | `/ydelser/projektledelse`, `/ydelser/enterprise-architecture`, `/ydelser/ai-governance` |
| FAQPage | `/faq` |

---

## Domæner og DNS

| Domæne | Type | Formål |
|--------|------|--------|
| `weleadprojects.com` | Primært | Hoveddomæne (nameservers på Vercel DNS) |
| `weleadprojects.dk` | Redirect | Viderestilles til `.com` hos registrar |
| `findprojektleder.dk` | Proxy-rewrite | Viser `/find-projektleder` via `proxy.ts` |
| `findaikonsulenter.dk` | Proxy-rewrite | Viser `/find-ai-konsulent` via `proxy.ts` |

- Domæner registreret hos **Nordicway.dk**
- `weleadprojects.com` nameservers peger på **Vercel DNS**
- `findprojektleder.dk` og `findaikonsulenter.dk` tilføjet som domæner i Vercel-projektet
- Alle DNS-records (MX, SPF, DKIM, DMARC) administreres i Vercel DNS
- Email kører via Microsoft 365
- Resend DKIM/SPF/DMARC-records ligger i Vercel DNS

---

## Brand

| Token | Hex | Brug |
|-------|-----|------|
| DARK | `#2d1a1a` | Tekst, overskrifter |
| RED | `#cc2222` | Primær accent, CTA, links |
| NAVY | `#1C2544` | Hero, mørke sektioner |
| OFFWHITE | `#f7f5f5` | Lys baggrund |
| BORDER | `#e8e0e0` | Borders, skillelinjer |
