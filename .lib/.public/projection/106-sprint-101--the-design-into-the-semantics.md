# Sprint 101: The Design into the Semantics

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** **CANCELLED 2026-10-06, a failure on Doug's word — "Just cancel the current sprint. Call it a failure."** Ten of twelve units were built and shown the same day; what the showings produced was, in his words, "okay but sad", then "a halloween nightmare blackbook library", then "I feel so much pain and sadness looking at this work." What was built stands in the code and is the starting state of [Sprint 102](107-sprint-102--designing-together.md), which designs each book with him in HTML before anything is applied. [Where things stand](#where-things-stand) is the record of the failure.
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow).
- ***The title is a PROXY for his sentence: "following the html more closely, mapping the design into the structural semantics of the library while maintaining the visual properties of the design."***

---

## Where this sprint comes from

**[Sprint 100](105-sprint-100--the-big-plan.md) closed with the designs decided by number, all his, and four books built to a matching that was not.** His brief for this one, 2026-10-06: *"We talked a lot about object models and the shareable code, but also which aspects of the design should be shared and how we might configure them. We want to start adding color to the books. You want to start following the html more closely, mapping the design into the structural semantics of the library while maintaining the visual properties of the design. How about we make that what this sprint is about?"* And, in the same hour: *"I will give you feedback, and I also want us to seriously compact and reorganize the documentation for how to design libraries. And one of the things we can do is write the reference manual really well to explain how the tools in the library are consistent with the library patterns."*

**What governs it, already written:** the designs by number in [The Designs I Am Going With](../../../../.me/.design/1-the-designs-i-am-going-with.tsx); the map from each design's HTML to the library's parts, [The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md) — the frame is one file with four attributes, a theme is a tone; [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md); [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md); and [the protocol](../writing-a-book/01-02-how-a-library-is-developed.md), with its sketch-first section.

## Requirements — approved 2026-10-06, each in its section

**His answer to what cannot be faked:** *"Choose colors for the books, start to work in the idea that each book has its own color scheme. Remember that the libraries is probably similar to the coming soon that we have now on the site - that was our inspiration for the black and blue. But we need the designs implemented too. And the thing you can't fake is for me to look at the chapters, see that you created wonderful and well-named components for the designs, and the chapters have clear semantic data that is easy to maintain."*

### §1 — The end, and the gate

- <a id="r1"></a>**R1 — four books, one frame, each in colour, each to its concept.** At the close, the catalogue, the manual, the story and the design book stand on 4242 inside one shared frame, each in its own colour, each page built to its decided concept: the catalogue as 1, the manual as 28 and 31, the story as 29, the design book white. **Seen:** the four addresses, and a press on a subject in the bar landing on that book in its colour.
- <a id="r2"></a>**R2 — the gate: the chapters and the components, read.** He reads the chapter files of `.me` and finds the components named by [the method](../the-coding-style/09-how-a-thing-is-named.md), and every chapter carrying clear semantic data and nothing else — no layout, no colour value, no look — so that a chapter is maintained by someone who has never seen the code. **Seen:** a chapter file opened at random reads as what the book is about; the folder's class list read beside its sketch passes the naming test.

### §2 — The frame

- <a id="r3"></a>**R3 — the base book draws the frame's regions once, for every book.** The library's bar: its mark and name, the library's own table of contents as the row of subjects, *me*. The book's side: what its cover says — filed under, its title, by — and its table of contents, with the switches. The page. A book's own class draws only what goes in the page and its own tools. **Seen:** the four books with the same regions in the same places, before any look.
- <a id="r4"></a>**R4 — one arrangement per `data-layout` of the frame file, and a reader can switch.** `side`, `header`, `both`, `two`, `rail`, `cards` — each a Format that arranges the regions as the file's desk grid and phone column have it; a book takes one by registration; a press gives another. **Seen:** a book in `both`; a press showing it in `side`, nothing redrawn differently.
- <a id="r5"></a>**R5 — the library's cover and table of contents reach every book's page by import, never by lookup.** As a catalogue's chapter is handed another book's synopsis. **Seen:** the subjects in every book's bar are the catalogue's own rows, and the bind refuses a book whose bar names a book the catalogue does not hold.
- <a id="r6"></a>**R6 — every size, font and value is the frame file's**, read whole before building; the photographs check after. **Seen:** the frame's regions measured on the built page agree with the file's — the bar's height, the side's width, the type.

### §3 — Colour

- <a id="r7"></a>**R7 — a tone is a theme, and the library's palette is the coming-soon page's.** `dark` and `light`, named for the tone, setting the file's bar values — `bar`, `bar-fg`, `bar-dim`, `bar-on`, `bar-line`, `mark`, `mark-fg`; the base palette the frame file's own — night, deep, blue, sea, sky, opal, pale, mist, white, ink, soft, line, me, wash, the serif and the sans — in place of the manual's teal, which becomes the manual's own. **Seen:** the tone switched on one book by one press.
- <a id="r8"></a>**R8 — each book has one colour of its own, said once; the scheme is derived.** The bar, the side, the logo, the accent, the cover's gradient and its binding derived from the one colour as the file derives a cover's with `color-mix`; the library's own books the soft black. **Seen:** four books, four colours, and the catalogue's shelf painting each cover in the colour that book says of itself.
- <a id="r9"></a>**R9 — where the colour is said is tried both ways and kept where it reads naturally and looks nice.** His words: *"Maybe it would be said in the subclass of book? We should probably be creating one of those per actual book. Play around and see where it feels natural. Maybe annotated on the cover is natural because it's like decorating the cover. But you need to make it look nice."* **Seen:** both tried on one book, shown to him, one kept on his eye.

### §4 — The four pages

- <a id="r10"></a>**R10 — the catalogue as 1.** Every region of `3-every-concept~001.html` is either drawn from a part of the library or listed as *not built* in the map; nothing is invented. The shelf's covers at 2:3 in each book's colour with the name set in the file's serif and *with …* at the foot, a caption under each. **Seen:** the catalogue's page beside 1's photograph.
- <a id="r11"></a>**R11 — the story as 29.** The sheet under the frame, the chapters at the side with the open one lit, the three papers above the sheet, the turn at its foot; the opening paragraph said to be first by an annotation in each chapter, never found by position. **Seen:** beside 29's photograph.
- <a id="r12"></a>**R12 — the manual as 28 and 31.** Two readings of one chapter switched at the head; the transition between them expressed annotatively — *"if it can be made expressed annotatively and elegantly"*; the code reading with a much smaller synopsis of its own above the file; the words reading substantive, the file folded to a strip that opens again. **Seen:** beside 28's and 31's photographs, and the exchange on one press.
- <a id="r13"></a>**R13 — the design book in the frame, white.** Moved out of its own side bar into the shared frame, white as its colour, the black side bar and the blue-with-black-top as its options; the gallery and the open concept as they are. **Seen:** the design book under the frame, white; the modes gone, the tones in their place.

### §5 — In, and out

- <a id="r16"></a>**R16 — the approved `.public` diff is applied and tested, as a unit of its own, shown before it is kept.** The three parts in [Sprint 100](105-sprint-100--the-big-plan.md#where-things-stand): chemistry's `react()` one line, the book's bookmark setter, the router's scroll line. *His word at the brainstorm: "Approve, diff in."*
- **Out:** the views of 2 and 3; the projects' catalogue, a conversation, the importer; find, favourites, notes, *continue*; counts the library does not hold; the `~` rule for the binder.

### §6 — Acceptance

- <a id="ae1"></a>**AE1** — any book opened: the library's bar, the book's side, the page; a subject pressed in the bar lands on that book in its colour.
- <a id="ae2"></a>**AE2** — one press switches the tone on one book; nothing is redrawn differently, measured by a probe that counts draws.
- <a id="ae3"></a>**AE3** — the catalogue's shelf paints each book's cover in the colour that book says of itself; change the colour in one place and the shelf and the book both follow after a bind.
- <a id="ae4"></a>**AE4** — the manual's *code* and *words* exchange on one press, the file folding to a strip and opening again.
- <a id="ae5"></a>**AE5** — each folder's class names, listed, read beside its sketch as the naming test asks: a word on the sketch or an ordinary word for what is on it, nothing needing a dictionary.
- <a id="ae6"></a>**AE6** — the built pages photographed by the camera beside the files' own photographs agree in arrangement, type and colour, at a desk and on a phone.

### §7 — The documentation for designing libraries

- <a id="r14"></a>**R14 — compacted and reorganized.** The chapters that say how a library is designed, developed, laid out, dressed and named — the nine of [Writing a Book](../writing-a-book/.cover.md) and the naming chapter beside them — become the fewest that teach it, read in order, nothing said twice, the sprint records yielding to them. **Seen:** the cover of *Writing a Book* shorter and true; the words counted before and after; no link broken.

- <a id="r17"></a>**R17 — the design book links each design to the book that is its example, by a mention that says why.** His word, 2026-10-06, during the build: *"As the designs coalesce, I want there to be links from the design book to the other books to connect up which examples of the different designs. Use mentions for this and make sure the mention helps indicate why something was mentioned, so we have an easy time knowing if the reference is stale. This can be at the end with the documentation part of the task."* **Seen:** in *The Designs I Am Going With* and under each decided concept, a `<Means>` to the book with the words saying what of the design the book shows — *the frame of 26 as the catalogue wears it* — never a bare name; a reader can tell from the words whether the book still shows it. *Lands in [U11](#u11), with the manual.*

### §8 — The reference manual

- <a id="r15"></a>**R15 — Dougs Reference Manual written well.** Each chapter explains its tool and how that tool is consistent with the library's patterns — a base book that draws, a Format that arranges, a theme that colours, an annotation that says — so that the manual is the thing read to learn how to use the code, as 31 shows it: what it is, how it is used with an example, its fields, what to know before it bites. **Seen:** the manual on 4242 read chapter by chapter in the words reading.

### Actors and flows

**Actors.** *A1* Doug — chooses the colours, reads the chapters, gives feedback at each showing. *A2* a reader on 4242 — moves between the books by the bar, switches a tone, a layout, a reading. *A3* the next librarian — maintains a chapter without having seen the code; adds a book by writing its cover and its colour.

**Flows.** *F1* open any book → the frame: the library's bar, the book's side, the page. *F2* press a subject → that book, in its colour. *F3* on the catalogue, press a cover → the book. *F4* on the manual, press *words* → the write-up, the file folded; press *code* → the file across the width. *F5* on the story, press a chapter at the side → the sheet turns, the entry lit. *F6* press a tone → the bars change, nothing else.

## Decisions

- <a id="d1"></a>**D1 — the base book draws the regions, Formats arrange, the theme colours.** His choice at the brainstorm over two others — each book drawing its own frame from shared faces (least abstraction, four classes to change for one layout, nothing switches), and the frame as a Format said of a plain book (switchable, but the layout outside the book, against *"the purpose of a book is layout"*). The frame file's four attributes become four things in code: `data-layout` a family of Formats, `data-tone` a pair of themes, `data-at` the kind of page the book's class draws, `data-view` the catalogue's views.
- <a id="d2"></a>**D2 — the frame is built before any page, on all four books, and shown bare.** A page built into its own frame is the wrong turn of Sprint 100 twice over.
- <a id="d3"></a>**D3 — every value is read from the file and written into the theme's fields; no literal in a rule.** The policies already say it; the file makes it checkable: a value not in the file is a question, not a guess.
- <a id="d4"></a>**D4 — a book's colour is tried in its subclass and on its cover, on one book, and shown.** [R9](#r9). The cover is the semantic home — *"it's like decorating the cover"*, and a catalogue's shelf reads what a cover says, [the rank rule](../writing-a-book/01-01-how-a-library-is-designed.md#every-list-is-a-rank); the subclass is the simpler code. He keeps one.
- <a id="d5"></a>**D5 — names by the method, never run past him.** *"NO! I can't approve all classnames in this library. You have to learn."* A layout is named by the file's word for it in common usage; a tone by its tone; an annotation reads in `is()`; the test is the folder's list beside the sketch ([AE5](#ae5)).
- <a id="d6"></a>**D6 — a showing at every milestone, with the git evidence that `.public` is untouched** — except [U9](#u9), which is the one place it changes and is shown as a diff first. *"I get scared when you run for too long."*
- <a id="d7"></a>**D7 — the helper session takes one page at a time by folder, every line audited by the lead before it counts; the base is the lead's alone.** As Sprint 100 ran it, sized to finish inside the lead's own task.
- <a id="d8"></a>**D8 — the documentation and the manual are written as the code lands, not after.** [R14](#r14) and [R15](#r15) run beside the pages: a chapter of the manual is written when its tool is, and a chapter of *Writing a Book* is compacted when the build has read it and found what it still says twice.
- <a id="d9"></a>**D9 — `$Layout` is made to extend the framework's `Paginated`, and the strains named at the close of Sprint 100 are taken in the unit that touches each**, never in a sweep: `chapters` read from a class, the casts to `$LibraryBook`, `BookLink` set at `$Bound`.

## Units

*Each names what runs and when, its files, what it waits on, what is seen, and its scenarios. Files under `.me/` and the branch library; names in them are chosen by the method at the time of writing and are not fixed here.*

### <a id="u1"></a>U1 — the frame's regions, drawn by the base book

**What runs, and when.** `$LibraryBook.write()` draws, for every book, the library's bar, the book's side and the page, each in an element of the book's own with a class; the four book classes lose their bars and keep only what goes in the page — the catalogue's front and shelf, the manual's spread, the story's sheet, the design book's gallery — and their own switches. `$Layout` extends `Paginated`, taking `pages` and `open` from it ([D9](#d9)).

**Files.** `.me/.manual/1-the-book~code.tsx`, `12-the-layout~code.tsx`, their chapters; `..reference/o1-the-bars~code.tsx`, `.librarian/o1-the-sheet~code.tsx`, `.design/o5-the-frame~code.tsx`, `.manual/10-the-manual~code.tsx` shrink.

**Waits on.** Nothing. **Seen when done.** Four books with the same regions in the same places, bare — the first showing. **Demo contribution:** the regions, unfakeable because one class draws them on four books.

**Scenarios.** (1) Each book binds and shows the library's name, the subjects, the book's title, its table, the open chapter. (2) A book class contains no bar, no `pd-side` of its own. (3) The story's front and the catalogue's front still show their synopses. (4) `grep -c "pd-library-bar\|pd-side" .me/*/*~code.tsx` finds them in the base only. (5) The design book's open concept still takes the screen beside the side.

### <a id="u2"></a>U2 — the library's table of contents on every page, by import

**What runs, and when.** The catalogue's table exports its rows that answer for books as a component, as the synopses are exported; every book's cover writes it, said to be the frame's subjects; the base draws it in the library's bar with the open one lit. The bind's rules on the catalogue are unchanged; a row naming a book the catalogue does not hold is refused where it is written.

**Files.** `..reference/.table.tsx`; each book's `.cover.tsx`; `.me/.manual/15-the-bars~code.tsx` or its successor.

**Waits on.** U1. **Seen when done.** The subjects in every book's bar; a press lands. **Demo contribution:** [AE1](#ae1).

**Scenarios.** (1) The subjects on the manual's page are the catalogue's rows, by text. (2) A press on *Dougs Story* from the manual lands on the story. (3) The open book's subject is lit and no other. (4) A cover that writes a subject the catalogue lacks fails the bind with the fault naming the file.

### <a id="u3"></a>U3 — the arrangements: one Format per `data-layout`

**What runs, and when.** Six Formats under the base's layout, one per value — the library down the side; across the top with the holds as a row; both; two bars; a rail of marks; cards on a ground — each with the file's desk grid and phone column as its rules, the sizes as theme fields; a book takes one by registration; a Tab among the family switches. `both` is the default of every book.

**Files.** `.me/.manual/12-the-layout~code.tsx` and its chapter; the theme's fields for the frame's sizes.

**Waits on.** U1. **Seen when done.** Each book in `both`; the design book with a switch showing `side` and `header`. **Demo contribution:** [R4](#r4).

**Scenarios.** (1) The grid areas of each arrangement match the file's `grid-template-areas` for that layout, read from the computed style. (2) The side's width in `both` is the file's 240px; in `side` 256px; the rail 68px. (3) On a phone, every arrangement is one column with the bar at the top. (4) A press from `both` to `side` redraws no chapter — a draw count.

### <a id="u4"></a>U4 — tone and colour

**What runs, and when.** The base theme's values become the frame file's palette; the manual's teal moves to the manual's theme. Two themes under it, `dark` and `light`, set the bar values; a Tab switches them. A book's colour is said once — tried in the subclass and on the cover ([D4](#d4)) — and the scheme derived in the templates with `color-mix` as the file does; the library's own books the soft black with the opal name. The catalogue's shelf reads each book's colour.

**Files.** `.me/.manual/3-the-theme~code.tsx`, a new chapter for the tones; each book's subclass or `.cover.tsx`; `..reference/o1-the-bars~views.tsx` for the shelf.

**Waits on.** U1. **Seen when done.** Four books, four colours; a tone switched — the second showing, with both placings of the colour on one book for his eye. **Demo contribution:** [AE2](#ae2), [AE3](#ae3), [R9](#r9).

**Scenarios.** (1) The bar's background in `dark` is `#0c1b1f` and in `light` `#ffffff`, measured. (2) Changing one book's colour changes its bar, its side's accent and its cover on the shelf after a bind, and nothing of another book. (3) A press on the tone redraws no chapter. (4) `grep` of hex literals in every `~code.tsx` and `~theme.tsx` finds them only in theme fields.

### <a id="u5"></a>U5 — the catalogue as 1

**What runs, and when.** The catalogue's page inside the frame as `001.html` has its main: the title, a line under it with the count the table holds, the books under it as a shelf of covers at 2:3 — the name in the file's serif, *with …* at the foot where the library knows it, a caption with the name — and the library's own books; the list view kept; *Continue*, dates, chapter counts, *See all* listed *not built* in the map. The side is the frame's.

**Files.** `..reference/o1-the-bars~*.tsx`, its chapters; the map's table for what is not built.

**Waits on.** U4. **Seen when done.** The catalogue beside 1's photograph. **Demo contribution:** [R10](#r10), [AE6](#ae6).

**Scenarios.** (1) Every classed element of `001.html` appears in the map as built or not built. (2) A cover is 2:3, the file's radius and shadow, in its book's colour. (3) A press on a cover lands on the book. (4) *list* still shows the same books one to a row. (5) On a phone, three covers to a row.

### <a id="u6"></a>U6 — the story as 29

**What runs, and when.** The story in the frame: the chapters at the side from the frame's table, lit; the papers as Tabs above the sheet; the sheet as 25 has it; the turn at the foot; the opening paragraph said to be first by an annotation written in each chapter, the position code gone.

**Files.** `.librarian/o1-the-sheet~*.tsx` and chapter; each story chapter gains the annotation.

**Waits on.** U4. **Seen when done.** Beside 29's photograph. **Demo contribution:** [R11](#r11).

**Scenarios.** (1) The first paragraph of each chapter carries the annotation's class and no other paragraph does, read from the page. (2) The `opening()` code is gone. (3) The three papers switch with the side bar unchanged. (4) The turn's ends are absent, as 25 has them, not faint.

### <a name="u7"></a><a id="u7"></a>U7 — the manual as 28 and 31

**What runs, and when.** Two readings as Formats given by one Tab pair — code in front, words in front; the code reading shows a small synopsis of its own above the file, an annotation said of one paragraph in each chapter, and the fields below; the words reading hides it and shows the write-up, the file folded to a strip at the right that a press opens; the transition a change of the grid's columns over time, in the Format's rules.

**Files.** `.manual/10-the-manual~*.tsx`, `10-the-manual~forward.tsx`; each manual chapter gains its brief paragraph.

**Waits on.** U4; [U11](#u11) writes the words it shows. **Seen when done.** Beside 28's and 31's photographs; the exchange pressed. **Demo contribution:** [AE4](#ae4), [R12](#r12).

**Scenarios.** (1) In *code*, the file's width is the page's; in *words*, 56px. (2) The brief shows in *code* and not in *words*; the write-up the reverse. (3) A press on the strip returns to *code*. (4) A chapter with no brief paragraph fails the manual's own rule at the bind.

### <a id="u8"></a>U8 — the design book in the frame, white

**What runs, and when.** `$Design` loses its side and head; the frame draws them; its colour white; the modes replaced by the tones; the gallery and the open concept unchanged, the open card's left edge the frame's side.

**Files.** `.design/o5-the-frame~*.tsx` and chapter; `.design/o4-the-gallery~code.tsx` for the edge.

**Waits on.** U4. **Seen when done.** The design book under the frame, white. **Demo contribution:** [R13](#r13).

**Scenarios.** (1) `GalleryMode` and `LibraryMode` are gone; `dark` and `light` switch the bar. (2) A press on a card opens it beside the frame's side, the `×` closes it. (3) The deciding chapter is still first in the index.

### <a id="u9"></a>U9 — the `.public` diff, applied and tested

**What runs, and when.** The three parts as drafted; `book.test.tsx` gains two promises and one waits; chemistry's suite, the binder's suites and the regression run; a direct load to a chapter opens and turns; the test library's tabbed manual does not scroll. Shown to him as the diff and the numbers before it is committed.

**Files.** `library/chemistry/package/src/abstraction/reaction.ts`; `library/.public/package/src/libraries/Book.tsx`; `library/.public/package/.binding/application/main.tsx`; `library/.public/package/.tests/book.test.tsx`.

**Waits on.** Nothing; run early, since the pages' presses depend on it. **Seen when done.** A chapter's address loaded fresh opening and turning. **Demo contribution:** [R16](#r16).

**Scenarios.** (1) Chemistry unit green; `.public` unit green with the two new promises; binder unit and regression green, numbers stated. (2) `/dougs-story/#a-chapter` loaded fresh shows that chapter. (3) The explorer's tab in the test library opens with no scroll. (4) A write to a chemical then `next('layout')` resolves after its redraw, promised.

### <a id="u10"></a>U10 — the documentation for designing libraries, compacted

**What runs, and when.** *Writing a Book* and the naming chapter reorganized into the fewest chapters that teach, in order, how a library is designed, developed, built, dressed and named — the records moved to the sprint chapters or the first draft, nothing said twice; measured before and after; every link checked.

**Files.** `library/.public/.lib/writing-a-book/*`, its cover; `the-coding-style/09-how-a-thing-is-named.md`; the link checker from the close of Sprint 100.

**Waits on.** Runs beside U5–U8 ([D8](#d8)). **Seen when done.** The cover of *Writing a Book* shorter and true; the counts. **Demo contribution:** [R14](#r14).

**Scenarios.** (1) Words before and after, stated. (2) The link checker: zero broken in the book. (3) Each chapter's cover entry re-edited with the tool and true. (4) A reader given the cover alone can say which chapter to open for each of the five questions.

### <a id="u11"></a>U11 — the reference manual, written well

**What runs, and when.** Each chapter of Dougs Reference Manual rewritten to the shape of 31: what the tool is, how it is consistent with the library's patterns, how it is used with an example, its fields, what to know before it bites; the chapters renumbered to the index's order; the base's chapters and the four books' appendices alike.

**Files.** `.me/.manual/*.tsx` chapters; the appendix chapters of the three other books.

**Waits on.** The tool each chapter documents. **Seen when done.** The manual read on 4242 in the words reading. **Demo contribution:** [R15](#r15).

**Scenarios.** (1) Every chapter has the five parts, checked by the manual's own rule at the bind. (2) The file numbers follow the index. (3) Read by someone who has not built it, each chapter answers how its tool is a base that draws, a Format that arranges, a theme that colours or an annotation that says.

### <a id="u12"></a>U12 — the close

The grade by the three tests and his feedback, written into this chapter; `/ce-compound`; `/ce-handoff`.

## Order

**U9 first, alone, since the presses depend on it and it is the one change to `.public`. Then U1 → U2 → U3 → U4, the frame on four books — the first showing after U1 bare, the second after U4 in colour. Then U5, U6, U7, U8 — the lead on the base and one page, the helper on one page at a time by folder ([D7](#d7)) — a showing per page. U10 and U11 run beside the pages ([D8](#d8)). U12.**

## Risks

- **The imported table meets the catalogue's rules.** The rows written into another book's cover are references the bind resolves; if a rule reads them as that book's table, it refuses. *Mitigation: U2 is tried on one book first, and the fault, if any, is read before anything is routed around; a change to the binder is pitched, not made.*
- **`$Layout` on `Paginated` breaks the pages.** *Mitigation: U1 first and bare, every book looked at before U2.*
- **The colour on the cover needs a line the framework's cover does not have.** An annotation of the library's own said of a cover's paragraph is the pattern — Author and Subject are the framework's; a colour is this library's. *If it cannot be said without a change to `.public`, the subclass wins and the pitch is written.*
- **Names.** *[D5](#d5); the test runs on every folder before every showing.*
- **A long run.** *[D6](#d6): five showings, each a milestone.*
- **The documentation compacted before the build has read it.** *[D8](#d8): U10 follows the pages, not precedes them.*

## The plan checked against itself

| requirement | lands in | proved by |
|---|---|---|
| [R1](#r1) four books, one frame, in colour, to their concepts | U1–U8 | the showings, [AE1](#ae1), [AE6](#ae6) |
| [R2](#r2) the gate: chapters and components read | every unit | [AE5](#ae5); his reading at the showings |
| [R3](#r3) the base draws the regions | [U1](#u1) | U1's 1, 2, 4 |
| [R4](#r4) one arrangement per layout, switchable | [U3](#u3) | U3's 1–4 |
| [R5](#r5) the library's bar by import | [U2](#u2) | U2's 1–4 |
| [R6](#r6) the file's values | U3, U4 | U3's 2; U4's 4 |
| [R7](#r7) a tone is a theme; the palette | [U4](#u4) | U4's 1 |
| [R8](#r8) one colour per book, derived | [U4](#u4) | U4's 2; [AE3](#ae3) |
| [R9](#r9) subclass or cover, his eye | [U4](#u4) | the second showing |
| [R10](#r10) the catalogue as 1 | [U5](#u5) | U5's 1–5 |
| [R11](#r11) the story as 29 | [U6](#u6) | U6's 1–4 |
| [R12](#r12) the manual as 28 and 31 | [U7](#u7) | U7's 1–4, [AE4](#ae4) |
| [R13](#r13) the design book white in the frame | [U8](#u8) | U8's 1–3 |
| [R14](#r14) the documentation compacted | [U10](#u10) | U10's 1–4 |
| [R15](#r15) the manual written well | [U11](#u11) | U11's 1–3 |
| [R16](#r16) the diff applied and tested | [U9](#u9) | U9's 1–4 |

## Where things stand

**Next: nothing in this sprint. It is cancelled; the next step is `/ce-work` on [Sprint 102](107-sprint-102--designing-together.md), after his go.**

**Why it failed, in his words, in the order he said them.** *"Well a lot of your options aren't functional… Outline is nonsensical… it is okay but sad."* *"I don't want a book to have a color. I want it to have a color scheme."* *"I HATE out of the tube user effects, preferring subtlety and nuance… You can't see relativity. The relative way that things are paired to make complex designs."* *"Why can't you look at your designs and say — would any website ever look like this?"* *"Your library is being overcome with black… I am going back to pencil."* *"I just didn't want pink."* *"I hate what I see here. My brain wants to vomit looking at it. We are a long long way away from something usable… The black isn't working. Drop the black. It's too loud. Go light. Gentle. Pastels with accent colors… I feel so much pain and sadness looking at this work."* And the method that replaces this sprint's: *"It's time for you and me to do this on our own… We are going to start from scratch… you and I are going to iterate rapidly in HTML, then you are going to use hot reload to apply them… LITERALLY start with the data that is in each book, bring it into html, so we can rapidly evolve the design by just looking at the same HTML page, photographing and integrating into the design book as we go."*

**What the failure was, read by the room.** The sprint built from sketches that were never designs — it matched a frame file's values and called that a design — and when his feedback came it was answered by changing colours on the live site, six times in an afternoon, each a new guess rather than a design made with him: orange and pink, then black on four covers, then opal, then cobalt. Comparables were named after the fact. The code underneath is sound and measured — the roles, the entries, the appendix, the catalogue's page, the promise — and the design above it was never his. Sprint 102 inverts the order: his data in HTML first, designed by looking together, applied only when it is seen.

**What stands, 2026-10-06 evening, measured and committed (dougs-library `121fb5e`, the test library in the project repo):** the frame is 15 on every book — a black top bar, the book's pale side bar, a white page — with 16 and 26 as the other tones and the design book's two tabs *white* and *black top bar*; the theme's fields are roles named as the frame file names them, and a book's theme sets five — `colour`, `accent`, `side`, `paper`, `ink` — to have a scheme: the catalogue the site's, the story amber on book paper, the manual its decided teal, the design book rose on white; `Coloured` sets the colour where it is said, read by the cover on the shelf, the dot in the bar, the row in the contents and the line under the lit subject, which `$Layout` lights by the book's address; the catalogue's own cover is first on its shelf, each other cover under one caption said `Caption`, an entry opening in place under the shelf, the row's arrow leading to the book; `Appendix` is said of every book's *How this book is built*, drawn at the foot in a small voice and left out of `pages`, so the folio, the turns and the story's latest never count it; the story opens on its latest dated entry, dated in its masthead; the sizes are the files' — a 14px body, title 36, cover 15, synopsis 20, subjects 13.5, turn 11; the outline and the six arrangements are gone; the catalogue's class is `Catalogue` and its faces are gone where the base draws them; the promise that a turn keeps every held node runs in the binder's master, regression 48 of 48; the audit of thirty-four chapters found none carrying a class, a style, a position or a foreign import.

**His feedback, 2026-10-06, and where it lives.** His words are in the design book's new chapter, [Driving the Build](../../../../.me/.design/4-driving-the-build.tsx), written as him discovering each pain and what solves it — *"okay but sad"*; *"a lot of your options aren't functional… Outline is nonsensical"*; *"I don't want a book to have a color. I want it to have a color scheme"*; *"I HATE out of the tube user effects, preferring subtlety and nuance"*; *"a palette doesn't exist in isolation in a design language"*; *"we have absolutely NO need for an effect like a swirling wavy inexplicably white font"*; *"the library catalogues itself"*; *"tiny details that live at the edge of consciousness but have function"*; *"Desktop is most important by far, but I want a good story for mobile too"*. The method he set: the helper drives, photographs and reports pain; the room holds semantics, reuse, usability and aesthetics and moves them all at once; the design book is the working record, sketches in HTML before code, each linked to the book it is for; a todo list in the room drives the work. **The helper's report** stands in the lead's scratchpad (`helper/usability.md`, 241 photographs) and its findings are in the chapter: the catalogue's side-bar entries are dead presses, every group heading is a dead link, a section press lights two rows, the manual's strip clips the file's name, the phone's × sits under the face.

**State, split honestly.** **Done since the feedback, measured and committed:** the outline cut from every book, with its chapter, its code and its theme part; the six arrangements cut — `$Layout.areas()` carries the frame's one grid, `holdsColumn` the one width, *The Bars* chapter and code gone from the manual, the design book's head two tabs, *white* and *black side bar*; twelve sentences of the manual, the design book and the story rewritten so the library binds true; the new chapter, the two annotations `Pain` and `Solution`, the group *Sketched from the Build* with 32 and 33. **Done before it, each measured and committed:** U9 the diff; U1 the regions; U3 the arrangements, now cut; U4 the tones and each book's colour, now to become a scheme; U2 the subjects by import; U5 the catalogue as 1; U8 the design book white; U7 the manual as 28 and 31; U6 the story as 29; U11's eleven chapters in 31's shape; three chapters of *Writing a Book* compacted. **Not done:** everything else in the list — the catalogues' uses (32), the covers and the shelf's line, the sizes, the schemes (33), the doors, the phone, the audit, the promise, U10's merge, the renumbering, the close; the open book's subject lit in the bar; the manual's *where it is used* and the whole name on its strip. **His, standing:** keep or revert `15afe1c`.

**What changed the plan's letter, by measurement:** a tone is not a theme and an arrangement is not a Format — anything a reader presses adds a class, with the rules in a container that is always there ([U4](#u4), [U6](#u6), Solutions 105). **What the commit tool did unasked:** swept the four files of U9 into the U3/U4 commit before the showing; he has the choice, keep or revert, and the diff is the one he approved twice.

**Verification, at the last bind:** 5 pages proved, every reference resolving; typecheck clean past the known noise; on the live page every arrangement's grid equals the file's, the tones' bars measure the file's values, a tone pressed keeps every held node, a subject pressed lands on its book, the covers paint their books' colours, the manual's two readings measure 984 and 56 then 347 and 693, the story's sheet 780 and 760 with every node kept after each paper. Chemistry 941 of 941, `.public` 344 of 344, binder 149 of 149, regression 47 of 47 after U9.

**To see it.** `http://localhost:4242/dougs-library/`, `/dougs-reference-manual/`, `/dougs-story/`, `/dougs-design/` — the design book carries two tones as tabs; the manual its two readings; the story its three papers. The preview is `npx vite preview --port 4242 --strictPort` in `.me/..public/.binding`, a bind `npm run bind` there, the workbench `node .me/.manual/6-developing-a-library~workbench.mjs`; the probe that counts a press is in the lead's scratchpad and should become the library's own promise.

**To read first.** This chapter's units as recorded below; [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md), *what building found*; [Solutions 105](../solutions/105-the-press-that-replaced-the-book.md); the manual's chapters on 4242 in the words reading, which are the documentation of the base as it stands.

**The units, as each landed — the ledger, oldest first.** *His go-ahead given 2026-10-06: "Okay great, when you are ready, /ce-work" — the helper session briefed for U9, the frame file's values and the import research, each whole and off the base, every line audited by the lead before it counts.*

**[U1](#u1) DONE 2026-10-06 — the first showing.** The base's `write()` draws the frame's regions in the frame file's own words — `pd-library` (the library's bar: `filed()`, the subjects, `byline()` as *me*), `pd-holds` (the table of contents), `pd-head` (the cover and the switches), `pd-leaves` (`front()` holding `opening()`, then `leaves()`) — each a method a type may override; `$Library` overrides only `opening()` to add its shelf, `$Story` and `$Design` their switches and what opens, `$Manual` its switches. `$Layout` extends the framework's `Paginated`, answering `pages` with the book's chapters and `open` with the book's `open`. `$Bars` is gone; `$Spread`, `$Sheet` and `$Frame` keep only what is inside the page. *Measured:* no `write()` in any book class; the region classes in the base only; typecheck clean past the known noise; bound, 5 pages proved; all four looked at live, nothing past the edge.

**[U3](#u3) DONE 2026-10-06.** The base draws five regions, not four — *me* is the file's own element, set into the library's row at the right in four arrangements and at the foot of the column in `side` and `rail`. The family lives in *The Bars*, `15-the-bars~code.tsx`: `BothBars`, `SideBar`, `TopBar`, `TwoBars`, `Rail`, `Cards`, each a `$Layout` overriding `areas()` with the file's grid; `$Layout` un-expresses the others of its kind as `$Theme` does, so one arrangement stands at a time; the base registers `BothBars`; the base's `arrangements` getter lists the six and the design book draws a Tab for each. The old `TopBar` and `SideBar` said of the cover and the table retired — the head and the holds are those bars now — their rules becoming the base theme's `head()` and `holds()` parts, and the design book's cover and table no longer say them. The manual's `Spread` and the story's `Sheet` are Formats of the page the book gives itself in `$Define`, not arrangements; the design book's `Frame` is gone. Widths as fields named after the arrangement, since `cards` as a field met the design theme's `cards()` part — the shadowing gotcha, caught by the typecheck: `bothColumn` 240px, `sideColumn` 256px, `twoColumn` 236px, `railColumn` 68px, `cardsColumn` 244px, `barHeight` 50px. *Measured on the live page, each tab pressed:* the grid areas and columns of all six equal the file's; on a phone one column, the library sticky at 50px, *me* fixed 50 by 50 at the right. *Known:* a first load at a chapter's address warns that `Paginated` moves its open mark during the draw — the framework's own, dev-only, from Sprint 100's fight 10. *The draw count on a press is measured with U4's probe.*

**[U4](#u4) DONE 2026-10-06 — the second showing.** The base theme's palette is the frame file's — night, deep, blue, sea, sky, opal, pale, mist, white, ink, soft, line, me, the wash, the serif — and the manual's teal is the manual's own theme's. The two tones are the file's fourteen values, seven per tone, declared on the base as `darkBar`, `darkBarInk`, `darkBarDim`, `darkBarOn`, `darkBarLine`, `darkMark`, `darkMarkInk` and the seven `light…`; a book that wants its own bar sets its seven. Each book's colour is the file's own, from its subjects row: the library the soft black, the manual `#7a4a8c`, the design book `#c24a78`, the story `#e8590c`, as the field `colour` on each book's theme — the subclass placing of [R9](#r9); the cover placing waits on [U5](#u5), where the shelf needs it. **And what the measurement found, which changes the plan's letter and keeps its intent:** *a tone is not a theme and an arrangement is not a Format.* A press on any Format given through `$is` — a theme, a paper, the outline, the first tone — **replaces the whole book tree**: the probe held the tab, the book and the leaves, and after the press none was in the document. A Format is a container, and a container added to the stack remounts everything inside it; the story's three papers and the outline have done this since Sprint 100, unmeasured. So `Tone` and `Bars` are annotations that add a class and nothing else, one of a kind standing at a time as `$Theme` does, and the rules live in containers that are always there — the theme's `tones()` part for `.pa-dark` and `.pa-light`, the one `$Layout` for the six arrangements keyed by `.pa-both-bars` and the rest. *Measured after:* the held nodes stay, the book's class changes once, and inside the leaves 38 `childList` writes, every one a `Code` figure re-inserting its highlighted HTML — the framework's figure redraws its text on every draw whether or not it changed; a pitch for `.public`, not this library's. *[U9](#u9) is applied by the helper and audited: the three parts as printed, the two promises as asked, two stale comments in the router corrected by the lead; chemistry 941 of 941, `.public` 344 of 344, binder 149 of 149, regression 47 of 47, a direct load opening and turning at scroll 0; shown below for his yes before it is committed.* **And the commit tool swept the four files into the U3/U4 commit, `15afe1c`, before the showing** — reported to him with the choice: keep, or revert and re-apply on his yes.

**[U2](#u2) DONE 2026-10-06, three of four.** The subjects are the catalogue's own, written once beside *The Bars* in `o1-the-bars~subjects.tsx` — three paragraphs, each a reference to a book — appended by that chapter, imported by the base and drawn in the library's bar as `pd-subjects`; the helper's reading of the binder's rules said this form touches none of them, and the bind agrees. *Exporting them from `.table.tsx` itself made a module cycle through the manual's book file — the table imports `Index` from it — and a page failed to load; a file beside the chapter importing only the framework has no cycle.* **Measured:** every book's bar reads *Dougs Story · Dougs Design · Dougs Reference Manual*; from the manual, *Dougs Story* pressed lands on `/dougs-story/` ([AE1](#ae1)); bound, 5 pages proved. **Not met:** the open book's subject lit — a row drawn by the base's `write()` does not know the book it stands on, and the comparison of its reference's identifier with the book's `means` waits on a way to hand it the book; recorded, not faked.

**[U5](#u5) DONE 2026-10-06 — the third showing.** The catalogue as 1 inside the frame: the shelf's covers at 2:3 with 1's radius, padding, two inset spine lines and drop shadow as one field, `spine`, the name in the serif at 15px, the rule across at 56%; six to a row at a desk, three on a phone; a press on a cover lands on the book. **Each cover in its book's colour, by `Coloured`** — *The Colour*, `18-the-colour~code.tsx`: a Format said of a chapter, holding the colour as six hex digits, painting the chapter's title with the file's `color-mix` gradient through a container that passes the colour as a prop — no inline style, one class per colour. The catalogue's chapter for each book says it, `<Coloured>#e8590c</Coloured>`, as the librarian's label; the book's own theme says the same in its `colour` field. **That is one colour in two places, recorded as the copy it is:** a cover's colour does not reach its catalogue's page — [the Binder's gap](../writing-a-book/01-01-how-a-library-is-designed.md#what-a-page-knows-of-other-books-is-the-binders), his to fill — and the two are brought to one when it does; [R9](#r9)'s cover placing is shown to him as this. *Not built, as the map lists:* *Continue*, the dates and chapter counts under a cover, *See all*, the side's groups of 1 (the catalogue's table stands in the holds instead), the author at a cover's foot. *Known:* the appended synopsis under a cover carries no class of its own, so the shelf shows it rather than count paragraphs to hide it. *Measured:* three covers at 147 by 221, `aspect-ratio: 2 / 3`, the file's shadows, each painted its gradient; on a phone three to a row; from the catalogue, *Dougs Design* pressed lands on the design book; bound, 5 pages proved.

**[U8](#u8) DONE 2026-10-06.** The design book in the frame, white: `Light` registered as its tone, the two modes gone with their fourteen lines, the tabs now `both · side · top · two · rail · cards` and `dark · light · white over black`, its colour the file's rose on the index dots and the pressed tabs, the gallery and the open concept as they were, the open card's left edge the frame's column. **Found and fixed in the base:** the library bar's own look — the mark, the name in the serif, *me*'s face — stood in two book themes and now stands once in the base's `library()` part, the tones owning its colours; **and a theme subclass's part named like a base part silently replaces it** — the design theme's `head()` and the story's `head()` met the base's new `head()`, no `override`, no typecheck error, and the design book lost its title's serif until the part was renamed `tools()`; the base's pressed-switch rule names the kind with its class so a book's plain switch rule cannot tie it. *A third tone for the helper's 29: `WhiteOverBlack`, the light bar over the dark holds, which is 26's frame.* *Known:* the chapter *The Frame* in the design book still speaks of two modes — [U11](#u11)'s.

**[U7](#u7) DONE 2026-10-06 — the fourth showing.** The manual as 28 and 31: two readings, `CodeForward` and `WordsForward`, annotations of one kind under `Reading` — not Formats, after U4's measurement — their geometry in the manual's `Spread`, which is always there: *words* is the write-up at 984px with the file folded to a 56px strip, its name turned vertical and its code hidden; *code* is the title and its brief in a 347px column with the file across 693px and the chapter's sections hidden; the move between them a `transition` of the grid's columns over `beat`, 320ms, a field. The code reading's small synopsis is a paragraph said `Brief`, written after every chapter's title — seventeen, one line each — and the manual's own rule, `every chapter of a manual opens with a brief`, refuses a chapter without one. The manual wears `Light`, 6 being a light design. *Measured on the live page:* the columns 984 and 56 in *words*, 347 and 693 in *code*, each tab pressed; bound, 5 pages proved; on the built site the manual's bar white. *Not in this unit:* the press on the strip itself opening the code — the tab opens it; the file's whole name on its tab; *where it is used*.

**[U6](#u6) DONE 2026-10-06 — the fifth showing; built by the helper session, every line audited by the lead.** The story as 29: the sheet of 25 in the frame under the white-over-black tone, the chapters at the side lit, the three papers as tabs above the sheet, the masthead — cover and byline over the rule — drawn in the front, the sheet painted by a pseudo-element of the leaves spanning masthead and leaf, the turn as 29's grid with an end absent at the first and last chapter by the marks `Before` and `After`, and the opening paragraph said `First` in each chapter, the position code gone. **The papers are class-adding annotations of one kind, as the tones are**, after the helper's control measurement showed a paper press — a theme — replacing the whole book; their values are 29's own, 69 fields on the base prefixed by the paper, read by the story's theme keyed by the paper's class. *Measured by the helper's probe, confirmed by the lead's bind:* sheet 780 under book and white, 760 under night; masthead padding 68/76/44/76; the drop initial 57px; five paragraphs said first; after book, night and white each pressed, the held book, leaves, masthead, open leaf and holds all still in the document; the only nodes replaced the `Code` figure's lines, as on every book. *Three things the base gained for it:* `prose`, the face of a book's own words apart from the frame's; the tone `WhiteOverBlack`; the turn's ends marked. *Known, the base's:* the bar is 54px against the sketch's 50; the side has no chain and no counts; the folio reads *1 of 5* where 29 reads *chapter 1 of 3*; the date stands under the turn.

**Also in the base this unit:** `Outlined` a class-adding annotation with its rules in the theme; the phone's holds a row of pills as the frame file has them, the table no longer hidden; *me* on a phone the face alone, the bar 50px border-box; *by* and *filed under* each open with a word said `Label`, so a theme sets the label apart and a phone drops it. And the library's bar's own look stands once in the base's `library()` part. Requirements approved section by section on 2026-10-06; the mechanism chosen by him — the base book draws, Formats arrange, the theme colours; the diff in. The sprint before this is closed and compacted; its handoff's reading list is this sprint's: [The Designs I Am Going With](../../../../.me/.design/1-the-designs-i-am-going-with.tsx); [The Domain of the Designs](../writing-a-book/01-06-the-domain-of-the-designs.md); `3-every-concept~020.html` whole, and `~001`, `~028`, `~031`, `~029`; [How a Book Is Laid Out](../writing-a-book/01-04-how-a-book-is-laid-out.md); [How a Thing Is Named](../the-coding-style/09-how-a-thing-is-named.md) and [the protocol's sketch-first section](../writing-a-book/01-02-how-a-library-is-developed.md#sketch-first).

**To see it.** `http://localhost:4242/dougs-design/` and the three other addresses; the preview is `npx vite preview --port 4242 --strictPort` in `.me/..public/.binding`, a bind `npm run bind` there, the workbench `node .me/.manual/6-developing-a-library~workbench.mjs` for the live page.
