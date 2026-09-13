# Sprint 67 — The Flow the Book Holds

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `implementation-ready`, **AND HALTED** — *brainstormed and planned 2026-09-13, absorbing [Sprint 65's U5](71-sprint-65--the-encyclopedia-finished.md#u5), the flow across chapters, which Doug designed twice and which is unbuilt.* ***Doug: "HALT when brainstorm and /ce-plan is done so we can assess." `/ce-work` does not run until he says so.***
- ***The chapter name is a proxy; Doug's to rename.***

---

## <a id="where"></a>Where things stand — ***2026-09-13, built and HALTED for Doug's assessment***

**Next action: Doug's.** He asked for the implementation and for a halt on it: *"Halt when done with the task and report success or failure. Success is finding the correct, elegant implementation or not implementing and bubbling up the problem because the design didn't work. Failure is working around the problem and messing up the code."*

**Built, at `aa4bbff` and `446421a`, local, nothing pushed.** [U1](#u1) and [U2](#u2) whole; [U3](#u3) and [U4](#u4) **deliberately not built** — see the finding below; [U5](#u5)'s gates run except the wiki gate, which stays off by Doug's standing order until the cleanup.

- **`$Encyclopedia`** ([`src/encyclopedia/Encyclopedia.tsx`](../../package/src/encyclopedia/Encyclopedia.tsx)) — a book over `$Book`, subclassing nothing else. **The view puts the chapters in their groups and hands each group to the template method that draws that part**, exactly as `header()` and `footer()` are drawn. `body(held)` is that member for the body. *Doug: "Why isn't this the same as header and footer. I want to hear: the chapters are put in the right groups in view. There is a template method for each of the parts in Encyclopedia. The chapters go where put." **The first build inlined the body's drawing, which is what made it unlike the other two; that is corrected.***
- ***The DOM now reads as the layout:*** `header · cover · synopsis · contents · **body** · footer` — one body, each apparatus its own chapter standing outside it.
- **`$Article`** ([`src/encyclopedia/Article.tsx`](../../package/src/encyclopedia/Article.tsx)) — a chapter kind saying a chapter is a logical part of the article rather than apparatus. ***Name a proxy.***
- **The theme places the body, not each document.** The `:not(.pd-cover):not(.pd-table-of-contents):not(.pd-chapter):not(.pd-footer)` roster is **gone** — the missing concept it was naming is the body.
- **The wiki's books are encyclopedias** and their body chapters carry the type; **the reader writes it too**, so a re-read does not undo it.

**Verification, in numbers.** Suite **101 of 101**, 11 files. `tsc` **0** in the package. `npm run clean` **0 files cleaned**. `verify:latex` **green on both readings** — 82,582 chars, 66 rows landing 66, 43 citations landing 43, 0 KaTeX errors, 0 panels. The three wiki pages on a fresh load: **0 page errors, 0 refusal panels, 0 blue anchors**, exactly one cover, synopsis, table of contents and footer document each, 23 and 31 contents links; the title block, contents column, rail and footer at the same rectangles as before. The portal unchanged. ***Not run: the wiki gate at its nineteen widths, by Doug's order.***

**The promise, proven rather than claimed.** A probe line put into the document **after** the one holding the manual: its box is the full 728 and its **first line is 374 wide, ending at x638 against the float's left edge at 682**, with lines beneath the float running 676 again. *Installed and removed in the same run.* **Before this, at [U1](#u1), every prose document was its own grid item — `gridColumn: 2`, x264 w728 each — so no float could do that at all. Red by construction, green by measurement.**

### <a id="u3done"></a>[U3](#u3) IS DONE — ***the manual is a chapter***

***Doug: "What are they then if not chapters?"*** **The manual was a `$Document` written inside the lead's document, and the infobox is an `$Aside` — a section — written the same way. Neither is part of the lead's prose.** *The manual is a navigation box for a whole subject area; by the anchor, it is a logical part of the page and therefore a chapter.* **It left the lead for a chapter of its own carrying `$Article`, the reader writes it that way, and the Encyclopedia's body puts it first.**

***And that is what finally exercised the flow across chapters.*** **A probe line in the LEAD — a different chapter, a different document — measures 374 wide, stopping at x638 against the manual's edge at 682, and 676 beneath it.** *Before, the manual and the prose it wrapped were the same document and nothing crossed.*

**[U4](#u4), the infobox, is NOT done, and the reason is a kind and not a preference.** `$Infobox → $Box → $Aside` **says by its TYPE that it is a section.** Making it a chapter's document means `$TypeOfInfobox` stops descending from `$TypeOfSection`, which reaches `$Box`, `$Navbox` and the aside chain. ***And [`Aside.tsx`](../../package/src/writing/Aside.tsx) already argues the deeper answer against itself, written 2026-09-08:*** *"THIS KIND IS GREEN… a level the framework already has, mixed with WHERE IT IS DRAWN — a dimension the framework never named… `parenthetical` is a BOOLEAN saying not drawn HERE without saying where instead; `$Book` PLACES its cover, contents, index and footer by hand; and a format wraps a drawing to move it. One idea, three mechanisms, none of them named."* **This sprint named one of the three — the book's layout and a chapter type. Dissolving the placement half out of `$Aside`, `$Note`, `$Hatnote` and `$Footnote` is the design that finishes it, and it is bigger than this sprint and Doug's to call.**

### <a id="finding"></a>THE FINDING THAT STOPPED [U4](#u4)

***Once the body exists, a box does not have to move for the layout to work*** — they float where they are written and the prose that follows wraps beside them, because the body is the one formatting context. **So making them chapters was never a layout question. It is a book-design question**, which is Doug's: *"Book design and chapter semantic structure is the essence of this. They matter most."* ***He ruled it the same hour** — "What are they then if not chapters?" — and the manual moved. The infobox waits on the kind question above, not on the layout.*

### <a id="bubbled"></a>What I am bubbling up about my own code, before anyone finds it

1. ***The body is a hand-written `<div className="pd-body">`.*** `header()` and `footer()` set the precedent for a book writing an element, but every other box on the page is a kind. **If the body should be a kind, it should be said now.**
2. ***`$(chapter)` draws each held chapter*** through its own lifted component, where `$Writing.print()` draws a block. Measured working on three pages with no key warnings; it is still a second path to the same thing.
3. ***`$Article` is a proxy and it collides in the ear*** with the demo's own `$Article` book class in `.wiki/.article/.book.tsx`.
4. ***Only the body has a template method.*** The cover, the synopsis, the table of contents and the footer stand where they were written rather than in members of their own — **giving each its own would need apparatus CHAPTER types**, which the framework does not have, and that is a ruling rather than a repair.
*(The first two entries here — two arrays and a closure inside `print()` — are gone: the walk now puts each chapter in its group and the body draws itself in its own member.)*

**Wrong turns this session, so they are not retaken:** believing a served page before rebinding it — the mirror held the reverted one-document build and its orphans, and the first measurement was of the reverted shape ([Solutions 72](../solutions/72-the-mirror-with-two-directions.md) again, third time); and measuring element boxes instead of line boxes, which reads a float as working when nothing long enough is standing beside it.

**Compounded 2026-09-13:** the defect is [Solutions 78 — The Float That Could Not Leave Its Column](../solutions/78-the-float-that-could-not-leave-its-column.md), indexed by the symptom; how a consumer writes against what this sprint built is [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md); the anchor it stands on is [The Coding Style's third anchor](../the-coding-style/03-the-coding-style.md#book-and-chapter) and [What We Believe P29.5](../the-type-system/05-what-we-believe.md#the-drawing).

**How to see it:** `sh serve.sh` at the package root; `http://localhost:5311/article`, `/turing`, `/`.

## <a id="brief"></a>The brief, in Doug's words, in the order he gave them

***The design arrived by simplification, and the order matters more than any single sentence: every correction he made REMOVED machinery this session had proposed.***

> **"We need to get this manual in there without writing a framework. A top-level flow concept would be controlled by the book. It can be a section. The book can enumerate documents and sections — it has references for them through chapter meaning, find the manual, which can be a component name in slash encyclopedia, and the encyclopedia can specifically manage a section like that. It looks like a regularly declared section that is lifted and placed elsewhere."**

> *On being told a manual written inside a chapter's `print()` does not exist when the book draws:* **"The section could be parenthetical and the book finds it later right? Can't a book have an async bond constructor that manages something somewhere, or send an async task which gets this when it's loaded? We have events that wait for different times…"** · **"Somewhere the book manages what goes inside. Somehow these things can be a type of element that can start parenthetical so it doesn't print and then be found so it can be placed. Why is this impossible. It is just finding and moving a component."** · **"Yes fine so have them be found and appear. The book is structurally a flat list and the book needs to find them."**

> *On what the thing is:* **"Whichever is right for this spot. A whole document and type of document for the component is fine if that is most elegant."** · **"One concept serving both. Make a base type and have the book find both."**

> *On the book:* **"There should be an $Encyclopedia book. It can be a subclass of $Article, but it should be its own."** · **"You said there was an article. Make an encyclopedia book. Don't subclass anything that isn't necessary. Make types of documents and have the book coordinate between them. Is this a document type that encyclopedia knows to find and place in a certain spot? That has not artifact which is why is starts as parenthetical? That you will make render initially elegant or simply keep the whole article invisible until this renders?"**

> ***The two that dissolved the sprint:*** **"I think you should be able to make chapters and just render them in the right format in Encyclopedia."** · **"Why do we need a floating document at all."**

> *On how the book does it:* **"The book has layout code. Just add a new section like header and footer and find a chapter type that gets put there in order. That is the standard method for handling things like this."** · **"Do we even need print hiding?"** · ***and the one that settled the shape:*** **"You should have different types. Just enumerate them in view! Stop caching things. Use types. Find them when drawing. Why are you ALWAYS caching things? We have them in memory. We have the block. We have chapter properties to enumerate. If you want anything it's a get only property. STOP CACHING!!"**

> ***On what the last team was actually fired for:*** **"The other team got fired because it dissolved the synopsis and table of contents rather than learn to do this right. Don't get fired."**

> ***The standing order given while it ran:*** **"You have the framework. It is meant to be used a certain way. Use it correctly. If the code looks bad, bubble up to me. Don't hack the framework and act like you have won something. You will get fired too and you will be very sorry to me."** · **"I expect you to act like you don't want to be fired and I expect you to be very sorry and clean up to the next team if you do. I want you to behave with excellent work like you have something to lose if you fail."**

## <a id="what-was-read"></a>What the code says, read before the requirements

- <a id="grid"></a>**Every prose document is its own grid item, and that is why a float cannot reach the next one.** [`$EncyclopediaTheme`](../../package/src/encyclopedia/Theme.tsx) makes `main` a `display: grid` with `gridAutoRows: min-content`; `> .pd-book` and `.pd-book > .pd-chapter` are `display: contents`; and one rule puts **each document** in the text column — `.pd-book > .pd-chapter > .pd-document:not(…), … .pd-synopsis, … .pd-index` → `gridColumn: '2'`. A grid item establishes an independent formatting context, so a float declared in one document cannot shorten a line box in another, **whatever the nesting and whenever it is found**. ***State: READ IN THE SOURCE, NOT DRIVEN. [U1](#u1) measures it first; if it is wrong the sprint halts and is re-brainstormed.***
- **This is what the reverted work was buying.** `76e9930` had the reader write every run of prose as ONE document — which made one grid item, so the float worked. The data was bent to buy a formatting context. Reverted at `a35c7f9`; the account is [The Cover Is a Cover](../the-type-system/08-the-cover-is-a-cover.md).
- **The formats already float.** `$ManualFormat` declares `float: 'right'` and `$InfoboxFormat` declares `float: 'right'`, each with the narrow-width `float: none` beside it. **Nothing about the floating needs building.**
- **A book already holds its chapters before it draws.** `$Book.chapters` reads `parts()`, and `$Book`'s own bond already walks them to give each its mention. **A chapter is in the book's block at bond time — which is why, once the manual is a chapter, there is nothing to find later.**
- **A chapter writes its document in `print()`**, which runs after the book draws — the fact that made every earlier shape in this brainstorm need a mount phase, and that the chapter reading removes.
- **`$Infobox` is an aside today** — `$Infobox → $Box → $Aside` — while `$Manual` is a document.
- **`$lift` is chemistry's own name** for turning a class into a component ([`particle.ts`](../../../chemistry/package/src/abstraction/particle.ts)). **The word is taken; this sprint does not use it for anything.**
- **`next(phase)` is real** — `setup · mount · render · layout · effect · unmount`, plus `construction` and `formation`, each a promise ([`particle.ts`](../../../chemistry/package/src/abstraction/particle.ts)). **It is not needed here, and that is the finding: the timing problem was made by where the manual was declared, not by the framework.**

## <a id="what-was-cut"></a>What this brainstorm proposed and Doug cut

***Recorded because the cuts are the design, and because each was machinery built around an absence rather than the absence being questioned.***

| proposed | cut by | why it existed |
|---|---|---|
| *a section declared in a chapter's block, the chapter's "holds only annotations" rule bending to admit it* | **"I think you should be able to make chapters"** | the manual was assumed to live inside another chapter |
| *keeping it on the book's scratchpad the way a fold keeps a citation* | same | a registry, to reach past the same assumption |
| *the book awaiting `mount`, finding it, and placing it* | same | a timing repair for a declaration problem |
| *the whole article held invisible until the placement landed* | same | a cost paid to hide the repair |
| *a base DOCUMENT type both carry, so the book can find both* | **"Why do we need a floating document at all"** | it existed to be FOUND. ***It came back as something else:*** [D6](#d6)'s base **CHAPTER** type, which names the PLACE a chapter belongs in rather than marking a thing to hunt for |
| *the word **floating** in the model* | same | a kind named after a CSS behaviour — the format's business, never the library's |

## <a id="requirements"></a>Requirements

| | |
|---|---|
| <a id="r1"></a>**R1** | ***The manual and the infobox are chapters.*** Each is its own chapter file writing its own document, standing beside the lead rather than inside it. *Observed:* `.wiki/.article` and `.wiki/turing` each gain a chapter file; the lead's `print()` holds only its hatnote, its illustration and its prose, and the page reads the same. |
| <a id="r2"></a>**R2** | ***`$Encyclopedia` is a book in the package, over `$Book`, subclassing nothing else.*** It renders its chapters into one flow, in `print()` — [the one method a kind overrides](../the-type-system/05-what-we-believe.md#the-drawing). The demo's book extends it and carries only what is the demo's. *Observed:* `.wiki/.article/.book.tsx` names `$Encyclopedia` and holds nothing about placement. |
| <a id="r3"></a>**R3** | ***The flow is one box the drawing writes, and the theme places that box.*** The text column holds it, not each document in turn. *Observed:* one element stands between the chapter and the documents, and the column is named **once** instead of by a roster of documents and their exceptions. |
| <a id="r4"></a>**R4** | ***The right format does the placing, and the model never says floating.*** A chapter stands beside the prose because its document's format says so. *Observed:* `$ManualFormat` and `$InfoboxFormat` are unchanged by this sprint; no member anywhere in `src` names a manual or an infobox; the word *floating* appears in no class, type or specification. |
| <a id="r5"></a>**R5** | ***The prose flows beside it.*** On `/article` the section after the manual wraps beside it; on `/turing` *Early life and education* wraps beside the infobox. *Observed:* at 1280 the next document's first line box is shortened by the float's width, measured; below 1120, where the formats already say `float: none`, it is full width. |
| <a id="r6"></a>**R6** | ***Nothing else moves.*** `verify:latex` green on both readings; the portal as before; the Turing title block, contents column and rail unchanged. **The grid is what is being edited, so it is what will break.** |
| <a id="r7"></a>**R7** | ***THE APPARATUS IS NOT DISSOLVED — the one this sprint is most able to get wrong.*** ***Doug, 2026-09-13: "The other team got fired because it dissolved the synopsis and table of contents rather than learn to do this right. Don't get fired."*** The cover, the synopsis and the table of contents stay their own chapters writing their own documents, each drawn in its own place. **Each is placed because of the type it carries, never because it was left over — [D1](#d1) — and nothing about this sprint merges, inlines or rebuilds them.** *Observed:* on both pages the synopsis and the table of contents are each ONE document of their own kind in the DOM, with their own class, outside the flow's box — counted, not eyeballed — and the contents still lists the chapters it listed before, row for row. |

**Out of scope, by ruling:** the theme and format split ([Sprint 66](72-sprint-66--themes-and-formats.md)); the eleven stylistic items and the contents bug filed 2026-09-13 ([Sprint 65 U6](71-sprint-65--the-encyclopedia-finished.md#u6)); the typing of cover, synopsis and contents, which is Sprint 66's first unit.

## <a id="actors"></a>Actors and flows

- **A1** a reader of `/article` and `/turing`, who sees prose beside the box and prose at full width beneath it. **A2** an author of a page, who writes a chapter per thing and never arranges anything. **A3** an author of a book, who gets the flow by extending `$Encyclopedia`.
- **F1** the author files a chapter → the book holds it in its block at bond → `$Encyclopedia.print()` renders its chapters into the flow → the manual's format floats it → the following documents' line boxes shorten beside it.
- **F2** the theme places the flow in the text column; the chrome — strip, title, tabs, contents, rail, footer — is placed as it is today.

## <a id="acceptance-examples"></a>Acceptance examples

- <a id="ae1"></a>**AE1** ***the one that cannot be faked:*** a **new** chapter, declared only in the demo, carrying a format that floats, stands beside the prose **without `$Encyclopedia` being told it exists**. *A hand-authored page can fake a float; it cannot accept a kind the framework has never heard of.*
- **AE2** at 1280 the first line box of the document after the manual is shortened by the float's width, and at 1119 it is full width — measured on both pages, not eyeballed.
- **AE3** both pages open with zero errors and zero refusal panels, and the performance probe's chemical count is within one chapter of today's.
- **AE4** `grep` finds no *manual*, *infobox* or *floating* in `src` outside `src/encyclopedia`'s own two files.
- **AE5** `verify:latex` green on both readings; the portal and the Turing title block, contents and rail unchanged at the pinned widths.

## <a id="risks"></a>Risks

- **The grid reading is wrong** and the floats fail for another reason. *[U1](#u1) measures before anything is built; on red the sprint halts and is re-brainstormed rather than repaired.*
- **The flow box changes the frame.** The contents column and the rail are placed by grid line and span; a new element in the text column can move them. *Measured against the baseline at `e89f5f0`.*
- **A chapter is `display: contents` today**, so introducing a box that is NOT contents is exactly the change; anything relying on documents being grid items moves with it.
- **The manual as a chapter changes the contents column**, which lists chapters. *Checked: a chapter that is a manual must not appear as a contents row.*

---

# THE PLAN — ***2026-09-13, and the sprint HALTS here at Doug's order: "HALT when brainstorm and /ce-plan is done so we can assess."***

## <a id="print-false"></a>The ruling that settles how a thing is declared without being drawn

> ***Doug, during the plan:*** **"'keeping the article invisible until the placement lands' — good but this better be elegant. Start with print = false. This can be easily accomplished. The chapter can just not show document in view if print is false. That should be true already and if it's not, that is a small change that can be done elegantly with no more members."**

***It is already true, verified at the line rather than remembered.*** **A chapter is written into its book as an element** — the generated `book.tsx` writes `<Cover />`, `<Synopsis />`, `<Contents />` and the prose chapters into `<Book>`. **`$Writing`'s bond turns a written `print` into `parenthetical`**, and **`$Writing.view()` returns null when a writing is parenthetical, before it ever calls `print()`.** So `<Manual print={false} />` is declared, held in the book's block, and draws nothing where it stands. ***No change, and no new member.***

> ***And then Doug asked the question that removed it from this sprint:*** **"Do we even need print hiding?"** ***No.*** **Once [D6](#d6)'s layout composes the page — the header, the place, the flow, the footer — a chapter is drawn exactly once, by the book, in the spot its type names.** *Hiding was only ever needed where a chapter would be drawn twice, and a book that composes never draws one twice.* **The ruling stands as the framework's way to declare a thing without drawing it; this sprint does not use it, and no requirement, unit or scenario below depends on it.**

## <a id="inherited"></a>The unit this plan does NOT inherit, and why — in his words

***[ce-plan's own rule](../../../../.claude/library/our-skillset/29-ce-plan.md), added out of Sprint 66:*** a kind Doug ruled and an earlier sprint did not build is the FIRST unit of the next plan, or the plan says why not, in his words, and waits.

**The owed kind is the typing of cover, synopsis and table of contents** — *"Do we even get any value out of having a cover document class, a synopsis or table of contents? Maybe those should just be types… You simply type it… in the specification of the type."* Ruled in Sprint 64, unbuilt in 64 and 65, and **the first unit of [Sprint 66](72-sprint-66--themes-and-formats.md)'s re-plan.**

**Why it is not first here, in his words:** he set this sprint's subject himself — *"We need to get this manual in there"* — and closed it with *"HALT when brainstorm and /ce-plan is done so we can assess."* The typing has a home and a position in another plan; it is not deferred again, it is left where he put it.

***And it touches this sprint at exactly one place, said out loud rather than worked around:*** the text-column rule's `:not(.pd-cover):not(.pd-table-of-contents):not(.pd-chapter):not(.pd-footer)` roster is the apparatus naming itself by hand. **[D1](#d1) asks for the apparatus by type instead, which is what dissolves the roster** — and if the typing lands first it dissolves further. *Either order works; neither blocks the other.*

## <a id="decisions"></a>Decisions

- <a id="d1"></a>**D1 — ***RULED BY DOUG 2026-09-13.*** Each thing has its own TYPE, and the DRAWING enumerates. Nothing is held.**

  > **"You should have different types. Just enumerate them in view! Stop caching things. Use types. Find them when drawing. Why are you ALWAYS caching things? We have them in memory. We have the block. We have chapter properties to enumerate. If you want anything it's a get only property. STOP CACHING!!"**

  **The book's drawing walks its chapters once and each chapter goes where its own type says** — the cover, the synopsis, the table of contents and the footer to their places, a chapter carrying [D6](#d6)'s type to the place, and everything else in the order it was written. **No block is kept, no list is stored, and where a member is wanted at all it is a get-only property that asks** — the shape [`$Book.chapters`](../../package/src/library/Book.tsx) already has, reading `parts()` every time it is asked.

  > ***And immediately after, closing the shape:*** **"You don't need two arrays just because you have a list of two types. Just fucking use the list."**

  ***ONE LIST, WALKED ONCE.*** **The book has its chapters; the drawing goes through them in order and each one draws where its type says.** *No partition, no second collection, no filter answering an array of one kind and another of the rest — and no member holding either.* **This plan does not say more than that about the drawing's shape: the how is decided with the code open, which is [the planning step's own rule](../../../../.claude/library/our-skillset/29-ce-plan.md) and one this chapter had already broken twice by the time it was said.**

  ***This REPLACES what this plan said an hour earlier, and the replaced version is recorded because the fault is instructive:*** it defined the flow as *"what remains once the apparatus is taken"* and flagged it as `$Book`'s deleted `_opening`, `_contents`, `_body` and `_closing` returning. **A remainder is a subtraction, and a subtraction is one misreading away from taking the apparatus — which is [what the last team was fired for](../the-type-system/08-the-cover-is-a-cover.md#his-cause).** *Enumerating by type is positive: each thing is placed because of what it IS, so nothing can be swallowed by being left over.* **The four deleted blocks are not coming back in any form; nothing in this sprint caches anything.**

- <a id="d2"></a>**D2 — `$Encyclopedia` is a book kind in `src/encyclopedia` over `$Book`, subclassing nothing else, and it is the ONLY thing that knows the arrangement.** *Chosen over putting the flow on `$Book`, because not every book is an encyclopedia and a base earns a member only when it is true of everything beneath it; and over leaving it in the demo, where a second application would copy it.*
- <a id="d3"></a>**D3 — The apparatus is asked BY TYPE.** `$Book.cover`, `synopsis` and `table` answer by position today — `chapters[0]`, `[1]`, `[2]` in [`Book.tsx`](../../package/src/library/Book.tsx) — which [What We Believe P45](../the-type-system/05-what-we-believe.md#how-we-work) already names a real fault. **This sprint asks by type inside `$Encyclopedia` and changes nothing on `$Book`**, so it neither repeats the fault nor takes Sprint 66's unit.
- <a id="d4"></a>**D4 — The theme places the flow once, and the `:not()` roster goes with it.** One rule naming one box replaces one rule naming a document and then excepting four kinds by class. *Chosen over keeping the roster beside a new rule, which states the same fact twice.*
- <a id="d5"></a>**D5 — The infobox becomes a document kind so a chapter can write it.** `$Infobox → $Box → $Aside` today; a chapter writes a document, so the infobox is one. **A change to a class in `src`, standing on Doug's *"Make types of documents and have the book coordinate between them."*** *Chosen over a chapter writing an aside, which no rule in the branch admits.*
- <a id="d6"></a>**D6 — ***RULED BY DOUG 2026-09-13, and it is the book's existing layout, extended by one.*** A place beside the header and the footer, and a chapter TYPE that goes in it, in order.**

  > **"The book has layout code. Just add a new section like header and footer and find a chapter type that gets put there in order. That is the standard method for handling things like this."**

  ***The layout code is there and was read before this was written:*** [`$Book`](../../package/src/library/Book.tsx) declares `header()` and `footer()`, each answering nothing, and its `print()` composes them around its own writing — **and the wiki's own book already overrides `header()`** to stand the appearance panel. **So the place is a third member of the same kind, and a chapter carrying the type is put in it, in the order the chapters are written.** *This is also where the base type Doug asked for earns its keep: it names the PLACE a chapter belongs in, rather than existing to be hunted for.* *Chosen over the author's filing order deciding, which cannot put a chapter at the head of the flow from the middle of a book; and over the book asking which chapters declared `print={false}`, which reads a writing's visibility as if it were a position.*
- <a id="d7"></a>**D7 — No commit leaves a page without its look, and the served mirror is rebuilt before anything is measured** ([Solutions 72](../solutions/72-the-mirror-with-two-directions.md)). The demo stands in two trees and the served one is `.wiki/.public`, whose chapters are generated and chunked differently from the source tree's.

## <a id="units"></a>Units

### <a id="u1"></a>U1 · ***The measurement, before a line is written*** — [R5](#r5), AE2, D7
**Mechanism:** a driver run against the served pages as they stand, reading computed styles and line-box geometry: that each prose document is a grid item, that the manual's float is confined to the lead's box, and that the same documents inside one box let the next document's first line shorten. The second half is measured by a rule applied in the browser, never by editing a file — **the probe is installed and removed in the same run**.
**Files:** a script beside this chapter, kept as a gate or deleted by its own verdict. No source file.
**Depends on:** nothing.
**Scenarios:** **T1** every prose document on `/article` reports a placement in the text column. **T2** the manual's floated box shortens no line box in the following document. **T3** with the documents inside one box, the next document's first line box is shorter by the float's width. **T4** at 1119 the float is off and the line is full width.
**Visible end:** ***three numbers that say whether this sprint's premise is true; on red the sprint HALTS and is re-brainstormed, and nothing is built.***

### <a id="u2"></a>U2 · ***`$Encyclopedia` and the flow*** — [R2](#r2), [R3](#r3), [R4](#r4), D1, D2, D3, D4
**Mechanism:** a book kind in `src/encyclopedia` that extends the layout `$Book` already has — `header()`, a **third member of the same kind for the place**, `footer()` — and whose drawing **goes through its one list of chapters once, each drawing where its type says** ([D1](#d1)). The encyclopedia theme places the box that results in the text column and loses the `:not()` roster; the demo's book extends the kind and holds nothing about placement. ***Beyond that the shape is the implementer's, with the code open.***
**Files:** `src/encyclopedia/` *(two new files, names owed — the book kind and the chapter type)* · `src/encyclopedia.ts` · `src/encyclopedia/Theme.tsx` · `.wiki/.article/.book.tsx` · the turing book · the `.wiki/.public` mirrors.
**Depends on:** [U1](#u1) green.
**Scenarios:** **T5** the DOM holds one element between the chapter and the prose documents, and none between chapter and cover, synopsis, contents or footer. **T6** the text-column rule names one thing and no `:not()`. **T7** a book with no apparatus draws its chapters and throws nothing. **T8** the suite green; tsc's error count no higher than before. **T24** ***read as a diff, not run:*** the kind declares no field holding chapters and builds no second list — [D1](#d1).
**Visible end:** ***the three wiki pages drawing as they do today, with one box in the DOM that was not there and one exception list gone from the theme.***

### <a id="u3"></a>U3 · ***The manual is a chapter*** — [R1](#r1), [R5](#r5), AE2, D6, D7
**Mechanism:** the manual leaves the lead's `print()` for a chapter file of its own, carrying [D6](#d6)'s chapter type so the book puts it in the place; it is written into the book like every other chapter and filed wherever the author likes; `$ManualFormat` is untouched.
**Files:** `.wiki/.article/` *(one new chapter)* · `.wiki/.article/1-lead.tsx` · `.wiki/.public/read-page.mjs` · the mirrors.
**Depends on:** [U2](#u2).
**Scenarios:** **T9** `/article` first paint: the manual stands where it does today, to the gate's regions. **T10** the section after it wraps beside it at 1280, measured, and is full width at 1119. **T11** the manual is not a row in the table of contents. **T12** zero errors, zero refusal panels. **T13** the manual filed LAST among the chapters still draws in the place, which is what proves the place is the book's and not the file order's.
**Visible end:** ***the Manual of Style page reading as Wikipedia sets it — prose beside the box, prose full width beneath it.***

### <a id="u4"></a>U4 · ***The infobox is a document and a chapter*** — [R1](#r1), [R4](#r4), [R5](#r5), D5, D7
**Mechanism:** `$Infobox` becomes a document kind; the Turing infobox leaves the lead for a chapter of its own; `$InfoboxFormat` is untouched.
**Files:** `src/encyclopedia/Infobox.tsx` · `src/encyclopedia/Box.tsx` *(read, possibly untouched)* · `.wiki/turing/` *(one new chapter)* · `.wiki/turing/1-lead.tsx` · `.wiki/.public/read-page.mjs` · the mirrors.
**Depends on:** [U2](#u2); lands with [U3](#u3) under [D7](#d7).
**Scenarios:** **T14** `/turing` first paint: the infobox stands where it does today, to the gate's regions. **T15** *Early life and education* wraps beside it at 1280 and is full width at 1119. **T16** the infobox's eighteen labelled rows are unchanged. **T17** the infobox is not a contents row.
**Visible end:** ***the Turing page with its text beside the infobox and beneath it — the thing the reverted commit was bending data to buy.***

### <a id="u5"></a>U5 · ***The gates*** — [R6](#r6), AE3, AE5
**Mechanism:** `verify:latex` on both readings; the wiki gate at its pinned widths against the baseline recorded at `e89f5f0`; the performance probe's chemical and draw counts against Sprint 52's; the greps proving no class outside `src/encyclopedia` names a manual or an infobox and that *floating* appears nowhere.
**Files:** none new.
**Depends on:** [U3](#u3), [U4](#u4).
**Scenarios:** **T18** `verify:latex` green on both readings. **T19** the title block, contents column and rail unchanged at every pinned width. **T20** the portal unchanged. **T21** the probe's counts within one chapter's worth of today's. **T22** the greps clean. **T23** ***the apparatus counted:*** one cover, one synopsis and one table of contents on each page, each its own document outside the flow, and the contents' rows unchanged against the baseline — [R7](#r7).
**Visible end:** ***every gate this branch owns, green, with its numbers written down.***

## <a id="risks"></a>Risks, continued

- **The premise is wrong** — the floats fail for a reason other than the grid. *[U1](#u1) finds it before anything is built; on red the sprint halts.*
- ***A member appears that holds a list, or the walk becomes two.*** **Both are the failure [D1](#d1) was ruled against**, and they are the easiest things to commit while making a drawing tidy. *Every asking is a get-only property or it is not written; a `_` field holding chapters, or a second array beside the first, fails review on sight.*
- **The flow box moves the frame.** The contents column and the rail are placed by grid line and span 400 rows; a new element in the text column can shift them. *[T19](#u5) against the `e89f5f0` baseline.*
- **The place is a new member on a book kind**, which is the shape [Polymorphic Limiting](../the-type-system/06-polymorphic-limiting.md) warns about. *Its defence is that it is the standard method Doug named, sitting beside `header()` and `footer()` which are already there, and that it is on `$Encyclopedia` and not on `$Book`.*
- **`$Infobox` changing lineage breaks a selector** written for an aside. *[T16](#u4) reads the rendered rows.*
- ***THE FIRING RISK: the flow swallows the synopsis or the table of contents.*** **The last team was fired for dissolving exactly those two.** *[R7](#r7) states it, [T23](#u5) counts them in the DOM on both pages, and on red the sprint stops rather than being adjusted.*

## <a id="trace"></a>Origin trace, both directions

| from | lands in |
|---|---|
| [R1](#r1) | [U3](#u3), [U4](#u4) |
| [R2](#r2), [R3](#r3) | [U2](#u2) |
| [R4](#r4) | [U2](#u2), [U4](#u4), [U5](#u5) T22 |
| [R5](#r5) | [U1](#u1), [U3](#u3) T10, [U4](#u4) T15 |
| [R6](#r6) | [U5](#u5) |
| [R7](#r7) | [U5](#u5) T23, and [D1](#d1)'s own wording |
| A1 | [U3](#u3), [U4](#u4) · A2 | [U3](#u3) · A3 | [U2](#u2) |
| F1 | [U2](#u2), [U3](#u3) · F2 | [U2](#u2) |
| AE1 | [U2](#u2) T7 · AE2 | [U1](#u1) T3, [U3](#u3) T10 · AE3 | [U5](#u5) T21 · AE4 | [U5](#u5) T22 · AE5 | [U5](#u5) T18, T19 |

## <a id="order"></a>Order

**[U1](#u1) · [U2](#u2) · [U3](#u3) · [U4](#u4) · [U5](#u5)** — U2 to U4 as one commit if [D7](#d7) needs it, the suite the halt between them. ***One session: one book kind, one theme rule, two demo chapters and a lineage change — smaller than any brief that would divide it.***

## <a id="self-check"></a>The plan against itself

**Thin, and said so.** [U1](#u1)'s second half, applying a rule in the browser to prove one box fixes it, is the only method not settled, and it is deliberately first. **AE1, the un-fakeable example, is carried by [T7](#u2) alone**, the weakest coverage here; a second scenario is owed once the flow's shape is known. Every requirement has a home; every unit names a mechanism and a visible end; **none is design owed.**

## <a id="names"></a>Names owed to Doug

***the flow*** and the box it draws · ***`$Encyclopedia`*** · **the place** — the third layout member beside `header()` and `footer()` — · **the chapter type that names it** · the member answering the chapters that are not apparatus · the manual's and the infobox's chapter files. **All proxies.**
