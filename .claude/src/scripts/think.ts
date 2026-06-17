// think.ts — state file for the think skill.
// The app (Claude class) handles Desktop interaction.
// Teammates handle library authorship (chapters, covers, catalogues).
// This file handles ONLY the machine-readable state between write and read.

import { readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PERSPECTIVE_DIR = resolve(__dirname, '..', '..', 'library',
  '..teamsmanship', '..team', 'claude', '.perspective');
const STATE_FILE = resolve(PERSPECTIVE_DIR, 'thought-state.json');

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
