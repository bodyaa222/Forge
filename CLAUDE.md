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
- **Dark premium UI** — Oura and Garmin chose dark theme for athletic feel (Future Pro on Mobbin is now light; checked Oct 2026)

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

## Вайрфрейми (Wireframes, Lesson 4)

Розташування: `wireframes/` · Конвенції: `wireframes/_conventions.md` · Аудит: `wireframes/_critique.md`

### Файли (35 HTML, статичні — відкриваються без сервера)

| Група | Екрани | Стани |
|---|---|---|
| **Атлет · Main Job (J3+J4)** | `today`, `workout`, `finish` | `*-loading`, `*-empty`, `*-error` |
| **Атлет · Харчування** | `nutrition`, `add-food` | `*-loading`, `*-empty`, `*-error` |
| **Атлет · Прогрес** | `progress`, `history`, `body-log` | `*-empty` (history, progress implied via cards) |
| **Тренер** | `trainer-clients`, `trainer-athlete`, `trainer-workout`, `trainer-feedback` | `*-loading`, `*-empty`, `*-error` для кожного |
| **Тренер · Програми** | `programs`, `program-builder`, `program-session`, `program-assign` | `*-empty` |
| **Auth + Спільні** | `register`, `login`, `invite`, `profile` | — |

### Конвенції

- **Палітра**: bg `#fff`, межі `#ccc`, заповнення `#e8e8e8`, текст `#333`. Ніяких кольорів, тіней, зовнішніх шрифтів. **Виняток:** `today` + `athlete-today-*` і `workout` + `workout-*` уже пофарбовані мовою «Чавун» (див. «Концепт»); їхній CSS однаковий у всіх 7 файлах.
- **Анотації прибрано (19.10.2026)**: `flow-step`, `<em>` «Дія / Стан» під зонами, «→ файл.html», HTML-коментарі. Лишились назви зон (`zone-label`, на пофарбованих екранах це `<h2>`) і бічне меню `.wf-nav`.
- **Phone frame**: 390×844 px; header `flex-shrink:0`, main `flex:1 overflow-y:auto`, bottom-nav `flex-shrink:0`.
- **Структура**: `.wf-nav` (224 px sidebar-дерево) + `.wf-canvas` (phone frame + state-nav).
- **Суфікси станів**: `_empty` = порожній, `_error` = помилка/мережа, `_loading` = skeleton (`.sk-*` класи).
- **CTA**: `<a href>` замість `<button>`; відключені — `aria-disabled="true"` + `pointer-events:none`.
- **Навігація**: `aria-current="page"` на поточному екрані; `class="planned"` на ще не створених.

### Як переглянути

```bash
open wireframes/today.html   # або будь-який інший файл
```

Або GitHub Pages: `https://bodyaa222.github.io/Forge/wireframes/today.html`

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

---

## Голос (Voice, Lesson 5)

Правила: `voice.md` · Джерело правди для кожного рядка: `microcopy.md` · Мова конкурентів: `research/research.md` → «Мова конкурентів»

**Будь-який новий або змінений текст продукту пишемо за `voice.md` і одразу заносимо в `microcopy.md`** (колонки «Було» / «Стало»). Якщо рядка немає в таблиці, його немає в продукті.

### Принципи
1. **Мотивація — це цифра, а не вигук:** «Новий рекорд · Присідання зі штангою 85 кг · +5 кг до 5 жовтня», а не «Ти неймовірна!».
2. **Між підходами — одна дія, один рядок:** логер говорить як тренер у залі.
3. **Тіло й їжа — факт без докору й прогнозів:** «1 950 з 1 800 ккал», без «ліміту» й «треба».
4. **Оцінку дає тренер, а не Forge:** похвала й поради йдуть лише від імені тренера.

### Словник (коротко)
| Пишемо | Не пишемо |
|---|---|
| підхід · повтори · рекорд · коментар · атлет · тренер | сет · реп · PR · фідбек · клієнт · коуч |
| програма (багатотижнева) · тренування (одне заняття) · план / факт (значення) | сесія · день як одиниця · план замість програми |
| ціль (вага тіла, ккал) · БЖВ · страва · замір · код запрошення | мета · макроси · прийом їжі як запис · обміри · інвайт-код |

- **Дії:** «Зберегти + що», «Додати + що», «Почати / Завершити тренування», «Переглянути», «Створити / Призначити програму», «Залишити / Надіслати коментар», «[+] Запросити атлета», «Спробувати ще». Стрілка «→» не входить у назву.
- **Заголовок екрана** називає місце: «Сьогодні», «Мої атлети», «Нова страва», «Призначення програми».
- **Формати:** `4 × 8 × 80 кг` · `82,5 кг` (кома) · `90 с` · `1 год 2 хв` · `1 850 ккал` · `12 жовтня` (рік лише не поточний) · `Пн · Ср · Пт` · «N з M» (`Підхід 2 з 4`, `Тиждень 2 з 6`).
- **Звертання:** «ти» для обох ролей, рід не вгадуємо (безособово).

### Заборонено
Кліше («Ой, щось пішло не так», «Вітаємо!», «Чудова робота!»), оклики, емодзі в системних повідомленнях, «успішно», обіцянки тіла («трансформуй себе»), докір за цифри.

### Не чіпаємо
Текст користувача: нотатки й коментарі тренера, назви програм, тренувань і вправ, нотатки атлета, назви страв, імена. Пишемо лише підписи й підказки навколо нього.

---

## Концепт (Concept, Lesson 6)

Розташування: `concept/` · Рішення й атрибути: `concept/concept.md` · Стенд мови: `concept/concept.html` · Три напрями: `concept/directions.html` · Референси: `concept/references.md` (+ `.html`, скріни Mobbin у `concept/refs/`) · Продукт для impeccable: `PRODUCT.md`

### Обраний напрям: «Чавун»
Число вилите, а не надруковане. Стан показано матеріалом залу: накатка грифа на активному підході, отвори стійки для зроблених тренувань, жовта фарба безпеки на головній дії. Фото немає.

| Токен | Hex | Роль |
|---|---|---|
| Чавун · лиття · накатка · отвір | `#18191B` · `#222427` · `#2B2E32` · `#101113` | ґрунт · картка · активний рядок · поле вводу |
| Сталь · графіт · лінія | `#ECEAE4` · `#9C9EA1` · `#34373C` | текст · підписи (мін. 12 px) · межі 1 px |
| Фарба безпеки | `#F2C230` (рант `#FFE38A`, текст на ній `#1A1600`) | лише стан і головна дія, ≤ 10 % екрана; успіх = ✓, рекорд = суцільний бейдж + медаль |
| Помилка | `#D3242A` | лише іконка й рамка 2 px, текст сталевий (3,0 : 1 на литті — не для тексту) |

- **Шрифти:** Unbounded (числа й назви; пропорційні цифри в рекордах, табличні в рядках і полях) + Manrope (слова). Шкала цифр: N1 56 · N2 30 · N3 20 · N4 15 («4 × 8 × 80»).
- **Форма:** радіуси 6 / 4 / 2; тіні: лиття, заглиблення, фарба; відступи кроком 4; зона натиску ≥ 48 px, у логері 56 px (кнопка) і 64 px (поле).
- **Іконки:** Solar Bold.
- **Атрибути** (`concept.md`): цифра головна · зібрано під пальцем · яскраво, не кислотно · нагорода з числом, не з вогником · дві щільності однієї мови.
- **Заборонено:** неон на чорному, градієнти й вогники в гейміфікації, стріки, емодзі замість даних, стокові фото тіл, кольорова смуга зліва > 1 px, кільця прогресу.

### Перевірки (жовтень 2026)
- `/impeccable critique` «Сьогодні»: 28/40 до правок; знімок у `.impeccable/critique/`.
- `/impeccable audit` + звірка з `concept.md` (26.10.2026): 24 дефекти, усі виправлено; контраст тексту ≥ 5,1 : 1 на всіх пофарбованих екранах.
- Інші 28 вайрфреймів ще без мови «Чавун». Продуктовий `DESIGN.md` — наступний урок.
