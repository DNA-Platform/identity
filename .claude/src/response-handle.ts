// ResponseHandle — a non-blocking handle for an in-progress Desktop response.
// Returned by send(). Poll it to check state. Never blocks.

import type { Conversation } from './pages/conversation.ts';

export type ResponseState = 'pending' | 'thinking' | 'streaming' | 'done' | 'error';

export class ResponseHandle {
  state: ResponseState = 'pending';
  text = '';
  error: Error | null = null;

  constructor(private readonly conversation: Conversation) {}

  async check(): Promise<ResponseState> {
    try {
      // Check streaming indicators
      const streaming = await this.conversation.checkStreaming();
      if (streaming) {
        this.state = 'streaming';
        return this.state;
      }

      // If we were streaming and now we're not, we're done
      if (this.state === 'streaming' || this.state === 'thinking') {
        this.state = 'done';
        this.text = await this.conversation.readLastResponse();
        return this.state;
      }

      // Check if any response content appeared (thinking or response text)
      try {
        const response = await this.conversation.readLastResponse();
        if (response && response.length > 0) {
          // Content appeared — either done (no streaming) or still going
          this.state = 'done';
          this.text = response;
          return this.state;
        }
      } catch {}

      // Nothing yet
      return this.state;
    } catch (e) {
      this.state = 'error';
      this.error = e as Error;
      return this.state;
    }
  }

  get isDone(): boolean {
    return this.state === 'done';
  }

  get isProcessing(): boolean {
    return this.state === 'thinking' || this.state === 'streaming';
  }
}
