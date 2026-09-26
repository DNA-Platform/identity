# Sprint 85: Headings and Routes

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** implementation-ready — brainstormed and planned 2026-09-26, five units; Paginated, the layout annotation, deferred to its own brainstorm
- ***The sprint's name is a PROXY, the room's; Doug's to rename.***

---

## Where this sprint comes from

**Doug opened it at the close of [Sprint 84](90-sprint-84--means-and-the-table.md), asked whether a Mention should mean itself:** *"No, a mention doesn't have a Reference. Here's the interest and it might help you with section and heading - title and section should both support creating ids for themselves, supporting ()[] syntax, and if [] is specified, it should use that... I don't think we have implemented this yet. The title of the section would mean itself, but the section would have that as a mention because the title represents the section. We need to get this working and make sure the compiler is consistent with it."*

**And then:** *"Well how do we handle this now for titles? For a section header, it can just support []() and be like a mention, putting an id there it gets one, otherwise, kebab-case the heading, and we can make an Identifier utility to store those operations. But how do we do this with chapters? What does the compiler give? What if I wanted chapters to be a part of the route, whatever it is they do. Maybe the chapter uses whatever is in `[](here)` and if it's the url, then that can be its id? Not sure it works like that. So how are we handling chapters now. How do we handle, in the compiler, the idea that however one gets to a chapter, it should be a part of the route? There will be problems so deeply understand the codebase and design the version of this that's right for it."*

## What the catch-up found, 2026-09-26

- **A chapter's address is a fragment on its book's page**, `/a-paper/#the-argument`, one page per book, the fragment the slug of the chapter's name — [`catalogue.ts`](../../package/.binding/catalogue/catalogue.ts), the slug the compiler's only one in [`resolution/addresses.ts`](../../package/.binding/resolution/addresses.ts) on Doug's 2026-09-24 word that the framework spells no address. The page's client routes by pathname to a book only, [`main.tsx`](../../package/.binding/application/main.tsx); the fragment is the browser's.
- **The compiler gives a title its whole url** and Title reads it: a fragment is its id, none means it is the page, which is why a cover's title wears no id. So a chapter whose address is a path needs nothing new in Title.
- **A heading has no form in the language**: the scanner reads every `[[ X ]]` as a title form of the file, and the compiler reads no tags. A heading's name reaches the compiler only through notation — and the mention form, `[[[ X ]]]`, already says *"this is named X, here"*, allocates an id, makes a spot the catalogue answers, and refuses a name worn twice or spent by nobody.
- **The Genesis names the relationship**: E7, *"first reference: Heading means its Section"*; E30, *"Heading/Title/Cover are referents that mean each"*.
- **The v1 scheme addressed by position** and never reached above a section; v2 addresses by name.

## Rulings of the brainstorm, verbatim

| on | Doug's words |
|---|---|
| **headings as mentions** | offered the mention form, the language unchanged, and a plain heading slugged by an Identifier utility: *"Approve"* |
| **a heading means itself** | *"Approve but I want this to be optional because there is no catalogue. If the []() syntax comes to the a Heading, perhaps it behaves like a mention and surfaces a reference, other it doesn't, and the associated means and mention can be null. The Title would be a self-reference, and then it would have one, and then the chapter can use that as its mention"* |
| **one slug** | asked whether kebab-casing should live in `.public` for the compiler to import: *"If we do it my way, where the heading only does it if it gets []() syntax, and the title gets a url that it can use as its means... then do we need it? I don't think so"* — so no slug in `.public`, and a plain heading has no id |
| **chapters as routes** | asked whether it is a later sprint's resolution option: *"Now, I want to figure this out. The cover is canonical. It has the title of the book. All others, even if they are to anchors, can we achieve that with Link, or whatever else, so that Chapters are routes? I want it to be easy to have chapters on one page or to be like a spa where one chapter is visible at a time and the table of contents could be more like a navigation"* |

| **a heading is a self-referent** | on section A: *"The Heading is a self-referent because it is also the piece of writing being mentioned. One should have a self-reference on the heading"* |
| **where the mode is declared** | *"We need to design this. Isn't it something we can implement in the Title using Link? And then the compiler can know the urls? It is a local router per book right?"* |
| **static and dynamic** | *"The book is a static page returned by github pages, the chapters are routes on a local spa for the current page. This gives a level of static for knowledge graphs and linking on the internet and a level of dynamism. Can this work?"* |
| **the book decides** | *"I don't understand. I don't understand what the compiler now emits to make this work. The chapters should still be able to be rendered down the page if the book wants to. Or one should appear at a time. The book should decide this, and maybe we invent an annotation that can configure it? Whatever it is, convince me that you can support this"* |

| **one address** | offered a chapter's address as always its route, a page per route, the app handing the book its open address, no mode anywhere: *"Yes one address, but what happens when we want the chapters down the page and the router to just go to it. Can that be an implementation detail?"* |
| **the id is the name's** | offered the mention form given its full url so a Mention reads the fragment as Title does: *"No Title should use the name to crearte the fragment with the Identifier utility. The url should be completely arbitrary. Never recommend that"* — reversing 09-24's *the framework spells no address* and the hour's *"do we need it? I don't think so"*; the later word holds |
| **the layout** | offered Scroll and Codex as the annotation's names: *"I have to think about it, but how does this annotation work? I want to have as many view options as possible. Let's /ce-brainstorm after we complete some of the other work"* |
| **the router** | *"Long distance urls to that which was mentioned also must work. What if that page is hidden at the time of click? Everything needs to go through the router. The chapter might be essential because all mentions are in one"* |

| **headings do as titles do** | on section B, a heading with the pair a self-referent and a plain one neither: *"Let's do like title. If no mention, the copy is slugged using the same utility and that is used as the mention and the id"* |
| **approving the requirements** | A: *"Approve"* · B: the refinement above · C: *"Approve"* · D: *"Approve"* |
| **the plan** | *"for this, it sounds good. Make sure that this is a reasonable usage for a router and that this is a valid way of cross app, cross router communication. Remember that this is meant to support simple and complex use cases"* · on the router: *"I think so but I need you to teach me if that is valid, and what it gains and loses. I don't know a lot about routing"* · on the prop offered as `$open`: *"Well it is the address that would be given to the chapter of it's cover by the compiler right? Would it be the mention of the book? It needs to have a prop that means this? Can you explain to me what this prop represents on a book? open makes no sense. A property isn't an action"* · on the `src` list: *"Yes to all, but I don't like open and I need a bit of teaching on how routers work. I know they enable dynamic links"* |
| **Paginated** | *"$Paginated / <Paginated /> is the attribute that would allow a book to show chapters one at a time, as if in pages"* — the layout annotation of the later brainstorm, named · on the plan: *"D1 what else is a protocol between pages? I mean, can't we use the query string, but I didn't know that there could be more across whole separate apps. We can come up with other things in the future, but I just want to make sure that the urls do, in fact, work across the system for the purpose of indexing etc... And for paginated, I would like there to be a way for the multiple chapters to be visible at once, and then a subset of them be appearing and disappearing, etc... I want there to be a flexible way to navigate, so we need the book writer to be able to design different ways to interact with the router"* |

## Requirements

*Approved 2026-09-26. **The id is the name's and the url is arbitrary:** every writing that is mentioned makes its own id from its name with one utility, the compiler imports that utility so the fragments it writes are the ids the page wears, and a url is only ever an href. **A chapter's address is its route**, and every internal navigation goes through a router. The layout that hides chapters waits for its own brainstorm — Doug: "I want to have as many view options as possible." Each requirement says what would be observed if it held.*

### A. The Identifier, and the id from the name

| | requirement | observed |
|---|---|---|
| **R1** | `Identifier`, a utility of `.public`, slugs a name — kebab-case, an apostrophe dropped, an ampersand *and* — and it is the only slug: the compiler's `resolution/addresses.ts` imports it from `@dna-platform/public` | one function; the compiler's fragments equal the page's ids by construction |
| **R2** | A Title stands its Referent from `Identifier.slug(name)`, never from its url's fragment; its `means` stays the url the compiler gives, whatever it is | a title written `[The Argument](anything)` wears `id="the-argument"`; a cover's title wears its book's slug |
| **R3** | A Mention stands its Referent from `Identifier.slug(name)` likewise | `[[[ The First Shelf ]]]`, compiled to any url, wears `id="the-first-shelf"` |

### B. Headings

| | requirement | observed |
|---|---|---|
| **R4** | A heading written as a mention, `[[[ What is claimed ]]]` or `[[[ What is claimed ]]]( claimed )`, is a self-referent: a Referent from `slug(name)` and a Self reference to the url the compiler gives; the language is unchanged, and the compiler's mention rules — a name worn once in its book, a name somebody spends — apply to it | the heading wears the id, links to itself, and `$[ ./What is claimed ]` from another chapter resolves to it |
| **R5** | A heading written plain does as a title does: its copy slugged with the same utility is its id and its means, a Self reference to that fragment | `<Heading>What is claimed</Heading>` wears `id="what-is-claimed"` and means `#what-is-claimed`; two plain headings of one name on a page are what the proof refuses |
| **R6** | `Section.mention` is its heading's `means` — E7, *"Heading means its Section"* | every section of the test library mentions itself through its heading |

### C. Chapters as routes, and the router

| | requirement | observed |
|---|---|---|
| **R7** | A chapter's address is its route, `/a-paper/the-argument/`, and the cover's is the book's, `/a-paper/`; a mention's url carries its chapter, `/a-paper/the-argument/#what-is-claimed`; the compiler emits these everywhere and the route table names the chapters | the catalogue answers `$[ ./The Argument ]` with the route; every compiled source carries it |
| **R8** | The render writes the book's page once per route, that chapter open; the proof reads every page | every chapter page exists; every link lands on a page and an id worn once |
| **R9** | Every internal navigation goes through the router: a click on any link into this library, and a direct visit, read book, then chapter, then fragment; within the current book the router opens the chapter in place, pushing the address, and lands on the fragment; to another book it loads that page; back and forward the same — *"Everything needs to go through the router. The chapter might be essential because all mentions are in one"* | in Chrome, a long-distance link to a heading in another chapter arrives at the heading with no reload and the address changed; the same address opened directly lands there |
| **R10** | Down the page is the layout for now: a book draws every chapter and the router scrolls to the open one; a layout that hides chapters is the annotation of a later brainstorm, and opening a hidden chapter is the router's then | the book's page scrolls to the routed chapter |

### D. The visible end

The test library bound: every chapter a page; in Chrome, a link from the log to a heading inside the paper's argument followed through the router to that heading, and the same address opened directly landing on it; photographed. *What a hand-written page cannot fake:* rename a chapter and every route and every mention's url follows at the next bind with no edit to any other file.

**Out of scope:** the layout annotation and its view options (Doug's brainstorm); Part; the compiler reading a plain heading, which it cannot.

## <a id="plan"></a>The plan

*Planned 2026-09-26 on Doug's "Make sure that this is a reasonable usage for a router and that this is a valid way of cross app, cross router communication. Remember that this is meant to support simple and complex use cases." One session, five units, no division.*

### Decisions

| | decision | why, and what it was chosen over |
|---|---|---|
| **D1** | **The URL — its path, its query string and its fragment — is the only protocol between pages.** The path names the book and the chapter, the fragment the mention, and the query string is free for what a page should be told without being indexed. Other channels between pages of one origin exist — storage, cookies, `BroadcastChannel`, `postMessage` — and none of them is a link: no crawler follows them and no reader keeps them. For indexing: every route is a file whose markup is drawn whole on the server, every mention a fragment on one, and the proof checks every URL the compiler writes. Every book's page is its own app with a local router; a link to another book is a navigation the browser makes and the target page's router completes on load; a link within the book the router handles in place. No state is shared across pages | this is what makes cross-app and cross-router communication valid: nothing to synchronise, and a link from the internet is the same as a link from a sibling book. Over a site-wide router, which would need one app for the whole library and cannot be served as static pages |
| **D2** | **The router is the app's, and it reaches the book through one reactive prop: the place the reader is at within the book**, always one of the book's own mentions, a chapter's or the cover's — **the bookmark**, `$bookmark`, Doug's word, arrived at from both sides once he struck `open`: *"A property isn't an action"*; *"Call it bookmark - it is a bookmark right? It is the place where the user is (recently was) and it is a record of him being there. Can you make that work?"* — it works: the app writes it on load and on every move within the book, the book reads it, and it stays as long as the page The app finds the route by pathname, renders the book with that bookmark, delegates every click on an internal link at the root, pushes state and renders the book again with the new one; `popstate` is the same path. **Nothing in Reference changes.** A `<Paginated />` book will read the same bookmark to choose its page | over an anchor that knows the router: a click reaching the router through the DOM is what every router does, and a Reference stays a link that works with no script. The book learns the address the way any chemical learns a prop, at one paint |
| **D3** | **Down the page is the book's default, and the router never decides what is visible.** The router keeps the address and the bookmark in step and lands on the fragment once the book has drawn; the book's layout reads the bookmark, and whatever record of places it keeps, and decides what to show — down the page, scrolling to the chapter that mentions the bookmark, by default; a chapter at a time with `<Paginated />`; a window of chapters, or every chapter visited, as a writer designs. Navigation is designed by writing links, since every link goes through the router | R10, and Doug: *"I want there to be a flexible way to navigate, so we need the book writer to be able to design different ways to interact with the router"* — the seam is thin so the layouts can be many; the brainstorm designs them on it |
| **D4** | **A chapter's route is `/book/chapter/`, the cover's the book's; an anchor is addressed on the page of the file it stands in**, the cover's on the book's — so the structure gives an anchor its own chapter beside the spot that speaks for it | `speaks` attributes the apparatus's edges to the book and must stay; an address is the file's. Over addressing every anchor on the book's page, which routes make wrong |
| **D5** | **The render draws the book once per route with that route's address open**, the assembled book function taking the address; the proof reads every page as it does now | R8; hydration holds because the client computes the same address from the pathname |
| **D6** | **`Identifier` holds the slug and nothing else yet**, and the compiler's `addresses.ts` imports it from `@dna-platform/public` | R1; one function in the one place the runtime can also reach |
| **D7** | **A plain heading means `#slug`, a Self reference**, and a marked heading means the compiler's url; both stand a Referent from `slug(name)` | Doug: *"Let's do like title. If no mention, the copy is slugged using the same utility and that is used as the mention and the id"* |
| <a id="d8"></a>**D8** | **`src` changes, for Doug's yes:** `utilities/Identifier.ts`, new · `library/Title.tsx` (the Referent from the name) · `writing/Mention.tsx` (the same) · `writing/Heading.tsx` (`name`, `means`, its Referent and Self) · `writing/Section.tsx` (`mention`) · `library/Book.tsx` (`$open` and the scroll) | the standing rule |

### Units

**<a id="u1"></a>U1 — the Identifier, and the id from the name (R1–R3).** *What runs:* `Identifier.slug` at a Title's and a Mention's `$Define`; the compiler's slug becomes an import. *Files:* `src/utilities/Identifier.ts` and the utilities index; `src/library/Title.tsx`, `src/writing/Mention.tsx`; `.binding/resolution/addresses.ts`; `.tests/chapter.test.tsx`, `.tests/reference.test.tsx` or the mention's; docs: the utilities book, [Chapter and Title](../library/02-chapter-and-title.md), the writing book's mention chapter. *Scenarios:* a title written `[The Argument](anything)` wears `id="the-argument"` and means `anything`; a cover's title wears its book's slug; a mention wears its name's slug whatever its url; `Doug's Library` slugs to `dougs-library` and `Claude & Our Projects` to `claude-and-our-projects`, in the package's promise and the compiler's alike; the compiler's suites unchanged in number. *Seen:* nothing new.

**<a id="u2"></a>U2 — headings do as titles do (R4–R6).** *What runs:* a Heading's `$Define` reads the compiled pair or its copy, stands a Referent from the slug and a Self reference to the url or `#slug`; `Section.mention`. *Files:* `src/writing/Heading.tsx`, `src/writing/Section.tsx`; `.tests/section.test.tsx`; the test library's argument, its "What is claimed" marked, and the log's entries referring to it, `$[ A Paper / What is claimed ]`; the transform's promises; docs: the writing book's section chapter, [Books in Annotations](../library/01-books-in-annotations.md)'s channels row. *Scenarios:* a marked heading wears its id, links to the compiler's url, and its section mentions it; a plain heading wears its copy's slug and means `#` and it; a heading built alone is the same, since nothing here needs the book; the compiler resolves the reference to the section and refuses a second heading of that name in the book; two plain headings of one name on one page are refused by the proof. *Seen:* the argument's heading a link to itself on the bound page.

**<a id="u3"></a>U3 — chapters as routes in the compiler (R7).** *What runs:* the catalogue answers routes; the route table names chapters; anchors are addressed on their file's page. *Files:* `.binding/resolution/addresses.ts`, `.binding/catalogue/catalogue.ts`, `.binding/catalogue/structure.ts` (an anchor's chapter), `.binding/assembly/routes.ts`; their promises, every `/a-paper/#the-argument` in them becoming `/a-paper/the-argument/`; docs: [the binder](../the-catalogue-and-the-specification/07-the-binder.md), [the language](../the-catalogue-and-the-specification/06-the-language.md)'s account of what it compiles into. *Scenarios:* `$[ ./The Argument ]` compiles to `/a-paper/the-argument/`; `$[ A Paper ]` to `/a-paper/`; a mention in the argument to `/a-paper/the-argument/#what-is-claimed` and one in the synopsis to `/a-paper/synopsis/#…`; the route table holds every chapter with its book; the regression's page reads follow. *Seen:* the addresses in the bound pages.

**<a id="u4"></a>U4 — a page per route, the open address, down the page (R8, R10).** *What runs:* the assembled book takes the address; the render draws the book once per route; `$Book` holds `$open` and scrolls the mentioned chapter into view after mount and on change. *Files:* `.binding/assembly/book.ts`, `.binding/rendering/draw.ts`, `rendering.ts`; `src/library/Book.tsx`; `.tests/book.test.tsx`, `.tests/renders.test.tsx`; the regression; docs: [Book](../library/05-book.md), the binder. *Scenarios:* every chapter of the test library has a page and the proof passes over all of them; a book given an open address answers it and, mounted, the chapter mentioning it is scrolled to — measured in the package's harness with the chapter's element; the open address changed costs one paint; a book given none does nothing; the render's time at 25 books stated. *Seen:* the chapter pages.

**<a id="u5"></a>U5 — the router (R9), and the visible end.** *What runs:* the app, on load and on every internal navigation. *Files:* `.binding/application/main.tsx`; the regression's browser block; docs: the binder. *Scenarios:* a direct visit to `/a-paper/the-argument/#what-is-claimed` lands on the heading; on the log's page, the link to it navigates to the paper's page and lands on the heading; on the paper's page, a table entry switches the address without a reload and scrolls to the chapter, and back returns; a link to another book loads that book's page. *Seen:* photographed in Chrome, the argument's heading in view after the long-distance link.

### Risks

| risk | what mitigates it |
|---|---|
| a hydration mismatch between the server's open address and the client's | both derive it from the route table by pathname, and the regression's hydration promise reads the console |
| the render's cost grows with chapters — 25 books, 4 chapters each, ~100 pages | one server since Sprint 84; measured and stated at U4; if it is a problem, it is a number for Doug |
| scrolling during a server render, where no element exists | the scroll waits for mount and only on the client |
| an anchor in the apparatus addressed on the book's page where it once was | U3's scenario names the synopsis case |
| `Identifier` imported by the compiler from `dist` a stale build | the compiler's suites build first, as the package's do |

### Where each requirement lands

R1–R3 → [U1](#u1) · R4–R6 → [U2](#u2) · R7 → [U3](#u3) · R8, R10 → [U4](#u4) · R9 → [U5](#u5).

**Order:** U1, U2, U3, U4, U5 — each the next one's ground. **The plan against itself:** every requirement lands, every unit has a mechanism and a visible end, and D2 carries the argument Doug asked for: the URL between pages, the prop within one.

## Where things stand

**Next: `/ce-work` on this chapter, starting at U1.** Nothing is built; `src` has Doug's yes for the six files of [D8](#d8), and the prop is the bookmark.

**Read these first, for the work:** [the plan](#plan); [`addresses.ts`](../../package/.binding/resolution/addresses.ts), for the slug that moves and the route table that grows; [`catalogue.ts`](../../package/.binding/catalogue/catalogue.ts) and [`structure.ts`](../../package/.binding/catalogue/structure.ts), for how a spot becomes an address; [`main.tsx`](../../package/.binding/application/main.tsx), where the router goes; [`Title.tsx`](../../package/src/library/Title.tsx) and [`Mention.tsx`](../../package/src/writing/Mention.tsx), the comparables for Heading.

**Standing:** every change in `src` has Doug's word before it is made; commit locally and never push the project until he says; the branch library pushes itself.
