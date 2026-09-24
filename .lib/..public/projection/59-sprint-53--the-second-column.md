# Sprint 53 — The Second Column

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **status:** `strategy` — *the instrument and the reading it gave; units are owed*
- ***The chapter name is a PROXY; Doug's to rename.***

---

## <a id="requirements"></a>Requirements — ***Doug's words, 2026-09-08***

> ***"Research polymorphism and professional strategies for implementing type hierarchies, and talk about planning out the entire hierarchy in parallel in your research and find strategies and document them in this sprint."***

**And the ruling that produced it, on where an AI-interpret button lives:**

> ***"I didn't say implement it dynamically. You add it to the quote base type and if the implementations act right, all of them get it… This framework has a flat view of composition to encourage thinking and implementing one level at a time and composing up and down levels, with potentially recursive levels. In general, elements in text don't know what they are being given so how can they look for the elements?"***

## <a id="retracted"></a>RETRACTED — ***the operation matrix measured overrides and called their absence a gap***

***Doug, the day after this chapter was written:*** *"maybe a component with even one class and a piece of markdown is the wrapper for that thing. Not every implementation needs to be complex. And it comes with a type… Many might simply just be a class that I want to be semantically distinct for the future, or a unique path of types because things get classes based on their type resolution."*

**He is right and the reading below is wrong where it counts.** *A class that declares its own type and its own rules IS implemented in this framework: **51 of 58 declare a type and 52 carry rules**, and the type is what decides position, parse and resolution while the class name is what a sheet can select. Counting method overrides measured the one axis that does not have to be filled.*

***The numbers stand; the conclusion drawn from them does not.*** **What replaces it is [the reachability reading](#reachability)**, which asks a different question — *not what a class implements, but what reaches it.*

## <a id="the-instrument"></a>The operation matrix — ***kept for its numbers, not its verdict***

***Every horizontal round of this sprint listed KINDS.*** **Not once did it list OPERATIONS**, and the two together are what a hierarchy is. The reading below is generated from `src` — every `export class $X extends $Y` that is not a type or a specification, against the methods it declares in its own body.

| | |
|---|---|
| **kinds in `src`** | ***58*** |
| ***kinds overriding NOTHING in any core column*** | ***23*** |

**And the columns are not merely sparse, they are LOPSIDED:**

| operation | kinds implementing it |
|---|---|
| ***`print`*** | ***16*** |
| `view` | 9 |
| `path` | 5 |
| `parts` | 4 |
| `format` · `reading` · `specifically` · `supplies` | *2 each* |
| ***`canonical`*** | ***1*** |

> ***WHAT SURVIVES: `print` is the only operation ever filled across the hierarchy, so there is no precedent for filling a SECOND one — which is a real gap and is what an AI-interpret button would need.***

***What does NOT survive is reading the 23 blank rows as unimplemented kinds.*** **A kind with a distinct class and a distinct type is complete**, and most of those 23 are exactly that.

## <a id="reachability"></a>THE READING THAT REPLACES IT — ***what reaches a class***

***A class earns its keep when something REACHES it, and there are five mechanical seams that can.*** **Generated from `src` against the demo sources:**

| the seam | kinds it reaches |
|---|---|
| **has its own rules** | ***52*** of 58 |
| **declares its own type** | ***51*** |
| **written by an author** | 26 in a demo · 9 inside `src` · 18 in a promise |
| **dressed by a sheet** | 25 |
| **is the base of something** | 14 |
| ***made by a type's `makes()`*** | ***5*** — *only the canonical composition levels* |
| ***swapped through DI*** | ***1*** |

> ***THE ALARMING NUMBER IS ONE.*** **`$(Kind, Other)(Scope)` — the seam by which an implementer substitutes an implementation — is used ONCE in the whole codebase.** *That is the mechanism `article/` and `encyclopedia/` exist to use, and it has a single customer.*

***Ten kinds are reached by nothing at all***, and they fall into three groups that mean different things:

| | | |
|---|---|---|
| **a reader** | `Bookmark` · `Highlight` · `PageFold` | ***correctly waiting*** — *no reader exists, and Doug's "semantically distinct for the future" is exactly this* |
| **talk pages** | `Talk` · `Comment` | ***correctly waiting*** |
| ***plain gaps*** | `Code` · `Summary` · `Catalogue` · `CatalogueCard` · `TableFormat` | **`$Code.view()` throws, in a paper that wants code listings** |

## <a id="research"></a>The research — ***two findings, and both name the failure rather than the fix***

### <a id="detienne"></a>Experts integrate objects and ACTIONS from the outset; novices list objects

***Détienne, INRIA — [Design Strategies and Knowledge in Object-Oriented Programming: Effects of Experience](https://arxiv.org/abs/cs/0612008).*** **Eight programmers, procedural background, some new to OO and some experienced.** *The finding, in the paper's own terms: for beginners "the description of objects and the description of actions are not always integrated in an early design phase", while experienced OO designers integrate them "from their initial design attempts, regardless of problem type."*

**The same paper supplies the definition of the strategy this sprint is named for:** *a solution elaborated **breadth-first** has "most methods simply named and listed before any code body was written"; **depth-first** defines a method and writes its body before defining another.*

***So the lateral implementation is a named, studied strategy — and it is a strategy about METHODS, not about classes.*** **The rounds of this sprint executed the class half and skipped the method half**, which is precisely the novice signature the study describes. *Doug found it from the outside without the paper: "that you speak in classes and not components sure scares me."*

### <a id="expression-problem"></a>The expression problem — ***which direction a framework is cheap in***

***Wadler, 1998; the standard account is [Bendersky's](https://eli.thegreenplace.net/2016/the-expression-problem-and-its-solutions/).*** **Object-orientation makes adding a new TYPE cheap and a new OPERATION expensive; the functional and [visitor](https://en.wikipedia.org/wiki/Visitor_pattern) side makes a new OPERATION cheap and a new TYPE expensive.** *Rows against columns: one axis is free and the other is paid for.*

**Doug's ruling on the AI button is the object-oriented answer** — *put it on `$Quote` and every quote inherits it* — **which is the expensive direction**, and the measured matrix is what expensive looks like: sixteen kinds had to be touched to give `print` to the hierarchy.

***What makes `.public` not simply pay that cost is that it carries TWO hierarchies.*** **The CLASS chain carries operations and the TYPE chain carries composition** — P11, *a class never extends the kind above it; hierarchy rides the types.* *That is the two-dimensional arrangement the literature reaches for ([object algebras](https://i.cs.hku.hk/~bruno/oa/) are the same move), and it is already built.* **It has never been exercised on a second column, so whether it works is unmeasured.**

## <a id="strategies"></a>Strategies for planning an entire hierarchy in parallel

| | |
|---|---|
| ***1 · the matrix IS the plan*** | **Kinds down, operations across. A horizontal round fills a COLUMN, never a row.** *A round that adds kinds without adding an operation has widened the thing that was already wide* |
| ***2 · a column is filled from the BASE first*** | **Doug's ruling: put it on the base, and "if the implementations act right, all of them get it".** *The subclasses that then need their own answer are the design report — they are where the abstraction is wrong* |
| **3 · name every method before writing a body** | *Détienne's breadth-first, literally. This is the shell-with-a-throw discipline the sprint already uses, applied to METHODS rather than FILES* |
| ***4 · the empty cell is the finding*** | **23 of 58 rows are blank and that was invisible until the matrix existed.** *An instrument that makes absence visible is worth more than another kind* |
| **5 · four surfaces at once, not one finished** | *Doug: "If you finished one, with no other example of successful implementation of different types, how do you know your framework works?" **One page is one row-set; it cannot test a column*** |
| ***6 · a level does not read its parts*** | **Doug: "elements in text don't know what they are being given so how can they look for the elements?"** *This is what killed a proposed deep reading — see [the subtraction](#deep-reading)* |

## <a id="the-33"></a>The 33% — ***what came out, and why it was semantic***

### <a id="dress"></a>The format was drawing an element it had no business writing

***Doug: "Format's shouldn't be drawn… I always thought it would be a styled chemical without a view and when they don't have one they behaved like styled components. As far as I know it was like that. Anything else is a bug."***

**He was right, and chemistry has a promise for it:** *`a dress needs no view — it is handed the element and holds what it is given`* — `<Dress>worn</Dress>` draws `<FIGURE>worn</FIGURE>`. **`$Chemical.view()` returns its children, and `styling()` stands them in the selector — or restyles what it was handed IN PLACE where the tags agree, adding nothing to the tree.**

`$Format` had switched that off and rebuilt it by hand:

| deleted | what it was |
|---|---|
| `view()` returning `null` | *the writing's view un-inherited, then nothing put back* |
| `@look('worn') $view()` → `<div>{this.$content}</div>` | **an element the `selector` was going to write anyway** |
| `$content` | *a prop standing in for the children a chemical already carries* |
| `look="worn"` at the wearing site | *a second look to reach the hand-built view* |
| the same pair in `$Theme` → `<main>` | ***`$Theme` already declares `selector = styled.main`*** |

***What replaced it is one line and one comment:*** `override view() { return this[children]; }` — **the override exists only to un-inherit `$Writing.view()`, which draws a block, and a format has no block to draw.** *`children` is on chemistry's public surface and its own comment says why it is a symbol: "so that a view reaches for its BLOCK and never for the raw children it happens to have been handed" — which is the line `$Format` needed to cross and no other writing does.*

**Doug's shape, in his words:** *"you have format as an annotation so it has access to book — and also a styled component."* ***One class, two inheritances, and no wrapper invented to bridge them.***

*And the census says the base was the only holdout: **all nine formats in the demos already had no view.** They were written as styled chemicals; it was `$Format` that was not.*

### <a id="deep-reading"></a>A deep reading, proposed and refused

***I proposed `reflection.throughout(book, $TypeOfQuote)`*** — every writing of a kind a holder holds, however deeply — **because `$Writing.searchFor` reads only `this._block.$elements`, one level.** *Doug refused it on the framework's own grounds: composition is flat, a level is implemented and composed one at a time, and **a piece of writing does not know what it was given, so it cannot go looking.*** **The button goes on the base type. It was never a query.**

*It is recorded here because the reflex it came from — reaching for a search when the answer is a column — is the same reflex that produced a matrix with one column in it.*

## <a id="landed"></a>What landed

- [x] ***`$Format` is a styled chemical with no view*** — *the worn look, `$content` and the hand-built `<div>` deleted; [Solutions 57](../solutions/57-the-default-a-class-switched-off-and-rebuilt.md)*
- [x] ***every `@look` removed*** — **one remains, `@look('back')` on `$Writing`, kept as a stub on Doug's ruling**
- [x] ***the kind × operation matrix*** — *and its verdict [retracted](#retracted) the next day*
- [x] ***the reachability reading*** — *what reaches a class: rules 52, own type 51, written 26, dressed 25, base-of 14, made-by-a-type 5, DI-swapped 1*
- [x] ***THE AGREEMENT*** — **twenty of fifty-nine classes did not extend what their interface and type both named; the instrument now reads 0 of 59.** *Two of Doug's rulings turned out to be already written in the types*
- [x] ***the semantic list*** — *`$Item` is a type of sentence, the parse makes the items, `$List` writes one `<ul>`; the regex splitter in `print()` is gone*
- [x] ***`parts()` is incremental*** — *its only recursion removed, so a nested writing survives and a parse can be asked for anywhere*
- [x] ***a writing carried, not re-made*** — [Solutions 59](../solutions/59-the-writing-a-parse-made-twice.md); *twelve links on `/article` had never once been links*
- [x] ***the demand made twice*** — [Solutions 60](../solutions/60-the-demand-that-was-made-twice.md); **the suite reached 107 of 107, the first fully green run**
- [x] ***the paper*** — *TeX unescaped ([Solutions 58](../solutions/58-the-tex-that-javascript-ate.md)), katex's own sheet loaded so every formula stops drawing twice, citations drawn as `[n]`, the LaTeX look written*
- [x] ***the law corrected*** — [Solutions 40 amended](../solutions/40-the-render-that-made-things.md#amended): **a view MAY make; it may not write, and may not draw what it made this render.** Doug: *"Let instances be created in views. We should be scared of statefulness"*

## <a id="closed"></a>The sprint closes — ***and the method it was named for is the thing it disproved***

***Doug, at the end:*** *"This was long! Horizontal coding… doesn't work that well here. You have trouble with polymorphism."*

**Both halves are supported by this chapter's own record, and it is worth being exact about how.**

| what horizontal coding produced | what actually moved the work |
|---|---|
| *a matrix of kinds × operations, whose verdict was [retracted](#retracted) within a day* | ***a reading of what three declarations said, and making them agree*** — twenty classes |
| *a proposed deep search, refused — the answer was a column on a base class* | **Doug's own ruling: put it on the type and the implementations inherit it** |
| *`writes()`, a new framework member for a seam the bond constructor already was* | ***deleting it***, and finding the bond had always worked |
| *`dress`, `worn`, `wearing` — clothing vocabulary in a framework called chemistry* | **nothing; it is still owed a rename** |

***The pattern is one thing.*** **Every real gain in this sprint came from READING what the codebase already declared and making the rest of it agree** — the types already said a cover is a chapter, that a title is to a chapter as a heading is to a section, that a citation belongs in the prose. *Every loss came from laying out something new across a surface and calling the layout an implementation.*

**And the polymorphism half is the same finding said the other way.** *Three times this sprint a subclass's override failed and I did not see why: `$Synopsis` overriding a rule its parent's type re-imposed; `$Quote` waiving a heading its type supplied anyway; `$Format` overriding `view()` to nothing and then rebuilding what it had switched off.* ***In each case the framework had two places to say one thing and I answered one of them.*** **That is not a horizontal-implementation problem. It is not knowing where a hierarchy states its demands.**

***What the next sprint should do differently, in one line:*** **stop laying out and start reading — and go slowly, one React element at a time, which is what Doug asked for at the close.**

## <a id="owed"></a>Still owed

| | |
|---|---|
| ***the paper*** | *footnotes draw nothing; `$ReferenceCard` is an annotation so the bibliography is stripped — the same fault `$Citation` had; sections are unnumbered because nothing says which chapters are the body; the contents misses nested sections because `$Book.contents` reads shallowly* |
| **the 37 chapter modules** | *still built at import. Left on Doug's ruling until the timing question is settled* |
| ***a writing is judged before it is placed*** | **rules run inside the bond chain, so `$Title.canonical()` cannot reach its book.** *Doug's "book handed down as context" is aimed here; it needs a chemistry hook and is a pitch, not a bug* |
| **names** | *`carrying` · `numbered` · `wrapped` · `supplies` · `formatted` · `measure = 60`, and the clothing vocabulary across chemistry* |
