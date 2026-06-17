// The write/check/read cycle for /think.
// Usage:
//   npx tsx test-think-dispatch.ts write "your question"
//   npx tsx test-think-dispatch.ts check
//   npx tsx test-think-dispatch.ts read
//   npx tsx test-think-dispatch.ts state

import { Claude } from '../claude.ts';
import { readState, writeState, hasActiveThought, updateCatalogue } from './think.ts';
import type { ThoughtState } from './think.ts';
import { writeFileSync, readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG = resolve(__dirname, '..', 'debug');
const THINKING_BOOK = resolve(__dirname, '..', '..', 'library',
  '..teamsmanship', '..team', 'claude', 'thinking');
const mode = process.argv[2];
const app = new Claude();

// --- Thinking book helpers ---

function nextChapterNumber(): number {
  if (!existsSync(THINKING_BOOK)) return 1;
  const files = readdirSync(THINKING_BOOK).filter(f => /^\d+-/.test(f));
  return files.length + 1;
}

function chapterPath(state: ThoughtState): string | null {
  if (!existsSync(THINKING_BOOK)) return null;
  const files = readdirSync(THINKING_BOOK).filter(f => f.endsWith('.md') && f !== '.cover.md');
  // Find chapter whose content contains this conversation ID
  for (const f of files) {
    const content = readFileSync(resolve(THINKING_BOOK, f), 'utf-8');
    if (content.includes(state.conversationId)) return resolve(THINKING_BOOK, f);
  }
  return null;
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50);
}

function scaffoldChapter(state: ThoughtState): string {
  const num = String(nextChapterNumber()).padStart(2, '0');
  const slug = slugify(state.question.slice(0, 60));
  const filename = `${num}-${slug}.md`;
  const filepath = resolve(THINKING_BOOK, filename);

  // New conversations have no previous. Follow-ups in the same conversation
  // would link to the prior exchange, but that requires passing a conversation ID.
  // For now, all new thoughts start fresh.
  const previousLink = '(none — new conversation)';

  const content = `# ${state.question.slice(0, 80)}

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** ${state.conversationId}
- **previous:** ${previousLink}
- **date:** ${new Date().toISOString().split('T')[0]}
- **verdict:** (pending)

---

## What I asked and why

${state.question}

## What I expect

(to be filled before check)

## Evidence

(awaiting Desktop response)

## Interpretation

(to be written after reading)

## Conclusion

(to be written after interpretation)
`;

  writeFileSync(filepath, content, 'utf-8');

  // Add a TOC entry to the thinking book cover
  const coverPath = resolve(THINKING_BOOK, '.cover.md');
  if (existsSync(coverPath)) {
    let cover = readFileSync(coverPath, 'utf-8');
    const tocEntry = `\n### (New conversation — pending)
- **conversation-id:** \`${state.conversationId}\`
- **state:** active — response pending
${num.replace(/^0/, '')}. [${state.question.slice(0, 60)}](${filename}) — (summary to be written after reading)\n`;
    cover = cover.trimEnd() + '\n' + tocEntry;
    writeFileSync(coverPath, cover, 'utf-8');
  }

  return filepath;
}

// --- Modes ---

async function doWrite() {
  const question = process.argv[3];
  if (!question) { console.error('Usage: ... write "question"'); process.exit(1); }

  if (hasActiveThought()) {
    const s = readState()!;
    console.log('[write] Active thought exists:', s.question.slice(0, 60));
    console.log('[write] Use "check" or "read".');
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

    // Wait for URL to contain /chat/{id}
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

    // Scaffold the thinking book chapter
    const chapterFile = scaffoldChapter(state);
    console.log('[write] Sent and minimized.');
    console.log('[write] ID:', id);
    console.log('[write] Chapter:', chapterFile);
  } finally {
    app.window.minimize();
  }
}

async function doCheck() {
  const state = readState();
  if (!state) { console.log('[check] No active thought.'); return; }

  // Verify thinking book chapter exists before touching Desktop
  const chapter = chapterPath(state);
  if (!chapter) {
    console.log('[check] No thinking book chapter found for this conversation.');
    console.log('[check] Scaffold the chapter first (write mode does this automatically).');
    return;
  }
  console.log('[check] Chapter verified:', chapter);

  await app.launch();

  try {
    await app.navigator.detectScreen();

    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);

      if (state.conversationId && !await app.checkConversation(state.conversationId)) {
        console.log('[check] WARNING: could not verify conversation.');
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

  const chapter = chapterPath(state);
  if (!chapter) {
    console.log('[read] No thinking book chapter found.');
    return;
  }

  await app.launch();

  try {
    await app.navigator.detectScreen();

    if (!await app.checkConversation(state.conversationId)) {
      await app.sidebar.refresh();
      await app.openChatAt(0);
    }

    await app.conversation.scrollToBottom();
    await new Promise(r => setTimeout(r, 300));

    const response = await app.conversation.readLastResponse();

    console.log('[read] Length:', response.length);
    console.log('[read] Preview:', response.slice(0, 300));

    // Save to debug
    writeFileSync(resolve(DEBUG, 'think-response.txt'), response, 'utf-8');

    // Paste response into thinking book chapter Evidence section
    let chapterContent = readFileSync(chapter, 'utf-8');
    chapterContent = chapterContent.replace(
      '(awaiting Desktop response)',
      response.slice(0, 3000) + (response.length > 3000 ? '\n\n(truncated — full response in debug/think-response.txt)' : '')
    );
    chapterContent = chapterContent.replace('- **verdict:** (pending)', '- **verdict:** sufficient');
    writeFileSync(chapter, chapterContent, 'utf-8');
    console.log('[read] Chapter updated:', chapter);

    // Update catalogue
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
  const chapter = chapterPath(state);
  console.log('[state] Chapter:', chapter || '(none)');
}

async function main() {
  if (mode === 'write') await doWrite();
  else if (mode === 'check') await doCheck();
  else if (mode === 'read') await doRead();
  else if (mode === 'state') showState();
  else {
    console.log('Usage:');
    console.log('  write "question"  — send to Desktop, scaffold chapter');
    console.log('  check             — verify chapter exists, check if response ready');
    console.log('  read              — read response, paste into chapter');
    console.log('  state             — show current thought state');
  }
}

main().catch(e => {
  console.error('FAILED:', e.message);
  try { app.window.minimize(); } catch {}
});
