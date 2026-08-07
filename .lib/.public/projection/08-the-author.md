# The Author

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*Opened 2026-08-07, the first of the [five sprints](00-planning.md#the-five-sprints--each-with-three-things-doug-can-check-planned-2026-08-06) cut from the demo. **Status: `implementation-ready`** — requirements and plan below, from [Sprint 48](06-sprint-48--subjects-and-the-library.md)'s design session.*

***Sprints are NAMED, not numbered*** *(Doug, 2026-08-07). These five are **The Author**, **The Card**, **The Subject**, **The Library**, **The Compilation**. Numbers have been a churn source all sprint; names do not collide. The numbered plans in [chapter zero](00-planning.md) keep their numbers as a record of what was planned when.*

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## The three things Doug can check

**SEEN.** Follow an author's name from a book on the shelf and arrive at the autobiography. Follow *that* book's author and arrive back where you started. **Four books, four author links, one destination, and one of them points at itself.**

**REVEALED — collected in review, and it supersedes what I first wrote.** *Whether the narrative closure and the structural closure can be made to **coincide**, not merely coexist* — **one closure at two levels** (Doug, 2026-08-07). Concretely: **does what the book SAYS line up with what its references DO?** The passage in which the book records the decision to write itself, and the author link by which it authors itself, must be the same closure — not a story about a loop sitting next to a loop. My first version asked only the mechanical half — what closing a self-pointing link took, given the autobiography must exist before its own link resolves — and that stays: **Doug checks the shape the solution took**, and machinery nobody anticipated means the design was incomplete. **If the two cannot be made to land together, the demo is two things stapled rather than one thing seen twice.**

**SCOPE, ruled 2026-08-07:** *"We aren't formalizing what the first person perspective means for now. That is far outside of the scope of this part of the theory."* **Both closures above are structural and checkable** — text and references. **Nothing here claims anything about what the loop is like from inside**, and no unit may reach for it. *This is the territory [chapter 13](../the-semantics-of-books/13-the-authors-fixed-point.md) pointed at with an unwritten chapter 14 on the first person and the third; it stays unwritten by ruling, not by neglect.*

**PROMISED.** Listed per unit below.

## The standing conditions

- **One author, not ten.** *"The author is always something that represents the identity that makes the library."* **It is the loop because it cannot be reduced to anything else** — an author decomposable into teammates would point at parts, and the self-loop would dissolve into a list.
- **The team is not in the demo library.** We appear *inside* the book: informal signatures in the account of its making, and **appendix chapters** the writing refers to. The library holds books; the book holds us.
- **The demo library is the demo's own** — four books, not this repository.
- **A reference does not announce itself as a link** ([R35](06-sprint-48--subjects-and-the-library.md#collected-in-review)). An author name is set as a name.

## Units

**U1 — The autobiography.** The fourth book. **Its subject matter is constrained, and this is semantic validation rather than editorial preference** *(Doug, 2026-08-07)*: **"The book can't lie about its authors. Don't write a cookbook as the canonical autobiography. It has to host the story of the creation of that which is represented in the library, if not the invention of the library itself. It needs to be a narrative of how the thing being catalogued came to be."**

So it is **the account of how these books came to be** — the algebra book, the manifold, the shelf — and at the summit, of the invention of the library itself. A well-written book by the same author that narrates something else **fails**: the canonical autobiography is not canonical because we designated it, but because it **is** that account.

*This closes the bar that was [flagged as stated-and-unmeasurable](#where-things-stand): the test is not "is the writing good" but **does it narrate the coming-to-be of what is catalogued**.*

**Fiction inspired by a true story**, claiming authorship through **quoted references in its own writing** rather than an asserted field. **It must contain the decision to write the very book being written** — the fixed point, not a memoir about one. Teammates appear as informal signatures and as **appendix chapters**. It grows a chapter per sprint hereafter.
*Mechanism: an ordinary `$Book`, authored the way algebra and the manifold are — `$(<Book><Cover/><Synopsis/>…</Book>)`. Files: new under `app/src/sections/book/library/`. Visible end: a book you can read that describes its own writing.*

**U2 — `$Author`, a book reference with a display name.** It reads to a book and carries a name to render. **The display name is what appears on a cover.** Doug's optional parsing form, for when the reference is not specified: `[the link](Name)` — markdown-shaped, the name as fallback. **A naming convention is owed and is not invented here.**
*Mechanism: a reference kind that renders itself — the shipped `$RibbonMark`/`$Return` pattern, subclass plus `view()`, zero framework change. Files: `src/book/Author.tsx` (currently empty), `src/index.ts`. Visible end: an author's name on a cover, followable, not dressed as a link.*

**U3 — The links, and the loop.** Each of the demo's four books gets an author link to the autobiography; **the autobiography's own author link points at itself.**
*Mechanism: this is where the sprint's REVEALED question is answered — the self-reference must resolve without the book being complete when the link is made. Files: the four demo books. Visible end: following any author arrives at one book; following that book's author arrives back.*

**U4 — The team's name.** The display name the autobiography represents. **Proposed: `Inexplicable Press`, changeable by Doug's own terms** — and the finding behind it is ours: Sprint 47's open questions already say **publisher → team**, so a book's publisher is the standing entity responsible for it, which is exactly what a shared author link means.

## Test scenarios

**U1.** The autobiography binds as a valid book — a cover at zero, a synopsis, at most one table of contents. Its quoted references resolve. Its appendix chapters are reachable and are not mistaken for its narrative chapters.

**U2.** An author reads to its book. An author renders its display name. An author with no reference but a written name still renders the name. An author with neither is refused.

**U3.** Every demo book's author reads to the autobiography. The autobiography's author reads to **itself**. A book with no author is refused. An author pointing at a book that does **not** author itself is refused — *the canonical autobiography is recognised structurally, never declared* ([R9](06-sprint-48--subjects-and-the-library.md#subject-author-and-the-summit)).

**Regression.** Chemistry **630/630**, lib **107/108** (the refusal-message defect, [carried to its own work](00-planning.md#validation-that-says-why--carried-out-of-sprint-48-doug-2026-08-06)), three packages **tsc 0**.

## Risks

1. **The bootstrap may need machinery we have not designed.** That is the sprint's whole REVEALED question, so it is a finding rather than a failure — **but it must be raised the moment it appears**, never designed around.
2. **The autobiography is real writing**, not scaffolding. A book that reads as filler cannot carry the demo, and the demo law stands: impressive, aesthetically unique, a meaningful use case.
3. **The naming convention for `[link](Name)` is owed and unruled.** No unit invents it.

## Where things stand

*Written 2026-08-07 at the session boundary. **The next session opens by reading this and verifies against the working copy before acting** — this records what was believed, and the working copy is the truth.*

### The objective

Write the demo library's fourth book — **the canonical autobiography** — and give the demo's four books author links to it, with its own author link pointing at itself. **Doug's latest stated intent, in his own words:** *"It has to host the story of the creation of that which is represented in the library, if not the invention of the library itself. It needs to be a narrative of how the thing being catalogued came to be."*

### Rulings, verbatim — the most expensive thing to lose

- **"The book can't lie about its authors. There's semantic validation. Don't write a cookbook as the canonical autobiography."**
- **"The author is always something that represents the identity that makes the library in some way. It is the loop because it cannot be reduced to some other thing."** — hence **one author, not ten**; a decomposable author points at parts and the loop dissolves into a list.
- **"You don't exist in the demo library."** Teammates appear as informal signatures in the account of the making, and as **appendix chapters**.
- **"We aren't formalizing what the first person perspective means for now. That is far outside of the scope of this part of the theory."**
- **The two closures are one** — narrative and structural — and the sprint reveals whether they can be made to **coincide**.
- **Sprints are named, not numbered.**
- **"You own being done and the review is where I weigh in."**

### State

**Complete:** nothing in this sprint. **In progress:** nothing. **Not started:** U1–U4, all of them. The chapter is `implementation-ready` and was deliberately left unbegun — the session that planned it had no context left, and [starting work at the end of a long session is this branch's filed failure](../solutions/04-the-sprint-that-planned-what-it-had-not-designed.md).

### Blockers

- **The `[link](Name)` naming convention** — owed, unruled, Doug's. U2 needs it and **no unit may invent it**.
- **The team's display name** — `Inexplicable Press` proposed on the *publisher → team* finding, changeable by Doug's own terms. U4 stands on it.
- **The bootstrap may need machinery nobody designed.** That is the sprint's REVEALED question, so it is a finding rather than a failure — **but raise it the moment it appears, never design around it.**

### Verification, with numbers — from fresh runs, not memory

Chemistry **630/630** (58 files; baseline was 622 before Sprint 48's framework work). Chemistry **tsc 0**, lib **tsc 0**, app **tsc 0**. Lib **107/108** — one red, the refusal-message defect, [carried to its own work](00-planning.md#validation-that-says-why--carried-out-of-sprint-48-doug-2026-08-06) and **not** this sprint's to fix.

### Wrong turns already taken — do not repeat these

- **Wrapping a bond constructor on the INSTANCE** looks correct and silently misses every `super.` call. It must sit on the prototype.
- **Running the lib suite without rebuilding chemistry's `dist`** gives a false green — [filed](../solutions/05-the-suite-that-passed-against-a-stale-build.md).
- **Adding an affordance beside a name to make it followable** — a button, a label, an underline. Three rounds were spent on this; the name *is* the reference. [Filed](../solutions/03-the-link-i-built-three-times.md).
- **Treating a role as if it needed a single filler** — asking which one thing `$$Book` "is". References are not unique.
- **An unexplained pass is as suspicious as an unexplained failure.** Two happened in one session; both numbers were true about something other than the claim.

### Pointers, with what is load-bearing at each

- [Chapter zero](00-planning.md) — **read the twenty paragraphs first**; they are the only place the whole design is said at once. Then the demo spec, then the five named sprints.
- [Sprint 48](06-sprint-48--subjects-and-the-library.md) — **R38–R64 with the reasoning that produced each**, and the design pseudocode. Closed; do not reopen.
- [`app/src/sections/book/library/`](../../package/app/src/sections/book/library/) — how a book is authored here: `$(<Book><Cover/><Synopsis/>…</Book>)`. **`the-shelf/` is the hand-authored catalogue whose prose dies in the next sprint.**
- [`marks.tsx`](../../package/app/src/sections/book/library/the-manifold/marks.tsx) — **the prior art for a reference that renders itself**: subclass plus `view()`, zero framework change. `$Author` is built on this. **Open it before writing U2.**
- [Solutions](../solutions/.cover.md) — five chapters, indexed by symptom.
