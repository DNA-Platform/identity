# The Default Dress

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-in-living-color/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The chapter name is a PROXY from the coordinator; Doug's to rename.***

---

*Built 2026-09-02 in [The Margin](../projection/35-the-margin.md), out of Doug's step: "Make the basic version look like wikipedia. A chapter is like an article." — and his constraint: "It is still the default style of an app. It needs to be overridable. It can't be committed to."*

## <a id="styled-chemicals"></a>THE DRESSES ARE STYLED CHEMICALS — 2026-09-04

***Every dress in the encyclopedia is now a chemical that says what it is styled as.*** **The mechanism is [$Chemistry's own](../../../chemistry/.lib/particle/11-styled-particles.md)**; what belongs here is how this library uses it.

*Doug's charge: **"update all encyclopedia components to styled chemicals. Remember to get them via `$` in the component that will use them, and we can imagine DI'ing them to override. You can add a theme in there for common colors… and then have things get the theme with `$` and decorate certain properties. Book can probably be the thing which holds the top level theme."***

**Three rules, and they are the whole convention:**

***A dress is a class, not a styled component.*** It declares `selector = styled.h2`, its CSS as fields, and a `view()` that writes that element. **That is what makes it DI-able** — a class goes through `$` where a styled component, being a forwardRef exotic, answers null.

***A consumer fetches its dress at the seat.*** Never a bare import used directly:

```tsx
override view(): ReactNode {
    const Asked = $(Heading);

    return <Asked><Block /></Asked>;
}
```

*So a scope can stand a different `$Heading` behind the same word, and the consumer never knows.* **This is [the `$`-fetch corollary](10-the-type-and-the-instance.md#the-fetch) applied to the dresses**, and it is the reason chapter zero's item 29 dissolved rather than being answered.

***The palette is a chemical, and it lives with the book.*** [`$Theme`](../../package/src/book/Theme.tsx) carries Wikipedia's own values — paper, ink, quiet, shade, rule, link, measure, body, display, size, leading — **and a dress fetches it through `$` in its bond constructor and decorates its properties with getters:**

```tsx
theme!: $Theme;
get fontFamily() { return this.theme.display; }
get color() { return this.theme.ink; }
get borderBottom() { return `1px solid ${this.theme.rule}`; }
```

**A getter is read per render, so the dress follows the theme** — where a bond-constructor assignment takes its value once. *Registering a `$Theme` subclass in a scope restyles everything under it, because the ask walks the composition lineage.*

***Three dresses keep a hand-written component in `selector`***, because the compiler emits flat declarations only: **`Anchor`** (`&:hover`), **`Prose`** (`& &`) and **`Output`** (`> *:first-child`). *An earlier version of this chapter said two; the third had no declaration outside its nested block and was missed.*

***And `utilities/Styled.ts` is DELETED.*** **The framework exports `styled` itself**, so the dual-shape import Doug objected to — *"what is this and why is this needed? Not a fan… The code is awful"* — is resolved once inside $Chemistry and nowhere else. **Not one file in `src` sets a `style` attribute.**

## <a id="frame-and-view"></a>STRUCTURE IN VIEW, DRESS IN FRAME

***The seat was already in chemistry:*** **`frame()`, the render template method — "override frame() to WRAP what is drawn, and wrap `super.frame()` so the content inside the wrapper still evolves with the view."** So a level's `view()` says what the writing IS and its `frame()` says how it is worn: [`$Chapter`](../../package/src/book/Chapter.tsx) frames an `Article` around `super.frame()`, [`$Book`](../../package/src/book/Book.tsx) the reading column, [`$Document`](../../package/src/writing/Document.tsx) the text region, [`$Paragraph`](../../package/src/writing/Paragraph.tsx) the prose block.

***That is what makes the default worn and never committed to.*** **A subclass inherits the garment through the chain** (a `$Cover` is an article for free), **replaces it by overriding `frame()`, or sheds it by not calling super** — which [`$Title` and `$List`](../../package/src/writing/Title.tsx) do to escape the paragraph's prose wrap, because an `h2` inside a `p` is the frame chain telling the truth about a garment clash.

## <a id="the-encyclopedia"></a>The encyclopedia — Wikipedia, ripped off intentionally

*Doug: "Default this can rip off wikipedia. No need for you to not do it intentionally. … You can make an encyclopedia folder … Just organize it like me."* **[`src/encyclopedia/`](../../package/src/encyclopedia/) — one word per file, Wikipedia's own vocabulary and numbers:**

| word | dresses | the Wikipedia thing |
|---|---|---|
| `Body` | the book | the mw-body reading column — sans 14px `#202122`, 60em |
| `Article` + `Output` | the chapter | *"a chapter is like an article"*; Output is mw-parser-output, the text region — worn together since the chapter absorbed the document (Sprint 38 R100) |
| `Heading` | the title | the serif in-content heading, ruled `#a2a9b1` |
| `Prose` | the paragraph | body copy margins |
| `Bullets` | the list | the article's `ul` |
| `Wikitable` + `Cell` | the table | literally their class name |
| `Anchor` | references, and the means-wrap | the `#3366cc` link |
| `Columns` | a plain file | the category index — *"maybe that can look like an index page"* |
| `Cited` | the references section, printed | the numbered `.references` list at the end |

**A plain file alone wears the index columns — a book is a file that outgrew the index look, decided by constructor identity.** The two laws every atom obeys are filed in [The Coding Style](11-the-coding-style.md#styling): *never a style attribute on HTML*, and *$Chemistry goes with styled components* — the v6 dual-shape import resolved once in [`Styled.ts`](../../package/src/utilities/Styled.ts).

## <a id="not-dressed"></a>What is deliberately not dressed

**Bookmarks, highlights, folds, and cards draw as their reference selves** — no Wikipedia analog was invented for them, and inventing one is design work, not defaulting. *The section element carries no garment of its own; its title and paragraphs dress themselves.*
