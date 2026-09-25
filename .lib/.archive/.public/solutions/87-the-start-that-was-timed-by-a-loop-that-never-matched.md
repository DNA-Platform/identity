# The start that was timed by a loop that never matched

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

**keywords:** measurement · timing · polling · probe · netstat · ANSI · dev server · false result

---

## Symptoms

- *"the dev server took 123 seconds to come up"* — then 276, then 408, **growing with every run**, on a six-book library that had started in seconds that morning.
- A probe that called `createServer` and `listen` directly reported **188ms** for the same thing, in the same state of the machine.
- Every reported duration, divided by the loop's sleep, came out as **exactly the loop's iteration count**: 60 × 1s ≈ 70s; 180 × 0.5s ≈ 123s; 360 × 0.5s ≈ 276s; 600 × 0.5s ≈ 408s.

## What it was

***The loop's match never fired, so the loop ran to its limit and the limit was reported as the measurement.*** **Twice, two different ways:**

1. `netstat -ano | grep -q "LISTENING.*:5173"` — *but netstat prints the local address BEFORE the state:* `TCP  [::1]:5173  [::]:0  LISTENING  7496`. **The pattern asked for the state first.** *It could never match a listening port.*
2. `grep -aq "Local:" dev.log` — *but vite colours its output, and the log holds* `[1mLocal[22m:` — **the colon is separated from the word by an escape sequence.** *The string `Local:` is not in the file.*

***And the thing that made it plausible was that the numbers GREW.*** *They grew because each loop had been given a longer limit than the last — 60, 180, 360, 600 iterations — which read as a machine getting slower, and sent an hour into counting stray processes.* **The strays were real; the slowness was not.**

## The fix

**A timing loop reports HOW it exited, or it reports nothing.** *The loop that finally measured the start set a flag on match and printed it beside the duration:* `dev server answered 200 after 2140ms · loop exited by: yes`. **A loop that exits by exhaustion says so, and its duration is then read as a timeout, which is what it is.**

*And match on the thing itself rather than on a rendering of it:* **`curl` for a 200** *rather than grep for a word a logger may colour, or a state a table may print second.*

## The rule

***A measurement that never confirms its own success path is a measurement of its own patience.*** *[The checkpoint that compared a number to itself](18-the-checkpoint-that-compared-a-number-to-itself.md) and [the page I measured from the top](55-the-page-i-measured-from-the-top.md) are the same family: an instrument that cannot fail loudly fails quietly, and quietly is worse.* **Before believing a duration, ask what the loop would have printed if the thing had never happened — and if the answer is "the same number", the number means nothing.**
