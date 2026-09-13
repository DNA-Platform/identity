# The Plan — Chapter Zero

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/the-coding-style/03-the-coding-style.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): **overwritten as intentions are addressed** — it holds what is INTENDED, never what happened. Chemistry had none until 2026-09-08; the framework's open work lived in whoever's head last touched it.*

# <a id="now"></a>THE CURRENT SPRINT — one render

***Doug, 2026-09-08:*** **"public is loading 3 times. It is rendering three times before it settles. It is non-reactive. It has to be once."**

***Measured the same day, per instance:*** **788 instances, 1,576 view passes, exactly 2 each — and NOT ONE drew once.** *A uniform doubling rather than a cascade, and the second pass is [`particle.ts:495`](../../package/src/abstraction/particle.ts), a dependency-array-less effect that draws again on every commit to diff against the cache.*

*A first count was per CLASS and Doug threw it out — **"You have instances and sequences confused"** — because 304 `$Block` draws is a page with 304 blocks, not a defect.*

**The sprint is [The Bond Pass](45-sprint-48--the-bond-pass.md)**, whose subject was already this — *a bond constructor's writes should not wake anything until React has processed* — now given its real target and its canonical case. ***Doug: "I would solve this problem using the wiki as the canonical thing to get to one render, fixing $Chemistry but tweaking it too if needed slightly."***

# <a id="next"></a>NEXT — atomic and coupled

> ***Doug, 2026-09-08:*** **"No this is a feature I thought existed that is broken."**

> ***HALF OF IT LANDED 2026-09-12, AS A REGISTRATION WORD — [the representative](../composition/11-the-representative.md#single).*** *Doug: "when registering a class, you can register it as a singleton with 'single' as an extra parameter… we use a component associated with one instance which is something $ supports as well… make one, and then get its component and rely on it to persist."* **`$(A, B)(C, 'single')` makes one instance at registration, bonds it once through its own component, and answers that component — every mount shares the instance, its bond constructor never runs again, and it outlives its mounts.** *Promised three ways and seen in the Lab: two rooms reading one lamp's count, the wing closed and reopened, the count kept.* **What it does NOT do, and is still this sprint's:** *a write to the one instance repaints only the last-mounted copy — the one-update-handle defect below stands — and a chemical that merely READS the instance's member in its view is not woken by the write, which is [the cross-chemical rule](../reactivity/03-cross-chemical-writes.md); the Lab case asks for its repaint honestly, as the theme case does.* **`atomic` and `coupled` are the broadcast that would close both.**

> ***AND THE SAME DAY, A REGISTRATION BECAME KINETIC — [the representative](../composition/11-the-representative.md#redraw).*** *Doug: "We also need a redraw to be triggered for registration changes so that dynamic registration is something that happens… related to the scope something is registered to, but nothing happens if we aren't in a render context yet."* **Three reaches on things the framework already held: a scope reacts what it has mounted (the chemicals whose prototype it is), a class's root scope reacts every instance of the type through `$Reaction`'s registry, a tag override reacts everything.** *"Nothing before a render context" cost nothing — `react()` is a no-op without an update handle, and a registration is refused inside a draw.* **Gate: tsc 0, 45 of 45, 899 of 899; seen in the Lab's theme case, whose "register, change nothing else" now repaints by itself.** *The one-update-handle limit stands here as everywhere.*

***One instance is not a class, it is two settings, and neither works today.*** **The design is settled and the vocabulary is his:**

| | |
|---|---|
| ***`atomic = true`*** | **the CLASS's word, and it does not come back.** *A class that says it couples its instances, each taking the class as its address* |
| ***`coupled`*** | **the INSTANCE's word, and it does.** *Defaults true on an atomic class; an instance may set it false and leave the system* |
| **the two wants** | ***being one of a thing and being remembered are different.*** `persist` is the second, and `$Atom` is the class that says both |

**Doug's shape, in his words:** *"the broadcast mechanism is best and it even allows this to be togglable… If atom is true on template maybe that means broadcast is true by default, and if it's set to false, that one instance wouldn't be a part of the system."* **And the constraint that goes with it:** *"I need this performant and not triggering ghost rerenders."*

## <a id="what-is-known"></a>What is already known, so the sprint does not rediscover it

***Everything below was measured on 2026-09-08 and then REVERTED*** — the tree went red and the promises were not believed. **The knowledge is the return on that; the code is not.**

- ***The convergence machinery exists and does not stand alone.*** **[`hydration.ts`](../../package/src/implementation/hydration.ts) enrolls chemicals under a pid and propagates each committed write** — its own header says *"A chemical enrolls by being atomic"* — **but `changed()` returns early unless `persist`, so a thing that couples without being remembered never notifies.** *That gate is the feature's first line of work.*
- ***Coupling must not cost disk.*** *A coupled address converges through the in-memory record; only a remembered one is written out. Built and measured working: `coupling alone touches disk: false`.*
- ***The ghost repaint is real.*** **`propagate` calls `react()` on every member of an address on every committed write, whether or not anything moved** — a repaint proportional to how many share the address. *A fix was measured: have the converge report whether it changed anything, and react only then.*
- ***A returned-template singleton was tried and abandoned.*** *Returning the class template from the constructor makes JS re-run the field initializers ON the template, and no discriminator tried could tell a re-declaration from an author's write on more than a few shapes. **Three ordinary ones wiped state**: a subclass overriding a base field, a bare re-construction, and `+= 1`.*

## <a id="defects"></a>And three rendering defects it would have to answer

***Measured against the same attempt, and they are the reason a shared object is harder than it looks.***

| | |
|---|---|
| **one update handle, N mounts** | *a particle has ONE, and each mount overwrites it — only the last-mounted copy repaints* |
| ***unmounting kills the survivors*** | *the cleanup clears the handle unconditionally, so unmounting any copy silently stops the others reacting* |
| **`bind()` makes a second object** | *[`chemical.ts`](../../package/src/abstraction/chemical.ts) derives every bonded child and never consults the setting* |

***Doug's ruling on the last:*** **"We need everything in the framework that does object.create to consult the atom property."** *There are twelve `Object.create` sites in the framework and only two of them make another of a chemical — [`$lift`](../../package/src/abstraction/particle.ts) and `bind()`.*

# <a id="stand"></a>WHERE THINGS STAND — 2026-09-12, handed to the public branch

**Three local commits on top of Sprint 63's `2adf401`, none pushed, `dist` rebuilt after the last:**

| commit | what | spelling |
|---|---|---|
| `249758a` | **a registration may say `'single'`** — one made instance, bonded once, answered at every mount, outliving them | `$(A, B)(C, 'single')` · `{ single: true, reach, asker }` |
| `5d6dae7` | **the emit owns the order of a ranged level** — plain levels first, then `max-width` descending, `min-width` ascending, whole across the chain | nothing new to write; `@select('@media …')` as before |
| `42b165c` | **a registration redraws what it reaches** — a scope its mounts, a class root every instance of the type, a tag everything; nothing before a render context | nothing new to write |

**And two from the day before, `8878e5a` and `5143622`:** *an animation is a level (`@select('@keyframes landed { from {')`), a named at-rule whole wherever it stands; `$subject` and the `$Catalogue` type exported.*

**The gate on the head:** tsc 0 · 899 of 899 · Lab styled 17 of 17, representative case 3 six of six, the theme case repainting on a bare registration · library 9 books, 72 chapters, 0 errors.

**What the public branch should know before building on these:** *a `'single'` registration is identity and persistence, not broadcast — a reader of the instance's member is not woken by a write, and a write repaints the last-mounted copy; a theme is a singleton and one per page, so that is the fit.* **A registration now repaints, so a theme re-registered from a handler no longer needs a nudge — and anything that registers in a loop will repaint in a loop.** *Media queries no longer need to be written in cascade order, in one class or across the chain. `@keyframes` names are document-global, last wins.* **`registered()` walks the class chain by NAME: an anonymous class's root registration is invisible to its subclasses.**

**Open, and none of it blocks them:** *the one-update-handle defect and the reader-not-woken rule, which are `atomic` and `coupled`'s; the Lab app's own tsc carries three July errors in `frames/case-1.tsx`; the pitch of `drawn()` waits for a case.*

# <a id="loose"></a>Loose, and small

- ***A `$Reaction` per construction, never released.*** *Every `new` on a chemical enters `$Reaction._chemicals`, a static strong Map with no removal — measured **+10 per 10 constructions**. Not urgent, not free.*
- ***Which settings are constant and which are overridable.*** **Doug: *"Overridable means the next subclass can change it. We did this for resolve."*** *`$look` is dynamic, `inline` and `formula` are constant, `persist` is dynamic. The rest is unruled.*
- ***The Lab driver reaches 35 of 42 sections.*** *Seven carry no verdict and cannot be asserted — `assigned`, `blocks`, `facades`, `formula`, `persistence`, `perspectives`, `styled`. **The persistence one is the atom demo**, which is why an atom defect reached a browser before a promise.*

# <a id="pitches"></a>PITCHED FROM THE PUBLIC BRANCH — 2026-09-11, two extensions, each of a mechanism that exists

*Doug: "pitch something that is a natural extension of what's there and not a hack." Both come from [Sprint 58 of the public branch](../../../.public/.lib/projection/64-sprint-58--the-chapter-that-is-its-view.md), where each was needed, measured, and not built.*

## <a id="pitch-keyframes"></a>An animation a styled chemical declares — the extension of `@select`

**What is there:** a styled chemical declares its rules as members under a selector, `@select('.pd-row') entry_display = 'flex'`, and the compiler turns `prefix_property` into the property under the prefix's selector; a selector that writes its own braces says its own nesting, so `@media` already holds a descendant rule ([styled.ts](../../package/src/abstraction/styled.ts)).

**What is wanted:** the landing highlight on a cited entry that fades in a second or two — *"we don't want it permanently blue."* CSS says that with `@keyframes`, and the theme compiler has no first-class word for one.

**The extension, as pitched:** under an at-rule selector, the member prefix names the STOP rather than a property group — `@select('@keyframes landed') from_background = pale; to_background = 'transparent'` compiles to `@keyframes landed { from { background: … } to { background: transparent } }` — and `.pd-entry:target` declares `landed_animation = 'landed 2s ease-out'` like any rule. **Not the trick:** a selector string carrying `{ from { … } to` inside it works today and was declined.

> ***BUILT 2026-09-11, and smaller than the pitch — [the chapter](../particle/11-styled-particles.md#animation).*** *Measured before designing: the stylesheet engine already hoists an inline `@keyframes` to the top level, and writing the stops as levels — `@select('@keyframes landed { from {')` — was already legal under the levels feature and compiled to TWO `@keyframes landed` blocks, because the emit keyed blocks by the whole selector string; CSS keeps the last same-named block, so a stop was lost.* **Doug's ruling: merge the openings in the emit, and a name stays literal and the author's.** *The prefix-names-the-stop shape was not taken: it gives a prefix a second meaning under one kind of selector and collides in `standing()`.* **Two rules landed: a level opened by two selectors is opened once, and a named at-rule is whole wherever it stands** — *a subclass restating one stop brings every inherited stop with it, because a block CSS replaces cannot be contributed to by halves.* **Gate:** tsc 0 · 34 of 34 styled promises, 888 of 888 · Lab case five driven, 17 of 17, the fade seen moving from yellow to transparent and, with the subclass stood in, from red to the same transparent. **One consequence measured and recorded, not a defect:** *a `@keyframes` name is document-global, so a subclass keeping the name and mounted BESIDE its base replaces the base's animation too — the singleton theme is the consumer and it is one per page.* **And closed the same day, with no dependency:** *the Lab's babel path could not decorate a class field, so no Lab case had ever shown `@select` on one; the fix was the wiki's own config shape — babel parses the decorator, esbuild transforms it — after a plugin was installed for an hour and taken back out.* ***The catalogue was also exported on the public branch's ask*** — *`$subject` and the `$Catalogue` type, so their `$Scratchpad` stands on the registry the framework's own scoped registration stands on; it is pinned by 106 promises and is not reactive, which they built for.*

## <a id="pitch-drawn"></a>A chemical's drawn parts — the other direction of the catalyst graph

**What is there:** the catalyst graph answers one direction, child to parent, and since 2026-09-06 a chemical written in a view is given its writer as parent at derivation ([the catalyst graph](../composition/08-catalyst-graph.md)). A reaction registers every chemical it enrols by id in the system, and `$Reaction` keeps a registry of chemicals, both private ([reaction.ts](../../package/src/abstraction/reaction.ts)).

**What is wanted:** a chapter that prints its document, and a citation in another chapter that needs that document's entries. Measured on the public branch: the printed document's parent IS the chapter, so the way up works with no member held; the way down has no public reading, so the document hands itself to the chapter's reference at its bond — one line, and one line too many by Doug's standard: *"Do we need one? Why isn't it then of an async method? Use $Chemistry async handling."*

**The extension:** a reading of the other direction from the registry the reaction already keeps — `drawn()`: the chemicals whose parent is this one, this render — so a chapter finds the document it printed, a book its drawn chapters, and a reference to a drawn part resolves by `await this.next('mount')` and a read, with no handover written by anyone. It is the assignment's default form ([the assignment](../composition/14-the-assignment.md)) read back: the walk already knows every top's writer; this names the tops from the writer's side. *`drawn` is a proxy name; Doug's to give.*

# <a id="reported"></a>REPORTED FROM THE PUBLIC BRANCH — 2026-09-11, a defect measured to the line, not yet designed against

**Every chemical mounted from JSX bonds its inline children twice, and the second population is thrown away.** [`$lift`](../../package/src/abstraction/particle.ts)'s component calls `p[$bond$]()` on every render; `[$bond$]` is `this[$synthesis$].bond({ children: this[$children$] })`; and [`$Synthesis.bond`](../../package/src/abstraction/chemical.ts) runs `this.process(…)` — `groupInline` → `flush` → `evalElement` on every inline JSX child, whose bond does the same to its children — **before** `sameArgs` finds the arguments unchanged and skips the bond constructor. The lift's first mount renders twice by construction (`setCid`), so every mount pays it. *Measured on the public branch with a counting subclass: two bonds per entry, section and citation under a printed document; `view()` runs on the first of each pair; the second has a parent chain up and stands in no block.* **What it cost there:** an entry that files itself in its bond files twice and a keyed registry keeps the orphan, so a citation's number is `undefined` — [public Solutions 71](../../../.public/.lib/solutions/71-the-population-that-never-drew.md). **What it costs everywhere:** every bond constructor, parse and rule under a mounted chemical runs twice at mount — the paper's 285 entries included. **Two shapes to design between, Doug's call:** the synthesis compares the raw children before evaluating them, or the lift does not bond on the render that only stores the cid. *A promise first — a mounted chemical's inline children are evaluated once — red today.*
