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

## Next Steps

I need to:
1. List more theorems about most specific relationships
2. Figure out symbol existence conditions
3. Prove inheritance chains work
4. Check if all relationships really inherit from rel
5. Define what makes something "most specific"