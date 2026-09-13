# Sprint 61 — The Chapter File

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `handed off` — *the paper's half landed 2026-09-11; the encyclopedia's half and U3 for the next team, see Where things stand*
- ***The chapter name is a proxy; Doug's to rename.***

---

***The end, from chapter zero:*** **a chapter file in both demos is a class extending the book's own `.chapter`, writing its document in `print()` and nothing else; `.chapter.tsx` carries the document kinds and themes the book's chapters share and `.book.tsx` the book class and its registrations; the binder emits the components into the book; `Cover`, `TableOfContents` and `Synopsis` read to Writing's standard; the encyclopedia's search box no longer walks `this.book`; and both demos draw what they draw today, every character difference explained.** *Doug: "I want things to look really standard when someone implements a chapter, or what it looks like when it compiles to a book that gets converted into a page."*

**Read first:** this chapter · [Sprint 60 § Where things stand](66-sprint-60--every-mark-a-citation.md#stand) · [Writing a Book](../writing-a-book/.cover.md), all four chapters · [The Coding Style, ch. 5](../the-coding-style/05-the-spelling-of-a-kind.md) and [ch. 7](../the-coding-style/07-what-natural-means.md) · [The Type System, ch. 3](../the-type-system/03-shells-over-types.md) and [ch. 7](../the-type-system/07-the-composition-type-hierarchy.md) · [Sprint 58 § decisions](64-sprint-58--the-chapter-that-is-its-view.md#decisions) · chemistry's [composition/11](../../../chemistry/.lib/composition/11-the-representative.md) and [14](../../../chemistry/.lib/composition/14-the-assignment.md) · the code: `src/library/Chapter.tsx`, `Book.tsx`, `Cover.tsx`, `TableOfContents.tsx`, `Synopsis.tsx`, `Row.tsx`, both `.book.tsx` files, both `build.mjs`.

## <a id="requirements"></a>Requirements

| | what it demands | where | lands in |
|---|---|---|---|
| **R1** | ***a chapter file is a class extending the book's `.chapter`, and writes its document in `print()`*** | Doug, the Sprint 58 brainstorm: "A class extending the book's own chapter"; "the chapter is meant to completely be written in the print method" | [U1](#u1) |
| **R2** | ***`.chapter.tsx` carries the document kinds and themes the book's chapters share; `.book.tsx` the book subclass and its registrations*** | Doug: "`.chapter.tsx` carries the document level components and themes that would be reused in the book and in the library related to the subject"; "`.book.tsx` would contain the book subclass and DI registration" | [U2](#u2) |
| **R3** | ***Cover, TableOfContents and Synopsis read to Writing's standard*** | Doug: "Cover, TableOfContents, Synopsis, and then making sure that writing Books is simple… Use that Writing compression as the guide" | [U3](#u3) |
| **R4** | ***the encyclopedia's search box finds its editions without walking `this.book`*** | two `.wiki` tsc errors since the Writing cut | [U4](#u4) — *waits on a ruling* |
| **R5** | ***which tree is the source is ruled, and `build.mjs` cannot delete what the served tree alone carries*** | [Sprint 58 D5](64-sprint-58--the-chapter-that-is-its-view.md#d5) | [U5](#u5) |
| **R6** | ***nothing moved: both demos' characters equal, or every difference explained*** | the refactor's end | [U6](#u6) |

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · ***A chapter file imports one thing, the book's chapter, and exports one class***

***Amended at the start, Doug 2026-09-11:*** *"Keep .document.tsx beside .chapter.tsx… they have to import lots from writing right? What does it matter that document is in somewhere else?"* **So `.chapter.tsx` carries the book's chapter class and nothing else; a chapter imports its kinds from the package as it does, its `$Chapter` from `./.chapter` and its `Document` from `./.document`.**

The standard shape Doug can see: `import { Chapter, Document, Section, … } from '../.chapter'` — the book's chapter base and the kinds the book's chapters use — and `export default class $Introduction extends $Chapter { print() { return <Document>…</Document>; } }`. ***Chosen over*** *importing kinds from the package in every chapter, which is what every chapter does today.*

### <a id="d2"></a>D2 · ***The book's registrations are the book's, in `.book.tsx`***

The theme and every `$(A, B)(C)` the book needs stand in the book subclass's `$register` or its bond, so a chapter registers nothing. ***Chosen over*** *the binder emitting registrations, which nobody can read.*

### <a id="d3"></a>D3 · ***One file, one question, one commit for the three chapter kinds***

Cover, TableOfContents and Synopsis are cut the way Writing was: read whole, every member cited to its callers, the cut shown, Doug's yes, the gate.

## <a id="units"></a>Units

### <a id="u1"></a>U1 · ***Every chapter file on the standard shape*** — R1

**Mechanism:** `.chapter.tsx` in each demo book exports the book's chapter class and re-exports the kinds its chapters write; every chapter file extends it and overrides `print()`; any file still overriding `view()` moves to `print()`.

**Files:** `.latex/.public/aaronson/.chapter.tsx` (new), `.wiki/.public/alan-turing/.chapter.tsx`, `.wiki/.public/.article/.chapter.tsx`, `.wiki/.public/.encyclopedia/.chapter.tsx` · 29 chapter files · the mirrors brought level.

**Visible end:** ***a chapter file that a newcomer reads in one screen: one import line, one class, one `print()`.***

**Depends on:** nothing.

### <a id="u2"></a>U2 · ***`.book.tsx` and the binder's emit*** — R2

**Mechanism:** each `.book.tsx` holds the book subclass, its theme registration and its kind registrations; `build.mjs` imports the chapter classes, makes their components, and passes them into the book, as it does today with the registrations moved out of its output.

**Files:** the four `.book.tsx` · `.latex/.public/build.mjs`, `.wiki/.public/build.mjs`.

**Visible end:** ***the binder's output is a list of chapters and nothing else.***

**Depends on:** [U1](#u1).

### <a id="u3"></a>U3 · ***Cover, TableOfContents, Synopsis*** — R3

**Mechanism:** per [D3](#d3) — each file read whole, its members tabled *used-by / decided / just-there*, the cut presented, Doug's yes, the file moved, the gate.

**Files:** `src/library/Cover.tsx` · `src/library/TableOfContents.tsx` · `src/library/Synopsis.tsx` · `src/article/Abstract.tsx` if it follows the synopsis.

**Visible end:** ***three files each smaller and each drawing what it drew — the paper's cover and contents, the abstract, at the same characters.***

**Depends on:** Doug's yes per file.

### <a id="u4"></a>U4 · ***The search box*** — R4 — ***waits on a ruling***

**What is known:** `.wiki/.public/.encyclopedia/.document.tsx` walks `this.book` for its edition list and `book` is no longer a member of Writing. **What Doug decides:** a reference the search box means, or a registration the book makes. Files and scenarios follow the ruling.

### <a id="u5"></a>U5 · ***The mirror ruled*** — R5

**Mechanism — ruled 2026-09-11:** *"The binder is a compiler. You can do what you need to do. It's probably easiest to have a sync to the process so design it to be syncable with processes that run and generate and edit files. I don't think anything needs to be deleted but then what happens when something is deleted?"* **So `build.mjs` syncs the source tree into the served one and never empties it: every source file is copied over, every book is bound, and a manifest in the served tree records what was synced and what was generated — a file that leaves the source is removed on the next run because the manifest knew it, and what the served tree alone carries, the probe, the figures, the page's own sheet and the paper's data, is never touched because the manifest never knew it.** *`.latex` is the source; `.latex/.public` is served.*

**Files:** `build.mjs` in both demos.

**Visible end:** ***one tree named in this chapter, and a `build.mjs` that cannot empty the paper.***

**Depends on:** Doug's ruling.

### <a id="u6"></a>U6 · ***Nothing moved*** — R6

**Mechanism:** the drivers before and after: characters, rows landing, citations landing, panels, on both readings; every difference explained in Where things stand.

**Files:** none.

**Visible end:** ***the numbers side by side.***

**Depends on:** all of the above.

## <a id="scenarios"></a>Test scenarios

| unit | scenario | input · action · expected |
|---|---|---|
| [U1](#u1) | ***a chapter that overrides view*** | one demo file left on `view()` · the gate · **the file is found and moved** |
| [U1](#u1) | ***a chapter holding copy*** | `<Chapter>words</Chapter>` · build · **refused, as Sprint 58 pinned** |
| [U2](#u2) | ***the binder's output*** | `build.mjs` · **chapters only, no registration** |
| [U3](#u3) | ***the cover draws*** | the paper's cover · **title, author, subject at the same characters** |
| [U6](#u6) | ***both demos*** | `/` and `/turing` · **characters equal or explained; 0 panels** |

## <a id="risks"></a>Risks

| | risk | what mitigates it |
|---|---|---|
| **K1** | ***`build.mjs` empties the served tree*** — it did in Sprint 58 | [U5](#u5) lands first among the demo units, or `build.mjs` is not run |
| **K2** | ***a kind is invented in `.chapter.tsx`*** where the package should carry it | the demo may invent content and no kinds: override, register, add a prop, then ask |
| **K3** | ***the three chapter kinds carry members the demos reach for*** | the used-by column is read from both demos, not from `src` alone |

## <a id="order"></a>Order

**[U5](#u5) on its ruling, [U1](#u1), [U2](#u2), [U3](#u3) file by file, [U4](#u4) on its ruling, [U6](#u6) last.**

## <a id="stand"></a>WHERE THINGS STAND — ***2026-09-11, the paper's half landed at `e0ca636`, stopped before the encyclopedia by Doug's order; these are the notes for the team that takes over***

### <a id="handoff-state"></a>The state, and how to see it

**Head `e0ca636`, twelve commits since Sprint 58's `ee9ef47`, nothing pushed.** The paper is served at `http://localhost:5310/` by `sh serve.sh` from [package/](../../package/), and the drivers that measure it stand in [.latex/.public/.paper/](../../package/.latex/.public/.paper/): `cited.mjs <url>` for citations and entries, `rows.mjs <url> 300 56` for contents rows landing below the strip, `click-citations.mjs <url> paper 2500` for a citation landing, `marks.mjs report|apply <tree>` for the paper's bracket marks, `footnotes.mjs report|apply <tree>` and `notes-chapter.mjs <tree>…` for the notes, `panels.mjs` for refusals. **The gate, run in this order because [the suite reads `dist`](../solutions/05-the-suite-that-passed-against-a-stale-build.md):** `tsc --noEmit -p src/tsconfig.json` and the same with `.latex/tsconfig.json` · `rollup -c --environment QUICK` · `vitest run`, all from `package/` through `../../../node_modules/`. **At the head:** tsc src 0, `.latex` 0 · suite 104 of 104 · the paper 42 citations all numbered, 335 entries, 66 contents rows all landing, 0 panels, 0 errors, 82,582 characters · `/turing` 12 citations, 0 panels.

### <a id="handoff-designs"></a>The designs that landed, each at its line and its chapter

- **The standard chapter file** ([U1](#u1), [D1](#d1) amended): one class, one `print()`, its kinds from the package, its `$Chapter` from the book's [.chapter.tsx](../../package/.latex/aaronson/.chapter.tsx), its `Document` from [.document.tsx](../../package/.latex/aaronson/.document.tsx) — see [2-formalizing.tsx](../../package/.latex/aaronson/2-formalizing.tsx) for the shape. Eleven paper chapters moved from `view()` to `print()` and the characters did not move, 82,582 before and after. The rulings are in [The Book's Little Framework](../writing-a-book/04-the-book-s-little-framework.md).
- **The compiler** ([U5](#u5), ruled *"the binder is a compiler… design it to be syncable"*): [build.mjs](../../package/.latex/.public/build.mjs) syncs `.latex/` into `.latex/.public/`, binds `book.tsx` per book from the numbered chapter files, and keeps [.synced.json](../../package/.latex/.public/.synced.json) — the manifest at line 13, the tooling it never copies at line 11, the removal of what left the source at line 78, after binding so a generated path is never removed. **A hazard it closed, paid for once today:** the source tree carries a stale copy of the old compiler and driver, [.latex/build.mjs](../../package/.latex/build.mjs) and `verify-latex.mjs`; the first sync copied the old compiler over the new one and the old one emptied the served tree, restored from git. They are skipped by name now; deleting the stale copies is Doug's call.
- **Chapters take numbers**: `10-references.tsx`, `11-notes.tsx`, so the compiler orders them by the one rule it has; the generated `book.tsx` lives only in the served tree.
- **Citations** (Sprints 59–60): a fold keeps the writing it names in the book's scratchpad at its bond, [Fold.tsx:21](../../package/src/reference/Fold.tsx#L21); a reference reads a named fragment from it, [Ref.tsx:56](../../package/src/reference/Ref.tsx#L56); the scratchpad is a string-keyed collection that knows nothing, [Scratchpad.tsx](../../package/src/library/Scratchpad.tsx), made by the book at its bond, [Book.tsx:43](../../package/src/library/Book.tsx#L43); a citation's numbers are its keys' places among its document's entries and `marks()` at [Citation.tsx:42](../../package/src/reference/Citation.tsx#L42) is the one seam a kind of citation overrides, which [Footnote.tsx:9](../../package/src/article/Footnote.tsx#L9) does. Why it is this and not the two designs before it: [Solutions 71](../solutions/71-the-population-that-never-drew.md) and [Sprint 59](65-sprint-59--the-population-that-never-drew.md#stand).
- **The paper's look**, all in [article/Theme.tsx](../../package/src/article/Theme.tsx): citations in ink at line 230; equation numbers at the right from line 265; the notes as the paper's foot from line 251 — the rule, 8pt, the superscript number, named on `.pd-document.pd-notes` because the contents row wears `pd-notes` too ([Solutions 69](../solutions/69-the-class-that-every-kind-beneath-it-wears.md)); the landing margin on headings in [formatting/Theme.tsx:173](../../package/src/formatting/Theme.tsx#L173); the page's own `scroll-behavior` in [page.css](../../package/.latex/.public/page.css) because a theme writes no rule on body or html.

### <a id="handoff-next"></a>What the next team does, in order

1. **The three encyclopedia books** — [U1](#u1) and [U2](#u2) for `alan-turing`, `.article` and `.encyclopedia` under [.wiki/](../../package/.wiki/), 26 chapter files overriding `view()`. The paper's recipe, exactly: write `.chapter.tsx` beside each `.book.tsx` as [the paper's](../../package/.latex/aaronson/.chapter.tsx); in every chapter file replace `view() {` with `print() {`, take `$Chapter` out of the package import and add `import $Chapter from './.chapter';`; give the unnumbered chapters numbers; drop the source tree's `book.tsx`; carry the compiler to [.wiki/.public/build.mjs](../../package/.wiki/.public/build.mjs) — it is the same file with the tooling set read from that tree — and run it; the gate; `rows.mjs http://localhost:5311/turing 300 48` (32 of 32 today) and `cited.mjs` (12 today). The encyclopedia has a [.margin.tsx](../../package/.wiki/.public/alan-turing/.margin.tsx) worth reading before footnotes come back.
2. **[U3](#u3), the three chapter kinds** — [Cover.tsx](../../package/src/library/Cover.tsx) is 52 lines with `title()`, `author()`, `subject()` and three rules; [TableOfContents.tsx](../../package/src/library/TableOfContents.tsx) 33 with nothing but its definition; [Synopsis.tsx](../../package/src/library/Synopsis.tsx) 29 with `parenthetical = true` and a waived rule. Grep the callers of the three readings across `src`, both demos and `.tests/` before proposing a cut; it may be that nothing is cut.
3. **[U6](#u6)** — the numbers above, re-read after each step.

### <a id="handoff-owed"></a>Owed, with the reason each is owed

- **The written footnote and the footer that gathers it** — waits on chemistry evaluating a mounted chemical's inline children once; the report with the seam named is in [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#reported). Until then the notes are a keyed chapter placed last.
- **The notes' numbers** — 50 of the paper's notes are kept, so a note's place is not the paper's number; note 43 draws `20`. Either every note is extracted or the number is written into the key. **And the notes' text** lost spaces around italics in extraction — *"calledLevin's"* — because [pdf-notes.mjs](../../package/.latex/.public/.paper/pdf-notes.mjs) joins items without reading their gap; `pdfjs-dist` left the root `node_modules` today and was never declared, so re-extraction needs it back.
- **Equation numbers** stay per document, `(1) (1) (2) (3) (4)`, until the paper is read for its model — Doug: *"if we don't have it in Aaronson, we don't have a model for it."*
- **A citation of nothing** draws its key; the rule has no bond-time seat because documents are drawn under the book, not bonded there.
- **The 3.18 million characters of CSS** on the page are latex.css's fonts inlined by vite in dev, for Sprint 62's audit.

### <a id="handoff-method"></a>The method that held, and what broke it once

One file per step, shown before it is written; a question at every uncertain or ugly point; the gate after each; every backslash edit through the editor or a script file, never the shell; and when a design built to Doug's words fails its own promise, halt and re-hear it — the day this was not done is [Sprint 59](65-sprint-59--the-population-that-never-drew.md#stand) and the rule is in [What Natural Means](../the-coding-style/07-what-natural-means.md).
