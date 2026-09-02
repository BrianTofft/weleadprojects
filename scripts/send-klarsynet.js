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
<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#ffffff;">
  <div style="padding:28px 28px 20px;border-bottom:3px solid #cc2222;">
    <div style="margin-bottom:6px;">
      <span style="background:#cc2222;color:white;font-size:10px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;">Klarsynet</span>
    </div>
    <p style="margin:0;font-size:12px;color:#999;">${today} &nbsp;·&nbsp; Klar til at poste på LinkedIn</p>
  </div>
  <div style="padding:28px;background:#f7f5f5;">
    ${imageHtml}
    <h1 style="font-size:20px;color:#2d1a1a;margin:0 0 20px;">${issue.title}</h1>
    <div style="font-size:14px;line-height:1.9;color:#2d1a1a;">${paragraphs}</div>
    ${issue.linkedinPost ? `
    <div style="margin-top:24px;padding:16px;background:#f7f5f5;border-left:3px solid #cc2222;border-radius:0 6px 6px 0;">
      <p style="margin:0 0 8px;font-size:11px;font-weight:bold;color:#cc2222;text-transform:uppercase;letter-spacing:0.05em;">LinkedIn-opslag (copy-paste)</p>
      <p style="margin:0;font-size:13px;line-height:1.7;color:#2d1a1a;white-space:pre-line;">${issue.linkedinPost}</p>
    </div>` : ''}
    <p style="margin-top:20px;font-size:13px;color:#888;">
      Link til fuld artikel (dansk): <a href="${issue.articleUrlDa}" style="color:#cc2222;">${issue.articleUrlDa}</a><br>
      ${issue.articleUrlEn ? `Link til fuld artikel (engelsk): <a href="${issue.articleUrlEn}" style="color:#cc2222;">${issue.articleUrlEn}</a>` : ''}
    </p>
  </div>
  <div style="padding:16px 28px;border-top:1px solid #e8e0e0;">
    <p style="margin:0;font-size:11px;color:#bbb;text-align:center;">We Lead Projects &nbsp;·&nbsp; weleadprojects.com</p>
  </div>
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
