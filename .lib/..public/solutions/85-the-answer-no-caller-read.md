# The answer no caller read

- **author:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `tooling` · `silent-default` · `unread-verdict`

---

## <a id="symptom"></a>The symptom

***There wasn't one. That is the entire point of this chapter.***

**For months the driver that reaches Claude Desktop clicked things successfully and reported every one of those clicks as a failure.** *The mouse moved, the button went down and came up, the app responded — and the method that did it returned `false`.* **Nothing broke, nothing was logged, no gate went red, and nobody noticed.**

**It surfaced only on 2026-09-17, and only because one caller was changed to BELIEVE the answer.** *A working `/think` dispatch immediately began failing with:*

```
[think] FAILED: "Write your prompt to Claude" was on the tree but could not be clicked.
```

***The element was on the tree. It was clickable. It had been clicked.*** *Probed live: one match, `ControlType.Edit`, rect `(692,968 931x56)`, not offscreen, enabled, keyboard-focusable, carrying a ValuePattern.*

## <a id="why"></a>What it was

**[`uia.ts`](../../package/../../../.claude/src/uia.ts) ends `clickByName` like this:**

```powershell
[UiaClickHelper]::SetCursorPos($x, $y)
[UiaClickHelper]::mouse_event(0x0002, 0, 0, 0, [UIntPtr]::Zero)
[UiaClickHelper]::mouse_event(0x0004, 0, 0, 0, [UIntPtr]::Zero)
'true'
```

*and TypeScript reads it with* `return result?.trim() === 'true';`

***`SetCursorPos` is declared `public static extern bool`.*** **In PowerShell an unassigned call to a non-void method writes its return value to the output stream**, *and the shell hands the whole stream back as one string.* **So the result was `True\ntrue`, and `.trim()` never equalled `'true'`.**

*Proven by calling `SetCursorPos` with the cursor's own coordinates — nothing moved, and the emitted text was:*

```
True
true
```

***The two `mouse_event` calls are declared `void` and emit nothing, which is why only the first line was polluted, and why the click itself was never in question.*** **The repair is `| Out-Null`.**

## <a id="the-class"></a>The class, which is bigger than the bug

***The wrong value is not the defect. The defect is that it survived.*** **Every caller discarded it** — *in the View layer the call sites read:*

```ts
async () => { await this.controller.clickSend(); },
```

***The `{ }` block exists for no reason except to throw the return value away*** *so the expression type-matches `() => Promise<void>`.* **The failure was computed, returned, and binned, at every site, every time.**

**And it was not alone. THREE instances of one class were found in one codebase in one day:**

| | the lie |
|---|---|
| `clickByName` | returned `false` on every **successful** click |
| `readValue` | `result?.trim() \|\| null` — `'' \|\| null` is `null`, so an **empty** composer and an **unreadable** element came back identical |
| `readDraft` | turned that `null` back into `''`, so the two mistakes **cancelled** and the pair looked correct |

***That last row is the thing to remember: two defects that agreed hid each other, and fixing one exposed the other.*** **The pair had passed every test and every use for months because their errors were inverse.**

## <a id="ruling"></a>The ruling this produced

> ***Doug, 2026-09-17:*** **"you guys don't like to throw exceptions. I love exceptions so all bugs like that are on you. Eradicate them as you fix this."**

***The rule that falls out, stated so it can be applied:*** **a SENSOR may answer `false` — that is a question with a real answer. An ACTUATOR that did not act must THROW.** *And "I could not see" must never return the same value as "it is not there", because those two are repaired in different files.*

**But the corollary is the harder half, and it was learned the same day by getting it wrong:** ***making callers trust a value that has always been a lie is how a working path breaks.*** *The throw is correct. It is also what turned a functioning dispatch into a hard failure, because the value it began believing had never been true.* **So the order is: make it honest FIRST, then make callers depend on it.**

## <a id="how"></a>How to find the next one

***Look for a returned boolean that no call site reads.*** **A value that nobody consumes cannot be wrong in any way anyone will notice, which means it is free to be wrong, which means eventually it is.** *The tell is mechanical and greppable: a call wrapped in a block solely to discard its result.*

***And in this driver specifically, one more:*** **any unassigned non-void call inside a PowerShell script corrupts what that script returns**, *because [the shell](../../../../.claude/src/shell.ts) runs `Invoke-Expression $cmd 2>&1 | Out-String` and returns the entire stream.* **Every script whose result is compared or parsed must emit nothing but its answer.**
