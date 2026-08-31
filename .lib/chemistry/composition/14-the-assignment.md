# The Assignment

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*Built 2026-08-28/29. Every law below is a promise in [`assignment.test.tsx`](../../package/tests/abstraction/assignment.test.tsx) — thirty-eight of them — and demonstrated in [the Lab's Assigned properties section](../../package/app/src/sections/assigned/case-1.tsx), driven headlessly so it cannot rot back.*

## What an assignment is

**A chemical drawing another one says where that one belongs.**

```tsx
class $Form extends $Chemical {
    fields: $Field[] = [];        // declared, and never written to

    view() { return <Field on={() => this.fields} />; }
}
```

From then on the field is in `fields` — put there by the field, on mount. The form registers nothing, and there is no list to keep in step with the markup.

***What it is for is the case a bond constructor cannot reach.*** A part the caller writes arrives through [the binding constructor](03-binding-constructor.md); a part the class **makes for itself in its own view** does not, because a view runs after the bond and its output is React's, not the synthesis's. Before this, a class that drew its own parts had no way to hold them.

## THE ARROW IS TWO ARTEFACTS IN ONE EXPRESSION

***This is the whole reason the form is a reading rather than a string or a callback.*** `() => this.fields` carries both halves of what an assignment needs, and neither alternative carries both:

| written | checks the value | names the member |
|---|---|---|
| `on="this.fields"` — a path typed against `keyof this` | **no** — it checks the NAME only, and `keyof this` cannot mean the writer's `this` from inside the child's prop type | yes |
| `on={p => p.fields}` — a recording proxy | **no** — the child cannot be parameterised by its author's type | yes |
| ***`on={() => this.fields}`*** | ***yes*** — typed `() => T \| T[]`, so a member that cannot hold a `T` does not compile | ***yes*** — [`pathOf`](../../package/src/implementation/reflection.ts) reads the arrow's own source |

**The type is checked in the direction the assignment runs**, and the source is read for where it goes. The declaration is one expression because it is one act.

## Rules

- **One arrow or a list of them.** `on={[() => this.here, () => this.there.also]}` names more than one place, and **every one holds the same instance** — which is what makes two owners two views of one thing rather than two copies.
- **What the member already holds decides.** A member declared as a list **collects, in the order the parts were drawn**; a member declared as one is **assigned**. Nothing flags it: the declared type is what the arrow was checked against, so the two agree by construction.
- **Resolved in the walk, completed on mount.** [`augment`](../../package/src/implementation/augment.ts) is the one place that knows *whose view wrote it* — the asker is the `this` the arrow closed over — but the instance does not exist yet, so the resolution is handed onward and the child completes it in its mount effect.
- **A formula resolves first.** The substitution and the assignment happen in the same walk and props cross unchanged, so `<Kind on={() => this.one}>Autobiography</Kind>` puts an `$Autobiography` in a member declared `$Kind`.
- **An interface wraps a drawing, not an identity.** A chemical wearing [a face](13-the-facade.md) is assigned as itself.
- **Only a chemical.** A tag has no instance for a member to hold; the compiler refuses `on` on one, and the walk refuses it too rather than assigning nothing quietly.
- **Retraction is part of it.** A chemical leaving the page takes itself back out of every member it was put in — and **never takes back a value it did not put there**, so an outside write stands.
- **And it threads the lineage.** [Saying where a thing belongs is the one moment that answer is known](#and-it-threads-the-lineage), so the assigned chemical takes the asker as its parent — *only when it has none of its own*, because composition's own parenting must never be moved.

## THE FOUR REFUSALS, and every one was silent first

***Each of these was measured doing nothing before it was designed for.*** That is the pattern worth carrying: an assignment that cannot work must say so, because the failure is otherwise a member that is simply empty.

| written | what it did | what it does |
|---|---|---|
| `on` on an html tag | **assigned nothing** | refused — *no instance for a member to hold* |
| a path through a member that is not there | **assigned nothing** | refused, naming where it stopped |
| two parts claiming one **single** member | **overwrote in silence** | refused, naming both — *declare it as a list* |
| an arrow that reads no member | threw already | unchanged |

## THE TWO LOOPS, and they are one fact in two costumes

***A view whose shape depends on what was assigned into it never settles***, and neither costume is a nested render — each turn is its own commit, so **React's own update-depth guard never fires**. One of them hangs the process outright.

- **It CLIMBS.** Every assignment wakes the view, the view draws one more, and that one assigns itself too.
- **It FLIPS.** The view draws a part only *while the member is empty* — so assigning it stops it being drawn, which unmounts it, which empties the member, which draws it again. **The count of assignments goes 1, 0, 1, 0**, so a check watching only for growth would never see it.

**The check is one line for both:** the number of things a view assigns *changed*, and **an assignment is why**. A drawing that grew because somebody pressed something did not feed itself and is not counted, which is what keeps a page that adds a part on a button press from being accused of looping.

***And the cure is ordinary.*** Draw the part unconditionally and use it when it arrives — or make it in the bond constructor, where it is never in a half-state and nothing is conditional on it.

## What it costs, stated as a number

**The assignment lands after the first paint**, so it wakes whoever was assigned into. Measured against the identical page assigning nothing:

- ***The cost is constant.*** Three parts assigned and twenty assigned cost the drawing chemical **the same**.
- ***It is exactly two passes more*** than the same page assigning nothing.
- ***It stops.*** After settling, no further draws, with everything still held.

*A "pass" is a call to `view()`, not a React render — the framework draws the view a second time in its own change-detection effect, and that walk deliberately does not count as another pass.*

***And it is resolved once per asker and per source.*** A view builds a fresh arrow on every render, so reading the source each time re-parses what cannot have changed — **measured at thirteen times the cost of an element with nothing to do, and six after the resolution is kept.** The source is the key because it is exactly what the answer depends on: the same reading, in the same scope, resolves the same way.

***The walk allocates nothing for a chemical that assigns nothing.*** The pass it counts with is a reused scratch and its order map is not made until something is assigned, because this walk runs on every render of every chemical and anything it allocates unconditionally is paid for by pages using none of it. [The bench states all four numbers](../../package/bench/post-frame.bench.ts).

## <a id="and-it-threads-the-lineage"></a>And it threads the lineage

**A chemical written in a view is its own parent**, so nothing carries its writes to whoever holds it and nothing resolves outward from it — see [the catalyst graph](08-catalyst-graph.md#the-model-is-parented-and-the-drawing-is-not) for the measurement. An assignment is the one moment that gap can be closed honestly: the author has *said* where the thing belongs.

So the assigned chemical takes the asker as its parent, and only when it has none — a bonded child already has one, and this must never move it. ***That is why an owner's own reading follows what it holds***: without it, a form could hold a field and never see it change.

## Cases

- A form that declares one member, never writes to it, and drives fields it never registered.
- One sample assigned into two owners, each owning a **different feature** of it — the maker its form, the second its charge — so the shape says whose hand moved.
- The maker **revoking** the other owner's hold, which is a power the other owner does not have, and **ending** the part entirely — after which the second owner still works, because it never needed one.
- A member cleared by hand, then ended, then made again — the claim is released, so the remake is accepted.

## See also

- [The binding constructor][s-III-3] — how a part the CALLER writes arrives, and why a part the class draws itself could not.
- [The catalyst graph][s-III-8] — what a parent is for, and the measurement this chapter threads.
- [The facade][s-III-13] — the other declaration a chemical makes about itself, and the one this composes with.
- [The formula][s-III-12] — resolved in the same walk, before the assignment completes.

<!-- citations -->
[s-III-3]: ./03-binding-constructor.md
[s-III-8]: ./08-catalyst-graph.md
[s-III-12]: ./12-the-formula.md
[s-III-13]: ./13-the-facade.md
