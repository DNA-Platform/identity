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

1. **Given**: `x =t> y` for some fixed x, y, t

2. **By Axiom 2**: `E[s₁]: A[x',y']: x' =t> y' =|> x' =s₁> y'`
   
3. **Assume for contradiction**: `E[s₂]: s₂ != s₁ & A[x',y']: x' =t> y' =|> x' =s₂> y'`

4. **From (2) and (3)**: `A[x',y']: x' =t> y' =|> (x' =s₁> y' & x' =s₂> y')`
   *Every t-relationship is both an s₁-relationship and an s₂-relationship*

5. **Claim**: `A[x',y']: x' =s₁> y' <|=|> x' =s₂> y'`
   
   **Proof of claim**:
   - **Forward direction** `(=|>)`: Take any x', y' where `x' =s₁> y'`
     - Case 1: If `x' =t> y'`, then `x' =s₂> y'` by (3)
     - Case 2: If `!(x' =t> y')`, then by contrapositive of (2), we cannot have `x' =s₁> y'`
     - Therefore: `x' =s₁> y' =|> x' =s₂> y'`
   
   - **Reverse direction** `(<|=)`: By symmetry, `x' =s₂> y' =|> x' =s₁> y'`

6. **From (5)**: `(A[x',y']: x' =s₁> y' =|> x' =s₂> y') & (A[x',y']: x' =s₂> y' =|> x' =s₁> y')`

7. **By Axiom 3** with s = s₁, t = s₂, and s₁ != s₂:
   ```
   (A[x',y']: x' =s₁> y' =|> x' =s₂> y') =|> !(A[x',y']: x' =s₂> y' =|> x' =s₁> y')
   ```

8. **Contradiction**: Statement (6) asserts both implications hold, but (7) says if the first holds, the second cannot.

9. **Therefore**: `s₁ == s₂`

**QED**: The most specific relationship is unique.

## Semantic Achievement

By establishing the existence and uniqueness of most specific relationships, we achieve:

### 1. Canonical Representation
We can now denote the unique most specific relationship between x and y as `(x,y)`. This becomes the foundation for SRT's binary representation function R''(x,y).

### 2. Inheritance Without Circularity  
The axioms ensure that relationships form a partial order:
- Axiom 1 provides a top element (r)
- Axiom 2 provides bottom elements for each related pair
- Axiom 3 prevents cycles in the implication structure

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