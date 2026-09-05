# The field that held a bound class

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **sprint:** [The Bind](../projection/29-the-bind.md)

---

**Keywords:** `framework` · `model` · field-vs-accessor · class-valued member · `bound` · `canonicalForm` · reactive property · `===` fails · right answer rejected · `$Chemical`

## What was observed

***Twenty-one promises failed with a message that named the right type and failed it:***

```
This writing is not a $Letter — it carries $TypeOfLetter.
```

**The lookup found exactly what it was looking for and rejected it.** *Every failure said the same thing at a different level — `$File` carrying `$TypeOfFile`, `$Word` carrying `$TypeOfWord`* — **which reads like a broken comparison and is not one.**

The member had just been introduced, by Doug, as a **field**:

```typescript
canonicalForm: typeof $Writing = $Writing;          // on $Type
override canonicalForm = $Letter;                   // on $TypeOfLetter
```

*And the comparison that used it is a plain identity check:*

```typescript
one.canonicalForm === kind || one.canonicalForm.prototype instanceof kind
```

## What did not work

- **Reading it.** The field is three words and the comparison is one line. *Neither is wrong.*
- **Suspecting field-initialisation order.** `$TypeOfLetter`'s initialiser runs after `super()`, so `$Letter` is assigned last and should win. *It does.*
- **Suspecting the class was undefined at evaluation.** `$Letter` is declared above `$TypeOfLetter` in the same file, and the initialiser runs at construction, long after both exist.

## The mechanism — printed rather than reasoned about

***One `console.log` in the comparison settled it in a minute:***

```
ASKED $Letter | carried [ [ '$TypeOfLetter', 'bound', false, 'object' ] ]
```

**`canonicalForm` did not hold `$Letter`. It held a function whose name is `bound`** — *with a prototype, so it looks like a class* — **and `cf === $Letter` is `false`.**

***A `$Chemical`'s FIELD holding a CLASS does not come back as that class.*** *The reactive property machinery transforms a function-valued field on its way in and out; what the reader gets is a bound wrapper, not the constructor that was written.*

## The fix — one word

```typescript
get canonicalForm(): typeof $Writing { return $Letter; }
```

***An accessor lives on the prototype and is never a reactive field, so nothing transforms it.*** **All twenty-one went green with no other change**, and the previous member — `finds`, which had been a getter all along — had worked for exactly this reason without anyone knowing why.

## The tell, so the next reader can grep for it

***A member that returns the right thing and fails an identity check.*** **`===` failing against a value you can see in the debugger is not a comparison bug; it is a different object wearing the same shape.**

**And the discriminator is what the member HOLDS, not what it IS:**

| a `$Chemical` field holding | |
|---|---|
| **regexes**, an `Intl.Segmenter`, a string, a number | ***fine*** — `patterns` and `graphemes` are fields and always were |
| ***a CLASS*** | ***transformed*** |

*So the same member works in one form and not the other, which is why it survived review: the code was read, understood and correct, and it was still wrong.*

## The rule

***A member whose value is a class is an accessor, never a field.*** **If a chemical must hand back a constructor, it returns it from a getter.**

*And the habit that found it in a minute after twenty minutes of reading: **print the value at the comparison.** [Solutions 12](12-the-writing-that-looped-its-page.md) says the same thing from the other side — isolate one variable and write the table down — and this is its cheap form, because the identity check had already told us the two objects differed and nobody had asked what the other one was.*

## See also

- [The narrowed prop that disowned its base](20-the-narrowed-prop-that-disowned-its-base.md) — **the other place a `$`-prefixed member's declaration travels into machinery and comes back changed.** *There it was the computed props type inverting; here it is a value transformed on the way in. **Both are a declaration written for a class arriving somewhere else.***
- [The specimen that was the component](28-the-specimen-that-was-the-component.md) — *the same family: an object that is not the object you think you are holding.*
- [The Type and the Instance](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md) — where the rule now lives as a standing corollary.
