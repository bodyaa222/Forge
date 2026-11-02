// Генерує портрети з visuals/README.md.
// Промпт і список суб'єктів читаються з README, щоб стиль жив в одному місці.
//   node visuals/generate.mjs              — лише відсутні файли
//   node visuals/generate.mjs a.jpg b.jpg  — перегенерувати названі
// Сервіс: GEMINI_API_KEY → Nano Banana (платно); інакше HF_TOKEN → безкоштовний
// Space FLUX.1-Krea-dev на Hugging Face (денна квота ZeroGPU). IMAGE_PROVIDER=hf — завжди Space.
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const root = join(dir, '..');

const envFile = join(root, '.env.local');
if (!process.env.GEMINI_API_KEY && existsSync(envFile)) {
  for (const line of readFileSync(envFile, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.+?)\s*$/);
    if (m) process.env[m[1]] ??= m[2].replace(/^["']|["']$/g, '');
  }
}
// IMAGE_PROVIDER=hf примусово бере Space, навіть коли ключ Gemini є
const key = process.env.IMAGE_PROVIDER === "hf" ? null : process.env.GEMINI_API_KEY;
const hf = process.env.HF_TOKEN;
if (!key && !hf) { console.error('Немає GEMINI_API_KEY чи HF_TOKEN (env або .env.local)'); process.exit(1); }
const model = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';

const readme = readFileSync(join(dir, 'README.md'), 'utf8');
const style = readme.match(/```style\n([\s\S]*?)```/)[1].trim();
const subjects = [...readme.matchAll(/^\| ((?:trainer|athlete|gear)-[\w-]+\.jpg) \| (.+?) \|$/gm)]
  .map(([, file, subject]) => ({ file, subject }));

const wanted = process.argv.slice(2);
const todo = subjects.filter(s => wanted.length ? wanted.includes(s.file) : !existsSync(join(dir, s.file)));

// Безкоштовний шлях: Gradio API Space'у. Повертає байти зображення або кидає помилку.
const SPACE = 'https://black-forest-labs-flux-1-krea-dev.hf.space/gradio_api/call/infer';
async function viaSpace(prompt, seed) {
  const auth = { authorization: `Bearer ${hf}` };
  const start = await fetch(SPACE, {
    method: 'POST', headers: { ...auth, 'content-type': 'application/json' },
    body: JSON.stringify({ data: [prompt, seed, false, 1024, 1024, 4.5, 28] }),
  });
  const { event_id } = await start.json();
  const sse = await (await fetch(`${SPACE}/${event_id}`, { headers: auth })).text();
  // Space стрімить проміжні кадри (спершу шум); беремо лише фінальний з "event: complete"
  const url = sse.split("event: complete")[1]?.match(/"url": "([^"]+)"/)?.[1];
  if (!url) throw new Error(sse.slice(-300));
  return Buffer.from(await (await fetch(url, { headers: auth })).arrayBuffer());
}

// Сталий seed з назви файлу: перегенерація дає той самий кадр, доки не змінено промпт
const seedOf = file => [...file].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % 1e6;

for (const { file, subject } of todo) {
  process.stdout.write(`${file} … `);
  const raw = join(dir, `.${file}.raw`);
  if (!key) {
    try { writeFileSync(raw, await viaSpace(`${style}\n${subject}`, seedOf(file))); }
    catch (e) { console.log('помилка', e.message); continue; }
    execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '82', '-Z', '512', raw, '--out', join(dir, file)], { stdio: 'ignore' });
    execFileSync('sips', ['-c', '400', '400', join(dir, file)], { stdio: 'ignore' }); // центр: зрізає краї з вікном
    unlinkSync(raw);
    console.log('готово');
    continue;
  }
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${style}\n${subject}` }] }],
      generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '1:1' } },
    }),
  });
  const data = await res.json();
  const part = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
  if (!res.ok || !part) { console.log('помилка', res.status, JSON.stringify(data.error ?? data.promptFeedback ?? data).slice(0, 300)); continue; }
  writeFileSync(raw, Buffer.from(part.inlineData.data, 'base64'));
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '82', '-Z', '512', raw, '--out', join(dir, file)], { stdio: 'ignore' });
    execFileSync('sips', ['-c', '400', '400', join(dir, file)], { stdio: 'ignore' }); // центр: зрізає краї з вікном
  unlinkSync(raw);
  console.log('готово');
}
