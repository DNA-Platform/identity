# Html

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***Written 2026-09-28 with [Sprint 91](../projection/96-sprint-91--the-comments-leave-the-code.md); the code is [`src/utilities/Html.ts`](../../package/src/utilities/Html.ts), the promises in [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx). The class's name, `HtmlUtilities`, is a PROXY.***

---

## What it is

**The copy of a writing: what was written in it, as one string.** A writing's text is a [Collection](01-collection.md) of chemicals; the strings and elements written into it stand in it as blocks, and this joins the blocks' elements. It is one level deep — the prose around a nested writing and not what is inside it — and it never meets an annotation, since the bond sorts annotations out of the text before anything reads it. One method and one instance.

| member | what it is |
|---|---|
| `copy(text)` | the `$Block`s of the collection, their elements joined; nothing for a writing with nothing written in it |
| `html` | the one instance |

## How it is extended

It is not. Anything that needs a writing's words as a string — a Mention or Means reading the compiler's form, a Reference reading its address, a Figure copying an append's contents — calls `html.copy`, and the rule that copy is one level deep and annotation-free lives here once.

## Promises

In [`.tests/reference.test.tsx`](../../package/.tests/reference.test.tsx), *the copy of a writing is what was written in it*: a string it was written with; the prose around a nested writing and not what is inside it; nothing for an empty writing; never an annotation.

## Gate

Measured 2026-09-28: the package 302 of 302, typecheck 0.

**Names.** Ours, flagged: `HtmlUtilities`, `html`, `copy`.
