# What Claude Writes

- **author:** [Gabby](../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Cathy](../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Phillip](../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)

---

> ***Doug:*** **"we want to support all of the formatting that Claude provides in a view of one of its conversations… Ways of seeing code and various notes etc…"**

***The inventory, read against the kinds that actually exist in `@dna-platform/public` today.*** **Most of it is already there**, which is the argument for building the dialogue on this framework rather than beside it.

## <a id="have"></a>What the framework already draws — ***nothing owed***

| what Claude writes | the kind | grade |
|---|---|---|
| a paragraph | `$Paragraph` | paragraph |
| a heading, any depth | `$Heading` | paragraph |
| **bold · italic · strikethrough** | the three in `$Emphasis` | word |
| a fenced code block | **`$Code`** — *and its info string chooses what draws it: prism, katex, or a live reading* | paragraph |
| a bulleted or numbered list, nested | `$List` · `$Item` — *`$(List, TypeOfSentence)(TypeOfItem)`* | paragraph |
| a table | `$Table` · `$Row` · `$Cell` | section |
| **a blockquote** | **`$Quote`** — ***section-grade, which is the whole problem in [The Model](01-the-model.md#exchange)*** | section |
| inline maths · a display equation | `$Math` · `$Equation` | word · paragraph |
| an image, with or without a caption | `$Image` · `$Illustration` · `$Figure` | word · paragraph |
| a link | `$Ref` | word |
| a footnote, a citation, a reference list | `$Footnote` · `$Citation` · `$Entry` · `$Notes` · `$References` | — |
| **a collapsible block** | **`$Menu` + `$Summary`** — *`details`/`summary`, already built for the application's chrome* | — |
| an aside, a note | `$Aside` · `$Note` | section · — |

***One that is missing and is NOT ours to name:*** **inline code has no kind.** *It was reached for three times next door and refused each time — a code span composed to a `$Word` and the suite went red, because a word demands letters and `parts()` has parentheses. It was found to be **content that is not writing**, the word-grade sibling of a figure, and it is still unnamed.* **A conversation is full of it, so this design will be the fourth reach.**

## <a id="owed"></a>The kinds that do not exist

| kind | what it is | notes |
|---|---|---|
| **`$Exchange`** · *section* | one speaker's contribution | ***name ruled by Doug 2026-09-13*** — *"Exchange is better."* [The Model](01-the-model.md#exchange) is how it is admitted |
| **`$Participant`** · *reference* | a link to the biography of whoever spoke | ***ruled*** — *"a reference the exchange carries, like the author tag, that points to a biography."* The author is the participant the cover names |
| **`$Topic`** · *annotation* | a kind of subject, annotating a dialogue or an exchange | ***ruled*** — *"Topic should be more like an annotation."* May correspond to a secondary cataloguing book; the subject machinery is the open piece |
| **`$Thinking`** · *section* | reasoning that stands in the record and does not draw by default | ***needs no new mechanism*** — see below |
| **`$ToolCall`** · *section* | a call, its arguments and its result — *an exchange a machine took* | probably an `$Exchange` kind, not a sibling |
| **`$Artifact`** · *document* | a document an exchange made, which the rail opens | *a `$Reference` from the exchange; [`read()`/`follow()`](02-the-format-and-the-theme.md#hidden) is the way to it* |

## <a id="free"></a>The feature that is already built and was built for something else

***`print={false}` declares without drawing.*** **A writing written with it becomes parenthetical, and `$Writing.view()` returns null before `print()` is ever called.** *It was ruled for a paper that wanted a subject in its schema and not on its page.*

> **So a thinking block and a tool call are written into the transcript, stand in the model, are walkable by anything that reads the book — and do not draw until a format turns them on.** ***"Show thinking" is `print` flipped on one writing. No member is owed for it, and nothing is hidden by CSS.***

**That is also the answer to the larger thing Doug is after** — *storing conversations so other apps can read them.* **A parenthetical writing is still IN the book.** The reading is what is optional; the record is not.

## <a id="speaker"></a>The one gap the record already names

**An exchange is spoken BY someone, and a speaker's exchanges are every exchange that means them.** ***That is the inverse of pointing, and nothing in the framework computes it*** — written down in [`Talk.tsx`](../../../inexplicable-phenomena/library/.public/package/src/encyclopedia/Talk.tsx) before any of this:

> *"A comment is signed by a user page it MEANS, and a user's contributions are every comment that means them — which is the inverse of pointing, and nothing computes it."*

**`$References` has the same gap.** *So it is not the dialogue's to solve alone: it is one seam, wanted in three places, and a conversation library that other apps read is the use case that pays for it.*

## <a id="code"></a>Ways of seeing code

**`$Code` carries an info string and the info string chooses the renderer** — *that fork already exists and already routes to prism and katex.* **So "ways of seeing code" is not a new kind; it is more renderers behind the same word, plus a format that says how this one instance is shown:**

| written | drawn as |
|---|---|
| ` ```ts ` | highlighted, in the page's monospace |
| ` ```ts {diff} ` | a diff |
| ` ```mermaid ` | a diagram |
| a code block an exchange **made** | ***an artefact*** — *a `$Reference` the rail opens, not a block in flow* |

***The last row is the interesting one and it is a semantic question, not a styling one:*** **when an exchange writes code, is that writing, or is it a document the exchange MENTIONS?** *In Claude's own view it is the second — which is why the rail exists at all.* **Ruling owed.**

## <a id="see-also"></a>See also

- **[The Model](01-the-model.md)** — *the dialogue, the exchange, and the one thing `.public` owes*
- **[The Format and the Theme](02-the-format-and-the-theme.md)** — *how all of this is dressed in two dresses*
