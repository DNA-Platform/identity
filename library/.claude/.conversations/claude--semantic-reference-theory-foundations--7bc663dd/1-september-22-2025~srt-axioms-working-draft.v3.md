# Semantic Reference Theory - Axiomatic Development
*Working Draft - Iteration 1*

## Core Primitive
```
R(x,y,t)  // x refers to y through type t
```

## Linguistic Extensions

### Basic Reference
```
x =t> y    := R(x,y,t)
x => y     := E[t]: x =t> y
```

### Candidate Constructs to Define
- `(x)` - canonical symbol for x
- `(x,y)` - most specific relationship between x and y  
- `x -> t` - x inherits from t
- `F[t]` - reference frame of t

## Truths We Want to Capture

1. **Symbol-Literal Distinction**: Symbols represent literals but are distinct from them
2. **Self-Reference Without Regress**: (x) can represent x without infinite towers
3. **Inheritance Without Recursion**: Can define transitivity through symbolic possession
4. **Frame-Relative Canonicalization**: What's canonical depends on reference frame
5. **Natural Quotation Termination**: "word" doesn't need """"word""""
6. **Subject-Object Emergence**: The distinction emerges from reference patterns

## Attempt 1: Minimal Axioms

### Axiom 1: Universal Properties
```
E{r,eq,o}:
  A[x]: x =eq> x                    // everything equals itself
  A([x,y,t]: x =t> y): t -> r       // all relationship types inherit from r
  A([y]: E[x]: x => y): y =o> y     // all objects have object property
```

Wait, this already uses `->` which we haven't defined yet!

## Attempt 2: Bootstrap Without Inheritance

### Axiom 1: Foundational References
```
E{r,eq,o}:
  A[x]: x =eq> x                    // equality is universal
  A([x,y,t]: x =t> y): t =r> r     // all types refer to r  
  A([y]: E[x]: x => y): y =o> y    // objects self-refer through o
```

### Question: How do we define inheritance?

If `s => t` means s refers to t (where both are relationship types), then:
- Could `s -> t` mean `s =(t)> s`?
- This would mean s possesses the canonical symbol of t

But we haven't defined (t) yet!

## Attempt 3: Build Up Systematically

### Level 1: Basic Properties
```
AXIOM: E{r,eq,o}:
  A[x]: x =eq> x
  A([x,y]: x => y & x !== y): E[t]: x =t> y & t =r> r
  A([y]: E([x]: x => y)): y =o> y
```

### Level 2: Define Canonical Symbol Linguistically

For any x, IF there exists z such that:
- z =z> x (z represents x through itself)
- No other w =w> x exists

Then we denote z as (x).

### Problem: Not all x have such a z!

## Iteration 2: Start from the True Minimum

### The Single Primitive
```
R(x,y,t)
```

### First Linguistic Extension
```
x =t> y := R(x,y,t)
```

### Axiom 1: The Existence of Special Referents
```
E{r,eq}: 
  A[x]: R(x,x,eq)                         // everything relates to itself through eq
  A([x,y,t]: R(x,y,t)): R(t,r,r)         // all relationship types relate to r through r
```

This gives us:
- `x =eq> x` for all x
- `t =r> r` for all relationship types t

### Now Define Inheritance Linguistically
```
LINGUISTIC DEFINITION:
x -> y := x == y || x =r> y || E[z]: (x =r> z & z =r> y)
```

This gives us transitivity through chains of r-reference!

### Axiom 2: Object Property
```
E[o]: A([y]: E([x,t]: x =t> y & x !== y)): y =o> y
```
Things that are referred to (distinctly) have the object property.

### Axiom 3: Subject Property  
```
E[s]: A([x]: E([y,t]: x =t> y & x !== y)): x =s> x
```
Things that refer (distinctly) have the subject property.

## Iteration 3: Canonical Symbols

### The Problem
We want (x) to be the canonical symbol for x, but:
- Not everything has a canonical symbol
- We need constraints to prevent infinite towers

### Linguistic Introduction of (x)
When binding x, we can introduce x* where:
```
x* =x*> x                    // x* represents x through itself
(x*,x) == x*                 // x* IS the relationship between itself and x
```

We denote this x* as (x).

### But when does (x) exist?

Perhaps we need an axiom...

## Iteration 4: Most Specific Relationships First

Actually, let's handle (x,y) before (x) - it might be simpler!

### Linguistic Definition of (x,y)
When x =t> y for some t !== eq, introduce z* such that:
```
x =z*> y                              // z* is a relationship type
A([t]: x =t> y): z* -> t & !t -> z*   // z* inherits from all, none from it
```

We denote this z* as (x,y).

### Axiom 4: Most Specific Relationships Exist
```
A([x,y]: x => y & x !== y): E([z]: x =z> y & A([t]: x =t> y): z -> t & !t -> z)
```

This guarantees (x,y) exists when needed.

## Iteration 5: Back to Canonical Symbols

### The Key Insight
Maybe not everything needs a canonical symbol! Only certain things.

### Axiom 5: Relationship Types Have Canonical Symbols
```
A([t]: E([x,y]: x =t> y & x !== y)): E([s]: s =s> t & (s,t) == s)
```

If t is used as a relationship type, then it has a canonical symbol.

### Linguistic Convention
We denote this s as (t).

### The Crucial Constraint
```
AXIOM 6: ((x),x) == (x)
```

The canonical symbol of a canonical symbol is itself! This prevents infinite towers.