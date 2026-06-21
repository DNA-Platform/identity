///: Part — one piece of a structured Response, in the View layer.
///: A response is an ORDERED list of parts. Each part is a subclass with a
///: string `type` discriminant and its own properties, and renders itself
///: (toMarkdown now; a $Chemistry visual later). New output kinds = new subclass.
///:
///: The part BOUNDARIES and TYPES come from the ordered named UIA elements
///: (allNames, document order); the clean CONTENT comes from the Document text.
///: We assemble — we do not flatten-and-regex chrome. Grounded in the trees:
///: [code](../trees/conversation-code.txt) — `Group | "<lang> code"`.
///: [artifact](../trees/conversation-artifact.txt) — panel + research summaries.
///: [complete](../trees/conversation-complete.txt) — prose + thinking summary.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#the-response-as-a-polymorphic-collection-of-parts-doug-2026-06-21) — the design.
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md#response-and-message-objects) — Response is a View object.

export abstract class Part {
  abstract readonly type: string;
  abstract toMarkdown(): string;
}

export class TextPart extends Part {
  readonly type = 'text';
  constructor(readonly text: string) { super(); }
  toMarkdown(): string { return this.text; }
}

export class CodePart extends Part {
  readonly type = 'code';
  constructor(readonly language: string, readonly code: string) { super(); }
  toMarkdown(): string { return '```' + this.language + '\n' + this.code + '\n```'; }
}

export class ThinkingPart extends Part {
  readonly type = 'thinking';
  // `summary` is the Button name; full thinking text is loaded on expand (later).
  constructor(readonly summary: string) { super(); }
  toMarkdown(): string { return `> 🧠 _${this.summary}_`; }
}

export class ArtifactPart extends Part {
  readonly type = 'artifact';
  constructor(
    readonly title: string,
    readonly format: string,   // e.g. "MD"
    readonly body: string,
  ) { super(); }
  toMarkdown(): string {
    return `**[Artifact: ${this.title} · ${this.format}]**\n\n${this.body}`;
  }
}

// --- Assembly ---------------------------------------------------------------

interface El { control: string; name: string; }

function parseEl(line: string): El {
  const i = line.indexOf(' | ');
  if (i === -1) return { control: line.trim(), name: '' };
  return { control: line.slice(0, i).trim(), name: line.slice(i + 3) };
}

const RESPONDED = 'Claude responded:';
const FINISHED = 'Claude finished the response';
const STOP = 'Stop response';

// Buttons that are chrome around a response, not a thinking/research summary.
const CHROME_BUTTONS = new Set([
  'Copy', 'Retry', 'Edit', 'Read aloud', 'Give positive feedback',
  'Give negative feedback', 'Copy to clipboard', 'Share chat',
]);

/**
 * Assemble the ordered Parts of the LATEST assistant response from the named
 * UIA elements (document order). Content is taken from the element names; the
 * caller can substitute clean Document-text spans where the names are lossy.
 */
export function assembleParts(elements: string[]): Part[] {
  const els = elements.map(parseEl);

  // The assistant block runs from the last "Claude responded:" to the next
  // "Message actions" group after it.
  const start = els.map(e => e.name).reduce(
    (acc, name, i) => (name.startsWith(RESPONDED) ? i : acc), -1,
  );
  if (start === -1) return [];
  let end = els.length;
  for (let i = start + 1; i < els.length; i++) {
    if (els[i].control === 'ControlType.Group' && els[i].name === 'Message actions') {
      end = i; break;
    }
  }

  const parts: Part[] = [];
  let prose: string[] = [];
  const flushProse = () => {
    const text = prose.join('').trim();
    if (text) parts.push(new TextPart(text));
    prose = [];
  };

  for (let i = start; i < end; i++) {
    const { control, name } = els[i];

    // Code block: Group | "<lang> code"
    if (control === 'ControlType.Group' && / code$/.test(name)) {
      flushProse();
      const language = name.replace(/ code$/, '');
      // Code content: the Text elements after the language label, until the
      // group's Text run ends. (Refined from Document text by the caller.)
      const code: string[] = [];
      for (let j = i + 1; j < end; j++) {
        const e = els[j];
        if (e.control === 'ControlType.Button') continue;       // Copy to clipboard
        if (e.control === 'ControlType.Text' && e.name === language) continue; // label
        if (e.control === 'ControlType.Text') { code.push(e.name); i = j; continue; }
        break;
      }
      parts.push(new CodePart(language, code.join('\n')));
      continue;
    }

    // Thinking / research summary: Button with a long, non-chrome name.
    if (control === 'ControlType.Button' && !CHROME_BUTTONS.has(name) && name.length > 12
        && !name.startsWith('More options')) {
      flushProse();
      parts.push(new ThinkingPart(name));
      continue;
    }

    // Prose text — but skip the "Claude responded:" preview and the mirrored
    // thinking-summary Text (it duplicates the Button we just emitted).
    if (control === 'ControlType.Text') {
      let text = name;
      if (text.startsWith(RESPONDED)) text = text.slice(RESPONDED.length).trim();
      const last = parts[parts.length - 1];
      if (last instanceof ThinkingPart && text === last.summary) continue;
      if (text) prose.push(text + '\n');
    }
  }
  flushProse();
  return parts;
}

/** Done when the explicit marker is present or the Stop button is gone. */
export function responseComplete(elements: string[]): boolean {
  const names = elements.map(e => parseEl(e).name);
  return names.includes(FINISHED) || !names.includes(STOP);
}
