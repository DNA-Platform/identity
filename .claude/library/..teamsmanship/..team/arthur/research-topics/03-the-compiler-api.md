# The Compiler API

- **author:** [Arthur](../arthur-or-the-shape-of-everything/.cover.md)
- **subject:** [Arthur](../..everything-that-has-a-shape/.cover.md)

---

`Arthur > The Compiler API`: reading and editing code with a language's own parser instead of a regex over raw text — opened for [Sprint 90](../../../../../../library/.public/.lib/projection/95-sprint-90--the-binder-reads-with-the-parser.md)'s binder, which reads its notation out of TSX. The distinction from [`Arthur > Programming`](02-programming.md): that thread is the substrate we run on; this one is the tools of language comprehension we build the binder from.

The bounded think of 2026-09-28 is in the thinking book: [Editing TSX with the TypeScript compiler API](../thinking/03-editing-tsx-with-the-typescript-compiler-api.md). Three questions, and the finding of each:

- **Tree editors vs splicing by position.** No tool edits TSX by tree *and* preserves whitespace faithfully without a cost: **recast** preserves but brings a second parser (against the "use the language's own parser" rule), **ts-morph** reformats through the same printer the probe found round-trips 0 of 46 files, and **magic-string** is not a tree editor at all but a clean splicing helper. Parse with TypeScript to *locate*, edit the *original text* by position — confirming the sprint's D6.
- **Caching parsed files across a Vite dev session.** The LanguageService's `DocumentRegistry` is overkill for a pure-parse binder that runs no typechecker; a content-hash-keyed `Map` with a full re-parse (the probe: `updateSourceFile` is slower than a full parse on files this size), riding Vite's own transform invalidation, is the idiom — confirming D3.
- **Slicing `JsxText` by `getStart`/`getEnd`.** `.text` is normalized and decoded and is *not* the source; slice the raw `[getStart, getEnd)` span; treat `{' '}` (a `JsxExpression`) as a run boundary; keep entities raw and decode only to match; handle a string literal's quotes and escapes as a distinct container. This is U1's pitfall list.

Provenance is marked in the thinking chapter: my own reasoning from training current to January 2026 over stable libraries, with two spots flagged for a one-file probe against TypeScript 5.9.3 (recast's current TSX fidelity; `getStart`-on-`JsxText` trivia). The read of [Reading TSX with the Compiler API](../../../../../../library/.public/.lib/the-catalogue-and-the-specification/10-reading-tsx-with-the-compiler-api.md) is a separate later run.
