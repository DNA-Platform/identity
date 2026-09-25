# The demand that was made twice

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `twinned-demand` *(proxy name, flagged for Doug)* · an override that never won · a waiver that waived half · a book refusing its own apparatus

---

## Symptoms

- ***A book's own placed synopsis, index and footer each drew a refusal panel*** reading **`a piece of writing says something, and this one says nothing at all`** — *and `$Synopsis` overrides exactly that rule, precisely so a book's made-empty apparatus may stand.*
- **The synopsis one was PRE-EXISTING and nothing had ever looked at that slot.** *`$Synopsis` has always extended `$Chapter`; the promise that checks a book's order asserts the cover first and the footer last and says nothing about what stands between.*
- ***A quotation drew its own first sentence as a heading above itself, then said the whole thing again*** — **and `QuoteSpecification` waives "a section opens with its heading".**

## The mechanism — ***a demand stated in two places, answered in one***

**A child's bond concatenates its own type onto its parent's**, so a synopsis carries `$TypeOfSynopsis` **and** `$TypeOfChapter`, and `specify()` ran *both* specifications:

```ts
for (const annotation of this.annotations) {
    if (kinds.has(annotation.constructor)) continue;
    kinds.add(annotation.constructor);
    annotation.specifically(this);        // ChapterSpecification runs BESIDE SynopsisSpecification
}
```

***The specification chain already inherits*** — `SynopsisSpecification extends ChapterSpecification` — **so the specialised type carries its parent's rules already.** *Running the parent's separately puts the two rules side by side rather than one above the other, and an override cannot win against a sibling.*

**The quotation is the same fault wearing a different face.** *A section's heading is demanded in TWO places: a rule that refuses a section without one, and `$TypeOfSection.supplies()`, which manufactures one from the opening sentence. `$Quote` answered the rule and not the supply, so it was given the heading it had just been excused from having.*

> ***THE ONE-LINE STATEMENT: where a framework states a demand twice — a rule and a supply, or a parent's specification and a child's — overriding one of them leaves the other standing, and the override looks like it did nothing.***

## The fix

| | |
|---|---|
| `$Writing.specify()` | **skips a type that another type in the same block specialises** — *the same test `kind` already uses. A piece of writing is judged by the kind it IS, not by every kind it inherits from* |
| `$TypeOfQuote.supplies()` | ***answers its parts unchanged.*** *The waiver and the supply are one demand and both are answered now* |

**Gate after: suite 107 of 107 — the first fully green run of the sprint — with all four pages driven and every hash unchanged.**

## Prevention

- ***When an override appears to do nothing, look for the SECOND place the demand is made.*** **A rule and a supply are the same requirement written twice**, and so are a parent's specification and a child's.
- **A specification chain that already inherits must not also be run link by link.** *Inheritance is the mechanism; running each ancestor separately defeats it.*
- ***A book's own apparatus is the least-watched writing in the system.*** **It is placed by the framework, so no author ever sees it fail**, and the promise that checks a book's order checked its ends and not its middle. *The synopsis had been refusing for as long as it had been a chapter.*

---

*Found 2026-09-09 while lifting twenty kinds so that each class extends what its interface and its type already named — [Sprint 53 — The Second Column](../projection/59-sprint-53--the-second-column.md). **The lift did not cause the fault; it made three instances of it visible at once.***
