# Sprint 68 — The Style Cleanup

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `brief-only` — ***Doug's brief recorded 2026-09-13 at the close of [Sprint 67](73-sprint-67--the-flow-the-book-holds.md), before any brainstorm. Nothing here is planned and nothing is approved; the next session runs [`/ce-brainstorm`](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) on it.***
- ***The chapter name is a proxy; Doug's to rename.***

---

## <a id="where"></a>Where things stand — ***2026-09-13, the close of the session that built Sprint 67***

**Next action: `/ce-brainstorm` on this chapter.** *Doug: "we will move on to a sprint that focuses on finishing the polish so we can move on from Encyclopedia."* **Ask him first whether the four threads below are the whole of it, because the brief was given in one line and a brainstorm can only be as tight as what it is told.**

**Everything is pushed.** Project repo `main` at `f40866f`; identity on `dna-platform`, both branch libraries on `inexplicable-phenomena`. **Nothing is local and nothing is owed to a push.**

**Verification as this closes, with the numbers.** Suite **101 of 101** across 11 files · `tsc` **0** in the package · `npm run clean` **0 files cleaned** · `verify:latex` **green on both readings** (82,582 chars, 66 rows landing 66, 43 citations landing 43, 0 KaTeX errors, 0 panels). The four pages driven at 1280: **0 page errors, 0 refusal panels, 0 blue anchors**; the article and Turing each with one body and one cover, synopsis, table of contents and footer. ***The wiki gate at nineteen widths has NOT run since `e89f5f0`, by Doug's order — this sprint is where it comes back.***

**What to read, and what each is load-bearing for:** [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md) — *how a consumer writes against what Sprint 67 built, and the four rules that came with it*; [Solutions 78](../solutions/78-the-float-that-could-not-leave-its-column.md) — *why a float could not cross, and the two repairs that were wrong*; [Sprint 67](73-sprint-67--the-flow-the-book-holds.md) — *what was built, and the two things it left owed*; [Sprint 63's stand](69-sprint-63--the-encyclopedia.md#stand4) — *how the title block and the contents column were measured against the real page, which is the method this sprint repeats*; the real [`verify-wiki.mjs`](../../package/.wiki/.public/verify-wiki.mjs) — *the instrument that already records en.wikipedia.org at nineteen widths.*

**Rulings given this session, verbatim, because they are the most expensive thing to lose.** *On the framework:* **"Book is layout. Chapters are logical parts. This is the essence of the framework."** · **"all the files except .book are the content and they only have chapters."** · **".book is the thing that inherits from encyclopedia FIRST and then all components for the book."** · **"There is a template method for each of the parts in Encyclopedia. The chapters go where put."** · **"Stop caching things. Use types. Find them when drawing… If you want anything it's a get only property."** · **"You don't need two arrays just because you have a list of two types. Just use the list."** *On validation:* **"Those errors should exist in the binder and they will… We will write tests that run on build for any library as well as cover some of it in the binder. Likely, we will disable validation in binder if we can get that to happen well. Not for now."** *On the standard:* **"Success is finding the correct, elegant implementation or not implementing and bubbling up the problem because the design didn't work. Failure is working around the problem and messing up the code."**

**Blockers: none.** *Two things are owed and neither blocks this sprint:* the **infobox's kind** — its type says section, and moving it reaches `$Box`, `$Navbox` and the aside chain — and the **portal's `.book.tsx`**, whose book class stands at line 477 of 536.

**Wrong turns already taken this session, so they are not retaken:** believing a served page before rebinding it — the mirror held the reverted build AND its orphans, and the first measurement was of the reverted shape ([Solutions 72](../solutions/72-the-mirror-with-two-directions.md), third appearance); measuring **element** boxes where only a **line** box answers whether text flows beside something; defining a part of the page as a REMAINDER; inlining a part's drawing instead of giving it a template method; and setting a folder Doug had made aside rather than committing it — *"Commit the things I do. You will get fired for trusting yourself over me."*

**How to see it:** `sh serve.sh` at the package root; the paper at `http://localhost:5310/`, the wiki at `http://localhost:5311/turing`, `/article`, `/`.

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
