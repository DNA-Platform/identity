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

# The order, and it is ruled rather than chosen

***Hygiene → semantics → drawing → names → the compiler.***

**Doug's reason for the middle pair:** *semantics first, then drawing* — and the audit's reason is that **six of the drawing requirements touch classes the semantic work re-parents**, so the other order means touching them twice.

**Two orderings inside the groups are load-bearing and neither is a preference:**

- ***[R115](#r115) precedes every other drawing requirement***, because deleting the global augmentation turns every remaining miss into a compile error instead of a page that renders wrong.
- ***[R124](#r124) precedes [R125](#r125) and [R126](#r126)***, because a reorganization planned before the reading is a guess about what the modules are.

# <a id="what-is-not-in-this-sprint"></a>What is NOT in this sprint

| | |
|---|---|
| ***design owed*** | **how a consumer adds a notation** · **one `$Code` whose level moves** · **lowering** · **a composition that is also a reference**. *Four things with no mechanism yet, [named in the report](../the-condition-report/06-the-cleaning.md#actionable) and [denied units by the planning rule](../../../../.claude/library/our-skillset/29-ce-plan.md).* |
| ***out of scope*** | **the application, the demonstration and the Lab** — ten entries, [scoped out by Doug](../the-condition-report/01-how-to-read-this.md#the-scope) and keeping their identifiers |
| ***`$Chemistry`*** | **not audited and not touched.** *A change there requires rebuilding its dist and every dependent library against it — Doug's own condition.* |
| ***the team library's 93 remaining uses of a struck word*** | **owed, and not this sprint's work** |

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

***Nothing in this sprint.*** *[The Audit](20-the-audit.md) is closed and compounded — 91 entries written, 10 scoped out, 20 ruled or closed, and the 23 that remain are the requirements above.*

## What is not started

***All 23.*** *R105–R127, none planned, none built.*

## Blockers

***None.*** *Every requirement here carries a ruling. The four things that had no mechanism were separated out as [design owed](#what-is-not-in-this-sprint) precisely so nothing in this chapter is waiting on a decision.*

## Verified fresh at the audit's close, and this is the baseline the sprint moves

*framework suite **336/336** in 30 files · `tsc` **0** · `tsc --noUnusedLocals` **28 dead imports** · demonstration `typecheck` **FAIL, 6 unexpected** · `style={{` **33** · forwarding **48 calls / 230 lines** · statics and module-level in `lib` **16** · comment lines in `package/src` **1**.*

***Several of these ARE the requirements' measures*** — 28 dead imports is [R106](#r106), 33 style objects is [R116](#r116), 16 statics is [R114](#r114) — *so the sprint has numeric ends for at least three of its twenty-three, and the plan should look for more.*

## Wrong turns already taken, so they are not taken again

| | |
|---|---|
| ***A grep written from a guess, reported as a measurement*** | a 705-line file was called an orphan because the search looked for two import specifiers and the real one was a third. **[Filed as a defect](../solutions/24-the-orphan-that-was-not-an-orphan.md)**; the practice is to sweep from the FILE, never from the guessed specifier |
| ***A fault asserted against a design that was already written down*** | an entry claimed a book's `ref` returning its cover was wrong; chapter zero says a cover IS how you point at a book, and Doug's answer was that **references are not unique**. Withdrawn |
| ***Four questions put to Doug that the library already answered*** | [compounded into ce-review](../../../../.claude/library/our-skillset/33-ce-review.md#a-question-the-library-answers-is-not-a-question). **Grep the whole branch library before asking, and say in the question that you did** |
| ***Padding the register with things that were not faults*** | two entries were written up and struck on Doug's *"I don't see a problem"*. **An entry that cannot name what breaks is not an entry** |
