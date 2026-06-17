///: MessageController — UIA boundary for the message being composed.
///: Sensors and actuators only. No orchestration.
///: Every method reads from the tree. No internal state. The tree is truth.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Sending Messages](../../library/reference-desk/03-01-operations--sending.md) — the compose workflow.

// MessageController — reads and modifies the message being built.
// Every method reads from the tree. No internal state. The tree is truth.

import type { Automation } from '../automation.ts';
import type { MessageState, Attachment, AttachmentKind } from '../components/composed-message.ts';
import { formatOutgoing } from '../text.ts';

const COMPOSER_NAMES = [
  'Write your prompt to Claude',
  'How can I help you today?',
  'Reply to Claude...',
];

export class MessageController {
  constructor(private readonly auto: Automation) {}

  async read(): Promise<MessageState> {
    const text = await this.readText();
    const attachments = await this.readAttachments();
    const canSend = await this.auto.uia.existsByName('Send message')
      || await this.auto.uia.existsByName('Send');
    const isEmpty = text.length === 0 && attachments.length === 0;

    return { text, attachments, canSend, isEmpty };
  }

  async readText(): Promise<string> {
    for (const name of COMPOSER_NAMES) {
      const value = await this.auto.uia.readValue(name);
      if (value !== null) return value;
    }
    return '';
  }

  async readAttachments(): Promise<Attachment[]> {
    const buttons = await this.auto.uia.findAllNames('Button');
    const attachments: Attachment[] = [];

    for (const name of buttons) {
      const pasted = name.match(/^Pasted Text, pasted, (\d+) lines?$/);
      if (pasted) {
        attachments.push({
          name,
          kind: 'pasted',
          lines: parseInt(pasted[1], 10),
        });
        continue;
      }

      const file = name.match(/^(\d+)_(.+)$/);
      if (file) {
        const originalName = file[2];
        const kind: AttachmentKind = /^image\.\w+$/.test(originalName) ? 'image' : 'file';
        attachments.push({ name, kind });
        continue;
      }
    }

    return attachments;
  }

  async write(text: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    await this.focusComposer();

    const formatted = formatOutgoing(text);
    const lines = formatted.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].length > 0) {
        await this.auto.keyboard.typeViaClipboard(lines[i]);
      }
      if (i < lines.length - 1) {
        await this.auto.keyboard.sendKeys('+{ENTER}');
      }
    }
  }

  async paste(text: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');
    await this.focusComposer();
    await this.auto.keyboard.typeViaClipboard(text);
    await this.auto.gateway.waitFor(
      async () => (await this.readText()).length > 0,
      { timeoutMs: 5_000 },
    );
  }

  async pasteFromClipboard(): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');
    const before = await this.readAttachments();
    await this.focusComposer();
    await this.auto.keyboard.sendKeys('^v');
    await this.auto.gateway.waitFor(
      async () => (await this.readAttachments()).length > before.length,
      { timeoutMs: 5_000 },
    );
  }

  async pasteImageFile(imagePath: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');
    const before = await this.readAttachments();
    await this.auto.keyboard.copyImageToClipboard(imagePath);
    await this.focusComposer();
    await this.auto.keyboard.sendKeys('^v');
    await this.auto.gateway.waitFor(
      async () => (await this.readAttachments()).length > before.length,
      { timeoutMs: 5_000 },
    );
  }

  async attachFile(filePath: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');
    const before = await this.readAttachments();
    await this.auto.keyboard.copyFileToClipboard(filePath);
    await this.focusComposer();
    await this.auto.keyboard.sendKeys('^v');
    await this.auto.gateway.waitFor(
      async () => (await this.readAttachments()).length > before.length,
      { timeoutMs: 5_000 },
    );
  }

  async removeAttachment(name: string): Promise<void> {
    await this.auto.gateway.act(
      async () => { await this.auto.uia.invokeByName(`Remove ${name}`); },
      async () => {
        const current = await this.readAttachments();
        return !current.some(a => a.name === name);
      },
      { description: `Remove attachment ${name}`, timeoutMs: 5_000 },
    );
  }

  async clear(): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    const attachments = await this.readAttachments();
    for (const att of attachments) {
      await this.removeAttachment(att.name);
    }

    await this.focusComposer();
    await this.auto.keyboard.selectAll();
    await this.auto.keyboard.delete();
    await this.auto.gateway.waitFor(
      async () => (await this.readText()) === '',
      { timeoutMs: 5_000 },
    );
  }

  async send(): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    await this.auto.gateway.act(
      async () => {
        const sent = await this.auto.uia.invokeByName('Send message')
          || await this.auto.uia.invokeByName('Send');
        if (!sent) {
          await this.focusComposer();
          await this.auto.keyboard.pressEnter();
        }
      },
      async () => {
        const state = await this.read();
        return state.isEmpty;
      },
      { description: 'Send message', timeoutMs: 10_000 },
    );
  }

  private async focusComposer(): Promise<void> {
    for (const name of COMPOSER_NAMES) {
      if (await this.auto.uia.clickByName(name)) return;
    }
  }
}
