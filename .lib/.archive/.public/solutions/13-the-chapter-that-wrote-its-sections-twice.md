# The chapter that wrote its sections twice

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** model · demo · wrong-altitude · silent-default · render-loop
- **sprint:** [Writing](../projection/10-writing.md)

---

## Symptoms

- **Nothing failed.** No error, no warning, every test green, every page rendering correctly for two sprints.
- The only visible trace was elsewhere, and it was read as two unrelated defects: [an element whose parent changed on screen](09-the-parent-that-changed-on-screen.md), and [a constructor that captured the wrong instance](11-the-constructor-that-captured-the-wrong-instance.md). Both were filed, both were fixed at the symptom, and **neither found this.**
- Asked directly, the model and the screen disagreed about what a chapter was made of — and nobody had asked.

## The instrument

A section subclass that counts its own construction, in a chapter that writes its sections in `view()` — which is **every chapter in the demo**:

```
built during the bond:        2      model parts: "A Chapter", "Summary"
built after rendering:        4      (delta 2)
model parts still:            2      same objects as before rendering: true
sections given as CHILDREN:   0 extra builds
```

**Four sections built where two were written.** The model held the first two. The reader saw the other two.

## The mechanism

**`view()` was carrying two contracts.** A chapter that wrote its sections in its view had them evaluated once, at the bond, into its parts — and then React called `view()` again to draw, evaluating the same writing a second time into a different set of objects. So the sections that existed and the sections that rendered were never the same sections.

And the base told the two contracts apart with a **self-check**:

```js
if (this.view === $Document.prototype.view) return [];
```

A class asking whether it had been overridden. That is the tell, and it names the real defect: **a subclass overriding `view()` purely to restyle its chapter would have had its sections harvested out of its styling.** The polymorphism the base offers was being spent on a question the base should never ask.

*Doug, on reading it: "It sounds like you are breaking polymorphism. Document should be overwriteable. There should [not] be any form of self-check. That is just a terrible code smell of an incorrect implementation."*

## The fix

The declaration is read **once**, and then the document draws the sections it holds — through [`frame`](../../../chemistry/package/src/abstraction/particle.ts), the seam already built for exactly this: *"frame wraps the view; the framework calls frame which calls view."*

**And the self-check is deleted with nothing in its place.** It was guarding a case that resolves itself: a document that writes no sections falls through with nothing, because the base view renders parts that are not there yet and finds none. Ceremony, not logic.

## What it explains

Both earlier filings are this defect wearing different clothes. *The parent that changed on screen* and *the constructor that captured the wrong instance* are both **two populations of one object** — one built at the bond, one built at render — and each was fixed where it hurt rather than where it came from. **A symptom filed twice is a signal that the cause was never found.**

## The lesson

**A method with two contracts will be told apart by a check, and the check is the smell.** When a base class asks *"have I been overridden?"*, it is because two different jobs were given to one member and something now has to guess which one is being asked for.

And the quieter half: **this defect could not fail.** It produced correct pages and green suites, because both populations were built from the same writing and so looked identical. The only way to see it was to **ask the model what it held and compare that to what was drawn** — which is a check nobody runs unless the framework's whole point is that those two must be the same thing.
