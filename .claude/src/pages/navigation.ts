///: Navigation — the factory that reconstitutes typed Page objects.
///: Navigation lands you on a screen; this turns "we are now on screen X" into the
///: concrete Page object for X, wired with its components. It is how launch(),
///: Composer.send(), and every item.open() obtain their return value: navigate,
///: confirm the screen with detectScreen(), then build the page (settled
///: decisions #1 and #4 — you earn a concrete page type only by confirming state).
///:
///: It is infrastructure for the View layer, not a Page itself. It holds the
///: Automation bundle and the Gateway and constructs pages on demand.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions) — #1 launch reconstitutes, #4 no sendAndGetConversation macro.
///: [Navigation](../../library/reference-desk/02-03-the-architecture--navigation.md) — screen detection.

import type { Automation } from '../automation.ts';
import type { Gateway } from '../gateway.ts';
import type { Screen } from '../navigator.ts';
import type { Sidebar } from '../components/sidebar.ts';
import { Composer } from '../components/composer.ts';
import { ModelPicker } from '../components/model-picker.ts';
import { ArtifactPanel } from '../components/artifact-panel.ts';
import { FilesPane } from '../components/files-pane.ts';
import { ComposerController } from '../controllers/composer-controller.ts';
import { ModelPickerController } from '../controllers/model-picker-controller.ts';
import { ArtifactPanelController } from '../controllers/artifact-panel-controller.ts';
import { ConversationController } from '../controllers/conversation-controller.ts';
import { ChatListController } from '../controllers/chat-list-controller.ts';
import { ProjectController } from '../controllers/project-controller.ts';

import type { Page } from './page.ts';
import { HomePage } from './home.ts';
import { ConversationPage } from './conversation.ts';
import { ProjectsPage } from './projects-grid.ts';
import { ProjectPage } from './project.ts';

export class Navigation {
  constructor(
    readonly auto: Automation,
    private readonly gateway: Gateway,
    private readonly sidebar: Sidebar,
  ) {}

  private composer(): Composer {
    return new Composer(new ComposerController(this.auto), this.gateway, this);
  }

  home(): HomePage {
    return new HomePage(
      this.auto, this.gateway, this.sidebar,
      this.composer(),
      new ModelPicker(new ModelPickerController(this.auto)),
    );
  }

  conversation(): ConversationPage {
    return new ConversationPage(
      this.auto, this.gateway, this.sidebar,
      new ConversationController(this.auto),
      new ChatListController(this.auto),
      this.composer(),
      new ArtifactPanel(new ArtifactPanelController(this.auto)),
    );
  }

  projects(): ProjectsPage {
    return new ProjectsPage(this.auto, this.gateway, this.sidebar).bind(this);
  }

  project(): ProjectPage {
    return new ProjectPage(
      this.auto, this.gateway, this.sidebar,
      new ProjectController(this.auto),
      new FilesPane(this.auto, this.auto.window),
      this.composer(),
    ).bind(this);
  }

  /** Reconstitute the page for the screen we are actually on, confirming via
   *  detectScreen(). Used by launch() and any navigation that can land on more
   *  than one screen. */
  async currentPage(): Promise<Page> {
    const screen = await this.auto.navigator.detectScreen();
    return this.pageFor(screen);
  }

  pageFor(screen: Screen): Page {
    switch (screen) {
      case 'conversation': return this.conversation();
      case 'projects': return this.projects();
      case 'project': return this.project();
      default: return this.home();
    }
  }

  /** The id→page factory: parse a URL and build the typed page for it. The one
   *  cast lives here, contained — each branch constructs a concrete page returned
   *  as Page. A conversation is /chat/<id>, a project /project/<id>, the projects
   *  list /projects, anything else is home. */
  pageForUrl(url: string): Page {
    if (url.includes('/chat/')) return this.conversation();
    if (url.includes('/project/')) return this.project();
    if (url.includes('/projects')) return this.projects();
    return this.home();
  }

  /** Wait for the conversation screen, then reconstitute the ConversationPage.
   *  This is the home→conversation transition (decision #4) — no macro, just
   *  navigate-and-confirm. */
  async waitForConversation(timeoutMs = 30_000): Promise<ConversationPage> {
    const arrived = await this.gateway.waitFor(
      async () => (await this.auto.navigator.detectScreen()) === 'conversation',
      { timeoutMs },
    );
    if (!arrived) throw new Error('Did not land on a conversation page');
    return this.conversation();
  }
}
