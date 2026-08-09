@AGENTS.md

# We Lead Projects — Projektdokumentation til Claude Code

## ⚠️ Scope
Denne CLAUDE.md gælder KUN weleadprojects.com. Andre projekter (finditconsultants.com, netpro.dk) har egne mapper og skal åbnes i separate Claude Code-sessioner.

---

## Virksomhedsinfo
- **Domæne:** weleadprojects.com
- **CVR:** 44934655
- **Adresse:** Industrivej 21, 4000 Roskilde
- **Telefon:** +45 5240 0088
- **Email:** hello@weleadprojects.com
- **Grundlagt:** 2018

---

## Tech Stack
- **Framework:** Next.js 16.2.4 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Email:** Resend (`noreply@weleadprojects.com` eller afsender-adresse)
- **Hosting:** Vercel (konto: `bt@weleadprojects.com` / team: `we-lead-projects`)
- **Repo:** GitHub — `BrianTofft/weleadprojects` (privat)
- **Sprog:** Dansk UI, TypeScript kode

---

## Brand farver
```
DARK:     #2d1a1a  (tekst/mørk)
RED:      #cc2222  (primær accent)
NAVY:     #1C2544  (hero/dark sections)
OFFWHITE: #f7f5f5  (lys baggrund)
BORDER:   #e8e0e0  (borders)
```

---

## Deployment

### ✅ Korrekt workflow
```
git push  →  GitHub  →  Vercel auto-deploy (we-lead-projects konto)
```
eller manuelt:
```
npm run deploy   (= vercel deploy --prod --yes)
```

### ⚠️ Vigtigt om Vercel-konti
- weleadprojects.com har sin **egen** Vercel-konto: `bt@weleadprojects.com` (team: `we-lead-projects`)
- **ALDRIG** deploy som `bt-dk` (finditconsultants-kontoen) — det opretter forkert projekt og ødelægger GitHub auto-deploy
- Vercel CLI logger man ind med: `npx vercel login` → browser-auth med `bt@weleadprojects.com`
- `.vercel/project.json` skal pege på `we-lead-projects/weleadprojects`

---

## DNS

### Nameservers
Domænet `weleadprojects.com` er registreret hos **Nordicway.dk**, men nameservers peger på **Vercel**:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
**Konsekvens:** Alle DNS-records (MX, SPF, DKIM, DMARC, Resend m.v.) skal tilføjes i **Vercel DNS** — ikke hos Nordicway. Records hos Nordicway ignoreres fuldstændig.

### DNS tilføjes her
Vercel → log ind som `bt@weleadprojects.com` → Domains → weleadprojects.com → DNS Records

### Email (Microsoft 365)
Email `bt@weleadprojects.com` kører via Microsoft 365. MX-record og øvrige M365-records skal ligge i Vercel DNS.

### Resend
Resend-domænet `weleadprojects.com` kræver DKIM, SPF og DMARC-records i Vercel DNS. Konto: `bt@weleadprojects.com` på resend.com.

---

## Filstruktur (vigtigste filer)
```
app/
  page.tsx              — Forside (hero, om os, kunder, ydelser, FAQ preview, kontakt)
  layout.tsx            — Root layout + metadata + Organization JSON-LD (INGEN GA4 endnu, se TODO #3)
  sitemap.ts            — Sitemap (genereres automatisk → /sitemap.xml)
  robots.ts             — robots.txt (genereres automatisk)
  om-os/page.tsx        — Om os siden
  ydelser/
    page.tsx            — Ydelser-oversigt (linker til de 3 undersider)
    projektledelse/page.tsx          — Ydelses-underside + Service JSON-LD
    enterprise-architecture/page.tsx — Ydelses-underside + Service JSON-LD
    ai-governance/page.tsx           — Ydelses-underside + Service JSON-LD
  indsigt/
    page.tsx            — Artikel-oversigt
    [slug]/page.tsx     — Artikel-side
  faq/page.tsx          — FAQ siden + FAQPage JSON-LD
  news/page.tsx         — Redirect til /indsigt (se TODO #7)
  pipeline/              — Intern lead-tracker (password-beskyttet, se PIPELINE_PASSWORD i .env.local)
  api/
    contact/route.ts    — Kontaktformular → Resend (intern notifikation + auto-reply)
    pipeline/            — Auth + CRUD for pipeline-tracker (Supabase)

components/
  Nav.tsx               — Navigation (logo-klik scroller til top på forsiden; Ydelser er hover-dropdown på desktop, foldbar undermenu på mobil)
  Footer.tsx            — Footer (Trustpilot review-widget, divider kun under indhold)
  PageHeader.tsx        — Sidehoved med baggrundsbillede (bruges på alle undersider)
  FaqAccordion.tsx      — Accordion til FAQ

lib/
  articles.ts           — 12 artikler (6 DA + 6 EN) defineret som TypeScript-objekter
  supabase.ts           — Lazy Supabase-klient (per-request, IKKE module-level, se note nedenfor)

content/
  linkedin-posts.json       — Planlagte LinkedIn-posts, sendes automatisk (Task Scheduler "WLP LinkedIn Posts", man/ons/fre 08:00)
  klarsynet-issues.json     — Månedligt LinkedIn-nyhedsbrev "Klarsynet", sendes 1. i måneden (Task Scheduler "WLP Klarsynet")
  klarsynet-idea-pool.json  — Emneforslag der roterer i påmindelsen den 24. hver måned ("WLP Klarsynet Reminder")

scripts/
  send-linkedin-post.js, send-klarsynet.js, send-klarsynet-reminder.js — Resend-baserede afsendelses-scripts, kaldt af Windows Task Scheduler via tilhørende .cmd-filer
```

---

## SEO — regler og status

### Morningscore onsite health score: 100/100 (senest tjekket 06. aug 2026)
Alle issues løst — 0 uløste på tværs af basic/technical/optimization (inkl. missing_alt_tags, images_without_dimensions, no_links_external, broken images, duplicate titles/descriptions, large images, low word count, missing h1, long URL).

### Aktive issues
Ingen p.t. Tjek løbende via Morningscore MCP (`ms_health_overall`).

### OBS
Domain overview (SEO-score/keywords/traffic) viste 0 pr. 06. aug 2026 efter tidligere at have vist 39 keywords dagen før — mulig frisk crawl uden rank-data endnu. Bør tjekkes igen.

### Titel-regel
Max **51 tegn** i title-feltet — med suffix " | We Lead Projects" (19 tegn) = 70 tegn total

### Beskrivelse-regel
Max **160 tegn**

---

## Kontaktformular (`/api/contact`)
- Sender intern notifikation til `hello@weleadprojects.com`
- Sender auto-reply til afsender
- Felter: navn, virksomhed, email, telefon, besked
- **Vigtigt:** `new Resend(...)` skal initialiseres **inde i POST-handleren** — ikke på modul-niveau (ødelægger Vercel build)

## Serverless client-init regel (Resend + Supabase)
Både Resend og Supabase-klienter skal oprettes **lazy, inde i handleren/per request**, aldrig som modul-level singleton. Modul-level init er set fejle to gange: (1) Resend crashede Vercel-buildet, (2) en Supabase module-level singleton cachede en klient bygget med tomme env-vars ved cold start og genbrugte den ("Invalid API key") for alle efterfølgende requests til samme warme lambda-instans. Se `lib/supabase.ts` for det korrekte mønster (`getSupabase()` opretter en ny klient hver gang).

---

## TODO (åbne opgaver)
1. Tilføj Cases/referencer side med konkrete projekteksempler
2. Skriv flere artikler til /indsigt (12/15–20 nået)
3. Tilføj GA4 + cookie-banner (GDPR/samtykke) — **GA4 findes ikke på sitet endnu**, trods tidligere antagelse. Skal implementeres sammen, ikke GA4 alene (ulovligt uden samtykke)
4. Booking-funktion (Calendly) — delvist løst: findes på `/find-projektleder`, mangler på forsidens kontakt-CTA
5. Vis konsulentteamet på Om os siden (ud over Brian)
6. ~~Tilføj JSON-LD structured data~~ — done: Organization (site-wide), Service (3 ydelses-undersider), FAQPage (/faq)
7. Tjek og opdater /news siden — stadig bare et redirect til /indsigt, aldrig taget stilling til om det er den rigtige løsning
8. Tilføj LinkedIn-link i footer
9. Dedikerede OG-billeder pr. side — delvist forbedret (nye sider bruger forskellige eksisterende fotos, ingen custom-designede grafikker endnu)
