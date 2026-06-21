# Sprint 90 — Retro

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

## What the sprint produced

[Sprint 90](57-sprint-90--the-app-driver-refactor.md) was the small, design-only sprint: produce the intermediate design document for the app driver before any code moves. It delivered [Reference Desk ch.13 "The Redesign"](../reference-desk/13-the-redesign.md) — the one rule and its five literal principles, the target class catalogue, the inheritance hierarchy, the dependency graph, the patterns as `now → target` examples, and a file-by-file removal plan. It is grounded: the catalogue and removal plan were written against the [introspect tool](../reference-desk/09-codebase-index--introspect.ts) output over `.claude/src/`, not from memory, and the chapter passes the link checker (776 files, 4449 links, 0 broken).

## The discussion that validated it

Doug's validation method was the discussion itself — the unit of thought within a team. The question: is this ready to replace the codebase with something much less brittle? The room moved, and what it surfaced is the retro's real content.

**Cleaner is not the same as less brittle (Claude, Cathy).** The brittleness that cost sixteen sprints was never the god objects or magic strings — those are ugly, not flaky. It was the *reality boundary*: a lazy-rendering accessibility tree, vanishing streaming indicators, the home→conversation transition. Cathy drew the distinction the whole discussion turned on: **self-inflicted brittleness** (method on the wrong object, silent magic string, god-object coupling) versus **environmental brittleness** (the app renders differently than modeled). The redesign makes the first kind *unrepresentable*. It leaves the second kind exactly where it was. No type system protects you from reality.

**The design has never touched the running app (Adam).** It is verified twice — introspect confirms the current surface is real, the link checker confirms the docs resolve — but both check *static* truth. "Clean" is not "works." Sprint 87 looked right too.

**Big-bang replacement is the same risk paid all at once (Arthur, moved).** Arthur came in ready to ship the removal plan and moved off it: delete two files, decompose two god objects, rewrite five controllers, break every test, *then* discover whether the reality boundary still bites — that pays the whole risk at the end, the most expensive place to learn.

**The slice that validates is the one that crosses the boundary (Queenie).** "Prove a slice" is empty until you name which. Not a slice that exercises clean OO — the slice that hits the environmental tests the design *cannot* answer structurally (test 15 shell serialization, test 16 background reading, streaming completion, the transition).

**Decision #4 was deferred, not settled (Claude, conceded).** Ch.13 marked `newChat(): HomePage` → reach `ConversationPage` by "reconstitute-and-confirm, no macro" as settled. It isn't — it's the one place the clean design hands the hard problem to an unproven mechanism, and it's exactly where 87/88 died.

**The win and the trap are the same shape (Libby).** The win: for the first time in this arc, the plan is grounded and honestly marked target-not-built — no hallucinated synopsis, a genuine break from 87 and 89. The trap: a design document this complete is the kind of artifact that gets mistaken for the work being done — the same way Sprint 89's tidy test table read as "covered." The map is not the territory. Ch.13 is worth exactly as much as the first time it's driven against the real app.

## The conclusion (and the correction to Sprint 91)

**Is it ready to replace the codebase?** No — that was never this sprint, and it shouldn't be claimed.

**Is it ready to drive Sprint 91?** Yes, with one correction the discussion produced: **Sprint 91 does not open with the removal plan.** It opens with a **vertical spike** — the minimum new objects to send from the home screen, cross the transition, and read one real streaming response to completion, run against the live app until reliable. This is the environmental boundary the design cannot prove on paper (decision #4, tests 15/16, streaming).

- If the spike holds, the removal plan in ch.13 executes as written — careful labor on a proven path.
- If it doesn't, we found out at the cost of five new classes, not forty rewritten ones.

Cathy's point on why the redesign earns its keep even unfinished: the clean object model makes the failure **diagnosable**. When the transition breaks, you will know whether it's the navigation confirm, the streaming sensor, or the foreground gate, because each now lives in exactly one place. The old god object could never tell you that.

## The sanity test — five invariants confirmed

Before moving to Sprint 91, Doug stated the architecture's invariants as theorems and asked the team to sanity-test the design against them. All five hold in the design; two are breached by the *current* code and the design corrects both. Now written into [ch.13 as a literal audit checklist](../reference-desk/13-the-redesign.md#layer-invariants--the-sanity-test).

1. **A class hierarchy that represents the app.** ✓ `Page` + four screen subclasses; items compose.
2. **Very different from the current code; much changes.** ✓ The removal plan is explicit.
3. **Gateway in every View method, never in controllers.** ✓ With the precision that the verify sensor the gateway polls is a *raw* controller call, not itself gateway-wrapped (or it recurses).
4. **Controllers touch the UIA tree; View methods never do.** ✓ in design. *Current breach:* `composer.ts` (a View) calls `uia.readText()`; decision #2 removes it. Sprint 91 audits every View file for a stray `Uia` import.
5. **Controllers have no gateway — that's the View's job.** ✓ in design. *Current breach:* `conversation-controller.ts` runs `gateway.waitFor` inside `waitForResponse`; the cleanup moves the waiting to the View. `chat-list-controller` and `composer-controller` already obey 3–5 — the reference models.

## The lesson

A design document is validated by being driven, not by being complete. The redesign's worth is not that it replaces the codebase — it's that it makes the one hard problem *legible and located*, so the spike that tests it can say exactly what broke. Spike the reality boundary first; migrate second.
