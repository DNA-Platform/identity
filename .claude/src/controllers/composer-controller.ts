// Composer controller — types and sends messages via UIA.
// type() uses ValuePattern (programmatic, strips formatting).
// paste() uses clipboard (preserves formatting, appends at cursor).
// compose() formats outgoing text and pastes — the primary way to build messages.

import type { Automation } from '../automation.ts';
import { formatOutgoing } from '../text.ts';

export class ComposerController {
  constructor(private readonly auto: Automation) {}

  async readDraft(): Promise<string> {
    const names = ['Write your prompt to Claude', 'Message Claude', 'How can I help you today?', 'Reply to Claude...'];
    for (const name of names) {
      const value = await this.auto.uia.readValue(name);
      if (value !== null) return value;
    }
    return '';
  }

  async type(text: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    await this.auto.gateway.act(
      async () => {
        const set = await this.auto.uia.setValue('Write your prompt to Claude', text)
          || await this.auto.uia.setValue('Message Claude', text)
          || await this.auto.uia.setValue('How can I help you today?', text)
          || await this.auto.uia.setValue('Reply to Claude...', text);
        if (!set) {
          await this.auto.keyboard.clickAt(0.5, 80);
          await this.auto.keyboard.typeViaClipboard(text);
        }
      },
      async () => {
        const pageText = await this.auto.uia.readText();
        return pageText?.includes(text.slice(0, 20)) ?? false;
      },
      { description: `Type "${text.slice(0, 40)}"` },
    );
  }

  async paste(text: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    // Paste is NOT idempotent — each paste appends text.
    // Do not use gateway.act() which retries on verification failure.
    // Click the composer, paste once, verify once.
    await this.auto.uia.clickByName('Write your prompt to Claude')
      || await this.auto.uia.clickByName('How can I help you today?')
      || await this.auto.uia.clickByName('Reply to Claude...');
    await this.auto.keyboard.typeViaClipboard(text);

    await this.auto.gateway.waitFor(
      async () => {
        return await this.auto.uia.existsByName('Send')
          || await this.auto.uia.existsByName('Send message');
      },
      { description: `Verify paste "${text.slice(0, 40)}"`, timeoutMs: 10_000 },
    );
  }

  async compose(text: string): Promise<void> {
    const formatted = formatOutgoing(text);
    await this.paste(formatted);
  }

  async send(): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    await this.auto.gateway.act(
      async () => {
        const sent = await this.auto.uia.invokeByName('Send')
          || await this.auto.uia.invokeByName('Send message');
        if (!sent) {
          await this.auto.keyboard.pressEnter();
        }
      },
      async () => {
        const screen = await this.auto.navigator.detectScreen();
        if (screen === 'conversation') return true;
        const streaming = await this.auto.uia.existsByName('Claude is responding')
          || await this.auto.uia.existsByName('Claude is thinking');
        return streaming;
      },
      { description: 'Send message' },
    );
  }

  async clear(): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    // Phase 1: remove pasted text attachments.
    // Each pasted block creates a "Remove Pasted Text, pasted, N lines" button.
    await this.removePastedAttachments();

    // Phase 2: clear inline text by clicking into the composer, then select-all + delete.
    await this.auto.uia.clickByName('Write your prompt to Claude')
      || await this.auto.uia.clickByName('How can I help you today?')
      || await this.auto.uia.clickByName('Reply to Claude...');
    await this.auto.keyboard.selectAll();
    await this.auto.keyboard.delete();
  }

  async removePastedAttachments(): Promise<number> {
    let removed = 0;
    for (let i = 0; i < 20; i++) {
      const names = await this.auto.uia.findAllNames('Button');
      const removeBtn = names.find(n => n.startsWith('Remove Pasted Text'));
      if (!removeBtn) break;
      await this.auto.uia.invokeByName(removeBtn);
      await new Promise(r => setTimeout(r, 400));
      removed++;
    }
    return removed;
  }

  async attach(filePath: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invokeByName('Attach')
          || await this.auto.uia.invokeByName('Add content');
      },
      () => Promise.resolve(true),
      { description: `Attach ${filePath}`, timeoutMs: 30_000 },
    );
  }
}
