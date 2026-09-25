# Specifying a Library

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Where a claim about a library belongs, and how it is raised.*** The settled account of what [Sprint 72](../projection/78-sprint-72--the-compilation-audit.md) built after Doug named an abuse: *"Seems like a bit of an abuse. Why aren't you doing something in more of a testing framework? Wouldn't that plug into the compiler better and more natively?"*

## <a id="the-line"></a>The line: one writing, or more than one

> ***Doug, 2026-09-15:*** **"we put as much in the specification that we can, and things that are outside of it, like book to book interactions live at that level"**

**Everything a single piece of writing can check about itself belongs to the framework's specification, on its kind.** *Every book has a subject. A cover carries its title. The table of contents catalogues all the chapters. A chapter writes its document in print.* Each of those is one writing looking at what it holds, so each is a `@specify` method on that kind's specification — it runs at compile, is off in production, and [descends through what was written](../projection/77-sprint-71--compilation.md) without anything asking for it.

**Only what needs MORE THAN ONE BOOK belongs at the library level.** *No two books are named the same. Every subject names a book that exists. Every author resolves. A reference from one book reaches another.* No single writing can answer those, because no writing holds the library.

***The test to apply, and it is one question: can one book answer this by looking at itself?*** **If yes, it is a rule on a kind and it is owed to the framework.** *A library-level rule about one book is a rule in the wrong room, and the fix is to move it down, not to keep it.* **If no, it is a claim about what the binder read across books, and it lives in the binding's suite.**

## <a id="the-framework"></a>What the framework does — a writing specifies itself

**The framework's `Specification` is for writing.** A rule is a `@specify` method that takes the writing and `$check`s something about it; the rules of a kind are collected through the prototype chain and through its parent's; a kind departs from its parent by overriding a rule and returning `false`. A piece of writing specifies its parts, so one `specify()` on a book reaches everything an author wrote into it.

***That machinery is for a writing and nothing else.*** **A library is not a piece of writing** — there is no `$Library` kind, and [Sprint 70's pitch of one](../projection/76-sprint-70--the-binding.md#u6) was never taken. *Sprint 72 first borrowed `Specification` for the library anyway, over a plain record, and had to join every failure into one string, throw it, catch it and split the message back apart to recover which book each belonged to.* **Encoding structure in a message and parsing it back out is the tell that a mechanism is being used for something it is not for.** It was struck the day it was written.

## <a id="the-suite"></a>What the suite does — a library is checked

**The library's rules are tests, in `.binding/specification/`, and the build runs them.** *Doug: "There should be a place in binding that calls specify. I was thinking that would be something like vitest… Ideally it lives in .binding/specification because you are specifying what it means to be a library."*

`vitest` is a dependency of every binding already and hands back **every test by name with its state, its message and where it stands**, so nothing is parsed. [`specification/running.ts`](../../package/.binding/specification/running.ts) starts it in-process, walks the results, and answers a list of diagnostics; the `specify` task raises them.

**One definition, two entry points.** `npm test` in a binding runs the same file the build runs, so a rule cannot be green in one place and absent in the other.

**A test says which book it is about in its own metadata** — `task.meta.book` — declared as a typed seam where it is read. The build lands that test's failure on that book's first file, its cover where it has one. *Nothing is read out of a message.*

**A library adds a rule by adding a test.** No class to extend, no registration. That is the whole extension story, and it is why the framework was the wrong home: a consumer's library is not going to subclass a specification, but everyone can write a test.

## <a id="the-metadata"></a>What the build knows about every book

> ***Doug:*** **"as we enumerate all the folders with books in the library, we probably want to be able to get out lots of metadata about them in a scalable way. Maybe there is a file we generate on build where we pull out data that helps us generate things."**

**That file is [`.binding/.graph.json`](../../package/.binding/manifest/graph.ts), written by the `specify` task and read by everything after it and by the next build.** Per book: its folder, what was read off the running book, a digest of what it is made of, and how many writings its specification reached.

**What is read off a book is a member, not a list.** [`specification/reading.ts`](../../package/.binding/specification/reading.ts) holds one member per fact — name, title, author, subject — gathered through the prototype chain, and each reaches through the framework's `reflection` **by type and never by class**, because a library writes its own cover and its own title and both must still answer. ***Another fact about every book costs one member and no second pass, because the book is already loaded.***

**And the loading is what costs.** A process costs 2.0–3.1s before it reads anything, and the first book pays the package's load; the rest are a fraction. So books are read a **batch** at a time — `specification.batch` in `.pubconfig` — and a book whose digest still holds is not read again. *A pass that DRAWS keeps one process per page, because a book registers its theme on the shared class when its module loads; a pass that only READS draws nothing and may share.*

## <a id="the-door"></a>The one door into the books

**`application/books.ts` is the import of all the books**, written at assemble and keyed by **folder** — which is what a book has before anything has read it. Everything reaches a book through it: the specification that reads them, the prerender that draws them, the browser.

**`application/routes.ts` is the addressing**, written at resolve and keyed by **name** — which a running book answers, so it cannot exist any earlier. Each route reaches its book through the one door.

***They are two jobs, not two indexes.*** *Sprint 72 collapsed them once and immediately had to reach around the result, loading books by path in the one pass that ran before the addressing existed.*

## <a id="raising"></a>How an error is raised

> ***Doug:*** **"we should have a nice way of raising errors. I like plugging into vscode exceptions possibly. That would be very cool, because a build should be failing so we should get feedback like that."**

**Every failure the binder raises is written in the compiler's own line shape:**

```
<file>(1,1): error SPEC: <folder> — <what did not hold>
```

*Which is what an editor's problem matcher reads.* The binding's [VS Code tasks](../../../../.vscode/tasks.json) already declare that pattern, so **a book that does not specify, or a library that does not hold, is a red line under the file it came from — the way a type error is** — and the build fails.

**A real one, from the day it was built:** two books titled *Alan Turing*, one planted two folders down under a dotted folder, each landing on its own cover:

```
…\.wiki\.drafts\turing\.cover.tsx(1,1): error SPEC: .drafts/turing — specification/library.test.ts ›
  the library › .drafts/turing › is the only book of its name — named "alan-turing", which another
  book already is: expected [ 'turing (titled "Alan Turing")' ] to deeply equal []
```

## <a id="thousand"></a>A thousand books — where this falls over

> ***Doug, 2026-09-15:*** **"Where would this fall over if there were 1000 books? There will be."** *And:* **"Whole accounts of AI conversations are entering the library so it will be hefty."**

***So the library grows in two directions at once — more books, and heavier ones — and the heavy direction is the one that breaks first.*** **Measured 2026-09-15 on the wiki:** a process costs **2.0–3.1s before it reads anything** (vite 0.7s, its server 0.3s, happy-dom 2.2s); the first book pays the package's own load (turing 6.7s), each one after a fraction (1.5s, then 0.5s); and the heap after three books is **425 MB, turing alone about 140 MB** — *held for the life of the process, because chemistry files every chemical it makes in a map that only a `destroy` clears and nothing here destroys.*

### <a id="wall"></a>The wall is memory, and it arrives before the clock does

**At ~140 MB a heavy book, a process reading sixteen holds two gigabytes** — past node's default heap — and an account of a conversation is heavier than an encyclopedia article. ***So `batch` is not a tuning knob, it is what keeps the build alive, and for a library of heavy books it must be SMALL rather than large.*** *The lever that would remove the wall is chemistry's: a reading pass releases what it has read, or the registry holds weakly. Presented, not built — it is a chemistry change and Doug's to rule.*

### <a id="clock"></a>Where the clock goes, and the two things not built

| | at a thousand | why |
|---|---|---|
| **the render** | **~52 minutes of boot alone** | one process per page, 3.1s each, before a word is drawn |
| **the read, cold** | ~20 minutes | 63 processes at batch 16, strictly one after another |
| **the read, steady** | **~9 seconds** | one book changed is one process; the digest carries the rest |

***Two fixes are owed and neither is built.*** **Processes run one at a time** — `spawnSync` in a loop — *so the whole read is serial on a machine with eight cores; a pool would cut the cold build by most of that factor, and it is the largest lever left after the cache.* **And the render redraws every page every build**, though the manifest and the graph together already know which books changed — *a page whose book's digest still holds, and whose `.pubconfig` has not moved, does not need drawing again.*

### <a id="fixed"></a>What was fixed here, because a thousand makes it a million

***Six loops searched a list inside another loop, which is a million comparisons at a thousand books, and one of them read a file each time.***

- **the digest read every `.book.tsx` in the library, per book** — a million file reads — now hashed **once** and handed in, because any book may be the base another extends.
- **what is stale**, **what is carried out of scope**, **the route table**, **the child's lookup by folder** — each a list search inside a loop, each now a `Set` or a `Map`.
- **the uniqueness test asked every book about every book** — now one grouping pass, and each book asks about its own name alone.
- **the assembly rewrote every module every build** — now written only when it changed, because the module is an input to the digest that keeps a book from being read again.

***What stays linear and is fine:*** the walk, the graph file (about 300 bytes a book — 300 KB at a thousand), the manifest, and the removal.

## <a id="owed"></a>What is owed to the framework

***Written here so the library level does not quietly grow rules that belong one floor down.*** Each of these is one book looking at itself, so each is a rule on a kind in the package — **and a package change is Doug's to approve before a line:**

- **every book has a subject** — and an author, and a title that means the book; the cover's specification demands the three today, and the BOOK's does not demand a cover.
- **the table of contents catalogues all chapters** — the contents names every chapter the book holds, and names nothing else. *Ruled otherwise 2026-09-25: the compiler enforces it, since it follows from what the compiler gives — "The compiler should enforce as much as possible based on what it gives… We don't move things out of the programming language because we can catch them in unit tests" — [the compiler's implementation guide](../the-catalogue-and-the-specification/07-the-binder.md#guide).*
- **a book's name is not empty** — currently a library test, and it is about one book; it belongs on the book.

*The library level keeps only what needs more than one: names unique across books, and — when a cover's author and subject hold references rather than text — that each resolves to a book the library has.*

*Written 2026-09-15 out of [Sprint 72](../projection/78-sprint-72--the-compilation-audit.md); the sprint chapter is the trail.*
