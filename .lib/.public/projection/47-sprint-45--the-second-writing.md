# Sprint 45 — The Second Writing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***The job, in Doug's words, 2026-09-05:*** **"Get a file for every v2 class. It should have the patterns I recommend. No warts… Every single thing from v2.1 (technically v2.1 as v1 is in archive) should be imported to v2.2."** *And how: **"Most of what you need is to copy, assess based on the file pattern and adjust."*** **And the rule that reordered the whole port: *"the type should carry most of the complexity and the classes are shells for another user to subclass because they will feel more normal."*** *And the second check, which is not the compiler's: **"Do the subclasses make sense? Do the members? Does this thing mean what it is called?"***

## <a id="state"></a>Where it ended

| | before | after |
|---|---|---|
| **files in v2.2** | 22 | **43** — one for every v2.1 file, plus `Anchor` split out |
| **`tsc` in `src`** | *(v2.2 partial)* | **0**, from **173** the moment the copy landed |
| **promises** | 589 | **627**, 31 files, all green |
| **declarations outside the template** | *unmeasured* | **1** — [`Routed`](#q5), and it is the one I could not place |
| **modules that load standalone** | *unmeasured* | **38 of 38**, each proved by its own promise |

***The last row is a new promise and it exists because this design can fail silently.*** **[`tests/loading.test.tsx`](../../package/src/tests/loading.test.tsx) imports each module first into a fresh graph** — *a class extending a half-built base throws there rather than in a consumer's application, which is how the same fault was found twice by accident before.*

## <a id="template"></a>The template every file was checked against

| slot | plain | with a canonical reference |
|---|---|---|
| **1 · the interface** | `$X$` | `$$X$` |
| **2 · the class** — ***a shell*** | `$X` | `$$X` |
| **3 · the type** — ***carries the complexity*** | `$TypeOfX` | `$TypeOf$X` |
| **4 · the specification** | `XSpecification` | `$XSpecification` |
| **the component exports** | `export const X = $($X)` · `export const TypeOfX = $($TypeOfX)` · `const typeOfX = TypeOfX` | |

| | does | when |
|---|---|---|
| **the bond constructor** | ***assigns*** — folds this kind's type into the block where the page carried none | *once, at construction* |
| **`specifically`, on the TYPE** | ***augments, then enforces*** | *the second verb* |
| **the specification** | ***judges only*** | *inside `specifically`* |

***The bond is three lines everywhere and they are the same three lines:***

```tsx
$Section(block: $Block) {
    super.$Writing(block);
    if (reflection.is(this, $TypeOfSection)) return;
    this._block.$elements = [...(this._block.$elements ?? []), $check(typeOfSection, '!') as $Writing];
}
```

**A canonical reference folds through the block it was handed, BEFORE `super`** — *so the specific kind wins and `$Reference` does not also fold a plain one:*

```tsx
$$Section(block: $Block) {
    const held = block ?? new $Block();
    held.$elements = [...(held.$elements ?? []), $check(typeOf$Section, '!') as $Writing];
    super.$Reference(held);
}
```

## <a id="deltas"></a>The vocabulary deltas, applied

| | v2.1 said | v2.2 says |
|---|---|---|
| **V1** | `.block` | **`._block`** |
| **V2** | `.copy` | **`html.text(x._block)`** |
| **V3** | `.type` *(field)* | **`.type()`** *(reads the block)* |
| **V4** | `this.type ??= $check(typeOfX, '!')` | **the bond folds the type into the block** |
| **V5** | `find` / `findOne` | **`searchFor` / `searchForOne`** |
| **V6** | `.parenthetical` | ***an `$Annotation`*** |
| **V7** | `.canonical` · **V8** `.index` · `.indent` | ***gone*** |
| **V9** | `extends $Composition` | **`extends $Writing`** |
| **V10** | `TypedSpecification` | **`WritingSpecification`** |
| **V12** | `$TypeOfAnnotation` · `$TypeOfType` | ***deleted*** |
| **V13** | `Anchor` from `Writing` | **`writing2/Anchor.tsx`** |
| **V14** | `$$X` on the seven | ***built, all seven*** |
| **V16** | `parts()` on every level | ***`$Composition` only — [Q1](#q1)*** |

***Verified by sweep:*** **zero occurrences of `.block`, `.copy`, `.parenthetical`, `.canonical`, `findOne`, `TypedSpecification`, `[cache]`, `prints`, `resolve` or `formula` anywhere in v2.2** — *and `utilities2/Html.ts`, which read the first two, now asks the interface instead:* **a node that answers `specifically` is an annotation and says nothing in the copy.**

---

## <a id="checklist"></a>THE CHECKLIST — every file, its own boxes

*Each file carries **form** (the four slots and the vocabulary) and **semantics** (does it mean what it is called). A box is checked only where it was measured.*

### `writing2/Writing.tsx` — the base vocabulary

- [x] **interfaces** `$Writing$` · `$Annotation$` · `$Type$` · `$Reference$` — the four the whole system is replaceable through
- [x] **classes** `$Writing` · `$Annotation` · `$Type` — flat, three deep, no further
- [x] **specification** `WritingSpecification` — four rules
- [x] **no type of its own** — *`$TypeOfType` was deleted by ruling; a type's type is reached by asking twice*
- [x] **`means()` goes through reflection** — no import of the reference kind, so the file has no cycle to break
- [x] **`specify()` dedupes by constructor** — *two types on one writing no longer run the base rules twice*
- [x] **member order is Doug's and untouched**
- [ ] **SEMANTIC — `$Reference$` promises NOTHING.** *It is `$Annotation$` plus nothing, so a replacement reference cannot be written against it* — **[P1](../designing-inexplicable-phenomena/17-the-interface-type-system.md#the-four-purposes) unmet, and the reason `$IndexCard` has to reach through reflection to read a url.** **[S15]**
- [ ] **SEMANTIC — `$Book$` CAN NEVER PROMISE A MEMBER.** *`book()` answers `this`, so any member on `$Book$` is one `$Writing` must have.* **Measured: adding `cover()` to `$Book$` produced 47 compiler errors across 30 files, all of them cascades from that one line.** **[S21]**
- [ ] **[Q4](#q4) — `reference()` was ADDED to `$Type`**, spelled as [ch15](../designing-inexplicable-phenomena/15-the-spelling-of-a-kind.md) has it. *It is a base-class member and it is Doug's to strike.*

### `writing2/Composition.tsx`

- [x] four slots present · `$TypeOfComposition` · `CompositionSpecification`
- [x] **the parse is here** — `parts()` · `catalogue()` · `where` · `select` · `selectMany` · `single` · `concatenate`
- [x] `reduce()` asks the type what is beneath and the parser for its maker
- [ ] **SEMANTIC — `$Composition` may be a distinction with no difference.** *It is `$Writing` that has parts, and [T0](../designing-inexplicable-phenomena/17-the-interface-type-system.md#definition-first) says all writing has parts by definition.* **Nothing extends it but `$Ref`, so the seven levels cannot divide themselves — [Q1](#q1).** **[S13]**
- [ ] **SEMANTIC — `concatenate` is not a library word.** *It is a string operation; what it does is gather several compositions' parts into one.* **[S8]**

### `writing2/Letter.tsx` · `Word.tsx` · `Sentence.tsx` · `Paragraph.tsx` · `Section.tsx`

- [x] **eight declarations each** — `$X$` · `$$X$` · `$X` · `$$X` · `$TypeOfX` · `$TypeOf$X` · `XSpecification` · `$XSpecification`
- [x] **`below()` chains** Book → Chapter → Section → Paragraph → Sentence → Word → Letter, and the letter names none
- [x] **`reference()` names the canonical `$$X`** at every level
- [x] **each specification keeps only what is ITS OWN** — *one grapheme · one unbroken stretch · stops at its end · unbroken by a blank line · opens with its heading*
- [x] **the six "written as" rules are GONE** — *`$composesWhatItHolds` says it once for every level* **[S17]**
- [x] `$Letter`'s `kind` and `case` are set by `$TypeOfLetter.specifically` — ***the value on the instance, the procedure on the type***
- [x] `$Section.heading()` replaces v2.1's `name()`
- [ ] **SEMANTIC — `$Word.letters` returning `this` was NOT carried over.** *v2.1 has `letters`, `words`, `sections`, `chapters` all answering `this`; the member says "here are my letters" and hands back the word.* **Dropped rather than ported, and it is Doug's to restore if it meant something.** **[S9]**
- [ ] **SEMANTIC — `name` still means three things across the library** — *`$Section.heading()`, `$Type.name`, and `$IndexCard`'s title.* **[S6]**

### `writing2/Heading.tsx` · `Phrase.tsx` · `List.tsx` · `Table.tsx`

- [x] four slots each, interfaces and specifications newly written
- [x] `$TypeOfHeading` and `$TypeOfList` are paragraphs; `$TypeOfPhrase` is a sentence; `$TypeOfTable` is a section
- [x] **`frame()` is no longer overridden to return `view()`** — *v2.1's Heading and List did, so the same writing sat one element shallower than its siblings;* **[ch12's same-container rule](../designing-inexplicable-phenomena/12-the-closeness-rule.md#one-container) forbids exactly that** **[S18]**
- [x] `$Table.cells()` is a real member; the columns rule divides them
- [x] each waives what it must, by returning `false` from the inherited rule — *a list may hold blank lines; a table opens without a heading*
- [ ] **`indent = 1` was NOT carried.** *It is how a transparent kind lends its parts to its host — `$Phrase` and `$Ref` both need it, and v2.2 has no transparency.* **Recorded, not invented.**

### `writing2/Theme.tsx` · `Style.tsx` · `Anchor.tsx`

- [x] **`$Theme` now has a type and a specification** — *it is an annotation, so the template applies in full;* it waives *says something* and *composes*
- [x] **`$Anchor` split into its own file with `$Anchor$`** — the interface it never had
- [x] **`$Style` and `$Anchor` carry NO type and NO specification, and the reason is one sentence:** ***a style is not writing, and a specification is a specification of writing***
- [x] the nine dresses in `encyclopedia2/` stand on the same reason

### `book2/Book.tsx` · `Chapter.tsx`

- [x] eight declarations each, `$$Book` and `$$Chapter` built
- [x] `$TypeOfBook.specifically` **augments** — it appends the index before it checks, which is the second verb
- [x] `$Book.cover()` **is found by being a cover**, not by being first **[S3 fixed]**
- [x] `$Chapter.frame()` keeps the `<Article><Output>` dress, indented per [The Shape of TSX](../designing-inexplicable-phenomena/16-the-shape-of-tsx.md)
- [ ] **SEMANTIC — `$Book$` is empty and must stay empty.** See [S21](#checklist) above.

### `book2/Cover.tsx` · `Synopsis.tsx` · `Index.tsx` · `TableOfContents.tsx`

- [x] `$Cover$ extends $Chapter$` — **v2.1 had `$Cover$ extends $Writing`, an interface extending a CLASS** **[S1 fixed]**
- [x] `$Cover` carries title, author and subject, each found by type, each its own rule
- [x] `$Synopsis` has the full eight, including `$$Synopsis`
- [x] `$Index` waives *says something* — an index may be empty
- [ ] **SEMANTIC — `$Index` is no longer `parenthetical`.** *v2.1 kept it out of the composition; its type is a `$TypeOfChapter`, so under Doug's own test — "if you are part of the composition, you are" — **an index is a chapter and belongs in it.*** **Behaviour changed deliberately; flagged.** **[S19]**

### `book2/Title.tsx` · `Author.tsx` · `Subject.tsx` · `CatalogueCard.tsx`

- [x] four slots each; each carries `heading()` and `reference()` itself, because **the classes are flat**
- [ ] **SEMANTIC — a title is not a card.** *The chain reads: a title is a kind of catalogue card is a kind of index card is a kind of section.* **In a library a card CARRIES a title.** *It typechecks and it reads backwards.* **[S11]**
- [ ] **SEMANTIC — `title` means two things.** *`$IndexCard`'s title is a **heading**; `$Title` is a **card**. So a card's title never finds a `$Title`.* **[S5]**
- [ ] **SEMANTIC — `reference()` now means two things** — *the card's referred book, and the type's canonical reference kind.* **Both are Doug's words; the collision is new and is his to settle.** **[S20]**

### `book2/Bookmark.tsx` · `Highlight.tsx` · `PageFold.tsx`

- [x] four slots each; all three are references, all three `persist` through `specifically`
- [x] `$Bookmark` waives *carries a path* and *lands on it* when it stands in a chapter
- [x] `$Highlight` waives *carries a path* and *says something* when it holds its pair
- [ ] **SEMANTIC — `$TypeOfPageFold extends $TypeOf$Chapter` says a fold is a reference to a chapter.** *A fold marks a **place** — it carries `location` — and its two siblings genuinely are chapter and span references.* **Bookmark reads true; page fold does not.** **[S12]**
- [ ] **SEMANTIC — the three are one family with no kind.** *Reader's marks: they persist, they are not part of the composition, and nothing says so.*

### `reference2/Reference.tsx` · `Path.tsx`

- [x] **`$Reference`, `$TypeOfReference` and `ReferenceSpecification` MOVED here** — [Q2](#q2) answered
- [x] `$TypeOfReference.specifically` **augments** — it mints the path from the copy when the copy is a url
- [x] `$Path extends $Annotation` — ***a path is not part of the composition***, which is what `parenthetical` was trying to say
- [x] both waive *composes what it holds*
- [ ] **`reference2/Reference.tsx` HAS NO INTERFACE.** *`$Reference$` stands in `Writing.tsx` with `$Annotation$` and `$Type$`, because `$Writing$.means()` promises it.* **So the word is split across two files, which the template does not allow.** *The alternative is `means(): $Annotation$`, which weakens Doug's own sentence — "means is like type but for reference."*

### `reference2/IndexCard.tsx` · `ReferenceCard.tsx` · `Catalogue.tsx`

- [x] four slots each
- [x] `$ReferenceCard$ extends $Reference$` — **v2.1's extended nothing** **[S2 fixed]**
- [x] `$Catalogue.follow` keeps the span, the address and the descent; the long method is split so a guard is a guard
- [x] `$Catalogue` asks `type().reference()` for what to print — *the `prints` registry stays deleted*
- [ ] **SEMANTIC — `$Catalogue` is not writing.** *It extends `$Writing`, is never written, and is built by `catalogue()` over parts already found.* **A catalogue in a library is a book of cards; this one is a reading, and naming the reading after the artefact makes both harder to talk about.** **[S10]**

### `reference2/Ref.tsx`

- [x] four slots, and it is the only file with a fifth declaration
- [ ] **`Routed` — THE ONE WART I COULD NOT PLACE.** See [Q5](#q5).
- [ ] **SEMANTIC — `$Ref` and `$Reference` are both references, and one is named by abbreviating the other.** *`$Ref` is a link written in prose; `$Reference` is an annotation carrying a path — genuinely different kinds.* **[The anchor](../designing-inexplicable-phenomena/11-the-coding-style.md#the-anchors) rules out "ref": every word is a word a library actually uses.** **[S7]**
- [ ] `$Ref extends $Composition` rather than `$Writing`, because it overrides `reduce()` — **the flat rule is broken here and only here**, and it is [Q1](#q1) again

### `reference2/Referent.tsx`

- [ ] **ONE INTERFACE, NO CLASS, NO TYPE, NO SPECIFICATION, AND NOTHING IMPORTS IT.** *It compiles to an empty module — measured: `import()` returns zero exports.* **In v2.2 `$Writing` implements `$Writing$` directly, so the promise `$Referent$` used to make is made elsewhere.** *Kept rather than deleted, because deleting from `src` is not mine.* **[S4]**

### `utilities2/` — exempt from the template, by his ruling

- [x] **`Specification.ts`** · **`Html.ts`** · **`index.ts`** written
- [x] **`Reflection.tsx`** — `is` restored from v2.1, `means` added, `code`/`codes` restored, `instanceOf` now answers through `is` so **one `instanceof` site serves the whole library**
- [x] **`Parser.tsx`** — ported, and **it holds the five maker registrations** ([Q6](#q6)), which is why no level file carries a sixth declaration
- [x] `parse()` lost its numbering pass — *v2.2 has no `index`*

### `test2/`

- [x] `writing2.test.tsx` · `experiment.test.tsx` · `multiple.test.tsx` repointed
- [x] **`loading.test.tsx` — 38 new promises**, one per module
- [ ] **a promise per ported kind is still owed** — [the spec convention](../designing-inexplicable-phenomena/11-the-coding-style.md#the-spec-convention): a kind is not finished until its examples are enrolled. **21 kinds arrived this sprint with no examples.**

### `index2.ts`

- [x] all 38 modules exported
- [ ] **`encyclopedia2` is NOT exported from it** — *`$Heading` and `$Table` are declared in both `writing2` and `encyclopedia2`, so a star export is ambiguous.* **The name collision is real and is [S22]**

---

## <a id="questions"></a>The six, and where each stands

<a id="q1"></a>**Q1 · WHERE DO THE COMPOSITION MEMBERS LIVE? — OPEN, and it is the one that matters.** *I did not add them to `$Writing`, because that is a base class. So `$Composition` survives as a flat kind holding `parts()`, and **the seven levels cannot divide themselves.*** **`$Ref` extends it, which is the only break in the flat rule.** *[S13](#checklist) argues the members belong on `$Writing` and that `$Composition` is what existed while `$Writing` had no room for them.*

<a id="q2"></a>**Q2 · `$Reference` MOVED — DONE.** *`reflection.means` finds it by the type's name, exactly as `composition()` does, so `Writing.tsx` imports nothing from `reference2` and the cycle that forced it is gone.* **Proved by `loading.test.tsx`.**

<a id="q3"></a>**Q3 · `this[cache](this.name)` — NOT CARRIED.** *v2.2 has no resolution-by-name, so the line would file a key nothing reads.* **[ch15](../designing-inexplicable-phenomena/15-the-spelling-of-a-kind.md) says it is part of the template, so this is a template question and it is yours.**

<a id="q4"></a>**Q4 · `reference()` ADDED to `$Type` — flagged.** *ch15 spells it, and without it `$$Letter` is unreachable now that `prints` is deleted.* **It is still a member on a base class.**

<a id="q5"></a>**Q5 · `Routed` — THE ONE WART LEFT, and here is why I could not fix it.** *It is a component that decides by CONTEXT — `<Link>` inside a router, `<Anchor>` outside — and the three homes I can name are all wrong: a **dress** never decides by context; a **type** would make routing part of what a ref means; and folding it into `$Ref.view()` calls a React hook from a class method.* **What it wants is a kind of style that reads its surroundings, and no such thing exists in the framework.**

<a id="q6"></a>**Q6 · THE MAKER REGISTRATIONS MOVED TO `Parser.tsx`.** *ch15 puts `parser.makes.set` at the bottom of each level file; your sweep rule says a file holds only the four.* **I obeyed the sweep rule** — the parser is a utility and the registration is its configuration — *which is why the template sweep now reports exactly one stray declaration in the whole of v2.2 instead of six.*

## <a id="stand"></a>Where things stand

### The next action

> **`/ce-brainstorm`.** *The port is closed and the base is sound; the next piece of work is a fresh brainstorm.*

***What this session EXPECTED the subject to be, marked as an expectation and not a brief:*** **Doug said *"Let's do wikipedia later when we are building the app"* and *"we will build wikipedia soon."*** *The subject is his to set in the room.*

### Doug's rulings this session, in his words

| | |
|---|---|
| **"the type should carry most of the complexity and the classes are shells for another user to subclass because they will feel more normal"** | *the whole shape of the port* |
| **"You are supposed to work on the basic types. They should extend composition"** | *the chain is `$Chemical → $Writing → $Composition → everything`* |
| **"I would move the creation to the bond constructor and leave validation to specifically, though assignment is fine on interface methods"** | *`$Book` makes its own index and `$Reference` its own path, in their bonds* |
| **"Why does it need maker registrations? Sounds like a wart."** | *the registry is gone; a type MAKES what is below it* |
| **"Why does `$Type` need reference. What semantics are you following?"** | *struck — `prints` stays deleted* |
| **"wrap in a span? And then things need to override frame if they do something different"** | *the frame is a span* |
| **"means has to answer reference… if a class has meaning, it should show with an anchor. And the reference itself should show as a phrase with the url of the path and the path should show as a phrase with the url but no anchor."** | *the drawing of a reference* |
| **"What is a title? Well I think we want it to be a section that means the book."** | *`$TypeOfTitle extends $TypeOfSection`* |
| **"An IndexCard can have a name and lines which are pieces of writing. A catalogueCard can have a title because it is the title of a book and the name can be the copy of that"** | *the cards* |
| **"The cover should always be the first non annotative piece of writing… The synopsis second, table third and index last"** | *the book's four properties and four rules* |
| **"$Style goes to $Format… Formatting can be the act if what the component does is apply formatting. If it is structural then it's a format."** | *`$Format`, and every dress an `$XFormat`* |
| **"They belong to writing, they just aren't writing. They participate in what writing looks like."** | *`$Format` and `$Theme` stay in `writing/`* |
| **"Yeah delete referent. Effectively that is writing when things are closed under books"** | *deleted* |
| **"Let's just rollback the wikipedia include and delay this."** | *`wikimedia-ui-base` uninstalled* |
| **"You don't need to ask about basic pattern. Assume you were wrong possibly about everything. Follow the patterns"** | *how to work* |

### What is complete

- **v2.1 is deleted and the `2` is off every folder.** `src/` is `writing` 13 · `book` 13 · `reference` 6 · `encyclopedia` 10 · `utilities` 5 — **47 files** — with `index.ts` the surface. *Rollup's inputs still resolve unchanged.*
- **Every kind carries the four declarations**, eight where a canonical reference stands. **Zero stray declarations** across all 42 files.
- **The seven levels and every kind extend `$Composition`**; no class extends the kind above it.
- **Each type MAKES what is beneath it** — the string-keyed maker registry is deleted.
- **The frame is a `<span>`**; four kinds override it for a block container.
- **The book answers `cover()` · `synopsis()` · `tableOfContents()` · `index()`**, and four rules hold their order.
- **A title is a section that means the book**, and is its own heading.
- **`instanceof` is contained in reflection**; the seven path codes are held once.
- **Fifty-two casts became four**, and each survivor has a stated reason.
- **`$Referent` deleted · `Routed` deleted · `react-router` gone from the library.**

### In progress — nothing

*The session closed clean.*

### Not started

- **The `.spec` examples.** *Every kind arrived without them, and the spec convention says a kind is not finished until its examples are enrolled.*
- **Transparency.** *`indent = 1` is not carried, so `$Phrase` and `$Ref` no longer lend their parts to a host.*
- **The Wikipedia dresses.** *[The research](../designing-inexplicable-phenomena/18-the-wikipedia-fit.md) is done and the build is deferred by his word.*
- **Three views.** *`$Paragraph`, `$ReferenceCard` and `$Catalogue` still draw their block; the first two were blocked by the `<div>` frame, which the span may now have unblocked.*

### THE COST OF THE DELETE, measured

***Deleting v2.1 removed 63 files from `package/src`, and **121 links in the branch library now point at files that are gone**.*** *They stand in settled chapters — [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md), [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md), earlier sprint records — written by the team about code that no longer exists.*

**They are NOT repaired here, deliberately.** *Rewriting 121 citations across other people's settled records, to point at files that were deleted rather than moved, would be editing the history rather than the library.* ***The honest fix is one note where a reader meets them, and that note is a job for whoever tends the branch cover — not a silent sweep.*** *(A further 112 links were already broken before this session, into `app/` and `.archive/`.)*

### Blockers — none, and two questions still open

1. **The `$$X` component name.** *Eight reference kinds have no component export, because `$($$Letter)` would export as `$Letter` — the class beside it.* **Doug's answer was to assign one locally where it is needed rather than export it**, so this is closed unless he wants the spelling written into the style book.
2. **Ten empty specifications**, four of which were promised *"its own formula chain"* — Title now has a rule; Author, Subject and CatalogueCard do not.

### Verification — run, with the numbers

```
tsc --noEmit -p src/tsconfig.json     0 errors
vitest run                            78 passed (78), 5 files
```

*The count fell from 628 because **550 of those were v2.1's**, testing classes that no longer exist. What remains drives v2.2 only: the seven levels, the specifications, the frame, the book's furniture, the title, and one promise per module that it loads standalone.*

### Wrong turns already tried — do not retry these

- **Naming `$Writing$` in a return or array position.** *`$Writing` is not assignable to `$Writing$`, because the interface does not promise `_block` — Doug's ruling. One such line cost 51 errors across 30 files.*
- **Promising a member on `$Book$`.** *`book()` answers `this`, so anything `$Book$` promises, every piece of writing must have. Measured twice, at 47 and 50 errors.*
- **Making all annotations draw nothing.** *That hid the path, and Doug's design says a path shows its url. Only a TYPE and a THEME are silent.*
- **A lazy or dynamic import to break a module cycle.** *Ruled out — "we deal with problems by looking at the design, not patching." The cycle is a question about what a thing IS.*
- **`$check<T>(kind, '!')` with an explicit type argument.** *No overload matches — and the fold line needs no cast at all.*

### What to read, and what is load-bearing in each

1. **[What We Believe](../designing-inexplicable-phenomena/19-what-we-believe.md)** — ***the 48 principles***, each with Doug's ruling and what it cost. Read this before touching a file in the four folders.
2. **[The v2.2 Checklist](48-the-v2-2-checklist.md)** — the checks every file is put through, and the semantic findings still owed.
3. **[The Wikipedia Fit](../designing-inexplicable-phenomena/18-the-wikipedia-fit.md)** — the licence wall, the infobox mapping, and the two kinds with no default style at all.
4. **[`src/writing/Writing.tsx`](../../package/src/writing/Writing.tsx)** — the base vocabulary; every other file is this shape.
5. **[`src/tests/loading.test.tsx`](../../package/src/tests/loading.test.tsx)** — the detector that catches a fatal module cycle the moment it appears.

*A starting point, not a boundary.*
