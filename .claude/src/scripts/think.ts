// think.ts — implements the Thoughtfulness lifecycle.
// See: .claude/library/thoughtfulness/04-the-code.md
// See: .claude/library/thoughtfulness/02-the-thought-lifecycle.md
//
// Exports functions for the /think skill to orchestrate.
// The script is the wire. Claude is the judgment.

import { Claude } from '../claude.ts';
import type { Session } from '../session.ts';
import { readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- Paths ---

const PERSPECTIVE_DIR = resolve(
  __dirname, '..', '..', 'library',
  '..teamsmanship', '..team', 'claude', '.perspective',
);

const STATE_FILE = resolve(PERSPECTIVE_DIR, 'thought-state.json');

// --- Types ---

export interface ThoughtExchange {
  prompt: string;
  response: string;
  timestamp: string;
}

export interface ThoughtState {
  conversationId: string;
  url: string;
  title: string;
  question: string;
  exchanges: ThoughtExchange[];
  evaluationHistory: Array<'sufficient' | 'partial' | 'unproductive'>;
  startedAt: string;
}

export type Verdict = 'sufficient' | 'partial' | 'unproductive';

export interface ThinkResult {
  response: string;
  state: ThoughtState;
  isResume: boolean;
}

// --- State file management ---

export function readState(): ThoughtState | null {
  if (!existsSync(STATE_FILE)) return null;
  try {
    const raw = readFileSync(STATE_FILE, 'utf-8');
    return JSON.parse(raw) as ThoughtState;
  } catch {
    return null;
  }
}

export function writeState(state: ThoughtState): void {
  mkdirSync(PERSPECTIVE_DIR, { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf-8');
}

export function deleteState(): void {
  if (existsSync(STATE_FILE)) {
    unlinkSync(STATE_FILE);
  }
}

export function hasActiveThought(): boolean {
  return existsSync(STATE_FILE);
}

// --- Session title ---

function makeTitle(question: string): string {
  const summary = question.length > 60
    ? question.slice(0, 57) + '...'
    : question;
  return `Think: ${summary}`;
}

function makeTopicName(question: string): string {
  // Extract a short topical name from the question.
  // Take the first sentence or first 80 chars, whichever is shorter.
  const firstSentence = question.split(/[.?!]\s/)[0];
  const name = firstSentence.length > 80
    ? firstSentence.slice(0, 77) + '...'
    : firstSentence;
  return name;
}

// --- The think function ---

export async function think(
  app: Claude,
  question: string,
): Promise<ThinkResult> {
  const existing = readState();
  const isResume = existing !== null && existing.question === question;

  let session: Session;
  let state: ThoughtState;

  if (isResume && existing) {
    // Resume: open the existing conversation, read turns to catch up
    state = existing;

    session = await app.startSession({
      name: state.title,
      timeout: 180_000,
    });

    // Navigate to the existing conversation by title
    try {
      await app.openChat(state.title);
      // Read turns to rebuild context
      const turns = await app.conversation.readTurns();
      session.turns = turns;
      session.url = state.url;
      session.id = state.conversationId;
    } catch (e) {
      // If we cannot find the conversation, start fresh
      console.log(`[think] Could not resume conversation "${state.title}", starting fresh`);
      return think(app, question);
    }

    // Send the follow-up (the question for resumed thoughts is typically
    // a refined follow-up, but the caller passes whatever is appropriate)
    const response = await session.send(question);
    const responseText = response.content.text;

    // Update state with the new exchange
    state.exchanges.push({
      prompt: question,
      response: responseText,
      timestamp: new Date().toISOString(),
    });
    state.conversationId = session.id;
    state.url = session.url;

    writeState(state);

    return { response: responseText, state, isResume: true };

  } else {
    // New thought: start a fresh session
    const title = makeTitle(question);

    state = {
      conversationId: '',
      url: '',
      title,
      question,
      exchanges: [],
      evaluationHistory: [],
      startedAt: new Date().toISOString(),
    };

    session = await app.startSession({
      name: title,
      timeout: 180_000,
    });

    const response = await session.send(question);
    const responseText = response.content.text;

    // Populate state from the session
    state.conversationId = session.id;
    state.url = session.url;
    state.exchanges.push({
      prompt: question,
      response: responseText,
      timestamp: new Date().toISOString(),
    });

    writeState(state);

    return { response: responseText, state, isResume: false };
  }
}

// --- Follow-up: send another question in the same thought ---

export async function followUp(
  app: Claude,
  followUpQuestion: string,
): Promise<ThinkResult> {
  const state = readState();
  if (!state) {
    throw new Error('No active thought to follow up on. Use think() to start one.');
  }

  // Open the existing conversation
  const session = await app.startSession({
    name: state.title,
    timeout: 180_000,
  });

  try {
    await app.openChat(state.title);
    const turns = await app.conversation.readTurns();
    session.turns = turns;
    session.url = state.url;
    session.id = state.conversationId;
  } catch (e) {
    app.window.minimize();
    throw new Error(`Could not open conversation "${state.title}" for follow-up: ${(e as Error).message}`);
  }

  const response = await session.send(followUpQuestion);
  const responseText = response.content.text;

  // Update state
  state.exchanges.push({
    prompt: followUpQuestion,
    response: responseText,
    timestamp: new Date().toISOString(),
  });
  state.conversationId = session.id;
  state.url = session.url;

  writeState(state);

  return { response: responseText, state, isResume: true };
}

// --- Record a verdict ---

export function recordVerdict(verdict: Verdict): ThoughtState | null {
  const state = readState();
  if (!state) return null;
  state.evaluationHistory.push(verdict);
  writeState(state);
  return state;
}

// --- Check the give-up rule ---

export function shouldGiveUp(state: ThoughtState): boolean {
  const history = state.evaluationHistory;
  if (history.length < 3) return false;
  const lastThree = history.slice(-3);
  return lastThree.every(v => v === 'unproductive');
}

// --- Perspective entry writing ---

export interface PerspectiveEntry {
  questionSummary: string;
  date: string;
  conversationTitle: string;
  verdict: Verdict;
  question: string;
  responseSummary: string;
  evaluation: string;
  followUp: string;
}

function makeEntryFilename(date: string, questionSummary: string): string {
  // Generate a filename like: 06-2026-06-16-reactive-backpressure.md
  // Count existing entries to get the next number
  const existing = existsSync(PERSPECTIVE_DIR)
    ? readdirSync(PERSPECTIVE_DIR)
        .filter(f => /^\d{2}-\d{4}-\d{2}-\d{2}/.test(f))
        .length
    : 0;
  const num = String(existing + 1).padStart(2, '0');

  // Slugify the summary
  const slug = questionSummary
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50);

  return `${num}-${date}-${slug}.md`;
}

export function writePerspectiveEntry(entry: PerspectiveEntry): string {
  mkdirSync(PERSPECTIVE_DIR, { recursive: true });

  const filename = makeEntryFilename(entry.date, entry.questionSummary);
  const filepath = resolve(PERSPECTIVE_DIR, filename);

  const content = `# Thought: ${entry.questionSummary}
- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **date:** ${entry.date}
- **conversation:** ${entry.conversationTitle}
- **verdict:** ${entry.verdict}
---
## Question
${entry.question}
## Response summary
${entry.responseSummary}
## Evaluation
${entry.evaluation}
## Follow-up
${entry.followUp}
`;

  writeFileSync(filepath, content, 'utf-8');
  return filepath;
}

// --- Conclude a thought ---

export function conclude(entry: PerspectiveEntry): string {
  const filepath = writePerspectiveEntry(entry);
  deleteState();
  return filepath;
}

// --- Cleanup: minimize on failure, preserve state ---

export function minimizeOnFailure(app: Claude): void {
  try {
    app.window.minimize();
  } catch {
    // Last resort — if minimize fails, there is nothing more to do
  }
}

// --- Non-blocking dispatch: send a question, minimize, return immediately ---
// Handles both fresh thoughts and resumptions.

export async function send(
  app: Claude,
  question: string,
): Promise<ThoughtState> {
  await app.launch();

  const existing = readState();

  if (existing && existing.exchanges.length > 0) {
    // RESUME: open the existing conversation, verify, then send follow-up
    return await sendResume(app, existing, question);
  } else {
    // FRESH: new conversation
    return await sendFresh(app, question);
  }
}

async function sendFresh(
  app: Claude,
  question: string,
): Promise<ThoughtState> {
  // launch() already brought the app to foreground — no extra maximize needed

  const title = makeTitle(question);
  const state: ThoughtState = {
    conversationId: '',
    url: '',
    title,
    question,
    exchanges: [],
    evaluationHistory: [],
    startedAt: new Date().toISOString(),
  };

  try {
    // Dismiss any open dialogs that might block navigation
    await app.dismissDialogs();

    // Ensure we're on a fresh chat — go home first if in an existing conversation
    const screen = await app.navigator.detectScreen();
    if (screen === 'conversation') {
      await app.goHome();
    }

    // Clear any text Doug may have been typing
    const existingDraft = await app.conversation.composer.readDraft();
    if (existingDraft) {
      await app.conversation.composer.clear();
    }

    // Type (not paste) — paste creates attachments for large text
    await app.conversation.composer.type(question);
    await app.conversation.composer.send();

    try {
      const url = await app.auto.uia.readUrl() ?? '';
      state.url = url;
      state.conversationId = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';
    } catch {
      // URL captured on collect
    }

    writeState(state);
  } catch (e) {
    writeState(state);
    throw e;
  } finally {
    app.window.minimize();
  }

  return state;
}

async function sendResume(
  app: Claude,
  state: ThoughtState,
  followUpQuestion: string,
): Promise<ThoughtState> {

  try {
    // Navigate to the existing conversation
    await app.openChat(state.title);

    // Verify we're in the right place
    const url = await app.auto.uia.readUrl() ?? '';
    if (state.conversationId && !url.includes(state.conversationId)) {
      throw new Error(`Wrong conversation. Expected ${state.conversationId}, got ${url}`);
    }

    // Read the last response to catch up
    const turns = await app.conversation.readTurns();
    const lastTurn = turns[turns.length - 1];
    if (lastTurn?.response) {
      console.log(`[send-resume] Last response: ${lastTurn.response.content.text.slice(0, 100)}...`);
    }

    // Update state URL if it changed
    state.url = url;
    state.conversationId = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? state.conversationId;

    // Send the follow-up
    await app.conversation.composer.type(followUpQuestion);
    await app.conversation.composer.send();

    writeState(state);
  } catch (e) {
    writeState(state);
    throw e;
  } finally {
    app.window.minimize();
  }

  return state;
}

// --- Non-blocking collect: check if response is ready, read if so ---

export interface ReadResult {
  ready: boolean;
  response?: string;
  state: ThoughtState;
}

export async function read(app: Claude): Promise<ReadResult> {
  const state = readState();
  if (!state) throw new Error('No active thought to collect.');

  await app.launch();

  try {
    // Check if still streaming
    const streaming = await app.conversation.checkStreaming();

    if (streaming) {
      app.window.minimize();
      return { ready: false, state };
    }

    // Response is ready — read it
    const turns = await app.conversation.readTurns();
    const url = await app.auto.uia.readUrl() ?? '';
    state.url = url;
    state.conversationId = url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';

    const lastTurn = turns[turns.length - 1];
    const responseText = lastTurn?.response?.content.text ?? '';

    state.exchanges.push({
      prompt: state.exchanges.length === 0 ? state.question : '(follow-up)',
      response: responseText,
      timestamp: new Date().toISOString(),
    });

    // Rename to a topical name if this is the first exchange
    // (the auto-generated title from Desktop is usually poor)
    if (state.exchanges.length === 1) {
      const topicName = makeTopicName(state.question);
      try {
        await app.renameConversation(topicName);
        state.title = topicName;
      } catch {
        // Rename is non-critical — keep the auto-generated title
      }
    }

    writeState(state);
    app.window.minimize();

    return { ready: true, response: responseText, state };
  } catch (e) {
    minimizeOnFailure(app);
    throw e;
  }
}

// --- Convenience: full single-turn thought (blocking) ---

export async function thinkOnce(
  app: Claude,
  question: string,
): Promise<ThinkResult> {
  await app.launch();
  try {
    return await think(app, question);
  } catch (e) {
    const state = readState();
    if (!state) {
      writeState({
        conversationId: '',
        url: '',
        title: makeTitle(question),
        question,
        exchanges: [],
        evaluationHistory: [],
        startedAt: new Date().toISOString(),
      });
    }
    minimizeOnFailure(app);
    throw e;
  }
}
