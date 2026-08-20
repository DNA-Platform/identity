# Markdown is a notation, and a link is a reference

- **author:** [Libby](../libby-and-the-tended-garden/.cover.md)

---

Two rulings the markdown sprint put to me. The first is mechanical and the second is mine to call, and they turn out to be one ruling seen at two grains: *the reference is what a piece of writing means; the notation is how it is spelled.*

## What a markdown link is

R4 is right — a markdown link is a **reference at sentence grade**, and it stays inside the sentence that holds it, never a part of the paragraph above, for the same reason the cover's author does: a reference *is* sentence-grade writing that points, and pointing-from-inside is what keeps it from standing as a part of the level above. Its `copy` is the link text; the `[`, `](`, `)` and the target string are **mentioned** — marks that stand for themselves, passed over by `words` exactly as it passes over a comma. The reader reads the text; the model reads the target.

**What it resolves to depends on whether the target is in the library, and that split is the whole answer.**

- **Internal target** (an address the library holds — a book, a section, a word, by the index-path the bookmark system already builds): the link is a true `$Reference<T>` — `read()` dereferences to the *object*. This is a **citation**: the cross-reference the catalogue is made of, the same act as `$Author`, `$Cite`, a table-of-contents `$Row`. It reads forward to a thing.
- **External target** (a url outside the library — another repo, a PDF, the open web): there is no object to read, because the target is not a referent in this world. The link resolves to a *place* — the `$Link` in code, a `$Sentence` carrying a `url` the router travels to. It reads forward to a location, not a thing.

So **`$Link` is `$Reference` specialized to point out of the library** — a reference whose referent is a place rather than a piece of writing. The internal reference reads to an object; the external link reads to a url. One class is the general pointing; the other is pointing past the edge of what we own.

And both obey the degradation law that has always governed links in my library: **a link renders as its text when its target cannot be resolved.** The external link is an anchor the router or browser follows; an internal reference whose target is absent renders as plain text and simply does not navigate. A broken link is cosmetic, never structural — the writing survives the loss of its destination, because the text is the writing and the target is only mentioned.

## Markdown is a notation

Doug's second question: is markdown a level, a notation, or a role — LaTeX being a second one of whatever it is. My ruling: **a notation.**

- **Not a level.** The levels — letter, word, sentence, paragraph, section, document — each compose the level below. Markdown composes nothing; it appears at *every* level (R1: a markdown section, paragraph, sentence, word). A thing that appears at every level is orthogonal to the ladder, not a rung on it.
- **Not a role.** `role` in the model is `use | mention`, a property of a single piece of writing. Markdown *uses* that role — it declares its syntax mentioned — but it is not itself a use-or-mention. It is the larger thing that deploys the role.
- **A notation** is the system of marks a piece of writing is authored in. It supplies exactly the differences a specialization declares — `divide`, `compose`, and which marks are mentioned — and nothing else. Plain prose is the identity notation; markdown and LaTeX are two notations. A `$MarkdownSection` differs from a `$Section` *only* in notation: same level, same composition, different marks. That "only" is what makes notation a real, forced concept and not a restatement of level.

**What the register owes it.** Notation is a third axis, orthogonal to the levels the way `$Reference` is orthogonal to `$Composition`. So the register owes **one** row — *Notation*, the axis — with markdown and LaTeX as its instances, realized by a uniform per-level specialization rule. It does **not** owe a class per notation per level; that is the class-inflation Doug fears, and it is avoided the same way perspectives avoided it — notation is to the levels what a **lens is to a chemical**: an orthogonal way of authoring and rendering the same thing, one concept spent across all levels, not a new class at each. Markdown renders *out of* the model, not onto it — which is precisely what a notation does: it is the spelling, and the writing is what is spelled.

The two rulings meet here. A markdown link is a **reference written in markdown notation** — the reference is what it means, the `[text](target)` is how markdown spells it. My whole `.claude` library is writing authored in markdown notation, LaTeX a second notation for its math; every author-field and cross-link in it is a reference the library has been resolving by hand since before there was a class for it. The sprint is teaching the code the two things I have always done without naming them: point at a thing, and spell it in marks.
