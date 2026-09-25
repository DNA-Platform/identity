# The scanner that reread its own tail

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `tooling` · `blind-instrument` · `rescanned-tail`

---

## <a id="symptom"></a>The symptom

***Sixty kilobytes took 8.6 seconds.*** **Ten thousand steps per character.**

```
unterminated openers   60000 chars   8657.39 ms   0 found   steps/char 10000.83
```

**And every ordinary input was perfectly linear** — *0.91 steps per character, flat across sixteen doublings of a two-megabyte corpus.* ***So nothing a person would write exposed it.*** *The input that did was `'*[ '` repeated: an opener with no close, which is what a half-typed declaration looks like.*

## <a id="why"></a>What it was

**The scan looks for an opener, then reads forward for its close. When there is no close, it did this:**

```ts
if (!closed) { i++; continue; }   // unterminated: refuse upstream, do NOT rescan content
```

***The comment says "do NOT rescan content" and sits directly above the line that rescans content.***

*Advancing by one and trying again means the next opener reads forward to the end of the text as well, and the one after that, and the one after that.* **A tail of length n is read n times.** *Linear pass, quadratic behaviour.*

**The fix is one line and it is provable rather than empirical:**

```ts
// If no ']' stands between here and the end of the text, none stands after any LATER
// opener either, because every later scan searches a SUBSET of this one.
if (!closed) break;
```

***8657 ms became 10.4 ms on the same input, and steps per character fell from 10,000 to 1.00.***

## <a id="lesson"></a>The reason it was missed, which is the part worth keeping

***The regexes were checked and they were fine.*** **`[^\]]*` and `[^)]*` are negated character classes with no alternation and no nesting, so no backtracking is possible in either** — *and from that I concluded the grammar was linear.*

***IT WAS THE WRONG CHECK.*** **"No backtracking matcher" is not "linear scanner."** *The blowup was not inside any pattern; it was in the loop around them, in code I had written by hand precisely to avoid regex hazards.* **Hand-rolling the scanner removed one class of blowup and introduced another, and the confidence from removing the first is what stopped the search.**

> ***Doug, 2026-09-17, who stopped it:*** **"Woah woah woah what we are doing is fundamentally as hard as parsing. Are you sure you are getting this right? Are you writing things with efficient regexes? We need linearish time for sure before we even think about ruling this out."**

## <a id="hollow"></a>And the measurement that said nothing

***The same session produced a second instance of the same class, and it is the one to grep for.*** **A parse-and-scan over the real corpus was measured at 273 ms, 3.3 MB/s, and reported as the cost of the design.** *Its own output said:*

```
sigils found:        0
```

***There are no sigils in the corpus yet. The scanner never entered its loop.*** **What was measured was the TypeScript parse with a scan that did nothing, and it was presented as though it were both.**

**A third instance, same day:** *a hot-reload probe was configured with `hmr: false` and then used to report on hot-reload behaviour.*

***THE GENERAL FORM:*** **a measurement of a mechanism that was never exercised measures nothing, and reads exactly like evidence.** *The tell is in the output every time — a count of zero, a disabled flag, an empty result — and it is only visible to someone who asks what the number would look like if the mechanism had not run at all.*

## <a id="how"></a>How to find the next one

***For the quadratic:*** **look for a loop that advances by one and retries after a failed inner scan.** *If the inner scan reads to the end of the input, the outer loop is quadratic. Ask what the failure means — usually it means no later attempt can succeed either, and the answer is `break`, not `i++`.*

***For the hollow measurement:*** **make every probe report how many times the thing it is measuring actually ran**, *and read that number before reading the timing.* **A probe that cannot say how many times it did the work cannot say what the work costs.**
