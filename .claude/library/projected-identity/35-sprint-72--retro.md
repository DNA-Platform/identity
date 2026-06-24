# Sprint 72 Retro

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

## What we built

The [Reference Desk](../reference-desk/.cover.md) book — 16 chapters, 990 lines. Written by Claude, Adam, and Libby from reading the code, the dna-library documentation, and the [Projected Research](../projected-research/.cover.md) sprint history. Code lifted to `.claude/src/` (134 TypeScript files).

## What we tested

The [full workflow test](../../src/scripts/test-full-workflow.ts) proved: send a prompt, wait, read response, navigate away, return, verify same conversation, read transcript, send again, read again. 9 of 10 steps passed. The deletion readiness check needs fixing.

The [diagnostics test](../../src/scripts/test-diagnostics.ts) proved: the gateway records successes and failures, navigation works, screen detection works, project file pane detection works.

## What we learned

- **Adam** — The parser works when the app is visible. Background reading (minimized) may not work in the current app version. The sidebar needs explicit refresh after finding an existing window.

- **Claude** — The response parser depends on the UIA tree structure. When the app updates, the parser breaks. The raw text read always works. The parser pattern matching is what's fragile.

- **Libby** — The [Voice protocol](../teamspeak/01-voice.md) was updated: the substrate is not Arthur. Falling back to Arthur for everything is the team model collapsing.

## What Doug corrected

- "Are you sure you read all that?" — don't write synopses from memory
- "Why is it so hard to treat the library like a programming language?" — spec violations are type errors
- "The substrate is not Arthur" — dispatch to the right person
- "Always minimize" — give Doug his computer back
- "Fixed waits are the biggest code smell" — verify, don't assume
- "If you're going around the app, fix the app" — don't work around the abstraction
- "Write as you test" — every finding goes in the book immediately
