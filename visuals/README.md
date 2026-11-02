# visuals/ — власні фото Forge

Портрети для аватара (`.userpic`). Склад набору визначає колонка «Фото» в `ui/inventory.md`, наново його не вирішуємо:

| Тип | Що каже inventory.md | Генеруємо? |
|---|---|---|
| Портрет тренера / атлета | Аватар з ініціалами — **Можливо** (`avatar_url [?]` у `sitemap.md`) | Так: 6 + 6 (зроблено 8 — квота 30.10.2026; `athlete-sofiia`, `-ivan`, `-dmytro`, `-artem` — наступний запуск) |
| Деталі середовища (штанга, диски, магнезія, лавка) | Жоден компонент не має фото середовища | Ні |
| Вправа | Картка вправи — **Відкрито** (прев'ю відео тренера, `concept/concept.md`) | Ні, доки питання відкрите |

Куди фото можна ставити: лише в аватар — свій профіль у шапці, чужий аватар атлета в тренера, великий аватар у картці профілю. Нотатка тренера аватара не має (inventory.md: «лише ім'я текстом»).

## Колорит

Під палітру «Чавун» з `DESIGN.md`: холодний нейтральний (≈5500 K), тло — матовий темний графіт, близький до `cast #222427`, щоб портрет сидів на поверхні `knurl #2B2E32` без світлої плями. Тіні приглушені, контраст низький, насиченість трохи знижена, шкіра природна. Жодного жовтого: жовтий у продукті — лише фарба дії (One Paint Rule).

## Базовий промпт

`generate.mjs` бере цей блок дослівно й дописує в кінець рядок суб'єкта з таблиці нижче.

```style
Square 1:1 close head-and-shoulders portrait photograph for a fitness app avatar, framed tight: the face fills the middle of the frame, crop at the top of the shoulders. Subject centred, looking calmly at the camera with a relaxed, neutral expression, mouth closed or a faint natural smile. Plain seamless matte backdrop in even dark charcoal graphite (close to #222427), no texture, no light patches, no window shadows on the backdrop. Soft diffused overcast window light from one side, cool neutral colour temperature around 5500K, gentle fill, muted shadows, low contrast, slightly desaturated grade, true-to-life skin texture without retouching gloss. Shot on an 85mm lens at f/2.8, eye-level, documentary candour rather than advertising. Ordinary person, ordinary build. Clothing is plain and unbranded.
Strictly avoid: muscular or bodybuilder physiques, flexing, shirtless, poster or hero poses, crossed arms power pose, mirror selfies, gym interiors, neon or coloured rim light, sparks, smoke, haze, lens flare, any visible text, letters, numbers, logos, brand marks or stripes on clothing, jewellery that reads as a logo, yellow or orange cast.
```

## Суб'єкти

| Файл | Суб'єкт (дописується до базового промпту) |
|---|---|
| trainer-maksym.jpg | Subject: Ukrainian man, 38, strength coach, short dark hair with some grey at the temples, short beard, plain dark grey crew-neck t-shirt. |
| trainer-iryna.jpg | Subject: Ukrainian woman, 34, strength coach, dark brown hair in a low ponytail, no makeup look, plain charcoal zip-neck training top. |
| trainer-andrii.jpg | Subject: Ukrainian man, 44, coach, close-cropped greying hair, clean-shaven, faint lines around the eyes, plain black long-sleeve top. |
| trainer-tetiana.jpg | Subject: Ukrainian woman, 41, coach, shoulder-length ash-blonde hair, plain slate-grey sweatshirt. |
| trainer-viktor.jpg | Subject: Ukrainian man, 29, coach, short light-brown hair, light stubble, plain navy t-shirt. |
| trainer-nataliia.jpg | Subject: Ukrainian woman, 31, coach, short dark bob haircut, plain dark green-grey t-shirt. |
| athlete-olia.jpg | Subject: Ukrainian woman, 27, amateur lifter, auburn hair tied back, slightly flushed cheeks, plain heather-grey training t-shirt. |
| athlete-oksana.jpg | Subject: Ukrainian woman, 24, beginner, long straight dark hair loose over the shoulders, plain black hoodie. |
| athlete-sofiia.jpg | Subject: Ukrainian woman, 33, recreational athlete, curly light-brown hair in a bun, freckles, plain grey-blue tank top with wide straps. |
| athlete-ivan.jpg | Subject: Ukrainian man, 30, amateur lifter, short blond hair, round face, plain grey t-shirt. |
| athlete-dmytro.jpg | Subject: Ukrainian man, 22, beginner, messy dark hair, slim build, plain charcoal hoodie. |
| athlete-artem.jpg | Subject: Ukrainian man, 35, office worker who trains three times a week, receding hairline, short beard, glasses with thin metal frames, plain dark t-shirt. |

## Як згенерувати ще

1. Ключ — у `.env.local` у корені репо (у git не потрапляє): `GEMINI_API_KEY=…` (Nano Banana, потрібна оплата в Google) або `HF_TOKEN=…` (безкоштовно: Space FLUX.1-Krea-dev на Hugging Face, денна квота GPU ≈ кілька портретів; запуск з `IMAGE_PROVIDER=hf`, якщо в файлі є обидва ключі).
2. Додай рядок у таблицю «Суб'єкти» (новий файл + суб'єкт у тому самому ключі: вік, роль, зачіска, проста одежа без бренду).
3. `node visuals/generate.mjs` — згенерує лише відсутні файли; `node visuals/generate.mjs athlete-olia.jpg` — перегенерує один.

Модель — Nano Banana (`gemini-2.5-flash-image`), змінна `GEMINI_IMAGE_MODEL` її перевизначає. **Поточний набір зроблено FLUX.1-Krea-dev** (безкоштовний Space на Hugging Face): ключ Gemini без оплати не генерує зображень. Промпт той самий; якщо колись перегенеруєш Nano Banana — переглянь колорит поруч зі старими, щоб набір лишився одним. Вихід — JPEG 400 × 400: генерація ужимається до 512 px, потім центр обрізається до 400, щоб зрізати смугу вікна чи пляму світла по краях і дати обличчю більше кадру (найбільший аватар — 96 px у картці профілю, тож 400 — запас на 3× щільність з лишком).

Інший сервіс (OpenAI, Magnific) — той самий базовий промпт і рядок суб'єкта; міняється лише виклик API і ключ.

Перед тим як ставити фото в продукт — переглянь кожне на заборонене: накачані тіла, пози з дзеркала, спортзал з неоном, вогники й дим, бренди й логотипи, будь-який текст.
