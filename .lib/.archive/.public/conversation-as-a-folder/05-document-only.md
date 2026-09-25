# Document Only

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)

---

> ***Doug, 2026-09-16:*** **"I am exploring the idea of document only."** · **"Think more about how we might have the document be the conversation, a section be a dialogue, a paragraph as an exchange and ask which role each code play and why."**

***The design in [The Model](01-the-model.md) put a conversation at BOOK grade — a folder, with chapters. This supersedes that.*** **Everything moves one ladder down and nothing touches the library ladder at all.** *The book name on this cover is now at odds with its own contents and is Doug's to rename.*

## <a id="the-five"></a>The five kinds

> ***Doug, thinking aloud 2026-09-16:*** **"you need an exchange to have many paragraphs and sections can take sections. WE need an exchange to be the full thing one person says to the other. Maybe Dialogue is the document and leave conversation as the folder and one-day name of the book."**

***NOTHING BELOW IS SETTLED.*** *An earlier draft of this chapter said "as Doug settled it" and he struck that the same day: **"I didn't settle it."** The word **maybe** is in his sentence and it stays in this one. What follows is a reading of what he said, kept so the next reading has something to argue with.*

| | is | role |
|---|---|---|
| **Conversation** | ***the folder*** — and one day the book's name | the ultimate setting; no kind is owed for it yet |
| **`$Dialogue`** | `$Document` | one movement; carries the topic; **and carries the theme** |
| **`$Exchange`** | `$Section` | ***the full thing one person says***, so it holds paragraphs, lists, code and quotes |
| **`$Participant`** | `$Catalogue` | names the book that is the account of a person |
| **`$Topic`** | `$Subject` | what a dialogue is about |

***An exchange at SECTION grade is what makes the speaker question disappear.*** **A message is one exchange however long it runs, so its participant is named ONCE** — not once per paragraph — *and sections take sections, so a quoted block or a nested aside inside a message costs nothing.*

***And a dialogue at DOCUMENT grade is what makes it placeable.*** **A dialogue stands wherever a document stands** — as a chapter's page, inside a section of an article, quoted in a log, or inside another dialogue, *because a document written inside a document is kept by [`parts()`](../../package/src/writing/Composition.tsx)'s own-kind clause.*

*Two earlier placements are superseded and kept here because the reasoning moved rather than being wrong: [chapter 1](01-the-model.md) had a conversation at BOOK grade with exchanges as sections; the first draft of this chapter had a conversation at DOCUMENT grade with exchanges as PARAGRAPHS, which Doug refused for the right reason — a message is many paragraphs.*

## <a id="roles"></a>The role each plays, which is the question he asked

### <a id="conversation"></a>The conversation knows the cast

**It declares its participants ONCE** — *Doug: "I'm a participant! And we likely don't have to write that over and over again. We can't have each message declaring us."* **Being a participant is a fact about the conversation, not about any one line**, and the conversation is the only thing in the model that could know it: an exchange is just words.

***And it is LAYOUT.*** **`$Book` is layout and chapters are logical parts; `$Conversation` is layout and dialogues are logical parts — the same anchor, one ladder down.** *Claude's own chat is the proof: it does not label messages, it PLACES them, one participant left and one right. The speaker is not a reference to resolve. It is a position the conversation puts a contribution in, decided by the one thing that holds the cast.*

### <a id="dialogue"></a>A dialogue knows what it is about

**It carries the topic and the heading, and it NESTS** — *a digression inside a movement is a dialogue inside a dialogue, which sections give for nothing.*

***And it is what SEARCH returns.*** *Doug: "Maybe we can implement a search if we want, but it requires dialogues."* **A section is the smallest thing with a name worth handing back** — a search that answered lines would answer noise, and one that answered whole conversations would answer too little. **The movement is the unit, which is why search requires dialogues rather than merely benefiting from them.**

### <a id="exchange"></a>An exchange knows nothing

**It is prose, at the level whose parts are sentences.** *A message that runs long is a SEQUENCE of exchanges by one speaker — Doug: "An exchange can have a sequence but generally one per conversation participant."*

**It carries a `$Participant` only where the speaker CHANGES**, the way a play script names a speaker once and lets the lines follow. ***Everything paragraph-grade that stands between — a list, a fenced code block, a heading — belongs to whoever is currently speaking, and needs to say nothing.***

## <a id="nearest"></a>What the framework already has, and it is not owed

> ***Doug:*** **"Maybe there is a clean way for children to grab information from parents or be given etc… based on types… so that the system can work in a more contextual way."**

***It exists.*** **[`reflection.nearest(writing, read)`](../../package/src/utilities/Reflection.tsx) is the walk up the holders, and `book()`, `chapter()` and `holding()` are three one-line uses of it.** *An exchange reaching its conversation is a fourth, written the same way. **No member is owed for the grab side.***

**The GIVE side exists too and is called `supplies`** — *a specification hands parts to their holder, which is how `SectionSpecification` recovers a heading nobody wrote and stands it first.*

## <a id="scratchpad"></a>The cast, and the key — ***Doug, 2026-09-16: "Yes scratchpad might be useful here"***

***His objection was to DECLARING, not to naming.*** **"We can't have each message declaring us"** — *and a citation does not restate its bibliography entry either. It names a key.* **So the participant is declared once and named by key thereafter, which is the shape [`$Citation`](../../package/src/reference/Citation.tsx) and [`$Entry`](../../package/src/reference/Entry.tsx) already have and that the paper already draws.**

```tsx
<Conversation>
    <Participant>[Doug](MY Library Log)</Participant>              the cast, declared once
    <Participant>[Claude](Claude &amp; Our Projects)</Participant>

    <Dialogue>
        <Heading>Ivitivity</Heading>
        <Exchange><Participant>Doug</Participant>Let’s define this word for fun.</Exchange>
        <Exchange><Participant>Claude</Participant>The suffix is two suffixes.</Exchange>
    </Dialogue>
</Conversation>
```

***And the seam that tells a declaration from a reference is already in `$Catalogue` and needs nothing built:*** **written with a link it SAYS one thing and NAMES another — that is the declaration; written bare it is a mention whose copy is the key.** *A declaration `keep`s itself; a reference `find`s. `$Entry` and `$Citation` are two kinds for that reason, and whether a participant needs two or can be one kind reading its own form is the open question here.*

**What document-only requires for this:** *the scratchpad stands on `$Book` today* — `this.book?.scratchpad` is how a citation reaches it — **and a conversation that is only a document has no book.** ***So the per-document scratchpad Doug asked about in [Sprint 59](../projection/65-sprint-59--the-population-that-never-drew.md) — "store them per document? We have the book and we have the document" — is what this design needs, and it is the one framework change it asks for.***

***What the scratchpad does NOT answer is the run*** — *a message of five paragraphs is five exchanges, and naming the speaker on each is naming, not declaring, but it is still five marks where one would do.* **Either the author marks only changes and something fills the rest, or every exchange names its key and the repetition is accepted as the cost of the record being explicit.** *That is the remaining choice, and the cost of the alternatives is where it is paid: **asking upward is per exchange per draw**, and reflection was measured at 43% of the paper's render; **supplying is once at parse**, where the knowledge already lives.*

## <a id="poly"></a>A poly theme world — ***and it costs one line***

> ***Doug, 2026-09-16:*** **"we also need a theme that we will use if one installs the conversation theme. The book would be the ultimate setting but the theme should control formatting for the conversation. We need more than one theme I think for multiple use cases. This might be an argument for a document level theme."** · **"We might need a poly theme world."**

***This is [the two tops he ruled on 2026-09-13](../the-motif/04-themes-per-type-formats-per-instance.md) — `$BookTheme` and `$DocumentTheme` over one base — recorded there as NOT BUILT. A dialogue is the first case that pays for it.***

**Most of it already exists, measured 2026-09-16:**

| | |
|---|---|
| **scoping** | [`$Theme.$register(within?)`](../../package/src/writing/Theme.tsx) — *"registering WITH a scope makes THIS sheet the theme"*. `$Book.$register()` is `$Theme.$register(Book)` |
| **provision** | two lines in [`$Book.view()`](../../package/src/library/Book.tsx) — fetch the sheet, wrap the subtree. Chemistry's context nests, so an inner sheet wins for its subtree |
| **re-dressing** | promised already: *"a book is re-themed by registration, and redraws in the new one"* |

***So a poly theme world is those two lines moved off `$Book` and onto the base, so that ANY kind which registers a theme draws one.*** **A book wears the library's; a dialogue inside it wears the conversation's; and "more than one theme for multiple use cases" is the same registration one rung down** — *a chat dress, a transcript dress, a script dress, chosen by which is installed.*

### <a id="the-line"></a>THE ONE LINE IN THE WAY

```tsx
override get [theme](): $Theme { return this; }     // $Theme, today
```

***A theme's own theme is ITSELF.*** **That is right when there is one and fatal when there are two**, because the trick this whole design leans on is the one [the encyclopedia already uses](02-the-format-and-the-theme.md#trick): **a theme holds RULES and reads VALUES from the theme above it.** *`$BoxFormat` never names a colour — `get border() { return \`1px solid ${this.theme.shade}\`; }`.*

**A conversation theme nested inside a library's theme would ask for `shade` and be handed its own.** ***So the same dialogue could not survive two dresses, which is the entire reason to want a document-level theme at all.***

> ***The change, stated as one thing:*** **a theme must be able to reach the theme it stands inside.** *Everything else is built and has promises on it. Not designed further here — it is `$Theme`, it is foundational, and it is Doug's.*

## <a id="costs"></a>What this design walks into

***A quote, a table or an aside written inside a dialogue is SECTION-grade — a sibling of the dialogue, not beneath it.*** **That is exactly [the `parts()` artifact](../projection/80-sprint-74--conversation-as-a-folder.md#artifact): it survives today only because `above` is declared twice and the parent walk wins.** *Document-only does not cause that defect, but it leans on it harder than the book design did, because a conversation is full of quoted material.*

**And [the one that eats content](../projection/80-sprint-74--conversation-as-a-folder.md#eaten) is in the same place.** *A word-grade writing standing loose in a section takes everything written after it. A conversation is full of inline code, emphasis and links.*

***So document-only does not need `parts()` fixed to be DESIGNED. It needs it fixed to be TRUSTED.***
