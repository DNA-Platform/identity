// Message parsing and conversation model.
// See: library/..team/claude/.perspective/05-conversation-tree-cartography

import { Content, Prompt, Response, type Turn, type Artifact, type Attachment, type Thinking } from './turn.ts';

export type MessageRole = 'user' | 'assistant';

export interface ChatMessage {
  role: MessageRole;
  content: string;
  thinking?: string;
}

// --- Structured message parts (intermediate parse output) ---

export type MessagePart =
  | { kind: 'text'; content: string }
  | { kind: 'artifact'; identifier: string; type: string; title: string }
  | { kind: 'thinking'; summary: string }
  | { kind: 'attachment'; label: string };

export interface ConversationMessage {
  role: MessageRole;
  parts: MessagePart[];
  date?: string;
}

// --- Parsing ---

const ARTIFACT_RE = /<ANTARTIFACTLINK\s+identifier="([^"]+)"\s+type="([^"]+)"\s+title="([^"]+)"[^/]*\/>/;

// --- Fast parser: works on readText() output (flat text, ~2s) ---

export function parseStructuredText(text: string): ConversationMessage[] {
  const lines = text.split('\n').map(l => l.replace(/ /g, ' ').trim());
  const messages: ConversationMessage[] = [];
  let currentRole: MessageRole | null = null;
  let currentDate: string | undefined;
  let currentTextLines: string[] = [];
  let currentParts: MessagePart[] = [];

  const flushText = () => {
    const joined = currentTextLines.join('\n').trim();
    if (joined) {
      currentParts.push({ kind: 'text', content: joined });
    }
    currentTextLines = [];
  };

  const finishMessage = () => {
    flushText();
    if (currentRole && currentParts.length > 0) {
      messages.push({ role: currentRole, parts: currentParts, date: currentDate });
    }
    currentParts = [];
    currentDate = undefined;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('You said:')) {
      finishMessage();
      currentRole = 'user';
      const rest = line.slice('You said:'.length).trim();
      if (rest) currentTextLines = [rest];
      continue;
    }

    if (line.startsWith('Claude responded:')) {
      finishMessage();
      currentRole = 'assistant';
      const rest = line.slice('Claude responded:'.length).trim();
      const artifactMatch = rest.match(ARTIFACT_RE);
      if (artifactMatch) {
        currentParts.push({
          kind: 'artifact',
          identifier: artifactMatch[1],
          type: artifactMatch[2],
          title: artifactMatch[3],
        });
      } else if (rest) {
        currentTextLines = [rest];
      }
      continue;
    }

    if (!currentRole) {
      if (isDateElement(line)) currentDate = line;
      continue;
    }

    if (isComposerEnd(line)) { finishMessage(); currentRole = null; break; }
    if (isModelEnd(line)) { finishMessage(); currentRole = null; break; }

    if (/^Claude is thinking/.test(line)) {
      flushText();
      currentParts.push({ kind: 'thinking', summary: line });
      continue;
    }

    const pastedMatch = line.match(/^Pasted Text, pasted, (\d+ lines?)$/);
    if (pastedMatch) {
      flushText();
      currentParts.push({ kind: 'attachment', label: `Pasted Text (${pastedMatch[1]})` });
      continue;
    }

    if (isFilteredTextLine(line)) continue;

    const artifactMatch = line.match(ARTIFACT_RE);
    if (artifactMatch) {
      flushText();
      currentParts.push({
        kind: 'artifact',
        identifier: artifactMatch[1],
        type: artifactMatch[2],
        title: artifactMatch[3],
      });
      continue;
    }

    currentTextLines.push(line);
  }

  finishMessage();
  return dedup(messages);
}

export function parseResponseFromText(text: string): ConversationMessage | null {
  const all = parseStructuredText(text);
  for (let i = all.length - 1; i >= 0; i--) {
    if (all[i].role === 'assistant') return all[i];
  }
  return null;
}

// --- Turn-based parser (pairs user/assistant messages) ---

const notConnected = async () => { throw new Error('Not connected to automation'); return ''; };

export function parseTurns(text: string): Turn[] {
  const messages = parseStructuredText(text);
  const turns: Turn[] = [];
  let i = 0;

  while (i < messages.length) {
    const msg = messages[i];

    if (msg.role === 'user') {
      const prompt = toPrompt(msg);
      let response: Response | null = null;

      if (i + 1 < messages.length && messages[i + 1].role === 'assistant') {
        response = toResponse(messages[i + 1]);
        i++;
      }

      turns.push({ prompt, response });
    } else {
      turns.push({
        prompt: new Prompt({ content: new Content([]), attachments: [], date: msg.date }),
        response: toResponse(msg),
      });
    }

    i++;
  }

  return turns;
}

function toPrompt(msg: ConversationMessage): Prompt {
  const textParts = msg.parts.filter(p => p.kind === 'text');
  const text = textParts.map(p => (p as { content: string }).content).join('\n\n');
  const content = new Content(text ? [{ kind: 'text', text }] : []);

  const attachments: Attachment[] = msg.parts
    .filter(p => p.kind === 'attachment')
    .map(p => ({
      label: (p as { label: string }).label,
      content: null,
      load: notConnected,
    }));

  return new Prompt({ content, attachments, date: msg.date });
}

function toResponse(msg: ConversationMessage): Response {
  const textParts = msg.parts.filter(p => p.kind === 'text');
  const text = textParts.map(p => (p as { content: string }).content).join('\n\n');
  const content = new Content(text ? [{ kind: 'text', text }] : []);

  const artifacts: Artifact[] = msg.parts
    .filter(p => p.kind === 'artifact')
    .map(p => {
      const a = p as { identifier: string; type: string; title: string };
      return {
        identifier: a.identifier,
        type: a.type,
        title: a.title,
        content: null,
        load: notConnected,
      };
    });

  const thinkingPart = msg.parts.find(p => p.kind === 'thinking');
  const thinking: Thinking | null = thinkingPart ? {
    summary: (thinkingPart as { summary: string }).summary,
    content: null,
    load: notConnected,
  } : null;

  return new Response({ content, thinking, artifacts, date: msg.date });
}

function isModelEnd(line: string): boolean {
  return /(Opus|Sonnet|Haiku)\s+[\d.]+/.test(line);
}

function isFilteredTextLine(line: string): boolean {
  if (line === '￼') return true;
  if (line === '') return false;
  if (/^More options/.test(line)) return true;
  if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}(,\s*\d{4})?$/i.test(line)) return true;
  if (/^(Yesterday|Today)$/i.test(line)) return true;
  if (/^\d{1,2}:\d{2}\s*(AM|PM)$/i.test(line)) return true;
  if (/^PASTED$/i.test(line)) return true;
  if (/^Claude (finished the response|is responding)/.test(line)) return true;
  if (line.startsWith('Claude paused')) return true;
  if (line.startsWith('The user prompt is empty') || line.startsWith("The user's prompt is empty")) return true;
  if (/^(Retry|Edit|Copy|Give positive feedback|Give negative feedback|Show more|Previous version|Next version)$/.test(line)) return true;
  if (/^Searched the web$/.test(line)) return true;
  return false;
}

function dedup(messages: ConversationMessage[]): ConversationMessage[] {
  return messages.map(m => ({
    ...m,
    parts: m.parts.map(p => {
      if (p.kind !== 'text') return p;
      const lines = p.content.split('\n');
      const dedupedLines = lines.filter((line, i) => {
        if (i >= lines.length - 1) return true;
        const next = lines[i + 1];
        if (line === next) return false;
        if (next.startsWith(line) && line.length > 10) return false;
        return true;
      });
      return { kind: 'text' as const, content: dedupedLines.join('\n') };
    }),
  }));
}

// --- Slow parser: works on allNames() output (typed elements, ~14s) ---

export function parseConversationElements(elements: string[]): ConversationMessage[] {
  const messages: ConversationMessage[] = [];
  let currentRole: MessageRole | null = null;
  let currentDate: string | undefined;
  let currentTextLines: string[] = [];
  let currentParts: MessagePart[] = [];
  let skipNextTextDuplicate = false;

  const flushText = () => {
    const joined = currentTextLines.join('\n').trim();
    if (joined) {
      currentParts.push({ kind: 'text', content: joined });
    }
    currentTextLines = [];
  };

  const finishMessage = () => {
    flushText();
    if (currentRole && currentParts.length > 0) {
      messages.push({ role: currentRole, parts: currentParts, date: currentDate });
    }
    currentParts = [];
    currentDate = undefined;
    skipNextTextDuplicate = false;
  };

  for (const element of elements) {
    const pipeIdx = element.indexOf(' | ');
    if (pipeIdx === -1) continue;

    const controlType = element.slice(0, pipeIdx).trim();
    const name = element.slice(pipeIdx + 3);

    // Message boundary: user message start
    if (controlType === 'ControlType.Text' && name.startsWith('You said:')) {
      finishMessage();
      currentRole = 'user';
      skipNextTextDuplicate = true;
      continue;
    }

    // Message boundary: assistant message start
    if (controlType === 'ControlType.Text' && name.startsWith('Claude responded:')) {
      finishMessage();
      currentRole = 'assistant';

      const afterPrefix = name.slice('Claude responded:'.length).trim();
      const artifactMatch = afterPrefix.match(ARTIFACT_RE);
      if (artifactMatch) {
        currentParts.push({
          kind: 'artifact',
          identifier: artifactMatch[1],
          type: artifactMatch[2],
          title: artifactMatch[3],
        });
      }
      skipNextTextDuplicate = true;
      continue;
    }

    // Message boundary: end of message
    if (controlType === 'ControlType.Group' && name === 'Message actions') {
      finishMessage();
      currentRole = null;
      continue;
    }

    if (!currentRole) {
      // Outside a message — check for date stamps
      if (controlType === 'ControlType.Text' && isDateElement(name)) {
        currentDate = name;
      }
      continue;
    }

    // Skip the duplicate first line after a boundary marker
    if (skipNextTextDuplicate && controlType === 'ControlType.Text') {
      skipNextTextDuplicate = false;
      // The first text element after "You said:" or "Claude responded:" repeats
      // the full first paragraph. This IS the content — add it.
      if (name && name !== '￼') {
        currentTextLines.push(name);
      }
      continue;
    }
    skipNextTextDuplicate = false;

    // Text content
    if (controlType === 'ControlType.Text') {
      if (isComposerEnd(name)) {
        finishMessage();
        currentRole = null;
        break;
      }
      if (isFilteredLine(name)) continue;
      currentTextLines.push(name);
      continue;
    }

    // List items become text lines
    if (controlType === 'ControlType.ListItem') {
      currentTextLines.push(`- ${name}`);
      continue;
    }
  }

  finishMessage();
  return messages;
}

export function parseLastResponse(elements: string[]): ConversationMessage | null {
  // Find the last "Claude responded:" element and parse only that message.
  let lastResponseIdx = -1;
  for (let i = elements.length - 1; i >= 0; i--) {
    const el = elements[i];
    if (el.startsWith('ControlType.Text | Claude responded:')) {
      lastResponseIdx = i;
      break;
    }
  }
  if (lastResponseIdx === -1) return null;

  // Find the "Message actions" that ends this response
  let endIdx = elements.length;
  for (let i = lastResponseIdx + 1; i < elements.length; i++) {
    if (elements[i] === 'ControlType.Group | Message actions') {
      endIdx = i + 1;
      break;
    }
  }

  const slice = elements.slice(lastResponseIdx, endIdx);
  const parsed = parseConversationElements(slice);
  return parsed.length > 0 ? parsed[0] : null;
}

function isDateElement(text: string): boolean {
  return /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}(,\s*\d{4})?$/i.test(text)
    || /^(Yesterday|Today)$/i.test(text);
}

function isComposerEnd(text: string): boolean {
  return text === 'Write a message…'
    || text === 'How can I help you today?'
    || text === 'Reply to Claude...'
    || text === 'Message Claude';
}

function isFilteredLine(text: string): boolean {
  if (text === '￼') return true;
  if (/^(Retry|Edit|Copy|Give positive feedback|Give negative feedback|Show more|Previous version|Next version)$/.test(text)) return true;
  if (/^(Pasted Text, pasted, \d+ lines?)$/.test(text)) return true;
  return false;
}
