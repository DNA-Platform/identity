///: Conversation list components — the unified ConversationItem chain.
///: ONE ConversationItem class is shown in the Sidebar AND on a ProjectPage
///: (the redesign collapses the old ChatItem + ProjectConversationItem into one).
///: Its object chain: ConversationItem -> ConversationMenu -> rename(name) | MoveConversationModal.
///: Every step reads from the tree to verify state before proceeding.
///:
///: Two laws enforced here: no method takes a parameter except rename(name)/search(text) (they type);
///: navigation returns the next Page (ConversationItem.open() -> ConversationPage).
///: The list pattern replaces find(name)-on-container: callers read the list and
///: do `.find(c => c.name === …)` themselves.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#the-object-model-settled--model-the-objects-not-their-features) — the settled object model.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the View object chain.
///: Grounded in captured trees: the menu → [conversation-menu.txt](../trees/conversation-menu.txt)
///: (MenuItems Pin/Rename/Add to project/Delete); the rename field →
///: [conversation-rename-field.txt](../trees/conversation-rename-field.txt) (Edit "Rename", no confirm button);
///: the Add-to-project dialog → [MoveConversationModal](./move-conversation-modal.ts).

import type { ChatListController } from '../controllers/chat-list-controller.ts';
import type { Gateway } from '../gateway.ts';
import type { Navigation } from '../pages/navigation.ts';
import type { ConversationPage } from '../pages/conversation.ts';
import { MoveConversationModal } from './move-conversation-modal.ts';

// --- The three-dot menu on a conversation -----------------------------------

export class ConversationMenu {
  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
    readonly items: string[],
  ) {}

  private async verifyStillOpen(): Promise<void> {
    const open = await this.controller.isMenuVisible();
    if (!open) throw new Error('Menu is no longer open');
  }

  get isInProject(): boolean {
    return this.items.includes('Change project') || this.items.includes('Remove from project');
  }

  /** Rename the conversation. Clicking "Rename" turns the title into an inline
   *  text field with its text pre-selected; we type the new name and commit with
   *  Enter. There is no confirm button — the field is just a textbox, so this is
   *  one action. Takes a string because it types into that textbox (the one law
   *  that permits a parameter). */
  async rename(name: string): Promise<void> {
    await this.verifyStillOpen();

    const clicked = await this.controller.clickRename();
    if (!clicked) throw new Error('Could not click Rename');

    const fieldActive = await this.gateway.waitFor(
      () => this.controller.isRenameFieldActive(),
      { timeoutMs: 3_000 },
    );
    if (!fieldActive) throw new Error('Rename field did not open');

    // The field opens pre-selected; paste replaces it, Enter commits. Proven
    // mechanism (no selectAll, no retrying act) — identity history 2bfc554.
    await this.controller.typeAndConfirm(name);
  }

  /** Click Add to project — returns the Move chat modal (a real dialog with a
   *  project list and a search bar; NOT a unitary action). Read its projects()
   *  or search() to narrow, then select() one. */
  async addToProject(): Promise<MoveConversationModal> {
    await this.verifyStillOpen();

    const clicked = await this.controller.clickAddToProject();
    if (!clicked) throw new Error('Could not click Add to project');

    const dialogOpen = await this.gateway.waitFor(
      () => this.controller.isDialogVisible(),
      { timeoutMs: 5_000 },
    );
    if (!dialogOpen) throw new Error('Move chat modal did not appear');

    return new MoveConversationModal(this.controller, this.gateway);
  }

  async removeFromProject(): Promise<void> {
    await this.verifyStillOpen();
    const clicked = await this.controller.clickRemoveFromProject();
    if (!clicked) throw new Error('Could not click Remove from project');
  }

  async delete(): Promise<void> {
    await this.verifyStillOpen();
    const clicked = await this.controller.clickDelete();
    if (!clicked) throw new Error('Could not click Delete');
  }

  async pin(): Promise<void> {
    await this.verifyStillOpen();
    const clicked = await this.controller.clickPin();
    if (!clicked) throw new Error('Could not click Pin');
  }

  async close(): Promise<void> {
    await this.controller.closeMenu();
  }
}

// The Move conversation modal (Add to project) is its own class — see move-conversation-modal.ts.

// --- A conversation in the sidebar OR on a project page ----------------------

export class ConversationItem {
  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
    private readonly nav: Navigation,
    readonly name: string,
  ) {}

  /** Open this conversation — navigates and returns the ConversationPage. */
  async open(): Promise<ConversationPage> {
    await this.controller.open(this.name);
    return this.nav.waitForConversation();
  }

  /** Open the three-dot menu — returns the ConversationMenu. */
  async menu(): Promise<ConversationMenu> {
    const buttonReady = await this.gateway.waitFor(
      () => this.controller.hasMenuButton(this.name),
      { timeoutMs: 5_000 },
    );
    if (!buttonReady) throw new Error(`Menu button not found for "${this.name}"`);

    const expanded = await this.controller.expandMenu(this.name);
    if (!expanded) throw new Error(`Could not expand menu for "${this.name}"`);

    const visible = await this.gateway.waitFor(
      () => this.controller.isMenuVisible(),
      { timeoutMs: 5_000 },
    );
    if (!visible) throw new Error('Menu did not appear');

    const items = await this.controller.readMenuItems();
    return new ConversationMenu(this.controller, this.gateway, items);
  }
}
