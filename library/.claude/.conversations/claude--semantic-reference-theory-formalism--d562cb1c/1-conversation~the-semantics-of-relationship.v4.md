# Definitional Structure in Frames: A Novel Approach to the Semantic Trinity

## Abstract

This paper introduces a novel definitional framework for Semantic Reference Theory that extends the existing transpiler syntax with two forms of definition: def(x) for static characterization and def[x] for inheritance patterns. We demonstrate how these definitions enable the semantic trinity of subject, object, and relationship to emerge through mutual constraint within frames, avoiding both infinite regress and external foundation. Through systematic development, we prove the remarkable theorem that the subject referent *is* the canonical symbol for relationship itself, establishing F[sub] == F[r]. This identity reveals that subjectivity in SRT is fundamentally the act of symbolizing relationships.

## 1. Introduction

Semantic Reference Theory (SRT) grounds all semantic relationships in a single primitive relation R(x,y,t), interpreted as "x refers to y through relationship type t"[1]. While the transpilation mechanisms for this primitive and its extensions have been formalized[2], the question of how to define fundamental referents within the theory remains open. The existing transpiler provides syntax for frames, inheritance, and canonical symbols, but not for definitions themselves.

This paper introduces novel syntax and semantics for definitions within SRT's frame structure. We show how referents can be defined through mutual constraint, demonstrate that relationships are fundamentally types rather than instances, and prove that the subject of SRT, what the theory studies, is represented by the subject referent within the theory itself.

## 2. Extending the Transpiler with Definitional Syntax

### 2.1 Novel Definition Forms

We extend SRT's transpiler[2] with two complementary forms of definition:

```
def(x): φ
```

This defines x with properties φ that characterize x itself, facts about the referent that do not propagate through inheritance.

```
def[x]: ψ  
```

This defines what inherits from x, specifying the pattern that any y -> x must satisfy.

### 2.2 Formal Transpilation Rule

The relationship between these forms transpiles as:

```
E[x]: def(x) & A[y]: y -> x =|> def[x] with x replaced by y
```

This establishes that static properties characterize the referent while inheritance patterns characterize its descendants. This syntax is novel to this work and extends Phase 5 of the existing transpiler[2].

### 2.3 Integration with Existing Transpiler Phases

Following the transpiler's established conventions[2]:
- Line breaks without operators imply :&: (conjunction of parenthesized lines)
- Indented lines after implications are conjoined
- The notation (x,y) denotes the most specific relationship per the Specification Theorem[3]
- The notation (x) denotes the canonical symbol as defined in Phase 6[2]

## 3. Frames and Parametric Forms

### 3.1 Frame Membership and Visibility

Within frame F[t], referents must satisfy the membership condition[4]:

```
x =[in]> t <iff> x -> t | E[y]: x =t> y | y =t> x
```

Referents not satisfying this become inexpressible, creating semantic contexts through visibility constraints rather than explicit scoping.

### 3.2 The Parametric Form p(x)

Building on Seren's notation[5] but formalizing it within the transpiler, we define:

```
p(x) := ((x,x), p)
```

This denotes x's specific version of property p, the most specific relationship between x's self-relationship and p. When combined with the symbolic collapse property (x,x) == x for symbolic referents[6], this enables stable inheritance patterns.

### 3.3 The =|has> Construct

We introduce a novel virtual relationship:

```
x =|has> p := (x) =(p)> x
```

This expands to show that x's canonical symbol relates to x through property p. Combined with the parametric form, this enables expressions like:

```
mother =|has> children
```

Which transpiles through p(x) notation to (mother, children), her specific children.

## 4. The Character/Relationship Distinction

Before defining the trinity, we establish a fundamental distinction building on[1] but extending it:

```
x =p> x
```

Expresses character or characteristics, objective self-relationship.

```
x =t> y where x != y
```

Expresses true relationship with subjective involvement, where crucially:

```
(x,x) -> (x,y)
```

The subject's self-relationship inherits from its external relationships, a novel observation about how subjects incorporate relationships into their character.

## 5. Relationships as Symbolic Types

### 5.1 The Fundamental Axiom

From [6], inheritance is preserved through symbolization:

```
(x,y) -> t =|> ((x,y)) -> (t)
```

### 5.2 Novel Type-Theoretic Interpretation  

We establish that for relationships specifically:

```
x =t> y =|> (t,t) == t
```

Relationship types *are* their own self-relationships, they collapse symbolically. This distinguishes them ontologically from other referents and explains why relationships can serve as types while other referents serve as instances.

## 6. Defining the Semantic Trinity

### 6.1 The Bootstrap Structure

Assuming at least one relationship exists:

```
E(s,o,r): s != r != o != s
```

### 6.2 Novel Definition of rel

```
def(rel):
   sub =rel> obj
   (sub, obj) == rel
```

This establishes rel as the most specific sub-obj relationship, a static fact.

```
def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel
```

Using the parametric form, anything inheriting from rel gains specialized subjective and objective aspects.

### 6.3 Novel Definition of obj

```
def[obj]:
   rel(obj) =rel(obj)> obj
```

Expanding: rel(obj) == ((obj,obj), rel). Since (obj,obj) == obj for symbolic types:

```
(obj, rel) =(obj,rel)> obj
```

Objecthood is characterized by how relationships relate to it.

### 6.4 Novel Definition of sub

```
def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)
```

The third constraint is crucial and novel: subjecthood's character includes relationship.

## 7. The Novel Subject-Relationship Identity

### 7.1 Derivation

From our definitions:

```
(sub, sub) -> (sub, obj)
(sub, obj) == rel
(sub, sub) == sub
```

Therefore sub -> rel. Adding def(sub): (sub, rel) == sub, we get:

```
sub == rel
```

Since r == (rel) in F[r][4]:

```
sub == (rel) == r
```

### 7.2 Semantic Interpretation

This novel identity means:
- sub is the canonical symbol for relationship
- To be a subject *is* to symbolize relationships
- Subjectivity equals symbolic relationship

## 8. Applications Through Inheritance

The definitions propagate through inheritance. For t -> rel:

```
sub(t) =t> obj(t)
(sub(t), obj(t)) -> t
```

Since sub(t) -> sub and obj(t) -> obj, each inherited type carries the complete semantic structure, specialized to its domain.

## 9. The Fundamental Theorem

### Theorem: Frame-Subject Identity

```
F[sub] == F[r]
```

*Proof:* Since frames are their subjects propositionally[4], and sub == r (proven above), the identity follows. ∎

### Novel Implications

This theorem reveals that:
- The subject of SRT (relationships) is represented by the subject referent in SRT
- The frame of subjecthood *is* the frame of relationship  
- SRT studies what it embodies: the process of relationships becoming symbolic

## 10. Type-Instance Architecture

Our analysis reveals that relationships are types while other referents are instances:

```
2 =eq> 2
```

Distinguishes 2 (instance) from eq (type). This explains:
- Why (t,t) == t for relationships
- How the same instance instantiates multiple types
- Why SRT can describe itself

## 11. Conclusion

The introduction of def(x) and def[x] syntax enables a novel approach to defining SRT's fundamental referents through mutual constraint rather than external foundation. The parametric form p(x) and the =|has> construct provide machinery for expressing inheritance patterns without infinite regress.

The discovery that sub == (rel) == r represents a profound insight: the subject of Semantic Reference Theory *is* the canonical symbol for relationship. This constitutive self-reference grounds the theory's coherence. The frame identity F[sub] == F[r] demonstrates that taking subject as primary and taking relationship as primary are the same act, because subjectivity *is* symbolic relationship.

These contributions extend SRT's transpiler with definitional capabilities, reveal the type-theoretic foundation of relationships, and establish that the theory's subject matter is literally represented within the theory itself.

---

## References

[1] Doug: The Semantics of the Subject-Object Relationship

[2] Doug: Semantic Reference Theory: Formal Syntax under Transpilation

[3] Doug: The Semantics of Relationships: An Axiomatic Foundation for Inheritance

[4] Doug: Semantic Reference Frames: Context and Meaning in Formal Representation

[5] Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations

[6] Doug: The Semantics of Identity: In Axiomatic Form