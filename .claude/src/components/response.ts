///: Response — the LIVE View object for the latest assistant response.
///: You get it back when you send a message, and from the page (there is always
///: a last response once any message has been sent). Until it detects the
///: response is OVER, it is live: every read hits the current tree, because the
///: text and parts change while streaming. Interaction is async — there is no
///: sync toString(), because reading the response means reading the tree.
///: It models the WHOLE response as an ordered list of Parts.
///:
///: Grounded in the captured UIA trees:
///: [streaming](../trees/conversation-streaming.txt) — body grows in the Document, Stop present.
///: [complete](../trees/conversation-complete.txt) — `Claude finished the response`, Stop gone.
///: [code](../trees/conversation-code.txt) — a `python code` Group part.
///: [artifact](../trees/conversation-artifact.txt) — research summaries + an artifact panel.
///: See the [tree catalogue](../trees/README.md).
///:
///: [Response is a View object](../../library/reference-desk/02-01-the-architecture--layers.md#response-and-message-objects).
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#the-response-as-a-polymorphic-collection-of-parts-doug-2026-06-21) — parts, the live model, read() not toString.
///: [Reading Responses](../../library/reference-desk/03-02-operations--reading.md) — the streaming/complete signals.

import type { ConversationController } from '../controllers/conversation-controller.ts';
import { type Part, assembleParts } from './part.ts';

export class Response {
  // Once the response is detected over, it no longer changes — cache the final
  // text so later reads don't re-walk the tree. Null = still live (or empty).
  private settledText: string | null = null;

  constructor(private readonly controller: ConversationController) {}

  /** Is the response over? Reads the live tree. Over = the Stop button is gone
   *  (and no streaming indicator) AND real content is present. The content guard
   *  avoids the false positive right after send — no Stop yet, no content yet —
   *  which naively reads as "complete" (Doug). */
  async isComplete(): Promise<boolean> {
    if (!(await this.controller.isResponseComplete())) return false; // stop gone, not streaming
    return this.hasContent();                                        // ...AND some content
  }

  /** Has any assistant content appeared yet? `false` is the empty state — no
   *  message has produced a response (e.g. a fresh conversation). */
  async hasContent(): Promise<boolean> {
    return this.controller.hasResponseContent();
  }

  /** Streaming = at least one real PART has appeared and the response is not yet
   *  over. This verifies actual content, NOT the "Claude is responding" indicator
   *  (which can sit there while frozen). The indicators are status, not parts —
   *  they are read by isComplete(), and never appear in parts(). */
  async isStreaming(): Promise<boolean> {
    if (await this.isComplete()) return false;
    return (await this.parts()).length > 0;
  }

  /** The whole response as text, read live from the tree. This replaces a sync
   *  toString — reading the response is reading the tree, so it must be async. */
  async read(): Promise<string> {
    if (this.settledText !== null) return this.settledText;
    const text = await this.controller.readResponseText();
    if (await this.isComplete()) this.settledText = text; // settle once over
    return text;
  }

  /** The ordered Parts of the response, assembled live from the tree. */
  async parts(): Promise<Part[]> {
    const elements = await this.controller.readElements();
    return assembleParts(elements);
  }

  /** Rapidly wait (gateway poll, 50ms tapering) for the response to START.
   *  As soon as this returns true, MINIMIZE — the send unit is done; read later.
   *  Returns false on timeout. */
  async waitUntilStreaming(timeoutMs = 30_000): Promise<boolean> {
    return this.controller.waitForStreamingStart(timeoutMs);
  }

  /** Rapidly wait (gateway poll) for the response to be OVER (no stop + content).
   *  Call this after re-maximizing, before read(). Returns false on timeout. */
  async waitUntilComplete(timeoutMs = 300_000): Promise<boolean> {
    return this.controller.waitForComplete(timeoutMs);
  }

  /** Block until the response is over, then return its final text. Use this when
   *  you want the finished answer rather than the live, partial one. */
  async readToEnd(timeoutMs = 300_000): Promise<string> {
    await this.waitUntilComplete(timeoutMs);
    return this.read();
  }
}
