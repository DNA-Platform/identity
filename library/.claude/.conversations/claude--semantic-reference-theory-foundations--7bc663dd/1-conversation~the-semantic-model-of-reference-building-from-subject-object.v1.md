# The Semantic Model of Reference: Building from Subject-Object Relationships

## I. The Primitive and Its Interpretation

Semantic Reference Theory begins with a single primitive relation R(x,y,t), interpreted as "x refers to y through t" and notationally expressed as:

```
x =t> y
```

This serves as the semantic equivalent of what the Turing machine provides for computation—a minimal structure from which all semantic relationships emerge.

### Fundamental Equality

Since equality exists in first-order logic, we must capture it within our reference structure:

```
E[eq]: A[x,y]: x = y <iff> x =eq> y
```

This allows us to define:
- `x == y` as shorthand for `x =eq> y`
- `x !== y` as shorthand for `!(x =eq> y)`

## II. The Five Structural Cases

The complete space of how three variables can relate through equality partitions into exactly five cases. This exhaustive analysis reveals what referents must exist to make reference semantically coherent.

### The Cyclical Notation

The notation `s != r != o != s` captures the complete triangular relationship among three variables by cycling back to check the final inequality. This ensures all three pairwise relationships are specified.

### Case 1: All Distinct
```
s != r != o != s
```

When subject, relationship, and object are all distinct, we have the archetypal pattern. To capture this, we introduce:

```
sub =rel> obj
```

Where `sub`, `rel`, and `obj` are distinct referents representing the types of subjects, relationships, and objects respectively. This establishes that `(sub,obj) == rel`—the most specific relationship between subject and object types is the relationship type itself.

### Case 2: Subject Is Relationship
```
s == r != o != s
```

Here the subject IS the relationship through which it relates to the object. We capture this with:

```
sym =sym> lit
```

The referent `sym` (symbol) serves dual roles—both subject and relationship—while `lit` (literal) serves as object. This means symbols symbolize literals through the act of symbolization itself.

From this we can derive:
- `sym =sub> sym` (symbols have subjecthood)
- `lit =obj> lit` (literals have objecthood)
- `sym =rel> rel` (symbols inherit from relationships)
- `(sym,lit) == sym` (symbolization is most specific)

### Case 3: Subject Is Object
```
s != r != o == s
```

When subject and object coincide but the relationship remains external:

```
ref =eq> ref
```

Here `ref` (referent) serves as both subject and object, related through `eq` (equality). This captures self-reference through an external relationship, establishing `(ref,ref) == eq`.

### Case 4: Relationship Is Object
```
s != r == o != s
```

The relationship itself becomes the object of reference:

```
sym =rep> rep
```

Here `sym` relates to `rep` (representation), but `rep` serves as both relationship type and object. This captures how symbols are "part of" representations, like elements in a collection.

From this:
- `rep =rel> rel` (representations are relationships)
- `rep =obj> obj` (representations are objects)
- `(sym,rep) == rep` (representation is most specific)

### Case 5: All Equal
```
s == r == o == s
```

Complete self-reference where an entity relates to itself through itself:

```
eq =eq> eq
```

Also satisfied by:

```
rel =rel> rel
```

These are self-grounding relationships—semantic bedrock where reference needs no external support.

## III. Properties and Self-Reference

### Properties as Self-Referential Relationships

When a referent relates to itself through a relationship type, it has that type as a property:

```
x =p> x means "x has property p"
```

From our cases:
- `sub =sub> sub` (subject has subjecthood property)
- `obj =obj> obj` (object has objecthood property)
- `eq =eq> eq` (equality has equality property)

### The sub == (rel) Hypothesis

If `sub` is actually the canonical symbol for `rel`, then:
- `sub =sub> rel` would mean subjecthood represents relationships
- Being a subject fundamentally means being in a relationship
- This would explain why `sub =sub> sub` holds (symbols self-refer)

## IV. Reference and Representation

### Definition of Reference

A relationship is referential when it connects a representation to what it represents:

```
If rep =t> obj and t -> rep, then t is referential
If t == (rep,obj), then rep refers to obj
```

Thus:
- `sym =sym> lit` is referential (symbols refer to literals)
- `x =eq> x` is NOT referential (equality isn't representation)

### Inheritance Without Recursion

For relationship types, inheritance is defined through reference chains:

```
s -> t := s =rel> t || s == t
```

This avoids recursion while achieving the necessary structure. If types possess canonical symbols of what they inherit from:

```
s =rel> t =|> s =(t)> s
```

Then inheritance becomes symbol possession rather than recursive definition.

## V. The Eight-Referent Model

From the five cases emerge exactly eight fundamental referents:

1. **eq** - equality (self-grounding)
2. **ref** - referent (universal type)
3. **sub** - subject (archetypal subject)
4. **rel** - relationship (archetypal relationship)
5. **obj** - object (archetypal object)
6. **sym** - symbol (dual subject/relationship)
7. **rep** - representation (dual relationship/object)
8. **lit** - literal (pure object)

### Core Relationships

The fundamental relationships established:
```
sub =rel> obj          // archetypal trinity
sym =sym> lit          // symbolization
ref =eq> ref           // self-equality
sym =rep> rep          // symbol in representation
rel =rel> rel          // relationships relate
eq =eq> eq             // equality equals
```

### Derived Structure

From these fundamentals:
```
sym =rel> rel          // symbols are relationships
rep =rel> rel          // representations are relationships
eq =rel> rel           // equality is a relationship
sym =sub> sym          // symbols are subjects
lit =obj> lit          // literals are objects
```

## VI. Theoretical Significance

### Semantic Discovery vs. Formal Stipulation

The five cases aren't chosen—they're mathematically exhaustive. The eight referents aren't invented—they're discovered as necessary for each structural pattern to be semantically coherent. This suggests meaning has a determinate foundational structure.

### Types vs. Instances

The referents represent types, not instances. Just as the type "Number" doesn't have numeric operations, the type `sub` doesn't automatically have subjecthood. This distinction is crucial for understanding the model's semantics.

### Extensibility

The model provides a framework rather than a closed system. Canonical symbols can be added when needed: `(obj)`, `(sub)`, etc. This extensibility allows richer semantic structures while maintaining the foundational architecture.

## VII. Consistency and Completeness

### What the Model Achieves

With just eight referents and their relationships, we capture:
- The subject-object-relationship structure
- Symbol-literal distinction
- Representation and membership
- Properties and types
- Self-reference and grounding

### Sparse Relationships

Not every pair of referents has a defined relationship beyond equality. This sparsity is semantically meaningful—not everything relates to everything else. The model includes only necessary semantic relationships.

### The Bootstrap Principle

SRT aims for axioms that are vacuously true in an empty catalogue but become substantive when relationships are added:

```
E[x,y,t]: x =t> y =|> E[eq]: A[a,b]: a = b <iff> a =eq> b
```

From a single relationship, the entire semantic structure emerges.

## VIII. Conclusion

This systematic exploration of the five structural cases reveals that reference has a determinate foundational structure. The eight referents and their relationships form a minimal complete model for semantic reference—discovered through systematic analysis rather than stipulated through arbitrary axiomatization.

The model demonstrates that meaning can be built from within, using reference to construct the very concepts needed to understand reference. This reflexive construction, rather than being circular, reveals the foundational architecture of meaning itself.