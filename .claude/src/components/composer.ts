///: Composer — the text input for messages.
///: paste() for large text (via clipboard), type() for inline edits.
///: compose() clears draft first, then pastes — the primary send path.
///:
///: [Sending Messages](../../library/reference-desk/03-01-operations--sending.md) — the compose workflow.

// Composer — the text input where you type and send messages.
// Reusable: appears on the home screen and in every conversation.
// See: library/..team/claude/.perspective/02-2026-05-10-home-screen-anatomy.md

import type { ComposerController } from '../controllers/composer-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

export class Composer implements Fallible {
  draft = '';
  isSending = false;
  hasError = false;
  lastError: Error | null = null;

  get isDirty(): boolean {
    return this.draft.length > 0;
  }

  constructor(private readonly controller: ComposerController) {}

  async type(text: string): Promise<void> {
    await tracked(this, () => this.controller.type(text));
    this.draft = text;
  }

  async paste(text: string): Promise<void> {
    await tracked(this, () => this.controller.paste(text));
    this.draft += text;
  }

  async readDraft(): Promise<string> {
    return await this.controller.readDraft();
  }

  async compose(text: string): Promise<void> {
    await tracked(this, () => this.controller.compose(text));
    this.draft = text;
  }

  async append(text: string): Promise<void> {
    await tracked(this, () => this.controller.paste(text));
    this.draft += text;
  }

  async send(): Promise<void> {
    this.isSending = true;
    try {
      await tracked(this, () => this.controller.send());
      this.draft = '';
    } finally {
      this.isSending = false;
    }
  }

  async sendMessage(text: string): Promise<void> {
    await this.type(text);
    await this.send();
  }

  async clear(): Promise<void> {
    await this.controller.clear();
    this.draft = '';
  }

  async attach(filePath: string): Promise<void> {
    await tracked(this, () => this.controller.attach(filePath));
  }
}
