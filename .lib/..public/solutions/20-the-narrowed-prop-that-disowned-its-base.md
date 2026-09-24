# The narrowed prop that disowned its base

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

**keywords:** `framework` · `model` · `narrowed-declaration` · `lifted-class`

---

**Adding one property to one class produced thirty type errors, none of them in that class and none of them about that property.** They named `canonical`, `parts`, `where`, `select`, `single` and `at` — six members apiece across five classes nobody had touched — each saying the same thing:

```
src/writing/Sentence.tsx(100,9): error TS2416: Property 'canonical' in type '$$Sentence'
  is not assignable to the same property in base type '$Word'.
```

The property was `$role`, declared on `$$Word` to say that a reference **mentions** its referent:

```ts
$role = 'mention' as const;      // 30 errors
$role?: Role = 'mention';        // 0 errors
```

## `as const` was a red herring, and believing it would have filed the wrong rule

The first reading was *"`as const` narrows the property out of the reach of the `$` machinery"* — plausible, it made the errors go away, and it is **wrong**. Tested by predicting the general case and checking it:

```ts
$role?: 'mention' = 'mention';   // 30 errors — same count, same sites
```

**Any narrowing does it.** `as const` is merely the shortest way to write one.

## The mechanism, read off the compiler rather than inferred

`tsc --pretty false` prints the whole chain, and the chain is the answer:

```
Type '$$Word' is not assignable to type '$Letter'.
  The types returned by '[$resolveComponent$]()' are incompatible between these types.
    Type 'Component<$$Word>' is not assignable to type 'Component<$Letter>'.
      Type 'Component<$$Word>' is not assignable to type 'FC<$Properties<$Letter>>'.
        Types of parameters 'props' and 'props' are incompatible.
          Type '$Properties<$Letter>' is not assignable to type '$Properties<$$Word>'.
            Types of property '$role' are incompatible.
```

Read bottom-up: a `$`-prefixed member feeds the **computed props type**, so narrowing `$role` narrows `$Properties<$$Word>`. Every chemical answers a component, and a component is a function **of its props** — so props are **contravariant**. A narrower props type makes the component *less* assignable, the class stops being assignable to its own base, and then **every member whose type mentions the chain fails at once**. The thirty errors are one error, reported thirty times at the sites that happen to name the types.

**So a widening declaration is load-bearing.** `$role?: Role` is not ceremony around a value that is always `'mention'` — it is the thing that keeps the subclass a subclass. This is [the class that was not the class](06-the-class-that-was-not-the-class.md) at compile time rather than at runtime: there, code reasoned about the class as written where the object came from a class the framework made; here, a declaration written for the class travels into a type the framework computes and comes back inverted.

## The lesson

**Declare a `$` prop at the base's type, never at the value's.** If a subclass always sets `'mention'`, the declaration is still `Role`. The narrow fact belongs in the initializer, which is not part of the type.

**And the diagnostic habit is worth more than the rule.** Thirty errors that name members you did not touch, in files you did not open, is not thirty problems — it is **one relationship broken and reported everywhere it is mentioned**. The move is `tsc --pretty false` and read the *indented chain*, not the top line: the top line named `canonical`, and `canonical` had nothing to do with it. Filed once already as [three attempts failing differently means stop and instrument](06-the-class-that-was-not-the-class.md); this is the cheap version, because the compiler had already printed the instrument's output and nobody had scrolled.

<!-- citations -->
