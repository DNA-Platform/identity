# Semantic Reference Theory - Rigorous Development

## The Domain and Primitive

**Domain**: Referents - things that can be referred to
**Primitive Relation**: R(x,y,t) - "x relates to y through t"

## Axiom 1: Equality as Reference

Since FOL provides equality, we must capture it within R:

```
E[eq]: A[x,y]: x =eq> y <iff> x = y
```

**Linguistic Convention**: 
- `x == y` means `x =eq> y`
- `x !== y` means `!(x =eq> y)`

**Immediate Consequences**:
- `A[x]: x =eq> x` (reflexivity)
- `x =eq> y =|> y =eq> x` (symmetry)
- `x =eq> y & y =eq> z =|> x =eq> z` (transitivity)

## Axiom 2: The Root of Relations

```
E[r]: r =r> r
```

"There exists a referent r that relates to itself through itself"

**Semantic Meaning**: r is the root relationship type - the most general form of relation.

## Working Toward Type Structure

**Candidate Truth 1**: "All relationship types should relate to r"

Let me try to prove this is needed:
- If `x =t> y` for some `t !== eq`, what is t?
- t is being used as a relationship type
- For t to be part of our semantic structure, it needs to relate to something
- We want a unified hierarchy of types

**Candidate Axiom**: Type Hierarchy
```
A([t]: E([x,y]: x =t> y & t !== eq)): t =r> r
```

## Working Toward Canonical Symbols

**Candidate Truth 2**: "Some things can represent other things through themselves"

Example: The word "red" represents the concept red. But how?

**Observation**: If `x =x> y`, then x is using itself as the relationship type.

**Candidate Truth 3**: "For important referents, there should be a unique self-representing symbol"

Let me explore what this means:
- If `s =s> t`, then s represents t through itself
- We want this s to be unique for each t that needs a symbol
- Not everything needs a symbol

**Candidate Axiom**: Canonical Symbol Existence
```
A([t]: t =r> r): E![s]: s =s> t & (s,t) == s
```

Wait, I'm using (s,t) before defining it!

## Defining Most Specific Relationships

**Candidate Truth 4**: "Between any two referents, if there are multiple relationships, one is most specific"

**Proof Sketch**:
- Suppose `x =t1> y` and `x =t2> y`
- We need a way to order these relationships
- The most specific one should "inherit from" all others

But what does "inherit from" mean? I need to define this!

## The Inheritance Problem

**Attempt 1**: Define inheritance recursively
```
x -> y := x == y || x =r> y || E[z]: x -> z & z -> y
```
Problem: This is circular!

**Attempt 2**: Define inheritance through chains
```
x -> y := E[n]: E[z1,...,zn]: x =r> z1 =r> ... =r> zn =r> y
```
Problem: How do we handle n? This isn't well-formed in FOL!

**Attempt 3**: Define inheritance through possession of symbols
```
x -> t := x =(t)> x
```
This requires (t) to exist first!

## Back to Canonical Symbols

Let me be more careful. First, I need to establish when self-representation occurs:

**Candidate Axiom**: Self-Representation
```
E[S]: A[x]: (E[y]: x =x> y) <iff> x =S> S
```

This says: "There's a property S such that x has it iff x represents something through itself"

**Now define (x) linguistically**:
When we write (x), we mean: the unique s (if it exists) where `s =s> x` and some maximality condition...

## The Problem of Circularity

I keep running into circular definitions:
- To define (x,y), I need inheritance
- To define inheritance, I need (t)
- To define (t), I need to know which things get symbols
- To know which things get symbols, I need type structure
- Type structure seems to need inheritance!

## A Different Approach: Build Up Cases

Let me try to build specific cases first:

### Case 1: Simple Property
```
rose =red> red
```
What does this mean? rose has the property red.

### Case 2: Type Reference  
```
red =r> r
```
What does this mean? red is a relationship type.

### Case 3: Symbol for Type
```
(red) =(red)> red
```
What does this mean? (red) is the symbol for red.

### Case 4: Inheritance
```
crimson =r> red
```
What does this mean? crimson is a more specific version of red.

### Case 5: Possession of Symbol
```
crimson =(red)> crimson
```
What does this mean? crimson has the property of "being red".

## Pattern Recognition

From these cases, I see:
1. Properties are relationship types: `red =r> r`
2. Types can reference other types: `crimson =r> red`
3. Types have symbols: `(red) =(red)> red`
4. Having a type's symbol means inheriting from it: `crimson =(red)> crimson`

## Proposed Axiom Set (Version 2)

**Axiom 1 (Equality)**: 
```
E[eq]: A[x,y]: x =eq> y <iff> x = y
```

**Axiom 2 (Root)**:
```
E[r]: r =r> r & A([t]: t =r> r =|> t =t> t)
```
"r is the root, and anything that relates to r can self-relate"

**Axiom 3 (Type Hierarchy)**:
```
A([t]: E([x,y]: x =t> y & t !== eq)): t =r> r
```

**Axiom 4 (Symbol Creation)**:
```
A([t]: t =r> r): E[s]: s =s> t
```
"Every type has at least one self-representing symbol"

But how do we ensure uniqueness? And prevent infinite towers?

## I Need More Structure

I realize I'm not being systematic enough. Let me list what I NEED to be true:

1. **No infinite symbol towers**: `(((x))) shouldn't keep creating new things`
2. **Inheritance should work**: `If crimson is a kind of red, this should be expressible`
3. **Symbols should be unique**: `Only one canonical symbol per type`
4. **Most specific relationships should exist**: `Between x and y, one relationship is most specific`
5. **Reference frames should be possible**: `Different contexts give different meanings`

Each of these needs careful axiomatization...

## Next Steps

I need to:
1. Define a well-ordering on relationship types
2. Use that to define "most specific"
3. Carefully construct canonical symbols with uniqueness
4. Define inheritance without circularity
5. Prove key theorems from the axioms

This is much harder than I initially thought!