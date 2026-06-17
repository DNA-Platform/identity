// Think — uses Session (the app's conversation manager) for all Desktop work.
// Session.send() handles: foreground, compose, send, wait, read, minimize.
// This script adds only: state file, thinking book chapter, catalogue.

import { Claude } from '../claude.ts';
import { readState, writeState, deleteState, hasActiveThought,
         updateCatalogue, scaffoldChapter, findChapter, pasteResponse } from './think.ts';
import type { ThoughtState } from './think.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
const mode = process.argv[2];
const app = new Claude();

async function doThink() {
  const question = process.argv[3];
  if (!question) { console.error('Usage: ... think "question"'); process.exit(1); }
  if (hasActiveThought()) {
    console.log('[think] Active thought exists. Use "clear" first.');
    return;
  }

  await app.launch();
  const session = await app.startSession({ timeout: 180_000 });

  try {
    const response = await session.send(question);
    const responseText = response.content.text;

    const state: ThoughtState = {
      conversationId: session.id,
      url: session.url,
      question,
      startedAt: new Date().toISOString(),
    };
    writeState(state);

    const chapter = scaffoldChapter(state);
    pasteResponse(chapter, responseText);

    const now = new Date().toISOString().split('T')[0];
    updateCatalogue({
      topic: question.slice(0, 100),
      conversationId: session.id,
      url: session.url,
      state: 'active',
      started: now,
      lastExchange: now,
      summary: responseText.slice(0, 500),
    });

    console.log('[think] Response:', responseText.length, 'chars');
    console.log('[think] Preview:', responseText.slice(0, 200));
    console.log('[think] Chapter:', chapter);
    console.log('[think] ID:', session.id);

    writeFileSync(resolve(DEBUG, 'think-response.txt'), responseText, 'utf-8');
  } finally {
    try { app.window.minimize(); } catch {}
  }
}

function showState() {
  const state = readState();
  if (!state) { console.log('[state] No active thought.'); return; }
  console.log('[state]', state.question.slice(0, 80));
  console.log('[state] ID:', state.conversationId);
  console.log('[state] Chapter:', findChapter(state) || '(none)');
}

async function main() {
  if (mode === 'think') await doThink();
  else if (mode === 'state') showState();
  else if (mode === 'clear') { deleteState(); console.log('Cleared.'); }
  else console.log('Usage: think "question" | state | clear');
}

main().catch(e => {
  console.error('FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
