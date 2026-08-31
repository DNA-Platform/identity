# The Route

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** `requirements-only` — ***brainstorm in progress, 2026-08-31. No code is written until these are approved.***
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
- [ ] **O1** — does the container draw as a link, or only the reference?
- [ ] **O2** — is `Nu` a slip for `Wo`?
- [ ] **O3** — `$typedOnce` or `$oneKind`: which rule is wrong?
- [ ] **O4** — where does the five-word slug live?
- [ ] **O5** — `>` and `:` in a pasteable URL
- [ ] Design the demo beside the requirements — *[the test is whether a hand-authored page could fake it](../../../../.claude/skills/ce-brainstorm/SKILL.md)*
- [ ] **Requirements approved by Doug** — ***the gate; no code before it***

## Plan *(not started — gated on the above)*

- [ ] Name the decisions, each with what it was chosen over
- [ ] Measure the size before dividing anything
- [ ] Break into units with mechanisms — *a unit that cannot say what runs and when is design owed*
- [ ] Test scenarios per unit
- [ ] Origin trace both directions — every requirement lands somewhere, every unit cites back
- [ ] Mark the chapter `implementation-ready`

---

# <a id="where-things-stand"></a>WHERE THINGS STAND — 2026-08-31

## The next action, as a command

***Continue `/ce-brainstorm`.*** **This chapter is `requirements-only` and [the gate is human](../../../../.claude/skills/ce-brainstorm/SKILL.md#the-gate)** — *no code, no scaffold, until Doug approves the requirements above.* **Five questions are open and O1, O2 and O3 are each one sentence to answer.**

## Verified, with the numbers

**Run at the brainstorm, not remembered:** ***20 files · 328 tests · 322 passing · 6 failing.*** *The six are the same six that predate sprint one — **three smiley reactivity**, and **three that are [O3](#open-rules)**.*

***Scope, because a number without it is not evidence:*** **`@dna-platform/chemistry` resolves by symlink into uncommitted framework code**, *so a clone at `HEAD` would not reproduce these.*

## What was verified in the working copy rather than taken from the record

- ***`ref`, `read()` and `catalogue` have ZERO occurrences in [`src`](../../package/src/).*** **`ref` was allocated to sprint one and never built.**
- ***The container-link fault is [`$Writing.view()`](../../package/src/writing/Writing.tsx)*** — `this.means ? <a href={this.means.path?.copy}>{drawn}</a> : drawn` — **and `means` searches the writing's own `$elements`.**
- ***The path-inside-the-link fault is that `view()` is the only reader that ignores `parenthetical`.*** *`copy` honours it and [`Parser.tokens`](../../package/src/utilities/Parser.tsx) honours it.*
- ***[`$Composition$`](../../package/src/writing/Composition.tsx) carries `index` and `parts()` and no longer carries `canonical(): T`*** — **which is the shape [R22](#r22) derives from.**

## Names

***`The Route` is a PROXY*** — **taken from Doug's own description of the pattern, not a name he gave.** *His to rename.*
