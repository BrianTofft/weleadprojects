export type Article = {
  slug: string;
  lang: "da" | "en";
  category: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  intro: string;
  sections: { heading: string; body: string }[];
  sources?: { label: string; url: string }[];
};

export const articles: Article[] = [
  // ─── ARTIKEL 1 — DA ──────────────────────────────────────────────────────
  {
    slug: "5-advarselstegn-it-projekt-korer-af-sporet",
    lang: "da",
    category: "Projektledelse",
    title: "5 advarselstegn på dit IT-projekt",
    description:
      "Langt de fleste IT-projekter oplever problemer undervejs. Lær at genkende de tidlige signaler og få styr på dit projekt igen, før det løber af sporet.",
    date: "April 2025",
    readingMinutes: 5,
    intro:
      "Statistikkerne er ikke opmuntrende: op mod 70 % af alle IT-projekter overskrider budget eller tidsplan, og mange bliver aldrig gennemført som planlagt. Det sker sjældent pludseligt. Det starter med små signaler, der ignoreres lidt for længe. Her er de fem advarselstegn du bør handle på med det samme.",
    sections: [
      {
        heading: "1. Scope creep: opgaverne vokser uden kontrol",
        body: "Scope creep er den stille projektkiller. Det begynder med en lille ekstra funktion her, et udvidet krav der, og pludselig er projektet dobbelt så stort som det var planlagt til. Tegnet er klart: opgaver tilføjes løbende uden at påvirke budget, tidsplan eller ressourceallokering. Løsningen er en formel change request-proces og et stramt scope-register, der revideres ved hver milepæl.",
      },
      {
        heading: "2. Interessenter der forsvinder fra møderne",
        body: "Når nøgleinteressenter begynder at melde afbud til statusmøder, er det et signal om, at projektet har mistet deres engagement, eller tillid. Interessentstyring er ikke en engangsøvelse ved projektets start. Det kræver løbende kommunikation, synlige resultater og en klar fortælling om værdien af projektet. Identifikér de kritiske stemmer tidligt og hold dem tæt.",
      },
      {
        heading: "3. Beslutningerne hober sig op",
        body: "Et sundt projekt træffer beslutninger hurtigt. Hvis du har en liste af åbne beslutninger der vokser uge for uge, er det tegn på uklar ansvarsfordeling eller manglende mandat hos projektlederen. Hvert ubesvaret spørgsmål er en forsinkelse i gang. En RACI-model og klare eskaleringsregler er det første skridt mod at genoprette fremdriften.",
      },
      {
        heading: "4. Budgetadvarsler der starter som 'uvæsentlige'",
        body: "En budgetoverskridelse på 5 % virker lille. Men det er sjældent det forbliver. Erfaringen viser, at tidlige budgetsignaler ofte er symptomer på dybere problemer: underestimerede opgaver, skjult scope creep eller ressourcer der bruges mindre effektivt end planlagt. Indfør en fast budgetopfølgning ved hver milepæl og lav en konsekvensanalyse ved enhver afvigelse.",
      },
      {
        heading: "5. Teamet mangler fælles forståelse af målet",
        body: "Spørg tre tilfældige teammedlemmer hvad projektets primære succeskriterium er. Får du tre forskellige svar, har projektet et grundlæggende problem. Et veldefineret projektcharter med klare mål, succeskriterier og gevinstrealiseringsplan er ikke bureaukrati. Det er det fundament alt andet hviler på.",
      },
      {
        heading: "Hvad gør man, når man ser tegnene?",
        body: "Det vigtigste er at handle hurtigt og transparent. En struktureret sundhedstjek af projektet, scope, budget, interessenter, risici og teamdynamik, giver et klart billede af situationen. Hos We Lead Projects gennemfører vi projektreviews og bistår med at genoprette fremdrift, uanset om projektet er i sin indledende fase eller allerede under eksekvering.",
      },
    ],
    sources: [
      { label: "Standish Group CHAOS Report: IT-projektstatistik", url: "https://www.standishgroup.com/" },
      { label: "Project Management Institute (PMI)", url: "https://www.pmi.org/" },
    ],
  },

  // ─── ARTIKEL 1 — EN ──────────────────────────────────────────────────────
  {
    slug: "5-warning-signs-it-project-going-off-track",
    lang: "en",
    category: "Project Management",
    title: "5 Warning Signs Your IT Project Is Off Track",
    description:
      "Most IT projects encounter problems before they fail. Learn to recognise the warning signs early and get your project back on course.",
    date: "April 2025",
    readingMinutes: 5,
    intro:
      "The statistics are sobering: up to 70% of all IT projects exceed budget or schedule, and many are never completed as planned. This rarely happens suddenly. It starts with small signals that are ignored a little too long. Here are five warning signs you should act on immediately.",
    sections: [
      {
        heading: "1. Scope creep: requirements keep growing",
        body: "Scope creep is the silent project killer. It starts with a small extra feature here, an extended requirement there, and suddenly the project is twice the size originally planned. The sign is clear: tasks are continuously added without affecting budget, timeline, or resource allocation. The solution is a formal change request process and a tightly managed scope register reviewed at every milestone.",
      },
      {
        heading: "2. Stakeholders disappearing from meetings",
        body: "When key stakeholders start skipping status meetings, it signals a loss of engagement, or trust, in the project. Stakeholder management is not a one-time exercise at project kickoff. It requires ongoing communication, visible results, and a clear narrative about the project's value. Identify critical voices early and keep them close.",
      },
      {
        heading: "3. Decisions piling up",
        body: "A healthy project makes decisions quickly. If you have a growing list of open decisions week after week, it signals unclear accountability or insufficient authority for the project manager. Every unanswered question is a delay in progress. A RACI model and clear escalation rules are the first step toward restoring momentum.",
      },
      {
        heading: "4. Budget warnings that start as 'minor'",
        body: "A 5% budget overrun seems small. But it rarely stays that way. Experience shows that early budget signals are often symptoms of deeper issues: underestimated tasks, hidden scope creep, or resources being used less efficiently than planned. Implement fixed budget reviews at each milestone and conduct an impact analysis for any variance.",
      },
      {
        heading: "5. The team lacks a shared understanding of the goal",
        body: "Ask three random team members what the project's primary success criterion is. If you get three different answers, the project has a fundamental problem. A well-defined project charter with clear objectives, success criteria, and a benefits realisation plan is not bureaucracy. It is the foundation on which everything else rests.",
      },
      {
        heading: "What to do when you see the signs",
        body: "The most important thing is to act quickly and transparently. A structured project health check, covering scope, budget, stakeholders, risks, and team dynamics, gives a clear picture of the situation. At We Lead Projects, we conduct project reviews and help restore momentum, whether the project is in its early phase or already in execution.",
      },
    ],
    sources: [
      { label: "Standish Group CHAOS Report: IT project statistics", url: "https://www.standishgroup.com/" },
      { label: "Project Management Institute (PMI)", url: "https://www.pmi.org/" },
    ],
  },


  // ─── ARTIKEL 3 — DA ──────────────────────────────────────────────────────
  {
    slug: "agile-waterfall-eller-hybrid",
    lang: "da",
    category: "Metoder",
    title: "Agile, Waterfall eller Hybrid: vælg din model",
    description:
      "Valget af projektmodel er en vigtig beslutning. Vi gennemgår fordele og ulemper ved Agile, Waterfall og Hybrid, og hvornår du bør bruge hvilken.",
    date: "Februar 2025",
    readingMinutes: 5,
    intro:
      "\"Vi kører Agile\" er en sætning man hører ofte i dag. Men Agile er ikke et universalværktøj. Ligesom en erfaren håndværker vælger det rigtige redskab til opgaven, bør en kompetent projektleder vælge den metode der passer til projektets natur, organisation og risikoniveau.",
    sections: [
      {
        heading: "Waterfall: Struktur og forudsigelighed",
        body: "Waterfall-metoden er lineær og sekventiel: krav defineres fuldt ud inden udvikling starter, og projektet gennemløber faste faser ét trin ad gangen. Det er den rette tilgang når kravene er stabile og veldefinerede, når der er strenge regulatoriske krav til dokumentation, eller når projektet har mange afhængigheder til andre systemer og processer. Eksempler: ERP-implementeringer, compliance-projekter, infrastrukturudskiftninger.",
      },
      {
        heading: "Agile: Fleksibilitet og hurtig feedback",
        body: "Agile-metoder, herunder Scrum og SAFe, arbejder i korte iterationer (sprints) og prioriterer løbende feedback og tilpasning. Det er ideelt til projekter hvor kravene ikke er fuldt kendte fra start, hvor brugerinddragelse er central, eller hvor markedet bevæger sig hurtigt. Agile kræver dog aktive og engagerede interessenter samt en organisation der er parat til løbende forandringer.",
      },
      {
        heading: "Hybrid: Det bedste fra begge verdener",
        body: "I praksis er de fleste komplekse IT-projekter hverken rent Waterfall eller rent Agile. En hybrid tilgang kombinerer den strukturerede planlægning og styring fra Waterfall med den fleksibilitet og iterative udvikling fra Agile. Overordnet projektplan og milepæle styres Waterfall-agtig, mens den egentlige løsningsudvikling kører i agile sprints. Dette er særligt effektivt i større transformationsprojekter med mange interessenter.",
      },
      {
        heading: "Sådan vælger du",
        body: "Tre spørgsmål hjælper dig til det rigtige valg: (1) Er kravene stabile og veldefinerede? Ja → Waterfall eller hybrid. Nej → Agile. (2) Kan organisationen håndtere løbende ændringer? Ja → Agile. Nej → Waterfall. (3) Er der strenge krav til dokumentation og sporbarhed? Ja → Waterfall som minimum for styringslaget. Husk: metoden er et middel, ikke et mål. Det vigtigste er at den tjener projektet, ikke omvendt.",
      },
      {
        heading: "We Lead Projects' tilgang",
        body: "Vi er metodeneutrale. Vi vurderer hvert projekt individuelt og anbefaler den tilgang der passer til netop jeres situation. Vores konsulenter har erfaring med alle tre modeller og kan guide jer, uanset om I er i gang med at vælge model, eller har brug for hjælp til at komme ud af en fastlåst projektmetode.",
      },
    ],
    sources: [
      { label: "Agile Manifesto", url: "https://agilemanifesto.org/" },
      { label: "Scrum.org: Scrum Guide", url: "https://www.scrum.org/resources/scrum-guide" },
      { label: "PMI: Agile Practice Guide", url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile" },
    ],
  },

  // ─── ARTIKEL 4 — DA ──────────────────────────────────────────────────────
  {
    slug: "ai-i-enterprise-architecture",
    lang: "da",
    category: "Enterprise Architecture",
    title: "AI i Enterprise Architecture: governance",
    description:
      "AI stiller nye krav til Enterprise Architecture. Lær hvordan du integrerer AI-governance i dit EA-rammeværk og bygger en solid strategi for AI-implementering.",
    date: "Juli 2025",
    readingMinutes: 7,
    intro:
      "Kunstig intelligens er ikke blot endnu et IT-system der skal implementeres og driftes. Det er en fundamental ændring af måden organisationer indsamler, behandler og anvender information, og det stiller helt nye krav til Enterprise Architecture. Virksomheder der ikke tager højde for AI i deres EA-rammeværk risikerer at ende med en fragmenteret AI-portefølje, redundante datasiloer og strategiske investeringer der ikke hænger sammen. Hos We Lead Projects har vi bistået virksomheder med netop dette arbejde. Her er vores erfaringer.",
    sections: [
      {
        heading: "Hvad AI gør ved din eksisterende arkitektur",
        body: "Traditionelle EA-frameworks som TOGAF er bygget op om fire arkitekturlag: forretning, data, applikationer og teknologi. AI berører alle fire lag på én gang. På forretningslaget ændrer AI beslutningsprocesser og skaber nye forretningsmodeller. På datalaget stiller AI skærpede krav til datakvalitet, datalineage og adgangsstyring. Dårlige data giver dårlige AI-resultater. På applikationslaget introducerer AI nye komponenter som modeller, inference-endpoints og MLOps-pipelines. På teknologilaget kræver AI-workloads ofte specialiseret infrastruktur i form af GPU-kapacitet, cloud-platforme og dataplattforme. En Enterprise Arkitekt der ikke har kortlagt disse sammenhænge skaber blindt rum for fejlinvesteringer.",
      },
      {
        heading: "AI-governance som ny disciplin i EA",
        body: "AI-governance er den del af EA der sikrer, at AI-systemer udvikles og anvendes på en ansvarlig, reproducerbar og kontrollerbar måde. Det dækker over: modelregistrering og versionsstyring, datarettigheder og compliance (herunder EU AI Act og GDPR), fairness og bias-evaluering, auditbarhed og forklarbarhed samt klare ejerskabsstrukturer for AI-aktiver. Mange organisationer har i dag AI-eksperimenter spredt ud over forretningen, i marketing, økonomi, drift og HR, uden central koordinering eller governancepolitik. En Enterprise Arkitekt der etablerer et AI-governanceframework bringer disse initiativer ind under en fælles struktur, reducerer risiko og øger genanvendeligheden af data og modeller på tværs af organisationen.",
      },
      {
        heading: "Kortlægning og klassifikation af AI-aktiver",
        body: "Et af de første og vigtigste skridt i AI-EA-arbejdet er at skabe et overblik over eksisterende AI-aktiver: hvilke modeller er i brug, hvem ejer dem, hvilke data er de trænet på, og hvilke systemer er de integreret i? Denne kortlægning afslører typisk tre ting: (1) Mange AI-løsninger er indkøbt som dele af SaaS-produkter og er ikke synlige i den eksisterende IT-portefølje. (2) Der er betydelig redundans. Det samme problem løses med forskellige AI-løsninger i forskellige dele af organisationen. (3) Datakvaliteten varierer markant på tværs af de datakilder der bruges til AI. Kortlægningen er grundlaget for en realistisk AI-roadmap.",
      },
      {
        heading: "Fra EA-strategi til AI-roadmap",
        body: "En AI-roadmap baseret på EA er ikke en liste over AI-projekter man gerne vil lave. Det er en prioriteret plan der tager udgangspunkt i forretningens strategiske mål, kortlægger de arkitekturmæssige forudsætninger og identificerer de kritiske kapabiliteter der skal etableres, typisk dataplattform, governancestrukturer og kompetencer, inden de store AI-investeringer igangsættes. Roadmappen bør skelne mellem tre typer AI-initiativer: (1) Køb: indkøb af AI-funktionalitet som del af eksisterende software. (2) Tilpas: finjustering af eksisterende modeller til organisationens specifikke behov. (3) Byg: udvikling af egne modeller på egne data. De fleste organisationer har brug for alle tre, men i forskellig balance afhængigt af deres datamodenhed og strategiske ambitioner.",
      },
      {
        heading: "Praktiske erfaringer fra AI-implementeringer",
        body: "Hos We Lead Projects har vi ledt og bistået AI-implementeringsprojekter i flere faser, fra den indledende behovsanalyse og arkitekturvurdering til leverance og driftovergang. Vores erfaring er, at de projekter der lykkes, har tre ting til fælles: For det første et klart forretningsproblem at løse, ikke 'vi vil gerne lave AI', men 'vi vil reducere behandlingstiden for X med Y procent'. For det andet et solidt datafundament etableret inden modeludvikling starter. For det tredje en governance-struktur der er defineret og godkendt af ledelsen inden første model går i produktion. De projekter der fejler, starter typisk med teknologien og arbejder sig baglæns mod forretningsværdien. Det er den omvendte rækkefølge.",
      },
      {
        heading: "Næste skridt for din organisation",
        body: "Uanset hvor din organisation er i AI-rejsen, er en arkitekturvurdering et godt startpunkt. Den afklarer hvad I har, hvad I mangler og hvad der er det rigtige næste skridt, uden at forpligte jer til en bestemt teknologi eller leverandør. Hos We Lead Projects tilbyder vi AI-EA-vurderinger som et afgrænset engagement, typisk 4–8 uger, med en konkret rapport og en prioriteret roadmap som leverance. Kontakt os for at høre mere.",
      },
    ],
    sources: [
      { label: "The Open Group: TOGAF Standard", url: "https://www.opengroup.org/togaf" },
      { label: "EU AI Act: Europa-Kommissionens regulering af AI", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { label: "GDPR og databeskyttelse: Datatilsynet", url: "https://www.datatilsynet.dk/" },
    ],
  },

  // ─── ARTIKEL 4 — EN ──────────────────────────────────────────────────────
  {
    slug: "ai-in-enterprise-architecture",
    lang: "en",
    category: "Enterprise Architecture",
    title: "AI in Enterprise Architecture: Governance",
    description:
      "AI places new demands on Enterprise Architecture. Learn how to integrate AI governance into your EA framework and build a solid strategy for AI implementation.",
    date: "July 2025",
    readingMinutes: 7,
    intro:
      "Artificial intelligence is not simply another IT system to implement and operate. It represents a fundamental shift in how organisations collect, process and apply information, and it places entirely new demands on Enterprise Architecture. Organisations that fail to account for AI in their EA framework risk ending up with a fragmented AI portfolio, redundant data silos, and strategic investments that do not cohere. At We Lead Projects, we have helped organisations navigate exactly this challenge. Here are our insights.",
    sections: [
      {
        heading: "What AI does to your existing architecture",
        body: "Traditional EA frameworks such as TOGAF are structured around four architecture layers: business, data, applications, and technology. AI touches all four simultaneously. At the business layer, AI changes decision-making processes and enables new business models. At the data layer, AI places heightened demands on data quality, data lineage, and access management. Poor data produces poor AI outcomes. At the application layer, AI introduces new components such as models, inference endpoints, and MLOps pipelines. At the technology layer, AI workloads often require specialised infrastructure including GPU capacity, cloud platforms, and data platforms. An Enterprise Architect who has not mapped these interdependencies creates blind spots that lead to misguided investments.",
      },
      {
        heading: "AI governance as a new discipline in EA",
        body: "AI governance is the component of EA that ensures AI systems are developed and deployed in a responsible, reproducible, and controllable manner. It encompasses: model registration and version control, data rights and compliance (including the EU AI Act and GDPR), fairness and bias evaluation, auditability and explainability, and clear ownership structures for AI assets. Many organisations today have AI experiments scattered across business units, in marketing, finance, operations, and HR, without central coordination or a governance policy. An Enterprise Architect who establishes an AI governance framework brings these initiatives under a common structure, reduces risk, and increases the reusability of data and models across the organisation.",
      },
      {
        heading: "Mapping and classifying AI assets",
        body: "One of the first and most important steps in AI-EA work is creating an inventory of existing AI assets: which models are in use, who owns them, what data were they trained on, and which systems are they integrated with? This mapping typically reveals three things: (1) Many AI solutions are purchased as part of SaaS products and are invisible in the existing IT portfolio. (2) There is significant redundancy. The same problem is being solved with different AI solutions in different parts of the organisation. (3) Data quality varies considerably across the data sources used for AI. This inventory forms the foundation for a realistic AI roadmap.",
      },
      {
        heading: "From EA strategy to AI roadmap",
        body: "An EA-based AI roadmap is not a wish list of AI projects. It is a prioritised plan grounded in the organisation's strategic objectives, mapping the architectural prerequisites and identifying the critical capabilities, typically a data platform, governance structures, and competencies, that must be in place before major AI investments begin. The roadmap should distinguish between three types of AI initiatives: (1) Buy: purchasing AI functionality as part of existing software. (2) Customise: fine-tuning existing models for the organisation's specific needs. (3) Build: developing proprietary models on proprietary data. Most organisations need all three, but in different proportions depending on their data maturity and strategic ambitions.",
      },
      {
        heading: "Practical experience from AI implementations",
        body: "At We Lead Projects, we have led and supported AI implementation projects across multiple phases, from initial needs analysis and architecture assessment through to delivery and transition to operations. Our experience is that projects which succeed share three characteristics: first, a clearly defined business problem to solve, not 'we want to do AI', but 'we want to reduce the processing time for X by Y per cent'. Second, a solid data foundation established before model development begins. Third, a governance structure defined and approved by leadership before the first model goes into production. Projects that fail typically start with the technology and work backwards towards business value. The wrong order.",
      },
      {
        heading: "Next steps for your organisation",
        body: "Wherever your organisation is on its AI journey, an architecture assessment is a strong starting point. It clarifies what you have, what you lack, and what the right next step is, without committing you to a specific technology or vendor. At We Lead Projects, we offer AI-EA assessments as a scoped engagement, typically four to eight weeks, delivering a concrete report and a prioritised roadmap. Contact us to learn more.",
      },
    ],
    sources: [
      { label: "The Open Group: TOGAF Standard", url: "https://www.opengroup.org/togaf" },
      { label: "EU AI Act: European Commission", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { label: "Gartner: AI Governance", url: "https://www.gartner.com/en/information-technology/glossary/ai-governance" },
    ],
  },

  // ─── ARTIKEL 5 — DA ──────────────────────────────────────────────────────
  {
    slug: "projektledelse-af-ai-implementeringer",
    lang: "da",
    category: "Projektledelse",
    title: "Projektledelse af AI-implementeringer",
    description:
      "AI-projekter er anderledes end traditionelle IT-projekter. Lær hvilke faser der er kritiske, og hvad der adskiller de projekter der lykkes fra dem der fejler.",
    date: "Juli 2025",
    readingMinutes: 7,
    intro:
      "AI-implementeringer fejler oftere end de lykkes. Og årsagen er sjældent teknisk. Det er projektledelsen der svigter. AI-projekter stiller særlige krav til styring, interessenthåndtering og risikohåndtering, som adskiller sig markant fra traditionelle IT-projekter. Hos We Lead Projects har vi ledt AI-implementeringer fra idé til drift. Her er de vigtigste læringer.",
    sections: [
      {
        heading: "Hvorfor AI-projekter er anderledes end andre IT-projekter",
        body: "I et traditionelt IT-projekt er leverancen defineret på forhånd: et system der kan X, en funktion der gør Y. I et AI-projekt er leverancen i sagens natur probabilistisk. Modellen giver sandsynlige svar, ikke garanterede. Det betyder at succeskriterierne skal defineres anderledes (hvad er et acceptabelt præcisionsniveau?), at test og validering er mere kompleks, og at interessenter skal klædes på til at arbejde med AI-output der ikke altid er deterministisk. En projektleder der ikke forstår denne forskel, risikerer at styre mod et mål der ikke eksisterer.",
      },
      {
        heading: "De kritiske faser i et AI-implementeringsprojekt",
        body: "Et AI-projekt gennemløber typisk seks faser: (1) Problemdefinition og forretningsmæssig forankring: hvad skal AI'en løse, og hvem ejer gevinsten? (2) Datavurdering og -forberedelse: har vi de data der kræves, i den kvalitet der kræves? Denne fase undervurderes konsekvent og er årsagen til mere end halvdelen af alle forsinkelser. (3) Proof of Concept: teknisk validering af at tilgangen virker på et begrænset datasæt. (4) Pilotimplementering: deployment i kontrolleret miljø med udvalgte brugere og struktureret feedback. (5) Skalering og integration: fuld udrulning med integration til eksisterende systemer og arbejdsgange. (6) Drift og kontinuerlig forbedring: overvågning af modelpræstation, genoptræning og løbende evaluering. Mange projekter forsøger at hoppe fra fase 1 til fase 5. Det er den korteste vej til fiasko.",
      },
      {
        heading: "Risici der er specifikke for AI-projekter",
        body: "Ud over de klassiske projektrisici (scope creep, budgetoverskridelse, ressourcemangel) har AI-projekter en række specifikke risici: Datakvalitetsrisiko: modellen er kun så god som de data den er trænet på, og datakvalitet viser sig ofte at være langt lavere end antaget. Modelforældelse: modeller forringes over tid efterhånden som data og adfærd ændrer sig, og der skal etableres processer for løbende overvågning og genoptræning. Bias og fairness-risiko: modellen diskriminerer systematisk mod bestemte grupper, med potentielle juridiske og omdømmemæssige konsekvenser. Regulatorisk risiko: EU AI Act klassificerer visse AI-applikationer som høj-risiko med skærpede krav til dokumentation og kontrol. Adoptionsrisiko: brugerne stoler ikke på eller anvender ikke AI-løsningen, og den forretningsmæssige gevinst realiseres aldrig.",
      },
      {
        heading: "Interessenthåndtering i AI-projekter",
        body: "AI-projekter involverer typisk en bredere og mere heterogen interessentgruppe end traditionelle IT-projekter: forretningsejere der forventer hurtige gevinster, IT-arkitekter der bekymrer sig om integration og governance, jurister og compliance-ansvarlige der håndterer regulatoriske krav, slutbrugere der skal ændre arbejdsgange, og ledelsen der har godkendt en investering og forventer ROI. En kompetent projektleder kortlægger disse interessenter tidligt, forstår deres individuelle bekymringer og succeskriterier, og kommunikerer differentieret til hver gruppe. Særligt vigtigt er det at håndtere de tidlige bekymringer hos slutbrugerne. AI opleves ofte som en trussel mod eksisterende roller, og denne modstand kan torpedere selv teknisk vellykkede implementeringer.",
      },
      {
        heading: "Succesfaktorer: hvad adskiller projekter der lykkes",
        body: "Baseret på vores erfaring med AI-implementeringsprojekter er der fem faktorer der konsekvent adskiller de projekter der lykkes fra dem der ikke gør: (1) Et klart og afgrænset forretningsproblem som udgangspunkt, ikke AI for AI's skyld. (2) Et solidt og veldokumenteret datafundament etableret inden modeludvikling starter. (3) En stærk sponsor i ledelsen med mandat og interesse i at realisere gevinsten. (4) Et tværfagligt projektteam der kombinerer forretningsforståelse, dataekspertise og teknisk implementeringskraft. (5) En realistisk tidsplan der respekterer at AI-projekter kræver iterationer og eksperimenter, og at data altid tager længere tid end planlagt.",
      },
      {
        heading: "We Lead Projects' erfaring med AI-implementeringer",
        body: "Vi har bistået virksomheder med AI-implementeringer i alle faser, fra den indledende businesscase og roadmap til leverance og driftovergang. Vores tilgang er at kombinere stærk projektledelsesfaglighed med en praktisk forståelse af hvad AI-projekter kræver: tid til datavalidering, plads til eksperimenter i PoC-fasen, og tæt interessentinvolvering hele vejen igennem. Uanset om I er i gang med at vurdere om AI er den rigtige løsning, eller allerede er i gang med et projekt der har brug for professionel styring, kan vi hjælpe. Kontakt os for en uforpligtende samtale.",
      },
    ],
    sources: [
      { label: "EU AI Act: Europa-Kommissionens regulering af AI", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { label: "Project Management Institute (PMI)", url: "https://www.pmi.org/" },
      { label: "GDPR og databeskyttelse: Datatilsynet", url: "https://www.datatilsynet.dk/" },
    ],
  },

  // ─── ARTIKEL 5 — EN ──────────────────────────────────────────────────────
  {
    slug: "project-management-of-ai-implementations",
    lang: "en",
    category: "Project Management",
    title: "Project Management of AI Implementations",
    description:
      "AI projects differ from traditional IT projects. Learn which phases are critical, which risks are AI-specific, and what separates the projects that succeed.",
    date: "July 2025",
    readingMinutes: 7,
    intro:
      "AI implementations fail more often than they succeed, and the reason is rarely technical. It is the project management that falls short. AI projects place particular demands on governance, stakeholder management and risk management that differ significantly from traditional IT projects. At We Lead Projects, we have led AI implementations from concept to operations. Here are the key lessons.",
    sections: [
      {
        heading: "Why AI projects are different from other IT projects",
        body: "In a traditional IT project, the deliverable is defined upfront: a system that does X, a feature that does Y. In an AI project, the deliverable is inherently probabilistic. The model provides likely answers, not guaranteed ones. This means success criteria must be defined differently (what is an acceptable accuracy level?), testing and validation are more complex, and stakeholders must be prepared to work with AI output that is not always deterministic. A project manager who does not understand this difference risks steering towards a goal that does not exist.",
      },
      {
        heading: "The critical phases of an AI implementation project",
        body: "An AI project typically moves through six phases: (1) Problem definition and business anchoring: what should the AI solve, and who owns the business benefit? (2) Data assessment and preparation: do we have the data required, at the quality required? This phase is consistently underestimated and accounts for more than half of all delays. (3) Proof of Concept: technical validation that the approach works on a limited dataset. (4) Pilot implementation: deployment in a controlled environment with selected users and structured feedback. (5) Scaling and integration: full rollout with integration into existing systems and workflows. (6) Operations and continuous improvement: monitoring model performance, retraining, and ongoing evaluation. Many projects attempt to jump from phase one to phase five. That is the shortest route to failure.",
      },
      {
        heading: "Risks specific to AI projects",
        body: "Beyond the classic project risks (scope creep, budget overrun, resource shortages), AI projects carry a set of specific risks: Data quality risk: the model is only as good as the data it is trained on, and data quality often proves far lower than assumed. Model degradation: models deteriorate over time as data and behaviours change, requiring processes for continuous monitoring and retraining. Bias and fairness risk: the model systematically discriminates against certain groups, with potential legal and reputational consequences. Regulatory risk: the EU AI Act classifies certain AI applications as high-risk with heightened requirements for documentation and control. Adoption risk: users do not trust or engage with the AI solution, and the business benefit is never realised.",
      },
      {
        heading: "Stakeholder management in AI projects",
        body: "AI projects typically involve a broader and more heterogeneous stakeholder group than traditional IT projects: business owners expecting rapid returns, IT architects concerned with integration and governance, legal and compliance teams managing regulatory requirements, end users who must change their workflows, and leadership who approved an investment and expect ROI. A competent project manager maps these stakeholders early, understands their individual concerns and success criteria, and communicates differently to each group. Particularly important is managing early concerns among end users. AI is often perceived as a threat to existing roles, and this resistance can torpedo even technically successful implementations.",
      },
      {
        heading: "Success factors: what separates the projects that succeed",
        body: "Based on our experience with AI implementation projects, five factors consistently separate those that succeed from those that do not: (1) A clear and bounded business problem as the starting point, not AI for AI's sake. (2) A solid and well-documented data foundation established before model development begins. (3) A strong executive sponsor with the mandate and interest to realise the business benefit. (4) A cross-functional project team combining business understanding, data expertise, and technical implementation capability. (5) A realistic timeline that respects the fact that AI projects require iteration and experimentation, and that data always takes longer than planned.",
      },
      {
        heading: "We Lead Projects' experience with AI implementations",
        body: "We have supported organisations with AI implementations across all phases, from the initial business case and roadmap through to delivery and transition to operations. Our approach combines strong project management expertise with a practical understanding of what AI projects require: time for data validation, space for experimentation in the PoC phase, and close stakeholder involvement throughout. Whether you are assessing whether AI is the right solution, or already have a project in need of professional governance, we can help. Contact us for an informal conversation.",
      },
    ],
    sources: [
      { label: "EU AI Act: European Commission", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { label: "Project Management Institute (PMI)", url: "https://www.pmi.org/" },
    ],
  },

  // ─── ARTIKEL 3 — EN ──────────────────────────────────────────────────────
  {
    slug: "agile-waterfall-or-hybrid",
    lang: "en",
    category: "Methods",
    title: "Agile, Waterfall or Hybrid: Choose Your Model",
    description:
      "Choosing the right project model matters. We break down Agile, Waterfall and Hybrid, pros, cons, and when to use each approach.",
    date: "February 2025",
    readingMinutes: 5,
    intro:
      "\"We run Agile\" is a phrase you hear often today. But Agile is not a universal tool. Just as a skilled craftsman selects the right tool for the job, a competent project manager should choose the method that fits the nature of the project, the organisation, and the risk profile.",
    sections: [
      {
        heading: "Waterfall: Structure and predictability",
        body: "The Waterfall method is linear and sequential: requirements are fully defined before development begins, and the project moves through fixed phases one step at a time. It is the right approach when requirements are stable and well-defined, when there are strict regulatory requirements for documentation, or when the project has many dependencies on other systems and processes. Examples: ERP implementations, compliance projects, infrastructure replacements.",
      },
      {
        heading: "Agile: Flexibility and rapid feedback",
        body: "Agile methods, including Scrum and SAFe, work in short iterations (sprints) and prioritise continuous feedback and adaptation. They are ideal for projects where requirements are not fully known from the start, where user involvement is central, or where the market moves quickly. However, Agile requires active and engaged stakeholders and an organisation ready for continuous change.",
      },
      {
        heading: "Hybrid: The best of both worlds",
        body: "In practice, most complex IT projects are neither purely Waterfall nor purely Agile. A hybrid approach combines the structured planning and governance of Waterfall with the flexibility and iterative development of Agile. The overall project plan and milestones are managed in a Waterfall-like manner, while the actual solution development runs in agile sprints. This is particularly effective in larger transformation projects with many stakeholders.",
      },
      {
        heading: "How to choose",
        body: "Three questions help you make the right choice: (1) Are requirements stable and well-defined? Yes → Waterfall or hybrid. No → Agile. (2) Can the organisation handle continuous change? Yes → Agile. No → Waterfall. (3) Are there strict requirements for documentation and traceability? Yes → Waterfall as a minimum for the governance layer. Remember: the method is a means, not an end. What matters most is that it serves the project, not the other way around.",
      },
      {
        heading: "The We Lead Projects approach",
        body: "We are method-neutral. We assess each project individually and recommend the approach that fits your specific situation. Our consultants have experience with all three models and can guide you, whether you are in the process of selecting a methodology or need help breaking free from a rigid project model.",
      },
    ],
    sources: [
      { label: "Agile Manifesto", url: "https://agilemanifesto.org/" },
      { label: "Scrum.org: Scrum Guide", url: "https://www.scrum.org/resources/scrum-guide" },
      { label: "PMI: Agile Practice Guide", url: "https://www.pmi.org/pmbok-guide-standards/practice-guides/agile" },
    ],
  },

  // ─── ARTIKEL 6 — DA ──────────────────────────────────────────────────────
  {
    slug: "ai-governance-vs-ea-governance",
    lang: "da",
    category: "Enterprise Architecture",
    title: "AI-governance vs. EA-governance",
    description:
      "De fleste virksomheder behandler AI-governance som en ny disciplin adskilt fra Enterprise Architecture. Det er en dyr fejl. Se hvorfor, og hvordan de to bør hænge sammen.",
    date: "August 2026",
    readingMinutes: 7,
    intro:
      "De fleste virksomheder taler om AI-governance og Enterprise Architecture-governance som om det er to forskellige projekter. Det ene ligger hos jura og compliance. Det andet ligger hos IT og arkitektur. Problemet er, at AI-systemer er arkitektur. De har grænseflader, afhængigheder og datalinje ligesom alt andet i systemlandskabet. Når de to discipliner ikke taler sammen, ender virksomheden enten med en juridisk vandtæt strategi der er teknisk usammenhængende, eller en teknisk solid løsning der aldrig består en compliance-gennemgang.",
    sections: [
      {
        heading: "AI-governance er ikke en ny disciplin",
        body: "De fleste virksomheder behandler AI-governance som noget der skal bygges fra bunden af jura og compliance. Men risikoklassificering, dataejerskab og afhængighedskortlægning er præcis det Enterprise Architecture allerede skulle have styr på. Problemet er ikke, at AI kræver en helt ny form for governance. Det er, at EA-governance i mange virksomheder aldrig blev taget alvorligt nok til at kunne udvides til det. Når AI-governance opstår som et selvstændigt initiativ i stedet for en udvidelse af eksisterende EA-governance, genopfinder virksomheden en proces der delvist allerede findes, blot med et nyt navn og et nyt team.",
      },
      {
        heading: "Statiske systemer versus systemer der ændrer sig selv",
        body: "Et ERP-system opfører sig som det blev bygget til, indtil nogen aktivt ændrer koden. En AI-model kan ændre adfærd uden at nogen rørte den, gennem retraining, model drift eller simpelthen mere data over tid. Traditionel EA-governance er punktbaseret: en arkitektur bliver godkendt ved et review, og derefter går man videre til næste initiativ. AI kræver kontinuerlig governance, fordi modellens output i dag ikke nødvendigvis afspejler modellens output om seks måneder. De fleste virksomheders governance-model, inklusive deres EA-praksis, er slet ikke bygget til at håndtere den forskel.",
      },
      {
        heading: "To siloer, ingen ejer",
        body: "AI-governance-diskussionen foregår typisk i bestyrelseslokalet sammen med jura og compliance. Enterprise Architecture sidder under CTO eller IT-direktøren og forstår det faktiske systemlandskab, dataflowene og de tekniske afhængigheder. De to grupper taler sjældent sammen med nogen fast kadence. Resultatet er en AI-strategi der enten er juridisk vandtæt og teknisk usammenhængende, eller teknisk solid og juridisk sårbar. Ingen af delene holder i praksis, og begge dele koster dyrt at rette bagefter.",
      },
      {
        heading: "Governance der kommer for sent",
        body: "Governance skal i sin natur være fremadskuende: vurdér før du bygger, ikke bagefter. Men i de fleste virksomheder opstår AI-governance først, efter nogen allerede har koblet en sprogmodel på et internt system eller en kundevendt løsning. Det er den omvendte rækkefølge af hvordan Enterprise Architecture altid har arbejdet. Symptomet på at AI-governance ikke er en integreret del af EA fra start, er at den konsekvent kommer for sent til at forhindre noget, og i stedet bruges til at oprydde efter beslutninger der allerede er truffet.",
      },
      {
        heading: "Data governance er ikke en ny opdagelse",
        body: "Mange AI-governance-frameworks taler om datakvalitet, datalineage og adgangsstyring som om det er nye indsigter født med AI-bølgen. Det er det ikke. Det er data governance, en kernedisciplin i Enterprise Architecture i årevis, som mange virksomheder aldrig prioriterede højt nok, fordi konsekvenserne af dårlig datakvalitet ofte var usynlige eller diffuse. Med AI bliver konsekvenserne synlige med det samme, fordi modellen bogstaveligt talt gentager rodet tilbage til dig, ofte i en form der ser overbevisende og autoritativ ud.",
      },
      {
        heading: "Sådan samler du de to",
        body: "Løsningen er sjældent endnu et governance-dokument eller et nyt udvalg. Det er at placere AI-governance som en udvidelse af den eksisterende EA-funktion, ikke som et parallelt spor. Det betyder konkret: samme risikoklassificeringsmodel for AI-systemer som for øvrige IT-systemer, samme dataejerskabsstruktur, og en Enterprise Arkitekt med reelt mandat til at sige nej, både til nye systemer og til nye AI-initiativer der ikke kan dokumentere deres dataforudsætninger. Hos We Lead Projects hjælper vi virksomheder med præcis den øvelse: at bygge AI-governance ind i det EA-fundament der allerede findes, eller etablere det fra bunden hvis det ikke gør. Kontakt os for en uforpligtende samtale om, hvor jeres organisation står i dag.",
      },
    ],
    sources: [
      { label: "The Open Group: TOGAF Standard", url: "https://www.opengroup.org/togaf" },
      { label: "EU AI Act: Europa-Kommissionens regulering af AI", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { label: "Gartner: AI Governance", url: "https://www.gartner.com/en/information-technology/glossary/ai-governance" },
    ],
  },

  // ─── ARTIKEL 6 — EN ──────────────────────────────────────────────────────
  {
    slug: "ai-governance-versus-ea-governance",
    lang: "en",
    category: "Enterprise Architecture",
    title: "AI Governance vs. EA Governance",
    description:
      "Most organisations treat AI governance as a new discipline separate from Enterprise Architecture. That is a costly mistake. Here is why, and how the two should connect.",
    date: "August 2026",
    readingMinutes: 7,
    intro:
      "Most organisations talk about AI governance and Enterprise Architecture governance as if they were two separate initiatives. One sits with legal and compliance. The other sits with IT and architecture. The problem is that AI systems are architecture. They have interfaces, dependencies, and data lineage just like everything else in the system landscape. When the two disciplines do not talk to each other, the organisation ends up with either a legally watertight strategy that is technically incoherent, or a technically solid solution that never survives a compliance review.",
    sections: [
      {
        heading: "AI governance is not a new discipline",
        body: "Most organisations treat AI governance as something that must be built from scratch by legal and compliance. But risk classification, data ownership, and dependency mapping are exactly what Enterprise Architecture should already have in place. The problem is not that AI requires an entirely new form of governance. It is that EA governance in many organisations was never taken seriously enough to be extended to cover it. When AI governance emerges as a standalone initiative instead of an extension of existing EA governance, the organisation reinvents a process that partly already exists, just under a new name with a new team.",
      },
      {
        heading: "Static systems versus systems that change themselves",
        body: "An ERP system behaves the way it was built to, until someone actively changes the code. An AI model can change behaviour without anyone touching it, through retraining, model drift, or simply more data over time. Traditional EA governance is checkpoint-based: an architecture gets approved at a review, and everyone moves on to the next initiative. AI requires continuous governance, because the model's output today does not necessarily reflect its output six months from now. Most organisations' governance model, including their EA practice, is simply not built to handle that difference.",
      },
      {
        heading: "Two silos, no owner",
        body: "The AI governance conversation typically happens in the boardroom alongside legal and compliance. Enterprise Architecture sits under the CTO or IT director and understands the actual system landscape, the data flows, and the technical dependencies. The two groups rarely talk to each other on any fixed cadence. The result is an AI strategy that is either legally watertight and technically incoherent, or technically solid and legally exposed. Neither holds up in practice, and both are expensive to fix afterwards.",
      },
      {
        heading: "Governance that arrives too late",
        body: "Governance is by nature forward looking: assess before you build, not after. But in most organisations, AI governance only emerges after someone has already connected a language model to an internal system or a customer-facing product. That is the reverse of how Enterprise Architecture has always worked. The symptom of AI governance not being an integrated part of EA from the start is that it consistently arrives too late to prevent anything, and is instead used to clean up after decisions that have already been made.",
      },
      {
        heading: "Data governance is not a new discovery",
        body: "Many AI governance frameworks talk about data quality, data lineage, and access control as if these were new insights born from the AI wave. They are not. This is data governance, a core EA discipline for years, which many organisations never prioritised highly enough because the consequences of poor data quality were often invisible or diffuse. With AI, the consequences become visible immediately, because the model literally reflects the mess straight back at you, often in a form that looks convincing and authoritative.",
      },
      {
        heading: "How to bring the two together",
        body: "The solution is rarely another governance document or a new committee. It is placing AI governance as an extension of the existing EA function, not as a parallel track. Concretely, that means: the same risk classification model for AI systems as for other IT systems, the same data ownership structure, and an Enterprise Architect with real authority to say no, both to new systems and to new AI initiatives that cannot document their data prerequisites. At We Lead Projects, we help organisations do exactly this: build AI governance into the EA foundation that already exists, or establish it from scratch if it does not. Contact us for an informal conversation about where your organisation stands today.",
      },
    ],
    sources: [
      { label: "The Open Group: TOGAF Standard", url: "https://www.opengroup.org/togaf" },
      { label: "EU AI Act: European Commission", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { label: "Gartner: AI Governance", url: "https://www.gartner.com/en/information-technology/glossary/ai-governance" },
    ],
  },

  // ─── ARTIKEL 7 — DA ──────────────────────────────────────────────────────
  {
    slug: "enterprise-arkitektur-guide",
    lang: "da",
    category: "Enterprise Architecture",
    title: "Hvad er enterprise arkitektur? Fra strategi til it-eksekvering",
    description:
      "Lær hvordan enterprise arkitektur bygger bro mellem forretningsstrategi og it. Få en trin-for-trin guide, indsigt i TOGAF og AI-governance fra We Lead Projects.",
    date: "August 2026",
    readingMinutes: 10,
    intro:
      "Mange it-projekter fejler, fordi der mangler en rød tråd mellem ledelsens visioner og den tekniske virkelighed. Her træder en veldefineret enterprise arkitektur ind som løsningen, idet den skaber en struktureret plan for organisationens nuværende og fremtidige it-landskab. Frem for blot at fokusere på servere og software sikrer arkitekturen, at alle teknologiske investeringer understøtter forretningens overordnede mål direkte.",
    sections: [
      {
        heading: "Hvad enterprise arkitektur betyder i praksis",
        body: "Hos We Lead Projects arbejder vi dagligt med at bygge bro mellem strategi og drift, når virksomheder har brug for hjælp til at navigere i komplekse it-transformationer. Man kan betragte enterprise arkitektur som byggeplanen for hele virksomhedens digitale fundament. Jonkers (2006) definerer disciplinen som en plan for systematisk at kortlægge en organisations nuværende eller fremtidige miljø, hvilket styrer it-investeringer og oversætter forretningsstrategier til konkrete teknologiske løsninger. Moderne krav til kunstig intelligens og agil udvikling ændrer konstant måden, vi arbejder med it-strukturer på. Derfor har organisationer brug for praktiske, håndgribelige trin til at implementere en succesfuld arkitektur i hverdagen.",
      },
      {
        heading: "Forstå fundamentet i enterprise arkitektur",
        body: "Kernen i disciplinen er at skabe et klart overblik. Ifølge Wikipedia bygger arbejdet på fire centrale søjler: strategiforståelse, forretningsforståelse (processer og information), teknologiforståelse (infrastruktur) og forandringsforståelse (it-governance). Når disse fire elementer spiller sammen, får ledelsen det nødvendige grundlag for at træffe informerede beslutninger om fremtidige investeringer. Gartner-analytikerne Brian Burke og Betsy Burton argumenterer for, at arkitekturarbejdet primært skal producere materiale til forretningens beslutningstagere for at drive organisatorisk forandring. Arkitekter bør undgå et ensidigt fokus på it-omkostningsreduktion og i stedet vise, hvordan ny teknologi skaber forretningsmuligheder eller forbedrer kundeoplevelsen. Succes kræver, at organisationen har de rette kompetencer og den rette styring på plads.",
      },
      {
        heading: "Forskelle mellem offentlig og privat sektor",
        body: "Implementeringen afhænger i høj grad af branchen. Forskning fra Kristian Hjort-Madsen, tidligere kontorchef i Finansministeriet, viser tydelige forskelle i motivationen bag arkitekturarbejdet. Kommercielle organisationer bruger primært strukturen til at tilpasse sig skiftende markedsforhold og opnå konkurrencefordele hurtigt. Offentlige myndigheder bruger derimod arkitekturen til at understøtte borgernes behov og imødekomme kravene til en digitaliseret økonomi. Her ligger fokus ofte på lovkrav, datasikkerhed og tværgående integration mellem forskellige offentlige systemer. Uanset sektoren er målet at skabe sammenhæng. Vores erfaring viser, at både tele-, finans- og den offentlige sektor har brug for en klar struktur for at forhindre spildte ressourcer og fejlslagne projekter.",
      },
      {
        heading: "De mest anvendte frameworks til enterprise arkitektur",
        body: "Et framework giver arkitekten et fælles sprog og en standardiseret metode til at beskrive virksomheden. Der findes flere anerkendte modeller på markedet, og valget afhænger af organisationens modenhed samt specifikke behov. Forskning viser, at brugen af standardiserede modelleringspraksisser varierer massivt i kompleksitet. Nogle virksomheder klarer sig med simple diagrammer, mens andre bygger omfattende modeller med tusindvis af elementer.",
      },
      {
        heading: "TOGAF: The Open Group Architecture Framework",
        body: "TOGAF er det mest udbredte framework globalt, primært fordi det tilbyder en detaljeret metode kaldet Architecture Development Method (ADM). Denne metode guider arkitekten trin for trin gennem processen med at bygge, vedligeholde og ændre en arkitektur, så den altid stemmer overens med forretningens overordnede mål.",
      },
      {
        heading: "Zachman Framework",
        body: "I modsætning til procesmodeller er Zachman Framework et ontologisk skema, der fungerer som et matrix-system til at organisere arkitektoniske artefakter som dokumenter, modeller og diagrammer. Systemet tvinger organisationen til at overveje alle perspektiver og dækker alt fra direktørens overordnede vision til programmørens detaljerede kode.",
      },
      {
        heading: "ArchiMate",
        body: "ArchiMate er et visuelt modelleringssprog, som arkitekter ofte bruger i kombination med TOGAF. Det giver et standardiseret sæt af symboler til at beskrive forretningsprocesser, applikationer og teknologiinfrastruktur. Ved at bruge ArchiMate bliver det markant nemmere at kommunikere komplekse sammenhænge til interessenter uden teknisk baggrund.",
      },
      {
        heading: "Forbindelsen mellem traditionelle frameworks og agile metoder",
        body: "Moderne it-ledelse skal ofte forene den planlægningsdrevne enterprise arkitektur med agile udviklingsmetoder som Scrum og SAFe. Traditionelle frameworks som TOGAF kan virke langsomme i en verden, hvor software opdateres flere gange om dagen via DevOps-pipelines. Løsningen er at tilpasse arkitekturen, så arkitekten går fra at være en rigid kontrolinstans til at agere rådgiver. Denne rådgiver udstikker retningslinjer og principper, som de agile teams arbejder indenfor. Denne tilgang kaldes agil arkitektur. Den definerer de faste rammer for sikkerhedskrav og integrationer, samtidig med at den lader de enkelte teams træffe de lokale teknologiske valg. Hos We Lead Projects er vi metodeneutrale. Vi ved, at valget mellem agile, waterfall eller hybrid altid afhænger af projektets specifikke risikoprofil.",
      },
      {
        heading: "Mål organisationens modenhed med ACMM",
        body: "For at forbedre din it-struktur skal du først kende din nuværende tilstand. Architecture Capability Maturity Model (ACMM), som er udviklet af det amerikanske handelsministerium, er et fremragende værktøj til at evaluere en organisations modenhed inden for it-arkitektur. ACMM vurderer modenheden på en skala fra 0 (ingen arkitektur) til 5 (optimeret og kontinuerligt forbedret arkitektur) ved at kigge på elementer som ledelsesopbakning, dokumentation, processer og integration. En grundig ACMM-vurdering hjælper virksomheden med at identificere svage punkter og lægge en realistisk plan for fremtidige forbedringer. Manglende modenhed forårsager ofte fejlslagne projekter.",
      },
      {
        heading: "Trin-for-trin guide: start et enterprise arkitektur-program",
        body: "Mange virksomheder kæmper med at omsætte teori til praksis. At bygge en arkitekturfunktion fra bunden kræver en struktureret tilgang, der flytter organisationen fra dens nuværende tilstand (as-is) til den ønskede fremtidige tilstand (to-be). Første trin er at definere forretningens mål, da arkitekturprogrammet skal løse konkrete problemer som at reducere time-to-market eller forbedre datasikkerheden. Næste trin er at kortlægge det nuværende it-landskab for at få et præcist overblik over eksisterende systemer, integrationer og dataflow. Tredje trin er at designe målbilledet, hvor du definerer den fremtidige arkitektur, som understøtter forretningens strategi. Fjerde trin er at udarbejde et roadmap, der beskriver de specifikke projekter og ændringer, der skal implementeres for at nå målbilledet. Det sidste trin er at etablere governance ved at opsætte klare regler og processer for, hvordan nye it-løsninger godkendes og integreres i fremtiden.",
      },
      {
        heading: "Kunstig intelligens kræver en stærk enterprise arkitektur",
        body: "Implementeringen af kunstig intelligens er en massiv teknologisk forandring, der kræver høj datakvalitet, klar governance og en solid infrastruktur. Her skaber enterprise arkitektur det nødvendige fundament for at indfri disse krav. Hos We Lead Projects tilbyder vi specialiserede AI-EA Assessments, der varer 4 til 8 uger. Vi kortlægger virksomhedens AI-aktiver og etablerer governance-rammer for at sikre overholdelse af EU AI Act og GDPR, hvorefter vi udvikler realistiske roadmaps. Ved at integrere AI i de eksisterende TOGAF-baserede arkitekturlag sikrer vi, at teknologien løser konkrete forretningsproblemer frem for blot at være et prestigeprojekt.",
      },
      {
        heading: "Uddannelse og certificering som arkitekt i Danmark",
        body: "Efterspørgslen på dygtige enterprise arkitekter er høj i Danmark, og mange it-professionelle tager en formel certificering eller videreuddannelse for at sikre et højt fagligt niveau. De tre mest anerkendte udbydere i Danmark er Teknologisk Institut, Aarhus BSS og Dansk IT. Teknologisk Institut tilbyder en Enterprise Architect Master-certificering med fokus på praktisk anvendelse af arkitekturprincipper i danske virksomheder. Aarhus BSS udbyder en Master i IT med specialisering i Enterprise Architecture Management, som kombinerer akademisk tyngde med forretningsforståelse. Dansk IT tilbyder anerkendte certificeringer, der validerer arkitektens kompetencer nationalt. Priser, varighed og det forventede afkast varierer betydeligt mellem uddannelserne. En kort certificering kan ofte gennemføres på få uger, mens en fuld master strækker sig over flere år som deltidsstudie. Afkastet for virksomheden viser sig gennem færre fejlslagne it-projekter og en hurtigere eksekvering af forretningsstrategien. Vores eget team har over 125 års samlet erfaring, og vores Managing Partner, Brian P.N. Tofft, har mere end 30 års erfaring i branchen.",
      },
      {
        heading: "Hvad er forskellen på en it-arkitekt og en enterprise arkitekt?",
        body: "Mens en it-arkitekt fokuserer på specifikke systemer, softwareløsninger eller infrastruktur, har en enterprise arkitekt et bredere fokus på hele organisationen. Enterprise arkitekten sikrer, at it-strategien understøtter forretningsstrategien, så alle systemer arbejder sammen mod et fælles mål.",
      },
      {
        heading: "Hvor lang tid tager det at etablere en arkitekturfunktion?",
        body: "Tidsrammen afhænger af organisationens størrelse og modenhed. En grundlæggende kortlægning og etablering af de første principper kan gøres på få måneder. At opbygge en fuldt moden funktion på niveau 5 på ACMM-skalaen er dog en flerårig proces, der kræver løbende tilpasning.",
      },
      {
        heading: "Er TOGAF relevant for små og mellemstore virksomheder?",
        body: "Ja, men det kræver tilpasning. SMV'er behøver ikke implementere hele TOGAF-metoden, men kan udvælge de dele af rammeværket, der giver mest værdi. Det kan for eksempel være at skabe et overblik over applikationsporteføljen eller definere klare principper for indkøb af ny software.",
      },
      {
        heading: "Bindeleddet mellem strategi og drift",
        body: "En stærk enterprise arkitektur er det nødvendige bindeled mellem ledelsens strategiske ambitioner og it-afdelingens daglige drift. Uden dette bindeled risikerer virksomheden at spilde ressourcer på teknologi, der mangler forretningsværdi. Hos We Lead Projects står vi klar med erfarne konsulenter, som kan hjælpe jer med at etablere et solidt fundament, uanset om I står over for en klassisk systemudskiftning eller en kompleks AI-implementering.",
      },
    ],
    sources: [
      { label: "The Open Group: TOGAF Standard", url: "https://www.opengroup.org/togaf" },
      { label: "Gartner: Enterprise Architecture", url: "https://www.gartner.com/en/information-technology/glossary/enterprise-architecture-ea" },
      { label: "Wikipedia: Enterprise Architecture", url: "https://en.wikipedia.org/wiki/Enterprise_architecture" },
    ],
  },

  // ─── ARTIKEL 7 — EN ──────────────────────────────────────────────────────
  {
    slug: "enterprise-architecture-guide",
    lang: "en",
    category: "Enterprise Architecture",
    title: "What Is Enterprise Architecture? From Strategy to IT Execution",
    description:
      "Learn how enterprise architecture bridges business strategy and IT. Get a step-by-step guide, insight into TOGAF, and AI governance from We Lead Projects.",
    date: "August 2026",
    readingMinutes: 10,
    intro:
      "Many IT projects fail because there is no clear thread connecting leadership's vision to technical reality. This is where a well-defined enterprise architecture becomes the solution, creating a structured plan for an organisation's current and future IT landscape. Rather than focusing solely on servers and software, architecture ensures that every technology investment directly supports the business's overarching goals.",
    sections: [
      {
        heading: "What enterprise architecture means in practice",
        body: "At We Lead Projects, we work daily to bridge strategy and operations when companies need help navigating complex IT transformations. You can think of enterprise architecture as the blueprint for a company's entire digital foundation. Jonkers (2006) defines the discipline as a plan for systematically mapping an organisation's current or future environment, which guides IT investment and translates business strategy into concrete technological solutions. Modern demands from artificial intelligence and agile development constantly change how we work with IT structures. Organisations therefore need practical, tangible steps to implement a successful architecture in everyday operations.",
      },
      {
        heading: "Understanding the foundation of enterprise architecture",
        body: "The core of the discipline is creating a clear overview. According to Wikipedia, the work rests on four central pillars: strategy understanding, business understanding (processes and information), technology understanding (infrastructure), and change understanding (IT governance). When these four elements work together, leadership gains the necessary foundation for making informed decisions about future investments. Gartner analysts Brian Burke and Betsy Burton argue that architecture work should primarily produce material for business decision-makers to drive organisational change. Architects should avoid a one-sided focus on IT cost reduction and instead show how new technology creates business opportunities or improves the customer experience. Success requires the organisation to have the right competencies and the right governance in place.",
      },
      {
        heading: "Differences between the public and private sector",
        body: "Implementation depends heavily on the sector. Research from Kristian Hjort-Madsen, a former head of office at the Danish Ministry of Finance, shows clear differences in the motivation behind architecture work. Commercial organisations primarily use the framework to adapt to shifting market conditions and gain competitive advantage quickly. Public authorities, by contrast, use architecture to support citizens' needs and meet the demands of a digitalised economy, with a focus on legal requirements, data security, and cross-cutting integration between different public systems. Regardless of sector, the goal is coherence. Our experience shows that the telecom, finance, and public sectors alike need a clear structure to prevent wasted resources and failed projects.",
      },
      {
        heading: "The most widely used enterprise architecture frameworks",
        body: "A framework gives the architect a shared language and a standardised method for describing the enterprise. Several recognised models exist on the market, and the choice depends on the organisation's maturity and specific needs. Research shows that the use of standardised modelling practices varies enormously in complexity. Some companies manage with simple diagrams, while others build extensive models with thousands of elements.",
      },
      {
        heading: "TOGAF: The Open Group Architecture Framework",
        body: "TOGAF is the most widely used framework globally, primarily because it offers a detailed method called the Architecture Development Method (ADM). This method guides the architect step by step through the process of building, maintaining, and changing an architecture so that it consistently aligns with the business's overarching goals.",
      },
      {
        heading: "Zachman Framework",
        body: "Unlike process models, the Zachman Framework is an ontological schema that functions as a matrix system for organising architectural artefacts such as documents, models, and diagrams. The system forces the organisation to consider every perspective, covering everything from the executive's overarching vision to the programmer's detailed code.",
      },
      {
        heading: "ArchiMate",
        body: "ArchiMate is a visual modelling language that architects often use in combination with TOGAF. It provides a standardised set of symbols for describing business processes, applications, and technology infrastructure. Using ArchiMate makes it significantly easier to communicate complex relationships to stakeholders without a technical background.",
      },
      {
        heading: "Connecting traditional frameworks with agile methods",
        body: "Modern IT leadership must often reconcile planning-driven enterprise architecture with agile development methods such as Scrum and SAFe. Traditional frameworks like TOGAF can seem slow in a world where software is updated multiple times a day through DevOps pipelines. The solution is to adapt the architecture so the architect moves from being a rigid control function to acting as an advisor. This advisor sets out the guidelines and principles within which agile teams operate, an approach known as agile architecture. It defines the fixed boundaries for security requirements and integrations while letting individual teams make local technology choices. At We Lead Projects, we are method-neutral. We know that the choice between agile, waterfall, or hybrid always depends on the project's specific risk profile.",
      },
      {
        heading: "Measuring organisational maturity with ACMM",
        body: "To improve your IT structure, you first need to know your current state. The Architecture Capability Maturity Model (ACMM), developed by the US Department of Commerce, is an excellent tool for evaluating an organisation's maturity in IT architecture. ACMM assesses maturity on a scale from 0 (no architecture) to 5 (optimised and continuously improved architecture) by examining elements such as leadership support, documentation, processes, and integration. A thorough ACMM assessment helps a company identify weak points and lay out a realistic plan for future improvements. A lack of maturity is a frequent cause of failed projects.",
      },
      {
        heading: "Step-by-step guide: starting an enterprise architecture programme",
        body: "Many companies struggle to translate theory into practice. Building an architecture function from scratch requires a structured approach that moves the organisation from its current state (as-is) to its desired future state (to-be). The first step is defining the business's goals, since the architecture programme must solve concrete problems such as reducing time-to-market or improving data security. The next step is mapping the current IT landscape to gain a precise overview of existing systems, integrations, and data flows. The third step is designing the target picture, defining the future architecture that supports the business strategy. The fourth step is developing a roadmap that describes the specific projects and changes needed to reach the target picture. The final step is establishing governance by setting up clear rules and processes for how new IT solutions are approved and integrated going forward.",
      },
      {
        heading: "Artificial intelligence requires a strong enterprise architecture",
        body: "Implementing artificial intelligence is a massive technological shift that requires high data quality, clear governance, and solid infrastructure. This is where enterprise architecture provides the necessary foundation to meet these demands. At We Lead Projects, we offer specialised AI-EA assessments lasting four to eight weeks. We map the company's AI assets and establish governance frameworks to ensure compliance with the EU AI Act and GDPR, then develop realistic roadmaps. By integrating AI into the existing TOGAF-based architecture layers, we ensure the technology solves concrete business problems rather than simply being a prestige project.",
      },
      {
        heading: "Education and certification as an architect in Denmark",
        body: "Demand for skilled enterprise architects is high in Denmark, and many IT professionals pursue formal certification or further education to ensure a high level of expertise. The three most recognised providers in Denmark are Teknologisk Institut, Aarhus BSS, and Dansk IT. Teknologisk Institut offers an Enterprise Architect Master certification focused on the practical application of architecture principles in Danish companies. Aarhus BSS offers a Master's in IT specialising in Enterprise Architecture Management, combining academic depth with business understanding. Dansk IT offers recognised certifications that validate an architect's competencies nationally. Price, duration, and expected return on investment vary significantly between these programmes. A short certification can often be completed in a few weeks, while a full master's degree spans several years as a part-time study. The return for the company shows up as fewer failed IT projects and faster execution of business strategy. Our own team has more than 125 years of combined experience, and our Managing Partner, Brian P.N. Tofft, has more than 30 years of experience in the industry.",
      },
      {
        heading: "What is the difference between an IT architect and an enterprise architect?",
        body: "While an IT architect focuses on specific systems, software solutions, or infrastructure, an enterprise architect has a broader focus on the entire organisation. The enterprise architect ensures that IT strategy supports business strategy, so all systems work together toward a shared goal.",
      },
      {
        heading: "How long does it take to establish an architecture function?",
        body: "The timeframe depends on the organisation's size and maturity. A basic mapping exercise and establishment of the first principles can be done in a few months. Building a fully mature function at level 5 on the ACMM scale, however, is a multi-year process that requires ongoing adaptation.",
      },
      {
        heading: "Is TOGAF relevant for small and medium-sized enterprises?",
        body: "Yes, but it requires adaptation. SMEs do not need to implement the entire TOGAF method but can select the parts of the framework that deliver the most value, such as creating an overview of the application portfolio or defining clear principles for purchasing new software.",
      },
      {
        heading: "The link between strategy and operations",
        body: "A strong enterprise architecture is the essential link between leadership's strategic ambitions and IT's day-to-day operations. Without this link, a company risks wasting resources on technology that lacks business value. At We Lead Projects, our experienced consultants are ready to help you establish a solid foundation, whether you are facing a classic system replacement or a complex AI implementation.",
      },
    ],
    sources: [
      { label: "The Open Group: TOGAF Standard", url: "https://www.opengroup.org/togaf" },
      { label: "Gartner: Enterprise Architecture", url: "https://www.gartner.com/en/information-technology/glossary/enterprise-architecture-ea" },
      { label: "Wikipedia: Enterprise Architecture", url: "https://en.wikipedia.org/wiki/Enterprise_architecture" },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByLang(lang: "da" | "en"): Article[] {
  return articles.filter((a) => a.lang === lang);
}
