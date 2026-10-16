# The Import Named After a Stem Ending in a Dash

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

**keywords:** `tooling` · `library`

---

## Symptoms

***`application/books/claude/conversations/metalogical-subjectivity.tsx(16,61): error TS1005: '=' expected`*** and ***`';' expected`*** — the typecheck of Doug's library, on a file under the binding's `application/` that no one wrote by hand.

***`FAILED (23.0s)`*** after ***`reading ..reference, .claude, …`*** with Node's own stack above it and no `error` line of the binder's — the bind, the same minute, on the same library, which had passed its catalogue and its assembly.

The generated line, read: `import TheMetalogicalRepresentationTheoremProofAndConnection-o8 from '…/o8-the-metalogical-representation-theorem-proof-and-connection-'`.

## What it turned out to be

Two cuts met. The importer's slug cuts a name at sixty letters, [`slugFromName`](../../../../.me/importer/7-the-writing~writing.ts), and the sixtieth letter of *the-metalogical-representation-theorem-proof-and-connection-to-…* was a dash, so the chapter's file stem ended in one. The binder names the import of a chapter's module after its file stem, pascal-cased with the ordinal appended; a dash between words becomes a capital, and a dash at the end survives as a dash, which no identifier may carry. The binder then reads the module it wrote and fails on its own syntax, before any `error` line of its own vocabulary.

## How it was found

The typecheck named the generated file and the column; the line at the column showed the dash in the identifier and, in the path beside it, the stem it came from.

## The lesson

A slug that is cut is trimmed after the cut: `slug.slice(0, 60).replace(/-+$/u, '')`. And the binder generates code from file names, so it owns the validity of what it generates: a stem is made an identifier by dropping every character an identifier cannot carry, not by hoping the stem is clean. That second half is a pitch to the binder, [The Binder's Condition](../projection/114-sprint-109--dougs-importer.md), not a change made from a library's session.
