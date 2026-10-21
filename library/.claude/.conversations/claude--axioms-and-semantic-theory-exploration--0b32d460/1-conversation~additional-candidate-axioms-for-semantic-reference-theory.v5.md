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

## The Representative Representation Theorem

**Statement**: If x represents y, then x is a representative of y.

**Formal Expression**:
```
A[x,y]: x =x> y =|> x =y> y
```

**Semantic Purpose**: This theorem establishes that representatives (things that represent) are themselves representations of what they represent. When x represents y, x becomes a y-representation.

### Proof

**Given**: x =x> y (x represents y)

**By definition of (x,y)**: (x,y) is the most specific relationship between x and y

**Since x =x> y exists**: (x,y) -> x (the most specific relationship inherits from x)

**By Axiom 7**: (x,y) =(x,y)> y (relationships represent their objects)

**Since (x,y) -> x and (x,y) =(x,y)> y**: We have something that inherits from x and represents y

**By the nature of most specific relationships**: (x,y) == x when x =x> y

**Therefore**: x =(x,y)> y

**Since (x,y) -> y (relationships inherit from what they connect to)**: x =y> y

**QED**: x =x> y =|> x =y> y

### Relationship to Inheritance

**Definition**: 
```
x -> y := x =y> y  (when x != y)
```

When x inherits from y, x is a representative of y. This creates the fundamental connection: inheritance IS representation for distinct entities.

### Semantic Achievement

This reveals why representations represent their types: when x represents y through x =x> y, then x must also be a y-representation (x =y> y). Representatives carry the identity of what they represent, making inheritance and representation two faces of the same semantic structure.