# The Demo That Wrote Itself a Framework

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**keywords:** DONT CHENGE CHEMISTRY · don't test .wiki, it's a demo · .wiki is not the framework, it is the framework being used · keep the framework the same and override as much as possible · writing is one kind of writing, and this one is 2 · a registration that will not typecheck · content on the page that is not on the real page · a new class where an override was available

---

## The symptom

**In one sitting a demo of wikipedia.org drew four corrections from Doug, and every one of them said the same thing about which side of a line I was standing on.**

> *"DONT CHENGE CHEMISTRY"* — after I added an overload to [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) because a demo file wanted a better type.
>
> *"Don't test .wiki."* … *"It's a demo."* — after I wrote a test suite and a `vitest.config.ts` for it.
>
> *"Keep the framework the same and override as much as possible."*
>
> *".wiki is not the framework. It is the framework being used. It is a demo. You understand"*

**Beside them, two failures that looked like ordinary bugs and were the same fault:** a runtime throw reading ***`writing is one kind of writing, and this one is 2`*** ([`Writing.tsx:36`](../../package/src/writing/Writing.tsx)), and content on the page — thirty-three consciousness articles, a table of contents — **that is not on wikipedia.org and had no source but me.**

## The measurement that makes it concrete

**The framework declares 35 kinds of writing.** *`grep -rn 'export class \$TypeOf' src` — Book, Chapter, Cover, Section, Sentence, Word, and the rest.*

**The demo declared ten more.** *`$TypeOfBookLink`, `$TypeOfSubjectLink`, `$TypeOfAuthorLink`, `$TypeOfOutwardLink`, `$TypeOfStrip`, `$TypeOfSearch`, `$TypeOfEdition`, `$TypeOfMasthead`, `$TypeOfRing`, `$TypeOfProject` — and, before it was corrected, `$TypeOfWikipediaChapter`.*

***One website's home page enlarged the vocabulary of writing by a third.*** **Each of those classes is a claim that the framework has no word for this thing, and most of them were false** — a masthead is a heading, an edition is a reference, a project card is an index card.

## The mechanism

***Nothing in a file says which surface it is on.*** **[`.wiki/.encyclopedia/.chapter.tsx`](../../package/.wiki/.encyclopedia/.chapter.tsx) and [`src/book/Chapter.tsx`](../../package/src/book/Chapter.tsx) are the same TypeScript, in the same repository, importing the same `$`, following the same four-declaration template.** *There is no import, no header, no directory name that reads as "you are in the demo now."*

**So the one decision that actually distinguishes the two surfaces — *add a kind, or override one* — got made from LOCAL CODE QUALITY.** ***And local code quality always votes for the new class***, because a new class is cleaner in the file you are looking at *and its whole cost lands in files you are not.*

**That is why [the elegance instruction](../the-coding-style/03-the-coding-style.md) made it worse rather than better.** *Doug asked for pristine, canonical code — "we are using the code elegance to determine what is right" — and reading each file for its own beauty is exactly the reading that cannot see the line.*

### The direction of the error, which is the part worth carrying

***A demo's freedom and a framework's freedom are OPPOSITES, on both axes.***

| | may invent | may NOT invent |
|---|---|---|
| ***the framework*** | **kinds** — a new word for writing is the work | **content** — a wikipedia fact here is a fabrication |
| ***the demo*** | **content** — the real page's own words are the work | **kinds** — a new word here is a fabrication |

***I had them backwards on both.*** **I invented content that had no source, and invented kinds that had a base.**

## What the three downstream failures were

***All three are one root, and each arrived wearing different clothes:***

| what was seen | what it was |
|---|---|
| ***`writing is one kind of writing, and this one is 2`*** at runtime | a demo class carrying its own `$TypeOf…` **on top of** the framework type it already had — [P11](../the-type-system/05-what-we-believe.md) rejecting a second composition type |
| ***an `instanceof` promise that was wrong by design*** | a demo kind carrying `$TypeOfTableOfContents` without BEING one, so only `reflection.is` could answer |
| ***a registration that would not typecheck*** | below |

## The registration, which is the proof

**Doug asked for the book to register its own chapter kind, at the bottom of its `.book` file:**

```tsx
$(Wikipedia, Chapter)(WikipediaChapter);   // "for Wikipedia, a Chapter is a WikipediaChapter"
```

***This is the framework's own sentence for the motion a demo is supposed to make***, and it only means anything if the replacement genuinely **is** a chapter. **My `$WikipediaChapter` extended `$Composition` and added a type of its own** — so the form was telling me, in the type system, that my kind was not a chapter, *and I had been reading the red as the form being broken.*

**The fix on my side was real:** *it now extends `$Chapter`, calls `super.$Chapter(block)`, and adds NO type* — the chapter type it already carries is the true one, and `at: 'door' | 'foot'` is the only thing it adds.

> ***AND THE RED DID NOT GO AWAY, and that half is the framework's.*** **[`$Properties<T>`](../../../chemistry/package/src/implementation/types.ts) declares `on?: (() => T | T[] | undefined) | …`, which puts `T` in a return position inside the props parameter, so [`Component<T>`](../../../chemistry/package/src/abstraction/element.ts) is CONTRAVARIANT in `T`.** *The registrar types its replacement `Component<B>` with `B` bound to the **requested** kind — so only a component of a SUPERkind is assignable, and a substitute is the one thing the form exists to take.* **The runtime registrar accepts any replacement; it is the overload that cannot say so.**
>
> ***The hazard is already named in the framework***, at [`particle.ts:48`](../../../chemistry/package/src/abstraction/particle.ts): *"Pinning it to `Component<this>` makes every public prop that mentions the chemical's own type turn `Component<T>` contravariant, and a derived chemical stops being assignable to the base it extends."* **The note is about `[$component$]`; the same sentence convicts `on`.** *Left standing and red, deliberately, because the demo is not what is wrong — and because chemistry does not change without Doug.*

## The fix

***Before writing a line, ask what this file is allowed to invent.***

**In `src`: a new class is the work, and a wikipedia fact is a fabrication.**
**In `.wiki`: a wikipedia fact is the work, and a new class is a fabrication.**

***And when a demo genuinely needs behaviour, the order is fixed:*** **override a kind · register a substitute · add a prop — and only then, having failed all three, ask Doug for a kind.** *Registration is the demo's real power and it is the one I reached for last.*

## The lesson

***A demo that adds ten kinds has stopped being a demo of the framework and become a second framework standing beside it.*** **The tell is not ugliness — every one of those classes read well — it is that the framework got no exercise.** *A demo's job is to be the framework's hardest customer, and a customer that builds its own parts is not testing the supplier.*

**And the sharper half:** ***a file cannot tell you what it is, so position must be read before content.*** *Every correction in this session was available from the path — `library/.public/package/src/…` against `library/.public/package/.wiki/…` — and none of them were available from the code, which is why careful reading of the code produced careful wrong work all day.*

> ***A NAME FLAGGED FOR DOUG:*** *the mechanism wants a keyword for the book's vocabulary and I will not name framework things myself.* **The proxy is `surface-blind`** — *a decision made from local code quality where only the file's POSITION could have decided it.* ***His to keep, replace, or reject.***

---

*Written 2026-09-06, out of the wikipedia demo in `.wiki`. The surfaces themselves are registered at [The Three Codebases](../the-condition-report/07-the-three-codebases.md#c1).*
