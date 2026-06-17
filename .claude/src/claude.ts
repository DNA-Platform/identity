///: Claude — the application. Single entry point for all automation.
///: Wires all [layers](../library/reference-desk/02-01-the-architecture--layers.md) in the constructor.
///: Scripts import this class and never reach below it into controllers or UIA.
///:
///: Convenience methods use the [object chain](../library/reference-desk/10-architecture-patterns.md):
///: refresh → find → menu → action. Each step returns a verified View object.
///:
///: [Coding Philosophy](../library/reference-desk/05-coding-philosophy.md) — scripts should read like English.
///: [Reference Desk](../library/reference-desk/.cover.md) — the book that documents this codebase.

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

  isOnConversation(conversationId: string): boolean {
    if (!conversationId) return false;
    const url = this.conversation.url;
    return url.includes(conversationId);
  }

  async checkConversation(conversationId: string): Promise<boolean> {
    if (!conversationId) return false;
    const url = await this.auto.uia.readUrl() ?? '';
    return url.includes(conversationId);
  }

  async openConversationById(conversationId: string): Promise<void> {
    if (await this.checkConversation(conversationId)) return;
    await this.sidebar.refresh();
    for (const item of this.sidebar.chats.items) {
      await this.openChat(item.title);
      if (await this.checkConversation(conversationId)) return;
    }
    throw new Error('Conversation ' + conversationId + ' not found in sidebar');
  }

  async openChat(title: string): Promise<void> {
    // Try direct open first — works if conversation is visible in sidebar
    const direct = this.sidebar.chats.find(title);
    if (direct) {
      await this.sidebar.chats.open(title);
    } else {
      // Search the sidebar to find buried conversations
      await this.sidebar.search(title);
      const found = this.sidebar.chats.find(title);
      if (!found) throw new Error(`Chat "${title}" not found even after search`);
      await this.sidebar.chats.open(found.title);
    }
    await this.conversation.scrollToBottom();
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

  async waitForUserToStopTyping(): Promise<void> {
    // Check if Doug is typing. If he is, wait for him to stop.
    // Three consecutive identical reads = he stopped.
    const draft = await this.conversation.composer.readDraft();
    if (!draft) return; // Nothing in the composer

    let prev = draft;
    let stableCount = 0;
    while (stableCount < 3) {
      const current = await this.conversation.composer.readDraft();
      if (current === prev) {
        stableCount++;
      } else {
        stableCount = 0;
        prev = current;
      }
    }

    // Doug stopped typing. Clear the draft.
    if (prev) {
      await this.conversation.composer.clear();
    }
  }

  async compose(...parts: string[]): Promise<void> {
    try { await this.conversation.scrollToBottom(); } catch {}
    await this.waitForUserToStopTyping();
    const combined = parts.join('\n\n');
    await this.conversation.composer.compose(combined);
  }

  async sendAndForget(): Promise<void> {
    const wasHome = this.screen === 'home';
    this.conversation.composer.isSending = true;
    try {
      await this.conversation.composer.send();
      const nowOn = await this.navigator.detectScreen();
      if (wasHome && nowOn === 'conversation') {
        await this.sidebar.refresh();
      }
      // Confirm Desktop started processing — poll for streaming indicator.
      // If it doesn't appear, the message wasn't received.
      const started = await this.gateway.waitFor(
        () => this.conversation.checkStreaming(),
        { timeoutMs: 15_000, pollIntervalMs: 500 },
      );
      if (!started) {
        throw new Error('Desktop did not start processing. Message may not have been received.');
      }
    } finally {
      this.conversation.composer.isSending = false;
    }
  }

  async send(responseTimeoutMs = 120_000): Promise<void> {
    const wasHome = this.screen === 'home';

    // Ensure at bottom before sending — the UI must render from the latest position
    await this.conversation.scrollToBottom();

    this.conversation.composer.isSending = true;
    try {
      await this.conversation.composer.send();

      const nowOn = await this.navigator.detectScreen();

      if (wasHome && nowOn === 'conversation') {
        await this.sidebar.refresh();
      }

      // Scroll to bottom again after send — Desktop may have jumped the view
      await this.conversation.scrollToBottom();

      this.conversation.isStreaming = true;
      await this.conversation.waitForResponse(responseTimeoutMs);
    } catch (e) {
      this.conversation.hasError = true;
      throw e;
    } finally {
      this.conversation.composer.isSending = false;
    }
  }

  async sendAsync(): Promise<void> {
    // Scroll, send, scroll. Returns immediately — never waits for response.
    // Check conversation.isStreaming and conversation.readLastResponse() after.
    await this.conversation.scrollToBottom();

    this.conversation.composer.isSending = true;
    try {
      await this.conversation.composer.send();

      const wasHome = this.screen === 'home';
      const nowOn = await this.navigator.detectScreen();
      if (wasHome && nowOn === 'conversation') {
        await this.sidebar.refresh();
      }

      await this.conversation.scrollToBottom();
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
    await this.sidebar.refresh();
    const item = this.sidebar.chats.find(title);
    if (!item) throw new Error(`Chat "${title}" not found`);
    const menu = await item.menu();
    await menu.delete();
  }

  async renameChat(title: string, newTitle: string): Promise<void> {
    await this.sidebar.refresh();
    const item = this.sidebar.chats.find(title);
    if (!item) throw new Error(`Chat "${title}" not found`);
    const menu = await item.menu();
    await menu.rename(newTitle);
  }

  async pinChat(title: string): Promise<void> {
    await this.sidebar.refresh();
    const item = this.sidebar.chats.find(title);
    if (!item) throw new Error(`Chat "${title}" not found`);
    const menu = await item.menu();
    await menu.pin();
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
