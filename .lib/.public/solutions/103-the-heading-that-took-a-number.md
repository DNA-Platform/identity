# The Heading That Took a Number

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **keywords:** library · tooling · wrong-altitude
- **sprint:** [Sprint 100](../projection/105-sprint-100--the-big-plan.md#where-things-stand)

---

## Symptoms

**A bind that had passed a minute before failed its proof with twenty-nine faults, every one a link to a place in the design book that no longer answered — after the only change was a number written into each concept's heading.**

```
dougs-design/index.html — a link addresses /dougs-design/#the-map, and nothing on dougs-design/index.html answers to #the-map
dougs-story/index.html — a link addresses /dougs-design/#the-reading-view, and nothing on dougs-design/index.html answers to #the-reading-view
the pages are not readable — 29 faults in dougs-library/index.html, dougs-design/index.html, dougs-story/index.html, dougs-reference-manual/index.html
```

*The change was `<Heading>[[[ The Shelf ]]]</Heading>` made `<Heading>1 · [[[ The Shelf ]]]</Heading>` in twenty-five sections, on Doug's word that the concepts are spoken of by number and the number should stand on each card.*

## What it turned out to be

**A place's address is made from the whole text of its heading, not from the words inside the brackets.** The bracket says the heading *is* a place; the address of the place is the heading's name, which is all of it. So *1 · The Shelf* answered to `#1-the-shelf`, and every reference written `$[[ 1 ]]( ./The Shelf )` still resolved at the catalogue — the name *The Shelf* was still the mention's — and then found nothing at the address the page printed. The catalogue passed and the proof refused, which is the proof doing its job: it reads the built page back as the browser will.

**The fault was mine, at the wrong altitude:** the number is content, and content was written into a name.

## How it was found

By the proof, in the first bind. Nothing was looked at; the twenty-nine faults named the addresses, and the change was reverted with one substitution.

## Why no gate caught it earlier

None was meant to: the catalogue's rules are about the notation, and the notation was well formed. The gate that catches a printed address nobody answers is the proof, and it did.

## The repair, and the rule it leaves

**The number is drawn where the section says it is a concept, as the note of that saying.** `$Annotation.note()` is the framework's own seam for an annotation that draws something where it is written — `$Content` draws its name that way — and `$Concept.note()` now draws its number as a `span.pa-number`, which the gallery places before the name. The heading keeps its name, and so its address.

**The rule:** *a name holds nothing but the name.* Anything a reader should see beside a name — a number, a count, a mark — is drawn by the thing that holds it, never written into the name; a heading that is a place is an address, and an address is spent by every link to it.
