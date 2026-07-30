# Sprint 98 — The Precondition and the Visible Tree

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

## What this sprint is

A cross-cutting addition to the driver, in Doug's words:

> On every action, I want the UIA tree to be queried, I want the assumption of the controller tested on the UIA tree before being executed, and I want the UIA tree accessible in the case of any error, or whomever is operating this should be able to see the current tree at any time for any reason.

Three requirements. **R1** — every action queries the tree. **R2** — the controller's assumption is tested against the tree *before* the action fires. **R3** — the tree is available on any error, and on demand at any time, for any reason.

And the reason R3 is not a nicety, also his: *having the UIA tree always accessible is key because we need to be able to easily adjust the code, and the easiest way to do that is to look at it to see why the current implementation fails.* **The tree is a development instrument, not a diagnostic afterthought.** Every hard bug in this driver's history — the placeholder that reports itself as a value, the Stop button that appears on a mere acknowledgement, the streaming check that can't distinguish a slow start from a stall — was a case of the code believing something about the screen that the screen would have denied if anyone had looked. Making the tree cheap to look at is how those stop taking a sprint each.

The [Claude Nexus](71-sprint-99--the-claude-nexus.md) — the runtime that will host this driver and more — is **Sprint 99**. It has exactly one claim on this sprint's design, stated in [Out of scope](#out-of-scope-named-on-purpose).

## The state we start from — measured, not assumed

Everything below was measured against the code, not recalled.

- **The typecheck gate is real for the first time.** [Sprint 91](59-sprint-91--the-app-driver-build.md) certified "the app object model compiles clean" as its M0 deliverable, and it was true the day it was measured. But `typescript` was never a dependency, no runner ever invoked `tsc`, and the wiring into [`/audit`](../our-skillset/18-audit.md) that Sprint 91 planned was never done — so the claim was unverifiable for six sprints. TypeScript and `@types/node` are now devDependencies of [.claude/package.json](../../package.json) with an `npm run typecheck` script. Current state: **486 errors, 0 of them in the core driver** — all 486 in `src/scripts/` (467) and `src/exports/` (19). Sprint 91's claim survived verification.
- **The inverted edge.** [`Automation`](../../src/automation.ts) injects all seven of its tools into every controller, including the **gateway** — handing downward the tool the [layer diagram](../reference-desk/02-01-the-architecture--layers.md) puts above. Consequence: **51 `gateway.*` call sites across 7 of 8 controllers** (conversation 13, project 13, artifact-panel 7, composed-message 7, sidebar 5, model-picker 4, chat-list 2). Only `ComposerController` is clean.
- **And a second, transitive route to the same violation.** [`Navigator`](../../src/navigator.ts) holds a `Gateway` of its own, so removing the direct member does not close the hole while `navigator` remains in the bundle. What controllers actually reach for: `uia` 134, `navigator` 51, `gateway` 51, `keyboard` 46, `shell` 2 — and **46 of the 51 navigator calls are `requireScreen`**, which [P3](../reference-desk/13-the-redesign.md#p3--the-object-is-the-screen-an-unreachable-method-is-a-hierarchy-bug) already sentences to deletion. Only 5 are `detectScreen`. `navigator` therefore leaves on a later stage, not the first.
- **Invariants 4 and 6 also breached.** Three View components (`files-pane`, `project-file`, `text-content-dialog`) touch `uia` *and* `gateway` directly and hold mirrored screen state. [`window.ts`](../../src/window.ts) is still fully synchronous — the breach that already **failed in the field** with HRESULT 80004005 ([Sprint 92](61-sprint-92--the-driver-live.md#grounded-targets-from-sprint-91s-live-testing)).
- **Two classes named `Response` ship at once.** The structured [components/response.ts](../../src/components/response.ts) runs the page; the legacy [components/turn.ts](../../src/components/turn.ts) still runs the read-and-export path via `message.ts`, `conversation-controller.ts`, and `exports/format.ts`.

## The insight: one snapshot, three moments

Doug's three requirements, the Nexus goal, and the gateway inversion are not four problems. They are one, and it has a name: **the UIA tree snapshot is the medium of every action.** Read it *before* the action (precondition), read it *after* (verification), hand it over *always* (evidence). The same read, at three moments.

Two things follow, and both make the work smaller than it sounds.

**The mechanism is already in the code, unpaired.** [`ComposerController`](../../src/controllers/composer-controller.ts) has `hasSendButton()` seven lines above `clickSend()` — a sensor that is already the precondition of the actuator beside it, never linked to it. And every `uia.invoke()` already performs find-then-act internally; but [`Gateway.act`](../../src/gateway.ts) types the actuator as `() => void | Promise<void>` and **discards its boolean**. So today a "not found" is silently followed by a 30-second verify timeout that throws something opaque. **The precondition Doug is asking for is a failure that is already happening invisibly.** We are not adding a check — we are lifting an implicit find into an explicit, tree-based gate that fails early with the tree attached.

**R3 is likewise half-built.** [`Diagnostics`](../../src/diagnostics.ts) already dumps the tree via `captureOnFailure`. But it dumps *on failure only*, and *to a file*. The work is to make the tree a **returned object**, not a best-effort artifact on disk.

## The shape — `Instruments` and `GatedAction`

### `Instruments` — the narrowed edge

The gateway-free interface a controller is given. `Automation extends Instruments`; each controller's constructor parameter changes from `Automation` to `Instruments`, one at a time, and its gateway calls become compile errors.

**The name matters and was argued.** Controllers are *sensors and actuators*, and sensors and actuators are **instruments** — what a blind executor reads the world with and acts on it through. The driver models [a human at a screen with eyes and hands](../reference-desk/13-the-redesign.md#the-one-rule); instruments are precisely what that human has, and the gateway is the **judgment** they are not given. The rejected draft name, `ControllerKit`, named the thing by *who receives it*, which says nothing about what it is.

**It is not a cache** — the question was asked and the answer is worth recording. Nothing is stored, reused, or invalidated; it is the same object graph handed over through a smaller opening, a narrowing enforced at compile time. The genuine cache in this design is `TreeSnapshot`.

### `GatedAction` — the third beat

The gateway gains a beat: **precheck → act → verify**. An action passed to the gateway stops being a bare function and becomes a three-slot object:

```
GatedAction = { target, invoke, verify }
```

- **`target`** — the element query the actuator was going to search for anyway (control type + name). The View declares it at the call site; the gateway checks it against a snapshot *before* firing. This is R2: the controller's assumption, made explicit and testable.
- **`invoke`** — the controller actuator. Still blind. It does not know a precheck happened.
- **`verify`** — the controller sensor, polled after, exactly as today.

`TreeSnapshot` is an object with a lifetime of **one action**: taken before (serving the precheck), taken after (serving the verify), and reused by error capture, whichever is current. It can be *cheaper* than today's code, because one tree walk answers many existence checks instead of one shell round-trip per check.

**This shape is the entire coordination surface between M1 and M2, and it must be defined once, up front.** The inversion already reshapes what an action passed to the gateway *is*; the precondition merely adds the third slot. Define `GatedAction` with `target` optional in M1 and required in M2, or M1 ships a two-slot shape and M2 makes a second pass over every call site.

## Milestones

**Ordering is forced: inversion before precondition.** Add the precheck first and it fires from inside the seven controllers that still hold the gateway — in the wrong layer, entrenching the thing we are removing. You clean the choke point before you thicken it.

### M0 — The gate (done, this sprint's opening)

TypeScript installed, `npm run typecheck` runs, core at 0 errors. **Remaining M0 work:** wire `tsc --noEmit` into [`/audit`](../our-skillset/18-audit.md) so "does the driver compile" is checked and not assumed — the step [Sprint 91](59-sprint-91--the-app-driver-build.md) planned and never took. Decide and record the policy for the 486 `scripts/`+`exports/` errors: they are throwaway capture scaffolding ([ch.13](../reference-desk/13-the-redesign.md#the-response-as-a-polymorphic-collection-of-parts-doug-2026-06-21) calls them exactly that), so either exclude them from the gate by tsconfig or delete the dead ones. **Do not leave 486 errors sitting next to a gate that is supposed to mean something.**

### M1 — Un-invert the edge

Split `Instruments` out of `Automation` and flip each controller to it, **one controller at a time**, so errors localize to one file per stage and the driver stays buildable in between. The compiler audits each controller gateway-free instead of a reviewer's memory.

Order, green at every stage: **type first → chat-list** (delete the dead `open`/`openAt`) **→ model-picker → sidebar → artifact-panel → composed-message** (likely deletable dead code — the old compose path) **→ the `turn.ts` export migration → conversation-controller → project-controller + the three View hybrids together → retire `gateway` from the bundle → then `requireScreen`, and `navigator` leaves `Instruments`.**

Two things to hold onto. Several methods on the god controller get **deleted, not moved**: `rename` duplicates an already-clean page method, `waitForResponse` is infrastructure-as-method, and the `waitFor` loops invert *up* into `Response`. And the `turn.ts` migration is sequenced *before* the hardest controller on purpose: moving `exports/format.ts` off `turn.ts` lets us **delete** three of `conversation-controller`'s `gateway.read` methods rather than laboriously move them. Delete beats move.

### M2 — The precondition tier (R1, R2)

Add `precheck` to the gateway as the first beat. Introduce `TreeSnapshot` with a one-action lifetime. Convert call sites to `GatedAction`, declaring `target` where an element is being touched. Stop discarding the actuator's boolean. **Done means:** an action whose target is not on the tree fails *immediately*, names the element it expected, and carries the tree — instead of timing out for 30 seconds and throwing something opaque.

### M3 — The visible tree (R3)

`TreeSnapshot` becomes **serializable returned data**, not a file write. Every `DriverError` carries the snapshot that was current when it was raised. A `tree()` inspector on `Claude` returns the live tree on demand, for any reason, with no failure required. `Diagnostics.captureOnFailure` keeps writing its file — the file is a convenience, no longer the only way to see.

**Treat M3 as a development instrument, not a logging feature.** The test of whether it landed is not that the object exists — it is that the next driver bug is diagnosed by *looking at the tree* instead of by adding print statements and re-running. Make it readable by a person: a `toString()` that prints the tree the way a human would want to read it, filterable by control type and name, cheap enough to call in a loop.

## How the requirements are met

| # | Doug's requirement | What meets it | Milestone |
|---|---|---|---|
| R1 | On every action the UIA tree is queried | `TreeSnapshot` taken before and after each `GatedAction`; one walk serves both | M2 |
| R2 | The controller's assumption is tested on the tree before executing | `target` on `GatedAction`, checked against the snapshot in the `precheck` beat; the actuator's boolean is no longer discarded | M2 |
| R3 | The tree is accessible on any error | Snapshot as a field on `DriverError`, serializable | M3 |
| R3 | The operator can see the tree at any time for any reason | `Claude.tree()` inspector, human-readable, no failure required | M3 |
| — | *Why R3 matters:* adjust the code by looking at why it fails | The tree is cheap to print and filter; diagnosis replaces guess-and-rerun | M3 |

## Out of scope, named on purpose

- **The Claude Nexus.** Its own sprint — [Sprint 99](71-sprint-99--the-claude-nexus.md). It makes exactly one claim on *this* design: `TreeSnapshot` and the errors must be **serializable data returned to the caller**, never file writes — because over a wire the snapshot *is* the response payload and the error-with-tree *is* the error payload. **Build the nouns serializable now; build the wire not at all yet.**
- **`navigator.requireScreen`.** Deleted at the *end* of M1, as the step that lets `navigator` leave `Instruments` — not treated as its own concern.
- **`Page.id()` reading `auto.uia` in the base class.** Adjacent to the invariant-4 breach; deliberately not conflated with it.
- **Invariant 6 (async `window.ts`).** A separable parallel track. Named here so it is not forgotten again: it already failed in the field once.

## Open questions — honest ones

1. **Snapshot richness versus cost.** `allNames()` returns type and name, but clicks need geometry and disambiguation needs order, so a useful snapshot is a heavier structured PowerShell walk. Is it cheap enough to run twice per action? **Adam benchmarks this in M2 before the shape is fixed** — if it is not cheap, the snapshot degrades to names-only for the precheck and the richer walk happens only on error.
2. **Lazy rendering versus the precondition.** The UIA tree shows only *painted* elements ([lazy rendering](../reference-desk/02-04-the-architecture--app-model.md#lazy-rendering)). So a precheck that reports "the target is absent" may be a false negative for something below the fold — and a precondition that fails on things that are really there is worse than no precondition. Whose job is scroll-to-materialize: the View before it declares a target, or the precheck itself? **Unresolved. It is the one open question that can sink M2, and it gets answered before M2 is called done, not after.**

## Cleanup already landed

Done before the sprint opened, so the books stop lying while the code is being changed:

- [automation.ts](../../src/automation.ts) — the annotation said "Four tools"; the interface declares seven. Corrected, all seven named, the gateway marked as the layer violation *in the file that causes it*, and `navigator`'s transitive gateway noted beside it.
- [ch.02-01 Layers](../reference-desk/02-01-the-architecture--layers.md) — two new sections: [The inverted edge](../reference-desk/02-01-the-architecture--layers.md#the-inverted-edge) (the mechanism, the 51 sites, the navigator route) and [Instruments](../reference-desk/02-01-the-architecture--layers.md#instruments--the-narrowed-set) (the fix and why it is named that). The stale "8 of 9 controllers" note now names `ComposerController` as the one clean model and warns explicitly against imitating `ChatListController`.
- [ch.13 The Redesign](../reference-desk/13-the-redesign.md) — the false claim that `chat-list-controller` and `composer-controller` "are the reference models" replaced with a measured status of all three breached invariants. Its class tables said `ProjectsListPage`/`ProjectDetailPage` while its own settled section said `ProjectsPage`/`ProjectPage`; the code shipped the latter, so the tables were corrected to the code.
- [ch.12 The App](../reference-desk/12-the-app.md) — object mapping rebuilt from source: `ConversationItem`, `ConversationMenu`, `MoveConversationModal`, `ProjectChoice`, `ProjectItem`, the `Part` hierarchy, `Session`, and — catalogued for the first time anywhere — `Page.id()` and `Navigation`. The two-`Response` seam is now stated in the chapter rather than left to be tripped over.
- **The root `CLAUDE.md`, regenerated.** The [validation runner](../..environmentalism/05-on-validation.md) was returning **FAIL — 47 broken compiled links**, all in the repo-root `CLAUDE.md`, whose bare `library/…` links only resolve from inside `.claude/`. Cause: the `](library/` → `](.claude/library/` rewrite in [the setup tool](../..environmentalism/06-on-sync--setup.sh) runs *against projects*, and the identity repo is the source rather than a destination — so nothing ever generated its root file correctly. Recompiled and rewritten; the runner returns **PASS**. Recorded in [On Sync](../..environmentalism/06-on-sync.md#the-identity-repo-needs-the-root-rewrite-too). **This was blocking every push out of this repo, and it is off the sprint.**
- **The migration-note lesson, kept.** Ch.12's note promised reconciliation "as Sprint 92 lands." Sprint 92 landed; so did 93; the note outlived them by six sprints. It was rewritten rather than deleted, because *a promise to reconcile later is a debt, and the chapter should show what one looks like unpaid.*

## What this sprint cost before it started

The whole cleanup above, plus the four personal chapters written alongside it, was lost once — a working copy reverted, seventeen uncommitted files gone, five of which existed nowhere else. Recovered because the conversation still held the shared-library work and because each author's [session persists](../..environmentalism/08-on-brains.md#the-surprising-part-persistence-is-native) and could write their own chapters again. **Every guard in [On Sync](../..environmentalism/06-on-sync.md#the-mirror-hazard-the-sync-pauses-it-does-not-cold-automate) protects committed history; none protects a working copy.** Recorded there as [its own section](../..environmentalism/06-on-sync.md#uncommitted-work-is-not-protected-by-any-of-this). Commit before you sync.

## What we are deliberately not building

A validator that checks "identifiers named in prose exist in the source." It is **unsound**, not merely hard: removal plans backtick dead classes correctly, ["what does NOT exist" sections](../reference-desk/10-architecture-patterns.md) name forbidden symbols correctly, and target names appear in sentences structurally identical to live claims. A symbol table cannot recover that intent, and a checker that cries wolf on every correct migration note is worse than none.

What *is* sound and cheap: a `()`-callable-existence check scoped to `///:` annotations only, reusing the extractor in [09-codebase-index--introspect.ts](../reference-desk/09-codebase-index--introspect.ts) — roughly 36 candidate tokens today, near-zero false positives, running with the grain of [ch.11](../reference-desk/11-code-library-linkage.md)'s chosen direction. It would **not** have caught the "Four tools" undercount; count words are not checkable, and that honesty is the point. Stretch goal, and only if M1–M3 land.

## Definition of done

Every claim below has a truth-condition, per [Sprint 91's rule](60-sprint-91--retro.md).

1. `npm run typecheck` is green for the core driver **and** wired into `/audit`; the `scripts/`+`exports/` error mass is resolved by policy, not ignored.
2. `Instruments` exists; **zero** `gateway.*` call sites remain in `src/controllers/`; the gateway is gone from the `Automation` bundle. Checkable by grep and by the compiler.
3. `GatedAction` is the shape every gateway call uses, with `target` declared wherever an element is touched.
4. An action with an absent target fails immediately, names the element, and carries the tree — **witnessed live**, not merely compiled. Sprint 92's lesson: perceptual truth is not machine-checked.
5. `Claude.tree()` returns the live tree on demand, human-readable and filterable; every `DriverError` carries a serializable snapshot.
6. The open question about lazy rendering has a **written answer**, not a deferral.
7. The Reference Desk describes the code as built, `///:` annotations in lockstep — checked the same day, not promised for a later sprint.

**Fallback:** if the precondition cannot be made reliable against lazy rendering, ship M1 (the un-inverted edge) and M3 (the visible tree) and write down precisely why M2 did not land. No silent "done."
