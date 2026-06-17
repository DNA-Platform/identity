///: Think dispatch — sends questions to Desktop and reads responses.
///: write: compose, send (waits for thinking block or response content), save state, minimize.
///: read: navigate, poll for completion, read response, file in Claude project, minimize.
///:
///: [Sessions](../../library/reference-desk/03-04-operations--sessions.md) — conversation lifecycle.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — object chain.

import { Claude } from '../claude.ts';
import { readState, writeState, deleteState, hasActiveThought } from './think.ts';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
if (!existsSync(DEBUG)) mkdirSync(DEBUG, { recursive: true });

const mode = process.argv[2];
const app = new Claude();

async function doWrite() {
  let question = process.argv[3];
  if (!question) { console.error('Usage: write "question" OR write --file path/to/question.txt'); process.exit(1); }
  if (hasActiveThought()) { console.log('[write] Active thought. Use read or clear.'); return; }

  if (question === '--file') {
    const filePath = process.argv[4];
    if (!filePath) { console.error('Usage: write --file path/to/question.txt'); process.exit(1); }
    question = readFileSync(filePath, 'utf-8').trim();
  }

  await app.launch();
  try {
    await app.newChat();
    await app.compose(question);

    // sendAsync() calls composer.send() which verifies Desktop acknowledged
    // via the thinking block element or response content — actual content,
    // not status indicators. Blocks until Desktop is confirmed working.
    // Does NOT wait for the full response — just confirmation of processing.
    console.log('[write] Sending and waiting for Desktop to start...');
    await app.sendAsync();
    console.log('[write] Desktop confirmed working.');

    // Capture conversation identity
    const url = await app.auto.uia.readUrl() ?? '';
    const id = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';
    writeState({ conversationId: id, url, question, startedAt: new Date().toISOString() });

    console.log('[write] Conversation ID:', id);
  } finally {
    app.window.minimize();
    console.log('[write] Minimized.');
  }
}

async function doRead() {
  const state = readState();
  if (!state) { console.log('[read] No active thought.'); return; }

  await app.launch();
  try {
    await app.openConversationById(state.conversationId);

    // Poll for content — thinking block or response text.
    // Scrolls to bottom each poll so lazy rendering exposes the elements.
    console.log('[read] Looking for content...');
    const hasContent = await app.gateway.waitFor(async () => {
      await app.conversation.scrollToBottom();
      return app.conversation.controller.hasThinkingBlock();
    }, { timeoutMs: 30_000 });

    if (!hasContent) {
      console.log('[read] No content detected. Desktop may not have processed this.');
      return;
    }

    // Poll for completion — response done, not just started.
    console.log('[read] Content detected. Waiting for completion...');
    const complete = await app.gateway.waitFor(async () => {
      await app.conversation.scrollToBottom();
      return app.conversation.isResponseComplete();
    }, { timeoutMs: 300_000 });

    if (!complete) { console.log('[read] Timeout — still processing.'); return; }

    const response = await app.conversation.readLastResponse();
    console.log('[read] Response:', response.length, 'chars');
    console.log('[read] Preview:', response.slice(0, 200));
    writeFileSync(resolve(DEBUG, 'think-response.txt'), response, 'utf-8');

    // File in Claude project via the object chain
    const inProject = await app.conversation.isInProject('Claude');
    if (!inProject) {
      console.log('[read] Filing in Claude project...');
      try {
        await app.sidebar.refresh();
        const title = app.conversation.title ?? '';
        if (title) {
          const item = app.sidebar.chats.find(title);
          if (item) {
            const menu = await item.menu();
            if (!menu.isInProject) {
              const picker = await menu.addToProject();
              if (picker.has('Claude')) {
                await picker.select('Claude');
                console.log('[read] Filed in Claude project.');
              } else {
                await picker.cancel();
              }
            } else {
              await menu.close();
              console.log('[read] Already in a project.');
            }
          }
        }
      } catch (e) {
        console.log('[read] Filing failed:', (e as Error).message);
      }
    } else {
      console.log('[read] Already in Claude project.');
    }

    // Clear state — thought concluded, ready for next write
    deleteState();
    console.log('[read] Done. State cleared.');
  } finally {
    app.window.minimize();
  }
}

async function main() {
  if (mode === 'write') await doWrite();
  else if (mode === 'read') await doRead();
  else if (mode === 'state') {
    const s = readState();
    if (!s) { console.log('No active thought.'); return; }
    console.log('Q:', s.question.slice(0, 80));
    console.log('ID:', s.conversationId);
  }
  else if (mode === 'clear') { deleteState(); console.log('Cleared.'); }
  else console.log('Usage: write "q" | read | state | clear');
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});

