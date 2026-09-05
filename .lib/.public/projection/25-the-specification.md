# The Specification

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-25 at the close of [The Formula](24-the-formula.md), which built the mechanism this one spends. **Status: REDIRECTED AND BUILT.** *The requirements below stand as the design record; the sprint Doug actually ran is [The formula, integrated](#the-build).* Doug in the room, ruling at every turn.*

***The title is taken from Doug's own sentence and stands for correction:*** ***"We are doing the semantics of specification. Following a spec."***

**Identifiers.** Requirements **R206–**, actors **A7–**, flows **F1–**, acceptance examples **AE1–**, risks **K20–**, decisions **D99–**, units **U187–**. *[None is ever renumbered](../../../../.claude/library/our-skillset/29-ce-plan.md#the-unit-identifier-specification); a deletion leaves a gap.*

**Where the code lands.** ***`$Book` and `$Chapter`, and the sprint is scoped to them*** — *Doug: **"`$Book` has become a bloated mess. Let's focus on `$Book` and `$Chapter` this sprint as we add types. `$File` and `$Type` are essential en route."*** **So `$File` and `$Type` are the route rather than the destination**, and the destination is two classes that carry less. The code is [`library/.public/package`](../../package/), with the corpus it compiles and a demonstration in the application; whether anything lands in `$Chemistry` is [open](#open).

## <a id="actors"></a>Actors

*Compacted at the close of the sprint — the actors are the classes the units name.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) — ***this chapter, IN PROGRESS*** → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

---

# <a id="the-problem"></a>The problem, in Doug's words

> *"Let's say I want to start a new subject and I want a very specific style on all my chapters. How am I going to implement it? Won't I need to implement something similar for Chapter, Cover, TableOfContents, Synopsis… **I can't inject another type into them right?***
>
> ***Then it becomes very hard to evolve the library using polymorphism.***
>
> *But if we have **a lot of types weighing in on structure, requiring things or rejecting things**, we might be more likely to have something evolvable.*
>
> *Is this addressing a problem? **Isn't this the essence behind composition in complex UI frameworks?**"*

**It is addressing a problem, and the problem is already in the corpus rather than ahead of it** — *[measured below](#what-was-measured), not argued.*

---

# <a id="the-vocabulary"></a>The vocabulary, ruled first because it governs every sentence after it

> ***Doug, 2026-08-25:*** *"It doesn't own specification at all. **It holds a specification.** I want you to overrite any trace of specification and replace it with specification. **That is our domain term. To specify.** In fact, I want to rename `valid` to `specify`. Add that to the sprint work. It's a rename but you'll probably need to do find and replace on comments."*
>
> *"**Yes all of them. I NEVER wanted specification and have had you replace it before and it grows like a virus. CUT IT. Specification. Validation. Specify. Validate. We are doing the semantics of specification. Following a spec.**"*

**Four words, and the distinctions between them are exact:** a type **specifies**; a thing **satisfies** a specification; checking one against the other is **validation**.

<a id="r206"></a>**R206** — ***the domain word is `specification`, and "specification" is struck from the corpus.*** **329 occurrences in this branch library, 4 in chemistry's, 7 in code** — *measured this session.* **The only survivors are the demonstration corpus's own physics prose** — *"conservation specifications" in [`symmetry.tsx`](../../app/src/library/.physics/the-standard-model/symmetry.tsx), which is a book's content rather than our vocabulary.*

<a id="r207"></a>**R207** — ***`valid()` is renamed `specify()`.*** **86 call sites across 39 files in `lib`, 3 in `$Chemistry`** — *measured.* **The replacement reaches the comments as well as the code**, which is Doug's own note on the shape of this work.

<a id="r208"></a>**R208** — ***`$valid(condition, reason)` keeps its name.*** **It is doing validation**, which is one of the four words, and it is exported from `$Chemistry` — so renaming it crosses a package boundary for no gain. ***Stated so the pair reads deliberate rather than half-done.***

<a id="r209"></a>**R209** — **the compiler's [`validate.ts`](../../build/stages/validate.ts) stage keeps its name** — *29 mentions in `build/`* — **because it is a phase of validation, and the compiler [may have compiler words](../the-condition-report/06-the-cleaning.md#actionable).**

<a id="r210"></a>**R210** — ***the same sweep takes the other struck words, because a vocabulary pass that leaves two of them behind is one nobody trusts.*** **"Failure" — 8 in code, 54 in the branch libraries** — *including a styled component named `Failure` in [last sprint's own demonstration](../../../chemistry/package/app/src/sections/formula/case-2.tsx), written after the ban.* **"Mint" — 33 occurrences after three separate bans**, *8 of them in test files and one in [sprint 22's chapter](22-working-well-by-default.md).*

---

# <a id="what-a-type-is"></a>What a type is — the key insight, in Doug's words

> ***Doug, 2026-08-25:*** *"**It doesn't have a host. Stop inventing terminology. Something HAS a type.** It doesn't host one. **And it provides a specification for its type. That is the key insight. It will help specify what it means for the thing to be what it is.**"*
>
> *"**That way we can design whatever chapters we want. But we can put whatever we want on a type.** Let's see what they end up helping us to do."*
>
> *"the type specifies. **Yes we can say that the thing satisfies the specification.**"*
>
> *"It acts like a word. **We shouldn't have to change the default machinery. It should inherit the catalogue.**"*

<a id="r211"></a>**R211** — ***a thing HAS a type.*** **It does not own one, contain one, or host one.** *`host` is struck on sight, as `specification` is.*

<a id="r212"></a>**R212** — ***the type SPECIFIES; the thing SATISFIES.*** **That direction is the ruling**, and it is written down because I had it the other way round once already in this session.

<a id="r213"></a>**R213** — ***a specification says what it means for the thing to be what it is.*** *It is not a description of the thing and not a schema over it — it is the answer to* **what would make this an autobiography.**

<a id="r214"></a>**R214** — ***a thing may have SEVERAL types, and each of them specifies.*** **[`$Book.type`](../../package/src/book/Book.tsx) is already `$Type[]`** — *plural in the code today* — **so "a lot of types weighing in" is the model's own word rather than a new idea.**

<a id="r215"></a>**R215** — ***a type acts like a word and inherits the default machinery; nothing is built specially for it.*** *Doug: "We don't really care about cataloguing types. We don't need a `$$Type`… It acts like a word. We shouldn't have to change the default machinery. It should inherit the catalogue."* **Answered from the code: there is no `$$Phrase` and none is needed** — *the forms are `$$Word`, `$$Sentence`, `$$Paragraph`, `$$Section`, `$$Chapter`, `$$Synopsis`, `$$Book`, each **one grade below** what it stands for; `$Phrase extends $Word`, so **`$$Word` already stands for a phrase** and catalogues its letters, and the phrase's `copy` is **the name of the type**.*

<a id="r216"></a>**R216** — ***a specification narrows by inheritance and every child calls `super`.*** **This is [S8's standing ruling](../the-condition-report/04-semantics.md#s8) carried into the new word:** *"if `specify` is hard to specialize, the parent version should be implemented with PROTECTED METHODS… If a child doesn't call the parent, it suggests that perhaps IT IS NOT A SUBCLASS."*

<a id="r217"></a>**R217** — ***a subject may provide a DIFFERENT specification for the same written word, in its own scope, with no change to any catalogue.*** **The mechanism exists and is [already demonstrated](../../../chemistry/package/app/src/sections/formula/case-3.tsx)** — *`$(Stricter, Autobiography)(Strict)`* — **and it is the direct answer to [the problem](#the-problem)**: *a new subject provides its own specification instead of subclassing four classes.*

<a id="r218"></a>**R218** — ***what a book must be stops being written inside `$Book`.*** **[`$Book.structure()`](../../package/src/book/Book.tsx) holds seven statements today** — *a cover at position zero, exactly one cover, a synopsis of itself, exactly one table of contents, an author, a subject, at most one canonical* — **and they become what types specify, so a subject can add an eighth without touching the class.**

---

# <a id="the-file"></a>`$File` — the composition Doug named

> ***Doug, 2026-08-25:*** *"I realize that we did something wrong. **Let us create a `$File` which is a composition of documents**, and let's **move as much of `$Book` into `$File`**, and then let's make **`$Book` a subclass of `$File`**, with **`$Chapter` a subclass of `$Document`**, and see if we can **retype the properties to get book to be a composition of chapter even though file is a composition of document. It should be possible with specification.** Add this to the sprint."*

<a id="r219"></a>**R219** — ***`$File` is a composition of documents***, and **as much of [`$Book`](../../package/src/book/Book.tsx) as is not specifically about books moves into it.**

<a id="r220"></a>**R220** — ***`$Book extends $File`.*** **`$Chapter extends $Document` is already true** — *measured, [`Chapter.tsx:15`](../../package/src/book/Chapter.tsx)* — **so half the relation stands already and this sprint states the other half.**

<a id="r221"></a>**R221** — ***a book is a composition of chapters while a file is a composition of documents.*** **The narrowing rides a type parameter, which is a shape the framework already uses** — *[`$Writing<P extends $Writing>`](../../package/src/writing/Writing.tsx), narrowed by `$Document extends $Writing<$Section>`* — **and what the compiler cannot carry at runtime is carried by specification**, which is Doug's own sentence: *"It should be possible with specification."*

<a id="r222"></a>**R222** — ***the six levels of writing are unchanged.*** **[The derivation says chapter, book, subject and library are things DONE WITH a document rather than further levels](../the-semantics-of-books/15-the-levels-of-writing.md)** — *so `$File` generalizes what `$Book` already is (a `$Referent` composing documents) and **does not add a seventh level of writing**.* ***Named here so the theory and the code are checked against each other before the move rather than after.***

## <a id="the-bloat"></a>The bloat, counted — because "bloated mess" deserves a number

> ***Doug:*** *"**`$Book` has become a bloated mess.** Let's focus on `$Book` and `$Chapter` this sprint as we add types."*

***45 members on one class*** — **25 getters, 17 methods, 7 style holders**, in 463 lines. *And they are not one subject; they are five, counted this session:*

| | members | what they are |
|---|---|---|
| **drawing** | ***18*** — `environment` `place` `opening` `head` `shelf` `folio` `backward` `forward` `turning` `view` `stands` + **7 style holders** | ***nearly half the class***, and none of it is about books rather than about drawing a composition |
| **composition** | **10** — `parts` `at` `where` `select` `selectMany` `single` `located` `canonical` `copy` `reading` | *the `$Composition` surface, identical to what every other composing class carries* |
| **cataloguing** | **8** — `card` `entries` `read` `follow` `ref` `library` `pointed` `canonicals` | *a book as a thing pointed at and a thing that holds others* |
| **annotation** | **6** — `annotations` `author` `subject` `type` `title` `subtitle` | *lifted from the cover* |
| ***book structure*** | **7 statements in one method** — [`structure()`](../../package/src/book/Book.tsx) | ***the only part that is genuinely about being a book***, and it is [what becomes a specification](#r218) |

<a id="r223"></a>**R223** — ***the split above is the decomposition, and `$File` takes the first two groups.*** **Drawing and composition are what a file of documents does**; *cataloguing, annotation and structure are what a book does with one.*

<a id="r224"></a>**R224** — ***`$Chapter` is read in the same act, and it is the smaller half.*** **105 lines, six members over `$Document`** — *`$in` `book` `address` `ref` `read` `follow`, plus the bond and `requires()`.*

<a id="r226"></a>**R226** — ***`requires()` IS a specification, under an older name, and it is already in the code.*** **[`$Chapter.requires()`](../../package/src/book/Chapter.tsx) is called by the bond and overridden twice** — *[`$Cover`](../../package/src/book/Cover.tsx) narrows it to demand a title;* ***[`$TableOfContents`](../../package/src/book/TableOfContents.tsx) EMPTIES IT*** — `protected override requires(): void {}`. **That is [S8's diagnostic](../the-condition-report/04-semantics.md#s8) firing on this exact method**: *a child that does not call its parent is evidence it is not a subclass.* ***So the rename is not cosmetic here — it lands on a member that is already being repealed in silence, and [R216](#r216) is what stops that.***

<a id="r225"></a>**R225** — ***the sprint is judged on `$Book` and `$Chapter` carrying less, not on `$File` and `$Type` existing.*** **A number is owed at review: members before, members after.**

---

# <a id="the-levels"></a>The levels — and Doug's turn, which is the largest thing in this chapter

> ***Doug, 2026-08-25:*** *"**Finally the levels are going to need to be interfaces. It has been bound to be this for a long time. I knew it was going to get there.** Okay so that's going to be a major re[fact]or."*
>
> *"Well we can have an interface. **This is the place where we wish we had C# extension methods, but we don't.** Let's plan this out. **We might have to really design this from scratch.**"*
>
> — **and then, one message later:** *"Oh! Important — **we should use types to specify this, no?**"*

## <a id="the-levels-are-siblings"></a>First, what the levels actually are — measured, and not what I expected

***They are not a chain.*** **`$Word`, `$Sentence`, `$Paragraph` and `$Section` each extend [`$Writing<P>`](../../package/src/writing/Writing.tsx) DIRECTLY**, parameterised by what they compose; `$Document extends $Writing<$Section>`; `$Letter extends $Writing<$Letter>` and is the self-composing floor.

**Only the refinements stack** — `$Phrase` and `$Punctuation` on `$Word`, `$Title` `$Figure` `$Code` on `$Paragraph`, `$Caption` on `$Sentence`, `$Summary` on `$Section`. ***Which is the theory's own two edges, standing correctly in the code:*** *the levels differ by composition, the refinements differ by validation.*

***So there is exactly ONE shared implementation to find a home for*** — `$Writing<P>` — **and each level adds the three things [the settled account says it adds](../the-semantics-of-books/15-the-levels-of-writing.md)**: *what it composes, how prose divides, and what makes it valid.* ***That table is a specification already; it has simply never been one object.***

## <a id="the-walk-names-classes"></a>THE FINDING — the walk names classes, and the settled account says it does not

**[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) states it twice:**

> *"**LEVEL ALONE DECIDES**… `level` is a getter, so it is inherited: a kind the model has never heard of is handled without the walk being told anything about it. **There is no class name anywhere in the walk, and no registry of kinds.**"*

***Neither half is true of the working copy.*** **Measured this session:**

| | |
|---|---|
| ***there is no `level` getter*** | **one comment in [`Writing.tsx`](../../package/src/writing/Writing.tsx) contains the word.** *Nothing declares it, nothing reads it.* |
| ***there is no one walk*** | **each level writes its own `parts()`**, and `divide`/`compose` exist **only on `$Section`** |
| ***and the class is named in it, five times*** | `$Paragraph.parts()` — `written instanceof $Sentence` · `$Section.parts()` — `written instanceof $Paragraph` · `$Document` — `instanceof $Section` twice, plus `$Footer` and `$Bibliography` |

***This is [the cover/chapter gap](../../../../.claude/library/..librarianship/.cover.md) on a settled account rather than a sprint record*** — **the most expensive kind, because a settled account is what someone reads INSTEAD of the code.**

<a id="r227"></a>**R227** — ***the account and the package are made to agree, in whichever direction is ruled.*** **A chapter that describes a member nobody wrote is corrected in the same act as the code it describes.**

## <a id="levels-as-types"></a>What Doug's turn means, said plainly

***The levels are identified by CLASS today, by `instanceof`, in the one walk the theory says names no class.*** **His two messages are one move: stop asking what class a thing is, and ask what it SPECIFIES.**

<a id="r228"></a>**R228** — ***a level is a type.*** **A piece of writing does not have to BE a `$Paragraph` to stand where one stands; it has to satisfy what `Paragraph` specifies** — *which is the same sentence as [R212](#r212), one layer down, and it is what makes [derived kinds free](../the-semantics-of-books/15-the-levels-of-writing.md) in fact rather than in prose.*

<a id="r229"></a>**R229** — ***and it is the escape from single inheritance, obtained rather than engineered.*** **[The problem](#the-problem) was that `$Cover` must be both a `$Cover` and a `$PhysicsChapter`.** *If what a cover must be is a specification it satisfies rather than a class it extends, the second supertype was never needed.* ***This is also the wall [`$Type` itself](#open) meets, and [the one the `$$` reference forms meet](../the-condition-report/04-semantics.md#s1-constraint) — one answer for three.***

<a id="r230"></a>**R230** — ***a type knows what it specifies without being told.*** *Doug: **"have `$Type` have a `get instance() { return this.parent; }` — the type should always have its parent as its type I think, but we can override that."*** **So a type specifies the thing it is written inside**, and the demonstration's `<Claim of={this} />` — *a work handing itself to its own type as a prop* — **stops being written by hand.** ***Overridable, which is how it evolves.***

<a id="k24"></a>**K24 — and `parent` is exactly the member last sprint found unreliable through a derivative.** *[The Formula](24-the-formula.md) closed with it: **"`$(instance)` lifts a per-mount derivative and `$lift` resets `[$$parent$$]` to the derivative itself, so a bound child drawn through `$(child)` loses the parent the bound one had… Context has to be passed rather than inherited."*** **[R230](#r230) is that member, load-bearing, one sprint later.** ***Named now rather than found in the build.***

## <a id="the-scope-tension"></a>And this is larger than the scope ruled an hour ago — said rather than absorbed

***Doug scoped this sprint to `$Book` and `$Chapter`.*** **Levels-as-types reaches `$Word`, `$Sentence`, `$Paragraph`, `$Section`, `$Document` and the parse** — *six more classes and the walk* — **which is the "major re[fact]or" he named in the same message.**

***That is his call and not mine to quietly take either way.*** **The two shapes are: design levels-as-types HERE and build it in `$Book`/`$Chapter` only, letting the rest follow next sprint; or grow this sprint to the whole turn.** *[Open](#open), and it is the first thing the plan needs.*

---

# <a id="metadata"></a>Where annotations go — and the word Doug is asking for

> ***Doug, 2026-08-25:*** *"Okay so what about the idea of metadata… What if we have a `$Metadata` — **except we want it to be more in the semantics of books if possible. What is a thing that is not part of the document but has information about it?**"*
>
> *"**Where do annotations go?**"*

## <a id="annotations-anywhere"></a>An annotation lives at ANY level — Doug's correction, and it is true in the code

> ***Doug:*** *"**No, annotations can exist at any level.**"*

***He is right, and I had it wrong on the first reading.*** **An annotation is phrase grade precisely SO THAT anything at phrase grade or above can contain one** — *[S17's own words](../the-condition-report/04-semantics.md#s17-ruled): "at the letter level annotations can't exist… but since annotations are phrasal, they can live in anything higher."*

***And it holds in the working copy, traced rather than assumed:*** **[`$Paragraph.parts()`](../../package/src/writing/Paragraph.tsx) puts a written non-sentence into `held` and composes it into a `$Sentence`; [`$Sentence.parts()`](../../package/src/writing/Sentence.tsx) `stand()`s any written object as a `$Word`.** *So `<Paragraph>written by <Author>The Team</Author> in 2026</Paragraph>* **keeps the `$Author` as a live part of the sentence.**

**What the corpus measures is therefore what the COMPILER emits, not what the framework requires:** *15 annotations across the seven generated covers, each written as its own `<Paragraph>`.* ***A compiler convention, and worth knowing as one.***

## <a id="what-holds-them"></a>What HOLDS them — asked by Doug, and half of it is already built

> ***Doug:*** *"**What is the thing that holds the annotations in a piece of writing?**"*

***Today, nothing holds them. [`$Writing.annotations`](../../package/src/writing/Writing.tsx) is a GATHER*** — *"a writing's annotations are its parts'; an annotation's are itself"* — **a polymorphic fixed point with no container anywhere.**

***But the package already contains the shape, for one kind of annotation, and it is the document apparatus:***

| | what it is | grade |
|---|---|---|
| [`$Denote`](../../package/.archive/document/Denote.tsx) | **written in the prose, points at a note by name** — *parenthetical: present in the writing, absent from the reading* | writing |
| [`$Legend`](../../package/.archive/document/Legend.tsx) | ***the thing that HOLDS them*** — a parenthetical paragraph whose parts are `$Key`s, *"a list of what the marks mean"* | paragraph |
| [`$Key`](../../package/.archive/document/Key.tsx) | **a name that reads to a `$Footnote`** | referent |
| [`$Footer`](../../package/.archive/document/Footer.tsx) · `$Bibliography` | **the section the legend stands in**, at the end of the document | section |

***So a piece of writing already has a place where the things written into it are collected and said*** — **and it is the LEGEND, standing in a FOOTER.** *What has no such place is the other family of annotations — `$Author`, `$Subject`, `$Canonical`, `$Type` — which are about the **book** rather than about a **passage**, and are found only by walking.*

## <a id="a-specification-is-writing"></a>AND THE CORRECTION THAT REFRAMES THE SPRINT — a specification is a PART OF THE WRITING

> ***Doug, on being told a legend is what holds them:*** *"**No a legend is a part of the piece of writing. It's the specification.**"*

***My reading, said back and [flagged for correction rather than settled](../../../../.claude/library/teamspeak/03-discussion.md):*** **a specification is a part of a piece of writing that says what the writing must be — exactly as a legend is a part of a piece of writing that says what its marks mean.** *Both are parenthetical in the same sense the package already uses: **present in the writing, absent from the reading**.*

***So a specification is not a method and not a schema. It is WRITING***, and [`$Legend`](../../package/.archive/document/Legend.tsx) is the shape already standing: *a parenthetical paragraph, part of its document, whose content is what the rest of the document is held to.*

<a id="r231"></a>**R231** — ***a specification is a piece of writing, carried by the thing it specifies.***

<a id="r233"></a>**R233** — ***and this is [closure under books](../the-semantics-of-books/10-closure-under-books.md) applied to the RULES rather than to the content.*** **[`$Book.structure()`](../../package/src/book/Book.tsx)'s seven statements are TypeScript today** — *a specification whose home is outside the library it governs* — **and [The Live Library](../designing-inexplicable-phenomena/05-the-live-library.md) already names that as the fault:** *"a rule that lives in the compiler is a rule the browser cannot ask."* ***If a specification is writing, a book carries its own and the browser can ask it.***

<a id="r234"></a>**R234** — ***and it answers Doug's opening framing.*** *"Consider defining them by spec rather than by type"* — **a Cover is not a class something extends; it is a specification some writing satisfies, and the specification is itself written.**

## <a id="the-word"></a>The candidate words — all four already in our own register, and the pick is Doug's

*[Nothing here is a name I invented](../../../../.claude/library/..teamsmanship/05-territory.md); every one is either a librarian's term or already written down in this branch.*

| the word | what it already means here | fit |
|---|---|---|
| ***imprint*** | ***Doug's own, twice in [chapter zero](00-planning.md)***: *"the imprint page (**metadata as cover parentheticals**; publisher → team)"* and *"which parentheticals on the cover are metadata (publisher, date — **the imprint's content**)… and whether the imprint page derives from a metadata reading **the way the table of contents derives from chapters**"* | ***the closest, and it is already his word for this exact thing*** |
| **colophon** | **taken, and narrower** — [Ways of Reading](../designing-inexplicable-phenomena/04-ways-of-reading.md): *"the production record: when, by whom, in what hands"* — and it is a styled component in the demonstration | *a kind of imprint, not the general idea* |
| ***cataloguing-in-publication*** | **the librarian's actual term for the catalogue record printed inside the book** — *and [already tried in the demonstration](09-the-subject.md) as "the Cataloguing-in-Publication experiment"* | ***exactly the definition Doug asked for***, and long |
| **the card** | **already built** — [`$$Book`](../../package/src/book/Book.tsx), and [S17 already ruled it *"a REFLECTION of the book — the same property names, with references replaced by cards"*](../the-condition-report/04-semantics.md#s17-ruled) | ***the OUTSIDE form of the same information*** |

***The observation worth more than the word:*** **the card is what the catalogue holds about a book; what Doug is reaching for is what the BOOK holds about itself** — *and in a real library those are the same record in two places, which is precisely what cataloguing-in-publication is.* **So this is not a new idea to invent; it is [the card's inside face](#open), and the framework already has one half of it.**

<a id="r232"></a>**R232** — ***the word is Doug's to pick, and this table is the offer rather than a choice already made.***

---

# <a id="what-was-measured"></a>What this brainstorm measured — nothing below is an impression

*Each row was read on this working copy during this session.*

| | measured | how |
|---|---|---|
| ***the diamond is already in the corpus*** | **21 generated classes** — one per cover, synopsis and chapter file, across 7 books | grep |
| **and a subject-styled cover would need two supertypes** | `$Cover extends $Chapter`, so a physics cover must be **both** a `$Cover` and a `$PhysicsChapter` — ***which single inheritance forbids*** | read |
| ***a scope cannot re-dress a chapter its book holds*** | [`$Book.place()`](../../package/src/book/Book.tsx) draws with `$(chapter)`, and **the instance branch is taken at [`chemical.ts:1337`](../../../chemistry/package/src/abstraction/chemical.ts) before the representative is consulted** | read |
| **and the class is pinned earlier still** | generated books write `<PhysicsCover />` and `<TableOfContents />` as ordinary JSX — *"React's own path, and it is **not** resolved"* | read |
| ***a formula resolution DOES go through the representative*** | [`formula.ts`](../../../chemistry/package/src/abstraction/formula.ts) passes its asker in and calls `$(component)` — **which is the whole mechanical difference between the two routes** | read |
| ***but a book is built outside a drawing*** | generated books are `$(<Book>…</Book>)` at **module scope**, and [R202](24-the-formula.md#r202) says a formula reached outside a chemical's drawing is **not** swapped | read |
| **`$Type` cannot extend `$Formula`** | `$Type > $Annotation > $Phrase > $Word > $Writing > $Referent`; `$Formula > $Chemical`. ***One supertype each*** | read |
| **and `lib` already exports a `$Formula`** | [`writing/Formula.tsx`](../../package/.archive/writing/Formula.tsx) — *a KaTeX inline phrase* — **from the same `index.ts` chemistry's `$Formula` would enter** | read |
| **the reference forms, and their grade rule** | `$$Word` `$$Sentence` `$$Paragraph` `$$Section` `$$Chapter` `$$Synopsis` `$$Book` — **each one grade below what it stands for, and there is no `$$Phrase`** | grep |
| **the rename surface** | `valid(` **86** across **39 files** in `lib`, `$valid(` **19**; `$Chemistry` **3** and **1**; `build/` **29** | grep |
| **the struck words** | *specification* **329** here · **4** in chemistry's library · **7** in code · **2** legitimate in the physics corpus. *failure* **8** in code · **54** in the libraries. *mint* **33** | grep |
| **what a book states about itself today** | [`$Book.structure()`](../../package/src/book/Book.tsx) — **seven statements, hardcoded in the class**, read twice: once by the bond and once by `valid()` | read |
| ***the levels are siblings, not a chain*** | `$Word` `$Sentence` `$Paragraph` `$Section` each extend **`$Writing<P>` directly**; `$Document extends $Writing<$Section>`; `$Letter extends $Writing<$Letter>`. **Only the refinements stack** | read |
| ***there is no `level` getter*** | **one comment in `Writing.tsx` contains the word** — nothing declares it, nothing reads it | grep |
| ***and the walk names classes, five times*** | `$Paragraph.parts()` `instanceof $Sentence` · `$Section.parts()` `instanceof $Paragraph` · `$Document` `instanceof $Section` ×2, `$Footer`, `$Bibliography` | grep |
| **`divide`/`compose` exist on ONE level** | `$Section` only — *where [the account](../the-semantics-of-books/15-the-levels-of-writing.md) describes them as the axis every level answers* | grep |
| ***`requires()` is already the specification, and already repealed once*** | `$Chapter` declares it, `$Cover` narrows it, **`$TableOfContents` empties it** — `protected override requires(): void {}` | read |

---

# <a id="the-pattern"></a>What pattern this is — because Doug asked

> *"**Isn't this the essence behind composition in complex UI frameworks?**"*

**Yes, and the precise name earns its keep.** *It is composition over inheritance, and the specific published move is the **Type Object** pattern (Johnson & Woolf, PLoP '97): **when subclassing per kind explodes, make the kind an object the thing HAS.***

***The types stay a hierarchy*** — `$Autobiography extends $Biography extends $Book` — **what becomes composition is the relation.** *Two independent hierarchies instead of their product, which is exactly what dissolves [the diamond measured above](#what-was-measured).*

**And it is the same move the last two sprints made, one axis further on:** *[The Look](23-the-look.md) deleted a class's privilege over its **drawing**; [The Formula](24-the-formula.md) deleted its privilege over its **instance**; this deletes its privilege over **what it must be**.*

---

# <a id="open"></a>OPEN — not yet ruled, and the brainstorm is not finished

| | the question |
|---|---|
| ***how a `$Type` reaches a catalogue of specifications*** | **`$Type extends $Annotation` and `$Formula extends $Chemical`, and TypeScript gives one supertype.** *Doug has ruled that a type **acts like a word and inherits the default machinery** — which rules OUT special-casing `$Type`, and leaves open whether the catalogue is extracted from `$Formula` into something anything can carry ([P10](../the-condition-report/06-the-cleaning.md#actionable)), or the written word and the specification are two objects, or [the mixin I11 records as owed](../the-condition-report/05-implementation.md#i11).* |
| ***whether the representative is made to reach a book's chapters*** | **The measured defect above.** *Without it a subject cannot re-dress its chapters at all; with it, appearance and specification are two wired axes.* |
| ***where a `<Type>` is WRITTEN*** | **A generated book is built at module scope, outside any drawing** — *so a type written among a book's chapters is not swapped, while one written on a cover is.* ***This decides the shape of what the compiler emits.*** |
| ***Cover, Table of Contents and Synopsis as types*** | **Doug's opening framing, and not yet ruled.** *They are `$Chapter` subclasses carrying real behaviour — `$TableOfContents` overrides `parts()` and holds `$open`; `$Synopsis` decides `standsFor` off a card — and that is behaviour rather than specification.* |
| ***the demonstration*** | **[Not designed](../../../../.claude/library/our-skillset/28-ce-brainstorm.md#the-validatable-specification), and the sprint does not close without it.** |

# <a id="risks"></a>Risks

<a id="k20"></a>**K20 — a rename across 39 files touches every specification in the package at once.** *`specify()` is called from bond constructors, from `$Document`'s harvest, and from the compiler's validation stage.* **A silent miss is a specification that stops being asked.**

<a id="k21"></a>**K21 — `$File` moves the largest class in `lib`.** *[`Book.tsx`](../../package/src/book/Book.tsx) is 463 lines and the compiler reads its members through `any`* — **[S21](../the-condition-report/08-the-compiler.md#s21): "rename `contents` in the framework and the compiler keeps compiling and starts emitting empty cards."**

<a id="k22"></a>**K22 — two classes named `$Formula`.** *`lib` exports one from `writing/`; `$Chemistry` exports another.* **They meet in `index.ts` the moment `lib` imports the mechanism.**

<a id="k23"></a>**K23 — [C7](../the-condition-report/07-the-three-codebases.md#c7), the rebuild chain.** ***Any `$Chemistry` change means `dist` is rebuilt before any application driver.*** *[The Look lost 8 of 39 checkpoints to a stale `dist`](23-the-look.md#the-stale-dist).* **This runs first, not last.**

---

# <a id="the-build"></a>WHAT WAS BUILT — the sprint redirected

> ***Doug, 2026-08-26:*** *"Make this sprint about **integrating formulas into particle** and move on."*

**The requirements above are the design record of the conversation that produced this.** *What follows is the work.*

## The numbers, from the run that claims them

> **`$Chemistry` 728/728 across 61 files · `tsc` 0 · `rollup` 0 · Lab app `tsc` 0**
> **`lib` 352/352 across 32 files · `tsc` 0 · the application `tsc` 0 · the compiler `tsc` 0 · `src2` `tsc` 0**

## <a id="u187"></a>U187 — `$valid` is gone; `$check` took its second shape

*Doug: **"I would prefer both be called check and we use overloads… We want to absolutely minimize the number of utility functions."***

**Two overloads, one implementation, discriminated by the first argument being a boolean.** *Measured before it was written: **`$check` had exactly two call sites in the whole codebase** and neither passed a boolean.* **16 files in `lib` changed, plus `chemical.ts` and the export list.** *The `poly-form` hits were a styled-component transient prop and were left alone.*

## <a id="u188"></a>U188 — the downward echo, closed

***A key no longer echoes into the catalogue of the class that inherited the call.*** *`$Biography` declaring `'Biography'` used to plant it in `$Autobiography`'s catalogue too, because a super-chain runs an ancestor's `cache` with the descendant as receiver.* **One condition: if a strict ancestor already holds the key, the call is an echo rather than a declaration and does nothing.**

***Watched both ways:*** *three probes asserting the echo EXISTS passed before, and the same three inverted pass after.* **Compounded as [Solutions 27](../solutions/27-the-key-that-filed-itself-under-its-descendant.md).** **The default still echoes down deliberately** — a promise pins it, and *the default you fall to is the class you wrote*.

## <a id="u189"></a>U189 — `resolve`, and the surface stripped to what was asked for

***The finding: being findable and being an asker are two questions, and conflating them made `<Author>The Team</Author>` raise.*** **The account is [Two questions, not one](../../../chemistry/.lib/composition/12-the-formula.md#findable-and-asking); this record keeps only what it cost to learn.**

***And the interface was cut to one member.*** *Doug: **"I only asked for cache… I don't want a polluted interface even in first person perspective. protected does not do it."*** **`standsFor` DELETED — it had zero production callers and duplicated the lookup inline** — and **`keyOf` moved behind a symbol.** *The 19 assertions that read the catalogue through `standsFor` now go through the swap, which asserts the same fact and exercises the whole mechanism.*

## <a id="u190"></a>U190 — the machinery moved off `$Formula`

***Doug's ruling: "make formula a boolean… `cache` is a function on particle, and then any particle can cache. That gives us base classes back."***

***The finding: a formula is a flag rather than a supertype, which dissolves the single-inheritance wall.*** **The account is [Base classes back](../../../chemistry/.lib/composition/12-the-formula.md#base-classes-back) and the module is [`16-formula.md`](../../../chemistry/.lib/implementation/16-formula.md).** *One thing belongs here rather than there, because it is a fact about this codebase and not about the feature:* **it landed on `$Chemical` and not `$Particle`, because the substitution calls `$`, `$` is defined in `chemical.ts`, and `chemical.ts` imports `particle.ts`.**

***THE THING IT WAS FOR, promised and watched red:*** **a chemical that never extended `$Formula` can now declare `formula` mid-hierarchy, cache, and resolve** — and its non-formula ancestor holds nothing. *Making `$Chemical.formula` default true turns both promises red:* `expected '$Special' to be '$Middle'`.

## <a id="still-open"></a>What is NOT done

| | |
|---|---|
| ***nothing in `src2` is writing yet*** | `$Writing$` is an interface with no class, so `$TypeOfLetter` has no instance to specify against. **Every `specify()` in `src2` is empty on purpose.** |
| ***the collector*** | `specify()` returns `void`, so something must gather the statements. **Doug rejected `$valid` as its home; it is `src2`'s to define, and `is()` is what will read it.** |
| **`specification` has no producer** | `$Front` and `$Back` initialise it to `[]`; the back is where types live, and wiring it needs a writing class. |
| **the comments removed from `formula.ts`** | *Doug: "Move them to library branch documentation."* **Owed to [`implementation/16-formula.md`](../../../chemistry/.lib/implementation/16-formula.md) and [`composition/12-the-formula.md`](../../../chemistry/.lib/composition/12-the-formula.md).** |

---

# <a id="where-things-stand"></a>WHERE THINGS STAND

*[The session boundary](../../../../.claude/library/our-skillset/32-ce-handoff.md). **The next session opens by reading this and acts on nothing until it has** — and the working copy is the truth, not this page.*

## The state, in numbers from the run that claimed them

> **`$Chemistry` 728/728 across 61 files · `tsc` 0 · `rollup` 0 · `dist` rebuilt · Lab app `tsc` 0**
> **`lib` 352/352 across 32 files · `tsc` 0 · the application `tsc` 0 · the compiler `tsc` 0 · `src2` `tsc` 0**

**Nothing is committed at the time of writing.** *The Look and The Formula sprints were already uncommitted in this tree, so a push carries all three.* **Use [the commit tool](../../../../.claude/library/..environmentalism/06-on-sync--commit.sh), never raw git.**

## <a id="the-turn"></a>The turn this session took, because it is the thing to know

***It opened as a brainstorm about specification and ended as a rewrite.*** **Doug opened `src2` mid-session** — *"I think we need to move onto the next version of this. I think we might need to do a major rewrite and I am going to stay much closer to the code"* — **and the sprint was redirected to [integrating the formula into the chemical base](#the-build)**, which is what unblocks the rewrite.

***The requirements above were never built and are not stale.*** *They are the design record: what a type is, front and back, a specification being a piece of writing, and the measurement of `$Book`.*

## The rulings, verbatim

> *"It doesn't own specification at all. **It holds a specification.**… I want to rename `valid` to `specify`."*
>
> *"**Yes all of them. I NEVER wanted specification and have had you replace it before and it grows like a virus. CUT IT. Specification. Validation. Specify. Validate.**"*
>
> *"**It doesn't have a host. Stop inventing terminology. Something HAS a type.**… **And it provides a specification for its type. That is the key insight.**"*
>
> *"the type specifies. **Yes we can say that the thing satisfies the specification.**"*
>
> *"**That way we can design whatever chapters we want. But we can put whatever we want on a type.**"*
>
> *"**I would prefer both be called check and we use overloads**… We want to absolutely minimize the number of utility functions."*
>
> *"**I only asked for cache**… I don't want a polluted interface even in first person perspective. **protected does not do it.**"*
>
> *"we should just make formula a boolean on particle, and make that mean resolve, and cache is a function on particle… **That gives us base classes back.**"*
>
> *"**branch should stop below the first formula and only work on formulas.**"*
>
> *"**And don't add comments all over the code. Remove them. Move them to library branch documentation.**"*
>
> *"**I am the one who does everything for now**"* — **on `src2`. Chemistry was mine to change; `src2` is his.**

## What is DONE

- **`$valid` merged into `$check`** as a boolean-and-reason overload; 16 files in `lib`, plus `chemical.ts` and the export list.
- **The downward echo closed** — [Solutions 27](../solutions/27-the-key-that-filed-itself-under-its-descendant.md).
- **`resolve`**, separating being findable from being an asker.
- **The machinery moved onto `$Chemical`**; `$Formula` is two members. **Any chemical can be a formula anywhere in a hierarchy.**
- **Six new promises**, every one watched going red.
- **The library** — [`implementation/16-formula.md`](../../../chemistry/.lib/implementation/16-formula.md) rewritten, [`composition/12-the-formula.md`](../../../chemistry/.lib/composition/12-the-formula.md) extended, four covers through the tool.

## <a id="owed"></a>What is NOT done, and what is OWED

| | |
|---|---|
| ***`valid` → `specify`*** | **[R207](#r207). 86 call sites across 39 files in `lib`, 3 in `$Chemistry`.** *Ruled and not carried out — the sprint was redirected before it.* |
| ***the "specification" sweep*** | **[R206](#r206). 329 occurrences here, 4 in chemistry's library, 7 in code.** *Same reason. Both are still owed and neither should quietly drop.* |
| **nothing in `src2` is writing** | `$Writing$` is an interface with no class, so `$TypeOfLetter` has no instance to specify against and **every `specify()` in `src2` is empty on purpose.** |
| ***the collector*** | `specify()` returns `void`, so something must gather the statements. **Doug rejected `$valid` as its home** — it recorded into `$paramValidation`, the same bucket as bond-constructor errors. ***It is `src2`'s to define, and `is()` is what will read it.*** |
| **`specification` has no producer** | `$Front` and `$Back` initialise it to `[]`. The back is where types live; wiring it needs a writing class. |

## <a id="wrong-turns"></a>The wrong turns already taken — do not retry these

| | what happened |
|---|---|
| ***comprehension as an abstraction*** | **`$Comprehension<T> = T & $Composition<T>`, four encodings deep, ending at `Word<P extends Writing = Writing>` — which permits `Word<Book>`, a word of books.** *Doug: "It certainly isn't semantically justified."* ***It is ill-founded: the derivation already has two edges, and a phrase differs from a word by VALIDATION.*** *A composition-of-T-that-is-a-T has no instance in the model that needs it.* |
| ***the poetry of failure*** | *Dramatizing TypeScript's limits — no higher-kinded types, no extension methods — instead of solving.* **Doug: "lol this is pretty dramatic… Why are you writing the poetry of failure?"** *We do not need HKTs: six levels, six lines. And **the dynamic type system already shipped four days ago** — it is the formula.* |
| ***`keyOf` returning undefined as the collision fix*** | *A hack.* **The real answers were already there: branch isolation means an author can never reach a type's name, and a declared default means a miss falls to the class you wrote.** |
| ***a green probe that exercised nothing*** | **The first `resolve` probe passed with the gate REMOVED** — the default absorbed the miss and it resolved to itself either way. *Rewritten around a descendant's key so it can fail.* [Solutions 14](../solutions/14-the-green-that-exercised-nothing.md), again. |
| **offering `protected`** | *For `keyOf` and `standsFor`.* **Doug: "protected does not do it."** *Symbols, and `standsFor` deleted outright.* |

## Where to start reading

***[The Formula](../../../chemistry/.lib/composition/12-the-formula.md) first*** — it is the feature and it now carries `resolve`, the two questions, and base classes back. **Then [Solutions 27](../solutions/27-the-key-that-filed-itself-under-its-descendant.md)** if anything touches per-class registration. *This chapter is the trail and is the last thing to read, not the first.*
