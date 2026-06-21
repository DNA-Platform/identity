///: MoveConversationModal — returned by [ConversationMenu.addToProject()](chat-list.ts).
///: The full flow is documented in [Adding a conversation to a project](../../library/reference-desk/03-03-operations--projects.md#adding-a-conversation-to-a-project)
///: and the class sits in the [class catalogue](../../library/reference-desk/13-the-redesign.md#class-catalogue).
///:
///: NOT a unitary action: it lists the projects and offers a search bar to narrow
///: a long list. Read projects() (or search() to filter), find the one you want,
///: and select() it — selecting auto-confirms and closes the modal (no OK button;
///: proven in identity history e0c9558, "verify dialog closed (selecting
///: auto-confirms)"). Grounded in [move-conversation-modal.txt](../trees/move-conversation-modal.txt):
///: a Window "Move chat" (the app's name, not ours) holding a ComboBox "Select a
///: project" (the search bar) above a List "Projects" of ControlType.ListItem
///: choices (Claude first).
///:
///: Obeys the two laws ([P2/P4](../../library/reference-desk/13-the-redesign.md#p2--clicks-are-parameterless-only-typing-takes-a-parameter)):
///: the only parametered method is search(text) (it types into the search bar);
///: ProjectChoice.select() is parameterless. The [controller](../controllers/chat-list-controller.ts)
///: owns the UIA names (clickProjectItem, readProjectList, isDialogVisible); the
///: modal only sequences and verifies through the [gateway](../../library/reference-desk/02-01-the-architecture--layers.md).

import type { ChatListController } from '../controllers/chat-list-controller.ts';
import type { Gateway } from '../gateway.ts';

/** One project in the Move conversation modal. Selecting it moves the
 *  conversation in and closes the modal — there is no separate confirm button. */
export class ProjectChoice {
  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
    readonly name: string,
  ) {}

  async select(): Promise<void> {
    const clicked = await this.controller.clickProjectItem(this.name);
    if (!clicked) {
      await this.controller.closeDialog();
      throw new Error(`Could not click "${this.name}" in the Move conversation modal`);
    }
    const closed = await this.gateway.waitFor(
      async () => !(await this.controller.isDialogVisible()),
      { timeoutMs: 10_000 },
    );
    if (!closed) {
      await this.controller.closeDialog();
      throw new Error('Move conversation modal did not close after selecting a project');
    }
  }
}

export class MoveConversationModal {
  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
  ) {}

  /** Type into the modal's search bar to filter the project list. The modal
   *  opens with its search box focused, so the text goes straight there. The
   *  only method on the modal that takes a parameter. Read projects() after to
   *  get the filtered choices. */
  async search(text: string): Promise<void> {
    await this.controller.searchProjects(text);
    const filtered = await this.gateway.waitFor(
      async () => {
        const names = await this.controller.readProjectList();
        return names.some(n => n.toLowerCase().includes(text.toLowerCase()));
      },
      { timeoutMs: 3_000 },
    );
    if (!filtered) throw new Error(`No project matched "${text}" in the Move conversation modal`);
  }

  /** The projects currently listed in the modal (filtered, if you searched). */
  async projects(): Promise<ProjectChoice[]> {
    const names = await this.controller.readProjectList();
    return names.map(name => new ProjectChoice(this.controller, this.gateway, name));
  }

  async cancel(): Promise<void> {
    await this.controller.closeDialog();
  }
}
