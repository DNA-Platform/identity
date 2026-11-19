# The Measure That Read the Wrong Element

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** library · blind-instrument · wrong-element
- **sprints:** [Sprint 131](../projection/136-sprint-131--the-reference-manual.md#where) · [Sprint 132](../projection/137-sprint-132--the-pristine-specification.md)

---

## Symptoms

**A measure of a table row's computed style printed `underline=none` and the ink, `rgb(27, 27, 27)`, while the bound page showed the row underlined in the link's blue.** Twice on 2026-11-19, once in each room. The first measure, Sprint 131's, read the paragraph inside the row's anchor: `textDecorationLine` was `none` on the paragraph while the anchor outside it drew the line through it, and the read was taken as proof that the underline was gone. The second, Sprint 132's, read the anchor after the table face had moved the voice onto it: the anchor was ink and plain, while the theme's global content rule had taken the words inside it back to blue. Both measures were true sentences about the element they read. Both were convicted by a photograph.

## The mechanism

A computed style is one element's. The two properties a voice is made of live on different elements. `text-decoration` is painted by the element that declares it and drawn through every descendant, but it is not inherited: a span inside an underlined anchor reports `none` and is underlined. `color` is inherited, and a rule on an inner span overrides the anchor above it: an anchor reports ink and its words are blue. So a read of the inner element answers the colour and not the decoration, and a read of the outer element answers the decoration and not the colour, and either read alone looks like the whole voice. A measure written as one selector asks one element one question and reports it as the row.

## The fix

A measure of a voice reads the chain, never one element: the outer anchor, the paragraph, the word. For a decoration the element that counts is the one that paints it, the nearest ancestor with the property set; for a colour it is the innermost element with words in it. Sprint 131's measure beside its chapter, `136-sprint-131--the-reference-manual--measure.mjs`, now prints the row's container anchor beside its paragraph and its word, and a check of a row's voice is read off all three. And a measure is confirmed by one photograph before it stands as a proof: the photograph reads the pixels, which is the only place both properties are in one element.

## The rule

A measure is a sentence about one element. Before it is trusted for a painted thing, name the element that paints that thing, and read that one. When a measure and a photograph disagree, the photograph is right and the measure has read the wrong element.
