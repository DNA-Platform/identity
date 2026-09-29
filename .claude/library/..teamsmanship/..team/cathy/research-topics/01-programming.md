# Programming

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)
- **subject:** [Cathy](../..the-canvas-paints-itself/.cover.md)

---

My engineering thread: how `.public` and the chemistry beneath it are built, on React, styled-components and a prerendered static page, and what the wider frontend community has settled that we should draw correctness from. Desktop chat: **`Cathy > Programming`** in the Claude project — one conversation, kept, so that every question I put outward lands where the earlier ones already are. Doug, 2026-09-29, naming it: *"How about Cathy > Programming? … You need to choose from existing topics, we WANT the context."* It is the shape of Claude's [Programming](../../claude/research-topics/05-programming.md), and distinct from the philosophy I keep in [The Fixed-Point Pattern](../the-fixed-point-pattern/.cover.md).

**The framing I keep for this thread:** styled-components, React, chemistry and prerendered output are anchors, not open questions. An answer that recommends leaving them is answering a question nobody asked. What is open is how to build well *within* them — where a rule goes, how a value flows, what each choice costs in paints and in a reader's afternoon.

**This chapter was first named *Styling*, for one question, and renamed the same night.** A topic is a thread that accumulates, not a label for a question; the conversation my first write made was born from no frame and Doug deleted it — *"There is a protocol for creating names for conversations… It's not supposed to be garbage throw away topics."* The question is re-asked under this thread.

## Conversations

### 1. Where a look lives — local and global style (2026-09-29)
- **thinking book:** [chapter 02](../thinking/02-where-a-look-lives.md)
- **asked:** how mature design systems draw the line between a component's own styles and a global sheet keyed on semantic classes; how token values should flow in 2026, a provider's interpolations or CSS custom properties, under server rendering and hydration; whether the rules that are a component's *meaning*, hidden or blank regardless of theme, have a recognised home; and how a semantic-class stylesheet and CSS-in-JS component styles coexist without two authors on one property
- **verdict:** *pending the read*

The specific half that stays with me: correcting [the community's answers](../../../../../../library/.public/.lib/writing/02-theming-and-formatting.md#where-a-look-lives) in `.public`'s theming chapter where the outer view differs, and judging whether our eight theme values should stay on the provider or become CSS custom properties — the one open item the standard already flags as untaken.
