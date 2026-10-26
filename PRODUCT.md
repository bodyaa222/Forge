# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js + TypeScript, Tailwind CSS, Supabase (auth, database, storage), Vercel. Mobile-first responsive web app; no native wrapper.

## Users

- **Primary: trainer (Максим).** Online personal trainer with 5–10 clients, today running them through Telegram + Google Sheets. Decides to adopt Forge and only then invites athletes. Job: send a plan without copy-paste, see whether the client really trained without asking in chat, leave a comment in two minutes, have one screen showing everyone and who is falling behind. (`research/personas.md`, `research/jtbd.md` J1, J2, E1)
- **Secondary, highest frequency: athlete with a trainer (Оля).** Opens the app in the gym, needs today's plan immediately and logs a set between sets in 5–10 seconds. Wants to see progress in numbers and know the trainer sees the effort. (J3, J4, J5, E2, S2)
- **Secondary: self-coached athlete considering a trainer (Дмитро).** Wants a plan and real data visible to a trainer, but not surveillance or daily check-ins.

## Product Purpose

Close the gap between the training plan on paper and actual execution: plan and real performance live in one place, so the trainer can adjust in time and the athlete always knows what to do today. Success = the loop trainer sends plan → athlete logs → trainer sees without asking runs every week.

## Positioning

Remote coach + athlete loop (validated by Future Pro at ~$149/mo) made accessible for everyday trainers who currently live in Telegram + Sheets, with faster athlete logging and simpler trainer onboarding than Trainerize / TrueCoach.

## Operating Context

- Athlete: phone in hand in the gym between sets, often poor light, sweaty hands, seconds of attention.
- Trainer: phone between clients or a laptop at a desk, scanning 5–10 athletes, writing short async comments.
- One account = one role, fixed at registration. Connection via trainer invite code / link.

## Capabilities and Constraints

- MVP: email + password auth; invite code; athlete logging of workouts (exercise, sets, reps, weight, rest), nutrition (manual entry only), body weight + measurements; trainer program builder + assignment; exercise video references (YouTube / URL); async text comment per workout or week; progress charts and records; in-app badges only.
- Out of MVP: chat, real push notifications, dual role, OAuth, barcode / food database, full photo gallery, monetization.
- Terminology and copy follow `voice.md`; every product string is tracked in `microcopy.md`.

## Brand Commitments

- Name: Forge. No existing logo or colors; brand built from scratch.
- Brief: premium, modern, motivating, athletic, not a generic fitness app.
- Voice (`voice.md`): motivation is a number, not an exclamation; between sets one action, one line; body and food as fact without reproach or forecasts; praise and advice come only from the trainer, never from Forge. No exclamation marks, no emoji in system messages, no "успішно", no streak / fire mechanics.
- Designer taste and anti-references: `concept/concept.md` → «Смак дизайнера».

## Evidence on Hand

- Research: `research/research.md`, `research/personas.md`, `research/jtbd.md`.
- Visual references: `concept/references.md`, `concept/references.html` (Mobbin screenshots in `concept/refs/`, internal study use).
- Wireframes: `wireframes/` (35 screens); IA: `sitemap.md`, `flows.md`.
- No real user interviews, testimonials or usage data yet; personas are hypotheses. Do not fabricate customers, metrics or quotes.

## Product Principles

1. The trainer–athlete loop is the product; every screen either feeds it or reads from it.
2. Today first: the athlete's entry point is today's plan, zero searching.
3. Logging speed beats completeness: a set is saved in seconds or the loop breaks.
4. Data over judgement: Forge shows what happened; evaluation belongs to the trainer.

## Accessibility & Inclusion

WCAG 2.1 AA: text contrast ≥ 4.5:1 (large numerals ≥ 3:1), touch targets ≥ 44 px (athlete logger aims for ≥ 48 px), state never carried by color alone. Gym lighting and one-handed use are the stress case.
