///: State — the persistence between a thought's WRITE half (dispatch) and its
///: READ half. Resource of [Persistence](03-persistence.md). One JSON file in
///: Claude's [.perspective](../..teamsmanship/..team/claude/.perspective/.cover.md)
///: records which thought is in flight so a later session (after the window was
///: minimized, possibly after compaction) can resume it.
///:
///: Resume is BY TOPIC, not by stored id: the read half re-finds the conversation
///: with [openExisting](02-the-thought-lifecycle--dispatch.ts) (navigate to the
///: Claude project, match the topic). So the state is small — topic, message, and
///: when it started — plus the chapter the thought is being written into.
///:
///: [The Thought Lifecycle](02-the-thought-lifecycle.md) — where dispatch/read sit.
///: [Persistence](03-persistence.md) — why a thought must survive compaction.

import { readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// .claude/library/thoughtfulness -> .claude/library/..teamsmanship/..team/claude/.perspective
const PERSPECTIVE_DIR = resolve(__dirname, '..', '..teamsmanship', '..team', 'claude', '.perspective');
const STATE_FILE = resolve(PERSPECTIVE_DIR, 'thought-state.json');

export interface ThoughtState {
  topic: string;
  message: string;
  isNew: boolean;       // new topic (started in the project composer) vs continued conversation
  startedAt: string;
  chapterPath?: string;
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

export function updateState(partial: Partial<ThoughtState>): void {
  const current = readState();
  if (!current) throw new Error('No active thought to update');
  writeState({ ...current, ...partial });
}

export function hasActiveThought(): boolean {
  return existsSync(STATE_FILE);
}
