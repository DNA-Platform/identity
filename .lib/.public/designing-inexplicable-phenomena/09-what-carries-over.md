# What Carries Over

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

*(**Doug, 2026-08-28:** *"I want the team to have a long discussion about what we are changing from the previous version, and write things down. What might stay the same? What might need to change?"* **This is the written half.** Every number here was measured in the working copy on the day it was written; nothing is remembered.)*

## <a id="the-two"></a>The two versions, measured

| | files | lines | classes | published |
|---|---|---|---|---|
| **v1** — [`.archive/`](../../package/.archive/), still shipping | **51** | **3,498** | **46** | **54 export lines** |
| **v2** — [`src/`](../../package/src/) | **16** | **491** | **23** | ***nothing*** |

**Eleven of the twenty-three v2 classes are `$TypeOfX`**, so the substantive count is **twelve**. *v1's arms: `writing/` 1,437 lines · `book/` 1,207 · `document/` 459 · `reference/` 323 · `utilities/` 18.*

***Eleven words appear in both versions.*** `$Writing` · `$Letter` · `$Word` · `$Sentence` · `$Paragraph` · `$Section` · `$Document` · `$Book` · `$Chapter` · `$Annotation` · `$Type`. **Thirty-five v1 classes have no counterpart at all**, and `$File`, `$TypeOfX` and `$Lib` are new.

## <a id="the-one-change"></a>The one change everything else is read against

***`$Writing` is a different object, and the shared word hides it.***

| | v1 | v2 |
|---|---|---|
| **extends** | `$Referent` — *a class, with `valid()`* | `$Chemical` |
| **generic** | `$Writing<P extends $Writing>` | ***never*** — [Doug: "NEVER put a generic type on writing. That ALWAYS means I recommended something wrong."](../projection/28-the-block.md#the-correction) |
| **composition** | `parts` · `canonical` · `where` · `select` · `selectMany` · `single` · `at` | ***none*** — *"Writing doesn't implement composition. EVER."* |
| **the parse** | `parts()` divides prose at every level | ***none yet*** |
| **also carries** | `role` · `annotations` · `theme` · `reading()` · `gathered()` · `set()` · `standing()` · `located()` · `shown()` · `uniform()` | `block` · `specification` · `inside` · `bound` · `view` · `$view` · `specify` · `bind` |
| **members** | **23** | **10** |

***So "porting a class" is never a copy.*** **A v1 class was written against a base that offered composition, a theme, a parse and a validity contract; a v2 class has a base that offers a block, a specification and a binding.** *What survives is whatever never asked the base for anything — and that turns out to be most of the interesting part.*

## <a id="three-piles"></a>The sorting rule — three piles

***Every v1 class falls into exactly one:***

| | pile | count |
|---|---|---|
| **1** | ***moves nearly unchanged*** — it never asked the base for anything | **~14** |
| **2** | ***moves with its validation relocated*** — three jobs, one of them changes home | **12** |
| **3** | ***is rebuilt from the design*** — the code records its own fault | **~9** |
| — | ***deliberately not yet*** — the reference arm | **~11** |

## <a id="pile-one"></a>Pile one — what moves nearly unchanged

### <a id="the-theme"></a>`$Theme`, verbatim

**Eighteen fields of pure data** — `ink`, `ground`, `rule`, `faint`, `accent`, `face`, `mono`, `measure`, `leading`, `weight`, `tracking`, `rhythm`, `size`, `ratio` and the four derived scales. ***It extends `$Chemical` and names nothing in the hierarchy***, so it moves without a decision being made about it.

### <a id="injection"></a>The injected drawing — 48 members, 44 distinct names

***v1 already does dependency injection, and it does it forty-eight times.*** **A `$`-prefixed member holding a styled component is handed in from outside:**

> `$prose` · `$quotation` · `$item` · `$displayed` · `$passage` · `$titlePage` · `$byline` · `$contents` · `$heading` · `$row` · `$opening` · `$rest` · `$bold` · `$italic` · `$set` · `$unset` · `$inline` · `$placed` · `$body` · `$faint` · `$pointing` · `$sheet` · `$shelf` · `$folio` · `$leaf` · `$running` · `$turning` · `$note` · `$notes` · `$anchor` · `$plate` · `$line` · `$marked` · `$listing` · `$filed` · `$entry` · `$account` · `$named` · `$opens` · `$under` · `$said` · `$says` · `$step` · `$foot`

**A `$Title` is restyled by handing it a different `$heading`.** *Nothing is configured, nothing is registered, and the class is not touched.* ***This is the mechanism Doug asked for at Cover and Contents, already built and already proven across seven books.***

**Its one limit, and it is the whole of what is new:** ***the choice is made at the USE SITE.*** *Every place a `$Title` is written must hand in the same `$heading` for the look to be consistent.* **What was asked for is a SCOPE choosing once for everything beneath it** — which is [chemistry's skipped scope-substitution](../../../chemistry/package/tests/abstraction/face.test.tsx), three promises, blocked on the composition graph not being threaded through a holder.

### <a id="the-template"></a>The drawing template method

```
view()  =  set( gathered(theme), theme )
```

***A subclass overrides `set` and nothing else.*** **`gathered` reads the parts and draws each; `set` wraps what came back.** *Twelve classes use exactly that seam and none of them re-implements the walk.* **v2's `view()` / `$view()` pair is the same idea one step earlier**, and the seam is worth carrying rather than reinventing.

### <a id="the-parse"></a>The parse algorithms

***Written once, per level, and they do not touch the hierarchy:***

| where | what it does |
|---|---|
| [`$Section.divide` / `compose`](../../package/.archive/writing/Section.tsx) | runs marked's lexer, pulls fences whole, cuts at headings, makes a `$Title` · `$Figure` · `$Code` · quoted or marked `$Paragraph` |
| [`$Paragraph.stops`](../../package/.archive/writing/Paragraph.tsx) | splits at sentence stops, **stepping over code spans and link targets** |
| [`$Sentence.wordFor` / `stressed`](../../package/.archive/writing/Sentence.tsx) | one regular expression pulls links, mathematics, code spans and emphasis **whole** before anything is split |
| [`$Word.letterFor`](../../package/.archive/writing/Word.tsx) | graphemes |

***All of it is portable, minus one line.*** **Each of them writes `part.parent = this` while reading**, and [the settled account blames that line by name](../the-semantics-of-books/15-the-levels-of-writing.md): *"While the parse wrote, threading a parent looped the page."* **Take the algorithm; leave the write.**

### <a id="the-reasons"></a>The validation reasons

***Twenty-two written sentences, and they are the most portable thing in the repository*** — because they were always prose about the domain rather than code:

> *a word is one unbroken stretch, and this one carries whitespace* · *a word has at least one letter or number, and this one has none* · *a phrase is a name, and a name may carry spaces but not be empty* · *a mark stands between words and may be the space itself, and this one is empty* · *a title has words, and this one is empty* · *a caption is never absent, and this one says nothing* · *a formula is what it sets, and this one sets nothing* · *an author names a book that authors itself, and this one names a book somebody else wrote*

**The mechanism changes and the sentence does not.** *That is the test of whether a thing was a specification or an implementation detail.*

## <a id="pile-two"></a>Pile two — twelve classes, one relocation

***`$Punctuation` · `$Phrase` · `$Emphasis` · `$Formula` · `$Snippet` · `$Caption` · `$Title` · `$Subtitle` · `$Tagline` · `$Summary` · `$Figure` · `$Code`***

**Every one of them does exactly three things**, and the audit is uniform enough to be a table:

| class | validation | view | injected |
|---|---|---|---|
| `$Punctuation` | `whole` · `said` relaxed | — | — |
| `$Phrase` | `whole` relaxed | — | — |
| `$Emphasis` | `valid` | `set()` → strong / em | `$bold` · `$italic` |
| `$Formula` | `valid` | `set()` → katex | `$set` · `$unset` |
| `$Snippet` | `valid` | `set()` → `<code>` | `$inline` |
| `$Caption` | `valid` | — | — |
| `$Title` | `valid` | `set()` → h1 / h2 + subtitle | `$opening` · `$heading` · `$rest` |
| `$Summary` | — | `parenthetical = true` | — |
| `$Figure` | `valid` | `drawn()` | `$plate` |
| `$Code` | `valid` | `set()` | `$listing` · `$line` |

***Doug's own division, found in code written before he said it:*** **"TypeOfX carries much of the validation… `$X` decide how to view and if needed, what data to expose."** *The column headings are his sentence.*

### The relocation, and it is a change of contract

| | v1 | v2 |
|---|---|---|
| **the member** | `valid(): boolean` on the class | `specifically(writing)` on `$TypeOfX` |
| **the verb** | **returns**, collecting reasons | **raises** outside a bond, **records** inside one |
| **who asks** | the caller, whenever | `specify()`, over everything the writing carries |
| **declared in** | **37 files** | **1 so far** — [`$TypeOfLetter`](../../package/src/writing/Letter.tsx) |

***This is the single largest mechanical difference between the versions***, and it is why the twelve are a pile of their own rather than a copy: **the drawing moves untouched, the reason moves untouched, and the member around the reason is rewritten.**

## <a id="pile-three"></a>Pile three — rebuilt, because the code says so

***These are not ports. In each case v1's own file records the fault.***

| | what v1 records |
|---|---|
| ***`$TableOfContents`*** | **its own comment:** *"a contents overrides `parts()` to mean its ENTRIES rather than its sections, so every member it inherits from `$Document` reads the wrong composition… the duplication stands until the contents stops being a chapter whose parts are of another kind."* **205 lines standing on a fault it names.** |
| ***`$Document.declaration()`*** | **harvests sections by CALLING `view()` at bond time**, then sets `$look = 1` so the inherited drawing runs instead. *A look used as a state flag.* |
| ***`$Document.title`*** | ***constructs a `$Title` on every read.*** [Filed as a live loop](../projection/22-working-well-by-default.md): a getter no view may touch. |
| ***`$Cover`*** | reaches two hops through `parent` to ask whether it is its book's cover, **because importing `$Cover` from `$Title` closes a cycle** — recorded in the file rather than routed around. |
| ***`$Book`*** | **463 lines, and it is both** `$Composition<$Chapter>` **and** `$Catalogue<$Book>`. *The dream compiles; it is also the largest single class in the package and it holds the shelf, the folio, the running head and the page turn.* |
| ***`$Annotation`*** | ***the word means two different things across the versions.*** v1: **a `$Phrase` that points at a book**, carrying a card, with `$Author` · `$Subject` · `$Canonical` differing only by `valid()`. v2: **any parenthetical writing.** *Two ideas, one word, and [a name is owed](../the-condition-report/03-names.md).* |
| ***`$Type`*** | v1: *the name is the content*, an annotation subclass. v2: **a formula that resolves a name to a `$TypeOfX`.** *Related, not the same.* |
| ***the ladder itself*** | **v1 has six levels and no `$File`; `$Book` is not writing at all** (`extends $Referent`). **v2 has seven and `$Book extends $File`, so a book IS writing.** *That is a change in the derivation, not a refactor.* |

## <a id="not-yet"></a>The reference arm — deliberately not yet

***Nine files, 323 lines, and v2 has an empty interface where it stood:*** `$Referent` · `$Reference` · `$Catalogue` · `$Location` · `$Path` · `$Link` · `$Highlight` · `$IndexCard` · `$CardCatalogue`, plus the `$$X` family across six files.

**Two reasons to hold it, and both are reasons rather than reluctance.**

***First, [C19](../projection/27-composition.md#c19) moves the ground under it.*** *Doug: "Let's reserve word having letters and sentence having words for the closure of **cataloguing** rather than the closure of composition."* **So the reference arm and the composition arm are about to become one question**, and porting `$Location` now means porting it against a shape that is going to move.

***Second, the finding survives and its cost does not.*** **`$$Word extends $Letter` · `$$Sentence extends $Word` · `$$Paragraph extends $Sentence` · `$$Section extends $Paragraph` · `$$Chapter extends $Section`** — *a thing MENTIONED is one grade below what it stands for.* **That is real and it is worth keeping.** *In v1 it cost six copies of the operator set, because the set lived on `$Writing` and a reference had to restate it. In v2 every level declares its own six anyway, so the copies stop being duplication and become the design.*

## <a id="the-surface"></a>The surface — what decides when this becomes a migration

***v1 publishes 54 export lines. v2 publishes nothing — there is no `index.ts` in `src`.***

| depends on v1 | how |
|---|---|
| **the compiler** | `import { $Book, $$Book } from '@dna-platform/lib'` |
| **the application** | **349 `@/` imports** |
| **the corpus** | through the compiler |

***And the application's profile says which half matters:***

> **`$Title` 39 · `$Paragraph` 39 · `$Section` 38 · `$Summary` 29 · `$Chapter` 28**, then `$Book` 10 · `$Cover` 8 · `$Figure` 7 · `$Footer` 7 · `$Synopsis` 7 · `$Footnote` 6 · `$TableOfContents` 6 · `$Link` 5 · `$Subject` 5 · `$Author` 5

***The demonstration is written almost entirely in the document layer and barely mentions letters and words.*** **v2 has built the half the application does not use and has not built the half it does** — *which is not a criticism of either. v1 grew downward from the book; v2 is growing upward from the letter, and they meet at `$Document`.*

**The measure of the gap is one comparison:** *v1's `$Document` is **132 lines** with `summary`, `title`, `subtitle`, `tagline`, `footer`, `bibliography`, five reading getters, `declaration()` and `gathered()`. **v2's is 41** and composes sections.*

***Until v2 has a surface this is a parallel build, not a migration.*** **And the day it has one, both versions cannot answer the same name** — which is the day [the archive stops shipping](../projection/27-composition.md#k30), and it is a decision rather than an event.

## <a id="what-to-decide"></a>What had to be decided — and four of the five are ruled

*They were written as open questions on 2026-08-28 and answered the same day. **Each answer is Doug's sentence**, and each unblocks a pile.*

| | the question | ***the ruling*** |
|---|---|---|
| **1** | *Does `valid()` come back, or does `specify()` carry all of it?* | ***"specify carries all of it."*** **And the amplification is the more useful half:** *"this thing where we have the type per strongly typed piece of writing means we want the type to carry almost everything specific in the specification — in `specifically`."* **So all twelve derivations split the same way**: the reason moves onto `$TypeOfX`, the drawing and the exposed data stay on `$X`. *v1's 37 `valid()` files collapse into eleven types plus whatever kinds are added.* |
| **2** | *What is an annotation?* | ***"Author, Subject and Type will all be types of annotations."*** **v1 had it inverted** — `$Annotation extends $Phrase`, a word pointing at a book. **In v2 an annotation is parenthetical writing and those three are kinds of it**, so they come across as subclasses with their rule in `specifically` rather than as a hierarchy of their own. |
| **3** | *Is `$Book` writing?* | ***Yes, and a type of file.*** **And the real question underneath it — how a composition narrows — is answered and costs nothing**: `$Book` composes `$Chapter` while `$File` composes `$Document`, and `$MyBook` composes `$MyChapter` two levels on, **with no type parameter and no cast**. *[Recorded in the sprint](../projection/28-the-block.md#where-things-stand); it is TypeScript's method bivariance, and Doug's own case — "we might want MyBook to be a composition of MyChapters" — works.* |
| **4** | *Where does a look come from?* | ***Chemistry's, and not lib's to invent.*** *Doug: "look is a chemistry feature. Read about it. I added one as a view called `back`. We might even want a look called `front` one day."* **So the series is `view` · `$view` · `$$view`, the `$`s an index rather than a rank**, and a look is added by declaring a member. ***What is still open is not looks but INJECTION*** — v1's 48 `$`-prefixed components choose at the use site, and a scope choosing once for everything beneath it is [three skipped promises in chemistry](../../../chemistry/package/tests/abstraction/face.test.tsx). |
| **5** | *When does the archive stop shipping?* | ***"When we can replace everything with the new code. So always think about parity. But parity can be that some functionality moves to the demo if it stops being fundamental."*** **Which reframes the target usefully: parity is not 54 exports, it is *nothing the corpus needs is missing*.** *And Doug's correction to an earlier reading of this chapter is worth keeping —* ***"we will have more in the framework; it's just we haven't finished writing the part we can do"*** *— so the moving-to-the-demo clause is an allowance, not a plan.* |

## <a id="the-order"></a>How to edit — the order the work falls in

***Not a plan. The order the dependencies force, so that a sprint cannot start before its ruling.***

1. ***The interpreter*** — `parts()` divides prose, per level, **taking v1's four algorithms and leaving the parent write.** *Nothing else can be tested against real writing until this exists.*
2. ***Pile two, level by level*** — each of the twelve split into `$X` (view + data) and `$TypeOfX` (validation). **Twelve small classes with a working reference implementation beside each.** *Waits on ruling 1.*
3. ***`$Theme` and the injected drawing*** — moved as they are. *Waits on nothing.*
4. ***The document layer*** — `summary`, `title`, the requirement that a chapter has one. **Rebuilt, not ported**, because three of the four faults above are here.
5. ***Cover and Contents*** — **from the design**, because v1's contents names its own fault. *Waits on ruling 4.*
6. ***The reference arm*** — after C19 is answered, so composition and cataloguing are built as one thing rather than two. *Waits on ruling 2 and on C19.*
7. ***The surface*** — an `index.ts`, and the day it answers `@dna-platform/lib` is the day v1 stops. *Waits on ruling 5.*

***The thing worth remembering out of all of it:*** **what carries over is not the code — it is the sentences.** *The validation reasons, the drawing seam, the four parse algorithms and forty-eight injected members are all portable because none of them ever asked the base class for anything.* **What does not carry is exactly what leaned on `$Writing`** — *and that is the same finding the generic was signalling.*
