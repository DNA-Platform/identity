# Sprint 47 — The Language Index

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `design only` — ***nothing built, and nothing buildable***: [a `$Book` cannot currently be constructed](#blocked). The design is written so it is ready the moment it can be.
- ***The chapter name is a PROXY; Doug's to rename.***

---

## <a id="the-objective"></a>The objective, in Doug's words

> ***"It is coming out well but we need to get wikipedia identical to wikipedia.org."***

**And the four he named, plus the fifth he derived while naming them:**

| | |
|---|---|
| **1** | *"the size of the cover is too small"* |
| **2** | ***"the absence of the attached beautiful language componenet"*** — *and the toggle it hangs from* |
| **3** | *"we need a locale index for all the links attached to this one... we need a wiki index for all those wikimedia type links. Just imagine that it is one of the indices — it can be the main one"* |
| **4** | *"there is a reference to a book about getting wikipedia in this language — make an encyclopedias folder in this one, because this book is going to catalogue that one"* |
| **5** | ***"we probably want a Footer in writing for the bottom one, and it teaches us that an index doesn't seem to be a chapter that we can assume is at the end"*** |

## <a id="the-literature"></a>What was read

**The demo end to end** — `.encyclopedia/.cover.tsx`, `.book.tsx`, `.chapter.tsx`, `1-the-languages.tsx`, `.public/main.tsx` — **and the framework it stands on**: [`$Index`](../../package/src/book/Index.tsx), [`$Book`](../../package/src/book/Book.tsx), [`$ColumnsFormat`](../../package/src/encyclopedia/ColumnsFormat.tsx), [`$Writing.searchForOne`](../../package/src/writing/Writing.tsx).

***And wikipedia.org itself, pulled and read*** — 120 KB of the real page, 2026-09-07. **Every measurement below is off that file, not off a memory of it.**

## <a id="the-finding"></a>THE FINDING — the language list IS an index, and Wikipedia says so in its own markup

***The real language selector is five bands, and each band is a HEADING followed by a LIST OF REFERENCES.***

```html
<h2 class="bookshelf-container"><span class="bookshelf"><span class="text">
    <bdi dir="ltr">1,000,000+</bdi> <span>articles</span>
</span></span></h2>
<div class="langlist langlist-large hlist"><ul>
    <li><a href="//ar.wikipedia.org/" lang="ar" title="Al-ʿArabīyah"><bdi dir="rtl">…</bdi></a></li>
    …
</ul></div>
```

**A heading and the writing beneath it is a SECTION.** *Five bands are five sections. A chapter of sections whose parts are all references, set in columns, is exactly what [`$Index`](../../package/src/book/Index.tsx) is — and `$Index` already wears [`$ColumnsFormat`](../../package/src/encyclopedia/ColumnsFormat.tsx) at three columns, which is what `langlist` is.*

> ***AND WIKIPEDIA'S OWN CLASS FOR A BAND IS `bookshelf`.*** **Their markup reaches for the library metaphor at precisely the place we would call an index band.** *That is not decoration on our part — it is the strongest evidence in this branch that [the public library](../the-coding-style/03-the-coding-style.md#the-anchors) is describing something real about how encyclopedias are already organised.*

**Counted from the file:**

| band | languages |
|---|---|
| 1,000,000+ articles | **19** |
| 100,000+ articles | **58** |
| 10,000+ articles | **106** |
| 1,000+ articles | **138** |
| 100+ articles | **23** |
| | ***344*** |

## <a id="not-absent"></a>The language component is NOT absent — it is hidden by one line

***This corrects the premise of ask 2.*** **[`.book.tsx:69`](../../package/.wiki/.encyclopedia/.book.tsx) reads `@select('article:first-of-type p') prose_display = 'none'`** — *which hides **every paragraph** in the first article, and the first article is the chapter holding the five bands.*

**They are written, they draw, and each is already a `SubjectLink` pointing at `meta.wikimedia.org/wiki/List_of_Wikipedias`:**

```tsx
<SubjectLink>[1,000,000+ articles](…/List_of_Wikipedias)</SubjectLink>   … and four more
```

> ***So the reference to the book Doug wants to build ALREADY EXISTS, five times over.*** **Ask 4 is not "add a link to a new book" — it is "make the five links that are already there resolve inward instead of leaving the site."**

## <a id="the-cover"></a>The cover — the ring is already right and the wordmark is not

*Measured off the real stylesheet against the demo's own Formats.*

| | wikipedia.org | the demo | |
|---|---|---|---|
| the ring container | `.central-featured` **54.6rem × 32.5rem** | `$RingFormat` **39em × 23.21em** *(= 546 × 325 px at the portal's 14px)* | ***identical*** |
| the globe | `.central-featured-logo` absolute, `top: 158px` | `backgroundSize: 14.29em`, `center 4.36em` | *near* |
| ***the wordmark*** | `.central-textlogo` ***width 270px***, Linux Libertine, `font-size: 3rem`, `margin: 4rem auto .5rem` | ***`<Logo width="176">`*** | ***THE GAP*** |
| the slogan | `.localized-slogan` **1.5rem serif** | `slogan_fontSize: 1.07em`, `fontFamily: theme.display` | *identical at 14px* |

> ***So "the cover is too small" is ONE NUMBER: 176 against 270***, and it is a prop on the demo's `$Logo`, not a framework change. *The ring nobody suspected is already exact.*

## <a id="the-toggle"></a>The toggle is pure CSS — there is no animation to write

***The real control needs no JavaScript beyond one class.***

| | |
|---|---|
| **the container** | `.lang-list-container` is `max-height: 0; overflow: hidden`, and an ancestor `.lang-list-active` flips it to `max-height: 10000px` with a transition |
| **the button** | carries `aria-expanded` and `aria-controls`, and is `.lang-list-button` |
| ***the trick that looks impossible*** | ***`.lang-list-button` has `outline: 1.6rem solid var(--background-color-base)`*** sitting over a separate `.lang-list-border` div. **The outline paints the page's own background around the pill, punching the gap in the rule behind it** — *which is why the line appears to stop on either side* |

***So the whole control is one `$`-prefixed reactive field driving one class name, and CSS does the rest.*** **The pattern already stands in the same file:** [`$Search`](../../package/.wiki/.chapter.tsx) holds `$language` and writes it from an `onChange`. *A toggle is that, smaller.*

## <a id="consequences"></a>THREE FRAMEWORK CONSEQUENCES — and Doug named one of them

### <a id="c1"></a>C1 · A book cannot hold two indices today

**[`searchForOne`](../../package/src/writing/Writing.tsx) throws — `writing holds one of a kind, and this one holds ${n}` — and [`$Book`'s bond](../../package/src/book/Book.tsx) reaches for its index through it.** ***So a locale index beside a wiki index fails at construction***, before anything draws.

> ***THE FIX IS ONE LINE AND NO MEMBER:*** **`$Book.index` answers the FIRST index rather than demanding the only one** — `searchFor($TypeOfIndex)[0] ?? placed(…)`. *That is what Doug's "it can be the main one" means in code: **the main index is the first one written**, and the rest are ordinary chapters of the book.* **`searchForOne` keeps its meaning for the things that genuinely must be unique — a cover, a synopsis, a table of contents.**

### <a id="c2"></a>C2 · An index is not at the end, and Doug said so first

> ***Doug:*** **"it teaches us that an index doesn't seem to be a chapter that we can assume is at the end, so let's just assume one is there for now"**

**[`BookSpecification.$endsWithIndex`](../../package/src/book/Book.tsx) demands the LAST composed part BE the index.** *On wikipedia.org the last thing on the page is the footer, and the language index sits in the middle.* ***The rule becomes "a book carries an index" — a waiver of the position half, keeping the presence half, which is exactly what he asked for.***

### <a id="c3"></a>C3 · THE BOTTOM OF THE PAGE IS SPOKEN FOR BY THE INDEX — and this is the one that unblocks the others

**There is a [`$FooterFormat`](../../package/src/encyclopedia/FooterFormat.tsx) — a REGION — and no `$Footer` KIND.** *[`$Book.view()`](../../package/src/book/Book.tsx) draws `<Footer><Closing /></Footer>`, and `_closing` is **the reading of the index**.*

> ***So today the footer region can only ever contain the index.*** **Wikipedia's real footer is not an index — it is the Wikimedia sidebar, the app badges, the sister projects and the licence.** *And [C1](#c1) and [C2](#c2) both fall out of the same confusion: the index was made to carry the bottom of the page because nothing else could.*

***PROPOSED — `$Footer`, a kind of chapter, in `writing/`:*** **the book's closing reading becomes its FOOTER rather than its index**, and the index goes wherever it is written, which is what [C2](#c2) frees it to do.

| | |
|---|---|
| **the kind** | `$Footer` over `$Composition`, `$TypeOfFooter extends $TypeOfChapter`, a specification of its own |
| **the bond** | ***folds its type BEFORE super***, per the shape [session inexplicable-phenomena-7e](#blocked) has just landed: `super.$Composition($check(block, $Block).concat($check($TypeOfFooter, '!')))` — **`addType` after `super` is gone from all 27 files and must not come back** |
| **`$Book`** | `_closing` reads the footer; `index` is placed but no longer pinned last |
| **the rule** | *a book carries a footer* — **or it does not, and the region is simply empty**, which is Doug's "let's just assume one is there for now" read the other way and is his to settle |

## <a id="the-books"></a>The two books, and what catalogues what

> ***Doug:*** **"make an encyclopedias folder in this one, because this book is going to catalogue that one, and we going to make that page. We'll make use of .article, though I hope there isn't much in there"**

***There is not much in there: `.article` is 214 lines across five chapters*** — **measured**.

| | |
|---|---|
| **`.wiki/.encyclopedia/`** | the portal — *stays as it is, plus the cover fix and the unhidden language index* |
| ***`.wiki/.encyclopedias/`*** | ***the List of Wikipedias*** — **the book the five `SubjectLink`s already point at.** *Its cover is the title, its chapters are the bands, and the encyclopedia CATALOGUES it* |
| **`.wiki/.article/`** | the Manual of Style — *untouched* |

**And the two indices Doug named map cleanly:**

| | what it holds | where it stands |
|---|---|---|
| ***the locale index*** | the 344 language links, in five banded sections | *the portal's cover region, unhidden* |
| ***the wiki index*** | the twelve sister projects and the licence links | ***the footer*** — *which is [C3](#c3), and why it needs `$Footer` first* |

## <a id="blocked"></a>What blocks all of it

***A `$Book` CANNOT CURRENTLY BE CONSTRUCTED.*** **Reported by session inexplicable-phenomena-7e, 2026-09-07, measured:** *Doug had `this.specify()` put as the last line of `$Writing`'s bond; `$Writing`'s bond is the **innermost**, so it completes FIRST — before the block's children have been bonded into writings.* **A `<Cover>` therefore fails its own specification at its own bond**, verbatim: *"a piece of writing says something, and this one says nothing at all."* **And `$Book` is worse: its bond fails, so `cover`, `synopsis`, `table` and `index` are never assigned, `view()` reads them undefined, and it loops until the heap is gone.**

> ***The shape of the fault, named:*** **putting `specify()` in the innermost bond asks a thing to prove itself before it has been given what it is made of.** *That is the same fault a bond-time create already cost this branch once — [`$TypeOfDocument`'s move to `specifically`](../the-type-system/02-the-type-and-the-instance.md#specifically-two-verbs) happened because a bond-time create "broke twenty-nine carried-type fixtures at once".* ***The invariant, wherever Doug puts it: `specify()` must run when the children ARE writings, and only the outermost bond or a later phase knows that.***

***AND THE SHAPE TO BUILD AGAINST HAS CHANGED UNDER THIS DESIGN.*** *The interface is now PROPERTIES rather than methods — `kind` (was `type()`), `type` (was `types()`), and `book`, `theme`, `meaning`, `annotations` as getters; `$Letter.kind` became `sort`.* **Two things this design depends on were checked and are UNCHANGED: `searchForOne`'s arity and throw, and `$Book.index`.** *So [C1](#c1) stands exactly as written.*


### <a id="u1-closed"></a>U1 IS CLOSED AND THE ANSWER IS NEGATIVE — ***every placement in a bond fails, measured***

***Doug ruled placement (a) — each kind calls `specify()` as the last line of its OWN bond — and session inexplicable-phenomena-7e built it: removed from `$Writing`, added to 38 bonds, `tsc` 0.*** **It does not work.**

| where it ran | the result |
|---|---|
| `specify()` at the end of **`$Writing`'s** bond — the innermost | ***heap death*** |
| `specify()` at the end of **each kind's own** bond — the outermost | ***heap death*** |
| `specify()` **nowhere** | ***`book.test.tsx` runs, 14 passed*** |

***And removing it from `$Book` ALONE still dies*** — **so it is not `$Book`, it is every kind.**

> ***THE REASON, and it holds for the outermost bond exactly as it does for the innermost:*** **a writing's children do not become writings until they RENDER.** *So at every bond in the chain, `searchFor` finds nothing and every structural rule fails on a writing that is plainly fine.* ***Putting `specify()` in any bond asks a thing to prove itself before it has been given what it is made of.***

***THE SEATS THAT REMAIN, and both are Doug's:*** **a phase hook that runs after mount**, or **the compiler — which is [P19](../the-type-system/05-what-we-believe.md)'s original position** and where the design put it before any of this.

*And the loop the failures produced is a SEPARATE framework defect, recorded as [Solutions 53](../solutions/53-the-bond-that-failed-quietly-and-drew-forever.md): a swallowed bond throw leaves members undefined, `$(undefined)` draws a fresh Fragment every call, and a dependency-array-less effect diffs it against its cache forever.* ***Fix where it runs and this loop stops appearing; leave that defect and the next failing bond finds it again.***

## <a id="lanes"></a>Lanes

***`.wiki` and all four `src` folders belong to session inexplicable-phenomena-7e until the suite is green.*** **This chapter is written in `.lib`, which collides with nothing.** *The agreed split: they land the refactor and where `specify()` runs, then hand back `src/writing` and `src/book` for [C1](#c1) and [C3](#c3) while keeping `.wiki`.*

## <a id="where-things-stand"></a>Where things stand

***Sprint 47 is closed. What it planned, what it learned, and where each thing went.***

### The register — every unit, and where it landed

| | |
|---|---|
| **[C1](#c1) a book cannot hold two indices** | *open. The index now draws where it was written rather than being assumed last, which was the half that blocked the others* |
| **[C2](#c2) an index is not at the end** | ***DONE.*** `$endsWithIndex` became `$endsWithFooter` in [`Book.tsx`](../../package/src/book/Book.tsx) |
| **[C3](#c3) the bottom of the page is spoken for** | ***DONE.*** `$Footer` written, exported, placed after the index, and `_closing` holds it. `pd-footer` draws |
| **[U1](#u1-closed) where `specify()` runs** | ***ANSWERED, and it was never a bond at all.*** `$Writing.valid()` — a hook chemistry already calls right after the whole bond chain returns. 39 scattered calls deleted from 32 files. It is what took `book.test.tsx` from a 277-second heap death to reporting in under two seconds |
| **the cover measurements, the toggle, the language list** | *handed to session 99, who matched wikipedia.org across thirteen widths* |

### What it cost, and the chapter that carries it

***The `specify()` move shipped DEAD.*** **The same pass that wrote the hook swept the line the hook was made of** — and the suite improved, because a rule that does not run cannot fail. *Recorded as [Solutions 54](../solutions/54-the-rule-that-stopped-running-and-the-suite-improved.md), whose sibling is [the sentences that said the opposite](../solutions/22-the-sentences-that-said-the-opposite.md).* **Restoring it turned 61 passed / 2 failed into 58 passed / 5 failed and a drawing demo into three exception panels — none of it new.**

*Also carried: [Solutions 53](../solutions/53-the-bond-that-failed-quietly-and-drew-forever.md), the swallowed bond throw, whose fix chemistry built as U1 of its own Sprint 48.*

### What was true at close, measured

| | |
|---|---|
| ***`.public`*** | **`tsc` 0 · build clean · 60 passed / 3 failed of 63** |
| **chemistry** | *869 passed across 71 files* |
| ***the three still red*** | *a book's table of contents builds no anchors · a book’s first region draws an exception rather than its cover · a mention’s `href` is undefined, with `$Reference.path()` as the lead* |
| **the tree** | *nothing committed at close; 7e’s session ended holding 46 uncommitted files* |

### The design the sprint ended on, which the next one plans

***A composition handed something beneath the level it needs GENERATES the missing level from what it holds, without consuming it.*** *A section given a paragraph answers a heading elided with `...` and the whole paragraph beneath it.* **Start low when you want flexibility — the levels above are generated. Go up the hierarchy when you need to be specific.** *Doug, this sprint. It is the next sprint’s subject and the principle to write down when the design is nailed down.*

### Spent sections

*The eight-phase plan, the toggle mechanism and the cover measurements stood here and are gone: the first ran, and the other two were handed to session 99 and finished there. **The finding, the three consequences and the closed-negative measurement above them are kept, because the record cites them.***
