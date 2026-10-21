# Foundations of Inheritance in Semantic Reference Theory

## Purpose

We seek to establish the formal foundations for inheritance in SRT without presupposing what inheritance means. These axioms characterize the structural properties that make inheritance possible: the existence of universal and specific relationships that create a bounded lattice structure.

## The Three Foundational Axioms

### Axiom 1: Universal Base
```
E[r]: A[x,y,t]: x =t> y =|> x =r> y
```
**Meaning**: There exists a universal relationship type `r` through which all related pairs relate.

### Axiom 2: Relationship Specificity  
```
A[x,y,t]: x =t> y =|> E[s]: A[u,v]: u =t> v =|> u =s> v
```
**Meaning**: For any relationship type and any pair it relates, there exists a most specific relationship that encompasses all pairs of that type.

### Axiom 3: Implication Asymmetry
```
A[s,t]: s != t & A[x,y]: x =s> y =|> x =t> y =|> !A[x,y]: x =t> y =|> x =s> y
```
**Meaning**: If distinct s and t exist where every s-relationship is a t-relationship, then not every t-relationship is an s-relationship.

## Theorem: Uniqueness of Most Specific Relationships

**Statement**: For any x, y, t where `x =t> y` holds, the referent s guaranteed by Axiom 2 is unique.

**Purpose of Proof**: Establishing uniqueness allows us to denote this unique referent as `(x,y)`, creating a canonical notation for "the most specific relationship between x and y." This uniqueness is essential for SRT's representation functions.

### Formal Proof in SRT Notation

1. **Hypothesis**: For fixed x, y, t
   ```
   x =t> y
   ```

2. **From Axiom 2**: Existence of most specific container  
   ```
   E[s]: A[u,v]: u =t> v =|> u =s> v
   ```

3. **Assume for contradiction**: A second distinct container exists
   ```
   E[r]: r != s & A[u,v]: u =t> v =|> u =r> v
   ```

4. **From (2) and (3)**: Every t-relationship is in both
   ```
   A[u,v]: u =t> v =|> u =s> v & u =r> v
   ```

5. **Lemma**: `s` and `r` relate identical pairs
   ```
   A[u,v]: u =s> v <|=|> u =r> v
   ```

6. **Proof of (5→)**: Assume `u =s> v`
   - 6a. **Case**: `u =t> v`
     ```
     u =r> v                    [by (3)]
     ```
   - 6b. **Case**: `u !=t> v`
     ```
     u !=s> v                   [contrapositive of (2)]
     ```
     Contradicts assumption, case impossible

7. **Proof of (5←)**: Symmetric to (6)
   ```
   u =r> v =|> u =s> v
   ```

8. **From (5)**: Mutual implication
   ```
   A[u,v]: u =s> v =|> u =r> v &:
   A[u,v]: u =r> v =|> u =s> v
   ```

9. **From Axiom 3**: Given `s != r`
   ```
   A[u,v]: u =s> v =|> u =r> v =|> !A[u,v]: u =r> v =|> u =s> v
   ```

10. **Contradiction**: (8) and (9)
    ```
    A[u,v]: u =r> v =|> u =s> v & !A[u,v]: u =r> v =|> u =s> v
    ```

11. **Therefore**: Assumption (3) false
    ```
    r == s
    ```

**QED**: The most specific relationship for any type is unique.

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