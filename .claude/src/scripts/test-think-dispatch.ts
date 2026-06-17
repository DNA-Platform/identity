// Think — Desktop automation only. No library authorship.
// Write: send question, confirm started, save state, minimize.
// Read: navigate to conversation, poll for complete, read response, minimize.
// All library work (chapters, covers, catalogues) is done by teammates, not this script.

import { Claude } from '../claude.ts';
import { readState, writeState, deleteState, hasActiveThought } from './think.ts';
import type { ThoughtState } from './think.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
const mode = process.argv[2];
const app = new Claude();

async function doWrite() {
  const question = process.argv[3];
  if (!question) { console.error('Usage: write "question"'); process.exit(1); }
  if (hasActiveThought()) { console.log('[write] Active thought. Use read or clear.'); return; }

  await app.launch();
  try {
    await app.newChat();
    await app.compose(question);
    await app.sendAsync();

    // Confirm Desktop started
    let started = false;
    for (let i = 0; i < 30; i++) {
      await app.conversation.scrollToBottom();
      if (await app.conversation.checkStreaming() || await app.conversation.hasStopButton()) {
        started = true;
        break;
      }
    }
    if (!started) { console.log('[write] Desktop did not start.'); return; }

    // Capture conversation identity
    const url = await app.auto.uia.readUrl() ?? '';
    const id = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';
    writeState({ conversationId: id, url, question, startedAt: new Date().toISOString() });

    console.log('[write] Started. ID:', id);
  } finally {
    app.window.minimize();
  }
}

async function doRead() {
  const state = readState();
  if (!state) { console.log('[read] No active thought.'); return; }

  await app.launch();
  try {
    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);
    }

    // Confirm still processing or already done
    let active = false;
    for (let i = 0; i < 30; i++) {
      await app.conversation.scrollToBottom();
      if (await app.conversation.checkStreaming() || await app.conversation.hasStopButton()
          || await app.conversation.hasResponseContent()) {
        active = true;
        break;
      }
    }
    if (!active) { console.log('[read] No activity detected.'); return; }

    // Poll for complete
    for (let i = 0; i < 240; i++) {
      await app.conversation.scrollToBottom();
      if (await app.conversation.isResponseComplete()) {
        const response = await app.conversation.readLastResponse();
        console.log('[read] Response:', response.length, 'chars');
        console.log('[read] Preview:', response.slice(0, 200));
        writeFileSync(resolve(DEBUG, 'think-response.txt'), response, 'utf-8');
        console.log('[read] Done.');
        return;
      }
      if (i % 10 === 0) {
        const s = await app.conversation.checkStreaming();
        const st = await app.conversation.hasStopButton();
        const c = await app.conversation.hasResponseContent();
        console.log(`[read] ${i}: streaming=${s} stop=${st} content=${c}`);
      }
    }
    console.log('[read] Timeout.');
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
