# The Theme

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-19 as a brainstorm. **Status: `implementation-ready`.** The plan enriched this same chapter in place rather than starting a second document.*

*The name is **Doug's own**: "creating the `$Theme` in the writing folder." Standing for correction like every proxy on this branch.*

**Identifiers continue from [Custom Elements](17-custom-elements.md).** Requirements begin at **R56**, acceptance examples at **AE36**, units at **U50**, decisions at **D34**.

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## How this sprint came to be — a page that works and says nothing

**The compiler was driven end to end and the application was opened**, and the verdict was one word:

> *Doug, 2026-08-19: **"Welp, it's a nightmare so far! I definitely can't tell if it's working correctly… I can't tell what anything is."***

***And every gate was green while he said it.*** Four phases, 7/7 books standing, 29/29 checkpoints, zero console errors. **The machine was correct and the page was unreadable**, which is a class of failure no number on this branch can produce.

---

# What was measured, and it is why this sprint is shaped the way it is

*Five probes, run 2026-08-19, each answering one question. **Two of them overturned what this chapter was going to say.***

## <a id="m1"></a>M1 — Not one of the classes that carries meaning draws itself

`$Title`, `$Subtitle`, `$Cover`, `$Synopsis`, `$Author` and `$Subject` **declare no `view()` at all.** They inherit [`$Writing.view()`](../../package/src/writing/Writing.tsx):

```tsx
view(): ReactNode {
    return React.createElement($(this.text) as any);
}
```

**Bare text.** So a title, an author's name and a sentence of prose emit indistinguishable output, and the model's distinctions never reach the page.

***The counter-example is on the same screen.*** [`$TableOfContents`](../../package/src/book/TableOfContents.tsx) does override `view()` and draws a heading and an `<ol>` — and it is the one thing on that page a reader can identify. **The class that draws itself is the class you can see.**

## <a id="m2"></a>M2 — Writing draws its SOURCE, never its parts

`$Section.view()` is `super.view()`; `$Paragraph`, `$Sentence` and `$Word` do not override `view()` at all. **Every `view()` found by grep across the writing belongs to the `$$` reference forms**, not to the writing itself.

**Measured in one render**, on a chapter whose prose carries a markdown heading:

| | drew |
|---|---|
| the table of contents | `Found By The Parse` — **read from the model** |
| the page | `# Found By The Parse` — **read from the source** |

***The hash is in the DOM.*** So the parse and the page are two different readings of one writing, and only one of them is on screen. **Everything Custom Elements rescued from the parse is invisible.**

## <a id="m3"></a>M3 — `$` registration DOES reach the parse

*This overturned the first draft of this chapter, which had recorded a reach failure.*

```
UNREGISTERED   section parts:  $Title,  $Paragraph
REGISTERED     section parts:  $Marked, $Paragraph
```

**A registration made on a section replaced the class the parse composes.** The earlier zero was measured on the DOM, which cannot tell *did not resolve* apart from *resolved and was never drawn* — and the cause was [M2](#m2). ***A probe reported on the drawing and was read as a report on resolution.***

## <a id="m4"></a>M4 — A registration substitutes what the parse BUILDS, never what an author WROTE

```
BASELINE     titles: 5   of them substituted: 0
ON THE BOOK  titles: 5   of them substituted: 1
             classes: $Title, $Title, $Title, $Marked, $Title
```

**A registration on the book reaches two levels down**, and catches **exactly the title the parse built**. The four an author wrote as `<Title>` come through untouched — correctly, because a written element enters as itself and there is nothing to resolve.

***This is the finding that decides the whole design.*** **A theme cannot be delivered by substituting writing classes**, because it would dress the found half of the page and miss the written half. It has to be a separate thing each class **asks for**, since a written `<Title>` still runs `$Title.view()` and a `view()` can ask.

## <a id="m5"></a>M5 — A theme cannot be a stored field

[The Representative](../../../chemistry/.lib/composition/11-the-representative.md) states it and the reason is structural: ***"a field initializer runs once, on the template, before any scope exists"*** — so an ask written as a field could not resolve correctly. **"All writing has a theme" is a question asked in `view()`, never a member holding a value.**

## <a id="m6"></a>M6 — What drawing every level would cost, counted

**The seven-book test corpus:**

| | |
|---|---|
| chapters · sections | 34 · 67 |
| paragraphs · sentences | 158 · 233 |
| words · **letters** | 1,293 · **5,881** |

**7,666 elements if every level drew its parts, and 5,881 of them single letters.** *So "draw the parts" cannot be the general rule, and this number is why [R57](#r57) is conditional rather than universal.*

---

# Doug's rulings — 2026-08-19, verbatim

- **THE SCOPE.** *"Why don't we devote this sprint to creating the `$Theme` in the writing folder, and imagine that all writing has a theme. And see if you can define the first version of a most basic theme that can be extended, in the future, to be the thing that all parts of the book use, **with `$` registration meant to deliver it**."*

- **AND DRAWING COMES WITH IT.** *"**The theme is meaningless without drawing.** The answer is to have a default version of the view for each of the elements. **Not literally every element needs one, though maybe most should. Think intelligently.** We want it to be possible to override everything. **Books need to be completely restylable**, so whatever we choose, it should be **minimal and helpful**."*

- **THE TARGET, AS AN ANALOGY.** *"Think about how **wikipedia is like essential web styling**… Can we have an effectively unstyled version of the book, or a form of styling where **the styles are truly atomic and overridable**?"* ***An analogy, and it is taken as one:*** the general form is **the default is a document rather than a design**.

- **THE SHAPES TO REACH FOR.** *"Remember that a property with a styled component can be overridden right? Remember that **the template method pattern** works well."*

- **AND THE STANDING INSTRUCTION THAT GOVERNS HOW ALL OF THE ABOVE IS READ.** *"**Always take what I say as providing examples and ideas to begin thoughts.**"* ***So every noun in this section is an instance of a shape, and the shape is what this chapter designs against.*** *`$Theme` is the name he gave and it is used; whether the thing is one object or several is [owed](#names-owed).*

## The vocabulary ruling this session also produced

*Doug: **"I don't know what the writing ladder is. Purge that from the semantics and ask again."*** **Then, pushed on the replacement:**

> *"**Level of representation.** Representation doesn't need to be one-dimensional. Referential versus literal is a step in a direction that might be taken to be a level. This is a **compositional representation**. GEB covers the idea of moving through levels in a hierarchy through the idea of a strange loop… the type of representation that we are referring to which has these levels is a composition, which happens to be a type of writing."*

**So there are two dimensions and a step along either is a level of representation** — and the objection raised against the phrase dissolved under it. *The objection was that `$$Sentence extends $Word` while standing for a sentence, so it occupies the same compositional position and a different referential one. Under one axis that is a collision; under two it is the model working.* **The word was purged — 49 replacements across both libraries, by sense — and the replacement is *levels*, meaning levels of representation on the compositional dimension.**

***And the floor grounds itself on one dimension and terminates on the other***, which answers a question asked in the same exchange: [`$Letter.ref`](../../package/src/writing/Letter.tsx) returns `this` — the self-returning fixed point, on the referential dimension — while `parts()` returns `[]`, because a leaf composes nothing. *[`read()` was dropped from the floor in Cataloguing](14-cataloguing.md); `ref` survived.*

---

# What this needs to be

## The boundary

**The writing draws itself, and what it looks like is asked for rather than built in.** Nothing else opens: the compiler is untouched, the application keeps its own look, the corpus is unchanged, and the parse is not redesigned.

## The actors

*Compacted at the close of the sprint — the actors are the classes the units name.*

## The key flows

*Compacted at the close of the sprint — the flows are what the sprint built; the units above name them.*

## The requirements — a register

*The requirements ran the sprint at full weight and are spent now that every one of them is built and driven. **Each survives as one line with its anchor**, because [the record cites them by identifier](../../../../.claude/library/..librarianship/17-compounding.md) and those links must not break.*

| | |
|---|---|
| <a id="r56"></a>**R56** | each kind of writing has a default `view()`, semantic rather than styled — *amended twice: five classes already drew, and the markup on them went* |
| <a id="r57"></a>**R57** | a level draws its PARTS where they can differ in kind and its TEXT where they cannot — **and that is the base theme's answer, not a rule in a class** |
| <a id="r58"></a>**R58** | a written element and a found one draw the same way, or the last sprint is undone on the page |
| <a id="r59"></a>**R59** | all writing asks a theme and nothing stores one |
| <a id="r60"></a>**R60** | the theme is resolved through the container and registered on a scope |
| <a id="r61"></a>**R61** | overriding one thing costs one thing — *and it gained a second route: change a value and everything reading it moves* |
| <a id="r62"></a>**R62** | one registration restyles a whole book, written and found alike |
| <a id="r63"></a>**R63** | the default carries no aesthetic opinion — semantic elements, no stylesheet |
| <a id="r64"></a>**R64** | nothing regresses, and the counts say so — **158 · 233 · 1,293 · 5,881, identical** |

## <a id="acceptance-examples"></a>Acceptance examples — a register

*Every one ran. **AE36** `#` gone from the DOM · **AE37** legible with the app's stylesheet removed · **AE38** written and found drawing alike · **AE39** one book, two themes, the second paginating · **AE40** a subclass changing one method · **AE41** `CHECK` unchanged · **AE42** the demo unchanged on screen · **AE43** no stored theme member.*

## What a hand-authored page could fake, and what it could not

**A styled page can be faked with a stylesheet.** So can a heading, and so can a legible screenshot.

***What cannot be faked is two books drawn from one corpus, differing only by a registration.*** A hardcoded stylesheet cannot produce two, and a page whose structure lives only in its source has nothing for a registration to reach. **The proof is the pair, not either one.**

***And the second unfakeable thing is the negative:*** remove the registration and the page returns **exactly** to the default, because the default is the argument rather than something stored.

## Out of scope, named so it is not drifted into

- **The application's own look.** It keeps its stylesheet; this is the framework's default beneath it.
- **The demo's aesthetics.** [R13](15-the-build.md#r13--the-book-gets-its-own-aesthetic-world) governs demonstrations and is untouched.
- **The parse.** Not redesigned, not re-tuned, and its counts must not move — [R64](#r64).
- **A section that composes letters directly.** *Raised in the same conversation and real:* the levels are a **default of prose** while the framework's own accessors treat them as a **specification** — `sections → paragraphs → sentences → words → letters` is a hand-written chain of `flatMap`s. **A genuine inconsistency, recorded and not taken.**
- **One copy of the framework.** Still two, still costing, still [the cheapest unpaid debt](../solutions/05-the-suite-that-passed-against-a-stale-build.md).
- **The parse in the draw path with no cache.** ***This sprint makes drawing do more work, so the absent cache gets closer rather than further away.*** Named here for the third time.
- **The compiler audit** — architecture, organization and naming at parity with $Chemistry and lib. **Doug's, ruled this session, and deferred behind seeing something legible.**

## <a id="names-owed"></a>Names owed — one taken, two flagged

- **`$Theme`** — **Doug's own word**, used as given.
- **What a theme ANSWERS** — class names, components, values, or a method per element — was open here and **is settled in the plan at [D34](#d34): VALUES WITH JOBS, and it knows no component.** *It took two overturns by Doug to get there, and both are recorded rather than smoothed over.*
- **Whether it is one object or several.** *"All parts of the book use it"* suggests one; nothing has proven that, and it is [still owed at the plan's close](#names-owed-plan).
- **The three proxies still standing** are unchanged: *The Build* twice, and *fixture*.

---

# The plan — guardrails, not choreography

*Written 2026-08-19. **Status: `implementation-ready`.** [WHAT, not HOW](../../../../.claude/library/our-skillset/29-ce-plan.md) — no signatures, no shell sequences, no pseudo-code dressed as specification. **Unit identifiers continue from [Custom Elements](17-custom-elements.md), which reached U49.***

## The size of the work, measured before it was divided

***It is not divided.*** **One session.** *[The specification is the plan step's](../../../../.claude/library/our-skillset/29-ce-plan.md#a-dispatch-is-checked-against-the-size-of-the-work--added-out-of-the-build): a division whose parts are smaller than their briefs is one session — and this measurement says so twice over.*

**THE FRAMEWORK'S ENTIRE DRAWING IS 108 LINES ACROSS 17 `view()` METHODS.** *Counted, not estimated — every `view()` in `writing/`, `book/`, `document/`, `library/` and `reference/`, measured from its declaration to its close.*

| | lines |
|---|---|
| `$Chapter` | 12 |
| `$Section` · `$Paragraph` · `$Sentence` · `$TableOfContents` | 10 each |
| `$Figure` | 8 |
| `$Word` · `$Denote` | 7 |
| `$Document` · `$Book` | 6 |
| `$Legend` | 4 |
| `$Writing` · `$Path` · `$Location` · `$IndexCard` · `$Key` | 3 each |
| **total** | **108** |

***And here is the same measurement from the other side, which is the sprint's whole argument in two numbers:***

| | lines of drawing |
|---|---|
| **the framework, all of it** | **108** |
| [`the-team`](../../.archive/app/src/sections/book/library/the-team/book.tsx), **one book** | **166**, plus **337** styled |
| [`the-manifold`](../../.archive/app/src/sections/the-manifold.tsx), **one book** | **705** |

***Two demo books spend 1,208 lines drawing. The framework they stand on spends 108 — and not one of those 1,208 is reachable by anything else.*** **That is [the brittleness](#where-the-brittleness-actually-is) as a number rather than a worry**, and it is also why this sprint is small: **the surface being changed is 108 lines, not 1,648.**

**The files, and what each is actually in for:**

| | files | why it is small |
|---|---|---|
| **the theme** | 1 new | three members and their base answers |
| **the template** | `Writing.tsx` (101 lines today) | one method, inherited by every level |
| **the four levels** | `Section` · `Paragraph` · `Sentence` · `Word` | **their bulk is `parts()`, which [D39](#the-decisions) forbids touching** — 326 lines in `Section` and the drawing is 10 |
| **the eight that gain a drawing** | `Title` 13 · `Subtitle` 10 · `Tagline` 10 · `Cover` 45 · `Synopsis` 18 · `Author` 33 · `Subject` 33 · `Canonical` 33 | ***seven of the eight are under 45 lines whole*** |
| **the seven losing markup** | `Book` · `TableOfContents` · `Figure` · `Code` · `Legend` · `Denote` · `Document` | a subtraction, not a rewrite |
| **the demonstration** | the demo | [U56](#u56) |

***Nothing here is larger than its own brief***, which is the test the specification states.

## What was measured with the code open, and one of it amends a requirement

**1 — THE FRAMEWORK ALREADY HAS A VOCABULARY, and it is ad hoc.** Eight `className` strings across seven files: `chapter`, `section`, `figure`, `legend`, `mark`, `table-of-contents`, `contents-title`. ***So naming what a thing is on the page is the incumbent practice rather than a proposal*** — what is missing is that it is unsystematic, partial, and unreachable from outside.

**2 — THE DEMO'S BOOKS RESTYLE BY SUBCLASSING THE BOOK ENTIRELY.** [`$TheTeam extends $Book`](../../.archive/app/src/sections/book/library/the-team/book.tsx) overrides drawing wholesale and imports fourteen styled-components of its own — `Manuscript`, `Masthead`, `Spread`, `Margin`, `Folio`, `Turn`, `Leaf`. **That route must keep working untouched**, and it is the reason the default has to sit *beneath* the demo rather than beside it.

**3 — `$Section.view()` ANSWERS `null` FOR A PARENTHETICAL SECTION.** A summary is written and deliberately not drawn. ***Any change to how a section draws has to keep that***, and it is the kind of thing a rewrite loses silently.

**4 — AMENDING [R56](#r56): `$Figure`, `$Code`, `$TableOfContents`, `$Legend` and `$Denote` ALREADY DRAW THEMSELVES.** The requirement said each kind of writing gains a default view; five already have one. **They are not rewritten — they adopt the vocabulary**, which is a smaller act and keeps five working drawings unchanged. *Raised rather than built around.*

## <a id="the-standing-rule"></a>THE STANDING RULE — the twenty are a test, not a backlog

*Doug, 2026-08-20: **"I don't need all use cases to be present. I need you to SEE how they would be implemented. We can't be boxed out from evolution… the planning for future use cases is not about supporting them, but about coming up with a plan for many use cases so you can imagine what someone would have to do to implement such a thing and see that they don't have to fight the framework."***

***Confirmed, and it governs everything below.*** **Nothing is built for any of [the twenty](#twenty).** Each one asks exactly one question — ***what would someone have to do?*** — and the only acceptable answer is **ordinary work in the obvious place**. **A route that requires fighting the framework is a defect in this design, not a missing feature.**

*So the deliverable of the analysis is a **responsibility split**, and the twenty are how it is tested.*

## <a id="twenty"></a>Twenty ways to extend a book, and the route to each

*Doug, 2026-08-20: **"Come up with 20 different ways one might want to extend the interface of a book. Look at the code and ask yourself how that might be done with the system you are creating. Look for the most fundamental ways… I am worried that you are making a fundamentally brittle system."*** **He was right to worry, and this section is the check.**

***The first design was a stylesheet in an object*** — colours and families — **and it would not have helped the one unusual book this repository already has.** [`$TheTeam`](../../.archive/app/src/sections/book/library/the-team/book.tsx) hand-writes **pagination, a masthead, a contents margin, a card slip and a facing-page spread** across roughly 150 lines of `view()`, and **not one line of it is reachable by any other book.** *A colour theme would have changed nothing about that page.*

**So the twenty are written against the code, and each names what it would actually take.**

| | the book looks like | the route | what it needs |
|---|---|---|---|
| 1 | **one chapter at a time**, turned | something decides which chapters are present, and something holds where the reader is | **selection** |
| 2 | **facing pages** — a spread | the present chapters are placed two across instead of one down | **arrangement** |
| 3 | **an open-source landing page** — hero, features, a call to action | the book arranges its chapters as panels; each chapter draws as a panel rather than as prose | **arrangement** · registration |
| 4 | **GitHub** — a file tree beside content, tabs, a breadcrumb, a canonical README | chrome around the whole; tabs are a selection; the tree is the subject's own entries | **frame** · **selection** |
| 5 | **the library specification itself**, its chapters being the affordances | a chapter subclass that draws as a control, registered for that book | registration |
| 6 | **an interactive textbook** — one equation shown as formula, plot, table or simulation | the formula class can draw four ways; **which way is a decision every equation must agree on** | **values** |
| 7 | **a wiki** — every chapter carrying a discussion beside it | something accompanies each chapter **without any chapter class knowing** | **apparatus** |
| 8 | **margin notes** instead of foot-of-page notes | a note class registered, and its **placement** decided by the book | **arrangement** · registration |
| 9 | **a slide deck** — a section per slide, advanced by key | one section present, filling the frame, moved by a key | **selection** · **arrangement** · **frame** |
| 10 | **a deck of cards** rather than prose | every chapter draws as a card — one registration, at whatever scope it should hold for | registration |
| 11 | **a shelf of spines** | ***already built*** — the demo's shelf | *(exists)* |
| 12 | **search-first** — a query, then results, no linear reading | **selection is a function of a query**, not a fixed rule | **selection** |
| 13 | **a reader's annotations** layered over the writing | something accompanies a *word or a sentence*, not a chapter | **apparatus**, at any grade |
| 14 | **a two-column academic paper** | arrangement, plus a frame that knows about a printed page | **arrangement** · **frame** |
| 15 | **a timeline** — chapters placed by date | arrangement that **reads a value off each part** rather than ordering them by position | **arrangement** |
| 16 | **an atlas** — chapters as nodes, references as edges | ***already built*** — [`$TheManifold extends $Book`](../../.archive/app/src/sections/the-manifold.tsx), wholesale | *(exists)* |
| 17 | **two books compared side by side** | two scopes, arranged across | **arrangement** · registration |
| 18 | **a reading ribbon** — where you left off, always visible | something accompanies the whole, and reads state | **apparatus** · **frame** |
| 19 | **dark, or printed** | the same structure, different values | **values** |
| 20 | **a book of code** — files as chapters, syntax coloured, line anchors | a chapter subclass registered for that book | registration |
| 21 | **a dialogue** — turns and speakers | a rendition per turn, and a speaker beside it | registration · **apparatus** |
| 22 | **a form** — fields, validation, submission | a rendition per part, and state | registration |

## What the twenty reduce to, and why it is not brittle

***Five things, and the first design carried one of them.***

| | what it answers | which of the twenty need it |
|---|---|---|
| **FRAME** | what the whole sits inside | 4 · 9 · 14 · 18 |
| **SELECTION** | which parts are present, given where the reader is | 1 · 4 · 9 · 12 |
| **ARRANGEMENT** | how the present parts are placed | 2 · 3 · 8 · 9 · 14 · 15 · 17 |
| **APPARATUS** | what accompanies a part, **without the part knowing** | 7 · 8 · 13 · 18 · 21 |
| **VALUES** | what many components must agree on | 6 · 19 |

***And the rest is registration***, which already exists and needs nothing: a class draws itself differently, and a scope says where that holds.

## The shape this forces, and it is smaller than the list

**Every level of a book already does the same thing: it draws its parts.** So the four that are not values are not four questions about a *book* — **they are four questions about a composition**, and every level is one:

```
draw:   my parts  →  SELECT which are present  →  ARRANGE them  →  each draws itself,
                                                                    with any APPARATUS beside it
```

***That is one template method, shared by every level***, and it is why the surface is small. **A theme that overrides how things are arranged changes every level of every book beneath its scope.** One that overrides it only where the parts are chapters changes the book and leaves the prose alone. **The theme never names a class to do either** — it answers about *a composition and its parts*, which is the only thing the framework has.

**And the theme is a component**, so **the frame is the theme drawing**: it renders, and what it contains is the book.

## The brittleness test, stated so it can be failed

***A system is brittle here if a new kind of book requires changing the framework.*** **Under this surface, none of the twenty does.**

- **Fourteen** are a theme subclass — selection, arrangement, apparatus, values.
- **Eight** are a class registered on a scope, which is [already built and measured](#m3).
- **Two already exist**, and both took the wholesale route.
- ***And the wholesale route survives untouched***: [`$TheManifold`](../../.archive/app/src/sections/the-manifold.tsx) and [`$TheTeam`](../../.archive/app/src/sections/book/library/the-team/book.tsx) override `view()` entirely and must keep working. **The theme is the shortcut for what is cross-cutting; the escape hatch is not removed.**

***What this design deliberately does NOT do is support any of the twenty.*** *Doug: "You don't need to support these. You shouldn't. But you need to see a route to implementing them."* **The route is the deliverable; the base theme is the smallest thing that makes the route real.**

## <a id="responsibilities"></a>The responsibilities, and the mistake that made this section necessary

*Doug, 2026-08-20: **"You aren't implementing the UI in the theme… The theme DRIVES the implementation, right? The view of each component."***

***The previous design had the theme selecting parts and arranging them — which is the theme rendering the book.*** **That is the Strategy pattern's oldest trap: a strategy that returns the rendering is not a strategy, it is the implementation wearing a smaller name.** *The theme must answer; the view must implement.*

**Four axes vary, and each has exactly one owner.**

| axis | what varies | owned by | and it never |
|---|---|---|---|
| **1 · what exists** | what a book IS — its chapters, its parts, its validity | **the model** | decides anything about appearance |
| **2 · which class stands for a thing** | `$Title` or somebody's `$Title` | **registration**, `$(Scope,X)(Y)` — [built and measured](#m3) | changes how a class draws |
| **3 · how a thing draws** | the element, the structure, where its parts and its matter go | **that class's `view()`** | hard-code a decision it must share with others |
| **4 · the decisions many views must share** | how parts lay out, whether unread matter is read, the values | **the theme** | render anything, name any class, or return a book's markup |

***Axis 4 is the whole of the theme, and it is small by construction:*** it holds only what would be **incoherent if each view decided it alone**. *A book, a section and a paragraph laying out by different rules **by accident** is the failure it exists to prevent — and that is the entire test for whether something belongs in it.*

## <a id="research-responsibility"></a>What the research says about this split — ten systems, and two of them are the same problem exactly

*Doug: **"Do so much research. Really learn how to be professional software engineers."***

**Two are this problem, in this domain, already solved:**

- **LaTeX document classes.** `\documentclass{book}` against `{article}` against `{beamer}` **changes pagination, sectioning, running heads and layout without touching a line of content** — which is [route 1](#twenty), shipped in 1985. ***And the split is exact:*** the **class** sets parameters and says how sectioning commands expand; the **engine** renders; the **body** is untouched. *A document class does not typeset anything.*
- **CSS.** ***The most instructive system here and the reason is what it does NOT do:*** a stylesheet **never says "a heading is drawn like this."** It says **these properties hold here**, and the element decides what to do with them. **Properties are general, elements are specific, and the cascade branches** — which is Axis 4, Axis 3 and scope, named three different ways.

**Two are the trap:**

- **Strategy (GoF).** An algorithm made interchangeable — ***and its failure mode is exactly the one Doug caught***: when the strategy returns the finished product, the host has no work left and the strategy has become the implementation.
- **Swing's Pluggable Look and Feel.** A `JComponent` delegates drawing to a `ComponentUI` supplied by the look-and-feel — **per-component delegates**, plus a `UIDefaults` table of general values. ***Two layers, and Doug's instruction is to keep the table and let the class be its own delegate.*** *The delegate layer is what makes a PLAF enormous; a class that draws itself needs none of it.*

**Six that each contribute one line:**

- **Bridge (GoF)** — decouple an abstraction from its implementation so both vary. ***The theme is not the implementor; it is the parameterization.*** *Getting that backwards is what produced the last draft.*
- **Policy-based design (Alexandrescu)** — a host is parameterized by policies deciding orthogonal aspects. **The host implements; the policies decide.** *This is Axis 3 and Axis 4 stated as a C++ idiom twenty years early.*
- **Headless UI · React Aria · Radix Primitives** — **behaviour and semantics belong to the component, appearance to the consumer**, and the consumer never reimplements the behaviour to change the look. *The measure of success is that nobody forks a component to restyle it.*
- **Design tokens (W3C DTCG)** — a token is **a named value with a type and no component knowledge.** *That is the whole of what belongs in the values.*
- **Inversion of control** — the component asks for what it needs and something above provides it. ***Already built here as [the representative](../../../chemistry/.lib/composition/11-the-representative.md)***, which is why Axis 4 needs no new mechanism.
- **The user-agent stylesheet** — every browser ships a base theme, and it is **general properties, not component code.** *That is what a base theme is: small, unopinionated, and never the reason somebody writes their own.*

## <a id="where-the-brittleness-actually-is"></a>Where the brittleness actually is — located, not asserted

***Axes 1, 2 and 3 are already sound, and this was worth checking rather than assuming.*** A subclass may change what a class composes, what it draws and where it stands, and a registration puts it in a scope — **all measured this session**.

***The brittleness is that Axis 3 is unreachable in practice.*** **A view has nothing structured to extend**: [`$Section.view()` returns its source block](#m2), so somebody overriding it does not adjust a drawing — **they write one from nothing.** ***And there is proof rather than argument:*** [`$TheTeam`](../../.archive/app/src/sections/book/library/the-team/book.tsx) spends **about 150 lines** hand-writing pagination, a masthead, a contents margin, a card slip and a spread, and **shares none of it with any other book**, because there was nothing to share it through.

**So the sprint is smaller and better aimed than it was an hour ago:**

1. ***Make Axis 3 reachable*** — every level draws its parts and its own structure, so a subclass adjusts a drawing instead of inventing one.
2. ***Add Axis 4, and keep it very small*** — only what would be incoherent if each view decided it alone.

***Point 1 is most of the work and it is the thing that removes the fighting.*** *Point 2 is the theme, and [Doug is right that it can be very simple](#the-standing-rule).*

## <a id="the-matter-is-already-in-the-model"></a>And the apparatus was already solved — by the model, two sprints ago

***The previous draft had the theme injecting components for notes, discussion and annotations.*** **It does not need to.** [`$Legend`](../../package/.archive/document/Legend.tsx) is a `$Paragraph` subclass carrying `$parenthetical = true` whose `view()` answers `null` while it is; [`$Footer`](../../package/.archive/document/Footer.tsx) is a `$Section` holding footnotes; a summary is a parenthetical section.

***So accompanying matter is ALREADY a part of the composition, marked as not-read*** — and the only shared decision left is **whether unread matter is read**, which is one value.

**A wiki's discussion is a parenthetical section a chapter carries; margin notes are the footer read in a different place; a reader's annotations are matter at word grade.** ***Each is Axis 1 and Axis 3, and none of them is a new mechanism.***

## The decisions

**<a id="d34"></a>D34 — THE THEME IS AXIS 4 AND NOTHING ELSE. It ANSWERS; the view IMPLEMENTS.**

*Doug, 2026-08-20, overturning this a **fourth** time and correcting the responsibility rather than the contents:*

> *"**You aren't implementing the UI in the theme.** … **The theme DRIVES the implementation, right? The view of each component.** I really need you to think so so so so so hard about what the responsibilities of each part are."*

***The third draft had the theme selecting parts and arranging them, which is the theme rendering the book.*** **A strategy that returns the finished rendering is not a strategy — it is the implementation wearing a smaller name**, and [the research](#research-responsibility) names that as Strategy's oldest failure mode.

***So the theme holds only what would be INCOHERENT if each view decided it alone***, and [that is the entire test for membership](#responsibilities). **Everything else belongs to the class's own `view()`.**

| in the theme, because it must be shared | not in the theme, because a class owns it |
|---|---|
| how a composition's parts lay out | what element a title emits |
| whether unread matter is read | where a chapter puts its own contents |
| the values many views must agree on | how a figure draws its caption |
| *(and whatever later proves to be incoherent when decided alone)* | *anything a single class can decide without contradicting another* |

***The theme names no class, renders no book, and returns no markup.*** **It is asked, and a `view()` decides what to do with the answer** — which is `\documentclass` setting parameters while the engine typesets, and a stylesheet declaring properties while the element decides.

**<a id="d42"></a>D42 — THE DOOR TO A LIVE, TOGGLED THEME IS HELD OPEN, AND NOTHING IS BUILT FOR IT.**

*Doug: **"You can imagine the theme to be a live component that is toggled if need be. Don't plan for it to be that, but also don't plan for it not to be. Theme switching would be implemented through this."***

**Three cheap constraints keep it reachable, and each is one line rather than a feature:**

1. ***The members are reactive*** — `$`-prefixed, so a write re-renders every view that read one. **In this framework a toggle is then a write and nothing else.**
2. ***A view reads the theme AT RENDER TIME***, never at construction. *Already forced by [M5](#m5), so this costs nothing and must not be optimised away.*
3. ***A theme may be a HELD INSTANCE and not only a class*** — [the representative's instance form](../../../chemistry/.lib/composition/11-the-representative.md), which exists *"when one held instance owns state that must persist across mounts."* **A toggled theme is exactly that.**

***And the route not taken is worth writing down:*** **switching by re-registering is closed**, because [registration is configuration and never render](../../../chemistry/.lib/composition/11-the-representative.md) — a registration arriving mid-paint is an error. ***So a switch is a write to a held theme, and the three constraints above are what make that possible without building it.***

**<a id="d35"></a>D35 — A theme is a chemical, resolved and registered through the representative exactly as it stands.** `$(themes.Theme).$` to ask, `$(Scope, Theme)(Mine)` to answer. ***Not an extension of the mechanism — [that resolve line is the representative chapter's own example](../../../chemistry/.lib/composition/11-the-representative.md#component--the-model-behind-the-face).*** *Chosen over a plain object or a module export, neither of which can be registered on a scope, which is [R60](#r60).*

**<a id="d36"></a>D36 — The BASE theme is the smallest one that makes the routes real, and it ships no stylesheet.** *Doug: "an effectively unstyled version."* **The class says what a thing IS by choosing its element; the theme says what it is dressed with; neither is a stylesheet.** *Chosen over shipping one, which would be an aesthetic the application and all five demo books would have to fight — and [R13](15-the-build.md#r13--the-book-gets-its-own-aesthetic-world) already governs their looks.* ***The base answers all five plainly***: no frame, everything selected, one after another, no apparatus, and the few values a document needs. **A page carrying it is a document**, which is the state [AE37](#acceptance-examples) screenshots — ***and none of [the twenty](#twenty) is supported, only reachable.***

**<a id="d37"></a>D37 — Every default drawing is a template method: choose the element and the values, fill it.** ***A subclass changes one of those three and inherits the other two***, never the whole drawing — a different element, a different step of the scale, or different contents. *This is [R61](#r61) made structural rather than aspirational, and it is Doug's own named pattern.*

**And [R61](#r61) has a second route that costs even less:** *changing a value in the theme changes everything that reads it, without touching a class at all.* **Two routes, and they are the separation [D34](#d34) draws** — the theme changes values, a subclass changes choices.

**<a id="d38"></a>D38 — The condition for drawing parts is `instanceof`, and it is asked of the parts rather than of the level.** *Chosen over a flag, a count, or a level string — all three of which are the encoding [Custom Elements deleted](17-custom-elements.md) for drifting from the class hierarchy that already carries the fact.*

**<a id="d39"></a>D39 — Nothing about the parse, the counts or validity is touched.** ***A drawing change that moves a model number is a defect, not a trade-off*** — [R64](#r64), and it is the one line in this plan that cannot be negotiated during work.


**<a id="d40"></a>D40 — A theme's values are OPAQUE to the framework, which is what keeps it out of the implementation.**

**A member holds whatever the theme put there and the framework never inspects it.** *So one theme may answer a literal colour and another `var(--ink)`, and a consumer gets CSS custom properties — with the cascade, and with override from any stylesheet — **without the framework shipping a stylesheet or gaining a second branching mechanism**.* ***Chosen over emitting custom properties ourselves***, which would put branching in two places that can disagree — a class of defect [this branch has already filed](../solutions/05-the-suite-that-passed-against-a-stale-build.md).

**<a id="d41"></a>D41 — The values derive where arithmetic can, and they are a minority of the theme rather than its point.**

***Values are one kind of shared decision, not the theme.*** Only two of [the twenty](#twenty) are reached by them. **What is there is what many components must agree on** — and sizes **derive** from a base and a ratio, which is Ant's seed idea using the language's own getters, so changing one member moves a whole document coherently. *Colours are authored, because deriving them needs colour arithmetic and a dependency the framework does not have.* ***And there are no `serif`/`mono` members***: a family is a value somebody assigns, not a switch the framework offers — *Doug: "Can't someone just assign a font family?"*
## What the research said, and which idea each system contributed

*Doug: **"I want you to research themes… research react themes… see if you can find a design for it that's appropriate for this level of abstraction."*** **Six systems, one lesson each, and what each contributed is in [D34](#d34).**

- **styled-components / emotion.** A theme is a plain object in context; a nested provider may take `theme={outer => ({...outer, ...mine})}`, so an inner theme **derives** from the outer. ***Branching by nesting, deriving by merge*** — and here both are had for free, because a scope already nests and a subclass already merges.
- **Material-UI.** `createTheme` carries `palette`, `typography`, `spacing`, `shape` — all component-independent — **and a separate `components` slice** for per-component overrides, which its own documentation frames as the escape hatch. ***It is the proof by exception:*** that slice exists because MUI has no other way to change a component.
- **Chakra.** **Primitive tokens** and **semantic tokens** as two layers — a component consumes a meaning, a theme swaps a value. **Taken as an idea and not as a structure**, because the three hand-made themes in this repository never needed the indirection.
- **Ant Design v5.** **Seed → map → alias.** A handful of authored seeds, derived scales, semantic names for components. ***The most architectural of the six***, and the source of [D41](#d41).
- **Radix Themes.** Twelve-step scales where **each step has a documented job**. ***Inverted here***: the theme provides the scale and **the class assigns the job by choosing its step**.
- **CSS custom properties.** The platform's own theme: the cascade branches for free and any stylesheet can override. **Reachable through [D40](#d40) without adopting it**, which is what keeps one branching mechanism instead of two.

## The evidence already in this repository, which is why the shape is not a proposal

***Three themes were made by hand here, independently, and none of them is component-keyed.***

| | the values in use |
|---|---|
| [`.public/app/theme.ts`](../../app/src/theme.ts) | `ink · faint · rule · ground · mark`, and a serif |
| the demo's apparatus | `ink · faded · rust · serif · mono` |
| [`the-team.styled.ts`](../../.archive/app/src/sections/the-team.styled.ts) | the same five, plus an ad-hoc size scale — `10px · 11.5px · 13.5px · 14px · 15px` |

**A few colours, two or three families, a small size scale.** *The ad-hoc scale in the last row is [D41](#d41)'s argument stated by the thing that needed it.*

***And one constraint, measured:*** **`@dna-platform/lib` does not depend on styled-components** — only the application does. **Whatever the framework ships must not require it.**

## The units — a register

*The units and their scenarios ran the sprint. **The scenarios became the suite**, and [a scenario that survived is a promise, read where it runs](../../../../.claude/library/..librarianship/17-compounding.md) — 20 of them, in `tests/writing/theme.test.tsx` and `tests/writing/pagination.test.tsx`. **Each unit survives as one line with its anchor.***

| | | |
|---|---|---|
| <a id="u50"></a>**U50** | `$Theme` — three answers, naming no class | **DONE** · 14 promises, watched red three ways |
| <a id="u51"></a>**U51** | the drawing template: ask, gather, emit | **DONE** · one decision, three callers |
| <a id="u52"></a>**U52** | a section draws its parts | **DONE** · `#` gone from the DOM |
| <a id="u53"></a>**U53** | text where parts are uniform, parts where one is not | **DONE** · 50–91 nodes a page, not 7,666 |
| <a id="u54"></a>**U54** | the classes that carry meaning draw as what they are | **DONE** · nine, the planned eight **plus `$Paragraph`, found by driving** |
| <a id="u55"></a>**U55** | the `className` markup deleted | **DONE** · **0**, counted |
| <a id="u56"></a>**U56** | the demonstration: one book, two themes, the second paginates | **DONE** · 6 promises |
| <a id="u57"></a>**U57** | the model did not move | **DONE** · `CHECK` identical |
| <a id="u58"></a>**U58** | [three routes walked against the finished code](#routes) | **DONE, with a finding** |

## <a id="risks"></a>Risks — a stub, and the one that fired

*Eight risks stood here and are spent: seven did not fire, and a risk that did not fire is not a finding. **The one that fired is kept, because it fired harder than it was written.***

***RISK 3 SAID THE UNCACHED PARSE "GETS WORSE". IT DOES NOT GET WORSE — IT MAKES DRAWING IMPOSSIBLE***, and the sprint met it as heap exhaustion on the first render that drew through the model. **[The mechanism is filed where it belongs](../solutions/16-the-parse-that-woke-its-own-parents.md#it-came-back-and-the-discharge-had-missed-a-third-write--the-theme-2026-08-20)**; [what it cost this sprint is at F2](#f2).

*Of the seven that did not: the demo's books were re-driven and stood; the drivers' selectors survived with [one assertion moved carrying its reason](#u55); the theme did not become a dumping ground; **two classes kept their own loops, which the risk allowed and named as the boundary**; and the design changed a fourth time before any code, not a fifth after it.*

## Self-check and the order — stubs

*The self-check traced every requirement to a unit and every unit back to a mechanism and a visible end, **both directions, nine of nine on all five parts**. It passed before work started, which is what a self-check is for.*

*The order was **U50 to U51 to U54 to U52 to U53 to U55 to U56 to U58 to U57**, and the sprint ran it unchanged.*

## <a id="names-owed-plan"></a>Names owed — and the responsibility split shrank the list to two

***The fourth draft removed most of the naming problem rather than solving it.*** **Frame, selection, arrangement and apparatus are no longer theme members** — they were the theme implementing the UI, [which is the mistake Doug caught](#responsibilities). *A frame is a book's own view; selection and arrangement are what a view does; apparatus [was already in the model](#the-matter-is-already-in-the-model) as parenthetical matter.* **So there is nothing to name for any of them.**

**What is left needing a word is two things, and both are proxies standing for correction:**

| proxy | the question it answers | why it must be shared |
|---|---|---|
| **how parts lay out** | one after another · one at a time · several across | *a book, a section and a paragraph deciding this separately is incoherence by accident* |
| **whether unread matter is read** | is a parenthetical part drawn | *a document-wide policy; a summary drawn in one chapter and not the next is a defect* |

***Neither is a book word yet, and that is the objection to both.*** *The register has candidates — a **setting** or an **impression** for how parts are laid; **reading** for what is drawn against what is merely present. **Raised, not taken.***

**The values need no naming:** `ink`, `ground`, `rule`, `faint`, `mark` are **incumbents** from [three hand-made themes here](#the-evidence-already-in-this-repository-which-is-why-the-shape-is-not-a-proposal), and `measure` and `leading` are the printing trade's own words. ***And `serif`/`mono` are gone*** — *Doug: "Can't someone just assign a font family?"*

**Still owed, and neither blocks a start:**

- **Whether a theme is one object or several.** *"Different books and maybe even components will get different themes that live in a branching object hierarchy"* — **the branching is subclassing plus scope**, and whether one object carries everything is [U50](#u50)'s first question.
- **Which book the demonstration draws twice** — [U56](#u56). **Doug's.**

***And two things this plan decided rather than Doug***, flagged so the audit sees them as decisions: **that the theme holds only what would be incoherent decided alone** ([D34](#d34)'s membership test), and **that [U58](#u58) may return a finding against this design rather than a confirmation.** *A brittleness test that can only pass is [a checkpoint that cannot fail](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md).*

---

# <a id="routes"></a>U58 — THREE ROUTES WALKED AGAINST THE FINISHED CODE

*Doug: **"I need you to SEE how they would be implemented… see that they don't have to fight the framework."*** **Nothing below is built.** Each names the file, the class, the member and the rough size of what a person would type — ***and the third one comes back with a finding.***

## Route A — a wiki: every chapter carrying a discussion beside it

**What someone types.** A section subclass that draws itself as an aside, written into the chapter like any other section:

```tsx
class $Discussion extends $Section {
    override emit(contents: ReactNode, theme: $Theme): ReactNode {
        return <aside style={{ borderTop: `1px solid ${theme.rule}` }}>{contents}</aside>;
    }
}
```

**Roughly ten lines, and nothing in the framework moves.** ***And it is not a hypothetical shape:*** [`$Cover`](../../package/src/book/Cover.tsx) and [`$Synopsis`](../../package/src/book/Synopsis.tsx) are this exact pattern, shipped in [U54](#u54) — a section subclass that overrides one method and inherits its parse, its validity and its parts.

*If the discussion is fetched rather than written, it is a `$Chapter` subclass whose `emit` puts a panel after its sections. Same shape, same size, and it reads the theme for its rule the way everything else does.*

**Axis 1 and Axis 3. No theme change, no framework change. ✓**

## Route B — an interactive textbook: one equation, four graphical forms

**Which form is a decision every equation must agree on**, so it is the theme's — and a consumer's theme adds a member the framework never heard of:

```tsx
class $Textbook extends $Theme { $form? = 'plot'; }

class $Equation extends $Figure {
    override drawn(): ReactNode {
        return (this.theme as $Textbook).$form === 'plot' ? <Plot of={this.copy} /> : <Formula of={this.copy} />;
    }
}
```

**Roughly fifteen lines.** `$Figure.drawn()` is already the hook — it returns `null` on the base and exists to be overridden. `this.theme` is the getter [U51](#u51) put on every piece of writing.

***THE FRICTION FOUND, and it is small but real:*** **`this.theme` is typed `$Theme`, so a consumer reading their own member casts.** *The runtime is fine — a subclass's members are simply there — but TypeScript needs telling. **A generic on the getter would remove the cast and was not taken**, because it widens a member every class inherits for the sake of one caller. Recorded so the next person meets it in writing rather than in a red squiggle.*

**Axis 3 plus one theme member. No framework change. ✓**

## Route C — GitHub: a file tree beside the content

***This one does not work, and the measurement is what says so.***

**The tree is a subject's entries and the model already holds them.** What is needed is a book that draws an aside beside its chapters — **a `$Book` subclass** — and a way to make a *compiled* book be one.

**Measured, three ways:**

```
UNREGISTERED   class: $Book   instanceof $Mine: false
REGISTERED     class: $Book   instanceof $Mine: false      $(Book, Book)(Mine) had no effect
VIA $(Book)    class: $Book   instanceof $Mine: false      the resolve form had none either
```

**Why, and it is two documented specifications meeting rather than a defect:** an emitted book module composes itself as `<Book>` **at module scope**, so [React's own path is taken and nothing is resolved](../../../chemistry/.lib/composition/11-the-representative.md), *and* there is no asking instance at import time for a resolution to walk up from. ***A registration reaches a construction only when the construction happens inside a scope*** — which is exactly why it DOES reach the parse ([M3](#m3), [M4](#m4)), and does not reach this.

**So what would someone actually have to do?** One of two things, both small and neither in this sprint:

| | what it costs |
|---|---|
| **the compiler emits a resolvable book** — the module asks for its book class instead of naming it, and constructs inside a scope | ***one line in [`emit.ts`](../../build/stages/emit.ts)*** plus somewhere for the scope to come from |
| **the app draws the tree around the book** — which is what the application already does with its breadcrumb and entries | no framework change, and the tree is then the app's rather than the library's |

***And the honest reading of that second row is the finding underneath the finding:*** **the library's own shape — its entries, its chrome — lives in the application, not in the model.** A theme reaches their colours ([U55](#u55) put both sides on one object) and **not their arrangement.** *The route to closing it is that a synopsis carrying a card draws itself as an entry; then a theme reaches the whole library by the path it already reaches a book. **Named, not taken.***

## What the three say together

**Two of three are ordinary work in the obvious place, and I can point at shipped code with the same shape for both.** ***The third is blocked, and it is blocked at the compiler rather than at the framework*** — which is a better answer than it sounds, because it means the abstraction holds and the emitter has a one-line gap.

***And this unit was allowed to fail. It half did, and that is the point:*** [a brittleness test that can only pass is a checkpoint that cannot fail](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md).

# Where things stand

*One state, written 2026-08-21 at the session's close. The earlier state is deleted rather than layered under this. Everything above is the record; this is the present.*

## → NEXT: **serve the app, put the link in the room, then [`/ce-review`](../../../../.claude/library/our-skillset/33-ce-review.md) on this chapter**

```bash
cd library/.public/app && npx vite --port 5299
#  →  http://localhost:5299/inexplicable-phenomena/
```

***Do that before writing anything.*** **The link goes in the room in the first message**, not after the work.

**Why this step and not the next brainstorm:** the sprint was brainstormed, planned, built and compounded — ***and never reviewed.*** [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) is the one gate in the loop that is Doug's rather than the implementer's, and it exists because *"plan, work and compound are all marked by the implementer, so the workflow had a person at the front door and nobody at the back."* **That is exactly what happened here.**

***And Doug has said what the next session is:*** **"the sprint will involve me actively interacting with the app and giving feedback — prepare them to develop out in the open, because so far it's been without much feedback."**

---

# <a id="in-the-open"></a>DEVELOP IN THE OPEN — the standing instruction for the next session

***This is the most important thing in this handoff, and it is a correction of how the last one ran.***

**What went wrong here, stated plainly rather than softened.** The theme sprint was designed four times, built across nine units and verified against eleven gates — **and Doug saw the running application twice**, both times because he asked. His words mid-session were *"I haven't seen a running functional app, so I have no evidence that the compiler even works"* and, on finally seeing it, ***"it's a nightmare."*** **Both were correct, and both arrived after the building rather than during it.**

**The rules that follow, and each is a step rather than a sentiment:**

1. ***Serve first, then work.*** The application is running and its link is in the room **before the first edit**, not produced at the end as evidence.
2. ***Show a delta after every unit, not a report.*** A screenshot or "open this route" — **never** a paragraph describing what a driver saw. *[The review step already rejects "a demo described rather than shown"](../../../../.claude/library/our-skillset/33-ce-review.md); this is that specification applied during the work instead of after it.*
3. ***Ask what he sees; do not tell him what it does.*** A green driver and a legible page are different claims, and this sprint proved it: **29/29 checkpoints passed on a page nobody could read.**
4. ***Cut the increments smaller than feels necessary.*** If a change cannot be shown in one screen, it is two changes.
5. ***When something is a look rather than a mechanism, ask.*** The base theme's every value — a colour, an element, a step of the scale — is an aesthetic decision, and [an aesthetic is Doug's](15-the-build.md#r13--the-book-gets-its-own-aesthetic-world). *Choosing one quietly is how a framework acquires a taste nobody agreed to.*
6. ***Restart the server yourself before believing anything it serves.*** [Filed twice, and it still cost a session.](../solutions/14-the-green-that-exercised-nothing.md)

***And the shape of the failure to watch for, because it will not announce itself:*** **every gate can be green while the thing is wrong**, and the only instrument that catches it is a person looking. **That instrument was idle for most of this sprint.**

---

## THE SPRINT IS BUILT AND COMPOUNDED

**A book draws itself instead of printing its source, and what it looks like is asked for rather than built in.** Nine units, [U50–U58](#the-units--a-register). ***Never reviewed.***

**Verified against the working copy at this close, not recalled:**

| gate | result |
|---|---|
| framework suite · `tsc` | **313/313**, 29 files · **0** — from 293 |
| chemistry suite | **684/684**, 62 files — untouched |
| compiler `tsc` · suite · walk · build | **0** · **43** · **29** · **37** |
| **`CHECK`** | **7/7 · 34 chapters · 67 sections · 158 paragraphs · 233 sentences · 1,293 words · 5,881 letters** — ***identical before and after the sprint*** |
| `.public/app` typecheck · `verify-library` | **39 files, 26 dotted, 0 unexpected** · **29/29, 0 console errors** |
| demo `verify-book` · `verify-demo` | **61** · **25, and 23 on three runs of eight** — [F5](#f5) |
| **the built Pages artifact** | **12/12** — six deep links, chemicals constructing **under minification** |
| `className` in the writing | **0** |

**26 files changed in the project repo** — 22 modified, 4 new. ***Nothing is committed.***

## How to see it — four commands, and the first one is the one that matters

```bash
cd library/.public/app     && npx vite --port 5299     # THE LIBRARY — open this first
cd library/.public/build   && npm run compile          # the compiler, four phases, no screen
cd library/.public/app     && npm run build            # the Pages artifact
cd library/.public/package && npx vite app             # the demonstration
```

**Open `http://localhost:5299/inexplicable-phenomena/` and then `/physics/the-standard-model`.** *What should be visible: a title as a heading, the cover ruled off, the author and subject on their own lines in the accent, a derived table of contents, the synopsis set off by a left rule, and chapters spaced apart.* ***Before this sprint every one of those was an identical grey paragraph.***

**To see the theme reach everything at once**, change a value in [`app/src/dressing.tsx`](../../app/src/dressing.tsx) — *`$ground` to a dark colour and `$ink` to a light one* — and the chrome and the books both move, because they read one object.

## Rulings carried forward — Doug's words, verbatim

- ***"A theme specifies high level things completely independent of any component. Colors, sizes, styles. Things that can be used by many components to decide how they should be viewed. Each component should choose its view."***
- ***"You aren't implementing the UI in the theme. The theme DRIVES the implementation — the view of each component."***
- ***"Every piece of writing has a theme. That is semantically correct, even if bent in meaning."***
- ***"I don't need all use cases to be present. I need you to SEE how they would be implemented… see that they don't have to fight the framework."*** **The twenty are a test, never a backlog.**
- ***"You can imagine the theme to be a live component that is toggled if need be. Don't plan for it to be that, but also don't plan for it not to be."***
- ***"Level of representation. Representation doesn't need to be one-dimensional."*** *The struck word was purged, 49 replacements by sense.*
- ***"Always take what I say as providing examples and ideas to begin thoughts."***
- ***"Everything is going to be moved around, audited, redesigned… it is so so so far away from what I need it to be."*** ***Standing over the whole branch.***
- ***"Ultimately it should be vite doing a react based single page app, no server."*** **Checked: the built artifact passes 12/12 served the way Pages serves.**

## What is owed, largest first

1. **THE APPLICATION NEVER RENDERS THE BOOK** — [F4](#f4). It draws the chapters itself, so `$Book.view()` never runs there and ***a paginating theme would not paginate the public app.*** **The biggest thing this sprint found and did not fix**, because the app's loop carries the identifiers its bookmark reads and 29 checkpoints assert on them.
2. **A compiled book cannot be a subclass** — [F3](#f3) and [route C](#routes). **One line in [`emit.ts`](../../build/stages/emit.ts)**, plus a scope to construct inside.
3. **Four findings still undistributed** — [F1](#f1), [F3](#f3), [F4](#f4), [F5](#f5). *One `/ce-compound` run each; F3 and F4 are one chapter from two sides.*
4. **The compiler audit** — architecture, organization and naming at parity with $Chemistry and lib. **Doug's, ruled and deferred behind seeing something legible.** *He has now seen it.*
5. **Two proxy names** — [how parts lay out, and whether unread matter is read](#names-owed-plan). And `page` is declared twice.
6. **The demo's chapter on the validating**, owed since [Validation](16-validation.md).

## Blockers

- **Nothing blocks the review.** Every gate is green, the app serves, the built artifact passes.
- ***Nothing is pushed.*** [See below](#nothing-is-pushed).

## Wrong turns already taken — do not repeat

- **Building a sprint and showing it at the end.** [The whole of the section above.](#in-the-open)
- **Putting the answer in the theme.** ***Four designs died this way*** — a vocabulary of roles, a property per class, colours as the essence, and a theme that selected and arranged. **The last is Strategy's oldest trap: a strategy that returns the finished rendering has become the implementation.**
- **Generalising `parenthetical` to every level.** It means *not shown* at section grade and *not counted as prose* at word grade; the guard belongs where the model already had it — [F1](#f1).
- **Assuming a discharged specification stays discharged.** [It came back](../solutions/16-the-parse-that-woke-its-own-parents.md#it-came-back-and-the-discharge-had-missed-a-third-write--the-theme-2026-08-20), because the discharge counted two writes and there are three. ***Adoption is a write.***
- **Drawing through `parts()` without holding the reading.** Three test files died of **heap exhaustion**, not a failing assertion.
- **Trusting a driver against a server you did not just start.**
- **Reading a green suite count without reading the file count.** `Test Files 25 passed (28)` is three files that *died*.
- **Editing a gate to make a number green.** *The demo driver's timeout was left alone deliberately.*

## What to read next session — three things, shaped for reviewing a running app

*[Named, not claimed sufficient](../../../../.claude/library/our-skillset/32-ce-handoff.md#9-sufficient-is-a-claim-and-it-was-wrong) — a short list is a starting point, not a boundary.*

1. **[The standing instruction above](#in-the-open), then [`/ce-review`](../../../../.claude/library/our-skillset/33-ce-review.md).** Load-bearing because the review's whole shape — batches rather than a report, questions cheap to answer, a demo shown rather than described — is what the next session *is*.
2. **[`app/src/dressing.tsx`](../../app/src/dressing.tsx) and [`package/src/writing/Theme.tsx`](../../package/src/writing/Theme.tsx).** Load-bearing because between them they are the whole configurable surface — **the three answers a theme gives, and the one file in the application that registers anything.** *Under sixty lines each.*
3. **[F4](#f4) and [route C](#routes) in this chapter.** Load-bearing because they are the two places the abstraction does **not** reach, and Doug's feedback will land on them first: **the app's own chrome, and any book that wants to be a different kind of book.**

*If his feedback turns to what the framework's defaults look like rather than what they reach, add [the twenty](#twenty) and [the responsibility split](#responsibilities) — but read them after his answer, not before.*

## <a id="nothing-is-pushed"></a>NOTHING IS PUSHED, and that is a decision waiting rather than an oversight

**The project repo has 26 changed files, uncommitted.** **The branch library on `inexplicable-phenomena` still carries Projection only through [The Build](15-the-build.md)** — *Validation, Custom Elements and this chapter are all unpushed, which is now three sprints behind.*

***A handoff that leaves the library uncommitted has written a note nobody will read***, and that is [the failure this section's own rule was invented from](../../../../.claude/library/our-skillset/32-ce-handoff.md). **It is not done here because the last instruction on the subject was Doug's — the code was committed locally and held back on his word — and a push is his call rather than the session's.**

**[The commit tool](../../../../.claude/library/..environmentalism/06-on-sync--commit.sh) is what closes it**, routing identity, branch library and project code to their branches. ***One word and it runs.***

---

# THE FINDINGS — five, and three of them changed what was built

## <a id="f1"></a>F1 — `parenthetical` MEANS TWO DIFFERENT THINGS AT TWO GRADES

***The template's first version guarded every level on `parenthetical`, and the suite went red in four places at once*** — every `$Author` and every `$Subject` drew **empty**.

| grade | what it means | drawn? |
|---|---|---|
| **section · chapter** | a summary — not part of the reading | **no** |
| **word** | an author, a subject, a legend — not counted as prose | ***yes*** |

**The guard went back exactly where the model had it**, now asking the theme rather than the flag. ***[D39](#the-decisions) held: the model was not bent to make the drawing convenient.***

## <a id="f2"></a>F2 — THE UNCACHED PARSE DOES NOT MAKE DRAWING SLOWER. IT MAKES IT IMPOSSIBLE

***[Risk 3](#risks) said the uncached parse "gets worse". It is stronger than that.*** The moment a section drew its parts, **three test files died of heap exhaustion** — not a failure, an unbounded loop:

```
FATAL ERROR: Reached heap limit Allocation failed — JavaScript heap out of memory
```

**`parts()` builds fresh objects on every call AND adopts each one** — a write to a chemical that has a parent, which diffuses up and re-runs the render that asked. ***That is [the parse that woke its own parents](../solutions/16-the-parse-that-woke-its-own-parents.md), whose specification reads: a parse may not be given a parent while it mutates what it makes.*** **[The full diagnosis is filed there](../solutions/16-the-parse-that-woke-its-own-parents.md#it-came-back-and-the-discharge-had-missed-a-third-write--the-theme-2026-08-20)** — this chapter keeps the finding and that one keeps the mechanism. It was discharged when nothing wrote; **adopting is a write, and it was harmless only while nothing drew through it.**

***The fix holds the reading in the DRAW PATH ALONE***, keyed on the writing it was read from. **`parts()` is untouched** and anything asking it outside a render still gets a fresh reading — so the model kept its semantics and the counts did not move.

## <a id="f3"></a>F3 — A REGISTRATION REACHES A CONSTRUCTION ONLY WHEN THE CONSTRUCTION IS INSIDE A SCOPE

**Measured three ways** while walking [route C](#routes): a `$Book` subclass registered on the `Book` scope substitutes **nothing** for a compiled book, and the resolve form does not either.

***This is not a defect, it is two documented specifications meeting:*** an emitted module composes itself as `<Book>` **at module scope**, so React's own path is taken and nothing resolves, *and* there is no asking instance at import time to resolve upward from.

**So Axis 2 is narrower than the plan claimed** — it reaches what the framework asks for (the parse: [M3](#m3), [M4](#m4)) and not what a consumer writes literally. ***The theme is unaffected, because a theme is resolved at RENDER time*** — which is why it reaches every compiled book on screen.

## <a id="f4"></a>F4 — THE APPLICATION NEVER RENDERS THE BOOK, so `$Book.view()` never runs in it

***Found by driving the built artifact and asking for an `<article>` that was not there.*** [`app.tsx`](../../app/src/app.tsx) filters the book's chapters and draws each one itself, in both its reading and its consulting paths.

**Three consequences, and the third is the one that matters:**

1. The book's own wrapper never appears.
2. Its `measure`, `leading` and `rhythm` never apply — **the application's own `Sheet` was supplying them, duplicated.** *Closed this sprint: the app reads all three off the same theme object now.*
3. ***A paginating theme would not paginate the public application***, because the app is doing the chapter selection the book was asked to do.

**Not fixed, and the reason is stated rather than hidden:** the app's loop carries the `id` and `data-chapter` its bookmark and scroll machinery read, and 29 checkpoints assert on them. **Rendering the book instead is a redesign of the reading surface, not a line** — and it is [the same finding U58 reached from the other side](#routes): *the library's shape lives in the application, not in the model.*

## <a id="f5"></a>F5 — THE DEMO DRIVER'S NAVIGATION BUDGET IS THIN, and it is not this sprint's

`verify-demo` reached **25 on five runs of eight and stalled at 23 on three**, timing out at 20 seconds on one navigation. ***Measured rather than blamed, and the count corrected upward after a third stall:***

```
/nonsense, six consecutive runs:      5377ms  9233ms  9247ms  9556ms  9276ms  8357ms
and again, immediately after verify-book has run — the failing condition:
  shelf 5474ms · a book 9682ms · the manifold 9466ms · /nonsense 9702ms   (none timed out)
the page it renders:                  91 nodes
```

**A 91-node page cannot take nine seconds to draw.** The time is Vite transpiling the framework from source — the demo aliases `@` to `src` — so ***the cost is compilation, not rendering.***

***And the isolated navigation never times out, which is the useful part:*** **every navigation on that demo costs five to ten seconds against a twenty-second budget**, so the margin is about 2× at best and it degrades across a walk of twenty-five of them. **The stall is accumulation, not any one page.**

***The timeout was NOT raised to make the number green.*** *That is [an assertion edited to pass](16-validation.md#the-decisions), which this branch has filed, and the driver is not this sprint's file.* **Pre-existing, measured, and named so the next person does not diagnose the drawing.**

---

## → NEXT: [`/ce-compound`](../../../../.claude/library/our-skillset/31-ce-compound.md)

**Five findings, and at least two are Solutions chapters rather than notes** — [F2](#f2) is a filed specification returning under a condition its discharge did not cover, and [F3](#f3)/[F4](#f4) are one thing seen from two sides.

## Owed, and named rather than omitted

- **[F4](#f4)** — the application renders chapters rather than the book. ***The largest thing this sprint found and did not fix.***
- **[Route C](#routes)** — a compiled book cannot be a subclass. **One line in [`emit.ts`](../../build/stages/emit.ts)**, plus a scope to construct inside.
- **The consumer's cast** — `this.theme` is typed `$Theme`, so a theme's own new members need one.
- **Two proxy names** — [how parts lay out, and whether unread matter is read](#names-owed-plan).
- **`page` is declared twice** — on `$Writing` and on `$Book`, which share no ancestor that draws.
- **The demo's chapter on the validating**, still owed from [Validation](16-validation.md).

## How to see it

```bash
cd library/.public/build && npm run compile        # four phases, no screen
cd library/.public/app  && npx vite --port 5299    # the library
cd library/.public/app  && npm run build           # the Pages artifact
cd library/.public/package && npx vite app         # the demonstration
```

***Start the server yourself before driving it.*** *And the built artifact is served the way Pages serves — a real file, else `404.html` **with a 404 status** — because a dev server's SPA fallback passes whether or not the deep links work.*
