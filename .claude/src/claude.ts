///: Claude Desktop — the app you're looking at.
///: This class IS the window. It holds the window and infrastructure only — NO
///: always-on page properties (decision: you reach a page only by navigating, so
///: a back-reference from a page to Claude does not exist). launch() returns the
///: HomePage you land on; from there you navigate, and every navigation returns
///: the next typed Page. Nothing works if the app isn't visible.
///:
///: [The Redesign](../library/reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions) — launch() returns a Page; no god-class page props.
///: [The App](../library/reference-desk/12-the-app.md) — what the app looks like.
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
import { SidebarController } from './controllers/sidebar-controller.ts';
import { ChatListController } from './controllers/chat-list-controller.ts';
import { Navigation } from './pages/navigation.ts';
import { Session } from './session.ts';
import type { Page } from './pages/page.ts';
import type { HomePage } from './pages/home.ts';
import type { ConversationPage } from './pages/conversation.ts';
import type { ProjectPage } from './pages/project.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHORTCUT = resolve(__dirname, 'shortcut', 'claude-dev.lnk');

export class Claude {
  // The window — maximize, minimize, launch, exit, screenshot.
  readonly window: Window;

  // The sidebar — the one panel on every page.
  readonly sidebar: Sidebar;

  // The app's memory of where it is — remembers the current page, resumes it.
  readonly session: Session;

  // Infrastructure — not for scripts. Controllers and gateway live here.
  readonly gateway: Gateway;
  readonly auto: Automation;
  readonly navigator: Navigator;
  readonly diagnostics: Diagnostics;

  // The page factory — turns "we are on screen X" into the typed Page object.
  private readonly nav: Navigation;

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

    this.sidebar = new Sidebar(
      new SidebarController(auto),
      new ChatListController(auto),
      this.gateway,
    );

    // The sidebar and the page factory reference each other (the sidebar is on
    // every page; the factory builds every page). Build the factory, then bind
    // it into the sidebar.
    this.nav = new Navigation(auto, this.gateway, this.sidebar);
    this.sidebar.bind(this.nav);

    this.session = new Session(this);
  }

  /** The URL of the page the app is currently on — the live page id, read fresh
   *  from the tree. The Session compares this against what it remembered. */
  async currentUrl(): Promise<string> {
    return (await this.auto.uia.readUrl()) ?? '';
  }

  // --- Lifecycle ---

  /** Launch (or attach to) Claude Desktop and return the page you land on,
   *  reconstituted and confirmed via detectScreen() (decision #1). The static
   *  return type is HomePage — the common case after a fresh launch / re-home;
   *  if the app resumed on another screen, currentPage() inside reconstitutes
   *  that screen's object, and goHome() is the fallback on mismatch. */
  async launch(): Promise<HomePage> {
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

    // Reconstitute-and-confirm: ensure we are on home, return the HomePage.
    await this.goHome();
    return this.nav.home();
  }

  /** Reconstitute the page for whatever screen the app is actually on now. Used
   *  to resume (decision #1): read the screen, build that page object, confirmed. */
  async currentPage(): Promise<Page> {
    return this.nav.currentPage();
  }

  /** Restore the running app's window WITHOUT going home (un-minimize + focus), so
   *  a resume can read whatever screen we are actually on. Returns false if the
   *  app isn't running or its UIA tree isn't available. */
  attach(): boolean {
    if (!this.window.find()) return false;
    // isForeground() lies when minimized, so check isMinimized() too — otherwise we
    // never restore, and the UIA tree of a minimized window does NOT update (Doug).
    if (this.window.isMinimized() || !this.window.isForeground()) this.window.maximize();
    if (!this.window.waitForUia()) return false;
    this.window.requireForeground();
    return true;
  }

  /** The id→page factory: build the typed page for a URL (the Session uses this to
   *  reconstitute — to BIND — the page we are currently on). The cast is contained
   *  in the factory; this is binding to the live screen, not navigating. */
  pageForUrl(url: string): Page {
    return this.nav.pageForUrl(url);
  }

  /** Resume onto the conversation we are already on — TYPED. Returns the
   *  ConversationPage if the live screen IS a conversation (confirmed against the
   *  tree), else null so the caller navigates. This is the session: if the WRITE
   *  left us on the conversation (minimized), we stay there — no re-walking the
   *  nav tree, and no vague base Page to down-cast. */
  async currentConversation(): Promise<ConversationPage | null> {
    if (!this.attach()) return null;
    const screen = await this.navigator.detectScreen();
    return screen === 'conversation' ? this.nav.conversation() : null;
  }

  /** Resume onto the Claude project page — TYPED. Returns the ProjectPage if the
   *  live screen is a project page, else null. */
  async currentProject(): Promise<ProjectPage | null> {
    if (!this.attach()) return null;
    const screen = await this.navigator.detectScreen();
    return screen === 'project' ? this.nav.project() : null;
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
