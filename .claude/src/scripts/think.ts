// think.ts — persistence for the Thoughtfulness lifecycle.
// The app (Claude class) handles ALL Desktop interaction.
// This file handles: state file, catalogue JSON, and thinking book chapters.

import { readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PERSPECTIVE_DIR = resolve(__dirname, '..', '..', 'library',
  '..teamsmanship', '..team', 'claude', '.perspective');
const THINKING_BOOK = resolve(__dirname, '..', '..', 'library',
  '..teamsmanship', '..team', 'claude', 'thinking');
const STATE_FILE = resolve(PERSPECTIVE_DIR, 'thought-state.json');
const CATALOGUE_FILE = resolve(PERSPECTIVE_DIR, 'catalogue.json');

// --- State ---

export interface ThoughtState {
  conversationId: string;
  url: string;
  question: string;
  startedAt: string;
}

export function readState(): ThoughtState | null {
  if (!existsSync(STATE_FILE)) return null;
  try { return JSON.parse(readFileSync(STATE_FILE, 'utf-8')); }
  catch { return null; }
}

export function writeState(state: ThoughtState): void {
  mkdirSync(PERSPECTIVE_DIR, { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf-8');
}

export function deleteState(): void {
  if (existsSync(STATE_FILE)) unlinkSync(STATE_FILE);
}

export function hasActiveThought(): boolean {
  return existsSync(STATE_FILE);
}

// --- Catalogue ---

export enum ConversationState {
  active = 'active',
  concluded = 'concluded',
  abandoned = 'abandoned',
}

export interface CatalogueEntry {
  topic: string;
  conversationId: string;
  url: string;
  state: ConversationState;
  started: string;
  lastExchange: string;
  summary: string;
}

interface Catalogue { conversations: CatalogueEntry[]; }

export function readCatalogue(): Catalogue {
  if (!existsSync(CATALOGUE_FILE)) return { conversations: [] };
  try { return JSON.parse(readFileSync(CATALOGUE_FILE, 'utf-8')); }
  catch { return { conversations: [] }; }
}

export function updateCatalogue(entry: CatalogueEntry): void {
  const cat = readCatalogue();
  const idx = cat.conversations.findIndex(c => c.conversationId === entry.conversationId);
  if (idx >= 0) cat.conversations[idx] = entry;
  else cat.conversations.push(entry);
  mkdirSync(PERSPECTIVE_DIR, { recursive: true });
  writeFileSync(CATALOGUE_FILE, JSON.stringify(cat, null, 2), 'utf-8');
}

// --- Thinking book ---

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50);
}

function nextChapterNumber(): number {
  if (!existsSync(THINKING_BOOK)) return 1;
  return readdirSync(THINKING_BOOK).filter(f => /^\d+-/.test(f)).length + 1;
}

export function scaffoldChapter(state: ThoughtState): string {
  const num = String(nextChapterNumber()).padStart(2, '0');
  const filename = `${num}-${slugify(state.question.slice(0, 60))}.md`;
  const filepath = resolve(THINKING_BOOK, filename);

  const content = `# ${state.question.slice(0, 80)}

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** ${state.conversationId}
- **previous:** (none — new conversation)
- **date:** ${new Date().toISOString().split('T')[0]}
- **verdict:** (pending)

---

## What I asked and why

${state.question}

## What I expect

(Claude writes his thinking here before checking)

## What I already know

(Claude writes relevant library connections here)

## Evidence

(awaiting Desktop response)

## Interpretation

(to be written after reading)

## Conclusion

(to be written after interpretation)
`;

  writeFileSync(filepath, content, 'utf-8');

  // Add TOC entry to cover
  const coverPath = resolve(THINKING_BOOK, '.cover.md');
  if (existsSync(coverPath)) {
    let cover = readFileSync(coverPath, 'utf-8');
    const entry = `\n### (New — pending response)
- **conversation-id:** \`${state.conversationId}\`
- **state:** active — response pending
${num.replace(/^0/, '')}. [${state.question.slice(0, 60)}](${filename}) — (summary to be written)\n`;
    cover = cover.trimEnd() + '\n' + entry;
    writeFileSync(coverPath, cover, 'utf-8');
  }

  return filepath;
}

export function findChapter(state: ThoughtState): string | null {
  if (!existsSync(THINKING_BOOK)) return null;
  for (const f of readdirSync(THINKING_BOOK).filter(f => f.endsWith('.md') && f !== '.cover.md')) {
    if (readFileSync(resolve(THINKING_BOOK, f), 'utf-8').includes(state.conversationId)) {
      return resolve(THINKING_BOOK, f);
    }
  }
  return null;
}

export function pasteResponse(chapterPath: string, response: string): void {
  let content = readFileSync(chapterPath, 'utf-8');
  content = content.replace(
    '(awaiting Desktop response)',
    response.slice(0, 3000) + (response.length > 3000 ? '\n\n(truncated)' : '')
  );
  content = content.replace('- **verdict:** (pending)', '- **verdict:** sufficient');
  writeFileSync(chapterPath, content, 'utf-8');
}
