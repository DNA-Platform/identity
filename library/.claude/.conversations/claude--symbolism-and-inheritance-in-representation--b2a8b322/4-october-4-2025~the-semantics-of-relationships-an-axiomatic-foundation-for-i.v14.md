# The Semantics of Relationships: An Axiomatic Foundation for Inheritance

## Purpose

Semantic Reference Theory takes relationships as its fundamental subject - not merely as connections between things, but as semantic objects worthy of study in their own right. These three axioms establish how relationships themselves relate, creating the foundation for inheritance without presupposing what inheritance means. Through these constraints, we discover that relationships naturally organize into hierarchies of meaning, from the universal to the particular, giving SRT its semantic structure.

## The Three Foundational Axioms

### Axiom 1: Expressing Relationships
```
E[r]: A[x,y,t]: x =t> y =|> x =r> y
```
**Semantic meaning**: There exists a referent `r` that represents relationship itself - the pure concept of relating. All referents that express relationships inherit from it, making `r` the universal ancestor of every relationship type. This establishes that relationships are semantic objects within SRT's domain.

### Axiom 2: Specifying Relationships
```
A[x,y]:E([s]: x =s> y):A(t: s != t & x =t> y):A[x',y']: x' =s> y' =|> x' =t> y'
```
**Semantic meaning**: Every pair has a canonical relationship - a most specific way they relate that implies all other relationships between them. This canonical relationship is complete: any other pair sharing it must share all the relationships of the original pair.

### Axiom 3: Generalizing Relationships
```
A{s,t}:A[x,y]: x =s> y =|> x =t> y =||> x =t> y =|> x =s> y
```
**Semantic meaning**: If two distinct relationships have mutual implication, they are equivalent. By contrapositive: distinct relationships cannot mutually imply each other, creating ordered hierarchy without cycles.

## The Specification Theorem: Uniqueness of Canonical Relationships

**Statement**: For any pair (x,y), the canonical relationship s guaranteed by Axiom 2 is unique.

**Semantic Purpose**: This theorem justifies denoting the canonical relationship between x and y as `(x,y)` - a unique specification that becomes fundamental to SRT's symbolic apparatus. The uniqueness ensures we can speak definitively about THE way x and y most specifically relate.

### Formal Proof

**To Prove**: The s from Axiom 2 is unique for any pair

1. **Fix**: Arbitrary pair with a relationship
   ```
   E[x',y',s]: x' =s> y'
   ```

2. **Define uniqueness**: For s relating x' to y'
   ```
   s =|unique> s := 
     A[s']: x' =s'> y' &: 
       A(t: s' != t & x' =t> y'):A[x,y]: x =s'> y =|> x =t> y :&
     =|> s' == s
   ```
   This means: if any s' also satisfies Axiom 2 for (x',y'), then s' equals s

3. **Apply Axiom 2**: Our s satisfies it
   ```
   A(t: s != t & x' =t> y'):A[x,y]: x =s> y =|> x =t> y
   ```

**To establish**: s =|unique> s

4. **Let s'**: Be arbitrary satisfying Axiom 2 for (x',y')
   ```
   x' =s'> y' &:
     A(t: s' != t & x' =t> y'):A[x,y]: x =s'> y =|> x =t> y
   ```

5. **Assume**: s' != s for contradiction

6. **From (3)**: Since x' =s'> y' and s' != s
   ```
   A[x,y]: x =s> y =|> x =s'> y
   ```

7. **From (4)**: Since x' =s> y' and s != s'
   ```
   A[x,y]: x =s'> y =|> x =s> y
   ```

8. **Apply Axiom 3**: We have s != s' with
   ```
   A[x,y]: x =s> y =|> x =s'> y &:
   A[x,y]: x =s'> y =|> x =s> y
   ```

9. **By Axiom 3**: Mutual implication means
   ```
   s == s'
   ```

10. **Contradiction**: From (5) and (9)
    ```
    s' != s & s == s'
    ```

11. **Therefore**: s' == s, establishing
    ```
    s =|unique> s
    ```

**QED**: The s from Axiom 2 is unique for pair (x',y'). We denote this unique s as (x',y').

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

These three axioms—Expressing, Specifying, and Generalizing Relationships—establish the semantic foundation of SRT. By showing that relationships can be expressed through a universal referent, specified to exact boundaries, and generalized into hierarchies, we reveal that relationships themselves are the architecture of meaning. The Specification Theorem proves that every relationship has a unique most-specific form, justifying our notation `(x,y)` and enabling precise semantic representation. The title "The Semantics of Relationships" captures this core insight: in SRT, understanding how relationships relate to each other IS understanding semantics itself. Relationships aren't tools we use to build meaning—they ARE meaning, organized through patterns of inheritance from the most specific to the most general.