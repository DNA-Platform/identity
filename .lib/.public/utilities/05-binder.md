# Binder

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-28 with [Sprint 91](../projection/96-sprint-91--the-comments-leave-the-code.md); the code is [`src/utilities/Binder.ts`](../../package/src/utilities/Binder.ts), the promises in [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx). The class's name is a PROXY: it is the runtime's reader of what the binder wrote, and shares the binder's name.***

---

## What it is

**The one place the runtime reads the compiler's form.** The compiler writes `[text](identifier)` for every form of the notation and nothing else — Doug, 2026-09-24: *"It spits out `[]()`."* — and any component that wants either half reads it through this and never parses for itself. One method and one instance.

| member | what it is |
|---|---|
| `reference(copy)` | the two halves of `[text](identifier)`, `name` and `identifier`, each trimmed — or nothing, when the copy is not exactly that form; the match is anchored, so a form with prose either side of it is not one |
| `binder` | the one instance every component reads through |

## How it is extended

It is not. A component that reads the compiler's form calls `binder.reference(html.copy(this.text))` — [Mention and Means](../writing/18-mention-and-means.md) do, and so does anything of a library's own that reads a form — and stands what it will on the halves. A second parser of the form anywhere in `src` would be the rule in two places.

## Promises

In [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx), *the binder writes `[text](identifier)` and any component reads both halves through it*: an identifier the compiler allocated, an id; one it resolved, a url; a string a component found for itself; nothing for copy that is not a reference; anchored, so prose either side makes it not one.

## Gate

Measured 2026-09-28: the package 302 of 302, typecheck 0.

**Names.** Ours, flagged: `Binder`, `binder`, `reference`.
