# Forge — Project Brief

## Product Overview
Forge is a mobile-first web app connecting athletes and personal trainers. The core value: eliminate the gap between "training plan on paper" and actual execution — athletes always know what to do today; trainers see real data and can adjust plans in time.

---

## Roles

One account = one role, fixed at registration. No dual roles in MVP.

### Athlete
- Follows trainer-assigned training plans
- Logs workouts: exercises, sets, reps, weight, rest
- Logs nutrition: manual entry (name + calories / protein / fat / carbs) or presets
- Logs body progress: weight + optional measurements (waist, chest, hips)
- Photo progress (nice-to-have in MVP)
- Views progress charts, personal records (PRs), goals

### Trainer
- Creates and assigns training programs (exercises, sets, reps, weight, rest time, notes)
- Video references per exercise in plans (YouTube link or URL embed)
- Views all client progress: workouts, nutrition, body metrics
- Leaves async text feedback per workout or per week
- Manages a client list (3–10 clients covers demo needs)

---

## Trainer–Athlete Connection
Trainer generates an invite code or shareable link → Athlete enters it at registration or in their profile → connection established. No search, QR, or admin flow needed.

---

## MVP Scope

### In MVP
- Auth: email + password; role selected at registration (locked until post-MVP)
- Invite code / link connection flow
- Full athlete logging: workouts, nutrition, body weight + measurements
- Trainer plan builder + assignment to athletes
- Exercise video references in plans
- Trainer feedback (async text comment on workout / week)
- Progress charts and PRs for athlete
- In-app notification badges (no real push notifications)
- Vercel deployment

### Out of MVP (post-MVP)
- Chat / messenger
- Real push notifications (service workers)
- Dual role (one person as both athlete + trainer)
- Role switching
- Google / Apple OAuth
- Barcode / food-database integration for nutrition
- Full photo-progress gallery
- Monetization / subscriptions

---

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js + TypeScript |
| Backend / DB | Supabase (auth, database, storage) |
| Deployment | Vercel |
| Styling | Tailwind CSS |

Mock data is acceptable for early UI iterations; real Supabase data is the target for all features.

---

## Design Direction
- Mobile-first web app (responsive)
- Premium, modern, motivating, athletic — not generic fitness
- Strong typography, data visualization, progress cards
- Light gamification: PRs, achievements
- No Figma mockups required; design emerges in code
- Brand assets: built from scratch (no existing logo / colors)

---

## Project Context
- Type: solo educational project (coding course)
- Timeline: 4–5 weeks
- Team: solo developer
- Monetization: none in MVP
- Priority: realistic, implementable MVP features over full feature set

---

## Key Constraints & Decisions
- Role is immutable after registration (simplifies permissions significantly)
- Nutrition is manual-entry only (no external food DB or barcode scanner)
- No real-time features in MVP (no chat, no live push)
- Supabase handles auth + data — avoid building custom backend

---

## Research Conclusions (from competitive analysis, Sep 2026)

Full analysis: `research/research.md` · Screenshots: `research/screens/ui/` · Visual: `research.html`

### Validated by competitors
- **Future Pro** proves the remote coach + athlete model exists and people pay (~$149/mo). Forge wins on price accessibility for everyday trainers.
- **Noom** proves async coach feedback is sufficient — no real-time required. Text comment per workout = enough for MVP.
- **Lifesum** / **Garmin** prove nutrition manual entry is the standard flow. Barcode/AI is a nice-to-have.
- **Pushr** proves schedule alone is a product — without a clear training calendar, athletes don't know what to do tomorrow.

### Key UX patterns to use in Forge
- **Pill-row day selector** (S M T W T F S) — for training plan assignment (seen in Pushr)
- **In-workout bottom sheet** — Reps / Weight / Flag / Guide during active workout (seen in Future Pro)
- **Macro progress bars** — Carbs / Protein / Fat with daily kcal line (seen in Lifesum)
- **Dark premium UI** — Future Pro, Oura, Garmin all chose dark theme for athletic feel

### Design direction confirmed
Dark theme. Strong typography. Data-first cards. No generic fitness aesthetic.

---

## People (personas & JTBD)

Full files: `research/personas.md` · `research/jtbd.md` · Visual: `research/personas.html`

**Primary persona — Максим, онлайн-тренер.** 5–10 клієнтів, зараз у стані Telegram + Google Sheets. Вирішує взяти Forge — і тільки після цього запрошує атлета. Google Sheets як відправна точка підтверджено (Capterra TrueCoach reviews).

**Main job:** Коли я веду або виконую програму дистанційно, я хочу щоб план і реальне виконання знаходились в одному місці — щоб тренер міг коригувати, а атлет завжди знав що робити сьогодні.

**Топ-3 jobs для MVP:**
1. **J1+J2** — тренер надсилає план → атлет логує → тренер бачить без питання. Єдина петля що відрізняє Forge від «Telegram + пам'ять».
2. **J3** — атлет відкриває апку і одразу бачить план на сьогодні. Точка входу щодня; без неї 90% відтоку (підтверджено).
3. **J4** — атлет логує підхід між сетами за секунди. Якщо повільно — кидає. Тоді J2 порожній і петля ламається.

---

## Information Architecture

Full sitemap: `sitemap.md` · User flows: `flows.md` · IA visual: `ia.html`

### Sitemap — верхній рівень

| Розділ | Роль | Ключові екрани |
|---|---|---|
| Аутентифікація | Всі | Реєстрація, Вхід, Запрошення атлета |
| Сьогодні | Атлет | План на день (home screen атлета) |
| Активне тренування | Атлет | Логер підходів, Таймер відпочинку, Завершення |
| Мої атлети | Тренер | Огляд клієнтів, Активність і фідбек, Деталі тренування |
| Програми | Тренер | Список програм, Конструктор, Редактор сесії, Призначення |
| Харчування | Атлет | Журнал за сьогодні, Додати їжу |
| Прогрес | Атлет | Дашборд, Тіло і вимірювання, Фото-прогрес, Фідбек тренера |
| Спільне | Обидва | Профіль і налаштування |

### Глобальна навігація

**Атлет** — bottom nav (4 tabs): `Сьогодні` · `Харчування` · `Прогрес` · `Профіль`

**Тренер** — bottom nav (4 tabs): `Мої атлети` · `Програми` · `Запросити` · `Профіль`

Між вкладками не більше 1 тапу до будь-якого розділу. Немає глобального пошуку або бічної панелі — модель pure bottom-nav.

### Глибина до main job (J3 + J4)

Атлет, щоб залогувати перший підхід від home screen:

```
Сьогодні  →  Почати тренування  →  Логер  →  [вага + повтори]  →  Зберегти підхід
   0 тапів        1 тап               2 тапи         введення              3 тапи
```

**3 тапи** до першого збереженого підходу. Мета: не більше 3 дій між відкриттям і першим логом.

### Main flow — J3+J4 (скорочено)

1. Відкрив апку → перевірка авторизації
2. Перевірка: тренер підключений? план на сьогодні є?
3. Тап «Почати тренування» → екран логера
4. Для кожного підходу: ввести вагу і повтори → «Зберегти» → таймер відпочинку → повторити
5. Остання вправа → «Завершити тренування» → екран успіху

Повний flow з усіма станами (empty / error / loading / retry): `flows.md` → MAIN JOB — J3+J4.
