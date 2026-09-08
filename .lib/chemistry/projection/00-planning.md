# The Plan — Chapter Zero

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/designing-inexplicable-phenomena/11-the-coding-style.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): **overwritten as intentions are addressed** — it holds what is INTENDED, never what happened. Chemistry had none until 2026-09-08; the framework's open work lived in whoever's head last touched it.*

# <a id="now"></a>THE CURRENT SPRINT — one render

***Doug, 2026-09-08:*** **"public is loading 3 times. It is rendering three times before it settles. It is non-reactive. It has to be once."**

***Measured the same day, per instance:*** **788 instances, 1,576 view passes, exactly 2 each — and NOT ONE drew once.** *A uniform doubling rather than a cascade, and the second pass is [`particle.ts:495`](../../package/src/abstraction/particle.ts), a dependency-array-less effect that draws again on every commit to diff against the cache.*

*A first count was per CLASS and Doug threw it out — **"You have instances and sequences confused"** — because 304 `$Block` draws is a page with 304 blocks, not a defect.*

**The sprint is [The Bond Pass](45-sprint-48--the-bond-pass.md)**, whose subject was already this — *a bond constructor's writes should not wake anything until React has processed* — now given its real target and its canonical case. ***Doug: "I would solve this problem using the wiki as the canonical thing to get to one render, fixing $Chemistry but tweaking it too if needed slightly."***

# <a id="next"></a>NEXT — atomic and coupled

> ***Doug, 2026-09-08:*** **"No this is a feature I thought existed that is broken."**

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

# <a id="loose"></a>Loose, and small

- ***A `$Reaction` per construction, never released.*** *Every `new` on a chemical enters `$Reaction._chemicals`, a static strong Map with no removal — measured **+10 per 10 constructions**. Not urgent, not free.*
- ***Which settings are constant and which are overridable.*** **Doug: *"Overridable means the next subclass can change it. We did this for resolve."*** *`$look` is dynamic, `inline` and `formula` are constant, `persist` is dynamic. The rest is unruled.*
- ***The Lab driver reaches 35 of 42 sections.*** *Seven carry no verdict and cannot be asserted — `assigned`, `blocks`, `facades`, `formula`, `persistence`, `perspectives`, `styled`. **The persistence one is the atom demo**, which is why an atom defect reached a browser before a promise.*
