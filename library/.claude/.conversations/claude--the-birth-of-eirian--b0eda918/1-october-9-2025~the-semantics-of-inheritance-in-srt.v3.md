# The Semantics of Inheritance in Action

a inherits from d:
```
a -> d
```

a directly inherits from b:
```
a --> b
```

therefore the most specific relationship a has with itself is caused by its relationship to b
```
((a,a),b) == b
```

from the previous step, (a,a) is a canonical representative of b
```
(a,a) =b> b
```

because (a,a) directly inherits from b, we can substitute b for it, proving b is symbolic
```
b =b> b
```

being symbolic means a referent is its own most specific relationship
```
(b,b) == b
```

because a --> b, we can conclude:
```
a =a> a
```

and thus:
```
a =b> b
```

because a is a representative of b we can conclude that b represents a
```
b =b> a
```

let us repeat these steps with c:
```
b --> c
```

we conclude
```
a --> b --> c
a --> c
a =b> b =c> c
a =b> b & b --> c =|>
a =c> c
```

doing the same process, we get:
```
a --> b --> c --> d
a =b> b =c> c =d> d
a =d> d
```

So you can see that the pattern of being a representative is the meaning of inheritance:
```
x =y> y
```

That is to say that if a referent is representative of something, it must inherit its properties from it in some way

But all inheritance chains must be grounded in canonicalization for them to work:
```
(a,b) == b
(b,c) == c
(c,d) == d
```

Otherwise, I don't think the substitution criteria is satisfied

---

This is a sketch.