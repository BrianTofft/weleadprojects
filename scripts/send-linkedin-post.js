const https = require('https');
const fs = require('fs');
const path = require('path');

const apiKey = process.argv[2] || process.env.RESEND_API_KEY;

if (!apiKey || apiKey === 'RESEND_API_KEY_HERE') {
  console.error('Mangler Resend API-nøgle. Angiv som argument: node scripts/send-linkedin-post.js re_xxx');
  process.exit(1);
}

const today = new Date().toISOString().split('T')[0];
const postsPath = path.join(__dirname, '..', 'content', 'linkedin-posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
const post = posts.find(p => p.date === today);

if (!post) {
  console.log(`Ingen LinkedIn-indlæg planlagt for ${today} — springer over.`);
  process.exit(0);
}

const postIndex = posts.indexOf(post) + 1;
console.log(`Sender: ${post.type} — ${today} (#${postIndex})`);

// Vedhæft billedet hvis det findes
const imagePath = path.join(__dirname, '..', 'public', `linkedin-post-${postIndex}.png`);
const imageAttachment = fs.existsSync(imagePath)
  ? [{ filename: `linkedin-post-${postIndex}.png`, content: fs.readFileSync(imagePath).toString('base64') }]
  : [];

const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="padding:28px 28px 20px;border-bottom:3px solid #cc2222;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#cc2222;color:white;font-size:10px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;">${post.type}</span>
    </div>
    <p style="margin:0;font-size:12px;color:#999;">${today} &nbsp;·&nbsp; Klar til at poste på LinkedIn</p>
  </div>
  <div style="padding:28px;background:#f7f5f5;white-space:pre-wrap;font-size:14px;line-height:1.9;color:#2d1a1a;">${post.content}</div>
  <div style="padding:16px 28px;border-top:1px solid #e8e0e0;">
    <p style="margin:0;font-size:11px;color:#bbb;text-align:center;">We Lead Projects &nbsp;·&nbsp; weleadprojects.com</p>
  </div>
</div>`;

const payload = JSON.stringify({
  from: 'We Lead Projects <noreply@weleadprojects.com>',
  to: ['bt@weleadprojects.com'],
  subject: `LinkedIn ${post.type} — ${today}`,
  text: post.content,
  html,
  attachments: imageAttachment,
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
