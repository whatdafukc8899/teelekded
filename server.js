import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (!host.startsWith('www.') && !host.includes('localhost') && !host.includes('railway')) {
    return res.redirect(301, 'https://www.' + host + req.url);
  }
  next();
});

app.use(express.json());

app.get('/sitemap.xml', async (req, res) => {
  try {
    const data = await readFile(join(__dirname, 'sitemap.xml'), 'utf8');
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(data);
  } catch (e) {
    console.error('sitemap error:', e);
    res.status(500).send('error');
  }
});

app.use(express.static(join(__dirname, 'public')));

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

app.post('/api/interpret', async (req, res) => {
  const { dream } = req.body;
  if (!dream) return res.status(400).json({ error: 'No dream text' });
  try {
    const msg = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 512,
      messages: [{
        role: 'user',
        content: `คุณเป็นผู้เชี่ยวชาญทำนายความฝันและตีเลขหวยไทย
ความฝัน: "${dream}"
ตอบเป็น JSON เท่านั้น: {"meaning":"ความหมายของฝัน 1-2 ประโยค","nums":[เลขโชค 3-5 ตัว 0-9]}`
      }]
    });
    const text = msg.content[0].text.trim();
    const json = JSON.parse(text.match(/\{[\s\S]*\}/)[0]);
    res.json({ meaning: json.meaning || '', extraNums: json.nums || [] });
  } catch (e) {
    res.json({ meaning: '', extraNums: [] });
  }
});

app.listen(PORT, () => console.log(`teelekded running on ${PORT}`));
