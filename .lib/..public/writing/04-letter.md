# Letter

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-22 with the unit, to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/writing/Letter.tsx`](../../package/src/writing/Letter.tsx), the promises [`.tests/letter.test.tsx`](../../package/.tests/letter.test.tsx).***

---

## What it is

**A Letter is the composition that takes anything.** The Genesis's first class, Text at E1, taking non-library content and nothing recursive; renamed Letter at E3, *"as a letter, it is allowed to have anything"*; and by the ruling of 2026-09-22 a Composition at level 1, *"Letter 1 to Book 7, Letter a Composition"*, whose parts are empty because what it holds is React, strings and writing that is not composition, level zero being *"implicitly non-compositional React"*. It stands `<Level>1</Level>` and `<Open />` in `$Define` and nothing else, since with no composition inside it strict and permissive have nothing to say. Its specification extends Composition's with one rule: **a letter holds no composition**, read from the contents and not the parts, because a Letter inside a Letter is a same-class child that `parts` splices away, and E1's *no recursive Text* is exactly that case.

| member | what it is | cited |
|---|---|---|
| `$Define()` | stands `<Level>1</Level>` and `<Open />` | E3, E12; ruling 3 |
| `specification` | `new LetterSpecification()`, extending Composition's | ruling 4 |
| `LetterSpecification.$holdsNoComposition` | no composition among the contents | E1: *no Text inside Text* |

## How it is extended

A Letter is not meant to be extended; it is the floor of the levels. A class that wants what a Letter takes and a level of its own is a Composition standing Open. Written as `<Letter>anything <b>at all</b></Letter>`, and a written `<Closed />` overrides the open it stands, after which prose is refused when asked, as the third promise shows.

## Promises

Three in [`.tests/letter.test.tsx`](../../package/.tests/letter.test.tsx): at level 1, open, no parts and no canonical whatever it holds, checking with its own specification and up to code; a Letter or a graded Composition inside refused when asked; a written Closed overriding the open it stands.

## Gate

Typecheck 0 errors, quick build fresh, 64 of 64 across six files on 2026-09-22, committed locally and not pushed.

**Names.** Doug's: `Letter`. Ours, flagged: `LetterSpecification` after the others; the rule `$holdsNoComposition`.
