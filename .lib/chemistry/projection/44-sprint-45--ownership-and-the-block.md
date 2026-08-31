# Ownership and the Block

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Ran 2026-08-28/29 with Doug at the keyboard throughout. **Two features shipped and one framework fault measured.** This chapter is the session boundary: **the next session opens by reading it and acts on nothing until it has** — and the working copy is the truth, not this page.*

---

# <a id="for-the-next-team"></a>FOR THE NEXT TEAM — you are about to use this in `lib`

***Read these five, in this order, and stop when you can answer the question beside each.*** The framework is large and almost none of it is needed to use what shipped here.

| read | until you can answer |
|---|---|
| 1. [The binding constructor](../composition/03-binding-constructor.md) | *what does a bond constructor actually receive?* — **an ordered sequence, not one argument per child**, and a run of inline writing arrives as ONE block |
| 2. [HTML and `$Block`](../composition/09-html-catalogue.md) | *what is that block?* — a real class you can iterate and read, and `$Html<'block'>` **is** it |
| 3. [The assignment](../composition/14-the-assignment.md) | *how does a class hold a part it drew itself?* — the feature this sprint built |
| 4. [The catalyst graph](../composition/08-catalyst-graph.md#the-model-is-parented-and-the-drawing-is-not) | *why does my parent not repaint when its child changes?* — **the fault below**, and the one thing that will surprise you |
| 5. [Reactive properties](../reactivity/01-reactive-properties.md) | *what counts as a write?* — because in this framework almost everything does |

***The one thing to carry into `lib` above all others:*** **a chemical written in a view is joined to nothing**, so a write inside it reaches no one. An assignment is now the only thing that joins one. If a reading in a parent will not update, that is the reason, and it is not your code.

---

# What shipped

## `$Block` — the tag that points at a class

**A bond constructor is handed one block for prose, and it is now a class with a surface.** `$Block extends $Html$<'block'>`, iterates `(string | number | $Chemical)` directly, and `where` · `select` · `selectMany` each answer **a new block**, so a reading of a block can be read again; `single` answers the piece.

***`$Html<'block'>` computes to `$Block`***, which retired the computed form **without one call site moving** — every use in `lib` became a `$Block` and gained the surface for free. `$check` takes the class, the base, or the tag `'block'`, and still refuses an html that is not one.

## The assignment — `on={() => this.member}`

**A chemical drawing another one says where that one belongs.** The full account is [its own chapter](../composition/14-the-assignment.md); what a `lib` author needs is four sentences.

- **The arrow is checked and read.** Its type proves the member can hold it; its source names the member.
- **One arrow or a list.** Every member named holds **the same instance**.
- **The member's declared type decides.** A list collects in drawn order; a single is assigned.
- **It threads the lineage**, which is the only way a part a class draws for itself acquires a parent.

***And it refuses rather than doing nothing quietly*** — a tag, a path through nothing, two parts claiming one single member, an arrow naming no member, and a view whose shape depends on what was assigned into it.

---

# <a id="the-fault"></a>THE FAULT — measured, not diagnosed

***Rendering `<Host><Leaf /></Host>` and reading both sides gives two different objects.***

| | |
|---|---|
| what the **bond constructor received** | `$Leaf[6]`, ***parented to the host*** |
| what **`view()` ran on** | `$Leaf[11]`, ***its own parent*** |
| what that one **derives from** | the **template** — not the bonded child |

**The model carries its place in the graph and the drawing does not.** Three consequences, one fact: a write on the drawn instance diffuses to nobody; `$Scope.finalize`'s upward walk has nothing to walk; and `askedFor`'s lineage is one node long — ***which is why [the facade](../composition/13-the-facade.md)'s three scope-substitution promises are skipped rather than failing.***

***CLOSED 2026-08-29 — all three.*** A facade is *chosen* where the element was written and *worn* where it draws, and *satisfaction* is answered from what encloses it in the markup. **None of the three needed the drawn instance's ancestry**; every one of them needed the walk, which knows the writer. **The fault below is still real** and still explains why a parent does not repaint when its child changes — it is simply not what those three were waiting on.

***The cause in code is NOT traced, and is deliberately not guessed at.*** Start from `$Synthesis.process`'s bound-child cache and `$lift`'s derivative, **and carry a probe rather than a theory** — reasoning about this one from the source was wrong twice before it was measured.

---

# The state, in numbers from the runs that claim them

> **`$Chemistry` — 812 passed · 0 skipped · 65 files · `tsc` 0.**
> **`lib` — 461 passed · 461 · 45 files**, both typechecks 0, against a **rebuilt `dist`**.
> **Lab typecheck — 18 errors**, all pre-existing, in three styled files this sprint never touched.
> **The Lab's Assigned properties section — driven headless, 12 checks, no page errors.**

**The three skips are the facade's scope-substitution promises**, and they wait on the fault above.

***`dist` was stale when this sprint opened.*** Rebuilding it moved `lib` from 16 red to 2 and collected 64 more tests — almost none of it this sprint's work. **Any `lib` number quoted against an unrebuilt `dist` is measuring the wrong framework.**

---

# Rulings, verbatim

> *"So it accepts `Func<any> | Func<any>[]` perhaps"*

> *"Are you missing features?"* — on designing around the stale readout instead of fixing it. **He was right; it was fixed at the root.**

> *"Have the outer container be able to turn off the binding between the two objects too. It should be able to do that! That's a cool control"*

> *"It's a reaction. Get it?"*

> *"This one is… shouldn't be moving at steady state."*

> *"More talk should be the right features, less text, less code."*

---

# The wrong turns already taken — do not repeat these

| | what happened |
|---|---|
| ***designing around a framework gap*** | The demo's readouts were stale, so the controls were reshaped to avoid reading across the graph. **The gap was the bug**, and one line of lineage threading dissolved it. |
| ***reasoning about the parent chain from the source*** | Wrong twice. `process` binds a child to its parent, and the drawn instance is still a root. **Only a probe settled it.** |
| ***a check that watched only for growth*** | It caught the climbing loop and would never have seen the flipping one, whose count goes 1, 0, 1, 0. |
| ***a facade declared as a styled-component*** | `facade = Instrument` where `Instrument` had no `$chemical` is **silently not a facade**, and the demo claimed one for a while. |
| ***a demo that explains*** | Source panels and prose. The Lab's own sections carry **one legend, one line of markup, and the instrument** — read [perspectives](../../package/app/src/sections/perspectives-color/case-1.tsx) before writing another. |

---

# <a id="owed"></a>OPEN — rulings owed

| | |
|---|---|
| ***the two extra passes*** | An assignment lands after the first paint and wakes its owner: **constant in how many are assigned, exactly two passes, and it stops.** Suppress it the way construction is suppressed and it becomes zero passes and a stale first paint. **Doug's call.** |
| ***threading the graph for bonded children*** | The assignment now joins what it claims. Whether the **drawn** instance of a bonded child should carry its model's parent is [the fault](#the-fault), and closing it would close the three skips. |
| ***`face`, and the names*** | Doug: *"I don't like face — not sure what to change it to."* **`interface` is available as a property name** — verified, not recalled: it is a strict-mode *future reserved word*, which restricts bindings and never property names. `$original$`, `$assigned$`, `pathOf`, `unassign` are all proxies awaiting his pick. |
| ***`$check` answers what it was given*** | `$check(undefined, $Block)` returns a block typed `undefined`. Worth its own look; not this sprint's to widen. |
