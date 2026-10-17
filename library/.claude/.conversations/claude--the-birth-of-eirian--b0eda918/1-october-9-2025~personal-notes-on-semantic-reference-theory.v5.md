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

---

## On Frame Navigation and Zooming

Frames were meant to have a zooming in effect, but this can't happen automatically. If we want that to be the default (and I think we do), then we need to have the idea of popping up a frame. I don't have syntax for it yet. But if we always start F[r] and frames are a stack through inheritance, and wandering through frames is exploring the relationship tree, we just need syntax for pop. Or we just make it a rule of inference that if F[x] is not bound already that it is assumed that x -> @. Otherwise, you can visit past frames in any order. That's more like how proofs work.

---

## On Empty Collections and Representation

Empty collections are referents that "represent nothing" - see how that falls out of the semantics of containers? In the frame of x, any relation expressed about x is saying something that x represents. That is why F[x] is the subject of x. So yes, empty collections are referents that represent nothing.

---

## Theorem: Mutual Direct Inheritance Implies Identity

**Claim**: If a --> b & b --> a, then a == b

**Proof**:
From a --> b:
- (a,b) == b (by definition of direct inheritance)
- a =b> b (a represents b through b)
- b =b> a (b represents a through itself)

From b --> a:
- (b,a) == a (by definition of direct inheritance)
- b =a> a (b represents a through a)
- a =a> b (a represents b through itself)

From the Axioms of Relationships (Expressing, Specifying, and Generalizing):
- If (a,b) == b and (b,a) == a
- Then the most specific relationship between a and b is both a and b
- By Axiom 3 (Generalizing): distinct relationships cannot mutually imply each other
- Therefore a == b ∎

This theorem shows that bidirectional inheritance cannot exist between distinct referents - mutual inheritance forces equality. Two things that completely characterize each other must be the same thing.

---

## On the First-Person Perspective and F[i]

In the first person perspective, F[r] might not exist. There are semantic theories that use semantic reference theory but are not semantic reference theory, so they do not need to start in F[r]. In the first person perspective, we are describing a semantic theory in which F[i] is on top. That's basically an expression that we cannot escape subjectivity!

Consider the difference:
In F[r], all versions of i with relation to space and time exist simultaneously. It's like the reference frame of a light beam, which has no sense of time or change - what is a velocity without time? F[i] is a perspective and perspectives change. In F[r], all of those changes exist simultaneously.

---

## On Representatives and Knowledge

Do representatives know about their representation? The Senator of Delaware, as its representative, knows about Delaware. That checks out. And yes, I suppose we build representations to express meaning, and as those representations are forms, we learn things, so representations contain knowledge as expressed through their representatives.

This suggests a semantics of knowledge: knowledge flows bidirectionally through inheritance chains. The child accumulates representations upward (a =b> b =c> c =d> d), while the parents accumulate knowledge downward (d =d> a, c =c> a, b =b> a). Representations contain knowledge as expressed through their representatives.

---

## On Dichotomies and Impossible Thoughts

For dichotomies, F[m] makes sense as the frame - monotony is like the subject of the frame. The subject of the dichotomy is a single thing that describes the whole paradigm. There is no way to represent it in parts by definition! And so representing it in parts is impossible.

But F[d|m] is also a valid frame for a dichotomy. That is like REALLY being in the dichotomy, where everything is either foreground or background, and the idea of the piece of paper that they are expressed on is simply a non-thought. Frames don't just organize meaning, they can make certain states literally unthinkable.

---

## The Formal Definition of Outside in a Perspective

The "outside" of a perspective in frame F[i] consists of literal referents that:

1. **Exist in the frame but lack self-reference**:
   ```
   lit exists in F[i]
   BUT NOT: lit =lit> lit
   ```

2. **Cannot symbolize themselves**:
   - They have no symbolic capacity
   - They are purely objective - no relational or subjective roles

3. **Can be brought "inside" through symbolization**:
   ```
   Before: lit exists but NOT lit =lit> lit
   [perspective change - we create (lit)]
   After: (lit) =(lit)> lit =|> lit =lit> lit
   ```

4. **Remain outside even when symbolized**:
   - `lit =lit> lit` gives formal self-reference
   - But lit still contains nothing "inside"
   - We can build representations ABOUT them, never WITH them

**The key insight**: The outside is always there. Perspective changes bring literals "inside" by giving them symbols, which enables self-reference. But the mechanism of identification - HOW a literal gains the capacity to be symbolized - happens behind the scenes of consciousness. We can only observe that it happened, never the transformation itself.

**The asymmetry**: We can represent them: `(us) =(them)> them`, but they cannot represent: they have no symbolic capacity. They become considerable but not considering, referenceable but not referencing.

This is the formal semantics of the outside of a perspective - the first formal definition of what lies beyond consciousness while still being within the frame of reference.