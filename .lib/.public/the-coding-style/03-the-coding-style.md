# The Coding Style

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

***This exists so that a refactor can find the ruling before it undoes one.*** **Doug, 2026-08-30, pairing a cleanup session with a design session:** *"I want them to be able to refactor your work without reverting. I want you to read and locate and annotate all sprints with the coding style documents they produce."*

**The failure it prevents is specific and this codebase has met it.** *Someone reads a class, sees a member sitting in an odd place or a helper that looks redundant, tidies it — and silently reverses a decision that was argued once and written down somewhere else.* ***A style rule that cannot be found from the code is a style rule that gets refactored away.***

**A real instance, since a claim like that should name one:** *[S22](../the-condition-report/08-the-compiler.md#s22) — **the emitter kept writing the one construct the framework had just purged**, so a cover the compiler completed carried something no cover a person wrote was allowed to. The ruling existed; the code that had to obey it was somewhere else.* ***(An earlier draft cited this week's index collapse instead. [That was retracted](../projection/00-planning.md#canonical-collision) — it was unfinished work being simplified, not a tidy crossing a written rule.)***

**So every sprint chapter now carries a `style:` field pointing here, and this page is the single list.** *One list, edited in one place* — *because [a closed set stated in several places, checkable in none, is the fault this repository already paid for](../the-condition-report/08-the-compiler.md#n34).*

---

## <a id="not-the-others"></a>What this is NOT — three registers, three jobs

***The branch keeps three lists about the code and they answer different questions.*** **Going to the wrong one is how a session ends up re-solving something.**

| | it indexes | you go there to ask |
|---|---|---|
| ***this chapter*** | ***rules*** | **"how is code written here, and who said so?"** |
| [The Condition Report](../the-condition-report/.cover.md) | *faults, by kind* | *"what is known to be wrong, and is this one of them?"* |
| [Solutions](../solutions/.cover.md) | *defects, by symptom* | *"have we been bitten by this exact thing before?"* |

***A cleanup session starts at [the condition report's actionable list](../the-condition-report/06-the-cleaning.md#actionable)*** — **it carries every ruling Doug has given on the code as a problem to solve** — *and comes here to check that a tidy does not cross a rule.*

---

## <a id="the-documents"></a>The style documents in force

*Each line says what the document RULES, so a reader can tell whether it applies without opening it. The **dated to** column is the day the ruling was given, quoted inside the document itself — **not** a claim about which sprint authored it, which the covers do not record.*

### <a id="the-trilogy"></a>The four — how code in this repository is written

***Four chapters that name each other, and they answer four different questions about one class.*** **The fourth arrived last and is the law the other three are expressions of**, *which is why it is read last rather than first — the conventions were known long before the rule under them was said out loud.*

| | it rules | dated to |
|---|---|---|
| **[The Unit of Code](01-the-unit-of-code.md)** | ***what ONE PIECE of code is*** — and that it differs per program, decided by one rule: **the unit is whatever that program states its invariants over.** *`lib`'s unit is a **WORD**, and a word takes three classes — the data, the law, the meaning; the compiler's is a phase.* | *out of [C2](../the-condition-report/07-the-three-codebases.md#c2)* · **word ruling 2026-08-30** |
| **[The Order of a Class](02-the-order-of-a-class.md)** | ***how the INSIDE of one is arranged*** — Doug's own member order, quoted rather than paraphrased: **fields, then properties, bond constructor, constructor, methods, protected, private** — *with fields running private · public · protected, the opposite way from methods.* Plus **the property test: argumentless AND returns data**, so `canonical()` qualifies and `specify()` does not. And: **an exception message may never enumerate a roster.** | ***2026-08-27, amended 2026-08-30*** |
| **[The Type and the Instance](../the-type-system/02-the-type-and-the-instance.md)** | ***WHERE A MEMBER GOES*** — the type holds the meaning, the instance holds the data, and [base-class scarcity dissolves](../the-type-system/02-the-type-and-the-instance.md#the-problem) because a thing can carry a type it does not derive from. | *out of [The Bind](../projection/29-the-bind.md)* |
| **[The Closeness Rule](04-the-closeness-rule.md)** | ***WHAT IS WRITTEN INSIDE a class, and the law all three above are instances of*** — **proximity encodes relatedness, size encodes relevance inverted.** *Its four instruments are ordering, stacking, brevity through line count, and **paragraphs in code**.* **And it settles what "artfulness" means: art is what you do where the convention is SILENT, never a licence to bend one — ruled the same day, *"the order always wins."*** *Carries the compactness rules — bracketless one-line bodies, a guard on one line, a housekeeping `for` on one line.* | ***2026-08-30*** |

***Read in that order if you are new: what a unit is, how one is ordered, where a member goes, and then the law underneath all three.***

### <a id="where-a-class-lives"></a>Where a class lives

| | it rules | dated to |
|---|---|---|
| ***the specification goes in the type file*** | **Doug, given as a ruling with the class pasted: *"Specification goes in the type file… Put that in `Type.tsx`."*** *So `$TypedSpecification` is declared beside `$Type` rather than in a file of its own.* **It is [The Type and the Instance](../the-type-system/02-the-type-and-the-instance.md) one step on** — *the type holds the meaning, and the rules that give it that meaning belong beside it.* | ***2026-08-30*** · *produced in [Sprint 30](../projection/30-the-reference.md#d6), executed as [U8](../projection/30-the-reference.md#u8)* |

| ***a `.book` file puts the BOOK first*** | **Doug, 2026-09-13: *".book is the thing that inherits from encyclopedia FIRST and then all components for the book."*** *The book class stands at the top of the file and everything the book is written with — its link kinds, its own kinds, its formats — comes after it. **The file is named for the book, and the book is the layout.*** *Written up with the rest of a consumer's conventions in [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md#the-book-file); the portal's book file breaks it, its class standing at line 477 of 536.* | ***2026-09-13*** |

***The law has now arrived and this row is one of its instances.*** **[The Closeness Rule](04-the-closeness-rule.md#where-art-lives) names *above the class* — which classes share a file — as one of the two places art operates**, *and [The Unit of Code](01-the-unit-of-code.md#a-word-is-not-a-class) carries the ruling in full: the file is the WORD, and a word's three faces belong together.* **The row stays here as the index entry; the reasoning lives in those two.**

### <a id="the-fetch-rule"></a>The `$`-fetch corollary and the timing law

| | it rules | dated to |
|---|---|---|
| ***a framework component is fetched through `$` at the seat*** | **Doug: *"anytime a type is used, it should be fetched using $ … Don't assign properties. Assign constants close to use."*** *A Capitalized statement-local, never hoisted, never memoized, never a member; the exemptions (specifications, reflection) and the TIMING LAW — registration is configuration BEFORE the first parse — live with the rule in [ch10](../the-type-system/02-the-type-and-the-instance.md#the-fetch).* | ***2026-09-03*** |
| ***how a kind is spelled*** | **[The Spelling of a Kind](05-the-spelling-of-a-kind.md)** — the nine spellings, what a kind never spells, and the type-only short form; promoted from [Sprint 37](../projection/37-the-binder.md)'s record. ***STALE against v2.2 and not yet rewritten*** — it still spells `this[cache](this.name)`, `formula = 'new'`, `parser.makes.set` and `indent = 1`, every one of which the second writing deleted. **Read [What We Believe](../the-type-system/05-what-we-believe.md) for the template that is actually in force.** | ***2026-09-03; flagged 2026-09-05*** |
| ***making one is asking for one that is not there*** | **[ch10 § making one](../the-type-system/02-the-type-and-the-instance.md#making-one)** — `$check(Kind, '!')` fetches through `$` and evaluates in ONE call, so the two statements that had to stay together cannot come apart; `$check(found, Kind, '!')` is FIND OR MAKE. **The boundary: `'!'` makes an EMPTY one, `$(<Kind>…</Kind>)` writes into one.** | ***2026-09-04*** |
| ***the bond assigns, the specification verifies*** | **[ch10 § the assignment workflow](../the-type-system/02-the-type-and-the-instance.md#the-assignment-workflow)** — Doug's four steps, verbatim: look for one that is right and assign it; else fetch through `$`, make one and assign; then let `specifically` check it is there. *An author's own writing always wins over the default.* | ***2026-09-04*** |
| ***asking what a block holds*** | **[ch10 § find and findOne](../the-type-system/02-the-type-and-the-instance.md#the-block-asking-pair)** — one asking in place of **45 hand-written block scans across 15 files**. `find`/`findOne` ask the BLOCK by TYPE; `where`/`select`/`single` ask the PARTS. | ***2026-09-04*** |
| ***how TSX is laid out, and how a fetched component is named*** | **[The Shape of TSX](06-the-shape-of-tsx.md)** — elements are what members are in a class, so structure is indented and visible; a component local carries the component's name; `$` is the injection point and belongs only where a class names a component literally. | ***2026-09-04*** |
| ***a view is a read whose shape cannot construct*** | **[ch14's view law](../the-type-system/03-shells-over-types.md#the-view-law)**, in Solutions 45's second-appearance wording; derivable structure enters the model at `specifically()` under Law 44. | ***2026-09-03*** |

### <a id="the-spec-convention"></a>The spec shows every use case

| | it rules | dated to |
|---|---|---|
| ***every framework class shows its use cases in `.spec`*** | **Doug: *"we always use the spec to show examples of the various use cases of each of our framework classes."*** *Each word's `.spec` file draws its examples as chemicals — the strong class, the carried type, and any trait or derived form — and **`spec.test`** enrolls every one behind three promises: it draws, it SPECIFIES, it COMPOSES, with a count that fails silent loss.* **A new kind is not finished until its `.spec` examples exist and are enrolled.** | ***2026-09-02*** · *produced in [The Margin](../projection/35-the-margin.md)* |

### <a id="supervision"></a>WE DO NOT INNOVATE — the standing rule, given 2026-09-05

> ***Doug, after a session in which the team invented four members, changed one of his methods, and reported its own defects as flaws in his design:*** **"Note that Doug thinks you are not good programmers and you need serious supervision and to stop thinking you can innovate even member names in the five essential folders without asking. You can't innovate base classes. You have to follow templates for the classes. You can't decide when to add dynamic loading. You can't decide to do anything like this. You very simply exist to speed up the process of me writing code manually."**

| forbidden without asking | what happened on 2026-09-05 |
|---|---|
| ***inventing a member*** | `declared()`, `fold()`, `classNames()` on `$Writing` — three, in one session, each struck |
| ***inventing a member NAME*** | `fold` was defended as his word because he said *"types to fold in"*; **a phrase in conversation is not a name he gave** |
| ***changing a base class*** | `$Writing.searchFor` was rewritten to ask two questions where he wrote one, and the cast that required was then reported as a wart |
| ***departing from the template*** | the class shape is interface · class · type · specification, and it is not ours to vary |
| ***deciding how modules load*** | an `import type` was used to route around a coupling the team had itself created |
| ***concluding the design is wrong*** | eight defects were listed against his design; **seven were the team's own unfinished code and the eighth was his line, misjudged** |

***The rule beneath all six, and it is the one to check yourself against:*** **the design is Doug's and the implementation is ours, so a fault found in the implementation is ours until proved otherwise.** *[T0](../the-type-system/04-the-interface-type-system.md#definition-first) is the same law one level down: the definition outranks the measurement, and his design outranks our code.*

***What to do instead of innovating:*** **ask.** *"If something is not IMMEDIATELY obvious, try to find a reason before saying you can't"* — and where no reason is found, **ask what he had in mind rather than concluding he designed it wrong.**

### <a id="the-anchors"></a>THE TWO ANCHORS — read these before writing a word of it

***Doug, 2026-09-05, third offence, and this time he gave the reason rather than the rule:*** *"Do you even know why every piece of writing is in a book? Because this is public, the public library. And it's closed under books. Write this down somewhere prominent. Those are the anchors."*

| the anchor | what it grounds |
|---|---|
| **THIS IS THE PUBLIC LIBRARY** | Not a metaphor and not a theme. `@dna-platform/lib` is the public library, so **every word in it is a word a library actually uses.** |
| **IT IS CLOSED UNDER BOOKS** | Reach for anything and what you get is a book — [Closure Under Books](../the-semantics-of-books/10-closure-under-books.md). ***That is why every piece of writing is in a book***, and it is why `book()` and `type()` terminate the same way: at the thing with nowhere left to belong but itself. |

### <a id="book-and-chapter"></a>AND THE THIRD, GIVEN 2026-09-13 — ***BOOK IS LAYOUT. CHAPTERS ARE LOGICAL PARTS.***

> ***Doug, while a sprint was being planned around it:*** **"Book is layout. Chapters are logical parts. This is the essence of the framework. The page layout and logical parts of the page. Write this down prominently."**

| | what it holds |
|---|---|
| ***A BOOK IS LAYOUT*** | **the page's arrangement, and nothing else.** *Where things stand: the header, the footer, the places a kind of chapter is put. A book decides WHERE.* |
| ***A CHAPTER IS A LOGICAL PART*** | **one part of what the page IS, and nothing about where it goes.** *The lead, a section of the body, the references, the manual, the infobox — each is a part of the page's meaning, and each says WHAT it is by the type it carries.* |

***So the two questions are never asked by the same object.*** **A chapter that decides its own position is a logical part doing layout; a book that decides what a part MEANS is layout doing semantics.** *Both are the same fault, and between them they are most of what this branch has had to undo.*

***It is also the test for where a new thing goes:*** **if it is a part of what the page says, it is a chapter and it carries a type; if it is where something stands, it is the book's.** *A thing that seems to need both is two things.*

***The test, in his words: does a library closed under books mint dollars, or even have rooms? No.*** **What the infrastructure may be thought to do is PRINT books, WRITE books, and hold the PARTS of the composition hierarchy** — *and he adds the caution in the same breath: anthropomorphizing too much makes it hard to find the librarian.*

**The words struck, with what the library says instead. Every one is DEPRECATED TERMINOLOGY: it stands in closed records where a rewrite would be editing history, and it is never written again.**

| struck | where it came from | say instead | struck |
|---|---|---|---|
| **mint**, minted, mints | coining money | **make** — `$check(kind, '!')` says it in the source: making one is asking for one that is not there | 2026-09-05 |
| **ladder**, rung | home repair | the **four ways** a consumer changes what a type means — subclass it, carry it, extend its specification, decorate one | 2026-09-05 |
| **rail** | railways | the **rule**, or the **specification** that carries it | 2026-09-05 |
| **seat** | a room's fittings | **place** — and where one word is not needed, name the thing: the **class**, the **member**, the **bond constructor**, the **line** | 2026-09-05 |
| **furniture** | a room's fittings | ***name them*** — the **cover**, the **synopsis**, the **table of contents**, the **index**. There are four and they have four names; a word that gathers them says less than the list does | **2026-09-06** |
| **refusal** | — | what the specification **does not admit**, said as the rule that does not admit it | **2026-09-06** |

***The seat row is the tell.*** *It struck a word by naming its origin — furniture — and that origin has now been struck in turn. A metaphor does not become the library's own by being used to explain another one.*

***The failure this records is not a vocabulary slip, it is a method one.*** **Doug: *"You see my cute names, see no grounding, check not at all the meaning of the code, and produce meaningless jargon. The reason why this is a mess is you not ever checking semantics."*** *A name is checked against the library it belongs to before it is used, and a design is checked for what it MEANS before it is checked for whether it compiles.*

### <a id="no-jargon"></a>NO INVENTED LANGUAGE — the standing law, restated 2026-09-04

| | it rules | dated to |
|---|---|---|
| ***speak $Chemistry and React, never a word you coined*** | **Doug, twice now.** *2026-09-04, on a four-question batch: "You did too much independent work and now you have your own language for a codebase that none of those words apply to… USE LANGUAGE from programming. Why can't you talk to me in $Chemistry and React."* **And again the same day, on one word: *"retyping is not a chemistry word okay? NO JARGON! Write this down. You invent language. Chemicals render."*** *The coined word was "re-typing", for the walk substituting an element's `type` — and **the file already had the word**: [`substitute()`](../../../chemistry/package/src/implementation/augment.ts) is what that seat is called, `stands` is what it answers. **The test is not whether a coinage is clear; it is whether the codebase already says it.** Before naming a mechanism, grep for it — a mechanism with a name in the source has its name, and a second one is drift. **Chemicals RENDER**; classes, members, props, elements, views, bond constructors and the walk are the vocabulary. | ***2026-09-04, second offence*** |

### <a id="never-okay"></a>What is never okay

| | it rules | dated to |
|---|---|---|
| ***the unknown-cast reach is NEVER okay*** | **Doug: *"Get rid of this, we need to move things around. I hate this pattern and you can make that it is never okay"*** — *of a helper reading a protected member through `as unknown as { … }`. A member the machinery must read is a member on the wrong object, or machinery in the wrong place: **move things around** — the reader was moved into the owning class (the composition computes its own tokens; annotations override where the edits live; the law became `append`'s door-check) and the reach deleted.* | ***2026-09-02*** |
| ***no cast on a strongly-typed assignment*** | **Doug: *"The property is strongly typed. No reason not to drop that"*** — `this._type = $(<TypeOfBook />)` and never `as $TypeOfBook` after it. **`npm run clean` in the package enforces this and the `$Block` spelling mechanically** — [`clean.ts`](../../package/clean.ts). | ***2026-09-02*** |

### <a id="seen"></a>The third rung is mandatory for chemistry features

| | it rules | dated to |
|---|---|---|
| ***no chemistry feature ships unseen*** | **Doug: *"This is how you should debug all apps. You don't release chemistry features without checking that they work"*** — *given after a feature passed 825 tests and failed its first real refresh.* **The instrument is the [`verify-*.mjs`](../../../chemistry/package/app/) puppeteer family beside the Lab: drive the real browser, perform the real interaction — including `page.reload()` where persistence is claimed — and assert VISIBLE TEXT, never a storage string or a transient status.** *The hydration case is the worked example: storage asserts stayed green while the browser lost everything, because recalling `persist` ran its own setter and remembered the defaults over the record — only the driver saw it.* | ***2026-09-02*** |

### <a id="comments"></a>Comments — ***the ban has a lifecycle, given 2026-09-09***

***The rule was never "never write one". It is that a comment is a stage, and the stage ends.***

> ***Doug, on being told `src` was 10% comments and offered a strip:*** **"No, you are supposed to use reference documents in the branch that LINK to the code."** · *"You can keep comments while you sketch."* · **"When we decide this thing is built, comments get removed."** · ***"They get moved to documentation, which is where ideas crystallize and coalesce."*** · *"Write all this down somewhere that coalesces without [losing] important information. You can write it around the codebase as needed for now. **We will compact into ideal writing as the codebase crystallizes**."*

| the stage | what a comment is | where the knowledge lives |
|---|---|---|
| ***sketching*** | **allowed, and expected** — *the argument is being worked out and the code is where it is being worked out* | *in the code, beside what it explains* |
| ***built*** | ***removed*** | **moved to a branch document, which LINKS to the file** |

***The direction never changes and is the easy half to get backwards: the BOOK links to the FILE, never the reverse.*** **So a comment is not deleted, it is MOVED**, *and the move is the moment an idea stops being local to one class and becomes something the branch knows.*

**And the original reason still holds underneath it** — *"We don't comment code so that blobs like this stand out as complex"* — **the ban is a COMPLEXITY DETECTOR**: *a comment dresses density up as documented, while bare code confesses on sight.* ***That is why the removal is not cosmetic: a comment that cannot be moved to a document is usually a class that needs simplifying.*** **The one written exemption stands: `.spec` files are commented examples by convention.**

*Measured the day the ruling was given, so a later reader knows what state it was given about: **`src` was 4,025 lines and 421 of them comments — 10%**, with `Note.tsx` at 55% and `Aside.tsx` at 46%.*

### <a id="perspectives"></a>NO PERSPECTIVES — ***no looks, no $view, no $$view, 2026-09-09***

> ***Doug:*** **"Never looks. Remove back from writing. I removed back. I will use that when I need it. For now, NO perspectives. Such a rare feature. It's like you running around in C# using reflection to set properties instead of setting them. You have conditionals in view."**

***The ruling is about PERSPECTIVES, not about branching.*** **A `$view` or `$$view` is a second and third drawing of the same chemical selected by a look, and that is the complex machinery Doug is ruling out here.** *The analogy is exact: reaching for a look to draw a second way is reaching for reflection to set a property — doing dynamically what the language already does structurally. A second drawing is a second CLASS.*

***And "you have conditionals in view" was the EVIDENCE, not a second complaint*** — **a view that already branches does not need a perspective mechanism to draw a second way; it is doing it in the ordinary way.** *A conditional in a `view()` is fine.*

> ***Corrected 2026-09-09, an hour after this section was first written.*** *It had said "a view does not branch", which is a rule Doug did not give.* **Doug: "No, you are supposed to — views can use the conditional. I am saying they shouldn't use the `$view` `$$view` perspective. That is a complex thing and shouldn't be used here."*** The mistake is the one this whole chapter exists to prevent: a ruling written down wrong outlives the conversation that would have corrected it.*

| | |
|---|---|
| ***`@look` is not used*** | **`@look('back')` is deleted from `$Writing`. Zero in the package** — src, both demos, the suite. *The feature stays in chemistry; Doug will reach for it when he needs it* |
| **`$view` and `$$view` are not written** | *A second or third drawing selected by a look. **A kind that must draw two ways is two kinds***, or one `print` given different content |
| ***a conditional in a `view()` is ordinary*** | **Explicitly allowed.** *Five stand in `src` — `$Writing`, `$Composition`, `$Title`, `$Ref`, `$Reference` — and they are the reason a perspective mechanism is not needed, not a debt* |

### <a id="styling"></a>Styling

| | it rules | dated to |
|---|---|---|
| ***never a style attribute on HTML*** | **Doug: *"Oh don't ever put style on HTML!!"*** — *no inline `style` on any rendered element, framework surfaces included; chemistry's dev panels were the offender and were rewritten the same night.* | ***2026-09-02*** |
| ***$Chemistry goes with styled components*** | **Doug: *"Please test with styled components. $Chemistry goes with styled components."*** *Styling is authored as styled-components; the v6 default-import differs between ESM and CJS builds, so the callable is resolved through both shapes — [`dev.ts`](../../../chemistry/package/src/implementation/dev.ts) carries the pattern and [`dev-panels.test`](../../../chemistry/package/tests/implementation/dev-panels.test.tsx) the promise: styled, and no style attribute.* | ***2026-09-02*** |

### <a id="the-chemistry"></a>The framework's own authoring guide

**[`chemistry/.lib/authorship/`](../../../chemistry/.lib/authorship/.cover.md) governs how `$Chemistry` itself is written**, *and `lib` is written against it — so a refactor in `lib` can still break a rule that lives here.*

| | it rules |
|---|---|
| **[The Grammar](../../../chemistry/.lib/authorship/01-the-grammar.md)** | *the shape of a chemical* |
| **[Structural Patterns](../../../chemistry/.lib/authorship/02-structural-patterns.md)** | *composition, the binding constructor, and **specification — types expressing what must exist after a bond*** |
| **[The Export Pattern](../../../chemistry/.lib/authorship/03-the-export-pattern.md)** | *how a class reaches a caller* |
| **[The Reactivity Contract](../../../chemistry/.lib/authorship/04-the-reactivity-contract.md)** | ***what a view may and may not do*** — *object purity lives here, and it is the rule most likely to be broken by an innocent-looking change* |
| **[Composing with React](../../../chemistry/.lib/authorship/05-composing-with-react.md)** | *the boundary with React* |
| **[Glossary](../../../chemistry/.lib/authorship/06-glossary.md)** | *the words* |

### <a id="the-migration"></a>The migration record — not a rule, but read it before deleting anything

**[What Carries Over](../the-type-system/01-what-carries-over.md)** *(**2026-08-28**)* — ***v1 against v2, measured on the day: 51 files and 3,498 lines against 19 and 830.*** **It is the document that says which v1 ideas were kept deliberately and which were dropped deliberately**, *which is exactly the distinction a cleanup cannot make from the code alone.*

---

## <a id="the-annotation"></a>The annotation, and how a new document enters

***Every sprint chapter carries one field, and it points here rather than listing the documents.***

```
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
```

**Where a sprint PRODUCED a style document, its field names it** — *so the sprint record says what rule came out of it, and this page says what rules exist.* ***The pointer is one hop and the list has one home; adding a document means editing this chapter, not thirty-one others.***

**A new style document enters by three steps:**

1. ***It is written where its subject lives*** — *a rule about writing `lib` goes in this book; a rule about writing `$Chemistry` goes in [authorship](../../../chemistry/.lib/authorship/.cover.md).*
2. ***A row is added above***, saying what it rules in one line and the date the ruling was given.
3. ***The producing sprint's `style:` field names it***, so the rule and the argument that produced it are one hop apart in both directions.

---

## <a id="open"></a>What has no document yet

***Named so the gaps are visible, and none of them is proposed here.***

- ***Naming.*** **[The rule that names are Doug's](../../../../.claude/library/..teamsmanship/05-territory.md) is a team protocol, not a code style**, *and there is no chapter saying how a name in `lib` is chosen or retired.* **[Sprint 29 carries a `Names owed` section](../projection/29-the-bind.md#handoff-names) that has already outlived one of its own entries.**
- ***Testing.*** *[The unit-of-code rule reaches the suite](../projection/28-the-block.md) — per-level test files, because an invariant is stated over a level — **but that is recorded inside a sprint rather than as a rule.***
- ***Comments — CLOSED 2026-08-30, the WHY completed 2026-09-03, and the LIFECYCLE given 2026-09-09; the rule now has its own row [above](#comments) and this line is kept so the gap list still names it.*** **Doug: "We don't comment code so that blobs like this stand out as complex."** *The ban is not only staleness-hygiene — it is the COMPLEXITY DETECTOR: a comment dresses density up as documented, while bare code confesses on sight. A blob that needs explaining needs simplifying, and the rule is what makes that visible.* ***The one written exemption:*** **`.spec` files are commented examples by convention** — they exist to be read as prose beside their drawings; `src` proper stays bare.
- ***The old row:*** **The instruction is now stated twice in the branch and both times in Doug's own words:** *[O8](../the-condition-report/02-organization.md#o8) rules it and links the file; [The Order of a Class](02-the-order-of-a-class.md) carries the restatement — "no code comments; that data is moved to the library branch and the library branch references the code files" — and [The Closeness Rule](04-the-closeness-rule.md#what-it-forbids) lists it among what the law forbids.* ***The direction of the link is the part that matters and is easy to get backwards: the BOOK links to the FILE, never the reverse.***
- ***The word `canonical`.*** **It carries two meanings in one codebase** — *v2's boolean "is this an ordinary member of its kind", and [the derivation's representative that stands for the whole](../the-semantics-of-books/06-the-canonical-echo-and-views.md)* — **and [the second exists under no name](../projection/00-planning.md#canonical-collision).** ***That is a ruling Doug owes, and it must not be settled by a refactor.***

---

## <a id="the-drawing-conventions"></a>THE DRAWING CONVENTIONS — ***given 2026-09-10, and conventions rather than rules on Doug's word***

***Doug, on being offered a validation:*** **"You can validate NO direct view if you want, though I think that's kind of serious. I would rather add it as a convention. Maybe a rule meant to be broken someday but not in the framework, in the library where most implementations are terminal."** *So these are written here and nothing enforces them; they govern `@dna-platform/public`, where a kind is usually the last word on how it draws.*

| | the convention | why |
|---|---|---|
| ***a kind overrides `print`, not `view`*** | **`view()` builds the content, applies the meaning and the formats, and hands it to `print(content)` — which is the one method a kind writes.** *A `view()` override skips all of it: measured 2026-09-08, 32 of 33 anchors on `/turing` were unreachable by any sheet because `$Reference` and `$Ref` override `view()`.* ***ENFORCED 2026-09-10:*** **the five remaining overrides are swept and classless anchors went 65→0 on the paper and 32→0 on `/turing`.** *A kind that is not there to be seen declares `parenthetical` instead; the ONE override left is `$Format`, which is [a design owed](../projection/63-sprint-57--finishing-latex-and-markdown.md#u3) rather than an exception.* | the classes and the formats are applied in `view()`, so leaving it is leaving them behind |
| ***one prefix names ONE selector — and one selector is named by ONE prefix*** | **The first half broke a build; the second half draws the wrong page in silence.** *The base sizes `h2.pd-heading` under `h2_` and the article theme sizes it under `head_`, so markdown overrode one, lost the tie at equal specificity, and drew its section headings at exactly its title's size* — [the whole diagnosis](../solutions/68-the-value-that-was-said-twice.md). | equal specificity means SOURCE ORDER decides, and source order across a base and its subclass is invisible from the subclass |
| ***`@select` selects CLASSES, never element types*** | **Doug: "Select classes… We put TONS of classes on there."** *Every writing already carries its `pd-` names, so a rule that says `h2.pd-heading` or `figure img` is reaching for something the class list already offers.* | an element type is the drawing's business and a class is the KIND's, and a sheet addresses kinds |
| ***a format never adds an element*** | **Doug: "We don't want ANY formatter ever adding an element."** ***Not true today, and the reason is structural:*** `$Format.format()` returns `<Worn of={this}>{drawn}</Worn>`, and chemistry restyles in place only for *"a class that WROTE the element it is styled as"* ([particle.ts](../../../chemistry/package/src/abstraction/particle.ts)) — **a format never writes it, its holder does, so it wraps every time.** | measured: `<div of="$Chemistry.$IllustrationFormat"><img class="pd-image">`, and that div is invisible in flow and fatal wherever a layout positions its own children |

### <a id="what-the-wrapper-cost"></a>What the wrapper has already cost, so the convention is not abstract

***Three attempts died on it in two days, each measured:***

- **`$BookFormat`** restyled the sheet in place — the book came back as `sc-jSFhYz cwmvBt pd-aaronson pd-book`.
- **`$ChapterFormat`** wrapped every contents entry and drew **10 refusal panels, 0 contents**.
- **`$Image` in the portal's language ring** could not drop in where `$Logo` stood, because the format's `<div>` broke a layout that positions its own children.

***And `styled = true` without a selector is not the escape it looks like.*** *[particle.ts](../../../chemistry/package/src/abstraction/particle.ts) says `styled` "decides outright", but with no selector nothing compiles — measured: the table's `grid-template-columns` was absent from the emitted CSS entirely.* **Making this convention true means a format contributing its class to what it clothes rather than an element around it, which is a change to `format()` and not to any one format.**

---

## <a id="the-build-caution"></a>A MINIFIER MUST PRESERVE CLASS NAMES — ***given 2026-09-10***

***Doug, on being warned that deriving a type's name from its class depends on a runtime name:*** **"I don't like the minification rule. Let's leave this and write down somewhere that a minifier needs to be used with caution. Preserve class names and identifiers would be likely."**

**So it is written here rather than designed around.** *A build that renames classes breaks this library in a way no test catches, because everything still runs — the names simply come out wrong.*

| what depends on a runtime name | where |
|---|---|
| ***every type's `name`*** | `$Type` derives it from `this.constructor.name` — `$TypeOfCode` answers `Code` — **so no type writes its name by hand.** Sixty-two `override name = '…'` lines were deleted the day this was given |
| ***every `pd-` class*** | [`reflection.classNames`](../../package/src/utilities/Reflection.tsx) reads `writing.constructor.name` for kinds a consumer declares without a type of their own |
| ***`authored()`*** | already strips a bundler's decoration — `_$Editions2` and `$Editions` name the same kind — **which handles rollup's rewriting but NOT a minifier's renaming** |

***The requirement, stated plainly: a production build of anything consuming `@dna-platform/public` must keep class names.*** *In terser that is `keep_classnames`; in esbuild, `--keep-names`.* **Nothing in the repository enforces it and no promise fails without it** — the pages simply draw `pd-a` where they meant `pd-appendix`, and every sheet stops matching.
