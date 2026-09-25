# The regex that remembered where it stopped

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** model · parse · demo · silent-default · stale-artifact
- **sprint:** [The Parse](../projection/13-the-parse.md)

---

## Symptoms

- **The page's word count moved from 475 to 578** after the notation entered the model, with no change that should have added words.
- **A word typed inside an unclosed fence was counted as writing.** `verify-demo.mjs` check 20 went red: the source grew and the count grew with it, where content is not writing and the count must hold.
- **The facing-page comparison disagreed with itself on screen** — *"The readings DISAGREE — 21 words against 30"* — while the unit suite comparing **the same two objects** reported them equal.
- Every unit suite was green throughout: lib 208/208, `tsc` 0.

## What did not work

Three explanations, each fitting some of the evidence and none of it:

| theory | why it fit | why it was wrong |
|---|---|---|
| the lexer mishandles an unclosed fence | the fence check was the loudest failure | probed directly — the lexer returns **one `code` token** consuming to the end, exactly right |
| a kind is not being recognised, so its content becomes prose | would explain the extra words | the kinds' own promises passed |
| the demo and the model disagree about what a part is | would explain the comparison | the comparison's **unit test passed on the same objects** |

That last row is the one that should have redirected the search immediately: **a test and a screen disagreeing about the same two objects is not a disagreement about the objects.**

## The mechanism

One line, hoisted:

```tsx
const display = /\$\$[\s\S]+?\$\$/g;      // module level
...
divide(prose: string): string[] {
    for (let m = display.exec(prose); m; m = display.exec(prose)) { … }
}
```

**A global regex carries `lastIndex` between calls, and a module-level one carries it between callers.** The first section parsed leaves `lastIndex` wherever its last match ended; the second section starts its scan from that offset into a completely different string. Every section after the first was divided from the middle.

That single fact produces all three symptoms at once — pieces missed, pieces merged, counts that vary with **how many sections were parsed before this one**.

**And the code it replaced did not have the bug.** The demo built the expression inside the function:

```tsx
const whole = new RegExp(`${fence.source}|${display.source}`, 'g');   // fresh, per call
```

Hoisting it to module level read as tidying. It was hoisting **state**.

## The fix

Build it per call, and say why in the source so nobody tidies it back:

```tsx
// Built fresh on every call, never hoisted: a global regex carries `lastIndex`
// between calls, so a shared one would start the second section mid-string.
const display = () => /\$\$[\s\S]+?\$\$/g;
```

## The lesson

**A `/…/g` regex is a stateful object, so a module-level one is shared mutable state wearing a constant's clothes.** `const` says nothing about it: the binding is constant and the cursor is not.

The rule is narrow enough to apply without thinking: **if it is used with `.exec` in a loop or with `.test`, build it where it is used.** A regex is only safe to hoist when every use is `.match`, `.replace`, or a non-global `.exec`.

**And the tell is worth more than the rule.** A defect whose symptom depends on **how much was processed before** — the first one right, later ones wrong; counts that shift when the page has more sections — is state that outlived a call. The suite missed it because a test builds one object and asks one question; the page builds many and asks in order.

## See also

- [The green that exercised nothing](14-the-green-that-exercised-nothing.md) — the unit suite passing while the page disagreed is that chapter's disease from the other side: here the suite's scope was too *narrow* to reach the defect.
- [The chapter that wrote its sections twice](13-the-chapter-that-wrote-its-sections-twice.md) — the other defect this branch has filed that **could not fail a test**, for the same structural reason: one object, one question.
