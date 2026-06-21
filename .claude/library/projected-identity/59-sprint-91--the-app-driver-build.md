# Sprint 91 — The App Driver Build

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

## What this sprint is

Focused coding. Implement the [design document](../reference-desk/13-the-redesign.md) against the [layer invariants](../reference-desk/13-the-redesign.md#layer-invariants--the-sanity-test). Per the [Sprint 90 retro](58-sprint-90--retro.md): **spike the reality boundary first, migrate second.** Breaking existing tests is expected.

> **Scope as delivered (see the [retro](60-sprint-91--retro.md)):** Sprint 91 delivered **M0 — the foundation and the documentation**: a typecheck gate where there was none, the app object model compiling clean (0 errors), the `Composer` rewritten to decision #2, invariant 6 (async/non-blocking) added, and the design documentation (ch.13) and the sending IS-chapter reconciled with shipped code. The **live-app build (M1–M3)** and **the 14 acceptance tests** carry to **Sprint 92** — the build can only be validated against the running app, gated by those tests.

## Ground truth measured at the start (not guessed)

Before planning, the team stood up a typecheck gate (`.claude/tsconfig.json`, ESM/Bundler to match how `tsx` runs) and measured the real state with `tsc --noEmit`:

- **199 type errors total; 23 in the core (non-`scripts/`) library.** The ~176 script errors are mostly disposable experiment/old-test files.
- **The codebase does not compile.** Concretely: `claude.ts:95` constructs `new Composer(...)` with 1 of 3 required args; `session.ts` calls `compose()`/`send()`/`deleteConversation()` that don't exist on `Claude`; `composer.ts` verify-callbacks return `Promise<boolean>` where `void` is expected. This — not a test gap — is why 0 of the 19 acceptance tests ever ran.
- **Correction to the design doc's "Part 2 already done":** `claude.ts` still carries the always-on page properties (`conversation`, `home`, `project`, `projects`, `projectsGrid`, `projectConversations`) and `launch(): Promise<void>`. The page-property removal has *not* happened; it's part of this sprint.

There was no compile gate at all — `tsx` transpiles each file alone and never checks across files, which is how a constructor-arity break sat in `main` undetected. **Standing up the gate is M0.**

## Milestones

### M0 — A compiling core, on a gate

- Keep `.claude/tsconfig.json` as the typecheck gate; wire it into the [audit](../our-skillset/18-audit.md) so "does the driver compile" is checked, not assumed.
- Delete the disposable `src/scripts/` experiments and superseded tests that account for most of the 199 errors (they target the old shape — let them go, per the removal plan).
- Drive **core errors to zero**. Done when `tsc --noEmit` is clean for the core library.

### M1 — Launch and reconstitute a typed Page (decision #1)

- `Page` base exists and is the right shape. Add `HomePage extends Page` and a minimal `ConversationPage extends Page`.
- `Claude.launch(): Promise<Page>` via reconstitute-and-confirm: read last-known screen, build that page, confirm with `detectScreen()`; on mismatch `goHome()` → `HomePage`.
- **Spike run:** launch against the live app, confirm the returned object is the correct typed page for the actual screen. This is the precondition for everything else — you must reliably *know* you're on home before sending.

### M2 — Send from home, cross the transition (decision #4)

- `HomePage.composer.type(q)` then `composer.send()` (parameterless; confirms its own draft cleared — `Uia` import dropped per decision #2, the "text grew" check moves to the page).
- Obtain the new `ConversationPage` through the same reconstitute-and-confirm — **no `sendAndGetConversation()` macro.**
- **Spike run:** send from home against the live app; confirm arrival on a real `ConversationPage` with the message present. This is the exact transition that died in Sprints 87–88.

### M3 — Read one streaming response to completion

- `ConversationPage.response` + sensors `isResponseComplete()`/`hasResponseContent()`; the View waits via `gateway.waitFor` (the wait moves *out* of `conversation-controller`, invariant 5).
- **Spike run:** read one real streaming response to completion (content-verified, scroll-to-bottom first), including the >1-min extended-thinking case.

**If M1–M3 hold, the spike is proven.** Only then does the [removal plan](../reference-desk/13-the-redesign.md#removal-plan-file-by-file) execute — decompose the god objects, delete the duplicate files, clean the five controllers. If a milestone breaks, the clean object model localizes the failure (navigation confirm / streaming sensor / foreground gate).

### Then — close the loop

- `think.ts` and the [`/think` skill](../our-skillset/20-think.md) call only methods that exist; recompile through the [skills compiler](../..environmentalism/04-on-skills--compiler.ts).
- The [19 acceptance tests](55-sprint-89--think-acceptance-tests.md) written fresh against the new driver, **reliably** green (Queenie's bar; tests 15/16 especially).
- [Reference Desk ch.10](../reference-desk/10-architecture-patterns.md)/[ch.12](../reference-desk/12-the-app.md) and [Thoughtfulness ch.4](../thoughtfulness/04-the-code.md) corrected from the built code, with `///:` annotations updated in lockstep.

## Definition of done

The driver compiles on the gate; M1–M3 proven against the live app; the removal plan executed; `/think` runs on the new driver; 19 tests reliably green; docs corrected from code. **Fallback:** if the gate can't go green for the full think flow, ship a degraded manual `/think` and write it down.
