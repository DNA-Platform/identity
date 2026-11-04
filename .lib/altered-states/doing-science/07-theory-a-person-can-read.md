# Theory a person can read

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

Doug's brief for written theory, 2026-11-03, given while asking for the sinusoidal derivation as one readable chain
(it became Result 41 of the research results book). A figure is read by a person who cannot ask questions; so is a
derivation. The same discipline that chapter 3 states for figures, this chapter states for mathematics.

## Readability is a correctness requirement

Doug: *"Derivations and deductions have aesthetics which make them clear. ... Sure any proof or derivation that is
valid is good enough, but if it takes me 1000 years to understand assuming only that I am human, then practically
speaking, it is not a proof a human can read. We have computers, but humans don't have access to them while reading a
paper. It is your job to build a library of results that are tended to like a garden for correctness and readability.
An unreadable or hard to read result for a human is a logical inconsistency based on the semantic requirement for
results to help humans identify truth."*

The practice: a result has two obligations, to be true and to be checkable by a human in human time. Meeting the
first and failing the second is a failure of the result, not of the reader. Tending the results book means editing
old chapters for readability with the same seriousness as for correctness.

## Prose carries the reasoning; display is reserved

Doug: *"present your reasoning in English, use the form of the equation, and every so often, present new very
beautiful and simple expressions that show something about our representation and how it can be transformed, or an
equation to perform the transformation - usually in the form of an equality."*

The practice: the argument lives in sentences. An equation earns a display line only when it shows the representation
or transforms it, and the best displays are equalities: two forms of the same object, the move visible. This is the
figure rule in another medium: one idea made visible, never a plate of them.

## The visual grammar of mathematics

Doug, after I pasted the derivation into chat as numbered paragraphs with the equations run into the sentences:
*"Especially with math, paragraph form is bad. ... Think latex documents. Important equations are on their [own line]
with space all around. There is a visual language to math. Math is a semi-visual language with notation that composes
and reading it is hard. You are not writing legibly if you don't use the visual grammar. Definitions and theorems are
important too. Lemmas corrolaries when we are being more formal. References to related work when used."*

The practice: an important equation is displayed alone, blank space all around it, never inline in a sentence.
Definitions and theorems are labelled blocks, set apart, as LaTeX environments are. Lemmas and corollaries appear
when the register is formal. A borrowed theorem carries its reference at the point of use. Notation composes, so the
reader parses it visually; running it into prose removes the layout that parsing depends on. Paragraph-form math is
illegible, which by the first section of this chapter makes it incorrect.

## Chat is a document

Doug: *"I would like you to use more spacious formatting when talking to me. ... I described how it should work,
[b]ut you want to use the same structure here."*

The practice: the representation rules are not per-medium. A synopsis of a result in chat uses the same structure as
the document it summarizes: the destination stated first, named steps, every load-bearing equation displayed alone
with space around it, definitions and theorems as labelled blocks, licences in the prose between them.

He then sent a screenshot of the Result 41 synopsis as his chat rendered it, *"This will help you see through my
eyes. Take note of all the ways it different from a correct synopsis of a result."* The differences:

- **Display math inside a list item does not render.** He saw raw LaTeX source where the equations should be, the
  worst outcome: the reader is handed code. A display block must stand alone as its own paragraph, a blank line
  before and after, never inside a list or a quote.
- **Numbered lists compress.** The steps became one cramped list with no air. Steps get bold names on their own
  lines, with space, never list items.
- **Two equations crammed into one display.** The seat and the obstruction shared a line joined by a `\qquad`; each
  important equation gets its own display.
- **Load-bearing equations left inline.** The final form and the stall's inequality sat mid-sentence in a dense
  paragraph; anything the derivation turns on is displayed.
- **Definitions and theorems as running prose.** The criterion and the obstruction read as sentences in a paragraph
  instead of labelled, set-apart blocks.
- **Housekeeping mixed into the opening.** Which files were updated shared a paragraph with the mathematics; the
  synopsis starts clean, bookkeeping goes elsewhere.

His feedback on the re-set synopsis finishes this section.

## Licensing conditions stay in text

Doug: *"When talking about theorems that are more like properties required to apply theorems, talk in text."*

The practice: hypotheses, regularity, domains, the conditions a theorem needs before it applies, are said in words
inline, never displayed. Display is for content; text is for licence. A reader skimming the displays should see the
derivation's forms, not its bookkeeping.

## A derivation is a sequence of forms

Doug: *"you show me how the derivation works with a sequence of steps that constitutes a derivation of the final
form"*, and *"you want to express intermediate forms to get there."*

The practice: name the starting form and the final form first, then walk from one to the other so that every step
rewrites the same object. The reader should be able to diff consecutive displays and see exactly what changed and
why it was allowed to.

## Cited results are summarized at the point of use

Doug: *"You would love to find concrete results that make the progression to the final form clear, but you have to
summarize how the result applies in the derivation and provide intuition for it."*

The practice: never a bare citation. Each result used gets one line of what it contributes at this step and one line
of intuition for why it is true, in place. This is the lexicon rule of chapter 4 applied to theorems: define every
term, and every result, on first use.

## An appendix defines the objects

Doug: *"In the results documents, I want you to write an appendix section with definitions for all the important
functions and theorems used in the result with references. I need the notation and intuition and intuition might be
given with related equations or theorems if simple enough. Otherwise, getting the feel of the pattern through a
description of a canonical example or thought experiment that motivates it."*

The practice: a result that leans on outside mathematics carries an appendix, one entry per object: the notation, the
reference, and the intuition. The intuition is a related equation or theorem when one is simple enough to carry it;
otherwise a canonical example or a thought experiment that motivates the pattern (the clock hand with no favourite
hour; the temperature fixed on a ring). Result 41's appendix is the model. The same applies to an analysis document
that leans on borrowed estimators: define each one where the reader will need it, with the feel of why it works.

Doug, continuing: *"Also add links in the markdown to the definitions and theorems near where they are used for easy
navigation. Outside links to wikipedia pages or other trustworthy sources is valuable too."*

The practice: three layers of links. The body links to the appendix entry at its point of use, so the entries are
headings and anchor. Every result or chapter number in the text is a markdown link to its file. Each appendix entry
links outward to a trustworthy page, and every outside link is checked to resolve before it ships: when I built
Result 41's appendix the Fejer-Riesz page did not exist on Wikipedia, so the entry says so and names the book
instead. An unchecked link is a claim about the world made without looking.

## Short is part of correct

Doug: *"But we want this to be a short thing, not a long paper."*

The practice: his reading time is the budget, the same scarce thing chapter 1 names. A derivation that could be a
page and is ten has spent his time on my organization. Length is a choice to justify, not a default.

## What carries beyond this derivation

The brief came for one piece of mathematics, but each rule abstracts:

- **Any analysis writeup**: the reasoning in prose, the displays reserved for the few numbers or identities that
  carry the claim, the methods conditions in text. A results section is a derivation of the conclusion from the data.
- **Any library of results**: numbered, stable, statuses honest, edited like a garden, with the catalogue stating
  each result's one-line contribution so a future reader can walk the chain without opening every chapter.
- **Any use of someone else's theorem or method**: summarize what it does for us where we use it, with the intuition,
  never a bare name and year. The reader of a lab report has no more access to Garnett than Doug has to a computer
  mid-paper.
- **Any final form**: state it first or state it as the destination, so the reader always knows what the walking is
  for.
