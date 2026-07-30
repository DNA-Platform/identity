///: Render — the screen, written out the way a text adventure writes a room.
///:
///: Doug's framing: *kind of like those old text-based video games where you go left
///: or right and you end up in a new place… it should give you big chunks of info as
///: you move telling you everything you can do.*
///:
///: So every move prints the room. Where you are, what is here, which doors lead
///: where, and what you can do — in full, every time. Verbosity is the feature: the
///: operator should never have to remember what is available, and never have to run
///: a second command to find out.
///:
///: Nothing here decides anything. It takes a [ScreenModel](describe.ts) and returns
///: a string. That is what makes it testable without Claude Desktop.
///:
///: [The Claude Nexus](../library/projected-identity/71-sprint-99--the-claude-nexus.md) — the CLI renders and dispatches; the app decides.

import type { Command, ScreenModel } from './describe.ts';

/** `ConversationPage` → `Conversation`; `HomePage` → `Home`. The screen as a place. */
export function placeName(screen: string): string {
  return screen.replace(/Page$/, '') || screen;
}

function signature(c: Command): string {
  if (c.params.length === 0) return c.path;
  const params = c.params.map(p => (p.optional ? `[${p.name}]` : `<${p.name}>`)).join(' ');
  return `${c.path} ${params}`;
}

function bullet(lines: string[]): string {
  return lines.map(l => `  ${l}`).join('\n');
}

/** Pad a first column so a list of commands reads as a table without a table. */
function columns(rows: [string, string][]): string {
  if (rows.length === 0) return '';
  const width = Math.min(38, rows.reduce((w, [left]) => Math.max(w, left.length), 0));
  return bullet(rows.map(([left, right]) =>
    right ? `${left.padEnd(width)}  ${right}` : left));
}

/** One line of prose about the doc comment, trimmed to something readable in a list. */
function gist(doc: string, limit = 96): string {
  if (!doc) return '';
  const firstSentence = doc.split(/(?<=\.)\s/)[0] ?? doc;
  const text = firstSentence.trim();
  return text.length > limit ? `${text.slice(0, limit - 1).trimEnd()}…` : text;
}

/**
 * The room. Printed after every move, in full.
 *
 * `observations` are live readings the caller already took — the conversation's
 * title, how many messages, whether a response is streaming. They are passed in
 * rather than read here, because rendering must not touch the app.
 */
export function renderScreen(model: ScreenModel, observations: Record<string, string> = {}): string {
  const out: string[] = [];

  out.push(`── ${placeName(model.screen)} ──`);
  if (model.id) out.push(model.id);
  out.push('');

  const facts = Object.entries(observations).filter(([, v]) => v !== '' && v != null);
  if (facts.length > 0) {
    out.push('Here:');
    out.push(columns(facts.map(([k, v]) => [k, v])));
    out.push('');
  }

  if (model.components.length > 0) {
    out.push(`On this screen: ${model.components.join(', ')}`);
    out.push('');
  }

  if (model.exits.length > 0) {
    out.push('Exits — these take you somewhere new:');
    out.push(columns(model.exits.map(c => [signature(c), `→ ${placeName(c.leadsTo ?? '?')}`])));
    out.push('');
  }

  if (model.looks.length > 0) {
    out.push('Look — these read the screen and tell you what is there:');
    out.push(columns(model.looks.map(c => [signature(c), gist(c.doc) || (c.gives ?? '')])));
    out.push('');
  }

  if (model.actions.length > 0) {
    out.push('Do — these change something:');
    out.push(columns(model.actions.map(c => [signature(c), gist(c.doc)])));
    out.push('');
  }

  out.push('Always available:  tree [filter]   copy <command>   look   where   help');

  return out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd();
}

/** What the operator sees when a command is ambiguous. Never guess between two
 *  screens' methods — say which ones matched and let them choose. */
export function renderAmbiguity(name: string, matches: Command[]): string {
  return [
    `"${name}" matches more than one thing here. Say which:`,
    columns(matches.map(c => [c.path, gist(c.doc)])),
  ].join('\n');
}

/** What the operator sees when a command does not exist on this screen. The point is
 *  not the failure — it is that the screen you are on has a finite, listed surface,
 *  so "not here" is real information about where you are. */
export function renderUnknown(name: string, model: ScreenModel): string {
  const all = [...model.exits, ...model.looks, ...model.actions].map(c => c.path);
  return [
    `There is no "${name}" on the ${placeName(model.screen)} screen.`,
    '',
    `What is here: ${all.join(', ')}`,
    '',
    'If you expected it to be here, the screen model and the app disagree —',
    'run `tree` to see what the app actually shows.',
  ].join('\n');
}
