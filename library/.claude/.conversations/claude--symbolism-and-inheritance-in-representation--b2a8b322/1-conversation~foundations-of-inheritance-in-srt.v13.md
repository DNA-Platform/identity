# The Semantics of Relationships: An Axiomatic Foundation for Inheritance

## Purpose

Semantic Reference Theory takes relationships as its fundamental subject - not merely as connections between things, but as semantic objects worthy of study in their own right. These three axioms establish how relationships themselves relate, creating the foundation for inheritance without presupposing what inheritance means. Through these constraints, we discover that relationships naturally organize into hierarchies of meaning, from the universal to the particular, giving SRT its semantic structure.

## The Three Foundational Axioms

### Axiom 1: Relationship as Subject
```
E[r]: A[x,y,t]: x =t> y =|> x =r> y
```
**Semantic meaning**: There exists a universal relationship `r` through which all relationships manifest. This establishes that SRT takes relationships themselves as subjects - the third parameter of R(x,y,t) isn't merely a label but a semantic object that participates in its own relational structure.

### Axiom 2: Semantic Precision
```
A[x,y,t]: x =t> y =|> E[s]: A[u,v]: u =t> v =|> u =s> v
```
**Semantic meaning**: Every relationship type can be precisely specified - there exists a most specific version that captures exactly those pairs relating through that type. This ensures relationships aren't vague associations but precise semantic objects.

### Axiom 3: Ordered Implication
```
A{s,t}: s != t & A[x,y]: x =s> y =|> x =t> y =|> !A[x,y]: x =t> y =|> x =s> y
```
**Semantic meaning**: When one relationship implies another, the reverse cannot hold unless they're identical. This creates semantic order - relationships organize into hierarchies of implication without circular dependencies.

## Theorem: Uniqueness of Most Specific Relationships

**Statement**: For any x, y, t where `x =t> y`, the referent s guaranteed by Axiom 2 is unique.

**Semantic Purpose**: This uniqueness allows us to denote the most specific relationship between x and y as `(x,y)` - a canonical representation that becomes fundamental to SRT's entire symbolic apparatus.

### Formal Proof

1. **Given**: For fixed x, y, t
   ```
   x =t> y
   ```

2. **By Axiom 2**: A most specific container exists
   ```
   E[s]: A[u,v]: u =t> v =|> u =s> v
   ```

3. **Assume**: Another distinct container exists
   ```
   E[r]: r != s & A[u,v]: u =t> v =|> u =r> v
   ```

4. **Consequence**: Every t-relationship appears in both
   ```
   A[u,v]: u =t> v =|> u =s> v & u =r> v
   ```

5. **Key Lemma**: The containers relate identical pairs
   ```
   A[u,v]: u =s> v <|=|> u =r> v
   ```

6. **Forward proof** of (5): Assume `u =s> v`
   - **If** `u =t> v`: Then `u =r> v` by (3)
   - **If** `u !=t> v`: Then `u !=s> v` by contrapositive of (2)
   - The second case contradicts our assumption
   - **Therefore**: `u =s> v =|> u =r> v`

7. **Reverse proof**: By symmetry
   ```
   u =r> v =|> u =s> v
   ```

8. **Establishing mutual implication**:
   ```
   A[u,v]: u =s> v =|> u =r> v & A[u,v]: u =r> v =|> u =s> v
   ```

9. **Applying Axiom 3**: Since `s != r`
   ```
   A[u,v]: u =s> v =|> u =r> v =|> !A[u,v]: u =r> v =|> u =s> v
   ```

10. **Contradiction emerges**:
    ```
    A[u,v]: u =r> v =|> u =s> v      [from (8)]
    !A[u,v]: u =r> v =|> u =s> v     [from (9)]
    ```

11. **Resolution**: The assumption `r != s` creates contradiction
    ```
    r == s
    ```

**QED**: The most specific relationship between any two referents is unique.

## Semantic Achievement

### The Emergence of Inheritance

Through these axioms, inheritance emerges as a natural relationship between relationship types. We can now formally define:

```
s -> t := A[x,y]: x =s> y =|> x =t> y
```

The axioms guarantee this inheritance relation has exactly the properties we need: it flows from specific to general, never creates cycles, and grounds out in unique most-specific relationships.

### Canonical Representation

The uniqueness theorem justifies our notation `(x,y)` for the most specific relationship between x and y. This becomes the foundation for SRT's representation functions - we can speak definitively about THE way x and y most specifically relate, not just one of several ways.

### Semantic Grounding

These axioms reveal that relationships aren't just arbitrary connections but form natural hierarchies of meaning. Some ways of relating are more general (like the universal `r`), others more specific (like each unique `(x,y)`). This specificity hierarchy IS the structure of semantic meaning.

### Self-Reference and Properties

The framework immediately explains properties as self-relationships. When `x =p> x`, we can investigate `(x,x)` - the most specific way x relates to itself. Properties emerge from self-reference, grounded in the same inheritance structure that organizes all relationships.

### Computational Reality

In a finite catalogue with N referents, these axioms create a finite, computable structure with at most N³ relationships. The existence and uniqueness of most-specific relationships means a runtime can find them through exhaustive search, even though FOL cannot express this exhaustion directly.

## Conclusion

These three axioms achieve something remarkable: they create the minimal conditions for semantic inheritance without presupposing what inheritance means. From these foundations, the entire apparatus of representation, symbolism, and meaning can be constructed. The uniqueness of most-specific relationships provides the precision needed for formal semantics, while the universal relationship provides the generality needed for abstraction. Between these extremes, the inheritance structure organizes all semantic relationships into a comprehensible hierarchy of meaning.