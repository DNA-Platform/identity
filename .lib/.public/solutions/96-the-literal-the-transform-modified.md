# The Literal the Transform Modified

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** tooling · unread-query
- **sprint:** [Sprint 90](../projection/95-sprint-90--the-binder-reads-with-the-parser.md)

---

## Symptoms

**The manual's page printed the masthead's file with `<Means>[The Library](/the-library/)</Means>` where the file on disk says `<Means>$[ The Library ]</Means>`.** A Code figure prints the file exactly as written — that is what a figure of a literal is for — and the printed version carried the compiler's output instead. Every page of the manual showed it, since every page draws the whole book. Found 2026-09-28 by diffing a galley bound at Sprint 89's close against one bound with Sprint 90's reading, page for page: every page differed at the bundle's hash, and the manual's nine at this one line more. Nothing had been red: the bind reported success, the regression's forty promises were green, and the line reads as plausible code.

## What did not work

Reading the page by eye. The printed line is valid TSX and a reader who does not know the file expects a compiled reference there as much as a raw one. It was found by a diff, and the promise that now holds it compares the printed text to the file on disk, byte for byte, for every file the manual prints.

## The mechanism

The assembly imports each file accompanying a chapter with `?raw`, so that its text becomes an Append's; Vite loads such a module as one string literal holding the file. The `references` plugin decided whether to transform a module by its path alone — `id.split('?')[0]` — and dropped the query that said what the module was, so a raw module whose path ends in `.tsx` was parsed like any chapter, its one string literal scanned, and the `$[ The Library ]` inside it compiled to the address. The transform read a string as written, as Doug ruled, and this string was a whole file.

## The fix

**A raw module is a literal and is left as written.** The plugin reads the id's query, and one carrying `raw` returns untouched — [`reference/transform.ts`](../../package/.binding/reference/transform.ts), `literal`. The same file imported as a module still compiles, so the running head still links. Doug, 2026-09-28: *"In the literal resource, everything in there should be placed, as text, into the Append. It is a literal. While it can be used in the runtime in one way, putting it in the page is a separate thing, and it is the version written that is used not the version modified."* The regression promises that every file the manual prints equals the file on disk — nothing planted in a manual file to prove it; the masthead's own line is the proof.

## The lesson

**A module's id is a path and a query, and the query is the part that says what kind of thing the path has become.** A decision taken on the path alone treats a file and the literal made from it as one thing, and the two want opposite treatment: the module compiled, the literal untouched. The tell is a plugin that splits an id at `?` and keeps only the left half.

**`unread-query`** — *proxy name, flagged for Doug*: a module id read for its path alone, where the query that said what the module IS was dropped before the decision, so a derived form of a file was treated as the file.

## See also

- [The Picture That Came From the Dev Server](95-the-picture-that-came-from-the-dev-server.md) — the same sprint's other literal, an address made for one server and served by another.
- [Reading TSX with the Compiler API](../the-catalogue-and-the-specification/10-reading-tsx-with-the-compiler-api.md) — why a literal is a splice's business and never a printer's.
