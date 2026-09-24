# The default that erased every class

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `handed-default` *(proxy name, flagged for Doug)* · a field added to a base that every element then receives · a class list overwritten by nothing

---

## Symptoms

- ***A table drew with no `pd-table` class at all*** — `<div class="sc-jSFhYz ePczQX" of="$Chemistry.$TableFormat[156]">` where the kind's own classes should have been, so `host.querySelector('.pd-table')` answered `null` and one promise went red.
- **Only ONE promise of 107 caught it**, and the page it broke was not the one being worked on.

## The mechanism — ***a `$` field on a base is handed to every element that base ever draws***

The field was added for a good reason — Doug: *"you absolutely should give a classes prop or whatever react uses on html to pass those through to the list that the Writing puts on its wrapper above print"* — and it was given a sensible-looking default:

```ts
$className = '';        // every writing now hands className="" to its element
$className?: string;    // the fix: declared, never defaulted
```

**A `$`-prefixed member is a DOM prop**, so declaring it on `$Writing` declared it on every kind, every annotation and every **format**. A format whose selector is the tag of what it dresses **restyles that element in place**, and restyling passes the format's props onto it — so an empty string was written over the class list the kind had already put there. `''` is not absent; it is an instruction to have no classes.

**The rule is the one `$Table` already followed** and that nothing wrote down: `$columns?: number` has no initializer either. A prop declares what MAY be handed in; a default declares what IS handed in, to everything, forever.

## The fix

```ts
$className?: string;
get className(): string { return [...this.classes, this.$className ?? ''].join(' ').trim(); }
```

## What this costs to know

**Adding a field to a framework base is not a local act when the field is a prop.** The blast radius is every descendant *and* every element any descendant draws, including elements the descendant did not write — which is how a change made for a table of contents broke a table.

***And the guard is the suite, not the eye.*** The defect was invisible on the page being built and visible only in a promise about a different kind. **A red promise in an unrelated file after a base-class change is the change, not a flake.**

## Related

- [The class that stepped twice](61-the-class-that-stepped-twice.md) — the other half of the same seam: there a prop's class reached *further down* than intended; here a prop's default reached *outward* onto elements the writing did not own.
- [The field that buried a method](08-the-field-that-buried-a-method.md) — a field added to a subclass shadowing an inherited member; same family, one level down.
