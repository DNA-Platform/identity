# Sprint 53 — The Annotative Theme

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **subject:** [Publicity](../..publicity/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `requirements-only` — *the brainstorm was Doug's rulings of 2026-09-08, given in the room over the five-folder catchup; the plan enriches this chapter in place.*
- **opened:** 2026-09-08
- ***The title is a proxy, Doug's to rename.***

---

## <a id="the-assignment"></a>The assignment this sprint opens — Doug, 2026-09-08, the parts that govern it

> **"Your job is to work out the theme and format as annotations, get the base design, semantic elements, make sure writing / composition / annotation / type / reference / letter-book are as clean as they can possibly be. /writing and /book are the framework proper directories, and writing is default index, book exports separately."**
>
> **"The KEY global constraint is: 'is this framework built to support what I am implementing now?' — you can fix $Chemistry bugs on your own if truly a bug, but if you need a new $Chemistry feature, give me a pitch, doing as much work as possible before batch presenting me with $Chemistry blockers."**
>
> **"Follow my coding and naming conventions, mostly deferring to existing members and almost entirely working within the structure there is now. Look for cruft. I didn't add those `_` properties. Check if you implemented things in a long self-guided run or a short one driven by me. Be skeptical of long ones. Assume that the elegance comes from me, and the non-elegance is just you dealing with the framework not being designed for this. When in doubt, raise design problems to me."**

***This is the first sprint of a multi-sprint assignment*** — the bracket first, then Math/Equation/Code in the base, then `/article` (the LaTeX article) and `/encyclopedia` (Wikipedia) as book types with optional themes, then the `.latex` and `.wiki` demos with integration tests, then the compiler's abstractions from `.book`/`.chapter`. *The whole of it, in Doug's words, is in the assignment memory and the catchup record.*

## <a id="the-criterion"></a>THE GLOBAL CRITERION, and the guarantee that it is applied

> ***Doug:*** **"AT EACH PLACE IN THE CODE, were the dependencies designed to support this primarily… If the thing we implement isn't the obvious thing, we are implementing the wrong thing… when we build each thing on top of the base, is it easy? Did we have to ruin or limit the base to allow? We can't. If code rots in OUR OWN extension of our library, that is a design flaw not a necessary implementation. All code should be self-evident. We only spend effort wrestling with React or TypeScript because we don't control them. NOT ourselves."**

**The library carries three instances of it** — [Shells Over Types](../the-type-system/03-shells-over-types.md)' *what the type could not confer*, [Sprint 52](56-sprint-52--the-chapter-that-writes-itself.md#ceremony)'s *ceremony is a diagnosis*, and [Polymorphic Limiting](../the-type-system/06-polymorphic-limiting.md)'s *the defence is the finding*. **This is the rule they are instances of, and it names THE DEPENDENCY as the thing to inspect.**

***A sensibility does not survive a long run; a gate does.*** **So the guarantee is mechanical, four ways, and every one runs in this sprint:**

1. ***No member without its three lines.*** Every member this sprint touches carries, in [the register](#the-register): *what it depends on · was that designed for it · did the base bend to allow it* — and a member without the lines is not proposed, the way ce-plan refuses a unit without a mechanism.
2. ***The extensions are the acceptance test of the base.*** The `.wiki` demo (and later `.latex`) is driven after every unit; ceremony or a nullable slot in either is filed against the base, never patched in the extension.
3. ***The audit runs at review.*** [`/public-audit-code-patterns`](../the-public-skillset/04-public-audit-code-patterns.md) before the sprint is called done, with its numbers beside the suite's.
4. ***Every claim carries its state*** — **read** (in the file, at the line), **run** (measured this session), **recorded** (the library says so), **a guess**.

## <a id="rulings"></a>The rulings this sprint builds, verbatim — all 2026-09-08

| | Doug said | what it means for the code |
|---|---|---|
| **T1** | *"Theme and writing become annotation. That is the purpose of annotations. Writing that isn't writing. A book has a theme but it isn't part of the writing. A type too. A format. See how it can put something in the conceptual writing tree without it being a composition?"* | `$Theme` and `$Format` extend `$Annotation`; a theme or format is written into a block and found there, never drawn as content |
| **T2** | *"Theme as an annotation. Bring it into the writing. Doesn't writing have a theme as it has referential meaning? I know this isn't exactly that theme, but it is in the semantics to have it as part of the thing."* | `$Writing.theme` reads the way `$Writing.meaning` reads — the annotation in its own block first, then upward through the parents; `theme!:` and `this.theme = $check(theme, '!')` go from every bond |
| **T3** | *"a base theme that is likely itself a styled chemical singleton that every component can DI and get the single value of and it is reactive and replaceable"* and, asked whether the theme is literally the sheet, **yes** | one `$Theme` class carries the values AND the nested `@select` groups that dress each `pd-` class; worn once, at the book; a subclass re-says a group and the rest follows ([styled particles' override](../../../chemistry/.lib/particle/11-styled-particles.md#the-override)) |
| **T4** | *"By default I think a book should look like Github markdown with the table of contents and a cover that is something more like a title and author, and it should probably need almost no format components if possible"* | the base theme is the GitHub look — `github-markdown-css` (MIT, 5.9.0) the reference values; `book/` ships no format for a kind a sheet can dress |
| **T5** | asked who says the semantic element, **the kind writes its element; the sheet dresses it by class** | `$Paragraph` draws `<p class="pd-paragraph">`, `$Heading` `<h2>`, `$List` `<ul>`, `$Chapter` `<article>`; the `<span className>` wrapper in `$Writing.frame()` stops being the only element |
| **T6** | *"format is a specialized thing for when we need to do something beyond what we can do with a base theme"*; *"Theme should be a singleton and formats are not, and perhaps that is essentially how they differ so we imagine format might be reactive"* | `$Format` stays for STRUCTURE a sheet cannot give — grid areas, `display: contents`, `figure`/`figcaption` — an annotation, many per book, reactive |
| **T7** | *"registration is done by the user or by another module doing the registration, and registration probably needs to be either global or by book"* | a theme never carries its formats; `$(Book, Theme)(Mine)` globally, or the book's derived component scope; a theme written into a book is the instance form |
| **T8** | *"The book can put wrappers around its cover if we want styling for cover, table, index, etc… without them needing types. But the user or .public writes chapters, the book is compiled… the only way to group chapters is in nested chapters and we offer the Part as the way to style that."* | `$Book` may wrap its apparatus in plain elements the sheet dresses; chapters draw flat; `_opening/_contents/_body/_closing` and the region `view()` go — *"We do NOT cache lots of blocks"* ([ch21](../the-type-system/06-polymorphic-limiting.md#the-instances)) |
| **T9** | *"/writing and /book are the framework proper directories, and writing is default index, book exports separately"* | `@dna-platform/public` = `writing/` (and `reference/`, which is annotation); `@dna-platform/public/book`, `/article`, `/encyclopedia` their own doors |
| **T10** | Sprint 51 R13, restated today by 09's measurement of 326 throws per page | `$composesWhatItHolds` and its four overrides struck |
| **T11** | Sprint 51 R14, *"the dissolved title is the requirement"* | a `<Title>` written in a `<Section>` stands — [`title.test.tsx:27`](../../package/.tests/title.test.tsx) goes green with nothing else changed |
| **T13** | *"Where code already existed, I expect few members. Properties should be mostly structural and accompanied by specification asserts. Methods should provide mostly structural help, like finding one of the annotations. This is a largely structural framework, it just imposes a semantic form to the composition of writing with a library metaphor."* — and, the same hour: *"you can have the same named components if need be if you know they won't be used because one replaces another in a context… Complex names suggest that you might need DI"*; *"rename book to library"*; the fundamental rating — writing and library first, the annotative reference and formatting second, article and encyclopedia third, the two demos last, *"each one proves the other works by being easy to implement well"*; and the annealing pass — *"periodically comment out some real percentage of your code based on the aesthetics of it being too hard to implement to say this framework was meant for it, and then question how it can be made easier before deciding"* | `src/book/` → `src/library/` (done, `git mv`); `encyclopedia/Theme.tsx` and `article/Theme.tsx` each export a `$Theme` that REPLACES the base one by registration in a scope — no `EncyclopediaTheme`/`LatexTheme` (done); the five doors wired — `lib`, `library`, `article`, `encyclopedia`, `utilities` — in rollup, `package.json` and both demos' aliases and paths, the base door no longer re-exporting the encyclopedia (U10 DONE; the base door still re-exports `library/` until every consumer moves); every file rated; the shells judged by "few members, structural properties with a rule, methods as structural help" |
| **T12** | *"Reference is annotative. Consider creating formatting for theme and related classes at the base."* and *"reference, formatting, writing are a great base, and book, article, encyclopedia are a good second level"* — given after the seam landed | the base is THREE folders — `writing/`, `reference/`, `formatting/` (Theme, Format and what joins them) — and the second level is `book/`, `article/`, `encyclopedia/`; `Theme.tsx` and `Format.tsx` move to `src/formatting/`; the default door exports the base |

## <a id="requirements"></a>Requirements — each says what would be OBSERVED

| | requirement | observed as |
|---|---|---|
| **R1** | A writing's `theme` is read, never stored: its own block's theme annotation, else its holder's, up to the book; a bookless writing answers the class default. | a promise: a `<Theme>` written into one chapter restyles that chapter and no other; removed, the chapter returns to the book's — and `grep -rn "\$check(theme" src` is empty |
| **R2** | No bond constructor constructs a theme. | the perf gate's construction count drops by at least the writing count on every page, text length and hash identical (the dead-end rule: *measure textLen and a hash on every timing run*) |
| **R3** | The base theme is the sheet: one styled chemical, the GitHub look as `@select` groups on `pd-` classes, worn at the book. | `/`, `/article`, `/turing` draw legibly with NO encyclopedia registration and read as GitHub markdown at 1440 and 480; `grep -rn "encyclopedia/" src/writing src/book` is empty |
| **R4** | Every kind writes its semantic element. | the DOM of `/turing` has `<p>` for every paragraph, `<h2>` for every heading, `<ul>` for every list, `<article>` for every chapter — counted by the driver, and the counts equal the model's |
| **R5** | The encyclopedia's look is one theme subclass plus the structural formats, registered by the demo. | `/turing` under the registered encyclopedia theme is text-identical to today (57,894 characters, 33 contents entries, 12 infobox rows, 0 refusals) and visually the same at 1440 and 480, driven |
| **R6** | `$Book` holds no block slices and draws its block flat, wrapping only its apparatus. | `grep -n "_opening\|_contents\|_body\|_closing" src/book/Book.tsx` is empty; the Colophon anchor is GONE from `/turing`'s contents (09's defect, [PS5](00-planning.md#the-running-promises)) |
| **R7** | The nearest-ancestor-carrying-a-type walk is one base member, used by `theme` and by `$Bookmark`. | `$Bookmark.chapter()` no longer hand-rolls `instanceof $Chapter`; one promise covers both callers |
| **R8** | `$composesWhatItHolds` is struck with its four overrides. | 09's 326 console errors per load on `/article` go to 0; `grep -rn composesWhatItHolds src` is empty |
| **R9** | A `<Title>` written inside a `<Section>` stands. | `title.test.tsx` green; the suite has 0 red |
| **R10** | The package has four doors and `writing/` is the default. | `package.json` exports `.`, `./book`, `./article`, `./encyclopedia`; the demos import from the right door; `rollup` 0 with no new cycle |
| **R11** | Every member touched has its three lines and its provenance in [the register](#the-register), and every `_`-prefixed field is either struck or cited to a Doug ruling. | the register, in this chapter |

## <a id="the-demo"></a>What is seen — the sprint's end, and it cannot be faked

***One corpus, two looks, differing only by a registration.*** The Turing page drawn under the base theme reads as a GitHub README — sans, one column, the contents a list — and under the encyclopedia's registration reads exactly as it does today. **A hand-authored page cannot fake two, and cannot fake the second being byte-identical in text to what shipped.** The driver counts characters, contents entries, infobox rows, semantic elements and refusals on both, and the perf gate reports constructions beside them.

## <a id="out-of-scope"></a>Out of scope, named so it is not drifted into

- **Math, Equation, Code** — the next sprint; nothing here builds them, but nothing here may make them harder to add than one file in the kind's shape.
- **`/article` and `/encyclopedia` as folders of kinds** — after the base; the encyclopedia theme this sprint registers lives where it lives today until then.
- **A Part's own table of contents** — Sprint 51 U6, still design owed.
- **The chapter that writes itself** — Sprint 52's P1, the authoring surface; touched only if a deletion here makes it fall out.
- **Chemistry features.** Bugs are fixed if truly bugs, with a promise watched red first; anything else goes to [the pitch](#the-pitch).

## <a id="the-plan"></a>The plan — units, each a mechanism and a visible end; WHAT, with the HOW decided at the code

*Set 2026-09-08 with the code open. Identifiers are never renumbered. Every unit is built small, gated by `tsc` + the suite + a local commit, and the demo driven where a unit touches drawing.*

**The design in one paragraph, read against chemistry's own mechanism.** *A theme is an annotation in the writing: `$Writing.theme` is a READ — its own block's theme annotation, else its holder's, up to the book, else the class default — and no bond constructs one. The theme is a styled chemical whose `selector` is the sheet's root; drawn where it stands in a block it draws NOTHING (its default look), and the book applies it by rendering it under a second look that writes `<main>` around the book's drawing, so chemistry's own `styling` replaces that element with the compiled sheet carrying its live values ([the look series](23-the-look.md) is what "chosen from outside by the container" means, and `given` is not exported, so `[style]` alone cannot feed a reactive sheet). The seat that applies an annotation to what it annotates is `format(drawn)`, which today lives on `$Type` alone; it moves up to `$Annotation` (identity by default) and `Reflection.formatted` reduces over annotations — one seat for theme, format and type. Every kind writes its semantic element and the base `frame()` puts the `pd-` classes ON the element the view wrote, wrapping a `span` only when the view wrote none. The four block slices and the region view leave `$Book`; the encyclopedia collapses to ONE theme subclass, since its grid, its float and its `attr(label)` are all sayable as `@select` groups on `pd-` classes at the sheet root.*

| | unit | mechanism | visible end |
|---|---|---|---|
| **U1** | **`theme` is a read** | `$Writing`: `theme!:` and `this.theme = $check(theme, '!')` deleted; `get theme()` answers `reflection.theme(this)` — the one ancestor walk (proxy name), own block first, then `parent`, floor the class template. `reflection.knows` gains the theme class, because `Writing.tsx` cannot import what extends it (the ring the `knows` handover already exists for). | promise: a `<Theme>` written into one chapter restyles only that chapter; `grep "\$check(theme" src` empty |
| **U2** | **`$Theme` is an annotation and the sheet** | `$Theme extends $Annotation` in the four-declaration shape (`$Theme$`, `$Theme`, `$TypeOfTheme`, `ThemeSpecification`); `selector = styled.main`; the values are the incumbents (paper, ink, quiet, shade, rule, pale, jet, pressed, link, measure, body, display, size, leading) at GitHub's numbers; `view()` null; `@look('sheet') $view()` writes `<main>{children}</main>`; `frame()` identity | promise: the theme drawn in a block draws nothing; drawn under `look="sheet"` draws one `<main>` carrying the compiled class and a live value |
| **U3** | **`format` is the annotation seat** | `format(drawn)` moves from `$Type` to `$Annotation`; `Reflection.formatted` reduces over `annotations(writing)`; `$Theme.format(drawn)` renders itself under the sheet look around `drawn`; `$TypeOfChapter.format()` deleted, `$Chapter` writes `<article>` | the only `format(` override in src is gone; `/turing` still draws every chapter as an `<article>` |
| **U4** | **The book places its theme and draws flat** | `$Book`'s bond: `this.theme` is not stored — the book PLACES a theme annotation (`placed($TypeOfTheme, theme)`, find-or-make, once per book) so registration `$(Book, Theme)(Mine)` resolves; `_opening/_contents/_body/_closing`, the region `view()`, `frame()`'s `BodyFormat` and the five imports deleted | `grep -n "_opening\|_contents\|_body\|_closing" Book.tsx` empty; the Colophon anchor gone from `/turing`'s contents |
| **U5** | **Kinds write their elements** | `$Paragraph` `<p>`, `$Heading` `<h2 id>`, `$List` `<ul><li>`, `$Chapter` `<article>`, `$Section` `<section>`, `$Cover` `<header>`, `$Footer` `<footer>`, `$TableOfContents` `<nav>`, `$Illustration` `<figure><img><figcaption>`, `$Index` `<section>`, `$Table` `<table>` chunked by `$columns`, `$Writing`'s meaning anchor a plain `<a href>`; base `frame()` merges `pd-` classes onto the element the view wrote | the driver counts `<p>`, `<h2>`, `<ul>`, `<article>` on `/turing` and they equal the model's counts |
| **U6** | **The sheet's groups** | `$Theme`'s `@select` groups on `pd-` classes and elements, the GitHub light sheet's values: root font/size/leading/color/background; `.pd-heading h2` sizes and the rule under h1/h2; `p`, `ul`, `li + li`; `pre`, `code`; `blockquote`; `hr`; `table th, td`; `img`; `a` and `a:hover` | `/` `/article` `/turing` read as GitHub markdown with nothing registered, at 1440 and 480 |
| **U7** | **The encyclopedia is one theme subclass** | `$EncyclopediaTheme extends $Theme` (proxy name): the grid as groups on the root (`display: grid`, areas), `.pd-book { display: contents }`, `.pd-cover`/`.pd-table-of-contents`/`article`/`.pd-footer` with `grid-area`, the sidebar float, `.pd-line::before { content: attr(label) }`, Wikipedia's values; the sixteen `*Format.tsx` deleted or reduced to what a sheet cannot say (`$Format extends $Annotation` kept for that); the demo registers it on its books | `/turing` under the registration is text-identical to today — 57,894 chars, 33 contents, 12 infobox rows, 0 refusals — and visually the same, driven |
| **U8** | **`$composesWhatItHolds` struck** | the rule and its four overrides deleted (Sprint 51 R13) | `grep composesWhatItHolds src` empty; 09's 326 console errors per load on `/article` → 0 |
| **U9** | **A Title in a Section stands** | `Composition.parts()` lifts a token of the writing's OWN class, not a specialisation (Sprint 51 R14, "the dissolved title is the requirement"); the suite says whether Summary-in-Section changes | `title.test.tsx` green; suite 0 red |
| **U10** | **Four doors, writing the default** | `src/index.ts` = writing + reference + utilities; `src/book/index.ts`; `src/article/index.ts` (empty); `src/encyclopedia/index.ts`; rollup inputs and `package.json` exports; the demos import from the right door | `rollup` 0 with no new cycle; the demos build |
| **U11** | **One ancestor walk** | `$Bookmark.chapter()` and `Reflection.indent` use the walk U1 made | one promise covers theme, bookmark and indent |
| **U12** | **The demo as the gate** | `.wiki/.public` registers the encyclopedia theme; the drivers and the perf gate run before and after; constructions counted with textLen and hash | R2's number, R5's identity, R6's absence |
| **U13** | **The register folded in** | every member touched carries its three lines and provenance; `_`-fields struck or cited | [the register](#the-register) |
| **U14** | **The records** | Solutions chapter for the Colophon defect; ch13 and ch18 corrected by their authors; the cover synopses; handoff | the branch library validates; the chapter's Where things stand |

**Order:** U1 → U2 → U3 → U4 → U6 → U5 → U7 → U8 → U9 → U11 → U10 → U12 → U13 → U14. *U1–U4 are the seam and are sequenced; U5–U7 are the look and are gated by the driver; U8–U11 are deletions with promises.*

**The one base change, for Doug to sign or strike — its three lines:** *`format(drawn)` moves from `$Type` up to `$Annotation`.* Depends on `Reflection.formatted`, designed to reduce over exactly this seat (Sprint 52 D5: format composes). Designed for it: yes — the seat was built to stack, and annotations are what stack. Base bent: no — nothing is added; one member moves to the class that is true of everything beneath it.

## <a id="the-register"></a>The register — every member with its three lines

***Produced and standing as its own chapter: [Sprint 53 — The Register](58-sprint-53--the-register.md)*** — **927 members: 601 keep · 150 design problems · 85 cruft · 91 deleted per ruling**, each with provenance. *Every deletion in this sprint cites its row.*

## <a id="the-pitch"></a>Design questions and names, batched for Doug — NO chemistry blocker found

***No chemistry feature is needed for this sprint.*** *The theme sheet's whole design landed on public mechanism (probe P7). `given` on chemistry's surface would be a nicety, not a need.*

| | the question | what stands meanwhile |
|---|---|---|
| **Q1** | **`display` → `face`.** A styled chemical emits any member named like a CSS property, so the heading-typeface value could not stay `display` (it would emit `display: <font stack>`). *Name owed.* | `face`, a proxy, in `$Theme`, `HeadingFormat` and the demo |
| **Q2** | **`$content`** — the prop the sheet takes the drawing through (P7). *Name owed.* | `$content` on `$Theme` |
| **Q3** | **`reflection.nearest`** (the one ancestor walk) and **`reflection.sheet`** (the memoised class component). *Names owed; and whether chemistry already memoises `$(class)` — not measured; if it does, `sheet` is deleted.* | both on `Reflection` |
| **Q4** | **Two shapes of format exist and T1 named one.** The demo's *rendered wrappers with per-instance props* (`<Ring globe=…>`, `<Place at=…>`, `<SearchFormat action=…>`) are `$Format extends $Chemical` components and work; T1 says a format is an annotation. *Is a format written INTO the writing it formats (carrying its props there), the wrapper deleted — or do both stand, the annotation for the book's structure and the wrapper for the demo's specialized components?* | `$Format` unchanged; `formatting/Format.tsx` marked in progress |
| **Q5** | **The sheet is a fresh instance of the theme's CLASS** (P7), so a theme written with instance props — `<Theme ink="…"/>` — would not reach the sheet; a theme is a class. *Acceptable?* | classes only |
| **Q6** | **`_block`** — the register marks it a design problem: the rename came from the v2.2 port with no ruling, and Doug said "I didn't add those `_` properties". *Rule it: the block is inert by prefix (chemistry's `_`), or the block is reactive and the prefix goes.* | untouched |
| **Q7** | **`Abstract` is parenthetical by a copied default** (register: cruft) — an `<Abstract>` in the LaTeX article would vanish. *Rule it before the article sprint.* | untouched |
| **Q8** | **The register's claim that `Reflection.indent` always answers 0** — to VERIFY at the line before it is believed; if true, `pd-indent-N` never reaches the page and the encyclopedia's `.pd-indent-1` selectors are dead. | flagged, not acted on |
| **Q9** | **The book door stands at `src/book.ts`, not `src/book/index.ts`**, because Windows folds `index.ts` and the kind `Index.tsx` into one name. *Fine, or rename the kind?* | `src/book.ts` |

## <a id="sketching"></a>THE SKETCH, continued — 2026-09-08 night, under [`/public-code-design`](../the-public-skillset/05-public-code-design.md)

| commit | what |
|---|---|
| `7743158` | T13: `book/` → `library/` by `git mv`; `encyclopedia/Theme` and `article/Theme` each a `$Theme` replacing the base by registration; the five doors wired (U10 DONE) |
| `d8426a8` | every door a ROOT file named for its folder — Doug: *"why are our folders requiring a wart?"* — the Node `index.ts` idiom collided with the kind `Index`; chemistry's `src/symbolic.ts` was the precedent |
| `529ed5d` | the thicket cut: every scaffold header one line; the todo file and the subject-chain shells deleted (*"does it belong in tests?"* — no) |
| `7745d91` | U5 · U4's remainder · U6: nine kinds write their elements; the four `_` slices and the region `view()` gone; no encyclopedia import in the base; the base sheet's GitHub groups. DRIVEN: text not identical (the encyclopedia's hiding rules lived in the region formats) and FCP 1,908 → 556ms, PROVISIONAL |
| `217dd64` | U7: the encyclopedia is one theme; fifteen `*Format` files deleted; the demo consumes it — portal theme, chapter looks as `frame()` wrappers, the article's book registering the encyclopedia theme; `.pd-heading h2` → `h2.pd-heading` in the demo |
| **`b7a7f62`** | **U7 SEEN AND IDENTICAL**: two placement faults found by probing the built page (the printed synopsis spanning all columns into the contents' row; `pd-title` standing on the anchor itself). `/turing` 57,137 · hash `1587765035` and `/article` 19,638 · hash `334131036` — **byte-identical to before the experiment** — at FCP 664 and 548ms against 1,900 and 1,800; `/` 1,008 against 1,009, one character owed |

**The folders, assessed:** `encyclopedia/` was the one not like the others — eighteen files, fifteen of them formats — and is now three: `Theme`, `Infobox`, `Hatnote`. `formatting/` holds the one odd file, `TableFormat`. `writing/` at eighteen is every level or kind. The demo's `.wiki` root carried four zero-byte dotfiles; gone.

**The annealing pass, first round:** the ugliest thing in the newest code is the demo's six identical `frame()` wrappers — a chapter, a sidebar, a margin each wrapping itself in its own format — one gap paid six times. What would make it easy is T1 taken literally: a format WRITTEN INTO the writing it formats, applied by `formatted()` as the theme is. The mechanism built for the theme (a fresh instance of the class worn with the drawing as `$content`) is therefore the FORMAT's mechanism, and the theme is a format that is a singleton with values — a hierarchy correction: `$Theme extends $Format extends $Annotation`.

## <a id="where-things-stand"></a>Where things stand — handoff, 2026-09-08 evening, Doug away

> ***THE NEXT ACTION, as a command:*** **drive the demo before anything else** — `npm run build` in the package, `node .wiki/.public/build.mjs`, `npx vite build .wiki/.public`, then `node library/.public/.lib/the-public-skillset/02-public-audit-performance--drive.mjs library/.public/package/.wiki/.public/dist AFTER-U3 5` — *the working copy has not been driven since U3 landed, and U3 changed what wraps the page.* **Then `/ce-work` at U6 (the sheet's groups) and U7 (the encyclopedia theme), which end the transient below.**

### The commits — revert the experiment to `2b522b0`

| commit | what |
|---|---|
| **`2b522b0`** | *THE BASELINE.* Sprint 51/52's working copy committed on Doug's word. **`git revert`/`reset` to here undoes the whole experiment.** |
| `0a37572` | U1 · U2 (values) · U4 (placement): a writing reads its theme through the walk; the theme an annotation; the book places one; `theme.test.tsx` 5 of 5 |
| `9519fab` | T12: `src/formatting/` — Theme and Format moved by `git mv`, imports followed |
| **`5afea07`** | U3 (the seat: `format` on `$Annotation`, `formatted` over annotations, the sheet as a fresh class instance with `$content`, `$Chapter` writes `<article>`, the base `frame()` merges `pd-` classes onto a written element, `BodyFormat` off `$Book`), the `face` rename, the whole scaffold, the skill, the register. **Gate at this state: build 0 · tsc 0 · suite 103 green, 1 held red, 21 todo of 125.** |

### What is built and measured (read / run)

- **The theme is read, never stored** — `$Writing.theme` through `reflection.theme` → `reflection.nearest`; `theme!:` and `$check(theme, '!')` gone from `$Writing`'s bond. *5 promises.* **run**
- **The theme is an annotation and the sheet** — `$Theme extends $Annotation`, `$TypeOfTheme`, `ThemeSpecification`; `selector = styled.main`; default look null, `@look('sheet')` writes `<main>{$content}</main>`; `format(drawn)` mounts the memoised CLASS component with `content={drawn}`. *2 promises: one main on a book, a chapter's own theme a second sheet inside the first.* **run**
- **`format` is the annotation seat** — moved from `$Type` to `$Annotation`; `Reflection.formatted` reduces over annotations; `$TypeOfChapter.format()` deleted, `$Chapter` writes `<article>`; the base `frame()` puts `pd-` classes on the element the view wrote. **run** (suite), **not driven**
- **The book places its theme** after its footer; `$isDrawnInATheme` moved to `BookSpecification`, refusing two. **run**
- **Probes P1–P7, the design's evidence:** a parented annotation mounted with a prop LOOPS (P4, heap death); a fresh class instance with the drawing as children draws nothing (P5); the bare `[style]` component nests but reads no live values (P6); a fresh class instance with the drawing as a prop is nested, live and loop-free (P7). *Recorded at the head of `Theme.tsx`.* **run**
- **The page text is identical before and after the seam** (57,137 / 19,638); the 149 characters against the morning's baseline left between `40d9667` and `2b522b0`. **run**

### The transient — the demo is visually OFF right now, on purpose, until U6/U7

*`BodyFormat` is off `$Book` (the sheet's `<main>` replaces it) so the encyclopedia GRID is dark; `$Theme`'s default values are GitHub's, so the encyclopedia formats that read `theme.face`/`theme.ink` draw sans and near-black where they drew serif; `$Chapter` no longer wears Article/Output. Text is expected identical; the look is not.* **U6 (the sheet's groups) and U7 (`EncyclopediaTheme` registered by the demo) restore it, and R5 is the gate.**

### The scaffold — every file, its state, its freedom

| file | state | freedom |
|---|---|---|
| `src/formatting/Theme.tsx` | IN PROGRESS — U2/U3 built; U6 groups owed; header comment carries P1–P7 | clay |
| `src/formatting/Format.tsx` | FOUNDATION, unchanged; Q4 decides its shape | gently |
| `src/writing/Code.tsx`, `Math.tsx`, `Equation.tsx`, `src/utilities/Tex.ts` | CREATED — shells, every drawing member throws | clay |
| `src/article/Article.tsx`, `Margin.tsx`, `Theorem.tsx`, `LatexTheme.tsx`, `index.ts` | CREATED — shells; the door unwired (U10) | clay |
| `src/encyclopedia/EncyclopediaTheme.tsx` | CREATED — Wikipedia's values and the grid as groups; the sixteen formats to fold | clay |
| `src/encyclopedia/Infobox.tsx`, `Hatnote.tsx` | CREATED — shells promoted from the demo's `.sidebar`/`.hatnote` | clay |
| `src/book.ts` | CREATED — the book door, unwired (U10, Q9) | clay |
| `src/book/Book.tsx` | IN PROGRESS — theme placed, `BodyFormat` gone; the four `_` slices and region `view()` still stand (delete-per-ruling, U4's remainder) | gently — the deletion is ruled |
| `src/writing/Writing.tsx`, `Annotation.tsx`, `Type.tsx`, `Chapter.tsx`, `utilities/Reflection.tsx` | IN PROGRESS — the seam | gently |
| `.tests/theme.test.tsx` | 7 promises, green | clay |
| `.tests/scaffold.test.tsx` | 21 todos — done when empty | clay |
| `.latex/aaronson/{.book,.chapter,.cover,1-introduction}.tsx`, `.latex/.public/*`, `.latex/verify-latex.mjs`, `.latex/tsconfig.json` | CREATED — the demo's skeleton; the paper's content owed from Doug; the driver throws | clay |
| `.wiki/.subjects.tsx` | CREATED — the subject chain as shells, not bound by `build.mjs` | clay |
| `.claude/skills/public-code-design/SKILL.md` ← `the-public-skillset/05` | CREATED — the principle, unedited during the trial | trial notes only |
| `58-sprint-53--the-register.md` | CREATED — 927 rows | a reading, checked at the line |

### Owed, in order — the units as they stand

**U5** kinds write their elements (Paragraph `<p>`, Heading `<h2 id>`, List `<ul><li>`, Section `<section>`, Cover `<header>`, Footer `<footer>`, TableOfContents `<nav>`, Illustration `<figure>`, Index `<section>`, Table `<table>`, Reference/Ref plain `<a>`) and every encyclopedia import leaves `writing/` and `book/` · **U6** the sheet's groups from `github-markdown-css` (MIT 5.9.0; the values are in the catchup record) · **U7** `EncyclopediaTheme` folds the sixteen formats and the demo's four region formats; the demo registers it · **U4's remainder** the four `_` slices and the region `view()` deleted · **U8** `$composesWhatItHolds` and its four overrides deleted (91 rows say delete-per-ruling; this is most of them) · **U9** `Composition.parts()` lifts a token of the writing's OWN class only · **U11** `$Bookmark.chapter()` through `nearest` · **U10** the doors wired (rollup, package.json, the demos' imports) · **U12** the demo driven, the perf gate with constructions counted · **U14** the records: a Solutions chapter for the Colophon; ch13 and ch18 corrected by Gabby; the cover synopses.

### Wrong turns already taken — do not repeat

- **Mounting the parented theme annotation as the sheet** (`$(this)` with a prop) — a heap death in 225s; measured as P4. The sheet is a fresh class instance.
- **A `<>…</>` fragment as a book's child in a promise** — the bond refuses it and the instance comes back without a block; write the elements flat.
- **`src/book/index.ts`** — collides with `Index.tsx` on Windows.
- **Reasoning about a 149-character text difference** — measure with the driver against both commits; it took one probe and was not the seam.
