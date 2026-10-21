# The Nine Referents: Formal Definitions and Semantic Meanings in SRT

## Introduction: The Semantic Foundation

Semantic Reference Theory (SRT) builds from a single primitive relation `R(x,y,t)` meaning "x relates to y through relationship type t," written as `x =t> y`. From this foundation emerge nine fundamental referents that capture the essential semantic structure of meaning itself. These aren't arbitrary symbols but semantic necessities discovered through systematic exploration of what must exist for reference to be possible.

## 1. Referent (ref)

### Formal Definition
```
ref =eq> ref
A[x]: x =eq> x
(ref,ref) == eq
```

The referent `ref` serves as the canonical example of "a referent"—it represents what it means to be a referent by being the prototypical instance.

### Semantic Meaning

The referent **ref** doesn't represent the entire domain of referents—rather, it represents "a referent" in the abstract sense. It's the canonical member of the catalogue, the prototype that exemplifies what all referents share: the capacity for self-equality.

The key insight is that `(ref,ref) == eq`—the most specific relationship of ref to itself is equality. This reveals what defines referenthood: every referent, at minimum, equals itself. When we ask "what makes something a referent?" the answer is: it participates in the equality relation. The expression `ref =eq> ref` isn't just saying "ref equals itself" but demonstrating the fundamental property that all referents possess.

If we imagine `(ref)` as the type of all referents, then `ref` would be its prototype—the simplest, most basic instance that has no properties beyond those that all referents must have. It's like how in object-oriented programming, the base Object class represents the minimal functionality all objects share.

In everyday language, when we say "let's consider a referent," we're invoking something like `ref`—not any particular referent with special properties, but just "a thing that can be referred to." It's the semantic equivalent of a variable before it's bound, a placeholder that demonstrates pure referenthood without additional structure.

## 2. Relationship (rel)

### Formal Definition
```
sub =rel> obj
(sub,obj) == rel
rel --> r (where r is the base relationship type)
rel =rel> rel (derived theorem, not definition)
```

The referent `rel` represents relationship in the abstract—it's the type or category of being a relationship.

### Semantic Meaning

The referent **rel** is best understood through the foundational trinity: `sub =rel> obj`. This expression says that subjects relate to objects through relationships, and the most specific way they do so IS relationship itself. The equation `(sub,obj) == rel` reveals that rel is what emerges when we ask "what's the most specific relationship between subjecthood and objecthood?"—it's relationship in the abstract.

The fact that `rel =rel> rel` holds is a derived theorem, not a definition. It emerges because:
1. `rel =eq> rel` (like all referents, rel equals itself)
2. `eq --> rel` (equality is a type of relationship)
3. Therefore, by inheritance, `rel =rel> rel`

This is indeed like `0 + 0 * 0 = 0`—a necessary consequence that follows from the structure, not the defining characteristic.

What **rel** actually represents is the abstract category of relationships—when we say "love is a relationship" or "ownership is a relationship," we're saying these things inherit from or instantiate rel. It's the type-level concept that captures what all relationships share: the capacity to connect subjects to objects.

In programming terms, if relationships were a class hierarchy, `rel` would be the abstract base class that all specific relationships extend. In mathematical terms, it's like the category of morphisms—the abstract notion of "arrow" or "connection" independent of what's being connected.

## 3. Subject (sub)

### Formal Definition
```
sub =rel> obj
(sub,obj) == rel
x =t> y & x != y =|> x =sub> x
```

The referent `sub` is one third of the foundational trinity that defines the basic semantic structure.

### Semantic Meaning

The referent **sub** doesn't stand alone—it's defined through its participation in the trinity `sub =rel> obj`. This isn't just saying "subjects relate to objects"—it's establishing what subjecthood, relationship, and objecthood ARE through their mutual definition.

Subjecthood is the property referents acquire when they occupy the subject position in a relationship where they differ from the object. But more fundamentally, `sub` represents the abstract concept of agency or directedness in semantic relationships. It's the "from" in "from-to," the active pole, the side that initiates or possesses the relationship.

The trinity `sub =rel> obj` is irreducible—you can't understand any of the three without the others:
- Subjects are things that relate to objects
- Objects are things that subjects relate to  
- Relationships are how subjects relate to objects

This mutual definition isn't circular but foundational. It's like how in physics, space, time, and matter are defined through their mutual relationships—none makes sense without the others.

When a referent gains subjecthood (`x =sub> x`), it's not just gaining a property but entering into the fundamental semantic pattern. It becomes capable of bearing relationships, of being the locus from which connections originate.

## 4. Object (obj)

### Formal Definition
```
sub =rel> obj
(sub,obj) == rel
A[x,y,t]: x =t> y =|> y =obj> y
x =p> x =|> x =obj> x
```

The referent `obj` completes the foundational trinity, representing the receptive pole of semantic relationships.

### Semantic Meaning

The referent **obj** is the third part of the irreducible trinity `sub =rel> obj`. It represents objecthood—not in the sense of "physical object" but in the sense of being the target or recipient of a relationship.

The crucial insight is that objecthood is more universal than subjecthood:
- Everything that is related to gains objecthood: `x =t> y =|> y =obj> y`
- Everything with properties gains objecthood: `x =p> x =|> x =obj> x`
- But only things that relate to something distinct gain subjecthood

This asymmetry reflects a deep semantic truth: being is more fundamental than doing. Everything that exists in semantic space can be an object (can be referred to, can have properties), but not everything can be a subject (not everything initiates relationships to distinct things).

The `obj` in the trinity represents pure receptivity—the capacity to be characterized, to be known, to be the terminus of a relationship. When we say something "has objecthood," we mean it can stand as the answer to "relates to what?" or "has what properties?"

In consciousness studies, this distinction becomes crucial: while the experiencing subject requires distinction from what it experiences, objects include both the experienced other and the self-as-experienced (through properties).

## 5. Symbol (sym)

### Formal Definition
```
sym =sym> lit
(sym,lit) == sym
sym --> rep
x --> symbol <iff> E[y]: x =x> y & (x,y) == x
```

The referent `sym` represents the remarkable dual nature of symbolic reference—being simultaneously subject and relationship.

### Semantic Meaning

A **symbol** achieves something extraordinary: it collapses the distinction between doing and being into a unity. In `sym =sym> lit`, the symbol occupies both the subject position (the thing doing the symbolizing) and the relationship position (the act of symbolization itself).

This dual nature isn't a formal trick but captures the essence of symbolic reference. When we use the word "tree":
- As subject: "tree" is the thing doing the representing
- As relationship: "tree" is the way we relate to actual trees
- These aren't two different things—they're the same thing viewed from two angles

The equation `(sym,lit) == sym` makes this precise: the most specific relationship between a symbol and its literal IS the symbol itself. There's nothing more to say about how "tree" relates to trees than "tree"-ness itself.

This explains symbolic transparency: when we read "tree," we don't experience a two-step process (see word, think of tree)—the word IS the relationship to tree. The symbol doesn't point to meaning through some external connection; it embodies the connection.

The inheritance `sym --> rep` places symbols as a special case of representation. While all symbols represent, they represent in this unique way where representation becomes identity. A map represents territory through correspondence rules; a symbol represents its literal by BEING the correspondence.

## 6. Representation (rep)

### Formal Definition
```
sym =rep> rep
(sym,rep) == rep
x --> representation <iff> E[y]: x =x> y
can =rep> can
```

The referent `rep` captures the general phenomenon of standing-for, of making present what is absent.

### Semantic Meaning

**Representation** is the broader category that includes all forms of one thing standing for another. The relationship `sym =rep> rep` reveals a profound self-exemplification: symbols are members of the category "representation," and this membership relation is itself representation. This shows how representation can represent itself—the concept represents all instances of representing.

The key formal criterion `x =x> y` (x represents y through itself) distinguishes representation from other relationships. When `dog =chases> cat`, the dog doesn't represent the cat. But when `map =map> territory`, the map does represent the territory, using itself as the means.

Representation includes diverse phenomena:
- **Symbols**: Complete collapse of representation into identity
- **Models**: Structural correspondence (map to territory)
- **Collections**: Groups representing their members
- **Canonicals**: Privileged examples representing categories
- **Indices**: Pointers representing what they point to

The equation `(sym,rep) == rep` shows that the most specific relationship between symbols and representation IS representation—symbols don't just belong to the category; they relate to it through the very phenomenon the category describes.

The self-representing canonical `can =rep> can` shows that representation includes self-representation—some things represent themselves as the standard or prototype. This isn't paradoxical but essential for representation to be complete as a category.

## 7. Literal (lit)

### Formal Definition
```
sym =sym> lit
!E[x,y]: x != lit & y != lit & lit =x> y
lit =obj> lit
lit can only appear as: x =t> lit or lit =p> lit
```

The referent `lit` represents the ground of reference—what symbols ultimately point to.

### Semantic Meaning

A **literal** is something that cannot serve as a subject (except in self-relation) or as a relationship type. Literals are purely objective—they can only be targets of reference, never sources of reference to other things. They are semantic endpoints.

The relationship `sym =sym> lit` establishes the fundamental asymmetry: symbols need literals to ground their meaning, but literals need no symbols to exist. This prevents infinite regress—not everything can be symbolic, or meaning would never bottom out in reality.

What counts as literal is frame-relative and context-dependent:
- In everyday language: physical objects, sensory experiences
- In mathematics: numbers themselves (not numerals), geometric objects
- In logic: truth values, the elements of the domain
- In consciousness: perhaps qualia, raw feels before conceptualization

The severe constraints on literals—they can't be subjects, can't be relationship types—capture the intuition that some things simply ARE. They don't point beyond themselves, don't represent anything else, don't bear meaning—they ARE what meaning ultimately refers to.

The allowance for self-relation (`lit =p> lit`) lets literals have properties while maintaining their status as endpoints. A literal red patch can have the property of being red without thereby becoming a subject or symbol.

## 8. Canonical (can)

### Formal Definition
```
can =rep> can
(can,can) == rep
For any collection/type/category, one member serves as canonical
(x) denotes the canonical symbol for x in a given frame
```

The referent `can` represents the phenomenon of privileged representation—the selected example that stands for all.

### Semantic Meaning

A **canonical** element is the distinguished representative within any collection or category—the one that serves as the primary example, the default, the prototype. The self-representing relationship `can =rep> can` captures how canonicals represent themselves as THE standard example.

Canonicality appears everywhere in human cognition and formal systems:
- **Prototypes**: Robin as the canonical bird (in Western culture)
- **Standards**: The meter bar as the canonical meter
- **Notation**: "2" as the canonical representation of two-ness
- **Examples**: The canonical textbook example that everyone learns

The equation `(can,can) == rep` reveals that the most specific relationship of canonical to itself IS representation—canonicals exist to represent, and they represent the very idea of privileged representation.

Frame-relativity is crucial for canonicality. What counts as canonical depends on context:
- Mathematical context: "2" is canonical for two
- Set theory context: `{{},{{}}}` is canonical for two
- Binary context: "10" is canonical for two

This frame-dependency isn't a weakness but a feature—it allows different contexts to privilege different representations based on their needs. The notation `(x)` for canonical symbols is implicitly frame-dependent, requiring a reference frame to determine which symbol is canonical.

## 9. Equality (eq)

### Formal Definition
```
eq =eq> eq
x =eq> y <iff> x == y
A[x]: x =eq> x
eq --> rel
```

The referent `eq` internalizes logical identity as a semantic relationship—making "=" into something we can talk about.

### Semantic Meaning

**Equality** is the relationship of identity—when two referent expressions actually refer to the same referent. It's not similarity or equivalence but absolute sameness. The relationship `eq =eq> eq` grounds this: equality equals itself through equality, the foundational self-recognition that enables all other equations.

The critical property is that equality is the only relationship that preserves complete identity:
- `x =loves> y` means x and y are different things related by love
- `x =represents> y` means x and y are different things related by representation  
- `x =eq> y` means x and y are the same thing

This uniqueness makes equality special among relationships. It's why properties inherit from equality (`red --> eq`)—having a property is a way of being identical to yourself while manifesting particular characteristics. A red rose equals itself in a red way.

The universality of equality (`A[x]: x =eq> x`) establishes the baseline: existing in semantic space means at minimum being self-identical. This is what `ref =eq> ref` demonstrates—even the most abstract referent participates in equality.

The inheritance `eq --> rel` places equality within the relationship hierarchy while maintaining its special status. Equality is a relationship, but unlike other relationships, it doesn't create distinction—it recognizes sameness.

## Conclusion: The Semantic Architecture

These nine referents emerge from necessity, not stipulation:

1. The **trinity** (`sub =rel> obj`) establishes the basic semantic pattern
2. The **symbol-literal** pair (`sym =sym> lit`) grounds reference in reality  
3. The **representation-canonical** pair shows how standing-for works
4. The **ref-eq** pair provides the minimal structure all referents share

Together they form a complete basis for semantic representation—the minimal architecture required for meaning to emerge from structure, for symbols to refer to reality, and for consciousness to recognize itself through its own canonical symbol.