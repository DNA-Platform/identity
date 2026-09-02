# The sections that collapsed into one paragraph

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** model · framework · wrapped-value
- **sprint:** [The Index](../projection/34-the-index.md)

---

## Symptoms

- ***Six tests red at once, and the wrong value read `'tabc'` where `['t','a','b','c']` was promised*** — **a section's every written paragraph was rejected by the accept, fell to held, and was wrapped into ONE implicit paragraph.** *Document and file collapsed the same way in the same run.*
- **The only change was a seat move that looked like nothing:** the accepted-kind member had moved from a class-side getter to a **plain field on the type** — same value, `$Paragraph`, same reads.

## The mechanism — A REACTIVE FIELD ANSWERS A CLASS WRAPPED

***A plain public field on a chemical is a reactive member, and the membrane answers FUNCTIONS off reactive members wrapped*** — *the same machinery that hands a derivative its methods pre-bound.* **A class is a function.** So `this.type.writtenAs` answered a bound impostor of `$Paragraph`: correct to call, useless to `instanceof` — and `$$(token)(impostor)` refused every genuine paragraph, silently, because refusal is a legal answer for the accept.

## The fix — CLASS-VALUED MEMBERS ON CHEMICALS ARE GETTERS

**`canonicalForm` had been stating the law all along:** *the one class-valued type member that has always worked is a getter.* The seat move was kept and the shape corrected — `get writtenAs()` on each type, in `canonicalForm`'s exact form — **six reds to zero, 360/360.**

## The lesson

***Storing a function or a class in a chemical's reactive field is identity death:*** **every consumer that compares — `instanceof`, `===`, a registry key — meets the wrapper, not the thing.** *The greppable tell: `= $SomeClass;` as a field initializer anywhere a chemical's membrane will serve the read.* **When a class must live on a chemical, it lives behind a getter — which is what `canonicalForm`'s shape was specifying the whole time.**
