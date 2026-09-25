# How Writing Is Extended

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***The chapter's name is a PROXY; Doug's to rename.***

---

**The extension plan for the root class, written before the class is called done.** Doug, 2026-09-21: *"Before we are done with writing, I want us to have a documentation plan. I want us to note how we expect it to be extended — it is so important to have an extension plan for polymorphism in this framework."* This chapter says where a subclass reaches into Writing, what it must never do there, and how the Genesis's own classes are expected to arrive through those seams. It is the documentation plan's first instance: every core class gets a chapter of members cited to their events, this section on how it is extended, its promises and its gate, edited at every pass, with the questions asked in the code resolved into it and struck from the file.

## The seams

**A subclass reaches Writing at exactly these places, and each is a Genesis word or a framework shape.**

| seam | what a subclass does there | the rule it is under |
|---|---|---|
| **`$Define()`** | stands the class's own annotations, and **is called after the contents are made and before the annotations the caller wrote are added** — so it can read `this.contents`, and it cannot see what was given. What it stands is added through the collection's `add`, which means the front, and the written annotations are prepended after it, so they land in front of the class's and the caller overrides the class. [The seam, what it may read, and the shape that was reversed](#define) | ruled 2026-09-22: *"the $Redefine method on writing, called before define to ensure that all changes happen before define"*; ruled 2026-09-24: *"$Define should be called last, right before define on the annotations. That is just a bug"* and *"They can't see what is given. This scope doesn't access those args. If they need that they should override the bond constructor"* |
| **its bond constructor** | names it after itself — the framework finds a class's bond by its own name and walks up when there is none — calls Writing's bond first, which sorts what came in, redefines and defines, and then does what is not about annotations, a container of its own or a canonical moved first, and nothing the base predicted for it | *"the writing bond constructor can be called at the start of every other class's bond constructor"*; *"Let each class use its genome as it sees fit"* |
| **a question of its own** | a subclass that means something by an annotation asks its collection by type, `this.annotations.contains($Cover)`, where it needs the answer — in its view, its bond, or a rule — and never keeps a field for it | *"in writing, we can check for the presence of the… attribute"*; *"Do not take a type question and turn it into a flag"* |
| **`defines(writing)` and `erase(writing)`** on an annotation | `defines` acts on the writing when it defines itself, at its bond and at every draw; `erase` takes back what `defines` did, and every define calls it first on every annotation that ran in the last one, last first, whether it is still there or not; a sibling is taken out of expression by asking the collection, `writing.annotations.express(annotation, false)`, and only one that has not run can be reached; neither touches the list  | *"a method that takes the thing and actually performs an action"*; *"What they can do is be idempotent"*; *"living in small families and being well-documented on mechanism"* |
| **`specifies(writing)`** on an annotation | weighs in on the binder's assert with the annotation's own specification of the writing it stands in — a cover only on a chapter, a Summarized demanding a summary, a unique annotation once; skipped while the annotation is not expressed | E65, renamed by Doug; *"all the annotations weigh in on it"* |
| **`specify()`** | makes its own specification, a class extending the parent's; a rule is replaced by naming it again and waived by returning false; it is called by the binder's tests and cascades through everything in reach | E64, E65; *"Make sure specify is written but not called, and then make sure we call it in the tests in the binder… it should be called recursively down"* |
| **`containers`** | the layers the writing draws through: a class replaces its own element in its bond, `this.containers.replace(this, 'span', 'section')`, and an annotation adds a layer cited to itself when it runs, `writing.containers.add(this, style)`, after the writing's own element and so drawn around it, and takes it back with `revert(this)` in `erase` — so a Format can draw the writing inside something else entirely and a Reference can make it a link | ruled 2026-09-22 as one `container`; layers 2026-09-24: *"everyone can add and remove from that somehow — and then no one needs to cache anything"* |
| **`view()`, `write()`, `annotate()`** | `view` places what `write` and `annotate` draw, the contents and the annotations in their nucleus; a subclass overrides `view` to change the element, a span to a div, and may place the two anywhere, keeping `view` the first method and its TSX indented and stacked; the base's `view` defines first | *"expose print, annotate… If someone wants to reformat, they will have an easy time because they can put those wherever they want"*; *"Let's do write and annotate rather than print, and view should be up top"* |
| **an annotation of its own** | a class under Annotation, in the file of the writing it belongs to — Parenthetical and Narrative in Writing's — written as a child, added through the collection in any form the framework can build, or given in `$is`; it overrides `defines`, `specifies`, or its view | *"Writing would have Formal written inside it, not as a separate. Parenthetical too. These would be annotations in the writing file"* |
| **a collection for its parts** | Composition keeps its parts as a Collection, the same class that holds contents and annotations, so the operations and the questions are the same everywhere | *"Composition can probably use a collection for its parts"* |

## <a id="define"></a>`$Define` — what it may read, and what it may not

**`$Define` is where a class stands its own annotations, and since 2026-09-24 it is called after the contents are made.** *Doug: "$Define should be called last, right before define on the annotations. That is just a bug." The bug was real and it had a victim: a class whose annotations depend on what was written in it could not read the contents in the seam that exists for exactly that, so a [Mention](10-developing-an-annotation.md) reading `[text](identifier)` had to do it in a bond constructor and re-run the pass.*

**The bond now does three things in this order:**

| | the bond | so |
|---|---|---|
| **1** | adds everything that is not an annotation to `contents` | `$Define` can read what has been made |
| **2** | calls `$Define()` | the class stands its own annotations, prepended |
| **3** | adds each annotation the caller wrote, prepended in turn | the last written stands nearest the front, and all of them in front of the class's |

**It may read the contents. It may not see what was given.** *Doug:* ***"They can't see what is given. This scope doesn't access those args. If they need that they should override the bond constructor."*** **That is the point of the seam, not a limitation of it:** *a class defines itself — what it is by default — and what a caller writes is the caller's, arriving after, and overriding.* **A class that genuinely needs its arguments overrides its bond constructor**, calls the one above it first, and does its work after.

```tsx
protected override $Define(): void {
    super.$Define();
    const reference = binder.reference(html.copy(this.contents));
    if (reference === undefined) return;
    this.text = reference.text;
    const Referent = $(referent);
    this.annotations.add(this,
        <Referent>{reference.identifier}</Referent>
    );
}
```

**Precedence falls out of the order and needs nothing else.** *A subclass calls `super.$Define()` first and then adds, so what it stands is prepended in front of its base's — the base furthest back, the subclass in front of it, the caller in front of both, `$is` in front of everything, which is his "base > subclass > caller".*

### What was measured on the way, and the shape that was reversed

| tried 2026-09-24 | result |
|---|---|
| `$Define` moved last with nothing else | **5 red** — every one a written annotation losing to a class default, since the class's adds then prepended in front of the written |
| the annotations' `add` made to append instead | **14 red** — including a promise titled *"in the annotations, add means the front"*, which it does |
| **contents, then `$Define`, then the written annotations** | **124 of 124** |

***And one shape was built and reversed within the hour, recorded so it is not tried again.*** **`$Define(annotations)` took the caller's annotations and returned the list the writing would hold** — *which let a class intercept what was written, and which Doug had himself proposed as "a new modification point that we probably shouldn't use very often."* **He reversed it on the principle above:** *the seam must not see the args.* ***So there is no interception in `$Define`***, and a class that must refuse something written into it does so in its bond constructor, where the arguments are.

## What a subclass never does

- **No static members**, and no member on the base for what a few subclasses might share. *"We don't do static members unless there is an extreme need. No polymorphic support."* A base declares what every instance of it is.
- **No flag for a type question.** What a chemical is, it is by `instanceof`; what a writing carries, it asks its collection.
- **No member for a thing bound to a function.** What a method needs, it makes.
- **No reading that looks like a property beside contents and annotations.**
- **No cache.** Performance is a structure for the collections, measured first.
- **No name from a role.** A variable says what it is.
- **No word the Genesis does not have** as a member; a proxy is flagged.
- **No specification in the bond, and nothing in the library that calls `specify`.** A writing is checked when the binder asks, and the asking cascades.
- **No annotation that removes from the list it is being enumerated over**, and none whose `defines` is not idempotent: the draw defines the writing under the framework's rendering flag, so what an annotation writes there is stored and not counted, and a second pass must land on the same answer.
- **No annotation that knows another's class as its twin.** An annotation acts; it does not name an opposite.

## How the Genesis's classes are expected to arrive

**Letter** (E1, E3): extends Writing; its specification waives *holds only writing* by returning false, since a letter is allowed to have anything, and refuses a Letter or a Composition inside itself.

**Composition** (E4, E6, E7, E12): extends Writing; adds `$level` and its two pairs — whether as the stored-prop pairs ruled on 2026-09-21, or as annotations like Writing's, is Doug's to say when it is written; keeps `parts` as a Collection of the writing among contents, spliced for a same-class child; computes `depth` against the parent; names its canonical, the first element, per level. **Word, Sentence, Paragraph** are Compositions at 1, 2, 3, permissive and open, with no canonical. **Section** is closed at 4 and its canonical is a heading; **Heading** extends Sentence and reaches its section for depth. **Chapter** is closed and permissive at 5, its canonical a Title that extends Heading, its Summary optional and constructed as a proxy when absent. **Book** is closed and strict at 6, its canonical the cover, first and carrying the Cover annotation found by asking its annotations by type; it imports its cover's By and About. **Part** is a Book in a book.

**Annotation** (E5, E9, E21, E26): already in Writing's file with `expressed`, `defines` and `specifies`; gains a `name` when its own genesis is written; E21's `unique` does not return, since nothing in the list is made unique and a specification asks `containsOne`. **Referent** and **Reference** are sibling annotations that are not Types, exported plainly: a [Mention](09-word-sentence-and-paragraph.md) stands a Referent for the id it reads, and **Means**, its twin, a Reference for the url. **Type** is the annotation a formula resolves by the name written inside it; **Cover**, **Synopsis** and **Table of Contents** are Types applied to chapters, each with a `specifies`; **Subject** and **Author** are Types with an Of; **About** and **By** hold a link the compiler writes. **Format** is where styled-components serve, and it landed 2026-09-23 needing no new seam at all: it adds a layer to the `containers` above, and theming is `theme = true` on it rather than a Theme class, since a format's own component can carry the provider — [Format and Theme](11-format-and-theme.md). **Canonical** is a Letter that means something, written by the author. Every one of these is a class by direct inheritance, and none of them adds anything to Writing.

## The documentation plan

Each core class, as it lands: one chapter in this book — members cited to events and rulings, the pattern of corrections, how it is extended, the promises, the gate — edited at every pass and never rewritten from memory; the questions for Doug asked in the file as `ask:` lines and resolved into the chapter as they are answered; the sprint chapter carrying every ruling verbatim; and the branch's coding style carrying every rule that outlives the class. When a class is called done, its chapter is the record and the code carries no comments.
