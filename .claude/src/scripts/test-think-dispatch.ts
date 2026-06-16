// Test the write/check/read cycle using app methods directly.
// Usage:
//   npx tsx test-think-dispatch.ts write "your question"
//   npx tsx test-think-dispatch.ts check
//   npx tsx test-think-dispatch.ts read
//   npx tsx test-think-dispatch.ts state

import { Claude } from '../claude.ts';
import { readState, writeState, hasActiveThought, updateCatalogue } from './think.ts';
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
  if (!question) { console.error('Usage: ... write "question"'); process.exit(1); }

  if (hasActiveThought()) {
    const s = readState()!;
    console.log('[write] Active thought exists:', s.question.slice(0, 60));
    console.log('[write] Use "check" or "read". Clear with "state" if stale.');
    return;
  }

  await app.launch();

  try {
    await app.newChat();
    await app.compose(question);

    try {
      await app.sendAndForget();
    } catch (e) {
      try { await app.conversation.composer.clear(); } catch {}
      throw e;
    }

    // Wait for URL to transition from home to /chat/{id}
    let url = '';
    let id = '';
    for (let i = 0; i < 10; i++) {
      await new Promise(r => setTimeout(r, 500));
      url = await app.auto.uia.readUrl() ?? '';
      const match = url.match(/\/chat\/([a-f0-9-]+)/);
      if (match) { id = match[1]; break; }
    }

    const state: ThoughtState = {
      conversationId: id,
      url,
      question,
      startedAt: new Date().toISOString(),
    };
    writeState(state);

    console.log('[write] Sent and minimized.');
    console.log('[write] ID:', id);
    console.log('[write] URL:', url);
  } finally {
    app.window.minimize();
  }
}

async function doCheck() {
  const state = readState();
  if (!state) { console.log('[check] No active thought.'); return; }

  await app.launch();

  try {
    // Wait for screen to stabilize after launch
    await app.navigator.detectScreen();

    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);

      // Verify we're on the right conversation
      if (state.conversationId && !await app.checkConversation(state.conversationId)) {
        console.log('[check] WARNING: could not verify conversation. Checking most recent chat.');
      }
    }

    await app.conversation.scrollToBottom();
    await new Promise(r => setTimeout(r, 300));

    const streaming = await app.conversation.checkStreaming();

    if (streaming) {
      console.log('[check] Still streaming.');
    } else {
      console.log('[check] Response ready. Run "read" to get it.');
    }
  } finally {
    app.window.minimize();
  }
}

async function doRead() {
  const state = readState();
  if (!state) { console.log('[read] No active thought.'); return; }

  await app.launch();

  try {
    await app.navigator.detectScreen();

    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);
    }

    // Scroll to bottom first — lazy rendering means long responses
    // won't be fully in the UIA tree without scrolling
    await app.conversation.scrollToBottom();
    await new Promise(r => setTimeout(r, 300));

    const response = await app.conversation.readLastResponse();

    console.log('[read] Length:', response.length);
    console.log('[read] Preview:', response.slice(0, 300));

    writeFileSync(resolve(DEBUG, 'think-response.txt'), response, 'utf-8');
    console.log('[read] Saved to debug/think-response.txt');

    const now = new Date().toISOString().split('T')[0];
    updateCatalogue({
      topic: state.question.slice(0, 100),
      conversationId: state.conversationId,
      url: state.url,
      state: 'active',
      started: state.startedAt.split('T')[0],
      lastExchange: now,
      summary: response.slice(0, 500),
    });
    console.log('[read] Catalogue updated.');
  } finally {
    app.window.minimize();
  }
}

function showState() {
  const state = readState();
  if (!state) { console.log('[state] No active thought.'); return; }
  console.log('[state] Question:', state.question.slice(0, 80));
  console.log('[state] ID:', state.conversationId);
  console.log('[state] URL:', state.url);
  console.log('[state] Started:', state.startedAt);
}

async function main() {
  if (mode === 'write') await doWrite();
  else if (mode === 'check') await doCheck();
  else if (mode === 'read') await doRead();
  else if (mode === 'state') showState();
  else {
    console.log('Usage:');
    console.log('  write "question"  — send a question to Desktop');
    console.log('  check             — is the response ready?');
    console.log('  read              — read the response');
    console.log('  state             — show current thought state');
  }
}

main().catch(e => {
  console.error('FAILED:', e.message);
  try { app.window.minimize(); } catch {}
});
