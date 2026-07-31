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

  /** Which composer name is ACTUALLY on screen. One tree read answers for every
   *  candidate — the alternative is querying, or CLICKING, at each name in turn
   *  until one happens to work, which is a driver guessing with someone's mouse. */
  private async findComposer(): Promise<string | null> {
    const tree = await this.auto.uia.snapshot();
    if (tree.isEmpty) return null;           // could not see — not "not there"
    return COMPOSER_NAMES.find(name => tree.has({ name })) ?? null;
  }

  async readText(): Promise<string> {
    const name = await this.findComposer();
    if (!name) return '';
    return (await this.auto.uia.readValue(name)) ?? '';
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
          lines: parseInt(pasted[1], 10) });
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

  /** Write the whole message in ONE action.
   *
   *  This used to loop the lines: paste a line, press Shift+Enter, paste the next —
   *  N clipboard writes and N keystrokes synthesised into the user's window for one
   *  message. `setValue` through the ValuePattern sets the entire text, newlines
   *  included, in a single call, and it is the mechanism the pitfalls chapter
   *  already recommends over pasting (a paste becomes an ATTACHMENT, not text). */
  async write(text: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    const name = await this.findComposer();
    if (!name) throw new Error('No composer on screen to write into');
    await this.auto.uia.setValue(name, formatOutgoing(text));
  }

  async paste(text: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');
    await this.focusComposer();
    await this.auto.keyboard.typeViaClipboard(text);
    await this.auto.gateway.waitFor(
      async () => (await this.readText()).length > 0,
      {},
    );
  }

  async pasteFromClipboard(): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');
    const before = await this.readAttachments();
    await this.focusComposer();
    await this.auto.keyboard.sendKeys('^v');
    await this.auto.gateway.waitFor(
      async () => (await this.readAttachments()).length > before.length,
      {},
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
      {},
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
      {},
    );
  }

  async removeAttachment(name: string): Promise<void> {
    await this.auto.gateway.act(
      async () => { await this.auto.uia.invokeByName(`Remove ${name}`); },
      async () => {
        const current = await this.readAttachments();
        return !current.some(a => a.name === name);
      },
      { description: `Remove attachment ${name}` },
    );
  }

  async clear(): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation', 'project');

    // Clear the TEXT in one action. Attachments are NOT swept in a loop any more:
    // that removed them one at a time, N clicks into the window, and if a removal
    // silently failed the loop had already moved on. Whatever is left is reported by
    // `read()` — the caller sees it and decides, which is the whole contract.
    await this.focusComposer();
    await this.auto.keyboard.selectAll();
    await this.auto.keyboard.delete();
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
      { description: 'Send message' },
    );
  }

  private async focusComposer(): Promise<void> {
    const name = await this.findComposer();
    if (name) await this.auto.uia.clickByName(name);   // ONE click, where it really is
  }
}
