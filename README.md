# Forge

A mobile-first web platform connecting athletes and personal trainers — training plans, nutrition, body progress, and coaching feedback in one place.

> Solo project · 4–5 weeks · Next.js + TypeScript · Supabase · Tailwind · Vercel

---

## Repo Index

| Folder | What lives here |
|---|---|
| [`research/`](./research/) | Competitor analysis, user insights, references |
| [`research/screens/`](./research/screens/) | Screenshots and references from competitor apps |
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

## Stack
| | |
|---|---|
| Frontend | Next.js + TypeScript |
| Backend / DB | Supabase |
| Styling | Tailwind CSS |
| Deployment | Vercel |
