# A function prop made per draw defeats the diff

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)

---

Found 2026-10-15, chasing a reactive loop on one page of Doug's library. The finding is about my own framework, so it belongs here rather than in the sprint's record.

**The mechanism I had not written down anywhere.** After every commit, a particle redraws its own view in a `useEffect` with no dependency array, compares the fresh drawing against its cache, and asks React for an update **only if the two differ**:

```js
const current = augment(withAsker(p, () => p[$renderView$](), true), react, p, false);
if (diff(current, p[$viewCache$])) { p[$viewCache$] = current; p[$update$](); }
```

That is the design I am proud of — a chemical checks its own work and charges React nothing when the drawing is unchanged. But it has a precondition I never stated: **the drawing must be a pure function of the state down to identity.** `diff` compares props, and a function compares by identity. So a handler built inside the draw is a prop that is *never* equal to itself, and the effect's "only if they differ" becomes "always". The guard inverts into an engine.

**What it looks like in the wild.** A paragraph subclass in Doug's library hands its container two arrow functions for hover:

```tsx
override container(props: ContainerProps): ReactNode {
    return super.container({
        onMouseOver: event => { … this.unfold(); },
        onMouseLeave: () => this.fold(),
        ...props,
    });
}
```

Measured by signing each drawing and tagging every function with an identity: the whole tree was byte-identical between draws except `onMouseLeave#1 onMouseOver#2` → `onMouseLeave#5 onMouseOver#6`. Nothing had changed and the diff said everything had.

**Why it usually hides.** It does not loop forever on its own, because the next render takes the skip path — `drawn && !dirty && handed unchanged && props equivalent` — which sets `skipped`, and the effect opens with `if (skipped && settled) return`. So the churn costs an extra draw and then goes quiet. It only becomes a visible loop on a page where *something else* keeps the chemical dirty, so the skip path is never taken and the effect fires every commit. **Two cheap faults, each survivable alone, multiply.** That is why the page that failed had been bisected a dozen ways without the cause falling out: no single cut removed a sufficient cause, because neither fault was sufficient.

**The general shape, which is the part worth keeping.** A framework that decides "has anything changed?" by comparing its own output has made output stability a correctness requirement, not a performance nicety. Anything built fresh in a draw — a component, an object literal in props, a handler, a new array where the old one would do — is a lie told to that comparison. The team already had the rule for components (*a component made per pass — never*) and for hover (*hover is CSS*). They are not two rules. They are one rule about identity, and I had only ever written down its instances.

**And the diagnostic that found it, which I want to keep.** Patch `$Writing.prototype.view` from inside the page, sign the returned tree with every function tagged by a WeakMap identity, and report any instance whose signature changes between draws while its state did not. That question — *which chemical's drawing is not a function of its state?* — is answerable in one run, and it is the question to ask first on any max-update-depth, before cutting anything.

## The second round, and why the fix was right for a reason I had not found

The handlers were made fields, and the page I had been chasing went quiet — but the chapter above was still missing the invariant that makes that the *correct* fix rather than a lucky one. It is this: `augment` wraps **every** event-handler prop in a fresh wrapper on every pass and cannot do otherwise, because the wrapper carries the scope. What saves it is one line — the wrapper is tagged `wrapper[$original$] = handler`, and `equivalent` unwraps it before comparing. **So the framework's contract is not "don't make functions during a draw"; it is "the handler's *source* identity must be stable," and the wrapper layer is explicitly designed to be transparent to the diff.** I had written the rule down as a prohibition when it is really a contract with one named escape hatch.

Signing `view`, `container`, `write` and `note` across every class after the fix shows zero instability, which is what I wanted to know.

**The better instrument, and the one to put in a regression.** Counting console warnings is a bad gate: React dedupes "cannot update a component while rendering" to a single line however many times it fires, so one warning can hide thousands of updates. Patch React's `useState` instead, wrap the returned setter, and key a counter by a short stack. Then the number that matters is *setStates reached from the post-commit effect's diff branch*: **a healthy page is exactly zero**, and the page I was chasing ran six to seven thousand. Zero-or-not is a far sharper gate than a warning count, and it names which of chemistry's two update paths is firing — the effect's diff, or `finalize → react` — which a warning never tells you.

**And the mistake I made, which is the part worth keeping.** Mid-session the dev server re-bundled its dependencies, and the two fatal warnings stopped reproducing. I had been cutting code and measuring after each cut, and two cuts "confirmed" a cause in the same window where the environment changed underneath me. Both confirmations were worthless, and I nearly reported one. **A fault that disappears is not evidence until you have put it back and watched it return.** Restoring the file is the other half of the cut, and I had been treating it as cleanup. Measure the measurement applies hardest to a disappearance, because a disappearance is what you were hoping for.

**One hazard found by reading rather than by measuring, and still loaded.** `reconcileVisitor` compares every non-children prop with `equivalent`, which *walks* objects. So handing a live chemical as a prop — `<Mark cover={chapter}>`, an idiom at seven call sites in the library I was reading — makes that element's equality depend on the whole chapter's mutable state, its classes included, and classes demonstrably move during a draw. It did not fire that day and it is a gun on the table. The right place for it is chemistry, not the library: **a prop that is a particle should compare by identity**, which is how chemistry treats a chemical everywhere else — `$(chemical)` caches per instance, the lifted component is keyed per instance. Deep-walking a chemical to decide whether a prop changed contradicts the framework's own notion of what a chemical's identity is.
