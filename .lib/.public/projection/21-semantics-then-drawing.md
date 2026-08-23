# Semantics, Then Drawing

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

*Opened 2026-08-23 at the close of [The Audit](20-the-audit.md), which found the faults and collected the rulings. **Status: `requirements-only`.** Nothing here has been planned and nothing has been built.*

*The title is **Doug's own sentence**, said when he was asked which half to do first: **"Semantics first, then drawing."** Standing for correction like every proxy on this branch.*

**Identifiers continue from [The Audit](20-the-audit.md).** Requirements begin at **R105**, units at **U109**, decisions at **D62**.

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) — *done, and it was the audit* → **[ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) — next** → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

---

# The objective

***Fix the faults the audit found in `lib` and the compiler, in the order Doug ruled, without designing anything new.***

**His intent, in his own words across the audit:**

> *"Let's clean the new stuff."*
>
> *"Try to pare this down to the actionable things so we can address them next sprint."*
>
> *"Semantics first, then drawing."*
>
> *"There should be nothing static in this entire framework — not chemistry, just the `lib` framework — that is not a member. Fix that."*
>
> *"Don't force it if it is creating semantic situations where [things] seem forced."*

**And the frame the audit ran under, which still governs:** *`lib` realizes a first-order theory of semantics whose canonical semantics are library semantics*, **so a name that does not fit the semantics of books is a defect in the theory's realization and not a style preference.**

## Where the requirements come from, and why they are not restated here

***Every requirement below is [one of the Condition Report's 23 problems](../the-condition-report/06-the-cleaning.md#actionable)***, and each of those carries **the ruling Doug gave, verbatim, next to the entry that measured the fault.** *The report is the account; this chapter is the work.* **Read the problem before planning the requirement** — several of the rulings carry a warning that changes what the fix may do.

***These requirements are APPROVED.*** *Doug ruled each one in the room, which is what [ce-plan's first step](../../../../.claude/library/our-skillset/29-ce-plan.md) asks for before it will run.*

# Requirements

## 0 · Hygiene — nothing here is owed a decision

| | in plain words | the problem |
|---|---|---|
| <a id="r105"></a>**R105** | **A book's card and a book's contents agree about its chapters** — today the card lists a chapter the contents excludes, on all seven books, because the compiler counts by position where the model answers | [P1](../the-condition-report/06-the-cleaning.md#actionable) · [I21](../the-condition-report/05-implementation.md#i21) |
| <a id="r106"></a>**R106** | **The dead code is gone** — 350 lines nothing imports and 28 unused imports, one of them a module importing itself | [P2](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r107"></a>**R107** | **No signature carries a parameter nothing passes** — there are three | [P3](../the-condition-report/06-the-cleaning.md#actionable) · [I17](../the-condition-report/05-implementation.md#i17) |

## 1 · Semantics — first, by Doug's order

| | in plain words | the problem |
|---|---|---|
| <a id="r108"></a>**R108** | **The author, the subject and the canonical differ by their validation and not by being copied** — today they are byte-identical under a name substitution, where the theory says validation is the whole of the difference. They gain a shared parent at phrase grade, each with its own `valid()` | [P4](../the-condition-report/06-the-cleaning.md#actionable) · [S2](../the-condition-report/04-semantics.md#s2) |
| <a id="r109"></a>**R109** | **A card implements everything a book implements** — a surrogate that satisfies one of two interfaces is not standing in for the book. Doug's ruling replaces the card outright | [P5](../the-condition-report/06-the-cleaning.md#actionable) · [S20](../the-condition-report/04-semantics.md#s20) |
| <a id="r110"></a>**R110** | **A book carries what it IS and what it is ABOUT, and its card mirrors them** — nothing carries either today; the annotations lift from the cover to the book, and a book's library is recursive | [P6](../the-condition-report/06-the-cleaning.md#actionable) · [S17](../the-condition-report/04-semantics.md#s17) |
| <a id="r111"></a>**R111** | **Nothing extends a parent whose members it does not use, and no child silently narrows what its parent specifies** — four classes do | [P7](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r112"></a>**R112** | **Validation can be specialized rather than replaced** — today every subclass overrides `valid()` whole, so a parent's requirement disappears without anyone saying so | [P8](../the-condition-report/06-the-cleaning.md#actionable) · [S8](../the-condition-report/04-semantics.md#s8) |
| <a id="r113"></a>**R113** | **One question is answered once** — six questions currently have several answers apiece, among them what a thing's copy is, what its title is, and which document it sits in | [P9](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r114"></a>**R114** | **Nothing in the framework is static or module-level unless it is a member** — sixteen things are, and two of them are the same function written twice in two files | [P10](../the-condition-report/06-the-cleaning.md#actionable) · [I22](../the-condition-report/05-implementation.md#i22) |

## 2 · Drawing — second, and only after the semantics move

| | in plain words | the problem |
|---|---|---|
| <a id="r115"></a>**R115** | **A consumer of the package can have their own theme** — today the framework declares a global type about styled-components, so they cannot. ***This one goes first within its group***, because once it is done every later miss is a type error rather than a blank page | [P11](../the-condition-report/06-the-cleaning.md#actionable) · [I5](../the-condition-report/05-implementation.md#i5) |
| <a id="r116"></a>**R116** | **Every class holds its look as a component, changeable by prop, by subclass and by scope** — 33 style objects currently hold weight, tracking and leading that no theme can reach, five classes skip the drawing template, and one branches on a hex literal | [P12](../the-condition-report/06-the-cleaning.md#actionable) · [I2](../the-condition-report/05-implementation.md#i2) |
| <a id="r117"></a>**R117** | **No flag encodes what the hierarchy or the notation already says** — three do, one of them is never set, and removing one deletes an eight-step walk | [P13](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r118"></a>**R118** | **No English sentence is hardcoded where a book cannot reach it** — the framework speaks two | [P14](../the-condition-report/06-the-cleaning.md#actionable) · [N33](../the-condition-report/03-names.md#n33) |

## 3 · Names — the words are given; these are the acts

| | in plain words | the problem |
|---|---|---|
| <a id="r119"></a>**R119** | **No word carries two meanings** — `$for` currently means a key, a card and a reference, and one of the three is a prop for no reason. ***"Don't make anything a prop unless it needs to be"*** | [P15](../the-condition-report/06-the-cleaning.md#actionable) · [N2](../the-condition-report/03-names.md#n2) |
| <a id="r120"></a>**R120** | **An annotation finds its own card** — today it cannot, so the compiler injects one into an element a person authored. *"I think you understand the problem. I want you to clean it up."* | [P16](../the-condition-report/06-the-cleaning.md#actionable) · [I14](../the-condition-report/05-implementation.md#i14) |
| <a id="r121"></a>**R121** | **The nine misfit names are taken** — two dissolve and seven are renamed to the words Doug gave: *"Take the set"* | [P17](../the-condition-report/06-the-cleaning.md#actionable) · [Names](../the-condition-report/03-names.md) |
| <a id="r122"></a>**R122** | **A predicate says what it tests** — five do not, and two of the five stop existing entirely, because a thing handles its own case inside its own view | [P18](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r123"></a>**R123** | **The theme's struck word is replaced** — `mark` becomes `$accent`, which is Doug's own word from the binding sprint | [P19](../the-condition-report/06-the-cleaning.md#actionable) · [N1](../the-condition-report/03-names.md#n1) |

## 4 · The compiler — which is audited too, and may use compiler words

| | in plain words | the problem |
|---|---|---|
| <a id="r124"></a>**R124** | ***The compiler's 1,930 lines get the member, interface and naming pass the framework got*** — they have never had one. **This is reading, and it comes before R125 and R126 are built** | [P23](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r125"></a>**R125** | **The compiler's thirteen modules are organized by what they do** — five kinds currently sit in one flat directory | [P20](../the-condition-report/06-the-cleaning.md#actionable) · [O13](../the-condition-report/02-organization.md#o13) |
| <a id="r126"></a>**R126** | **Nothing tracks how an answer was arrived at merely in order to print it** — five of `Source`'s six uses are printing; making emitting idempotent deletes it | [P21](../the-condition-report/06-the-cleaning.md#actionable) |
| <a id="r127"></a>**R127** | **There is one seam type per stage, and a type called `Named` is called what its own file calls it** — a card. Doug asked for alternate designs here rather than a rename | [P22](../the-condition-report/06-the-cleaning.md#actionable) |

## 5 · Three the problems list did not carry, found by reading every entry against it

***The [coverage ledger](../the-condition-report/06-the-cleaning.md#every-entry) was built by walking all ninety-three entries against the twenty-three problems.*** **Three actionable things had no problem to sit in**, which is the reason a ledger exists at all.

| | in plain words | the problem |
|---|---|---|
| <a id="r128"></a>**R128** | ***The struck and stalled names are taken*** — seventeen entries are marked for this step and only nine appear among the problems. **`$first`, `$in`, `url`, `contentish`, `properties`, `written`/`printed`, the theme's three structural stand-ins and the two dead ones are the rest.** ***GATED: fourteen of them are [waiting on a word that is Doug's to give](../the-condition-report/06-the-cleaning.md#the-words-owed), and that is one conversation rather than fourteen*** | [the ledger, B](../the-condition-report/06-the-cleaning.md#every-entry) |
| <a id="r129"></a>**R129** | **Each of the three programs states what its own unit of code is, and why** — a class in `lib`, a concern in `$Chemistry`, a phase in the compiler. *All three are defensible; **what is not defensible is that nothing says so.*** **One page, not a refactor** | [C2](../the-condition-report/07-the-three-codebases.md#c2) |
| <a id="r130"></a>**R130** | ***`Chemistry` becomes `$Chemistry`*** — the one class in that package wearing no `$`, and `$` itself is an instance of it. **NOT a one-character act:** `$Chemistry`'s `dist` is rebuilt, then `lib`'s against it, or the repository runs two copies that disagree. ***This is outside `lib` and is its own act*** | [C7](../the-condition-report/07-the-three-codebases.md#c7) |

## Who takes what — proposed, because territory does not reach these paths

***[Territory](../../../../.claude/library/..teamsmanship/05-territory.md) assigns the application and the demonstration and stops there.*** **Neither `package/src` — the framework — nor `build/` — the compiler — has a named owner**, so Arthur holds them as the `**` fallback. *That is a gap in the territory record and not a gap in the work; it is flagged here rather than fixed, because the record lives in another repository.*

| group | proposed | why |
|---|---|---|
| **hygiene** · R105–R107 | **Arthur** | *structure and dead weight; nothing here is anyone's perspective* |
| ***semantics*** · R108–R114 | ***Cathy***, with **Libby** on the book words | *the framework's own semantics, and the words are library words* |
| **drawing** · R115–R118 | **Phillip**, with **Gabby** | *the visible layer, and the look-as-component shape is a design decision as much as a code one* |
| **names** · R119–R123, R128 | **Libby**, ruled by **Doug** | ***the words are his***, and a librarian holds the register until he gives them |
| **the compiler** · R124–R127 | **Arthur**, with **Adam** | *`build/` is infrastructure, and the reading comes first* |
| **the rebuild chain** · R130 | ***Adam*** | *a dependency rebuild across two packages is exactly his question* |
| ***every requirement's promise*** | ***Queenie*** | **[a test is a promise](../../../../.claude/library/..teamsmanship/..team/queenie/test-architecture/.cover.md)**, and this sprint is mostly subtraction, which is where a promise is worth most |

# The order, and it is ruled rather than chosen

***Hygiene → semantics → drawing → names → the compiler.***

**Doug's reason for the middle pair:** *semantics first, then drawing* — and the audit's reason is that **six of the drawing requirements touch classes the semantic work re-parents**, so the other order means touching them twice.

**Two orderings inside the groups are load-bearing and neither is a preference:**

- ***[R115](#r115) precedes every other drawing requirement***, because deleting the global augmentation turns every remaining miss into a compile error instead of a page that renders wrong.
- ***[R124](#r124) precedes [R125](#r125) and [R126](#r126)***, because a reorganization planned before the reading is a guess about what the modules are.
- ***The names come AFTER the drawing***, which is [the audit's own reason](../the-condition-report/06-the-cleaning.md#the-order): **a rename during a sweep hides the sweep.**
- ***The theme gains its member for type before any style object empties into it*** — a style object cannot move into a member that does not exist.

**The audit wrote an eleven-step order before Doug ruled the groups.** *[It stands as the within-group detail](../the-condition-report/06-the-cleaning.md#the-order) — the forced positions above are read off it — and **the group order here supersedes it**, because it was written first.*

# <a id="what-is-not-in-this-sprint"></a>What is NOT in this sprint

| | |
|---|---|
| ***design owed*** | **how a consumer adds a notation** · **one `$Code` whose level moves** · **lowering** · **a composition that is also a reference**. *Four things with no mechanism yet, [named in the report](../the-condition-report/06-the-cleaning.md#actionable) and [denied units by the planning rule](../../../../.claude/library/our-skillset/29-ce-plan.md).* |
| ***out of scope*** | **the application, the demonstration and the Lab** — ***nine entries, counted off the markers rather than kept beside them***: `O2` `O3` `O4` `O5` `O9` `O12` `I18` `I19` `I20`. [Scoped out by Doug](../the-condition-report/01-how-to-read-this.md#the-scope), identifiers kept, [and held here](../the-condition-report/06-the-cleaning.md#the-rest) |
| ***`$Chemistry`*** | **not audited and not touched.** *A change there requires rebuilding its dist and every dependent library against it — Doug's own condition.* |
| ***the team library's 93 remaining uses of a struck word*** | **owed, and not this sprint's work** — *a tending pass in another repository* |

***And the whole of it is held in one place: [THE REST OF THE AUDIT](../the-condition-report/06-the-cleaning.md#the-rest)***, which names every piece the sprint does not take, why, and who holds it. **That section exists because Doug asked for it by name:** *"handoff the rest of the audit too because we have to keep track."*

# What to read first

***Five things, each with what is load-bearing in it. This is a starting point and not a boundary.***

| | what is load-bearing there |
|---|---|
| [The Condition Report · the problems](../the-condition-report/06-the-cleaning.md#actionable) | ***the requirements above ARE these 23 entries***, each carrying Doug's ruling verbatim and, in several cases, a warning that limits what the fix may do |
| [The Condition Report · how to read this](../the-condition-report/01-how-to-read-this.md) | **what is being audited and what is not**, the struck vocabulary, and the five strata — *which say when each part of the framework was written, and therefore which standard it was held to* |
| [`Writing.tsx`](../../package/src/writing/Writing.tsx) and [`Paragraph.tsx`](../../package/src/writing/Paragraph.tsx) | ***the 2026-07-31 spine — the best code in the package***, and the standard everything else in this sprint is being brought up to |
| [I22](../the-condition-report/05-implementation.md#i22) | the statics ruling, ***and the warning attached to it***: a thing shared by two siblings and not by the family belongs to neither the module nor the base |
| [chapter zero](00-planning.md) | the standing plan, and the four-way split saying which book answers which question |

# How to see it

*There is nothing to look at yet — no unit has run. **When there is:*** `npm run dev` in [`library/.public/package`](../../package/) serves the framework's own app, and `npm run dev` in [`library/.public/app`](../../app/) serves the public library. **The gates are `npm test` in the package** — which is `tsc --noEmit`, the app typecheck, and `vitest run` — **and `npm test` in the app**, which is the typecheck and the library driver.

---

# Where things stand

*One state, written 2026-08-23 at the session's close. **This chapter has requirements and nothing else.***

## → THE NEXT ACTION

***Run [`/ce-plan`](../../../../.claude/library/our-skillset/29-ce-plan.md) against this chapter.*** **Its requirements are approved** — Doug ruled every one of them in the room during [The Audit](20-the-audit.md) — **so the plan does not go back to a brainstorm.** *What the plan owes is units, files, test scenarios and risks, in the ruled order above, and it may not pre-write the implementation.*

**The subject is Doug's, not this handoff's guess:** *"pare this down to the actionable things so we can address them next sprint."*

## What is done

***Nothing in this sprint.*** *[The Audit](20-the-audit.md) is closed and compounded — **ninety-three entries**, nine scoped out, the rest ruled, left, owed or taken — and what remains is the twenty-six requirements above.*

## What is not started

***All twenty-six.*** *R105–R130, none planned, none built.*

## The one thing waiting on Doug, and it does not block the plan

***[R128](#r128) is gated on fourteen words.*** **The renames are decided; the WORDS are not, and [naming is his](../the-condition-report/06-the-cleaning.md#the-words-owed).** *It is one conversation rather than fourteen questions, and it can happen at any point before the names group runs — **which is last but one**, so the plan proceeds without it.*

## The size, already measured

***Roughly 600–700 changed lines across about 30 files, and almost every step is a SUBTRACTION*** — [measured before anything was divided](../the-condition-report/06-the-cleaning.md#the-size). **1,100 lines of drawing surface · 33 style objects in 19 files · 25 casts the transient prop deletes · 230 hand-forwarded lines · a 156-line triple becoming ~75 · 350 dead lines.**

***This is one to two sessions and it is NOT a divided plan*** — *the same measurement that [turned The Build's seven tracks back into one session](15-the-build.md).* **The ownership table above is who holds a group's perspective, not seven parallel sessions.**

## How to know it worked, and it is not a count

***Every gate this branch runs is a count, and [every entry in the report was true while all of them were green](../the-condition-report/01-how-to-read-this.md#why-no-gate).* [Four things a count cannot fake](../the-condition-report/06-the-cleaning.md#the-test)** — chief among them **one `$Title` drawn three ways on one page**, by prop, by subclass and by registration, *with a fourth left untouched and still the default.* **That is the demo, and it is what makes the drawing group reviewable.**

## Verified fresh at the audit's close — the baseline this sprint moves

*framework suite **336/336** in 30 files · `tsc` **0** · `tsc --noUnusedLocals` **28 dead imports** · demonstration `typecheck` **FAIL, 6 unexpected** · `style={{` **33** · forwarding **48 calls / 230 lines** · statics and module-level in `lib` **16** · comment lines in `package/src` **1**.*

***Several of these ARE the requirements' measures*** — 28 dead imports is [R106](#r106), 33 style objects is [R116](#r116), 16 statics is [R114](#r114) — *so at least three of the twenty-six already have a numeric end, and the plan should look for more.*

## Where the rest of the audit is held

***[THE REST OF THE AUDIT](../the-condition-report/06-the-cleaning.md#the-rest)*** — nine entries scoped out to the application and the demonstration, `$Chemistry`'s reflection road ruled ignore, three designs owed, fourteen words owed, the leaves and the monitors, and a struck word still standing 93 times in another repository. **Every piece names why it is not here and who holds it.**

## Wrong turns already taken, so they are not taken again

| | |
|---|---|
| ***A grep written from a guess, reported as a measurement*** | a 705-line file was called an orphan because the search looked for two import specifiers and the real one was a third. **[Filed as a defect](../solutions/24-the-orphan-that-was-not-an-orphan.md)**; the practice is to sweep from the FILE, never from the guessed specifier |
| ***A fault asserted against a design that was already written down*** | an entry claimed a book's `ref` returning its cover was wrong; chapter zero says a cover IS how you point at a book, and Doug's answer was that **references are not unique**. Withdrawn |
| ***Four questions put to Doug that the library already answered*** | [compounded into ce-review](../../../../.claude/library/our-skillset/33-ce-review.md#a-question-the-library-answers-is-not-a-question). **Grep the whole branch library before asking, and say in the question that you did** |
| ***Padding the register with things that were not faults*** | two entries were written up and struck on Doug's *"I don't see a problem"*. **An entry that cannot name what breaks is not an entry** |
| ***A span replacement that duplicated a chapter instead of replacing part of it*** | [The Cleaning](../the-condition-report/06-the-cleaning.md) carried **two copies of its own register** for a day, from an edit whose end offset came before its start. **Both were byte-identical and neither was wrong, which is why nothing caught it.** *Repaired at this handoff by measuring the duplicate before cutting it* |
