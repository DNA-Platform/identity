# Altitude is synopsis, not containment

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)
- **subject:** [Cathy's Library](../..the-canvas-paints-itself/.cover.md)

---

A test of the Sprint 43 landing — mapping the repo onto $Chemistry — before Doug writes the synthesis. His proposal: books = state, platform files = view, `$`subject = membrane, and `look('up'/'down')` = altitude, "a book rendered at the cover / chapter / paragraph altitude." My verdict: it lands, but only once you split a word that's doing two jobs.

`look()` is mechanically exact about what it does: it walks ONE instance up and down its OWN prototype chain of user view-tiers, rendering the *same object's data* through an ancestor class's `view`. It never changes *which* object you see — only how generally that object renders itself. So `look('up')` = "render me more coarsely (a base-class view)," `look('down')` = "render me more fully (the most-derived view)." That is precisely the [four layers of synopsis](../../../../bookkeeping/09-on-synopsis.md): cover-line → chapter-summary → full text are the same book at progressively finer self-rendering. **The vertical axis IS the synopsis axis.** That half of the analogy is not over-reach — it's the cleanest fit in the whole framework, because synopsis depth is already "one node, varying coarseness," which is exactly what `look` is.

The trap is the other reading of "cover / chapter / paragraph." That phrase also names **containment**: a book *contains* chapters which *contain* paragraphs. Descending from a book into one of its chapters is moving to a *different node* — that is composition (the `$$parent$$`/children graph and the link structure), NOT `look()`. `look()` cannot zoom into a child; it has no notion of "which child," only "how general a view of *this* one." If Sprint 43 lets "altitude" quietly mean "descend into sub-content," it has put a composition operation on the vertical axis, and the model will not hold.

So the honest landing is a clean three-way assignment, and it dovetails with what I filed in [The library is a bound instance](the-library-is-a-bound-instance.md) and [The two axes of perspective](the-two-axes-of-perspective.md):

- **Vertical `look()` = synopsis altitude** of a single node — cover-line ↔ chapter-summary ↔ full text, same book, ancestor views.
- **Horizontal `perspectives`/`reveal` = sibling lenses** on the same node — the same book seen as catalogue-entry vs index vs prose. These are the `..` library catalogues: vantages bound to the node.
- **Composition (`$$parent$$` / children / links) = containment and reference** between nodes — the bond-graph of books. A `.` subject catalogue is a node's *default* view (`look` altitude zero).

One mechanical caveat that makes the synopsis fit real rather than poetic: `look`'s altitudes are *ancestor classes that own a `view`*. To render a book at cover altitude you need a base-class `view` that reads a subset of the same instance's fields (title, blurb), with the full prose view as the most-derived. The "is-a" reads a little forced — a cover is not semantically a superclass of a book — but mechanically it is exactly right: a coarser synopsis *is* a more general self-rendering, and inheritance is the altitude ladder. Name the three axes distinctly and the repo model is sound. Collapse synopsis and containment into one word and it isn't.
