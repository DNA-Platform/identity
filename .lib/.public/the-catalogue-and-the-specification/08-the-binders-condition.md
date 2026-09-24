# The Binder's Condition

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***The chapter name is a PROXY, on the model of [The Condition Report](../the-condition-report/01-how-to-read-this.md), which does this for `src`. Doug's to rename.***

---

***The register of cleanup for [`library/.public/package/.binding`](../../package/.binding/binding.ts).*** **Doug, 2026-09-19: "Whatever you discover, organize into a way of tracking cleanup, so we can do it again, or do it incrementally as you work."** *So every wart found in the binder is an entry here, with a disposition, and a cleanup — [the skill](../../../../.claude/library/our-skillset/35-cleanup.md) — starts from this register and ends by editing it. An entry is added the moment a wart is seen, whether or not it is fixed then; an identifier is never reused.*

**The dispositions are [the condition report's](../the-condition-report/06-the-cleaning.md#dispositions):** *TREAT · MONITOR · LEAVE · REFER · DESIGN OWED.* ***And the register is the binder's, not `src`'s:*** *the register is [plain, longer names; a phase is a file; a rule returns a fault](07-the-binder.md).*

## <a id="b1"></a>B1 — Sketch comments at the top of finished files — **TREATED 2026-09-19**

*Nine files carried their own history: why `resolve` runs before `specify`, what the scanner did with `\0`, what Fast Refresh declined.* **Moved to [The Binder, As Built](07-the-binder.md); each file keeps the rule at the point of use.** *The book links to the file, never the reverse.*

## <a id="b2"></a>B2 — `catalogue.ts`: a comment with no code under it, and two paragraphs written twice — **TREATED 2026-09-19**

## <a id="b3"></a>B3 — `resolution()` took a `Graph` it read two fields of — **TREATED 2026-09-19**

*The catalogue built a fake graph to satisfy it. It takes `{ folder, name }[]`; `resolution/names.ts` retired.*

## <a id="b4"></a>B4 — `binding.ts` named `integrity`, deleted with the old notation — **TREATED 2026-09-19**

## <a id="b5"></a>B5 — `language.ts` promised membership-first resolution and nothing called `whole()` — **REFER**

*The comment now says so. Whether a resolver tries the whole name before splitting on `/` — refusing a name where both readings resolve — is a design; [the escape](06-the-language.md) is how a slash is kept today.* ***Doug's ruling.***

## <a id="b6"></a>B6 — Two suites repeating each other's setup — **TREATED 2026-09-19**

*`bound()` and `read()` in [`staging.ts`](../../package/.binding/.test/staging.ts).*

## <a id="b7"></a>B7 — The test library read with the host's `.pubconfig` — **TREATED 2026-09-19**

*Found by running the suite inside `.me`'s copy: the host named a root the test library does not have. It carries its own settings now.*

## <a id="b8"></a>B8 — A startup timed by a loop that never matched — **TREATED 2026-09-19**, and it was not the binder's

*Reported as 123, 276, then 408 seconds; was the probe's own limit each time. [Solutions 87](../solutions/87-the-start-that-was-timed-by-a-loop-that-never-matched.md).* **The binder's dev server starts in seconds.**

## <a id="b9"></a>B9 — Processes our work leaves running — **TREATED 2026-09-19**, as a tool

*Twenty-seven node processes and nine esbuild services from four days of sessions.* **[The sweep](../../../../.claude/library/..environmentalism/09-on-strays.md) is in the team library because the strays come from more than the binder.**

## <a id="b10"></a>B10 — `retaking` and `retakes` — **MONITOR**

*The inventory and the plugin that keeps it, one letter apart. Plain enough for a compiler; a proxy, flagged, and renamed when Doug names it.*

## <a id="b11"></a>B11 — `bookMention` should be `book` in `.me`'s tables — **REFER**

*Doug: "Book = $(book)." His prose, on his say.*

## <a id="b12"></a>B12 — The `statSync` in the parse cache — **MONITOR**

*287ms of a 449ms warm structure at a thousand books is the cache asking the disk what the watcher already knows. Waits for the reverse index, which decides what a change invalidates.*

## <a id="b13"></a>B13 — `specification/reading.ts` and `catalogue/reading.ts`, two readers of one library — **MONITOR**

*The evaluation half still serves the specify phase; it is the design's remaining reader of a RUNNING book. Waits for the `.public` rewrite.*

## <a id="b14"></a>B14 — Things registered on the shared class — **DESIGN OWED**, the substrate's

*One process per page in the render because a book registers its theme on the shared class. Doug: "Each book can have its own class with things registered to it." Dispatchable.*

## <a id="b15"></a>B15 — An unprinted title leaves no anchor — **TREATED 2026-09-20**, by the chapter

*The chapter's element wears its own name as its id (`$Chapter.id`), printed title or not, so a reference to a synopsis lands on it; the compiler writes the fragment for every chapter and never asks whether a title prints ([B31](#b31)).*

## <a id="b16"></a>B16 — Four spellings of "a link" — **TREATED 2026-09-20**, and one hand too many

*The encyclopedia theme said `.pd-ref` in eight rules and `a.pd-meaning, a.pd-ref, a.pd-reference` in four; the base theme `.pd-meaning, .pd-ref`; the toolbar format `.pd-ref, .pd-catalogue`; Doug's sheet `.pd-ref`. A mention's anchor wore none of them, and the contents rows and the tabs lost their rules the day a mention stopped being its own anchor ([ac48a33](../projection/83-sprint-77--the-binder-rebuilt.md)).* **Every anchor the framework draws wears `pd-meaning`, and every sheet says that one word.** *Still MONITOR: `Writing.view`, `Catalogue.print` and `Ref.view` each append the class by hand — one class, three hands.*

## <a id="b17"></a>B17 — Addresses made at runtime in `.public` — **TREATED 2026-09-20**

*The shelf, `address()`, `standing()`, `itself` and `leads()` across `$Catalogue`, `$$Book`, `$Subject`, `$Author`, `$Canonical` and `$Participant`.* **Doug: "There should not be anymore dynamic link generation" — "Then it is not a validated library. Remove the feature from `.public`."** *The transform writes `[words](url)` into every mention, `[words]()` for the page it stands on, and `pd-this` is the framework's reading of that.*

## <a id="b18"></a>B18 — `Ref.url()` derives `#key` from a bare key — **REFER**

*The paper's citations: `[Cook 1971](cook)` becomes `#cook` at draw time. A link made at runtime, on the frozen `.latex`; Doug's ruling whether the binder validates folds.*

## <a id="b19"></a>B19 — The frozen bindings' `routes.ts` call `$$Book.shelve` — **LEAVE**

*`.wiki` and `.latex` carry a generated `routes.ts` that names a member the package no longer has. Frozen; a rebuild regenerates the file without it.*

## <a id="b20"></a>B20 — `specification/reading.ts` answers addresses — **TREATED 2026-09-20**, B13 amended

*It read a mention's `name`, which is now the compiler's. It reads where a mention leads. Still a reader of a running book.*

## <a id="b21"></a>B21 — A synopsis chapter shares its id with a section of the same name — **TREATED 2026-09-20**, and it was the design

*Doug's "The books", "The projects", "The tools" and "The conversations" each hold a section per book, headed by the book's name, with its synopsis printed; a chapter titled by the book's name took the same id, and the row's link landed on the first — and the proof passed it, because a `Set` had swallowed the second id. Doug: "It concerns me that navigation worked."* **The synopsis lives in the book — "In the book. It has a `.synopsis` file literally" — titled `Synopsis` by declaration ("Don't make that automatic"), and a catalogue's row names it beside the box: `<Chapter>[[ X ]]( X / Synopsis )</Chapter>&nbsp;<Book>[[ ]]( X )**</Book>`.** *The five synopsis chapters the catalogues carried are gone, `asChapter` reads a chapter mention as written when it names a book, `wellformed` asks the row for the listed book's own synopsis, and `proof` counts ids.*

## <a id="b22"></a>B22 — The parse eats a non-breaking space — **REFER**, `src`

*`&nbsp;` between the box and the name came out an ordinary space: `parser.text` splits on `\s`, which JavaScript takes to include U+00A0. The gap is the sheet's until the parse keeps it.*

## <a id="b23"></a>B23 — Two lists of mention tags — **MONITOR**

*`mentioning` in `structure.ts` says which tags make an edge of the graph; `mentions` in `reading.ts` says which tags read a link. Two questions, one vocabulary; unify when the reader owns both.*

## <a id="b24"></a>B24 — The book module's symbols carry the chapter's number — **TREATED 2026-09-20**

*`3-semantic-reference-theory.tsx` and `5-semantic-reference-theory.tsx` both became `SemanticReferenceTheory`. Nobody reads the symbols.*

## <a id="b25"></a>B25 — `reflection.knows` — **REFER**

*Doug: "Terrible name… no object knows anything." And: "Leave it for now."*

## <a id="b26"></a>B26 — Doug's chapters on the sheet and the masthead may now lie — **TREATED 2026-09-20**, ghostwritten

*`2-the-sheet.tsx` (the plate in its infobox, the mark as two links, the rail's rows as name and square), `3-the-masthead.tsx` (the menu is the table, the tabs are mentions) and `5-the-plate.tsx` (the logo leads to the plate), in his voice — Doug: "You ghostwrite in my voice. You always did right?"*

## <a id="b27"></a>B27 — Two synopsis rules say one sentence — **MONITOR**

*`wellformed.ts` asks for the chapter that is a book's synopsis once for a canonical listing and once for a topical one. One rule, once the listing carries its relation.*

## <a id="b28"></a>B28 — A kind that draws its own element drops the base's link and format — **MONITOR**, `src`

*`$Image` must draw an `img`, and `$Illustration` its `figure`; both override `view()` and neither goes through `$Writing.view`, where a writing's id, its link (`pd-meaning`, `href`) and its worn format are given. The figure carries the id now (2026-09-20, for the plate a mention allocates); a figure given a `Reference` is still not a link, and a format worn by an image is not drawn. The seam wants the base to hand `drawn` to a kind rather than each kind repeating it.*

## <a id="b29"></a>B29 — Two synopsis rules, and the anchor's `named` under the chapter's rule — **MONITOR**

*The rule that refuses two chapters called one thing now refuses an anchor under a chapter's name, once per naming; two faults for one collision. And `anchor` is a proxy for what the language calls a mention.*

## <a id="b30"></a>B30 — A theme's `box_padding` renders as `0px` — **REFER**, chemistry or `src`

*`$EncyclopediaTheme` declares `box_padding = '0.2em'` beside `box_margin` under `.pd-infobox.pd-aside`; the page's rule list shows the margin landing and the padding as `0px`, whatever value is written. The infobox format's own `padding` is overridden too. Measured 2026-09-20 with `look rules`. The Turing box has `0.2em`; ours has its rows' padding and none of its own.*

## <a id="b31"></a>B31 — The compiler read `print={false}` off a tag — **TREATED 2026-09-20**, by ruling

*`Element.prints`, `Spot.prints` and `prints()` addressed an unprinted chapter as its book's page. Doug: "if you are parsing like that, you have broken polymorphism. What happens when we want a subclass of title? The compiler just cares that things are in the right file for now. Otherwise we'd need serious static analysis to integrate it, and that is not about to happen." All three are gone; every chapter is addressed by its fragment; the transform compiles a mention element printed or not, so the 84 `<Participant print={false}>Doug</Participant>` in the conversations are written `[Doug](My Library Log)`.*

## <a id="b32"></a>B32 — Every heading was an address — **TREATED 2026-09-20**, in `src` on Doug's yes

*`$Heading.view` slugged its own words into an id, so the chrome's name doubled on every page, "Cautions" wore one id seven times and a transcript heading nine, and the counting proof found 29 doubled ids on six pages. One seam now: `$Writing.id` is the fold's key, `$Chapter` overrides it with its name, and `$Heading`, `$Illustration`, `$Entry` and `$Date` draw `this.id` — five hands to one ([B16](#b16)'s pattern). A heading a table refers to is allocated `[[[ X ]]]` and spent `$[ ./X ]`: twelve in Doug's library, and sixteen rows that wrote `#fragment` by hand write none.*

## <a id="b33"></a>B33 — A name nobody spends, and a resource nobody read — **TREATED 2026-09-20**

*Doug: "it should also refuse when nothing references a mention in the whole library. It is unnecessary in that case and we want a compact library." `UNREFERENCED-MENTION`, over `Structure.referred`. Building it found the structure read chapters alone: the masthead's reference to the plate stood in a resource and was invisible, while the transform compiled it. A resource is read for what it refers to and never for what it names.*

## <a id="b34"></a>B34 — The menu prints the table a second time — **MONITOR**

*Doug: "It should be the table. Are we not displaying the table of contents there?" `$Contents extends $Menu` in his chrome re-prints `book.tableOfContents`, so the rail's and the menu's rows are one print drawn twice, and `$Book.table` is `chapters[2]`, positional. `$Contents` is a PROXY NAME in Doug's own code, flagged.*

## <a id="b35"></a>B35 — Proxy names of the day — **MONITOR**

*`asChapter` (language), `UNREFERENCED-MENTION` (fault), `referred` (structure), `answering` (proof), `chapters` (the fixture's knob), `$Contents` (Doug's chrome). Flagged, his to rename.*

## <a id="b36"></a>B36 — Two names, one address — **TREATED 2026-09-20**, as a specification

*Doug: "You should have a spec of what a library is and you should look for things that would obviously be true. Use principles of urls. Do you ever get the same? Then validate that that scenario is impossible. It should express necessity and sufficiency." [A Library, Necessarily and Sufficiently](09-a-library-necessarily-and-sufficiently.md) is that specification, and writing it found what nothing refused: the slug is not one-to-one, so "Doug's Library" and "Dougs Library", or "The Sheet" and "the sheet", were two names at one address; a name of punctuation slugged to nothing; a book called "Assets" would have been written into the bundle's folder; a chapter titled with its own book's name was skipped in silence, its fragment the cover's; and a resource could title a chapter or allocate a mention and so stand on every page.* **`SAME-ADDRESS`, `NO-ADDRESS`, `RESERVED-ADDRESS`, `RESOURCE-NAMES`, each with a promise built to break its way; the silent skip is gone.** *The four fault names are PROXIES, flagged for Doug.*

## <a id="how"></a>How to use this register

- **Cleaning:** *read the entries marked TREAT; treat them; mark them with the date. Add what you found on the way, whether or not you treated it.*
- **Working:** *when a wart appears mid-sprint and the sprint is not the place to treat it, add the entry with MONITOR and what it waits for. That is the incremental half.*
- **Counting:** `grep -c "TREATED" 08-the-binders-condition.md` *says what a cleaning did;* `grep -cE "MONITOR|REFER|DESIGN OWED"` *says what is still owed and to whom.*
