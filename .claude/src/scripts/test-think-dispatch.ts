// The write/check/read cycle for /think.
// Each mode is thin — app methods for Desktop, think.ts for persistence.

import { Claude } from '../claude.ts';
import { readState, writeState, hasActiveThought, updateCatalogue,
         scaffoldChapter, findChapter, pasteResponse } from './think.ts';
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
    console.log('[write] Active thought exists. Use check/read.');
    return;
  }

  await app.launch();
  try {
    await app.newChat();
    await app.compose(question);
    try { await app.sendAndForget(); }
    catch { try { await app.conversation.composer.clear(); } catch {} throw arguments[0]; }

    let url = '', id = '';
    for (let i = 0; i < 10; i++) {
      await new Promise(r => setTimeout(r, 500));
      url = await app.auto.uia.readUrl() ?? '';
      const m = url.match(/\/chat\/([a-f0-9-]+)/);
      if (m) { id = m[1]; break; }
    }

    const state: ThoughtState = { conversationId: id, url, question, startedAt: new Date().toISOString() };
    writeState(state);
    const chapter = scaffoldChapter(state);
    console.log('[write] Sent. ID:', id);
    console.log('[write] Chapter:', chapter);
  } finally { app.window.minimize(); }
}

async function doCheck() {
  const state = readState();
  if (!state) { console.log('[check] No active thought.'); return; }
  const chapter = findChapter(state);
  if (!chapter) { console.log('[check] No chapter — scaffold first.'); return; }

  await app.launch();
  try {
    await app.navigator.detectScreen();
    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);
    }
    await app.conversation.scrollToBottom();
    await new Promise(r => setTimeout(r, 100));
    const streaming = await app.conversation.checkStreaming();
    console.log(streaming ? '[check] Still streaming.' : '[check] Ready. Run "read".');
  } finally { app.window.minimize(); }
}

async function doRead() {
  const state = readState();
  if (!state) { console.log('[read] No active thought.'); return; }
  const chapter = findChapter(state);
  if (!chapter) { console.log('[read] No chapter.'); return; }

  await app.launch();
  try {
    await app.navigator.detectScreen();
    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);
    }
    await app.conversation.scrollToBottom();
    await new Promise(r => setTimeout(r, 100));
    const response = await app.conversation.readLastResponse();

    console.log('[read] Length:', response.length);
    console.log('[read] Preview:', response.slice(0, 200));
    writeFileSync(resolve(DEBUG, 'think-response.txt'), response, 'utf-8');
    pasteResponse(chapter, response);
    console.log('[read] Chapter updated.');

    const now = new Date().toISOString().split('T')[0];
    updateCatalogue({
      topic: state.question.slice(0, 100),
      conversationId: state.conversationId, url: state.url,
      state: 'active', started: state.startedAt.split('T')[0],
      lastExchange: now, summary: response.slice(0, 500),
    });
  } finally { app.window.minimize(); }
}

function showState() {
  const state = readState();
  if (!state) { console.log('[state] No active thought.'); return; }
  console.log('[state]', state.question.slice(0, 80));
  console.log('[state] ID:', state.conversationId);
  console.log('[state] Chapter:', findChapter(state) || '(none)');
}

async function main() {
  if (mode === 'write') await doWrite();
  else if (mode === 'check') await doCheck();
  else if (mode === 'read') await doRead();
  else if (mode === 'state') showState();
  else console.log('Usage: write "q" | check | read | state');
}

main().catch(e => {
  console.error('FAILED:', e.message);
  try { app.window.minimize(); } catch {}
});
