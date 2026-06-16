// Claude — the application.
// See: library/claude-driver/
// See: library/..team/claude/.perspective/

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
import { Session, type SessionOptions } from './session.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHORTCUT = resolve(__dirname, 'shortcut', 'claude-dev.lnk');

export class Claude {
  readonly window: Window;
  readonly diagnostics: Diagnostics;
  readonly gateway: Gateway;
  readonly auto: Automation;
  readonly navigator: Navigator;
  readonly sidebar: Sidebar;
  readonly message: Message;
  readonly home: Home;
  readonly conversation: Conversation;
  readonly projects: Projects;
  readonly project: Project;
  readonly sessions: Session[] = [];

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
      new ChatList(new ChatListController(auto)),
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
  }

  // --- Lifecycle ---

  async launch(): Promise<void> {
    if (!this.window.find()) {
      // Not running — start fresh
      console.log('[claude] Not running. Launching...');
      this.window.launch(SHORTCUT);
      if (!this.window.waitForWindow()) {
        throw new Error('Timeout waiting for Claude window');
      }
    } else {
      console.log(`[claude] Already running (PID ${this.window.pid})`);
    }

    // Bring to front if minimized or behind another app.
    // maximize() handles both restore and foreground — no separate focus() needed.
    if (!this.window.isForeground()) {
      this.window.maximize();
    }

    // Wait for UIA tree — covers both fresh launch and restored window
    if (!this.window.waitForUia()) {
      // Last resort: close and restart
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

    // Ensure Chat tab
    try {
      await this.sidebar.switchToChat();
    } catch {
      // May fail if already on Chat — that's fine
    }

    this.window.requireForeground();
    console.log(`[claude] Ready (PID ${this.window.pid}, foreground verified)`);
  }

  async exit(): Promise<void> {
    this.auto.shell.close();
    this.window.close();
    this.navigator.screen = 'unknown';
    console.log('[claude] Closed');
  }

  // --- Screen ---

  get screen(): Screen {
    return this.navigator.screen;
  }

  async detectScreen(): Promise<Screen> {
    return this.navigator.detectScreen();
  }

  // --- Refresh ---

  async refresh(): Promise<void> {
    await this.navigator.detectScreen();
    await this.sidebar.refresh();
  }

  async dismissDialogs(): Promise<void> {
    await this.auto.keyboard.sendKeys('{ESCAPE}');
    await new Promise(r => setTimeout(r, 300));
    await this.auto.keyboard.sendKeys('{ESCAPE}');
    await new Promise(r => setTimeout(r, 300));
  }

  // --- Navigation (cross-view transitions) ---

  async goHome(): Promise<void> {
    await this.navigator.goHome();
    await this.sidebar.refresh();
  }

  async openChat(title: string): Promise<void> {
    await this.sidebar.chats.open(title);
    await this.conversation.refreshMetadata();
  }

  async openChatAt(index: number): Promise<void> {
    const items = this.sidebar.chats.items;
    if (index < 0 || index >= items.length) {
      throw new RangeError(`Chat index ${index} out of range (${items.length} items)`);
    }
    await this.openChat(items[index].title);
  }

  async openProjects(): Promise<void> {
    this.window.maximize();
    await this.sidebar.openProjects();
    await this.projects.refresh();
  }

  async openProject(name: string): Promise<void> {
    if (this.screen !== 'projects') {
      await this.openProjects();
    }
    await this.projects.open(name);
    this.project.resetData();
    await this.project.refresh();
  }

  async openProjectAt(index: number): Promise<void> {
    this.window.maximize();
    await this.projects.openAt(index);
    this.project.resetData();
    await this.project.refresh();
  }

  // --- Messaging ---

  async compose(...parts: string[]): Promise<void> {
    const combined = parts.join('\n\n');
    await this.conversation.composer.compose(combined);
  }

  async send(responseTimeoutMs = 120_000): Promise<void> {
    const wasHome = this.screen === 'home';

    this.conversation.composer.isSending = true;
    try {
      await this.conversation.composer.send();

      const nowOn = await this.navigator.detectScreen();

      if (wasHome && nowOn === 'conversation') {
        await this.sidebar.refresh();
      }

      this.conversation.isStreaming = true;
      await this.conversation.waitForResponse(responseTimeoutMs);
    } catch (e) {
      this.conversation.hasError = true;
      throw e;
    } finally {
      this.conversation.composer.isSending = false;
    }
  }

  async say(text: string, responseTimeoutMs = 120_000): Promise<string> {
    await this.compose(text);
    await this.send(responseTimeoutMs);
    return this.conversation.readLastResponse();
  }

  async sendMessage(text: string, waitForResponse = true, responseTimeoutMs = 120_000): Promise<void> {
    const wasHome = this.screen === 'home';

    this.conversation.composer.isSending = true;
    try {
      await this.conversation.composer.sendMessage(text);

      const nowOn = await this.navigator.detectScreen();

      if (wasHome && nowOn === 'conversation') {
        await this.sidebar.refresh();
      }

      if (waitForResponse) {
        this.conversation.isStreaming = true;
        await this.conversation.waitForResponse(responseTimeoutMs);
      }
    } catch (e) {
      this.conversation.hasError = true;
      throw e;
    } finally {
      this.conversation.composer.isSending = false;
    }
  }

  async conversationTurn(message: string, responseTimeoutMs = 120_000): Promise<string> {
    await this.sendMessage(message, true, responseTimeoutMs);
    return this.conversation.readLastResponse();
  }

  // --- Conversation management ---

  async renameConversation(newTitle: string): Promise<void> {
    await this.conversation.rename(newTitle);
  }

  async deleteConversation(): Promise<void> {
    await this.conversation.delete();
    await this.navigator.detectScreen();
    await this.sidebar.refresh();
  }

  async deleteChat(title: string): Promise<void> {
    await this.sidebar.chats.delete(title);
  }

  async renameChat(title: string, newTitle: string): Promise<void> {
    await this.sidebar.chats.rename(title, newTitle);
  }

  async pinChat(title: string): Promise<void> {
    await this.sidebar.chats.pin(title);
  }

  // --- Recovery ---

  async resetToHome(): Promise<void> {
    this.window.maximize();
    await this.sidebar.switchToChat();
    await this.navigator.resetToHome();
    await this.sidebar.refresh();
  }

  // --- Sessions ---

  async startSession(options: SessionOptions = {}): Promise<Session> {
    const session = new Session(this, options);
    this.sessions.push(session);
    await session.start();
    return session;
  }

  get activeSessions(): Session[] {
    return this.sessions.filter(s => !s.ended);
  }

  // --- Window ---

  async maximize(): Promise<void> {
    this.window.maximize();
  }

  async minimize(): Promise<void> {
    this.window.minimize();
  }

  async screenshot(path: string): Promise<string> {
    return this.window.screenshot(path);
  }
}
