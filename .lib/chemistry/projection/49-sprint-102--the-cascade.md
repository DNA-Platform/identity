# The Cascade

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/the-coding-style/03-the-coding-style.md)
- **status:** `built, local` — *opened and built 2026-10-08 from [the pitch](00-planning.md#pitch-cascade); committed `554dbc8` in chemistry, nothing pushed; awaiting Doug's decision — "It's a serious change."*
- ***The chapter name and the sprint number are PROXIES.*** *The number is the team's next after the public branch's 101; the name is the pitch's.*

---

## <a id="the-requirement"></a>The requirement, in Doug's words

> **"Take a look at this and catchup on the part of the codebase that is related. Is there a fix here? can you see its implementation? is it hard? What are the consequences?"** — *handed the manual session's catch-up on the cascade: a press on a section's own state renders the whole book again from its root, 3,278 ms in the dev serve.*

*The build was ruled twice:* **"Build C with its two fixes"** *and* **"Can't you build a test to replicate the problem in $Chemistry tests and then fix there? If you are fixing just this problem, then I am afraid you might be being too myopic."**

## <a id="the-rule"></a>The rule

**A chemical draws when its own state, its props, its theme, or a chemical it read while drawing changed — and otherwise answers what it drew last.** React bails out of a subtree handed the same element objects, so a parent's redraw is no longer its children's.

*From first principles, in the room, on Doug's "I want first-principle reasoning. Why wasn't this implemented already":* the framework's reactivity was always scope-tracked for reagents — a scope records reads and writes, and finalize dirties the writers and the readers whose values changed ([scope tracking](../reactivity/02-scope-tracking.md)). **The view was never in that scope.** A view is pure and its reads were never recorded, because React's cascade re-ran every view beneath anything that reacted — [the reactivity contract](../authorship/04-the-reactivity-contract.md) said so in its own known limits: *"chemicals reading each other's state outside a common React ancestor stay stale… A and B need to share a React ancestor that re-renders on changes."* So "a chemical draws when something it read changed" was true by brute force, not by tracking. **Tracking the draw's reads is the scope's own rule extended to the draw**, and it was not built before because nothing was wrong while the cascade stood, only slow; chapter zero carried it as a pitch since 2026-09-27.

## <a id="the-three-questions"></a>The questions asked mid-build, and their answers

**"What is the cost of this? This doesn't break any promises? Was this just a hidden optimization in $Chemistry that we never noticed? Or does it close off user stories that maybe should be in the promises?"**

- *The cost:* per reactive read while a draw is in flight, one own-property check and up to two `Set` adds; one `Set` clear per draw; six internal symbols on a chemical. Measured [below](#measured).
- *Promises:* 953 of 953 hold. **Two reds on the way were the new rule's own bug**, not an old promise: a derivative's write woke every derivative of its template, because the reader sets were reached through the prototype chain by `??=`; the sets are own properties now.
- *Not a hidden optimization:* a per-mount derivative has always read its template's values through its prototype, and a theme hands on a face that reads the same way; the cascade redrew everything, so that read-through never had to be reactive on its own. The memo made it have to be.

**"I'm a bit concerned at how much you are relying on .public. If this is a low-level $Chemistry change, you need to approach this with use cases at the framework level, not at a one-consumer level."** — *The first promises were a book's and the Lab's, one consumer's story twice. The rule's promises were then written in the framework's primitives, [below](#the-promises), and the public branch's suite and the binder run last, as a check.*

**"I want first-principle reasoning… Can you prove that it is something consistent with $Chemistry that wasn't thought of, or does it close off certain types of state changes in the future?"** — *The read tracking: consistent, [above](#the-rule). The holder rule I had just built — a read subscribes the drawer to the chemical whose store holds the value, so a template write wakes the derivatives reading through it — **not consistent, and the suite proved it**: five standing promises in three files say a template write is silent to every derivative, shadowed or unshadowed ([`lexical-scoping.test.ts`](../../package/tests/abstraction/lexical-scoping.test.ts), [`state-persistence.test.tsx`](../../package/tests/react/state-persistence.test.tsx), [`short-prop-name.test.tsx`](../../package/tests/regression/short-prop-name.test.tsx)). It was thought of and decided against. **Reverted on their evidence.** What it closes is enumerated [below](#what-the-cascade-carried).*

**"Very rarely is anything free in life."** · **"If we make a decision like this, we will have to provide other ways of timeouts and whatever else was lost. It's a serious change."** — *the enumeration below is the answer, with the way each story has now or has not.*

**"I want it written down somewhere that $Chemistry must be developed as a framework for consumption and not as a utility for .public. You guys were moving forward, and I had to ask you what use cases it broke twice before you bothered to think about the broader vision. We don't code frameworks for one use case. That's absurd."** — *written into [the testing contract](../testing/01-the-contract.md#in-the-primitives) and the team's memory.*

## <a id="built"></a>What was built

- **[`particle.ts`](../../package/src/abstraction/particle.ts), the lift** — *the render body opens with the memo: when the last draw stands (`$drawn$` holds its props and handed theme), the chemical is not `$dirty$`, the handed theme is the same object and the props are [`equivalent`](../reactivity/04-collection-mutation.md#walked), it answers `$viewCache$` and marks itself `$skipped$`; otherwise it clears dirty, forgets its reads, and draws. `$update$` marks dirty before it touches the token. A draw that threw stays dirty, so React's retry raises the refusal again. The settle pass runs once per mount and once per real draw (`$settled$`); the cache and the settle mark are forgotten at unmount, so a write while unmounted shows on remount.*
- **[`scope.ts`](../../package/src/implementation/scope.ts), the readers** — *`withAsker(…, draws = true)` records the DRAWER, the chemical whose draw is in flight; a reagent called from inside it does not displace it. `noteRead(read)` subscribes the drawer to the one read, in own `Set`s; `forgetReads(drawer)` clears them before each draw; `wakeReaders(chemical)` marks each reader dirty and reacts it — at once, or on a microtask when something is drawing, and never a reader that is itself drawing. `diffuse` wakes readers before it walks up, and finalize wakes each dirty chemical's readers after reacting it.*
- **[`bond.ts`](../../package/src/abstraction/bond.ts), the getters and setters** — *both getters note the read; both setters, meeting a write during the chemical's own draw, wake its readers and return — construction is not news to the chemical, and is news to a facade dressing it.*
- **[`symbols.ts`](../../package/src/implementation/symbols.ts)** — *`$dirty$`, `$drawn$`, `$skipped$`, `$settled$`, `$readers$`, `$reads$`, internal.*
- **One promise re-spelled** — *the accessor promise that stood on the second pass re-applying props now writes a plain field.*

## <a id="the-promises"></a>The promises, in the framework's primitives — [`the-cascade.test.tsx`](../../package/tests/react/the-cascade.test.tsx)

*A parent's redraw is not its children's:* a write to the book draws the book and no chapter · a paragraph's own write draws it, its chapter and the book above it, and nothing beside them · a chapter whose prop changed draws, and the others do not · an unchanged write draws nothing. *A view that reads another chemical follows it:* a reader drawn beside what it reads redraws when that changes, and a bystander beside them does not · a facade follows what it dresses, when the dress is told by a prop from above. *A held instance is drawn by the component lifted from it:* a write to a held instance is drawn by the component lifted from it · a theme held and written repaints the styled chemical and the raw styled component beneath it — *what is held is never the first of its class, since that one is the template.* *By the primitives:* a derivative's write is its own, the others lifted from the same template do not draw · a read through a reagent the draw calls, or through an accessor, is the draw's, and a handler's read is not · the same children drawn again by a parent are not news to the child · a provider drawn again for a prop of its own hands the same face, and the chemical beneath does not draw.

## <a id="measured"></a>What was measured

| | result |
|---|---|
| a synthetic book, 100 chapters × 3 paragraphs × 5 words, views drawn as book/chapters/paragraphs/words | **book write:** HEAD 2/200/600/3000 in 121ms → 2/0/0/0 in 7ms · **paragraph write:** 3/300/900/4500 → 2/2/2/0 in 16ms · **same value:** 2/200/600/3000 → 0 · **mount:** 3/300/900/4500 → 2/200/600/3000 in 282ms |
| chemistry's promises | **953 of 953**, tsc **0**, no mid-render warning |
| the Lab in Chrome | persistence **7 of 7** · styled **19 of 20**, the one red the theme case, [below](#for-doug) |
| the binder, against the rebuilt dist | typecheck **0**, unit **149 of 149**, regression **48 of 48** |
| the public branch's suite | **11 reds, all literal mount and cascade counts** in its `renders.test.tsx` — a mount is 2 draws now, not 3, and a book-level write no longer cascades; theirs to re-pin |

## <a id="what-the-cascade-carried"></a>What the cascade carried for free, and the way each story has now

*Each line measured 2026-10-08 in a probe promise, created and removed in one turn, or in a promise that stands.*

| story | before, under the cascade | now | the way |
|---|---|---|---|
| a view reads another chemical's reactive state | stale unless a common ancestor redrew — the contract's own limit | **follows it directly** | none needed; the limit is lifted |
| a reactive field written from a timeout, a socket, a promise | the chemical drew, and everything beneath its ancestors | the chemical draws, its ancestors draw, and what read it while drawing | none needed |
| an in-place mutation from a timeout | invisible outside a method | the same | wrap it in a method, as the contract says |
| an inert member, a plain object, a module variable, read in a view | refreshed whenever the cascade reached the chemical | drawn when the chemical next draws for its own reasons | ask its reaction to react — **the contract's `react(chemical)` is not exported under that name**; the reaction is reached on the symbolic surface, and an exported word is owed or the contract's section is wrong |
| a plain React component beneath a chemical, reading chemistry state by closure | re-rendered whenever its chemical ancestor drew | re-rendered when its nearest chemical ancestor draws; **stale beneath one that skipped** | **none yet** — lifting the function with `$` does not track its reads either, measured; a way is owed if the story is wanted |
| a plain React component beneath a provider, reading `props.theme` | re-rendered by context when the face changed, or by the cascade | re-rendered by context when the face changed | none needed — styled-components' own |
| a keyed child whose handler closed over a loop variable, every other prop equal | re-rendered, closure fresh | **skipped; the old closure stands** — functions are compared by their source, the framework's one equality | pass the variable as a prop; or rule that a function prop compares by identity, which redraws every child with an inline handler on its parent's draw |
| a held instance that is the first of its class, lifted and written | the derivative re-read the template whenever an ancestor drew | **silent, as the five promises say** | hold one that is not the template; or the framework decides a held field is never a template; or the promise changes — Doug's |
| a global registration | every registered chemical reacted | the same: `$Reaction.redraw` marks each dirty | none needed |
| a settle pass after an unobserved write between render and effect | one per React render | one per mount and per real draw; a skipped chemical has nothing new to settle | none needed |

## <a id="stand"></a>Where things stand

**Built and green in chemistry; one local commit, `554dbc8`; the dist rebuilt from it; nothing pushed.** *The decision is Doug's: "If we make a decision like this, we will have to provide other ways of timeouts and whatever else was lost. It's a serious change."*

**Owed, if it stands:**
- **The public branch's eleven literals** — *the manual session's and the public session's to re-pin: a mount is 2 draws, a book write does not cascade.*
- **An exported way to redraw** — *or the contract's section corrected; the probe reached the reaction through its symbol.*
- **A way for a plain component beneath a skipped chemical** — *if the story is wanted.*
- **The Lab's theme case** — *written against a template; by Doug's ruling.*

## <a id="for-doug"></a>For Doug

- **The Lab's case six writes its class's first instance.** `palette = new $Palette()` on the desk is the template of `$Palette`, `$(this.palette)` mounts a derivative, and the five promises keep the write silent; the case passed in Chrome only because the desk's own write cascaded. Three shapes: hold a non-template, decide that a held field is never a template, or change the promise.
- **The closure compared by source** and **the plain component beneath a skipped chemical** — limits, or promises with a way built.

**New names, proxies:** none exported; the six internal symbols. **Reverted on the suite's evidence:** `holder`.
