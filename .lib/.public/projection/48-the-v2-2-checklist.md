# The v2.2 Checklist

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Every file in the four v2.2 folders, and every check each one is put through.*** **Written 2026-09-05 after four corrections from Doug in one message, each of which says the port was following v2.1 rather than the design:** *the basic types extend `$Composition`; follow the pattern rather than asking about it; `$Type` has no business naming a reference; and a maker registry is a wart.*

**State: `tsc` 0 · 627 promises · 31 files · 43 files in the four folders · ONE stray declaration in all of v2.2.**

***And a fifth thing was measured on the way, twice:*** **`book()` answers `this`, so whatever its return type promises, EVERY piece of writing must have.** *Declaring `book(): $Book$` while `$Book$` descends from `$Composition$` produced 50 errors across 30 files, every one a cascade from that single line — because a failed `implements` makes `$Writing$` unassignable to `$Writing`, and then every `specifically(writing: $Writing)` in the library stops matching its interface.* **It now reads `book(): $Writing$`, and that is a ruling owed rather than a preference of mine.**

---

## <a id="checks"></a>THE CHECKS — what every file is put through

### F · the file's form

- **F1** — the four slots stand: `$X$` · `$X` · `$TypeOfX` · `XSpecification`, ***or a stated reason for each absence***
- **F2** — where a canonical reference exists, its four twins stand: `$$X$` · `$$X` · `$TypeOf$X` · `$XSpecification`
- **F3** — ***nothing else is declared.*** No fifth kind of thing, at any line
- **F4** — the component exports read `export const X = $($X)` · `export const TypeOfX = $($TypeOfX)` · `const typeOfX = TypeOfX`
- **F5** — declaration order: interface · class · type · specification · exports

### C · the class

- **C1** — ***it is a SHELL.*** Instance data only; no procedure the type should be holding
- **C2** — ***it extends the right thing.*** The seven and every kind extend `$Composition`; ***a kind NEVER extends the kind above it***; an annotation extends `$Annotation` or `$Reference`; a dress extends `$Style`
- **C3** — the bond calls `super` FIRST, then folds its own type, in three lines
- **C4** — the bond only ASSIGNS. Anything that must run again belongs in `specifically`
- **C5** — [member order](../designing-inexplicable-phenomena/08-the-order-of-a-class.md): fields (private · public · protected) · properties · bond · constructor · methods · protected · private
- **C6** — the property test: ***argumentless AND returns data***, or it is a method
- **C7** — [the same container everywhere](../designing-inexplicable-phenomena/12-the-closeness-rule.md#one-container): `frame()` never varies its own depth
- **C8** — [TSX indented](../designing-inexplicable-phenomena/16-the-shape-of-tsx.md), one element per line where it has children, `$` on every literal component
- **C9** — no cast on a strongly-typed assignment; no `as unknown as`
- **C10** — no code comments

### T · the type — where the complexity lives

- **T1** — `override name` stands above `protected override specification`
- **T2** — `below()` where it is one of the seven
- **T3** — `makes()` where its writing is made from prose
- **T4** — `specifically` augments and then calls `super`, ***and only where the augmentation is real***
- **T5** — it carries the complexity: the patterns, the segmenter, the procedure
- **T6** — ***no member resurrects a deleted concept*** — `prints`, `resolve`, `formula`, `canonicalForm`, `$TypeOfType`, `$TypeOfAnnotation`

### S · the specification

- **S1** — it extends its parent's specification. ***The hierarchy is carried here***
- **S2** — only rules that are ITS OWN; nothing the base already says
- **S3** — a waiver is `return false`, never a deletion
- **S4** — every rule is a `$`-prefixed METHOD that declares its parameter
- **S5** — every rule carries `@specify('…')`, in the library's own words
- **S6** — no message enumerates a roster

### I · the interface

- **I1** — it extends an INTERFACE, and the right one — never a class
- **I2** — it promises what a replacement must answer
- **I3** — it names no type class

### V · the vocabulary

- **V1** — `._block`, never `.block`
- **V2** — `html.text(x._block)`, never `.copy`
- **V3** — `type()`, never `.type`
- **V4** — `searchFor` / `searchForOne`, never `find` / `findOne`
- **V5** — no `parenthetical`, `canonical`, `index`, `indent`
- **V6** — `instanceof` only in reflection, or narrowing to a kind's own fields
- **V7** — `WritingSpecification`, never `TypedSpecification`

### M · the semantics — ***Doug's three questions***

- **M1** — does the class mean what it is called?
- **M2** — does the subclass say something TRUE?
- **M3** — does each member mean what it is called, and does that word mean ONE thing across the library?
- **M4** — is it in the right folder?
- **M5** — is anything dead: declared and never reached?
- **M6** — is every name a library word — [the anchor](../designing-inexplicable-phenomena/11-the-coding-style.md#the-anchors) — rather than jargon?

### L · wiring

- **L1** — the module loads FIRST, standalone, with no class extending a half-built base
- **L2** — exported from `index2.ts`
- **L3** — it imports nothing from v2.1

### P · proof

- **P1** — `tsc` 0
- **P2** — a promise exists for the kind
- **P3** — `.spec` examples written and enrolled

---

## <a id="writing2"></a>`writing2/` — 13 files

#### `Writing.tsx` — the base vocabulary
- [x] F1 *(no type: a base in the chain carries none — neither does `$Annotation`)* · [x] F3 · [x] F5 · [x] C5 · [x] C10
- [x] **T6 — `reference()` struck.** *`prints` was deleted; nothing may replace it*
- [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1 · [x] P2
- [ ] **I2** — `means()` now answers `$Annotation$`, weaker than *"means is like type but for reference"*
- [ ] **I2** — `book(): $Writing$`, for the reason measured above
- [ ] P3

#### `Composition.tsx`
- [x] F3 · [x] F5 · [x] C10 · [x] **T3 — `reduce` asks the type beneath to MAKE the parts** · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **F1** — no type, no specification. *Reason offered: it is a base in the writing chain, like `$Writing` and `$Annotation`* — **your ruling**
- [ ] **M6** — `concatenate` is a string word, not a library word
- [ ] P3

#### `Letter.tsx` · `Word.tsx` · `Sentence.tsx` · `Paragraph.tsx` · `Section.tsx`
- [x] **F1 · F2 — all eight declarations**, the four and their `$`-twins
- [x] F3 · [x] F4 · [x] F5 · [x] **C2 — `extends $Composition`** · [x] C3 · [x] C5 · [x] C10
- [x] T1 · [x] T2 *(`below()` chains all seven)* · [x] **T3 — each type MAKES its own parts**; the registry is gone · [x] T5 · [x] T6
- [x] S1 · [x] S2 · [x] S3 · [x] S4 · [x] S5 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1 · [x] P2
- [ ] **M3** — `letters` / `words` / `sections` returning `this` were dropped rather than ported
- [ ] **V5** — `indent` is not carried, so nothing is transparent
- [ ] P3

#### `Heading.tsx` · `Phrase.tsx` · `List.tsx` · `Table.tsx`
- [x] F1 · [x] F3 · [x] F4 · [x] F5 · [x] **C2** · [x] C3 · [x] **C7 — no `frame()` returning `view()`**; the container no longer varies · [x] C8 · [x] C10
- [x] T1 · [x] S1 · [x] S3 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **S2** — `HeadingSpecification` is empty; a heading's own rule is unwritten
- [ ] **V5** — `$Phrase` no longer lends its parts
- [ ] P3

#### `Theme.tsx`
- [x] F1 *(type and specification written this sprint)* · [x] F3 · [x] F4 · [x] F5 · [x] C2 *(`extends $Annotation`)* · [x] C3 · [x] C10 · [x] S3 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **M1** — an annotation of colour. Is a theme writing at all?
- [ ] P3

#### `Style.tsx`
- [x] **F1 — no type, no specification, and the reason is one sentence:** ***a style is not writing, and a specification is a specification of writing***
- [x] F3 · [x] F4 · [x] F5 · [x] C2 · [x] C10 · [x] I1 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] P3

---

## <a id="book2"></a>`book2/` — 13 files

#### `Book.tsx` · `Chapter.tsx`
- [x] F1 · [x] F2 · [x] F3 · [x] F4 · [x] F5 · [x] C2 · [x] C3 · [x] C8 · [x] C10
- [x] T1 · [x] T2 · [x] **T4 — `$TypeOfBook.specifically` appends the index, then checks** · [x] T6
- [x] S1–S5 · [x] **M2 — `$Book.cover()` is found by BEING a cover**, no longer by being first
- [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1 · [x] P2
- [ ] **S2** — `ChapterSpecification` is empty
- [ ] P3

#### `Cover.tsx` · `Synopsis.tsx` · `Index.tsx` · `TableOfContents.tsx`
- [x] F1 · [x] F3 · [x] F4 · [x] F5 · [x] **C2** · [x] C3 · [x] C8 · [x] C10 · [x] **I1 — `$Cover$ extends $Chapter$`**, an interface not a class
- [x] F2 for `Synopsis` *(all four `$`-twins)* · [x] S1 · [x] S5 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **S2** — Synopsis and TableOfContents carry no rule of their own
- [ ] **M2** — `$Index` is no longer `parenthetical`: its type is a chapter type, so under your own test an index IS part of the composition. ***Behaviour changed deliberately***
- [ ] P3

#### `Title.tsx` · `Author.tsx` · `Subject.tsx` · `CatalogueCard.tsx`
- [x] F1 · [x] F3 · [x] F4 · [x] F5 · [x] **C2** · [x] C3 · [x] C10 · [x] S1 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **M2 — A TITLE IS NOT A CARD.** *The chain reads: a title is a kind of catalogue card is a kind of index card is a kind of section.* **In a library a card CARRIES a title**
- [ ] **M3** — `title` means two things: an index card's title is a HEADING; `$Title` is a CARD, so `card.title` never finds one
- [ ] **S2** — all four specifications are empty; each was to have ***its own formula chain***
- [ ] P3

#### `Bookmark.tsx` · `Highlight.tsx` · `PageFold.tsx`
- [x] F1 · [x] F3 · [x] F4 · [x] F5 · [x] C2 *(all three `extends $Reference`)* · [x] C10
- [x] **T4 — all three `persist` through `specifically`** · [x] S1 · [x] S3 · [x] S5 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **M2** — `$TypeOfPageFold extends $TypeOf$Chapter` says a fold is a reference to a chapter; **a fold marks a PLACE** and carries `location`
- [ ] **M5** — the three are one family — reader's marks — and no kind names them
- [ ] P3

---

## <a id="reference2"></a>`reference2/` — 7 files

#### `Reference.tsx`
- [x] **F1 — the interface now stands with its class**, which is what following the pattern cost and gained
- [x] F3 · [x] F4 · [x] F5 · [x] C2 · [x] C3 · [x] C10 · [x] **T4 — mints the path from the copy, then checks** · [x] T6
- [x] S3 · [x] S5 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **I2** — `$Reference$` is empty, so a replacement reference promises neither `path()` nor `read()`
- [ ] P3

#### `Path.tsx`
- [x] F1 · [x] F3 · [x] F4 · [x] F5 · [x] **C2 — `extends $Annotation`**, because a path is not part of the composition
- [x] C3 · [x] C10 · [x] S3 · [x] S5 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] P3

#### `IndexCard.tsx` · `ReferenceCard.tsx`
- [x] F1 · [x] F3 · [x] F4 · [x] F5 · [x] **C2** · [x] C8 · [x] C10 · [x] **I1 — `$ReferenceCard$ extends $Reference$`**, which v2.1's extended nothing
- [x] S1 · [x] S3 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **M3** — an index card's title is a heading while `$Title` is a card
- [ ] P3

#### `Catalogue.tsx`
- [x] F1 · [x] F3 · [x] F4 · [x] F5 · [x] C3 · [x] C10 · [x] **T6 — it prints a plain `$Reference`**; `prints` stays deleted and nothing replaced it
- [x] S3 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **M1 — `$Catalogue` IS NOT WRITING.** *It extends `$Writing`, is never written, and is built by `catalogue()` over parts already found.* **A catalogue in a library is a book of cards; this is a reading**
- [ ] P3

#### `Ref.tsx`
- [x] F1 · [x] F4 · [x] F5 · [x] C2 · [x] C8 · [x] C10 · [x] S1 · [x] S3 · [x] S5 · [x] V1–V7 · [x] L1 · [x] L2 · [x] L3 · [x] P1
- [ ] **F3 — `Routed`, the ONLY stray declaration in v2.2.** *It decides by CONTEXT, and no dress, type or view may*
- [ ] **M1 / M6 — `$Ref` and `$Reference` are both references, and one abbreviates the other.** *"Ref" is not a word a library uses*
- [ ] P3

#### `Referent.tsx`
- [x] L1 · [x] L3
- [ ] **F1 — one interface, no class, no type, no specification**
- [ ] **M5 — DEAD.** *Zero runtime exports, measured; nothing imports it.* **In v2.2 `$Writing` implements `$Writing$` directly**

---

## <a id="encyclopedia2"></a>`encyclopedia2/` — 10 files

*`Anchor` · `Article` · `Body` · `Bullets` · `Cited` · `Columns` · `Heading` · `Output` · `Prose` · `Table`*

- [x] **F1 — one class each, no type, no specification, and the reason is one sentence:** ***a dress is not writing***
- [x] F3 · [x] F4 · [x] C2 *(all ten `extends $Style`)* · [x] C10 · [x] L1 · [x] L3 · [x] P1
- [x] **M4 — `$Anchor` moved here from `writing2`.** *An anchor is a dress, and it now stands with the dresses*
- [x] I1 for `Anchor` *(`$Anchor$ extends $Style$`)*
- [ ] **I1** — the other nine have no interface; **if a dress is replaceable it needs one**
- [ ] **M3 — `$Heading` and `$Table` are declared in BOTH `writing2` and `encyclopedia2`**, which is why `index2.ts` names this folder's modules one by one
- [ ] P3

---

## <a id="utilities"></a>`utilities2/` — its own checks

***Exempt from the template by ruling — "this does not apply to utilities" — so it is checked against a different list.***

### U · what a utility is put through

- **U1** — ***it holds no kind.*** A utility knows `$Writing`, `$Annotation` and `$Type`, and nothing about covers, chapters or cards
- **U2** — ***it asks through the interface where it can***, not through a class, so a foreign implementation stays visible
- **U3** — ***`instanceof` is contained HERE and nowhere else***, and the floor is checking a type as a type of type
- **U4** — no v2.1 word that v2.2 deleted: `copy`, `parenthetical`, `block`, `index`, `level`
- **U5** — ***a plain class, never a chemical.*** Built with `new`; never fetched through `$` — [the named exemption](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-bond-composes)
- **U6** — ***no registry keyed by a string where an object already knows the answer***
- **U7** — anything memoized is a BUILD fact, never a scope-resolved one
- **U8** — every member is used; nothing is declared for a caller that does not exist
- **U9** — names are v2.1's own where the member is v2.1's; nothing is renamed in passing
- **U10** — nothing is stored that can be asked

### `Reflection.tsx`
- [x] U1 · [x] **U3 — one `instanceof` site for types, reached through `is`** · [x] U4 · [x] U5 · [x] U7 *(templates keyed by class)* · [x] **U10 — no `level`, no stored depth**
- [x] **U9** — `is`, `names`, `classNames`, `code`, `beneath`, `template` are v2.1's own names
- [ ] **U2** — `annotations`, `types` and `writing` test `instanceof $Writing` / `$Annotation`, ***so a foreign implementation is invisible to every search***
- [ ] **U8** — `beneath` is used by one promise and by nothing in `src`
- [ ] **U9** — `means` is a new member, taken from your word on `$Writing`; ***yours to strike***

### `Parser.tsx`
- [x] **U6 — the `makes` registry is GONE.** *The type makes its own parts; no string keys, no module-bottom registrations, and five files lost their stray declaration*
- [x] U1 · [x] U4 · [x] U5 · [x] U7 *(`parse` memoizes per writing, a build fact)* · [x] U9
- [ ] **U2** — `tokens()` excludes an annotation by `instanceof $Annotation` rather than by the promise
- [ ] **U8** — `sentences`, `words`, `letters` and `elements` are each used by exactly one maker
- [ ] **U10** — `parse` caches parts per writing. *Deliberate, and the one stored thing left*

### `Html.ts`
- [x] U1 · [x] U5 · [x] U9
- [x] **U2 — it asks the promise:** *a node that answers `specifically` is an annotation and says nothing in the copy*
- [x] **U4** — `parenthetical` and `copy` are gone from it
- [ ] **U8** — `block()` is declared and never called

### `Specification.ts`
- [x] U1 · [x] U4 · [x] **U5 — a plain class**, [never a chemical](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#plain-class) · [x] U7 *(rules cached per specification)* · [x] U9
- [ ] **U8** — `for` is assigned nowhere in v2.2; it was v2.1's `$hasType` that set it

### `index.ts`
- [x] U8 — it exports the four

---

## <a id="pattern"></a>IS THE PATTERN FAILING ANYWHERE? — counted, all 43

***The pattern is four declarations — interface, class, type, specification — and eight where a canonical reference stands.*** **It holds in 39 of 43. The four that break it each break it the same way, and each has a reason:**

| file | has | why |
|---|---|---|
| **`writing2/Writing.tsx`** | *3 interfaces, 4 classes, 1 specification, **no type*** | ***it is the base vocabulary***: `$Writing`, `$Annotation`, `$Type` and their interfaces. **A base carries no type of its own** — a type is what a KIND carries, and `$TypeOfType` was deleted by ruling |
| **`writing2/Composition.tsx`** | *interface + class, **no type, no specification*** | ***a base in the writing chain***, like `$Writing` and `$Annotation`. **Your ruling** |
| **`writing2/Style.tsx`** · **`encyclopedia2/*` (10)** | *class only, or class + interface* | ***a style is not writing***, and a specification is a specification of writing |
| **`reference2/Referent.tsx`** | ***one interface and nothing else*** | **no reason. It is dead** |

### The stray declarations — ONE, and it is still `Routed`

- **`reference2/Ref.tsx:16`** — `const Routed = …`. *Everything else in all 43 files is one of the four, a component export, or an import.*

### Other exports and constants that read as warts

- [x] **FIXED — `encyclopedia2/index.ts` did not export `Anchor`.** *The file moved into the folder and the folder's index was never told*
- [x] **FIXED — `index2.ts` exported `encyclopedia2/Anchor` from inside the `writing2` block.** *The grouping said the file was somewhere it is not*
- [ ] **`index2.ts` names no other dress.** *`$Heading` and `$Table` are declared in BOTH `writing2` and `encyclopedia2`, so the folder cannot be starred* — **[M3](#checks), and it is the collision talking**
- [ ] **`utilities2/Html.ts` exports `HtmlUtilities` and `block()`, and nothing calls either**
- [ ] **`utilities2/Specification.ts` declares `for`, assigned nowhere in v2.2** — *it was v2.1's `$hasType` that set it*
- [ ] **`utilities2/Reflection.tsx` declares `beneath`, used by one promise and by nothing in `src`**
- [x] **the lowercase component aliases are NOT warts** — *`letter`, `word`, `sentence`, `paragraph`, `section` exist in exactly the five files that fetch their own component, which is [the fetch rule](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-fetch): a constant close to its use*

## <a id="views"></a>THE VIEW REGISTER — measured after the close-out

**FINAL STATE, 2026-09-05 — v2.1 IS DELETED AND THE `2` IS GONE FROM EVERY FOLDER.**

| | |
|---|---|
| **the folders** | `writing` 13 · `book` 13 · `reference` 6 · `encyclopedia` 10 · `utilities` 5 — ***47 files*** |
| **`tsc`** | ***0*** |
| **promises** | ***78***, five files — *the 550 v2.1 promises went with v2.1* |
| **stray declarations** | ***zero*** |
| **casts** | ***zero*** |
| **v2.1 vocabulary** | ***zero*** — no `.block`, `.copy`, `.parenthetical`, `.canonical`, `findOne`, `TypedSpecification`, `[cache]`, `prints` |
| **`react-router`** | ***gone from the library*** |

***What the rename cost and did not cost:*** **the wiki app reaches for nineteen names and every one still exists** — `$Book`, `$Title`, `Chapter`, `Cover`, `Section`, `Sentence`, `Ref`, `Synopsis`, `TableOfContents` and the rest. *The classes are all there; their MEMBERS are v2.2's now, so the wiki will meet type errors and not missing imports.*

***Rolled back on his word:*** **`wikimedia-ui-base` is uninstalled and `$Theme` holds its own values again.** *"Let's just rollback the wikipedia include and delay this… we will build wikipedia soon."* **[The research](../designing-inexplicable-phenomena/18-the-wikipedia-fit.md) stands and is what we build from when we get there.**

***And the book knows its own furniture, in order:*** **`cover()` · `synopsis()` · `tableOfContents()` · `index()`**, each found by searching, and four rules hold their places — *the cover is the first composed part, the synopsis second, the table of contents third, the index last, and the book makes its own index if none was written.*

**Earlier state, before the rename: `tsc` 0 · 629 promises · 43 files · ZERO stray declarations · ZERO casts.**

### Draws for itself — 10

`$Writing` *(the block)* · `$Heading` *(`$Heading`)* · `$List` *(`$Bullets`)* · `$Table` *(`$Table`)* · `$IndexCard` *(`$Anchor`)* · `$Ref` · `$Reference` *(`$Anchor`)* · ***`$Index` (`$Columns`)*** · ***`$Title` · `$Author` · `$Subject` · `$CatalogueCard` (`$Anchor`)***

### Dresses at `frame()` — 4

`$Book` *(`$Body`)* · `$Chapter` *(`$Article` + `$Output`)* · `$Cover` *(`$Chapter`)* · `$TableOfContents` *(`$Chapter`)*

### Draws nothing, and FRAMES nothing — 3

**`$Type` · `$Path` · `$Theme`** — *they inherit `$Annotation`, which now answers `null` to both.*

### Draws its block, and that is right — 6

`$Composition` · `$Letter` · `$Word` · `$Sentence` · `$Section` · `$Phrase`

### Inherits a reference's link — 11

The seven `$$X` · `$Bookmark` · `$Highlight` · `$PageFold` · `$ReferenceCard`

### STILL OWING A VIEW — 3, and two are BLOCKED by a measured conflict

| owes | wanted | why it did not land |
|---|---|---|
| **`$Paragraph`** | `$Prose` — `styled.p` | ***BLOCKED*** — see below |
| **`$ReferenceCard`** | `$Cited` — `styled.ol` | ***BLOCKED*** — same |
| **`$Catalogue`** | *nothing at all* | *a decision, not a defect: it is a reading, not writing* |

***THE MEASURED CONFLICT, and it is why those two dresses were never worn:*** **`$Writing.frame()` wraps every piece of writing in a `<div>`, so a dress that is a `<p>` or an `<ol>` cannot hold framed writing.** *Probed 2026-09-05 — React refused it in words:*

> **"In HTML, `<div>` cannot be a descendant of `<p>`. This will cause a hydration error."**

*The rendered proof:* `<p class="…"><div class="pd-sentence">hello</div></p>`. **The container rule and these two dresses cannot both stand as written**, and which gives is [a ruling owed](#owed).

---

## <a id="warts"></a>THE WART REGISTER — CLOSED OUT

### Closed this turn

- [x] **`Routed` is gone, and with it `react-router` from the library.** *A library closed under books has no business knowing about a router; `$Ref` draws an anchor like every other reference.* **Routing is the application's, and this is the one behaviour I removed.**
- [x] **Zero casts.** *`searchFor` and `searchForOne` are generic — `searchForOne<$Path>($TypeOfPath)` — so `$Reference.path()` and `$Cover`'s three cards stop asserting what the call already knows.*
- [x] **The seven path codes are held ONCE.** *`reflection.code` reads a `$X` name as its kind, and **one** `$landsOnIt` on `ReferenceSpecification` serves all seven; the seven copies are deleted.*
- [x] **Nine members are promised now** — `annotations()` · `types()` on `$Writing$`; `kind` · `case` on `$Letter$`; `cover()` on `$Book$`; `$columns` on `$Table$`; `$focused` · `path()` · `focus()` · `unfocus()` · `read()` on `$Reference$`.
- [x] **Every waived rule carries `@specify` again** — eight of them had lost their label.
- [x] **The letter's procedure moved off the specification and onto its type.** *`patterns` and `reads()` were `static` on `LetterSpecification` and the type reached in to call them.* **A specification judges; the type holds the procedure.**
- [x] **AN ANNOTATION NO LONGER LEAVES AN EMPTY CONTAINER.** *Found by probing rather than reading: `view()` answered `null` but `frame()` still wrapped, so every type, path and theme left a `<div class="">` in the DOM.* **`$Annotation.frame()` answers `null` too**, and a promise holds it: `<div class="pd-sentence">hello</div>`, nothing else.
- [x] **`$IndexCard.view()` names its block `Block`**, not `Written`
- [x] **`Html.block()` deleted** · **`Specification.for` deleted** — both declared, neither called
- [x] **`$Reference`'s bond**, the blank line in `$TypeOfSynopsis`, and every import the deleted rules left behind

### NOT a wart after all — corrected

***My "six interfaces name a class" finding was WRONG, and the reason is a ruling of yours.*** **`$Writing` cannot be assignable to `$Writing$`, because `$Writing$` does not promise `_block`, the bond, or `$view` — which is your own line: *"make block public… not on the interface but on Writing2."*** *So an interface may name `$Writing$` in a parameter, and must name `$Writing` in any return or array position.* **Measured: naming `$Writing$` in `$Composition$.parts()` alone produced 51 errors across 30 files.**

### Standing, and each needs you — [see below](#owed)

- **17 empty specifications.** *Seven are the `$XSpecification` seams that just lost their duplicated rule to the base — those are correct.* **Ten are kinds with no rule of their own**, four of which were promised *"its own formula chain"*: Title, Author, Subject, CatalogueCard.
- **Eight `$$X` classes have no component export**, because the name would be `$Letter` — the class standing beside it.
- **`reference2/Referent.tsx` is dead** — one interface, zero runtime exports, nothing imports it.
- **`index2.ts` names no dress but `Anchor`** — `$Heading` and `$Table` stand in both `writing2` and `encyclopedia2`.
- **`$Composition` has no type and no specification.**

---

## <a id="owed"></a>WHAT IS OWED — seven rulings

1. **THE CONTAINER AND THE DRESSES.** *`$Writing.frame()` wraps everything in a `<div>`, so `$Prose` (`<p>`) and `$Cited` (`<ol>`) can never hold framed writing — measured, React refuses it.* **Either the frame's container varies by kind, or those two dresses are not for writing.**
2. **THE `$$X` COMPONENT NAME.** *Eight reference kinds are unreachable because `$($$Letter)` would export as `$Letter`, which is the class beside it.* **A name from you, or they stay class-only.**
3. **`$Referent$` — dead. May I delete the file?**
4. **`$Composition` — no type and no specification.** *Reason offered: it is a base in the writing chain like `$Writing` and `$Annotation`.*
5. **TEN EMPTY SPECIFICATIONS**, four of them promised *"its own formula chain"* — Title, Author, Subject, CatalogueCard. **What is a title's own rule?**
6. **`$Heading` and `$Table` stand in two folders**, so `index2.ts` cannot star `encyclopedia2`.
7. **`means()` answers `$Annotation$`, not `$Reference$`** — *because `$Reference$` now lives with its class and naming it in `Writing.tsx` is a circular type reference.* **Your sentence was "means is like type but for reference."**

***And these six semantic findings are still yours, unchanged:*** *a title that is a card · `title` meaning two things · a page fold that is a chapter reference · a catalogue that is writing · `$Ref` beside `$Reference` · and `book()` which may promise only `$Writing$`.*

## <a id="next"></a>What this checklist says next

**Done this turn:** *C2 everywhere · the catalogue prints a plain reference · `$Reference$` moved to its own file · the maker registry deleted, each type MAKES its parts · `$Type.reference()` struck · `$Anchor` moved to the dresses ·* **`tsc` 0 and 627 promises green.**

**Still owed, and none of it needs a ruling:**

1. **S2** — nine empty specifications: Heading, Chapter, Synopsis, TableOfContents, Title, Author, Subject, CatalogueCard, IndexCard
2. **P3** — 21 kinds arrived with no `.spec` examples
3. **I2** — `$Reference$` promises nothing; the nine dresses have no interface at all
4. **U2** — reflection and the parser still ask a class where they could ask the promise
5. **V5** — transparency is not carried, so `$Phrase` and `$Ref` no longer lend their parts

**And these are NOT mine to fix — six semantic findings and one measurement:**

| | |
|---|---|
| **a title is a CARD** | *and in a library a card carries a title* |
| **`title` means two things** | *a heading on an index card, a card in `book2`* |
| **a page fold is a CHAPTER REFERENCE** | *and a fold marks a place* |
| **a catalogue is WRITING** | *and it is never written; it is a reading* |
| **`$Ref` abbreviates `$Reference`** | *and both are references* |
| **`$Referent$` is DEAD** | *one interface, nothing imports it* |
| ***`book()` may only promise `$Writing$`*** | ***measured twice — anything it promises, all writing must have*** |
