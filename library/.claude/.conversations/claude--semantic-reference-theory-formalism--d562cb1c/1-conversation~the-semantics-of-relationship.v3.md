# Definitions in Frames: The Semantics of Relational Structure

## Abstract

This paper presents a formal framework for definitions within Semantic Reference Theory's frame structure. We establish how referents are defined through mutual constraint rather than external foundation, demonstrate the distinction between static definitions (def(x)) and inheritance patterns (def[x]), and show how frames enable these definitions to function without infinite regress. The analysis reveals that relationships are fundamentally types that collapse their self-reference, distinguishing them ontologically from other referents. Through systematic development of the semantic trinity, we prove that the subject referent serves as the canonical symbol for relationship itself, culminating in the theorem F[sub] == F[r].

## 1. Introduction

Semantic Reference Theory grounds all semantic relationships in a single primitive relation R(x,y,t), interpreted as "x refers to y through relationship type t." The challenge of defining fundamental referents within this framework requires careful attention to how definitions operate within frames and how circular references resolve through semantic structure rather than external foundation.

This paper develops the formal machinery for definitions within frames, establishing the semantic trinity of subject, object, and relationship through mutual constraint. We demonstrate how frames provide contexts where definitions become canonical, preventing the explosion of referents while maintaining semantic precision.

## 2. Frame Structure and Transpilation

### 2.1 Frame Declaration

Following "Semantic Reference Frames: Context and Meaning in Formal Representation," we declare frames as:

```
F[x]
```

This establishes x as the subject of the frame. Within F[x], all relationship types inherit from x, creating a semantic context where x serves as the root of inheritance. While frames involve complex transpilation mechanisms for managing visibility and canonicity, propositionally F[x] transpiles to x itself, the frame *is* its subject.

### 2.2 Frame Membership

Within frame F[t], a referent x is meaningful only if it satisfies:

```
x =[in]> t <iff> x -> t | E[y]: x =t> y | y =t> x
```

This constraint determines visibility within the frame. Referents not satisfying this condition become literally inexpressible in the current semantic context, not merely ignored but absent from the frame's vocabulary.

### 2.3 The Default Frame

Every SRT development begins with:

```
F[r]
```

This establishes r as the foundational context. Since r -> r is axiomatic (reflexivity of inheritance), statements in F[r] are unconditional. Within this frame:

```
r == (rel)
```

The relationship type r serves as the canonical symbol for relationship itself.

## 3. Definition Syntax and Semantics

### 3.1 Two Forms of Definition

We introduce two complementary forms of definition:

```
def(x): φ
```

This defines x as a referent with properties φ that characterize x itself, facts about x that do not necessarily propagate through inheritance.

```
def[x]: ψ
```

This defines the inheritance pattern, what must hold for any y where y -> x.

### 3.2 Formal Transpilation

The relationship between these forms is captured by:

```
E[x]: def(x) & A[y]: y -> x <iff> def[x] with x replaced by y
```

This establishes that def(x) characterizes the referent itself while def[x] characterizes what it means to inherit from that referent.

### 3.3 Transpilation Conventions

Following "Semantic Reference Theory: Formal Syntax under Transpilation":
- Line breaks without terminating operators imply :&: (each line parenthesized)
- Implications with indented lines apply to the conjunction of all indented lines
- The notation (x,y) denotes the most specific relationship between x and y
- The notation (x) denotes the canonical symbol for x in the current frame

## 4. The Character of Relationships

Before developing definitions, we must understand a fundamental distinction. When a referent relates to itself:

```
x =p> x
```

This expresses the character or characteristics of x, objective self-relationship. When there is distinction:

```
x =t> y where x != y
```

This expresses true relationship with subjective involvement. Crucially:

```
x =t> y =|> (x,x) -> (x,y)
```

The subject's self-relationship inherits from its external relationships, incorporating them into its character.

## 5. Relationships as Symbolic Types

From "The Semantics of Identity: In Axiomatic Form," the fundamental axiom states:

```
(x,y) -> t =|> ((x,y)) -> (t)
```

Inheritance is preserved through symbolization. For relationships specifically:

```
x =t> y =|> (t,t) == t
```

Relationship types are inherently symbolic, they *are* their own self-relationships. This self-collapse distinguishes relationships from other referents and prevents infinite regress.

Since all relationships inherit from r, and r == (rel) serves as the canonical symbol, relationships represent relationship *types* rather than instances. They are ontologically distinct from the referents they connect.

## 6. Defining the Semantic Trinity

### 6.1 The Bootstrap Assumption

We begin with the existence of at least one relationship:

```
E(s,o,r): s != r != o != s
```

The redundant notation emphasizes the triangular structure where all three components are distinct.

### 6.2 Definition of rel

The relationship type receives both static and inheritance definitions:

```
def(rel):
   sub =rel> obj
   (sub, obj) == rel
```

This establishes that rel *is* the most specific relationship between sub and obj, a definitional fact about rel itself.

```
def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel
```

Using the parametric notation from "The Semantics of Inheritance: A Formal Analysis Through Family Relations," where p(x) := ((x,x), p), this means:
- For any t -> rel, it has subjective aspect sub(t) and objective aspect obj(t)
- The pattern (sub(t), obj(t)) -> t holds for all inheritors

### 6.3 Definition of obj

```
def[obj]:
   rel(obj) =rel(obj)> obj
```

Expanding the parametric form:

```
rel(obj) == ((obj,obj), rel)
```

Since relationships are symbolic:

```
(obj,obj) == obj
```

Therefore:

```
(obj, rel) =(obj,rel)> obj
```

This expresses that objecthood is characterized by how relationships relate to it.

### 6.4 Definition of sub

```
def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)
```

This creates a structure where:
1. sub relates to its version of obj through its version of rel
2. Relationships also represent sub itself
3. sub's self-relationship inherits from its relational role

The third constraint is crucial, it incorporates relationship into the character of subjecthood.

## 7. The Subject-Relationship Identity

### 7.1 Deriving the Identity

From the definitions:

```
(sub, sub) -> (sub, obj)
```

Sub's self-relationship inherits from external relationships.

```
(sub, obj) == rel
```

The most specific subject-object relationship is rel.

```
(sub, sub) == sub
```

Subject exhibits symbolic collapse.

Therefore sub -> rel. Adding:

```
def(sub): (sub, rel) == sub
```

Subject *is* its relationship to relationship.

### 7.2 The Canonical Analysis

In frame F[sub]:

```
sub =sub> rel
```

Sub symbolizes rel through itself.

```
sub -> rel
```

Sub inherits from rel.

```
sub =rel> rel
```

Sub relates to rel through rel.

Since sub is canonical to rel:

```
(sub, rel) == rel
```

Combined with (sub, rel) == sub:

```
sub == rel
```

Since (rel) == rel in F[r]:

```
sub == (rel) == r
```

## 8. Frame Canonicity and Inheritance

### 8.1 Canonical Relationships

Following "The Semantics of Relationships: An Axiomatic Foundation for Inheritance," every pair (x,y) has a unique most-specific relationship denoted (x,y). This uniqueness theorem justifies the notation and ensures semantic precision.

### 8.2 Frame-Relative Canonicity

Within F[t], the canonical of x satisfies:

```
(s,x) == s & (t,s) == t
```

Different frames impose different canonical structures on the same catalogue. This frame-relativity enables the same referent to have different representations in different contexts.

### 8.3 Preventing Referent Explosion

Instead of defining countless related referents, frames allow hopping between contexts where different relationships become canonical. This maintains precision while avoiding combinatorial explosion.

## 9. Using Definitions Through Inheritance

Consider a new relationship type t -> rel. Through def[rel]:

```
sub(t) =t> obj(t)
(sub(t), obj(t)) -> t
```

The type t inherits the full relational pattern, specialized to its domain.

Since sub(t) -> sub and obj(t) -> obj:

```
sub(t) =sub(t)> rel(sub(t))
rel(obj(t)) =rel(obj(t))> obj(t)
```

Each inherited type carries the complete semantic trinity structure.

For example, with love -> rel:
- sub(love) represents the lover
- obj(love) represents the beloved
- The pattern persists: sub(love) =love> obj(love)

## 10. The Type-Instance Distinction

The discovery that relationships are types while other referents are instances explains fundamental features:

1. Why (t,t) == t for relationships: types collapse self-reference
2. Why the same referent participates in different relationships: instances instantiate multiple patterns
3. How SRT describes itself: types can symbolize themselves

When writing:

```
2 =eq> 2
```

We distinguish:
- 2 as referent (instance)
- eq as relationship type (pattern)
- The instantiation with 2 as both subject and object

## 11. The Fundamental Theorem

### Theorem: Frame-Subject Identity

```
F[sub] == F[r]
```

*Proof:*
Since frames are their subjects propositionally, and we have established sub == r, the frame identity follows immediately. ∎

### Semantic Interpretation

This theorem reveals that the subject of Semantic Reference Theory, its area of study, is represented by the subject referent within the theory. The frame where subject is primary *is* the frame where relationship is primary because to be a subject *is* to symbolize relationships.

The identity sub == (rel) == r means:
- sub serves as the canonical symbol for relationship
- Working in F[r] means working where subject symbolizes relationship
- The subject does not "have" relationships but *is* their symbolization

## 12. Conclusion

The framework of definitions within frames reveals how Semantic Reference Theory bootstraps semantic structure from a single primitive relation. Through mutual constraint rather than external foundation, the semantic trinity emerges with each element defined through the others. The circular references resolve through frame structure and the symbolic nature of relationships.

The discovery that relationships are fundamentally types that collapse their self-reference explains their unique semantic character and distinguishes them ontologically from the referents they connect. This type-theoretic foundation, combined with the frame mechanism, enables semantic theories to compose like modular systems while maintaining coherence.

The profound theorem F[sub] == F[r] demonstrates that the theory's subject matter, relationships, is literally represented by the subject referent within the theory. This constitutive self-reference grounds the theory's ability to describe its own semantic structure. The subject does not describe relationships from outside but *is* the symbol through which relationships become meaningful, revealing that subjectivity itself is symbolic relationship.

---

## References

Doug: Semantic Reference Frames: Context and Meaning in Formal Representation

Doug: Semantic Reference Theory: Formal Syntax under Transpilation

Doug: The Semantics of Identity: In Axiomatic Form

Doug: The Semantics of Relationships: An Axiomatic Foundation for Inheritance

Doug: The Semantics of the Subject-Object Relationship

Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations