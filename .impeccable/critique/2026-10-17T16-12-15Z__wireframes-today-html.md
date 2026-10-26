---
target: athlete Today screen, 4 states
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/Users/bohdan/Forge/wireframes/today.html"
target_fingerprint: "sha256:fae5be85571eea93a5c3a6bc615c92bbb78b99e74db159c8404feddeb4f42f2f"
target_path: /Users/bohdan/Forge/wireframes/today.html
timestamp: 2026-10-17T16-12-15Z
slug: wireframes-today-html
---
Method: dual-agent (A: design review · B: detector + headless-Chrome overlay)
Targets: wireframes/today.html, athlete-today-empty.html, athlete-today-error.html, athlete-today-loading.html (Чавун visual layer, text/markup frozen)

## Design Health Score: 28/40 (Good), before fixes
1 Status 3 · 2 Real world 3 · 3 Control 3 · 4 Consistency 3 · 5 Error prevention 3 · 6 Recognition 3 · 7 Efficiency 2 · 8 Minimalism 3 · 9 Recovery 3 · 10 Help 2

## Design specificity
Palette/type/material clearly Чавун; composition generic (stack of raised same-size cards, centred empty template). Signature moves (one casting with hairline rows, rack holes per set, unit demotion, dominant number) mostly blocked by frozen markup.

## Detector
12 findings / 2 rules: nested-cards 8 (ex-card ×5, empty-block ×2, error-block ×1; outer card = phone mock, likely false positive), em-dash-overuse 4 (advisory, mostly wireframe meta; product copy governed by voice.md). Browser: clipped-overflow-container on .phone-frame (false positive, main scrolls).

## Priority issues
1. [P1] Primary action below fold in today.html → FIXED: CTA section sticky above tab bar when button is live (:has).
2. [P1] Disabled Start ≈ Retry slab in error → FIXED: disabled is flat outline (concept.html synced).
3. [P2] Five raised cards for non-pressable rows → FIXED: one casting with 1px hairline rows; skeleton mirrored.
4. [P2] Yellow spent off-state (avatar), no dominant number → avatar steel (concept synced), session title balanced; dominant number / units / screen title need markup.
5. [P2] A11y in markup (div role=button without tabindex, no headings, error not announced, aria-label on span) → needs markup, not fixed.

## Persona red flags
Casey: CTA off-screen (fixed); cards look tappable. Sam: bell/avatar not keyboard reachable; no headings; error not announced. Jordan: empty variant B has no next step; disabled Start explained only by annotation.

## Minor
Annotation voice close to product secondary text; .flow-step tall; skeleton title height drift (fixed); trainer note same casting as rows.

## Copy flags (not changed)
«День A» → «Тренування А» (voice.md); «~65 хв» → «≈ 65 хв».
