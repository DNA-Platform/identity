# Word, Sentence and Paragraph

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-22 with the unit, to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/writing/Word.tsx`](../../package/src/writing/Word.tsx), [`Sentence.tsx`](../../package/src/writing/Sentence.tsx) and [`Paragraph.tsx`](../../package/src/writing/Paragraph.tsx), the promises [`.tests/levels.test.tsx`](../../package/.tests/levels.test.tsx). Three classes in one chapter because E13 reads them as one intermixed level; a PROXY as a split, Doug's to change.***

---

## What they are

**Word, Sentence and Paragraph are the intermixed levels, 2, 3 and 4, permissive and open, and each is a class of six lines.** E6 gives them at 1, 2 and 3, permissive, *"a semantic family for informal specialization… no one needs to use 0–3, unless they need strict"*; E12 opens them, taking react, writing and strings; E13 reads them as *"one intermixed level"* and Paragraph, relative to a closed Section, as *"an emergent sort of letter of its own kind."* The ruling of the levels moves them to 2, 3 and 4 with Letter at 1. Each stands its Level, Permissive and Open in `$Define` and nothing else; the specification is Composition's.

| class | stands | cited |
|---|---|---|
| `Word` | `<Level>2</Level>`, `<Permissive />`, `<Open />` | E6, E12; ruling 3 |
| `Sentence` | `<Level>3</Level>`, `<Permissive />`, `<Open />` | E6, E12; ruling 3 |
| `Paragraph` | `<Level>4</Level>`, `<Permissive />`, `<Open />` | E6, E12; ruling 3 |

## <a id="abstract"></a>The hierarchy is literal and abstract at once, and a level is chosen by FIT

***Doug, 2026-09-24, demoting Mention from a Sentence to a Word:*** **"Seeing as how ALL of React could be written in a Letter, we are using these concepts at a metaphorical level. In fact, make this a Word. It is a near atomic composition. All the way at the bottom… We want to think about these things literally and abstractly. The whole mention gets demoted to a word for me because it is unitary in some connected sense."**

**The Genesis says it four ways, and none of them measures text.** *E12: "a Letter containing a whole book as a string is one letter."* · *E14: "a whole book of html/react in one letter is calligraphy."* · *E13: Paragraph, relative to a closed Section, is "an emergent sort of letter of its own kind."* · *E15: "like a Letter is the canonical level 1"* — **canonical**, which is to say the exemplar of its level and never a glyph.

***So a level is a position in a nesting order, and its name is the metaphor for the KIND of unit that sits there.*** **A Letter is not one character; it is the thing that may hold anything and answers to nothing beneath it. A Word is not one word; it is a UNITARY composition** — *one thing, atomic in a connected sense, however much prose it carries.*

| what you are making | the level | why |
|---|---|---|
| a unit that reads as ONE thing, however long | ***Word*, 2** | *unitary: you point at it whole and nothing inside it is separately addressed* |
| a run of units making one statement | ***Sentence*, 3** | |
| a run of statements making one passage | ***Paragraph*, 4** | |
| something that may hold anything, answering to nothing below | ***Letter*, 1** | *E3's "as a letter, it is allowed to have anything"* |

**Mention is the worked case.** *It holds `[the text we mention](id)`, which may be several words of prose, and it is a Word all the same, because you point at the whole of it and nothing inside it has an address of its own.* *Means is the same case on the url side, built 2026-09-24: `<Means>[Alan Turing](/complicated-url)</Means>` is one Word whose own element is the link.*

<a id="self-reference"></a>**A self-reference is wanted, and it is styled rather than removed.** *A self-reference is written as `<Self>`, a [`$SelfReference`](../../package/src/writing/Reference.tsx): a Reference that works the same and also wears `pa-self-reference` beside `pa-reference`* — Doug, 2026-09-25: *"Why don't you subclass Reference to make a $SelfReference as a type of reference that works the same, but it also appeans pa-self-reference, and make export it as Self"*. *The compiler gives a link to the page it stands on that page's url like any other — "I don't like the special case. Just give the same urls everywhere" — so nothing recognizes a self-reference by its url yet: "Yes just leave it off for now, and we'll figure it out later."* **It is never designed away:** *"We like self-referential links. Document this. There are a lot of fixed-points in this framework. it is fine"* — the definition's own fixed point, the autobiography where the author arrow comes home (E34, E39), a chemical born its own parent — and why they are embraced: *"We are building a mathematical structure that relies on fixed-points to comprehend authorship and subjectivity so... you have to embrance them."* **What `pa-self-reference` is for:** *"The way we handle them is to style them so they don't look link-like with no underline and maybe no pointer."*

***And the literal reading is a trap with a measurable cost, which is why this section exists.*** **Choosing a level because the name matches the size of the text is how a class gets spliced away:** *a Mention written as a Sentence would be a same-class child of every Sentence holding it, so [Composition's splice](03-composition.md) would flatten it and `sentence.parts` would never show it.* **As a Word it stays a part.** *The metaphor was the correct guide and the literal reading would have been wrong.*

## How they are extended

Heading is a Sentence, in [Section's chapter](08-section-and-heading.md); Mention is a Word, ruled 2026-09-24 and unitary in the sense [above](#abstract); Means, its twin, is a Word too — the Word with a reference annotation that E22 calls Ref — and Quote is not built, since it was an example (R2). A class at one of these levels that needs strict says so by standing `<Strict />` instead, and an author says it for one piece by writing it.

## Promises

Four in [`.tests/levels.test.tsx`](../../package/.tests/levels.test.tsx): each level and pair; a paragraph holding sentences, words, letters and prose with its parts the compositions at or below it; a sentence in a sentence spliced and one deeper; permissive not admitting a part above the level, and a written Strict or Closed overriding what the class stands.

## Gate

Typecheck 0 errors, quick build fresh, 73 of 73 across eight files on 2026-09-22, committed locally and not pushed.

**Names.** Doug's, from the Genesis: `Word`, `Sentence`, `Paragraph`.
