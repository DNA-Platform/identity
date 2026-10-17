# SRT Model Testing - Iteration 1

## Facts from the Model

### Basic Referent Facts
1. `ref =eq> ref` - referents equal themselves
2. `eq =eq> eq` - equality equals itself
3. `rel =rel> rel` - relationships relate to themselves
4. `sym =sym> lit` - symbols symbolize literals
5. `sym =sym> sym` - symbols symbolize themselves
6. `sub =rel> obj` - subjects relate to objects

### Property Facts
7. `sub =s> sub` - subjects have subject property
8. `obj =o> obj` - objects have object property
9. `rel =r> rel` - relationships have relationship property
10. `sym =s> sym` - symbols are subjects
11. `lit =o> lit` - literals are objects
12. `rep =o> rep` - representations are objects

### Inheritance Facts (using =r>)
13. `sym =r> rel` - symbols inherit from relationships
14. `rep =r> rel` - representations inherit from relationships
15. `eq =r> rel` - equality inherits from relationships

### Representation Facts
16. `sym =rep> rep` - symbols are part of representation
17. `rep =rep> ??` - what do representations represent?

### Symbol Facts
18. `((x),x) == (x)` - symbol of symbol is itself
19. If `t =r> rel` then `(t)` exists
20. If `s =r> t` then `s =(t)> s` - inheritance gives symbol possession

## Testing Consistency

### Test 1: Is sym both subject and relationship?
From facts:
- `sym =sym> lit` (4)
- `sym =s> sym` (10)
- `sym =r> rel` (13)

This means sym is subject AND relationship type. Is this consistent?
- When `x =t> y` where x == t, we have self-representation
- So `sym =sym> lit` means sym represents lit through itself
- ✓ Consistent - symbols ARE the relationship they use

### Test 2: Can something be both object and relationship?
From facts:
- `rep =o> rep` (12)
- `rep =r> rel` (14)

This means rep is both object and relationship type.
- In case `s =r> r` where r == o, this is exactly what we need
- ✓ Consistent

### Test 3: Does equality work?
From facts:
- `eq =eq> eq` (2)
- `eq =r> rel` (15)

So eq is a relationship that relates to itself through itself.
- This matches Case 5: s == r == o
- ✓ Consistent

## Attempting to Derive Facts

### Derivation 1: If everything equals itself, can we derive `ref =eq> ref`?

**Proposed Axiom**: 
```
E[eq]: A[x,y]: x = y <iff> x =eq> y
```

Then `ref = ref` (by FOL) implies `ref =eq> ref` ✓

### Derivation 2: Can we derive that symbols are subjects?

If `sym =sym> lit` and `sym !== lit`, then:
- sym is the subject of this relationship
- So `sym =s> sym` should follow

**Proposed Axiom**:
```
A([x,y,t]: x =t> y & x !== y): x =s> x
```

### Derivation 3: Can we derive that literals are objects?

If `sym =sym> lit` and `sym !== lit`, then:
- lit is the object of this relationship
- So `lit =o> lit` should follow

**Proposed Axiom**:
```
A([x,y,t]: x =t> y & x !== y): y =o> y
```

## Problems Found

### Problem 1: What establishes `rel =rel> rel`?

We need rel to exist and self-relate. 

**Proposed Axiom**:
```
E[rel]: rel =rel> rel
```

### Problem 2: How do we know `sym =r> rel`?

If sym is used as a relationship type (in `sym =sym> lit`), should it automatically inherit from rel?

**Proposed Axiom**:
```
A([t]: E([x,y]: x =t> y & t !== eq)): t =r> rel
```

But wait, this uses 'r' which is just our notation for rel!

**Better**:
```
A([t]: E([x,y]: x =t> y & t !== eq)): t =rel> rel
```

### Problem 3: Most specific relationships?

In `sym =sym> lit`, is sym the most specific relationship?
- We need to ensure no other relationship between sym and lit is more specific
- But what does "more specific" mean in our vocabulary?

Maybe: t is more specific than s if `t =rel> s` but not `s =rel> t`?

## More Theorems to Test

### Referent Theorems
21. `A[x]: x =ref> x` - everything is a referent?
22. `ref =ref> ref` - referent refers to itself
23. If `x =ref> x` then x exists (existential claim)

### Relationship Theorems  
24. If `x =t> y` then `t =rel> rel` (unless t == eq)
25. If `x =rel> y` and `y =rel> z` then `x =rel> z` (chaining)
26. `rel =(rel)> rel` - rel has symbol for relationships?

### Symbol Theorems
27. If `x =x> y` then x is a symbol
28. If `x =x> y` then `x =s> x` (symbols are subjects)
29. `(sym) =(sym)> sym` - symbol has its own symbol
30. `(lit)` doesn't exist? - literals don't have symbols?

### Most Specific Theorems
31. For `sym =sym> lit`, sym is most specific
32. For `sub =rel> obj`, rel is most specific  
33. Most specific means nothing else between them?

### Inheritance Theorems
34. If `s =rel> t` then `s =(t)> s`
35. If `s =(t)> s` then s inherits from t
36. Inheritance is transitive through rel-chains

## Testing Derivations

### Can we derive `sym =sym> sym`?

Given: `sym =sym> lit`
Question: Must `sym =sym> sym` also be true?

If sym is a relationship type (which it is), and relationships can self-relate...
- `rel =rel> rel` is true
- `eq =eq> eq` is true  
- So maybe `sym =sym> sym` follows?

**Proposed Theorem**: If `t =rel> rel` then `t =t> t`

But wait, is this always true? Need to check...

### Can we derive symbol existence?

If `rel =rel> rel`, does (rel) exist?
- (rel) would satisfy: `(rel) =(rel)> rel`
- And `((rel),rel) == (rel)`

**Proposed**: Every relationship type has a symbol
```
A([t]: t =rel> rel): E[s]: s =s> t & (s,t) == s
```

### Testing for Contradictions

**Potential Issue**: If `sym =sym> sym` and `sym =sym> lit`, then:
- Is sym the most specific relationship to itself?
- Is sym the most specific relationship to lit?
- Can the same referent be most specific in different contexts?

**Resolution**: Most specific is relative to the pair!
- (sym,sym) == sym
- (sym,lit) == sym
- These are consistent - same referent, different relationships

## Core Axiom Candidates

Based on the patterns, here are axiom candidates:

**A1 (Equality Exists)**: 
```
E[eq]: A[x,y]: x = y <iff> x =eq> y
```

**A2 (Relationships Relate)**:
```
E[rel]: rel =rel> rel
```

**A3 (Referents Refer)**:
```
E[ref]: A[x]: x =ref> x
```

**A4 (Subjects and Objects)**:
```
E[s,o]: A([x,y,t]: x =t> y & x !== y): x =s> x & y =o> y
```

**A5 (Relationship Inheritance)**:
```
A([t]: E([x,y]: x =t> y & t !== eq)): t =rel> rel
```

**A6 (Symbol Termination)**:
```
A[x]: ((x),x) == (x)
```

## Proofs from Axioms

### Proof: `sym =sym> lit` implies `sym =s> s`

1. Given: `sym =sym> lit` and `sym !== lit`
2. By A4: `sym =s> s`
3. QED

### Proof: `eq =eq> eq` 

1. By A1: `eq = eq <iff> eq =eq> eq`
2. By FOL: `eq = eq` is true
3. Therefore: `eq =eq> eq`
4. QED

### Proof: `sym =rel> rel`

1. Given: `sym =sym> lit`
2. Since sym !== eq and is used as relationship
3. By A5: `sym =rel> rel`
4. QED

## Questions Still Open

1. How do we axiomatize most specific relationships?
2. When do symbols (x) exist? For all x? Only some?
3. Is `ref =ref> ref` derivable or axiomatic?
4. What about `sym =sym> sym` - is this necessary?
5. How do we capture "inheritance through symbol possession"?