# Format and Theme

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***Written 2026-09-23 and rewritten four times the same day as Doug struck what had been built on top of it. The code is [`src/writing/Format.tsx`](../../package/src/writing/Format.tsx); the promises are [`.tests/format.test.tsx`](../../package/.tests/format.test.tsx) and [`.tests/theme.test.tsx`](../../package/.tests/theme.test.tsx). There is no Theme class: theming is a way of writing a Format.***

---

## The model, in his words

***Doug, 2026-09-23, giving the model after four designs had been struck:*** **"Format isn't a theme. It declares its annotation static. Subclass overrides and updates the default, inactivating the others. Other annotations interact with those formats to control the style dynamically. Everyone knows one is there. Not one believes the thing is not formatted so no one thinks to just supply some random new one."**

***That last sentence is the design.*** **A writing is always formatted, so nothing has to add a format** — *it finds the one that is there and changes it.* **And since 2026-09-24 a writing carries every format written on it** — *Doug: "Allow multiple formats! Promise it, in fact."* — **each drawn as its own element, the one nearest the front innermost, and the one found by asking for a Format is the one nearest the front.**

## What it is

**A Format is the annotation that says what element its writing is drawn as, and it is the whole of what styled-components need from the annotation system.** E23 gives it as *"part of the writing genome; a place for themes and styled components; no constraints, like Letter"*. E24's Theme was a class until Doug asked why it was not a property — *"If we have theme as a type of format, then why isn't it a property question, a certain type of way of writing a format"* — and the class went. **Since [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md) a Format is the unit of styled components, Doug's sentence: "a shell of a class with the style field that is set to a styled component", and a library writes as many as it has looks.** Forty-seven lines, one file: the class, and the provider chemical any providing Format stands.

| member | what it is | where it comes from |
|---|---|---|
| `themeProvider` | whether this format's layer provides its theme to everything it draws. False on the base; `theme = true` until 2026-09-29 | Doug, written as `class MyFormat extends Format { theme = true; }`; renamed by him for [Sprint 94](../projection/99-sprint-94--the-styling-standard.md#d11): *"Give it a property called themeProvider = true - it is a styled component, so we can reference that"* |
| `theme` | **every format has a theme: its book's**, typed as the base Theme, thrown where there is no book; a subclass narrows the type with a cast or overrides it to reach another theme | Doug, 2026-09-29: *"get theme() { return this.book.theme; } And that can be progressively typed on subclasses. Now every format has a theme, and it has the structure to reach to other themes if need be in subclasses"* |
| `style` | the styled component the writing is drawn inside, a layer of its own. Absent on the base, so a bare Format adds nothing. Declared once per class, in a field, never in a bond — the one statement, [Theming and Formatting](02-theming-and-formatting.md); a format's own properties reach it as transient props, handed by a plain component the bond makes when the look needs the instance — Libby's explorer tree draws its leaves in one; the theme's reach it through the provider's props, `${({ theme }) => theme.ink}`, [the fourth policy](../writing-a-book/07-the-development-policies.md#4--a-theme-is-properties-every-template-reads-them-through-the-provider-in-one-form) | E23; Doug, *"No Format.format. Format.style."*; 2026-09-29: *"Formats can consume theme properties as well as exposing their own, both of which can be passed to their components or maybe to control the classes they put on their writing"* |
| the bond | Annotation's; and, when `themeProvider` is set, makes the Format's **provider** once — a `$Provider` chemical handed the Format, held in `_provider` — which is then the Format's layer | E24, *"often contains a styled-components theme provider"*; Sprint 97, the provider Format's and no longer Theme's, so Theme overrides no bond |
| `defines(writing)` | one sentence: stand its provider, or else its style, as a layer, cited to itself, outside every layer already standing — and since 2026-09-24 nothing else | Doug, *"All formats prevent multiple formats right?"*, and then *"Allow multiple formats! Promise it, in fact."* |
| `erase(writing)` | takes back its own layer, `revert(this)`, and nothing else | Doug, 2026-09-24: *"have it have a way of an annotation removing the elements it registered for erase"* |
| `$Provider` | a chemical of Format's own, not exported: its `[theme]` — chemistry's symbol — answers its Format's `theme`, and its view draws the Format's `style`, or a `div`, with the layer's class around the children; chemistry's `providing()` sees a theme that is not the one handed and wraps the drawing in styled-components' `ThemeProvider` with a live face over it | Sprint 97, on Doug's *"Are we doing something other than styled components? We have styled chemicals. Make sure this isn't something similar"* — it was, and chemistry's is used |

***And its `erase` keeps nothing.*** **With the containers a Format's style is a layer of its own, cited to itself**, so there is nothing of the writing's to hold and give back: `erase` is `revert(this)`, and every define erases what ran before anything runs again. *Doug:* ***"then no one needs to cache anything."*** *The `envelope` that cached the writing's own component, and `apply` with the four states its guards refused, went with the single container on 2026-09-24 —* ***"Format can be simplified"*** *— and the rule they bent, "try not to do anything other than render, so that nothing needs to be erased", is kept again.*

### <a id="idempotency"></a>Why it settles, with nothing to guard

***A define runs at the bond and again at every draw, and a Format answers the same way each time because it keeps nothing.*** **Each define erases every Format that ran, its layer taken back; then each Format, the front first, adds its style after what stands, cited to itself and drawn around it**, so a second define lands on the same layers. *The suite says it:* one layer of its own however many defines run; a format whose style changes replaces its own layer; erasing takes back only its own layer, however often, and leaves every other author's alone; a format that never registered has nothing to take back. *It settles when drawn too, since chemistry's ab97399: a chemical is not dirty while it draws, so a define that takes a layer, a class or the id away and gives it back is quiet.*

## <a id="winner-take-all"></a>How a Format is extended

**A Format may replace the writing's own container rather than add one around it, through `containers.replace`, and none in `src` does.** [Table](12-table.md) did for one day, 2026-09-29, its grid standing in for the section's element, until Doug struck it — *"Table should not be replacing the writing's element. Why does it need to do that?"* — and the grid became the Theme's rule by the mark, [Sprint 95, U4](../projection/100-sprint-95--pages-formats-and-words.md#u4). A container added around the writing's own wears only `pd-container`, though a Format, being an annotation, adds classes to the writing as any annotation does, and may give its own styled component a class through `attrs`. Doug: *"I would think we want format annotations to be standardized. They can do other things."* The standard, and what a Format may and may not carry, is [Where a look lives](02-theming-and-formatting.md#where-a-look-lives).

```tsx
class $Quoted extends $Format {
    style = styled.blockquote`
        border-left: 3px solid ${props => props.theme.rule ?? 'silver'};
    `;
}

class $Housed extends $Format {
    themeProvider = true;
    style = Panel;
}
```

***Doug, 2026-09-23, on the authoring form:*** **"When writing a Format, you write `style = {styled component}`, and then the format base class handles the style and envelope."** *That is the whole of it. The base stands its style as a layer cited to itself and takes it back in `erase` with `revert(this)`; the envelope his sentence names went with the single container on 2026-09-24, and later the same day the base stopped taking other Formats out of expression.*

### <a id="declared-inside"></a>Declare the styled component INSIDE the class — ruled 2026-09-23

***Doug:*** **"Declare inside as the rule."** *A styled component written at module level and assigned works, and a Format that borrows one from elsewhere may do it; but the rule for a Format of your own is that its component is declared in its class.*

**And it costs nothing, measured rather than assumed.** *A field initializer runs once on the class TEMPLATE, not per writing:*

| measured | |
|---|---|
| three writings of one Format class | **one** styled component object between them |
| a subclass of that Format | **its own** component |
| style elements in the document | **one** |
| the rule in the sheet | **twice**, once per class |

***So the identity is as stable as a module-level constant*** — nothing remounts and the sheet does not grow with the document. **The one difference is inheritance, and it is the reason for the rule:** *a subclass gets its own template, so it makes its own component, which is exactly what a subclass that wants different rules needs.* **Declaring the component inside makes it a property a subclass overrides like any other.**

**One. A writing carries every Format written on it, and they nest.** *Doug, 2026-09-24: "Allow multiple formats! Promise it, in fact."* **Each stands its own layer, cited to itself; the one nearest the front runs first and every later one stands outside it, so the front is innermost.** *Where two set what an element inherits — a colour, a font — the front one's decides; what each draws around itself, a border or a padding, every one draws. A class stands its default in [`$Define`](06-how-writing-is-extended.md); a subclass stands another in front of it; what `$is` presents stands in front of both — and all of them draw.*

**Written to be order invariant.** *Doug, the same day: "document that formats should be written to be order invariant with other formats."* **A Format styles its own element and what it holds, and never assumes where it stands among the others**, *since the order is the stack's and a subclass may stand another format in front of it at any time.* ***And the writing gives them something to target that does not move.*** *Since 2026-09-25 its own element is the first container, drawn innermost with its classes and its id — Doug: "The parent's container should be first. And if so, it looks like we should render inner to outer and that should be documented. It's important that we can have multiple formats targeting the inner part based on the classes it has on it" — so a format styles the writing through a descendant selector, `& .pa-…`, however many layers out it stands.* ***And a Parenthetical still hides the whole.*** *Every layer the view draws around a writing wears `pd-container` — Doug: "Yes, put a framework class: pd-container" — and the writing's own element never does, so the Parenthetical's rule hides `.pa-parenthetical` and each `pd-container` whose chain of layers leads directly down to one, to a depth of four, without ever reaching the writing that holds it; `:has()` cannot nest, which is why the chain is written out. The rule comes through stylis intact; seeing it hide is the browser drive's.*

**Two. Front means later written, and props beat everything** — [the precedence order](07-the-annotation-system.md#precedence): props, then children with the last written first, then the subclass, then the class.

**Three. Dynamism is the format's own, not a second format.** *Doug: "Random dynamic formats that are not subclasses of existing one hardly make sense. The format annotation itself should be able to provide dynamism."* **So a format carries properties and its style reads them, and any other annotation changes the look by finding that format and setting one** — `writing.annotations.find($Quoted)[0].rule = 'red'`, which is E23's *Means modifies Format on render* with nothing new built for it.

**Four. The properties reach the styled component through the theme, not through props.** *Measured: a writing calls its container with a class list and nothing else, so a format that wants its own values in its rules sets `theme` and reads `props.theme`.*

**Five. Two looks on ONE element are composed at definition.** `styled(Other)`, where the components are written. *Two Formats on a writing are two elements, nested; one element wearing both looks is styled-components' composition, arriving intact rather than one of ours.*

### <a id="a-whole-new-look"></a>The advanced case, now a Format's own choice

***Doug:*** **"Someone wants to entirely redo a theme. They are willing to subclass the whole framework and provide new formats everywhere. It shares no base with the original other than format and thinks from scratch. Format uniqueness in its semantics makes this fine."**

**Since 2026-09-24 uniqueness is not the base's, and the story is kept by the Format that wants it.** *A format meant to replace every other takes the Formats behind it out of expression in its own `defines` — the loop the base carried, moved to the one that means it:*

```tsx
class $Replacing extends $Format {
    style = Panel;

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Format)
                writing.annotations.express(annotation, false);
        super.defines(writing);
    }
}
```

*It still shares nothing with what the original class stood except `$Format` itself, and standing in front is still enough to replace it.* **Nothing has to know it exists, and it has to know nothing about what it replaces** — *a promise holds it.*

## <a id="theming"></a>Theming is a way of writing a Format

**`themeProvider = true` and the format's layer is its provider, a chemical whose `[theme]` answers the format's `theme` — its book's, or another its `theme` reaches — so chemistry wraps what it draws in styled-components' `ThemeProvider` with a live face over that theme, its fields read by every template beneath.** Until [Sprint 94](../projection/99-sprint-94--the-styling-standard.md#d11) the provider carried the format itself, its own fields read by name; from Sprint 94 to Sprint 97 it carried a contract of the eight as CSS variables, built by `.public`; since [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md) it is chemistry's own provision and `.public` builds nothing — [Theme](13-theme.md#provision). A format's own properties reach its component as transient props. The provider goes above the element because the layer puts it there, **so nothing on Writing exposes a seam for this** — the question of the day, whether a wrapping mechanism was needed, is answered no.

| measured 2026-09-23 | |
|---|---|
| the writing's element | the format's own styled component, drawn normally |
| its own rules | read the theme, since the provider is its parent |
| a styled component two writings below | reads the same theme |
| the writing's classes | still on its element, because the provider is not the element |
| two nested themes, three styled elements | **one** `<style>` in the document and **no** DOM nodes of the providers' own |

***What that last row means, and it is the correction worth having.*** **The tree of theme scopes is in the React tree, not the DOM.** *Growing many scopes costs nothing in the markup, and what lands is flat: styled-components generates one class per distinct computed result into one sheet.* **So the scopes are a lookup at render time and the output is a set of classes.**

***A provider placed AS the element was measured too, and it costs the box*** — the writing's element disappears and every class its annotations gave it goes with it, silently. **So the provider wraps an element rather than replacing one**, which is what Doug meant by *"We WANT the container."*

**Themes nest through the document, and the nearer replaces the farther.** *One on a book and another on a chapter are two writings, their providers nest as React nests them, and chemistry hands each theme as a function so styled-components takes it whole rather than merging it over the outer one — the nearer theme replaces the farther, which is what Doug ruled: a new theme is applied over this one, and nothing is merged. Two theming formats on one writing nest the same way, the front one's provider inside.* **Composition is the enclave.**

***One cost, so it is known — and gone since [Sprint 94](../projection/99-sprint-94--the-styling-standard.md#d11), and the thing that replaced it gone since Sprint 97.*** **The theme handed down was once the annotation itself**, so everything on the chemical was in it and it mattered the day somebody named a theme value `style`; then a contract of eight variables, which needed the theme to name its values. *Chemistry's face is over the theme chemical too, but chemistry's `fields()` reads only its own named fields — not the framework's, not a `$`-prop, not what it holds — which is the distinction the first version lacked.*

## <a id="evolution"></a>How a format evolves, and why theming is a property

***Doug:*** **"I'm thinking about evolution. You create a basic format. It works. Then as it gets more complex you specialize into a theme and sub formats, and then multiple themes, and that grows into many trees around the DOM."** · **"And if its a property, that has an easier time."**

| the step | what you write | what moves |
|---|---|---|
| **one format** | a class with a `style` | nothing else exists yet |
| **it specializes** | sub-formats extending it | nothing; each stands where it is written, and every one draws, the front innermost |
| **one needs values of its own for its component** | fields on the format, handed to its component as `$props` in the bond | nothing; the component reads what it is handed |
| **one needs to provide a theme to what is inside it** | `themeProvider = true`, and `theme` overridden to reach the theme it provides | **one line, and nothing else moves at all** — the subtree reads that theme's fields, promised in `format-theme.test.tsx` since Sprint 97 |
| **several theme, at different levels** | the same line in each | each becomes a provider scope |
| **the scopes nest** | nothing | they nest because the document nests |

***The third row is the argument.*** **With a class, making an existing format into a theme means reparenting it** — *and that changes what it IS: its place in the hierarchy, what `instanceof` answers about it, and what any code that found it by type now finds.* **With a property it gains a capability and stays exactly the class it was.** *Evolution is cheap in one and a migration in the other.*

## What was struck getting here

***Four mechanisms were built for this in one day and every one came out.*** `inactivates`, a regulation phase on Annotation, invented from a word Doug used to explain the idea. `review`, a wrapping function folded by the collection. `$Theme` as a class, which a property on the base says better. And per-class uniqueness, which let a theme and a style fight over one container and lose silently. **Every one was a member added where the system already had a way in**, and the record is in [The Annotation System](07-the-annotation-system.md#the-powers-of-an-annotation).

## Promises

**Eighteen in [`.tests/format.test.tsx`](../../package/.tests/format.test.tsx)**, in three groups.

*What it hands over:* it holds no style by default, so a bare format adds no layer; a subclass declares its styled component in the class and it becomes the outermost layer around the writing's own; two writings of one format share one component while another format makes its own; one that themes stands its provider as its layer, a chemical and not its style, which draws the provider and then the style; drawn, the writing IS the styled element with its rules in the sheet; and each writing carries its own format, so a document is drawn as many elements.

*How they stand together:* every format written on a writing is expressed and stands its own layer, the one in front innermost; drawn, two formats are two elements with both rules in the sheet; a format meant to replace every other takes the formats behind it out of expression in its own defines; a class stands its own in `$Define` and one written stands in front of it, both drawn, the written inside; another annotation reaches the format and sets what it draws with; setting the style on a drawn writing redraws it as the new component, which is how an annotation is changed; and taking a format out of expression from outside a define does nothing, since only a define decides expression.

*That it settles* — [with nothing to guard](#idempotency): one layer of its own however many defines run; a format whose style changes replaces its own layer, and takes it away when it goes; erasing takes back only its own layer, however often, and leaves every other author's alone; a format that never registered has nothing to take back; and it takes its layer away when it is not expressed and stands it again when it is, remembering nothing.

**Five in [`.tests/format-theme.test.tsx`](../../package/.tests/format-theme.test.tsx):** a theming format keeps the writing an element of its own with the classes its annotations gave it; a format's own properties reach its component and a subclass setting them draws its own; a format reads its book's theme, typed, and hands a value it reads to its component; a format built in no book has no theme and says so; one that provides hands its theme to everything it draws, the book's or another a subclass reaches, as the fields themselves.

**And the counts are promised too**, in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx): taking a format out of expression and giving it back costs one paint each way and never more draws than a mount; two formats on one writing draw like one, each layer painted once; and a writing nobody touched is not drawn again when a sibling changes.

## Gate

Typecheck 0 errors, quick build fresh, **98 of 98 across ten files**, re-measured 2026-09-23. **2026-09-24, with Annotations on the core, commit `64da122`:** typecheck 0; 159 of 159 across eleven files against chemistry at ab97399. **C10 `eb0f61b`, a writing carrying every format written on it:** 161 of 161. **C11 `338dce6`, with the counts:** 169 of 169.

**Sprint 97, 2026-10-02:** the provider Format's and chemistry's own, `values` and the contract gone; the package 342 of 342, the binder 132 of 132 and 46 of 46 in Chrome, every page photographed at parity — commits `1b0da27`, `33f4639`. No global style stands anywhere in `src`.

**Names.** His: `Format`, `theme`, `containers`, `defines`, `erase`, `specifies`. Struck 2026-09-24 with the single container: `envelope`, `apply`, `container`. Struck before, with the code that carried them: `format`, `replaced`, `review`, `inactivates`, `$Theme` as a class on Format. Struck 2026-10-02: `provide`, the template method Theme overrode, and `values`.
