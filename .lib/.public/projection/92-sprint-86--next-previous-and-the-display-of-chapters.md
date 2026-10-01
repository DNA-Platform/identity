# Sprint 86: Next, Previous and the Display of Chapters

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** closed — brainstormed, planned, built, gated and compounded 2026-09-27, five units in one session; the review deferred to the end of the next sprint on Doug's word
- ***The sprint's name is a PROXY, the room's; Doug's to rename.***

---

## Where this sprint comes from

**Doug opened it at the close of [Sprint 85](91-sprint-85--headings-and-routes.md):** *"I think the next design is that we need, where possible, components that represent properties that they have access to. So Next and Previous could reach to their chapter and be chapter references. I like previous of the cover is the cover and next of the last chapter is the last chapter - I prefer self-reference to undefined. Those references are set by book as part of its binding perhaps."*

**And of the display of chapters:** *"Let's pretend we had the first M and last N chapters that we wanted to be fixed in view like an app, and you can think of the first as header and sidebar and the last as footer, and the rest of the chapters as tabs, scrollable content, or just with links that move between. Let's call this an advanced use case. I want an author to be able to implement such a thing. Add that to the extension story for Book, because implementing books is largely about how to display the chapters. You implement various types of chapters through direct types or annotations, and use them in Book. Then, Paginated is just one annotation that serves as an example, and might also be inherited from perhaps? That makes it less important than simply the ability to customize. A book can't be limited in how its chapters are displayed and .public gives its authors the ability to subclass Book and do sophisticated usecases."*

## What the room already holds

- **The bookmark is on the book and reactive** — `$bookmark`, the url the page is open at, set on the held instance by the app and the render; `bookmark` the chapter whose title means it — [Book](../library/05-book.md). A layout that shows one chapter at a time reads it; the redraw of every chapter on a move is [the cascade, pitched to chemistry](../../../chemistry/.lib/projection/00-planning.md#pitch-cascade).
- **The router never decides what is visible** — Sprint 85's D3; the book's layout decides what to show.
- **A group is named, never left over** — [The Book Is the Layout](../the-first-draft/05-the-book-is-the-layout.md), the first library's ruling that still holds.
- **An annotation acts through four powers** — [Developing an Annotation](../writing/10-developing-an-annotation.md); a mark on a child from `defines` costs that child a draw.
- **A synopsis stands its Reference at `$Bound`, from what its book holds** — [Cover, Synopsis and TableOfContents](../library/03-cover-synopsis-and-table-of-contents.md); Next and Previous are the same shape.

## Rulings, verbatim

| on | Doug's words |
|---|---|
| **where next and previous live** | offered get-only on Chapter, reading its book, over set by the book at its binding: *"Get-only on Chapter, reading its book"* |
| **the ends** | offered a Self reference where the cover's previous is the cover and the last's next is the last: *"Yes, a Self reference at the ends"* |
| **the parts of the advanced use case** | *"This is an example use case, not something we are implementing. We want to know that the author has a relatively easy time implementing this in book. Just imagine there were Header, Footer and Document annotations on the chapters and the book reads them to decide what to do with them, and it wants the router to be able to show the active tab based on the url - something like that. Just prove that we could implement it. It has to be possible otherwise our system is not flexible enough"* |
| **the visible end** | *"I am happy to see scrolling and next/previous simple paginated chapters as an example of what can be done in the test library. Send me links"* |
| **Next and Previous as exemplars** | on section A: *"Approve, but make Next and Previous loosely coupled components. They should be exemplars of how to make components that consume properties. It is a component for a type that represents properties, just as an annotation is like a component for a type that confers them"* |
| **Paginated** | on section B: *"I think so. I rely on you to make the most performant, elegant implementation of this possible as an example of what is possible"* |
| **the advanced use case** | on section C, after approving it as a promise: *"The demonstration is by analysis in the full. Explain to me how one would implement such a thing, and how complex it would be. The two examples are just good enough"* — so R8 is the analysis, and no book kind is built |
| **the `src` list** | on [D6](#d6): *"Yes to all"* |
| **the name `next`** | asked which pair Chapter should carry, since `next(phase)` was every chemical's lifecycle method: *"This is a good opportunity for $Chemistry. I think we want to use symbols for more things. We don't want to use such basic words. What if, for everything from formula to next, we expose symbols that we export with those names and compel people to use them. view is still public, but let's give $Chemistry a clean surface area. I like the look of using symbols anyways because they express that this is a $Chemistry feature."* |
| **chemistry's surface, as built** | to the chemistry session: *"If something is useful. view and parent are those. We keep children symbolic because it is not recommended"*; *"Know this.parent stays public. That is essential"*; *"We moved this to symbols for EXACTLY this reason"*; the callable: *"[selector] = selection.section? How about that??"* — [A Clean Surface](../../../chemistry/.lib/projection/48-sprint-87--a-clean-surface.md). To this room, after: *"I had the chemistry team address this problem. You can read about it. And you can adapt to it. Use next and almost all members as you see fit. $Chemistry hides its internals now"* |
| **what the pair has built** | given mid-sprint, verbatim in [Using and Extending Writing](../writing/01-using-and-extending-writing.md#what-the-pair-has-built-in-the-whole): an object graph of TypeScript classes, viewed and extended by plugin-like annotations that modify it, components floating between types consuming and exposing reactive properties, no hook, native TSX, side by side with React |
| **the close** | *"Okay, it should be becoming self-evident that we need a base theme. /ce-compound and we'll leave the review for the end of next sprint and at the end of next sprint, after we brainstorm, we will have a theme."* — the rest of his message is [below](#stand), as the next sprint's seed |

## Requirements — the register

*Approved by section on 2026-09-27. What would be observed for each became the suite and the regression, read where they run; the acceptance examples and flows with them. Out of scope: the advanced kind as a book, in the test library or a promise; Part; any change to the router; the cascade, which is chemistry's.*

| | requirement | lands |
|---|---|---|
| **R1** | `Chapter.next` and `Chapter.previous`, get-only from the book the chapter stands in, itself at either end and in no book | [U1](#u1) |
| **R2** | `<Next>` and `<Previous>`, writings in a chapter meaning what its `next` and `previous` mean, a Self at the ends; loosely coupled, the exemplar of a component that represents a property | [U2](#u2) |
| **R3** | the compiler changes nothing for them | [U2](#u2) |
| **R4** | `<Paginated />`, an annotation of a book: pages marked once at `$Bound`, the open page kept with two writes on a move, the style keyed on the book's own mark | [U3](#u3) |
| **R5** | written to be subclassed: its pages and its style | [U3](#u3) |
| **R6** | said only of a book | [U3](#u3) |
| **R7** | Book's *How it is extended* opens with the display of chapters | [U5](#u5) |
| **R8** | the app-like book analysed in full, as lines and files | [U5](#u5) |
| **R9** | the test library shows both, bound, served and photographed | [U4](#u4) |

### <a id="the-analysis"></a>The analysis

*Sketched here at the brainstorm and written in full into [Book](../library/05-book.md#how-it-is-extended), where it lives; the sketch is struck.* About seventy lines in the author's files — four marks, a Paginated subclass, the theme's grid, a drawn tab bar — and nothing in `src`, the compiler or the router.

## <a id="plan"></a>The plan — the register

*Planned 2026-09-27 with the code open; measured before dividing at one session, no division. The test scenarios, the order, the risks and the plan's self-check stood here and are spent: the scenarios are the suite, the order ran as written with U5 beside U4, one risk fired and is [below](#fired), and the check passed before work began.*

| | decision |
|---|---|
| **D1** | `next` and `previous` on Chapter answer a Chapter and never undefined, itself at the ends; get-only, nothing stored — over a Reference-typed property, since the Self at the ends must be *made*, and over set by the book at binding, which stores |
| **D2** | Next and Previous are writings under Word, one file each: `chapter` the nearest Chapter above, typed; one name read of it; the one Reference made at `$Bound` and defined there; `means` the expressed Reference — over reading at `$Define`, where the book is not whole, and over a base class, which is predicted polymorphism |
| **D3** | Paginated is an annotation of a book with a global style: `book`, `pages` and `open` overridable; pages marked once at `$Bound`; `defines` keeps the open mark with two writes on a move, the moving mark authored by the book so `revert` takes back it alone; `erase` takes the book's mark only — over re-marking every page per define, over a Format, over the book drawing differently |
| **D4** | the test library's `Catchword` at the foot of every chapter of every book; Some Projects `<Paginated />` in its own class's `$Define` |
| **D5** | the documentation: Book's extension story, Chapter and Title's rows, two chapters in the library book, the pattern's row in How Writing Is Extended, the covers by the tool |
| <a id="d6"></a>**D6** | `src`, for Doug's yes: `library/Chapter.tsx` (`next`, `previous`) · `library/Next.tsx`, `library/Previous.tsx`, `library/Paginated.tsx`, new · `library/index.ts` — *"Yes to all"* |

- <a id="u1"></a>**U1 — next and previous on Chapter** (R1): two get-only properties reading the book; three promises in `chapter.test.tsx`; the rows in [Chapter and Title](../library/02-chapter-and-title.md). `b8f27ad`, first as `after` and `before`; `bf82472` under the plan's names.
- <a id="u2"></a>**U2 — Next and Previous** (R2, R3): `$Bound` making the one Reference, `chapter` walking up; five promises in `next-and-previous.test.tsx` and one of cost in `renders.test.tsx`; [the chapter](../library/07-next-and-previous.md) and [the pattern's row](../writing/06-how-writing-is-extended.md#the-seams). `7aed256`.
- <a id="u3"></a>**U3 — Paginated** (R4–R6): eight promises in `paginated.test.tsx` and one of cost, a move at 10 draws against the cascade's 6 and one paint; [the chapter](../library/08-paginated.md). `397cfd4`.
- <a id="u4"></a>**U4 — the test library, bound, seen and served** (R9): the catchword in twenty-one chapter files, Some Projects paginated, four regression promises of which two drive Chrome, the old preview stopped and the new bind served on 4242. `aadf094`.
- <a id="u5"></a>**U5 — the extension story** (R7, R8): [Book's *How it is extended*](../library/05-book.md#how-it-is-extended), opening with the display of chapters and carrying the analysis in full.

<a id="fired"></a>**The risk that fired was one the plan did not list:** `next` was chemistry's word — [Solutions 94](../solutions/94-the-word-chemistry-held.md) has the symptom and the mechanism. It cost the pair a few hours as `after` and `before`, and gave chemistry its clean surface: `541fc24`, `698d863`, `71ca298` and `049dff8` are the chemistry session's, the last naming the callable `selection`; `5d5ec86` takes it by that name in our five promise files. The wrong turns beside it — a bare `tsc` reporting 208 false errors, happy-dom carrying no stylesheet, `express(annotation, false)` cleared by the next define — live in [Solutions 94](../solutions/94-the-word-chemistry-held.md), [Paginated's promises](../library/08-paginated.md#promises) and [Using and Extending Writing](../writing/01-using-and-extending-writing.md#annotations-the-plugin-system).

## <a id="stand"></a>Where things stand

**Next: nothing here — the brainstorm ran the same day as [Sprint 88](93-sprint-88--the-theme-the-element-and-the-blank.md), and its chapter carries the state.** This sprint is complete and compounded; its review is deferred to the end of Sprint 88 on Doug's word. **His latest stated intent, verbatim, which the brainstorm opens on:** *"Okay, it should be becoming self-evident that we need a base theme. /ce-compound and we'll leave the review for the end of next sprint and at the end of next sprint, after we brainstorm, we will have a theme. Likely, we will have a Theme base annotation that has a lot of properties and then a styled component that uses them (it is a format) and is also a theme provider, and then we would expect other themes to subclass it and at least overwrite the styled component. Other formats for components can get the books theme and use its exposed properties. Oh and I think paragraph - book should have their base element as a div right? Does that destroy anything? I think we also need a type of annotation called Blank, and then maybe we can make a configurable Space that can add whitespace, and a Break that can add a linebreak, and Line... this isn't quite right, but you can help me with a configurable whitespace system that has simple nomenclature, possibly driven by an annotation that allows something to maintain its spatial extent but as a blank element. That's a fine genetic trait, like being albino :)"* — *What this session expects the brainstorm to take up, marked as an expectation and not a brief: a base theme, the base element from paragraph to book, and a whitespace system. The subject is his to set in the room.*

**State: complete.** U1–U5 built, gated and committed locally; the one open name ruled and closed; the library adapted to chemistry's surface, its code speaking it and [The Coding Style](../the-coding-style/03-the-coding-style.md#the-surface) carrying the rule. **Verification:** the package typecheck 0 and 268 of 268 across twenty files; the compiler's typecheck 0, unit 98 of 98 — unchanged in number, which is R3 — and regression 30 of 30. **Commits, all local and unpushed:** `b8f27ad`, `7aed256`, `397cfd4`, `aadf094`, `bf82472`, `5d5ec86`, and the chemistry session's four between them. **Identity:** pushed through `595b04c` before the compound.

**To see it:** the bound test library is served on 4242 from a galley under `.binding/.test/.galleys/` — `/some-projects/` the paginated book's cover alone, `/some-projects/the-work/` the work alone with its catchword's Previous turning to the table in place, `/a-paper/the-argument/` the scrolling paper with a catchword at every chapter's foot. To serve it again: pull and bind a galley through [galleys](../../package/.binding/.test/galleys.ts) and run `npx vite preview --port 4242 --strictPort` in its `.binding`. *What a reader sees first: every composition is still a span, so a title and its catchword run together — the page's known shape, and the next sprint's subject.*

**Read first, for the brainstorm** — the sources a theme is designed from, not the code of this sprint: [Format and Theme](../writing/11-format-and-theme.md), what a Format is and how `theme = true` makes it a provider; [Theming and Formatting](../writing/02-theming-and-formatting.md), the four ways tried and why three lost; the test library's Theme in [`the-library/.book.tsx`](../../package/.binding/.test/library/.book.tsx), the one theme that exists; [the drawing conventions](../the-coding-style/03-the-coding-style.md#the-drawing-conventions) and [styling](../the-coding-style/03-the-coding-style.md#styling) in The Coding Style, what a base element may and may not be; [The Motif](../the-motif/.cover.md), how a book looks; and [Sprint 80](86-sprint-80--format-and-theme.md), the record that shipped Format.
