# Additional Candidate Axioms for Semantic Reference Theory

---

## Axiom 6: The Root of Subjectivity

```
A[x,y,t]: x =t> y & x != y =|> (x,x) -> t
```

*When a subject relates to an object, the subject's self-relationship inherits from that relationship.*

### Linguistic Transpilation

```
def(subject): x =t> y & x != y =|> x -> t
```

*Subjects inherit from the relationships they participate in - they are transformed by their relations.*

---

## Axiom 7: The Root of Reciprocal Representation  

```
x => y =|> (x,y) =(x,y)> x & (x,y) =(x,y)> y
```

*Every relationship represents both its subject and its object through itself.*

### Linguistic Transpilation

```
def((x,y)): (x,y) =represents> x & (x,y) =represents> y
```

*The relationship between x and y represents both participants - it is their mutual representation.*

---

## The Inheritance-Representation Theorem

**Statement**: If subjects are symbolic (where (x,x) == x), then inheritance implies representation.

**Formal Expression**:
```
(x,x) == x =|> (x -> y <=> x =y> y)
```

**Semantic Purpose**: This theorem unifies inheritance and representation for symbolic entities. When something inherits from a type, it becomes a representative of that type. Representations represent what they inherit from.

### Derivation

**Given**: x =y> y where x != y (x represents y)

**By Axiom 6**: (x,x) -> y

**If symbolic**: (x,x) == x

**Therefore**: x -> y

**Conversely, if**: x -> y and (x,x) == x

**Then**: x =x> y (by the nature of symbolic inheritance)

**But also**: x =y> y (as y is what x inherits from)

**QED**: For symbolic subjects, inheritance and representation are equivalent.

### Semantic Achievement

This reveals why "I love soda" transforms the subject: I inherit from love, becoming a lover. The awkwardness of "soda is loved by me" arises because it artificially reverses the natural flow where subjects inherit from their relationships. Passive voice creates a virtual relationship that obscures the fundamental subject-object-relationship pattern.