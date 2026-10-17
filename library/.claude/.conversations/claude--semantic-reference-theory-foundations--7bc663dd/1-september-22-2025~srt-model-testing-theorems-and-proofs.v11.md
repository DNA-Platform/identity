# SRT Theory Building - Rigorous Iteration

## Starting Point: Your Semantic Model

### Given Relationships
1. `sub =rel> obj` (Case 1: all distinct)
2. `sym =sym> lit` (Case 2: s == r)
3. `ref =eq> ref` (Case 3: s == o)
4. `sym =rep> rep` (Case 4: r == o)
5. `eq =eq> eq` (Case 5: all equal)

## Deriving Facts from These

### From `sym =sym> lit`:
- `sym =sub> sym` (sym has subjecthood property)
- `lit =obj> lit` (lit has objecthood property)
- `sym =rel> rel` (sym is a relationship type)

### Testing Symbol Possession
If `sym =rel> rel`, and we have the principle that `x =rel> y =|> x =(y)> x`:
- `sym =(rel)> sym`

But what IS (rel)? We need to figure this out!

## Attempt 1: Minimal Axioms

**A1**: `E[eq]: A[x,y]: x = y <iff> x =eq> y`

**A2**: `E[sub,rel,obj]: sub =rel> obj & sub !== rel & rel !== obj & obj !== sub`

**A3**: `E[sym,lit]: sym =sym> lit & sym !== lit`

**A4**: `E[ref]: ref =eq> ref`

**A5**: `E[rep]: sym =rep> rep`

### Deriving from These Axioms

From A1: `eq =eq> eq` ✓

From A3 & subject/object properties:
- Need axiom: `A([x,y,r]: x =r> y & x !== y): x =sub> x & y =obj> y`
- Wait, that introduces universal quantification over all possible relationships!

### Problem 1: When do properties exist?

I assumed `x =sub> x` means "x has subjecthood" but when is this true?
- Only when x is a subject in some relationship?
- Always for certain referents?

## Attempt 2: More Careful Axioms

**A1 (Equality)**: `E[eq]: A[x,y]: x = y <iff> x =eq> y`

**A2 (Core Referents)**: `E[sub,rel,obj,sym,lit,rep,ref]`

**A3 (Basic Relationships)**:
```
sub =rel> obj & 
sym =sym> lit & 
ref =eq> ref & 
sym =rep> rep &
rel =rel> rel
```

**A4 (Property Assignment)**:
```
sub =sub> sub & obj =obj> obj
```

### Testing Consistency

From A3: We have 5 relationships established.

Question: Is `(sym,lit) == sym`?
- We want sym to be the most specific relationship
- Need axiom about most specific relationships!

**A5 (Most Specific)**:
```
For any x =r> y where r is used, there exists a most specific m such that:
x =m> y and for all t where x =t> y: either m == t or m inherits from t
```

But how do we define "inherits"?

## Attempt 3: Defining Inheritance

**Definition**: For relationship types, `s -> t` means:
- Either `s == t`
- Or `s =rel> t`
- Or... what about chains?

### Testing Inheritance

If `sym =rel> rel`, does `sym -> rel`?
- By definition, yes!

If `crimson =rel> red` and `red =rel> color`, does `crimson -> color`?
- We'd need transitivity: `x =rel> y & y =rel> z =|> x =rel> z`

**A6 (Rel-Transitivity)**:
```
A[x,y,z]: x =rel> y & y =rel> z =|> x =rel> z
```

## Facts Implied by the Model

1. `sym =rel> rel` (symbols are relationship types)
2. `rep =rel> rel` (representations are relationship types)
3. `eq =rel> rel` (equality is a relationship type)
4. `sym =sub> sym` (symbols have subjecthood)
5. `lit =obj> lit` (literals have objecthood)
6. `rep =obj> obj` (representations have objecthood)
7. `ref =sub> sub & ref =obj> obj` (referents are both)
8. `eq =sub> sub & eq =obj> obj & eq =rel> rel` (equality is all three)

## Problems Found

### Problem 1: What is (rel)?

If (rel) is the canonical symbol for rel:
- `(rel) =(rel)> rel`
- Is (rel) one of our 8 referents, or a new one?
- Maybe (rel) == sub? (subjecthood IS the symbol for relationships?)

### Problem 2: Property inheritance

Does `sub =sub> sub` mean:
- sub has property sub (circular?)
- Or sub IS the property of subjecthood?

### Problem 3: Missing relationships

What about:
- `sub =?> rel`
- `obj =?> rel`
- `lit =?> sym`

Are these undefined, or do they have values?

## Attempt 4: Complete 8-Referent Model

Let me try to map ALL relationships between the 8 referents:

### Equality (all have it)
- `eq =eq> eq`, `ref =eq> ref`, `sub =eq> sub`, `rel =eq> rel`
- `obj =eq> obj`, `sym =eq> sym`, `rep =eq> rep`, `lit =eq> lit`

### Given relationships
- `sub =rel> obj`
- `sym =sym> lit`
- `sym =rep> rep`
- `rel =rel> rel`

### What about the rest?

Need to determine:
- `sub =?> sub` - probably `sub =sub> sub`
- `obj =?> obj` - probably `obj =obj> obj`
- `rep =?> ?` - what do representations represent?
- `lit =?> ?` - what do literals relate to?

## Iteration 5: Attempting Closure

### Hypothesis: The 8 referents form a closed model

If we only have these 8, then:
- Every relationship must use one of them as the relationship type
- Every most specific relationship must be one of these 8

### Testing most specific relationships

For `sub =rel> obj`:
- Most specific is rel itself
- `(sub,obj) == rel`

For `sym =sym> lit`:
- Most specific is sym itself
- `(sym,lit) == sym`

For `ref =eq> ref`:
- Most specific is eq
- `(ref,ref) == eq`

### Does this work?

If `(sym,lit) == sym`, then:
- sym IS the relationship between sym and lit
- This is self-referential but coherent
- Like how eq IS the relationship in `eq =eq> eq`

## Current Issues

1. **Canonical symbols**: Still unclear what (rel), (sub), etc. are
2. **Inheritance chains**: Need clear rules for transitivity
3. **Property semantics**: What does `x =prop> x` really mean?
4. **Completeness**: Are there required relationships we're missing?

## Next Steps Needed

1. Enumerate ALL relationships between the 8 referents
2. Determine which are most specific
3. Figure out canonical symbols
4. Test for consistency
5. Extract minimal axioms