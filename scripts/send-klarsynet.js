const https = require('https');
const fs = require('fs');
const path = require('path');

const apiKey = process.argv[2] || process.env.RESEND_API_KEY;

if (!apiKey || apiKey === 'RESEND_API_KEY_HERE') {
  console.error('Mangler Resend API-nøgle. Angiv som argument: node scripts/send-klarsynet.js re_xxx');
  process.exit(1);
}

const today = new Date().toISOString().split('T')[0];
const issuesPath = path.join(__dirname, '..', 'content', 'klarsynet-issues.json');
const issues = JSON.parse(fs.readFileSync(issuesPath, 'utf8'));
const issue = issues.find(i => i.date === today);

if (!issue) {
  console.log(`Ingen Klarsynet-udgave planlagt for ${today} — springer over. Husk at tilføje næste måneds udgave i content/klarsynet-issues.json.`);
  process.exit(0);
}

console.log(`Sender Klarsynet: ${issue.title} — ${today}`);

const paragraphs = issue.body.split('\n\n').map(p => `<p style="margin:0 0 16px;">${p.replace(/\n/g, '<br>')}</p>`).join('');

const imageHtml = issue.image
  ? `<img src="${issue.image}" alt="" style="width:100%;max-height:300px;object-fit:cover;display:block;border-radius:6px;margin-bottom:20px;">`
  : '';

const html = `
<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
  <div style="background:#1C2544;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="color:white;margin:0;font-size:16px;">Klarsynet — Ny udgave klar</h2>
    <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:12px;">${today} &nbsp;·&nbsp; Klar til at poste på LinkedIn</p>
  </div>
  <div style="border:1px solid #e8e0e0;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
    ${imageHtml}
    <h1 style="font-size:20px;color:#2d1a1a;margin:0 0 20px;">${issue.title}</h1>
    <div style="font-size:14px;line-height:1.8;color:#333;">${paragraphs}</div>
    <p style="margin-top:20px;font-size:13px;color:#888;">
      Link til fuld artikel (dansk): <a href="${issue.articleUrlDa}" style="color:#cc2222;">${issue.articleUrlDa}</a><br>
      ${issue.articleUrlEn ? `Link til fuld artikel (engelsk): <a href="${issue.articleUrlEn}" style="color:#cc2222;">${issue.articleUrlEn}</a>` : ''}
    </p>
  </div>
  <p style="text-align:center;margin-top:12px;font-size:11px;color:#aaa;">We Lead Projects · weleadprojects.com</p>
</div>`;

const textBody = `${issue.title}\n\n${issue.body}\n\nLink (dansk): ${issue.articleUrlDa}\n${issue.articleUrlEn ? `Link (engelsk): ${issue.articleUrlEn}` : ''}`;

const payload = JSON.stringify({
  from: 'We Lead Projects <noreply@weleadprojects.com>',
  to: ['bt@weleadprojects.com'],
  subject: `Klarsynet — ${issue.title}`,
  text: textBody,
  html,
});

const req = https.request({
  hostname: 'api.resend.com',
  path: '/emails',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
  },
}, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('Sendt:', data);
    } else {
      console.error('Fejl fra Resend:', res.statusCode, data);
      process.exit(1);
    }
  });
});

req.on('error', e => { console.error('Netværksfejl:', e.message); process.exit(1); });
req.write(payload);
req.end();
