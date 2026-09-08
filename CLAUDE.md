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
