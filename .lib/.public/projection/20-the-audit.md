# The Audit

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)

---

*Opened 2026-08-21 on Doug's letter; ran four days. **Status: `compounded`.** **Nothing was built** — the sprint's output is a reading of the code, and it lives in a book of its own.*

## → THE REGISTER LIVES IN [THE CONDITION REPORT](../the-condition-report/.cover.md)

***This chapter is the TRAIL. [The Condition Report](../the-condition-report/.cover.md) is the DESTINATION.*** *Every fault this sprint found is an entry there, indexed by kind of fault — organization, names, semantics, implementation — and every ruling Doug gave is [one of its 23 problems to solve](../the-condition-report/06-the-cleaning.md#actionable).*

**What survives here is what belongs to a sprint record and nowhere else:** *the letter, where the theory is written down, the twenty principles read off the code, and the registers of what this sprint measured, required, planned and asked.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

---

# The letter, and what it asked for

*Doug, 2026-08-21. **The whole of it governs**; these are the asks, separated so none is lost.*

1. **Say what the design principles ARE** — naming semantics, folder organization, the way code is written.
2. **Note what is DIFFERENT** in `lib` and the `.public` compiler.
3. **Find the warts** — anything not obvious, not mathematically precise, hard to swap one thing for another.
4. **Ask how a `$Theme` could unify the framework**, and how styled components change by polymorphism or reactivity.
5. **Look at the demo.** Does it work? Does it fight the framework?
6. **Surface naming that does not fit the semantics of libraries and books.**

**And the frame that governs all six:** *"lib is an application development framework built on a to-be-fully-formalized first order theory of semantics, identity, cognition and consciousness."* ***SRT's canonical semantics are library semantics***, so **a name that does not fit the semantics of books is a defect in the theory's realization, not a style preference.**

## Where semantic reference theory is written down, since he asked us to search

**Every live mention is on this branch or in a teammate's own library. The corpus itself is a sibling repository.**

| where | what is there |
|---|---|
| [The Semantics of Books](../the-semantics-of-books/.cover.md), 15 chapters | **the derivation** — the object model of the library metaphor, worked out from one conversation Doug held 2026-07-18 |
| [`../dna-library`](../the-semantics-of-books/.cover.md) *(sibling repo)* | the primary source: the conversation, and the foundation file *The Architecture of Semantic Space: Symbols, Literals, and Referential Structure* |
| [Claude's `semantic-reference-and-perspective`](../../../../.claude/library/..teamsmanship/..team/claude/semantic-reference-and-perspective/.cover.md), 4 chapters | what the theory needs, perspective as primitive, the portrait problem, toward the axioms |
| `.archive/library/{dictionary,encyclopedia}` | the earlier hand-built HTML dictionary and encyclopedia — **archived, not live** |
| [42-sprint-43](../../../chemistry/.lib/projection/42-sprint-43--the-library-hosts-itself.md) | where $Chemistry's own branch names SRT |

***The finding worth stating first: the theory has no chapter in the framework's own library.*** Fifteen chapters derive it; **nothing in `package/src` cites it**, and no book on this branch says *this class is that primitive*. [W1](#w1) is the consequence.

---

# PART I — THE PRINCIPLES, read off the code

*Doug's first assignment. Each principle is stated as a law, then grounded in the line that obeys it. **A principle with no citation was not included.***

## The principles that hold everywhere

**<a id="p1"></a>P1 — ONE LEVEL OF REPRESENTATION HAS ONE PRIMITIVE, AND EVERYTHING AT THE LEVEL IS THAT PRIMITIVE.** *The whole derivation is built on this* ([Levels of Closure](../the-semantics-of-books/01-levels-of-closure.md)) — the way everything is a set in set theory. In code it is why `$Writing<P>` is generic in *the level below it* and why a letter composes nothing: [`Writing.tsx:63`](../../package/src/writing/Writing.tsx).

**<a id="p2"></a>P2 — THE `$` PREFIX SEPARATES INTRINSIC IDENTITY FROM EXTRINSIC CONTEXT.** A `$`-prefixed member is a **prop** — writable from outside, reactive, arriving through JSX; the bare getter beside it is the **reading**. `$Theme` is the pattern in its clearest form: eleven `$`-members and eleven plain getters, [`Theme.tsx:15-49`](../../package/src/writing/Theme.tsx). ***And it is why [D42](18-the-theme.md#d42) gets a live toggled theme for free*** — a write to a `$`-member re-renders every view that read it.

**<a id="p3"></a>P3 — `$` IS A COERCION, AND RESOLUTION IS DEPENDENCY INJECTION THROUGH SCOPE.** Four forms, [documented as an algebra](../../../chemistry/.lib/composition/11-the-representative.md): `$($Class)` makes a root component, `$($,Component)` derives a scope, `$(Component)` **resolves what stands here**, `$(A,B)(C)` registers *for A, a B is a C*. **Resolution walks the composition graph upward from the asking instance; the first registration answers.** With nothing registered, `$(X)` returns X — ***so the default is never in a container; it is the argument.***

**<a id="p4"></a>P4 — A DEPENDENCY IS ASKED FOR AT RENDER, NEVER STORED.** *"A field initializer runs once, on the template, before any scope exists"* ([M5](18-the-theme.md#m5)). So `theme` is a getter that resolves, [`Writing.tsx:89-91`](../../package/src/writing/Writing.tsx), and **never a member holding a value.** *This is the law that makes a theme swappable at all.*

**<a id="p5"></a>P5 — THE DEFAULT IS THE ARGUMENT, NOT SOMETHING STORED.** *A framework that configured itself could not be re-dressed from outside* — [`dressing.tsx:8-10`](../../app/src/dressing.tsx) says it in the one file that registers anything. **Remove the registration and the page returns exactly to the default**, which is [what the theme sprint made its unfakeable proof](18-the-theme.md#what-a-hand-authored-page-could-fake-and-what-it-could-not).

**<a id="p6"></a>P6 — LEVEL ALONE DECIDES; NO CLASS NAME APPEARS IN THE WALK.** `level` is a getter, so it is inherited, and *a kind the model has never heard of is handled without the walk being told anything about it* ([The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md#the-parse)). **Inheritance is not a case.** *This is the principle [W4](#w4) breaks.*

**<a id="p7"></a>P7 — THE MODEL SAYS WHAT A THING IS; THE VIEW SAYS HOW IT LOOKS; THE THEME ANSWERS ONLY WHAT WOULD BE INCOHERENT DECIDED ALONE.** Four axes, one owner each, [D34](18-the-theme.md#d34). **The theme names no class, renders no book, returns no markup.** *A strategy that returns the finished rendering is the implementation wearing a smaller name.*

**<a id="p8"></a>P8 — DRAWING IS A TEMPLATE METHOD: ASK, GATHER, SET.** [`Writing.tsx:93-111`](../../package/src/writing/Writing.tsx) — three lines, inherited by every level. **A subclass changes one of the three and inherits the other two**, [D37](18-the-theme.md#d37). *This is the principle [W5](#w5) says is only half-adopted.*

**<a id="p9"></a>P9 — `frame()` WRAPS, `view()` EVOLVES.** Chemistry's own documented seam, [`particle.ts:116-127`](../../../chemistry/package/src/abstraction/particle.ts): the framework calls `frame()`, which renders the *active* view. **A wrap written into `frame()` cannot break a harvest that calls `view()`** — which is exactly why [`$Link`](../../package/src/reference/Link.tsx) is a link without disturbing [`$Document.declaration()`](../../package/src/document/Document.tsx).

**<a id="p10"></a>P10 — A READING IS POST-HOC AND PURE; IT WRITES NOTHING.** *"The parse writes nothing. Not a number, not a role."* Numbers belong to **references** — that is what a `$Location` **is** — never to parts. `parts()` returns a **fresh reading, never held, always compared by value** ([finding 4, closed as law](04-the-member-audit.md)).

**<a id="p11"></a>P11 — EVERYTHING IS SAID IN BOOKS. THE VOCABULARY IS CLOSED.** *"We don't talk about human beings, putting sets and other sets in set theory"* (Doug). **Authorship is computed off catalogue structure, never imported** — which is why `$Book.library` walks subject cards to a fixed point, [`Book.tsx:122-133`](../../package/src/book/Book.tsx), instead of asking anything outside. ***This is the principle every naming wart violates.***

**<a id="p12"></a>P12 — VALIDATION SAYS WHY, IN THE SAME PLACE `$check` SAYS A PARAMETER WAS WRONG.** `$valid(condition, reason)` returns its condition and records the reason, so **no call site moved**. And the rule that comes with it: **never short-circuit in front of a `$valid` call**.

**<a id="p13"></a>P13 — A COMPLAINT TRAVELS; IT DOES NOT STOP THE WALK.** *"A build that reports one fault at a time is a build somebody runs many times"* — [`library.ts:78-84`](../../build/library.ts). **The same instinct as P12, one program over.**

**<a id="p14"></a>P14 — THE SEAM IS A TYPE, NOT A FILE.** Every compiler stage reads [`library.ts`](../../build/library.ts) and never the filesystem, *"which is what lets them be built by different people at the same time."* **There is no serialized intermediate.** ***The single cleanest piece of architecture in the repository.***

**<a id="p15"></a>P15 — A NAME BECOMES A REFERENCE, AND A SILENCE IS FILLED WHERE IT IS KNOWN.** *"A word cannot be followed"* — [`resolve.ts:3-13`](../../build/resolve.ts). **Nothing is written back to the author's file**; the answer lands in the model, and only the generated copy carries it. *This is the compiler obeying [P11](#p11) at build time.*

**<a id="p16"></a>P16 — POSITION ANSWERS FIRST; A DECLARATION ONLY CONFIRMS IT.** What a book belongs to falls out of **where it sits**, and a `.book` declaration overrides. **What a subject holds is not a list the subject keeps** — [`resolve.ts:81-83`](../../build/resolve.ts) — *"which is why nothing has to be maintained in two places."*

**<a id="p17"></a>P17 — ONE DECLARATION PER FILE, AND THE PAIR IS THE CONVENTION.** Every file in `package/src` carries **one class plus its `export const Name = $($Name)`**. *Checked: 51 classes, no violations* — [finding 11, still holding](04-the-member-audit.md).

**<a id="p18"></a>P18 — COUNTING STARTS AT 1; A SPECIAL FIRST — ONE THAT STANDS FOR THE WHOLE — SITS AT 0.** The cover is the book's; the title is the section's. [Closed as lawful](04-the-member-audit.md), and it is [the canonical echoing up the layers](../the-semantics-of-books/06-the-canonical-echo-and-views.md).

**<a id="p19"></a>P19 — A REFERENCE KIND LIVES WITH THE LEVEL IT POINTS INTO.** Generic kinds in `reference/`; the book's own kinds beside the book. **Stated as a rule** in [finding 10](04-the-member-audit.md), which is why `$Author` in `book/` is correct and not a misfile.

**<a id="p20"></a>P20 — THE COMMENTS BELONG IN THE LIBRARY, NOT THE CODE.** *Doug: "DO NOT put comments in the framework code. You have a WHOLE library branch."* **362 lines harvested and removed**, [F10](19-the-binding.md#f10). *This is the principle that is applied in exactly one of the three programs — see [Part II](#part-ii).*

## What the principles add up to

***A composition is the only structure, the canonical is the only distinguished position, a reference is the only way out of a composition, and everything else is a view.*** **That sentence is the whole framework**, and every wart below is a place the code says something else.

---


---

# The registers

*Everything below ran the sprint and is spent. **Each survives as one line with its anchor**, because [the record cites them by identifier](../../../../.claude/library/..librarianship/17-compounding.md) and those links must not break. **The full account of every wart is now [an entry in the Condition Report](../the-condition-report/.cover.md), by kind rather than by number.***

## <a id="part-ii"></a>What was measured — M11–M23

| | |
|---|---|
| <a id="m11"></a>**M11** | The comment policy is applied in ONE of four programs |
| <a id="m12"></a>**M12** | The naming conventions are three different systems |
| <a id="m13"></a>**M13** | `Role` names two unrelated things in two programs |
| <a id="m14"></a>**M14** | `emit` was struck in `lib` and still names a compiler phase |
| <a id="m15"></a>**M15** | The compiler is the better-organized program, and this should be said plainly |
| <a id="m21"></a>**M21** | The framework has five strata, and they are datable |
| <a id="m22"></a>**M22** | What the BEST stratum does, stated as a pattern |
| <a id="m23"></a>**M23** | The rushes are datable, and there are three |
| <a id="m16"></a>**M16** | The demonstration does not typecheck |
| <a id="m17"></a>**M17** | Four of the six errors are the framework taking names the demo already had |
| <a id="m18"></a>**M18** | The other two errors are the framework's own type surface |
| <a id="m19"></a>**M19** | The demonstration spends 1,208 lines drawing, and none of it is reachable |
| <a id="m20"></a>**M20** | The demonstration imports the framework by source path, not by package |

## <a id="part-iii"></a>The warts — W1–W52, found in three passes

***Pass one read every file. Pass two extracted all ~250 member names and judged each. Pass three dated every file with `git`, diffed every member body against every other, and judged the folders*** — *and a fourth instrument came free with the third: [churn predicts faults exactly](../the-condition-report/01-how-to-read-this.md#the-instruments).*

**Two entries keep their full account because other chapters link to them.** *The rest are one line, and their home is [the Condition Report](../the-condition-report/.cover.md).*

| | |
|---|---|
| <a id="w1"></a>**W1** | THE THEORY'S TWO CENTRAL CLASSES DO NOT EXIST, and their absence is why the code triplicates |
| <a id="w2"></a>**W2** | `$Author`, `$Subject` and `$Canonical` are three byte-identical classes |
| <a id="w3"></a>**W3** | The composition surface is hand-forwarded 48 times across 8 files |
| <a id="w4"></a>**W4** | The parse is a hard-coded if-chain, and a consumer cannot add a notation |
| <a id="w5"></a>**W5** | The template method is adopted by half the framework, and the half that skips it cannot be themed |
| <a id="w6"></a>**W6** | 33 inline `style={{}}` objects hold aesthetics the theme cannot reach |
| <a id="w7"></a>**W7** | The framework inspects a theme value and branches on a hex literal |
| <a id="w8"></a>**W8** | `$Document.declaration()` calls `view()` and then rewrites the instance's own view method |
| <a id="w9"></a>**W9** | Nine `try/catch` blocks are load-bearing control flow |
| <a id="w10"></a>**W10** | Every invariant on `$Book` is written twice, in two languages |
| <a id="w11"></a>**W11** | Four flags encode what the class hierarchy or the model already knows |
| <a id="w12"></a>**W12** | The trailing `$` means two different things in one folder |
| <a id="w13"></a>**W13** | The theme's own vocabulary is not book language |
| <a id="w14"></a>**W14** | `shown()` carries a `page` parameter that is always zero |
| <a id="w15"></a>**W15** | `set0` is not a word |
| <a id="w16"></a>**W16** | `$Sentence.letters` and every other `letters` are two different readings |
| <a id="w17"></a>**W17** | `$Word`'s two invariants are denied by both its subclasses |
| <a id="w18"></a>**W18** | `$IndexCard.properties()` decides a card's fields by walking prototypes and guessing |
| <a id="w19"></a>**W19** | `$CardCatalogue` is not a chemical, and `$Literature` is an empty file |
| <a id="w20"></a>**W20** | The framework's global styled-components augmentation breaks any consumer with its own theme |
| <a id="w21"></a>**W21** | 28 dead imports, one self-import, and a 198-line dead file |
| <a id="w22"></a>**W22** | The application freezes the reactive theme at import time |
| <a id="w23"></a>**W23** | The application wraps the book in a second copy of the book's own sheet |
| <a id="w24"></a>**W24** | The registration is written on the framework's own exported root |
| <a id="w25"></a>**W25** | Readings evaluate: chemicals are constructed inside render-time getters |
| <a id="w26"></a>**W26** | `$Subtitle` exists, is constructed, and never reaches the page |
| <a id="w27"></a>**W27** | The table of contents bypasses its own title class |
| <a id="w28"></a>**W28** | `parenthetical` is a reactive pair on writing and a plain field elsewhere |
| <a id="w29"></a>**W29** | Two numbering laws for one concept |
| <a id="w30"></a>**W30** | A BOOK'S CARD AND A BOOK'S CONTENTS DISAGREE ABOUT ITS CHAPTERS, and the card is wrong |
| <a id="w31"></a>**W31** | `$for` means four different things on five classes |
| <a id="w32"></a>**W32** | `mark` names the notation on a paragraph and the accent colour on a theme |
| <a id="w33"></a>**W33** | `$first` is a reference on one class and a character offset on another |
| <a id="w34"></a>**W34** | Two members answer one question, and one of them is a rename that never finished |
| <a id="w35"></a>**W35** | `ref` survived the rename that struck its own folder |
| <a id="w36"></a>**W36** | `$Location.$i` is the only single-letter name in the package |
| <a id="w37"></a>**W37** | A catalogue answers a query by parsing a string micro-language |
| <a id="w38"></a>**W38** | `written` and `printed` are two methods that mean nearly the same thing |
| <a id="w39"></a>**W39** | The compiler has two kind-words for two kinds, and neither is `kind` |
| <a id="w40"></a>**W40** | Past participles and bare nouns stand where book words should |
| <a id="w41"></a>**W41** | `xFor(y)` is a factory convention wearing a book's clothes |
| <a id="w42"></a>**W42** | Five predicates are named for something other than what they test |
| <a id="w43"></a>**W43** | A class file sits three levels above the book that composes it — and the claim first written here was WRONG |
| <a id="w44"></a>**W44** | `$IndexCard extends $Writing` and uses NOT ONE writing member |
| <a id="w45"></a>**W45** | `$Bookmark extends $Sentence`, and a bookmark that parses itself into words |
| <a id="w46"></a>**W46** | `$Code extends $Figure` contradicts the settled account, in the same library |
| <a id="w47"></a>**W47** | `copy` obeys three different laws about parenthetical matter, at three levels |
| <a id="w48"></a>**W48** | `title` is answered three ways, and one of them reimplements half of `canonical` inline |
| <a id="w49"></a>**W49** | `$Book.canonical` and `$Book.ref` are one member under two names |
| <a id="w50"></a>**W50** | Two answers to "what document am I in", one safe and one not |
| <a id="w51"></a>**W51** | The framework hardcodes two English sentences |
| <a id="w52"></a>**W52** | `$Legend.valid()` returns `true`, repealing its parent without saying so |

### <a id="w30"></a>W30 — a book's card and a book's contents disagree about its chapters

***Measured on the standing corpus:*** the card says `["Synopsis", "Symmetry"]`, the contents says `["Symmetry"]`, **on all seven books.** *A book's own synopsis is parenthetical and the contents filters it out; [`catalogue.ts`](../../build/catalogue.ts) counts by position instead — `live.chapters.slice(2, 3 + book.chapters.length)` takes two where it wants one.*

***Doug ruled it a BUG rather than a wart*** — *"it's a bug. And a good one. But it's not a wart in the framework"* — **and it is [filed as one](../solutions/25-the-card-that-listed-a-chapter-the-contents-did-not.md).** *The mechanism, which belongs to the design, is [I21 in the report](../the-condition-report/05-implementation.md#i21).*

### <a id="w43"></a>W43 — CORRECTED: the claim written here first was wrong

***This entry first said [`sections/the-manifold.tsx`](../../package/app/src/sections/the-manifold.tsx) was a 705-line orphan imported by nothing, and called it the audit's worst finding. It is not an orphan.*** *`sections/book/library/the-manifold/book.tsx:4` imports `$TheManifold` from `'../../../the-manifold'`.*

**The search that produced the wrong claim looked for `'./the-manifold'` and `'../the-manifold'` and never for three levels up** — ***a grep written from a guess about the specifier, reported as a measurement***, and [filed as its own defect](../solutions/24-the-orphan-that-was-not-an-orphan.md). **The real fault is placement and it is [O5 in the report](../the-condition-report/02-organization.md#o5).**

## <a id="part-vi"></a>The naming register — a stub

*~250 member names were extracted and judged one by one. **31 do not fit and 6 collide**, against a large majority that do.* ***It lives in full at [Names](../the-condition-report/03-names.md)***, which opens with the names that FIT so the standard is visible before the faults, and closes on the pattern that is the finding rather than the count: **almost every misfit sits at a boundary — where the code talks about books it uses book words, and where it talks about ITSELF it reaches for the nearest programming word.**

## <a id="part-vii"></a>The strata and the organization — a stub

*The framework has **five datable strata** and **three rushes**, and the 2026-07-31 writing spine is the best code in it — no flags, no duplication, and **no `view()` at all until 2026-08-19**.* ***In full at [How to Read This](../the-condition-report/01-how-to-read-this.md#the-strata) and [Organization](../the-condition-report/02-organization.md).***

## <a id="part-iv"></a>The theme, and what would unify the framework — a stub

*Superseded by the rulings. **The theme did not need to grow — the DRAWING needed to become reachable***, and a class's look becomes a held component injectable by prop, by subclass and by scope. *In full at [I2](../the-condition-report/05-implementation.md#i2) and [P12](../the-condition-report/06-the-cleaning.md#actionable).*

## <a id="part-v"></a>The demo — a stub, and out of scope

*The demonstration did not typecheck — 6 unexpected errors against a framework that was 336/336 green — and four of the six were the framework taking names the demo already had.* ***Doug later scoped the audit to `lib` and the compiler***, so the demonstration's entries are [out of scope](../the-condition-report/01-how-to-read-this.md#the-scope) with their identifiers kept.

## <a id="the-requirements"></a>The requirements — R91–R104

| | |
|---|---|
| <a id="r91"></a>**R91** | "Everything is a referent." Nothing in the package is a class the model cannot point at, draw, or resolve. |
| <a id="r92"></a>**R92** | "It is absolutely essential that the composition interface is implemented correctly." Composition is a class wherever single inheritance reaches it, a |
| <a id="r93"></a>**R93** | "That referential relationships make sense." Kinds that [differ only by validation](../the-semantics-of-books/03-inheritance-and-composition.md) are o |
| <a id="r94"></a>**R94** | "Keeps the members of the classes almost entirely focused on the semantics of what they represent and not what they look like." |
| <a id="r95"></a>**R95** | "`$` for dependency injection… push dependencies at various levels." A class's look is injectable three ways — at the call site, by subclass, by scope |
| <a id="r96"></a>**R96** | A consumer keeps their own theme. The framework declares nothing global about anyone else's types. |
| <a id="r97"></a>**R97** | Every shared aesthetic decision is in the theme. No class holds a weight, a tracking or a leading the theme cannot reach. |
| <a id="r98"></a>**R98** | "The chapter theme contains a reference to the book theme… subclass both and lower their types in the subclasses." |
| <a id="r99"></a>**R99** | The demonstration typechecks and looks unchanged on screen. |
| <a id="r100"></a>**R100** | "Look for names that don't fit!!" Every name in the [register](../the-condition-report/03-names.md) is struck, replaced, or standing as a fla |
| <a id="r101"></a>**R101** | The reasoning lives in one stated place per program. |
| <a id="r102"></a>**R102** | Nothing regresses. `CHECK` identical, the suite green, the drivers' checkpoints held. |
| <a id="r103"></a>**R103** | "Sometimes there are aspects of the code which aren't even in use, yet we have implemented them because it is important that we support the semantics  |
| <a id="r104"></a>**R104** | "Can we find certain use cases where we don't know how to implement the UI pattern that we want?" The ones we cannot reach are named, not quietly omit |

## <a id="the-units"></a>The units — U82–U108

| | |
|---|---|
| <a id="u82"></a>**U82** | the theme is a transient prop |
| <a id="u83"></a>**U83** | the three identical classes become one |
| <a id="u84"></a>**U84** | every class that draws holds its look as a component |
| <a id="u85"></a>**U85** | the theme answers for type |
| <a id="u86"></a>**U86** | three flags come out |
| <a id="u87"></a>**U87** | a book states each invariant once |
| <a id="u88"></a>**U88** | the injection routes are demonstrated |
| <a id="u89"></a>**U89** | composition is a class where single inheritance reaches it |
| <a id="u91"></a>**U91** | everything in the package is a referent |
| <a id="u92"></a>**U92** | the dead goes and the semantic stays |
| <a id="u93"></a>**U93** | the subtitle and the contents heading reach the page through their own classes |
| <a id="u94"></a>**U94** | the compiler takes the two rulings it missed |
| <a id="u95"></a>**U95** | the demonstration stops fighting |
| <a id="u96"></a>**U96** | nothing regressed |
| <a id="u101"></a>**U101** | the card asks the book instead of counting it |
| <a id="u102"></a>**U102** | the six collisions are renamed |
| <a id="u103"></a>**U103** | the thirty-one misfits are struck or stand flagged |
| <a id="u104"></a>**U104** | the dead is swept and the misfiled is moved |
| <a id="u105"></a>**U105** | the two category errors are re-parented |
| <a id="u106"></a>**U106** | the random duplications are collapsed |
| <a id="u107"></a>**U107** | the two English sentences leave the framework |
| <a id="u108"></a>**U108** | the applications get an organization |
| <a id="u90"></a>**U90** | how themes compose and narrow across levels — [R98](#r98) |
| <a id="u97"></a>**U97** | `$Composition<T>` where a host is also a reference |
| <a id="u98"></a>**U98** | how a consumer adds a notation — [W4](#w4) |
| <a id="u99"></a>**U99** | what `$mark` becomes — [D59](#d59) |
| <a id="u100"></a>**U100** | where the reasoning lives — [R101](#r101), [Q1](#q1) |

## <a id="the-decisions"></a>The decisions — D53–D61

| | |
|---|---|
| <a id="d53"></a>**D53** | THE THEME IS HANDED AS A TRANSIENT PROP, AND THE GLOBAL `DefaultTheme` AUGMENTATION IS DELETED. |
| <a id="d54"></a>**D54** | A CLASS'S LOOK IS A HELD COMPONENT, AND IT IS INJECTABLE AT THREE LEVELS. |
| <a id="d55"></a>**D55** | THE THEME GAINS ONE MEMBER FOR TYPE, AND IT IS A PROXY. |
| <a id="d56"></a>**D56** | THE THREE IDENTICAL CLASSES COLLAPSE ONTO ONE WORD-GRADE REFERENCE, AND ITS NAME IS AN INCUMBENT. |
| <a id="d57"></a>**D57** | `$Composition<T>` AS A GENERAL CLASS IS DESIGN OWED, AND THE REASON IS SINGLE INHERITANCE. |
| <a id="d58"></a>**D58** | THE COMPOSED THEME HIERARCHY IS DESIGN OWED, AND THERE ARE TWO CANDIDATE MECHANISMS. |
| <a id="d59"></a>**D59** | `$mark` IS THE ONE FLAG THAT IS NOT A CLEANUP, AND IT IS DOUG'S. |
| <a id="d60"></a>**D60** | UNUSED IS NOT THE TEST; MEANINGLESS IS. |
| <a id="d61"></a>**D61** | THE COMPILER'S NAMING FIXES RIDE ALONG; ITS COMMENTS DO NOT. |

## <a id="acceptance"></a>Acceptance examples · <a id="scenarios"></a>test scenarios · <a id="risks"></a>risks · <a id="origin"></a>origin tracing · <a id="the-size"></a>the size · <a id="design-owed"></a>design owed — stubs

*All stood here at full weight and are spent. **The work they described is now [the 23 problems](../the-condition-report/06-the-cleaning.md#actionable)**, each carrying the ruling that settled it — which is the only form of them a next sprint reads.*

## <a id="the-rulings-owed"></a>The questions asked, and answered — <a id="q1"></a>Q1–<a id="q5"></a>Q5 and after

***Twenty-three questions were put to Doug across four batches, and every one is [recorded in the entry it settled](../the-condition-report/.cover.md).*** *Four of them should never have been asked — the library already held the answers — and [that is this sprint's compounded lesson](../../../../.claude/library/our-skillset/33-ce-review.md#a-question-the-library-answers-is-not-a-question).*

## <a id="what-we-cannot-yet-do"></a>What we do not know how to implement

**Four, each blocked at a named place:** *a consumer adding a notation; a reference form that is also a composition; a theme that narrows its own members; a compiled book that is a subclass.* ***None is a missing feature — each is a place the abstraction has not been carried far enough.*** *In full at [design owed](../the-condition-report/06-the-cleaning.md#actionable).*

## <a id="what-the-third-pass-says"></a>What the whole audit says, in one sentence

***The framework was not designed badly. The parts designed in July and the parts written in the last two weeks are held to different standards, and nothing in the process noticed*** — **because every gate this branch runs is a count, and [a count cannot see a dead file, a copied class, or a word that means two things](../the-condition-report/01-how-to-read-this.md#why-no-gate).**

---

# Where things stand

*One state, written 2026-08-23 at the session's close.*

## What this sprint produced

| | |
|---|---|
| ***[The Condition Report](../the-condition-report/.cover.md)*** | **a new book, 7 chapters** — the standing register of the code's faults, by kind |
| **entries** | **91 written · 10 out of scope · 20 ruled or closed · [23 problems for the next sprint](../the-condition-report/06-the-cleaning.md#actionable)** |
| **two defects filed** | [the orphan that was not an orphan](../solutions/24-the-orphan-that-was-not-an-orphan.md) · [the card that listed a chapter the contents did not](../solutions/25-the-card-that-listed-a-chapter-the-contents-did-not.md) |
| **two design chapters** | [The Live Library](../designing-inexplicable-phenomena/05-the-live-library.md) · [The Back of the Page](../designing-inexplicable-phenomena/06-the-back-of-the-page.md) |
| **one lesson compounded** | [a question the library answers is not a question](../../../../.claude/library/our-skillset/33-ce-review.md#a-question-the-library-answers-is-not-a-question) |
| ***code changed*** | ***none*** |

## Vocabulary struck this sprint

| struck | say instead |
|---|---|
| ***law*** | **a specification** · **validation**, its enforcement · **a rule** |
| ***climb*** | **a computed property** — *jargon invented for the team and not in the semantics of books* |
| ***mark***, on `$Theme` | ***`$accent`*** — Doug's own word |

*341 uses of **law** and 55 of **climb** were purged by sense across this branch library; zero remain. **93 uses of *law* remain in the team library** and are the one piece of that work still owed.*

## Verified fresh at the close

*framework suite **336/336** in 30 files · `tsc` **0** · `tsc --noUnusedLocals` **28 dead imports** · demonstration `typecheck` **FAIL, 6 unexpected** · `style={{` **33** · forwarding **48 calls / 230 lines** · statics and module-level in `lib` **16** · comment lines in `package/src` **1**.*

## → NEXT

***The next sprint is [Semantics, Then Drawing](21-semantics-then-drawing.md)***, opened at this session's close and carrying **[the 23 problems as R105–R127](21-semantics-then-drawing.md#requirements), approved.** *It opens on [`/ce-plan`](../../../../.claude/library/our-skillset/29-ce-plan.md).*
