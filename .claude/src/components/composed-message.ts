// Message — the message being built. Read from the UIA tree. No privileged state.

import type { MessageController } from '../controllers/composed-message-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

export type AttachmentKind = 'pasted' | 'image' | 'file';

export interface Attachment {
  name: string;
  kind: AttachmentKind;
  lines?: number;
}

export interface MessageState {
  text: string;
  attachments: Attachment[];
  canSend: boolean;
  isEmpty: boolean;
}

export class Message implements Fallible {
  hasError = false;
  lastError: Error | null = null;

  constructor(private readonly controller: MessageController) {}

  async read(): Promise<MessageState> {
    return tracked(this, () => this.controller.read());
  }

  async write(text: string): Promise<MessageState> {
    return tracked(this, async () => {
      await this.controller.write(text);
      return this.controller.read();
    });
  }

  async paste(text: string): Promise<MessageState> {
    return tracked(this, async () => {
      await this.controller.paste(text);
      return this.controller.read();
    });
  }

  async pasteImage(): Promise<MessageState> {
    return tracked(this, async () => {
      await this.controller.pasteFromClipboard();
      return this.controller.read();
    });
  }

  async pasteImageFile(imagePath: string): Promise<MessageState> {
    return tracked(this, async () => {
      await this.controller.pasteImageFile(imagePath);
      return this.controller.read();
    });
  }

  async attachFile(filePath: string): Promise<MessageState> {
    return tracked(this, async () => {
      await this.controller.attachFile(filePath);
      return this.controller.read();
    });
  }

  async removeAttachment(name: string): Promise<MessageState> {
    return tracked(this, async () => {
      await this.controller.removeAttachment(name);
      return this.controller.read();
    });
  }

  async clear(): Promise<MessageState> {
    return tracked(this, async () => {
      await this.controller.clear();
      return this.controller.read();
    });
  }

  async send(): Promise<boolean> {
    return tracked(this, async () => {
      await this.controller.send();
      const state = await this.controller.read();
      return state.isEmpty;
    });
  }
}
