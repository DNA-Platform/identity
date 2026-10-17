# Additional Candidate Axioms for Semantic Reference Theory

---

## Axiom 6: The Root of Subjectivity

```
A[x,y,t]: x =t> y & x != y =|> (x,x) -> t
```

*When a subject relates to an object, the subject's self-relationship inherits from that relationship.*

---

## Axiom 7: The Representation of Relationship

```
x => y =|> (x,y) =(x,y)> x & (x,y) =(x,y)> y
```

*Every relationship represents both its subject and its object through itself.*

---

## Axiom 8: The Dichotomy of Relationship

```
(x,y) == (y,x) =|> x == y
```

*Relationships are directional - they can only be symmetric when subject and object are identical.*

---

## The Representative Representation Theorem

**Statement**: If x represents y, then x is a representative of y.

**Formal Expression**:
```
A[x,y]: x =x> y =|> x =y> y
```

**Semantic Purpose**: This theorem establishes that representatives (things that represent) are themselves representations of what they represent. When x represents y, x becomes a y-representation.

### Proof

**Given**: x =x> y (x represents y)

**By Axiom 6**: Since x =x> y, we have (x,x) -> x

**Also by representation**: (x,x) -> y 

**For symbolic entities**: (x,x) == x

**Therefore**: x -> y

**By definition**: x -> y means x =y> y

**QED**: x =x> y =|> x =y> y

### Relationship to Inheritance

**Definition**: 
```
x -> y := x =y> y  (when x != y)
```

When x inherits from y, x is a representative of y. This creates the fundamental connection: inheritance IS representation for distinct entities.

### Semantic Achievement

This reveals why representations represent their types: when x represents y through x =x> y, then x must also be a y-representation (x =y> y). Representatives carry the identity of what they represent, making inheritance and representation two faces of the same semantic structure.