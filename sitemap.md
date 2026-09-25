# Forge — Sitemap & Product Structure

---

## Сутності продукту

*Інвентаризація об'єктів з якими людина має справу щоб закрити свої jobs.*
*Джерело: CLAUDE.md, jtbd.md, research.md. Де поле лише припускається — [?].*
*Сутність без жодного job — секція «Під питанням», не тут.*

---

### 1. Аккаунт користувача (User Account)

**Поля:**
- `id` — унікальний ідентифікатор
- `email` — логін
- `password_hash`
- `role` — `trainer` | `athlete` (незмінна після реєстрації)
- `created_at`

**Job:** передумова для всього — без аккаунту немає жодного job.
**Пов'язана з:** Профіль тренера або Профіль атлета (1:1 через role).

---

### 2. Профіль тренера (Trainer Profile)

**Поля:**
- `user_id` (FK → User Account)
- `name` — повне ім'я
- `bio` [?] — короткий опис для майбутньої сторінки профілю
- `avatar_url` [?]

**Job:** J1 — тренер надсилає план; J2 — тренер бачить що сталося; E1 — відчуття контролю.
**Пов'язана з:** User Account · Trainer-Athlete Connection · Training Program · Trainer Feedback.

---

### 3. Профіль атлета (Athlete Profile)

**Поля:**
- `user_id` (FK → User Account)
- `name` — повне ім'я
- `avatar_url` [?]
- `birth_date` [?] — для розрахунків [?]
- `height_cm` [?]

**Job:** J3 — атлет бачить план сьогодні; J4 — логує підхід; J5 — бачить прогрес.
**Пов'язана з:** User Account · Trainer-Athlete Connection · Workout Log · Nutrition Log · Body Progress Entry · Personal Record.

---

### 4. Зв'язок тренер↔атлет + Інвайт (Trainer-Athlete Connection)

Два об'єкти в одному потоці: спочатку Інвайт (одноразовий), потім стала Connection.

**Invite Code / Link:**
- `code` — короткий унікальний рядок (генерує тренер)
- `trainer_id` (FK → Trainer Profile)
- `expires_at` [?] — чи є термін дії
- `used_by` — athlete_id після активації
- `status` — `pending` | `used`

**Connection:**
- `trainer_id` (FK → Trainer Profile)
- `athlete_id` (FK → Athlete Profile)
- `connected_at`
- `status` — `active` | `archived` [?]

**Job:** Передумова для J1 і J2 — без зв'язку тренер не може надіслати план, не бачить даних атлета.
**Пов'язана з:** Trainer Profile · Athlete Profile · Training Program · Trainer Feedback.

---

### 5. Тренувальна програма (Training Program)

Шаблон, який тренер будує і призначає атлету. Містить тижневий розклад.

**Поля:**
- `id`
- `trainer_id` (FK → Trainer Profile)
- `name` — назва програми (напр. «Силовий цикл — осінь»)
- `description` [?]
- `duration_weeks` [?] — скільки тижнів програма розрахована
- `scheduled_days` — масив днів тижня [S, M, T, W, T, F, S], підтверджено: Pushr pill-row pattern
- `assigned_to` — athlete_id (FK → Athlete Profile) — в MVP 1 програма : 1 атлет [?] або 1:N [?]
- `assigned_at`
- `status` — `draft` | `active` | `completed` [?]

**Job:** J1 — тренер складає і доставляє план; J3 — атлет бачить що треба сьогодні.
**Пов'язана з:** Trainer Profile · Athlete Profile · Workout Session · Workout Log.

---

### 6. Сесія тренування (Workout Session)

Один тренувальний день всередині програми. Містить список вправ з цільовими параметрами.

**Поля:**
- `id`
- `program_id` (FK → Training Program)
- `day_of_week` — `mon` | `tue` | … або порядковий номер
- `week_number` [?] — якщо програма диференціює тижні (тиждень 1 vs тиждень 2)
- `name` [?] — напр. «День A — жим», «Ноги»
- `notes` [?] — загальні нотатки тренера до дня
- `order` — порядок у програмі

**Job:** J1 (структурний будівельний блок плану); J3 (що показується атлету сьогодні).
**Пов'язана з:** Training Program · Planned Exercise · Workout Log.

---

### 7. Вправа — довідник (Exercise)

Базовий довідниковий запис. Може бути спільним або тренером-власним.

**Поля:**
- `id`
- `name` — назва («Присідання зі штангою», «Жим лежачи»)
- `video_url` [?] — YouTube / URL; підтверджено: Future Pro єдиний конкурент з цим (BM)
- `description` [?] — текстова інструкція
- `created_by` [?] — `trainer_id` (власна) або `null` (системна/загальна)
- `muscle_groups` [?] — теги груп м'язів

**Примітка MVP:** Чи є глобальний каталог або тренер просто вводить назву вправи inline — [?] відкрите рішення. Мінімум для MVP: тренер вводить назву тексту + необов'язковий відео-посилання.

**Job:** J3 — атлет бачить назву і може відкрити відео; J1 — тренер конструює план.
**Пов'язана з:** Planned Exercise · Set Log.

---

### 8. Вправа в плані (Planned Exercise)

Інстанція вправи всередині Workout Session з цільовими параметрами. Відрізняється від Set Log — це *план*, не *факт*.

**Поля:**
- `id`
- `session_id` (FK → Workout Session)
- `exercise_id` (FK → Exercise) або `exercise_name` inline [?]
- `target_sets` — ціль кількість підходів
- `target_reps` — ціль повторень (або діапазон: «8–12»)
- `target_weight_kg` [?] — може бути порожнє для вправ з власною вагою
- `rest_seconds` [?] — час відпочинку між підходами
- `notes` — нотатки тренера до вправи
- `order` — порядок у сесії

**Job:** J1 і J3 — саме це бачить атлет як «план сьогодні».
**Пов'язана з:** Workout Session · Exercise · Set Log.

---

### 9. Лог тренування (Workout Log)

Факт виконання атлетом конкретної Workout Session. Контейнер для Set Logs.

**Поля:**
- `id`
- `athlete_id` (FK → Athlete Profile)
- `session_id` (FK → Workout Session) — прив'язаний до плану або `null` для «вільного» тренування [?]
- `date` — дата виконання
- `started_at` [?] — час початку
- `completed_at` [?] — час завершення
- `status` — `in_progress` | `completed`
- `athlete_note` [?] — нотатка атлета після тренування (самопочуття, коментар)

**Job:** J2 — тренер бачить факт виконання; J4 — атлет логує підходи (через Set Logs); E2 — зусилля атлета стають видимими.
**Пов'язана з:** Athlete Profile · Workout Session · Set Log · Trainer Feedback.

---

### 10. Лог підходу (Set Log)

Один записаний підхід всередині Workout Log. Найатомарніша одиниця виконання.

**Поля:**
- `id`
- `workout_log_id` (FK → Workout Log)
- `planned_exercise_id` (FK → Planned Exercise) або `exercise_name` inline [?]
- `set_number` — номер підходу (1, 2, 3…)
- `actual_reps` — скільки зробив
- `actual_weight_kg` — яка вага (0 для власної ваги)
- `rpe` [?] — оцінка складності (1–10), Rate of Perceived Exertion
- `note` [?] — короткий коментар до підходу
- `logged_at` — timestamp

**Це ключова сутність J4.** Саме сюди йде введення між сетами.

**Job:** J4 — атлет фіксує підхід за секунди; J2 — тренер бачить реальні дані; J5 — основа для розрахунку PR і графіків прогресу.
**Пов'язана з:** Workout Log · Planned Exercise · Exercise · Personal Record (обчислюється з цих даних).

---

### 11. Фідбек тренера (Trainer Feedback)

Async текстовий коментар тренера до тренування або до тижня.

**Поля:**
- `id`
- `trainer_id` (FK → Trainer Profile)
- `athlete_id` (FK → Athlete Profile)
- `linked_to` — `workout_log_id` (до конкретного тренування) або `week_ref` (дата тижня) — обидва варіанти в CLAUDE.md
- `text` — текст коментаря
- `created_at`
- `read_at` [?] — чи атлет переглянув (для notification badge)

**Job:** J2 — тренер відповідає по суті (не «ну як?»); E2 — атлет відчуває що зусилля бачать; S2 — розмова про результат, а не виправдання.
**Пов'язана з:** Trainer Profile · Athlete Profile · Workout Log.

---

### 12. Лог харчування — день (Nutrition Day Log)

Контейнер для всіх записів харчування за один день.

**Поля:**
- `id`
- `athlete_id` (FK → Athlete Profile)
- `date`
- *(решта обчислюється агрегацією з Nutrition Entry: total_kcal, total_protein, total_fat, total_carbs)*

**Job:** J4-суміжне (логування їжі аналогічно логуванню підходу — ручне введення); J5 — макрос-графіки в динаміці; підтверджено: Lifesum/Garmin/Noom — manual entry норма (Г3).
**Пов'язана з:** Athlete Profile · Nutrition Entry.

---

### 13. Запис харчування (Nutrition Entry)

Один прийом їжі або продукт всередині дня.

**Поля:**
- `id`
- `nutrition_day_id` (FK → Nutrition Day Log)
- `name` — назва страви / продукту (вільний текст)
- `calories_kcal`
- `protein_g`
- `fat_g`
- `carbs_g`
- `meal_type` [?] — `breakfast` | `lunch` | `dinner` | `snack`
- `logged_at`

**Job:** та сама логіка що J4 — ручне введення з мінімальною фрикцією; підтверджено: макро-прогрес-бари Lifesum (П3).
**Пов'язана з:** Nutrition Day Log.

---

### 14. Запис прогресу тіла (Body Progress Entry)

Виміри тіла атлета в певний момент часу.

**Поля:**
- `id`
- `athlete_id` (FK → Athlete Profile)
- `date`
- `weight_kg` — вага тіла (основне поле)
- `waist_cm` [?] — обхват талії (опціонально)
- `chest_cm` [?] — обхват грудей (опціонально)
- `hips_cm` [?] — обхват стегон (опціонально)
- `photo_url` [?] — nice-to-have в MVP (CLAUDE.md)
- `note` [?]

**Примітка:** Виміри [?] позначені — їхня корисність для тренера не підкріплена jobs (jtbd.md: «жоден job не каже "тренер переглядає обміри"»). Вага тіла — так (J5). Сантиметри можна відкласти.

**Job:** J5 — атлет бачить динаміку ваги в часі (прогрес-графік).
**Пов'язана з:** Athlete Profile.

---

### 15. Особистий рекорд (Personal Record / PR)

Максимальна вага або кількість повторень для конкретної вправи, зафіксована атлетом.

**Тип:** обчислюваний або кешований.
- **Варіант А (computed):** PR вираховується на льоту з Set Logs при відкритті сторінки прогресу. Не зберігається окремо. Простіше, але повільніше при великій кількості даних.
- **Варіант Б (cached/event):** PR зберігається як окремий запис і оновлюється при кожному новому Set Log якщо значення перевищує попередній рекорд.

**Поля (якщо Варіант Б):**
- `athlete_id` (FK → Athlete Profile)
- `exercise_id` / `exercise_name`
- `max_weight_kg` — максимальна вага за 1 підхід
- `max_reps_at_weight` [?] — повтори при цій вазі
- `achieved_at` — дата і лог підходу де це сталося

**Job:** J5 — «місяць тому я піднімав менше» — PR є прямим доказом прогресу.
**Пов'язана з:** Set Log · Exercise · Athlete Profile.

---

## Карта зв'язків

```
Trainer Profile ──────────── Training Program
      │                            │
      │ (через Connection)         ├── Workout Session
      │                            │       │
Athlete Profile ─────── ──── ──── │   Planned Exercise ── Exercise
      │                            │       │
      ├── Workout Log ─────────────┘   Set Log
      │       │                            │
      │       └── Trainer Feedback     (агрегат → PR)
      │
      ├── Nutrition Day Log
      │       └── Nutrition Entry
      │
      └── Body Progress Entry

Trainer-Athlete Connection (Invite Code → Connection)
      links: Trainer Profile ↔ Athlete Profile
      enables: усі потоки вище
```

---

## Під питанням

Ці об'єкти або не мають підтвердженого job, або MVP свідомо обходить їх.

| Об'єкт | Чому під питанням |
|---|---|
| **Ціль атлета (Goal)** | CLAUDE.md згадує «goals» в athlete view, але жоден job не формулює «хочу поставити ціль». Може бути полем в Athlete Profile (`goal_weight_kg` [?]), не окремою сутністю. |
| **Глобальний каталог вправ** | MVP може обійтись inline-назвою вправи в полі тексту. Повноцінний каталог з пошуком — складність без підтвердженого job; тренер просто вводить «Присідання». |
| **Нотифікація (Notification)** | CLAUDE.md: «in-app notification badges, no real push». Потребує або лічильника (simple: computed з unread feedback) або окремої таблиці. Механізм, не first-class entity. |
| **Тренувальний тиждень (Week)** | Структурна одиниця всередині Program. Може бути просто `week_number` на Workout Session, а не окрема таблиця. |
| **Фото-прогрес (Photo)** | CLAUDE.md: nice-to-have. Немає підтвердженого job окрім J5 (підтип). Поле `photo_url` в Body Progress Entry вистачає для MVP. |
| **Пошук тренерів / Маркетплейс** | Свідомо виключено — MVP використовує invite code. З'явиться тільки з post-MVP потребою. |
| **Ачівки / Бейджи** | Design direction: «light gamification». Жоден job не вимагає. Не будувати в MVP. |
| **Пресети харчування (Nutrition Presets)** | CLAUDE.md згадує «presets» поряд з manual entry. Що саме — [?]. Можливо збережені попередні записи, а не окрема сутність. |
