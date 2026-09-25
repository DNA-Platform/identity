# Developing an Annotation

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-09-23 before the code it documents, on Doug's ruling: "We need this defined in a very flexible way" and "it needs to be very well-documented." The chapter's name is a PROXY; his to rename.***

---

**[How Writing Is Extended](06-how-writing-is-extended.md) says where a subclass of Writing reaches, and an annotation of its own is one row of it. This chapter is that row opened out: what to write when the thing you are adding is an annotation rather than a kind of writing.** [The Annotation System](07-the-annotation-system.md) says what the model is and why; this says what you write. Everything here is in the language of [the genetics](07-the-annotation-system.md#the-genetics-said-once-and-plainly), because that is what decides which power a thing belongs in.

**All four powers are in the code and each has its promises.** [Format](11-format-and-theme.md), the one class that uses every one of them, is [Sprint 80](../projection/86-sprint-80--format-and-theme.md)'s. Nothing here is ahead of the code, and two members that stood here for part of 2026-09-23 — `inactivates` and `review` — were struck the same day and are gone from both.

## An annotation is a class, and that is the whole of adding one

**A library adds an annotation by writing a class under `$Annotation` and lifting it, and by nothing else.** There is no registry, no declaration and no list to join — *"Yeah sure annotations"*, on being asked whether a class is simply imported where it is used. It lives in the file of the writing it belongs to, as Parenthetical and Narrative live in Writing's and the five pairs live in Composition's; a library's own annotations live in the library's own file.

```tsx
export class $Aside extends $Annotation {
}

export const Aside = $($Aside);
```

**That class is already a working annotation.** It is a piece of writing, so whatever is written inside it is its `contents`; it is rendered as a note on the page; it is counted by `writing.is(Aside)`; it takes part in the pass. It does nothing to its writing yet, and that is the base's promise: **an annotation does nothing until it says what it does.**

**Name it after the trait it points out, never after what it does.** Parenthetical is the writing that is parenthetical; Strict is the composition that is strict. *"When you annotate writing, are you not pointing out some trait that it has?"* A name ending in -er or -ing is a role and is wrong here.

## The four powers, and how to choose

**Every annotation acts through the same four, and choosing between them is the whole of the design.** Read down the table and stop at the first row that is true of what you want.

| what you want | the power | when it runs |
|---|---|---|
| to change what the writing IS — a class on it, a layer around it, a value it holds | **`defines(writing)`** | every define, running from the first |
| to say that another annotation does not apply here | **`defines(writing)`** again, looping over `writing.annotations.after(this)` and asking `writing.annotations.express(annotation, false)` of what you choose | the same define; what stands after you is what you reach |
| to take back what you did | **`erase(writing)`** | at the start of every define, for everything that ran in the last one, last first |
| to refuse a writing the binder asks about | **`specifies(writing)`** | only when the binder asks, never at render |
| to put something on the page at the writing's own level | **`note()`** | every render, after the writing's contents |

**The first question is always which phase, and the answer follows from the genetics.** A thing that decides *what the writing is* is acting. A thing that decides *whether it is allowed* is the specification. A thing that *draws* is the rendering. Putting one in another's phase is the commonest fault, and it has a shape: an annotation that reaches into the rendering to decide something, or one that writes a decision it should have recomputed.

***And regulation is not a phase of its own.*** **Two members were built to make it one, `inactivates` and then `review`, and Doug struck both on 2026-09-23:** *"I didn't invent inactivates. NO NEW MEMBERS. You set enforced to false."* **A gene reaches its family in `defines`** — *asking the collection, `writing.annotations.express(annotation, false)`, to take one out of expression, since expression is the collection's and never the annotation's; setting any other property on what it finds to change what it makes.* **Suppressing and augmenting are the same act, and neither needs a door of its own.**

### Taking another out of expression — how a family speaks

**Do it in `defines` when your annotation means that another does not apply.** Narrative is the whole of it:

```tsx
export class $Narrative extends $Annotation {
    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Parenthetical)
                writing.annotations.express(annotation, false);
    }
}
```

**Nothing it does lasts and that is the point.** Every define begins with everything the genome holds expressed, so a Narrative that leaves lets the Parentheticals express again.

***And the one rule a family has: know where you stand, and reach what comes after you.*** **Doug, 2026-09-24:** *"First is most powerful… It's like a stack"* — and *"It should be responsible for knowing where it is. It can know where it is on the list and focus on what comes after."* **`writing.annotations.after(this)` answers what stands after you**, in the order the define established, a plain array: loop over it and bring what you choose back to the collection. *The collection records what it called `defines` on, so reaching back to one already reached changes nothing it says — the call is free, and the trouble is yours.* **What is left to the author is only choosing who is more powerful**, by being added later — *Doug: "they need to have fixed point semantics and implementers need to know how to add to that."*

**A pair is two classes that take each other out of expression and nothing more** — Strict and Permissive, Open and Closed. Each says its own constraint in `specifies` and neither writes a trait onto the writing, because which of two a writing is is a question of expression rather than a mark.


### `defines` and `erase` — acting, and they are one thing written twice

**Use `defines` to change the writing, and write `erase` in the same breath.** Anything `defines` does, `erase` must undo, because every define begins by calling `erase` on every annotation that ran in the last one, last first, so each erase finds the writing as its own defines left it — whether the annotation is still expressed, still there, or given up by `$is`. Parenthetical is the pattern:

```tsx
export class $Parenthetical extends $Annotation {
    override note(): ReactNode { return <ParentheticalStyle />; }
    override defines(writing: $Writing): void { writing.classes.add(this, 'pa-parenthetical'); }
    override erase(writing: $Writing): void { writing.classes.revert(this); }
}
```

**<a id="mark"></a>An annotation should frequently mark its presence with a CSS class** — `pa-` and its own name, added to the writing's classes in `defines`, cited to itself, and taken back by `erase` — so a sheet can find every writing it stands on. *Doug, 2026-09-25: "Note in documents that the annotations should frequently mark their presence with a CSS class."* Parenthetical wears `pa-parenthetical`, Reference `pa-reference`, Referent `pa-referent`, Biography `pa-biography`; Cover, Synopsis and TableOfContents are to wear `pa-cover`, `pa-synopsis` and `pa-table-of-contents`, on his word the same day — [Sprint 83, U3](../projection/89-sprint-83--memory-management.md#u3). *Frequently, not always: a pair marks nothing, as [below](#taking-another-out-of-expression--how-a-family-speaks) says, since which of two a writing is is a question of expression.* The mark goes on the writing; the annotation's own writing wears `pd-annotation`, which Writing gives it.

**Three surfaces are yours to act on, and they behave differently when two annotations want the same one.** Each is cited: what you add is recorded as yours, so your `erase` is `revert(this)` on what you touched and never reaches anyone else's, nor the writing's own. `classes` is a collection, so any number of annotations may add to it, the same class twice if two want it, and the writing draws each once. `containers` is layered and drawn inner to outer: the first is the writing's own element, wearing its classes and id, and an annotation adds its own layer after it with `add(this, element)`, drawn around whatever stands before it; two annotations that each add one both draw, the later outside. The `id` is a Compilation, so the last value set decides — *"last set is winning"* — and since a define runs from the first, that is the one furthest back. What the writing holds is its `text`, a Collection like the others, so it is changed the same way, every change cited.

**`defines` need not guard against running twice, and must be exact in its undo.** A define erases everything that ran before it runs anything again, so a second call starts from what the writing holds of its own — but *"it is entirely up to the annotation to be idempotent"*: what `defines` puts, `erase` takes back, and nothing else. The shape that will still cost you a day: making something new each time, a component or an element or a chemical, so that what `erase` takes back is not what `defines` put. Make it once, in your own bond, and add the same thing every define — which is what Reference does with its anchor:

```tsx
get identifier(): string { return html.copy(this.text).trim(); }

$Reference(...chemicals: $Chemical[]) {
    this.$Annotation(...chemicals);
    this._anchor = (props: { children?: ReactNode }) => <a href={this.identifier} {...props} />;
}

override defines(writing: $Writing): void {
    writing.classes.add(this, 'pa-reference');
    writing.containers.add(this, this._anchor);
}
```

**And an annotation is extended the way any class is: override the power, call the base, add what is yours.** `$SelfReference` is a Reference that also wears `pa-self-reference` and draws its own look as its note — no `erase`, since Reference's is `revert(this)` and takes back every class cited to the annotation, and no bond, since chemistry calls the nearest one up the chain. *The collection finds by `instanceof`, so a Self is found wherever a Reference is asked for, its specification included.* Its note is a global style taking the underline off the anchor around a writing that wears the class, and keeping the pointer — Doug: *"style them so they don't look link-like with no underline and maybe no pointer"*, and asked of the pointer, *"Keep the pointer"* ([Sprint 82 U5](../projection/88-sprint-82--chapter-and-book.md#u5)). The style is a field, made once with the class, as Parenthetical's is.

```tsx
export class $SelfReference extends $Reference {
    style = createGlobalStyle`
        .pd-container:has(> .pa-self-reference),
        .pd-container:has(> .pd-container > .pa-self-reference) {
            text-decoration: none;
        }
    `;

    override note(): ReactNode { return <this.style />; }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-self-reference');
    }
}
```

*Written today with its url as content, `<Self>/the-library/</Self>`, since a Reference reads its contents as the identifier; writing one with the notation waits on R16.*

**And if you want a surface that someone behind you would otherwise take, take them out of expression.** Doug: *"Front has the power to turn off competitors but if it doesn't, back can erase them."* That is the whole of conflict on a surface: the front's tool is regulation, the back's tool is acting last.

### `specifies` — the binder's question, and where every rule belongs

**Use it for anything that can be checked rather than done.** *"Everything that can be moved to specification should be."* It runs only when the binder asks, never at render, so it costs a reader nothing and may be as thorough as you like.

**You do not override `specifies`. You give the annotation a specification**, whose rules are about **the writing it annotates** — *Doug, 2026-09-24: "repurpose them, but not to specify the annotation, to specify the writing… This makes one spec and the annotations are like traits that participate in it."* `specifies` runs it, and the writing's `specify` gathers every expressed annotation's failures with its own:

```tsx
export class $Strict extends $Annotation {
    specification = new StrictSpecification();
}

export class StrictSpecification extends AnnotationSpecification {
    @specify('a strict composition holds parts at its level or one below')
    $holdsPartsAtOrOneBelow(composition: $Composition): void {
        $check(composition instanceof $Composition, 'strict is said of a composition, and this is not one');
        $check(composition.parts
            .every(part => part.level === composition.level || part.level === composition.level - 1),
            'a strict composition holds parts at its level or one below, and this one holds another');
    }
}
```

**Every rule of it is asked, and every failure is kept.** *A rule is one `$`-method with its description; two faults that are independent are two rules, so both are reported when both hold.*

**A rule reads the annotation it belongs to by asking the writing**, `writing.annotations.expressed($Referent)?.identifier`, **never by holding it.** *A specification is stateless and its field initializer runs once on the class's template, so every annotation of a class shares one — a specification that kept its annotation would keep the template's.*

**An annotation that applies only to some writing checks that first, in the same rule as what depends on it.** *"Do we want annotations to fail silently or throw? Throw I think. I prefer exceptions."* A Strict on a letter of prose is a failure and never a silence, and the guard stays in the rule with the check that could not run without it.

**The annotation is never specified itself.** *"So then we won't call specify on the annotations."* What is written inside an annotation — an identifier, a level, an address — is read by the annotation, not checked as writing.

**Ask the collection, never keep a field.** `writing.is(Cover)` answers whether an annotation of that kind is expressed, and `containsOne` whether there is exactly one; both take a class, a component, an element or a chemical. A rule that wants to know what else is on the writing asks; a rule that keeps a flag has turned a type question into a flag, which is the first rule of the whole model.

### `note` — what you put on the page

**An annotation is a note on the page, and its note is what it has to say at the level of the writing it annotates.** Its own writing renders first, its container with `pd-annotation` on it, holding whatever an author wrote inside it, hidden in the ordinary view and shown in an annotated one. Then the note, which is null by default. A global style, an anchor, a footnote's text, a mark: whatever belongs beside the writing rather than inside the annotation's own body.

**The notes render back to front, so the front's note is last on the page.** For a stylesheet that means the front's rules win a tie, which is dominance in the cascade matching dominance in the genome — *"the one on top doesn't mean first in the DOM, it means last, which is to mean most powerful."*

**A note is a sibling of the writing's contents, not their ancestor.** *React context only ever flows downward, and this was measured rather than assumed*, so a note can never enclose what the writing drew and nothing should be put in one that tries to.

### If you must ENCLOSE what the writing drew, you are a Format

***There is no fifth power for this, and one was built and struck the same day.*** **`review`, a function the genome folded around the container, lasted an afternoon** — *Doug: "No more review."* **What replaced it needed nothing new**, because a writing already has the seam: **its `container` is the element it draws as, so an annotation that wants to be an ancestor of everything the writing rendered hands over a component that wraps.**

```tsx
class $Housed extends $Format {
    theme = true;
    style = Panel;
}
```

**[Format](11-format-and-theme.md) does the whole of it**, and `theme = true` is the worked case: the bond composes the style with a provider, so the provider is the element's parent and everything the writing holds reads it. *The writing keeps its own element and its classes, which a power that replaced the element would have taken.*

***The general lesson, and it is the one this chapter is really for:*** **when you want a power the model does not have, ask what surface the writing already exposes.** *Two of the four things attempted on 2026-09-23 were members added where a door already stood, and both came out within hours.*

## The argument is content, and a property reads it

**Whatever an annotation needs told, it is told as content.** *"We probably didn't want a prop there, we meant that to be `<Mentioned>as-mentioned</Mentioned>`."* An annotation is a writing, so what is written inside it is its `contents`: that is where a Referent finds its id and a Level its number. From outside, the same annotation is given whole, `is={<Mentioned>as-mentioned</Mentioned>}`.

**Read it with a property, a getter over the contents.** Doug: *"Is it too pricey to have the level annotation parse and supply its level as a property (not prop) and put a computed property around it? That is a simple way to convert annotations into an object surface."* It was read once in the bond into a field until 2026-09-25, when Doug chose the getter under *"I want everything to look uniform and maximally simple"*: nothing is kept, so nothing goes stale, and every reading an annotation or a word makes of its contents is written the same way.

```tsx
export class $Level extends $Annotation {
    get level(): number {
        const block = this.text.at(0);
        return block instanceof $Block ? Number(block.elements.join('')) : 1;
    }
}
```

**A writing then reads that property through the collection**, asking for the first expressed one of the kind: `this.annotations.expressed($Level)?.level ?? 1`. That is the whole of turning an annotation into an object surface — content in, a property out, a reading on the writing.

## What never to do

- **Never write a decision that should be recomputed.** `expressed` is the pass's answer, not a store; anything a pass can work out, it works out again.
- **Never make something new per pass and set it.** Make it in your bond. A component, an element or a chemical made in `defines` is the render loop, measured twice.
- **Never name another annotation as your opposite for the framework to read.** Act on a sibling by class if you must, as Narrative does; a declared twin was designed and struck — *"No they shouldn't name the class… We don't just want opposites."*
- **Never add or remove from the list while the pass runs.** The pass walks a copy; interact with your siblings, do not rearrange them.
- **Never keep a field for what the collection can answer**, and never put a member on Writing for what your annotation means.
- **Never reach past your writing.** You are handed it; ask it and its collection, and let its own annotations do their own work.

## The order of the class

**Fields, then properties, then the bond, then the methods with the entry points first** — [The Order of a Class](../the-coding-style/02-the-order-of-a-class.md). For an annotation that means: whatever it read from its content; the bond that read it; and then the powers in the order the pass runs them, `defines`, `erase`, `specifies`, `note`, each on one line where it fits on one. A specification of its own goes in the same file, since [the file is the word](../the-coding-style/01-the-unit-of-code.md).

## Where to look

| what | where |
|---|---|
| what the model is and why | [The Annotation System](07-the-annotation-system.md) |
| the seams of Writing itself | [How Writing Is Extended](06-how-writing-is-extended.md) |
| the annotations that exist | Parenthetical and Narrative in [`Writing.tsx`](../../package/src/writing/Writing.tsx); Level, Strict, Permissive, Open and Closed in [`Composition.tsx`](../../package/src/writing/Composition.tsx) |
| the one that uses every power | [Format and Theme](11-format-and-theme.md), and [Sprint 80](../projection/86-sprint-80--format-and-theme.md) for the record of what was struck getting there |
| the strategy the two serve | [Theming and Formatting](02-theming-and-formatting.md) |
