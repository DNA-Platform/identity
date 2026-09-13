# The Plan — Chapter Zero

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): overwritten as intentions are addressed — it holds what is INTENDED. Overwritten whole 2026-09-03 twice at Doug's order: first gathered by the librarian (every open item, cited), then organized into THE ROAD — all of it, in order, before the Wikipedia demo. His words: "It matters less how many sprints it is. We just need to write it down. It is the work we must do first before creating our wikipedia demo." Prior plans are superseded; their anchors survive [at the tail](#swept) so closed chapters' links resolve.*

# <a id="now"></a>THE SPRINTS THAT CLOSE LATEX — ***written 2026-09-11 at Doug's order, before the carve; this section is the current intention and overwrites the Sprint 55 block that stood here, which [Sprints 55–58](64-sprint-58--the-chapter-that-is-its-view.md) absorbed***

***Doug: "You need a sprint… the end result is the latex demo built and functional, especially with citations as this is what is missing, but that the implementation is completely natural and that we solve whatever problems need to be solved. Touching the foundational piece of code is considered very serious. Writing, Annotation, Type, Letter–Book — very serious, so you need to make sure you are maintaining all standards."*** *And the same day:* **"I want to see all the citations on the page working with clickable links. I want to see the citations self-number. Please put all the links that were in the document. Most have disappeared."** · **"You should be coding to classes and not elements where possible."** · **"Keep reading the design documents so you fight context rot and you remember why we did the things we did."**

## <a id="stands"></a>Where the branch stands at the close of Sprint 58

**Head `9111ad1`, nothing pushed.** The chapter model is landed and both demos are classes; `$Writing$` is five members; the `$$` classes are bare references; the contents draws its three levels; the composition type hierarchy is reflection's; the book's cover, synopsis and table are chapters by position. **The paper draws 285 keyed entries with ids, and its seven citations draw their keys and land when clicked; 35 more marks stand as plain text; equation numbers are present and not drawn; the `\#P` equation is fixed in source.** *The suite is 101 of 103: the two red are the citation numbers, and the reason is measured and chemistry's — every part under a printed document bonds twice and only the first draws, [Solutions 71](../solutions/71-the-population-that-never-drew.md), reported in [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#reported).* Chemistry has built keyframes and exported `$subject` on this branch's ask. The paper's extracted data and every driver used this sprint are saved in `.latex/.public/.paper/`, so no sprint depends on a session's scratchpad.

## <a id="standards"></a>The standards every sprint below is bound by — ***the seriousness clause***

- **Every change under `package/src` has Doug's yes before it is made, members and classes alike.** For the foundational classes — `Writing`, `Composition`, `Annotation`, `Type`, `Reference`, `Letter` through `Document`, `Chapter`, `Book` — the change is *designed and presented* first: the member named, its callers cited, what it is chosen over, and the promise that pins it. No member is added where a mechanism exists ([What Natural Means](../the-coding-style/07-what-natural-means.md)); a kind overrides, never a base conditional; classes through `$` for DI; the order of a class as [The Coding Style](../the-coding-style/03-the-coding-style.md) gives it; [Shells Over Types](../the-type-system/03-shells-over-types.md) and [The Spelling of a Kind](../the-coding-style/05-the-spelling-of-a-kind.md) obeyed; no comments in code, the reasons in this library.
- **Chemistry is touched for a bug only, measured to the line, with a promise red first; a feature is pitched into [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#pitches).** A change there rebuilds its dist and drives the Lab.
- **The gate, every step:** `tsc` on `src`, `.latex`, `.wiki` · rollup QUICK *before* vitest, because the suite reads `dist` ([Solutions 5](../solutions/05-the-suite-that-passed-against-a-stale-build.md)) · the suite · the paper driven in the browser with visible text asserted, never a unit assert alone. **Nothing is called done that has not been seen.**
- **Commit locally as often as wanted; never push.** One file per step, shown before it is written; a question at every uncertain or ugly point; the team's voices; probes created and removed in one command; the demo may invent content but no kinds; every edit carrying a backslash through the editor, never the shell.

## <a id="reading"></a>How a sprint begins with no context — ***the reading protocol, the same for each***

1. **This chapter, its sprint's block below** — the chunks, the end, the reading list.
2. **The previous sprint's Where things stand** in this book — the head, the gate, what was measured last.
3. **[The Book's Little Framework](../writing-a-book/04-the-book-s-little-framework.md)** whole — the rulings on chapters, books, mentions, citations, and the three facts that each cost hours.
4. **The Solutions cover, scanned by symptom;** and always [5](../solutions/05-the-suite-that-passed-against-a-stale-build.md), [70](../solutions/70-the-mention-that-remounted-every-draw.md) and [71](../solutions/71-the-population-that-never-drew.md).
5. **The chapters the block names, whole** — a skimmed chapter re-teaches nothing.
6. **The code files the block names, end to end,** and chemistry's [composition/08](../../../chemistry/.lib/composition/08-catalyst-graph.md) and [14](../../../chemistry/.lib/composition/14-the-assignment.md) whenever a parent, a mention or a bond is in question.

*Then `/ce-plan` the sprint's own chapter from its block, and the drivers in `.latex/.public/.paper/` are the instruments: `cited.mjs` for citations and entries, `numbers.mjs` for equations and ids, `click-citations.mjs <url> paper 1500` for landing, `toc-shot.mjs` for the contents, `panels.mjs` for refusals.*

## <a id="s59"></a>Sprint 59 — The population that never drew — ***citations self-number***

*Carved 2026-09-11 into [its chapter](65-sprint-59--the-population-that-never-drew.md); the chapter is the plan, this block the intention.* ***Closed the same day at `64328c5`: the citations self-number on the paper; the scratchpad redesigned at Doug's halt to a string-keyed collection that knows nothing, folds keeping what they name and `$Ref.read()` finding it; chemistry untouched by his ruling, its report standing.***

**Accomplished when** the paper's seven citations draw the paper's own numbers again — 76, 122, 38, 223, 10, 280, 197 — from the scratchpad, land when clicked, and swapping two entries renumbers two marks; the suite is green; chemistry evaluates a mounted chemical's children once and has a promise saying so.

**Chunks:**
1. **59.1 — the promise in chemistry, red:** a mounted chemical's inline JSX children are evaluated once; a counting subclass measures two today.
2. **59.2 — the fix, made here as a bug — Doug: *"Has it been broken? Yes if we need it and it's broken, please fix it."*** It is broken (two populations measured) and needed (a bond that files must file once). The shape is read, not chosen in advance: the synthesis comparing the raw children before it evaluates them, or the lift not bonding on the render that only stores the cid — [the report](../../../chemistry/.lib/projection/00-planning.md#reported) — whichever the code says is the seam. Chemistry's gate — tsc 0, 888 plus one, dist rebuilt, the Lab driven — and Solutions 71 amended with the fix.
3. **59.3 — the scratchpad on `$subject`:** `$Scratchpad` holds a chemistry catalogue rather than a map, keeps per document and is asked by document — *"store them per document? We have the book and we have the document"* — so Notes and References number apart; `keep` at bond, `find` at draw, no version, nothing reactive.
4. **59.4 — the two promises green, the paper driven, the numbers seen; commit.**

**Reading:** [Solutions 71](../solutions/71-the-population-that-never-drew.md) · [Writing a Book, ch. 4 § citations](../writing-a-book/04-the-book-s-little-framework.md#citations) · chemistry's [composition/08](../../../chemistry/.lib/composition/08-catalyst-graph.md), [particle/04](../../../chemistry/.lib/particle/04-lift.md), and the catalogue's promises under `chemistry/package/tests` · the code: `chemistry/package/src/abstraction/particle.ts` (`$lift`), `chemical.ts` (`$Synthesis.bond`, `groupInline`, `evalElement`, `[$bond$]`), `chemistry/package/src/implementation/catalogue.ts` · `src/library/Scratchpad.tsx`, `Book.tsx`, `src/reference/Entry.tsx`, `Citation.tsx`, `.tests/citation.test.tsx`.

**Serious:** chemistry's lift and synthesis are the framework's core — Cathy's, Doug's yes on the shape before a line. On the public side `Book` already holds the scratchpad by Doug's yes; no other foundational class moves.

## <a id="s60"></a>Sprint 60 — Every mark a citation — ***the paper's apparatus, whole***

*Carved 2026-09-11 into [its chapter](66-sprint-60--every-mark-a-citation.md); the chapter is the plan, this block the intention.* ***Closed the same day: 42 citations numbered with brackets in the writing and ink on the paper, rows landing, equation numbers, the fade as a link, and the paper's 50 notes as a keyed chapter with one footnote placed by reading; the written footnote and the gathering footer owed to chemistry evaluating children once.***

**Accomplished when** every bracket mark the demo's prose carries is a citation that numbers itself and lands — 42 today, none as text — a citation list draws `[191, 194, 193]` as the paper does, the paper's notes stand as a Notes chapter with footnote marks where the prose carries their sentences, the cited entry's landing highlight fades, a mark is set with LaTeX's space, and equation numbers draw at the right.

**Chunks:**
1. **60.1 — the marks:** a script in `.latex/.public/.paper/` maps each `[n]` to the nth key of `references.tsx` and writes `<Citation>` in both trees; the three multi-key marks wait on 60.2.
2. **60.2 — the citation list — ruled: one `<Citation>` carrying several keys**, `<Citation>a, b, c</Citation>` drawing the numbers joined as the paper sets `[191, 194, 193]`; Citation's key becomes keys, presented before it is built.
3. **60.3 — the notes — ruled 2026-09-11, twice, and the second stands:** first *"per section… we don't want them all at the bottom,"* then *"No, I changed my mind. Have footnotes at the bottom. But have an abstraction that allows you to control where they would coalesce."* So a footnote is written at its phrase, its note is drawn at the bottom by default, and one abstraction names the place notes coalesce — the document, a section, a book — so a reading moves the gathering point and the footnote knows nothing of it; numbering follows the place they coalesce. The paper's 65 notes from `pnp-notes.json` are written as `<Footnote>` at the sentences the demo carries. **Design owed before it is built:** the coalescing abstraction, its default at the bottom, how a reading sets another; presented first.
4. **60.4 — the fade seen:** the package rebuilt against chemistry's keyframes; `.pd-entry > .pd-meaning:target` animates `landed`; driven and watched.
5. **60.5 — the space before a mark** (U6) and **the contents landing below the strip** (U7, `scroll-margin-top`) — the two open bugs of the sweep.
6. **60.6 — equation numbers drawn** from `data-number` by a theme rule, at the right as LaTeX sets them.

**Reading:** [Writing a Book, ch. 4](../writing-a-book/04-the-book-s-little-framework.md) · [The Motif, ch. 4](../the-motif/04-themes-per-type-formats-per-instance.md) · chemistry's [particle/11 § animation](../../../chemistry/.lib/particle/11-styled-particles.md#animation) · [Sprint 58 § the sweep](64-sprint-58--the-chapter-that-is-its-view.md#sweep) and its register · `.latex/.public/.paper/bibliography.mjs`, `pdf-notes.mjs`, `pnp-notes.json`, `pnp-references.txt` · the code: `src/reference/Citation.tsx`, `Entry.tsx`, `Ref.tsx`, `src/article/Footnote.tsx`, `src/article/Theme.tsx`, `src/formatting/Theme.tsx`, `src/writing/Equation.tsx`.

**Serious:** `Citation` and `Ref` are references, not the foundational eight, but 60.2 adds a capability and is presented first. No kind is invented in the demo.

## <a id="s61"></a>Sprint 61 — The chapter file and the book's little framework — ***R9, R13, what an author writes***

*Carved 2026-09-11 into [its chapter](67-sprint-61--the-chapter-file.md); the chapter is the plan, this block the intention.* ***The paper's half landed the same day at `e0ca636` — the standard chapter file, the binder a syncing compiler with a manifest, references and notes numbered — and Doug stopped it before the encyclopedia; [the chapter's Where things stand](67-sprint-61--the-chapter-file.md#stand) is the handoff, with every seam linked to its line and the three books' recipe written out.***

**Accomplished when** a chapter file in both demos is a class extending the book's own `.chapter`, writing its document in `print()` and nothing else; `.chapter.tsx` carries the document kinds and themes the book's chapters share and `.book.tsx` the book class and its registrations; the binder emits the components into the book; `Cover`, `TableOfContents` and `Synopsis` read to Writing's standard; the encyclopedia's search box no longer walks `this.book`; and both demos draw what they draw today, every character difference explained.

**Chunks:**
1. **61.1 — `.chapter.tsx` per book** and every chapter file extending it; `view()` to `print()` where a file still overrides `view()`.
2. **61.2 — `.book.tsx`**: the book subclass, its theme and kind registrations, the binder's emit; the compiler from `.book` and `.chapter` as far as the two demos need it.
3. **61.3 — Cover, TableOfContents, Synopsis:** one file at a time, a question each, the Writing compression as the guide.
4. **61.4 — the search box:** a reference it means or a registration, Doug's to say; the two `.wiki` tsc errors to 0.
5. **61.5 — the mirror ruled:** which of `.latex/` and `.latex/.public/` is the source ([D5](64-sprint-58--the-chapter-that-is-its-view.md#d5)), and `build.mjs` made safe or deleted.

**Reading:** [Writing a Book](../writing-a-book/.cover.md) whole · [The Coding Style, ch. 5](../the-coding-style/05-the-spelling-of-a-kind.md) and [ch. 7](../the-coding-style/07-what-natural-means.md) · [The Type System, ch. 3](../the-type-system/03-shells-over-types.md) and [ch. 7](../the-type-system/07-the-composition-type-hierarchy.md) · [Sprint 58 § decisions](64-sprint-58--the-chapter-that-is-its-view.md#decisions) · chemistry's [composition/11](../../../chemistry/.lib/composition/11-the-representative.md) and [14](../../../chemistry/.lib/composition/14-the-assignment.md) · the code: `src/library/Chapter.tsx`, `Book.tsx`, `Cover.tsx`, `TableOfContents.tsx`, `Synopsis.tsx`, `Row.tsx`, both `.book.tsx` files, `build.mjs` in both demos.

**Serious:** `Chapter` and `Book` are foundational — every cut designed and presented; the Sprint 58 compression of Writing is the model of how.

## <a id="s62"></a>Sprint 62 — Clean foundations and the gate — ***LaTeX closes here***

*Carved 2026-09-11 into [its chapter](68-sprint-62--clean-foundations.md); the chapter is the plan, this block the intention.*

**Accomplished when** `npm run verify:latex` is green from a fresh run and is the sprint gate; the eight foundational classes pass a member audit — each member *used-by / decided / just-there* — with Doug's cuts made; no comment remains in `src`; every theme rule names a class and not an element where a kind writes one; themes stand per type and formats per instance as [The Motif, ch. 4](../the-motif/04-themes-per-type-formats-per-instance.md) rules; and the performance audit shows bonds and draws per part at one, not two.

**Chunks:**
1. **62.1 — the member audit** of `Writing`, `Composition`, `Annotation`, `Type`, `Reference`, `Letter`–`Document`, `Chapter`, `Book`: a table, read from callers not declarations; the cuts presented, then made one file at a time.
2. **62.2 — comments out,** per file, the reasons into this library where they are not already.
3. **62.3 — the themes:** `h1`, `hr`, `img`, `figure` selectors to the classes the kinds write; the restructure — `$Theme` per type, formats per instance — as the brainstorm rules it.
4. **62.4 — `verify-latex.mjs`** from the saved drivers as `npm run verify:latex`: title formula, contents rows landing below the strip, every citation landing, 0 KaTeX errors, 0 panels, the characters.
5. **62.5 — the performance audit:** bond and draw counts per part on the paper before and after Sprint 59, time to first paint, and the numbers in the sprint chapter.

**Reading:** [The Coding Style](../the-coding-style/.cover.md) · [The Type System](../the-type-system/.cover.md) · [The Motif](../the-motif/.cover.md) · [Solutions 44](../solutions/44-the-enforcement-that-detonated-per-render.md), [70](../solutions/70-the-mention-that-remounted-every-draw.md), [71](../solutions/71-the-population-that-never-drew.md) · chemistry's [testing/01](../../../chemistry/.lib/testing/01-the-contract.md) · every file of the foundational eight, end to end.

**Serious:** this is the sprint that touches all eight, which is why it comes after the demo is whole and why each cut is a presented decision.

**After 62:** [Sprint 63](#s63), the encyclopedia, brainstormed the same day; the themes restructure is its R5.

## <a id="s63"></a>Sprint 63 — The Encyclopedia — ***Wikipedia stood up, after 62 closes***

*Brainstormed 2026-09-11 into [its chapter](69-sprint-63--the-encyclopedia.md), requirements-only; `/ce-plan` carves it once Sprint 62's audit is done.* ***Doug's rulings, the day the series was read whole and both Wikipedia pages were fetched and measured:*** *"Let's close out the sprints on latex. It's good. And let's get Wikipedia stood up… We want the wikipedia page to bear a strong strong resemblance to Wikipedia because you can fetch the site directly, but everything you need to make should be easily and elegantly made inside this framework… Make the code look like the rest of the code."* · *"encyclopedia — and it should likely have more formats and more components. But the theme and formats are about adapting the existing ones too"* · *"Furniture is not a domain word. What is missing? Do the comparison and create the components we need"* · *"An encyclopedia might have a header. An article might. So perhaps it lives in there… for the home page, we imagine there would be code that's specific"* · *"Read the source, put it all in there. It's not that long"* · *"Focus entirely on encyclopedia… you'll get regression in latex… You have per component format. More than theme… use the latex project as a guide."*

**Accomplished when** the portal's ring stands around its globe with today's ten languages; `src/encyclopedia/` is a component library on `src/article/`'s shape — every Wikipedia kind four declarations with its format beside it, a theme per type by registration, the sheet keeping only the page; the Turing article is read whole from Wikipedia's API into chapter files with its 33 sections, 14 thumbnails, 14 quotations, 5 hatnotes, infobox, 256 references, 6 navboxes, 4 sister boxes and categories; the missing kinds exist — navbox, categories, sister box, main menu, header with search, toolbar tabs; the layout is Vector's in numbers; `npm run verify:wiki` is the gate; and `verify:latex` never moves.

**Reading:** the chapter's measured table · [The Motif](../the-motif/.cover.md) whole, chapter 4 first · [Writing a Book, ch. 1](../writing-a-book/01-using-the-public-library.md) and [ch. 2](../writing-a-book/02-reading-the-source.md) · [The Coding Style, ch. 6](../the-coding-style/06-the-shape-of-tsx.md) and [ch. 7](../the-coding-style/07-what-natural-means.md) · [Sprint 61's handoff](67-sprint-61--the-chapter-file.md#stand) for the compiler and the wiki's 26 chapter files · the code: `src/article/` as the guide, `src/encyclopedia/`, `src/formatting/Format.tsx` (`handed()`), `.wiki/.document.tsx`, `.wiki/.encyclopedia/.document.tsx`, `.wiki/alan-turing/`.

**Serious:** nothing foundational moves; `src/article/` and `.latex/` are not touched; every kind added to `src/encyclopedia/` is presented before it is written.

## <a id="ask"></a>Rulings taken at the presentation, 2026-09-11

1. **The order** — 59, 60, 61, 62 as written.
2. **Chemistry's fix** — *"Do we need this? Has it been broken? Yes if we need it and it's broken, please fix it."* Broken and needed; made here, the promise first.
3. **The citation list** — one `<Citation>` carrying several keys.
4. **Footnotes** — at the bottom, with an abstraction that controls where they coalesce; the per-section ruling given a minute earlier was withdrawn: *"No, I changed my mind."*
5. **`pnp.pdf`** (968 KB) — not asked; the extracted text and notes are in `.latex/.public/.paper/` and the PDF stays out until Doug says otherwise.


# <a id="the-assignment"></a>THE ASSIGNMENT — Doug, 2026-09-08, the current intention; everything below it is history or input

***Given at the close of the five-folder catchup, after an afternoon of rulings recorded in [Sprint 53](57-sprint-53--the-annotative-theme.md#rulings). Multi-sprint, self-handed-off; the demos functional and looking right at the end.*** **The order, and each is a sprint or more:**

1. **THE BRACKET — [Sprint 53](57-sprint-53--the-annotative-theme.md)**: theme and format as annotations, the base theme as the sheet, kinds writing their semantic elements, `writing / composition / annotation / type / reference / letter–book` as clean as they can be, `writing/` the default door and `book/` its own; the register of every member with its three lines and provenance; the `_` properties struck or cited.
2. **MATH, EQUATION, CODE IN THE BASE** — *"basic math should work without [the theme] and you'll need a latex processing method that is efficient in components that represent equations"*; Code at paragraph grade with `$language`, the code as the writing, drawn through `prism-react-renderer` as the old demo did, parts a line-based read on demand.
3. **`/article` IS THE LATEX ARTICLE, `/encyclopedia` IS WIKIPEDIA** — each a book type: its kinds plus an optional theme to install; the base theme must stand wherever a registered theme says nothing. `/latex` and `/markdown` do not exist.
4. **THE `.latex` DEMO** — a Scott Aaronson article Doug supplies (*"about times when undecidability cropped up to argue why P=NP is unlikely"*; best identification: *Is P Versus NP Formally Independent?*, 2003), replicated so it feels native — **and THE `.wiki` DEMO**: the portal and article structure as now, plus books for the SUBJECT CHAIN above the Turing article — *"what would be the page representing the subject of turing, and the subject of that? How far up does it go?"* Each demo carries INTEGRATION TESTS that install its theme and drive the served page ([PS5, PS6](#the-running-promises)).
5. **THE COMPILER** — *"use the .book and .chapter files to build abstractions needed for the chapters and you can move them to a place where they can be referenced by multiple books."*

**The constraint at every place:** *"is this framework built to support what I am implementing now?"* — chemistry bugs fixed alone if truly bugs; chemistry features pitched, batched, after the most possible work; design doubts raised to Doug in batches. **The push to origin is Doug's; commits are local.**

***THE ROAD below is superseded as a plan by this assignment*** — its waves stand as the record of what was intended before, and every anchor survives.

# <a id="working-copy-warning"></a>READ FIRST — THE SESSION THAT LOOKED DISCONNECTED WAS NOT, AND HERE IS THE EVIDENCE

***Doug, 2026-09-04, from his phone:*** *"The wiki is the thing we're making in the future, but the wiki folder is empty right now. You might not even see it because you're not on my computer at the moment… I think we interrupted a session."*

***That premise was checked and it does not hold. The session was running on his computer the whole time, on his newest commit.*** `probe`

| what was checked | what was found |
|---|---|
| the machine | `DESKTOP-4QPA73P`, user `dougl`, Windows 11 build 26200 |
| the working copy | `C:/Source/dna-platform/inexplicable-phenomena` — **the only checkout, and the only worktree** |
| the commit | `main` at `9f08552`, *Sprint 41: subjects, authors and the catalogue card* — **authored by Doug at 18:33 that same day**, and newer than the `4d96ca2` this session opened on |
| `.wiki` | **50 files on disk, and the same 50 tracked in `HEAD`'s tree** — it is not empty, and its contents are inside Doug's own latest commit |

***So the filesystem was never the problem.*** What was missing was **the other conversation**. A session opened from the phone is a different session on the same machine: it shares every file and inherits no transcript. Files are common; context is not. **That is the whole of the disconnect, and it is worth remembering because it looks exactly like a stale checkout from the inside.**

**Two corrections from the same exchange that DO stand:**

1. ***The version-one demo application is `.archive`***, and it is an archive rather than the thing being built.
2. ***"Corpus" is not a word of ours.*** Doug: *"It's a word you invented. It's not in the base."* The v1 compiler's own vocabulary is `Library`, `Book`, `File`, `Entry`, and `Role: cover | synopsis | chapter` — [`build/library.ts`](../../build/library.ts), read 2026-09-05. **Say library, not corpus.**

***And one question that is still open and is Doug's:*** he expected `.wiki` to be empty and it is not. Whether those 50 files are wanted, stale, or were committed by a session he did not watch is his to say — **but they are his own commit, not a phantom.**

# <a id="the-toc-design"></a>THE TABLE OF CONTENTS — Doug's design, recorded before it was built

***His words, verbatim and whole, 2026-09-04. Nothing here is built; the session was stopped at [the warning above](#working-copy-warning) before implementation began.***

> "I also want to start designing the table of contents. I'm starting to think that maybe you want CatalogueCard and all of it descendants to have two $ in front because it's a reference. I also think that maybe $$Book and $$Chapter should be designed in this context. All three of those should wrap a book reference, and I think a book reference that have a collection of chapter references on it. Then we have something to make equal.
>
> So what if you moved the machinery in those three to $$Book which needs no exported member. That reference already works right? So if you just put a book property on catalogue card, you could detect an author by saying that the book on a catalog card is equal to the book on the author, and every title card you can specify that its book is equal to the book of its title, and you can set a library boolean if the book is equal to the book of its subject, and that will help with validation and what not and then those cards themselves can be references by decorating their book, but then also displaying using that as the reference. Can you validate that this is a strategy and can you catch up on the code to find the absolute simplest way to implement this and just do that."

## The shape underneath it, said back for correction

**A catalogue card IS a reference to the book that names what it says**, and the three cards differ only in *which* book they point at. So identity questions become **equalities between books**, and no card needs machinery of its own.

| the equality | what it decides |
|---|---|
| the title card's book **is this book** | a **rule** — a title names its own book, and it is checkable without opening anything |
| the author card's book **is this book** | a **detection** — the book is its author's own book, so it is an **autobiography** |
| the subject card's book **is this book** | a **detection** — the book is its own subject, so it is a **library**, which is exactly how a catalogue self-catalogues |

## What the reading found, and it is mostly already there

***`$ReferenceCard` is already the design.*** It extends `$Reference`, holds a list of references with **the first canonical**, falls its `path` through to that first reference, and delegates `read()` to it. **A card that decorates a book reference and displays as a link to it is what that class already does** — which is Doug's *"those cards themselves can be references by decorating their book, but then also displaying using that as the reference."*

***So the simplest implementation is one word.*** `$IndexCard extends $ReferenceCard` rather than extending `$Annotation` — and because `$Reference` is itself an `$Annotation`, **the cards stay annotations and stay out of `types`**, which is the whole of Sprint 42's fix. Nothing is lost and the machinery arrives free.

***The chapter references already exist.*** `$Catalogue.parts()` makes one reference per part through the `prints` registry, and a book's parts are chapters — so `book.catalogue().parts()` **is** the collection of `$$Chapter` references. What is missing is only that a `$$Book` **reference** does not yet answer them; today only the `$Book` itself can.

***One place the design does not hold as spoken, and it needs his word.*** *"Every title card you can specify that its book is equal to the book of its title"* is trivially true if `card.title` stays the self-link Sprint 41 set (`$Title.title = this`), because then the two sides are the same object. **It becomes a real rule under one of two readings, and they are different features:**

- **local** — the title card's book is the book the card is *written in*, checkable with the parent walk and opening nothing; or
- **reciprocal** — the book the title names has *this card* as its title, which reads another book and therefore belongs at the CHECK, per the standing rule that specifying one book opens zero others.

***And a caution that is Doug's own rule, not an objection.*** `card.book` can only answer when the card actually holds a reference. Today `<Title>Chemistry</Title>` holds nothing but text, so **every one of these equalities waits on the compiler emitting the book reference inside each card** — which is the same dependency the title's resolution already has.

## Open, and each is his

- **The `$$` rename** — `$$CatalogueCard`, `$$Title`, `$$Author`, `$$Subject`. He said *"maybe"*; it is his name and it changes the package surface, so it was not done.
- **Which reading of the title equality** — local or reciprocal, above.
- **Where the two booleans sit** — on the cover, on the card, or read rather than stored.
- **Whether `$$Chapter` wraps a book reference too**, given its address already carries the book step.

# <a id="the-running-promises"></a>THE PROMISES THE RUNNING DEMO OWES — Doug, 2026-09-08

*Cathy's audits in [the public skillset](../the-public-skillset/.cover.md) are the PROCEDURE — how the running demo is measured. These are the WORK: the promises owed, recorded here as intentions. A count in an audit is a reading taken once; a promise goes red when someone breaks it, and the audit is not a substitute for it (Cathy's [parse audit](../the-public-skillset/03-public-audit-parse.md#the-cutoff) says this in his words). Nothing here designs the mechanism — each item is what must be TRUE and what would SHOW it; the how belongs to a plan.*

**The governing ruling — the cutoff is the paragraph.** *Doug, verbatim:* "Yes you can pay for the parse above Paragraph. That's our cutoff." — "A book only has chapters. The whole point of composition is that. We should validate book parts because it's above section. We should validate section parts. Neither should parse downward. We should have a test for that as a promise." **Above the paragraph the parse IS composition and is afforded — a book asking whether it holds only chapters, and a section asking whether it holds only paragraphs, are each entitled to their parts. Below the paragraph the parse is not allowed at all.** The promises below split that cutoff in both directions.

**PS1 — a book asked for its parts answers CHAPTERS and does not descend.** One level, one step: a call for a book's parts must not produce a call for any section's parts in the same act. *What would show it:* a promise that goes red when a book's parts-call reaches below chapters. *Owed with it, and this belongs in the record because it is Doug's own note:* this is a fact about the CALL GRAPH, not the totals — the per-class counter that proves PS3 cannot see it, because it counts calls by class and cannot tell a book's own descent from a section's. A depth-aware observation is required and is not built yet; naming that it is owed is the whole of what belongs here.

**PS2 — a section asked for its parts answers PARAGRAPHS and does not descend.** PS1 one level lower: a section's parts-call must not reach below paragraphs in the same act. *What would show it:* the same depth-aware promise, one level down.

**PS3 — parts() is never called at or below the paragraph.** Zero calls on `$Paragraph`, `$Sentence`, `$Word`, `$Letter`; a single call is a failure. *What would show it:* a promise red on the first such call. *Measured true once* — Cathy's [parse audit](../the-public-skillset/03-public-audit-parse.md), 2026-09-08: 78 on `$Section`, 3 on `$Header`, nothing below. The promise is what keeps it true when the audit is not running.

**PS4 — every instance draws a bounded number of times, stated per instance, against the measured baseline of three.** *Doug:* "We shouldn't have many renders." Every chemical draws three times per load and the page commits to the DOM once ([performance audit](../the-public-skillset/02-public-audit-performance.md#the-gate); the account is [The Three Passes](../../../chemistry/.lib/particle/12-the-three-passes.md)). *What would show it:* a promise stating the per-instance count and going red when it grows past three.

**PS5 — the running demo carries its OWN promises, in the demo code.** *Doug:* "We should have promises, even in the wikipedia code, to catch issues." The Wikipedia demo is what proves the framework in action, so it is not a demo we can leave unpinned. *What would show it:* promises authored in the demo itself, not only in the package suites.

**PS6 — there is a way to run promises against the RUNNING demo.** *Doug:* "We need to have some sort of tests for the running wikipedia because we use it to prove the framework in action." A suite that drives the served page and asserts on what it actually did — distinct from the unit suites, which pin behaviour a level below, and from the audit, which is a reading taken once.

**The defect these would have caught, confirmed in a real browser 2026-09-08.** The Turing page's table of contents carries a Colophon anchor, because `$Book` decides what is a chapter by subtracting five instances it has not finished assigning ([Book.tsx:51](../../package/src/library/Book.tsx)). No promise in [`.tests`](../../package/.tests/) authors a footer, which is why nothing is red — exactly the gap PS5 closes. The defect is recorded on the design side in [Polymorphic Limiting](../the-type-system/06-polymorphic-limiting.md#the-instances) and belongs, when diagnosed, in [Solutions](../solutions/.cover.md); this note only says why the promises are owed.

# <a id="the-road"></a>THE ROAD TO THE WIKIPEDIA DEMO

*Every wave cites its sources; nothing here is approved by being listed — the decision surface is Wave 0, and src moves only on Doug's yes.*

**DONE 2026-09-04: STYLED CHEMICALS — [Sprint 40](42-sprint-40--styled-chemicals.md) is built, seen and documented.** The road below resumes. **Item 29 (dresses and DI) is CLOSED — dissolved rather than ruled**: a styled chemical is a class, so `$` reaches it and neither of that item's two roads was needed. **The encyclopedia is styled chemicals, `Styled.ts` is deleted, and no file in lib `src` sets a `style` attribute** — which also closes the styling half of items 1 and 5. *Doug's standing warning held: much of the old arrangement was redone.*

**DONE 2026-09-04: SUBJECTS, AUTHORS AND REFERENCES — [Sprint 41](43-sprint-41--subjects-authors-and-references.md) is built and handed off.** The catalogue stands as he drew it — `$IndexCard` → `$CatalogueCard` → Title, Subject, Author, each a type and a type of reference. `$Trait` is deleted and a piece of writing carries as many types as it likes. Heading is split from Title. `$Chemistry` gained `formula: boolean | 'new'` and a `resolved` symbol, on his direct instruction. **U8 and U9 were cut by him** — the compiler emits the cards, and the shared references section is not needed because the catalogue is made in the types.

**IN FLIGHT, ruled 2026-09-05: THE CARD CLEANUP AND THE BLOCK-ASKING PAIR — brainstormed and planned as [Sprint 44](46-sprint-44--the-card-cleanup.md), `implementation-ready`, 13 units.** His ask, and it is the sprint: *"I want type of annotation, and loosely coupled annotations. That is the big one. I want a type of index card, which wholes a title that refers somehow, and a type of card catalogue that prints an index card compositionally but specifically has a book reference if that is any different, and then I want the subject, author and title as types of sections and annotations, each its own different formula chain."* **Plus `find`/`findOne`, the make marker used everywhere it fits, and the bond reorder at all seven levels** — all designed in [ch10](../the-type-system/02-the-type-and-the-instance.md#the-block-asking-pair) and none of it built. ***$Synopsis is looked at AFTER, and only after*** — Doug: *"There's nothing special about it other than it's a special type of chapter. But we can see if it's flexible and if we can design table of contents and index with the same flexibility."* **THE ROAD BELOW STILL STANDS**; it is the order of the work before the Wikipedia demo. *Styled chemicals shipped as [Sprint 40](42-sprint-40--styled-chemicals.md); the cover as [Sprint 42](44-sprint-42--the-cover.md); type-hood as [Sprint 43](45-sprint-43--the-type-of-a-type.md), which carries the live Where things stand.*

**Landed with Sprint 41 rather than deferred: [the descent](43-sprint-41--subjects-authors-and-references.md#where-things-stand).** `specify()` now reads its parts, so a book's whole interior is checked instead of its root alone. It uncovered one thing that stays open — **a paragraph is not divided into sentences** — and that is a ruling, not a repair: [Solutions 46](../solutions/46-the-check-that-checked-one-node.md).

**SUPERSEDED — the older Wave 4 framing below.** Its requirement draft still stands as input: — *"the next big thing is chapter types and subject and author. We need covers, synopses, work on the index, and most important, the table of contents. We will want figures and illustrations — at least for the cover."* **It is already brainstormed**: the 42-requirement R-A draft and questions Q1–Q14 stand in [Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus), and **his sentence answers Q13 in part — illustrations are wanted for the cover, and figures are wanted.**

## Wave 0 — THE DECISION SURFACE (all Doug's, batched by what each gates)

**Gates the mechanical sweep (Wave 2):**
1. **The frame ruling — PARTLY RULED 2026-09-04**: the base frame() is an inline div carrying the pd- classNames (his words: "an inline div and the classes"), and Paragraph's Prose wrapper is gone. Still open: Title and List override frame() to return view() directly, so their pd-title/pd-list classNames never reach the DOM. — [Sprint 39 § rulings](41-sprint-39--the-road.md#rulings-0904); [ch13](../the-motif/01-the-default-dress.md).
2. **instanceof vs the carried type — DIRECTION GIVEN 2026-09-04** ("Always use types and dynamic typing and specifically so that we have the flexibility"): the spec rules now ask by type class — `reflection.is(one, $TypeOfSentence)`, real instanceof on `one.type`. Still instanceof-on-the-class: the getters that call members (`$Chapter.references` → `references.append`), `$Book.synopsis`/`tableOfContents`, `$endsWithReferences`/`$endsWithIndex`. Open: should those read the type too, accepting that what they find may lack the class's members? — audit asks.
3. **MEMBER DELETION: `inline`** — after the frame core lands the flag feeds nothing; two test dependencies named. Yes or no? — audit asks.
4. **`valid()`'s promise** — it answers `true` unconditionally now (panels gone); change, keep, or re-speak the exported contract? — audit asks; [Sprint 38 § build](40-sprint-38--the-rebuild.md#build).
5. **Title/List label recovery** — option 1 zero-member (labels ride each kind's dress element), option 2 reinterprets `inline` as the element seat. — audit asks; the two pd- holes.

**Gates the conditional units (Wave 3):**
6. **The List model — RESHAPED 2026-09-04** by render-the-parse ("Writing is parsed, and then it prints its parts," stopped at sentence): List's view rides the same design once it lands; the specify-time materialization question ("maybe List does that because it is special") rides with it. Blocked on the weight finding. — [Sprint 39 § the weight finding](41-sprint-39--the-road.md#the-weight-finding).
7. **NEW MEMBER: `$TypeOfList.specifically`** — U15's only lawful seat. — audit asks.
8. **References re-seat `$Section → $Composition`** — net minus one override; counter-weight stated. Yes, no, or stay. — audit asks.
9. **The Index/References duplication** — direction A (visible chapter-end change, browser-gated), direction B (needs a member), or stays hand-synced. — audit asks.
10. **RESOLVED 2026-09-04** — "Loose text in books is always wrong. It takes chapters." $writtenAsChapters now fails non-whitespace strings in a book's block; no Chapter parse function is registered; reduce() keeps returning [] pre-specify. — [Sprint 39 § rulings](41-sprint-39--the-road.md#rulings-0904).
11. **The bench conflict on `parts()`-in-view** — the laws bench holds the text-split/block-scan views as Solutions 45's standing cures; the persona bench wants model-backed views. His call closes it. — audit risks.

**Gates the scoped-DI story (Waves 2–3's registered half):**
12. **THE KEYSTONE: are module-scope books canon, or do books move inside scopes?** Every scoped claim conditions on it; until ruled, the honest global points are `parser.makes.set` / `prints.set`. — [Sprint 38 § extension architecture](40-sprint-38--the-rebuild.md#extension-architecture).
13. **First-wins name sealing** (`chemical.ts:1007`) — intended, or should a subclass shadow? — same.
14. **RENDERS-THROUGH as an accepted revision of shells-over-types**, said out loud. — same; ch14 edit rides this.
15. **The idle facade channel as the dress rail** — a later pass's own design, flagged now. — same.
16. **Who calls `specify()` in production, and how deep?** — same.

**Gates the Ref remainder (Wave 3):**
17. **RESOLVED 2026-09-04, road A** — Doug: "Fix that skipped test please." `$TypeOfReference.specifically` makes the `$Path` from a url-shaped copy (only scheme://, /, or # starts — one-word copies stay pathless so bookmarks and failures hold); the test draws the writing after acceptance. The suite carries ZERO skips. — [Sprint 39 handoff](41-sprint-39--the-road.md#where-things-stand).
18. **`$Path.read(from)`** as the one-home seat (two inline bodies say the same three lines twice today). — same.
19. **The `references` seat at the book root** (`focus()` mis-seats; member or seat-move). — same.
20. **The R95 library registry export** (route→book map from the emitted `books.ts`). — same; [Binder § R95](37-the-binder.md#r95).
21. **Whether books may nest** — gates `book()`-adjacent walks. — same.
22. **The gate/law disagreement** — read-through reads nested Chapters/Books through; their specs fail them; align. — same.

**Process and standing:**
23. **THE PUSH** — everything since `20cb87f` is green and UNCOMMITTED; his call, with the commit tool. — [Sprint 38 § WHERE THINGS STAND](40-sprint-38--the-rebuild.md#where-things-stand).
24. **NAMES, batched** — the dialogue's five, the proxies (`makes`/`declared`/`levels`), the fetch-local spelling, ch15's title, sprint 38's own title, every plan placeholder; PLUS 2026-09-04's applied-but-vetoable: `reflection.is` (his floated `standsFor` the alternative), `reflection.classNames`, `reflection.names`, the `Title.KindSpec` spec name (follows the existing KindSpec convention), the test-local `$Gathering`. — [Sprint 38 § Names](40-sprint-38--the-rebuild.md#names); [Sprint 39 § rulings](41-sprint-39--the-road.md#rulings-0904).
25. **Scope batch** — Catalogue framework-or-machinery; Referent exemption; encyclopedia dresses in/out of the spec convention (defaulting OUT). — audit asks.
26. **Small fences** — `$References` birth facts in its bond; the `declared()` first-touch side effect; the persist equivalence guard; ch10's consumer-contract wording; the clean.ts `new-$TypeOf` guard. *(The ch12 Parser.tokens citation is RESOLVED 2026-09-03 — Sprint 31's "minimise, not undo" is the standing approval; ch12 edited.)* — audit asks; [Sprint 38 § one pass](40-sprint-38--the-rebuild.md#one-pass).
27. **R80, when F7 is written** — emitted cover rewritten or byte-identical. — [Binder § R80](37-the-binder.md#r80).
28. **The apparatus questions — LANDED: Q1–Q14**, with the 42-requirement R-A draft, both held in [Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus). Sharpest: the reading flow (which furnishings are parenthetical), declared-vs-counted subjecthood, the route seat, the union re-keying, and the fourteen names.
29. **Dresses and DI — the road, not the possibility (ANSWERED in part 2026-09-04).** Proven: DI keys on the component object, not the class — two wrapped dresses register independently in one scope, and a raw styled component even serves as a registered override. Open is WHICH ROAD makes the encyclopedia DI-able: (a) lib-side — Styled.ts exports a wrapper (`$((props) => createElement(dress, props))`) and each dress file wraps at export, no chemistry change, probed green; or (b) chemistry integration — three one-line recognition gates (chemical.ts:1342, 1485, 1690) so `$(styled.h2\`...\`)` works directly. Either road also becomes the one home for the styled-components CJS/ESM interop shim Doug flagged in Styled.ts. — [Sprint 39 § the DI answer](41-sprint-39--the-road.md#rulings-0904b).

## Wave 1 — THE DOCS — **DONE 2026-09-03** (six chapters touched, ch15 born, the `$Title` spec shipped, ruling 26's ch12 half resolved)

- **ch10 edit** — the `$`-fetch corollary in R135's shape: *constants close to use, never properties*; both exemptions in the same breath (specifications; reflection's build facts). — audit docs.
- **The timing law** — registration is configuration BEFORE the first parse (the one live two-populations form); written wherever the corollary lands. — audit docs/risks.
- **ch14 edit** — the decoration rule in Solutions 45's second-appearance wording: a view whose SHAPE cannot construct. Rides ruling 14. — audit docs.
- **NEW ch15** (the ONE new chapter; title Doug's) — how a kind is spelled: the nine spellings promoted from sprint 37's record, absorbing the makes registry and the transparent-kind `indent` declaration. — audit docs.
- **ch11 edits** — the gap rows now; the .spec comment exemption written; each landing chapter's row. **ch12 verify-then-edit** — the stale Parser.tokens citation (ruling 26). — audit docs.
- **U19** — the `$Title` spec file (the one shipped kind without one); Queenie's. — audit U19.

## Wave 2 — THE MECHANICAL SWEEP (zero new members; per-unit gates; suite + browser where paint-visible)

- **U11a–d** — **LANDED 2026-09-03 at every CHEMICAL seat** (type defaults across all 23 classes, specifically creations, catalogue/concatenate, both makes through ComponentType `prints`, the five maker closures); **the dress half FAILED — Wave-0 item 29**, dresses stand literal. — audit units.
- **U12** — **DONE 2026-09-03**: the `inline?span:div` conditional is dead; base frames unconditionally as span; block kinds override. (Follow-ons ride rulings 3 and 5.) — audit units; the R136 shape.
- **U13** — **DONE 2026-09-03**: numbering by the data condition (`type !== undefined`), tested by an untyped gatherer observed NOT numbering (`[0, 0]`). — audit units.
- **U14** — one disable oracle (rides ruling 2). — audit units.

## Wave 3 — THE CONDITIONALS AND THE REF REMAINDER (each on its Wave-0 ruling)

- **U15** List through the model at the lawful seat (rulings 6+7+11) · **U16** roster getters honor the type rail (ruling 2) · **U17** References re-seat (ruling 8) · **U18** the missing-maker seam (ruling 10). — audit units.
- **The means-anchor implementation** (ruling 17) — unskips the suite's last skip. · **`$Path.read` seat** (ruling 18). · **R95's route half** (rulings 20 + F7). · **R96's typed Ref forms** — wait on emitted modules (Wave 5). — [Sprint 38 § one pass](40-sprint-38--the-rebuild.md#one-pass); [Binder § R96](37-the-binder.md#r96).

## Wave 4 — THE BOOK APPARATUS (R134; brainstormed — the R-A1–R-A42 draft and Q1–Q14 stand in [Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus))

- `$Subject`/`$Author` as (probably) dynamic traits; binder-generated STRONG TYPING on subject names (misspellings fail tsc when the app is specified); `$$Book` maybe trait-and-reference at once; *subject and author are kinds of books*. — [Sprint 38 R134](40-sprint-38--the-rebuild.md#one-pass).
- Cover (+ **Illustration**, maybe **Figure**), Synopsis, TableOfContents (hopefully over Table; various reference kinds), **Index as the master catalogue** — ONE index of ALL books flattened, every book VIEWING it differently — compositional throughout so the specification carries the support. — same.
- Folds in: **the summary and the excerpt** (his 2026-08-30 spec, three-step fallback, `summarizationLength` on the document class, five flagged questions — zero occurrences in v2 src; placement at the Synopsis seat his to confirm) and the reference-arc remainders (the index decorations, the bootstrap books, the visitor's guide) as brainstorm inputs. — 00-planning (prior), §§ summary-and-excerpt, the-reference-plan.

## Wave 5 — THE BINDER IS WRITTEN, THEN THE DEMO

***THERE IS NO BINDER, ruled 2026-09-05.*** **Doug:** *"We have the v1 compiler which will one day be the v2 binder but we have no code for that. Nothing should depend on v2."* *Sprint 37's `binding/` folder — ten loose modules with no package, no script and no importer — was **deleted** at [`4dc1e5f`](../../package/.latex/.public/build.mjs), and nothing broke: the package still stood at `tsc` 0 and 78 promises, which is the proof it was never wired.* **So this wave is written from nothing, drawing on [`build/`](../../build/) for its ideas.** *And the standing error it must not repeat: `build/` and `app/` both declare `@dna-platform/public` and import `Summary`, `$Location` and `$$Book`, none of which exist in the 47 files of v2 — **the v1 system should point at `package/.archive` (v1, `.archive/`, deleted), not at v2.***

**RULED 2026-09-04, the order and the register:** *"After book stuff, then we do the compiler. Folder conventions, what needs to be assembled. We are going to draw inspiration from v1 while aggressively reorganizing. **This can be much more technical code since it isn't public or part of a polymorphic framework** — though do use polymorphism just because we TypeScript developers are not allergic to it."*

***So the compiler is written to a different standard than `lib`***: v1 is a source of ideas rather than a shape to preserve, the reorganization is expected to be aggressive, and **the register is ordinary technical code** — the library's own vocabulary governs `lib`, not the binder. **Polymorphism stays**, as design rather than as ceremony.

**THE PACKAGE SURFACE SPLIT, 2026-09-04** — Doug: *"Can't the encyclopedia things just be in encyclopedia as a little sub-directory of the package… utilities might too."* **Done, on chemistry's own `/symbolic` precedent:** `@dna-platform/lib` keeps the library's vocabulary, and `@dna-platform/lib/encyclopedia` and `@dna-platform/lib/utilities` are their own surfaces. ***This resolves the `Table` collision*** — a `Table` at the root is the writing, a `Table` in the encyclopedia is the dress, and neither has to be renamed.

- **F7** — **nine doors cut fresh against the new framework**, none of them inherited: [U66](37-the-binder.md#u66) (v2 entry point + build — `require.resolve` must reach src's writing), R80 (ruling 27), the CHECK's `specify()` teeth, plus the apparatus's subject-typing emission. *Sprint 37's account of building them is [a true record of that sprint](37-the-binder.md#where-things-stand) and nothing more — the folder it describes is gone.*
- **F8 — THE WIKIPEDIA DEMO, the destination:** the library re-bound, app walked in a REAL browser (the 8/8 precedent), scroll-to-fragment, the two-Cells collision named for his word, R96's typed forms live against emitted modules. NO FEATURE SHIPS UNSEEN. — [Binder § inventory A5](37-the-binder.md#where-things-stand), [§ router review](37-the-binder.md#router-review).

## Standing beside the road

- **The bookmark redesign — NEEDS DESIGN before it builds (Doug, 2026-09-04).** His seed, verbatim: *"I think a bookmark might be something that wraps certain text? Can't it just be a sort of pass through that inherits the place that it is? People would click somewhere. Or maybe not. Ponder what it would be like to use one of these."* The generalized shape: **a reference whose address is its POSITION, not its cargo** — a live mark derives its place (the parent walk in [`$Bookmark.chapter`](../../package/src/library/Bookmark.tsx) already does this at chapter grain), and only a remembered mark snapshots a path (hydration must snapshot regardless, so today's path-carrying form is the hydrated half of one lifecycle, not a rival design). Open questions: the grain (chapter today; word/sentence if it wraps text), pass-through parsing (a wrapper cannot be parenthetical or its words leave the parse — Phrase's transparency is the existing rail), the click gesture (select text, or a margin affordance — demo UX), the panel (the bookmarks list wants the References/recollection store shape), and whether the three reader's marks unify as one transparent-wrapper family — point, range, page: Bookmark, Highlight's endpoint pair, PageFold's `location`. Touches R-A42's "derived kind on the Bookmark/PageFold shape." — BookmarkReferenceSpec (v1, `.archive/book/Bookmark.tsx`, deleted).
- **F9 — declarations look like declarations** — waits on the chemistry refactor HE directs; the persist-guard defect sits at the same seat. — [The Cleaning § Declarations](../the-condition-report/06-the-cleaning.md#declarations).
- **The test-review sprint** — his 2026-08-30 charter; re-measures first (now 25 files / 543, zero skips). — 00-planning (prior), § test-sprint.
- **Sprint 38's chapter compacts at its close** per [the compounding convention](../../../../.claude/library/..librarianship/17-compounding.md); this scratchpad sweeps as waves land.

# <a id="register"></a>THE REGISTER BENEATH THE ROAD — the librarian's gather, 2026-09-03

*Counts: 12 rulings · 10 member asks · 6 ready-when-ruled · 5 workstreams · 1 deferred · 21 stale/superseded — all merged into the waves above; the stale ledger is kept whole here because a superseded line with its evidence is what stops re-litigation.*

### STALE / SUPERSEDED (evidence per line)

*From [The Binder's inventory](37-the-binder.md#where-things-stand):* A1 Ref+router — REBUILT (three forms green; `read()` follows an address per R72). A2 flat hierarchy — REBUILT (R105 type-chain standing; `kin` out). A3 styling frame — REBUILT pd- half (R112/R115; `flows`/`dress`/`Dress` out; two label holes ride Wave-0 ruling 5). B6 simple type — REBUILT (`type!:` + `??=`, R126). B7 table — REBUILT (`$columns`, divisibility, block-reading view — Solutions 45 cured at its own seat). B9 comment ban — a STANDING GATE. B10 battery — STRUCK by R113 (the need was F13 recursion, ruled and built). C invented members — do-not-re-add STANDS (`kin`, `seated`, `carried`, `former`, `seat`, `flows`, `dress`, `Dress`, `$TableTrait`, `$ListTrait`, lattice `stands`). C means-narrowing — STRUCK by R113. R69 arrangement codes — DISSOLVED by R106. R90 two-Links — DISSOLVED by R87.

*From [The Cleaning](../the-condition-report/06-the-cleaning.md):* P1–P19 — STALE against v2, the code they treat being archived. **P20–P23 are NOT stale: the compiler they audit is [`build/`](../../build/), which still stands and was never replaced** — it was closed at [The Compiler's dispositions](../the-condition-report/08-the-compiler.md), and the binder that would succeed it is unwritten. P10's sentence ("nothing static that is not a member") remains a standing ruling; the DECLARATIONS section is LIVE as F9; the words-owed register survives only in Wave-0 ruling 24.

*From this chapter's prior plans:* reference-arc sprints 1–3 DONE/ABSORBED; sprints 4–5 seeds fold into Wave 4; the four plan-owed questions ABSORBED; the Semantics object FILED by design.

# <a id="swept"></a>SWEPT — anchors kept so closed chapters' links resolve

*Each heading below stood in a prior version of this scratchpad; the content is superseded by the road above (bodies in the project branch's history). One stub per anchor, nothing more.*

<a id="the-reference-plan"></a><a id="canonical-collision"></a><a id="types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10"></a><a id="d--the-compilation"></a><a id="v1"></a><a id="v2"></a><a id="v3"></a><a id="v4"></a><a id="the-five-sprints--each-with-three-things-doug-can-check-planned-2026-08-06"></a><a id="plan-sprints"></a><a id="plan-blockers"></a><a id="plan-allocation"></a><a id="naming-discipline"></a><a id="done--validation-says-why-built-in-the-parse-2026-08-12"></a><a id="the-standing-sprint-discipline-added-2026-08-03-out-of-47s-cost"></a><a id="the-demo-specified-at-last-doug-2026-08-06"></a><a id="summary-and-excerpt"></a><a id="summary-open"></a><a id="the-split--subjects-and-the-library-as-sprints-with-checkable-ends-doug-2026-08-06"></a><a id="the-fourth-book--the-canonical-autobiography"></a><a id="the-earlier-split-superseded-by-the-five-sprints-above"></a><a id="the-demos-deserve-a-subject-catalogue-doug-2026-07-31--future-sprint-material"></a><a id="test-sprint"></a><a id="sprint-two--the-card"></a><a id="sprint-three--the-subject"></a><a id="sprint-five--the-compilation"></a><a id="sprint-50--the-public-build"></a><a id="queued--what-a-reference-form-is-and-whether-it-belongs-to-the-chemical-hierarchy-doug-2026-08-12"></a><a id="open-design-questions-explored-not-settled"></a><a id="how-this-codebase-will-work-and-what-would-show-it"></a>

**The swept plans** — the five-sprint reference plan (its sprints ran as 30–35), the types sprint (ran as the rebuild), the compilation split (Wave 5 now), the summary-and-excerpt spec (LIVE, folded into Wave 4), the standing disciplines (absorbed into the sprint conventions), the canonical-collision note (ANSWERED — the locator is the index on the parts), and the earlier splits — all superseded by [THE ROAD](#the-road) above.
