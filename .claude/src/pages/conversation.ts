///: ConversationPage — an open chat. The page scripts spend most time on:
///: send, wait for streaming, read the response.
///:
///: composer — type and send (send() returns the page you land on).
///: response — the LIVE Response View object (components/response.ts). Read it as
///:   it streams; waitUntilStreaming() before minimizing (decisions #2/#8 — the
///:   page, not the composer, owns "did response text appear").
///: messages() — read the conversation's messages.
///: menu() — the three-dot conversation menu (rename, add-to-project, delete, …),
///:   reached from the page header. Same ConversationMenu class as the sidebar item.
///: scrollToBottom()/scrollToTop() — before every read.
///: Sensors (isResponseComplete, hasResponseContent, hasStopButton, canSend) are
///:   raw controller signals the gateway polls; no requireScreen — the page TYPE
///:   guarantees you are on a conversation (P3).
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#the-object-model-settled--model-the-objects-not-their-features) — ConversationPage in the settled model.
///: [Reading Responses](../../library/reference-desk/03-02-operations--reading.md) — streaming/completion.
///: [streaming tree](../trees/conversation-streaming.txt), [complete tree](../trees/conversation-complete.txt).

import type { Automation } from '../automation.ts';
import type { Gateway } from '../gateway.ts';
import type { Sidebar } from '../components/sidebar.ts';
import type { Composer } from '../components/composer.ts';
import type { ArtifactPanel } from '../components/artifact-panel.ts';
import type { ConversationController } from '../controllers/conversation-controller.ts';
import type { ChatListController } from '../controllers/chat-list-controller.ts';
import type { ChatMessage } from '../components/message.ts';
import { Page } from './page.ts';
import { Response } from '../components/response.ts';
import { ConversationMenu } from '../components/chat-list.ts';

export class ConversationPage extends Page {
  /** The live response — read it as it streams, it reflects the current tree. */
  readonly response: Response;

  constructor(
    auto: Automation,
    gateway: Gateway,
    sidebar: Sidebar,
    private readonly controller: ConversationController,
    private readonly chatList: ChatListController,
    readonly composer: Composer,
    readonly artifacts: ArtifactPanel,
  ) {
    super(auto, gateway, sidebar);
    this.response = new Response(controller);
  }

  get screenType(): string { return 'conversation'; }

  /** This conversation's title, read from the page header. The one fact a caller
   *  needs to confirm we are on the RIGHT topic before reusing the page — the
   *  session remembers a URL, not a topic, so "on a conversation" is not "on the
   *  right conversation". Empty string if the header has no readable title yet. */
  async title(): Promise<string> {
    return (await this.controller.currentTitle()) ?? '';
  }

  /** The conversation's messages, read from the tree. */
  async messages(): Promise<ChatMessage[]> {
    return this.controller.readMessages();
  }

  /** The three-dot conversation menu — reached from the page header. The header
   *  carries the same "More options for <title>" button and the same MenuItems
   *  (Rename, Add to project, Delete, …) as a sidebar item, so it reuses the one
   *  ConversationMenu class and the chat-list controller's menu actuators (the
   *  legal home for those UIA names). */
  async menu(): Promise<ConversationMenu> {
    // Read the exact title from the header's rename-chat button, not from a text
    // parse — it is guaranteed to match the "More options for <title>" button.
    const title = await this.controller.currentTitle();
    if (!title) throw new Error('Could not read the conversation title from the header');

    const expanded = await this.chatList.expandMenu(title);
    if (!expanded) throw new Error('Could not open the conversation menu');

    const visible = await this.gateway.waitFor(
      () => this.chatList.isMenuVisible(),
      { timeoutMs: 5_000 },
    );
    if (!visible) throw new Error('Conversation menu did not appear');

    const items = await this.chatList.readMenuItems();
    return new ConversationMenu(this.chatList, this.gateway, items);
  }

  /** Rename this conversation via the page header's "<title>, rename chat" button
   *  — robust to Desktop re-titling a freshly-created conversation underneath us
   *  (matched by suffix, not title). Opens the inline Edit "Rename" field, types
   *  the new name, commits with Enter. Takes a string because it types into the
   *  textbox (the one law that permits a parameter). */
  async rename(name: string): Promise<void> {
    const clicked = await this.controller.clickRenameChat();
    if (!clicked) throw new Error('Could not find the rename-chat button on the conversation header');
    const active = await this.gateway.waitFor(
      () => this.controller.isChatNameFieldActive(),
      { timeoutMs: 3_000 },
    );
    if (!active) throw new Error('Chat name field did not open');
    await this.controller.typeChatName(name);
    const committed = await this.gateway.waitFor(
      async () => !(await this.controller.isChatNameFieldActive()),
      { timeoutMs: 3_000 },
    );
    if (!committed) throw new Error('Rename did not commit (Chat name field stayed open)');
  }

  // --- Reading / scrolling ---

  async scrollToBottom(): Promise<void> {
    await this.controller.scrollToBottom();
  }

  async scrollToTop(): Promise<void> {
    await this.controller.scrollToTop();
  }

  // --- Sensors (raw controller signals; the gateway polls them) ---

  async isResponseComplete(): Promise<boolean> {
    return this.controller.isResponseComplete();
  }

  async hasResponseContent(): Promise<boolean> {
    return this.controller.hasResponseContent();
  }

  async hasStopButton(): Promise<boolean> {
    return this.controller.hasStopButton();
  }

  async canSend(): Promise<boolean> {
    return this.controller.canSend();
  }
}
