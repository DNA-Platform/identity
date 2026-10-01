# Sprint 95: Pages, Formats and Words

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **state:** `closed`, 2026-10-01 — opened 2026-09-30 as a brainstorm on Doug's word after a two-pass reading of `.public` against its own rules and its own purpose; planned the same day; built 2026-09-30 to 2026-10-01, every unit on his yes and his sign-off at 4242; closed on his word, *"I signoff. lets call this audit done"*, with U14 and U15 unbuilt and said so below. Compounded the same day and compacted from 12,343 words to the register this is.
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- ***The sprint's title is a PROXY; Doug's to rename.***

---

## Where this sprint comes from

**Doug, 2026-09-30, after the halt on his library:** *"Look for issues partly on your terms but mostly on .public's own terms. What issues do I think are a big deal? What have I said it is used for? This is a framework. What prevents it from being useful and scaling?"* Then: *"keep going, looking for some I haven't thought of. Keep looking for issues related to formatting in particular, as well as issues with performance that might prevent this from scaling. Compile a big list and then we will work on fixes, and what the code and documentation will look like after the fixes. We need to be consistent."* And: *"Remember no changes now, but you can make suggestions. Try to see the whole picture, and what a library is and the purpose of being able to build one."*

The reading is [below](#the-condition). His rulings on it, verbatim, are the requirements' ground:

- *"one autobiographical subject… And it may catalogue other books that can be referred to as an author by their subject name."*
- *"We are going to, in general, be building things as needed and not proactively. With that said, List and Math are fundamental. Let's add an annotative List to the next sprint, along with the Math components that we had in the last version, adapted. We will likely want a Date as a type of word, so add that too."*
- *"we can add a chapter get prop to writing, and we can write the book property as the book of its chapter. That's clean. Every writing is a part of a chapter too."*
- On the form the compiler writes: *"what else can we do beside provide the tools to parse that? It should be a one liner and then the class assigns them as needed. We have no clue where that syntax might be needed so we can't just make a type out of it."*
- *"I very much want the documentation reviewed, made consistent, organized for importance, abstracted and made elegant and minimal for your comprehension. This is critical."*
- *"each book is a separate application basically. It amounts to a new html page. The chapters should be part of a single page app right? Only books need their own pages. It's a bug if not."* And: *"It is one page per book for sure. Chapters and mentions are more like bookmarks within the book that one can link to."* And: *"We care about SEO and the ability for a web crawler to index."*
- *"Yes, let's design a version where things are drawn only when they have text. We have to be very careful with it… We are removing the genome from the React structure, but not from the $Chemistry one, and well, isn't a genome built out of chemistry?"* And: *"I am fine with things like parenthetical hiding by removing things from the DOM."*
- *"Make sure you are bringing me problems."*
- *"Table should not be replacing the writing's element. Why does it need to do that? We don't need semantic tables… Why wasn't Table able to operate as an annotation with classes as designed? Composing formats is dangerous. How do they undo? Do you understand they have to?"*
- *"No default chapter annotation. I am saying that chapter adds a class that the other ones remove if it's there."*
- *"I thought formats were supposed to be local. There is obviously something wrong here… I would think the book itself would express global styles… I want this to be like pluggable styled components. Annotations are not unlike plugins for writing."*
- *"super.$Define being skipped might be a source of bugs."*
- *"you're very negative about this. No numbers. No sense of urgency. Just fault. Is there nothing good?"*

## <a id="conditions"></a>His conditions on section B, verbatim, and they governed the whole sprint

*"Yes, I approve, but you must stop and read every single file you change, run promises, and make sure you are not ruining this framework. Those layers as you call them have no guaranteed order, so if you can target each one, the next level that you care about is still below and you don't know how many layers below it is. Remember that. If putting the class on the element is better, that's fine, but just realize what the css has to become. These are huge changes. I approve, but you will need to ask me questions and get my signoff to see if the code has the sort of integrity that I expect of .public. The annotation system is meant to be powerful. Please don't ruin its power in pursuit of being cleanly. We come up with standard practices for its use but it still should always support exotic use cases."*

So, standing for every unit: every changed file read whole before and after; promises run at every step and the numbers said; his sign-off on the code's integrity before a unit lands; the annotation system's power kept, an exotic use never made impossible by a standard practice. And the fact he named: a wrapper element is reached by its class, but what stands beneath it is at no fixed depth, so a rule reaches down by descendant and never by child.

## What the room already held

The two-pass reading of 2026-09-30, 45 documents and every file of `src`, with measurements on the served galley `library-qidObT`. Corrected on the way, so it is not found again: styled components are not made per instance from a field initializer, since chemistry holds an initialized field on the class template; the text copy is a join and not a render; and one element per writing, proposed and withdrawn the same hour, since a replacement recorded in the ledger refers to the value that stood at the front and fails silently when another author reverts it.

## Requirements — the register

*Each named what would be observed. Identifiers stable; the observation stands where the unit that met it is cited.*

- **A1–A4 — The page is the book.** One HTML file per book; a chapter's and a heading's address its book's plus a fragment; a direct load at a fragment opens the book there; a book's file carries every chapter's text. **Met at [U9](#u9).**
- **B1 — An annotation marks the writing it is said of, on the writing's own element.** *Amended 2026-09-30 at [the trials](#trials)* from its first form, which put the class on the wrapper: the ruling of 2026-09-25 holds, a mark on the writing's own element cannot be moved by a format standing in front, and a wrapper wears a class only where its Format's writer gives it one with `attrs`. **Met at [U3](#u3), [U16](#u16), [U17](#u17).**
- **B2 — Nothing swaps the writing's own element but Inline and Block.** **Met at [U4](#u4).** · **B3 — The Theme's stylesheet is the only global one, and unseen draws nothing.** **Met at [U5](#u5).** · **B4 — Chapter adds a class the specialised chapters remove.** **Met at [U6](#u6).** · **B5 and B6 — KaTeX's sheet linked, `pd-line` one thing.** **Met at [U7](#u7) and [U12](#u12).** · **B7 — The Theme's CSS written once per library and linked.** **Met at [U8](#u8).**
- **C1 — `chapter` on Writing, and `$book` through it.** **Met at [U2](#u2).** · **C2 — A highlighted listing made once.** **Answered by measurement at [D10](#d10); [U10](#u10) dropped.** · **C3 — Table asks its column count once per bind.** **Met at [U4](#u4).**
- **D1–D3 — List; Math and Equation; Date.** **Met at [U11](#u11), [U12](#u12), [U13](#u13).**
- **E1–E3 — The documentation:** the archived draft's chapters leave the reading path; every redraft chapter agrees with the code and with each other; the branch reads in order of importance. **Not met; [U14](#u14) unbuilt at the close.**
- **F1 — The eleven consistency rows.** **Met at [U1](#u1).**

## <a id="plan"></a>The plan — the register, 2026-09-30

*The size, measured before dividing: `src` 2,253 lines in 42 files, about twenty touched; the binder's addressing, rendering and assembly about 850 lines, five files; the test library's theme and explorer about 250 lines; the documentation about twenty-five chapters.*

### <a id="decisions"></a>Decisions

- <a id="d1"></a>**D1 — One address per book, and a fragment for everything in it.** A chapter's address is its book's plus `#` and the chapter's slug, a heading's the same; the entry matches a route by book alone and reads the fragment as the bookmark; the prerender draws one page per book with the cover open and every chapter in the print; the move to the fragment happens after hydration. *Chosen over* a redirect file at each chapter's address and the host's not-found page. Doug: *"one page per book for sure. Chapters and mentions are more like bookmarks within the book that one can link to."*
- <a id="d2"></a>**D2 — A kind of writing is dressed by the sheet, a Format dresses itself, and the class on a Format's element is the writer's to give.** Ruled 2026-09-30, ending a long back and forth — *"Don't we want to use real styled components? … it feels like this should just be a normal application of styled components."* Two kinds of thing were being styled and one rule forced on both: a kind of writing draws a plain element with a class and its look lives in the Theme's sheet; a Format is a styled component, his ruling of 2026-09-23, so its look is its own template reading the theme's values. The class on a Format's element is optional, given with styled-components' own `attrs` where the component is written — his: *"This is fine. I like that it is optional. It is up to the writer of the styled component to do this right? This seems like it is where it belongs."* A rule reaches beneath a wrapper by descendant, never by child. *Chosen over*, struck the same day: four named places a class could stand, *"why do you need classes everywhere"*; placing by the authorship the ledger records, *"You aren't auto-generating classes from authors. We don't do that"*; a third argument to `add`, then a tuple in the collection; a class member on Format. And the rule for every name: *"look at the names of classes I give… I abbreviate canonical writing semantics and nothing else. every and outer are not that."*
- <a id="d3"></a>**D3 — Table lends nothing and swaps nothing.** Its classes on the section's, the rows' and the cells' own elements at the bind; the grid a rule by class in the Theme's sheet, columns implicit from the cells' start classes; a row or a cell wrapped in a Format is a grid item of its own, an exotic case the Table chapter says so of. *Chosen over* the styled grid that replaced the section's element, struck: *"Table should not be replacing the writing's element."*
- <a id="d4"></a>**D4 — The Theme's sheet is the one global sheet, and unseen draws nothing.** `createGlobalStyle` leaves every annotation; the invariants stand in the sheet; an annotation's body renders only when its text has something, its note always, the same on the server and in the browser; the annotation's component still renders, so chemistry's lifecycle is untouched. Doug: *"I am fine with things like parenthetical hiding by removing things from the DOM."* *Corrected at [U5](#u5):* no parenthetical layer, since a title is the location; no page layer, since no wrapper has a look after the trials. *Chosen over* the invariant layer of 2026-09-29, meaning in `!important` rules inside annotations.
- <a id="d5"></a>**D5 — Chapter adds a class that the specialised chapters remove.** In Chapter's `$Define`; Cover, Synopsis and TableOfContents remove it in `defines` by their own authorship, so `erase` puts it back. Named `pd-canonical` and ruled a relationship, a book's canonical being its cover and the cover the one chapter without the class: *"Okay, well yes that is the book's canonical chapter. But it's not the canonical type of chapter. Canonical is a relationship - the canonical chapter of a book. The canonical type of chapter."* So the class always stands beside the kind's own, `.pd-canonical.pd-chapter`. *Chosen over* a default annotation: *"No default chapter annotation."*
- <a id="d6"></a>**D6 — KaTeX's stylesheet is the binder's to link; the highlighter's four rules stay in the Theme.** Narrowed on his *"Does it give us control over colors?"* — the classes highlight.js puts on a keyword are the markup of `.public`'s own Code figure, so the Theme colours them in the library's ink; KaTeX's sheet is large, carries fonts and cannot be rewritten, so the package names it and the binder links it.
- <a id="d7"></a>**D7 — The code figure's line spans wear `pd-code-line`**, and `pd-line` is the Line's alone.
- <a id="d8"></a>**D8 — A page's collected CSS is written to a file named by its content and linked**, so identical pages share one file; the `@layer` order statement travels with it. *Chosen over* the inlined tag, the server-side habit of styled-components.
- <a id="d9"></a>**D9 — `$chapter`, `chapter` and `book`: one thing given, two read, so they never disagree.** His shape, after a first build made `$chapter` a second lendable twin of `$book`: *"Why not have $chapter, chapter and book, and if $chapter is there, chapter returns it, otherwise it looks it up, and then book is always the book of the chapter."* `$book` gone. *Chosen over* the twin, built and unbuilt the same day. The record of its build is [The Writing Class](../writing/05-the-writing-class.md).
- <a id="d10"></a>**D10 — Nothing is held; the listing stays made at each draw.** Measured before anything was built: highlighting the manual's thirteen files, 39,900 characters, takes 13 ms of a 110 ms turn. Dropped on his word, U10 with it.
- <a id="d11"></a>**D11 — Three words as classes of the writing folder, each asked for by name:** List, Math and Equation, Date — [the chapters](../writing/.cover.md) say what each is.
- <a id="d12"></a>**D12 — The first draft's chapters become a book of record in the branch library**, its name Libby's; the redraft's chapters edited to the code; the catalogue cover carrying the reading order. The link checker's 927 the before. **Unbuilt; see [U14](#u14).**
- <a id="d13"></a>**D13 — The eleven consistency rows are one unit and run first**, `super.$Define()` at their head.
- <a id="d14"></a>**D14 — Every change is graded by whether the library reads as a more natural extension of `.public`, and the grade is ours to give.** His, at the first build of U3: *"Remember that every change has to be graded against what the code had to do to adapt. Did these changes help or hurt the library code?"* And when the grade was handed to him as a count: *"But I am not responsible for Libby's library. You guys grade how natural the code works. You should be able to look at this in the reference manual… Is it a more natural extension of .public? You'll know when something feels more natural."* **The ruling lives in [What Natural Means](../the-coding-style/07-what-natural-means.md#the-grade)** since the compound; the counts are evidence and never the verdict.
- <a id="d15"></a>**D15 — A change is judged whole, and a half of one reads as a fight.** Moving a class is not adding one; a class may leave a writing only when what it told a reader has another plain word — the first build moved the cover's class without `pd-canonical` and her sheet compensated for a missing word. In [What Natural Means](../the-coding-style/07-what-natural-means.md#the-grade) with D14.

### <a id="units"></a>Units — the register, each with what it showed

*Every unit opened with the changed files read whole, ran the package's typecheck and suite, the binder's suite and regression, stated the counts, waited on his yes for every `src` change and ended with his sign-off. The scenarios became the suite and are read where they run; the files touched are in each commit.*

- <a id="u1"></a>**U1 — Consistency** (D13; F1). Built 2026-09-30, signed off, `07dec65`: every `$Define` override calls its parent's, `is` the one spelling, Heading and Title read the form once, Open specified as Closed is, one import style, no non-null reach on a collection, three `saidOfACover` rules said once. Left for his word: the alias `$Written` and the three identical rules, kept as they were.
- <a id="u2"></a>**U2 — chapter on Writing** (D9; C1). Built 2026-09-30 to his shape, signed off, `0013ac3`.
- <a id="u3"></a>**U3 — The three basics are their tag** (D2, D14; B1). Kept from the first build: Bold, Emphasis and Underline one line each, their tag a styled component wearing its class through `attrs`, three rules gone from the sheet; `src` 33 lines for 3, her library 0 lines, the paper 0 pixels, 315 of 315. In `a3c1903` with the trials.
- <a id="u4"></a>**U4 — Table to classes** (D3; B2, C3). Built 2026-09-30, `407626c`, signed off 2026-10-01: Table an annotation again, thirty lines for sixty, `pa-table` on the section's own element, no style, no bond, no element swapped; the Theme's sheet the grid, no rule made per table; the anchor a Content draws around a cell wears the reference's class since U16, so a linked cell is placed by its own marks. The catalogue at 0 pixels; 321 of 321; 132 of 132, 42 of 42.
- <a id="u5"></a>**U5 — The one global sheet, and unseen draws nothing** (D4; B3). Built 2026-09-30, `8702e30`, signed off 2026-10-01: the four invariants in the Theme's first layer, `createGlobalStyle` gone from `src` with a promise reading every source file for it; an annotation with nothing written renders no body, a Level's number, a reference's address and an author's name still theirs, hidden. The persona 194 nodes against 371, its hidden bodies 89 against 266, the manual 2,735 against 3,420; seven pages at 0 pixels; hydration among the regression's promises. **Two corrections to D4** recorded at the decision.
- <a id="u6"></a>**U6 — `pd-canonical`** (D5; B4). Built 2026-09-30 inside the trials: Chapter alone adds it, Cover, Synopsis and TableOfContents take it off; Libby's theme counts chapters by `.pd-canonical.pd-chapter` with no roster.
- <a id="u7"></a>**U7 — Third-party sheets, and the line's class** (D6, D7; B5, B6). The line's half built 2026-10-01, `096f704`: `pd-code-line`, the poem photographed without numbers, seven pages at 0 pixels. The sheet's half closed at [U12](#u12).
- <a id="u8"></a>**U8 — The sheet as a file** (D8; B7). Built 2026-10-01, `812b0cf`, signed off: the binder writes each page's collected CSS to `sheets/<hash>.css` and links it. Bound, it found thirty-three files for thirty-four pages — the Theme's bond made a styled component per instance, breaking his rule of one per class; on his *"Yes inline on the element"* the Theme declares the eight inline on its element and makes nothing in its bond, Libby's two themes extending the sheet in a field. Six files for six books; the theme's page 201,747 bytes against 235 KB; every page at 0 pixels. 340 of 340; 132 of 132, 46 of 46. **The defect is [Solutions 99](../solutions/99-the-sheet-that-was-one-file-per-page.md).** His three words on the Theme that hour are kept whole in [Theme](../writing/13-theme.md#how-it-is-extended).
- <a id="u9"></a>**U9 — One address per book** (D1; A1 to A4). Begun in the session before the compaction, which left it unrecorded; finished 2026-10-01 from the working tree and signed off, `23cae31`: a chapter `/book#chapter` in the catalogue and `/book/#chapter` on the page, anchors fragments of the same page; the render given the books' addresses alone; the app matching by pathname, hydrating the page as printed and moving to the fragment once it listens, a chapter's link the browser's fragment move taken up on `popstate`. `Book.tsx` untouched, since `bookmark` finds a chapter by equality with the url its title carries. Thirteen regression promises rewritten, a refresh driven beside the direct load and the back. A galley bound in 10.7 s, seven pages where 35 stood, served on 4242 as `library-OngNUK`. Typecheck 0, 132 of 132, 46 of 46 twice. The binder's chapter and four of the libraries book say it. The lesson about the record is in [`/ce-work`](../../../../.claude/library/our-skillset/30-ce-work.md).
- <a id="u10"></a>**U10 — ~~The listing made once~~** (D10; C2). Dropped 2026-09-30 on the measurement; the identifier kept and never reused.
- <a id="u11"></a>**U11 — List** (D11; D1). Built 2026-10-01, `79282b2`, signed off: an annotation of a composition whose parts are its items, `pa-list`, `pa-ordered`, `pa-item`, the look the sheet's; Libby's shelf three bulleted Lines. [List](../writing/21-list.md). 329 of 329; 132 of 132, 43 of 43.
- <a id="u12"></a>**U12 — Math and Equation** (D11; D2). Built 2026-10-01, `9a9f20b`, signed off: a Word and a Paragraph whose text is TeX, typeset inline and in display mode through a typesetter prop defaulting to KaTeX, the equation numbered by the sheet; KaTeX's sheet named on the binder utility and linked by the assembly, the sheet's half of U7. [Math and Equation](../writing/22-math-and-equation.md). 336 of 336; 132 of 132, 44 of 44.
- <a id="u13"></a>**U13 — Date** (D11; D3). Built 2026-10-01, `a0f25e0`, signed off: a Word reading the compiler's form, its said words in a `time` carrying the machine date; Libby dates the day she began. [Date](../writing/23-date.md). 340 of 340; 132 of 132, 45 of 45.
- <a id="u14"></a>**U14 — The documentation** (D12; E1 to E3). Libby's. **Unbuilt at the close**, on his word that the audit is done: the first draft's chapters into a book of record, the struck names grepped to zero across current books — `frame(`, `print(`, `contents` for text, `theme = true`, the levels to six, "no Theme class" — the three statements on when a style is made agreeing, the branch's catalogue cover carrying the reading order, the documentation check at 0 and the link checker against 927. **It stands as the next documentation work**, his word that it is critical kept.
- <a id="u15"></a>**U15 — The end that cannot be faked.** **Unbuilt at the close** as a unit of its own; what it would have shown was shown unit by unit — the poem, the table, the list, the equation and the date photographed at each sign-off, the persona at 194 against 371 at U5, seven files and every address driven at U9 — and one measurement is still owed: the manual's turn against the 110 ms, which D10 said would be measured after U5.
- <a id="u16"></a>**U16 — Reference: where its class stands** (D14; B1). Built 2026-09-30 on his *"Yes, the same class, through attrs"*, `00f12ae`: the mark stays on the word, the anchor wears the same class through a styled anchor declared once on the class; Self's extends it with `pa-self-reference`, so the Theme says `.pa-reference` for a link and Self's invariant is one selector. Then `1b33f0b`, *"a title is a self-reference"*: a Title stands a Self, and the last `:has(` left the Theme. 319 of 319; 42 of 42.
- <a id="u17"></a>**U17 — Cover and TableOfContents: three forms read side by side** (D14, D15; B1, B4). Read 2026-09-30; the third form stands with the class never leaving the chapter: her theme says `.pa-cover:not(.pa-framed)` for the card and `.pd-canonical.pd-chapter` for what it counts, her explorer places the chapters themselves. Seven of her files, 49 lines for 37; five pages at 0 pixels.
- <a id="u18"></a>**U18 — The grade.** Read 2026-09-30 in the manual, [below](#the-grade).

### <a id="trials"></a>The trials of U3 — what works and what does not

*On his word, 2026-09-30 — "okay build a plan to keep/undo and test again. Let's see what works and what doesn't." The grade is [D14](#d14): read in the manual, by the librarian, for naturalness; the counts beside each row are evidence.*

**Who read each class at the last commit**, counted before any trial:

| class | Libby's library | the Theme's sheet | the promises |
|---|---|---|---|
| `pa-bold`, `pa-emphasis`, `pa-underline` | 0 | 1 each | 12 |
| `pa-reference`, `pa-self-reference` | 0 | 4 | 34 |
| `pa-cover`, `pa-table-of-contents` | 26 | 4 | 15 |

**The cover's card, read three ways**, the sentence the trial turned on:

| form | what her sheet says | read for naturalness |
|---|---|---|
| the last commit | `header.pd-container:has(> .pa-cover)`; `.pd-chapter:not(.pa-cover):not(.pa-synopsis):not(.pa-table-of-contents)` | a fight: she must know a header called a container wraps the chapter, and list three kinds to mean a plain one |
| the first build | `.pa-cover:has(> .pd-chapter)`; count chapters, then un-count covers and tables | a fight: she must know the class left the chapter, and compensate for having no word for a plain one |
| the mark on the chapter, with `pd-canonical` | `.pa-cover:not(.pa-framed)`; `.pd-canonical.pd-chapter` | **stands** — two plain sentences, a cover is a card and a canonical chapter is counted, and a frame is a frame |

| trial | evidence | verdict |
|---|---|---|
| **the first build: every class moved to the element its annotation gives** | `src` +28 −82; her library 15 lines for 15; promises +86 −69 in 9 files; three pages chased; `:has(` in her sheets 17 to 15 | **not landed as it stood** — `src` read better, her sheet no better, for want of a word for a plain chapter |
| **U3 — the three basics their tag** | `src` 33 lines for 3 in three files; her library 0 lines; the paper 0 pixels; 315 of 315 | **natural, kept** |
| **U16 — where the reference's class stands** | the anchor wears the class through `attrs`; `src` 12 lines for 10; her library 0 lines; six pages at 0 pixels, 319 of 319, 42 of 42 | **both, on his word: the mark on the word, the class on the anchor** |
| **U17 — cover and table, three forms** | the class never left the chapter; her library 49 lines for 37 in seven files, three wrapper rules and two rosters gone; five pages 0 pixels; 42 of 42 | **the third form stands: dress the mark** |

**What the first build taught, so it is not tried again.** Moving a class is not adding one, and a class may leave a writing only when what it told a reader has another plain word. One author per property, his Sprint 94 law, caught a Format dressing the writing inside it, so a Format dresses its own box and the sheet dresses a kind of writing even inside a cover. A frame between a cover's header and its chapter means the box cannot be assumed one level out, his fact, met on the persona. A rule that never took effect, the open tab's ink, takes effect the moment a class moves. And a count handed to him as the grade is the wrong instrument: the library is ours to read — now [What Natural Means](../the-coding-style/07-what-natural-means.md#the-grade).

<a id="the-grade"></a>**The grade, read in the manual, 2026-09-30.** At the theme's spread, where the manual prints her theme beside its prose: the cover's card is one sentence, `.pa-cover:not(.pa-framed)`, and the table's box its twin; a counted chapter is `.pd-canonical.pd-chapter`, the word the roster had been asking for; her prose says why in one line, *every rule names a mark on the writing's own element and never the box a format draws around it*. Two fights the trial removed were the guide's: [Dressing a Library](../writing-a-book/09-dressing-a-library.md) had listed `:has()` on the semantic wrapper as a standard trick; corrected. What still fought, the reference's anchor, closed at [U16](#u16); two questions her explorer asks of structure that a mark would answer, a chapter with an open appendix and a paragraph of lines, are hers to decide when she next touches those files.

**The method.** The first build was saved as a patch in the scratchpad, never as a stash; a file whose trial said the last commit was returned to it by name, one at a time, each read after. No reset.

### The order, the risks, the asks, the self-check — stubs

*The order stood here — U1, U2, U3, then U4 to U6, then U7, U8, U9 beside them, U11 to U13 after U7, U14 and U15 last — and ran as written but for the end. The risks stood here with what met each; two fired: the look moved when classes moved, met by the photographs and the trials, and a stash popped on 2026-09-30 put 28 files in conflict, so a measurement of HEAD uses a worktree and never a stash in this repository. Seven asks stood here; every one but the sprint's title was answered on 2026-09-30, and the title stays his. The self-check passed before work began.*

## Out of scope

Chemistry's cascade on a bookmark write and the render's memory release, both chemistry's and pitched. A book under two subjects. The door between libraries. The highlighter's grammar set, still his open ruling.

## The demo — a stub

*What could not be faked was shown at each sign-off rather than at one end: the poem without numbers, the table unchanged, a list, an equation and a date on the pages, the persona's node count, seven files and every address driven. The manual's turn against 110 ms is the one measurement not taken.*

## <a id="the-condition"></a>The condition, as found — the reading of 2026-09-30

*Two passes: the writing folder against The Coding Style, then the whole of `src` against Doug's statements of what the framework is for. Each row carries its state: SEEN on a page, MEASURED on the galley, READ at the line, INFERRED from two records, DOCUMENTED where a record already says so. What the sprint built is marked; what it did not is the next brainstorm's.*

**Writing it.** No conversation kinds, math, list, quotation, footnote or citation, READ — *List, Math, Equation and Date built*. Eight classes read the compiler's form by the same ten lines, READ, and ruled to stay a one-line parse each class assigns. Three copies of the walk to the nearest chapter, READ — *`chapter` on Writing built*.

**Reading the primary source.** Writing a Book 1–7 teach the archived draft; the condition report's list is all archived classes; Conversation as a Folder is in struck words; four redraft chapters carry stale lines; three chapters disagree on when a style is made; two chapters are flagged stale by their own covers. READ — *not built; U14*.

**Building it.** One page per address, each the whole book: the manual's ten pages of 235 KB, MEASURED — *one page per book built*. Each address its own instance of the book in one render child that frees nothing, INFERRED. Every page drawn every build and the reading pass serial, DOCUMENTED. The theme's sheet inlined per page at about 18 KB, MEASURED — *the sheet a file built*. Every grammar of highlight.js in the shared chunk, 1,370,918 bytes, MEASURED — *open*.

**Reading the page.** Hidden annotation bodies 72 to 73 percent of a page's nodes, MEASURED — *unseen draws nothing built, 194 against 371*. Every printed file on the page twice, MEASURED. Highlighting at every draw, READ — *measured at 13 ms and left*. A page turn costs the book, about 110 ms of script on the manual, MEASURED — *not measured again*. Every page of a paginated book in the DOM, READ — *by design, for the crawler*. The collection replays its ledger on revert, READ, bounded. Table's count inside its cell loop, READ — *fixed*.

**Dressing it.** A wrapper wears no class of its annotation, READ — *the trials: the mark stays on the writing, and a Format's writer gives its box a class with `attrs`*. The base theme comprehends every folder's classes and highlight.js's, READ — *the four rules stay by his ruling*. `pd-line` two things, SEEN — *fixed*. No class for the ordinary chapter, READ — *`pd-canonical`*. A consumer extends the sheet through a cast, READ — *a field, once per class*. Figures hand-write `pre`, `img` and a span with no classes, READ — *`pd-code-line`; the rest open*. Svg's write is two shapes by sniffing, READ — *open*. A subtree theme owed its declarations, DOCUMENTED — *open*. `:first-child` where a class exists, `style` naming two things, `pa-append` where `pd-` belongs, Format's providing seam overridden to identity, READ — *open*.

**Keeping it whole.** One subject per book, DOCUMENTED. No door between libraries, DOCUMENTED. A book representing a subject it is not named for, unbuilt, DOCUMENTED. The writing folder importing Chapter, READ — *open*.

**Consistency.** The eleven rows of F1, READ — *built*.

**And what is good, since he asked.** The explorer entered Libby's library in six files with nothing changed in the framework, and a manual of seven chapters is served as an app that hydrates from its print. The whole library is dressed in under five hundred lines, half CSS. Every class in `src` has its chapter, 103 of 103 at the close. A theme write moves one declaration. The compiler refuses a wrong reference before a page exists.

## Where things stand

**CLOSED 2026-10-01 on Doug's word — *"I signoff. lets call this audit done"* — at U9's sign-off, and compounded the same day.** Twelve of the plan's units built and signed off at 4242; U10 dropped on a measurement; U14 and U15 unbuilt, said so above and carried as the next documentation work and one owed measurement, never folded into a later unit without his word. Nothing else is owed by this chapter.

| gate at the close | result |
|---|---|
| package typecheck and suite | 0, and 340 of 340 |
| binder typecheck and unit suite | 0, and 132 of 132 |
| binder regression | 46 of 46, run twice, a refresh among them |
| the documentation check | 103 classes, 0 failures |
| the test library bound | 10.7 s, seven pages where 35 stood, on 4242 as `library-OngNUK` |

**What the compound distributed:** the sheet-per-page defect to [Solutions 99](../solutions/99-the-sheet-that-was-one-file-per-page.md); the grade read in the library to [What Natural Means](../the-coding-style/07-what-natural-means.md#the-grade); his three words on the Theme to [Theme](../writing/13-theme.md#how-it-is-extended); a unit recorded at its beginning to [`/ce-work`](../../../../.claude/library/our-skillset/30-ce-work.md); the address scheme to [the binder's chapter](../the-catalogue-and-the-specification/07-the-binder.md#catalogue) and four of the libraries book during U9 itself. Every unit's own chapters were written as it landed and are named at each unit above.

**Two things found at the close and not touched, his to say a word on:** forty-nine galleys stand under `.test/.galleys/`, more than the regression's own removal should leave; and the preview on 4242 was found still serving a galley bound before U9, from the session before.

**Standing ask:** the sprint's title. **Commits, all local, nothing pushed:** thirteen since the close of Sprint 93, `07dec65` to `23cae31`; the branch library synced with the next run of the commit tool.
