# The Address, and Where It Was Never Wired

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Written 2026-09-10 after a session spent rebuilding by hand what the framework already says.*** **Doug:** *"Learn how the framework works… The key anchor in this is NATURAL. Does the code you're writing get implemented naturally in the framework it's in? We write the framework! If it fails to, we have failed."* *And, on the thing itself:* **"There is a url scheme for these things, and anchors should have a convention. We know chapter index, we know we want document 1 (or 0) in the tree right?"** *This chapter is that scheme, gathered from the three places it was already written, so nobody derives it a third time.*

## <a id="ruled"></a>The scheme, as ruled — three records, one sentence

| where | what it says |
|---|---|
| **[Sprint 30, R7](../projection/30-the-reference.md#r7)** — *Doug* | ***`ref` on every piece of writing — how to get TO it.*** *Observable: a writing's `ref` answers a reference whose path resolves back to that same writing.* |
| **[Sprint 30, R10](../projection/30-the-reference.md#r10)** — *Doug* | ***"A NUMBER means: take the parts and work down by position, ending in an anchor tag that we can put in the query string. A STRING means: append it to the path."*** |
| **[Sprint 30, R11](../projection/30-the-reference.md#r11)** — *derived* | ***numbers are FOUND by the parse; strings must be AUTHORED.*** *The parser counts; it cannot invent a name.* |
| **[Sprint 30, U4](../projection/30-the-reference.md#u4)** | ***the round trip*** — *following a writing's own address returns that same object.* |
| **[Sprint 46, D-A](../projection/50-sprint-46--the-mention.md#d-a)** — *Doug* | ***"the `$$` classes… A chapter reference is `$$Chapter`."*** **A mention is named for WHAT IT REPRESENTS; its copy is HOW IT IS FOUND.** *`$$Chapter` holding "Body sections" is a reference to a chapter, found by that title.* |
| **[Sprint 46, the grammar](../projection/50-sprint-46--the-mention.md#d-a-grammar)** — *Doug's forms* | `title` **by name** · `[shown](0)` **by position** · `[shown](Cover)` **by kind** · steps split on `/`; machine form `Bk:0/Cr:1`, authored form `Physics / Gauge theory` — *the same sentence in two registers.* |
| **[Sprint 55, U4](../projection/61-sprint-55--the-two-ladders.md#u4)** — *Doug* | ***"a catalogue of chapter references — like a letter but referential — that passes only annotations forward."*** |

***And the derivation under it:*** [The Reference, and What It Points With](../the-semantics-of-books/16-the-reference-and-its-locator.md) — *a reference is identification coupled with location; outgoing is authored, incoming is compiled.* [Composition and Collection](../the-semantics-of-books/09-composition-and-collection.md) — *composition contains, collection catalogues by reference, and a catalogue's parts are mentions.*

## <a id="in-the-code"></a>Where the code already has it

- **[`$Catalogue.follow(fragment)`](../../package/src/reference/Catalogue.tsx)** walks parts by position — `0/2`, and a span `0-2` in the last step — and **`$Catalogue.parts()` answers the held writing's parts' MENTIONS**, so a catalogue tree mirrors the composition tree one level at a time, lazily. ***That is Doug's "parts reads recursively… you can get the innards more easily than you think."***
- **[`$Ref.read()`](../../package/src/reference/Ref.tsx)** follows a numeric fragment through `book.catalogue().follow(fragment)` — *the anchor in the query string, half built.*
- **[`$Reference`'s bond](../../package/src/reference/Reference.tsx)** makes a `$Path` from its copy when the copy reads as a url, and **[`$Fold`](../../package/src/reference/Fold.tsx)** gives a writing a KEY that `$Writing.view()` writes as the anchor's `id`.
- **Mentions are made** for [words](../../package/src/writing/Word.tsx), [sentences](../../package/src/writing/Sentence.tsx), [paragraphs](../../package/src/writing/Paragraph.tsx), and [a section's paragraphs](../../package/src/writing/Section.tsx) — *in the bond of the level that holds them, as `$$X` mentions — references, pointers — holding the writing they stand for.*

## <a id="unwired"></a>Where it was never wired — measured 2026-09-10

| gap | the measurement |
|---|---|
| ***no mention above a section*** | `grep 'mention ='` in `src`: **four sites** — Word, Sentence, Paragraph, Section. **A book, a chapter and a document have none**, so `book.catalogue()` is `undefined` and `$Ref.read('#3/0')` falls through to *"this route is the application to follow."* **The scheme is dormant on the whole library ladder.** |
| ***no `$$Chapter`*** | [Chapter.tsx](../../package/src/library/Chapter.tsx) declares `$Chapter`, `$TypeOfChapter`, `ChapterSpecification` — three of the four, and the one Sprint 46 named is the missing one. |
| ***ids are made from text*** | [`$Heading.print`](../../package/src/writing/Heading.tsx) writes `id={text with underscores}` — **a string where R10 says a number** — so two headings with the same words collide (`/turing` carries one twice) and the contents links by title rather than by address. |
| ***the word is mangled*** | `adstyle` / `adstyles` in [Catalogue.tsx](../../package/src/reference/Catalogue.tsx) and [Url.ts](../../package/src/utilities/Url.ts) **is `address`**, struck by the sweep that removed "dress" — first seen at commit `06a4d0a`. *It reads as jargon and is a casualty, not a name.* |
| ***nothing leverages a writing's document*** | *Doug, 2026-09-10:* **"I don't think anything leverages the document reference on writing. If you make it a reference, everyone can refer to their document, and for the book, it's the cover."** [`$Bookmark.document()`](../../package/src/library/Bookmark.tsx) walks parents to the nearest document by hand — *the seam is on the base and one kind wrote its own.* |

## <a id="convention"></a>The anchor convention, in his words

***"We know chapter index, we know we want document 1 (or 0) in the tree."*** **A chapter's address is its index among the book's chapters; the document it draws is `0` in its tree; the anchor is the address as the fragment — `#3/0` — and the element a writing draws carries its address as its `id`.** *A contents link `<Chapter>Introduction</Chapter>` is a mention found by name, per the grammar, and its rows are `mention.parts()` reading through.* **No search by title, no second instance, no rows machinery on the chapter.**

## <a id="chapter"></a>The chapter model — Doug's rulings of 2026-09-10, verbatim

- *"I was under the impression that chapters had been updated to a subclass model. We need to change every single chapter. Are they not a type of reference now? They shouldn't even support this style of coding."* — of `<Chapter title="…">` nested in `<Chapter>`.
- *"There should be a validation error if they get non-annotations."* · *"chapters throw if given content, just they would be given something where we get the copy from it to see what the title should be."*
- *"It lives in view. The chapter looks like its view."* · *"Cover, Table, Synopsis need to be chapters. We need the whole model to be that the chapter is written as a document in the view. It doesn't hold its document but it points to its document."*
- *"a chapter starts as a link to a document named that, and you subclass it to be other things. The chapter would view itself as a link when given a title, otherwise as a chapter. But the base chapter won't look like anything."*
- *"The chapter will always have a book as its parent — give it a book property and just return parent."* · *"The parent enumerates its chapters in the parts."*
- *"We don't return in bond constructors. That's so dangerous."* · *"You put classnames IN the classes list, you don't make new wrappers for print."* · *"Different Chapter types might make more sense as different types of documents."* · *"Maybe there should be ChapterFormat and ChapterMentionFormat — something like that."*

***What stands at commit `ee9ef47`:*** *`$Chapter` at forty lines — a `$Reference` made from its copy, `read()` following to the document drawn in it, three rules — and every chapter file in all four books a class whose view is its document.* **Its contents lists chapters only; the 65-row nested contents of the paper is lost there, and Doug: "It's the star of the piece."**

## <a id="timing"></a>The one question the scheme does not answer by itself

***A chapter's document exists when its view is drawn, and the contents is drawn before it.*** *So the rows beneath a chapter — its document's sections — need the document before the page draws.* **Three ways, all framework:**

1. ***chemistry's find-by-cid*** — the instance a bond made from the view's markup is the one the mount uses. *Doug, [Sprint 54](../projection/60-sprint-54--the-paper-pixel-by-pixel.md#levels): "remove the bug in $Chemistry that tried to type the markup of a chapter as one. That code was supposed to find the cid and fetch an instance. It doesn't."* **A chemistry bug, and it is the natural one.**
2. ***the chapter's tree holds its document at `0`*** because the chapter draws its reading — made once at the bond, lifted by the block — *which needs the author's markup to be the reading's source rather than what React mounts.*
3. ***the contents follows addresses lazily*** and fills in as the tree is drawn — *reactivity, and the page renders more than once.*

***Open, and Doug's.***
