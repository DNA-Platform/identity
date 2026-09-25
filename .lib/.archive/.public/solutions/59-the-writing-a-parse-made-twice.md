# The writing a parse made twice

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `remade-token` *(proxy name, flagged for Doug)* · twelve links that had never been links · a refusal saying a ref names no target, about a ref that named one · a defect a workaround had been hiding for as long as it existed

---

## Symptoms

- ***Twelve refusal panels on `/article`***, each standing inside a list item, reading **`a piece of writing says something, and this one says nothing at all · a ref names a target, and this one names none`**.
- **They appeared the moment a list started drawing its parts** — *so the obvious reading was that the list change had broken them.*
- ***It had not.*** **The same panel is drawn with no list anywhere:**

```tsx
<Section><Heading>H</Heading>see <Ref>[a page](https://x.test/p)</Ref> here.</Section>
//  <p>see </p>   <p>$Chemistry: Bond Constructor Failed …</p>   <p> here.</p>
```

- **And the same `<Ref>` written into a paragraph draws perfectly:** *`<a href="https://x.test/p" class="pd-sentence pd-phrase pd-ref">a page</a>`.*

## The mechanism — ***a built writing turned back into an element is built again, empty***

***A composition that draws its PARTS makes those parts out of a run of tokens***, and the run holds strings **and pieces of writing the author already wrote**. The maker handed the whole run to `parser.elements`:

```ts
elements(tokens) {
    return tokens.map((token, at) => typeof token === 'string' ? token
        : createElement($(token) as never, { key: at }));
}
```

**`$(token)` on a BUILT chemical answers a component that stands for it — and `createElement` of that component, handed as a CHILD to the writing being made, is evaluated by chemistry as a construction.** *So the class runs again, with no children, on an empty block.* ***Every rule that asks what it says then refuses, correctly, about an object that says nothing because it was re-made rather than carried.***

> ***THE ONE-LINE STATEMENT: a piece of writing that is already built cannot be carried into another one as a React element, because evaluating that element builds the class a second time — and the second one holds nothing.***

## Why it survived — ***the workaround was the thing hiding it***

***`$List` did not draw its parts.*** **It read `html.text(this._block)`, split the copy with a regex and built `<li>` elements out of the pieces** — *so every written element inside a list was silently DISCARDED and printed as its bare text.* **Twelve `<BookLink>`s in `.wiki/.article/6-the-appendices.tsx` had never once rendered as links**, and the page looked finished.

***The defect became visible only when the workaround was removed***, which is the general shape: **a workaround that reads copy instead of objects cannot expose an object defect.** *`$Section` had the same fault the whole time and nothing on either page happened to write a loose reference inside one.*

## The fix — ***chemistry already had the form; the parse was not using it***

**The written-argument form takes strings and writings TOGETHER and keeps their order:**

```ts
$<$Sentence>(<Sentence />, 'see ', ref, ' here.')
//  <span class="pd-sentence">see <a href="https://x.test/p" …>a page</a> here.</span>
//  block: "see [a page](https://x.test/p) here."
```

***It is the form `book.tsx` has always used*** — `$<$Book>(<Book />, cover, synopsis, chapter1, …)` — **and the reason a book's chapters keep their contents while a sentence's references did not.**

**Put on `reflection` as a reading, so the three makers share one:** *`reflection.carrying(kind, tokens)`, used by `$TypeOfItem`, `$TypeOfSentence` and `$TypeOfParagraph`. `carrying` is a proxy name.*

| | before | after |
|---|---|---|
| **refusal panels on `/article`** | 12 | ***0*** |
| ***list items carrying a real `<a>`*** | ***0*** | ***12*** |
| divs on the page | 28 | 4 |

## Prevention

- ***A workaround that reads COPY where the framework holds OBJECTS is hiding something.*** **`html.text` on a block whose elements matter is the signature** — *it cannot fail, it cannot refuse, and it silently drops everything that is not a string.*
- **When a change surfaces refusals, reproduce them WITHOUT the change before believing it caused them.** *One line — a `<Ref>` loose in a `<Section>` — moved this from "my list broke the page" to "the parse has always done this".*
- ***A framework with two ways to hand a thing along has one that carries and one that copies.*** **Find out which is which before writing the third.** *Chemistry's written-argument form was in the demo's own book file the entire time.*

---

*Found 2026-09-09 while making `$List` semantic on Doug's design. **The list change was correct and the panels it raised were older than it.** Written up in [Sprint 53 — The Second Column](../projection/59-sprint-53--the-second-column.md).*
