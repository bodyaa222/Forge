# Forge Wireframes — Critique & Fix Log

*Аудит проведено: 13 жовтня 2026. Перевірено: 30 файлів (крок 7 + крок 8) проти `_conventions.md`, `sitemap.md`, `flows.md`.*

---

## Дефекти та статус

| # | Файл | Категорія | Що знайдено | Що зроблено | Статус |
|---|---|---|---|---|---|
| 1 | Усі 30 файлів | STYLE | `box-shadow: 0 2px 8px rgba(0,0,0,.08)` на `.phone-frame` — тіні заборонені конвенцією §8 | `sed` видалив рядок з усіх файлів | ✓ FIXED |
| 2 | `add-food.html` | STYLE | `color:#c00` на asterisk `*` для обов'язкових полів — поза палітрою | Замінено на `color:#333` | ✓ FIXED |
| 3 | `body-log.html` | STYLE | `color:#c00` на asterisk `*` — аналогічно #2 | Замінено на `color:#333` | ✓ FIXED |
| 4 | `invite.html` | STYLE | `font-family:monospace` на коді `FORGE-7X2K` — конвенція дозволяє лише `sans-serif` | Замінено на `font-family:sans-serif` | ✓ FIXED |
| 5 | `register.html` | STYLE | `font-family:monospace` на `<input id="invite-code">` | Замінено на `font-family:sans-serif` | ✓ FIXED |
| 6 | `nutrition-loading.html` | MISSING STATE | Файл відсутній; `flows.md` явно визначає Loading для екрана Харчування | Створено `nutrition-loading.html` зі skeleton-плейсхолдерами (sk-* CSS) | ✓ FIXED |
| 7 | `trainer-athlete-loading.html` | MISSING STATE | Файл відсутній; `flows.md` визначає Loading для картки клієнта (тренер) | Створено `trainer-athlete-loading.html` зі skeleton-картками | ✓ FIXED |
| 8 | `trainer-athlete-error.html` | MISSING STATE | Файл відсутній; `flows.md` визначає Error/мережа для картки клієнта | Створено `trainer-athlete-error.html` з [!]-блоком і retry → `trainer-athlete.html` | ✓ FIXED |
| 9 | `trainer-feedback-error.html` | MISSING STATE | Файл відсутній; `flows.md` визначає Error/відправка для фідбеку | Створено `trainer-feedback-error.html` з pre-filled textarea і retry | ✓ FIXED |
| 10 | `program-assign-empty.html` | MISSING STATE | Файл відсутній; `flows.md` (V→W) визначає Empty/немає атлетів при призначенні | Створено `program-assign-empty.html` з CTA → `invite.html` | ✓ FIXED |
| 11 | `athlete-today-empty.html` | DEAD END | Варіант B (план не призначено): `<button disabled>` без жодного активного виходу — Z3 тупик | Додано `<a href="profile.html">Перевірити профіль і підключення →</a>` | ✓ FIXED |
| 12 | `history.html` | DEAD END + MISSING ACTION | 5 карток тренувань без посилань — zone-label обіцяє перегляд, але дії немає | Додано `<a href="finish.html">Деталі тренування →</a>` в кожну картку; zone-label оновлено (деталь-екран поза MVP) | ✓ FIXED |

---

## Супутні зміни

- **Sidebar оновлено** в усіх 35 файлах: нові стани (nutrition-loading, trainer-athlete-loading/error, trainer-feedback-error, program-assign-empty) додано до дерева навігації без `class="planned"`.
- **State-nav оновлено**: `nutrition.html` / `nutrition-empty.html` / `nutrition-error.html` — додано пілюлю «завантаження»; `trainer-feedback.html` — «помилка відправки»; `program-assign.html` — «немає підключених атлетів».
- **trainer-athlete.html** — sidebar і state-nav оновлено агентом при створенні нових станів.

---

## Підсумок

| Категорія | Знайдено | Виправлено |
|---|:---:|:---:|
| STYLE | 5 | 5 |
| MISSING STATE | 5 | 5 |
| DEAD END | 2 | 2 |
| PLACEHOLDER | 0 | — |
| MISSING ACTION | 1 (входить у #12) | 1 |
| OFF-MAP | 0 | — |

**Загалом файлів після виправлень:** 35 (додано 5 нових станів).

---

## Відкриті питання (поза поточним скоупом)

- `history.html` — "Деталі тренування" веде до `finish.html` як placeholder. Окремий `workout-history-detail.html` відсутній у sitemap.md MVP; додати в наступній ітерації якщо підтвердиться потреба.
- `athlete-today-empty.html` Варіант B — Z3 залишається тупиком по суті (чекаємо тренера). Активний вихід до профілю — мінімальний порятунок, не вирішення.
