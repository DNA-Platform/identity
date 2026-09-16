# Sprint 74 — Conversation as a Folder

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `building` — ***2026-09-15: the five kinds and the door stand, awaiting Doug's audit. Suite 125 of 125 (was 115) · tsc 3, which is HEAD's own 3 and none of them ours · the door emits. [R7](#r7) and [R8](#r8) are not started.***
- ***The chapter name is Doug's own phrase, not a proxy: "I would call it conversation as a folder."***

---

## <a id="where"></a>Where things stand — ***2026-09-15***

**Next action: Doug's audit of the five kinds, then [R7](#r7) — the transcript imported.** *Nothing below R6 has been attempted.*

**BUILT:** [U0](#u0), [U1](#u1), [U2](#u2). *Five kinds behind one door, ten promises, and the recovered design back on disk.* **NOT STARTED:** [U3](#u3), [U4](#u4), [U5](#u5).

| | measured |
|---|---|
| package suite | **125 of 125**, up from 115 — the ten new promises are [`.tests/conversation.test.tsx`](../../package/.tests/conversation.test.tsx) |
| `tsc -p src` | **3** — and **3 without our files too**, measured by moving them aside and running again. ***The delta is zero and the three are HEAD's*** ([below](#heads-three)) |
| the door | `dist/conversation.js`, `.cjs` and `.d.ts` all emit |

### <a id="corrected"></a>What the building got wrong, and what Doug corrected

***This session built `$Turn` with an "annotative" type, claimed the 2026-09-13 design's reason for it was false, and had both backwards.*** **Doug, 2026-09-16: *"They are parts. They don't understand what annotative is. It's a more abstract form of annotation."*** *Annotative means **type of an annotation**; annotations are filtered out before a parse begins and are never parts at all. [The corrected account is the analysis](#annotative), and `$TypeOfTurn extends $TypeOfSection` now, the shape `$Aside` has.*

***And the "measurement" that seemed to refute the design was measuring a bug*** — **[the artifact](#artifact) is real, it is in `parts()`, and it is not this sprint's to fix without him.**

### <a id="heads-three"></a>THE THREE tsc ERRORS AT HEAD ARE ONE DEFECT, AND IT IS SERIOUS

***[`Reflection`](../../package/src/utilities/Reflection.tsx) declares `above` TWICE*** — at **174**, the new twin of `beneath` taking `(holding, held)` and answering a boolean, and at **213**, the pre-existing parent walk taking `(writing)`. **Both are emitted into one class body and JavaScript keeps the LAST, so the method that exists on the prototype is the parent walk.** *Read in the shipped bundle, not inferred: `dist/chunks/Html-*.js` carries both at 184 and 223.*

***So [`Composition.parts()`](../../package/src/writing/Composition.tsx) line 56 — `reflection.above(kind, token.kind)` — calls the PARENT WALK.*** *It takes one argument, ignores the second, reads `kind.parent` and hands back a writing that is then read as a truthiness test.* **The level comparison the clause was written to make never runs.**

**That clause landed in `ac48a33`, which shipped as the fix for *"every link on every page can finally be pressed."*** *`tsc` named all three the whole time.* ***Not touched here: it is `src`, it is not this sprint's, and it is Doug's to rule.***

**Three goals, his:** *build the framework · import the conversation · style it correctly.*

## <a id="recovered"></a>What this grows from — ***a design that is not on disk***

***[Conversation as a Folder](#recovered) — a cover and four chapters, 565 lines, written 2026-09-13 by Cathy with Gabby and Arthur — was committed to the `dougs-library` repository at `89a93d3` and DELETED in the very next commit, `0a50a3a`, with no reason in the message.*** *It stands nowhere on disk and nothing in this repository links to it. Recover it with:*

```bash
git -C ../dougs-library show 89a93d3:library/conversation-as-a-folder/01-the-model.md
```

**[U0](#u0) puts those five files back on disk in this branch, because a design read out of git history is not a design anybody can maintain.**

## <a id="rulings"></a>Rulings — ***his words, verbatim***

- <a id="r-folder"></a>**WHAT THIS IS:** *"I would call it conversation as a folder."* — **2026-09-13**
- <a id="r-exchange-chapter"></a>**THE GRADE, WHICH IS TODAY'S CHANGE:** *"I think an exchange is a chapter and it can have many topics. They represent the movements of the conversation. The conversation, if long, should have many chapters but not one per turn."* — **2026-09-15.** ***This supersedes the 2026-09-13 design's placement of `$Exchange` as a section carrying an annotative type.***
- <a id="r-tiers"></a>**THE TIERS:** *"Exchange has topics perhaps, a dialogue with turns and they have a section relationship. The dialogue have participants that are referred to frequently."* — **2026-09-13**
- <a id="r-name"></a>**THE NAME:** *"Exchange is better."* — **2026-09-13**
- <a id="r-participant"></a>**THE PARTICIPANT:** *"A reference the exchange carries, like the author tag, that points to a biography."* · *"In my library, I write about you and you get a participant link to my story of you whereas I am the author and my participant link goes to my story of me — which is my author infrastructure."* — **2026-09-13**
- <a id="r-topic"></a>**THE TOPIC:** *"Topic should be more like an annotation. A type of subject for a conversation / dialogue. But they might correspond to secondary cataloguing books, and we'll need to have the subject machinery to cover this."* · *"Oh the exchange is like the topic."* — **2026-09-13**
- <a id="r-types"></a>**HOW IT IS TO BE DESIGNED:** *"Remember in the plan to figure out what is validated by the type. What can just be a type annotation versus what is a class — for multiple inheritance, sometimes just a type is good. Follow the type class interface pattern."* — **2026-09-13**
- <a id="r-format"></a>**THE DRESS:** *"figure out how to implement this as a format with the theme that would still work in an article or encyclopedia page."* · *"We could have the document viewer on the right if clicked."* — **2026-09-13**
- <a id="r-all"></a>**WHAT CLAUDE WRITES:** *"we want to support all of the formatting that Claude provides in a view of one of its conversations… Ways of seeing code and various notes etc…"* — **2026-09-13**
- <a id="r-audit"></a>**HOW THIS SPRINT RUNS:** *"build the core classes. I will audit them."* — **2026-09-15**
- <a id="r-annotative"></a>**WHAT ANNOTATIVE MEANS, correcting this sprint:** *"They are parts. They don't understand what annotative is. It's a more abstract form of annotation."* — **2026-09-16.** *[The corrected account](#annotative).*
- <a id="r-parts"></a>**WHAT A SECTION MUST HOLD:** *"A section, for instance, should have all paragraphs. It can have other sections but it recursively hands its parts through. No paragraphs should be removed. Is this not the case? How can we fix?"* — **2026-09-16.** ***It is not the case: [the repro](#eaten).***
- <a id="r-grades"></a>**THE GRADES, SETTLING A DRIFT:** *"Maybe a Dialogue is a chapter and an Exchange is more like a turn."* — **2026-09-16.** *This restores his 2026-09-13 ruling — "Exchange is better", given for **one speaker's contribution** — which the design had drifted off by inventing a middle tier and a third name. **`$Turn` is struck; there are three grades and three names.***
- <a id="r-round"></a>**AN EXCHANGE IS A ROUND:** *"An exchange can have a sequence but generally one per conversation participant."* — **2026-09-16.** *So an exchange names SEVERAL participants and **how many is not a rule** — a rule demanding one would refuse the ordinary case of somebody saying two things before anyone answers.*
- <a id="r-components"></a>**A LIBRARY IS COMPONENTS, NOT A BASE:** *"either DougsLibrary can't use up the base type or Conversation has to be a new base type… How about we figure out how to reuse components so that different classes can be used and DougsLibrary isn't represented by any one book?"* — **2026-09-16**, and he chose components. ***`$DougsLibrary` stops being a class the five books extend; the chrome, the tabs and the sheet become components any book uses, and each book extends the kind it actually is.***
- <a id="r-where"></a>**WHERE BASE CLASSES LIVE:** *"in .me we are developing a library. So all base classes should be in public package, but if we need base classes for the library, we can create a book there using the resource pattern, which we have yet to implement."* — **2026-09-16**
- <a id="r-component"></a>**WHAT A COMPONENT IS, given as a definition:** ***"Do you understand that a component is first and foremost a wrapper to associate a formatter to some selection of parts?"*** · *and the correction that produced it:* **"Composition. That affords no dynamism."** — **2026-09-16.** *Given after this session wrote a metadata component taking `held`, `length`, `model` and `under` as PROPS. **A component built from props draws only what its author anticipated**; written as composition it holds whatever a person writes and the formatter styles it. `$Infobox` is the pattern and it had been READ the same day — no props, a bond that concats `$InfoboxFormat` onto the block, and everything it looks like living in the format.*

## <a id="analysis"></a>The analysis — ***what the ruling moved, and what it left standing***

***An exchange rising from section to chapter changes exactly one thing and it is the admission question.***

**At section grade the design needed `$TypeOfExchange` to be ANNOTATIVE** — declared `extends $Type` rather than `extends $TypeOfSection` — because [`$Composition.parts()`](../../package/src/writing/Composition.tsx) keeps a part only if it carries the holder's own level type or the level beneath, *so a level-typed exchange would have held exchanges and nothing else.*

**At chapter grade that problem is gone.** *A chapter holds only annotations and writes its document in `print()` — [`ChapterSpecification.$saysSomething`](../../package/src/library/Chapter.tsx) returns false and `$holdsOnlyAnnotations` says the rest — so a chapter's grade narrows nothing a conversation wants.* **`$TypeOfExchange extends $TypeOfChapter` is therefore the same move [`$Article`](../../package/src/encyclopedia/Article.tsx) already makes, and it is a LEVEL type.**

***The turn does not move: `$TypeOfTurn extends $TypeOfSection`, the same shape `$Aside` and `$Quote` have.***

### <a id="annotative"></a>WHAT ANNOTATIVE MEANS — ***Doug's correction, 2026-09-16, and this sprint had it wrong***

> ***Doug:*** **"They are parts. They don't understand what annotative is. It's a more abstract form of annotation."**

**The 2026-09-13 design called `$TypeOfTurn` ANNOTATIVE and meant only *stands outside the levels ladder*.** ***That is not what the word says, and the session that built from it repeated the error and then went and "measured" it.***

**`$Type extends $Annotation`, so EVERY type is an annotation** — `$TypeOfSection` no less than `$TypeOfFormat`. *What actually distinguishes the four the design listed is that they are types **of annotations**: `$Format`, `$Path`, `$Catalogue` and `$Fold` all extend `$Annotation`.* **And [`parser.tokens`](../../package/src/utilities/Parser.tsx) filters annotations OUT before the parse begins, so an annotation is never a part at all.**

***So a quote in a turn is a PART, and admission and annotation are two questions this sprint had crossed.*** **A turn is a composition; its type stands where the compositions' types stand.**

### <a id="artifact"></a>AND THE ARTIFACT DOUG SUSPECTED IS REAL, AND IT IS NOT THIS SPRINT'S

***Measured 2026-09-16 with existing kinds only, nothing changed:***

```
above.length = 1                              the parent walk is what is on the prototype
Section holds [Heading | Paragraph | Quote]
Aside   holds [Paragraph | Quote]             ← by the rule as written this should NOT survive
Quote   holds [Paragraph | Aside]             ← nor this
```

**By [`$Composition.parts()`](../../package/src/writing/Composition.tsx) as written, a quote inside an `$Aside` is neither the aside's own kind nor paragraph-grade, so it reaches the fourth clause — `reflection.above(kind, token.kind)` — and [that method is declared TWICE](#heads-three), with the parent walk winning.** *It takes one argument, reads `kind.parent`, and answers something truthy.* ***Every sibling specialisation of a level holds its siblings today for that reason and no other.***

> ***So the earlier entry in this chapter claiming the design's admission argument was false has been WITHDRAWN. It measured the bug.*** **The design was right: under the rule as written, a level-typed holder does not admit a sibling — and what happens to the refused part is worse than dropping. `parse` REDUCES an unaccepted writing into the level beneath, which is a section becoming a paragraph: the `<p><article>` shape [Sprint 73 shipped a fix for](../solutions/84-the-five-pages-that-were-all-one-book.md).**

***The consequence that matters: repairing `above` ALONE would break `$Aside`, `$Quote`, `$Box`, `$Infobox`, `$Navbox` and every other sibling specialisation, on pages that draw correctly today.***

### <a id="eaten"></a>AND A SEPARATE, WORSE ONE, FOUND WHILE ANSWERING HIM — ***a section silently eats what follows a loose word***

> ***Doug, 2026-09-16:*** **"A section, for instance, should have all paragraphs. It can have other sections but it recursively hands its parts through. No paragraphs should be removed. Is this not the case? How can we fix?"**

***It is not the case. Measured 2026-09-16, one line, nothing changed:***

```tsx
<Section><Paragraph>One.</Paragraph><Emphasis>loose</Emphasis><Paragraph>Two.</Paragraph></Section>
   →  Heading("One.")  Paragraph("One.")

<Section><Paragraph>One.</Paragraph><Paragraph>Two.</Paragraph></Section>
   →  Heading("One.")  Paragraph("One.")  Paragraph("Two.")
```

**A word-grade writing standing loose inside a section takes the emphasis AND EVERYTHING WRITTEN AFTER IT.** *Nothing throws. Nothing warns. The page simply ends early.*

**What else was measured the same minute, and each of these is correct:**

| written | answered |
|---|---|
| a section holding a nested section between two paragraphs | `Heading \| Paragraph \| Section \| Paragraph` ✓ |
| an aside holding a quote between two paragraphs | `Paragraph \| Quote \| Paragraph` ✓ |
| a section holding an image after a paragraph | `Heading \| Paragraph \| Image` ✓ |

***THE MECHANISM IS NOT ESTABLISHED AND IS DELIBERATELY NOT GUESSED HERE.*** *This session has now been wrong twice in one day by reasoning at the code instead of running it; the repro is worth more than a third theory.* **What is known: the loose token reaches [the fourth clause](../../package/src/writing/Composition.tsx), which calls the shadowed `above`.**

***No fix is proposed. It is `$Composition`, it is the most serious file in the framework, and it is Doug's.***

## <a id="requirements"></a>Requirements

- <a id="r1"></a>**R1 — A conversation is a folder.** `$Conversation` stands as a book kind, so a folder of exchanges is a book the binder publishes like any other. **AE1:** a folder with a `.book.tsx` extending it builds, and its page draws.
- <a id="r2"></a>**R2 — A dialogue is a chapter.** `$Dialogue extends $Chapter`, carrying `$TypeOfDialogue extends $TypeOfChapter` — [his ruling](#r-grades), and the same shape `$Article` has. **AE2:** a conversation of five dialogues answers five chapters, and its table of contents names all five. ***Built as `$Exchange` first and renamed the same day; [the drift that caused it](#r-grades) is in the ruling.***
- <a id="r3"></a>**R3 — An exchange is a section, spoken, and generally a round.** `$Exchange extends $Section` carrying `$TypeOfExchange extends $TypeOfSection` — the shape `$Aside` has, [corrected from "annotative"](#annotative). It names its participants and **how many is not a rule** ([his ruling](#r-round)). **AE3:** an exchange written with a quote answers it among its parts; one naming two participants answers two; one naming none is refused. ***`$Turn` is struck.***
- <a id="r4"></a>**R4 — A participant names a biography.** `$Participant extends $Catalogue`, the shape [`$Author`](../../package/src/library/Author.tsx) has — it says a name and names a book, leads to that book's page, and withdraws its anchor where it names the book being read. **AE4:** `<Participant>[Claude](Claude & Our Projects)</Participant>` draws *Claude* and addresses the page that book was published at.
- <a id="r5"></a>**R5 — A topic is a kind of subject.** `$Topic extends $Subject` — [his ruling](#r-topic) that a topic is a type of subject, and a subject is already a mention of the book that catalogues it. **AE5:** an exchange carrying two topics answers both, and a topic naming a shelved book addresses its page.
- <a id="r6"></a>**R6 — One door.** `@dna-platform/public/conversation`, beside `encyclopedia` and `article`, wired into the rollup doors and the package exports. **AE6:** `tsc -p src` is 0 and the door emits `dist/conversation.js` and `dist/conversation.d.ts`.
- <a id="r7"></a>**R7 — The conversation is imported.** `2026-09-09-semantics-of-types-&-more.md` becomes a folder of exchanges under `.me`, replacing [the stub](../../../../.me/.claude-and-our-projects/semantic-reference-theory/conversations/semantics-of-types/0-lead.tsx). **AE7:** every message in the source stands in the book, and the count is stated against the source.
- <a id="r8"></a>**R8 — It is styled as Claude's chat.** A theme holding RULES and reading VALUES from the theme above it, so the same conversation survives its own dress and the encyclopedia's — [his ruling](#r-format). **AE8:** the book draws in Claude's chat idiom, and the same exchanges drawn inside an encyclopedia page draw in Wikipedia's.
- <a id="r9"></a>**R9 — Seen.** **AE9:** the page is driven in a real browser with visible text asserted, and what is red is named rather than hidden.

## <a id="units"></a>Units

| | what | files | requirement |
|---|---|---|---|
| <a id="u0"></a>**U0** | the recovered design put back on disk in this branch | `.lib/conversation-as-a-folder/` — a cover and four chapters | — |
| <a id="u1"></a>**U1** | the folder and the five kinds | `src/conversation/{Conversation,Exchange,Turn,Participant,Topic}.tsx` | [R1](#r1)–[R5](#r5) |
| <a id="u2"></a>**U2** | the door | `src/conversation.ts` · `rollup.config.js` · `package.json` | [R6](#r6) |
| <a id="u3"></a>**U3** | the reading — the transcript parsed into exchanges and turns | a script in `.me`, and the book it writes | [R7](#r7) |
| <a id="u4"></a>**U4** | the dress | `src/conversation/Theme.tsx` | [R8](#r8) |
| <a id="u5"></a>**U5** | driven and seen | — | [R9](#r9) |

## <a id="source"></a>The source, measured

**`2026-09-09-semantics-of-types-&-more.md`** in the sibling `dna-library` repository, at `library/claude-dna/conversations/`. *Frontmatter, then `**User** · timestamp` and `**Agent** · timestamp` blocks of blockquoted lines with `---` between.*

***Measured 2026-09-15: 53 `**User**` blocks and 48 `**Agent**` blocks — 101 — where the frontmatter says `messages: 106`. The gap is unexplained and [U3](#u3) must account for it rather than round it off.***

## <a id="audit"></a>For the audit — ***what is not settled, said plainly***

1. **The annotative type on a composition kind** ([the analysis](#analysis)) — right, or is a turn owed a level type and a different answer to what it holds?
2. **`$Conversation`'s base.** *Every book in `.me` extends `$DougsLibrary extends $Encyclopedia`, and TypeScript gives one base — so a conversation book cannot derive from both.* **The type carries what the class cannot** ([The Type and the Instance](../the-type-system/02-the-type-and-the-instance.md)), *but which way round is Doug's.*
3. **Is `$Exchange` a class, now that it is a chapter?** *The 2026-09-13 answer was "probably only a type — it adds no member." As a chapter with topics and turns to answer, it has members.*
4. **Do `$Author` and `$Subject` become kinds of `$Participant`?** *Left open in the original design and still open.*
5. **Inline code has no kind** — *reached for three times next door and refused each time. A conversation is full of it, and this is the fourth reach.*

## <a id="traps"></a>The traps, each one measured here

- ***A PROMISE CANNOT PASS A `$TypeOf` CLASS THROUGH THE DOOR.*** **`tsc -p src` compiles `src` from SOURCE and `.tests` against `dist` — two type programs — so a class reached through the published name is not nominally the class `src` declares**, whatever it is at runtime. *It cost two rounds of red. The promises ask structurally instead: what a part's kind is CALLED and what class it WEARS, which is the reading a reader makes and the one the dress selects on.* **This is [`split-emission`](../solutions/.cover.md) meeting the test boundary.**
- ***`build:quick` EMITS NO `.d.ts`.*** *So a new door typechecks against declarations that are not there until a FULL `npm run build` has run once.* **Quick for the suite; full before trusting `tsc`.**
- ***A HEREDOC IN A BASH CALL HANGS.*** *Cost one killed task this session. Files come from the editor; scripts are run with one plain `bash <file>`.*

## <a id="reading"></a>Read first

[The recovered design, all four chapters](#recovered) · [The Book Is the Layout](../writing-a-book/05-the-book-is-the-layout.md) · [The Book's Little Framework](../writing-a-book/04-the-book-s-little-framework.md) · [What Natural Means](../the-coding-style/07-what-natural-means.md) · [The Order of a Class](../the-coding-style/02-the-order-of-a-class.md) · `src/encyclopedia/` whole · `src/library/Chapter.tsx`, `Document.tsx`, `Book.tsx`, `Author.tsx`, `Subject.tsx` · `src/reference/Catalogue.tsx` · `.me/..reference/` whole

## <a id="names"></a>Names — proxies flagged

**Doug's:** *conversation as a folder*, `Exchange`, `Turn`, `Participant`, `Topic`, *movements*. **Proxies, his to rename:** the folder and door name `conversation` — ***his word was "the conversations folder"***; `$Conversation`; `$ConversationTheme`; and every member [U1](#u1) declares.
