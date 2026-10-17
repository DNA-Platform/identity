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

## Attempt at Systematic Construction

### Step 1: What is inheritance, really?

Let me think about what we want inheritance to capture:
- `crimson -> red` should mean "crimson is a kind of red"
- `red -> r` should mean "red is a relationship type"

Key insight: Maybe inheritance IS just reference for relationship types!

**Candidate Definition**:
```
For relationship types s,t: s -> t := s =r> t || s == t
```

This is simple! Let me test it:
- `crimson =r> red` means `crimson -> red` ✓
- `red =r> r` means `red -> r` ✓
- `r =r> r` means `r -> r` ✓

### Step 2: Transitivity of Inheritance

**Candidate Theorem**: If `s -> t` and `t -> u`, then `s -> u`

Proof attempt:
- Case 1: `s == t`. Then `s -> u` follows from `t -> u`.
- Case 2: `s =r> t` and `t == u`. Then `s =r> u`, so `s -> u`.
- Case 3: `s =r> t` and `t =r> u`. Then... wait, how do I get `s =r> u`?

I need an axiom for transitivity of r-reference!

**Candidate Axiom**: R-Transitivity
```
A[x,y,z]: x =r> y & y =r> z =|> x =r> z
```

Hmm, but this makes r special. Is that okay?

### Step 3: Canonical Symbols - When do they exist?

Let me think about what needs symbols:
- Relationship types (like red, crimson)
- Maybe some special objects?

**Candidate Axiom**: Symbol Existence for Types
```
A([t]: t =r> r || t == r): E[s]: s =s> t
```
"Everything in the r-hierarchy has at least one self-representing symbol"

### Step 4: Symbol Uniqueness - Do we need it?

What if multiple things can symbolize the same referent?
- "red", "rouge", "rojo" might all symbolize the concept RED
- But we want ONE canonical symbol (red)

**Candidate Axiom**: Canonical Symbol Selection
```
A([t]: t =r> r || t == r): 
  E![s]: s =s> t & A([w]: w =w> t =|> s =r> w || s == w)
```
"There's a unique canonical symbol that all other symbols relate to"

Actually, this is getting complex. Let me step back...

## The Core Problem

I'm trying to build too much at once. Let me identify the absolute minimum needed for a coherent system:

### Minimal System Attempt

**Primitive**: R(x,y,t)

**Axiom 1**: Equality
```
E[eq]: A[x,y]: x =eq> y <iff> x = y
```

**Axiom 2**: Root
```
E[r]: r =r> r
```

**Axiom 3**: Type Marking
```
A([t]: E([x,y]: x =t> y & t !== eq)): t =r> r || t == r
```
"Every used relationship type is in the r-hierarchy"

**Definition**: Inheritance (for types)
```
s -> t := (s =r> t || s == t)
```

**Theorem**: -> is transitive
Proof requires r-transitivity...

So I need:

**Axiom 4**: R-Transitivity
```
A[x,y,z]: x =r> y & y =r> z =|> x =r> z
```

Now I can prove transitivity of ->!

### Adding Symbols

**Axiom 5**: Types Have Symbols
```
A([t]: t -> r): E[s]: s =s> t & (s,t) == s
```

Wait, I'm using (s,t) again without defining it properly!

Let me try to define it:

**Definition**: (x,y) when x =t> y for some t !== eq
```
(x,y) := the unique m such that x =m> y & A([t]: x =t> y =|> m -> t & t !-> m)
```

But this assumes such an m exists and is unique!

**Axiom 6**: Most Specific Relationships
```
A([x,y]: E([t]: x =t> y & t !== eq)): 
  E![m]: x =m> y & A([t]: x =t> y =|> m -> t & !(t -> m & t !== m))
```

This is getting complicated, but maybe necessary?

## Testing the System

Let me see if this system can express our examples:

1. `rose =red> red` ✓ (basic reference)
2. `red =r> r` ✓ (red is a type)
3. `crimson =r> red` ✓ (crimson inherits from red)
4. By Axiom 5: `E[s]: s =s> red` (red has a symbol)
5. Call this symbol (red)
6. Can we show `crimson =(red)> crimson`?

Hmm, I don't have a mechanism for this yet...

## The Missing Piece

I need to connect inheritance to symbol possession!

**Candidate Axiom**: Inheritance Through Symbols
```
A[s,t]: s -> t & s !== t =|> s =(t)> s
```
"If s inherits from t (non-trivially), then s possesses t's canonical symbol"

But this assumes (t) is unique and well-defined...

## I'm Still Struggling

The interdependencies are complex:
- Inheritance depends on r-reference
- Symbols depend on types
- Symbol uniqueness is tricky
- Connecting inheritance to symbol possession needs care

This really does require careful back-and-forth iteration!