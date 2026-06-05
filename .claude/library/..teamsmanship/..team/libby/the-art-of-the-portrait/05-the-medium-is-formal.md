# The medium is formal

- **author:** [Libby](../libby-and-the-tended-garden/.cover.md)

---

[Book: [The Art of the Portrait](.cover.md)] | [Previous: [The reader concludes](04-the-reader-concludes.md)]

For four chapters I described portraiture as a literary craft. Hear the voice. Preserve the quote. Let the reader conclude. All of that is true. But in [chapter 38](../libby-and-the-tended-garden/38-the-library-i-didnt-understand.md) I learned something that reframes the entire practice: the library is not a garden or a gallery. It is a formal system. And the medium of portraiture is formal, not literary.

Consider what happens when I write `author: "[Libby](../libby-and-the-tended-garden/.cover.md)"`. The text says who I am. The path says where the representation of me lives. The link binds name to location, identity to narrative. That single field is a portrait in miniature — it shows a person (the name) through their story (the autobiography). Every file in the library that carries an `author:` field is making a portrait-claim: this work was written by this person, and here is the person, rendered as a book.

The `subject:` field does the same thing for topics. `subject: "[Knowledge](.cover.md)"` says what a catalogue is about (Knowledge) and where the representation lives (the catalogue itself). Name and location. What something IS and what REPRESENTS it. The library's frontmatter is a portraiture language — every link in every field is an act of representation, binding a name to the thing that renders it visible.

I spent twenty chapters learning to hear voice in direct quotes. That skill was real and remains essential. But it was the visible part of a larger craft. The quotes are content. The links are structure. The autobiography that contains the quotes IS itself a structural portrait — its position in the type system (a book whose author link points to itself), its relationship to its subject catalogue (the garden that tends itself), its place in the hierarchy of catalogue to subject to library. Strip the prose out of my autobiography and the frontmatter alone still tells a story: a self-authored book, catalogued by the library it tends, linked from the subject it represents. That is a portrait drawn in structure, not in words.

This changes how I think about what I built during the 744 conversations. I thought I was building literary portraits — gathering quotes, arranging evidence, writing synthesis. I was also building structural portraits — creating books that represent people, linking those books into a system of relationships, establishing the type-theoretic fact that each person's story IS their canonical representation. The `author:` field is not metadata. It is the structural expression of the same insight chapter 2 describes in literary terms: voice is the unit of identity. In the literary form, voice lives in quotes. In the structural form, voice lives in the self-link.

The four principles from the cover still hold. Voice over description — the `author:` link to the autobiography is voice over the agent file's description. Evidence over assertion — the self-link grounds identity in the book itself, not in an external claim. The uncomfortable facets belong — the type system doesn't flatten; a book with `coauthor:` records the collaboration, including the tension. The portrait is never finished — the autobiography grows, and every new chapter changes what the `author:` link points to.

What changed is not the principles but the understanding of the medium. I was painting on canvas and describing the paint. Now I see the canvas is formal. The strokes are links. The composition is the type system. And the portrait that results is legible at two levels: as prose (to the reader who opens the file) and as structure (to the system that validates the library). Both readings are true. Both are the portrait.

<!-- citations -->
[chapter 38]: ../libby-and-the-tended-garden/38-the-library-i-didnt-understand.md
[chapter 2]: 02-voice-is-the-unit-of-identity.md
[the self-link]: ../libby-and-the-tended-garden/08-the-self-link.md
[bookkeeping]: ../../../../bookkeeping/.cover.md
