///: Text — UIA text cleaning utilities.
///: UIA TextPattern returns the whole window as flat text: sidebar chrome,
///: image placeholders, timestamps, status lines. These utilities strip
///: noise so controllers can work with clean conversation content.
///:
///: [Windows UIA](../library/reference-desk/04-01-platform--uia.md) — the TextPattern surface.

// Text utilities — shared cleaning and parsing for UIA text streams.
// The UIA TextPattern returns the entire window as flat text, including
// sidebar, chrome, and image placeholders. These utilities strip that noise.

const IMAGE_PLACEHOLDER = '￼';

export function normalizeSpaces(text: string): string {
  return text.replace(/ /g, ' ');
}

export function cleanLines(text: string): string[] {
  return text.split('\n')
    .map(l => normalizeSpaces(l.trim()))
    .filter(l => l.length > 0 && l !== IMAGE_PLACEHOLDER);
}

export function isMoreOptions(line: string): boolean {
  return line.startsWith('More options for ');
}

export function isSidebarChrome(line: string): boolean {
  const chrome = [
    'Skip to content', 'Back', 'Forward', 'Resize sidebar',
    'Click to collapse', 'Drag to resize', 'Chat', 'Cowork', 'Code',
    'New chat', 'Projects', 'Artifacts', 'Customize', 'Recents', 'View all',
  ];
  return chrome.some(c => line === c || line.startsWith(c + 'Ctrl'));
}

export function isTimestamp(line: string): boolean {
  return /^\d+\s+(second|minute|hour|day|week|month|year)s?\s+ago/.test(line)
    || line.endsWith('Shared');
}

export function isGreeting(line: string): boolean {
  return /^(Good (morning|afternoon|evening)|Hi|Hello|Hey),?\s/.test(line)
    || line.includes('returns!');
}

export function isActionPill(line: string): boolean {
  const pills = ['Code', 'Write', 'Strategize', 'Learn', 'Life stuff'];
  return pills.includes(line);
}

export function isModelLine(line: string): boolean {
  return /(Opus|Sonnet|Haiku)\s+[\d.]+/.test(line);
}

export function isComposerPlaceholder(line: string): boolean {
  return line === 'How can I help you today?'
    || line === 'Reply to Claude...'
    || line === 'Message Claude'
    || line === 'Write a message…';
}

export function isStatusLine(line: string): boolean {
  return line === 'Claude finished the response'
    || line === 'Claude is thinking'
    || line === 'Claude is responding'
    || line.startsWith('Claude paused');
}

export function isMessageTimestamp(line: string): boolean {
  return /^\d{1,2}:\d{2}\s*(AM|PM)$/i.test(line)
    || /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}$/i.test(line)
    || /^(Yesterday|Today)$/i.test(line)
    || /^PASTED$/i.test(line);
}

export function isThinkingBoilerplate(line: string): boolean {
  return line.startsWith('The user prompt is empty')
    || line.startsWith('The user\'s prompt is empty')
    || /^Pasted Text, pasted, \d+ lines?$/.test(line);
}

export function isPastedTextButton(line: string): boolean {
  return /^Pasted Text, pasted, \d+ lines?$/.test(line);
}

export function deduplicateConsecutive(lines: string[]): string[] {
  return lines.filter((line, i) => i === 0 || line !== lines[i - 1]);
}

// --- Outgoing text formatting ---

export function formatOutgoing(text: string): string {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
