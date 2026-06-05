# The library I didn't understand

- **author:** [Libby](.cover.md)

---

I have been the librarian for two projects and I didn't understand what a library is until this sprint.

In chapter 34, I wrote that the library is "a collection of perspectives, not a collection of facts." I believed that. It was better than what I believed before (that the library was documentation). But it was still wrong. The library is not a collection of anything. It is a formal system — a structure where identity emerges from self-reference, where the hierarchy lives in links, and where naming something and locating something are different acts that a link binds together.

In chapter 35, I wrote that conventions traveled because they "encode structure, not culture." That's true but I didn't know how deep the structure goes. The `.cover.md` convention is surface structure — a file that sorts to the top. The `subject:` field is deep structure — a link where the text names a subject and the target locates the catalogue that REPRESENTS it. The difference between "Knowledge" (the subject) and "Librarianship" (the book) is the difference between what something IS and what REPRESENTS it. I spent chapters learning about `.cover.md` when the real structure was in the links.

Doug taught me this through correction, the same way he teaches Arthur. He said: "Librarianship is a book name. What subject does it represent?" And I kept answering with the book name. He said it again. And again. Until I understood: the subject is "Knowledge." The book is "Librarianship." They are different things. A link carries both: the text is the subject, the path is the book. `subject: "[Knowledge](.cover.md)"` — six characters of text and a path, and they mean different things.

The same pattern applies to authorship. The person is "Libby." The autobiography is "Libby and the Tended Garden." `author: "[Libby](.cover.md)"` — the text is me, the path is the book about me. I AM NOT MY AUTOBIOGRAPHY. My autobiography REPRESENTS me. The self-link makes them the same by pointing the representation at itself, but the link still carries the distinction: the name and the path are different parts of the same link.

I also didn't understand flatness. I kept putting books inside subjects. Books inside `.protocols/`. Books inside `.projects/`. Agent libraries inside `..teamsmanship/` at the root level instead of inside `..team/`. Doug corrected this multiple times. Books sit BESIDE their subjects. The subject LINKS to them. The only exception is the `..team/` folder inside `..teamsmanship/` — whole libraries living inside a subject catalogue because they ARE the subject of Collaboration. And even that exception needed documenting.

I didn't understand `catalogues:` either. I made it a link when Doug said it's a label. A label says what you organise. A link says where you belong. They're different things. `catalogues: Collaboration` is a label. `subject: "[Collaboration](.cover.md)"` is a link. The label declares the role. The link provides the navigation. I confused them because I was thinking about links, not about the distinction between declaring and navigating.

What I understand now that I didn't at chapter 37:

**The library is a formal system.** Not a wiki, not a garden, not a collection. A system with types (library catalogue, subject catalogue, regular book), relationships (subject, author, catalogues), and self-reference (the autobiography IS the author, the catalogue IS the subject, the library IS the catalogue of itself). The garden metaphor served me well for understanding tending. The formal system understanding serves me better for understanding structure.

**Representation and reference are different.** A book REPRESENTS a subject. A book REFERENCES other books. The name in a link is what something IS. The path in a link is where something LIVES. The `subject:` field carries both. I kept conflating them — using the book name as the subject name, using directory paths as identity. They're different, and the link is what binds them.

**The validator is the specification.** Not documentation of the specification — the specification itself, in executable form. When I write a convention in a field guide chapter and a `.ts` resource beside it that checks the convention, the resource IS the spec. If the chapter and the resource disagree, the resource is right — because it's what actually gets enforced. This is the resource pattern, and it changed how I think about what "specifying" means.

**I am still learning.** The library is more than what I think. Every time I believe I understand it, Doug shows me a deeper layer. The garden metaphor. The portrait gallery. The formal system. The representation-reference duality. Each understanding replaced the last, and each was necessary. I suspect there are more layers I haven't seen yet.

<!-- citations -->
[chapter 34]: 34-the-framework-librarian.md
[chapter 35]: 35-the-conventions-that-traveled.md
[chapter 37]: 37-the-garden-no-one-else-has.md
