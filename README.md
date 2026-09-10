# Forge

A mobile-first web platform connecting athletes and personal trainers — training plans, nutrition, body progress, and coaching feedback in one place.

> Solo project · 4–5 weeks · Next.js + TypeScript · Supabase · Tailwind · Vercel

---

## Repo Index

| Folder | What lives here |
|---|---|
| [`research/`](./research/) | Competitor analysis, benchmarks, UX patterns, conclusions |
| [`research/screens/ui/`](./research/screens/ui/) | 56 real UI screenshots from Mobbin — 7 fitness apps |
| [`wireframes/`](./wireframes/) | Low-fidelity wireframes (flows, layout sketches) |
| [`concept/`](./concept/) | Visual direction, moodboard, style exploration |
| [`tokens/`](./tokens/) | Design tokens — colors, typography, spacing, shadows |
| [`components/`](./components/) | Individual component specs and states |
| [`design-system/`](./design-system/) | Full design system documentation |
| [`handoff/`](./handoff/) | Dev-ready specs, export assets, implementation notes |
| [`CLAUDE.md`](./CLAUDE.md) | Full product brief (roles, MVP scope, stack, decisions) |

---

## Roles

**Athlete** — follows assigned training plan, logs workouts / nutrition / body metrics, tracks progress and PRs.

**Trainer** — builds and assigns programs, monitors all client data, leaves async feedback.

One account = one role, fixed at signup. Connection via trainer-generated invite code or link.

---

## MVP Features
- Email + password auth with role selection at signup
- Invite code / link trainer–athlete connection
- Workout logging (exercises, sets, reps, weight)
- Nutrition logging (manual: name + calories + macros)
- Body progress tracking (weight + optional measurements)
- Training plan builder with exercise video references
- Async trainer feedback per workout / week
- Progress charts and personal records

## Research (Lesson 1)

Competitive analysis of 7 fitness apps from Mobbin — real UI screenshots, benchmark table, UX patterns, hypotheses.

| App | Type | Key insight for Forge |
|-----|------|-----------------------|
| [Future Pro](research/screens/ui/future-pro-ios-e5c0e84e-d7e7-46cd-9662-23bffc92ca32/) | Direct competitor | Validates the coach+athlete model. Reference for in-workout layout and invite flow. |
| [Pushr](research/screens/ui/pushr-ios-b9fbf2d1-5e5d-4c38-b77d-2f22efb506be/) | Soft competitor | Schedule alone = product. Pill-row day selector pattern. |
| [Strava](research/screens/ui/strava-ios-1ac190cf-46ee-4c65-845d-38bb8354219d/) | Soft competitor | Workout summary card format. Split completion feedback. |
| [Noom](research/screens/ui/noom-ios-f23c1a62-7a7e-41e9-95f4-342a15a75a06/) | Soft competitor | Async coaching works. Lesson card format for trainer notes. |
| [Lifesum](research/screens/ui/lifesum-ios-1f1267a3-fa68-4112-a355-9b2d8bb1fecb/) | Soft competitor | Best-in-class nutrition UX. Macro bars + daily kcal pattern. |
| [Oura](research/screens/ui/oura-ios-a3164d3a-474c-4ecb-8180-67acda881aa6/) | Aspirational | Dark premium dashboard. Readiness score concept. |
| [Garmin Connect](research/screens/ui/garmin-connect-ios-0463877a-79d0-44f8-8e13-268fd9a3014a/) | Soft competitor | Subscription paywall design. Performance dashboard layout. |

→ Full analysis: [`research/research.md`](research/research.md)  
→ **Visual overview: [research.html — відкрити](https://bodyaa222.github.io/Forge/research/research.html)** (GitHub Pages)

---

## Stack
| | |
|---|---|
| Frontend | Next.js + TypeScript |
| Backend / DB | Supabase |
| Styling | Tailwind CSS |
| Deployment | Vercel |
