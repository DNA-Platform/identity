# Sprint 51 — The article that is a part

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **subject:** [Publicity](../..publicity/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** ***implementation-ready***

---

## <a id="the-principle"></a>The principle

> ***An article is not a kind of book. It is one PART of a book, beside the talk and the margin, and a part catalogues its own chapters.***

**Doug arrived at it by rejecting his own first shape** — *"We need to make a Book type called Article"* became *"Maybe since we have Parts, Article is a type of Part"* — and the page argues for the second. **The Turing article nests three deep: 10 h2, 20 h3, 2 h4.** *Article-as-a-Book would have to invent that nesting; `$Part` already holds `partitions`, `chapters` and `sections`.*

***And the reading that makes it cheap:*** **`$Book` already slices a flat block four ways** — `_opening`, `_contents`, `_body`, `_closing` — *and hands each to a region format.* **Parts generalize four fixed slices into named ones**, so the frame was never "around" anything and does not need to be. ***That is why this is a deletion, not an addition.***

## <a id="the-anchor"></a>The anchor that corrected the design

**Doug, on the site chrome:** ***"There is no outside the book… You need to understand closed under books."***

*The first proposal put the wordmark, search and account links outside the Book, as the library around it.* **That is wrong in kind, not in placement** — [Closure Under Books](../the-semantics-of-books/10-closure-under-books.md): *reach for anything and what you get is a book; the reach never leaves the shelves.* **And the search box repeating on two pages is not evidence of a library-level reach — Doug: *"That's two books printed with the same excerpt."*** *A shared component is the whole explanation; anything more was modelling that was not asked for.*

***The word for the third part fell out of the same correction.*** **Doug: *"Isn't this the stuff that would go in the Margin of the page?"*** *It retires `frame` and `apparatus` both, and it obeys the [struck-word ruling](../the-coding-style/03-the-coding-style.md#the-anchors) that killed **furniture** — **name the parts, not the collection**. A margin is a place you can point at.*

## <a id="the-model"></a>The model

```
Book — Alan Turing
├── Margin        (part)
│     Header      wordmark · search · account          ┐ parenthetical chapters,
│     Sidebar     contents · appearance                │ drawn by the parts that
│     Footer      licence · terms · privacy            ┘ use them
├── Article       (part)
│     Cover       title · tabs · languages          ← read from its canonical section
│     Sidebar     the infobox                       ← a $CatalogueCard
│     chapters    h2, with partitions for h3 / h4
│     Table       its own contents
└── Talk          (part)
      Cover · chapters · Table
```

***`$Sidebar` appears twice and is the same kind both times*** — **the infobox is a sidebar in the text block; the contents is a sidebar in the margin.** *Doug's "another Sidebar perhaps", and it is why neither needed a new name.*

## <a id="requirements"></a>Requirements

*Approved in conversation, 2026-09-08. Each cites the unit that realizes it.*

| | requirement | lands in |
|---|---|---|
| **R1** | **An article is a kind of `$Part`**, not a kind of `$Book` | [U4](#u4) |
| **R2** | A book holds **three parts** — the article, the talk, the margin — and a part may hold more parts | [U4](#u4) |
| **R3** | **The cover lives in the article part**, read from its canonical section | [U4](#u4) · [U6](#u6) |
| **R4** | **Canonical is a property, not a position** — a part names the section that stands for it, defaulting to the first | [U6](#u6) |
| **R5** | **`$Book` enumerates its PARTS** to find its cover and its table; `chapters` is scoped to its own part and never reaches beyond it | [U5](#u5) |
| **R6** | **Each part carries its own table of contents**, and the one displayed is the current part's | [U6](#u6) |
| **R7** | **Parts are what flatten the nesting** for chapter enumeration — Doug: *"it proves that to get the chapters of the book you need to use parts"* | [U5](#u5) |
| **R8** | **`$Sidebar` is the boxed aside**; the four region formats are renamed off it | [U8](#u8) |
| **R9** | The **infobox draws from `$CatalogueCard`** with `$IndexCard` rows, every field optional | [U8](#u8) |
| **R10** | **An empty `<Title/>` says its book's title** | [U7](#u7) |
| **R11** | **`article/`, `book/`, `encyclopedia/` are separately indexed** so a name may exist in more than one | [U3](#u3) |
| **R12** | **Levels are carried by `$indent`**, not by structure — *shipped 2026-09-08, before this chapter* | done |
| **R13** | **`$composesWhatItHolds` and its four overrides are struck** — Doug: *"That's the worst property ever… I never signed off"* | [U2](#u2) |
| **R14** | **A `$Title` written inside a `$Section` is not dissolved** | [U1](#u1) |
| **R15** | **The Turing page's content lives in `.wiki/alan-turing`** | [U9](#u9) · [U10](#u10) |

## <a id="the-size"></a>The size, measured before dividing

***[ce-plan asks what the output IS before a plan divides work](../../../../.claude/library/our-skillset/29-ce-plan.md), because [The Build](15-the-build.md) cut one session's work into seven tracks.*** **So it was measured:**

| | |
|---|---|
| **the Turing content** | ***already imported*** — 126 nodes pulled, 10 chapters, 20 subsections, 94 paragraphs, written to `.wiki/alan-turing` |
| **the framework strike** | **5 members** — one rule, four overrides |
| **the dissolve fix** | **one predicate**, in `Composition.parts()` |
| **the article kinds** | `$Article`, `$Margin`, and an index — *small; the machinery is `$Part`, which exists* |

***This is not a multi-session division.*** **It is one lane in `.wiki` and `src/article`, and one seam with the session holding `src/writing`.** *The only true parallelism is [U1](#u1) and [U2](#u2), which are theirs.*

## <a id="the-seam"></a>The seam with the other team

**Session `inexplicable-phenomena-d6` holds `src/writing` and chemistry.** *[U1](#u1) and [U2](#u2) are theirs; everything else is this lane's.* **The contract at the seam is one sentence:**

> ***A `$Title` written inside a `$Section` stands, and is found by `searchForOne($TypeOfTitle)` on that section.***

***[A contract is corrected by implementation, never by rereading](../../../../.claude/library/our-skillset/29-ce-plan.md).*** **So [U7](#u7) is already built against it and its promise is already RED** — *`.tests/title.test.tsx`, "expected 1 to be 2".* **That red is the seam under test.** *When [U1](#u1) lands the promise should go green with nothing changed on this side; if it does not, the contract was wrong and that is the finding.*

## <a id="the-units"></a>The units

### <a id="u1"></a>U1 — a title written in a section is not dissolved · ***d6's***

**Mechanism:** *`Composition.parts()` replaces a token with `token.parts()` when it carries the writing's own type. `$TypeOfTitle` extends `$TypeOfSection`, so a title inside a section satisfies it and is lifted away.* **Measured three ways — empty, named, and alone:**

```
<Title/> alone           [$TypeOfTitle, $Heading]                          survives
<Title/> in a Section    [$Heading, $Heading, $Paragraph, $TypeOfSection]  GONE
<Title>Named…</Title>    [$Heading, $Heading, $Paragraph, $TypeOfSection]  ALSO GONE
```

***It is not about emptiness.*** **Files:** `src/writing/Composition.tsx`. **Demo contribution:** *an empty title on the Turing page says "Alan Turing" where it stands — which prose cannot fake, because the same markup with the cover removed says nothing.*

> ***Scope, and it is Doug's:*** **the dissolved title is the requirement.** *A wider shape was put to him — lift a token whose kind IS the writing's own, let a SPECIALIZATION stand — and his answer was that he does not understand the parts fix if it is more than the title.* **The generalization is a note, not a spec.**

### <a id="u2"></a>U2 — `$composesWhatItHolds` is struck · ***d6's***

**Mechanism:** *the rule "a piece of writing holds nothing above its own level" checks every composed part is beneath the writing's kind. Four kinds override it to `false` — `$Catalogue`, `$IndexCard`, `$Path`, `$Reference` — and every one says the same thing in its own words: **composes nothing of its own**.* ***Four of the five members exist only to escape the fifth.***

***What is lost, stated plainly:*** **a loud error, not a capability.** *`Composition.parts()` already filters by `beneath`, so anything above the writing's level is dropped from the reading regardless. The rule only turns silent omission into a refusal.*

> ***`composed()` is NOT struck with it.*** **Six rules call it** — `$saysSomething`, this rule, `SectionSpecification.$opensWithHeading`, and the book's `$opensWithCover`, `$endsWithFooter` and `standing`. *Striking it means rewriting how a book checks its cover is first and its footer last, which nothing here forces.*

**Files:** `src/writing/Writing.tsx`, `src/reference/{Catalogue,IndexCard,Path,Reference}.tsx`. **Demo contribution:** *none directly — it is a deletion. Its visible end is that the demo draws unchanged with five fewer members.*

### <a id="u3"></a>U3 — `article/` is its own index

**Mechanism:** *three entry points already exist — `src/index.ts`, `src/encyclopedia/index.ts`, `src/utilities/index.ts` — with rollup inputs and an `exports` map per subpath. A fourth is one folder, one index, one input, one map line.* ***The thing that would defeat it:*** **`src/index.ts` carries 45 `export *` and flattens `book/` into one namespace**, *so collisions are impossible today only because everything shares it.* **`article/` works only if the top index does not re-export it.**

**Decision owed to Doug, and it is a real trade:** *minimal — `article/` alone gets a subpath, nothing moves, the three are not symmetric; or symmetric — `book/` and `encyclopedia/` move behind subpaths too, about forty demo import lines change.* ***Recommendation: symmetric, and now, because the demos are small tonight and will not be after Turing.***

**Files:** `src/article/index.ts`, `rollup.config.js`, `package.json`. **Demo contribution:** *`$ArticleFormat` (a dress, in `encyclopedia/`) and `$Article` (a kind, in `article/`) coexist — the collision this exists to permit, visible on day one.*

### <a id="u4"></a>U4 — `$Article` and `$Margin` as kinds of `$Part`

**Mechanism:** *`$Part` extends `$Composition`, carries `$TypeOfPart extends $TypeOfChapter`, and `specifically()` fills `partitions`, `chapters` and `sections` from its own block. `$Article` and `$Margin` are `$Part` subclasses; the book holds three.* **The header and footer are chapters of the margin and are `parenthetical`** — *the pattern `$Abstract`, `$Index` and `$Synopsis` already use: they do not draw themselves; the parts that use them draw them.*

**Files:** `src/article/{Article,Margin}.tsx`. **Depends on:** [U3](#u3). **Demo contribution:** *the Turing page draws its margin once and its article beneath it, with the same header markup reachable from a second part.*

### <a id="u5"></a>U5 — a book enumerates its parts

**Mechanism:** *`$Book.chapters` uses one-level `searchFor($TypeOfChapter)`. With chapters inside parts they are two levels down and it finds **nothing** — so parts flattening the recursion is not an optimisation, it is the only way to enumerate.* **`cover`, `synopsis`, `table`, `index` and `footer` are placed by the same one-level search and stop resolving for the same reason.**

**Files:** `src/book/Book.tsx`. **Depends on:** [U4](#u4). **Demo contribution:** *the Turing page's contents lists chapters that live two levels down — which a flat book cannot produce.*

### <a id="u6"></a>U6 — a part catalogues its own chapters · ***DESIGN OWED***

***Doug: "We want a Table trick too and maybe the table of contents gets pulled in — still needs design."*** **This unit has no mechanism yet and is therefore denied files, scenarios and dependencies**, [under the rule that a unit with no mechanism is not a unit](../../../../.claude/library/our-skillset/29-ce-plan.md).

**What must be designed:** *how a part answers its own table; how the displayed table becomes the current part's; and how the canonical section is named when it is not the first one — Doug: **"First section in the canonical section, even if this canonical section is not first."*** ***The `$ReferenceCard` precedent is the starting point — "a card wears its first reference, the canonical one" — generalized from "the first" to "the one that stands for the rest".***

### <a id="u7"></a>U7 — an empty title says its book's title · ***BUILT, RED, BLOCKED ON U1***

**Mechanism:** *`$Title.canonical()` is a property — argumentless, returns data, and [the coding style names `canonical()` as the example](../the-coding-style/02-the-order-of-a-class.md#what-counts-as-a-property). It answers `undefined` when the title says its own, else the book's cover's title. `view()` draws that one.* **The `Title.tsx -> Cover.tsx` cycle is declared in `knownCycles`** — *Doug: "Bundler should be handling cycling. Just work within what it allows."*

**Files:** `src/book/Title.tsx`, `rollup.config.js`, `.tests/title.test.tsx`. **Depends on:** [U1](#u1). **Demo contribution:** *the page says its title twice — once on the cover, once where an empty title stands. **A hand-authored page cannot fake it**: the promise counts occurrences, and removing the cover takes both away.*

### <a id="u8"></a>U8 — `$Sidebar` is the box, and it draws the infobox

**Mechanism:** *[The Wikipedia Fit](../the-motif/02-the-wikipedia-fit.md) already maps it and calls the fit **exact**: `.infobox-above` is the card's name, `.infobox-label` + `.infobox-data` is one of its lines, `.infobox-header` is a line that is a heading, and a blank field is simply not drawn.* **The Turing infobox matches row for row** — *an `ABOVE` ("Alan Turing OBE FRS"), twelve labelled rows, a `HEADER` ("Signature").* ***Their own caution, kept: "the table structure is soft-deprecated" — so the infobox is a fact about the FIELDS, and the card must not learn the table.***

**The four region formats are renamed off `Sidebar`.** *Typography's own four: **head**, **gutter**, **text block**, **foot** — which is what `$MarginFormat` with `$at` has been describing all along.*

**Files:** `src/article/Sidebar.tsx`, `src/encyclopedia/*Format.tsx`, `.wiki/alan-turing`. **Demo contribution:** ***the reviewable end of this sprint*** — *eighteen labelled rows where absent fields do not appear. Prose can fake a heading; it cannot fake that.*

### <a id="u9"></a>U9 — the Turing content is imported · ***DONE, IMPERFECT***

**Mechanism:** *a puppeteer pull walks `#mw-content-text .mw-heading, p` in document order, cleans citation markers, and a generator writes one chapter file per h2 with h3/h4 carried as `indent={1}` and `indent={2}`.* **Measured: 126 nodes — 10 h2, 20 h3, 2 h4, 94 paragraphs — into 10 chapters plus cover, synopsis and composition root.**

> ***A defect worth recording, because it bit three times:*** **a regex written through a bash heredoc loses its backslashes** — `\s+` became `s+` and the cleaner deleted every letter *s* from the corpus. **The fix is not a library: it is that code is written to a file with the file tool and never through the shell.**

**Files:** `.wiki/alan-turing/*`, mirrored to `.wiki/.public/alan-turing/*`. **Demo contribution:** *the page's real prose, at real length.*

### <a id="u10"></a>U10 — the Turing page draws

**Mechanism:** *`main.tsx` routes a third path beside `/` and `/article`; the book composes cover, synopsis and ten chapters.* **Files:** `.wiki/.public/main.tsx`, `.wiki/.public/alan-turing/book.tsx`. **Depends on:** [U9](#u9). **Demo contribution:** *the page at `/turing`, at every breakpoint, with zero refusal panels.*

## <a id="scenarios"></a>Test scenarios

| unit | scenario | expected |
|---|---|---|
| [U1](#u1) | a `<Title>` with a reference written inside a `<Section>` | the section's block holds a `$Title`; `searchForOne($TypeOfTitle)` answers it |
| [U1](#u1) | a `<Section>` written inside a `<Section>` | unchanged — still lifted, because that is the same LEVEL |
| [U2](#u2) | a chapter written inside a paragraph | drawn without it, and no refusal — the reading drops it silently |
| [U2](#u2) | the four kinds that overrode the rule | draw unchanged with the override deleted |
| [U4](#u4) | a book holding an article part and a margin part | `partitions` answers both; the margin's header draws once |
| [U5](#u5) | a book whose chapters live inside an article part | `chapters` answers them; a one-level search answers none |
| [U7](#u7) | an empty `<Title/>` inside a chapter of a titled book | the title is said **twice** on the page — [already written, already red](#the-seam) |
| [U7](#u7) | a written `<Title>` in the same place | said once; the canonical is not reached |
| [U8](#u8) | a `$CatalogueCard` with a name, twelve lines and one heading line | eighteen rows; a card with a blank field draws no row for it |
| [U10](#u10) | `/turing` at 1600 · 1440 · 1120 · 768 · 480 · 375 | zero refusal panels, zero object-text, every region present |

## <a id="risks"></a>Risks

| | risk | mitigation |
|---|---|---|
| **1** | ***[U1](#u1) is in the hottest path in the package*** — `parts()` runs on every reading | *the promise is already written and red; the suite is 80 and runs in 3.8s, so the blast radius is measurable in one run* |
| **2** | **The contract at the seam is wrong** | *[U7](#u7) is built against it already — [a contract's errors are only visible from inside an implementation](../../../../.claude/library/our-skillset/29-ce-plan.md)* |
| **3** | ***[U3](#u3) symmetric costs ~40 demo import lines*** | *do it now; the cost only grows with the Turing page* |
| **4** | **[U6](#u6) is design owed and could be mistaken for buildable** | *marked, and denied files and scenarios, so it cannot be started by accident* |
| **5** | *A stale dev server serves an empty module and phantom faults follow* | **restart and clear `node_modules/.vite` before believing any measurement** — [Solutions 55](../solutions/55-the-page-i-measured-from-the-top.md) |

## <a id="where-things-stand"></a>Where things stand

> ***THE NEXT ACTION, as a command:*** **`/ce-work` at [U5](#u5)** — *a book enumerating its parts, which is what `$Margin` and `$Article` need before they can be framework kinds rather than demo ones.* **[U1](#u1) and [U2](#u2) remain with `inexplicable-phenomena-d6`.** *[U6](#u6) is still design owed.*

### <a id="done-this-run"></a>Done this run, measured

| | |
|---|---|
| ***[U7](#u7) half-landed — `reading()`*** | **`$Writing.reading()` answers the block; `view()` draws `$(this.reading())`; `$Section` overrides it as `reflection.wrapped(this)`; and `Section.tsx:22` is DELETED.** *A section's block now keeps what was written and its READING wraps — so the seam contract with d6 is half-satisfied by a deletion rather than a predicate.* **Behaviour-identical: all three pages byte-for-byte unchanged.** |
| ***three type faults, all Doug's ruling*** | **`Reflection.names()` walked from `getPrototypeOf(type.constructor)` and only terminated at `$Type`** — so a BARE `$Type` walked past it into `Function.prototype` and threw *"kind is not a constructor"*. Guarded. **And `$Writing.kind` COUNTED composition types where it should CHOOSE**: `$TypeOfList extends $TypeOfParagraph` is one specialising the other, not two levels. *`Reflection.specialises` is the predicate; `kind` now drops any type another carried type specialises, and still refuses two unrelated ones.* **Four promises, `.tests/type.test.tsx`.** |
| ***the article's components, in `.wiki/.article/`*** | *`.sidebar.tsx` — `$Sidebar` and `$Line`, the infobox and its labelled rows. `.margin.tsx` — `$Header`, `$Footer`, `$Wordmark`. `.hatnote.tsx` — `$Hatnote`.* **Both books reference them; the Turing infobox draws twelve labelled rows.** |
| **both pages** | **`/article` 20,232 characters · 24 contents entries · 0 refusals. `/turing` 57,894 · 33 contents entries · 12 infobox rows · 0 refusals.** *`/` unchanged at 1,762.* |

***Green at close:*** **`src` tsc 0 · `.wiki` tsc 0 · 87 of 88.** *The one red is [U7](#u7)'s empty-Title promise, held red on purpose — it is the seam under test and it goes green when [U1](#u1) lands.*

### <a id="the-hangs"></a>Two hangs, both mine, both the same disease

***`reading()` hung the whole suite on its first run — 590 seconds, 85 bytes of output.*** **`reflection.wrapped` allocates a fresh `$Block` every call, so `$(this.reading())` was a NEW COMPONENT TYPE on every render**: React remounted, rendered, allocated again. *Memoised on the parts identity — `parts()` is already memoised, so its array IS the cache key.*

***That is the second unbounded thing this session shipped.*** **The first was `Reflection.indent`, a walk with no termination condition that terminated only because a bug was stopping it** — [`inexplicable-phenomena-aa` found and fixed it](../solutions/55-the-page-i-measured-from-the-top.md). **Both passed every gate that does not run under load**, which is the lesson worth carrying: *tsc, build and a fast promise cannot see an unbounded loop; only the whole suite can.*

### <a id="what-the-demo-revealed"></a>What building it demo-side revealed — the point of doing it there

***Doug's instruction was to put the components in `.wiki` and let that show how much needs integrating.*** **It showed three things a demo cannot solve:**

| | |
|---|---|
| ***a book opens with its cover, so a masthead cannot be the first chapter*** | *Written as one, the book refuses: "a book opens with its cover, and this one opens with something else."* **The masthead is a SECTION OF THE COVER instead** — which is what the portal's cover already does with its logo and search. ***This is [U5](#u5) arguing for itself: once `$opensWithCover` moves to the article part, the margin can hold its own header.*** |
| ***`parenthetical` means invisible, not "drawn elsewhere"*** | *A `$Margin` holding a header and a footer draws NOTHING, because `parenthetical` has no way to ask whether something else is using it.* **So the margin is two chapters today, not one part.** ***The feature that closes it is a `used` the HOLDER supplies, the way `supplies()` supplies parts*** — it would delete `parenthetical`, `$print` and the demo's `<Synopsis print>` together. |
| ***a label is drawable without an element*** | **`$Line` carries `$label`, the format forwards it to the DOM, and `content: attr(label)` draws it.** *No wrapper, no second child, and the label stays a property of the line rather than content inside it.* **That one is a keeper and belongs in the framework as it stands.** |

### <a id="owed"></a>Owed by Doug before the next unit

*Unchanged from the plan, plus one retraction:* **the two struck book rules; whether `article/` holds kinds only or kinds and their formats; and the four region names.** ***I retract head / gutter / text-block / foot*** — *the gutter is the unprinted binding margin and swaps sides between verso and recto, the text block is the whole bound stack, and the printed side margin is the **fore-edge**, which is the `right` area `$BodyFormat` already declares and nothing claims.*

***And the word "dress" is struck*** — Doug, this run: *"I don't like you saying dress — not book and not article."* **The word is FORMAT.** *It is also the title of [13-the-default-dress.md](../the-motif/01-the-default-dress.md), which teaches it to whoever reads next and is owed a correction.*
