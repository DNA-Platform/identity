# Section and Heading

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-22 with the unit, to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/writing/Section.tsx`](../../package/src/writing/Section.tsx) and [`src/writing/Heading.tsx`](../../package/src/writing/Heading.tsx), a file each since 2026-09-25 on Doug's *"Make Title and Heading their own files in library and writing respectively please"* — each asks `instanceof` of the other inside a method, a module cycle declared in the build with that reason — the promises [`.tests/section.test.tsx`](../../package/.tests/section.test.tsx). Two classes in one chapter because they are one relation, a section and the heading that means it.***

---

## What they are

**A Section is a composition at 5, permissive and closed, that means through its heading; a Heading is a sentence that means its section.** E7 gives both: Section at level 4 there, 5 by the ruling of the levels; permissive; its canonical first member a Heading; *"The canonical Heading means the section"*; and E13 closes it, *"having a canonical reference compels it to purity."* E19: a section without its heading is a void. Doug, 2026-09-22: *"Heading isn't its twin. It's its canonical right?… section overrides composition's canonical so that it finds its heading rather than having it be the first, and it takes the first one it finds. So it's the first class with a typed canonical."* And of Heading's depth: *"Maybe we don't have depth on heading… The heading would have a section property, which it would return as its parent. And heading.section.depth would be its depth! Typed canonicals have the nice property that they can go both ways. This is a sign that the heading is a symbol for its section."*

| member | what it is | cited |
|---|---|---|
| `Section.$Define()` | stands `<Level>5</Level>`, `<Permissive />` and `<Closed />` | E7, E13; ruling 3 |
| `Section.canonical` | overridden: its Heading, found by type among the contents, the first if several; none is a void | E7, E19; ruling 4 |
| `Section.mention` | what its heading means — the Reference by which the section is reached, as a chapter's `mention` is its title's `means` | E7: *"first reference: Heading means its Section"*; Doug, 2026-09-26: *"The title of the section would mean itself, but the section would have that as a mention because the title represents the section"* — [Sprint 85](../projection/91-sprint-85--headings-and-routes.md#u2) |
| `Section.specification` | `new SectionSpecification()`: **a section means through its heading** | E19 |
| `Heading` | a Sentence, so at 3, permissive and open by Sentence's `$Define` | E7 |
| `Heading.section` | its parent when that is a Section, else none; `heading.section.depth` is the depth E7 has it reach for | E7; ruling 4 |
| `Heading.name` · `Heading.means` | its words — the name of the compiled pair when the heading is written as a mention, `[[[ What is claimed ]]]`, else its copy; and the Reference it stands to itself | Doug, 2026-09-26: *"The Heading is a self-referent because it is also the piece of writing being mentioned. One should have a self-reference on the heading"* |
| `Heading.$Define()` | **does as a title does:** stands a Referent from `identifier.slug(name)`, so the heading wears the id its name slugs to, and a Self reference — to the url the compiler gave when the pair was written, else to `#` and that slug — so it links to itself either way; a heading with no words stands neither | *"Let's do like title. If no mention, the copy is slugged using the same utility and that is used as the mention and the id"* — [the Identifier](../utilities/04-identifier.md) |
| `Heading.write()` | its name when the pair was written, so the syntax never shows; its text as written otherwise, words and all | as Title's and Mention's |
| `Heading.specification` | `new HeadingSpecification()`: **a heading is in a section** | E7 |

**The canonical goes both ways:** `section.canonical` is the heading, `heading.section` is the section, and neither is stored. A nested section's heading is among the outer's parts, since `parts` splices a same-class child, but never the outer's canonical, which is found among its own contents.

## How they are extended

A class of section that means through something else overrides `canonical` to find its own kind, as Section does; Chapter's Title and Book's Cover will. A heading of another kind is a class under Heading, or under Sentence with a `section` of its own. Both are written as any composition: `<Section><Heading>…</Heading><Paragraph>…</Paragraph></Section>`, the heading wherever it stands.

## Promises

Nine in [`.tests/section.test.tsx`](../../package/.tests/section.test.tsx). Five of the relation: the level and pair, the canonical its heading wherever it stands; a section without a heading a void when asked; parts across subsections and the canonical its own heading only, the nested section one deeper; a heading a sentence at 3 whose section is its parent; a heading outside a section, or in a paragraph, saying so when asked, and one beside a sentence in a section up to code. Four of a heading doing as a title does: written as a mention it wears its name's slug, means the compiler's url as a Self reference, and its section mentions it; written plain, its copy's slug is its id and `#` it is what it means; drawn, its words stand inside an anchor to what it means, its own element wearing the id and `pa-self-reference`, the syntax never shown; a section with no heading, or a heading with no words, mentions nothing.

## Gate

Typecheck 0 errors, quick build fresh, 73 of 73 across eight files on 2026-09-22; 242 of 242 across eighteen on 2026-09-26 with the heading's four, `efb7f48` — committed locally and not pushed.

**Names.** Doug's: `Section`, `Heading`, `canonical`, `section`, `mention`, `name`, `means`. Ours, flagged: `SectionSpecification`, `HeadingSpecification`, the rules `$hasAHeading` and `$isInASection`.
