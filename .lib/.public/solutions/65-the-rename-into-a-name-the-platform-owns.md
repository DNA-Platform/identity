# The rename into a name the platform owns

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `occupied-name` *(proxy name, flagged for Doug)* · a global shadowed by a local · a rename that renamed a CSS class

---

## Symptoms

- ***`document.querySelectorAll is not a function`*** — **in a test that had not been touched except by a rename**, and which had asked the DOM the same question the day before.
- **Then SEVEN more tests broke at once**, *after a second attempt* — declarations renamed and their uses left behind.
- **And two assertions failed against `pd-documented`**, *a CSS class nobody wrote*, because the rename had reached inside a string.

## The mechanism — ***the new name was already taken, by the platform***

`$Chapter` became `$Document` — **a rename of 222 sites, mechanical, with `tsc` as the guard.** *And `tsc` guarded almost all of it.* **What it could not guard is that `document` is a DOM global**: a module-scope `const document`, or a local in a `describe`, shadows it silently and legally, and every `document.querySelector` beneath becomes a call on a chemical.

**Three distinct failures came out of one substitution, and they are worth separating:**

| | |
|---|---|
| ***the shadow*** | *`const chapter = () => …` became `const document = () => …`. Nothing is wrong with that line. Everything below it is.* |
| ***the half-rename*** | *A regex that renames DECLARATIONS and not USES type-checks in a JavaScript test file, because the old name still resolves — to the global.* **Seven tests, one regex.** |
| ***the string*** | *`'pd-chapter'` became `'pd-documented'`. A rename that walks text walks into CSS classes, hrefs, ids and prose — and only the ones under test say so.* |

## The fix

**Locals are `documented`, never `document`** — *and the `$$` component exports under that name for the same reason.* **The CSS class is `pd-document`**, which is what the kind's own name derives.

## What this costs to know

***Before a blanket rename, ask what the new name already means*** — **to the language, to the DOM, to the framework, and to the CSS the kinds emit.** *`document`, `window`, `name`, `location`, `history`, `top`, `status`, `length`, `event` and `origin` are all globals a module-scope const will shadow without a word from the compiler.*

**And a rename is three renames wearing one coat:** *identifiers, which `tsc` checks; STRINGS, which nothing checks; and FILE PATHS, which fail loudly and are therefore the easy ones.* ***The strings are where a rename hides.***

## <a id="the-hole"></a>And it found a hole in something else

**The wiki's demo root kept a CONTENT file that the sync deliberately did not mirror** — *demo roots were skipped whole, to protect an app shell that lives in one side and a tsconfig that lives in the other.* **So one file diverged in silence and still imported `$Chapter` after everything else had moved.**

***The repaired rule is smaller than the one it replaces:*** at a demo's root, **mirror only what exists in BOTH, never create, never delete.** *Existing in both is the test, and it needs no list of exceptions — which was the point of the original rule and the thing the original rule gave up.*

## Related

- [The class that stepped twice](61-the-class-that-stepped-twice.md) — the other kind of name collision: not a name that was taken, but a name that reached further than intended.
