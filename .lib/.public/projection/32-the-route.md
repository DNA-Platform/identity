# The Route

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** `implementation-ready` — ***requirements approved 2026-08-31; [the guardrails](#the-plan) are set and [`/ce-work`](../../../../.claude/skills/ce-work/SKILL.md) may run.***
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force.*

---

# <a id="which-part"></a>Which part of the plan this sprint accomplishes

***This is SPRINT TWO OF FIVE in [the reference plan](00-planning.md#the-reference-plan)***, *per Doug's standing instruction that every sprint built on that plan says which part of it is discharged.*

**The plan's own line for sprint two:**

> ***2 · The reference*** — **a reference as an annotation with `$TypeOfReference`; the specification that refuses one without a path; the anchor as a default view.** *You would see: prose with live links in it, and a bad reference refused with a reason.*

***All three of those landed inside [sprint one](30-the-reference.md), which is why Doug's word at this brainstorm was "we mostly finished the second."*** **So this chapter is sprint two's REMAINDER**, *and it carries [R1–R3](30-the-reference.md#s1) as already satisfied, plus what sprint one's close listed as outstanding.*

***It also takes the work that has no home in the five*** — **[`ref` itself](30-the-reference.md#r7), which the plan allocated to sprint ONE and which was never built.** *Verified 2026-08-31: `ref` has zero occurrences in [`src`](../../package/src/).*

***The seam with [sprint three](33-the-handle.md) runs one way and is Doug's:*** **this sprint owns `view()` and `$active`; three owns `read()`, the catalogue, and anything that hands out a reference nobody wrote.** *If this sprint needs a handle to render, that is the seam being crossed and the answer is that it waits.*

---

# <a id="reading"></a>Required reading

***Doug, 2026-08-31: "read coding conventions from a few sprints ago. Link to it in our sprint as required reading."*** **The four style chapters are required rather than recommended for this sprint**, *because it edits classes that every one of them rules on.*

| | what it rules, and why this sprint needs it |
|---|---|
| **[The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)** | ***the index of every rule in force***, and the three-register table that says when to go to [the condition report](../the-condition-report/.cover.md) or [Solutions](../solutions/.cover.md) instead |
| **[The Unit of Code](../designing-inexplicable-phenomena/07-the-unit-of-code.md)** | ***the file is the WORD*** — *so a new word arrives as one file holding its data, its law and its meaning, never three* |
| **[The Order of a Class](../designing-inexplicable-phenomena/08-the-order-of-a-class.md)** | ***fields · properties · bond constructor · constructor · methods · protected · private***, and **the property test: argumentless AND returns data** |
| **[The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md)** | ***where a member goes*** — the type holds the meaning, the instance holds the data |
| **[The Closeness Rule](../designing-inexplicable-phenomena/12-the-closeness-rule.md)** | ***what is written inside a class***, and that **art is what you do where the convention is SILENT** — never a licence to bend one |

***Beyond the style documents, four things this sprint reads and one it must not re-derive:***

1. **[Chapter zero's reference plan](00-planning.md#the-reference-plan)** — *the five sprints, and [the sprint-two agenda](00-planning.md#v2) this brainstorm is answering.*
2. **[The Reference](30-the-reference.md#where-things-stand)** — *sprint one's close: what it built, what it refused, and the wrong turns not to retry.*
3. **[The Reference, and What It Points With](../the-semantics-of-books/16-the-reference-and-its-locator.md#inscription)** — *outgoing is authored, incoming is compiled. That sentence decides the `means` fork.*
4. **[The rules that only held for a class](../solutions/35-the-rules-that-only-held-for-a-class.md)** — ***a type's rule is written against WRITING, never against its canonical form's members.*** *The next reference rule walks into this trap.*
5. **[Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md)** — ***any getter whose body contains `$(<…/>)` is a reading, not an accessor***, and it may not be called from a view. **`ref` computes a route; if it builds a chemical it meets this wall on the first render.**

---

# <a id="rulings"></a>What Doug ruled, in his own words

*Recorded verbatim at the brainstorm, 2026-08-31, because [a ruling is the most expensive thing a session can lose](../../../../.claude/skills/ce-handoff/SKILL.md).*

## <a id="the-route"></a>The route — and it answers `ref`, the code question, and the collision at once

> ***"This is why we assign an index. Maybe we want the anchor to look like:***
>
> ***`File>Document>Section>Paragraph>Sentence>Number>Letter`***
>
> ***And it stops wherever, so a paragraph reference would have four parts. We can have bookmarks eventually that go to the document level and we can highlight like on the kindle app. And from the structure, we will know what book we have active by index. Composition, if giving an indexed list, should always afford us this for the canonical material.***
>
> ***If we want something a bit more extensible:***
>
> ***`F:index>D:index>S:index>Pa:index>Se:index>Nu:index>Le:index`***
>
> ***Something like that but it's bigger. I think that's probably the pattern that we want."***

***Three things that had no answer now have one, and none of them was asked in this sprint.***

| | it closes |
|---|---|
| **the route is a walk, not a string** | ***[R7](30-the-reference.md#r7) — `ref`, which the plan gave to sprint one and which was never built.*** *A route's depth IS the grade of its target: four steps reach a paragraph, seven reach a letter.* |
| **the codes live on the LEVEL** | ***[sprint one's open question 2](00-planning.md#v1) — "what IS a code, and where does it live?"*** *It was recorded as unasked; the two-letter form answers it.* |
| **two letters, not one** | ***the level collision***, *recorded as a blocker: Section/Sentence, Paragraph/Path, Word/Writing all collide on their first letter.* |

**And the derivation is his too** — *"composition, if giving an indexed list, should always afford us this"* — **which is the same design as his ruling that closed [the `canonical` blocker](00-planning.md#plan-blockers):** *"It will be set on the parts and the parts will be used for references."* ***So `ref` is COMPUTED by walking the composition and is never stored.***

<a id="nu"></a>> ***ONE THING FLAGGED RATHER THAN BUILT.*** **His list reads `…Se:index>Nu:index>Le:index`, and the seven levels have `$Word` where `Nu` stands.** *Read as a slip for `Wo` — but [the discipline is that a real rename arrives with a reason and a slip arrives with nothing](00-planning.md#naming-discipline), and this arrived with nothing.* ***Asked, not assumed.***

## <a id="the-slug"></a>Indexes break, and a slug is what says so

> ***"Writing isn't inserted. This is a library not a writing app. Yes, we break indexes when we write more. But those should be the canonical indexes. We can always add a way to insert a highlight not as a pointer like that, but as a wrapper around some of the text. But how does it persist? The quote that detects rot isn't useful. Just publish a version and assume all links break perhaps? I don't mind the reference having a 5-word slug at the end, and we use that to decide if the thing is real. Let's do that."***

***This refuses the premise the question was built on, and the refusal is the design.*** **[R12](30-the-reference.md#r12) treated numeric decay as a fault to engineer against** — *the string register durable, the numeric one a fallback.* **Doug's answer is that a published library is not an editor**, *so the indexes are simply the canonical ones and breaking on rewrite is accepted rather than defended against.*

***What replaces the defence is smaller and does a different job:*** **a five-word slug at the tail of the reference, which decides whether what the route landed on is the thing meant.** *Not a repair and not a durable address — **a validity check**.*

## <a id="means"></a>`means` is the place you go FROM the writing

> ***"Meaning should be the place we go from the writing, so if we didn't make that happen, we did it wrong."***

**This affirms [R8](30-the-reference.md#r8) in his own words:** *`means` is OUTGOING and `ref` is INCOMING, and they are two members because they point in opposite directions.* ***[The derivation says the same thing and says why it matters](../the-semantics-of-books/16-the-reference-and-its-locator.md#inscription): outgoing is authored, incoming is compiled.***

## <a id="the-range"></a>RAISED AND DEFERRED — the range

> ***"Oh and the references have to have a range. So the last number can be the number of ___ at the level that it is at."***
>
> ***And then, immediately: "But that's for a bookmark. We will figure out how to compose references. We'll figure it out."***

***Recorded because it was said, and marked NOT IN SCOPE because he withdrew it in the next breath.*** **A reference addressing a SPAN rather than a point is how a Kindle-style highlight becomes the same mechanism as a link** — *the last step counting units instead of naming one* — **and it belongs with composing references, which is later work.** ***Nothing in this sprint builds a range.***

---

# <a id="requirements"></a>Requirements

*Numbered on from [sprint one's R18](30-the-reference.md#r18) and never renumbered. Each carries a **state**: **Doug's** (quoted), **derived** (with its citation), or **mine** (the author's proposal, and the weakest kind here).*

## <a id="s6"></a>Section 6 — The route

<a id="r19"></a>**R19 · Doug.** ***A reference's location is a route of steps, each step a level code and an index***, written `F:0>D:2>S:1>Pa:3`. **Observable: a paragraph deep in a chapter answers a route with four steps, and a letter answers one with seven.**

<a id="r20"></a>**R20 · Doug.** ***The route STOPS at the level it points to***, so its depth is the grade of its target. **Observable: the route for a section is a prefix of the route for a paragraph inside it.**

<a id="r21"></a>**R21 · Doug.** ***Level codes are two letters where one collides*** — *Section/Sentence, Paragraph/Path, Word/Writing.* **Observable: no two levels share a code, checked as a promise rather than by inspection.**

<a id="r22"></a>**R22 · derived, from his own sentence.** ***`ref` is COMPUTED by walking the composition and is never stored*** — *"composition, if giving an indexed list, should always afford us this."* **Observable: nothing assigns `ref`, and a piece of writing moved into a different parent answers a different route without being told.**

<a id="r23"></a>**R23 · Doug.** ***Indexes are the canonical indexes and they break when writing is rewritten.*** *"This is a library not a writing app."* **Observable: this is a requirement that something NOT be built — no repair mechanism, no dual register.**

<a id="r24"></a>**R24 · Doug.** ***A reference carries a five-word slug at its tail, used to decide whether what the route reached is real.*** **Observable: a route pointed at rewritten writing resolves, compares its slug, and says the thing is not what was meant.**

## <a id="s7"></a>Section 7 — What draws

<a id="r25"></a>**R25 · Doug, restating [R3](30-the-reference.md#r3) as a fault.** ***The `$Path` draws bare and the reference draws linked*** — **same copy, one anchored.** *Today the path draws as TEXT INSIDE its own link:* `<a href="/books/algebra">Algebra/books/algebra</a>`. **Observable: the anchor's text is the identification alone.**

<a id="r26"></a>**R26 · Doug.** ***`means` answers the place you go FROM a piece of writing.*** **Observable: `writing.means` answers the destination, and what draws as the link is settled by [the open question below](#open-anchor) rather than assumed here.**

## <a id="s8"></a>Section 8 — Design owed, and denied files until it is designed

*Per [ce-plan](../../../../.claude/skills/ce-plan/SKILL.md): **a unit with no mechanism is not a unit.** These are in sprint two's scope by the plan and have no mechanism yet, so they are marked rather than smuggled in.*

<a id="r27"></a>**R27 · design owed.** ***`$active` and reference persistence.*** *Doug: "we will probably have to handle reference persistence."* **`$Reference.$active` is stubbed today, and [all three of his `perhaps` land here](30-the-reference.md#the-three)** — *the one item both axes agreed to prototype rather than specify.*

<a id="r28"></a>**R28 · design owed.** ***The summary and the excerpt***, *[given as a spec rather than a sketch](00-planning.md#summary-and-excerpt) and parked on sprint two.* **Its [five open questions](00-planning.md#summary-open) are unanswered**, *and Q4 — that a built summary would be the first writing in the model produced BY the model — sits against a standing rule that the parse writes nothing.*

---

# <a id="open"></a>What is open — asked, not decided

<a id="open-anchor"></a>**O1 · Does the CONTAINER draw as a link, or only the reference?** *`means` finds a reference among a writing's own elements, so a sentence holding one currently wraps the whole sentence.* **His ruling that meaning is where you go FROM the writing makes the container's link defensible** — *and his earlier sentence, "the meaning of the writing is a part of the writing as a link", reads the other way.* ***Unresolved and cheap to resolve.***

<a id="open-nu"></a>**O2 · Is `Nu` a slip for `Wo`?** *[See above](#nu).*

<a id="open-rules"></a>**O3 · `$typedOnce` contradicts `$oneKind`, and it is three of the six red tests.** ***Doug's open question 6, unanswered since 2026-08-30.*** *Two tests promise in their titles that `Document` + `Chapter` on one chain is legal and answers the most derived; `$typedOnce` refuses any second type.* **One of the two rules is wrong and it is not ours to pick.**

<a id="open-slug"></a>**O4 · Where does the five-word slug live — on the reference, or at the tail of the route string?** *"The reference having a 5-word slug at the end" reads either way, and they serialize differently.*

<a id="open-separator"></a>**O5 · `>` and `:` in a URL.** *[R4](30-the-reference.md#r4) says a reference serializes to a URL a person can paste, and `$Path` already validates with `URL.canParse`.* **`>` percent-encodes to `%3E`**, *so either the separator changes or the pasted form is not the written form.*

---

# <a id="gate-rulings"></a>What Doug ruled at the plan gate — 2026-08-31

*Four questions were put and four were answered. Quoted, because two of them reversed what the requirements assumed.*

## <a id="the-tests-are-wrong"></a>The rule stands and the TESTS are wrong

> ***"Are you talking about tests? I don't manage them. If those are in lib, they are wrong."***

***[O3](#open-rules) is closed and it went the other way from the recommendation.*** **`$typedOnce` is right — one type per piece of writing** — *and the three red tests that promise `Document` + `Chapter` on one chain is legal are the thing that is wrong.* **They are rewritten to the promise the rule actually makes.**

***And the general form is worth keeping:*** **a test is not evidence about what the model should do.** *It is [a promise somebody wrote](../../../../.claude/library/..teamsmanship/..team/queenie/test-architecture/.cover.md), and a promise made against a rule nobody ruled is a promise made up.* ***Three tests going red is a claim needing a ruling, never a ruling in itself.***

## <a id="drawing-is-linking"></a>Drawing a reference is drawing the LINK

> ***"Won't references be leaving pages sometimes? Drawing a reference is drawing the link to it."***

***[O6](33-the-handle.md#open-async) dissolves rather than resolving.*** **The async `read()` was thought to collide with a synchronous `view()`** — *nothing can await inside a draw* — **and the collision only exists if a view draws the TARGET.** *It does not.* ***A reference draws its own copy inside an anchor; following it LEAVES THE PAGE.***

**So `read()` is for going somewhere, not for rendering**, *and nothing in either sprint needs a resolved value held for a view.* ***The partially-loaded-book problem is not this sprint's and may not be anybody's.***

## <a id="the-anchor-ruled"></a>The reference draws the anchor, and responds to on-click

> ***"It draws the anchor and responds to on-click."***

***Read as the REFERENCE***, *since it answers a question about the reference and sits beside "drawing a reference is drawing the link to it."* **So [`$Writing.view()`](../../package/src/writing/Writing.tsx)'s conditional is deleted and the anchor moves onto `$Reference`** — *which fixes both view faults in one move, because a path is never inside an anchor that only a reference draws.*

***And "responds to on-click" is new, not a restatement.*** **The anchor is not only an `href`** — *it handles the click*, **which is the first thing [`$active`](#r27) has ever had to hang on**: *[R13](30-the-reference.md#r13) says reading a piece of writing activates its reference, and a click is the reading.*

## <a id="complete-ruled"></a>The closure descends one level

***`complete` concatenates THE PARTS OF THE TARGETS, one level down*** — *a catalogue of books answers one composition holding every chapter of every book.* **[Recorded in sprint three](33-the-handle.md#r37), where it is built.**

---

# <a id="the-plan"></a>THE PLAN — guardrails, not choreography

## <a id="decisions"></a>The decisions

<a id="d7"></a>**D7 — the code lives on the TYPE, not on the class.** *[The type holds the meaning](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md); a code is meaning about a level.* **Chosen over a `static` on the class**, *because [Doug's OO ruling](../../../chemistry/.lib/authorship/01-the-grammar.md) is that a constant storing data is bad for polymorphism and a template member is both allocated once and overridable.*

<a id="d8"></a>**D8 — `ref` is computed and never stored.** *His sentence: "composition, if giving an indexed list, should always afford us this."* **Chosen over assigning a route during the parse**, *which would be a fourth write in a place [that has drawn blood three times](../solutions/16-the-parse-that-woke-its-own-parents.md).*

<a id="d9"></a>**D9 — the anchor moves to `$Reference` and `$Writing.view()` loses its conditional.** *Chosen over filtering parenthetical elements inside `view()`* — **one deletion fixes both faults, where the filter fixes one and leaves the container linking.**

<a id="d10"></a>**D10 — the three failing tests are rewritten, not deleted.** *Their titles state a promise the model does not make; the promise is corrected and the coverage is kept.* ***The `expect` count may not fall.***

<a id="d11"></a>**D11 — the slug is a member of the reference.** ***The author's, not Doug's***, and [flagged as an assumption](#open-slug) rather than folded into his words.

## <a id="units"></a>The units

*Numbered on from [sprint one's U26](30-the-reference.md#stands-register).*

| | unit | mechanism — *what runs, and when* | files | demo contribution |
|---|---|---|---|---|
| **U27** | ***the level codes*** | *a `code` on each `$TypeOfX`, read at route-building time* | the seven levels · `Book` · `Chapter` · `Title` · `Phrase` · `Path` · `Reference` | **the route reads as rooms rather than as a hash** |
| **U28** | ***`ref` — the route*** | *walks the composition and joins a step per level, stopping at the target's grade* | `Writing.tsx` · `Composition.tsx` | ***AE7 — paste the URL, land on the paragraph*** |
| **U29** | ***the five-word slug*** | *taken from the target's copy at build time, compared at resolve time* | `Reference.tsx` | **AE8 — a stale route says the thing is not what was meant** |
| **U30** | ***the anchor moves*** | *`view()` on `$Reference`, with `onClick`; the conditional deleted from `$Writing`* | `Reference.tsx` · `Writing.tsx` | **AE9 — a sentence holding a reference links only the reference** |
| **U31** | ***the three tests rewritten*** | *the promise restated as `$typedOnce` actually rules* | `narrowing.test.tsx` · `annotation.test.tsx` | **the red goes to three, and the three that remain are reactivity** |

> ***U28 carries the one mechanism question the plan does not decide, and it is named rather than hidden.*** **`lib` has no public parent accessor and [uses parent access zero times](30-the-reference.md#d1).** *A route can be built by walking UP — which needs one — or handed DOWN by the composition that holds the part, which needs none and is what "catalogues will hand them out" points at.* ***The implementer decides with the code open; introducing a public parent accessor is a change to raise, not to make.***

## <a id="scenarios"></a>Test scenarios

- **U27** · every level answers a code · **no two codes collide** *(a promise, not an inspection)* · a code survives a subclass that does not override it
- **U28** · a paragraph four deep answers four steps · a section's route is a **prefix** of its paragraph's · nothing assigns `ref` · a part moved under a different parent answers a different route untold
- **U29** · a slug is five words · a route into rewritten writing **resolves and then reports a mismatch** · a reference with no slug is refused, naming what is missing
- **U30** · a reference draws `<a>` · **its text is the identification alone, with no path inside it** · a sentence holding a reference draws exactly one anchor · a click is answered · ordinary prose draws no anchor
- **U31** · `Document` + `Chapter` on one chain is **refused**, and the message says why · the `expect` count before and after is **stated**

## <a id="risks"></a>Risks

| | risk | what mitigates it |
|---|---|---|
| **1** | ***a route getter that builds a chemical*** | **[Solutions 16, three appearances](../solutions/16-the-parse-that-woke-its-own-parents.md#a-getter-is-a-reading-too): any getter containing `$(<…/>)` is a reading and may not be called from a view.** *`ref` must answer data, not a built `$Reference`* |
| **2** | ***a rule that reads a member of its own class*** | **[Solutions 35](../solutions/35-the-rules-that-only-held-for-a-class.md): a type's rule is written against WRITING.** *The slug rule must ask the block, not `$Reference.slug`* |
| **3** | ***the route separators in a pasteable URL*** | ***[O5](#open-separator) is unanswered.*** *`>` percent-encodes; `$Path` validates with `URL.canParse`. **Raise before choosing**, do not pick a separator quietly* |
| **4** | ***rewriting rather than formatting*** | **[The refusal in sprint 31](31-organization.md#done) — proving a change safe is not the same as its being asked for.** *U31 rewrites three tests and nothing else* |

## <a id="the-review-list"></a>The work phase ends with a list of files to review

***Doug, 2026-08-31: "At the end of the work phase you show me which files to review."*** **This is a stop condition, not a closing courtesy** — *[the same standing as the demo](../../../../.claude/skills/ce-review/SKILL.md#and-it-makes-work-stricter).* **No unit reports done until its files are named**, *and the list is what [`/ce-review`](../../../../.claude/skills/ce-review/SKILL.md) opens on.*

---

# <a id="checklist"></a>The checklist

***Doug, 2026-08-31: "I want to see todo checklists, even if they are brainstorm and planning checklists."*** **It lives here rather than in a session todo list, because [conversation memory does not survive compaction](../../../../.claude/skills/ce-work/SKILL.md) and this chapter does.** *Ticked as the work moves, never written at the end.*

## Brainstorm

- [x] Read the room — the plan, sprint one's close, the branch covers
- [x] Read what was built in v2 — all seven levels, the reference word, the parser, the specification
- [x] Verify the numbers rather than quote them — **20 files · 328 tests · 322 passing · 6 failing**
- [x] Read the required coding conventions and link them here
- [x] Capture Doug's rulings verbatim — [the route](#the-route), [the slug](#the-slug), [`means`](#means)
- [x] Record what was raised and withdrawn — [the range](#the-range)
- [x] Write the requirements — **R19–R28**
- [x] **O1** — ruled: *"it draws the anchor and responds to on-click"* → the reference draws it
- [ ] **O2** — is `Nu` a slip for `Wo`? ***assumed `Wo` and built on it***
- [x] **O3** — ruled: the rule stands, *"if those are in lib, they are wrong"* → the tests were
- [ ] **O4** — where does the five-word slug live? ***assumed a member; the route tail is the alternative***
- [ ] **O5** — `>` and `:` in a pasteable URL
- [x] **O6** — dissolved: *"drawing a reference is drawing the link to it"*, so no view ever awaits
- [x] Requirements approved

## Plan

- [x] Name the decisions — **D7–D11**
- [x] Break into units with mechanisms — **U27–U31**
- [x] Test scenarios per unit
- [x] Risks stated, with what mitigates each
- [x] Mark the chapter `implementation-ready`

## Work

- [x] **U31** — the three wrong tests rewritten · *`expect` count held at 4 and 2*
- [x] **U27** — the level codes · *seven declare, the rest inherit*
- [x] **U28** — `ref`, the route · *`parent` measured before the mechanism was chosen*
- [x] **U29** — the slug · ***half: computes, does not yet compare — comparison is across the seam***
- [x] **U30** — the anchor moves, and both view faults close
- [x] Gates green — ***tsc 0 · 341 tests · 341 passing · ZERO failing***
- [x] **The smiley diagnosis** — *reactivity was never broken; the fixture was*
- [x] **The files to review, named** — *[the stop condition](#review)*
- [ ] **`/ce-review`** — Doug's pass over the list

---

# <a id="where-things-stand"></a>WHERE THINGS STAND — 2026-08-31

## The next action, as a command

***`/ce-review` on the files listed below.*** **Five units are built and verified; [U29 landed half](#ledger) and says so.**

## <a id="ledger"></a>The units, as a register

| | | |
|---|---|---|
| **U27** | the level codes | ✅ *seven types carry one; `Book`, `Chapter`, `Title`, `Phrase`, `Path` and `Reference` **inherit** theirs, because a code names a level and not a class* |
| **U28** | `ref` — the route | ✅ *a property on `$Writing`, walking `parent` upward and joining `code:index`. **Answers a string, never a built `$Reference`** — [Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md) forbids the second, and handing out references is [sprint three's side of the seam](33-the-handle.md)* |
| **U29** | the five-word slug | ⚠️ ***HALF.*** *`slug` computes — five words, lowercased, joined. **Comparing it against a resolved target needs `read()`, which is sprint three's**, so the mismatch scenario was not built rather than built across the seam* |
| **U30** | the anchor moves | ✅ *`$Writing.view()`'s conditional deleted; `$Reference.view()` draws `<a>` over its non-parenthetical content with an `onClick` that sets `$active`. **Both view faults fixed by one move*** |
| **U31** | the three wrong tests | ✅ *rewritten to the promise `$typedOnce` actually makes. **The `expect` count did not fall** — narrowing kept 4, annotation kept 2* |

## <a id="smiley"></a>THE SUITE IS GREEN, and the three "reactivity failures" were a fixture

***Doug, at the close: "Concerned about smiley reactivity failures. If we don't support reactivity something very very bad is broken."*** **He was right to stop the sprint on it, and the answer is that nothing is broken.**

***The decisive measurement, because three probes before it only narrowed:*** **the same `$Smiley` rendered straight at the React root advances on click; rendered INSIDE another `$Writing`'s block it does not** — *and it fails identically with and without the `<Type>Letter</Type>` annotation, so neither binding nor the type was the cause.*

**What was happening:** *the wrapper re-renders on every write, and each render hands out a fresh [`$lift`](../../../chemistry/package/src/abstraction/particle.ts) derivative — `Object.create(template)`, a new cid, and `$at` back to the template's `0`.* ***Measured: the click mutated `$Smiley[34]` and the next paint drew `$Smiley[39]`, with the constructor having run exactly ONCE.*** **So the write landed, the view re-ran, and it re-ran on a different object.**

***Doug's correction is what fixed it, and it is a rule about fixtures rather than about the framework:*** **a chemical provides its own type from `$` in its own bond constructor — `this.type = $(<TypeOfLetter />)` — rather than having one written into its markup**, *which is what every level class already does and what [`$Title`](../../package/src/writing/Title.tsx) is the pattern for.* **Drawn directly, it keeps its identity and scrolls.**

***And the last two failures were a different thing wearing the same red:*** **a leaf with no children has no block**, *so `$hasBlock` and `$hasWriting` both refused it when `$$(writing, $Letter)` built the reading.* **Giving the fixture a block closed them.**

> ***The general form, and it is worth compounding:*** **a test that renders a stateful chemical inside another chemical's block is testing the framework's derivative machinery, not the promise in its title.** *Three tests carried a fixture fault as a reactivity fault for long enough that [every number this branch reported](30-the-reference.md#stands-verified) said "six failures, three of them reactivity" — **and none of them was.***

## <a id="found"></a>What was found by building rather than by reading

***`parent` IS populated on parsed parts, and the plan had it as an open mechanism question.*** **Measured with a probe before choosing: `paragraph.parent` is `$Section`, `section.parent` is `$Document`** — *chemistry threads it during the bond, so the upward walk needed no new accessor and [the change the plan said to raise](#units) never had to be made.* ***The probe was deleted; the finding is here.***

## Verified, with the numbers

**Run at the close, not remembered:** ***`tsc --noEmit` 0 · `tsc --noEmit -p src/tsconfig.json` 0 · 21 files · 341 tests · 341 passing · 0 failing.***

***The delta, because a number without one is not evidence:*** **328 → 341 tests, 6 → ZERO failures.** *Three were [the wrong promises](#the-tests-are-wrong) and three were [a fixture fault carried as a reactivity fault](#smiley).* ***The suite is green for the first time in this branch's recent record.***

***Scope:*** **`@dna-platform/chemistry` resolves by symlink into uncommitted framework code**, *so a clone at `HEAD` would not reproduce these.*

## <a id="review"></a>The files to review

***Doug asked for this list as the end of the work phase, and [it is a stop condition](#the-review-list).***

| file | what changed |
|---|---|
| **[`src/writing/Writing.tsx`](../../package/src/writing/Writing.tsx)** | ***three things, and the first is the one to look at hardest*** — `view()` lost its conditional; `ref` and `slug` added as properties; `code` added as a field on `$Type` |
| **[`src/reference/Reference.tsx`](../../package/src/reference/Reference.tsx)** | ***`view()` added*** — the anchor, its filter, and the `onClick` |
| **the seven levels** — [`File`](../../package/src/writing/File.tsx) · [`Document`](../../package/src/writing/Document.tsx) · [`Section`](../../package/src/writing/Section.tsx) · [`Paragraph`](../../package/src/writing/Paragraph.tsx) · [`Sentence`](../../package/src/writing/Sentence.tsx) · [`Word`](../../package/src/writing/Word.tsx) · [`Letter`](../../package/src/writing/Letter.tsx) | *one line each — `override code`* |
| **[`src/tests/route.test.tsx`](../../package/src/tests/route.test.tsx)** | ***NEW — 13 promises*** across the codes, the route, the slug and the anchor |
| **[`src/tests/narrowing.test.tsx`](../../package/src/tests/narrowing.test.tsx)** · **[`src/tests/annotation.test.tsx`](../../package/src/tests/annotation.test.tsx)** | ***the wrong promises, restated*** |

## <a id="epiphenomenal"></a>Decisions made in flight that nobody ruled

*Surfaced so the decision procedure is auditable rather than only the result.*

| | the decision | why |
|---|---|---|
| **1** | ***the codes are `F · D · S · Pa · Se · Wo · Le`*** | **his own letters, with `Nu` read as a slip for `Wo`** — *[O2](#open-nu), still unanswered* |
| **2** | ***only the seven LEVELS declare a code; everything else inherits*** | *a chapter is a document by level, so `$TypeOfChapter` keeping `D` is the inheritance doing the work instead of a roster* |
| **3** | ***`ref` answers a STRING, not a `$Reference`*** | *a getter that builds a chemical [may not be called from a view](../solutions/16-the-parse-that-woke-its-own-parents.md#a-getter-is-a-reading-too), and the seam gives handing-out to sprint three* |
| **4** | ***`slug` is five words of `copy`, lowercased, joined by hyphens*** | **the form was never specified** — *only "a 5-word slug"* |
| **5** | ***`$Reference.view()` filters its own block rather than `$Path.view()` returning null*** | *[R25](#r25) says a path draws bare when it stands alone, and the second answer would take that away* |
| **6** | ***`onClick` sets `$active` and nothing else*** | *[R13](30-the-reference.md#r13) says reading activates; **where an active reference is KEPT is [R27](#r27), still design owed*** |

***Scope, because a number without it is not evidence:*** **`@dna-platform/chemistry` resolves by symlink into uncommitted framework code**, *so a clone at `HEAD` would not reproduce these.*

## What was verified in the working copy rather than taken from the record

- ***`ref`, `read()` and `catalogue` have ZERO occurrences in [`src`](../../package/src/).*** **`ref` was allocated to sprint one and never built.**
- ***The container-link fault is [`$Writing.view()`](../../package/src/writing/Writing.tsx)*** — `this.means ? <a href={this.means.path?.copy}>{drawn}</a> : drawn` — **and `means` searches the writing's own `$elements`.**
- ***The path-inside-the-link fault is that `view()` is the only reader that ignores `parenthetical`.*** *`copy` honours it and [`Parser.tokens`](../../package/src/utilities/Parser.tsx) honours it.*
- ***[`$Composition$`](../../package/src/writing/Composition.tsx) carries `index` and `parts()` and no longer carries `canonical(): T`*** — **which is the shape [R22](#r22) derives from.**

## Names

***`The Route` is a PROXY*** — **taken from Doug's own description of the pattern, not a name he gave.** *His to rename.*
