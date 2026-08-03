const { Document, Packer, Paragraph, TextRun, BorderStyle } = require("docx");
const fs = require("fs");

const posts = JSON.parse(fs.readFileSync("content/linkedin-posts.json", "utf8"));

const DARK = "2D1A1A";
const TYPE_COLORS = { Observation: "1C6B3A", Provokation: "CC2222", "Spørgsmål": "1C2544" };
const dayNames = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"];
const monthNames = ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"];

const children = [];

children.push(
  new Paragraph({ spacing: { before: 0, after: 160 }, children: [new TextRun({ text: "LinkedIn Posts", bold: true, size: 52, color: DARK })] }),
  new Paragraph({ spacing: { before: 0, after: 80 },  children: [new TextRun({ text: "We Lead Projects · August–September 2026", size: 22, color: "888888" })] }),
  new Paragraph({ spacing: { before: 0, after: 600 }, children: [new TextRun({ text: "14 indlæg · Mandag / Onsdag / Fredag", size: 20, color: "AAAAAA" })] })
);

posts.forEach((post, i) => {
  const d = new Date(post.date);
  const label = `${dayNames[d.getDay()]} ${d.getDate()}. ${monthNames[d.getMonth()]} ${d.getFullYear()}`;

  if (i > 0) {
    children.push(new Paragraph({
      spacing: { before: 400, after: 400 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "E8E0E0" } },
      children: [],
    }));
  }

  children.push(new Paragraph({
    spacing: { before: 200, after: 100 },
    children: [
      new TextRun({ text: `${i + 1}.  ${label}    `, bold: true, size: 22, color: DARK }),
      new TextRun({ text: `[${post.type}]`, bold: true, size: 18, color: TYPE_COLORS[post.type] || DARK }),
    ],
  }));

  post.content.split("\n").forEach((line) => {
    children.push(new Paragraph({
      spacing: { before: 0, after: 140 },
      children: [new TextRun({ text: line, size: 20, color: "333333" })],
    }));
  });
});

const doc = new Document({
  sections: [{
    properties: { page: { margin: { top: 1200, bottom: 1200, left: 1200, right: 1200 } } },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("linkedin-posts-WLP.docx", buf);
  console.log("Gemt: linkedin-posts-WLP.docx (" + buf.length + " bytes)");
});
