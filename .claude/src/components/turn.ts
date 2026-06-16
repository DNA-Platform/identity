// Turn — the unit of a conversation.
// A turn pairs a Prompt (what the user said) with a Response (what Claude said).
// These are fundamentally different: prompts carry attachments, responses carry thinking and artifacts.
// Both are interactive — you can act on them, not just read them.

// --- Content blocks (inline, ordered, always loaded) ---

export type ContentBlock =
  | { kind: 'text'; text: string }
  | { kind: 'code'; language: string; code: string };

export class Content implements Iterable<ContentBlock> {
  constructor(readonly blocks: ContentBlock[]) {}

  get text(): string {
    return this.blocks.map(b =>
      b.kind === 'text' ? b.text : b.code
    ).join('\n\n');
  }

  get length(): number {
    return this.blocks.length;
  }

  toMarkdown(): string {
    return this.blocks.map(b => {
      if (b.kind === 'code') return `\`\`\`${b.language}\n${b.code}\n\`\`\``;
      return b.text;
    }).join('\n\n');
  }

  [Symbol.iterator](): Iterator<ContentBlock> {
    return this.blocks[Symbol.iterator]();
  }
}

// --- Separate objects (lazy, loaded on demand) ---

export interface Attachment {
  label: string;
  content: string | null;
  load(): Promise<string>;
}

export interface Artifact {
  identifier: string;
  type: string;
  title: string;
  content: string | null;
  load(): Promise<string>;
}

export interface Thinking {
  summary: string;
  content: string | null;
  load(): Promise<string>;
}

// --- The two sides of a turn ---

export class Prompt {
  content: Content;
  attachments: Attachment[];
  date?: string;

  constructor(init: { content: Content; attachments: Attachment[]; date?: string }) {
    this.content = init.content;
    this.attachments = init.attachments;
    this.date = init.date;
  }

  async edit(_newText: string): Promise<void> { throw new Error('Not connected to automation'); }
}

export class Response {
  content: Content;
  thinking: Thinking | null;
  artifacts: Artifact[];
  date?: string;

  constructor(init: { content: Content; thinking: Thinking | null; artifacts: Artifact[]; date?: string }) {
    this.content = init.content;
    this.thinking = init.thinking;
    this.artifacts = init.artifacts;
    this.date = init.date;
  }

  async retry(): Promise<void> { throw new Error('Not connected to automation'); }
  async like(): Promise<void> { throw new Error('Not connected to automation'); }
  async dislike(): Promise<void> { throw new Error('Not connected to automation'); }
  async copy(): Promise<string> { return this.content.text; }
}

// --- The turn itself ---

export interface Turn {
  prompt: Prompt;
  response: Response | null;
}
