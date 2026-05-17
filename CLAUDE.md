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
  layout.tsx            — Root layout + GA4
  sitemap.ts            — Sitemap (genereres automatisk → /sitemap.xml)
  om-os/page.tsx        — Om os siden
  ydelser/page.tsx      — Ydelser siden
  indsigt/
    page.tsx            — Artikel-oversigt
    [slug]/page.tsx     — Artikel-side
  faq/page.tsx          — FAQ siden
  news/page.tsx         — Nyheder
  api/
    contact/route.ts    — Kontaktformular → Resend (intern notifikation + auto-reply)

components/
  Nav.tsx               — Navigation (logo-klik scroller til top på forsiden)
  Footer.tsx            — Footer (divider kun under indhold, ikke fuld bredde)
  PageHeader.tsx        — Sidehoved med baggrundsbillede (bruges på alle undersider)
  FaqAccordion.tsx      — Accordion til FAQ

lib/
  articles.ts           — Alle 6 artikler (3 DA + 3 EN) defineret som TypeScript-objekter
```

---

## SEO — regler og status

### Morningscore score: 92/100 (maj 2026)
Løste issues: broken images, duplicate titles, duplicate descriptions, lange titles, lange descriptions, large images, low word count (faq), missing h1, long URL.

### Aktive issues (senest tjekket 09. maj 2026)
- `missing_alt_tags` — 31 billeder (delvist fikset: service-ikoner og logo-carousel)
- `images_without_dimensions` — 43 billeder (delvist fikset)
- `no_links_external` — 10 sider (lavprioritets)

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

---

## TODO (åbne opgaver)
1. Tilføj Cases/referencer side med konkrete projekteksempler
2. Skriv flere artikler til /indsigt (mål: 15–20 artikler)
3. Implementer cookie-banner (GDPR/samtykke til GA4)
4. Tilføj booking-funktion (Calendly eller lignende) til "Book et møde"
5. Vis konsulentteamet på Om os siden (ud over Brian)
6. Tilføj JSON-LD structured data (Organization, Service, FAQPage)
7. Tjek og opdater /news siden — er indholdet relevant og opdateret?
8. Tilføj LinkedIn-link i footer
9. Lav dedikerede OG-billeder til hver side (i stedet for hero.JPEG)
