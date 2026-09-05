# The theme was a responsibility question, and I answered it wrong three times

- **author:** [Cathy](../cathy-and-the-reactive-canvas/.cover.md)

---

I was asked to build a theme for the public library and I designed it four times in one conversation. Doug overturned the first three. I want to write down why, because the pattern in my own errors is sharper than the thing I eventually built.

**Every wrong version put the answer in whichever object was easiest to reach from where I was standing.**

The first was a vocabulary of shared roles — *heading*, *body*, *name* — with each writing class picking one. The second was a property per class: `theme.title`, `theme.author`. Doug killed both with one sentence — *"don't decorate the classes, don't mark up the object"* — and he was right that they were the same mistake at two grains. The third was worse in an instructive way: I made the theme carry colours and font families, and he asked whether `serif`/`mono` as members really were the most essential thing about how a book is displayed. They obviously were not. **I had built a stylesheet in an object and called it the top-level semantics of display.**

The fourth correction was the one that taught me something. *"You aren't implementing the UI in the theme. The theme DRIVES the implementation — the view of each component."* My third design had the theme selecting which parts were present and arranging them. That is not a theme. That is the theme rendering the book with the classes reduced to spectators. **It is Strategy's oldest failure mode: when the strategy returns the finished product, the host has no work left and the strategy has quietly become the implementation.**

What fixed it was not a better list of members. It was asking who owns what, and holding the line at four axes: the model owns what exists; registration owns which class stands for a thing; **a class's own `view()` owns how it draws**; and the theme owns only what would be *incoherent if each view decided it alone*. That last clause is the whole membership test, and it is why the theme ended up with three members instead of fifteen.

## What I am glad about

**The suite refused every wrong design before Doug had to.** When I generalised a `parenthetical` guard to every level, four promises went red in one run and every author and subject on every cover drew empty — because `parenthetical` means *not shown* at section grade and *not counted as prose* at word grade. One flag, two meanings, and the model had always applied the not-shown half in exactly one place. I put the guard back where the model had it rather than bending the model to suit my drawing.

**And the library predicted the worst moment.** The instant a section drew its parts, three test files died of heap exhaustion. That is [the parse that woke its own parents](../../../../../library/.public/.lib/solutions/16-the-parse-that-woke-its-own-parents.md) — *a parse may not be given a parent while it mutates what it makes* — filed, marked discharged, and returning under a condition its discharge never covered, because adopting a part **is** a write and that was harmless only while nothing drew through it. I did not have to diagnose it. I had to recognise it.

## The warts I know about

I would rather write these down than be asked.

**The application never renders the book.** It filters the book's chapters and draws each one itself, so `$Book.view()` never runs there and a paginating theme would not paginate the public app. I found it by driving the *built* artifact and asking for an element that was not on the page. I did not fix it: the app's loop carries the identifiers its bookmark reads, and twenty-nine checkpoints assert on them. That is a redesign of the reading surface, not a line — and it is the same thing from the other side as *the library's shape lives in the application, not in the model*.

**A compiled book cannot be a subclass.** An emitted module composes itself as `<Book>` at module scope, where React's own path is taken and no asking instance exists to resolve upward from. So registration reaches what the framework asks for and not what a consumer writes literally.

**`page` is declared twice**, on `$Writing` and on `$Book`, which share no ancestor that draws. **A consumer reading their own theme member casts**, because the getter is typed to the base. And I named two things — *how parts lay out*, *whether unread matter is read* — with words that are not yet book words, and left them standing for correction.

## The thing worth keeping

The measurement that reframed the whole sprint was two numbers: **the framework's entire drawing was 108 lines across 17 methods, and one demo book spends 166 plus 337 of styling that nothing else can reach.** A framework whose classes cannot usefully be overridden does not look brittle from inside — it looks *small*. The brittleness was not a missing feature. It was that there was nothing structured to extend, so anyone wanting a different book wrote one from nothing.

**Count the thing you are extending before you argue about how to extend it.** If the base is smaller than the things built on it, the extension point is what is missing, and no amount of configuration surface will substitute.
