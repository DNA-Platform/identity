# Sprint 68 — The Style Cleanup

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `brief-only` — ***Doug's brief recorded 2026-09-13 at the close of [Sprint 67](73-sprint-67--the-flow-the-book-holds.md), before any brainstorm. Nothing here is planned and nothing is approved; the next session runs [`/ce-brainstorm`](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) on it.***
- ***The chapter name is a proxy; Doug's to rename.***

---

## <a id="brief"></a>The brief, in Doug's words

> **"This was the last big item and the next sprint would be pulling markup, making high fidelity implementation of the style for the table, the manual, and a general regression check on anything. Implementing $Bold, $Italics, $Underline very very simply and useing them where needed in style, implemented as simply as $List is implemented - I just polished it for reference."**

**And the method, ruled the same day with a crop of the real Manual of Style box beside it:**

> **"When we get to style cleanup I expect this to be seriously cleaned up. Ours looks nothing like this which is the real one and the only way to fix that is to pull markup for many breakpoints and fix it."**

## <a id="four"></a>What the brief names — four threads, none of them planned

| | |
|---|---|
| ***PULLING MARKUP*** | **the real page read at many breakpoints and ours fixed against that recording** — never from a picture, never at one width. The instrument the branch already has is [`verify-wiki.mjs`](../../package/.wiki/.public/verify-wiki.mjs), which records en.wikipedia.org at nineteen widths; what it does not yet do is read the MARKUP of a box as against its geometry |
| ***HIGH FIDELITY: THE TABLE AND THE MANUAL*** | **the manual is [in the style queue with what the crop shows](71-sprint-65--the-encyclopedia-finished.md#u6)** — the Search button on its own line, the foot as two lines with `V · T · E` alone, pale bands separated by white with `[show]` hard right, the sample-layout thumbnail's expand mark. ***The table is new to the list and has no reading yet.*** His verdict on the manual stands as the bar: *"ours looks nothing like this"* |
| ***A GENERAL REGRESSION CHECK*** | **on anything** — the wiki gate at its nineteen widths has been off since `e89f5f0` by his own order, waiting for exactly this sprint |
| ***`$Bold`, `$Italics`, `$Underline`*** | **very very simply, as simply as `$List`, and USED where needed in style** |

## <a id="emphasis"></a>What the code says about the emphasis thread, read before any planning

**The three kinds exist** in [`src/writing/Emphasis.tsx`](../../package/src/writing/Emphasis.tsx), 63 lines: each names its element — `b`, `i`, `u` — each carries the four declarations, and the base theme styles their classes in three lines (`.pd-bold`, `.pd-italics`, `.pd-underline`). **They are already close to `$List`'s shape**, so *"implement them very very simply"* is not about a missing kind. ***Two things are visibly different from the reference and both are for Doug to rule:***

- **`List.tsx` is ONE word in one file** ([P5](../the-type-system/05-what-we-believe.md#the-shape): *the file is the word*) **and `Emphasis.tsx` holds THREE.**
- **The file is still named `Emphasis`, which is the word he struck when he gave the kinds** — the comment at its head carries his sentence: *"Don't do Emphasis, make them separate."* The classes were separated; the file was not.

***And "using them where needed in style" has no reading yet*** — *it may mean the places a theme reaches for `font-weight`, `font-style` or `text-decoration` where a kind should have been written instead. That is a grep and a judgement, and it is the brainstorm's first job rather than a guess here.*

## <a id="standing"></a>What else is standing, so the brainstorm sees the whole board

- **[Sprint 66](72-sprint-66--themes-and-formats.md)** — themes and formats, `requirements-only`, its plan revoked and its first unit **the typing of cover, synopsis and table of contents**, which Doug ruled by name in Sprint 64 and which no sprint has built.
- **[Sprint 65](71-sprint-65--the-encyclopedia-finished.md)** — [U3](71-sprint-65--the-encyclopedia-finished.md#u3) the contents row's word and arrow; [U4](71-sprint-65--the-encyclopedia-finished.md#u4) the switch's cost in three uncached readings; [U6](71-sprint-65--the-encyclopedia-finished.md#u6) **the eleven stylistic items, which is this sprint's own list**, now carrying the contents column's nested rows and the manual's look.
- **[Sprint 67](73-sprint-67--the-flow-the-book-holds.md)** — owed: **the infobox's kind** (`$Infobox → $Box → $Aside` says section by its type; making it a chapter's document reaches `$Box`, `$Navbox` and the aside chain, and [`Aside.tsx`](../../package/src/writing/Aside.tsx) argues the deeper answer against itself), and **the portal's `.book.tsx` reordering**, whose book class stands at line 477 of 536 against [the rule he gave the same day](../writing-a-book/05-the-book-is-the-layout.md#the-book-file).

## <a id="state"></a>Where the code stands as this opens

**Pushed 2026-09-13**, project repo `main` at `5930209`, identity and both branch libraries on their branches. **Suite 101 of 101 · `tsc` 0 · `clean` 0 · `verify:latex` green on both readings.** The four pages drive with **0 errors, 0 refusal panels, 0 blue anchors**; the article and Turing each carry one body and their full apparatus. ***The wiki gate at nineteen widths has not run since `e89f5f0` and this sprint is where it comes back.***
