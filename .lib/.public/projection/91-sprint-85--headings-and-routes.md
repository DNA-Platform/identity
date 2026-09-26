# Sprint 85: Headings and Routes

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** requirements-only — brainstormed 2026-09-26, ten requirements approved; the layout annotation deferred to its own brainstorm
- ***The sprint's name is a PROXY, the room's; Doug's to rename.***

---

## Where this sprint comes from

**Doug opened it at the close of [Sprint 84](90-sprint-84--means-and-the-table.md), asked whether a Mention should mean itself:** *"No, a mention doesn't have a Reference. Here's the interest and it might help you with section and heading - title and section should both support creating ids for themselves, supporting ()[] syntax, and if [] is specified, it should use that... I don't think we have implemented this yet. The title of the section would mean itself, but the section would have that as a mention because the title represents the section. We need to get this working and make sure the compiler is consistent with it."*

**And then:** *"Well how do we handle this now for titles? For a section header, it can just support []() and be like a mention, putting an id there it gets one, otherwise, kebab-case the heading, and we can make an Identifier utility to store those operations. But how do we do this with chapters? What does the compiler give? What if I wanted chapters to be a part of the route, whatever it is they do. Maybe the chapter uses whatever is in [](here) and if it's the url, then that can be its id? Not sure it works like that. So how are we handling chapters now. How do we handle, in the compiler, the idea that however one gets to a chapter, it should be a part of the route? There will be problems so deeply understand the codebase and design the version of this that's right for it."*

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

## Where things stand

**Next: `/ce-plan` on this chapter.** Requirements approved; nothing built. *Status: requirements-only.*
