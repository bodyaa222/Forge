# Forge — Competitive Research

*Джерело: Mobbin (реальні UI скріни) + веб-аналіз. Дата: вересень 2026.*

---

## Конкурентна карта

### ПРЯМІ — той самий use case, та сама аудиторія

| # | Апка | Суть | Чому конкурент |
|---|------|------|---------------|
| 1 | **Future Pro** | Remote 1-на-1 coaching з відео | Тренер + атлет + план + логування — ідентична модель |
| 2 | **Noom** | Коучинг для схуднення з людиною-коучем | Async coach feedback + програмний підхід |

### М'ЯКІ — суміжна аудиторія або частина use case

| # | Апка | Суть | Точка перетину |
|---|------|------|----------------|
| 3 | **Pushr** | Планувальник тренувань (розклад + нагадування) | Scheduling, тренувальний план |
| 4 | **Strava** | GPS-трекер + соціальна мережа атлетів | Workout logging, activity summary |
| 5 | **Lifesum** | Трекер харчування і макросів | Nutrition logging (те, що логує атлет у Forge) |
| 6 | **Garmin Connect** | Фітнес-платформа + AI-аналітика | Performance dashboard, subscription model |

### АСПІРАЦІЙНІ — UX reference, не конкуренти

| # | Апка | Суть | Що беремо |
|---|------|------|-----------|
| 7 | **Oura** | Sleep/recovery ring з AI advisor | Dark dashboard design, readiness score concept |

---

## Benchmark — порівняння ключових фіч

| Фіча | Future Pro | Pushr | Strava | Noom | Lifesum | Garmin | **Forge MVP** |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Trainer → Athlete connection | ✓ | — | — | ✓ | — | — | **✓** |
| Custom training plans | ✓ | ✓ | — | — | — | ✓ | **✓** |
| Workout logging | ✓ | ✓ | ✓ | — | — | ✓ | **✓** |
| Nutrition tracking | — | — | — | ✓ | ✓ | ✓ | **✓** |
| Progress charts | ✓ | — | ✓ | ✓ | ✓ | ✓ | **✓** |
| Async coach feedback | ✓ | — | — | ✓ | — | — | **✓** |
| Video exercise library | ✓ | — | — | — | — | — | **✓** |
| Social/community | — | — | ✓ | ✓ | — | — | — |
| AI insights | — | — | — | — | ✓ | ✓ | — |
| Free tier | — | ✓ | ✓ | — | ✓ | ✓ | **✓** |

---

## UX патерни з реальних скринів

### 1. Pill-row для вибору днів тижня
**Де:** Pushr (edit schedule)  
S M T W T F S — чорні/білі кружечки, tap to select. Простий і інтуїтивний патерн для розкладу тренувань.  
**→ Forge:** training plan calendar, вибір днів для програми

### 2. In-workout bottom sheet controls
**Де:** Future Pro (активне тренування)  
Відео тренера займає весь верх. Знизу: Reps / Weight / Record / Flag / Guide / History. Таймер вправи + прогрес зверху.  
**→ Forge:** workout logging screen під час тренування

### 3. Macro progress bars
**Де:** Lifesum (food log)  
Carbs / Protein / Fat — три окремі кольорові bars. Daily intake: X/Y kcal в одному рядку.  
**→ Forge:** athlete nutrition dashboard

### 4. Split feedback notification
**Де:** Strava (live run)  
"Split 1 complete!" bar знизу екрану з часом і темпом — миттєвий feedback.  
**→ Forge:** workout completion, set completion feedback

### 5. AI Advisor chat
**Де:** Oura  
Conversational UI для health questions. Advisor відповідає на питання з контекстом даних користувача.  
**→ Forge (post-MVP):** trainer feedback flow або AI workout suggestions

### 6. Subscription paywall
**Де:** Garmin Connect (Connect+)  
Annual vs Monthly з "Save 16%" тегом. Feature list: Active Intelligence, Nutrition, Performance Dashboard.  
**→ Forge (post-MVP):** premium plan selector UI

### 7. Readiness score
**Де:** Oura  
Одне число від 1-100 відображає "готовність до тренування сьогодні". Підкріплено sleep/HRV даними.  
**→ Forge:** athlete "today's load" concept (post-MVP)

---

## Ключові гіпотези для Forge

1. **Future Pro валідує модель** — ринок remote coach + athlete існує і платить. Їхня слабкість: висока ціна (~$149/mo) і фокус на elite coaches. Forge може виграти на доступності для звичайних тренерів.

2. **Async feedback — достатньо для MVP** — і Noom, і Future Pro доводять що trainer не мусить бути online в реальному часі. Текстовий коментар до тренування достатній.

3. **Nutrition logging — manual entry OK** — Lifesum, Garmin, Noom всі мають manual entry як основний flow. Barcode/AI — nice-to-have, не MVP.

4. **Schedule/calendar critical** — Pushr побудований ТІЛЬКИ на schedule і має аудиторію. Без нього атлет не знає що робити завтра.

5. **Dark premium UI має сенс** — Future Pro, Oura, Garmin Connect всі вибрали dark theme для фітнес-контексту. Мотивуючий, серйозний, атлетичний feel.

---

*Скріни: `/research/screens/ui/` — 7 апок × 8 скринів = 56 Mobbin UI screenshots*

---

## Доресерч після персон

*Дата: вересень 2026. Питання: «Як атлет зараз логує підходи під час тренування — і що відбувається до/замість апки?»*
*Джерела: Capterra (TrueCoach reviews), fitnessrefined.co, setgraph.app, vocal.media, maticdigital.com, alternativeto.net, App Store descriptions.*

---

### DR1 · Швидкість логування — підтверджено як #1 критерій вибору

Незалежні джерела збігаються: атлети оцінюють логер виключно по швидкості між сетами.

- «Lightweight and fast matters: many Redditors prefer apps that minimize time tapping between sets» (setgraph.app, огляд Reddit-рекомендацій)
- Strong App — «praised for fast set entry, crucial when you're resting between heavy sets» (setgraph.app)
- TrainLedger: «Log sets in seconds and stay focused on lifting — not on your phone» (App Store positioning)
- WorkoutSet: «designed for use between sets so you can focus on lifting, not fumbling with your phone» (App Store)

**Висновок:** J4 (швидкий логер) підтверджено як реальний job. Поріг терпимості — «секунди», не хвилини. Конкретне число «5–10 сек» у попередніх документах залишається [?] — ніхто не вимірював точний поріг відмови.

---

### DR2 · Notes app і папір — реальні альтернативи, не вигаданий сценарій

Кілька незалежних сигналів підтверджують що люди справді логують поза спеціалізованими апками:

- Gym Note Plus (App Store): «the fastest workout log for people who **already write their workouts down**» — існує ціла категорія апок що мігрують людей з Notes у трекер
- Реальний відгук про Gym Note Plus: «I paste my workout from the iPhone Notes app after each session and it's all converted automatically» (App Store review)
- Автор блогу Gary Colwell повернувся до паперового блокноту після StrongLifts, описавши «having to pick up their phone after every set, tap buttons, and scroll sliders» як причину (404 на момент фетчу, але захоплено пошукачем)
- «Some customers previously tracked workouts by writing in Notion or using notebooks and pencils between sets» (search result excerpt)

**Висновок:** Оля, яка логує в Notes або не логує — підтверджений паттерн, не вигадка. Notes app і папір — справжні альтернативи спеціалізованому логеру.

---

### DR3 · Фрикція при логуванні — провідна причина відмови від апки

- «Demanding data entry was the most common reason people stopped using a health app» (2022 digital health study, цитується на fitnessrefined.co)
- Fitness app retention: 77% users gone within 3 days, 90% within 30 days, ~3% active after day 30 (fitnessrefined.co)
- Dropout pattern: не різке, а поступове — за 5–8 тижнів до повної відмови людина вже логує на 18–27% рідше (Fitbod internal data)

**Висновок:** J4 і J3 — не просто зручності. Це точки утримання. Якщо вони тремтять — атлет іде статистично передбачувано.

---

### DR4 · НОВИЙ ВИСНОВОК: Trainerize / TrueCoach / TrainHeroic існують — і конкурують на тренерській стороні

Цього не було в початковому research.md. Існує ціла категорія B2B SaaS для тренерів:

| Платформа | Позиція | Ціна (орієнтовно) |
|---|---|---|
| **TrueCoach** | Fast, clean 1-on-1 programming; best for <20 clients | ~$19–99/mo залежно від кількості клієнтів |
| **Trainerize (ABC)** | All-in-one: automation, nutrition, branded app, business tools | ~$35–300/mo |
| **TrainHeroic** | Team sports + strength coaching | ~$24+/mo |
| **My PT Hub** | UK-центрований all-in-one | ~£30+/mo |

**Підтверджено Capterra-відгуками TrueCoach** — реальні тренери що перейшли з:
- Google Sheets / Excel (Jesse O., Frank C., Daniel Y., Casey L.)
- Паперових записів / «a mountain of paperwork»
- Попередніх платформ (TrainHeroic, My PT Hub)

**Болі цих платформ** (підтверджено відгуками 2025–2026):
- Trainerize: onboarding 4–8 годин, coach mobile app слабкий («replying to a check-in takes more taps than it should»), notification overload → «clients turn all notifications off in the first month»
- TrueCoach: no coach mobile app (web-only for coaches), no nutrition built-in, calendar glitches

**Що це змінює для Forge:**
- Гіпотеза «тренер використовує тільки Telegram + Sheets» — **частково хибна**. Telegram + Sheets — це *entry-level* стан. Частина тренерів вже використовує спеціалізовані інструменти.
- Forge конкурує не тільки з «нічим», але і з Trainerize/TrueCoach — і може виграти на простоті онбордингу і мобільному UX тренера.
- Клієнтська notification overload — відомий ризик, його треба враховувати в дизайні.

---

### DR5 · Підсумок: що підтверджено, що змінилось

| Твердження з personas.md | Статус до | Статус після |
|---|---|---|
| «Оля логує в Notes або не логує» | Гіпотеза | **Підтверджено** (Notes app — задокументований паттерн) |
| Швидкість — критичний фактор логера | Гіпотеза | **Підтверджено** (консенсус ринку) |
| «5–10 секунд» як поріг | Вигадано | **[?]** — «секунди» правильно, конкретне число невідомо |
| «Telegram + Google Sheets» — єдиний стан тренера | Гіпотеза | **Частково хибно** — professional platforms існують і використовуються |
| Google Sheets як відправна точка тренера | Гіпотеза | **Підтверджено** (Capterra: кілька реальних тренерів) |
| Фрикція логування → відмова від апки | Гіпотеза | **Підтверджено** (дослідження 2022; 90% відтік за 30 днів) |

---

## Мова конкурентів

*Зібрано 15.10.2026: сторінки в App Store, головні сторінки сайтів (скріни в `research/screens/`) і форуми користувачів. Мова оригіналу збережена. Позначки: **дослівно** — рядок скопійовано з першоджерела; **переказ** — рядок відомий лише зі слів користувача, точне формулювання апки не підтверджене.*

### Обіцянки результату й трансформації

| Апка | Рядок | Де | Статус |
|---|---|---|---|
| Fitbod | «Build muscle, gain strength and lose weight with a customized workout plan just for you.» | App Store, опис | дослівно |
| Fitbod | «Make lasting progress with Fitbod – your own AI trainer guiding you to your strongest self» | App Store, опис | дослівно |
| Fitbod | «LESS PLANNING. MORE PROGRESS.» | fitbod.me, hero (`screens/fitbod-home.png`) | дослівно |
| Fitbod | «Know exactly what to do next—without second guessing what's best for you.» | fitbod.me, hero | дослівно |
| TrueCoach | «start getting real results with TrueCoach today.» | App Store, опис | дослівно |
| MyFitnessPal | «Achieve your nutrition, calorie, macro & fitness goals with MyFitnessPal» | App Store, опис | дослівно |

### Соціальний доказ і «№1»

| Апка | Рядок | Де | Статус |
|---|---|---|---|
| MyFitnessPal | «The world's #1 nutrition tracking app» · «Join over 280 million people on their journey to eat better» | myfitnesspal.com, hero (`screens/myfitnesspal-home.png`) | дослівно |
| MyFitnessPal | «Join the millions of users who've created over 100 billion food logs and counting!» | App Store, опис | дослівно |
| Strong | «join over 1.2 million people who have downloaded Strong to stay on track in the gym.» | App Store, опис | дослівно |
| TrueCoach | «TrueCoach is the number one platform for coaches and trainers who want to manage more clients with less admin work.» | App Store, опис | дослівно |

### Швидкість і простота (атлет у залі)

| Апка | Рядок | Де | Статус |
|---|---|---|---|
| Strong | «Strong is the simplest and most intuitive workout tracker, designed to help you get better results from your workouts.» | App Store, опис | дослівно |
| Strong | «record your workouts as effortlessly and as quickly as possible.» | App Store, опис | дослівно |
| MyFitnessPal | «Log meals effortlessly from 20.5M+ foods» | App Store, опис | дослівно |

### Мотивація як механіка: стріки, бейджі, нагадування

| Апка | Рядок | Де | Статус |
|---|---|---|---|
| Trainerize | «Stay motivated with streaks, badges, and personalized reminders.» | App Store, опис (клієнтська частина) | дослівно |
| Trainerize | «Keep clients engaged with messaging, challenges, reminders, and badges.» | App Store, опис (тренерська частина) | дослівно |
| TrueCoach | «We want to help eliminate accountability issues» | App Store, опис | дослівно |

### Рекорди і повідомлення: що бачить людина

| Апка | Рядок | Де | Статус |
|---|---|---|---|
| Trainerize | «Client achieved personal best» — сповіщення тренеру. Тред тренерів має назву «"Client achieved personal best" — Great but WHAT?»: «we have to go through tabs and pages and pages to find out what they achieved». Відповідь підтримки: «there is no way to get a notification that shows the exact personal bests» | ideas.abcfitness.com, форум ідей | дослівно (текст сповіщення взято з назви треду) |
| Trainerize | Бейджі «don't explain what was achieved or how much the client improved» | ideas.abcfitness.com, форум ідей | переказ скарги |
| Strong | «Advanced Statistics show your personal records and progression» | App Store, опис | дослівно |
| MyFitnessPal | «you are likely not eating enough» — попередження після «Complete Diary». Користувачі просять його прибрати | community.myfitnesspal.com (es), тред «Retirar el comentario de you are likely not eating enough» | дослівно (за цитатою користувача) |
| MyFitnessPal | Прогноз після «Complete Diary»: «if every day were like today, I would weigh 262 kg in 5 weeks» (користувач з'їв ~1 200 ккал) | community.myfitnesspal.com, тред «The prediction of future weight seems to be broken» | переказ |

### Чого не знайшли

- Бадьорих вигуків на кшталт «You crushed it!» в описах у сторах цих п'яти апок **немає**. Вони обіцяють результат («strongest self», «real results») і продають масштаб («#1», «280 million»), а не вигукують. Вигуків у самих апках (екрани завершення, пуші) ми не бачили: офіційних текстів у відкритому доступі немає, а в акаунти ми не заходили. Це **[?]**, і перевірити його можна на тестовому акаунті.
- Тексти листів тренера клієнтам у TrueCoach і Trainerize у відкритому доступі не знайдено. **[?]**

### Що спільне в мові ринку

1. **Обіцянка тіла замість опису дії:** «lose weight», «strongest self», «real results».
2. **Мотивація як механіка утримання:** стріки, бейджі, нагадування. Людина отримує сигнал, але не зміст: «Client achieved personal best» без вправи і ваги.
3. **Харчування з оцінкою:** «not eating enough», прогноз ваги через 5 тижнів, який користувачі вважають зламаним.
4. **Виняток — Strong:** говорить про швидкість і статистику («as quickly as possible», «personal records and progression») без обіцянок тіла. Найближчий до тону Forge.

*Джерела: apps.apple.com/us/app/id464254577 (Strong) · apps.apple.com/us/app/id1041517543 (Fitbod) · apps.apple.com/us/app/id341232718 (MyFitnessPal) · apps.apple.com/app/516851502 (ABC Trainerize) · apps.apple.com/app/id1439127794 (TrueCoach) · ideas.abcfitness.com/forums/167887/suggestions/46580929 · community.myfitnesspal.com/de/discussion/1478019 · community.myfitnesspal.com/es/discussion/1469616 · fitbod.me · myfitnesspal.com*
