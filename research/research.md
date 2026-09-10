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
