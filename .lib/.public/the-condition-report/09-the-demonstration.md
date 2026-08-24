# The Demonstration

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

***The demonstration was [scoped OUT of the audit](01-how-to-read-this.md#the-scope) on 2026-08-23 and is scoped BACK IN on 2026-08-24, by Doug, in the room:*** **"We need to audit the demo and compiler and the demo needs to be zippy."**

*Nine entries were parked under that first scoping and every one still stands. **This chapter is not those** — it is what a first measured pass found, and the finding that governs it is one sentence.*

> ***THE DEMONSTRATION DOES AT RUNTIME WHAT THE COMPILER EXISTS TO DO AT BUILD TIME.*** **Every fault below is that sentence in a different place.**

## <a id="i28"></a>I28 — Every route loaded the whole library · ***partly fixed, measured both sides***

**Measured against the dev server, four routes, cold:**

| route | before | | after | |
|---|---|---|---|---|
| **`/title`** — *four headings, 69 DOM nodes* | ***8,369 ms*** | 169 resources | ***885 ms*** | **51 resources** |
| **`/page`** | ***8,937 ms*** | 172 resources | ***3,091 ms*** | **68 resources** |
| **`/books`** — ***the landing page*** | ***8,724 ms*** | 171 resources | ***8,279 ms*** | **158 resources** |
| **`/`** | ***13,136 ms*** | 171 resources | *as `/books`* | |

***The counts were IDENTICAL across every route, which is the whole diagnosis*** — **a page of four headings fetched the same 169 modules as everything else.** *Grouped, on `/title`: **67 framework · 55 the demonstration's books** · 30 other · 11 node_modules · 1 chemistry.*

**The cause was [`sections/index.ts`](../../package/app/src/sections/index.ts) importing all three sections at module scope**, *and a section imports its books.* ***Only two numbers and a flag are needed eagerly*** — the header's case count and the sidebar's filter — **so the catalogue stays and the component arrives by dynamic import**, which is [the one-door-per-book shape the compiler already emits](../../build/stages/catalogue.ts).

***The metadata now lives once.*** *Each section's `sectionData` block was a second home for the same three fields and is deleted.*

## <a id="i29"></a>I29 — ***The shelf cannot draw a spine without the whole library in memory*** · not fixed

***THIS IS THE ONE THAT MATTERS, and it is a design fault rather than a wiring one.***

**[`the-team/card.tsx`](../../package/app/src/sections/book/library/the-team/card.tsx) builds every card by reading it off the LIVING BOOK:**

```tsx
$(<LibraryCard name="The Algebra of Perspective" … synopsis={line(algebra)} chapters={titles(algebra)} />)
```

*`line(book)` reads the book's synopsis tagline; `titles(book)` reads its chapters.* ***So a card cannot exist until its book does***, **and the shelf — the landing page — waits on 158 modules before it draws one spine.** *Measured: **8.3 seconds to visible.***

***The compiler's generated catalogue refuses exactly this, in its own words:***

> **"NOTHING HERE IMPORTS A BOOK. A card is a book present without the book, and a module that reached for one would be handling the item it stands in for."**

**The compiler reads its cards off living books at BUILD time and emits literals.** *The demonstration has no build step, so it does the same reading at LOAD time and pays for it on every visit.* ***That is the same fault as [I28](#i28), one grade deeper: not a stray import but the card's DEFINITION reaching for the thing it stands in for.***

**Making the four books dynamic was tried and reverted, with the attempt recorded [in the file](../../package/app/src/sections/the-books.tsx):** *requests fell 156 → 84 **and every spine vanished***, because the cards went with them.

***The shape of the fix is already in that same file*** — **`The Team`'s card carries its chapters as literals and takes its book from a `written` slot filled later.** *Four cards need what one already has.*

## <a id="s23"></a>S23 — ***The classes drawer teaches a model the framework no longer has***

**`the classes` on the page demonstration opens a drawer that prints framework source. It prints this:**

```tsx
class $Word extends $Writing {
  divide() { return []; }      // a word is the floor: it holds no parts
  compose() { return this; }   // and composes to itself
}
```

***Every line of that is now false.*** **[`Word.tsx`](../../package/src/writing/Word.tsx) reads `export class $Word extends $Writing<$Letter> implements $Composition<$Letter>`, with a `parts()` that returns letters** — *and the floor is [`$Letter`](../../package/src/writing/Letter.tsx), whose `parts()` returns `[this]`.* **[The floor moved down a grade this sprint](../projection/21-semantics-then-drawing.md#the-floor-closes), by Doug's own ruling, and the drawer was not told.**

***The drawer is a TRANSCRIPTION of source rather than a reading of it***, **which is the demonstration committing [the fault the whole compiler exists to prevent](../../build/stages/catalogue.ts):** *a second reading that can disagree with the first.* **And it is the worst place for it to happen** — *a drawer labelled "the classes" is read as authoritative, so [every place the code says something the theory does not is a place a reader learns the theory wrong](.cover.md).*

**Doug found it by eye:** *"I don't think 'the classes' works in algebra in the demo."* ***The mechanism works in all five lenses — measured — and what it SAYS is wrong***, which is why no gate caught it.

## <a id="o15"></a>O15 — The top bar is a state machine nobody has drawn

***Doug, 2026-08-24: "we need to be very careful with those top buttons that they really work. I am not sure all of them should be available to click in all states. You have a state machine. Be careful."***

**What the bar offers, measured:** `book` · `github` · `night` · `reading` · `compare` · `edit` · `the classes` · `the books →`.

| | measured |
|---|---|
| **`the classes`** | ***works in all five lenses*** — the page grows by exactly 779 characters each time |
| **`edit`** | ***works*** — opens a textarea carrying 3,372 characters of source. **It first read as dead**, because [an instrument counting `innerText` cannot see a textarea's value](../solutions/26-the-red-that-exercised-nothing.md) |
| **`the books →`** | ***a plain `<a href>` — a FULL page load***, not a lens change, and nothing on the bar says so |
| ***what is NOT known*** | **whether every combination is legal.** *Five lenses × three actions, and the demonstration has no statement of which pairs are meant to exist* |

***Nothing is disabled and nothing is marked.*** **The bar presents eight controls as one kind of thing where there are at least three** — *a lens that swaps a rendering, a toggle that opens a pane, and a link that leaves the page* — **and [a count cannot see that](01-how-to-read-this.md#why-no-gate).**

## <a id="dispositions"></a>Dispositions

| entry | ruling |
|---|---|
| **[I28](#i28)** | ***PARTLY DONE.*** *Sections load on demand; `/title` and `/page` are 9× and 3× faster. **`/books` is untouched and it is the landing page*** |
| **[I29](#i29)** | ***THE NEXT PIECE OF WORK, and it is the one Doug is feeling.*** **"the demo needs to be zippy"** — *and it cannot be until a card stops reaching for its book* |
| **[S23](#s23)** | ***A correctness fault in what the demonstration TEACHES***, and it should be found by a gate rather than by eye. *The framework's own source is on disk; a drawer could read it* |
| **[O15](#o15)** | ***Doug's.*** **Which pairs are legal is a design statement nobody has made**, *and it has to exist before a gate can check it* |

***And the pattern across all four is worth stating once more:*** **the demonstration re-derives at load time what the compiler derives at build time, and transcribes by hand what it could read.** *Both are the same mistake — [handling the item the card stands in for](../../build/stages/catalogue.ts).*
