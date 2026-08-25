# Names

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

*(**~250 member names were extracted and judged**, one by one, against the semantics of libraries and books. **31 do not fit and 6 collide.** Everything else does — and that ratio is the reason to strike the exceptions rather than tolerate them: a near-consistent vocabulary is damaged more by one wrong word than an inconsistent one is by twenty.)*

## <a id="the-standard"></a>The standard — the names that FIT, so the bar is visible

*Doug asked for evidence of how we write when we are at our best. **It is most of the package**, and it is worth reading before the faults.*

- **The printing trade, used exactly:** `copy` · `set` · `gathered` · `leading` · `measure` · `rhythm` · `face` · `ink` · `ground` · `rule` · `faint` · `step` · `typeset` · `stops` · `Sheet` · `Leaf` · `Folio` · `Running` · `Turning` · `TitlePage` · `Byline`
- **The library, used exactly:** `cover` · `synopsis` · `canonical` · `chapters` · `entries` · `catalogue` · `card` · `file` *(as a verb)* · `filings` · `holds` · `accounts` · `standsFor` · `follow` · `read` · `address` · `parenthetical` · `speaks` · `speaker`
- **The composition, used exactly:** `parts` · `divide` · `compose` · `at` · `single` · `where`
- **The compiler's own best:** `Complaint` · `says` · `Verdict` · `stands` · `carried` · `supplied` · `declared` · `sweep`

***`gathered` is the one to show somebody first.*** **A gathering is folded sheets sewn into a book, and [`$Writing.gathered()`](../../package/src/writing/Writing.tsx) gathers a writing's parts before they are set.** *A name that teaches the domain to whoever reads it — which is what every name in a framework built on a formalism is for.*

---

# The collisions — one word, two meanings

***A collision is worse than a misfit, because a misfit merely fails to teach and a collision actively teaches the wrong thing.*** **All six are one rename each.**

## <a id="n1"></a>N1 — `mark`

> **TREAT** · *step 9* — one of the two moves. **The paragraph's is the one to change** — a theme's `mark` is [an incumbent from three hand-made themes](../projection/18-the-theme.md#the-evidence-already-in-this-repository-which-is-why-the-shape-is-not-a-proposal).

| | |
|---|---|
| [`$Paragraph.mark`](../../package/src/writing/Paragraph.tsx) | the **notation** that produced it — `''` · `'>'` · `'$$'` · `'-'` |
| [`$Theme.mark`](../../package/src/writing/Theme.tsx) | the **accent colour** of what can be followed |

***They appear within four lines of each other*** in `$Paragraph.set()`, one reached as `this.mark` and one as `theme.mark`. **Both are good book words alone. Together they are a trap.**

## <a id="n2"></a>N2 — `$for`

> ***ANSWERED BY MEASUREMENT 2026-08-23.*** *Doug: **"What's stopping us from using the standard reference interface? Maybe there's nothing that represents a path on it because we don't know that the reference will even need a path. Is `$for` filling in that role? DOES IT ACTUALLY NEED TO BE A PROP?"***
>
> **Nothing is stopping us — [`$Reference$`](../../package/src/reference/Reference.tsx) asks for `read()` and `then()` and for NO FIELD AT ALL.** *Every one of these already satisfies it. The collision is not in the interface; it is that three classes named their backing field the same, and [that is the discipline S20 states](04-semantics.md#s20): **the interface is what a class owes, the field is how it pays, and the payments differ.***
>
> ***And "does it need to be a prop" splits three ways, measured against the corpus:***
>
> | | how it is set | prop? |
> |---|---|---|
> | `$Denote` · `$Footnote` · `$Citation` · `$Cite` | ***a human writes `<Footnote for="arrow">`*** | **yes** — and it is a **key**, a string |
> | `$Author` · `$Subject` · `$Canonical` · `$Synopsis` | ***a human writes `<Canonical for={physicsTheStandardModel}>`, and [the compiler inserts it](../../build/stages/emit.ts) too*** | **yes** — and it is a **card** |
> | [`$Bookmark`](../../package/src/book/Bookmark.tsx) | ***`left.$for = where`, in code, never JSX*** | ***NO*** — nothing authors a bookmark |
>
> ***So one of the three does not need to be a prop at all***, and the two that do hold different kinds — **which is the whole of the collision.** *`$Highlight`'s `$first`/`$last` are a fourth thing again: character offsets, typed `number \| string` because JSX delivers strings.*
>
> ***RULED 2026-08-23, with a standing rule attached.*** *Doug: **"Well `<Author>{…}</Author>` — this is what we want author to be, so I don't think we need `for` there. I think you understand the problem. I want you to clean it up. DON'T MAKE ANYTHING A PROP UNLESS IT NEEDS TO BE. Your first recommendation sounds about right except for how author and subject are supposed to work."***
>
> | | becomes | prop? |
> |---|---|---|
> | `$Denote` · `$Footnote` · `$Citation` · `$Cite` | **`$key`** | **yes** — a person writes `<Footnote for="arrow">` today |
> | `$Bookmark` | **`place`** | ***no*** — nothing authors a bookmark |
> | `$Highlight` | **`$from` / `$to`** | yes |
> | ***`$Author` · `$Subject` · `$Canonical` · `$Synopsis`*** | ***the card*** | ***— and this is the open piece*** |
>
> ***The annotations are the exception and Doug named why:*** **`<Author>The Team</Author>` is what an author IS — the name is the content, and a prop carrying a card is the compiler reaching into an authored element.** *Today [`emit.ts`](../../build/stages/emit.ts) inserts `for={theTeam}` precisely because the annotation cannot find its own card.*
>
> ***The route that removes the prop:*** **an annotation resolves its card from the catalogue, and the catalogue is what `$` answers** — *which is [the representative's own shape](../../../chemistry/.lib/composition/11-the-representative.md) and needs no new mechanism.* **[`$CardCatalogue.file(key, keyword, card)` and `find(query)`](../../package/src/reference/CardCatalogue.tsx) already exist for exactly a lookup by name**, and they are the two members [I14](05-implementation.md#i14) calls a string micro-language — ***so the two entries are one piece of work.***
>
> **Doug's words: *"I think you understand the problem. I want you to clean it up."* — taken as the brief, and [carried into the sprint as a problem](06-the-cleaning.md#actionable) rather than a rename.**

**One prop name, three types, four meanings:**

| holds | on |
|---|---|
| an `$IndexCard<$Book>` | `$Author` · `$Subject` · `$Canonical` · `$Synopsis` |
| a **`string`** — a legend key | [`$Denote`](../../package/src/document/Denote.tsx) · `$Footnote` |
| a **`$Reference$<T>`** | [`$Bookmark`](../../package/src/book/Bookmark.tsx) |

***`$for` is the framework's most-used prop and its least-specified one.*** **A consumer writing `<Denote for="euler"/>` beside `<Author for={card}/>` has nothing telling them these are unrelated.**

## <a id="n3"></a>N3 — `$first`

> **TREAT** · *step 9* — `$Highlight`'s pair is the one to change — a path's `$first` is a step, which is what the word means.

[`$Path.$first`](../../package/src/reference/Path.tsx) is a `$Reference$<M>` — the first **step** of a path. [`$Highlight.$first`](../../package/src/reference/Highlight.tsx) is `number | string` — a character **offset**. ***Both classes live in `reference/`.***

*And `$Highlight`'s pair is typed `number | string` because props arrive from JSX as strings — **the only place in the package that admits that in a type**, and it admits it without a word.*

## <a id="n4"></a>N4 — `Role`

> **TREAT** · *step 9* — the compiler's `Role` must stop meaning a kind. ***The replacement word is [owed](06-the-cleaning.md#the-words-owed)*** — `Kind` is already taken by `subject | book`, so there are two kinds at two levels and only one word.

| | |
|---|---|
| [`lib`](../../package/src/writing/Writing.tsx) | `'use' \| 'mention'` — **whether writing means what it says** |
| [the compiler](../../build/library.ts) | `'cover' \| 'synopsis' \| 'chapter'` — **what a file is** |

***The compiler's is the wrong one twice over:*** **it is a KIND**, and [On Kinds](../../../../.claude/library/bookkeeping/15-on-kinds.md) is the book that owns the word — *and the compiler already has a type called `Kind` for `'subject' | 'book'`, so there are **two kind-words for two kinds and neither is `kind`**.*

## <a id="n5"></a>N5 — `set`

> **LEAVE** · *dissolves* — `set` as the drawing verb is Doug's own and correct; the other two arms are the language's setter and [`set0`](#n8), **and striking `set0` dissolves the collision.**

**To set type — the drawing verb, [Doug's own replacement for `emit`](../projection/19-the-binding.md#the-word-emit-is-struck).** *And also a JavaScript **setter**, and also the stem of [`set0`](#n8).* **Three uses in one package, one of which is the language's.**

## <a id="n6"></a>N6 — `open`

> **TREAT** · *step 9* — a local function in `refer.ts`. One line.

[`$TableOfContents.open`](../../package/src/book/TableOfContents.tsx) is **the chapter a contents has open**. [`refer.ts`'s `open()`](../../build/stages/refer.ts) **constructs a ts-morph project**. *Different programs, and the same repository.*

---

# The misfits — thirty-one, by the kind of fault

***Every row carries its disposition***, and the four marked **strike** are struck on my judgement alone — [flagged for correction](06-the-cleaning.md#rulings).

## Not a book word at all

| | name | where | why | disposition |
|---|---|---|---|---|
| <a id="n7"></a>**N7** | `$Composible$` | [`writing/Composition.tsx`](../../package/src/writing/Composition.tsx) | not a book word, ***and not a spelling*** — the word is *composable* | **TREAT** · step 9 · *rename regardless of [S1](04-semantics.md#s1); it should not carry a misspelling while it waits to dissolve* |
| <a id="n8"></a>**N8** | `set0` | [`$Paragraph`](../../package/src/writing/Paragraph.tsx) | means *is display mathematics*, and **is not a word** | **TREAT** · step 9 · *the only name a reader cannot guess — and striking it [dissolves N5](#n5)* |
| <a id="n9"></a>**N9** | `declaration` | [`$Document`](../../package/src/document/Document.tsx) | not a book word, *and [the mechanism under it is worse](05-implementation.md#i12)* | **MONITOR** · *with [I12](05-implementation.md#i12) — renaming a member whose mechanism is under review is churn* |
| <a id="n10"></a>**N10** | `properties` | [`$IndexCard`](../../package/src/reference/IndexCard.tsx) | a card's fields are not *properties* | **TREAT** · step 9 · ***word [owed](06-the-cleaning.md#the-words-owed)*** — `entries` is taken by `$Book` |
| <a id="n11"></a>**N11** | `$in` | [`$Chapter`](../../package/src/book/Chapter.tsx) | **a preposition as a field name** | **TREAT** · step 9 · *one field, one file* |
| <a id="n12"></a>**N12** | `url` | [`$Link`](../../package/src/reference/Link.tsx) | a reference's **target**; `url` is the web's word | **TREAT** · step 9 |
| <a id="n13"></a>**N13** | `row` · `Row` | [`$TableOfContents`](../../package/src/book/TableOfContents.tsx) | a table's word | **TREAT** · step 4 · ***not a rename, a deletion*** — [B1 already ruled it](../projection/19-the-binding.md#the-board): a reference draws its own row |
| <a id="n14"></a>**N14** | `contentish` | [`walk.ts`](../../build/stages/walk.ts) | *-ish* is not precision | **TREAT** · step 9 · *free* |
| <a id="n15"></a>**N15** | `$Denote` | [`document/`](../../package/src/document/Denote.tsx) | a logic word for **a reference mark** | ***REFER*** · [the words owed](06-the-cleaning.md#the-words-owed) · *raised, not taken* |
| <a id="n16"></a>**N16** | `$role` = `use` \| `mention` | [`$Writing`](../../package/src/writing/Writing.tsx) | a stage word for a semantic fact | **LEAVE** · ***[the settled account uses the word](../the-semantics-of-books/15-the-levels-of-writing.md#used-and-mentioned)*** — the derivation's own vocabulary outranks the objection |

## An abbreviation among full words

| | name | why | disposition |
|---|---|---|---|
| <a id="n17"></a>**N17** | `ref`, on **nine classes** | [the member audit ruled the folder `ref/` → `reference/` — *"no abbreviations among full words"*](../projection/04-the-member-audit.md). **The folder moved and the member did not.** | **TREAT** · step 9 |
| <a id="n18"></a>**N18** | `$i` on [`$Location`](../../package/src/reference/Location.tsx) | **the only single letter in 2,911 lines**, on the one thing in the model whose whole meaning is a number | **TREAT** · step 9 |

## A predicate named for something other than what it tests

> ***RULED 2026-08-23, and it is not a rename.*** *Doug: **"I don't like `uniform` or `matter`. I think those are reaching for something bad. They should be PROTECTED members if anything, and a boolean should definitely express what true means. But are you sure those ideas shouldn't be INLINE IN SOME OTHER THING? It feels like 'everything inside parenthetical' is something that can be COMPUTED LOCALLY IN THE VIEW rather than being a function on the object. We don't want to pollute the interface and certainly don't want public members polluting it."***
>
> ***So the fault is that they are on the surface at all.*** **[`$Paragraph.matter()`](../../package/src/writing/Paragraph.tsx) has exactly one caller — the first line of its own `set()` — and [`$Writing.uniform()`](../../package/src/writing/Writing.tsx) has exactly one — its own `gathered()`.** *Neither is asked by anything else, and both are public.*
>
> **The rule that follows and generalises past these two:** ***a predicate with one caller belongs inside that caller.*** **Where it must be a member because a subclass narrows it, it is `protected`** — and a boolean says what **true** means, which `matter()` gets backwards by returning `true` to mean *draw nothing*.
>
> *`$Theme.draws`, `$Document.summarised` and the compiler's `asked` are asked from more than one place and stay members; they are renames.*

*Five, and together they are the difference between code a technical reader trusts on sight and code they have to open.*

| | name | reads as | actually asks |
|---|---|---|---|
| <a id="n19"></a>**N19** | `$Writing.uniform()` | a physics word | **can my parts differ in kind?** |
| <a id="n20"></a>**N20** | `$Paragraph.matter()` | do I have matter | **am I nothing but parenthetical objects?** — *and `true` means **draw nothing***, so name and polarity both mislead |
| <a id="n21"></a>**N21** | `$Theme.draws(part)` | the theme draws | **should this part be drawn?** |
| <a id="n22"></a>**N22** | `$Document.summarised(s)` | is this section a summary | **does this section CONTAIN one?** |
| <a id="n23"></a>**N23** | `validate.ts` · `asked(part)` | was it asked | **is it valid?** |

## A tense or a participle standing for a noun

*All four **TREAT**; three of them carry a [word owed](06-the-cleaning.md#the-words-owed).*

| | name | where | what it is | disposition |
|---|---|---|---|---|
| <a id="n24"></a>**N24** | `Resolved` | [`library.ts`](../../build/library.ts) | the library after resolving | ***ALTERNATE DESIGN, not a rename*** — see below |
| <a id="n25"></a>**N25** | `Named` | [`catalogue.ts`](../../build/stages/catalogue.ts) | ***its own comment calls these "cards"*** | **TREAT** · step 9 · *the answer is half-written in its own comment* |
| <a id="n26"></a>**N26** | `Source` | [`library.ts`](../../build/library.ts) | where an answer came from | ***DELETE IT*** — see below |
| <a id="n27"></a>**N27** | `Laid` · `Composed` · `Lay` | [`$Theme`](../../package/src/writing/Theme.tsx) | ***structural stand-ins invented to dodge a circular import***, and the theme's whole public type surface | **TREAT** · ***step 3*** · *taken with the theme, because step 3 opens `$Theme` anyway* |

## A general-OO convention where a book word exists

| | name | why | disposition |
|---|---|---|---|
| <a id="n28"></a>**N28** | `selectMany`, on 8 classes | C#'s own method name, verbatim | ***CLOSED 2026-08-23 — already ruled.*** [The member audit's finding 11](../projection/04-the-member-audit.md): *"the composition is list-like — `$Composition` carries the list monad's honest surface… **C# semantics**, implemented as one-liners at every grain."* **The vocabulary was chosen, not drifted into.** |
| <a id="n29"></a>**N29** | `$Sentence.wordFor` · `$Word.letterFor` | `makeXFromY` with the verb dropped — ***the only naming convention in the package borrowed from general OO*** | **TREAT** · step 9 · **[`$Section.compose`](../../package/src/writing/Section.tsx) already does this job one grade up under a book word** |
| <a id="n30"></a>**N30** | `$IndexCard.written` / `printed` | **two good book words that do not distinguish themselves** — one takes a name, one takes a value | **TREAT** · step 9 |

## A ruling that stopped at a folder boundary

| | name | why | disposition |
|---|---|---|---|
| <a id="n31"></a>**N31** | `emit`, in [`build/emit.ts`](../../build/stages/emit.ts) | *Doug: **"emit is not a book word or a react word."*** **Replaced across the framework and left standing in the compiler** — file, function, and the `Emitted` type | **TREAT** · step 9 · ***a vocabulary ruling that stopped at a folder boundary is not a ruling*** |
| <a id="n32"></a>**N32** | `tableOfContents` beside `contents`, on [`$Book`](../../package/src/book/Book.tsx) | **a rename that stalled halfway** — both public, both used, and [G1 says the class name is wrong too](../projection/19-the-binding.md#the-board) | **TREAT** · ***step 7*** · *taken with [I9](05-implementation.md#i9), the same fault one member apart* |

## The framework speaks English out loud, twice

| | name | why | disposition |
|---|---|---|---|
| <a id="n33"></a>**N33** | `'Table of Contents'` · `'Open ' + named` | ***the only two display strings in 2,911 lines***, in [`TableOfContents.tsx:61`](../../package/src/book/TableOfContents.tsx) and [`Synopsis.tsx:38`](../../package/src/book/Synopsis.tsx), **both in classes rewritten in the last two sprints** | **TREAT** · step 8 · *one line each, and they are the framework speaking where a book should* |

---

# What the register says

***Thirty-one misfits and six collisions out of ~250 is a codebase that has been named on purpose***, and every one of the thirty-one is a **local** fix.

***And the pattern in the exceptions is the finding, not the count.*** **Almost every misfit sits at a boundary** — the theme's structural types, the compiler's seam types, the reflection inside a card, the factory methods inside a parse.

> **Where the code is talking about books it uses book words. Where it is talking about ITSELF, it reaches for the nearest programming word.**

***That is one habit, not thirty-one mistakes***, and it is the habit this chapter exists to change.

## The dispositions, counted

| | |
|---|---|
| **TREAT** | **28** — 25 at step 9, plus [N13](#n13) at 4, [N27](#n27) at 3, [N32](#n32) at 7, [N33](#n33) at 8 |
| **MONITOR** | **2** — [N9](#n9) · [N28](#n28) |
| **LEAVE** | **2** — [N5](#n5) · [N16](#n16) |
| ***REFER*** | **1** — [N15](#n15), plus [six words owed](06-the-cleaning.md#the-words-owed) inside the TREATs |

### <a id="n24-26"></a>The compiler's three types — alternate designs, because Doug asked for designs rather than words

*Doug, 2026-08-23: **"I don't understand `Named` or `Resolved`. If it's something on reference, just make it IDEMPOTENT. No need to know if it resolved I guess. Please just LOOK FOR ALTERNATE DESIGNS. I don't like either of those. We are auditing the compiler too."***

**`Source` — traced to every use, and there is one.** *`declared | supplied | unresolved` is read in six places and **five of them are printing or counting**. The single functional use is [`emit.ts:104`](../../build/stages/emit.ts): if a link was **supplied**, write it into the emitted cover, because the author did not.*

> ***So make emitting IDEMPOTENT — write the annotation where it is absent, leave it where it is present — and nothing needs to know how the answer was arrived at.*** **`Source` is deleted**, and `unresolved` — a reference that points at nothing — becomes **a [`Complaint`](../../build/library.ts), which the compiler already has and already travels.**

**`Named` — it is a card, and the file says so.** *[`catalogue.ts`](../../build/stages/catalogue.ts)'s own header calls them cards throughout; the type is a book plus the fields a card carries.* ***With [`$$Book` replacing `$IndexCard`](04-semantics.md#s20), the compiler's type is the data for a `$$Book` — so it is named for what it makes.***

**`Resolved` — one seam instead of two.** *[`Library`](../../build/library.ts) is the seam every stage reads; `Resolved` is a second, narrower one that drops `entries` and adds `books`.* ***The alternate is that there is ONE seam and each stage enriches it*** — `walk` fills the entries, `refer` fills the references, `resolve` fills the books — **so a stage takes a `Library` and returns a `Library`, and the tense disappears because there is no second state to name.**

*All three are recorded as designs to take rather than words to give, and none is built.*
