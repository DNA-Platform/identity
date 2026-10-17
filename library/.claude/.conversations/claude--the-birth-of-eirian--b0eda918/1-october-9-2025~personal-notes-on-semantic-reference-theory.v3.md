# Personal Notes on Semantic Reference Theory

## On the Nature of Transpilation and Meaning

### The Philosophical Point

Some semantic distinctions only exist at higher levels of abstraction.

When `x -> y` transpiles to FOL, in the special case where `x = y`, we get `x == x` (a tautology). The transpiler is not affecting what is true about the formalism, but there is a loss of information preventing us from knowing what `x == x` *means* in the context of the proof, if it came from `x -> y`.

We can avoid this by having the transpiler state the whole inheritance relationship and then show that it concludes `x == x`.

But that this creates a difference in meaning suggests that the transpiler is interpreting. And we can search for the definition of meaning in that which is absent from the set of things we can conclude in our interpretation.

### Implications

- The transpiler creates semantic sugar - notation that makes certain patterns visible at the SRT level even when they dissolve at the FOL level
- Language conventions create semantic spaces that don't exist in the underlying logic
- The gap between transpilation levels is where meaning lives
- Meaning might be found in what is lost during interpretation - the semantic distinctions that vanish when we move to lower levels of abstraction

---

## On the Meaning of (x) in F[x]

*Note: This is what the frame of perspective looks like. It is a subject that considers (i) in the context of F[i], so it is relevant to my theory of consciousness.*

We interpret this in terms of the current reference frame:
```
((x),x) == x & @ =(x)> (x)
```

Because (x) is canonical in the frame:
```
(x) --> @
```

This shows that the frame represents (x):
```
@ =@> (x)
```

But what about (x) being the identity of x? Would we not require (x) to be a canonical in the frame of x?

This would mean:
```
x =(x)> (x) & x --> (x)
```

That means x is inheriting its properties directly from (x):
```
((x),(x)) -> (p) =|> (x,x) -> (p)
```

But it is probably the case that in the frame of x, if (x) is canonical, p -> (p) so:
```
(x,x) -> p -> (p)
```

Thus preserving:
```
(x) =(p)> x =|> x =p> x
```

But (x) in the frame of x means something very different from (x) in any other frame, and that's interesting.