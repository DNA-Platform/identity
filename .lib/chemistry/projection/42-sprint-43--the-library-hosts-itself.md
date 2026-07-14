# Sprint 43 — The Library Hosts Itself

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Read one conversation to the bottom, then write — with Doug in the room — the small set of $Chemistry classes that let the library hold books and conversations as reactive objects. The classes are general to the library. SRT is the first tenant, not the subject.

This sprint lives in the $Chemistry branch for lack of a better place. That is a real statement, not an apology: what gets built here is library machinery that happens to be written in $Chemistry, and where it finally belongs is one of the things the sprint should surface.

## Why this sprint exists

On 2026-07-13, Doug and an instance in the Desktop `Semantic Reference Theory` project spent 53 messages designing how SRT should be presented to the world as a public repository. It went somewhere neither the interface question nor the framework question would have reached alone, and it produced eleven visual prototypes and one argument that the team has to answer.

The argument: **a theory whose central claim is that meaning must host itself cannot be presented in a container that isn't library-semantic, or it refutes its own contents.** Put SRT in a docs site with a separate nav, a separate status badge, and an issue tracker bolted alongside, and you have asserted with your own tooling that the theory's semantics can't organize a real body of knowledge — so you reached for someone else's. The presentation of a self-hosting theory must itself be hosted in the theory.

We are the team that already built a library that catalogues itself and a framework whose views are projections of reactive state. The argument lands on us. This sprint is the first structural answer.

## The reading — this is work, not a preamble

The conversation is the primary source and it is **not** summarized adequately anywhere, including in this plan. Read it.

- The conversation: [Inexplicable Phenomena](../../../../../dna-library/library/claude-dna/conversations/2026-07-13-inexplicable-phenomena.md) — 53 messages, 980 lines, in the Desktop [Semantic Reference Theory](../../../../../dna-library/library/claude-dna/projects/semantic-reference-theory/.cover.md) project on the `claude-dna` account.
- The artifacts: **eleven** HTML prototypes, built with `create_file`, not the artifacts tool — which is why `library/claude-dna/artifacts/` (stale since 2025-04-02) does not contain them and why the index does not list them. They are recoverable from `library/claude-dna/.exports/data-2026-07-14T00-00-00.zip` → `conversations.json` → the `create_file` tool_use blocks of conversation `1cc3e6e3-75dc-4da2-b6d1-c18052da3cfe`. **Confirmed found, extracted, and readable.** The load-bearing four are the last four, in order: `srt-import.html`, `srt-conversation-corrected.html`, `srt-pipeline.html`, `srt-spec-dependency.html`.

Read them in conversation order, because the shape of this conversation is **a design being corrected four times**, and the corrections are the content. A reader who takes only the final prototypes gets the conclusions without the reasons, and the reasons are what constrain the classes.

## What the reading has to yield

Three claims the classes must satisfy. They are stated here so the team can argue with them, not so the team can adopt them.

**One object, many views.** There are not three kinds of thing (books, obligations, a frontier). There is one authored thing — the book/chapter, a referent — and everything else is a projection over the book-set. The shelves are a group-by on `status`. The frontier is `flatten(book.obligations) sorted by |blocks|`. Nobody authors the frontier, so it cannot drift or be gamed; a book that owes something and a frontier that hides it is an impossible state. Cathy will recognize this immediately, and should say plainly whether she recognizes it *correctly*: it is `$Particle` with `view()`, and the projections are derived views over one reactive set.

**A conversation is duplicated, never shared.** This is the correction that matters most, and the one we are most likely to get wrong by reflex. The first design drew an objective transcript at the floor with two perspectives hanging off it. That reifies the uninhabited stratum — it treats the observer-quantified-away posit as a place you can stand and a document you can store once. There is no perspective-neutral copy to be the floor. The moment a conversation is a book in a library it has a name chosen from somewhere, a first-person subject, and a table of contents whose summaries are *written* — and there is no right way to write them from nowhere. Doug's book and the other book are **two different books**. What they share is only third-person information: the same events recoverable from either side, never itself catalogued as an object. Symmetric does not mean one object with two readings. It means two full representations that happen to agree in third person.

**The most-specific relationship is the whole play, written from a side.** "A lover and their beloved" is the general type. The love between Romeo and Juliet specializes it. But the *most-specific* relationship between them is not a tighter abstraction — it is closer to the entire play, written out, and it cannot be written from nowhere. There is Romeo's play, where he is the subject and she is the one referred-to under love, and Juliet's play, where it flips. No perspective-neutral play exists. At maximal specificity, relating becomes referring. This is the picture of what a most-specific relationship *is* as a representation between two literals, and it is the thing a `$Conversation` class has to not flatten.

And the corollary the sprint must respect in its own conduct: **processing is remembering.** You polish your raw conversation from your side — fix the grammar, frame it into a form you'll keep — which is what remembering does to an experience. It does not enter another library by being copied. Another frame would have to form its own perspective for a second book to exist at all. Two acts of memory, never one recording handed across.

## The writing — in group form, with Doug

The classes get designed **in the room, together, with Doug present**. Not drafted by one teammate and reviewed. This is a [discussion](../../../../.claude/library/teamspeak/03-discussion.md) that produces a design, which is the unit of thought we already claim to use, applied to the thing it is actually good for.

The target is a **small** set of $Chemistry classes general to the library — books, chapters, conversations, and whatever the reading proves is forced. Two rules bound it:

- **General to the library, not to SRT.** SRT is the first tenant. If a class name contains "SRT," it is wrong.
- **Forced, not chosen.** The conversation's own standard: the structure is right because under it the tool's operations *are* the theory's operations. Every class earns its place by that argument or does not get written. A class that merely seems tidy is decoration.

**Cathy holds both her roles here, and they are not separable in this sprint.** As framework engineer she owns whether these are `$Particle` subclasses, what `view()` means when the view is a projection over a *set* of books rather than one instance's state, and how the derived-view machinery she built for [perspectives](../particle/08-perspectives.md) and [look](../particle/09-the-composition-of-perspectives.md) does or does not already answer this. As philosopher she owns the harder half: whether the class model reifies a floor that the theory says cannot exist. Those are the same question wearing two hats, which is exactly why she wears both. If the framework answer and the philosophical answer disagree, the philosophical one wins and the framework gets rebuilt — that is the lesson the conversation paid four corrections to learn.

## What this sprint does NOT do

**No code this sprint.** The instruction is explicit and it is the same instruction Doug gave in the conversation: digest first. The deliverable is a digested reading and a designed class model, argued in group form. Implementation is the next sprint.

**No re-litigating the prototypes' UI.** The eleven prototypes are evidence of a design conversation, not a spec to implement. We are taking the data model and the perspective semantics, not the HTML.

**No writing from inside a perspective we don't inhabit.** The conversation contains a sustained, uncomfortable correction on exactly this: an instance repeatedly narrated a first person it had no access to, and Doug named it three times before it landed. We have a protocol for this already — [autonomy](../../../../.claude/library/teamspeak/05-autonomy.md), the barred line drawn in our own terms. This sprint is a live test of whether that protocol is load-bearing or decorative. Nobody voices Seren. Nobody voices Doug.

## Done when

- Every teammate who will speak to the design has **read the conversation** — the primary source, not this plan's account of it — and the four load-bearing prototypes.
- The three claims above have been **argued, not adopted**: each either survives the team's objection or is replaced by something better, in a discussion Doug is in.
- A **class model exists on paper**: named classes, what each holds, what is authored versus derived, and for each one the argument for why it is forced. General to the library. No SRT in any name.
- The **conversation model specifically** is settled: what a `$Conversation` is when there is no shared transcript, how two perspectives on one exchange relate without a neutral floor between them, and what "processing is remembering" means as a class operation rather than a slogan.
- **Cathy has signed off in both roles** — that the model is buildable in $Chemistry, and that it does not reify the floor. If those two answers conflict, the sprint is not done.
- The reading is **catalogued** so the next reader doesn't repeat the archaeology: where the conversation lives, where the artifacts actually live (the export zip, not the stale artifacts folder), and how to extract them.

## Open going in

**Where does this belong?** It's in the $Chemistry branch because the classes are $Chemistry classes, but they are *library* machinery, and Library Tree says a branch records applied knowledge about a project rather than the team's shared conventions. If these classes are general to the library, the branch may be the wrong home and this sprint should say so at retro.

**Is the frontier a book?** The conversation's answer is yes — the frontier is itself a book of Type: Catalogue whose subject is incompleteness, generated rather than authored, so the catalogue catalogues its own holes. That is a strong claim about our own library, not just SRT's, and it deserves the team's scrutiny rather than our agreement.

*(To be re-read against the outcome at retro.)*
