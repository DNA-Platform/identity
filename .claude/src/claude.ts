///: Claude Desktop — the app you're looking at.
///: This class IS the window. It has a sidebar (always visible) and
///: the current page's objects. You navigate by clicking things in the
///: sidebar or on the page. Every method is a mouse-and-keyboard action.
///: Nothing works if the app isn't visible.
///:
///: [The App](../library/reference-desk/12-the-app.md) — what the app looks like.
///: [Architecture Patterns](../library/reference-desk/10-architecture-patterns.md) — the class hierarchy.
///: [Reference Desk](../library/reference-desk/.cover.md) — the full documentation.

import { Shell } from './shell.ts';
import { Window } from './window.ts';
import { Gateway } from './gateway.ts';
import { Diagnostics } from './diagnostics.ts';
import { Uia } from './uia.ts';
import { Keyboard } from './keyboard.ts';
import { Navigator } from './navigator.ts';
import type { Screen } from './navigator.ts';
import type { Automation } from './automation.ts';
import { Sidebar } from './components/sidebar.ts';
import { ChatList } from './components/chat-list.ts';
import { Composer } from './components/composer.ts';
import { Message } from './components/composed-message.ts';
import { ModelPicker } from './components/model-picker.ts';
import { ArtifactPanel } from './components/artifact-panel.ts';
import { FilesPane } from './components/files-pane.ts';
import { Home } from './pages/home.ts';
import { Conversation } from './pages/conversation.ts';
import { Projects } from './pages/projects.ts';
import { Project } from './pages/project.ts';
import { ComposerController } from './controllers/composer-controller.ts';
import { MessageController } from './controllers/composed-message-controller.ts';
import { ModelPickerController } from './controllers/model-picker-controller.ts';
import { SidebarController } from './controllers/sidebar-controller.ts';
import { ChatListController } from './controllers/chat-list-controller.ts';
import { ArtifactPanelController } from './controllers/artifact-panel-controller.ts';
import { ConversationController } from './controllers/conversation-controller.ts';
import { ProjectController } from './controllers/project-controller.ts';
import { ProjectsController } from './controllers/projects-controller.ts';
import { ProjectsGrid } from './pages/projects-grid.ts';
import { ProjectConversations } from './pages/project-detail.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHORTCUT = resolve(__dirname, 'shortcut', 'claude-dev.lnk');

export class Claude {
  // The window — maximize, minimize, launch, exit, screenshot.
  readonly window: Window;

  // The sidebar — always visible. Conversations, New Chat, Projects button.
  readonly sidebar: Sidebar;

  // The current page's objects. These read from whatever screen is showing.
  // Calling methods on them when on the wrong screen will fail via requireScreen.
  readonly conversation: Conversation;
  readonly home: Home;
  readonly project: Project;
  readonly projects: Projects;

  // Lists that read from the current screen's ListItem elements.
  readonly projectsGrid: ProjectsGrid;
  readonly projectConversations: ProjectConversations;

  // Infrastructure — not for scripts. Controllers and gateway live here.
  readonly gateway: Gateway;
  readonly auto: Automation;
  readonly navigator: Navigator;
  readonly diagnostics: Diagnostics;
  readonly message: Message;

  constructor() {
    this.window = new Window();
    const shell = new Shell();
    const uia = new Uia(this.window, shell);
    this.diagnostics = new Diagnostics(this.window, uia);
    this.gateway = new Gateway(this.diagnostics, this.window);

    const keyboard = new Keyboard(this.window, shell);
    const navigator = new Navigator(this.gateway, uia, keyboard);
    this.navigator = navigator;

    const auto: Automation = {
      shell,
      window: this.window,
      gateway: this.gateway,
      diagnostics: this.diagnostics,
      uia,
      keyboard,
      navigator,
    };
    this.auto = auto;

    const composer = new Composer(new ComposerController(auto));
    this.message = new Message(new MessageController(auto));
    const modelPicker = new ModelPicker(new ModelPickerController(auto));
    const artifacts = new ArtifactPanel(new ArtifactPanelController(auto));

    this.sidebar = new Sidebar(
      new SidebarController(auto),
      new ChatList(new ChatListController(auto), this.gateway),
    );

    this.home = new Home(composer, this.message, modelPicker);

    this.conversation = new Conversation(
      new ConversationController(auto),
      composer,
      this.message,
      modelPicker,
      artifacts,
    );

    this.projects = new Projects(
      new ProjectsController(auto),
    );

    const filesPane = new FilesPane(auto, this.window);

    this.project = new Project(
      new ProjectController(auto),
      filesPane,
    );

    this.projectsGrid = new ProjectsGrid(auto, this.gateway);
    this.projectConversations = new ProjectConversations(auto, this.gateway);
  }

  // --- Lifecycle ---

  async launch(): Promise<void> {
    if (!this.window.find()) {
      console.log('[claude] Not running. Launching...');
      this.window.launch(SHORTCUT);
      if (!this.window.waitForWindow()) {
        throw new Error('Timeout waiting for Claude window');
      }
    } else {
      console.log(`[claude] Already running (PID ${this.window.pid})`);
    }

    if (!this.window.isForeground()) {
      this.window.maximize();
    }

    if (!this.window.waitForUia()) {
      console.log('[claude] UIA not available. Restarting...');
      this.window.close();
      this.window.launch(SHORTCUT);
      if (!this.window.waitForWindow()) {
        throw new Error('Timeout waiting for Claude window after restart');
      }
      this.window.focus();
      this.window.maximize();
      if (!this.window.waitForUia()) {
        throw new Error('UIA tree not available even after restart');
      }
    }

    try {
      await this.sidebar.switchToChat();
    } catch {}

    this.window.requireForeground();
    console.log(`[claude] Ready (PID ${this.window.pid}, foreground verified)`);
  }

  async exit(): Promise<void> {
    this.auto.shell.close();
    this.window.close();
    this.navigator.screen = 'unknown';
    console.log('[claude] Closed');
  }

  // --- Recovery (keyboard actions) ---

  async dismissDialogs(): Promise<void> {
    await this.auto.keyboard.sendKeys('{ESCAPE}');
    await new Promise(r => setTimeout(r, 300));
    await this.auto.keyboard.sendKeys('{ESCAPE}');
    await new Promise(r => setTimeout(r, 300));
  }

  async goHome(): Promise<void> {
    await this.navigator.goHome();
    await this.sidebar.refresh();
  }

  async newChat(): Promise<void> {
    await this.dismissDialogs();
    await this.goHome();
    try {
      await this.auto.uia.invokeByName('New chat');
      await new Promise(r => setTimeout(r, 500));
    } catch {}
    const url = await this.auto.uia.readUrl() ?? '';
    if (url.includes('/chat/')) {
      throw new Error('Failed to navigate to fresh chat. URL still has conversation ID: ' + url);
    }
  }

  // --- Screen detection (for callers who need to know where they are) ---

  get screen(): Screen {
    return this.navigator.screen;
  }

  async detectScreen(): Promise<Screen> {
    return this.navigator.detectScreen();
  }
}
