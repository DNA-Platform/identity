# The default a class switched off and rebuilt

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `rebuilt-default` *(proxy name, flagged for Doug)* · a div nobody wrote · `<div> cannot be a descendant of <p>` · a code comment asking for a feature the framework already had · every consumer written correctly and the base written wrong

---

## Symptoms

- ***`Warning: validateDOMNesting: <div> cannot be a descendant of <p>`*** on the LaTeX paper, *and no answer to which class wrote the div — because no class had.*
- **Every formatted piece of writing carried an extra `<div>`** that appears in no `view()`, no `print()` and no demo.
- ***A comment in the framework asking for a feature the framework already shipped:*** `// IN PROGRESS: one component per class, or React remounts what is worn every draw. Delete if chemistry memoises $(class).` **Chemistry memoises it, in `dressed`.**
- ***Every gate green through all of it:*** `tsc` 0, suite 106 of 107, build clean, four pages drawing.
- **And the tell that was visible for weeks:** *all NINE formats in the two demos were written with **no view**. Only the base class had one.*

## The mechanism — ***a class overrode a default to nothing, then hand-built the default***

**Chemistry's default is one line.** [`$Chemical.view()`](../../../chemistry/package/src/abstraction/chemical.ts) returns `this[children]`, and `styling()` then stands those children in the element the class's `selector` names — *or, where what it was handed already IS that element, restyles it in place and adds nothing to the tree.* **A styled chemical with no view is a complete, promised feature:**

```ts
// chemistry's own promise, tests/abstraction/styled.test.tsx
it('a dress needs no view — it is handed the element and holds what it is given', () => {
    const { container } = render(<Dress>worn</Dress>);   // class $Dress { selector = styled.figure; padding = '7px' }
    expect(drawn(container).tagName).toBe('FIGURE');
    expect(drawn(container).textContent).toBe('worn');
});
```

***`$Format` turned that off and then rebuilt it, four members deep:***

| what it wrote | what chemistry already did |
|---|---|
| `override view() { return null; }` | **the default that returns the children** |
| `@look('worn') $view() { return <div>{this.$content}</div>; }` | ***the element `selector = styled.div` was going to write anyway*** |
| `$content: ReactNode` | *the children a chemical already carries* |
| `format(drawn)` → `<Worn … look="worn" content={drawn}/>` | *`$Chemical.frame()`'s facade wearing, `of` and children and all* |
| `private sheets = new WeakMap<…>` | ***`dressed`, chemistry's per-chemical component cache*** |

> ***THE ONE-LINE STATEMENT: a class overrode a framework default to nothing, and then rebuilt the same behaviour beside it — so the framework's version was dead and the hand-built one was unpromised, and the only visible difference was one element per formatted writing.***

## Why nothing caught it

***Because the hand-built version WORKED.*** **It drew a styled element around the content, which is what the real one draws** — the difference is only that the real one can also draw NOTHING, and that is the case nobody had a promise for. *The extra div is legal HTML in every place except inside a `<p>`, and only the LaTeX paper put a format there.*

**And `$Theme` made the duplication invisible by agreeing with itself:** *it declared `override selector = styled.main` AND a worn view returning `<main>`, so `styling()` matched the tags and restyled in place. **The hand-built element and the framework element were the same element**, and deleting the view changed nothing at all.*

## What decided it — ***Doug, from memory, with no file open***

> ***"I always thought it would be a styled chemical without a view and when they don't have one they behaved like styled components. As far as I know it was like that. Anything else is a bug."***

**That is the whole diagnosis.** *He designed the behaviour; the code that forgot it was written by the person who had implemented the behaviour.* **The recovery was to go and READ what a styled chemical with no view does — which is a test in the framework's own suite, with a name that says it.**

## The fix

```ts
// A DRESS NEEDS NO VIEW — chemistry promises it: handed the element, it holds what it is
// given. This override exists only to UN-INHERIT $Writing.view(), which draws a block, and a
// format has no block to draw.
override view(): ReactNode {
    return this[children];
}

override format(drawn: ReactNode): ReactNode {
    const Worn = reflection.sheet(this.constructor as new() => $Format);
    return <Worn of={this} {...this.handed()}>{drawn}</Worn>;
}
```

***`children` is on chemistry's public surface*** and its own comment says why it is a symbol — **"so that a view reaches for its BLOCK and never for the raw children it happens to have been handed"** — *which is exactly the line a format needs to cross and no other writing does.* **Gate after: `tsc` src · `.wiki` · `.latex` 0 · 0 · 0, build clean, suite 106 green with the same one held red.**

## Prevention

- ***When a base class overrides an inherited member to `null`, `undefined` or nothing, READ what it just switched off.*** **That override is the whole defect** — everything after it is compensation.
- **A code comment that asks for a feature is a search, not a note.** *`// Delete if chemistry memoises $(class)` sat in the file while `dressed` did exactly that.*
- ***When the consumers are written one way and the base another, the consumers are the specification.*** *Nine formats had no view. One did.*
- **The one-line question that finds this class of defect:** *does the framework already do this, and did I turn it off?*

---

*Found 2026-09-08 during the horizontal implementation of Sprint 53, on Doug's remark that "Format's shouldn't be drawn." Written up in [Sprint 53 — The Second Column](../projection/59-sprint-53--the-second-column.md#dress). **The clothing vocabulary in this chapter — `dress`, `worn`, `wearing` — is mine and not chemical; `facade` is Doug's and is the GoF pattern. Both are flagged for renaming.***
