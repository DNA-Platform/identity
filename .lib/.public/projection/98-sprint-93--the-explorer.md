# Sprint 93: The Explorer

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Opened 2026-09-28 as a brainstorm, `requirements-only`, awaiting Doug's approval of the sections below and his answers to the questions at the end. The seed is his, recorded in [chapter zero](00-planning.md#the-code-library) the same day. The workflow is the [feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md). The sprint's title is a PROXY; Doug's to rename.***

---

## Where this sprint comes from

**Doug, 2026-09-28, verbatim:** *"how about you prove that you can elegantly use this system in the reference manual to provide more of a code documentation view. Maybe the book looks almost like its own app, and provides something like a file tree on the left like vscode and then clickable tabs, and the thing on the left is somehow the table of contents? Can you make a clean simple version of something like that, where you build annotations and components that consume them, extending .public as it's supposed to be used, to see if it is ready to provide such an application experience? Remember that plain react and non-writing chemistry can live inside pieces of writing if it needs to."*

**And his questions for the brainstorm, earlier the same day:** *"what is the object model for the app you want, how can subclassing library components, adding annotations, and integrating with outside libraries help you achieve this in a way that provides a beautiful semantic structure if one read the chapters, while also providing a powerful user interface that might even be surprising based on the structure of the text. How can you do things like reinterpret the table of contents into something like a file tree (for the code files)... The art of building a library is keeping the semantic essence of something while exploring new forms and the file tree is the table of contents of the codebase."*

## What the room already holds

- **[Paginated](../library/08-paginated.md):** an annotation said of a book under which its chapters are pages and one is open at a time, the chapter its bookmark names or the cover; its `pages` and `open` are overridable and its marks are three. Its own extension story ends with *"the app-like book — the first M chapters fixed as header and sidebar, the last N as footer, the middle as tabs — is a book kind reading annotations its chapters carry and a Paginated whose pages are…"* — written by Cathy with Sprint 86, and never built.
- **[Book](../library/05-book.md):** exposes its cover, table, title, author, subject, synopsis and bookmark, and draws its layout in `write()`; the test library's book class draws a masthead and a byline before its chapters and configures how it turns — [The Book](../../package/.binding/.test/manual/1-the-book.code.tsx).
- **Navigation:** everything through the router; a link to a chapter's route turns the book in place and a reload lands there — [Sprint 85](91-sprint-85--headings-and-routes.md); Next and Previous are the exemplar of a component reading the graph and linking to a route — [Next and Previous](../library/07-next-and-previous.md).
- **The appendices:** every file accompanying a chapter is an Append among the chapter's annotations, findable by class — today the binder's, after [Sprint 92](97-sprint-92--the-literal-form.md) the author's — [Append](../figures/01-append.md).
- **The drawn table:** Some Projects' table of contents is drawn from what its chapters mention, by a section in a file beside it; the pattern for a table read from the graph rather than written.
- **The rule that binds it:** *"the ability to achieve what you need has to be configurable in a book, not by adding features to the compiler"* — and a missing seam in `.public` is pitched as an expected failure, never routed around.

## The object model of the app

**Nothing new enters the model.** The manual is a Book; its chapters each document one tool; a tool's file is the chapter's appendix, an Append; the table of contents lists the chapters. **The app is a way of seeing that book:** a layout annotation said of the book, a kind of Paginated, under which

- **the table draws as a tree** on the left — a node per chapter in the table's order, each opening to its appendices, the files; *the file tree is the table of contents of the codebase*;
- **the chapters a reader has opened draw as tabs** across the top — state that is not writing, held by the annotation and redrawn when it changes;
- **the pane shows the bookmark's chapter**, one at a time, as Paginated does; the active tab is the route.

A reader of the chapters as text meets the same book with none of this: the app is a form the text takes, not a change to the text.

## Approaches, at mechanism altitude

1. **A layout annotation on the book, and the book's own `write()`** — *recommended.* The manual's book class stands the annotation on itself, as Some Projects stands Paginated, and draws the tree and the tabs before `super.write()`, as the library's book draws its masthead. The annotation is a class under Paginated: pages the chapters, open the bookmark, style the app's sheet, and one chemical field, the opened chapters. The tree and tabs are React components inside the writing, reading the graph and linking to routes. Everything lives in the manual's tools; nothing in the compiler; nothing in `.public` unless a seam is missing, and then it is pitched.
2. **A Format whose layer draws the furniture** around the book element, stateless, with Paginated still doing one-at-a-time. *Trade-off:* a layer is dress, and tabs bear state; two annotations where one would do.
3. **A second book, the app, whose chapters are the manual's.** *Trade-off:* two books for one text; the manual's own page would not be the app.

## Requirements

*Drawn 2026-09-28 from Doug's words; each names what would be observed. **Awaiting his approval, section by section.***

### A. The app, as seen

| | requirement | observed |
|---|---|---|
| **R1** | **The manual is its own app.** Its route opens to a tree on the left, tabs across the top and a pane, the cover open; the other books of the library are untouched. | `/the-library-reference-manual/` in Chrome: the three regions present and the cover in the pane |
| **R2** | **The tree is the table of contents.** A node per chapter in the table's order, showing the chapter's title, opening to a leaf per appendix showing the file's name; a chapter with no appendix is a leaf itself. | the tree's text equals the table's chapters in order; The Book's node opens to `1-the-book.code.tsx` |
| **R3** | **A tab per opened chapter, the active one the route.** Clicking a node or a leaf opens the chapter's tab if it is not open and makes it active; the address becomes the chapter's route; the pane shows the chapter, its prose and its printed file; a tab has a close; closing the active tab makes its neighbour active. | driven in Chrome: click, the URL, the pane's text; close, the neighbour |
| **R4** | **Navigation is the router's.** Every turn is a route taken in place; a reload lands on the active chapter with its tab open; the browser's back makes the previous tab active. | reload after a click lands on the same chapter, the tab present; back moves the active tab |

### B. How it is built

| | requirement | observed |
|---|---|---|
| **R5** | **A layout annotation on the book, under Paginated,** said of the manual's book by its own class; its pages the chapters, its open page the bookmark, its sheet the app's, and one field of state, the opened chapters. | the annotation's promises: pages, open, opened grows on a bookmark change and shrinks on a close |
| **R6** | **The tree and the tabs are components inside the writing** — plain React and chemistry that is not writing — reading the graph: the table's chapters, each chapter's title and appendices, the bookmark; linking to chapter routes and never turning the book themselves. | the components' promises in memory: given a book, the tree's nodes and the tabs' labels; a click is an anchor to a route |
| **R7** | **Nothing enters the compiler, and `.public` changes only by a pitch.** A seam the app needs and the framework lacks is an expected-failure promise naming it, and Doug rules; no workaround stands in the manual. | the compiler's files untouched; any `it.fails` in the suite names its seam |
| **R8** | **The manual documents its own app.** A chapter, The Explorer, whose file is the annotation and the components, printed inside the explorer it draws; Libby's prose says what it is and how she uses it. | the seventh chapter's page, in the app, printing its own file |
| **R9** | **Outside libraries only where they earn it.** None for a tree and tabs; highlight.js for the code through [Sprint 92](97-sprint-92--the-literal-form.md)'s R9 when that lands. | the manual's dependencies unchanged but for what Sprint 92 adds |

### C. What cannot be faked, and is the sprint's end

| | requirement | observed |
|---|---|---|
| **R10** | **A chapter added to the manual with a file beside it appears in the tree and opens as a tab at the next bind, with no edit to the explorer.** | the regression's variant: a galley with an eighth chapter bound, the tree's eighth node and its leaf, driven |
| **R11** | **The chapters' semantic structure is unchanged.** The longform and every chapter's page read as they did, one chapter more; the app is a layout annotation, not a change to the text. | the diff of two galleys: only the new chapter, the tree, the tabs and the sheet differ |
| **R12** | **Seen, not described.** The app driven in Chrome — open, click, reload, close, back — and photographed; the promises read `innerText`. | the regression's promises and the photographs in the record |

**Out of scope:** editing code in the pane; search, split panes, anything of VS Code beyond a tree and tabs; the other books of the test library; syntax highlighting, Sprint 92's; the code's own library beyond the manual, the later brainstorm's.

**Names.** Doug's: *a file tree*, *tabs*, *the app*. Ours, flagged: *The Explorer* for the annotation and the chapter; *opened* for the tabs' state.

## The sketch, which is the design

**Doug:** *"sketch what you want in HTML that you can throw away to see what you want as your design medium"* — and then: *"The throwaway sketch doesn't literally need to be thrown away. Maybe Libby wants to put it in her Library somewhere. But it is the design."* It stands beside this chapter: [the sketch](98-sprint-93--the-explorer--sketch.html), and [its photograph](98-sprint-93--the-explorer--sketch.png) at 1440 by 900; Libby keeps the photograph beside the manual's chapter The Explorer when that chapter is written, an appendix shown by an Image figure.

**What the parts are, semantically — everything in the tree except the table, which is the tree:**

| the region | what it is in the book | what it does in the app |
|---|---|---|
| the head | the masthead and the byline | where a reader is, and whose book |
| the left column | **the table of contents** — the cover and the synopsis in it as apparatus, in italic; the chapters numbered, each opening to its appendices, the files | the tree; a node is a chapter, a leaf is a file, and either opens the chapter's tab |
| the tabs | the chapters a reader has opened; the cover's tab first and uncloseable | the reader's recent path; the active tab is the route |
| the pane | a chapter as it already is: kind label, title, prose, the listing with its file's name and numbered lines | the open page, one at a time |
| the right column | the chapter's outline, its headings; the manual's synopsis beneath | where in the chapter, and what the whole is |
| the foot | the catchword | previous and next, and the count |

**What the picture corrected.** The synopsis found its place beside the page rather than in the tree alone; the cover is a tab, not a page among pages; the outline is the chapter's headings, which are mentions already; the count in the foot, *Chapter 2 of 7*, is the table's position. A code documentation system and not an editor: serif prose, the library's paper, the code muted in the library's ink, no wrapping, the file named above its listing.

## The code viewer, researched

**Doug, 2026-09-28:** *"I also think you are going to want a dependency on public for its code viewer. We need syntax highlighting etc... I think we made this decision in v2, you can check the archive, but I never saw anything beautiful. How can we have a very powerful yet customizable ways of viewing code for our Code component and for public in general."*

**What the archive says.** v2 chose highlight.js — still among the package's dependencies — and shipped a `Highlight` component, a `Code` writing whose info string chose its renderer, and a `CodeNavigator`; v1 used Prism with per-line numbers in a tabbed drawer, and a Listing figure that printed *the exact slice of source a chapter is discussing*. Neither was made beautiful.

**The candidates, from the registry 2026-09-28:** Lezer (`@lezer/highlight` 1.2.5, 100 KB; `@lezer/javascript` 1.5.5 with TSX, 326 KB; CSS 96 KB; markdown 454 KB) — a real incremental parse, semantic tags mapped to classes, synchronous, a grammar per language; Shiki 4.4.3 (603 KB core plus grammars and themes) — VS Code's grammars and themes, synchronous with its JS engine and a preloaded core, the most beautiful out of the box and the least ours; highlight.js 11.12.0 (5.5 MB, regular expressions, classes), what we have; Prism 1.30.0 (2.1 MB), what v1 had.

**The recommendation — Lezer, and the viewer's powers as annotations.** A tag is a mark: a keyword wears its mark whatever the theme, and the theme gives it ink, as it dresses prose — so Libby's dark book colours code as it colours everything else. Highlighting is an annotation on a Code figure, its language the appendix's type; line numbers, a slice of lines, and the file's name above are annotations too, composing on the same letter; a library that needs a language adds its grammar. That is *powerful yet customizable* in the form this library already has, the annotated version. **Doug's to rule, since a dependency of `.public` is his.** It reaches [Sprint 92](97-sprint-92--the-literal-form.md)'s R9 first, since the manual's code must be beautiful before the explorer frames it.

## Doug's answers to the brainstorm's four, 2026-09-28, verbatim

**On the order:** after Sprint 92. **On what a leaf opens:** its chapter's tab. **On the approach:** *"I need you to explore, but I want you to sketch what you want in HTML that you can throw away to see what you want as your design medium. Why not consider a full-screen something that still feels right in some artistic sense, but gives you room to be inspired by code editors. And then really think about what the parts are semantically, and what roles different parts are playing, and how to reinterpret things like the cover, the table, the synopsis (Like everything can be in the tree except the table which IS the tree!) This is where you use your creativity to fit the semantics of this kind of reference manual. And remember it is a code documentation system, so not quite a code editor, but they both need to help a person explore code!"* **On the requirements:** *"This is Libby's private library, so she should weigh in on how nice the code needs to look for this to work. Is it something we, too, can see in the reference manual? Does the reference manual fit in itself?? :)"*

**Libby's weigh-in, in the room the same day:** a code documentation system asks a reader to read code, so a listing needs its file's name above it, line numbers a reader can cite, syntax coloured in the library's own ink and not an editor's, no wrapping of a line, and the prose saying what the code is before the code does; without highlighting the tree and the tabs are furniture around a grey block. **And the manual fits in itself by construction:** the chapter The Explorer prints the explorer's own file inside the explorer it draws.

## Where things stand

**Next: the sketch, in throwaway HTML, photographed and looked at; the parts of the manual reinterpreted semantically and written into this chapter; then the requirements redrafted to it and put to Doug; then `/ce-plan`, after Sprint 92 has run.** Nothing is built.
