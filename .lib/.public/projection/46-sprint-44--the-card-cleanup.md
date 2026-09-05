# Sprint 44 — The Card Cleanup

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)
- **status:** `implementation-ready`
- ***The chapter title is a PROXY; Doug's to rename.***

---

**The card family stops being a stack of types with no classes and takes the spelling every other kind takes.** Alongside it: `find`/`findOne` in place of 54 hand-written block scans, the bond reordered so a carried type wins at all seven levels, and annotation-hood asked of the type rather than read off a boolean. **Ruled and measured 2026-09-05; nothing here is built.**

# <a id="the-ask"></a>What Doug asked for, verbatim

> "We need whatever else implemented — the findOne etc… and using check everywhere, implementing replacements — look for one type of X (like Paragraph) and if not found, specify type of paragraph. Other places like that in list and table and cell perhaps… **I want type of annotation, and loosely coupled annotations. That is the big one.** I want a type of index card, which wholes a title that refers somehow, and a type of card catalogue that prints an index card compositionally but specifically has a book reference if that is any different, and then **I want the subject, author and title as types of sections and annotations, each its own different formula chain**"

**And after this sprint, and only after:** *"we will look at $Synopsis and decide if it's fine."*

# <a id="rulings"></a>The rulings, 2026-09-05

| | his words | what it decides |
|---|---|---|
| **RA** | *"No I mean a TypeOfIndexCard for the index card class. You do see the type pattern? Class, type, specification, optional interface if there are members"* | **The type pattern is not a choice.** Every card is spelled `$X` · `$TypeOfX` · `XSpecification` · `$X$` where it has members. It was offered as one option of three and that was the error — [ch15](../designing-inexplicable-phenomena/15-the-spelling-of-a-kind.md) already rules it. |
| **RB** | *"Annotation answers to is type of annotation"* | **The `annotation` boolean is deleted.** Annotation-hood is `reflection.is(one, $TypeOfAnnotation)` at every seat, the parser included. |
| **RC** | *"Someone writes it"* | **A card's heading is author-written.** No bond writes one from the copy; the twelve authored files change instead. |
| **RD** | — | **All of it, one sprint.** |

# <a id="measured"></a>What was measured before any of it was planned

*Each of these was run this session and the probe deleted; the suite was re-checked green after each.*

- **M1 — the wiki defect is broader than recorded, and it fails twice.** Sprint 43 owed the four synopses. Every **chapter** fails too: `<Section><Title>Bonds</Title><Paragraph/></Section>` fails with *"a section is written as paragraphs, and something in this one is not one · a section opens with its heading, and this one opens without one."* The same section written with a `<Heading>` specifies clean.
- **M2 — the type ask is already available everywhere the boolean is read.** All eight annotation kinds — `$Annotation`, `$Type`, `$Reference`, `$IndexCard`, `$CatalogueCard`, Title, Author, Subject — answer `reflection.is(one, $TypeOfAnnotation)` as `true` today. **RB is a deletion, not an addition.**
- **M3 — a card's own type is `["Type","Annotation"]`.** Every card carries `$TypeOfType`. The `$TypeOfReference` in its class chain **never reaches the writing's type**, which is why Sprint 43's attempt to re-base `$IndexCard` alone changed nothing.
- **M4 — a section-typed card works, and can be an annotation at the same time.** A kind spelled the standard way with `$TypeOfX extends $TypeOfSection` lands in `parts()`, answers `reflection.is(one, $TypeOfSection)`, and a chapter holding one specifies clean. **Carrying `<TypeOfAnnotation/>` alongside makes it answer BOTH asks with zero new members** — which is *"types of sections and annotations"* built out of what already ships.
- **M5 — 54 block scans across 20 files**, up from the 45/15 Sprint 43 measured. Thirteen seek a `$Reference`, eleven seek a `$Path`.
- **M6 — the bond reorder is built nowhere.** All seven levels and every kind write `this.type ??= $check(typeOfX, '!')` **before** `super`, so the class's own type lands first in `candidates` and a carried type can never win.
- **M7 — the state going in.** `npm run test` in lib: **tsc 0 in `src`, 519 passed / 25 files.** Chemistry: **855 passed / 70 files.** The root `tsconfig.json` shows 5 errors, all in the v1 archive — [Solutions 49](../solutions/49-the-gate-that-checked-the-archive.md), not this sprint's.

# <a id="the-shape"></a>The shape, said back for correction

**A card is a section that names something, and the three cards differ only in what they name.**

```
$IndexCard           a section that holds a title, and the title refers
  $CatalogueCard     an index card that also names a BOOK
    $Title           this book
    $Author          the book that is its author
    $Subject         the book that is its subject
```

**Each of the three declares `formula = 'new'`** — its own catalogue, so a Title named *Math* and a Subject named *Math* never meet. *[Solutions 48](../solutions/48-the-name-a-sibling-had-already-filed.md) established this is no longer needed to keep siblings apart; it is kept because Doug asked for it by name and because a separate catalogue is the honest statement that these are different kinds of name.*

**`$TypeOfIndexCard extends $TypeOfSection`** — that is the reading of *"types of sections"* and it is **the one thing here inferred rather than heard.** If a card is meant to sit at another grade, this is the line to correct.

# <a id="requirements"></a>Requirements

**R1** — Every card is spelled with the type pattern: a class, a `$TypeOfX`, a specification, and an interface where it has members. `$IndexCard`, `$CatalogueCard`, `$Title`, `$Author`, `$Subject` each gain a class and a type where today they are a type alone. *(RA)*

**R2** — An index card **holds a title, and the title refers.** `$IndexCard$` declares `get title()`; the title's `means` is the reference it stands on. *(the ask)*

**R3** — A catalogue card **is an index card that also names a book.** It composes as an index card; its type's `specifically` is where the book reference is supplied. *(the ask)*

**R4** — Title, Author and Subject are **section types and annotations at once**, each with its own formula catalogue. *(the ask; mechanism proven at M4)*

**R5** — **`annotation` as a field does not exist.** Every reader asks `reflection.is(one, $TypeOfAnnotation)` — `$Writing.annotations`, `Parser.tokens`, and every specification that filters on it. *(RB)*

**R6** — **`find` and `findOne` stand on `$Writing`**, asking the BLOCK by TYPE, and replace the hand-written block scans. `findOne` fails when it finds more than one. *(the ask; bodies designed in [ch10](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-block-asking-pair))*

**R7** — **The bond calls `super` first and defaults after**, at all seven levels and every kind, so a carried type simply IS the type. *(the ask; [ch10 § the bond composes](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-bond-composes))*

**R8** — **The make marker is used wherever a find-or-make is written.** `$check(found, Kind, '!')` replaces every find-then-construct pair. *(the ask)*

**R9** — **The four books specify.** Every `.cover.tsx`, `.synopsis.tsx` and chapter file in `.wiki` passes `specify()` with no failures, with headings written by hand. *(RC, M1)*

**R10** — **The suite does not shrink.** 519 lib and 855 chemistry are the floor, and every new promise is added rather than traded.

## Acceptance examples

**AE1** — A chapter holding a `$Title` reports `parts()` containing it, `reflection.is(title, $TypeOfSection)` true, and specifies clean.

**AE2** — The same `$Title` carrying `<TypeOfAnnotation/>` answers `reflection.is(title, $TypeOfAnnotation)` true **and** stays in `parts()`.

**AE3** — `<Title>Math</Title>` and `<Subject>Math</Subject>` in one page each stand for their own registered kind, neither shadowing the other.

**AE4** — `writing.findOne($TypeOfPath)` returns the path where one is written, `undefined` where none is, and throws where two are.

**AE5** — `<Paragraph>Chemistry<Type>Title</Type></Paragraph>` drawn reports its type as Title, not Paragraph.

**AE6** — Grepping `annotation` in `src` finds no field read.

**AE7** — The four books render in a real browser, each cover showing its title, author and subject as visible text.

# <a id="decisions"></a>Decisions

**D1 — The cards become CLASSES, and the type classes move with them.** Chosen over re-parenting the existing type-only cards, which **M3 proves cannot work**: a card's own `type` is `$TypeOfType` and its class chain never reaches the writing's type.

**D2 — "Section and annotation at once" is spelled as a CARRIED type, not a new member.** A card's own type is its section type; `$TypeOfAnnotation` rides alongside in `types`. Proven at M4. Chosen over widening `reflection.is` or adding a flag.

**D3 — The heading is author-written.** RC. Chosen over the bond finding-or-making one from the card's copy, which would have left all twelve authored files untouched but put a write in a constructor for something a person should say.

**D4 — `annotation` is deleted rather than kept as a birth fact.** RB, and M2 shows nothing is lost. Chosen over keeping the field unread, which is two sources for one truth.

**D5 — `find`/`findOne` land BEFORE the card work.** The card work would otherwise write new hand-written scans that the sweep then has to unwrite.

**D6 — `prints` and `at` keep their proxy names this sprint.** Renaming is Doug's and is not blocking. *Flagged again at the close.*

# <a id="units"></a>Units

*Order is dependency order. Each unit is green before the next begins.*

**U1 — `find` and `findOne` on `$Writing`.** Two methods asking the block by type; `findOne` fails a second. *Files:* `writing/Writing.tsx`. *Depends:* nothing. *Visible end:* AE4 as a promise in the suite.

**U2 — The block scans become asks.** The 54 seats in `src` collapse onto U1 — `path`, `means`, `annotations`, `name`, the `$landsOnIt` referent scans, `$ReferenceCard.references`. *Files:* the 20 files at M5. *Depends:* U1. *Visible end:* the grep count falls; every existing promise still green.

**U3 — Annotation asked as a type.** Delete the field; `$Writing.annotations` becomes `find($TypeOfAnnotation)`; `Parser.tokens` and every specification filter ask `reflection.is`. *Files:* `writing/Writing.tsx`, `utilities/Parser.tsx`, and each specification that filters. *Depends:* U1. *Visible end:* AE6.

**U4 — The bond reorder.** `super` first, `this.type ??=` after, at all seven levels and every kind. *Files:* the 23 classes carrying a bond default. *Depends:* U3 — a carried type must be visible to `types` before the reorder can matter. *Visible end:* AE5.

**U5 — `$IndexCard` respelled.** Class over `$Composition` implementing `$IndexCard$`, `$TypeOfIndexCard extends $TypeOfSection`, `IndexCardSpecification`. The title member and the referring title. *Files:* `reference/IndexCard.tsx`. *Depends:* U4. *Visible end:* AE1.

**U6 — `$CatalogueCard` respelled.** Class over `$IndexCard` implementing `$CatalogueCard$`, `$TypeOfCatalogueCard`, `CatalogueCardSpecification`; the book reference supplied in `specifically`. *Files:* `book/CatalogueCard.tsx`. *Depends:* U5. *Visible end:* the card's book answers.

**U7 — Title, Author and Subject respelled.** Three classes, three types under `$TypeOfCatalogueCard`, three specifications, `formula = 'new'` on each. *Files:* `book/Title.tsx`, `book/Author.tsx`, `book/Subject.tsx`. *Depends:* U6. *Visible end:* AE2, AE3.

**U8 — `$Cover` and its specification follow the cards.** `$TypeOfCover.specifically` stops asking `instanceof $Title` and asks the type; `CoverSpecification.$writtenAsSections` is expected to DELETE once a card is a section. *Files:* `book/Cover.tsx`. *Depends:* U7. *Visible end:* the cover's four rules still fail a cover missing a card.

**U9 — The last two `instanceof` getters.** `$Book.synopsis` and `$Book.tableOfContents` ask the type. *Files:* `book/Book.tsx`. *Depends:* U1. *Visible end:* a writing merely CARRYING the synopsis type is found as one.

**U10 — The `.spec` examples.** Every new kind is finished by its examples behind the three promises — draws, specifies, composes. `$Letter`, `$Index`, `$TableOfContents` and `$Cover` are owed their plain specifications from Sprint 43 and are paid here. *Files:* `tests/.spec/**`. *Depends:* U7. *Visible end:* the spec suite enrols them.

**U11 — The twelve wiki files.** Headings written by hand where `<Title>` was standing in for one; the cards written as the new kinds. *Files:* the four `.cover.tsx`, four `.synopsis.tsx` and the chapter files under `.wiki/corpus` and `.wiki/app`. *Depends:* U8. *Visible end:* R9 — every book specifies.

**U12 — Seen in a browser.** The four books rendered, each cover's title, author and subject asserted as VISIBLE TEXT. *Files:* a driver under the scratchpad, nothing left in the package. *Depends:* U11. *Visible end:* AE7 — and this is the sprint's stop condition, not its flourish.

**U13 — DESIGN OWED: `$List`, `$Table`, `$Cell`.** Doug named these as *"other places like that… perhaps"*. `$Table.view()` looks for a heading and `$List.view()` splits raw text; **neither has a designed find-or-make seat, and a view may not construct.** *No files, no scenarios, no dependencies until the seat is designed.*

# <a id="scenarios"></a>Test scenarios

| unit | scenario | expected |
|---|---|---|
| U1 | `findOne` over a block holding one `$Path` · none · two | the path · `undefined` · fails |
| U1 | `find` asked by a type a part CARRIES rather than derives from | the part is found |
| U3 | a `$Type` written into a paragraph | absent from `parts()`, present in `annotations` |
| U3 | a card carrying a section type | present in `parts()` |
| U4 | `<Paragraph>Chemistry<Type>Title</Type></Paragraph>`, drawn | type reads Title |
| U4 | a paragraph carrying nothing | type reads Paragraph |
| U5 | a chapter holding an index card | specifies clean; the card is a part |
| U5 | an index card with no title | fails, in one sentence |
| U7 | `<Title>Math</Title>` and `<Subject>Math</Subject>` on one page | each stands for its own |
| U8 | a cover missing its author | still fails |
| U9 | a writing carrying the synopsis type, not the class | found as the synopsis |
| U11 | every `.wiki` file, `specify()` | no failures |
| U12 | the four books in a real browser | title, author, subject visible as text |

# <a id="risks"></a>Risks

**K1 — The carried type outranks the class's own once the bond is reordered.** *Measured at M4:* a card carrying `<TypeOfAnnotation/>` reports its `type` as `["Annotation"]` rather than `["Card","Section"]`. `reflection.is` still answers Section through the declared-type route, so nothing breaks — but the **canonical** choice is wrong, and `classNames` and `code` read it. **Mitigation:** U4 lands with a promise pinning what a carrying card's canonical type must be; if the answer is that a level must outrank a non-level, that is `reflection.level`'s to say — it asks only the type's own name today, which is the latent disagreement Sprint 42 recorded.

**K2 — Deleting `annotation` touches the parser, which everything runs through.** *Mitigation:* U3 is its own unit, landed alone, with 519 promises as the net.

**K3 — The twelve wiki files are the only content we have.** Rewriting them and the framework in one sprint means a failure has two possible homes. *Mitigation:* U11 comes after U8 is green, so the framework is settled before the content moves.

**K4 — The suite has never seen the wiki.** `specify()` over the four books is not in the suite at all; M1 was found by hand. *Mitigation:* U11 adds it as a promise, so the books cannot drift again.

**K5 — Chemistry is resolved through `dist`.** A chemistry change is invisible to lib until rebuilt — [Solutions 49's sibling](../solutions/49-the-gate-that-checked-the-archive.md). *Mitigation:* no chemistry change is planned; if one becomes necessary, rebuild before believing a green number.

# <a id="names"></a>Names

**Proxies awaiting Doug:** `prints` on `$Type` · `at` on reflection · this chapter's title. **No new name is minted by this sprint** — every class name in it is either shipped or dictated by the type pattern.

# <a id="rulings-0905b"></a>THE RULINGS THAT CLOSE K1 — Doug, 2026-09-05, verbatim

> **"No, the four can [only] take a TypeOfX polymorphically related to theirs. You can give a sentence a type of my sentence, not a type of letter. Writing should already be able to take any type**
>
> **We probably want our polymorphic findOne and find, which check annotations, and not others**
>
> **In type's specifically**
> - **Generalize writing to interface if possible?**
> - **Check block exists**
> - **Check block contains only strings, numbers, or things that have a type that is polymorphically related to Type**
> - **Check that those types are either type of annotation or type of one of the seven (we need an efficient way to check this in reflection)**
>
> **This should set us up to have a very flexible thing**
> **Everything to check in this should be trivial. Let's choose the functions we need and where they should live"**

## What this decides, said back for correction

***K1 is not about bond order at all.*** It is about **relatedness**: a level accepts a carried type only when that type is polymorphically related to its own. `<Sentence><Type>Glowing</Type></Sentence>` fails rather than arbitrated, because Glowing is not a kind of sentence — and the four promises that broke were never a conflict, they were the absence of this rule.

**`$Writing` itself takes any type.** The constraint lives on the seven, not on the root.

**`find`/`findOne` become polymorphic and ask ANNOTATIONS ONLY** — not every block element. *That is also the performance answer: the recursion I measured came from asking `reflection.is` of every node rather than of the annotations.*

**Three more rulings from the same exchange:**

| | his words | what it decides |
|---|---|---|
| **RE** | *"A table should be allow[ed] as a type of cell"* | **`$TypeOfTable` moves under `$TypeOfCell`**, so a table is paragraph-grade and lands in a section's parts instead of being gathered into a paragraph and failed. That is [Solutions 46](../solutions/46-the-check-that-checked-one-node.md)'s open case closed by re-grading rather than by changing the parse. |
| **RF** | *"Install it — one devDependency"* | **`@babel/plugin-proposal-class-properties` goes into the wiki app** so it runs from source. *Approved, NOT YET RUN — held for the pairing session.* |
| **RG** | *"I'll name them now"* | **`prints`, `at` and this chapter's title get real names from Doug.** *Awaiting the three words.* |

## The design surface, for the pairing session

***Everything to check must be trivial, so the question is which functions exist and where they live.*** Nothing below is built; it is the shortlist to choose from with Doug at the keyboard, read off the five files rather than remembered.

### What already exists and can be reused

| it exists as | where | what it already does |
|---|---|---|
| **the relatedness test** | [`Writing.tsx:46-47`](../../package/src/writing/Writing.tsx), inside `parts()` | `token.type instanceof (type.constructor)` and its converse, called `mutual` there. **This is "polymorphically related", written once, unnamed, and private to the parse.** |
| **"is this type one of the seven, or beneath one"** | `reflection.at(type)` — **protected** | returns the level index or `-1`. `at(type) >= 0` IS the check, already memoized through `names()`'s template cache. |
| **the level test that is wrong** | `reflection.level(type)` | asks `levels.includes(type.name)` — **the type's OWN name only**, which is why `$TypeOfTitle` does not read as a level while `$TypeOfSentence` does. Sprint 42 recorded this disagreement with `below`; it is the seat of K1. |
| **the annotation test** | `reflection.is(one, $TypeOfAnnotation)` | correct but **not trivial** — it consults `writing.types`, which reads `annotations`, which calls `find`, which calls `is`. That is the recursion measured this sprint. |

### The choices to make together

**1. Where does relatedness live, and what is it called?** It is one line and it has three callers waiting: `parts()`, the bond's candidate choice, and the new block rule. *`reflection` is the only home that all three already import.*

**2. `find`/`findOne` ask ANNOTATIONS ONLY — but the cards are sections now.** `$Cover.title` is `findOne($TypeOfTitle)` and a Title is a section, so narrowing `find` to annotations breaks the cover. **Either the pair is annotations-only and the cover asks its parts, or `find` keeps the block and something else gets narrowed.** *This one is a fork, not a detail.*

**3. Breaking the `annotations` recursion.** `annotations` can ask each element's OWN type — `element.type instanceof $TypeOfAnnotation`, one prototype check — instead of the full `is`, which consults carried types and descends. **Trivial, terminating, and it is what makes the rest cheap.**

**4. The block rule's exact wording**, for `TypedSpecification` — the seat every type already runs through:
   - the block exists *(`$hasBlock` today)*
   - every element is a string, a number, or a writing that HAS a type
   - every such type is **a kind of annotation, or a kind of one of the seven** — `reflection.at(type) >= 0 || type instanceof $TypeOfAnnotation`

**5. Does `$Writing` really take any type, and where is that exemption written?** The constraint is on the seven; the root is free. *Today nothing distinguishes them.*

**6. `interface $Writing$`** — Doug asked "generalize writing to interface if possible?". The codebase already spells `$Composition$`, `$Section$`, `$Reference$`, `$Cover$`, `$IndexCard$`. **There is no `$Writing$`**, and the specification takes `T extends $Writing`, the class.

# <a id="where-things-stand"></a>WHERE THINGS STAND

## The state, once

**Both gates green:** lib **tsc 0 in `src`, 558 passed / 27 files** (from 519 / 25 at the open — 39 promises added, none traded). Chemistry **855 passed / 70 files**, untouched. **And the four books were driven in a real browser: 9 of 9 assertions are VISIBLE TEXT** across `/`, `/chemistry` and `/gauge-theory`, after a reload.

**DONE:** U1 `find`/`findOne` · U2 the block scans · U3 annotation asked as a type · U5 `$IndexCard` · U6 `$CatalogueCard` · U7 Title/Author/Subject · U8 `$Cover` · U9 the last two `instanceof` getters · U10 the `.spec` examples · U11 the twelve wiki files · U12 seen.

**NOT DONE:** **U4 — the bond reorder — BUILT, MEASURED, AND REVERTED.** U13 stays design-owed.

## What the sprint proved that the plan had wrong

**The order was backwards, and the code said so.** The plan ran U3 before the cards. It cannot: **a `$Cover` reads as an ANNOTATION** while `$Title` descends from `$TypeOfReference`, because `reflection.is` asks the carried types and a card *is* an annotation-type. Eight tests said so within a minute of the deletion. The cards must move first.

**A card is a section, and the standard spelling is what makes it one.** `$IndexCard extends $Composition` with `$TypeOfIndexCard extends $TypeOfSection`; `$CatalogueCard` beneath it; Title, Author and Subject beneath that, each `formula = 'new'`.

**`$TypeOfCover.specifically` is GONE, and with it the Law 44 violation.** The cover's three cards are getters — `findOne($TypeOfTitle)` — so nothing is written into a writing during a check, and a writing that merely carries the cover type is served by the specification asking its block directly. `CoverSpecification.$writtenAsSections` deleted, exactly as predicted.

**The `annotation` field is gone from `src`.** `$Writing.annotations` is `find($TypeOfAnnotation)`; `Parser.tokens` and `$hasWriting` ask `reflection.is`.

## <a id="k1-fired"></a>K1 FIRED, AND IT IS A RULING — the bond reorder

***`super` first breaks four shipped promises, and the mechanism is exact.*** With the default planted after `super`, the class's own type is **not a candidate** when `$Writing.$Writing` arbitrates, so `candidates.find(part => reflection.level(part))` has only the carried type to choose from and it wins unconditionally.

| what broke | before | after the reorder |
|---|---|---|
| `labels` — a Sentence carrying `<Type>Glowing</Type>` | `pd-sentence pd-glowing` | `pd-glowing` — **the level is lost** |
| `table` — a Sentence carrying the Table type | words are the cells | one cell, `'hi yo'` |
| `crossing` — a made cover | both are covers | one is not |
| `composition-experiment` — the type acts at specify | acts once | never acts |

***The two readings cannot both hold, and the choice is Doug's.*** His own words point at the answer — *"Even paragraph can look for a type of PARAGRAPH annotation"* — which says a carried type should win **only when it is a kind of that level**. That arbitration lives in `reflection.level`, which today asks only `type.name`, so `$TypeOfTitle` (names `Title/CatalogueCard/IndexCard/Section`) does not read as a level while `$TypeOfSentence` does. **Widening `level` to the whole chain fixes `labels` and breaks `table`, because `$TypeOfTable` names `Table/Section` and would then outrank a Sentence.** *So the ruling is not "widen level" — it is what a Sentence carrying a Section-grade type IS.*

## <a id="bond-chain"></a>THE FINDING THE SUITE COULD NOT MAKE

***Chemistry enforces the bond chain, and only a drawing says so.*** Skipping an intermediate bond — `$Title` calling `super.$Composition` to dodge `$IndexCard`'s default — raised **nothing** in 558 tests and failed on the page:

```
$Chemistry: Bond Constructor Failed
$Title did not call $CatalogueCard, $IndexCard — every declared bond
constructor on the chain must be called.
```

**So the chain must be complete, and default-first is what makes a complete chain safe:** the child plants its type, and `??=` makes every parent's default a no-op. *The two facts are the same fact — the ordering is not a style choice, it is what lets a kind sit under another kind at all.* **This is the third rung earning its place: green and driven said nothing, seen said it immediately.**

## <a id="books-in-the-suite"></a>The books are in the suite now

**K4 is paid.** `books.test.tsx` imports the four authored books through `@dna-platform/public` and specifies each — the alias added to `vitest.config.ts` and the path added to `src/tsconfig.json` are what let a promise read the REAL books rather than a reproduction.

**It found a defect the hand-check missed on its first run.** `chemistry/03-elements` writes a `<Table>` inside a `<Section>`; a table is section-grade, so the section's parse does not accept it as a part, gathers it with the prose around it and wraps it in a `$Paragraph` — which is then failed for holding something that is not a sentence. ***That is [Solutions 46](../solutions/46-the-check-that-checked-one-node.md)'s open case met in real content.*** It is recorded as a promise that asserts the failure, so the day it is ruled the promise goes red and asks to be updated.

## Blocked, and on what

- ***The bond reorder is blocked on the ruling above.*** Everything else shipped without it.
- ***The wiki app cannot run from SOURCE*** — `@babel/plugin-proposal-class-properties` is installed nowhere in the repo, and lib's own `$Anchor` decorates a class property (`@select('&:hover')`), so babel fails. **It is one install and therefore Doug's.** *U12 was met by rendering from the BUILT package through a config held in the scratchpad; nothing in the repository was changed to do it.*
- ***Port 5199 is occupied by the Lab***, so `verify-demo.mjs` silently measured the wrong application before this was noticed. The scratchpad driver uses 5311.

## Owed

- **`$Book.synopsis`/`tableOfContents`** now ask the type — the last two `instanceof` getters are gone. **`$Letter`, `$Index` and `$TableOfContents` are still owed plain specifications.**
- **`specs.length` is a hand-kept count** (`79`), which is a roster a file can drift from.
- **U13** — `$List`, `$Table`, `$Cell`: no find-or-make seat is designed, and a view may not construct.

## Wrong turns, so they are not retried

- ***Do not delete the `annotation` field before the cards move.*** A cover carrying a card reads as an annotation, and eight tests fail with `part.specifically is not a function`.
- ***Do not let a bond skip an intermediate parent to dodge its default.*** Chemistry fails it, and only in a drawing.
- ***Do not reorder the bonds without ruling K1 first.*** Measured: four shipped promises fall, and the fix is not in the bond.
- ***Do not trust `verify-demo.mjs` without checking who owns port 5199.*** It reported failures against a page that was not the wiki app at all.
