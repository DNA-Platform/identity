// think.ts — state and catalogue for the Thoughtfulness lifecycle.
// The app (Claude class) handles ALL Desktop interaction.
// This file handles ONLY persistence: state file and catalogue.
//
// The /think skill calls app methods directly for Desktop interaction
// and uses these functions for bookkeeping between calls.

import { readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PERSPECTIVE_DIR = resolve(
  __dirname, '..', '..', 'library',
  '..teamsmanship', '..team', 'claude', '.perspective',
);
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

export interface CatalogueEntry {
  topic: string;
  conversationId: string;
  url: string;
  state: 'active' | 'concluded';
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
