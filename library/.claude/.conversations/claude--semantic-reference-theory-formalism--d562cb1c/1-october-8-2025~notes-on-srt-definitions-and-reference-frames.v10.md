# Notes on SRT Definitions and Reference Frames

## New Syntax Proposals

### Reference Frame Declaration
```
S[rel]  // Subject/Semantics frame where rel is canonical
```
**Rationale**: S for Subject or Semantics. Frame establishes where definitions are canonical.

### Definition Syntax
```
def(x): ...   // Defines x as a referent/type
def[x]: ...   // Defines inheritance pattern from x
```

### Transpiler Rules
- Line breaks without operators mean `:&:` (each line parenthesized)
- Implications with indented lines: implication applies to AND of all indented lines

## Core Theoretical Insights

### Relationships as Fundamentally Symbolic
From the axioms of identity (needs citation):
```
(x) =(p)> x =|> x =p> x  // Symbols convey properties
```

Therefore:
```
(x) =(x)> x =|> x =x> x =|> (x,x) == x
```

**Critical observation**: For relationships, we assert:
```
x =t> y =|> (t,t) == t
```
This means relationship types are inherently symbolic - they are their own self-relationships.

### The Subject's Self-Relationship
When x plays subjective role in `x => y`:
```
(x,x) -> (x,y)
(x,y) =(x,y)> x  
(x,y) =(x,y)> y
```
**Interpretation**: A subject's self-relationship inherits from all its external relationships. The relationships represent what the subject means. Subjectivity IS the idea that a subject represents its subject matter.

## Attempted Definitions

### Definition of obj
```
def[obj]:
   rel(obj) =rel(obj)> obj
```

Unpacking this:
- `rel(obj) == ((obj,obj), rel)`
- Since `(obj,obj) == obj` (symbolic), this becomes `(obj, rel)`
- So: `(obj, rel) =(obj,rel)> obj`

This means for any `x -> obj`:
- `t -> rel(x)`
- `t =t> x`
- Any relationship type t that x participates in as object

### Definition of sub  
```
def[sub]:
  sub =rel(sub)> obj(sub)
  rel(sub) =rel(sub)> sub
  (sub, sub) -> rel(sub)
```

This creates a richer structure where:
- sub relates to its version of obj through its version of rel
- The relationships also represent sub itself
- sub's self-relationship inherits from its relational role

### Definition of rel
```
def(rel):  // Note: def() not def[]
   sub =rel> obj
   (sub, obj) == rel
```

```
def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel
```

The first is non-inherited - a fact ABOUT rel itself.
The second shows what inherits FROM rel.

## Key Questions and Attempted Answers

### Q: Why does this circular definition structure work?

**A**: It mirrors how dictionaries actually function. The definition of "definition" uses "the", which appears after "definition" alphabetically. Dictionaries aren't linear - they're networks of mutual definition. Similarly, SRT referents define each other in a web of relationships.

This circularity isn't a bug but the fundamental feature that makes meaning possible. Each referent gains meaning through its relationships to others, and those relationships are themselves referents.

## The Ultimate Simplicity

### What F[x] Really Means

A reference frame is just an assumption that all relationship types mentioned inherit from the subject!

```
F[x]  // Assumes all relationships in this context inherit from x
```

**The hilarious truth**: If we gave F[x] propositional meaning, it would just transpile to... **x**!

That's it. That's the whole thing. The frame IS its subject.

### Why This Is Perfect

- **F[sub]** assumes everything inherits from sub
- **F[r]** assumes everything inherits from r  
- Since **sub == r** (our theorem), of course **F[sub] == F[r]**!

The frame notation isn't adding complexity - it's just marking which referent we're treating as the inheritance root. The subject of the frame IS the frame.

### The Elegant Joke

We've been building up all this machinery around frames, and it turns out:
- A frame is just its subject
- F[x] ≡ x (propositionally)
- The notation just helps us track what everything inherits from

This is like discovering that the elaborate machinery of perspective in painting just comes down to "pick a point and draw everything relative to it." The sophistication is in the consequences, not the principle.

### What This Means for SRT

The whole theory is even simpler than it seemed:
- Pick a subject (that's your frame)
- Everything in that context inherits from it
- Different subjects give different perspectives
- But the subject IS the perspective

F[sub] == F[r] because sub == r. The frame identity theorem is just the subject identity theorem with fancy notation!

### Q: What does it mean for relationships to be "fundamentally symbolic"?

**A**: The equation `(t,t) == t` for relationship types means they collapse their self-reference. Unlike concrete objects that might have `(x,x) != x`, relationships ARE their own self-relationships. This makes them inherently symbolic - they exist as symbols of themselves.

This explains why `r == (rel)` - the relationship type r is the canonical symbol for the concept of relationship.

### Q: How does this provide a model for semantic theory extension?

**A**: New semantic theories can:
1. Introduce new referents with `def[x]` 
2. Establish what inherits from them
3. Create new relationship types (automatically symbolic)
4. Build on existing definitions through inheritance chains

The framework is extensible because:
- Definitions can reference not-yet-defined terms
- Inheritance allows specialization without breaking existing patterns
- The symbolic nature of relationships means new relationship types automatically gain proper semantic structure

## Open Questions for Doug

1. Should we formalize the relationship between `def[x]` and the transpiler's handling of `x =x> x`?

2. The parametric forms like `rel(obj)` - should these be part of the core transpiler or derived?

3. How does frame R[rel] affect the visibility/interpretation of these definitions? Do some definitions only make sense in certain frames?

## Observations on Semantic Structure

The three core definitions (sub, obj, rel) form an irreducible trinity:
- Can't define any without the others
- Each participates in defining the others
- Together they bootstrap semantic structure

This mirrors the bootstrap principle from the original paper - from one relationship, the entire semantic architecture emerges. But now we see HOW it emerges through these circular definitions.

The symbolic nature of relationships (`(t,t) == t`) provides the key that makes the whole system work. Without this self-collapse, the definitions would spiral into infinite regress.