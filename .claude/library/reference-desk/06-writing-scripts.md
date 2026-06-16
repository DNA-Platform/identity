# Writing Scripts

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

Scripts are the user-facing layer — what you write when you need the tool to do something. A well-written script reads like a procedure a human would follow. Source: dna-library driver ch 12, the pilot scripts from [Sprint 63](../research-projection/27-sprint-63--the-pilot-conversation.md).

## The pattern

Every script follows the same shape:

```typescript
import { Claude } from '../claude.ts';

const app = new Claude();

try {
  await app.launch();
  // ... do the work ...
} catch (e) {
  console.error(e.message);
} finally {
  app.window.minimize();
}
```

Launch. Work. Minimize. The `finally` block ensures Doug gets his computer back even if the script fails. The `catch` block logs the error. The work goes between.

## Research dispatch

The most common script pattern — asking Claude Desktop a question:

```typescript
const session = await app.startSession({
  name: 'Research: paper synthesis',
  project: 'DNA Patternity',
});

const response = await session.send('Summarize the sequence filtering methodology');
console.log(response.text);

// Continue if needed
const followup = await session.send('What are the implications for neural coding?');

await session.end();
```

The session handles foreground management, response waiting, and cleanup. The script just sends questions and reads answers.

## Navigation script

For exploring the app without sending messages:

```typescript
await app.launch();
await app.resetToHome();

// Read the sidebar
console.log(`Chats: ${app.sidebar.chats.items.length}`);
for (const chat of app.sidebar.chats.items.slice(0, 5)) {
  console.log(`  ${chat.title}`);
}

// Open a project
await app.openProject('Physics');
const name = await app.project.readName();
const instructions = await app.project.readInstructions();
console.log(`Project: ${name}`);
console.log(`Instructions: ${instructions.slice(0, 200)}...`);

app.window.minimize();
```

## Test scripts

Test scripts live at `.claude/src/scripts/test-*.ts`. They verify specific behaviors without creating or modifying anything. The conventions:

- **Stateless by default.** Read, navigate, screenshot. Don't write messages or create projects unless the test is specifically about creation (and clean up what you create).
- **Screenshot on failure.** When an assertion fails, capture the screen state before aborting.
- **Minimize always.** In the finally block. No exceptions.
- **Name what you test.** `test-conversation-read.ts`, not `test-1.ts`.

## When to write a new script

When the book describes a behavior and you want to verify it. The script IS the verification. If the book says "`openProject(name)` navigates to the project page," write a script that calls `openProject()` and asserts the screen is `'project'`. If the assertion fails, either the book is wrong or the code is wrong — fix whichever is the source of truth (usually the code, since the app defines correctness).

## Scripts should never

Per the [coding philosophy](05-coding-philosophy.md):
- Call `gateway.waitFor()` directly — the `Claude` class should wrap it
- Read the UIA tree directly — use page/component methods
- Use `setTimeout` or `sleep` — use gateway polling
- Leave the app maximized — always minimize in finally
