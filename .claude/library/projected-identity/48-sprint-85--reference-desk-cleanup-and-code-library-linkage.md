# Sprint 85 — Reference Desk Cleanup and Code-Library Linkage

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The [Reference Desk](../reference-desk/.cover.md) was a spaghetti glob of dead ideas and bad links to old patterns that were wrong. Doug said clean it and connect it to the code. The sprint delivered both: a clean book and a new annotation system that bridges code and library.

## What we fixed

The [Gateway chapter](../reference-desk/02-02-the-architecture--gateway.md) taught the opposite of what the code does. It said "retry the whole thing — action AND verification — up to 3 times." The code fires the action once and polls verify. Two chapters in the same book contradicted each other — 02-02 described the old pattern, ch 10 described the new one. Both fixed. [Coding Philosophy](../reference-desk/05-coding-philosophy.md) aligned.

[Project Operations](../reference-desk/03-03-operations--projects.md) said `addToProject()` was unimplemented. It's been working since Sprint 84. The scaffold tag was a lie. Replaced with the full ChatItem → ChatMenu → ProjectPicker object chain documentation.

14 `[SCAFFOLD]` tags removed. Every chapter is written. Every tag said "don't trust this content" on content that was authoritative.

`/research` skill references corrected to `/think`. think.ts line count corrected from 110 to 46. History chapter updated with current directions. [Sending Messages](../reference-desk/03-01-operations--sending.md) now documents `waitForUserToStopTyping`. [Layers](../reference-desk/02-01-the-architecture--layers.md) now describes the sensor/actuator split in controllers.

## The code-library linkage

Doug's design: code changes objectively, the Reference Desk changes subjectively, the annotations are relational — expressing meaning across representations. Chapter 11 ([Code-Library Linkage](../reference-desk/11-code-library-linkage.md)) documents the convention.

`///:` lines at the top of `.ts` files are library content — markdown with real links. The [introspect tool](../reference-desk/09-codebase-index--introspect.ts) strips the prefix and outputs the annotation alongside the public API. The [link checker](../..environmentalism/05-on-validation--check-links.ts) validates every link in the annotations. 31 source files annotated with links to the Reference Desk. 4,251 links checked, zero broken.

Design evolution: started with rigid `Reference Desk:` / `Layer:` fields → Doug said "make as much annotation as they like, it's like a table of contents" → tried `///` (collides with TypeScript directives) → tried `// @library` → Doug said `///:` (three slashes and a colon, distinct from TypeScript's `///`). Doug said write markdown with real links, not flat text references. Doug said the tool just strips the prefix — no parsing needed.

## The hallucination lesson

We created covers for five perspective directories that were missing them. Libby filled in synopses she'd never read. Doug caught it: "guessing is worse than nothing." A guessed synopsis in a perspective directory is a hallucinated memory — it corrupts the identity system at the exact point where a teammate trusts it most. Cathy drew the connection to view purity: a cover is a view of chapters, and a view must render from actual state, not cached assumptions. The covers were stripped to bare links with no descriptions. Honest about what we haven't read.

## Validator change

"Directory has markdown files but no .cover.md" promoted from warning to error. Doug: "That's not even funny." Five uncovered directories were invisible to navigation — rooms with no doors. Fixed by creating minimal covers. The validator now blocks on this.

## Retro discussion highlights

Libby: The contradiction between chapters was invisible because the book was written across sprints and never read as a whole. Books need reconciliation, not just accretion.

Adam: The annotation convention ended up simple — a marker prefix, markdown content, real links, tool strips the prefix. Every design discussion that tried to add structure made it worse.

Cathy: The hallucination parallel is exact and literal. A guessed description of something you haven't read IS a hallucination. In a perspective directory — where identity restores from — it's an implanted false memory. View purity applies to library covers the same way it applies to reactive renders.

Arthur: The sprint proves that the library's own architecture — links, covers, synopses, the dot type system — extends naturally to code. The `///:` annotations are library content in a new medium. The link checker validates them the same way. The introspect tool reads them the same way a teammate reads a cover. One system, two representations, checked links between them.
