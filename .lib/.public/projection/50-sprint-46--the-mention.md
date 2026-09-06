# Sprint 46 — The Mention

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)
- **status:** `implementation-ready` — ***requirements approved by Doug 2026-09-06 ("Yes — write the chapter and plan it"); guardrails set the same day.*** Two units are ***design owed*** and are marked so.
- ***The chapter name is a PROXY; Doug's to rename.***

---

## <a id="the-objective"></a>The objective, in Doug's words

> ***"Right now, we are designing two books. They will have a cataloguing book that represents the library and they will have many more books inside each of them. We want our chapter components to be very easy to build."***

**The question this sprint answers:** *"I want to focus, based on the code so far, what should be moved into the framework?"*

**The standard:** *"I like minimalism. If things can be specified well, if they can have little code, if they can be easy to subclass, easy to use, and easy to extend (and possible to extend with DI based methods) then I am a happy camper, but that requires a lot of elegance from you."*

**And the sentence that named the whole design:** *"There is a use mention element to this framework."*

## <a id="rulings"></a>Rulings — Doug's, verbatim, 2026-09-06

| | |
|---|---|
| ***"You want to match the semantics of writing. Don't change my names of components. If you find empty ones are weakly implemented ones, couple them by composition etc... But I wouldn't remove mine. In fact, I would find ways to make them interesting where possible"*** | **his names are not ours to delete.** *This overruled a recommendation to delete `$Abstract` as a byte-identical duplicate of `$Synopsis`* |
| ***"And you need as few members as possible. We don't want to pollute. We want to maximize validation while minimizing the number of properties... mostly structure, and handle the rest through format. We will end up with different styling chapters and we will want them to compose"*** | **the sprint's budget: ZERO new members on existing classes** |
| ***"Why do you need a row at all? You have a table. Use it. You can probably pass in a type to the table, though perhaps make that dependent on the type it gets for its cells? If they are paragraphs it is a section and it assigns that type."*** | **no row kind; a table's type derives from its cells** |
| ***"We don't want things to be too view-based until they have to be. The table of contents has no rows in a book so be hesitant to leave domain terminology. We generally would say this is the table of contents, and it lists the chapters"*** | ***ROW IS STRUCK*** — *a view word standing where a library word belongs; it goes to the struck-word table at compounding* |
| ***"why not put mention on Writing. That is a cool term. And use meaning instead of mention. Those are a cool pair of words."*** · ***"Okay no more mention, except in the property name"*** | **`rep` → `mention`; `means()` → `meaning()`; and the word appears NOWHERE else** |
| ***"we still name the class `$$Book` and `$TypeOf$Book` no?... What if you export them as book — not BookMention, and then you case book as needed."*** | **classes unchanged; exports LOWERCASE** |
| ***"When you import mentions, you very much want to do so without the Mention — ChapterMention is Chapter, as a mention of a thing is still a stand in for the thing — as variables always are"*** · ***"Import ChapterRef as Chapter. In TableOfContents, you don't need Chapter"*** | **the consumer cases it at import** |
| ***"Title, Author and Subject are the cards of the card catalogue, pieces of writing that can serve as references for all kinds of books"*** · ***"Arguably they are all `$$` and should be seen as types of books"*** | **D4** |
| ***"Yeah, but IndexCard. Don't we want them to be annotations?... The card isn't in the book, it's in the library. The library that's closed under books has the card as annotative. It isn't real"*** · ***"Alternatively, make card a kind of type that is also a thing you write on... Please [think] this better and carefully and in a semantically rich and thoughtful way."*** | ***DESIGN OWED — [U13](#u13)*** |
| ***"I would love it if we could have Title be a complex component that functions in different situations differently, and the specification — you have to do this carefully with much thoughtful planning — and then you can specify title and summary of a chapter"*** | **D5, D9, U11** |
| ***"wasn't about for the `$$Synopsis` to express the idea that we are referring to books? So we can do that by having the synopsis find the book like the Title card does? Yeah let's invent this when we have a cataloguing book"*** | ***`about` IS NEVER ADDED*** — **D10** |
| ***"Title is supposed to resolve. We will emit those cards for all that apply and you will be able to write a Title and it turns into a reference card for the book!"*** | **the binder's, recorded, not built here** |
| ***"We are creating a component library, and we even figured out how to make that a chapter."*** | *a book's component library is its `.chapter.tsx` — his earlier ruling, confirmed* |

## <a id="the-literature"></a>The literature — read before a word of this was written

**All 47 files of [`package/src`](../../package/src/) and all of [`.wiki`](../../package/.wiki/), end to end.** Then the nine chapters that say how code here is written: [The Unit of Code](../designing-inexplicable-phenomena/07-the-unit-of-code.md), [The Order of a Class](../designing-inexplicable-phenomena/08-the-order-of-a-class.md), [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md), [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md), [The Closeness Rule](../designing-inexplicable-phenomena/12-the-closeness-rule.md), [The Default Dress](../designing-inexplicable-phenomena/13-the-default-dress.md), [Shells Over Types](../designing-inexplicable-phenomena/14-shells-over-types.md), [The Spelling of a Kind](../designing-inexplicable-phenomena/15-the-spelling-of-a-kind.md), [The Shape of TSX](../designing-inexplicable-phenomena/16-the-shape-of-tsx.md), [The Interface Type System](../designing-inexplicable-phenomena/17-the-interface-type-system.md), [What We Believe](../designing-inexplicable-phenomena/19-what-we-believe.md), [Using the Public Library](../designing-inexplicable-phenomena/20-using-the-public-library.md).

**Then the reference machinery**, on Doug's own catchup: [the v1 compiler's route model](../../build/library.ts), [`walk.ts`'s `routeOf`](../../build/stages/walk.ts), [the archived `$Location`](../../package/.archive/reference/Location.tsx), and [The Reference and its Locator](../the-semantics-of-books/16-the-reference-and-its-locator.md).


## <a id="the-second-literature"></a>The second reading, 2026-09-07 — ***what it corrected***

*Fifteen documents, on Doug's word: **"catchup on the many files related to coding conventions, public, the wiki, chemistry that will help you with this implementation."** These are the ones the first reading skipped, and five of them changed something.*

### <a id="cu1"></a>CU1 · ***$Chemistry's own Reactivity Contract is WRONG, on two counts***

***[`04-the-reactivity-contract.md`](../../../chemistry/.lib/authorship/04-the-reactivity-contract.md) is the document a consumer is told to read, and it says:*** **"Fields prefixed with `$` are reactive. Other fields (no prefix, or underscore prefix `_`) are not."** *and* **"`$`-prefixed field names must be at least 3 characters — `$ab` is reactive, `$a` is not."*

***Read at the source, [`bond.ts`](../../../chemistry/package/src/abstraction/bond.ts) `$Reflection.isReactive`:***

| the name | reactive |
|---|---|
| `constructor` | **no** |
| ***bare — `theme`, `count`*** | ***YES.*** *The contract says no* |
| `_`-prefixed | no |
| `$`-prefixed | *only if special* — `$` + one lowercase identifier char, and `isSpecial` tests **`length >= 2`** |

**So the contract is backwards for bare names, and its three-character claim is contradicted by a comment in the source that says `> 2` silently demoted `$v` and `$x` and was fixed to `>= 2`.** ***It is Cathy's chapter and hers to correct*** — *and `.public`'s own [ch10 reactive law](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-reactive-law), read off the same file, is the one that is right.*

> ***AND IT CONFIRMS [P18](#p7).*** **A bare `theme` FIELD on `$Writing` would be reactive on every letter and every word.** *The argument for making it a property was made from ch10 and now has the source under it.*

### <a id="cu2"></a>CU2 · ***A bond constructor is SKIPPED when its arguments are identical***

***[The Binding Constructor](../../../chemistry/.lib/composition/03-binding-constructor.md):*** **"the constructor itself is skipped when the arguments are identical to last time. `$Synthesis` snapshots the argument list and compares it by identity (`sameArgs`)... So a bond constructor is NOT a per-render hook."**

***This is the other half of [Solutions 52](../solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md) and it makes [K1](#k1) smaller than this chapter had it.*** **A bond runs once per DISTINCT argument list, not once per render** — *so what a bond assigns is stable while the writing's children are what get remade.* **The purity rule still stands and is still the right rule; the exposure is narrower than stated.**

### <a id="cu3"></a>CU3 · ***`$Writing` takes ONE parameter, and the whole library depends on `inline`***

***The same chapter names the hazard and names `.public` as the file that met it:*** **"A bond constructor that declares ONE parameter keeps the first argument and DROPS THE REST... `@dna-platform/lib`'s `$Writing` was written this way and discarded the mechanism it needed for two sprints."**

**[`$Writing.$Writing(block: $Block)`](../../package/src/writing/Writing.tsx) still declares one parameter.** ***It works only because `$Writing.inline = true`***, so every piece of writing is gathered into one `$Html<'block'>` by `groupInline` and arrives as that single argument.

> ***A CONSEQUENCE FOR EVERY UNIT IN [PHASE 3](#p3): a mention must stay `inline`.*** *It inherits `inline = true` through `$Composition`, so nothing has to be done — **but a mention that ever declares `inline = false` would arrive as its own argument and be silently dropped**, and nothing would throw.*

### <a id="cu4"></a>CU4 · ***The slug is written TWICE, and one of the two is already being deleted***

***Measured across `src`:*** **the `\s+ → _` transform appears at [`Heading.tsx:23`](../../package/src/writing/Heading.tsx) and [`Book.tsx:97`](../../package/src/book/Book.tsx), and nowhere else.** *`reflection.kebab()` is a **third and different** transform — kebab-case for `pd-` class names — and is not the same thing.*

***`Book.tsx:97` sits inside `contents()`, which [P2/P6](#the-plan) delete.*** **So the duplication resolves itself, and the url step makes it two again.** *[P8](#p4) is therefore not a tidy-up: it is one invariant — **the url step and the anchor id must be the same string** — stated over two sites, which is exactly what [The Unit of Code](../designing-inexplicable-phenomena/07-the-unit-of-code.md#what-this-forbids) forbids leaving apart.*

*And it survives [The Grammar](../../../chemistry/.lib/authorship/01-the-grammar.md)'s "no utility functions", which governs `$Chemistry` rather than `.public` and is about helpers written for tidiness, not about an invariant two sites must agree on.*

### <a id="cu5"></a>CU5 · ***One struck word stands in live code***

**`grep` across `src` and `.wiki` for every struck word — furniture, apparatus, locator, mint, ladder, rung, rail, seat, refusal, rejection — returns exactly ONE hit:**

```
src/tests/book.test.tsx:33   describe('a book carries its furniture, and each stands in its place', …)
```

***`furniture` was struck 2026-09-06*** — *"name the cover, the synopsis, the table of contents and the index instead"* — **and this is the only place in the package that still says it.** *[U15](#u15).*

### <a id="cu6"></a>CU6 · ***The demo's two trees currently AGREE, and `clean.ts` is a gate***

**All fourteen files diffed: `.wiki/` and `.wiki/.public/` are identical.** *Session 41 kept them in step by hand. **[P21](#p8) must not assume that stays true** — the build is what keeps it so.*

**And [`clean.ts`](../../package/clean.ts) rewrites `src` mechanically:** *`$Html<'block'>` → `$Block`, and it strips a cast from a strongly-typed type assignment, and it maintains the `@dna-platform/chemistry` import list.* ***Every phase's code must survive it***, and running it is part of a phase closing rather than a separate act.


## <a id="the-finding"></a>THE FINDING — the mention already exists, and it stops halfway up

***`$$X` is not "a reference to an X". It is the X MENTIONED rather than used*** — and four of them are already built.

| | |
|---|---|
| **the four that exist** | [`$$Letter`](../../package/src/writing/Letter.tsx) · [`$$Word`](../../package/src/writing/Word.tsx) · [`$$Sentence`](../../package/src/writing/Sentence.tsx) · [`$$Paragraph`](../../package/src/writing/Paragraph.tsx) — the **bottom four** levels |
| **each carries two types** | its own, and a `$TypeOf$X extends $TypeOfReference` |
| **each is held on `rep`** | assigned in `makes()` at three levels and in [`$Section`'s bond](../../package/src/writing/Section.tsx) at the fourth |
| **mention is closed under composition** | `$$Sentence.parts()` answers the **mentions** of its parts — the same closure the library has under books |
| **none exports a component** | reached through a file-local `const Representation = $($$X)` |
| ***the three that do not exist*** | ***`$$Book` · `$$Chapter` · `$$Section` — the pattern stops exactly where a table of contents needs it*** |

### <a id="the-level-of-a-mention"></a>And the four say where a mention SITS

**`$$Paragraph` adds `$TypeOfPhrase`, not `$TypeOfParagraph`** — while the other three each add their own level. *The odd one is the tell:* **a mention is typed at the level where it is WRITTEN, not at the level of what it mentions.** You mention a paragraph inline, inside a sentence, so its mention is a phrase.

***And Doug's two contexts are exactly `below()`:*** **"maybe sentence or paragraph, depending on say a list like paragraph context or table like section context."** *Measured: `$TypeOfList extends $TypeOfParagraph` and `$TypeOfTable extends $TypeOfSection`.* **So a mention takes the level BENEATH its container**, which is the rule every part already obeys — and a mention written in a book is a chapter, which is the cataloguing book falling out rather than being added.

## <a id="measured"></a>What was measured 2026-09-06, before any design

*Every number is from a run or a diff in this session.*

| | |
|---|---|
| ***`Author.tsx` and `Subject.tsx`*** | ***byte-identical after renaming — zero diff.*** `Title.tsx` is the same file plus one rule |
| ***`Synopsis.tsx` and `Abstract.tsx`*** | ***byte-identical after renaming — zero diff*** |
| **files drawing `<Anchor href>`** | **8** — five re-implement what [`$Writing.view()`](../../package/src/writing/Writing.tsx) already does, because they look for their reference INSIDE THE HEADING |
| **[`$Catalogue`](../../package/src/reference/Catalogue.tsx)** | **142 lines, ONE caller** (`$Ref.read()`); `address()` has none. *It also declares `$Catalogue$ extends $Composition$` over a class extending `$Writing`, and hand-copies four `$Composition` members* |
| **specifications** | **38, of which 11 are EMPTY** |
| **the eleven duplicating files** | **586 lines of `src`'s 2,727 — 21%** |
| **the four addressing systems** | *the address (`Cr:1`) · the route (`/article`, computed in the **v1 compiler**, and `src` says "route" **zero** times) · the page anchor (`#Order_of_article_elements`) · the url.* ***A `$Path` holding `Cr:1` and one holding `#Order_of_article_elements` pass the IDENTICAL rule*** |
| **gates at the sprint's opening** | `tsc` **0** in `src` and `.wiki` · lib vitest **89 / 5 files** · chemistry vitest **868 / 71 files** |

## <a id="requirements"></a>Requirements — APPROVED

### The mention at every level

- **R1** — `$$Book`, `$$Chapter` and `$$Section` are declared on the template the four lower levels already carry: the class, a `$TypeOf$X extends $TypeOfReference`, and a specification. ***Observed:*** each passes its own specification; [`loading.test`](../../package/src/tests/loading.test.tsx) still imports every module standalone.
- **R2** — a mention takes **the level beneath its container**, defaulting to Paragraph. ***Observed:*** a mention in a table passes `$writtenInParagraphs`; the table passes `$writtenInSections` as a chapter's part.
- **R3** — a mention carries a `$Path` that is the **library address** of what it mentions. ***Observed:*** `$landsOnIt` holds — the second chapter's mention lands on `Cr:1`.
- **R4** — every level exports its mention **lowercase**: `book`, `chapter`, `section`, `paragraph`, `sentence`, `word`, `letter`. ***Observed:*** a consumer writes `import { chapter as Chapter }` and `<Chapter>` draws. *JSX reads a lowercase tag as an HTML element, so a mention cannot be used un-cased — the convention enforces itself.*

### The meaning

- **R5** — `$Writing.rep` becomes `mention`; `$Writing.means()` and `reflection.means()` become `meaning()`. **No other occurrence of the word "mention" in `src`.**
- **R6** — ***CORRECTED at [D-M](#d-m-coherence).*** *This read: one reading in four steps, the third being what my container means and the fourth the book I stand in.* **The container and book steps are DELETED** — meaning that falls through to the book is meaning nothing can lack, and three rules of this sprint depend on being able to lack it. **`meaning()` READS what a writing holds or what its opening holds, and a kind that structurally means something ASSIGNS its own in `specifically`.** ***Observed:*** `grep -c "Anchor href" src/` falls from **8 to 3**.
- **R7** — the demo draws exactly as today. ***Observed:*** `/` and `/article` at 390, 820 and 1280 — same anchor counts, **0 unresolved, 0 page errors**.

### The cards of the card catalogue

- **R8** — `$TypeOfTitle`, `$TypeOfAuthor` and `$TypeOfSubject` descend from `$TypeOf$Book`: **one book, three mentions, filed three ways.** ***Observed:*** a cover's title still draws and still means its own book (the self-arrow); a title in a card resolves to the book that card stands for.
- **R9** — `$Title` functions in three situations without knowing which it is in: on a cover, in a card, in a chapter mention. ***Observed:*** one reading (R6), three drawn results.

### The table of contents

- **R10** — a table of contents is **a chapter holding a title and a table**, and the table's cells are the book's chapters, mentioned. **No row kind and no card kind is introduced.**
- **R11** — a table's composition type is **derived from its cells**. ***Design owed — [U14](#u14).***
- **R12** — [`$Book.contents()`](../../package/src/book/Book.tsx) leaves `$Book`. ***Observed:*** `Book.tsx` no longer imports `Heading`, `Paragraph`, `Ref` or `Section`.
- **R13** — a chapter mention has **three forms** — empty, with a title, with a title and a summary — and costs **zero props and zero members**. A book wanting summaries throughout **registers a different chapter mention for its own scope.**

### Find or make

- **R14** — `placed()` moves from `protected` on `$Book` to `$Composition`. **A move, not a new member.**
- **R15** — ***Observed:*** a book with a hand-written table of contents keeps it; a book with none is given one.

### Validation — the half Doug asked for three times

- **R16** — `TableOfContentsSpecification` stops being empty: ***a table of contents lists every chapter of its book*** — the NUMBERED chapters, which is what [`$Book.chapters`](../../package/src/book/Book.tsx) already answers.
- **R17** — *a table of contents titles itself.*
- **R18** — *a mentioned chapter stands where its container composes* — the derivation checked, not trusted.
- **R19** — *a mentioned chapter carries a title and a summary and nothing else.*
- **R20** — *a title means what it titles* (reworded from "a title means the book", which is no longer all it titles), and *a title means one thing.*
- **R21** — a book wanting a partial contents **waives R16** by overriding it and returning `false`.

### Ruled out

- **R22** — ***`about` is never added.*** A mention finds its book by looking, per R6. *Invented when the cataloguing book asks for it, and not before.*

## <a id="decisions"></a>Decisions — the WHAT, with what each was chosen over

| | the decision | over | why |
|---|---|---|---|
| **D1** | *classes stay `$$X` / `$TypeOf$X`; exports are **lowercase**; the consumer cases at import* | `ChapterRef` · `ChapterRep` · `ChapterMention` | **Doug's.** *A mention is a stand-in, so it takes the thing's name — and a lowercase JSX tag is an HTML element, so it cannot be used un-cased* |
| **D2** | *`rep` → `mention`, `means()` → `meaning()`* | keeping `rep` | **Doug's.** *Use/mention is the axis the framework ran without a word for* |
| **D3** | *a mention's level is DERIVED from its container via `below()`, default Paragraph* | fixing it in the bond, as `$$Paragraph` does today | *Doug's two contexts ARE `below()`.* **RISK [K1](#k1); fallback stated** |
| **D4** | *`$TypeOfTitle/Author/Subject` descend from `$TypeOf$Book`* | leaving them under `$TypeOfSection` | **Doug's.** *One book filed three ways is what a card catalogue IS; the cover case is [chapter 16's self-arrow](../the-semantics-of-books/16-the-reference-and-its-locator.md#two-loops)* |
| **D5** | *ONE reading in `Reflection` — **two steps, after [D-M](#d-m-coherence) corrected it from four*** | a new overridable member on `$Writing` | *a utility holds no kind (P36), and this costs **zero members** where a member would cost one and delete the same five copies* |
| **D6** | *the table of contents is a chapter holding a title and a table* | a row kind · a card kind · a new container | **Doug's.** *"Why do you need a row at all? You have a table."* |
| **D7** | *the table of contents fills itself in `specifically`* | filling it in the bond | *it needs its book, unknown at bond time.* **Precedent: `$TypeOfDocument.specifically`, after a bond-time create broke twenty-nine carried-type fixtures at once** |
| **D8** | *the chapter mention's three forms cost zero props* | a `$summary` prop that fetches automatically | *Doug floated the prop; the DI seam does it for nothing — "that's the point of getting to override the Chapter"* |
| **D9** | *`about` is never added* | a member on the mention · on `$Composition` · on `$Writing` | **Doug's.** *"let's invent this when we have a cataloguing book"* |
| **D10** | *the card question is **design owed**, not guessed* | shipping a first instinct | **Doug's.** *"Please [think] this better and carefully and in a semantically rich and thoughtful way"* |
| **D11** | *`Book.tsx` is shared with session 41; **theirs lands first*** | merging · parallel edits | *theirs is ruled and being made; this is not approved to build. [The seam](#seams)* |

---


## <a id="warts"></a>THE WARTS — every questionable thing this sprint wrote, named by the session that wrote it

***Doug: "Keep track of the warts."*** *Each says what it is, whether it is fixed, and what would close it. **Two were fixed in the same act as being named.***

| | the wart | state |
|---|---|---|
| **W1** | ***I wrote a ceremonial bond constructor*** — `$Format(block) { }`, empty. **[The Binding Constructor](../../../chemistry/.lib/composition/03-binding-constructor.md) forbids exactly this**: *"an empty `$X() {}` makes the synthesis parse parameters and build chemicals for inputs nobody binds: a performance hazard."* **I had read that chapter this session.** | ***FIXED*** — deleted in the same act as being named |
| **W7** | ***`theme()` read the block by hand*** — `(this._block.$elements ?? []).find(part => part instanceof $Theme)` — where `searchForOne($TypeOfTheme)` is the ask, now that a theme carries a type | ***FIXED*** — asks by type |
| **W2** | ***FIXED — the cast became a TYPE PREDICATE***, which is [the cure the library already names](../designing-inexplicable-phenomena/19-what-we-believe.md) for exactly this fault: *"the one my own memory names as the canonical fault, a cast asserting what a check verifies, died when `reflection.writing()` became a type predicate."* **`themed(one): one is $Writing$`** — *and it names an interface `$Writing$` ALREADY PROMISES, so no new declaration was needed.* ~~It read: `$Format.theme` reaches through a duck-type and then casts what the check just verified~~ — `'theme' in at && typeof at.theme === 'function'`, then `(at.theme as () => $Theme)()`. **This is the canonical fault by my own record**, and Doug's rule is *"the unknown-cast reach is NEVER okay — a member the machinery must read is a member on the wrong object, or machinery in the wrong place."* *It exists solely to keep `Format.tsx` from importing `$Writing` as a value, which would re-form the cycle.* | ***STANDING.*** **Closed by moving `$Format` into `Writing.tsx`, which is [what ch13 rules and nobody has done](#w-ch13)** |
| **W3** | ***FIXED.*** *Both deleted, and the promise that forced them with it: **`$IndexCard$` no longer extends `$Section$`**, because a card is ruled to stand WITHOUT a heading and an interface promising one was the wrong promise. The card's TYPE still descends from `$TypeOfSection` — the interface and the type are separate axes.* ~~It read: heading() survives only to satisfy an inherited obligation~~ *`$Section$` promises `heading()`; a card waives `$opensWithHeading` and never uses one.* **Nothing calls either** | ***STANDING*** — they go when a card becomes a reference ([D-F](#d-f)), which is unbuilt |
| **W4** | ***ACCEPTED, not a defect.*** *A card has a title, so the dependency is real; [`loading.test`](../../package/src/tests/loading.test.tsx) proves it costs no cycle. **It becomes a question only when [U6](#u6) moves `$TypeOfTitle` under `$TypeOf$Book`**, which is unbuilt.* ~~It read: reference/IndexCard.tsx now imports book/Title.tsx — a direction that did not exist before, `reference` reaching into `book`. *It loads standalone and there is no cycle, but it asks whether `$Title` is a book word or a reference word* | ***STANDING*** — a design question, not a defect |
| **W5** | ***THE RULE IS GONE, AND MY FIRST ANSWER TO THIS WART WAS WRONG.*** *I found that [`$landsOnIt`](../../package/src/reference/Reference.tsx) read the composition type where a mention's target kind lives in its reference type, **fixed it, and wrote two promises enshrining `Cr:1`** — a form [D-K](#d-k) deletes.* **Doug: *"Weren't we removing this? Cr:1 specifies clean, Sn:0"*** — *and he was right: a fixed-order path already says the level, so there are no codes to land on.* ***So the codes are DELETED*** — `reflection.codes` and `reflection.code()`, `$landsOnIt` and its one override in `$Bookmark`, `$Catalogue`'s `code()` helper and every `kind:position` step, and `$Ref.read`'s uppercase pattern. **An address is a POSITION and nothing else.** *Net −35 lines across four files; the demo drew identically because it never used them.* **The lesson is the one this sprint keeps relearning: I fixed a mechanism instead of asking whether the design still wanted it** |
| **W6** | ***MEASURED, AND IT IS A REGRESSION I INTRODUCED.*** **242 µs per `theme()` call**, from both a book and a chapter *(1,000 calls, vitest, 2026-09-07)*. **`$BodyFormat` alone reads it through six getters, so ~1.5 ms per Format per render across fifteen draw sites.** *The old `$Format.theme` was a stored field with no walk.* ***The mechanism: [`$Block.$elements`](../../../chemistry/package/src/abstraction/block.ts) is a `$`-prefixed REACTIVE read and the scope DEEP-CLONES a collection on read**, so every `searchForOne` clones the block — and `reflection.is` clones it again per element.* **A 200,000-call loop exhausted the heap outright**, which is the same fact at scale. ***The cheapest fix is to hold the answer per mount rather than per render; it is NOT done, because it wants the demo measured before and after and this session cannot do that honestly at its end.*** **STANDING, and now urgent rather than hypothetical** |
| **W8** | ***CLOSED BY A PROMISE.*** *A bare `$Format` worn by nothing that has a theme throws with the spoken error, and [writing.test](../../package/src/tests/writing.test.tsx) holds it.* ~~It read: $Format.theme now throws where it used to fall back, on a path no promise covers~~ — **the path is covered now.** ~~ *A Format drawn outside any writing has no theme and says so. Every suite and both demo pages pass, so nothing does that today* — **but it is a behaviour change on a path no promise covers** | ***STANDING*** — deliberate, per *types express expectations*, and recorded rather than assumed safe |
| **W9** | ***DISSOLVED, not fixed.*** *Now that [W5](#warts) deleted the rule, a mention of a chapter has no rule beyond a reference's — and [the checklist](48-the-v2-2-checklist.md) says a specification carries **only rules that are ITS OWN**. **An empty derived specification is correct here**, and filling it would be inventing a rule to justify a slot.* ~~It read: I added three empty specifications~~ — `$BookSpecification`, `$ChapterSpecification`, `$SectionSpecification`. *They inherit real rules from `ReferenceSpecification` rather than holding none, which is not the same fault as [the eleven this sprint counted](#measured)* — **but a sprint that set out to fill empty specifications ended by writing three** | ***STANDING*** — they fill when [W5](#warts) is fixed and a mention has a rule of its own |

| **W10** | ***`$List` FLATTENS ITS BLOCK TO A STRING, and every piece of writing inside a list is destroyed.*** [`List.tsx`](../../package/src/writing/List.tsx) reads `html.text(this._block).split(...)` and maps the resulting **strings** into `<li>`. *Probed by session inexplicable-phenomena-7e: **a `<Ref>` in a paragraph draws one anchor with its href; the same `<Ref>` in a list item draws ZERO and prints its literal markdown.*** *`$BulletsFormat` is `styled.ul`, so there is no ordered form and no nesting either — and the real page's largest section, "Order of article elements", is a nested numbered list made almost entirely of links, so **the demo cannot express it**.* ***It is the one place in the library where the parse's output is thrown away and the copy re-split by hand.*** **NOT FIXED, and not from caution:** *drawing the parts instead requires the PARSE to produce list items, and an item is not one of the seven — `$TypeOfList extends $TypeOfParagraph`, so `parts()` gives **sentences**. **"A list draws its parts" needs a design answer about what an item IS before it can be code**, and that is Doug's; 7e has put it to him and this chapter does not duplicate the ask* |
| **W11** | ***And the same design fails a second way, in the markup.*** *A brace written as a JSX expression — `{'{'}` — becomes **its own child**, and `$List` joins the block without it, so **two list items MERGE**: `{{Force cite load}}- Infoboxes` came out as one item where two were written.* **Writing the brace as `&#123;` keeps it one text node and the split works.** *Found by 7e at the cost of a rebuild, and recorded beside [W10](#warts) because it is the same fault seen from the author's side rather than a separate one* |

### <a id="w-ch13"></a>And one that belongs to a chapter rather than to code

***[The Default Dress](../designing-inexplicable-phenomena/13-the-default-dress.md) says `$Theme`, `$Style` and `$Anchor` live in `Writing.tsx` — "Doug's rule, and it is what dissolved a module cycle".*** **Two of the three had drifted out**, and putting `$Theme` back is what this sprint did. **`$Format` and `$AnchorFormat` are still out**, which is the whole reason [W2](#warts) exists.

> ***So the chapter is not stale — it is UNOBEYED, and the cost of not obeying it is one cast.*** *Session inexplicable-phenomena-7e read ch13 as stale against v2.2; the honest form is that it states a shape the current file layout does not carry, and either the layout moves or the chapter says so.* **A ruling for Doug, not an edit to make quietly.**

---

## <a id="verdict"></a>DID THE PLAN HOLD? — phase by phase, and the answer differs per phase

***Doug asked whether the work implemented the plan or whether the plan failed and the code is not up to spec because the design was wrong. It is three different answers.***

| | |
|---|---|
| ***[P1](#p1) — the vocabulary*** | ***THE PLAN HELD EXACTLY.*** *A rename with no surprises; 18 sites, 0 missed, every leftover correctly prose* |
| ***[P2](#p2) — meaning propagates outward*** | ***THE PLAN HELD, AND PREDICTED ITS OWN NUMBERS.*** *It said `Anchor href` would fall from 8 to 3 and it fell to 3; it said the cards would lose their drawings and they lost 89 lines. **Doug's "the meaning of the title is the meaning of the card" was implementable as one override each*** |
| ***[P3](#p3) — the three mentions*** | ***THE PLAN WAS WRONG IN ONE DETAIL AND THE CODE CORRECTED IT.*** *The plan had `$$X$ extends $X$`; the compiler showed that a mention of a book would inherit `cover`, `synopsis`, `table` and `index` — **which a mention does not have.*** **The existing `$$Paragraph$ extends $Phrase$` already carried the right rule: a mention's interface is its LEVEL's.** *This is [the plan specification's own claim](../../../../.claude/library/our-skillset/29-ce-plan.md) — a contract is corrected by implementation, never by rereading — happening to this plan* |
| ***[P7](#p7) — the theme*** | ***THE DESIGN WAS RIGHT AND MY SHORTCUT WAS WRONG, AND IT COST A ROUND TRIP.*** *ch13 said the theme is an annotation. I judged that too risky, hit a module cycle when I tried it, and reached for `inline = true` on a `$Chemical` instead — **treating the symptom.** Doug's ruling — "inherit from writing or descendant and it's not a problem" — sent me back, and it worked with **one class moving and a type-only import**, not the three-class reorganization I had priced it at.* **The caution was the error, not the design** |
| ***R3 — a mention carries a library address*** | ***NOT MET.*** [W5](#warts). *The rule the requirement names is never exercised and is wrong where it runs. **This is the requirement to carry forward, and it is not a plan failure — it is a defect the plan assumed away*** |
| ***[P4](#p4)–[P6](#p6) — the url, the resolver, the binder*** | ***NOT ATTEMPTED, and deliberately.*** *[P4](#p4)'s one slug would today deduplicate two lines with no url step to make it an invariant — **which is the premature helper [The Grammar](../../../chemistry/.lib/authorship/01-the-grammar.md) warns about**. [P5](#p5)'s resolver has no consumer until [P6](#p6), and P6 is a compiler that does not exist. **Building any of the three alone is more than necessary*** |

***THE ONE SENTENCE:*** **the design held everywhere it was tested, was corrected once by the compiler in a way that made it truer, and the only real failure was mine — pricing a documented ruling as too expensive and reaching for a symptom fix instead.**


### <a id="the-other-lane"></a>What rode in these commits that was NOT this session's

***Three of this sprint's commits took the whole working tree, so [session inexplicable-phenomena-7e](#the-other-lane)'s `.wiki` work went in under messages describing only mine.*** **The record is corrected here rather than left wrong**, and none of it is this session's:

| | |
|---|---|
| **the search form** | *`$Search` and `$SearchFormat` rewritten to wikipedia.org's real form* — the redirect action, a real `<select name="language">` **with 77 options** where a decorative `<span>` stood before, and **Wikipedia's own technique**: a transparent select sitting absolutely over an input padded to make room for it |
| **the article** | *the five chapters regenerated from the real Manual of Style/Layout wikitext* — **7 links to 65, 6,030 characters to 17,773** |
| **the home page** | *two lines in `$HomeContentFormat`* — the articles were shrink-wrapping instead of filling their grid cells, and the projects grid became `auto-fit` so it gives three columns at desktop and two at 375 **with no media query** |
| ***measured against the real pages, at 1440*** | ***search input 394×44 at x=495 and button 56×44 at x=889 — identical to wikipedia.org.*** Prose sans 16/26 `rgb(32,33,34)`, links `rgb(51,102,204)` unadorned — **identical**. `h2` Linux Libertine 24/33 `rgb(16,20,24)` with a `1px solid rgb(162,169,177)` rule — **identical**; *their rule lives on `.mw-heading2` rather than the `h2`, which is why a naive diff calls it a difference and it is not one* |
| ***and the sweep this session could not have produced*** | ***13 widths from 1680 down to 320, both pages: zero horizontal overflow, zero page errors, `#3366cc` at every width*** |

---

# <a id="the-design"></a>THE DESIGN

***Doug, 2026-09-06: "This is the /ce-work — the work is the design this sprint, clearly."*** *So what follows is the deliverable, not a preamble to one. Every claim carries its state: **measured**, **read**, or **proposed**.*

> ***THE LETTERS ARE IN THE ORDER THEY WERE DESIGNED, not the order they read.*** *A–D, then H–J, then E–G, then K–M. **They are identifiers and are never renumbered**, for the same reason a unit is not: the record cites them, and the sequence is itself evidence of how the design arrived. **Where a later section supersedes an earlier one, the earlier says so and is kept** — [D-H's lowercase codes](#d-h-codes), [D-A's scoping question](#d-a-open) and [U9's self-filling contents](#u9) are the three.

> ***A WORD STRUCK HERE, 2026-09-06.*** **Doug: *"You invented locator — the `$$` classes. The chapter references, chapter mentions — these locate. Delete that terminology."*** *It came from [chapter 16](../the-semantics-of-books/16-the-reference-and-its-locator.md), which flagged it in its own names table as the research's word rather than his and marked it replaceable. **It is now DEPRECATED TERMINOLOGY**: it stands in closed records, including that chapter's title, and is never written again. The thing is a **chapter reference** or a **chapter mention**; what it does is **locate**, and there is no noun.*

## <a id="d-a"></a>D-A · The `$$` class IS the reference, and its copy is how it is found

> ***Doug:*** **"For the [reference], why don't we make this the `$$` classes. A chapter [reference] is `$$Chapter`."** *and* **"I assume `$$` classes are named for the thing they represent. So don't be confused there."**

***A mention is named for WHAT IT REPRESENTS. Its copy is HOW IT IS FOUND.*** **`$$Chapter` holding `Body sections` is a reference to a chapter, found by that title.**

**And the framework's existing rules already enforce the separation this needs.** *[`PathSpecification.$readsAsUrl`](../../package/src/reference/Path.tsx) rejects **any whitespace**, so `Body sections` **cannot be a `$Path`.*** ***Measured.*** **Therefore:**

| | |
|---|---|
| ***what is written*** | **the mention's COPY**, as the author wrote it — a name, a position, a kind |
| ***the address*** | **a `$Path` beside it**, `Cr:1`, put there by resolution |
| ***before resolution*** | *no path, and [`$landsOnIt`](../../package/src/reference/Reference.tsx) has nothing to check* |
| ***after resolution*** | *the path stands and `$landsOnIt` holds* |

***The same class serves both states, which is why this is one design and not two.*** **[`$Reference`'s bond](../../package/src/reference/Reference.tsx) already makes a `$Path` only when the copy is url-shaped and otherwise leaves none** — ***measured*** — *so an unresolved mention is a legal object today, not a special case to be added.*

### <a id="d-a-grammar"></a>The grammar — and it is the address grammar in names

***Doug's forms, and what each one is:***

```
title                                  by NAME, nearest scope
[your title](title)                    by name, shown differently
[your title](subject-from-catalogue / title)   by name, SCOPED
[shown](0)                             by POSITION
[shown](Cover)                         by KIND — for the singular ones
```

| | the machine form, live today | the authored form |
|---|---|---|
| step separator | `/` | `/` |
| **by kind** | `Cr:` `Bk:` `Sn:` | `Cover` · `Table of Contents` |
| **by position** | `:1` | `1` |
| **by name** | ***nothing*** | ***the title*** |
| **the scope** | the catalogue asked | the qualifier before the `/` |

***So `Bk:0/Cr:1` and `Physics / Gauge theory` are the same sentence in two registers.*** **Nothing is invented: the missing coordinate was BY NAME, which is the only one a person can write.** *`$Catalogue.follow()` already parses `kind:position` steps split on `/`; **the authored form differs only in what fills a step**.*

**The bracketed form is already parsed.** *[`$Ref.link()`](../../package/src/reference/Ref.tsx) reads `[text](url)` out of copy through marked's lexer — **measured** — and a mention wants exactly that reading with the href taken as what to find rather than as a url.* ***PROPOSED: the reading moves to the parser, which is a utility and holds no kind***, so `$Ref` and every mention share one implementation rather than two.

### <a id="d-a-open"></a>The scoping syntax was open — ***CLOSED by [D-K](#d-k)'s url, which uses the slash throughout***

***Doug offered two and marked them unsettled:*** **"Nearest scope, but we will do it by paths... `Calculus` or `[[Nested Perhaps] Graduate Math] Calculus`. Something like that but let's figure that out soon."**

| | reads | |
|---|---|---|
| **`Graduate Math / Calculus`** | left to right, outer to inner | ***matches the address grammar's own separator*** |
| **`[[Nested Perhaps] Graduate Math] Calculus`** | outside in, brackets as containment | *reads as set membership, and does not collide with markdown link text* |

***RECOMMENDED: the slash.*** **The address grammar already separates steps with `/` and having two separators for one idea is precisely [the fault this branch has already paid for](../the-condition-report/08-the-compiler.md#n34)** — *one closed set stated in several places, checkable in none.* ***And the bracket form has a real collision: `[` already opens a markdown link's text***, so `[[A] B] C` inside a mention's copy meets a lexer that will try to read it as one.

***Doug's to rule. Recorded, not decided.***

## <a id="d-b"></a>D-B · A mention is named for what it represents — ***a correction***

> ***Doug, correcting this chapter:*** **"I assume `$$` classes are named for the thing they represent. So don't be confused there."**

***An earlier draft of this section said a mention was "a target plus a projection" — that the kind named which FACE of a located thing you got.*** **That was wrong and is corrected rather than quietly replaced.** *`$$Summary` does not mean "a chapter, shown as its summary". **It means a summary.** The chapter's title is merely how that summary is found, because the summary belongs to that chapter.*

| written | represents | found by |
|---|---|---|
| `<Chapter>Body sections</Chapter>` | ***a chapter*** | its title |
| `<Summary>Body sections</Summary>` | ***a summary*** | *the title of the chapter it belongs to* |
| `<Title>Physics</Title>` | ***a title*** | the book it titles |
| `<Author>Physics</Author>` | ***an author*** | a book they wrote |
| `<Subject>Physics</Subject>` | ***a subject*** | a book filed under it |

***The difference matters and it is not pedantry.*** **Under the projection reading there is ONE kind and several faces; under the correct reading there are SEVERAL KINDS, each naming a real thing a library has a word for.** *The second is the one that keeps every name a library word — which is [the anchor](../designing-inexplicable-phenomena/11-the-coding-style.md#the-anchors) — and the first would have quietly made "projection" a framework concept nobody asked for.*

### <a id="d-b-titles"></a>And the title is the tricky one — his word

> ***Doug:*** **"We have sections that have canonical headings and chapters with canonical sections with titles and books with chapters with titles — the title is tricksy, but we can have a reference system that maybe puts everything with a title in a router and across urls. And maybe the book could exist in either place depending on what uses it."**

***A title is tricky because it BELONGS to a thing and NAMES it at the same time*** — which is [the self-arrow chapter 16 derived](../the-semantics-of-books/16-the-reference-and-its-locator.md#two-loops): *"the title of the book is a reference that points to itself, in which case by virtue of having a title every book has its identity."*

**And that is what makes his router work:** ***everything with a title can be addressed by that title***, so a chapter and a section are addressable exactly as a book is. **What differs is not addressability but MODULE BOUNDARY** — see [D-H](#d-h).

## <a id="d-c"></a>D-C · The resolver is INJECTED — and it is forced, not chosen

> ***Doug:*** **"We should be able to configure a resolver by hand in the framework, but it can be arbitrarily hard. Maybe it's in the props that it gets configured. Then we can use our route based thing, and we can even change what kind of reference it is — a link to a page or local router etc..."**

***This was treated as a convenience when he first said it. It is not: the framework CANNOT know how modules are found.*** **`.public` is bundled with rollup; the demo with vite** — ***measured***, [`rollup.config.js`](../../package/rollup.config.js) and [`.wiki/.public/vite.config.ts`](../../package/.wiki/.public/vite.config.ts). *Vite has `import.meta.glob` and can build a whole book manifest with no build step of ours; rollup does not.* ***So the framework declares the seam and the application supplies the mechanism, and there is no third option.***

***PROPOSED — the resolver has one job:*** **given what an author wrote and the scope it was written in, answer a REFERENCE.** *The reference it answers carries both where to land and what kind of link it is, which is the whole of Doug's "we can even change what kind of reference it is."*

**Fetched through `$`, at the seat, per [the fetch corollary](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-fetch)** — so a book configures its own with a registration beside its Formats, and a single mention that needs something else takes one as a prop. ***One interface, two implementations: `import.meta.glob` in the demo today, binder-emitted in production, and the framework never learns which.***

***AND IT ANSWERS WHETHER `.wiki` RUNS UNBOUND: it does.*** **A hand-written resolver resolves across books with no binder at all**, and the binder later replaces it without the framework noticing.

## <a id="d-d"></a>D-D · How a reference resolves — the three ways React has, and which one we are

> ***Doug:*** **"How does reference usually work in React? How does react router get you from a to b? Any way to use paths to components? Can we just point at the book file? That might be the way the compiler does it?"**

| | what it is | verdict here |
|---|---|---|
| ***a route table*** | react-router maps strings to components and matches at runtime; a `<Link to>` holds a **string**, never the component | ***OUT by ruling*** — react-router was deleted in [sprint 45](47-sprint-45--the-second-writing.md) |
| ***a static import*** | `import Book from './physics/book'` — tsc checks it, the bundler resolves it | ***OUT by ruling*** — *"a link that resolves by importing a book is a variable rather than a reference"*, and it drags the whole target in to link to it |
| ***a lazy manifest*** | a map from address to loader — `{ 'physics': () => import('./physics/book') }` | ***THIS ONE*** |

***Why the manifest is right, and it is not a preference:*** **every specifier is literal, so tsc checks it and the bundler splits it — and a loader is not the book, so it stays a REFERENCE.**

> ***AND THE FRAMEWORK WAS BUILT FOR IT BEFORE ANYTHING NEEDED IT.*** **`read()` is declared `Promise<$Writing>` on `$Reference`, `$Ref`, `$Bookmark` and `$ReferenceCard`** — ***measured, all four*** — *and nothing in the library is async today. **An async read with no async source is a seam waiting for a manifest.***

***So "can we just point at the book file" is YES, and it is how the compiler does it*** — *v1 already did, and the evidence is in the working tree: the deleted `books.ts` and `routes.ts` were exactly that manifest, and [`build/library.ts`](../../build/library.ts) still carries `Book.route` and `Book.path` for it.*

## <a id="d-h"></a>D-H · The url, and the `#` is the module boundary

> ***Doug:*** **"We invented `subject/subject/.../book-name#...` is the format. I would do lowercase codes (switch to that — `sn`, `lr`) and that's the fully qualified url of something, and can we configure the router to recognize that?"**

***BOTH HALVES OF THAT URL ARE ALREADY BUILT, and they have never been introduced to each other*** — which is the finding of [the reference catchup](#measured) restated as a design.

| | what already computes it | where it lives today |
|---|---|---|
| ***`subject/subject/book-name`*** | [`routeOf(path, spoken)`](../../build/stages/walk.ts) — strips the dots, collapses a subject onto its own book | ***the v1 compiler***; `src` says "route" **zero** times |
| ***`#...`*** | [`$Heading.view()`](../../package/src/writing/Heading.tsx) draws `id="Order_of_article_elements"` — Wikipedia's own spelling | ***`src`***, drawn every render, checked by nothing |

***AND THE `#` IS NOT PUNCTUATION — IT IS THE MODULE BOUNDARY.*** **Everything before it says WHICH MODULE; everything after it says WHERE INSIDE IT.** *That is exactly the split [D-D](#d-d) arrives at from the other direction:*

| | | mechanism |
|---|---|---|
| ***across books*** | the part before `#` | **the manifest** — `{ 'physics/gauge-theory': () => import(…) }`, async, a loader |
| ***within a book*** | the part after `#` | **[`$Catalogue.follow()`](../../package/src/reference/Catalogue.tsx)** — synchronous, built, and already parses `/`-separated steps |

***So Doug's url format and the manifest are the same design reached twice.*** **PROPOSED**, and it is the answer to *"can we configure the router to recognize that"*: ***the manifest IS the router.*** *One emitted module from route to loader; the application matches `location.pathname` against it. **No router library** — [`main.tsx`](../../package/.wiki/.public/main.tsx) already does a crude version with `location.pathname.startsWith('/article')`, and react-router was deleted in [sprint 45](47-sprint-45--the-second-writing.md).*

**And "maybe chapters and sections because they have titles can be in route too" follows, with one thing said plainly:** *a chapter is not a module, so putting it in the path moves the `#` rightward without moving the boundary — the app translates `/physics/gauge-theory/history` into the same manifest key plus the same fragment.* ***That translation IS the router configuration he asked for, and it belongs to the application rather than to `.public`.***

### <a id="d-h-codes"></a>The codes go lowercase — ***SUPERSEDED WITHIN THE HOUR by [D-K](#d-k), which deletes them from the url entirely***

> ***Kept rather than rewritten, because the two rulings an hour apart are the clearest example in this chapter of [how his positions move](#evolution) — and because the `$landsOnIt` and `$Ref.read()` hazard below survives the supersession and still has to be dealt with.***

> ***Doug:*** **"I would do lowercase codes (switch to that — `sn`, `lr`)."**

***[`reflection.codes`](../../package/src/utilities/Reflection.tsx) reads `['Bk','Cr','Sn','Ph','Se','Wd','Lr']` today*** — **measured** — *and becomes `['bk','cr','sn','ph','se','wd','lr']`.* **One line, and it is the right change: a url is lowercase by convention, and these are url steps now rather than internal codes.**

***What breaks, and it must be checked rather than assumed:*** **[`ReferenceSpecification.$landsOnIt`](../../package/src/reference/Reference.tsx) compares `step.startsWith(\`${code}:\`)`, and [`$Ref.read()`](../../package/src/reference/Ref.tsx) tests `/^(?:[A-Z][a-z]?:)?\d/` — an EXPLICITLY UPPERCASE pattern.** *Both are measured, both must move together, and the second is the one a mechanical rename would miss.*

### <a id="d-h-names"></a>Names where there are names, codes where there are not

***PROPOSED, and it falls out of "everything with a title in a router":*** **a step is a NAME where the thing has one and a CODE where it does not.** *A book, a chapter and a section have titles; a sentence, a word and a letter do not.*

```
physics/gauge-theory#history/se:3
```

*the book by subject and name · the chapter by title · **the third sentence by code, because a sentence has no title***

## <a id="d-i"></a>D-I · Reference-hood may be MEANING rather than lineage — ***the decision Doug flagged for careful thought***

> ***Doug:*** **"We have multiple inheritance, so you can make a composition that implements reference. Or we can do this at the level of meaning, and we in some way validate meaning. That could be how we ensure that something is a reference — it has meaning — and the meaning of the reference just unfolds upward. Reference that has meaning can implement the reference interface by decoration, can it not? So there is a design decision that needs careful thought."**

***Two roads, and he is right that it is the sprint's most consequential undecided question.***

| | | what it costs |
|---|---|---|
| ***ROAD A — lineage*** | *a composition that IMPLEMENTS `$Reference$`.* `$Title extends $Composition implements $Reference$`, carrying `$TypeOfSection` for its level and `$TypeOfIndexCard` for its card-hood | **the interface must be satisfiable without the class** — *and [P40](../designing-inexplicable-phenomena/19-what-we-believe.md) is the standing warning: `$Writing` is not assignable to `$Writing$`, measured at 51 errors across 30 files* |
| ***ROAD B — meaning*** | ***a thing IS a reference because it HAS a meaning***, and the specification checks that rather than an ancestry. *No lineage anywhere; `$Reference` becomes the canonical class rather than the gate* | **it makes reference-hood universal** — *which [the binder chapter already argued](37-the-binder.md#the-reference): "All writing is a reference. It has meaning… so reference-hood is universal and a Link is the SPECIAL case, not the general one"* |

***ROAD B is the one the codebase already leans toward and nobody has said out loud.*** **`$Writing.meaning()` exists on the base.** *Every piece of writing can answer it. **Nothing about being a reference requires a lineage — the lineage is how we happened to build it.***

***And "the meaning of the reference just unfolds upward" turned out NOT to be the fallthrough this sprint had designed*** — **it is RESOLUTION walking outward to the nearest scope**, and conflating the two put a vacuous rule in this chapter. *[D-M](#d-m-coherence) is where that is caught and corrected.*

### <a id="d-i-measured"></a>And it is decidable by counting — ***ROAD B, measured***

***What ROAD A actually costs was not counted when the roads were drawn, and counting it settles them.*** **[`$Reference$`](../../package/src/reference/Reference.tsx) promises `$focused`, `path()`, `focus()`, `unfocus()` and `read()`, and it extends `$Annotation$`, which adds `specifically()`.** ***Six members — measured, read off the interface.***

**Five kinds want card-hood** — `$Title`, `$Author`, `$Subject`, `$IndexCard`, `$CatalogueCard`. ***Road A is therefore up to THIRTY members***, *or five one-line delegations each if every one forwards to what its meaning answers, which is twenty-five.* **Against a budget Doug set at ZERO new members, and against "we don't want to pollute."**

***ROAD B costs nothing, because the code already does it.*** **`$Writing.meaning()` is on the base; `$Writing.view()` already asks it and draws an anchor when it answers.** *Nothing implements `$Reference$` and nothing needs to: a caller asks `meaning()` and talks to the `$Reference` it hands back.*

***AND THE WORRY HE ATTACHED TO ROAD B ANSWERS ITSELF ONCE THE TWO CLAIMS ARE SEPARATED.*** *His question was whether "has a meaning" **admits everything we want and refuses everything we don't** — and it does not, on its own: a paragraph holding a link has a meaning and is not a card.*

> **So they are TWO CLAIMS and neither is the other:**
>
> ***HAVING A MEANING makes a piece of writing REFERENTIAL*** — universal, gradient, answered by the base.
> ***CARRYING `$TypeOfIndexCard` makes it a CARD*** — declared, checked, and refused to anything that does not say so.

***That is the framework's own two axes with nothing added:*** **the carried type declares what a thing IS; everything else is what it can DO.** *Meaning is a capability, card-hood is a declaration, and conflating them was the whole of the difficulty.*

> ***RECOMMENDED: ROAD B, with card-hood staying a carried type.*** **Doug's to overrule — and the number is the argument, not the taste: thirty members against none.**

## <a id="d-j"></a>D-J · Resolution is STATICALLY TYPED

> ***Doug:*** **"The thing that validates them — they will need to resolve. This is static typing on resolution."**

***That is stronger than a build check and it is the fourth purpose of the whole design*** — **P4: "Since libraries are relatively static, we will mostly check the thing statically on build, giving this system actually build time power. We're making a little compiled language."**

***PROPOSED: the binder emits string-literal union types, and a mention's copy is checked against them by `tsc`.*** **A mistyped title is then a COMPILER ERROR, not a runtime miss and not even a build report.**

```
the binder emits, per book:
    type ChaptersOfArticle = 'Order of article elements' | 'Body sections' | …

and the mention's copy is that type, so:
    <Chapter>Body sections</Chapter>     ✓
    <Chapter>Body section</Chapter>      ✗ tsc, at the typo
```

***AND HE ASKED FOR THIS BEFORE, IN THESE WORDS, AND IT WAS NEVER BUILT:*** **[chapter zero's Wave 4](00-planning.md#the-road) carries "binder-generated STRONG TYPING on subject names (misspellings fail tsc when the app is specified)".** *Same idea, one level over, written down 2026-09-03 and untouched since.* **This sprint is where it lands.**

*What it means for the demo: **an unresolved mention is not a runtime state to design for** — it is a state the compiler does not let you reach. **Which makes [what an unresolved mention draws](#open) a smaller question than this sprint had it, not a larger one.***

## <a id="d-e"></a>D-E · The theme is the WRITING's

> ***Doug:*** **"I would think theme would be on writing. The theme of the writing. If one was passed in it overrides, otherwise it is created — `$check` can do this — and validation can confirm that there is one."**

***What stands today, read from disk 2026-09-06 after session 41's change:*** **[`$Format`](../../package/src/writing/Format.tsx) finds a `$Theme` in the props block it was handed and otherwise makes one.** ***Nothing walks anywhere***, so a Format only ever has the theme its own construction was given; the walk to `book().theme` was deleted with `$Book.theme`.

***PROPOSED, and it is his sentence with no field spent:***

| | |
|---|---|
| **1** | ***`$Theme` becomes an `$Annotation` again***, with a `$TypeOfTheme`. *It was one — [The Default Dress](../designing-inexplicable-phenomena/13-the-default-dress.md) says so — and the code drifted off it.* **That is what lets a theme be WRITTEN INTO a block and found there** |
| **2** | ***`theme()` is a PROPERTY on `$Writing`*** — argumentless, returns data, so it sits in the property stack — answering *the theme written into this writing, else the theme of what holds it*. **Zero fields**, so no reactive bond on every letter and no `$Theme` per word |
| **3** | ***`$Book`'s bond does the one creation*** — `placed($TypeOfTheme, theme)`, find-or-make, once, at the top. **His "otherwise it is created"** |
| **4** | ***`$Format` walks `parent` to the nearest `$Writing` and asks `theme()`*** — nearest, not the book, **so a chapter that themes itself themes its own Formats** |
| **5** | ***a rule: a book carries a theme.*** **His "validation can confirm that there is one"** |

> ***AND IT COMPOSES WITH SESSION 41'S WORK RATHER THAN REVERSING IT.*** **`placed()` makes through `$check(kind, '!')`, which fetches through `$`** — *so a book registering `$(Wikipedia, Theme)(PortalTheme)` and writing no `<Theme>` gets a PortalTheme made for it.* ***The registration decides WHAT GETS MADE; a written theme OVERRIDES it.*** **Their DI and Doug's written-in override are the same seam at two ends, and neither has to go.**

*The cost this avoids is worth stating as a number: a field on `$Writing` is a field on every letter and every word, and [every bare-named field on a chemical is a reactive bond](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-reactive-law) whether anything watches it or not.*

## <a id="d-f"></a>D-F · The card is a reference — the chain, in Doug's own words

> ***Doug:*** **"I think we drop card and put IndexCard in reference and make it maybe a type of reference that means whatever its name or title would be, but it has other referential stuff on it too — that's the standard usage."**

```
$TypeOfReference
    $TypeOfReferenceCard        a list of references, the FIRST canonical
        $TypeOfIndexCard        + a NAME, and it means what the name names
            $TypeOfCatalogueCard    + the name is a book's TITLE
```

***`$IndexCard` is already in [`reference/`](../../package/src/reference/), so "put IndexCard in reference" costs nothing*** — *and [`$ReferenceCard`](../../package/src/reference/ReferenceCard.tsx) is already **half of his sentence**: a reference holding references with the first canonical. **What it lacks is a name.*** **So the chain is derivation, not duplication, and all three of his names survive coupled — which is what he asked for.**

***It also answers his own earlier objection.*** **"The card isn't in the book, it's in the library. The library that's closed under books has the card as annotative. It isn't real."** *A reference IS an annotation, so a card is not composed into the book:* **[`composed()`](../../package/src/writing/Writing.tsx) filters to the seven levels and a card is not one — measured.** *It rides along.*

***AND `$Card` DOES NOT EXIST TODAY***, so *"we drop card"* costs nothing but a promise not to introduce one.

### <a id="d-f-open"></a>Two consequences, raised rather than absorbed

**A cover today is *written in sections*, and its title, author and subject ARE those sections.** *If they become references, a cover composes nothing and `$writtenInSections` passes **vacuously rather than truthfully** — a rule that cannot fail is not a rule.* ***Owed: either a rule of the cover's own, or the cover keeps something compositional.***

**[`Parser.tokens()`](../../package/src/utilities/Parser.tsx) filters `$Annotation` out of the parse — measured.** *For a card in a catalogue that is correct: it is not part of what holds it.* ***For `<Title>` on a cover it may not be, and that is Doug's to rule.***

## <a id="d-g"></a>D-G · What the binder does, and what it may never do

> ***Doug:*** **"Let's assume the binder can help us fill in the missing content. Maybe we shouldn't do magically appearing references and we build a way to do compiler checked references that have nice syntax."**

***THE RULE UNDER THAT SENTENCE, said back for correction:*** **the binder may RESOLVE what an author wrote, and may never INVENT what they did not.**

| | |
|---|---|
| ***resolution*** | *what an author wrote becomes an address.* **Allowed, and it is the binder's whole job** |
| ***a report*** | *a table of contents that names four chapters where the book has five FAILS, naming the fifth.* **Allowed** |
| ***fetching*** | *the binder writes the missing mention itself.* ***That is the magic he ruled out*** — and it is also **hard**, in his word, because inventing a mention needs the target's title, which needs resolution, which is the thing being done |

***So a table of contents is HAND WRITTEN and CHECKED.*** **This is a reversal of where this sprint opened and it is a reason, not a drift: the self-filling contents was the single riskiest thing in the plan** — *it ran repeatedly, inside `specifically`, on instances [Solutions 52](../solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md) has now measured get remade.* **Hand-writing removes the risk and adds the check.**


## <a id="d-k"></a>D-K · The url spec, stress-tested

> ***Doug's spec:*** **`/subject/.../book/chapter?/section?#index/index/index/...`** — *"We get rid of labels since the order is fixed and that is the global url. And the chapters and sections are optional because maybe they will be registered in the router."*

***It works, and two of its claims are already true in the code.***

| the claim | state |
|---|---|
| ***the fragment is bare indices, no labels*** | ***MEASURED — it already parses.*** [`$Catalogue.follow()`](../../package/src/reference/Catalogue.tsx) reads a step as `kind:position` **or a bare position**: `step.includes(':') ? step.split(':') : [undefined, step]`. **`#0/2/1` follows today with no change to anything** |
| ***the order is fixed, so labels are unnecessary*** | **true, and it DELETES the codes rather than lowercasing them** — *which supersedes the lowercase-codes ruling of an hour earlier, and [the reason is his own](#evolution): a fixed-order path already says the level* |
| ***chapters and sections are optional*** | *that is the router's registration, and it is [D-C](#d-c)'s injected resolver deciding how deep the path goes* |

### <a id="d-k-slug"></a>The one thing the spec needs and does not have — ***a slug, with ONE home***

***A title becomes a url step by some transformation, and the codebase already has that transformation twice.*** **[`$Heading.view()`](../../package/src/writing/Heading.tsx) draws `id` from the copy with whitespace replaced by underscores, and [`$Book.contents()`](../../package/src/book/Book.tsx) writes the same expression again — measured, two sites.** *Meanwhile [`routeOf`](../../build/stages/walk.ts)'s `bare()` only strips leading dots, because folder names have no spaces.*

> ***So the url and the anchor MUST share one slug or they disagree by construction*** — *a chapter reachable at `/article/Order_of_article_elements` whose heading draws that same id agrees; anything else is two spellings of one name, which is [the fault this branch has already paid for](../the-condition-report/08-the-compiler.md#n34).* **PROPOSED: one slug, in a utility, used by the heading, the url step and the contents alike. It is a MOVE of an expression that exists twice, not a new member.**

### <a id="d-k-pages"></a>The page model — ***the spec does not depend on it, and that is the finding***

> ***Doug:*** **"But do we have a router? I want us to have multiple pages but maybe some are mini-spas that pull in other books and such. These are the questions and I don't know."**

***The same url serves all three page models***, which means **the page model can be deferred without leaving anything undecided.**

| | how `/physics/gauge-theory#0/2` is served |
|---|---|
| ***many pages*** | the host maps the path to a built page; **the browser navigates and the `#` works natively** |
| ***one application*** | the manifest matches the path and loads the book; `follow()` takes the fragment |
| ***a small application inside a page*** | a book registers its own chapters, so the path reaches further before the `#` — *which is exactly what "chapters and sections are optional" is for* |

***And the manifest serves all three*** — **in a many-pages build it is the build's page list; in an application it is the route table.** *So `.public` needs no router and no page model; it needs a resolver, which [D-C](#d-c) already forces to be injected.*

**What the spec does NOT say, and both want a rule:** *a title containing a `/`*, and *two chapters in one book with the same title* — **for which the fragment's bare indices are the standing fallback, since they always exist.**

## <a id="d-l"></a>D-L · Static typing by a TYPE import — ***and the ruling it seemed to contradict stands***

> ***Doug:*** **"TS has this with imports and references too I think. The easy way to integrate with typescript, since chapters are already things, is to simply point to the book or chapter file that you want. The book reference can point to the cover since we have no book component."**

***That looked like it contradicted a standing ruling, and it does not.*** **The ruling — [from The Author sprint](08-the-author.md) — is that *a link that resolves by importing a book is a variable rather than a reference*, and it is about a VALUE import.**

> ***A VALUE import makes the target a variable in your module. A TYPE import emits nothing at all.***
>
> `type BodySections = typeof import('./2-body-sections');`
>
> **`tsc` verifies the file exists and its shape; the emitted JavaScript carries no trace of it.** ***So a mention can be statically checked against a file and still hold nothing but a url at runtime*** — **the check without the variable, and both rulings stand.**

***And "the book reference can point to the cover since we have no book component" is a structural fact rather than a workaround:*** **there is no `book.tsx` in a source book — the binder emits one — but every book has a `.cover.tsx`.** *So a book's file, for the purpose of pointing at it, **is its cover** — which is what the v1 compiler already assumed: [`resolve.ts`](../../build/stages/resolve.ts) takes a reference's target as the cover file and derives the book as that path without its filename.*

## <a id="d-m"></a>D-M · What ROAD B does to `$Reference` — ***it telescopes out***

> ***Doug:*** **"Road B is better. No creating lots of members, but semantically speaking, it means reference effectively telescopes out. A reference is now a thing that refers directly to a location. It is the thing that sits between writing and what it means. But then any writing is like a reference in the UI, and we can steal meaning so that you can pass around other pieces of writing to get references. That is cool. There is just a path buried in there."**

| | |
|---|---|
| ***what `$Reference` becomes*** | **the thing between a piece of writing and what it means** — *narrow, and essentially a path with the ability to read* |
| ***what writing becomes*** | ***referential by having a meaning***, which is universal and needs no lineage |
| ***what the UI sees*** | *"any writing is like a reference"* — **and this is already true: [`$Writing.view()`](../../package/src/writing/Writing.tsx) draws an anchor whenever `meaning()` answers** |
| ***the use/mention pair, closed*** | *"you can pass around other pieces of writing to get references"* — **hand someone a piece of writing and they may USE it or MENTION it; `meaning()` is the second door** |

### <a id="d-m-coherence"></a>The coherence check he asked for — ***and it found a real fault in this chapter***

> ***Doug:*** **"Make sure this is coherent."**

***It was not, and the fault is mine.*** **This chapter's [R6](#requirements) had `meaning()` unfolding upward in four steps — mine, my opening's, MY CONTAINER'S, then the book I stand in.** *If meaning falls through to the book then **everything has a meaning**, and every rule of the form "this must have meaning" is vacuously satisfied.* ***A rule that cannot fail is not a rule***, and he is about to ask for three of them.

***The resolution is that TWO DIFFERENT UPWARD WALKS were being confused.***

| | walks upward | when |
|---|---|---|
| ***resolution*** | *a name is looked for in the nearest scope, then the next outward* | **at resolution.** ***This is what "the meaning of the reference just unfolds upward" means*** |
| ***`meaning()`*** | ***it does not walk at all*** | **it READS what this writing holds.** *A plain read, forever* |

***And what a title on a cover does instead:*** **the kind ASSIGNS its own meaning.** *`$TypeOfTitle.specifically` gives a title that has none a reference to the book it stands in — [the self-arrow](../the-semantics-of-books/16-the-reference-and-its-locator.md#two-loops) written down once rather than re-derived on every read.* **The assignment is find-or-make and therefore idempotent, which [Solutions 52](../solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md) requires of anything running there.**

> ***THREE CONSEQUENCES, and all three are improvements:***
>
> **[K2](#k2) is DELETED** — *the unproven third step no longer exists, so the sprint's second-largest risk is gone rather than mitigated.*
>
> **The rules become failable** — *"a card title has meaning" can now be broken, which is the whole point of writing it down.*
>
> **The upward reach happens ONCE, at specify, instead of on every read.**

### <a id="d-m-line"></a>`$Line`, and the three rules

> ***Doug:*** **"it can be that the card title has to have meaning. On IndexCard you can export a Line perhaps and the canonical always has to have meaning! — references better have meaning"**

***`$Line` is his word and it is already the branch's:*** *"an IndexCard can have a name and lines which are pieces of writing"* — **and [The Wikipedia Fit](../designing-inexplicable-phenomena/18-the-wikipedia-fit.md) maps it exactly: an infobox's label and data together are ONE LINE.**

| | the rule | on |
|---|---|---|
| **1** | ***a reference has meaning*** | `ReferenceSpecification` — *and it can only be written now that meaning stopped falling through* |
| **2** | ***a card's title has meaning*** | `IndexCardSpecification` |
| **3** | ***a card's canonical line has meaning*** | `IndexCardSpecification` — **"the canonical" is the FIRST, following [`$ReferenceCard`](../../package/src/reference/ReferenceCard.tsx)'s existing "a list of references, the first canonical"** |

***One caution about where `$Line` lives.*** **[The file is the WORD](../designing-inexplicable-phenomena/07-the-unit-of-code.md)**, so `$Line` in `IndexCard.tsx` is right *only if a line is always a card's line*. **If a line is general writing, it earns its own file.** *He wrote "perhaps", so it is recorded as his to settle rather than assumed.*



# <a id="the-reflection"></a>THE REFLECTION

*Doug, 2026-09-07: **"Do a deep reflection and come up with the plan. Remember minimalism, obviousness, elegance, not being more than necessary, being motivated and useful, and solving the problem in the context of all of that."*** *What follows is that reflection and the plan it produced.*

## <a id="r-errors"></a>Six corrections, and they are ONE error

***Every correction Doug made to this design was the same mistake wearing different clothes.***

| | I proposed | he corrected it to | what I had done |
|---|---|---|---|
| **1** | *delete `$Abstract`, a byte-identical duplicate* | **keep it; make it interesting** | *removed a word instead of finding its job* |
| **2** | *"locator" as the noun for what a `$$` holds* | ***struck*** | **coined a word for a thing that had one** |
| **3** | *a mention is a target plus a **projection*** | **a mention is named for what it represents** | **coined a concept for a thing that had one** |
| **4** | *`meaning()` falls through to the container, then the book* | ***the title's meaning IS the card's*** — it propagates outward | *invented a direction; the true one was the reverse* |
| **5** | *the table of contents fills itself* | **hand written, compiler checked** | *automated what wanted validating* |
| **6** | *the resolver is configurable, as a convenience* | ***it is forced*** | *under-read the constraint* |

***FIVE OF THE SIX ARE ONE FAULT: adding a mechanism where the domain already had one.*** **And it is [Solutions 50's `surface-blind`](../solutions/50-the-demo-that-wrote-itself-a-framework.md) at a different altitude** — *there, local code quality decided what only position could; here, local design elegance decided what only the domain could.* **In both, careful reading produced careful wrong work, because the reading was of the wrong thing.**

> ***THE HABIT THAT WOULD HAVE CAUGHT ALL FIVE:*** **before naming a mechanism, ask what a library already calls it — and before adding a direction, a fallthrough or a projection, ask whether the thing already moves in some direction of its own.** *A card's meaning was always its title's; nobody had to decide that.*

## <a id="r-shape"></a>What the design IS, in one page

***Everything below follows from one sentence.***

> ***A MENTION IS A PIECE OF WRITING WHOSE MEANING IS ANOTHER PIECE OF WRITING.***

| | |
|---|---|
| ***how it says which*** | **its copy is the name**, and resolution walks outward to the nearest scope |
| ***how it is checked*** | **the binder emits the names as types**, so a wrong one is a `tsc` error at the typo |
| ***how meaning moves*** | ***outward, from the part to the whole*** — a card's meaning is its title's meaning |
| ***what a mention draws*** | **nothing of its own.** [`$Writing.view()`](../../package/src/writing/Writing.tsx) already draws an anchor whenever `meaning()` answers |
| ***what a url is*** | **`/subject/.../book/chapter?/section?#index/index/...`**, and the `#` is where the module ends |
| ***who resolves*** | **an injected resolver**, because rollup and vite find modules differently and `.public` cannot know |

***And Doug's correction of the direction is what makes it minimal.*** **Because meaning propagates outward from what is written, a card needs no `name()`, no `lines()`, no `reference()` and no `view()` — it needs a title, and one override that says its meaning is the title's.**

## <a id="r-minimal"></a>The arithmetic — this design is NET NEGATIVE

*Counted rather than claimed, from the files as they stand 2026-09-07.*

| | |
|---|---|
| ***new members on existing classes*** | ***ONE*** — `theme()` on `$Writing`, and it is a property |
| ***new words*** | ***THREE*** — `$$Book`, `$$Chapter`, `$$Section`, each four declarations on a template that exists four times |
| ***new kinds beyond those*** | ***none.*** `$Line` was proposed and withdrawn by Doug; `$Card` was never introduced |
| ***renamed*** | `rep` → `mention` · `means()` → `meaning()` |
| ***OVERRIDDEN, not added*** | `$IndexCard.meaning()` answers its title's |
| ***DELETED*** | `lines()` · `name()` · **5 `view()`** · **4 `reference()`** · **4 `heading()`** · `$Book.contents()` (20 lines) · the seven codes |

***One member spent, three words added, and nineteen members plus twenty lines removed.*** **That is the whole argument for the design, and it is arithmetic rather than taste.**

---

# <a id="the-plan"></a>THE PLAN

***Eight phases, in dependency order. Each says what runs, what it touches, and what is VISIBLE when it is done.*** *A phase with no visible end says so.*

## <a id="p1"></a>Phase 1 — the vocabulary
**P1** · `rep` → `mention`, `means()` → `meaning()`, `reflection.means()` → `reflection.meaning()`.
*A pure rename across `Writing.tsx`, `Reflection.tsx`, `Section.tsx`, `Word.tsx`, `Sentence.tsx`, `Paragraph.tsx` and every caller.* **No behaviour changes and there is nothing to see** — *stated so it is not mistaken for a reviewable end.*

## <a id="p2"></a>Phase 2 — meaning propagates outward
> ***Doug:*** **"just implement the meaning to return that of the title and validate that the title of the card has meaning"**

**P2** · `$IndexCard.meaning()` returns its title's meaning. ***`lines()` and `name()` are DELETED.***
**P3** · `$Title`, `$Author`, `$Subject` delete `view()`, `reference()` and `heading()`; they are cards, and the base draws the anchor.
**P4** · Two rules on `IndexCardSpecification`: ***a card's title has meaning***, and ***a card means what its title means*** — checkable by sameness, which is Doug's own test.

***VISIBLE:*** `grep -c "Anchor href" src/` **falls from 8 to 3**, and every page draws exactly as before.

## <a id="p3"></a>Phase 3 — the three mentions
**P5** · `$$Book`, `$$Chapter`, `$$Section`, each with `$TypeOf$X extends $TypeOfReference`, a specification, and a **lowercase** component export — `book`, `chapter`, `section`.
**P6** · A mention's meaning is **the writing it points at**, with no constraint on what that writing means.
**P7** · `$$TableOfContents`, `$$Index`, `$$Cover` — **they exist**, because their written kinds have classes.

***VISIBLE:*** a hand-written table of contents drawn from `<Chapter>` mentions, in the browser.

## <a id="p4"></a>Phase 4 — the url and its slug
**P8** · ***One slug, one home.*** The expression `$Heading` and `$Book.contents()` each write today moves to a utility and is used by the heading's id, the contents' links and the url step alike — *so the url and the anchor agree by construction rather than by luck.*
**P9** · `$Path` accepts `/subject/.../book/chapter?/section?#index/...`; **the seven codes come out of the url.** *The uppercase pattern in [`$Ref.read()`](../../package/src/reference/Ref.tsx) moves with them — it is the site a mechanical rename would miss.*
**P10** · ***Names where unique, indices where not.*** A step that is a plain number is an index; a name that matches two things **fails the build naming both**, and the index is how the ambiguous one is reached. ***This is what makes Doug's book-with-every-chapter-named-the-same expressible.***

***VISIBLE:*** a book whose chapters share one title, every one of them addressable and drawn.

## <a id="p5"></a>Phase 5 — resolution
**P11** · The resolver: **given what an author wrote and the scope it stands in, answer a reference.** Fetched through `$` at the seat, so a book configures its own and one mention may take another as a prop.
**P12** · A demo resolver over `import.meta.glob` — **which is why `.wiki` runs before the binder exists.**

***VISIBLE:*** a mention in one book resolving to a chapter in another, in the browser, with no build step.

## <a id="p6"></a>Phase 6 — the binder
**P13** · The emitted manifest: **route → loader**, one literal specifier per book so `tsc` checks it and the bundler splits it. *A book's file is its `.cover.tsx`, since no `book.tsx` exists in a source book.*
**P14** · The emitted **union types** of every valid name, so a mistyped title is a compiler error. *This is [chapter zero's Wave 4 ask](00-planning.md#the-road), written 2026-09-03 and untouched since.*
**P15** · The checks: ***a table of contents names every chapter*** · ***an ambiguous name fails, naming the candidates*** · ***every mention resolves.*** **The binder may RESOLVE what an author wrote and may never INVENT what they did not.**
**P16** · ***A directory per addressable thing***, because the host is GitHub Pages and serverless — *which is what makes `/subject/book/chapter` work with no server rewriting, and it is a static-site emit rather than a router.*

***VISIBLE:*** a hand-written contents missing one chapter **fails the build naming it** — ***the stop condition, and no hand-authored page can fake it.***

## <a id="p7"></a>Phase 7 — the theme
**P17** · `$Theme` becomes an `$Annotation` with a `$TypeOfTheme`, so it can be **written into a block and found there**.
**P18** · `theme()` — ***the sprint's one new member*** — a property on `$Writing` answering the theme written into it, else what holds it.
**P19** · `$Book`'s bond makes the one default through `placed()`, so **a registration decides what gets made and a written theme overrides it**. *Session 41's DI and Doug's written-in override are the same seam at two ends.*
**P20** · A rule: ***a book carries a theme.***

***VISIBLE:*** a chapter with its own theme drawn beside one without, in the browser, on the same page.

## <a id="p8"></a>Phase 8 — seen
**P21** · `.wiki/.article` carries a hand-written table of contents, a chapter mention with a summary, and a book whose chapters share a title. Driven at 390, 820 and 1280. ***Remember the demo exists in two trees and only `.wiki/.public` is served.***

***VISIBLE:*** ***the whole sprint.*** [No feature ships unseen](../designing-inexplicable-phenomena/11-the-coding-style.md#seen).

## <a id="p-order"></a>What the order is FOR

***Phases 1–3 are pure subtraction and can land before anything else is decided.*** **Phases 4–6 are the url, and each one is useless without the one before it.** *Phase 7 is independent of all of them and could go first if the theme is more urgent.* **Phase 8 is not a phase so much as the gate on every one above it.**

***Nothing in phases 1–3 depends on the binder***, which is the point: **the framework gets smaller before the compiler gets written**, and the compiler is then written against a framework that has stopped moving.


---

## <a id="evolution"></a>THE EVOLUTION OF THE RECOMMENDATIONS — where Doug's position MOVED, and why

***Kept because a long design conversation loses this first, and because [a later word does not supersede an earlier one by arriving later](../../../../.claude/library/teamspeak/03-discussion.md) — a real change comes with a reason and a slip comes with nothing.*** **Every move below came with a reason, which is what makes it a change rather than a slip.**

| | it started at | it settled at | the reason he gave |
|---|---|---|---|
| **the contents** | *"they might also be able to be configured to pull in the summary"* — automatic | ***hand written, compiler checked*** | **"fetching the missing ones is hard"** · **"maybe we shouldn't do magically appearing references"** |
| **the export name** | `ChapterRef` | `ChapterMention` | *the mention/meaning pair, "those are a cool pair of words"* |
| | `ChapterMention` | ***lowercase `chapter`*** | **"BookMention was just the export because we needed a name. We almost always import as something else... you case book as needed"** |
| **the word "mention"** | *on the class, the type and the export* | ***only on `$Writing.mention`*** | **"Okay no more mention, except in the property name"** |
| **`$IndexCard`** | *an annotation* → *a kind of type* | ***a kind of REFERENCE*** | **"that's the standard usage"** |
| **`about`** | *"introduce a property for perhaps about"* | ***never added*** | **"we can do that by having the synopsis find the book like the Title card does"** |
| **`$Abstract`** | *(this sprint proposed deleting it as a byte-identical duplicate)* | ***kept*** | **"Don't change my names of components... I would find ways to make them interesting where possible"** |
| **the resolver** | *"maybe it's in the props"* — a convenience | ***forced*** | *the framework cannot know how modules are found — **rollup and vite differ**, measured* |
| **`$$X`** | *the mention of a thing* | ***the mention AND the thing that finds it*** | **"why don't we make this the `$$` classes"** |
| **the codes** | *lowercase, sn and lr* | ***deleted from the url entirely*** | **"we get rid of labels since the order is fixed"** — *a fixed-order path already says the level.* ***A move he made against himself within the hour, and the later one carries the reason*** |
| **the page model** | — | ***deliberately not chosen*** | **"do we have a router?... These are the questions and I don t know"** — *and [D-K](#d-k-pages) finds the url serves all three, so it need not be chosen* |
| **the url** | *"compiler checked references that have nice syntax"* — a shape | ***`subject/subject/.../book-name#...`***, with **lowercase codes** | *"that's the fully qualified url of something"* — **a url is lowercase, and these are url steps now rather than internal codes** |
| **the scoping syntax** | *slash or nested brackets, "let's figure that out soon"* | ***the slash, settled by the url itself*** | *the url he then gave uses `/` throughout; the bracket form was never returned to* |
| **what a mention IS** | *(this chapter proposed "a target plus a PROJECTION")* | ***named for the thing it represents*** | **"I assume `$$` classes are named for the thing they represent. So don't be confused there."** — ***this one was MY error, not his move, and is corrected at [D-B](#d-b)*** |
| **the word for it** | *"locator", carried in from [chapter 16](../the-semantics-of-books/16-the-reference-and-its-locator.md)* | ***STRUCK*** | **"You invented locator... Delete that terminology"** — *and chapter 16's own names table had already flagged it as the research's word rather than his* |

| **`$Line` and a card's lines** | *"On IndexCard you can export a Line perhaps"* | ***withdrawn; `lines()` DELETED*** | **"I don't think those lines matter — remove them. It's a thing with a title and the meaning of the title is the meaning of the card"** |
| **which way meaning moves** | *(this chapter had it falling INWARD, a part borrowing its container's)* | ***OUTWARD, from the title to the card*** | **"the thing written has its meaning propagate out"** — ***my error, not his move***, and the true direction was the reverse of the invented one |
| **what a mention's meaning IS** | *(this chapter had it constrained by what the target itself means)* | ***the writing it points at, flat*** | **"the mention MEANS that writing without any constraint on what the writing itself means"** |
| **unique titles** | *a uniqueness rule was offered and refused* | ***names where unique, indices where not*** | **"We want the book with chapters all named the same!!"** — *a requirement, stated as an exclamation* |
| **the page model** | *"do we have a router?... I don't know"* | ***DECIDED: GitHub Pages, serverless, each real page an SPA, pages at the book level*** | *and it confirms the url's `#`: the path before it is a real directory a static host serves* |
| **`$$TableOfContents` · `$$Index` · `$$Cover`** | *asked: "do we want them too?"* | ***they exist*** | **"TableOfContents, Index and Cover should have classes and then it makes sense for those to exist"** |

***WHAT DID NOT MOVE, across every turn of the conversation:*** **as few members as possible · maximize validation · mostly structure with the rest through Format · no invented language · his names are not ours to delete · the demo may invent content and not kinds.** *Those are the constants, and every ruling above is consistent with all six.*

## <a id="open"></a>WHAT IS STILL OPEN

*Three questions closed this round and are moved to [The Evolution](#evolution); what remains is below, smallest first.*

1. ***`$$TableOfContents`, `$$Index`, `$$Cover` — do they exist at all?*** Doug asked "do we want them too?"; the answer proposed here is **types with no classes**, per [Shells Over Types](../designing-inexplicable-phenomena/14-shells-over-types.md), since none holds data a shell does not. ***Not confirmed by him.***

2. ***How far the url reaches into a book.*** [D-H](#d-h) puts the `#` at the module boundary and says an application may translate chapters into the path. **Whether `.public` should know anything about that translation, or whether it is wholly the application's, is unruled.**

3. ***ROAD A OR ROAD B — ANSWERED BY COUNTING, and Doug's to overrule.*** *Is reference-hood a **lineage** or a **meaning**?* **[D-I](#d-i-measured): `$Reference$` promises six members, five kinds want card-hood, so Road A is up to thirty members against a budget of zero — and Road B costs nothing because the base already answers `meaning()`.** ***Recommended: Road B, with card-hood staying a carried type***, which is what answers his own worry — meaning is a capability, card-hood is a declaration, and conflating them was the difficulty.

4. ***What the card panel would have said.*** *Five independent readings of what an `$IndexCard` is were dispatched and the run was lost with no results.* **Nothing in [D-F](#d-f) rests on it**, and it is recorded so nobody assumes it informed this.

---

## <a id="units"></a>Units of work

***The work of this sprint is the DESIGN*** (Doug, 2026-09-06). *The units below are what the design must produce; the build units they imply are named but are not this sprint's deliverable.*

*Identifiers are never renumbered. A split keeps the original on the original concept. Gaps are never backfilled.*

### <a id="u1"></a>U1 — the vocabulary: `mention` and `meaning`
- **mechanism:** a rename, and nothing runs that did not run before. `$Writing.rep` → `mention`; `$Writing.means()` → `meaning()`; `reflection.means()` → `reflection.meaning()`.
- **files:** `writing/Writing.tsx` · `utilities/Reflection.tsx` · `writing/Section.tsx` · `writing/Word.tsx` · `writing/Sentence.tsx` · `writing/Paragraph.tsx` · every caller found by grep
- **depends on:** nothing
- **demo contribution:** none of its own — it is the vocabulary everything below is written in. *Stated so it is not mistaken for a reviewable end.*
- **realizes:** R5

### <a id="u2"></a>U2 — the meaning reading, ***two steps and no fallthrough***
- **mechanism:** `reflection.meaning(writing)` answers, in order — a `$Reference`-typed annotation the writing holds; one its opening holds; **what its container means**; otherwise undefined. `$Writing.view()` already draws the anchor from whatever it answers.
- **files:** `utilities/Reflection.tsx`
- **depends on:** U1
- ***THE PROBE THIS UNIT OWED IS GONE, and so is the step it was probing.*** *This read: steps one, two and four are live code, step three is unproven, probe it before building.* **[D-M](#d-m-coherence) DELETED step three and step four** — meaning does not walk upward at all — *so the reading is two steps of live code and there is nothing left to prove.* **A kind that structurally means something assigns its own meaning in `specifically`, which is a different unit's work and a different risk.*
- **demo contribution:** every anchor on `/` and `/article` still draws, from one reading instead of six
- **realizes:** R6

### <a id="u3"></a>U3 — five drawings delete into the base
- **mechanism:** each of the five deletes its `view()`, and its `reference()` and `heading()` where those only fed it.
- **files:** `book/Title.tsx` · `book/Author.tsx` · `book/Subject.tsx` · `reference/IndexCard.tsx` · `book/CatalogueCard.tsx`
- **depends on:** U2
- **demo contribution:** ***`grep -c "Anchor href" src/` reports 3, down from 8***, and the pages are unchanged
- **realizes:** R6, R7

### <a id="u4"></a>U4 — `$$Book`, `$$Chapter`, `$$Section`
- **mechanism:** the [`Word.tsx`](../../package/src/writing/Word.tsx) template, verbatim in shape — interface, class, `$TypeOf$X extends $TypeOfReference`, specification, and the lowercase component export. The bond calls `super` first and adds `$TypeOf$X`.
- **files:** `book/Book.tsx` · `book/Chapter.tsx` · `writing/Section.tsx` · `index.ts`
- **depends on:** U1
- ***SEAM:*** `Book.tsx` is shared — see [the seams](#seams)
- ***NOTE:*** `Section.tsx` already holds `const section = Section`. [The Shape of TSX](../designing-inexplicable-phenomena/16-the-shape-of-tsx.md#naming) rules it: the file-local alias moves, the export does not.
- **demo contribution:** a table of contents written by hand with `<Chapter>` draws in the browser
- **realizes:** R1, R3, R4

### <a id="u5"></a>U5 — a mention derives its level
- **mechanism:** `$TypeOf$Chapter.specifically(mention)` adds the type its container composes — `mention.parent.type()?.below()` — defaulting to `$TypeOfParagraph` when there is no container. `addType` is already idempotent, so repeated runs do not accumulate.
- **files:** `book/Chapter.tsx` · `book/Book.tsx` · `writing/Section.tsx`
- **depends on:** U4
- ***RISK [K1](#k1) — and the fallback this unit first carried is WITHDRAWN.*** *It said: fix the level in the bond instead. **Session 41 measured that the bond is not safer** — the instance beneath it is remade too.* **What replaces it is a rule rather than a location: the derivation reads `parent` and `below()` and writes through `addType`, which is find-or-make; it must answer the same thing on every fresh instance, and it must mutate nothing else.**
- **demo contribution:** a mention inside a table specifies green as a paragraph; the same mention inside a book specifies green as a chapter
- **realizes:** R2, R18

### <a id="u6"></a>U6 — the three cards descend from the book mention
- **mechanism:** `$TypeOfTitle`, `$TypeOfAuthor`, `$TypeOfSubject` change their `extends` from `$TypeOfSection` to `$TypeOf$Book`. One line each.
- **files:** `book/Title.tsx` · `book/Author.tsx` · `book/Subject.tsx`
- **depends on:** U4, U3
- ***INTERACTS WITH [U13](#u13).*** *If the card question rules that a card is annotative, this unit's parentage changes with it. **Build U6 last of the buildable units**, or hold it for U13.*
- **demo contribution:** the encyclopedia cover's title, author and subject draw as today; a title inside a card resolves to that card's book
- **realizes:** R8, R9

### <a id="u7"></a>U7 — `placed()` moves to `$Composition`
- **mechanism:** the method moves verbatim; `$Book` keeps calling it. It is find-or-make and therefore idempotent, which U9 depends on.
- **files:** `writing/Composition.tsx` · `book/Book.tsx`
- **depends on:** nothing
- ***SEAM:*** `Book.tsx`
- **demo contribution:** none of its own — it is what U9 stands on
- **realizes:** R14

### <a id="u9"></a>U9 — the table of contents fills itself — ***SUPERSEDED by [D-G](#d-g): it is HAND WRITTEN and CHECKED***

> ***The unit is kept with its identifier because [scenarios S9–S11](#scenarios) and [R10, R12, R15](#requirements) cite it.*** **What replaces it is smaller: `$Book` places nothing, `$TableOfContents` fills nothing, and [U11](#u11)'s rule does the work.** *The mechanism below is the record of what was designed before the binder ruling, and it is why [K1](#k1)'s exposure fell from two units to one.*
- **mechanism:** `$Book`'s bond places an EMPTY table of contents through `placed()`. `$TypeOfTableOfContents.specifically(writing)` then reads `writing.book().chapters`, places a `$Title` and a `$Table`, and fills the table with a mention per chapter. *A reading, never a construction in a view — [Solutions 51](../solutions/51-the-chapters-a-book-drew-empty.md) and [the view law](../designing-inexplicable-phenomena/14-shells-over-types.md#the-view-law).*
- **files:** `book/TableOfContents.tsx` · `book/Book.tsx`
- **depends on:** U4, U5, U7
- ***RISK [K1](#k1) — and the mechanism above may be revisable.*** *Session 41's chemistry change gives a top written in a view its parent **at derivation, before its bond runs**, so a bond constructor's `$(X)` resolves outward from its place, and they add: "if your table of contents asks the scope in its bond, it will be answered from the book."* **That is about the SCOPE, not about the book INSTANCE, and a table of contents placed by `$Book`'s bond is not written in a view — so the bond may still not reach `chapters`.** ***Probe it; do not assume it either way.*** *If the bond can reach the book, D7 is revisited and the filling moves there; until measured, `specifically` stands.*
- **demo contribution:** ***`/article` draws a table of contents with five entries, every one resolving to its heading***
- **realizes:** R10, R12, R15

### <a id="u10"></a>U10 — `$Book.contents()` deletes
- **mechanism:** the twenty lines go, with the four imports that only fed them.
- **files:** `book/Book.tsx`
- **depends on:** U9
- ***SEAM:*** `Book.tsx`
- **demo contribution:** `Book.tsx` line count stated before and after
- **realizes:** R12

### <a id="u11"></a>U11 — the specifications stop being empty
- **mechanism:** six `@specify`-labelled `$`-prefixed methods, each declaring its parameter, on specifications that today hold nothing. *A rule is derived, decorated, or waived by returning `false` — no other mechanism.*
- **files:** `book/TableOfContents.tsx` · `book/Chapter.tsx` · `book/Title.tsx`
- **depends on:** U5, U9
- **demo contribution:** ***THE STOP CONDITION.*** *A hand-written table of contents in `.article` that omits `2-body-sections` fails `specify()` naming that chapter.* **No hand-authored page can fake it**
- **realizes:** R16, R17, R18, R19, R20, R21

### <a id="u12"></a>U12 — the demo shows it, in the real browser
- **mechanism:** `.wiki/.article` gains a hand-written `.table.tsx` and one chapter mention carrying a summary; the page is driven at three widths.
- **files:** `.wiki/.article/.table.tsx` · `.wiki/.article/.chapter.tsx`
- **depends on:** U9, U11
- ***NOT `.wiki/.encyclopedia/` — that book is session 41's.*** *See [the seams](#seams).*
- ***THE DEMO HAS TWO TREES AND AN EDIT TO ONE IS INVISIBLE.*** **`.wiki/` is the source and `.wiki/.public/` is the served copy — the vite root — and they mirror file for file** (session 41, measured 2026-09-06, having edited both by hand). *[`build.mjs`](../../package/.wiki/.public/build.mjs) is what lifts one into the other, and it **refuses to run outside `.wiki/.public`** because it once ran from `.wiki` and deleted the whole untracked demo.* **Run the build; never hand-edit one tree and believe the page.**
- **demo contribution:** ***the whole sprint, seen.*** [No feature ships unseen](../designing-inexplicable-phenomena/11-the-coding-style.md#seen)
- **realizes:** R7, R13

### <a id="u15"></a>U15 — the last struck word
- **mechanism:** rename the one `describe` in the suite that still says a struck word, naming the cover, the synopsis, the table of contents and the index instead.
- **files:** `src/tests/book.test.tsx`
- **depends on:** nothing
- **demo contribution:** none — *a record kept true, and it is the only such occurrence in the package.*
- **realizes:** [CU5](#cu5)

### <a id="u13"></a>U13 — ***DESIGN OWED: what an `$IndexCard` is***

***No files. No scenarios. No dependencies. It is not buildable and must not be started.***

**What must be designed, in Doug's own framing:** *"The card isn't in the book, it's in the library. The library that's closed under books has the card as annotative. It isn't real."* — against — *"make card a kind of type that is also a thing you write on. Can't you write down what a type is on a card? You write down a recipe there, which is not the recipe itself... maybe IndexCard and Card are different? Maybe we just have IndexCard be the kind of card that is also a type? Its interface can be both even if it comes from type."*

**The candidate readings, none chosen:** *(a) it stays a `$Composition` at section level; (b) it becomes an `$Annotation`; (c) it becomes a kind of `$Type`; (d) it becomes a kind of `$Reference`; (e) it stays a `$Composition` that CARRIES a mention type.*

***One finding may decide it and must be checked against the line:*** **[`Parser.tokens()`](../../package/src/utilities/Parser.tsx) filters `$Annotation` out of the parse.** *If a card becomes an annotation it stops being parsed and stops being found by `searchFor` — which would settle "don't we want them to be annotations?" against itself.*

**Also owed here:** whether `$IndexCard` and `$Card` are two kinds, and how one book is filed three ways.

### <a id="u14"></a>U14 — ***DESIGN OWED: how a table's type derives from its cells***

***No files. No scenarios. No dependencies.***

**Doug ruled the WHAT** — *"make that dependent on the type it gets for its cells... if they are paragraphs it is a section and it assigns that type"* — **and the HOW is not designed.** *`$TypeOfTable extends $TypeOfSection` is a static fact of the class; un-fixing it changes what a table IS, which is more than a line. The likely shape is that `$TypeOfTable` names no level and the table carries a derived composition type beside it under [L8](../designing-inexplicable-phenomena/17-the-interface-type-system.md#two-axes), but that has not been worked and must not be assumed.*

**Until it is designed, `$Table` stays as it is** — a section — which is what the derivation would answer for a table of paragraphs anyway, so **U9 does not block on it.**

## <a id="scenarios"></a>Test scenarios

*Each names input, action and expected outcome, and cites the acceptance example it covers.*

| | unit | input · action · outcome |
|---|---|---|
| **S1** | U1 | *no occurrence of `rep` or `means` remains in `src`* · grep · **zero** |
| **S2** | U2 | *a title holding no reference, inside a cover* · `meaning()` · **answers the book it stands in** (step 4) |
| **S3** | U2 | *a title holding no reference, inside a chapter mention that means `Cr:1`* · `meaning()` · **answers what the mention means** (step 3) — ***the unproven step*** |
| **S4** | U2 | *a title whose heading holds a `$Ref`* · `meaning()` · **answers that reference** (step 2), and step 1 does not fire |
| **S5** | U3 | *the encyclopedia cover* · draw · **the same anchors as today, at the same three widths** |
| **S6** | U4 | *a `<Chapter>` mention written into a table* · specify · **green**, and it draws its chapter's title |
| **S7** | U5 | *the same mention written into a book instead* · specify · **green as a chapter** |
| **S8** | U5 | *a mention with no container at all* · specify · **green as a paragraph** — the default |
| **S9** | U9 | *a book with chapters and no table of contents* · bond then specify · **a contents appears, listing every numbered chapter** — AE1 |
| **S10** | U9 | *a book with a hand-written table of contents* · bond then specify · **theirs is kept, unmodified** — AE1 |
| **S11** | U9 | *a book whose cover, synopsis and index are present* · `chapters` · **none of the four appears in the contents** |
| **S12** | U11 | *a hand-written contents omitting one chapter* · specify · ***FAILS, naming the omitted chapter*** — **AE2, the stop condition** |
| **S13** | U11 | *a book subclass waiving R16* · specify · **green with an incomplete contents** — R21 |
| **S14** | U11 | *a chapter mention holding a paragraph that is neither title nor summary* · specify · **fails** — R19 |
| **S15** | U12 | *`/article` in the real browser at 390, 820 and 1280* · drive · **every contents entry resolves; 0 unresolved, 0 page errors** — AE1 |
| **S16** | U5, U9 | ***the conjunction session 41 marked as READ RATHER THAN RUN*** — *a book drawn repeatedly, its contents and one chapter mention instrumented* · count bonds and `specifically` runs per frame · **the derived type and the placed contents are the SAME after N frames as after one** — [K1](#k1) |

## <a id="acceptance"></a>Acceptance examples

- **AE1** — `.article` renders with its table of contents; every entry resolves to its heading. *Today's measurement to beat: 10 anchors, 5 inward, 0 unresolved.*
- **AE2 — THE STOP CONDITION.** A hand-written table of contents omitting a chapter **fails, naming it.** ***A hand-authored page cannot fake this.***
- **AE3** — `grep -c "Anchor href" src/` reports **3**, down from 8.
- **AE4** — `Book.tsx` no longer declares `contents()`; line count stated before and after.
- **AE5** — ***chemistry is untouched BY THIS SPRINT.*** *Session 41's chemistry changes — the find-or-make fix, the parent given at derivation, the augment walk — are theirs, are excluded from this claim by name, and this sprint may not report their green as its own.*
- **AE6** — `tsc` **0** in `src` and `.wiki`; **lib vitest ≥ 88**; chemistry vitest **868**. *Measured as a DELTA, never an absolute: lib stood at 89 when this sprint opened and session 41's theme removal took it to 88 by deleting the promise that no longer describes anything. **The baseline this sprint is measured against is 88, and that number was not mine.***

## <a id="seams"></a>The seams — coordination with session 41

***Session 41 is working the theme, live, and we share one file.*** *Measured 2026-09-06: `.wiki/.encyclopedia/.book.tsx`, `src/book/Book.tsx`, `src/tests/book.test.tsx`, `src/writing/Format.tsx` and `chemistry/.../chemical.ts` all changed within thirty minutes.*

| | |
|---|---|
| ***`src/book/Book.tsx`*** | ***RESOLVED 2026-09-06.*** **Session 41 landed it and reported: "I removed `theme` from the interface, the class field, the bond line and the `$Theme` import, and nothing else. `contents()` and `placed()` are untouched. It is yours from here."** *U4, U7, U9 and U10 proceed against the file as it now stands, re-read from disk* |
| ***`.wiki/.encyclopedia/`*** | ***THEIRS.*** *`$(Wikipedia, Theme)(PortalTheme)` is made and measured, in **both** trees. This sprint's demo work is `.wiki/.article/` only — [U12](#u12)* |
| ***`src/writing/Format.tsx`*** | **theirs.** *`theme` is now a plain property fetched through the component, and `$Book.theme` is gone — **which removes a line U4 would otherwise have had to keep.** Compatible* |
| ***chemistry*** | ***theirs, and out of scope here.*** *Two of their changes land IN this sprint's favour: [K8](#k8)'s find-or-make fix, and a top given its parent at derivation ([K2](#k2), [U9](#u9)).* **AE5 excludes their chemistry work by name so this sprint cannot claim their green** |
| ***the churn*** | ***DELIVERED as [Solutions 52](../solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md)*** — *a record, as ruled, because Doug had already deferred the fix in his own words ([49 § the theme and the loop](49-the-wikipedia-demo.md#the-theme-and-the-loop)). No new keyword coined.* **And it CHANGED THIS PLAN — [K1](#k1)** |

***The seam worked exactly as [the plan specification](../../../../.claude/library/our-skillset/29-ce-plan.md) says it should:*** **a contract is corrected by implementation, never by rereading.** *This plan carried a fallback — "if the churn lands badly, fix the level in the bond" — and the session building against the mechanism came back and said the bond is not safer.* **The fallback is withdrawn, and that is the seam being tested rather than the plan having failed.**

## <a id="risks"></a>Risks

### <a id="k1"></a>K1 — the churn — ***MEASURED by session 41, and it CHANGED this plan***

***Solutions 52, [The Pieces a Writing Remade Each Time It Drew](../solutions/52-the-pieces-a-writing-remade-each-time-it-drew.md)*** — keywords `rebind` and `render-make`, linked both ways with [sprint 49](49-the-wikipedia-demo.md).

**The defining line:** *`groupInline`'s flush lifts each inline child with `evalElement(c, this._chemical)` — **a fresh `$Eval` per element per pass, with no bound-child cache** — while the `block` element keyed `$b0` IS cached by the writing's synthesis, so the same `$Block` is refilled and `sameArgs` skips the writing's own bond.*

**Their numbers:** *the writing `[38]` and the block `[51]` kept identity; the block held `[53],[56]` then `[70],[73]`, `[84],[87]`, `[98],[101]`, `[112],[115]`; the `$Reference` bond ran at frames **2, 3, 19, 33, 47, 61 — a new instance each time**.*

> ***THE CONCLUSION THAT CHANGED THIS PLAN, in their words:*** **"a level fixed in the bond is fixed on an instance that is itself remade, so the bond is not a safer place than `specifically`, only a stated one; derive from the same inputs every time and never mutate there."**

***So D3's fallback was never a fallback.*** **The question was never *where* the derivation runs — it is whether the derivation is PURE.** *A bond and a `specifically` are equally exposed, because the instance beneath both is remade.*

***THE GUARDRAIL, restated as a rule [U5](#u5) and [U9](#u9) must both obey:*** **derive from the same inputs every time, and never mutate.** *`addType` and `placed()` are both find-or-make and answer the same thing on a fresh instance given the same block, which is what makes them lawful here — **not** their location.*

*One thing session 41 marked honestly as **read rather than run**: they did not re-measure `specifically` tonight. [Solutions 44](../solutions/44-the-enforcement-that-detonated-per-render.md) measured it once per render on a fresh writing, and this remaking is the mechanism under that fresh writing — so a type added by `addType` there lands on that render's instance and is added again on the next. **The conjunction is inferred, not measured.** [S16](#scenarios) measures it.*

### <a id="k2"></a>K2 — ***WITHDRAWN. The risk was deleted rather than mitigated.***

*It read: steps one, two and four of the meaning reading are live code, step three — **what my container means** — is unproven, and session 41's parent-at-derivation change makes it more likely to work.*

> ***[D-M's coherence check](#d-m-coherence) removed steps three and four entirely.*** **A `meaning()` that falls through to the book gives every piece of writing a meaning, which makes "this must have meaning" unfailable — and this sprint asks for three rules of exactly that form.** *The upward reach moved to where it belongs: **once, at `specifically`, as an assignment**, and to **resolution**, which walks outward to the nearest scope. **`meaning()` is now a plain read of two live steps and carries no risk at all.***

*Kept rather than deleted so the record shows a risk that closed by the design changing under it, not by being mitigated.*

***Their chemistry change makes this materially more likely to work:*** **"a top written in a view is now given its parent at derivation, before its bond runs, so a bond constructor's `$(X)` resolves outward from its place."** *So a parent is available earlier than this plan assumed.* **Mitigation unchanged: a probe before U2, created and removed in one command.** *If it fails, `$Title` keeps a one-line override and the other four still collapse.*

### <a id="k8"></a>K8 — find-or-make was broken until tonight
***Session 41 found and fixed it:*** **`$check(held, Kind, '!')` with the kind named by a COMPONENT never recognised what it was handed** — *`validateArgument` fell to the function-component branch* — **so it made a new one every time.** *Fixed, with a promise in `check-makes.test.tsx`, dist rebuilt.*

***[U9](#u9)'s idempotence depends on find-or-make actually finding.*** **`placed()` uses `searchForOne` and then the two-argument make form, so it was never on the broken path** — *but [ch10's ruled three-argument form](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#making-one) was, and anything in this sprint reaching for it must be written against the FIXED chemistry.* **State the chemistry commit the work stands on.**

### <a id="k3"></a>K3 — Solutions 51 is unfixed and still chemistry's
**A writing that draws its own held parts through `$(part)` draws frames and empties contents.** *[U9](#u9) must draw a **reading of its block**, never its cells through `$(cell)`.* **Mitigation: the rule is written; [S15](#scenarios) is in the real browser because happy-dom does not reproduce it.**

### <a id="k4"></a>K4 — the two addressing systems have never met
*A mention carries `Cr:1`; the page draws `#Order_of_article_elements`; both pass the identical `$readsAsUrl` rule, which asks only for no whitespace and a parseable URL.* **Mitigation: recorded, not fixed. R3 requires the address; the drawing resolves it to a fragment. The route half is the binder's.**

### <a id="k5"></a>K5 — U13 and U14 are design owed and one of them reaches back
*[U6](#u6) changes what `$Title` descends from, and [U13](#u13) may change what a card IS.* **Mitigation: U6 is built last of the buildable units, or held.**

### <a id="k6"></a>K6 — the working tree is entirely uncommitted
*10 untracked (the whole `.wiki`), 51 modified, 50 deleted, plus session 41's live edits and a `$Block` API rename in chemistry that predates both sessions and belongs to nobody here.* **A sprint starting here cannot tell its own diff from the last one's.** *Mitigation: state every measurement as a delta, never an absolute.*

### <a id="k7"></a>K7 — `src` is Doug's
***Every member needs his yes before it exists.*** *The list in [Requirements](#requirements) is that yes, given 2026-09-06.* **Nothing outside it may be added without asking, and the two design-owed units are not licence to invent.**

## <a id="tracing"></a>Origin tracing

**Requirements → units:** R1→U4 · R2→U5 · R3→U4 · R4→U4 · R5→U1 · R6→U2,U3 · R7→U3,U12 · R8→U6 · R9→U6 · R10→U9 · R11→**U14 (design owed)** · R12→U10 · R13→U12 · R14→U7 · R15→U9 · R16–R21→U11 · R22→**none, ruled out**

**Units → a visible end:** U1 and U7 have none of their own and say so · U2→S2–S4 · U3→AE3 · U4→S6 · U5→S7,S8 · U6→S5 · U9→AE1 · U10→AE4 · U11→**AE2** · U12→S15 · U13, U14→**none; they are design**

***Nothing drops.*** *R11 lands only in a design-owed unit and is called out here rather than counted as planned work.*

## <a id="names"></a>Names coined here

**None.** *`mention`, `meaning`, the lowercase exports and the `$$X` spelling are all Doug's. The chapter's title is a proxy. `$IndexCard` and `$Card` are his words and [U13](#u13) may not rename either.*

## <a id="where-things-stand"></a>Where things stand

### <a id="built"></a>BUILT — 2026-09-07

| | |
|---|---|
| ***[P1](#p1) — the vocabulary*** | **DONE.** *`rep` → `mention`, `means()` → `meaning()`, `reflection.means()` → `reflection.meaning()`.* **9 files, 18 sites, 0 missed.** *Every remaining occurrence of the word is English prose — a `@specify` label, an error message, a `describe` — and prose is correct as it stands* |
| ***[U15](#u15) — the last struck word*** | **DONE.** *`book.test.tsx:33` named the cover, the synopsis, the table of contents and the index instead.* **Struck words across `src` and `.wiki`: 0** |

| ***[P2](#p2) — meaning propagates outward*** | **DONE.** *`$IndexCard.meaning()` and `$CatalogueCard.meaning()` answer their title's; `lines()`, `name()`, **five `view()`** and **four `reference()`** deleted; `TitleSpecification`'s rule reworded to **a title means what it titles**, which is what it now rules.* **`Anchor href` 8 → 3** · **net −89 lines across the five files** · *one rule added — an index card carries a title that means something — **written structurally rather than with `instanceof`**, because [a rule that consults its own class fails the writing that merely CARRIES the type](../solutions/.cover.md)* |
| ***the commit gate*** | **Validation refused first, on two half-finished struck-word sweeps belonging to NEITHER session** — *a cover and its chapter disagreeing about a filename, in [Queenie's test architecture](../../../../.claude/library/..teamsmanship/..team/queenie/test-architecture/.cover.md) and in [Solutions 41](../solutions/41-the-phrase-that-failed-as-a-word.md).* **Both chapter titles had already been swept; only the filenames were left.** *Renamed to follow the titles, the two links updated, the skills recompiled.* **All three libraries now PASS** |

| ***[P3](#p3) — the three mentions*** | **DONE.** *`$$Book`, `$$Chapter`, `$$Section`, each with `$TypeOf$X extends $TypeOfReference`, a specification, and a **lowercase** component export — `book`, `chapter`, `section`.* **Three promises, green first run:** a mentioned chapter draws `#Body_sections` from the base, **stands at Paragraph and is NOT a Chapter**, and has a meaning. *`Section.tsx`'s file-local alias moved from `section` to `written`, because the lowercase spelling is the mention's export now — **and that collision will recur at Letter, Word, Sentence and Paragraph if all seven levels export lowercase*** |
| ***[P7](#p7) — the theme*** | **DONE, on Doug's ruling** *"inherit from writing or descendant and it's not a problem".* **`$Theme` is now an `$Annotation` living in `Writing.tsx`; `Theme.tsx` is deleted.** *`theme()` is a property on `$Writing` — the theme written in, else what holds it, else one made through `$`. `$Format.theme` walks to the nearest writing. **The module cycle is dissolved by `Format.tsx` taking `$Theme` as a TYPE-ONLY import**, which is erased at runtime — one class moving, not three.* **Three promises: registered, written-in, and inherited by a chapter** |
| ***SEEN, after the theme move*** | ***per-book theming, drawn.*** **`/` at `font-size: 14px` with the portal theme applied; `/article` at `16px` without it** — *two books on one framework at different sizes.* **34 and 7 anchors, empty-href 0, unresolved 0, no overflow, at 390/820/1280**; one favicon 404 |
| ***the library repairs*** | **[Chapter 49](49-the-wikipedia-demo.md) held the whole chapter TWICE** — *577 lines for a 310-line chapter, spliced back with nothing discarded, the cut sentence rejoined.* **[The Assignment](../../../chemistry/.lib/composition/14-the-assignment.md) opened a paragraph mid-sentence** — *its lost clause reconstructed and MARKED as a reconstruction rather than passed off as the original.* *Both found independently by session inexplicable-phenomena-7e; the first I had found at this session's opening and let go* |

**GATES, measured after** — *`tsc -p src/tsconfig.json` **0** · `tsc -p .wiki/tsconfig.json` **0** · vitest **88 across 5 files**, the baseline unchanged · `clean.ts` **0 files cleaned**, so the change survives the mechanical conventions.*

***SEEN — driven in the real browser at 390, 820 and 1280, both pages:***

| | anchors | empty href | inward | unresolved | words | overflow |
|---|---|---|---|---|---|---|
| **`/`** | **34** *(was 37)* | ***0*** | 4 | **0** | 135 | none |
| **`/article`** | **7** *(was 10)* | ***0*** | 5 | **0** | 923 | none |

***The minus three on each page is exactly the cover's title, author and subject.*** **Each was drawing an `<a href="">` coloured `theme.link`** — *a link to nowhere, in link blue* — **and each now draws as text.** *Word counts unchanged, so nothing was lost; one favicon 404 at 390 on `/`, which is [the known one](49-the-wikipedia-demo.md#where-things-stand).*

> ***AND THAT IS THE DESIGN VISIBLE:*** **writing that means something shows with an anchor, and a title that means nothing no longer pretends to.** *[P2](#p2)'s whole claim, seen rather than asserted.*

> ***A NOTE ON THE SERVER, because the branch has a wrong turn on file about it:*** **5200 was session 41's and was left alone; this was driven on a FRESH server at 5201**, since *"a long-running dev server after a burst of rewrites"* served a stale module once and cost a session.

> ***The baseline is 88 and it is session 41's, not this sprint's*** — *stated as a delta because [K6](#k6) still holds: the tree carries two sessions' uncommitted work and nobody may claim an absolute.*

***THE DESIGN IS CLOSED AND [THE PLAN](#the-plan) IS WRITTEN.*** *Doug, 2026-09-06: "This is the /ce-work — the work is the design this sprint, clearly." **Nothing is built.***

***[The reflection](#the-reflection) is the sprint's own finding about itself:*** **six corrections, five of them one fault** — *adding a mechanism where the domain already had one* — **which is [Solutions 50's `surface-blind`](../solutions/50-the-demo-that-wrote-itself-a-framework.md) at design altitude rather than code altitude.**

***And the arithmetic is the argument:*** **one member spent, three words added, nineteen members and twenty lines removed.**

***[The plan](#the-plan) is eight phases.*** *Phases 1–3 are pure subtraction and depend on nothing; 4–6 are the url, each useless without the one before; 7 is independent and could go first; 8 is the gate on all of them.* **The framework gets smaller before the compiler is written, so the compiler is written against something that has stopped moving.**

***Settled and written down:*** the `$$` class as the reference, named for what it represents ([D-A](#d-a), corrected at [D-B](#d-b)) · the url and its `#` as the module boundary ([D-H](#d-h)) · resolution statically typed ([D-J](#d-j)) · the injected resolver, and why it is forced ([D-C](#d-c)) · the lazy manifest, and that `read()` was already `Promise` for it ([D-D](#d-d)) · the theme on writing, composing with session 41's DI rather than reversing it ([D-E](#d-e)) · the card chain ([D-F](#d-f)) · what the binder may never do ([D-G](#d-g)).

***Six things open, listed at [What is still open](#open)***, of which four are Doug's to rule and two are consequences to design out.

***And the register of how his recommendations MOVED is at [The Evolution](#evolution)*** — kept because a long design conversation loses that first, and because six constants held across every turn of it while nine positions changed, each with a reason.

***The build plan above — [units](#units), [scenarios](#scenarios), [risks](#risks) — is KEPT rather than deleted.*** *It is what `/ce-work` runs when the design closes, not what it runs now, and the requirements it realizes are unchanged by the design. **Two of its units are superseded by [D-G](#d-g): U9's self-filling table of contents is gone, and U10's deletion of `$Book.contents()` is now a deletion without a replacement.***

**Ready to build now:** U1 · U2 (after its probe) · U3 · U4 · U5 · U7 · U9 · U10 · U11 · U12.
**Held:** U6, until [U13](#u13) rules.
**Not buildable:** U13, U14 — design, and marked so.

**Coordination CLOSED.** *Session 41 landed `Book.tsx` with only `theme` touched, left `contents()` and `placed()` alone, and handed the file over. They own `.wiki/.encyclopedia/` and the theme; this sprint owns `.wiki/.article/`.* **Two of their chemistry fixes land in this sprint's favour and one of their measurements withdrew one of its fallbacks.**

**The order:** U1 → **probe (K2)** → U2 → U3 → U4 → **probe (S16, K1)** → U5 → U7 → **probe (U9's bond question)** → U9 → U10 → U11 → U12, with U6 last or held.

***Three probes before three units, each created and removed in one command*** — because [K1](#k1) turned a location question into a purity question, [K2](#k2) is one unrun step, and [U9](#u9)'s seat may have moved under it since the plan was written.

**The stop condition is [AE2](#acceptance)** — a table of contents that omits a chapter fails, naming it — **seen in the real browser, not described.**
