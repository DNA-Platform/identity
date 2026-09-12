# The Driver — Walking the App

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

```bash
cd .claude/src
npx tsx cli/cli.ts look          # print the room you are in  (alias: where)
npx tsx cli/cli.ts next          # just the command names — for automation
npx tsx cli/cli.ts go <exit>     # take an exit, print the room you arrive in
npx tsx cli/cli.ts back          # ask the app where it is and stand there
npx tsx cli/cli.ts do <cmd> […]  # run a look (reads) or an action (changes)
npx tsx cli/cli.ts tree [filter] # the live UIA tree — what the app ACTUALLY shows
npx tsx cli/cli.ts copy <cmd>    # run a look, hand the result to the clipboard
```

## What a room looks like

```
── Home ──
https://claude.ai/new
On this screen: composer, modelPicker
Exits — these take you somewhere new:
  composer.send  → Conversation
  sidebar        → Sidebar
Look — these read the screen and tell you what is there: …
Do — these change something: …
Always available:  tree [filter]   copy <command>   look   back   help
```

## How the room is derived — nobody maintains a list

`cli/describe.ts` classifies every method on the page class, in this order:

1. **returns another page → `exit`**
2. **parameterless and returns data → `look`**
3. **everything else → `do`**

Order matters: a method can be both parameterless and a door, and reading it as a look opens a menu behind the operator's back.

`cli/render.ts` (179 lines) imports **only** `Command` and `ScreenModel` — it is genuinely generic. `cli/surface.ts` (271 lines) is the TypeScript compiler API and is not. Of 885 lines, ~209 would transfer to a different subject; the model builder would not.

## What it proved (2026-09-06)

Ran `look` → Home. `do modelPicker.currentModel` → **"Opus 5"**, read from the live UI. `go sidebar` → arrived, new room printed its own exits.

**Nobody told me how to use it.** I read `look`'s output and knew `go sidebar` was legal because the room said so — no capitals, no "CRITICAL RULE", no instructions field. That is the affordance doing the work, and it is the argument for putting exits in the result rather than in a description.
