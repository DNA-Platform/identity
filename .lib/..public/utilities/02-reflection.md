# Reflection

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***Written 2026-09-23 with the class, to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/utilities/Reflection.ts`](../../package/src/utilities/Reflection.ts).***

---

## What it is

**The one place in the redraft that reflects on a class, authored the way v1 authors a utility.** Doug, 2026-09-23, refusing two functions on the collection: *"neither chemicalOf or classOf should be there. All of this complexity should be in the Annotations collection. You can create reflection utilities. Look how the class was designed in `library/.public` — you will see a mirroring. There is a way we author utilities. Start a reflection utility and put functions like that on that class."* So this is a class with an exported instance, `reflection`, as [v1's Reflection](../../../.public/package/src/utilities/Reflection.tsx) is — the file that already holds v1's `template`, `kind`, `names`, `kebab` and `slug`, and whose `authored` is the reading this one borrows.

| member | what it is | from |
|---|---|---|
| `classOf(given)` | the class of a given: a class as itself; a component through `$chemical`, the template chemistry keeps on the component it lifts; an element through its type; a chemical through its constructor. The link to `$chemical` is chemistry's, used as such and documented here | ruled 2026-09-23: *"this is okay. It should be documented. Use it"* |
| `chemical(given, parent?)` | the chemical of a given — the one already made, or one made through the framework's find-or-make or its eval form — parented to the given holder. This is what the collection's `made` did before the name was refused | ruled 2026-09-23: *"made is an illegal variable name"*; *"That is a serious word. I don't think you should be inventing it"* |
| `name(given)` | the authored class name: the `$` and any build decoration taken off, so a class bundled as `_$Writing2` and one written as `$Writing` both read `Writing` | v1's `authored`, the same reading; ruled 2026-09-23: *"You can easily access type on the template I think"* |
| `authored(name)` | protected: the stripping itself, `/^_*\$?/` and a trailing run of digits | v1, unchanged |

**Why `name` exists at all, and what it replaced.** A failure a person reads must say which writing it came from, and the root of chemistry offers no reading of a chemical's class: the real class is kept on a private symbol and spent only inside `toString`, so `this.constructor.name` answers `_$Writing`, the lifted template's spelling. v1 had already met this — *"a class name with the `$` it is written with and any build decoration taken off, so `$Editions` and a bundler's `_$Editions2` name the same kind"* — so nothing has to be pitched to chemistry and nothing has to be parsed out of a symbol.

## How it is extended

**It is not subclassed and it is not handed anything.** v1's Reflection is given the kinds it must ask `instanceof` about, through `knows`, because a utility that names a writing class cannot import one; this one names no class at all, so it needs none of that and the ring never forms. A reading arrives here when something in the library must ask a question about a *class* rather than about a writing — and a reading that can be answered by asking a collection, or by the writing itself, belongs there instead.

**Where it is reached from, which is the ruling that shaped it.** Doug, 2026-09-23: *"Most reflection should be related to the collections and the annotation collection. Try to keep things localized to it."* And: *"Reflection can be in the specifications. And that is where utilities might be best."* And: *"in the live code — the specs run in a .public test suite — in live code, the reflection should mostly happen in annotations."* So there are exactly two callers. The collections use `classOf` and `chemical`, which is the live path, and that is where the library's live reflection is concentrated. The specification uses `name`, to build the code a failure carries, and a specification runs only when the binder asks. Writing itself reaches reflection nowhere.

## Promises

None of its own. It is proven through its two callers: the collection's ten promises in [`.tests/collection.test.tsx`](../../package/.tests/collection.test.tsx), which take a given in each of its four forms and read what it was made into and what it was parented to; and the cascade's failures in [`.tests/writing.test.tsx`](../../package/.tests/writing.test.tsx), which read `Writing / Writing 1 / Writing 0` and so measure the authored name on a class the bundler renamed and on one a promise file declares.

## Gate

Typecheck 0 errors, quick build fresh, 77 of 77 across eight files on 2026-09-23, committed locally and not pushed.

**Names.** Doug's: `classOf`, `reflection`. Ours, flagged: `Reflection` after v1's, and `chemical` and `name` on it, both named for what they answer as v1's readings are.
