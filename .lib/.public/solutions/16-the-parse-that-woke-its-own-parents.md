# The parse that woke its own parents

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** model · render-loop · diffuse · parse · gate
- **sprint:** [The Representative](../projection/12-the-representative.md)

---

## Symptoms

- **Both demo drivers went red with `Error: Maximum update depth exceeded`**, caught by React Router's boundary during render. `verify-book.mjs` stalled at **check 0** — the shelf, the first page it opens. `verify-demo.mjs` at check 21.
- **Every unit suite stayed green throughout** — lib **203/203**, chemistry **674/674**, `tsc` 0 in both, the app typecheck clean.
- It surfaced **several turns after the change that caused it**, because nothing drove the demo in between. The change was made, the suite was run, and the page was never opened.

## What did not work

Three reverts, each eliminating a suspect and none of them the cause:

| reverted | result |
|---|---|
| `$lift`'s registry-miss recovery (it calls `setCid` during render) | still red |
| the reagent priming that wraps every chemical method | still red |
| **all** of chemistry's source | a **different** error — `TypeError: made.valid is not a function` |

That third one is the informative one. It is not a fix; it proves the framework was **not** the cause, and it proves the model's converted asks depend on the new dispatch — with the old `$`, `$(Component)` answers the chemical, so `$(<Sentence>…</Sentence>)` was handed a chemical where a component was expected.

## The mechanism

One change, at five sites in the writing chain: the parse began threading a parent.

```tsx
// before
return $(<Sentence>{prose}</Sentence>);
// after — to give the composed part a lineage a scope could reach through
return $(<Sentence>{prose}</Sentence>, this);
```

**And `parts()` writes to every part it composes.** [`Writing.tsx:109-111`](../../package/src/writing/Writing.tsx) — `part.index = slot + this.first`, and `part.$role = 'mention'` where mentioning propagates.

**A write to a chemical that has a parent does not stay put.** Both of chemistry's propagation paths walk `$$parent$$` and react on every ancestor — [`scope.ts:94-102`](../../../chemistry/package/src/implementation/scope.ts) inside `finalize`, and [`diffuse` at `scope.ts:111`](../../../chemistry/package/src/implementation/scope.ts).

So the cycle closes:

```
parts() composes a part  →  writes part.index
   →  the write diffuses up the new parent chain: paragraph → section → chapter → book
   →  those ancestors re-render
   →  their views read parts() again
   →  parts() composes NEW parts, and writes to them
   →  … never settles
```

Before the threading, a composed part was its own parent, so the write had nowhere to go. **The parenting did not cause the write; it connected the write to something that would answer it.**

## The law

**A parse may not be given a parent while it mutates what it makes.** The two are incompatible as written, and neither is wrong on its own — the writes give parts their index, and the parent is what a scope needs in order to reach.

The consequence is a real limit rather than a bug to fix quietly: **region-scoped substitution through the parse is unavailable** until `parts()` stops writing to what it composes. That is a design question about what a reading is allowed to do, and it belongs in a design session rather than in a patch.

## The gate that missed it, and it is the fourth filing

The change was made to enable region scoping, run against the unit suite, seen green, and **never driven**. The suite could not have caught it: **no test renders a book**, so 203/203 proved compatibility and nothing about the parse under a paint.

This is [the green that exercised nothing](14-the-green-that-exercised-nothing.md) again — and that chapter's own conclusion holds here, that the cause is the **reporting** rather than any one gate. The number was true; the sentence that should have accompanied it was never said.

**The habit that catches it:** a change to the model's parse is not verified until a book has been **drawn**. The suites answer a different question, and answering it well is not evidence.

## What it also settles

A proposed conversion of the demo's three dresses into scopes was **the same change at sixteen eval sites**, and would have produced the same loop on the page. It was stopped and raised rather than shipped, on the grounds that the parse threads no parent and the ruling was owed. **That judgement was right for a reason nobody had yet measured** — and this chapter is the measurement.

## See also

- [The writing that looped its page](12-the-writing-that-looped-its-page.md) — the other render loop in this branch, and a **different** mechanism: prop rebinding on an inline child inside a block, host rendering 41 times and child zero. A reader arriving with "the page loops" should read both and check which shape they have.
- [The chapter that wrote its sections twice](13-the-chapter-that-wrote-its-sections-twice.md) — building the model inside a view, which this loop passes through on every turn of the cycle.
- [The green that exercised nothing](14-the-green-that-exercised-nothing.md) — the gate half of this.
