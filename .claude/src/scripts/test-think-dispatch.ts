// Think — two phases. Write sends and confirms started. Read waits for complete.
// Usage:
//   npx tsx test-think-dispatch.ts write "question"
//   npx tsx test-think-dispatch.ts read
//   npx tsx test-think-dispatch.ts state | clear

import { Claude } from '../claude.ts';
import { readState, writeState, deleteState, hasActiveThought,
         updateCatalogue, scaffoldChapter, findChapter, pasteResponse,
         ConversationState } from './think.ts';
import type { ThoughtState } from './think.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
const mode = process.argv[2];
const app = new Claude();

// --- WRITE: send question, confirm started, scaffold, minimize ---

async function doWrite() {
  const question = process.argv[3];
  if (!question) { console.error('Usage: write "question"'); process.exit(1); }
  if (hasActiveThought()) { console.log('[write] Active thought. Use read or clear.'); return; }

  await app.launch();
  try {
    await app.newChat();
    await app.compose(question);
    await app.sendAsync();

    // Confirm Desktop started — poll for streaming or stop button
    let started = false;
    for (let i = 0; i < 30; i++) {
      await app.conversation.scrollToBottom();
      const streaming = await app.conversation.checkStreaming();
      const hasStop = await app.conversation.hasStopButton();
      if (streaming || hasStop) { started = true; break; }
    }

    if (!started) {
      console.log('[write] FAILED: Desktop did not start processing.');
      return;
    }

    // Capture URL
    const url = await app.auto.uia.readUrl() ?? '';
    const id = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';

    const state: ThoughtState = {
      conversationId: id, url, question,
      startedAt: new Date().toISOString(),
    };
    writeState(state);
    const chapter = scaffoldChapter(state);

    console.log('[write] Started. ID:', id);
    console.log('[write] Chapter:', chapter);
  } finally {
    app.window.minimize();
  }
}

// --- READ: wait for complete, read response, rename, catalogue ---

async function doRead() {
  const state = readState();
  if (!state) { console.log('[read] No active thought.'); return; }
  const chapter = findChapter(state);
  if (!chapter) { console.log('[read] No chapter. Run write first.'); return; }

  await app.launch();
  try {
    // Navigate to the conversation
    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);
    }

    // First: confirm Desktop is still processing (streaming or stop button)
    // This distinguishes "not started" from "already done"
    let sawProcessing = false;
    for (let i = 0; i < 30; i++) {
      await app.conversation.scrollToBottom();
      const streaming = await app.conversation.checkStreaming();
      const hasStop = await app.conversation.hasStopButton();
      if (streaming || hasStop) { sawProcessing = true; break; }
      // Also check if already done — content exists, no indicators
      if (await app.conversation.hasResponseContent()) { sawProcessing = true; break; }
    }
    if (!sawProcessing) {
      console.log('[read] No processing detected. Message may not have been received.');
      return;
    }

    // Poll for response complete
    for (let i = 0; i < 240; i++) {
      await app.conversation.scrollToBottom();
      const complete = await app.conversation.isResponseComplete();

      if (complete) {
        const response = await app.conversation.readLastResponse();
        console.log('[read] Response:', response.length, 'chars');
        console.log('[read] Preview:', response.slice(0, 200));

        // Paste into chapter
        pasteResponse(chapter, response);
        writeFileSync(resolve(DEBUG, 'think-response.txt'), response, 'utf-8');

        // Rename conversation
        try {
          const topicName = state.question.slice(0, 80);
          await app.renameConversation(topicName);
          console.log('[read] Renamed:', topicName);
        } catch { console.log('[read] Rename failed (non-critical).'); }

        // Add to Claude project
        try {
          await app.sidebar.chats.addToProject(
            await app.conversation.readTitle(), 'Claude'
          );
          console.log('[read] Added to Claude project.');
        } catch {
          try { await app.dismissDialogs(); } catch {}
          console.log('[read] Project filing failed (non-critical).');
        }

        // Update catalogue
        const now = new Date().toISOString().split('T')[0];
        updateCatalogue({
          topic: state.question.slice(0, 100),
          conversationId: state.conversationId, url: state.url,
          state: ConversationState.active, started: state.startedAt.split('T')[0],
          lastExchange: now, summary: response.slice(0, 500),
        });

        console.log('[read] Done.');
        return;
      }

      // Status report every 10 checks
      if (i % 10 === 0) {
        const streaming = await app.conversation.checkStreaming();
        const hasStop = await app.conversation.hasStopButton();
        const hasContent = await app.conversation.hasResponseContent();
        console.log(`[read] ${i}: streaming=${streaming} stop=${hasStop} content=${hasContent}`);
      }
    }

    console.log('[read] Timeout.');
  } finally {
    app.window.minimize();
  }
}

// --- Utilities ---

function showState() {
  const state = readState();
  if (!state) { console.log('No active thought.'); return; }
  console.log('Q:', state.question.slice(0, 80));
  console.log('ID:', state.conversationId);
  console.log('Chapter:', findChapter(state) || '(none)');
}

async function main() {
  if (mode === 'write') await doWrite();
  else if (mode === 'read') await doRead();
  else if (mode === 'state') showState();
  else if (mode === 'clear') { deleteState(); console.log('Cleared.'); }
  else console.log('Usage: write "q" | read | state | clear');
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
