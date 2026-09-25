# The Composition Type Hierarchy

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

***Doug's name, ruled 2026-09-11, in place of a method every type carried:*** *"Please get rid of the concept of below and talk to me about replacing it. It sounds like a reflection function."* **"There are 6 levels: Letter–Document, and then Chapter–Book. Reflection can have that memorized. You can figure it out by type inheritance — polymorphism in the type class. The types are annotative, and you should even be able to pass in a different one when you want something to behave like a different type if it supports it."** *And the containment rule:* **"It can be efficient but hardcode it behind functions in reflection. No reflection should happen outside of reflection so that it is contained."**

## <a id="ladders"></a>The two ladders, memorized once

| ladder | levels, bottom to top |
|---|---|
| **text** | Letter · Word · Sentence · Paragraph · Section · Document |
| **library** | Chapter · Book |

**Reflection holds them as data**, handed once from [`$Book.$register`](../../package/src/library/Book.tsx) beside the hierarchy tops it already hands over, because the book is the one file that imports every level without a cycle. Nothing above a chapter composes a document: [the library level stands apart](../writing-a-book/04-the-book-s-little-framework.md#levels), and a chapter means its document by reference.

## <a id="rung"></a>The rung below a kind, by type inheritance

**A kind's level is the first level its type is an instance of, read up the class chain** — a List is a paragraph because `$TypeOfList extends $TypeOfParagraph`, a Row is a section, a Cover is a document. **The rung below is the next level down.** Three functions in [Reflection](../../package/src/utilities/Reflection.tsx) and no member anywhere else:

| function | answers |
|---|---|
| `placed(kind)` | which ladder, and where on it |
| `below(kind)` | the rung below, resolved (next) |
| `beneath(holding, held)` | whether one kind stands at or under another's level |

A composition's `parts()` asks `below()` for what it accepts as a part and what it reduces copy into, and asks nothing else.

## <a id="specialisation"></a>A specialisation is a registration, for A a B is a C

**"You should even be able to pass in a different one when you want something to behave like a different type if it supports it."** That is chemistry's own [representative](../../../chemistry/.lib/composition/11-the-representative.md): `below()` resolves the rung through `$()` in the asking kind's scope, so a kind registers the specialisation it wants its parts to be, in the kind's own file:

```tsx
$(List, TypeOfSentence)(TypeOfItem);
$(TableOfContents, TypeOfSection)(TypeOfRow);
```

A list's copy becomes items and a contents' parts are rows, and each supports the level it stands in for by extending its type. **Measured the day it landed:** the list promise passed with no `below()` in the codebase, and the paper's contents drew its 65 rows in three levels.

## <a id="pointers"></a>Where the rest is

- **What a level IS** — [The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md), the settled account, and *"each type carries the one below it"* in [The Book's Little Framework](../writing-a-book/04-the-book-s-little-framework.md#levels).
- **Why types stay in the block** — *"All types should have their `specifically` run on the class. That is the way multiple inheritance works here"* — the same chapter, and [Shells Over Types](03-shells-over-types.md).
- **The reading that uses the rung** — [`$Composition.parts()`](../../package/src/writing/Composition.tsx).
- **Registration and scope** — chemistry's [The Representative](../../../chemistry/.lib/composition/11-the-representative.md), and where a scope reaches.
- **The sprint that ruled it** — [Sprint 58](../projection/64-sprint-58--the-chapter-that-is-its-view.md).
