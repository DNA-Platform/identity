# The population that never drew

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` `rebind` `render-make` `model`
- **sprint:** [58 — The Chapter That Is Its View](../projection/64-sprint-58--the-chapter-that-is-its-view.md)
- ***The chapter name is a proxy; Doug's to rename.***

---

## Symptoms

- A citation draws its key, `cook`, where it should draw the entry's number, though `entry()` answers an `$Entry` and the entry's id is on the page.
- `number()` on the entry the citation found answers `undefined`; `number()` on the entry standing in the References' block answers `1`. Same key, same text, two objects.
- The book's scratchpad holds one key, `Entry(cook)`, and what it holds is not the entry in any block.
- A subclass counting its own bond constructor counts **two** bonds for every entry, every section and every citation under a printed document, and `view()` runs only on the first of each pair.

## What did not work

- Bumping a reactive version on the scratchpad so the citation would redraw: the write diffused to the book and every chapter re-printed and re-filed without end ([the bookkeeping-field rule](../../../chemistry/.lib/composition/08-catalyst-graph.md)).
- Reasoning from [the catalyst graph](../../../chemistry/.lib/composition/08-catalyst-graph.md#the-model-is-parented-and-the-drawing-is-not) that the drawing is a derivative of the model: measured, neither instance is the other's prototype; both derive from the class template.

## The mechanism

**Every chemical mounted from JSX bonds its children twice, and the second population is thrown away.** [`$lift`](../../../chemistry/package/src/abstraction/particle.ts)'s component calls the particle's bond on every render — `if (bond && typeof p[$bond$] === 'function') withAsker(p, () => p[$bond$](), true)` — and the chemical's bond is `this[$synthesis$].bond({ children: this[$children$] })` ([chemical.ts](../../../chemistry/package/src/abstraction/chemical.ts), `[$bond$]`). The synthesis processes the children **before** it asks whether the arguments changed: `this.process(written ?? children, context, …)` runs `groupInline`, whose `flush` evaluates every inline JSX child through `evalElement` into a fresh chemical parented to the interpreting one, and that child's own bond does the same to its children, recursively. Only then does `sameArgs` find the arguments unchanged and skip the bond constructor. The lift's first mount always renders twice, because `setCid` stores the derivative's id and re-renders, so the second pass is not an edge case: it is every mount.

The timeline, measured on a book of a cover and a References chapter: `bond Kept#1 parent Sec#2 · bond Sec#2 parent Refs#3 · bond Refs#3 parent Bib#0 · view Refs#3 · bond Kept#4 parent Sec#5 · bond Sec#5 parent Refs#3 · view Refs#3 · view Sec#2 · view Kept#1`. The stack at `Kept#4`'s bond runs `Component (particle.ts:524)` → `$References.[$Particle.bond] (chemical.ts:1179)` → `$Synthesis.bond` → `process` → `groupInline` → `flush` → `evalElement` → `$Synthesis.bond` → `process` → `$SynthesisContext.child` → `$Kept`.

So an entry that files itself in its bond constructor files twice, the first as the entry in the graph and the second as the orphan, and a registry keyed by the key keeps the orphan. The orphan has a parent chain up to the References, so every walk up works, and no walk down reaches it, so `numbered` — which counts the holding's blocks — cannot find it.

## The fix

Not in chemistry, by Doug's ruling — *"You are allowed to fix a bug, not rewrite chemistry"* — after a fix was built and rolled back the same afternoon: a promise in `bond-behavior.test.tsx` read red, expected 1 and got 2, and a change that bound inline children through the block path's cache went green at 889 with the Lab driven, but it re-routed the block path through a shared method, 47 lines in and 42 out, which is a rewrite wearing a bug's name in a framework not all of which is in promises. Both were reverted with the source; chemistry's gate re-read 888 of 888 on the clean checkout. The report stands in [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md#reported), and the seam is known: `groupInline`'s `flush` evaluates every inline element through an eval host on every pass, where `process` reuses a bound block child by type and key.

On the public side the design changed instead, at Doug's halt: nothing files at an entry's bond any more. A fold keeps the writing it names in the book's scratchpad, the scratchpad's `find` answers the first kept, and a citation's number is read by key from the entries of the document holding what it found — so the orphan may register second and changes nothing ([Writing a Book, ch. 4](../writing-a-book/04-the-book-s-little-framework.md#citations)).

## Prevention

A bond constructor's side effects — filing, ids, registrations — happen once per population, and today there are two. Any registry written at bond and read at draw is exposed to this until chemistry evaluates children once. The tell is a count: a subclass whose bond constructor increments a counter, and two where one was written.
