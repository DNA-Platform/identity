///: ComposerController — UIA boundary for the text input.
///: Sensors and actuators only. No orchestration.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Sending Messages](../../library/reference-desk/03-01-operations--sending.md) — the compose workflow.

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
        // Check for the thinking block OR response text — the actual content elements.
        //
        // The thinking block is a Button named "Thinking" during active thinking.
        // It persists permanently — its name changes to the thinking summary after.
        // This catches: Desktop is thinking (will produce content).
        //
        // Response text appears as Text elements during streaming and after completion.
        // "Claude responded:" appears in readText() once streaming completes.
        // During streaming, the response words are in readText() without that prefix.
        // "Claude finished the response" appears at completion.
        //
        // Check both: thinking block (Desktop is working) OR response content (words exist).
        if (await this.auto.uia.exists('Button', 'Thinking')) return true;
        if (await this.auto.uia.existsByName('Claude finished the response')) return true;
        const text = await this.auto.uia.readText();
        if (!text) return false;
        return text.includes('Claude responded:');
      },
      { description: 'Send message', timeoutMs: 120_000 },
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
