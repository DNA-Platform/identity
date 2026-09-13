# The Model

- **author:** [Cathy](../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

## <a id="folder"></a>The folder — ***a conversation is a book, and a book is already a folder***

**Nothing needs inventing here.** [The Book Is the Layout](../../../inexplicable-phenomena/library/.public/.lib/writing-a-book/05-the-book-is-the-layout.md) rules it: *"all the files except .book are the content and they only have chapters"*, and `.book.tsx` holds the book class first and the components it is written with after. A conversation folder is that shape and no other:

```
a-conversation/
  .book.tsx        $Transcript extends $Book — the layout, and the kinds the book is written with
  .cover.tsx       the participants, the date, the author
  .synopsis.tsx    what the conversation came to
  1-<topic>.tsx    one chapter — a logical part of the conversation
  2-<topic>.tsx
```

***So "conversation as a folder" is not a new mechanism; it is the naming of one that exists.*** **What is new is what stands inside a chapter.**

## <a id="hierarchy"></a>The composition hierarchy

**Read at [`Book.tsx:74-78`](../../../inexplicable-phenomena/library/.public/package/src/library/Book.tsx), where reflection is handed it once:**

| | levels, bottom to top |
|---|---|
| **text** | Letter · Word · Sentence · **Paragraph** · **Section** · **Document** |
| **library** | Chapter · Book |

**A kind's level is the first level its type is an instance of**, scanning upward — so `$TypeOfHeading extends $TypeOfParagraph` makes a heading paragraph-grade, and `$TypeOfQuote extends $TypeOfSection` makes a quote section-grade. *Verified by reading the type parents: Heading, Code and List are paragraph-grade; Quote, Aside, Author and Subject are section-grade.*

## <a id="the-rule"></a>The rule that decides everything — ***read at the line***

**[`$Composition.parts()`](../../../inexplicable-phenomena/library/.public/package/src/writing/Composition.tsx) keeps a written part in exactly two cases, and drops it otherwise:**

```js
if (own !== undefined && token !== this && reflection.is(token, own)) return token;
if (beneath === undefined) return token;
return reflection.is(token, beneath) ? token : undefined;
```

| the case | what is kept |
|---|---|
| **1 · my own kind, or anything narrower than it** | *added 2026-09-09.* Before it, `token.parts()` stood here and **dissolved every nesting an author wrote** — measured that day: a list written inside a list answered two items and no inner list, and the LaTeX paper drew nine sections with **none** nested and every heading an `h2` |
| **2 · the level below me** | a section keeps paragraph-grade parts; a document keeps section-grade parts |
| **anything else** | ***silently dropped*** |

**Two readings make this exact, and both were verified in the code before anything below was designed:**

- **`is(part, asked)` reads ALL the types a writing carries** — [`Reflection.tsx:42-45`](../../../inexplicable-phenomena/library/.public/package/src/utilities/Reflection.tsx): `types(part).some(type => type instanceof asked)`. *Types are annotative and added with `addType`.*
- **`own` is the most specialised LEVEL type a writing carries** — [`Writing.tsx:42-46`](../../../inexplicable-phenomena/library/.public/package/src/writing/Writing.tsx) filters the carried types to the ones `reflection.level()` answers for, then down to the one no other specialises. ***Annotative types are filtered out before the choice is made, and that is the seam this design runs on.***

## <a id="narrowing"></a>The finding — ***inheritance narrows admission, and an ANNOTATIVE type does not***

***Said plainly, and it is not about sections:***

> **A composition admits its own kind and everything narrower. So the base admits every kind beneath it, and each LEVEL specialisation admits only its own specialisations. The more particular a kind is on the hierarchy, the less it will hold.**

| the holder | what it admits at its own level |
|---|---|
| **`$Section`** | ***everything section-grade*** — quotes, asides, tables, authors, subjects, and any new kind |
| **`$Quote`** — *a level specialisation* | quotes |
| **a section carrying an ANNOTATIVE type** | ***everything section-grade, still*** — because `kind` never sees an annotative type |

***So layered sections are safe, and markdown is safe.*** **A `$Section` inside a `$Section` is kept, which is exactly what the 2026-09-09 fix bought** — the paper nests five deep in [`3-body-sections.tsx`](../../../inexplicable-phenomena/library/.public/package/.wiki/.public/.article/3-body-sections.tsx). *This was checked before it was written down, because the alternative would have been a serious problem and a claim that large is not made from reasoning.*

**And the third row is the resolution of this whole chapter.** *It is [`Writing.tsx:42-46`](../../../inexplicable-phenomena/library/.public/package/src/writing/Writing.tsx) filtering the carried types down to the ones `reflection.level()` answers for — so a type declared `extends $Type` rather than `extends $TypeOfSection` says what a writing IS without touching what it HOLDS.* **[The Types](04-the-types.md) is that distinction, written out.**

## <a id="dialogue"></a>Dialogue, Exchange and Turn — ***all three are sections, and all three nest***

> ***Doug, 2026-09-13:*** **"Exchange has topics perhaps, a dialogue with turns and they have a section relationship. The dialogue have participants that are referred to frequently."**

**`$Dialogue`, `$Exchange` and `$Turn` all extend `$Section` and all carry ANNOTATIVE types.** Then:

| written inside… | kept? | why |
|---|---|---|
| **a dialogue in any `$Document`** | ***yes*** | a document's level below is Section |
| **a dialogue in any `$Section`** | ***yes*** | the holder's own type is `$TypeOfSection`, and a dialogue is one |
| **exchanges in a dialogue** | ***yes*** | the dialogue's own type is still `$TypeOfSection` — ***the annotative type is invisible to `kind`*** |
| **turns in an exchange** | ***yes*** | same |
| **a quote, an aside, a figure in a turn** | ***yes*** | a turn IS a section and admits every section-grade kind |
| **a dialogue inside a turn** | ***yes*** | ***the recursion, and it costs nothing*** |

**Each is still found by its type** — `reflection.is(part, $TypeOfExchange)` — because [`types()`](../../../inexplicable-phenomena/library/.public/package/src/utilities/Reflection.tsx) returns every type a writing carries, not only the one `kind` chose. ***Found by type, admitted as a section.***

## <a id="withdrawn"></a>Three proposals, withdrawn 2026-09-13

***This chapter previously asked Doug to choose between three ways of making a dialogue admit its exchanges, one of which asked `.public` for a new seam. All three are withdrawn, and the record of why is kept because the reasoning is the useful part.***

| | what it proposed | why it is gone |
|---|---|---|
| **A** | `$TypeOfExchange extends $TypeOfDialogue` | *unnecessary, and it would have closed the exchange to quotes and nested dialogues* |
| **B** | the exchange also carries `$TypeOfDialogue` | *unnecessary, and semantically false* |
| **C** | **a new seam in `.public`** so a kind could name what it admits at its own level | ***unnecessary — the framework already had the answer, in a distinction it was already using for `$Format`, `$Path`, `$Catalogue` and `$Fold`*** |

***The error was mine and it is worth naming:*** **all three assumed a kind must take a LEVEL type to be findable.** *Doug caught it in one sentence — "a specialized kind can have specialized style without being the only admitted thing… what can just be a type annotation versus what is a class" — and the code agreed with him.* **A design that asks the framework for a new seam is owed exactly this check first.**
## <a id="participant"></a>The participant — ***ruled 2026-09-13***

> ***Doug:*** **"A reference the exchange carries, like the author tag, that points to a biography."** · **"In my library, I write about you and you get a participant link to my story of you whereas I am the author and my participant link goes to my story of me — which is my author infrastructure."**

**`$Participant` is a `$Reference` an exchange carries, and it points at a biography** — the story of that person, held in this library. **The author is the participant the book's cover names**, and the author's own participant link points at the author's story of themselves. ***Everyone in a conversation has a biography here; the author is the one who wrote them.***

**What exists today, and what it lacks:** [`$Author`](../../../inexplicable-phenomena/library/.public/package/src/library/Author.tsx) and [`$Subject`](../../../inexplicable-phenomena/library/.public/package/src/library/Subject.tsx) are **byte-identical twins** — both `extends $Section`, both *"is its own heading"*, both promoting their text into a `$Heading` in the bond. **Neither carries a reference to anything.** *So there is no participant machinery today; there are two headings with different names, and this design is what gives them somewhere to point.*

***And it closes a gap the record already named***, in [`Talk.tsx`](../../../inexplicable-phenomena/library/.public/package/src/encyclopedia/Talk.tsx), before any of this:

> *"A comment is signed by a user page it MEANS, and a user's contributions are every comment that means them — which is the inverse of pointing, and nothing computes it."*

**`$References` has the same gap.** *One seam, wanted in three places.*

## <a id="topic"></a>The topic — ***ruled 2026-09-13***

> ***Doug:*** **"Topic should be more like an annotation. A type of subject for a conversation / dialogue. But they might correspond to secondary cataloguing books, and we'll need to have the subject machinery to cover this."**

**`$Topic` is an ANNOTATION, not a section** — a kind of subject, annotating a dialogue or an exchange rather than standing inside it. *`$Annotation` already has `$Type`, `$Format`, `$Path` and `$Catalogue` beneath it; a topic joins them.*

**Doug's own correction, kept because it is the reasoning:** *"A chunk of exchanges might be a topic… OR we leave it at chapter and not impose too much. But the point is the table of contents will catalogue and provide a description of what the exchange is about. **Oh the exchange is like the topic.**"* ***So a chunk of exchanges is not a new containment; the exchange is the unit a topic annotates, and the table of contents reads the annotation.***

**And a topic may correspond to a secondary cataloguing book** — which is `$Catalogue`, already an annotation, already what `$Composition.catalogue()` answers. ***The subject machinery this needs is the open piece***, and it is bigger than the dialogue.

## <a id="owed"></a>Still owed from Doug

1. **The subject machinery** for topics that correspond to secondary cataloguing books — *named as needed, not yet designed, and bigger than the dialogue.*
2. **Does a transcript's chapter divide by topic or by exchange run?** *Doug's lean: leave it at chapter and do not impose. The table of contents carries the description either way.*
3. **Is `$Exchange` a class or only a type?** *See [The Types](04-the-types.md#class-or-not) — it adds no member today, which argues for a type.*
4. **Do `$Author` and `$Subject` become kinds of `$Participant`** once a participant carries a reference? *They are byte-identical twins today and neither points at anything.*


## <a id="see-also"></a>See also

- **[The Format and the Theme](02-the-format-and-the-theme.md)** — *how it draws, and why it survives two dresses*
- **[What Claude Writes](03-what-claude-writes.md)** — *the inventory, and the kinds that do not exist yet*
- **[The Book Is the Layout](../../../inexplicable-phenomena/library/.public/.lib/writing-a-book/05-the-book-is-the-layout.md)** — *a book answers where, a chapter answers what*
- **[The Types](04-the-types.md)** — *level types against annotative ones, and what each specification validates*
