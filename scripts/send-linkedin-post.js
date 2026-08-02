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

console.log(`Sender: ${post.type} — ${today}`);

const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1C2544;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="color:white;margin:0;font-size:16px;">LinkedIn — ${post.type}</h2>
    <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:12px;">${today} &nbsp;·&nbsp; Klar til at poste</p>
  </div>
  <div style="border:1px solid #e8e0e0;border-top:none;padding:24px;border-radius:0 0 8px 8px;white-space:pre-wrap;font-size:14px;line-height:1.8;color:#333;">${post.content}</div>
  <p style="text-align:center;margin-top:12px;font-size:11px;color:#aaa;">We Lead Projects · weleadprojects.com</p>
</div>`;

const payload = JSON.stringify({
  from: 'We Lead Projects <noreply@weleadprojects.com>',
  to: ['brian@tofft.info'],
  subject: `LinkedIn ${post.type} — ${today}`,
  text: post.content,
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
