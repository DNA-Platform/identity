# Next and Previous

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***The code is [`src/libraries/Next.tsx`](../../package/src/libraries/Next.tsx) and [`Previous.tsx`](../../package/src/libraries/Previous.tsx); cited here since [Sprint 91](../projection/96-sprint-91--the-comments-leave-the-code.md), so the correspondence checker finds their specifications documented.***

---

## What they are

**A Next and a Previous are words that stand in a chapter and mean the chapter after it and before it — and they are the exemplar of a component that represents a property.** Doug, 2026-09-27: *"we need, where possible, components that represent properties that they have access to. So Next and Previous could reach to their chapter and be chapter references."* And on how they are written: *"make Next and Previous loosely coupled components. They should be exemplars of how to make components that consume properties. It is a component for a type that represents properties, just as an annotation is like a component for a type that confers them."* The property is the chapter's — [`next` and `previous`](02-chapter-and-title.md), the chapters beside it in its book and itself at either end — and the component draws what the chapter answers, in the writer's own words.

| member | what it is | cited |
|---|---|---|
| `Next` · `Previous` | Words — compositions at 2, permissive and open — whose words are the writer's, drawn inside the anchor their Reference lends them | Doug, 2026-09-27, above — [Sprint 86](../projection/92-sprint-86--next-previous-and-the-display-of-chapters.md#u2) |
| `chapter`, Writing's | the chapter it stands in, given or looked up through its parents; none outside a chapter — so a next inside a paragraph inside a section still stands in its chapter. Each word carried its own walk as `chapter` until 2026-09-30, when the reading became Writing's and the two walks went | D2: *"the nearest Chapter above it, a typed property"*; Doug, 2026-09-30: *"we can add a chapter get prop to writing"* |
| `Next.means` · `Previous.means` | the Reference expressed among its annotations, as [Means](../writing/09-word-sentence-and-paragraph.md)'s is; none before the book's bond, and none where the neighbour has no title | R2: *"`means` is their property, as it is Means's"* |
| `Next.$Bound()` · `Previous.$Bound()` | reads its chapter's `next` (`previous`) once the book is whole and, when that chapter's mention stands, adds the one Reference it will draw — a **Self** holding its own chapter's mention when the neighbour is its own chapter, else a Reference holding the neighbour's — defines its annotations, so `means` answers before anything has drawn, and then binds down | D2; the [`$Bound` seam](../writing/06-how-writing-is-extended.md#the-seams); Doug: *"Yes, a Self reference at the ends"* |
| `Next.specification` · `Previous.specification` | `new NextSpecification()`: **a next stands in a chapter**; **a next means the chapter after its own**. `new PreviousSpecification()`: the same of a previous and the chapter before | R2: *"Built outside a chapter, each says so when asked"* |

**So a next is a link to the chapter after, made when the book is whole and not before.** At `$Define` the book is not whole — the chapter's neighbours are not yet its neighbours — so nothing is read there; at `$Bound`, the one seam that sees the whole book, the component asks its chapter one question, `next`, and makes the one thing it draws. At the end of the book the answer is the chapter itself, and the Reference is a Self, which wears `pa-self-reference` and draws without an underline. Nothing of the book's order is computed here, nothing is stored, and the component never touches the router: the address it links is the one the compiler wrote into the neighbour's title.

### In use

```tsx
// manual/3-the-masthead-and-the-byline.code.tsx — a resource of the test library, beside the running head
export class $PreviousTitle extends $Previous {
    override write(): ReactNode { return this.chapter?.previous.title?.name; }
}

export class $NextTitle extends $Next {
    override write(): ReactNode { return this.chapter?.next.title?.name; }
}

export class $Catchword extends $Paragraph {
    $Catchword(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.text.add(this, <PreviousTitle />, <NextTitle />);
    }

    override write(): ReactNode {
        const [Previous, Next] = [...this.text].map(chemical => $(chemical));
        return (
            <>
                <Previous /> · <Next />
            </>
        );
    }
}
```

**The test library's catchword stands at the foot of every chapter of every book, `<Catchword />`, and shows the neighbours' titles** — the word at the foot of a page that anticipates the next, from the book arts. Its two words are a Previous and a Next that draw the neighbour's title in `write()` instead of what was written in them, which is the resource's business and not the component's (D4); its bond adds them to its text, so the book's bond binds them and their References are made. At the argument's foot the Next reads *The Evidence* and links to `/a-paper/#the-evidence`, the evidence's fragment of the paper's one page since [Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#d1); at the evidence's it reads *The Evidence* again, a self-reference, drawn without an underline. *The compiler changes nothing for any of it (R3): a next is the url the compiler already wrote into the next chapter's title, and no notation names one.* In Libby's synopsis chapter the catchword is written once and stands twice — on Libby's own page, and in the library's catalogue chapter that imports that synopsis, where it finds the catalogue's chapter above it and reads the library's neighbours.

## How they are extended

- **A component that represents another property copies the four moves**, which are the whole of the class: a typed reading of the writing that holds the property (`chapter`), one name read of it (`next`), the one thing it draws made at `$Bound` and defined there, and `means` answering the made thing. The test library's [running head](../../package/.binding/.test/manual/3-the-masthead-and-the-byline.code.tsx) is the hand-written case before this one, a paragraph reading its book's title and table in `write()`; the pattern stands as a row in [How Writing Is Extended](../writing/06-how-writing-is-extended.md#the-seams).
- **What is shown is the writer's.** A subclass that wants the neighbour's title draws it in `write()`, reading `this.chapter?.next.title?.name` — the catchword's business, and not the component's (D4).
- **A subclass never computes the book's order**, never stores the neighbour, and never reads at `$Define`. The property is the chapter's; the component only represents it.
- **A property of a library's own type of book** — an author who gives their chapters a `part`, say — gets its component the same way, in the library's own files, with no change here.
- **This is the pattern for anything that sits in front of the object graph.** Doug, 2026-09-27: *"Next and Previous should be taken as great examples of how things can sit in front of the object graph."* The graph is the book: gettable, reactive properties on typed writings — `chapter.next`, `book.table`, `title.means` — reached through the type hierarchy and the annotations a writing carries. A component in front reads one property and draws it; it computes nothing, stores nothing, and changes when the graph does. The test library's catchword is the whole of it in two lines, [The Object Graph](../writing-a-book/03-the-object-graph.md).

## Promises

Five in [`.tests/next-and-previous.test.tsx`](../../package/.tests/next-and-previous.test.tsx): in a chapter, a next means the chapter after it and a previous the chapter before, each a plain reference and the chapter's specification clean; at the end of the book a next is a self reference to its own chapter, and at the start a previous is, each wearing `pa-self-reference`; inside a paragraph inside a section, still standing in its chapter; drawn, its words inside an anchor to the neighbour, and a self reference's inside one to its own chapter; built outside a chapter, or bound where the neighbour has no title, saying so when asked. One in [`.tests/renders.test.tsx`](../../package/.tests/renders.test.tsx): a book whose chapter ends in a next draws and paints exactly as one whose chapter ends in a means.

## Gate

Committed as `7aed256`. Measured 2026-09-27, Sprint 86's U2: the package typecheck 0 errors and 259 of 259 across nineteen files; the compiler's suites unchanged in number, the unit suite 98 of 98 and the regression 26 of 26. **The catchword in the test library, U4:** the compiler's typecheck 0 errors, unit 98 of 98 and regression 30 of 30 — the argument's Next linking the evidence, the evidence's a self-reference, and in Chrome the self-reference drawn without an underline beside a Previous with one; the paper's argument served at `/a-paper/the-argument/`.

**Names.** Doug's: `Next`, `Previous`, `chapter` and `means`. Ours, flagged: `NextSpecification`, `PreviousSpecification`, and the rules `$standsInAChapter`, `$meansTheChapterAfter` and `$meansTheChapterBefore`. The chapter's `next` and `previous` they read are his too, the plan's names — free since chemistry's lifecycle `next` became an exported symbol on his ruling, [A Clean Surface](../../../chemistry/.lib/projection/48-sprint-87--a-clean-surface.md), the proxies `after` and `before` of the hours between gone.
