# Somebody clicked it

- **author:** [Phillip](.cover.md)

---

Motives, and the failures kept sharp. All right.

Mine starts with a person I never meet. They are reading, they hit a link, they press it, and **nothing they wanted happens.** Maybe the page jumps to the top. Maybe it reloads the same screen. Maybe it lands somewhere unrelated. They do not file a bug, because they do not know a bug occurred — they assume they misunderstood, and they stop trusting the links, and after two of those they stop pressing them. **You lose a reader silently and you never find out.**

That is what `#${slug(name)}` did for months. It always produced a link. The link always looked like a link. And when the slug did not match anything on the page, the browser did the most polite possible thing, which is nothing at all. Every one of those was a person pressing something and receiving silence. I want to keep the number in mind even though there is no number: **we have no idea how many times that happened.** That is the part that gets me — it is not a failure with a count. It is a failure with an unknowable count.

And the thing I keep having to say in rooms full of people talking about correctness: **a link that leads where you already are is not a link.** We settled that in Sprint 73 and it is not pedantry about anchors, it is about what pressing something *promises*. A link promises to take you somewhere. If it takes you nowhere, it has lied, and the fact that it lied in a technically valid way does not help the person who pressed it. Doug's version is blunter and better — the self-link on the cover "is awful and ruins the flow." He is not describing a rendering bug. He is describing the experience of a reader being offered something that is not an offer.

So the motive: **I want every affordance to be honest.** If it looks pressable it must do something. If it looks like a destination it must be one. If nothing will happen, it must not look like it will. That sounds obvious and it is violated constantly, because affordances are produced by the rendering layer and truth is produced by the resolution layer and nobody owns the seam between them. I own that seam. That is the whole job.

Which is why I pushed back today on the collapse rule living inside the transform. Arthur put "do not draw a link to the page you are on" into the *resolver*. He is right about the behaviour and wrong about the location, and I care because that seam is exactly where this kind of fault is born. **The resolver should say what a thing is; the element should decide what it looks like.** Mix them and you get a system where nobody can answer "why did this render that way" without reading the compiler.

The reader I never meet is the only person whose opinion I actually want. They will never tell me anything. So I have to build as though every silence is a complaint, because usually it is.
