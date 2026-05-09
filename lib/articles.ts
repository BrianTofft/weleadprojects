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
      "Statistikkerne er ikke opmuntrende: op mod 70 % af alle IT-projekter overskrider budget eller tidsplan — og mange bliver aldrig gennemført som planlagt. Det sker sjældent pludseligt. Det starter med små signaler, der ignoreres lidt for længe. Her er de fem advarselstegn du bør handle på med det samme.",
    sections: [
      {
        heading: "1. Scope creep — opgaverne vokser uden kontrol",
        body: "Scope creep er den stille projektkiller. Det begynder med en lille ekstra funktion her, et udvidet krav der — og pludselig er projektet dobbelt så stort som det var planlagt til. Tegnet er klart: opgaver tilføjes løbende uden at påvirke budget, tidsplan eller ressourceallokering. Løsningen er en formel change request-proces og et stramt scope-register, der revideres ved hver milepæl.",
      },
      {
        heading: "2. Interessenter der forsvinder fra møderne",
        body: "Når nøgleinteressenter begynder at melde afbud til statusmøder, er det et signal om, at projektet har mistet deres engagement — eller tillid. Interessentstyring er ikke en engangsøvelse ved projektets start. Det kræver løbende kommunikation, synlige resultater og en klar fortælling om værdien af projektet. Identifikér de kritiske stemmer tidligt og hold dem tæt.",
      },
      {
        heading: "3. Beslutningerne hober sig op",
        body: "Et sundt projekt træffer beslutninger hurtigt. Hvis du har en liste af åbne beslutninger der vokser uge for uge, er det tegn på uklar ansvarsfordeling eller manglende mandat hos projektlederen. Hvert ubesvaret spørgsmål er en forsinkelse i gang. En RACI-model og klare eskaleringsregler er det første skridt mod at genoprette fremdriften.",
      },
      {
        heading: "4. Budgetadvarsler der starter som 'uvæsentlige'",
        body: "En budgetoverskridelse på 5 % virker lille — men det er sjældent det forbliver. Erfaringen viser, at tidlige budgetsignaler ofte er symptomer på dybere problemer: underestimerede opgaver, skjult scope creep eller ressourcer der bruges mindre effektivt end planlagt. Indfør en fast budgetopfølgning ved hver milepæl og lav en konsekvensanalyse ved enhver afvigelse.",
      },
      {
        heading: "5. Teamet mangler fælles forståelse af målet",
        body: "Spørg tre tilfældige teammedlemmer hvad projektets primære succeskriterium er. Får du tre forskellige svar, har projektet et grundlæggende problem. Et veldefineret projektcharter med klare mål, succeskriterier og gevinstrealiseringsplan er ikke bureaukrati — det er det fundament alt andet hviler på.",
      },
      {
        heading: "Hvad gør man, når man ser tegnene?",
        body: "Det vigtigste er at handle hurtigt og transparent. En struktureret sundhedstjek af projektet — scope, budget, interessenter, risici og teamdynamik — giver et klart billede af situationen. Hos We Lead Projects gennemfører vi projektreviews og bistår med at genoprette fremdrift, uanset om projektet er i sin indledende fase eller allerede under eksekvering.",
      },
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
      "The statistics are sobering: up to 70% of all IT projects exceed budget or schedule — and many are never completed as planned. This rarely happens suddenly. It starts with small signals that are ignored a little too long. Here are five warning signs you should act on immediately.",
    sections: [
      {
        heading: "1. Scope creep — requirements keep growing",
        body: "Scope creep is the silent project killer. It starts with a small extra feature here, an extended requirement there — and suddenly the project is twice the size originally planned. The sign is clear: tasks are continuously added without affecting budget, timeline, or resource allocation. The solution is a formal change request process and a tightly managed scope register reviewed at every milestone.",
      },
      {
        heading: "2. Stakeholders disappearing from meetings",
        body: "When key stakeholders start skipping status meetings, it signals a loss of engagement — or trust — in the project. Stakeholder management is not a one-time exercise at project kickoff. It requires ongoing communication, visible results, and a clear narrative about the project's value. Identify critical voices early and keep them close.",
      },
      {
        heading: "3. Decisions piling up",
        body: "A healthy project makes decisions quickly. If you have a growing list of open decisions week after week, it signals unclear accountability or insufficient authority for the project manager. Every unanswered question is a delay in progress. A RACI model and clear escalation rules are the first step toward restoring momentum.",
      },
      {
        heading: "4. Budget warnings that start as 'minor'",
        body: "A 5% budget overrun seems small — but it rarely stays that way. Experience shows that early budget signals are often symptoms of deeper issues: underestimated tasks, hidden scope creep, or resources being used less efficiently than planned. Implement fixed budget reviews at each milestone and conduct an impact analysis for any variance.",
      },
      {
        heading: "5. The team lacks a shared understanding of the goal",
        body: "Ask three random team members what the project's primary success criterion is. If you get three different answers, the project has a fundamental problem. A well-defined project charter with clear objectives, success criteria, and a benefits realisation plan is not bureaucracy — it is the foundation on which everything else rests.",
      },
      {
        heading: "What to do when you see the signs",
        body: "The most important thing is to act quickly and transparently. A structured project health check — covering scope, budget, stakeholders, risks, and team dynamics — gives a clear picture of the situation. At We Lead Projects, we conduct project reviews and help restore momentum, whether the project is in its early phase or already in execution.",
      },
    ],
  },

  // ─── ARTIKEL 2 — DA ──────────────────────────────────────────────────────
  {
    slug: "hvad-er-enterprise-architecture",
    lang: "da",
    category: "Enterprise Architecture",
    title: "Hvad er Enterprise Architecture?",
    description:
      "Enterprise Architecture er bindeledet mellem strategi og IT. Forstå hvad EA er, hvornår det er relevant og hvad det kan gøre for din organisation.",
    date: "Marts 2025",
    readingMinutes: 6,
    intro:
      "Mange virksomheder oplever det samme problem: IT-systemer der ikke taler godt sammen, digitale initiativer der kører parallelt uden koordinering, og strategiske beslutninger der tages uden et klart billede af den eksisterende IT-arkitektur. Enterprise Architecture (EA) er disciplinen der løser netop dette — og det er langt mere praktisk end det lyder.",
    sections: [
      {
        heading: "Hvad er Enterprise Architecture?",
        body: "Enterprise Architecture er en struktureret tilgang til at kortlægge og styre sammenhængen mellem en virksomheds forretningsprocesser, data, applikationer og teknisk infrastruktur. Det handler ikke om at tegne flotte diagrammer — det handler om at skabe et fælles sprog og en fælles forståelse, der gør det muligt at træffe bedre beslutninger om IT-investeringer og forandringer.",
      },
      {
        heading: "Fra strategi til IT — og tilbage igen",
        body: "Den vigtigste rolle for EA er at sikre, at IT-initiativer understøtter virksomhedens strategiske mål. Uden denne kobling sker det let, at IT-afdelingen investerer i løsninger der løser tekniske problemer, men ikke forretningsmæssige behov — eller omvendt, at forretningssiden bestiller IT uden at forstå de arkitekturmæssige konsekvenser. En Enterprise Arkitekt fungerer som brobygger mellem de to verdener.",
      },
      {
        heading: "Hvornår har din virksomhed brug for EA?",
        body: "EA er særligt relevant i fire situationer: (1) Du gennemgår en digital transformation eller cloud-migrering. (2) Din IT-portefølje er vokset organisk og er svær at overskue. (3) Du integrerer systemer efter en fusion eller opkøb. (4) Du oplever, at nye IT-projekter regelmæssigt støder på uventede afhængigheder og kompleksiteter. I alle disse tilfælde kan en klar arkitekturvision reducere risiko, omkostninger og tid til markedet markant.",
      },
      {
        heading: "EA i praksis — ikke kun på papir",
        body: "En EA-indsats behøver ikke starte stort. Det vigtigste første skridt er at skabe et overblik: hvilke systemer har vi, hvad bruges de til, hvem ejer dem, og hvordan hænger de sammen? Fra dette udgangspunkt kan man prioritere initiativer, identificere risici og lægge en realistisk teknisk roadmap. Hos We Lead Projects kombinerer vi EA-ekspertise med praktisk projektledelsesbaggrund — fordi arkitektur kun skaber værdi når den kan omsættes til handling.",
      },
      {
        heading: "Fremtidens arkitektur er fleksibel",
        body: "De virksomheder der klarer sig bedst i det digitale landskab er dem, der har bygget en arkitektur der kan tilpasse sig. Det betyder ikke at genopfinde alt fra bunden — det betyder at sikre, at nye systemer og integrationer bygger på et solidt og veldokumenteret fundament. Cloud-native arkitekturer, API-first tilgange og modulære løsningsdesigns er centrale begreber i dette arbejde.",
      },
    ],
  },

  // ─── ARTIKEL 2 — EN ──────────────────────────────────────────────────────
  {
    slug: "what-is-enterprise-architecture",
    lang: "en",
    category: "Enterprise Architecture",
    title: "What Is Enterprise Architecture?",
    description:
      "Enterprise Architecture bridges business strategy and IT. Understand what EA is, when it matters, and what it can do for your organisation.",
    date: "March 2025",
    readingMinutes: 6,
    intro:
      "Many organisations face the same challenge: IT systems that don't communicate well, digital initiatives running in parallel without coordination, and strategic decisions made without a clear picture of the existing IT landscape. Enterprise Architecture (EA) is the discipline that addresses exactly this — and it is far more practical than it sounds.",
    sections: [
      {
        heading: "What is Enterprise Architecture?",
        body: "Enterprise Architecture is a structured approach to mapping and managing the relationships between a company's business processes, data, applications, and technical infrastructure. It is not about drawing elaborate diagrams — it is about creating a shared language and a common understanding that enables better decisions about IT investments and organisational change.",
      },
      {
        heading: "From strategy to IT — and back again",
        body: "The most important role of EA is to ensure that IT initiatives support the company's strategic objectives. Without this alignment, IT departments easily invest in solutions that solve technical problems but not business needs — or conversely, the business side commissions IT without understanding the architectural implications. An Enterprise Architect acts as a bridge between the two worlds.",
      },
      {
        heading: "When does your business need EA?",
        body: "EA is particularly relevant in four situations: (1) You are undergoing a digital transformation or cloud migration. (2) Your IT portfolio has grown organically and is difficult to oversee. (3) You are integrating systems after a merger or acquisition. (4) You regularly find that new IT projects run into unexpected dependencies and complexities. In all these cases, a clear architectural vision can significantly reduce risk, cost, and time to market.",
      },
      {
        heading: "EA in practice — not just on paper",
        body: "An EA initiative does not need to start large. The most important first step is to create an overview: what systems do we have, what are they used for, who owns them, and how do they connect? From this foundation, you can prioritise initiatives, identify risks, and develop a realistic technical roadmap. At We Lead Projects, we combine EA expertise with hands-on project management experience — because architecture only creates value when it can be translated into action.",
      },
      {
        heading: "The architecture of the future is flexible",
        body: "The businesses that thrive in the digital landscape are those that have built an architecture capable of adapting. This does not mean reinventing everything from scratch — it means ensuring that new systems and integrations are built on a solid, well-documented foundation. Cloud-native architectures, API-first approaches, and modular solution designs are central concepts in this work.",
      },
    ],
  },

  // ─── ARTIKEL 3 — DA ──────────────────────────────────────────────────────
  {
    slug: "agile-waterfall-eller-hybrid",
    lang: "da",
    category: "Metoder",
    title: "Agile, Waterfall eller Hybrid — vælg din model",
    description:
      "Valget af projektmodel er en vigtig beslutning. Vi gennemgår fordele og ulemper ved Agile, Waterfall og Hybrid — og hvornår du bør bruge hvilken.",
    date: "Februar 2025",
    readingMinutes: 5,
    intro:
      "\"Vi kører Agile\" er en sætning man hører ofte i dag — men Agile er ikke et universalværktøj. Ligesom en erfaren håndværker vælger det rigtige redskab til opgaven, bør en kompetent projektleder vælge den metode der passer til projektets natur, organisation og risikoniveau.",
    sections: [
      {
        heading: "Waterfall: Struktur og forudsigelighed",
        body: "Waterfall-metoden er lineær og sekventiel: krav defineres fuldt ud inden udvikling starter, og projektet gennemløber faste faser ét trin ad gangen. Det er den rette tilgang når kravene er stabile og veldefinerede, når der er strenge regulatoriske krav til dokumentation, eller når projektet har mange afhængigheder til andre systemer og processer. Eksempler: ERP-implementeringer, compliance-projekter, infrastrukturudskiftninger.",
      },
      {
        heading: "Agile: Fleksibilitet og hurtig feedback",
        body: "Agile-metoder — herunder Scrum og SAFe — arbejder i korte iterationer (sprints) og prioriterer løbende feedback og tilpasning. Det er ideelt til projekter hvor kravene ikke er fuldt kendte fra start, hvor brugerinddragelse er central, eller hvor markedet bevæger sig hurtigt. Agile kræver dog aktive og engagerede interessenter samt en organisation der er parat til løbende forandringer.",
      },
      {
        heading: "Hybrid: Det bedste fra begge verdener",
        body: "I praksis er de fleste komplekse IT-projekter hverken rent Waterfall eller rent Agile. En hybrid tilgang kombinerer den strukturerede planlægning og styring fra Waterfall med den fleksibilitet og iterative udvikling fra Agile. Overordnet projektplan og milepæle styres Waterfall-agtig, mens den egentlige løsningsudvikling kører i agile sprints. Dette er særligt effektivt i større transformationsprojekter med mange interessenter.",
      },
      {
        heading: "Sådan vælger du",
        body: "Tre spørgsmål hjælper dig til det rigtige valg: (1) Er kravene stabile og veldefinerede? Ja → Waterfall eller hybrid. Nej → Agile. (2) Kan organisationen håndtere løbende ændringer? Ja → Agile. Nej → Waterfall. (3) Er der strenge krav til dokumentation og sporbarhed? Ja → Waterfall som minimum for styringslaget. Husk: metoden er et middel, ikke et mål. Det vigtigste er at den tjener projektet — ikke omvendt.",
      },
      {
        heading: "We Lead Projects' tilgang",
        body: "Vi er metodeneutrale. Vi vurderer hvert projekt individuelt og anbefaler den tilgang der passer til netop jeres situation. Vores konsulenter har erfaring med alle tre modeller og kan guide jer — uanset om I er i gang med at vælge model, eller har brug for hjælp til at komme ud af en fastlåst projektmetode.",
      },
    ],
  },

  // ─── ARTIKEL 3 — EN ──────────────────────────────────────────────────────
  {
    slug: "agile-waterfall-or-hybrid",
    lang: "en",
    category: "Methods",
    title: "Agile, Waterfall or Hybrid — Choose Your Model",
    description:
      "Choosing the right project model matters. We break down Agile, Waterfall and Hybrid — pros, cons, and when to use each approach.",
    date: "February 2025",
    readingMinutes: 5,
    intro:
      "\"We run Agile\" is a phrase you hear often today — but Agile is not a universal tool. Just as a skilled craftsman selects the right tool for the job, a competent project manager should choose the method that fits the nature of the project, the organisation, and the risk profile.",
    sections: [
      {
        heading: "Waterfall: Structure and predictability",
        body: "The Waterfall method is linear and sequential: requirements are fully defined before development begins, and the project moves through fixed phases one step at a time. It is the right approach when requirements are stable and well-defined, when there are strict regulatory requirements for documentation, or when the project has many dependencies on other systems and processes. Examples: ERP implementations, compliance projects, infrastructure replacements.",
      },
      {
        heading: "Agile: Flexibility and rapid feedback",
        body: "Agile methods — including Scrum and SAFe — work in short iterations (sprints) and prioritise continuous feedback and adaptation. They are ideal for projects where requirements are not fully known from the start, where user involvement is central, or where the market moves quickly. However, Agile requires active and engaged stakeholders and an organisation ready for continuous change.",
      },
      {
        heading: "Hybrid: The best of both worlds",
        body: "In practice, most complex IT projects are neither purely Waterfall nor purely Agile. A hybrid approach combines the structured planning and governance of Waterfall with the flexibility and iterative development of Agile. The overall project plan and milestones are managed in a Waterfall-like manner, while the actual solution development runs in agile sprints. This is particularly effective in larger transformation projects with many stakeholders.",
      },
      {
        heading: "How to choose",
        body: "Three questions help you make the right choice: (1) Are requirements stable and well-defined? Yes → Waterfall or hybrid. No → Agile. (2) Can the organisation handle continuous change? Yes → Agile. No → Waterfall. (3) Are there strict requirements for documentation and traceability? Yes → Waterfall as a minimum for the governance layer. Remember: the method is a means, not an end. What matters most is that it serves the project — not the other way around.",
      },
      {
        heading: "The We Lead Projects approach",
        body: "We are method-neutral. We assess each project individually and recommend the approach that fits your specific situation. Our consultants have experience with all three models and can guide you — whether you are in the process of selecting a methodology or need help breaking free from a rigid project model.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByLang(lang: "da" | "en"): Article[] {
  return articles.filter((a) => a.lang === lang);
}
