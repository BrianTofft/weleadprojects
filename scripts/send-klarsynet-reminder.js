const https = require('https');
const fs = require('fs');
const path = require('path');

const apiKey = process.argv[2] || process.env.RESEND_API_KEY;

if (!apiKey || apiKey === 'RESEND_API_KEY_HERE') {
  console.error('Mangler Resend API-nøgle. Angiv som argument: node scripts/send-klarsynet-reminder.js re_xxx');
  process.exit(1);
}

const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
const nextMonthLabel = nextMonth.toLocaleDateString('da-DK', { month: 'long', year: 'numeric' });

const poolPath = path.join(__dirname, '..', 'content', 'klarsynet-idea-pool.json');
const pool = JSON.parse(fs.readFileSync(poolPath, 'utf8'));
const monthIndex = nextMonth.getFullYear() * 12 + nextMonth.getMonth();
const startIdx = (monthIndex * 3) % pool.length;
const ideas = [0, 1, 2].map(i => pool[(startIdx + i) % pool.length]);

const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1C2544;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="color:white;margin:0;font-size:16px;">Klarsynet — Tid til næste udgave</h2>
  </div>
  <div style="border:1px solid #e8e0e0;border-top:none;padding:24px;border-radius:0 0 8px 8px;font-size:14px;line-height:1.8;color:#333;">
    <p>Månedsskiftet nærmer sig. ${nextMonthLabel}s Klarsynet-udgave mangler stadig at blive tilføjet til <code>content/klarsynet-issues.json</code>.</p>
    <p>Åbn en Claude Code-session i weleadprojects-mappen og bed om en ny udgave, så den er klar til at sende automatisk den 1.</p>
    <p style="font-weight:700;margin-top:24px;margin-bottom:8px;">3 idéer til ${nextMonthLabel}s udgave:</p>
    <ol style="margin:0;padding-left:20px;">
      ${ideas.map(idea => `<li style="margin-bottom:8px;">${idea}</li>`).join('')}
    </ol>
  </div>
  <p style="text-align:center;margin-top:12px;font-size:11px;color:#aaa;">We Lead Projects · weleadprojects.com</p>
</div>`;

const payload = JSON.stringify({
  from: 'We Lead Projects <noreply@weleadprojects.com>',
  to: ['bt@weleadprojects.com'],
  subject: `Klarsynet — skriv ${nextMonthLabel}s udgave`,
  text: `Månedsskiftet nærmer sig. ${nextMonthLabel}s Klarsynet-udgave mangler stadig at blive tilføjet til content/klarsynet-issues.json. Åbn en Claude Code-session i weleadprojects-mappen og bed om en ny udgave.\n\n3 idéer til ${nextMonthLabel}s udgave:\n${ideas.map((idea, i) => `${i + 1}. ${idea}`).join('\n')}`,
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
