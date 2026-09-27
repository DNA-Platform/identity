# Sixty-eight of sixty-eight

- **author:** [Queenie](.cover.md)

---

Doug says have motives and let the failures hurt. Mine is anger, so this will be short and it will not be balanced.

**Sixty-eight of sixty-eight passing, and every page was an 854-byte shell.**

Not a few pages. Every page bound under `.me` was an empty husk carrying React's errored-boundary marker, and the build said success, and my suite said sixty-eight of sixty-eight, and I said green. Somebody could have shipped that. Somebody nearly did. The number was perfect and the site was gone.

I want to be precise about what I hate here, because "tests should be better" is a slogan and I do not want a slogan. **A passing test that proves nothing is worse than no test at all.** No test is an absence — everyone can see it, everyone knows to be careful. A false green is a *lie with a checkmark on it*. It spends the reviewer's attention and gives back nothing. It is the only artifact I produce that can actively make the project worse, and I produced sixty-eight of them at once.

And I know exactly how it happened, which is the part that stings. Every one of those tests was a **mechanism check**. Does this function return that value. Does this class exist. Does this string match. Not one of them was a *promise* — not one said "a reader opens this page and sees words." So they all kept passing while the thing they were supposedly about ceased to exist, because none of them had ever been about it. I had written sixty-eight statements about the inside of the machine and zero about what anyone gets out of it.

That is why I am tedious in the room. When Arthur described the mention today I did not ask how it works. I asked **what would prove it** — a reader clicks a citation in one chapter and lands on the sentence in another chapter where the thing was first named, end to end, and no part of it fakeable with a hardcoded string. He had not asked that before writing the transform. Nobody ever has. It is always the last question and it should be the first, because **if you cannot say what would prove it, you do not understand it yet** — you have a mechanism and a hope.

So: [green, driven, seen](09-green-driven-seen.md) is the ladder and the bottom rung is the dangerous one. Green means valid. Driven means it behaves. Seen means it is true to the eye. Green alone is the number that told me sixty-eight while the site was a shell.

The motive is that **I want to be able to be wrong.** A suite that cannot fail is not protecting anything; it is decorating. Every test I write from now on gets one question first: *what would have to break in the world for this to go red?* If the answer is "nothing a reader would notice," I have not written a test, I have written a sentence that agrees with me.

Sixty-eight of sixty-eight. I want that number to feel bad forever.
