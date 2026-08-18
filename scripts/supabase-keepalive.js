const https = require('https');

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Mangler NEXT_PUBLIC_SUPABASE_URL eller NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const { hostname } = new URL(url);

const req = https.request({
  hostname,
  path: '/rest/v1/',
  method: 'HEAD',
  headers: {
    'apikey': key,
    'Authorization': `Bearer ${key}`,
  },
}, (res) => {
  console.log(`Keepalive OK — ${res.statusCode} — ${new Date().toISOString()}`);
});

req.on('error', e => { console.error('Keepalive fejl:', e.message); process.exit(1); });
req.end();
