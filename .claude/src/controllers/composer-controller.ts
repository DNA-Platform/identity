///: ComposerController — blind UIA executor for the text input.
///: Pure sensors and actuators. No gateway. No foreground checks.
///: No requireScreen. No orchestration. Called only by the View
///: layer (Composer) through the Gateway.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — controllers are blind executors.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the one rule.

import type { Automation } from '../automation.ts';

// The composer's element is named by its placeholder, and it differs by screen:
// "Write your prompt to Claude" on a fresh/home chat, "Write a message…" inside
// an open conversation (grounded live, diag-send 2026-06-21). An EMPTY field
// reports its placeholder AS its value, so readDraft treats a placeholder match
// as empty.
const composerNames = [
  'Write your prompt to Claude',
  'Write a message…',
  'Write a message...',
  'Message Claude',
  'How can I help you today?',
  'Reply to Claude...',
];
const placeholderValues = new Set(composerNames.map(n => n.replace(/[.…]+$/, '')));

export class ComposerController {
  constructor(private readonly auto: Automation) {}

  // --- Sensors (reads) ---

  async readDraft(): Promise<string> {
    for (const name of composerNames) {
      const value = await this.auto.uia.readValue(name);
      if (value !== null) {
        // An empty composer reports its placeholder as the value — that is NOT
        // draft text. Treat any placeholder match as empty.
        if (placeholderValues.has(value.replace(/[.…]+$/, '').trim())) return '';
        return value;
      }
    }
    return '';
  }

  async hasSendButton(): Promise<boolean> {
    return await this.auto.uia.existsByName('Send')
      || await this.auto.uia.existsByName('Send message');
  }

  // --- Actuators (single UIA actions) ---

  async clickSend(): Promise<boolean> {
    const sent = await this.auto.uia.invokeByName('Send')
      || await this.auto.uia.invokeByName('Send message');
    if (!sent) {
      await this.auto.keyboard.pressEnter();
    }
    return true;
  }

  async clickAttach(): Promise<boolean> {
    return await this.auto.uia.invokeByName('Attach')
      || await this.auto.uia.invokeByName('Add content')
      || await this.auto.uia.invokeByName('Add files, connectors, and more');
  }

  async focusComposer(): Promise<boolean> {
    for (const name of composerNames) {
      if (await this.auto.uia.clickByName(name)) return true;
    }
    return false;
  }

  async paste(text: string): Promise<void> {
    await this.focusComposer();
    await this.auto.keyboard.typeViaClipboard(text);
  }

  async typeInline(text: string): Promise<boolean> {
    for (const name of composerNames) {
      if (await this.auto.uia.setValue(name, text)) return true;
    }
    return false;
  }

  async selectAllAndDelete(): Promise<void> {
    await this.focusComposer();
    await this.auto.keyboard.selectAll();
    await this.auto.keyboard.delete();
  }

  async removePastedAttachment(): Promise<boolean> {
    const names = await this.auto.uia.findAllNames('Button');
    const removeBtn = names.find(n => n.startsWith('Remove Pasted Text'));
    if (!removeBtn) return false;
    await this.auto.uia.invokeByName(removeBtn);
    return true;
  }

  /** How many pasted-text attachments are present. A large paste becomes one of
   *  these instead of draft text, so it is how `paste` confirms a big add landed. */
  async countPastedAttachments(): Promise<number> {
    const names = await this.auto.uia.findAllNames('Button');
    return names.filter(n => n.startsWith('Remove Pasted Text')).length;
  }
}
