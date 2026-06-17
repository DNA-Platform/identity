// Think — non-blocking. sendAsync() returns immediately.
// Poll conversation.checkStreaming() and conversation.readLastResponse() directly.

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
const question = process.argv[2];
const app = new Claude();

async function main() {
  if (!question) {
    console.error('Usage: npx tsx test-think-dispatch.ts "your question"');
    process.exit(1);
  }
  if (question === 'clear') { deleteState(); console.log('Cleared.'); return; }
  if (question === 'state') {
    const s = readState();
    if (!s) { console.log('No active thought.'); return; }
    console.log(s.question.slice(0, 80), '\nID:', s.conversationId, '\nChapter:', findChapter(s) || '(none)');
    return;
  }
  if (hasActiveThought()) {
    console.log('Active thought exists. Use "clear" first.');
    return;
  }

  await app.launch();

  try {
    await app.newChat();
    await app.compose(question);
    await app.sendAsync();
    console.log('[think] Sent.');

    // Capture URL
    const url = await app.auto.uia.readUrl() ?? '';
    const id = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';

    const state: ThoughtState = {
      conversationId: id, url, question,
      startedAt: new Date().toISOString(),
    };
    writeState(state);

    // Scaffold chapter while Desktop thinks
    const chapter = scaffoldChapter(state);
    console.log('[think] Chapter:', chapter);

    // Poll — conversation object IS the async interface
    for (let i = 0; i < 120; i++) {
      await app.conversation.scrollToBottom();
      const streaming = await app.conversation.checkStreaming();
      const hasContent = await app.conversation.hasResponseContent();

      if (!streaming && hasContent) {
        // Not streaming AND content exists — response is complete
        const response = await app.conversation.readLastResponse();
        if (response && response.length > 0) {
          console.log('[think] Response:', response.length, 'chars');
          console.log('[think] Preview:', response.slice(0, 200));

          pasteResponse(chapter, response);
          writeFileSync(resolve(DEBUG, 'think-response.txt'), response, 'utf-8');

          const now = new Date().toISOString().split('T')[0];
          updateCatalogue({
            topic: question.slice(0, 100),
            conversationId: id, url,
            state: ConversationState.active, started: now,
            lastExchange: now, summary: response.slice(0, 500),
          });

          console.log('[think] Done.');
          return;
        }
      }

      if (streaming) {
        if (i % 10 === 0) console.log(`[think] Streaming... (${i}s)`);
      }
    }

    console.log('[think] Timeout after 120 checks.');
  } finally {
    try { app.window.minimize(); } catch {}
  }
}

main().catch(e => {
  console.error('[think] FAILED:', (e as Error).message);
  try { app.window.minimize(); } catch {}
});
