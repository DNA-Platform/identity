# The key that filed itself under its descendant

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `inherited-receiver`
- **sprint:** [The Specification](../projection/25-the-specification.md#the-build)

---

## Symptoms

- **`<Autobiography>Biography</Autobiography>` resolved** — and answered with an autobiography.
- `$Biography.standsFor('Book')` returned **the biography**, for a key `$Biography` never declared.
- **A class's catalogue held names belonging to its ancestors**, so the refusal message listed them too: *"it stands for Book, Biography, Autobiography, Auto-biography"* where only the last three were its own.
- ***Nothing threw. The suite was green — 31 promises, four of them watched going red — and none of them looked here.***

## What did not work, and why it looked like it had

- **First-one-wins.** `if (held.$find(ref) !== undefined) continue` stops a later claim from *displacing* an earlier one, so every ancestor's catalogue was correct. **It says nothing about a catalogue that was empty**, and a descendant's always is.
- ***Root-downward seeding was written for this exact fact and closed only half of it.*** [The Formula's D97](../projection/24-the-formula.md#d97) makes each ancestor's specimen first so the table cannot depend on construction order. That fixes *who wins*. It does not stop the losing call from filing somewhere new.

## The mechanism

**`cache` is declared once, on the base, and called from each class's own constructor.** A super-chain runs an ancestor's constructor body **with the most-derived class as the receiver** — so inside `$Biography`'s `this.cache('Biography')`, `this[$type$]` is `$Autobiography`.

***So `cache` cannot know which class declared the key it was given.*** It climbs from `this[$type$]`, which is the descendant, and the descendant's own catalogue is empty and takes it.

```
new $Autobiography()
  → $Biography's constructor body runs, receiver = $Autobiography
      → cache('Biography') climbs from $Autobiography
          → $Autobiography's catalogue: empty, so it takes 'Biography'
          → $Biography's, $Book's, $Type's: already held, so skipped
```

**Every ancestor was protected and the descendant was not**, which is why first-one-wins looked like it had covered this.

## The fix

***A key an ancestor already holds is an ECHO of that ancestor's claim rather than a declaration, so it files nowhere.***

```typescript
if (key !== undefined && chain.slice(1).some(cls => catalogueOf(cls).$find(ref) !== undefined)) return;
```

**One condition, and it reads as what it means:** *if someone above me already stands for this name, I am not the one declaring it.*

***The default is deliberately exempt.*** A no-argument `cache()` still descends, because [the one you fall to should be the class you wrote](../../../chemistry/.lib/composition/12-the-formula.md#findable-and-asking) — and a promise already pinned that.

**It was watched both ways**: three probes asserting the echo *existed* passed before the change, and the same three inverted pass after.

## The lesson

***This is [chapter 11](11-the-constructor-that-captured-the-wrong-instance.md)'s sibling, one fact along.*** There: **a constructor knows it ran; it cannot know it was kept.** Here: ***an inherited method knows it ran; it cannot know who declared it.***

**The general shape: any per-class registration performed from a constructor body registers under the MOST-DERIVED class, never the declaring one** — because that is what `this` means in a super-chain. *Nothing in the language will tell you; the receiver is simply not the information you wanted.*

***The greppable tell:*** `this[$type$]`, `this.constructor`, or `new.target` read inside a method that is **inherited** and **called from a constructor**. Every one of those is answering *the object being built*, and if the code meant *the class that wrote this line*, it is wrong and will not say so.

**And the compounding note is the sharpest part.** *The mechanism was already known — it is written down in the sprint that shipped it, in the decision that exists because of it.* **What was missed is that one fact had two consequences and only one was drawn.** *When a diagnosis produces a fix, ask what else follows from the same sentence.*
