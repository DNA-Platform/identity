# The Back of the Page

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)

---

*(**Doug's, 2026-08-22 — and corrected by him on 2026-08-23, when this chapter had begun formalizing it:** *"The back of a page is not literally the back of a page… It is another view. Possibly a perspective, but **it's not formalized. It is something an implementer implements and it has no default.**"* **So what follows is one paragraph of what he described and one measurement. Nothing here is a design, and nothing is proposed for the framework.**)*

## What he said

> *"I like the idea that **there is a back to every page**. You can count sections, paragraphs, words, **the subject spine**, attributes… not literally those in every circumstance but information like that, and **that is a completely different view of the same page or book or whatever**."*

**An implementer builds it. The framework ships no such thing, offers no default, and does not name it.**

## The one thing worth recording, and it is a measurement

***Everything such a view would show is already a member.*** **A view that has to derive its own facts is [a second population of the model wearing a data structure](04-ways-of-reading.md#a-third-law-a-view-reads-it-does-not-re-derive); this one derives nothing:**

| it would show | asked as | where it already lives |
|---|---|---|
| how much writing | `sections` · `paragraphs` · `sentences` · `words` · `letters` | [`$Book`](../../package/src/book/Book.tsx), five getters |
| the subject spine | a book's subject, and its subject's | the cards |
| the attributes | `author` · `subject` · `canonical` | `$Cover`, already |
| the links | `words.filter(w => w instanceof $Link)` | once [`$Link` is phrasal](../the-condition-report/04-semantics.md#s18) |

***So it costs a `view()` and nothing else*** — **no member is added to any class to support it**, which is the only property that made it worth writing down at all.

## And what it settles about ANNOTATIONS, which are the framework's

*Doug, in the same message: **"Attributes are the kinds of phrases on a page that we might want to pull out."*** **That sentence is about the model rather than about any view**, and it is [ruled and recorded where it belongs](../the-condition-report/04-semantics.md#s17): **an annotation is a phrase that is about its page rather than part of its reading** — word grade, parenthetical, enumerable.

***So an annotation does not need to reveal anything.*** **It needs to be findable, and it already is.** *Whatever an implementer builds to look at it is theirs.*

## The mistake this chapter made, kept because it is the useful part

***The first draft named it, offered a word from the printing trade, argued which levels should have one, and asked how a reader turns to it.*** **All four are formalization, and the correction is that there is nothing here to formalize.**

**The general form is worth more than the chapter:** ***when Doug describes something he would like to SEE, the answer is what an implementer can build out of what exists*** — **not a class, not a name, and not a place in the hierarchy.** *[The twenty ways to extend a book](../projection/18-the-theme.md#twenty) were read correctly that way; this was not.*
