# Sprint 117: Binding by Imports

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **state:** implementation-ready, 2026-10-28, requirements and plan in one act on his word that the work be done overnight
- ***The sprint's name is a PROXY; Doug's to rename.***

---

## His words, verbatim

*2026-10-28, on the fifth bind of [Sprint 115](120-sprint-115--the-conversation-page-and-the-project-page.md) taking an hour for three fixes to the project page:*

> **"Okay the bind taking forty minutes to run is a real problem. You can't edit anything on the pages without a 40 minute run? There's no way to have files generated that the pages consume that are shared or something like that?"**
>
> **"And you can't test one page instead of rebinding all of them? If we can't fix this the architecture is flawed and we need to reimagine"**
>
> **"Would it help if we copy code to be scoped to the conversations. It can literally be copy and pasted, but put there so it doesn't have to change with global things, and keep things a bit more isolated? 40 minutes is a long long time. And then what are our options for decoupling things. If we can't, we can't have conversations in this form and we'll need to make them a different kind of resource that is read from the server, and a project needs to have a book and we find a way to query a conversation in some way"**
>
> **"I don't really want to make changes now, so please pull code into a reference manual scoped to the conversations so that we can work on the rest of the project and not cause a conversation rebind please. Ugh this is bad… But do that for now, and then we'll go from there"**
>
> **"I'm going to bed soon. Please /catchup on writing libraries and all the principles we have in organizing them, but then give me a more effective organization with isolation for the conversations in terms of code to prevent these long binds, and if you see opportunities to make the binds significantly shorter by decoupling, please do that… Please do all of this, and don't make a mess. Write a list of anchors here and let code patterns and putting the codebase in a better position than it was be significant anchors"**

## What was found before the design, each a claim with its source

- **A book's digest holds one hash of every code file of every book.** `manifest/graph.ts`, `bases(found)`: every `.book.tsx` and every code resource beside any chapter, hashed once, joined to every book's digest with the packages' hashes; since Sprint 109, *"since a change to a type read no book"*. So any code change anywhere stales all 1,019, and every stage runs over all of them: read and specify 1190 s, bundle 987 s, render 1328 s on the fifth bind of Sprint 115.
- **The gap is already in the binder's ledger.** [B47](../the-catalogue-and-the-specification/08-the-binders-condition.md#b47): a file a book imports from another book is not in its digest. A digest by imports closes it.
- **The library's code is bundled per build of 64 and never shared across builds.** Three copies of `3-the-project~code` stand in the assets with three hashes; the packages alone stand once, on the import map. A change to one manual file moves every build's copy and every chunk's imports.
- **The styles are already shared files.** A page links six stylesheets and holds 57 bytes of style.
- **One page is tested on the workbench without a bind, and one book binds alone by its folder:** 57.8 s after a change to a manual file, 12.4 s of them reading it; 27 project books by their folders, 79.5 s to read.
- **A copy of the code beside the conversations does not isolate them.** With the digest as it stands the copy is in the one hash too; and `$Writing.expressed()` (`writing/Writing.tsx:198`) matches an annotation by class identity through `find(given)`, so a cover built by one copy of `$Project` or `$Scheme` is invisible to a page holding the other, and the project page reads every conversation's cover for its origin, its project and its scheme. Two copies of one class cannot read one cover.
- **Every imported book imports the barrels.** A conversation's book file imports `../../.manual/.book`, Claude's whole manual; its cover, table and chapter import `../../../.manual/.book`, the library's whole manual. So a digest by imports isolates nothing until the imported books import the files their names live in.

## Requirements

- **R1 · A change to the project's page binds the project books and no conversation.** Observed: a line changed in the project page's code, the bind reading, building and drawing 27 books and the register's, under ten minutes, every conversation's page kept byte for byte.
- **R2 · A book's digest is what it imports.** Observed in a promise: a galley of three files importing one another, the digest changing when an imported file changes and holding when an unrelated one does; a bare package import excluded, a relative one followed, a folder's `.book` resolved.
- **R3 · The conversation's page and the project's page are chapters of their own in Claude's manual,** with their code beside them, the annotation they share in the chapter that was theirs; the book files of the 983 conversations and 27 projects import the chapter's code they extend, by name of the file.
- **R4 · Imported books import the files their names live in.** The importer writes it so from now on; the books already written are rewritten once by a script that reads the manuals' exports and never guesses a name's home; a bound page is unchanged by it.
- **R5 · Measured and recorded.** The bind's stages before and after: a full bind to seed the new digests, then the change of R1 timed; the Binder, As Built carries the mechanism, the condition closes B47, the sprint chapter the numbers.
- **R6 · Nothing of the package changes but the binder, and only for the digest.** Chemistry and `.public`'s src untouched; the binder's change is the one he asked for, decoupling, and nothing else rides on it.

## Decisions

- <a id="d1"></a>**D1 · The digest is the closure of a book's imports.** From each of the book's own files, the relative imports are followed, `from '…'` and bare `import '…'` and `export … from '…'`, resolved as Vite resolves them, an extension tried from `.tsx`, `.ts`, `.js`, `.mjs` and a folder's `.book`, transitively, every file hashed once in a cache and every file's own closure memoized, so a thousand books cost a few thousand reads. A bare import is a package, hashed as before. *Chosen over* a global hash of every code file, which is the cause, and over a copy of the code, which breaks the one class that reads every cover.
- <a id="d2"></a>**D2 · Claude's chapter 3 splits by concern.** The Project keeps `$Project` and its line, the annotation every book shares; The Conversation's Page takes the conversation's draw, the outline, the tabs, the trail, the strip and its mark; The Project's Page takes the project manual's specialization, the way on, the open that keeps the trail, the hits. The project's page imports the conversation's chapter for the trail; the conversation's imports nothing of the project's page. The barrel re-exports all three for whoever imports broadly. Names PROXY.
- <a id="d3"></a>**D3 · Imported books import by file, resolved from the manuals' exports.** A name's home is read off the manuals' own `export` declarations at run time, never written by hand, so the importer and the one-time script cannot disagree with the code; a name exported twice is an error raised, never a guess.
- <a id="d4"></a>**D4 · One full bind seeds the new digests, overnight.** The formula changed, so every digest changes once; after it, staleness is by imports.
- <a id="d5"></a>**D5 · The library's code on the import map is the next step, not this one.** With staleness by imports a change rebuilds only the stale books' chunks in one build; sharing the library's code once would cut the duplicated copies and is recorded as owed.

## Units

- <a id="u1"></a>**U1 · The digest by imports.** R2, D1. Files: `manifest/graph.ts`, `specification/specifying.ts`, a promise in `.test/imports.test.ts`. Mechanism: `imports(file)` parses one file's import sources once; `closure(file)` memoizes the transitive set; `graph.digest(book, fixed)` hashes the book's files, its resources and every file in the closure of its files; `bases` goes. Demo: the promise green; the stale count printed by a bind after a one-line change to the project's page.
- <a id="u2"></a>**U2 · The split of Claude's chapter 3.** R3, D2. Files: `.me/.claude/.manual/3-the-project.tsx` and `~code.tsx`, new `9-the-conversations-page.tsx` and `~code.tsx`, `10-the-projects-page.tsx` and `~code.tsx`, `.book.tsx`; the manual's table. Demo: both pages unchanged on the workbench; the typecheck clean.
- <a id="u3"></a>**U3 · Imports by file.** R4, D3. Files: `.me/importer/8-the-books~books.ts` and a resolver beside it; a one-time script in the session's scratchpad over the imported books; the importer's promises. Demo: every imported book's files import by file; a page bound before and after the rewrite byte for byte the same.
- <a id="u4"></a>**U4 · Measured.** R1, R5, D4. The seed bind's stages; then one line changed in the project's page and the bind's stale count and time; then the same for the conversation's page, counted and not run.
- <a id="u5"></a>**U5 · Records and the close.** R5. The Binder, As Built's kept and bundle sections; B47 closed; this chapter's state; memories; the commit.

## Where things stand

- **Next:** `/ce-work` on this chapter at [U1](#u1), 2026-10-28 overnight, on his words above; he reviews in the morning.
- **U1 built 2026-10-28, 22:15:** `manifest/graph.ts` reads a file's import sources once, resolves a relative one as Vite does, with the code extensions tried and a package resolving to nothing, memoizes each file's closure, and hashes a book's own files, its resources and every file its code reaches; every cache is keyed by the file's path with its modification time and size, so a reader that outlives a change reads again, which the promise found when a hash kept per path alone held after the file changed. `specification/specifying.ts` takes the packages alone as fixed inputs; the global hash of every code file is gone. Promises: `.test/imports.test.ts`, three, green; the unit suite 183 of 183 from 180; the binder's typecheck the inherited layout error alone beside 1,770 errors in stale assembled modules under `application/books` from the day-split conversations, generated before this sprint, a cleanup owed. Found on the way: the first bind of the 27 project books after the flat list died in a render child at 3.1 GB with the operating system refusing memory, a zone allocation, with the library's browser open beside two render children; closed, the bind runs again.
- **State:** U1 built; U2 to U5 not started; the 27 project books binding by their folders at 22:16 with the new digest, the other 992 keeping what they answered.
