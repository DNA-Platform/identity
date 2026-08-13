# The link I built three times

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** research · prior-art-unread · reference · ui · reviewer-as-compiler · demo
- **sprint:** [48 — Subjects and the Library](../projection/06-sprint-48--subjects-and-the-library.md)

---

## Symptoms

- Doug asked for a book's **title to be the interaction**, and pointed at a place where we had already done something similar.
- It took **three corrections** to land. Each round I removed what he objected to and added a different form of the same mistake.
- **No test failed at any point.** The suite was green, types were clean, and the page rendered every time. The only detector was Doug's patience.

## What did not work

- **Round one — separate controls.** Two buttons (*read the shelf*, *see the shelf*) and a running head. Doug: *"I'm trying to get you NOT to litter things with metadata just like I had to teach you not to do with the table of contents."*
- **Round two — the name plus an affordance beside it.** I made the titles clickable but kept an `entry N` label and a caption. Doug: *"You think Wikipedia should not use the name of a person as a link, but needs to add some text that says 'read about the author' somewhere else?"*
- **Round three — the name, dressed as a link.** Dotted underlines on the title and each entry. Doug: *"you are ruining 'The Shelf'… by underlining the title, you are saying it is something other than a title."*

Each round satisfied the letter of the last correction and broke the same law again, because I was **iterating on guesses instead of reading the prior art I had been pointed at.**

## The mechanism

The prior art was two files away and I never opened it.

```tsx
export class $RibbonMark extends $Sentence {   // a reference kind
    view(): ReactNode { return <Ribbon … />; } // that renders ITSELF
}
```

`$RibbonMark` and `$Return` are **subclass-plus-`view()`** — a reference that *is* its own rendering. The table of contents does the same at the row level: `<li>{row.copy} {row.index}</li>` — a reference printing itself, with nothing applied to say so.

So the model's answer to *"how do I make this followable?"* is **nothing**. A cover **is** a `$Reference$<$Book>`; a table of contents **is** a reference and a catalogue. Reference-hood is what a thing already is. Every round I added signal — text, then a control, then a rule under the letterforms — to announce a property the thing already had.

**And the sentence was already in my context.** [Sprint 47's retro](../projection/05-sprint-47--the-catalogue.md), read at the top of the same session: *"References earn their keep when they render themselves — `$RibbonMark` and `$Return` are subclass-plus-`view()`, zero framework change."* Reading it is not the same as consulting it.

## The fix

Remove, do not add. The title is set as a title — its own face, its own size, no border, no `inline-block` wrapper, no label. It is live because it is the name of the thing.

## The lesson, which is about research and not about links

**When someone points at prior art, open it before writing a line.** *"We did something similar there"* is a citation, not encouragement.

And the failure mode underneath, which is the expensive one: **using the reviewer as the search process.** Three corrections spent on something one file would have answered is not iteration, it is outsourcing research to the person least able to afford it. The cost does not show up in a suite — green, typed and rendering the whole way — so **nothing but discipline catches it.**

The check before starting any visible change: *has this been solved here already, and have I read that solution today?* Not *do I remember reading it.*
