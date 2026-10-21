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