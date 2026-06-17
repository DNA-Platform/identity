// Conversation — an open chat between the user and Claude.
// See: library/..team/claude/.perspective/07-conversation-samantha.png

import type { ConversationController } from '../controllers/conversation-controller.ts';
import type { ChatMessage, ConversationMessage } from '../components/message.ts';
import type { Turn } from '../components/turn.ts';
import type { Artifact } from '../components/artifact-panel.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';
import { Composer } from '../components/composer.ts';
import { Message } from '../components/composed-message.ts';
import { ModelPicker } from '../components/model-picker.ts';
import { ArtifactPanel } from '../components/artifact-panel.ts';

export class Conversation implements Fallible {
  readonly composer: Composer;
  readonly message: Message;
  readonly model: ModelPicker;
  readonly artifacts: ArtifactPanel;

  id = '';
  url = '';
  title = '';
  projectName: string | null = null;
  messages: ChatMessage[] = [];
  turns: Turn[] = [];
  structuredMessages: ConversationMessage[] = [];
  response: ConversationMessage | null = null;
  paragraphCount = 0;
  isLoading = false;
  isStreaming = false;
  hasError = false;
  lastError: Error | null = null;

  constructor(
    private readonly controller: ConversationController,
    composer: Composer,
    message: Message,
    model: ModelPicker,
    artifacts: ArtifactPanel,
  ) {
    this.composer = composer;
    this.message = message;
    this.model = model;
    this.artifacts = artifacts;
  }

  async refresh(): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        this.url = await this.controller.readUrl();
        this.id = this.parseIdFromUrl(this.url);
        this.title = await this.controller.readTitle();
        this.projectName = await this.controller.readProjectName();
        this.messages = await this.controller.readMessages();
        this.paragraphCount = this.messages.reduce(
          (sum, m) => sum + m.content.split('\n').filter(l => l.trim()).length, 0,
        );
        this.isStreaming = await this.controller.checkStreaming();
        await this.model.refresh();
        await this.artifacts.refresh();
      });
    } finally {
      this.isLoading = false;
    }
  }

  async refreshMetadata(): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        this.url = await this.controller.readUrl();
        this.id = this.parseIdFromUrl(this.url);
        this.title = await this.controller.readTitle();
        this.projectName = await this.controller.readProjectName();
        this.isStreaming = await this.controller.checkStreaming();
      });
    } finally {
      this.isLoading = false;
    }
  }

  private parseIdFromUrl(url: string): string {
    const match = url.match(/\/chat\/([a-f0-9-]+)/);
    return match?.[1] ?? '';
  }

  // --- Reading ---

  async readTitle(): Promise<string> {
    return tracked(this, async () => {
      this.title = await this.controller.readTitle();
      return this.title;
    });
  }

  async readProjectName(): Promise<string | null> {
    return tracked(this, async () => {
      this.projectName = await this.controller.readProjectName();
      return this.projectName;
    });
  }

  async readMessages(): Promise<ChatMessage[]> {
    return tracked(this, async () => {
      this.messages = await this.controller.readMessages();
      return this.messages;
    });
  }

  async readLastResponse(): Promise<string> {
    return tracked(this, () => this.controller.readLastResponse());
  }

  async readTurns(): Promise<Turn[]> {
    return tracked(this, async () => {
      this.turns = await this.controller.readTurns();
      return this.turns;
    });
  }

  async readStructuredMessages(): Promise<ConversationMessage[]> {
    return tracked(this, async () => {
      this.structuredMessages = await this.controller.readStructuredMessages();
      return this.structuredMessages;
    });
  }

  async readResponse(): Promise<ConversationMessage | null> {
    return tracked(this, async () => {
      this.response = await this.controller.readResponse();
      return this.response;
    });
  }

  async messageCount(): Promise<number> {
    return tracked(this, () => this.controller.readMessageCount());
  }

  // --- Writing ---

  async rename(newTitle: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.rename(newTitle);
      this.title = newTitle;
    });
  }

  async delete(): Promise<void> {
    await tracked(this, async () => {
      await this.controller.delete();
      this.id = '';
      this.url = '';
      this.title = '';
      this.messages = [];
    });
  }

  async editMessage(index: number, newText: string): Promise<void> {
    await tracked(this, () => this.controller.editMessage(index, newText));
  }

  // --- Streaming ---

  async waitForResponse(timeoutMs = 60_000): Promise<void> {
    this.isStreaming = true;
    try {
      await tracked(this, async () => {
        await this.controller.waitForResponse(timeoutMs);
        this.url = await this.controller.readUrl();
        this.id = this.parseIdFromUrl(this.url);
        this.title = await this.controller.readTitle();
        this.messages = await this.controller.readMessages();
      });
    } finally {
      this.isStreaming = false;
    }
  }

  async checkStreaming(): Promise<boolean> {
    this.isStreaming = await this.controller.checkStreaming();
    return this.isStreaming;
  }

  async regenerateLastResponse(): Promise<void> {
    this.isStreaming = true;
    await tracked(this, () => this.controller.regenerateLastResponse());
  }

  // --- Navigation ---

  async isAtBottom(): Promise<boolean> {
    return this.controller.isAtBottom();
  }

  async scrollToBottom(): Promise<void> {
    await this.controller.scrollToBottom();
  }

  async scrollToTop(): Promise<void> {
    await this.controller.scrollToTop();
  }

  // --- Messages ---

  async copyMessage(index: number): Promise<string> {
    return this.controller.copyMessage(index);
  }

  // --- Artifacts ---

  async listArtifacts(): Promise<Artifact[]> {
    return this.artifacts.list();
  }

  async openArtifact(title: string): Promise<string> {
    await this.artifacts.select(title);
    return this.artifacts.readContent();
  }

  async copyArtifact(title: string): Promise<string> {
    await this.artifacts.select(title);
    return this.artifacts.copy();
  }

  async downloadArtifact(title: string, outputPath: string): Promise<void> {
    await this.artifacts.select(title);
    await this.artifacts.download(outputPath);
  }

  // --- Thinking ---

  async expandThinking(messageIndex: number): Promise<string> {
    return this.controller.expandThinking(messageIndex);
  }
}
