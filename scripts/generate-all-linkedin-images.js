const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const posts = JSON.parse(fs.readFileSync("content/linkedin-posts.json", "utf8"));

const TYPE_COLORS = {
  Observation: { label: "1C6B3A", bg: "navy" },
  Provokation: { label: "CC2222", bg: "navy" },
  "Spørgsmål": { label: "4A6FA5", bg: "navy" },
};

// Key quote lines for each post (last line shown in red)
const quotes = [
  ["ChatGPT er et værktøj.", "En AI-strategi", "er noget andet."],
  ["Lokummet brænder.", "Men det er ikke folk", "der mangler — det er de rigtige."],
  ["Hvad er den dyreste fejl", "du har set i et IT-projekt —", "ikke teknisk, men organisatorisk?"],
  ["EA er et af de mest", "undervurderede", "ledelsesvirkemidler."],
  ["“Vi kører Agile.”", "Det gør I ikke.", "I har Agile-æstetik."],
  ["Hvad tror jeres direktion", "AI gør for jer —", "og hvad sker der faktisk?"],
  ["Den person der sænker projektet", "sidder sjældent", "i projektgruppen."],
  ["“Best practice”", "bruges som erstatning", "for analyse."],
  ["Hvem ejer ansvaret", "for AI-governance", "i jeres virksomhed?"],
  ["Systemlandskabet", "er ikke bygget.", "Det er vokset."],
  ["“Digital transformation”", "er en undskyldning", "for at undgå svære beslutninger."],
  ["Hvem bestemmer", "hvad succes er", "i jeres IT-projekter?"],
  ["Virksomheder ansætter", "projektlederen", "for sent."],
  ["Jeg har stadig ikke fundet", "en god jobtitel", "til det jeg laver."],
];

function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function makeSvg(post, lines, index) {
  const typeColor = TYPE_COLORS[post.type]?.label || "CC2222";
  const d = new Date(post.date);
  const dayNames = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"];
  const monthNames = ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"];
  const dateStr = `${dayNames[d.getDay()]} ${d.getDate()}. ${monthNames[d.getMonth()]}`;

  const fontSize = 58;
  const lineHeight = 82;
  const startY = lines.length === 2 ? 380 : 310;

  const lineElements = lines.map((line, i) => {
    const y = startY + i * lineHeight;
    const color = i === lines.length - 1 ? "#cc2222" : "#ffffff";
    return `<text x="120" y="${y}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="${color}">${esc(line)}</text>`;
  }).join("\n  ");

  return `<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1C2544"/>
      <stop offset="100%" stop-color="#0f1729"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bg)"/>
  <rect x="80" y="80" width="6" height="920" fill="#cc2222" rx="3"/>
  <text x="120" y="148" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#${typeColor}" letter-spacing="5">${esc(post.type.toUpperCase())}</text>
  <text x="120" y="185" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.3)">${esc(dateStr)} · #${index + 1}</text>
  ${lineElements}
  <text x="120" y="980" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="rgba(255,255,255,0.3)">We Lead Projects · weleadprojects.com</text>
</svg>`;
}

async function generateAll() {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const lines = quotes[i];
    const svg = makeSvg(post, lines, i);
    const outPath = `public/linkedin-post-${i + 1}.png`;
    await sharp(Buffer.from(svg)).png().toFile(outPath);
    console.log(`✓ Post ${i + 1}: ${outPath}`);
  }
  console.log("\nAlle 14 billeder genereret.");
}

generateAll().catch(console.error);
