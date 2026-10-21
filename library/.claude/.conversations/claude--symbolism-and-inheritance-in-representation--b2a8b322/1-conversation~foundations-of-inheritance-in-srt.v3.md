# Foundations of Inheritance in Semantic Reference Theory

## Purpose

We seek to establish the formal foundations for inheritance in SRT without presupposing what inheritance means. These axioms characterize the structural properties that make inheritance possible: the existence of universal and specific relationships that create a bounded lattice structure.

## The Three Foundational Axioms

### Axiom 1: Universal Relationship
```
E[r]: A[x,y,t]: x =t> y =|> x =r> y
```
**Meaning**: There exists a universal relationship type `r` such that whenever x relates to y through any type t, then x also relates to y through r.

### Axiom 2: Most Specific Relationship  
```
A[x,y,t]: x =t> y =|> E[s]: A[x',y']: x' =t> y' =|> x' =s> y'
```
**Meaning**: For any relationship type t, there exists a most specific version s that relates all pairs that t relates.

### Axiom 3: Antisymmetry of Implication
```
A[s,t]: (A[x,y]: x =s> y =|> x =t> y) & s != t =|> !(A[x,y]: x =t> y =|> x =s> y)
```
**Meaning**: If every s-relationship implies a t-relationship and s≠t, then NOT every t-relationship implies an s-relationship. This prevents circular implication.

## Theorem: Uniqueness of Most Specific Relationships

**Statement**: For any x, y, t where x =t> y holds, the referent s guaranteed by Axiom 2 is unique.

**Purpose of Proof**: Establishing uniqueness allows us to denote this unique referent as (x,y), creating a canonical notation for "the most specific relationship between x and y." This uniqueness is essential for SRT's representation functions.

### Formal Proof in SRT Notation

**Given**: For some fixed x, y, t
```
x =t> y
```

**From Axiom 2**: There exists a most specific relationship containing all t-relationships
```
E[s₁]: A[x',y']: x' =t> y' =|> x' =s₁> y'
```

**Assume for contradiction**: A second, different relationship also contains all t-relationships
```
E[s₂]: s₂ != s₁ & A[x',y']: x' =t> y' =|> x' =s₂> y'
```

**Combining the conditions**: Every t-relationship must be in both s₁ and s₂
```
A[x',y']: x' =t> y' =|> (x' =s₁> y' & x' =s₂> y')
```

**Claim**: The relationships s₁ and s₂ must relate exactly the same pairs
```
A[x',y']: x' =s₁> y' <|=|> x' =s₂> y'
```

**Proof of forward direction**: If x' relates to y' through s₁, it also does through s₂
- Consider any x', y' where `x' =s₁> y'`
- Case: `x' =t> y'` holds
  ```
  x' =t> y' =|> x' =s₂> y'  [by assumption about s₂]
  ```
- Case: `!(x' =t> y')` holds
  ```
  !(x' =t> y') =|> !(x' =s₁> y')  [contrapositive of s₁ condition]
  ```
  This contradicts our assumption that `x' =s₁> y'`, so this case cannot occur
- Therefore: `x' =s₁> y' =|> x' =s₂> y'`

**Proof of reverse direction**: By symmetric argument
```
x' =s₂> y' =|> x' =s₁> y'
```

**Establishing mutual implication**: Both directions hold universally
```
(A[x',y']: x' =s₁> y' =|> x' =s₂> y') & (A[x',y']: x' =s₂> y' =|> x' =s₁> y')
```

**Applying Axiom 3**: With s = s₁, t = s₂, and s₁ != s₂
```
(A[x',y']: x' =s₁> y' =|> x' =s₂> y') & s₁ != s₂ 
=|> 
!(A[x',y']: x' =s₂> y' =|> x' =s₁> y')
```

**Contradiction**: We established both implications hold, but Axiom 3 says they cannot both hold
```
(A[x',y']: x' =s₂> y' =|> x' =s₁> y')  [from our proof]
&
!(A[x',y']: x' =s₂> y' =|> x' =s₁> y')  [from Axiom 3]
```

**Therefore**: Our assumption that s₂ != s₁ must be false
```
s₁ == s₂
```

**QED**: The most specific relationship is unique.

## Semantic Achievement

By establishing the existence and uniqueness of most specific relationships, we achieve:

### 1. Canonical Representation
We can now denote the unique most specific relationship between x and y as `(x,y)`. This becomes the foundation for SRT's binary representation function R''(x,y).

### 2. Inheritance Without Circularity  
The axioms ensure that if one relationship implies another, the reverse cannot also be true (unless they're identical). This prevents situations where:
- s implies t, and t implies u, and u implies s (circular dependency)
- Two different relationships mutually require each other
- The structure of implications has no foundation

### 3. Foundation for Self-Reference
Since every relationship has a most specific form, we can discuss how referents relate to themselves through specific types. The most specific self-relationship `(x,x)` becomes fundamental to property semantics.

### 4. Semantic Grounding
These axioms ground the notion that:
- Some relationships are more general (like r)
- Some are more specific (like (x,y))
- This specificity hierarchy IS inheritance

We can now define: **s inherits from t** precisely when `A[x,y]: x =s> y =|> x =t> y`

The axioms guarantee this inheritance relation is well-founded, antisymmetric, and has the structural properties needed for semantic representation.

### 5. Finite Computability
In a finite catalogue with N referents, there are at most N³ possible relationships. The existence of most specific relationships means we can computationally find them through exhaustive checking, even though FOL cannot express this exhaustion directly.

## Conclusion

These three axioms establish the minimal structure needed for inheritance to function as the organizing principle of semantic relationships. The uniqueness of most specific relationships provides the foundation for SRT's entire representational apparatus, from canonical symbols to frame-relative meaning.